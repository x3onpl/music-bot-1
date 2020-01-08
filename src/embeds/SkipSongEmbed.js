'use strict';

const PlaySongEmbed = require('./PlaySongEmbed');

/**
 * Skip song embed.
 * 
 * @class
 * @extends PlaySongEmbed
 */
class SkipSongEmbed extends PlaySongEmbed {
    constructor(song) {
        super(song);
        this.setTitle(':track_next: Skipped');
    }
}

module.exports = SkipSongEmbed;
