var express = require('express');
var router = express.Router();
var watson = require('watson-developer-cloud');

var conversation = watson.conversation({
    username: '89494cfb-1fd1-4a20-b404-b1bf2d14bd04',
    password: 'H35CNWL6bRRm',
    version: 'v1',
    version_date: "2017-05-26"
});


let queries = {
    "Legal Wing": [],
    "Finance Wing": [],
    "Technical/Administrative Wing": [],
    "IT Wing": []
};

/* GET users listing. */
router.post('/', function (req, res, next) {
    var str;
    conversation.message({
        workspace_id: 'fd44781d-a4d1-4beb-a0b5-e64e1255d8ab',
        input: {'text': req.body.data}
    }, function (err, response) {
        if (err) {
            console.log('error:', err);
            return res.status(400).json({success: false, msg: "Failed"})
        }

        if (response.output.text.contains("query has been forwarded")) {
            return res.status(200).json({success: true, email: true, text: response.output.text});
        }
        return res.status(200).json({success: true, email: false, text: response.output.text});
    });
});

router.post('/submitQuery', function (req, res, next) {
    let obj = {
        query: req.body.query,
        email: req.body.email,
    };
    let response = req.body.response;
    let dep = "";

    if (response.indexOf("Legal Wing") !== -1) {
        dep = "Legal Wing";
    } else if (response.indexOf("Finance Wing") !== -1) {
        dep = "Finance Wing";
    } else if (response.indexOf("IT Wing") !== -1) {
        dep = "IT Wing";
    } else {
        dep = "Technical/Administrative Wing";
    }

    queries[resp].push(obj);
    return res.status(200).json({success: true, email: false, text: response});
});

module.exports = router;