'use strict';

/**
 * Module dependencies.
 */
const ytpl = require('ytpl');

const AddPlaylistEmbed = require('../embeds/add-playlist-embed');
const ErrorEmbed = require('../embeds/error-embed');

const playSong = require('../audio/play-song');

/**
 * Play command.
 */
const playlist = {
	name: 'playlist',
	description: 'Add a playlist to the queue',
	async execute(message, arg, musicBot) {
		const {voiceChannel} = message.member;
		if (!voiceChannel) {
			return message.channel.send(new ErrorEmbed('You need to be in a voice channel to play music!'));
		}

		const permissions = voiceChannel.permissionsFor(message.client.user);
		if (!permissions.has('CONNECT') || !permissions.has('SPEAK')) {
			return message.channel.send(new ErrorEmbed('I need the permissions to join and speak in your voice channel!'));
		}

		let playlistInfo = null;

		if (ytpl.validateURL(arg)) {
			playlistInfo = await ytpl(arg);
		} else {
			return message.channel.send(new ErrorEmbed('This song is restricted or couldn\'t be found!'));
		}

		const playlist = {
			title: playlistInfo.title,
			url: playlistInfo.url,
			author: playlistInfo.author.name,
			thumbnailUrl: playlistInfo.items[0].thumbnail
		};

		const songs = playlistInfo.items.map(video => {
			return {
				title: video.title,
				url: video.url,
				author: video.author.name,
				thumbnailUrl: video.thumbnail,
				duration: video.duration
			};
		});

		const serverQueue = musicBot.queue.get(message.guild.id);

		if (serverQueue === undefined) {
			const newQueue = {
				voiceChannel,
				connection: null,
				songs: [],
				volume: 0.15
			};

			songs.forEach(song => newQueue.songs.push(song));
			musicBot.queue.set(message.guild.id, newQueue);

			message.channel.send(new AddPlaylistEmbed(playlist));

			try {
				newQueue.connection = await voiceChannel.join();
				playSong(message, newQueue, musicBot.queue);
			} catch (error) {
				console.log(error);
				musicBot.queue.delete(message.guild.id);
				message.channel.send(new ErrorEmbed('An error occured!'));
			}
		} else {
			songs.forEach(song => serverQueue.songs.push(song));
			message.channel.send(new AddPlaylistEmbed(playlist));
		}
	}
};

/**
 * Module exports.
 */
module.exports = playlist;
