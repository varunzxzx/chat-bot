var express = require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');

var conversation = watson.conversation({
    username: '89494cfb-1fd1-4a20-b404-b1bf2d14bd04',
    password: 'H35CNWL6bRRm',
    version: 'v1',
    version_date: "2017-05-26"
});

/* GET users listing. */
router.post('/', function(req, res, next) {
  var str;
    conversation.message({
        workspace_id: 'fd44781d-a4d1-4beb-a0b5-e64e1255d8ab',
        input: {'text': req.body.data}
    },  function(err, response) {
        if (err) {
            console.log('error:', err);
            res.status(400).json({success: false, msg: "Failed"})
        }
        else {
            res.status(200).json({text: response.output.text});
        }
    });
});

module.exports = router;