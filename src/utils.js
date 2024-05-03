// Your code here
export function isPalindrome(word){

    const newword = word.toLowerCase();
    const wordCheck = newword.split("").reverse().join("");
    if (wordCheck === word){
        return true;
    }else{
        return false;
    }


}
export function hasBoth(str) {
    const lowerCaseRegex = /[a-z]/;
    const upperCaseRegex = /[A-Z]/;
    return lowerCaseRegex.test(str) && upperCaseRegex.test(str);
}
hasBoth("Hallo")

isPalindrome(" ")
isPalindrome("mom")
isPalindrome("cow")