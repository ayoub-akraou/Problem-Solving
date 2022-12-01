function shortcut(string){
 const vowels = ['a', 'e', 'i', 'o', 'u'];
 return string.split('').filter(e => !vowels.includes(e)).join('');
}