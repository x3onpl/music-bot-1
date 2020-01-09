'use strict';

const PlaySongEmbed = require('./play-song-embed');

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
