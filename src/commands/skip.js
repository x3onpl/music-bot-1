'use strict';

/**
 * Module dependencies.
 */
const SkipSongEmbed = require('../embeds/SkipSongEmbed');
const ErrorEmbed = require('../embeds/ErrorEmbed');

/**
 * Skip command.
 */
const skip = {
    name: 'skip',
    description: 'Skip the currently played song',
	execute(message, arg, musicBot) {
        const serverQueue = musicBot.queue.get(message.guild.id);

		if (!message.member.voiceChannel)
			return message.channel.send(new ErrorEmbed('You have to be in a voice channel to stop the music!'));
		if (!serverQueue)
			return message.channel.send(new ErrorEmbed('There is no song that I could skip!'));
		message.channel.send(new SkipSongEmbed(serverQueue.songs[0]));
		serverQueue.connection.dispatcher.end();
	}
}

/**
 * Module exports.
 */
module.exports = skip;
