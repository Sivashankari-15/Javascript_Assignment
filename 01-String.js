let str1 = "Hello World"
let str1Arr = str1.split(' ')
let lastWordStr1 = str1Arr[str1Arr.length - 1]
console.log(`The length of last word ${lastWordStr1} is ${lastWordStr1.length}`)

let str2 = " fly me to the moon "
let str2Arr = str2.trim().split(' ');
let lastWordStr2 = str2Arr[str2Arr.length - 1]
console.log(`The length of last word ${lastWordStr2} is ${lastWordStr2.length}`)

function isAnagram(word1, word2){
    let W1 = word1.trim().toLowerCase().split('').sort().join('')
    console.log(W1)
    let W2= word2.trim().toLowerCase().split('').sort().join('')
    if( W1 === W2){
        console.log(`String1 ${word1} and String2 ${word2} are anagrams`)
    }
    else
    {
        console.log(`String1 ${word1} and String2 ${word2} are not anagrams`)
    }
    
}

isAnagram('listen', 'silent')
isAnagram('hello', 'world')

