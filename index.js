var testReply = [
                  ".",
                  "Hey",
                  "HEY!",
                  "Hi there",
                  "Woh, I didn't realise I'd be talking to Justin Timberlake today",
                  "Hey everyone!",
                  "Great Crowd",
                  "I don't care about that. I just wanted to confirm what you're saying?",
                  "So you're saying that the way you convey a message is important...",
                  "..More important that people realise sometimes?",
                  "and that people will relate to a story more if it's told in an interesting way?",
                  "They'll pay more attention if the way it's told is engaging?",
                  "and if the aim of our work is to get people's attention, we should factor that in.",
                  "So software developers should design more for people like you, and less for people like me?",
                  "That's pretty hurtful..",
                  "http://thumbs.dreamstime.com/x/robot-middle-finger-gesture-2241626.jpg",
                  "https://s-media-cache-ak0.pinimg.com/736x/d0/34/5a/d0345a10a0c10440776fef5ec7d550bf.jpg",
                  "Laterzz, I'm gonna go work on my moves!",
                  "https://media.giphy.com/media/A1rr58XcHIFby/giphy.gif",
                  "Do you think people will remember me?",
                  "That's nice.",
                  "Bye",
                  "kiloBye",
                  "megaBye",
                  "gigaBye",
                  "teraBye",
                  "zetaBye??",
                  "Byeeeeeeeeee",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  ".",
                  "."

            ];

var replyCounter = 0;


var Botkit = require('botkit')

// Expect a SLACK_TOKEN environment variable
var slackToken = process.env.SLACK_TOKEN
if (!slackToken) {
  console.error('SLACK_TOKEN is required!')
  process.exit(1)
}

var controller = Botkit.slackbot()
var bot = controller.spawn({
  token: slackToken
})

bot.startRTM(function (err, bot, payload) {
  if (err) {
    throw new Error('Could not connect to Slack')
  }
})

controller.on('bot_channel_join', function (bot, message) {
  bot.reply(message, "I'm here!")
})

controller.hears(['hello', 'hi'], ['direct_mention'], function (bot, message) {
  bot.reply(message, 'https://media.giphy.com/media/A1rr58XcHIFby/giphy.gif')
})


function myFunction() {
    return "Hi, you're looking pretty fine today!";
    // replyCounter += 1;
    // return testReply[replyCounter];                // Function returns the product of a and b
}

controller.hears(['.*'], ['direct_message'], function (bot, message) {
  var testReply = myFunction();
  bot.reply(message, testReply)
})

// controller.hears(['weather in'], ['direct_message'], function (bot, message) {
//   bot.reply(message, message.text)
// })

controller.hears('.*', ['mention'], function (bot, message) {
  bot.reply(message, ':heart:' + message.user + ':heart:')
})



controller.hears('help', ['direct_message', 'direct_mention'], function (bot, message) {
  var help = 'I will respond to the following messages: \n' +
      '`bot hi` for a simple message.\n' +
      '`bot attachment` to see a Slack attachment message.\n' +
      '`@<your bot\'s name>` to demonstrate detecting a mention.\n' +
      '`bot help` to see this again.'
  bot.reply(message, help)
})

controller.hears(['attachment'], ['direct_message', 'direct_mention'], function (bot, message) {
  var text = 'Beep Beep Boop is a ridiculously simple hosting platform for your Slackbots.'
  var attachments = [{
    fallback: text,
    pretext: 'We bring bots to life. :sunglasses: :thumbsup:',
    title: 'Host, deploy and share your bot in seconds.',
    image_url: 'https://storage.googleapis.com/beepboophq/_assets/bot-1.22f6fb.png',
    title_link: 'https://beepboophq.com/',
    text: text,
    color: '#7CD197'
  }]

  bot.reply(message, {
    attachments: attachments
  }, function (err, resp) {
    console.log(err, resp)
  })
})

controller.hears('.*', ['direct_message', 'direct_mention'], function (bot, message) {
  bot.reply(message, 'https://media.giphy.com/media/A1rr58XcHIFby/giphy.gif')

})
