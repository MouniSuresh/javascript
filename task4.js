function reverseWords(words) {
  return words.split(' ').reverse().join(' ');
}



function removeDuplicates(arr) {
  return [...new Set(arr)];
}



function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;

  for (let char of str) {
    if (vowels.includes(char)) {
      count++;
    }
  }
 return count;
}
