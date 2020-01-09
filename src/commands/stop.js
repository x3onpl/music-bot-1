'use strict';

/**
 * Module dependencies.
 */
const StopQueueEmbed = require('../embeds/stop-queue-embed');
const ErrorEmbed = require('../embeds/error-embed');

/**
 * Stop command.
 */
const stop = {
	name: 'stop',
	description: 'Stop the currently played song and clear the queue',
	execute(message, arg, musicBot) {
		const serverQueue = musicBot.queue.get(message.guild.id);

		if (!serverQueue) {
			return message.channel.send(new ErrorEmbed('There\'s no song currently played or in queue'));
		}

		if (!message.member.voiceChannel) {
			return message.channel.send(new ErrorEmbed('You have to be in a voice channel to stop the music!'));
		}

		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end();
		message.channel.send(new StopQueueEmbed());
	}
};

/**
 * Module exports.
 */
module.exports = stop;
