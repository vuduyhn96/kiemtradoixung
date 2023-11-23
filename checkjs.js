function isPalindrome(word) {
    word = word.toLowerCase();
    let length = word.length;
    for (let i = 0; i < Math.floor(length / 2); i++) {
        if (word[i] !== word[length - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isPalindrome("level"));
console.log(isPalindrome("radar"));
console.log(isPalindrome("hello"));