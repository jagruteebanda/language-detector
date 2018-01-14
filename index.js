const unicodeMappings = require('./unicodeMappings.json');

if (process.argv[2]) {
  if (process.argv[2].length > 0) {
    getLanguage(process.argv[2]);
  }
} else {
  console.log("Please enter valid text input!");
}

function getLanguage(detectText) {
  const unicodeMappingsKeys = Object.keys(unicodeMappings);
  let probability = 0;
  let detectedLanguagesArray = [];
  for (var i = 0; i < detectText.length; i++) {
    const charCode = detectText.charCodeAt(i);
    unicodeMappingsKeys.map((unicodeMappingsKey) => {
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
            detectedLanguagesArray.map((detectedLanguage) => {
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
  detectedLanguagesArray.sort((a, b) => {
    if (a.score < b.score) {
      return 1;
    }
    if (a.score > b.score) {
      return -1;
    }
    // a must be equal to b
    return 0;
  });
  if (detectedLanguagesArray.length > 0) {
    console.log(detectedLanguagesArray[0].language);
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
}

module.exports = {
  getLanguage
};
