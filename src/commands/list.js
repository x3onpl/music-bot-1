'use strict';

/**
 * Module dependencies.
 */
const fs = require('fs');
const ListQueueEmbed = require('../embeds/ListQueueEmbed');

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
}

/**
 * Module exports.
 */
module.exports = list;
