# language-identifier

To detect language by inspecting characters in text snippet. The module takes text snippet as input and probables the best match for the identified language.

### Installing

1. npm install language-identifier
2. Code Snippet:
```javascript
const languageIdentifier = require('language-identifier');
languageIdentifier.getLanguage('Hello World!');
```

### Examples:

1. In Devanagari:
```
$ node index.js जागृती
Hindi | Marathi | Sanskrit | Devanagari
```

2. In English:
```
$ node index.js "Hello World"
English | Spanish | Basic Latin
```

3. In Gujarati:
```
$ node index.js જાગૃતી
Gujarati
```

4. In Malayalam:
```
$ node index.js ജാഗ്രത
Malayalam
```

5. In Japanese:
```
$ node index.js じゃgるてえ
Japanese | Hiragana
```

6. In Hebrew:
```
$ node index.js ונביאים 
Hebrew
```

7. In Arabic:
```
$ node index.js ثقففغب
Arabic
```

### Supported Languages

1. English | Spanish | French (Basic Latin)
2. Hindi | Marathi | Sanskrit (Devanagari)
3. Malayalam
4. Tamil
5. Telugu
6. Gujarati
7. Hebrew
8. Japanese (Hiragana)
9. Armenian
10. Arabic
11. Syriac
12. Bengali
13. Oriya
14. Kannada
15. Myanmar
16. Georgian
17. Cherokee and many more..
