const unicodeMappings = require('./unicodeMappings.json');

function identify(detectText) {
  const unicodeMappingsKeys = Object.keys(unicodeMappings);
  let probability = 0, isMarathi = false;
  let detectedLanguagesArray = [];
  if (detectText && detectText.length > 0) {
    for (var i = 0; i < detectText.length; i++) {
      const charCode = detectText.charCodeAt(i);
      if (charCode === 2355) {
        isMarathi = true;
      }
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
      if (detectedLanguagesArray[0].language === "Hindi | Marathi | Sanskrit | Devanagari" && isMarathi) {
        return "Marathi";
      } else {
        return detectedLanguagesArray[0].language;
      }
    } else {
      console.log("Please enter valid text input!");
    }
  } else {
    console.log('Please input valid text.');
  }
}

console.log(identify("मला घेताना नळ पाणी"));

module.exports = {
  identify
};
