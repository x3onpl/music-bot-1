'use strict';

/**
 * Module dependencies.
 */
const ytdl = require('ytdl-core');
const { YouTube } = require('better-youtube-api');

const PlaySongEmbed = require('../embeds/PlaySongEmbed');
const AddSongEmbed = require('../embeds/AddSongEmbed');
const ErrorEmbed = require('../embeds/ErrorEmbed');

/**
 * Play command.
 */
const play = {
    name: 'play',
    description: 'Play the song given in argument or add it to the queue',
	async execute(message, arg, musicBot) {
		const voiceChannel = message.member.voiceChannel;
		if (!voiceChannel) return message.channel.send(new ErrorEmbed('You need to be in a voice channel to play music!'));

		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
			return message.channel.send(new ErrorEmbed('I need the permissions to join and speak in your voice channel!'));
		}

		const youtube = new YouTube(musicBot.googleKey);

		let songInfo = null;

		if (ytdl.validateURL(arg)) {
			songInfo = await ytdl.getInfo(arg);
		} else {
			const infos = await youtube.searchVideos(arg, 1);
			const videoUrl = infos.results[0].url;
			songInfo = await ytdl.getInfo(videoUrl);
		}
		
		if (!songInfo) {
			message.channel.send(new ErrorEmbed('This song is restricted or couldn\'t be found!'));
			return;
		}
		const song = {
			title: songInfo.title,
			url: songInfo.video_url,
			thumbnailUrl: songInfo.player_response.videoDetails.thumbnail.thumbnails.pop().url,
			duration: new Date(songInfo.length_seconds * 1000).toISOString().substr(11, 8)
        };

        const serverQueue = musicBot.queue.get(message.guild.id);

		if (!serverQueue) {
			const newQueue = {
				voiceChannel: voiceChannel,
				connection: null,
				songs: [],
				volume: 0.1
			};

			musicBot.queue.set(message.guild.id, newQueue);

			newQueue.songs.push(song);

			try {
				newQueue.connection = await voiceChannel.join();
				this.play(message, newQueue, musicBot.queue);
			} catch (err) {
				console.log(err);
				queue.delete(message.guild.id);
				return message.channel.send(new ErrorEmbed('An error occured!'));
			}
		} else {
			serverQueue.songs.push(song);
			return message.channel.send(new AddSongEmbed(song));
		}
	},
	play(message, serverQueue, queue) {
		const song = serverQueue.songs[0];

		if (!song) {
			serverQueue.voiceChannel.leave();
			queue.delete(message.guild.id);
			return;
		}

		const dispatcher = serverQueue.connection.playStream(ytdl(song.url, {
			filter: 'audioonly',
			quality: 'highestaudio',
			highWaterMark: 1<<25
		}))
			.on('start', () => {
				console.log('Music started!');
				message.channel.send(new PlaySongEmbed(song));
			})
			.on('end', () => {
				console.log('Music ended!');
				serverQueue.songs.shift();
				this.play(message, serverQueue, queue);
			})
			.on('error', error => {
				console.error(error);
			});
        dispatcher.setVolumeLogarithmic(serverQueue.volume);
	}
}

/**
 * Module exports.
 */
module.exports = play;
