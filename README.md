# language-detector
To detect language by inspecting characters in piece of text.

INSTALLATION:

1. npm install basic-language-detector
2. Code Snippet:
const basicLangDetector = require('basic-language-detector');
basicLangDetector.getLanguage('Hello');

SUPPORTED LANGUAGES:

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

EXAMPLE COMMANDS TO RUN:

1. In Devanagari:
$ node index.js जागृती
> Hindi | Marathi | Sanskrit | Devanagari

2. In English:
$ node index.js Jagrutee
> English | Spanish | Basic Latin

3. In Gujarati:
$ node index.js જાગૃતી
> Gujarati

4. In Tamil:
$ node index.js ஜஃருடீ
> Tamil

5. In Telugu:
$ node index.js జాగ్రుతే
> Telugu

6. In Malayalam:
$ node index.js ജാഗ്രത
> Malayalam

7. In Japanese:
$ node index.js じゃgるてえ
> Japanese | Hiragana

8. In Hebrew:
$ node index.js ונביאים 
> Hebrew

9. In Arabic:
$ node index.js ثقففغب
> Arabic

10. In Bengali:
$ node index.js কখগঘঘঘঘ
> Bengali
