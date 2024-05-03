// Your tests here
import { isPalindrome, hasBoth } from "../utils"

describe ("isPalindrome", () => {
    it("Returns true if a word is a palindrome and false if not", () => {
        // Checks for palindrome 
        const word = "mom";
        const palindrome = isPalindrome(word);
        expect(palindrome).toBe(true);
        // checks for non palindrome
        const nonWord = "how"
        const nonPalindrome = isPalindrome(nonWord)
        expect(nonPalindrome).toBe(false)

    });
});

describe ("hasBoth", () => {
    it("returns true if a word has both upper and lowercase letters", () => {
        const hasUpperLower = "Hey"
        const checkHasBoth = hasBoth(hasUpperLower)
        expect(checkHasBoth).toBe(true)
    });
});
