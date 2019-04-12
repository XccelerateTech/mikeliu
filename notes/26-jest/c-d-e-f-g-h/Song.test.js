const Song = require('./Song');

function beforeAll() {
    song1 = new Song('Bad Liar', 'Origins', 'Imagine Dragons');
    song2 = new Song('2002', 'Speak Your Mind', 'Anne-Marie');
    song3 = new Song('Be Alright', 'A Place We Knew', 'Dean Lewis');
    song4 = new Song('Only', 'Origins', 'Imagine Dragons');
    sameSong4 = new Song('Only', 'Origins', 'Imagine Dragons');
};

beforeAll();


//exercise c & d
describe('Check Song getDescription, exercise c & d', function () {
    test('return song1', function () {
        expect(song1.getDescription()).toEqual('The name of this song is Bad Liar and it is from the album Origins. It is written by Imagine Dragons.');
        // console.log(song1.getDescription());
    })

    test('return song2', function () {
        expect(song2.getDescription()).toEqual('The name of this song is 2002 and it is from the album Speak Your Mind. It is written by Anne-Marie.');
        // console.log(song2.getDescription());
    })

    test('return song3', function () {
        expect(song3.getDescription()).toEqual('The name of this song is Be Alright and it is from the album A Place We Knew. It is written by Dean Lewis.');
        // console.log(song3.getDescription());
    })
});

//exercise e
describe('Check whether the song is from same album, isInSameAlbum, exercise e', function () {
    test('song1 is same as song 4', function () {
        expect(song1.isInSameAlbum(song4)).toBeTruthy();
    })

    test('song2 is not same as song 3', function () {
        expect(song2.isInSameAlbum(song3)).toBeFalsy();
    })

    test('song3 is not same as song 4', function () {
        expect(song3.isInSameAlbum(song4)).toBeFalsy();
    })
});


function beforeEach() {
    expect.extend({
        toBeInTheSameAlbumAs(s1, s2) {
            const pass = (s1.album === s2.album)
            if (pass) {
                return {
                    message: function() {
                        `expected ${s1.album} to equal ${s2.album}`
                    },
                    pass: true
                };
            }
            else {
                return {
                    message: function() {
                        `expected ${s1.album} to equal ${s2.album}`
                    },
                    pass: false
                };
            };
        }
    });
};

beforeEach();


//exercise f
describe('Check custom matcher, toBeInTheSameAlbumAs', function() {
    test('song1 & song4 are matched, true', function () {
        expect(song1).toBeInTheSameAlbumAs(song4, song1);
    })

    test('song2 & song3 are not matched, false', function () {
        expect(song2).toBeInTheSameAlbumAs(song2, song3);
    })
});

//exercise h
describe('Check whether all is same', function() {
    test('check toBE(), same', function() {
        let arr1 = [1,2,3,{a:1}];
        let arr2 = arr1;
        expect(arr1).toBe(arr2);
        expect(song1).toBe(song1);
        expect(song1).not.toBe(song2);
    });

    test('check toEqual(), same', function() {
        let arr1 = [1,2,3,{a:1}];
        let arr2 = [1,2,3,{a:1}];
        expect(arr1).toEqual(arr2);
        expect(song1).toEqual(song1);
        expect(song4).toEqual(sameSong4);
    });
});