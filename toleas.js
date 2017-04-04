
//CONSONANT CHOOSING PROCESS
var rankOneC = ["r", "s", "t", "v", "thr", "sk", "fr", "gr", "sr", "sv", "vr", "k"];
var rankTwoC = ["thl", "dr", "kr", "gl", "skl", "f", "th", "br", "g", "n", "m", "y", "w"];
var rankThreeC = ["kn", "sf", "sm", "fl", "sh", "ch", "chr", "b", "d", "h", "j", "l"];
var rankFourC = ["pl", "sn", "br", "fj", "klr", "p", "z", "chv", "chj"];
var rankFiveC = ["dj", "snr", "krt", "krs", "kld", "klj", "blr", "wj", "zr", "x"];
var rankC;

function pickRankC() {
    var RandRankC = Math.floor((Math.random() * 16));
    if (RandRankC == 1 || RandRankC == 2 || RandRankC == 3 || RandRankC == 4 || RandRankC == 5) {
        rankC = rankOneC;
    }
    else if (RandRankC == 6 || RandRankC == 7 || RandRankC == 8 || RandRankC == 9) {
        rankC = rankTwoC;
    }
    else if (RandRankC == 10 || RandRankC == 11 || RandRankC == 12) {
        rankC = rankThreeC;
    }
    else if (RandRankC == 13 || RandRankC == 14) {
        rankC = rankFourC;
    }
    else {
        rankC = rankFiveC;
    }
    return rankC;

}

function randPhonemeC() {
    var rC = pickRankC();
    var arrElemC = Math.ceil(Math.random() * rC.length);
    var phonemeC = rankC[arrElemC];
    return phonemeC;
}

//VOWEL CHOOSING PROCESS
var rankOneV = ["he", "&iacute", "e", "u"];
var rankTwoV = ["&iuml", "hi", "o", "ha", "&euml"];
var rankThreeV = ["&uuml", "&ouml", "ho", "&auml", "a", "hu"];

var rankV;

function pickRankV() {
    var RandRankV = Math.floor((Math.random() * 6));
    if (RandRankV == 1 || RandRankV == 2 || RandRankV == 3) {
        rankV = rankOneV;
    }
    else if (RandRankV == 4 || RandRankV == 5) {
        rankV = rankTwoV;
    }
    else {
        rankV = rankThreeV;
    }

    return rankV;

}


function randPhonemeV() {
    var arrV = pickRankV();
    var arrElemV = Math.ceil(Math.random() * arrV.length);
    var phonemeV = rankV[arrElemV];
    return phonemeV;
    ;
}
