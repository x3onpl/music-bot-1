'use strict';

const PlaySongEmbed = require('./PlaySongEmbed');

/**
 * Current song embed.
 * 
 * @class
 * @extends PlaySongEmbed
 */
class CurrentSongEmbed extends PlaySongEmbed {
    constructor(song) {
        super(song);
        this.setTitle(':notes: Currently playing');
    }
}

module.exports = CurrentSongEmbed;
