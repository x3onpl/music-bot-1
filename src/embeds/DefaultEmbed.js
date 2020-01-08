'use strict';

const Discord = require('discord.js');
/**
* Default embed.
* 
* @class
* @extends Discord.RichEmbed
*/
class DefaultEmbed extends Discord.RichEmbed {
    constructor() {
        super({
            timestamp: Date.now()
        });
    }
}

module.exports = DefaultEmbed;
