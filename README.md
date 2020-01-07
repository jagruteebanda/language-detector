# language-identifier

To detect language/family of language by inspecting characters in text input. The module takes text as input and identifies the best language match for the same.

### What's New:

- Identifies "Marathi" as a language in some cases.
- Identifies "Hindi or Sanskrit" in some cases.
- Or shows "Devanagari (Marathi or Hindi or Sanskrit or Prakrit)" otherwise.

### Installation:

- npm install language-identifier

- Code Snippet:

```javascript
const language = require("language-identifier");
const languageName = language.identify("Incredible India!");
console.log("Language Identified: ", languageName);
```

- Output:

```
Language Identified: English | Spanish | Basic Latin
```

### Basic Usage Examples:

- Code Snippet:

```javascript
const language = require("language-identifier");

console.log(
  "Language of आली रे आली दिवाळी आली is ",
  language.identify("आली रे आली दिवाळी आली")
);
console.log("Language of नमस्कार is ", language.identify("नमस्कार"));
console.log("Language of જાગૃતી is ", language.identify("જાગૃતી"));
console.log("Language of ஜஃருடீ is ", language.identify("ஜஃருடீ"));
console.log("Language of ജാഗ്രത is ", language.identify("ജാഗ്രത"));
console.log("Language of じゃgるてえ is ", language.identify("じゃgるてえ"));
console.log("Language of ונביאים is ", language.identify("ונביאים"));
console.log("Language of ثقففغب is ", language.identify("ثقففغب"));
console.log("Language of কখগঘঘঘঘ is ", language.identify("কখগঘঘঘঘ"));
```

- Output:

```
Language of आली रे आली दिवाळी आली is Marathi.
Language of नमस्कार is Hindi | Marathi | Sanskrit | Devanagari.
Language of જાગૃતી is Gujarati
Language of ஜஃருட is Tamil
Language of ജാഗ്രത is Malayalam
Language of じゃgるてえ is Japanese | Hiragana
Language of ונביאים is Hebrew
"Language of ثقففغب is Arabic
Language of কখগঘঘঘঘ is Bengali
```

### Supported Languages:

- English | Spanish | French (Basic Latin)
- Hindi | Marathi | Sanskrit (Devanagari)
- Malayalam
- Tamil
- Telugu
- Gujarati
- Hebrew
- Japanese (Hiragana)
- Armenian
- Arabic
- Syriac
- Bengali
- Oriya
- Kannada
- Myanmar
- Georgian
- Cherokee and many more..
