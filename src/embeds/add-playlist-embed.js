'use strict';

const DefaultEmbed = require('./default-embed');

/**
 * Add playlist embed.
 *
 * @class
 * @extends DefaultEmbed
 */
class AddPlaylistEmbed extends DefaultEmbed {
	constructor(playlist) {
		super(playlist);
		this.setTitle(':hourglass: Added playlist to the queue');
		this.addField('Title', `\`${playlist.title}\``);
		this.addField('Author', `\`${playlist.author}\``);
		this.addField('Link', playlist.url);
		this.setImage(playlist.thumbnailUrl);
	}
}

module.exports = AddPlaylistEmbed;
