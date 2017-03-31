
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
    var arrElemC = [Math.ceil(Math.random() * rankC.length)];


}

