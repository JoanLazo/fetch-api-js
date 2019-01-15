const isVowel =  function (char){
    
console.log('debería devolver true para letra a');
if (isVowel('a') === true) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}

console.log('debería devolver false para letra b');
if (isVowel('b') === false) {
  console.log('✓ ok');
} else {
  console.error('✗ fail');
}
return ['a', 'e', 'i', 'o', 'u'].indexOf(char) > -1;
}

module.exports = isVowel;
