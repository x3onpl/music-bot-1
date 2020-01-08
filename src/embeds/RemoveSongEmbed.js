'use strict';

const PlaySongEmbed = require('./PlaySongEmbed');

/**
 * Remove song embed.
 * 
 * @class
 * @extends PlaySongEmbed
 */
class RemoveSongEmbed extends PlaySongEmbed {
    constructor(song) {
        super(song);
        this.setTitle(':scissors: Removed');
    }
}

module.exports = RemoveSongEmbed;
