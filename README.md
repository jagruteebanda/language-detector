# language-identifier

To detect language by inspecting characters in text snippet. The module takes text snippet as input and probables the best match for the identified language.

### Installing

* npm install language-identifier
* Code Snippet:
```javascript
const languageIdentifier = require('language-identifier');
const language = Identifier.getLanguage('Hello World!');
console.log('Language Identified: ', language);
```

### Examples:

* In Devanagari:
```
$ node index.js जागृती
Hindi | Marathi | Sanskrit | Devanagari
```

* In English:
```
$ node index.js "Hello World"
English | Spanish | Basic Latin
```

* In Gujarati:
```
$ node index.js જાગૃતી
Gujarati
```

* In Malayalam:
```
$ node index.js ജാഗ്രത
Malayalam
```

* In Japanese:
```
$ node index.js じゃgるてえ
Japanese | Hiragana
```

* In Hebrew:
```
$ node index.js ונביאים 
Hebrew
```

* In Arabic:
```
$ node index.js ثقففغب
Arabic
```

### Supported Languages

* English | Spanish | French (Basic Latin)
* Hindi | Marathi | Sanskrit (Devanagari)
* Malayalam
* Tamil
* Telugu
* Gujarati
* Hebrew
* Japanese (Hiragana)
* Armenian
* Arabic
* Syriac
* Bengali
* Oriya
* Kannada
* Myanmar
* Georgian
* Cherokee and many more..
