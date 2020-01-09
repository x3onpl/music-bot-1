'use strict';

const DefaultEmbed = require('./default-embed');

/**
 * Stop queue embed.
 *
 * @class
 * @extends DefaultEmbed
 */
class StopQueueEmbed extends DefaultEmbed {
	constructor() {
		super();
		this.setTitle(':eject: Cleared queue!');
	}
}

module.exports = StopQueueEmbed;
