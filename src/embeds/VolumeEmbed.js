'use strict';

const DefaultEmbed = require('./DefaultEmbed');

/**
 * Volume embed.
 * 
 * @class
 * @extends DefaultEmbed
 */
class VolumeEmbed extends DefaultEmbed {
    constructor(previousVolume, newVolume) {
        super();
        this.setTitle(':speaker: Volume');
        this.setDescription(`Changed from \`${previousVolume}\` to \`${newVolume}\``);
    }
}

module.exports = VolumeEmbed;
