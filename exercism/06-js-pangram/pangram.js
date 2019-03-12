export const isPangram = (string) => {
  const alphabet = [...'abcdefghijklmnopqrstuvwxyz'];
  const lowerString = string.toLowerCase();
  if (alphabet.every(letter => lowerString.includes(letter))) {
    return true;
  }  
};
