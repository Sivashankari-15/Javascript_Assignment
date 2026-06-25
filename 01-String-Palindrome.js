function isPalindrome(word){

    let originalWord = word.toLowerCase();
    let arr = originalWord.split('');
    let reversedWord = '';
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedWord += originalWord.charAt(i);
    }

    if (originalWord === reversedWord) {
        console.log(`The given word ${originalWord} is palindrome`);
    }
    else
    {
        console.log(`The given word ${originalWord} is not palindrome`);
    }

}
isPalindrome("Level")
isPalindrome("Success")