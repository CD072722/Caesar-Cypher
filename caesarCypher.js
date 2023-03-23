function caesarCypher (secret, shift){
    let alphabet = "abcdefghijklmnopqrstuvwxyz"
    let alphabetArr = alphabet.split(""); //split into array to be able to use array functions
    let secretArr = secret.split("");
    let newStr = []
      for (let i = 0; i < secretArr.length; i++){
        let letter = secretArr[i];
        if(alphabetArr.includes(letter)) {       // check to see if the character is in the alphabet
            let letterIdx = alphabetArr.indexOf(letter);   // find the index of the character in the alphabet       
            let newLetterIdx = letterIdx + shift; 
                if(newLetterIdx > 25){ //for it to wrap around to the beginning of the alphabet
                    newLetterIdx -= 26;
                }
            let newLetter = alphabetArr[newLetterIdx]; //change the letter's index back to the letter itself
            newStr.push(newLetter);             
        } else {
            newStr.push(letter); //if the character is not in the alphabet, it will place it into the array as is.
        }
  }
  return newStr.join("");
}

console.log(caesarCypher("hello world", 5));