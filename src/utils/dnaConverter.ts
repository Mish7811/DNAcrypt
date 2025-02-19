export function convertToDNA(binary: string): string {
  const cleanBinary = binary.replace(/\s/g, '');
  if (!/^[01]+$/.test(cleanBinary)) {
    return 'Invalid binary input';
  }
  const paddedBinary = cleanBinary.length % 2 === 0 
    ? cleanBinary 
    : cleanBinary + '0';

  let dnaSequence = '';
  for (let i = 0; i < paddedBinary.length; i += 2) {
    const pair = paddedBinary.slice(i, i + 2);
    switch (pair) {
      case '00': dnaSequence += 'A'; break;
      case '01': dnaSequence += 'T'; break;
      case '10': dnaSequence += 'C'; break;
      case '11': dnaSequence += 'G'; break;
    }
  }
  return dnaSequence;
}

export function textToBinary(text: string): string {
  return text
    .split('')
    .map(char => char.charCodeAt(0).toString(2).padStart(8, '0'))
    .join('');
}

export function dnaToBinary(dna: string): string {
  let binarySequence = '';
  for (const char of dna) {  // 🔥 Changed from 'let' to 'const'
    switch (char) {
      case 'A': binarySequence += '00'; break;
      case 'T': binarySequence += '01'; break;
      case 'C': binarySequence += '10'; break;
      case 'G': binarySequence += '11'; break;
      default: return 'Invalid DNA sequence';
    }
  }
  return binarySequence;
}

export function binaryToText(binary: string): string {
  if (!/^[01]+$/.test(binary) || binary.length % 8 !== 0) {
    return 'Invalid binary input';
  }
  let text = '';
  for (let i = 0; i < binary.length; i += 8) {
    const byte = binary.slice(i, i + 8);
    text += String.fromCharCode(parseInt(byte, 2));
  }
  return text;
}
