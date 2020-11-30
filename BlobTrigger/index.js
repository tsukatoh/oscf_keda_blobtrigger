module.exports = async function (context, myBlob) {
    var request = require('request');

    var options = {
        url: process.env["SlackWebhookURL"],
        form: 'payload={"text": "ファイルがアップロードされました！"}',
        json :true
    };

    request.post(options, function(error, response, body){
        if (!error && response.statusCode == 200) {
            context.log('run!');
        } else {
            context.log('error: '+ response.statusCode + body);
        }
    });

    context.done();
};