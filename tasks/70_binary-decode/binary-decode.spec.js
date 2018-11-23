 import { binaryDecode } from './binary-decode';

export const TEST_BLOCKS = [
    {
        binary: "01010010 01100101 01100001 01101100 00100000 01110000 01110010 01101111 01100111 01110010 01100001 01101101 01110011 00100000 01100100 01101111 01101110 00100111 01110100 00100000 01100101 01100001 01110100 00100000 01100011 01100001 01100011 01101000 01100101 00101110",
        text: "Real programs don't eat cache.",
    },
    {
        binary: "01001101 01101111 01110011 01110100 00100000 01110000 01110101 01100010 01101100 01101001 01100011 00100000 01100100 01101111 01101101 01100001 01101001 01101110 00100000 01110011 01101111 01100110 01110100 01110111 01100001 01110010 01100101 00100000 01101001 01110011 00100000 01100110 01110010 01100101 01100101 00101100 00100000 01100001 01110100 00100000 01101100 01100101 01100001 01110011 01110100 00100000 01100001 01110100 00100000 01100110 01101001 01110010 01110011 01110100 00100000 01100111 01101100 01100001 01101110 01100011 01100101 00101110",
        text: "Most public domain software is free, at least at first glance."
    },
    {
        binary: "01010100 01101000 01101111 01110011 01100101 00100000 01110111 01101000 01101111 00100000 01100100 01101111 00100000 01101110 01101111 01110100 00100000 01110101 01101110 01100100 01100101 01110010 01110011 01110100 01100001 01101110 01100100 00100000 01010101 01101110 01101001 01111000 00100000 01100001 01110010 01100101 00100000 01100011 01101111 01101110 01100100 01100101 01101101 01101110 01100101 01100100 00100000 01110100 01101111 00100000 01110010 01100101 01101001 01101110 01110110 01100101 01101110 01110100 00100000 01101001 01110100 00101100 00100000 01110000 01101111 01101111 01110010 01101100 01111001 00101110 00100000 00101101 00101101 00100000 01001000 01100101 01101110 01110010 01111001 00100000 01010011 01110000 01100101 01101110 01100011 01100101 01110010",
        text: "Those who do not understand Unix are condemned to reinvent it, poorly. -- Henry Spencer"
    },
    {
        binary: "01000110 01001111 01010010 01010100 01010010 01000001 01001110 00100000 01101001 01110011 00100000 01100110 01101111 01110010 00100000 01110000 01101001 01110000 01100101 00100000 01110011 01110100 01110010 01100101 01110011 01110011 00100000 01100110 01110010 01100101 01100001 01101011 01110011 00100000 01100001 01101110 01100100 00100000 01100011 01110010 01111001 01110011 01110100 01100001 01101100 01101100 01101111 01100111 01110010 01100001 01110000 01101000 01111001 00100000 01110111 01100101 01100101 01101110 01101001 01100101 01110011 00101110",
        text: "FORTRAN is for pipe stress freaks and crystallography weenies."
    },
    {
        binary: "01010100 01101000 01100101 00100000 01000101 01100001 01110010 01110100 01101000 00100000 01101001 01110011 00100000 00111001 00111000 00100101 00100000 01100110 01110101 01101100 01101100 00100000 00101110 00101110 00101110 00100000 01110000 01101100 01100101 01100001 01110011 01100101 00100000 01100100 01100101 01101100 01100101 01110100 01100101 00100000 01100001 01101110 01111001 01101111 01101110 01100101 00100000 01111001 01101111 01110101 00100000 01100011 01100001 01101110 00101110",
        text: "The Earth is 98% full ... please delete anyone you can."
    }
];

describe('binary-decode', () => {
    test('should return a string', () => {
        expect(typeof binaryDecode()).toBe('string');
    });

    test('should return correct encoded values', () => {
        TEST_BLOCKS.forEach(({binary, text}) => expect(binaryDecode(binary)).toBe(text));
    });
})