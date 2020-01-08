'use strict';

/**
 * Module dependencies.
 */
const CurrentSongEmbed = require('../embeds/CurrentSongEmbed');
const ErrorEmbed = require('../embeds/ErrorEmbed');

/**
 * Current command.
 */
const current = {
    name: 'current',
    description: 'Display the currently played song',
	async execute(message, arg, musicBot) {
        const serverQueue = musicBot.queue.get(message.guild.id);

        if (!serverQueue)
	        return message.channel.send(new ErrorEmbed('There is no song currently playing!'));

	    message.channel.send(new CurrentSongEmbed(serverQueue.songs[0]));
    }
}

/**
 * Module exports.
 */
module.exports = current;
