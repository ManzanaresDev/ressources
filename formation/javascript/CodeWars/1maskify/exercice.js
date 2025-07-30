import { maskify } from "./fonction/maskify.js";

const codeOriginal = "42746877548905687675";
const codeMaske = maskify(codeOriginal);
console.log(`code original: ${codeOriginal} - code maské: ${codeMaske}`);
