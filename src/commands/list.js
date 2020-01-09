'use strict';

/**
 * Module dependencies.
 */
const ListQueueEmbed = require('../embeds/list-queue-embed');

/**
 * Help command.
 */
const list = {
	name: 'list',
	description: 'Display each song title in queue',
	execute(message, arg, musicBot) {
		const serverQueue = musicBot.queue.get(message.guild.id);

		message.channel.send(new ListQueueEmbed(serverQueue));
	}
};

/**
 * Module exports.
 */
module.exports = list;
