# language-detector
To detect language by inspecting characters

FILES:

1. index.js
   => To detect language of text

2. unicodeMappings.json
   => json object with mappings for languages and their unicodes

COMMAND TO RUN:

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

and many more..
