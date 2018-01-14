const unicodeMappings = require('./unicodeMappings.json');

function getLanguage(detectText) {
  const unicodeMappingsKeys = Object.keys(unicodeMappings);
  let probability = 0;
  let detectedLanguagesArray = [];
  if (detectText && detectText.length > 0) {
    for (var i = 0; i < detectText.length; i++) {
      const charCode = detectText.charCodeAt(i);
      unicodeMappingsKeys.forEach((unicodeMappingsKey) => {
        if (unicodeMappingsKey) {
          if (charCode > parseInt(`0x${unicodeMappings[unicodeMappingsKey].minUnicode}`) && charCode < parseInt(`0x${unicodeMappings[unicodeMappingsKey].maxUnicode}`)) {
            if (i === 0) {
              detectedLanguagesArray.push({
                id: i,
                charIndexes: [i],
                language: unicodeMappings[unicodeMappingsKey].language,
                score: 1
              });
            } else {
              let isExist = 0;
              detectedLanguagesArray.forEach((detectedLanguage) => {
                if (detectedLanguage.language === unicodeMappings[unicodeMappingsKey].language) {
                  isExist = 1;
                  detectedLanguage.charIndexes.push(i);
                  detectedLanguage.score += 1;
                }
              });
              if (isExist === 0) {
                detectedLanguagesArray.push({
                  id: i,
                  charIndexes: [i],
                  language: unicodeMappings[unicodeMappingsKey].language,
                  score: 1
                });
              }
            }
          }
        }
      });
    }
    detectedLanguagesArray.sort((a, b) => { // sorting according to the priority
      if (a.score < b.score) {
        return 1;
      }
      if (a.score > b.score) {
        return -1;
      }
      return 0;
    });
    if (detectedLanguagesArray.length > 0) {
      return detectedLanguagesArray[0].language;
    } else {
      console.log("Please enter valid text input!");
    }
    // if (detectedLanguagesArray.length === 0) {
    //   console.log('Mmm... let me think?! You used ', detectedLanguagesArray[0].language);
    // } else if (detectedLanguagesArray.length > 0) {
    //   console.log('Mmm...interesting! Looks like you mix languages! You may have used following languages:');
    //   detectedLanguagesArray.forEach((obj) => {
    //     if (obj) {
    //       console.log(obj.language);
    //     }
    //   });
    // } else {
    //   console.log('Please enter valid input');
    // }
  } else {
    console.log('Please input valid text.');
  }
}

module.exports = {
  getLanguage
};
