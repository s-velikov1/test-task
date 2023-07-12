/*
  Plan:
    1. Split a text by space.
    2. Iterate through the array and find first unique character in each word.
    3. Return first unique character from the array of characters.
*/

const data1 = `The Tao gave birth to machine language.  Machine language gave birth
to the assembler.
The assembler gave birth to the compiler.  Now there are ten thousand
languages.
Each language has its purpose, however humble.  Each language
expresses the Yin and Yang of software.  Each language has its place within
the Tao.
But do not program in COBOL if you can avoid it.
        -- Geoffrey James, "The Tao of Programming"
`;

const data2 = `C makes it easy for you to shoot yourself in the foot. C++ makes that harder, but when you do, it blows away your whole leg. (с) Bjarne Stroustrup`;
const data3 = 'aa aa';
const data4 = 'a aa';
const data5 = 'aab a';

function findUniqueCharacter(text) {
  const words = text.split(/\W+/g); // split text by words

  // Iterate through array of words and return new array with first unique character from each word
  const uniqueChars = words.map((word) => {
    const splittedWord = word.split('');

    // Iterate through array of characters from current word
    for (let i = 0; i < splittedWord.length; i++) {
      const currentChar = splittedWord[i];

      // Check if current char is unique in scope of a word
      if (splittedWord.indexOf(currentChar) === splittedWord.lastIndexOf(currentChar)) {
        return currentChar;
      }
    }
  });

  // Return first unique char within the whole data set.
  return uniqueChars.find((char, i, arr) => char && arr.indexOf(char) === arr.lastIndexOf(char));
}

console.log(findUniqueCharacter(data1)); // returns "m"
console.log(findUniqueCharacter(data2)); // returns "e"
console.log(findUniqueCharacter(data3)); // returns undefined | there is no unique characters
console.log(findUniqueCharacter(data4)); // returns "a"
console.log(findUniqueCharacter(data5)); // returns "b"
