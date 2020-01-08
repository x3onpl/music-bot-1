'use strict';

const DefaultEmbed = require('./DefaultEmbed');

/**
 * Play song embed.
 * 
 * @class
 * @extends DefaultEmbed
 */
class PlaySongEmbed extends DefaultEmbed {
    constructor(song) {
        super();

        this.setTitle(':notes: Now playing');
        this.addField('Title', `\`${song.title}\``);
        this.addField('Duration', `\`${song.duration}\``);
        this.addField('Link', song.url);
        this.setImage(song.thumbnailUrl);
    }
}

module.exports = PlaySongEmbed;
