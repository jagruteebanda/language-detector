# language-detector
To detect language by inspecting characters in text input.

### INSTALLATION:

1. npm install basic-language-detector
2. Code Snippet:
```javascript
const basicLangDetector = require('basic-language-detector');
const language = basicLangDetector.getLanguage('Hello');
console.log("Mmm.. looks like you used ", language);
```

### USAGE EXAMPLES:

* In Devanagari:
```
node index.js जागृती
Hindi | Marathi | Sanskrit | Devanagari
```

* In English:
```
node index.js Jagrutee
English | Spanish | Basic Latin
```

* In Gujarati:
```
node index.js જાગૃતી
Gujarati
```

* In Tamil:
```
node index.js ஜஃருடீ
Tamil
```

* In Telugu:
```
node index.js జాగ్రుతే
Telugu
```

* In Malayalam:
```
node index.js ജാഗ്രത
Malayalam
```

* In Japanese:
```
node index.js じゃgるてえ
Japanese | Hiragana
```

* In Hebrew:
```
node index.js ונביאים  
Hebrew
```

* In Arabic:
```
node index.js ثقففغب
Arabic
```

* In Bengali:
```
node index.js কখগঘঘঘঘ
Bengali
```

### SUPPORTED LANGUAGES:

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
