'use strict';

/**
 * Module dependencies.
 */
const fs = require('fs');
const HelpEmbed = require('../embeds/HelpEmbed');

/**
 * Help command.
 */
const help = {
    name: 'help',
    description: 'Display each commands and their description',
	execute(message, arg, musicBot) {
        const commandFiles = fs.readdirSync(__dirname).filter(file => file.endsWith('.js'));

        message.channel.send(new HelpEmbed(commandFiles, musicBot.prefix));
	}
}

/**
 * Module exports.
 */
module.exports = help;
