import { pangram } from "./fonction/pangram.js";

const texte1 = "Hi, my frinend";
const texte2 = "The quick brown fox jumps over the lazy dog";

const texte1IsPangram = pangram(texte1);
const texte2IsPangram = pangram(texte2);

console.log(`texte 1: ${texte1} is a pangram? ${texte1IsPangram}`);
console.log(`texte 2: ${texte2} is a pangram? ${texte2IsPangram}`);
