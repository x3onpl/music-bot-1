'use strict';

const DefaultEmbed = require('./DefaultEmbed');

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
