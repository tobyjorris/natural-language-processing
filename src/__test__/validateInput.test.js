import { validateInput } from '../client/js/inputValidator';
import 'regenerator-runtime';
import { expect } from "@jest/globals";

test('checks input for a valid URL', () => {
    expect(validateInput('https://www.google.com')).toBe(true);
})
