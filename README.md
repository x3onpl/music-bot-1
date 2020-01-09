# Music Bot

> A simple [Discord.js](https://github.com/discordjs/discord.js) music bot with lot of features

## Commands

- `!!play (name|url)`: Play the song given in argument or add it to the queue
- `!!current`: Display the currently played song
- `!!skip`: Skip the currently played song
- `!!stop`: Stop the currently played song and clear the queue
- `!!list`: Display each song title in queue
- `!!remove (index)`: Remove from the queue the song at position index
- `!!volume (0-100)`: Change music volume
- `!!help`: Display each commands and their description

## Installing

_Make sure you have the latest version of FFMPEG installed localy!_

* `npm install @addict67/music-bot`

MusicBot is a class, the constructor takes an object which needs:

- `discordToken`: Your Discord bot token
- `googleKey`: Your Google API key

_You can add `prefix` to change the default one which is `!!`_

```javascript
const MusicBot = require('@addict67/music-bot');

// Instantiate the object
const musicBot = new MusicBot({
  discordToken: 'xxx',
  googleKey: 'xxx',
  prefix: '!'
});

// Start the bot
musicBot.start();
```

## Contributing

1. [Fork this project](https://github.com/addict67/music-bot/fork)
2. Clone it: `git clone https://github.com/your-username/music-bot.git`
3. Create your feature branch: `git checkout -b my-new-feature`
4. Test it before committing anything: `npm test`
5. Commit your changes: `git commit -am 'Add some feature'`
6. Push to the branch: `git push origin my-new-feature`
7. Submit your pull request
8. Enjoy 😀

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE) file for details
