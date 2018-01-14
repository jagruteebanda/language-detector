# language-identifier
To detect language by inspecting characters in text input. The module takes text as input and identifies the best language match for the same.

### Installation:

* npm install language-identifier
* Code Snippet:
```javascript
// Replace process.argv[2] with text you want to identify the language for
const languageIdentifier = require('language-identifier');
const language = languageIdentifier.getLanguage(process.argv[2]);
console.log('Language Identified: ', language);
```

### Basic Usage Examples:

* In Devanagari:
```
$ node index.js "नमस्कार"
Hindi | Marathi | Sanskrit | Devanagari
```

* In English:
```
$ node index.js "Incredible India!"
English | Spanish | Basic Latin
```

* In Gujarati:
```
$ node index.js "જાગૃતી"
Gujarati
```

* In Tamil:
```
$ node index.js "ஜஃருடீ"
Tamil
```

* In Malayalam:
```
$ node index.js "ജാഗ്രത"
Malayalam
```

* In Japanese:
```
$ node index.js "じゃgるてえ"
Japanese | Hiragana
```

* In Hebrew:
```
$ node index.js "ונביאים"  
Hebrew
```

* In Arabic:
```
$ node index.js "ثقففغب"
Arabic
```

* In Bengali:
```
$ node index.js "কখগঘঘঘঘ"
Bengali
```

### Supported Languages:

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
