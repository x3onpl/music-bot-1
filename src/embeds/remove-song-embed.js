'use strict';

const PlaySongEmbed = require('./play-song-embed');

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
