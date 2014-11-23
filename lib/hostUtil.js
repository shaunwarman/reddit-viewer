var _ = require('underscore'),
    hostUtil = {};

hostUtil.isImgur = function(host) {
    var isImgur = false;

    if(_.contains("imgur")) {
        isImgur = true;
    }

    return isImgur;
}

hostUtil.isYoutube = function(host) {
    var isYoutube = false;

    if(_.contains("youtube")) {
        isYoutube = true;
    }

    return isYoutube;
}


module.exports = hostUtil;
