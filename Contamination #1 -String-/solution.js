function contamination(text, char){
  if(text === "" || char === "") return ""
  return char.repeat(text.length);
}