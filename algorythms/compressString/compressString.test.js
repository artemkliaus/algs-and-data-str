const compressString = require('./compressString');

describe('The compressString function', () => {
    test('compress a string', () => {
        expect(compressString('aaababbcbbb')).toBe("a3b1a1b2c1b3");
        expect(compressString('aababaabcbbccb')).toBe("a2b1a1b1a2b1c1b2c2b1");
    });
});
