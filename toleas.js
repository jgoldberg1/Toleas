var rankOne = ["r", "s", "t", "v", "thr", "sk", "fr", "gr", "sr", "sv", "vr", "k"];

var rankTwo = ["thl", "dr", "kr", "gl", "skl", "f", "th", "br", "g", "n", "m", "y", "w"];

var rankThree = ["kn", "sf", "sm", "fl", "sh", "ch", "chr", "b", "d", "h", "j", "l"];

var rankFour = ["pl", "sn", "br", "fj", "klr", "p", "z", "chv", "chj"];

var rankFive = ["dj", "snr", "krt", "krs", "kld", "klj", "blr", "wj", "zr", "x"];

var rank;

function pickRank() {
    var randRank = Math.floor((Math.random() * 16));

    if (randRank == 1 || randRank == 2 || randRank == 3 || randRank == 4 || randRank == 5) {
        rank = rankOne;
    } else if (randRank == 6  || randRank == 7 || randRank == 8 || randRank == 9) {
        rank = rankTwo;
    } else if (randRank == 10 || randRank == 11 || randRank == 12) {
        rank = rankThree;
    } else if (randRank == 13 || randRank == 14) {
        rank = rankFour;
    } else {
        rank = rankFive;
    }
}
