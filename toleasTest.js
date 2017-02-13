QUnit.test("test pickRank function", function (assert) {
 var rankOne = ["r", "s", "t", "v", "thr", "sk", "fr", "gr", "sr", "sv", "vr", "k"];

var rankTwo = ["thl", "dr", "kr", "gl", "skl", "f", "th", "br", "g", "n", "m", "y", "w"];

var rankThree = ["kn", "sf", "sm", "fl", "sh", "ch", "chr", "b", "d", "h", "j", "l"];

var rankFour = ["pl", "sn", "br", "fj", "klr", "p", "z", "chv", "chj"];

var rankFive = ["dj", "snr", "krt", "krs", "kld", "klj", "blr", "wj", "zr", "x"];

    var rank;

    var result = pickRank();
    var randRank = 4;
    assert.deepEqual(result, rankOne, "We expect result to be rankOne");
