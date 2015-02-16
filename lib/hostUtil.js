var _ = require('underscore'),
    hostUtil = {};

hostUtil.isImgur = function(host) {
    var isImgur = false;

    if(host.indexOf("imgur") >= 0) {
        isImgur = true;
    }

    return isImgur;
}

hostUtil.isYoutube = function(host) {
    var isYoutube = false;

    if(host.indexOf("youtube") >= 0) {
        isYoutube = true;
    }

    return isYoutube;
}


module.exports = hostUtil;
