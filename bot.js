var dischord = require('discord.js');

var bot = new dischord.Client();

bot.loginWithToken(token, function (token, err) {
    if(err){
        console.log(err);
    }

    bot.on("message", function(message) {
        var input = message.content;
        var stripeCmd = input.substr('8');
        var inputCheck = input.startsWith('!search');

        if(inputCheck) {
            bot.reply(message, "http://www.ishtar-collective.net/search/" + encodeURIComponent(stripeCmd));
        }

    });
});