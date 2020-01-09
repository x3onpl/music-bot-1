'use strict';

const PlaySongEmbed = require('./play-song-embed');

/**
 * Add song embed.
 *
 * @class
 * @extends PlaySongEmbed
 */
class AddSongEmbed extends PlaySongEmbed {
	constructor(song) {
		super(song);
		this.setTitle(':hourglass: Added to queue');
	}
}

module.exports = AddSongEmbed;
