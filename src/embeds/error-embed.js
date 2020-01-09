'use strict';

const DefaultEmbed = require('./default-embed');

/**
 * Error embed.
 *
 * @class
 * @extends DefaultEmbed
 */
class ErrorEmbed extends DefaultEmbed {
	constructor(errMsg) {
		super();
		this.setColor('#FF0000');
		this.setTitle(':no_entry_sign: Error');
		this.setDescription(errMsg);
	}
}

module.exports = ErrorEmbed;
