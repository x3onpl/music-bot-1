'use strict';

const DefaultEmbed = require('./default-embed');

/**
 * Play song embed.
 *
 * @class
 * @extends DefaultEmbed
 */
class ListQueueEmbed extends DefaultEmbed {
	constructor(serverQueue) {
		super();
		if (serverQueue === undefined) {
			this.setTitle(':asterisk: The queue is currently empty!');
		} else {
			for (let i = 1; i < serverQueue.songs.length; i++) {
				this.addField(`#${i}`, `\`${serverQueue.songs[i].title}\``);
			}
		}
	}
}

module.exports = ListQueueEmbed;
