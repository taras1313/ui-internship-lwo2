// import { validBraces } from './valid-braces';

xdescribe('Valid braces', () => {

    test('validBraces("(){}[]") should return true', () => {
        expect(validBraces("(){}[]")).toBe(true);
    });

    test('validBraces("([{}])") should return true', () => {
        expect(validBraces("([{}])")).toBe(true);
    });
    test('validBraces("(}") should return false', () => {
        expect(validBraces("(}")).toBe(false);
    });

    test('validBraces("[(])") should return false', () => {
        expect(validBraces("[(])")).toBe(false);
    });

    test('validBraces("[({})](]") should return false', () => {
        expect(validBraces("[({})](]")).toBe(false);
    });

});
