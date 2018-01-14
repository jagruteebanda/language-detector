const unicodeMappings = require('./unicodeMappings.json');

if (process.argv[2]) {
  if (process.argv[2].length > 0) {
    console.log(getLanguage(process.argv[2]));
  }
} else {
  console.log("Please enter text snippet");
}

function getLanguage(detectText) {
  const unicodeMappingsKeys = Object.keys(unicodeMappings);
  let probability = 0;
  let detectedLanguage = '';
  for (var i = 0; i < detectText.length; i++) {
    const charCode = detectText.charCodeAt(i);
    unicodeMappingsKeys.map((unicodeMappingsKey) => {
      if (unicodeMappingsKey) {
        if (charCode > parseInt(`0x${unicodeMappings[unicodeMappingsKey].minUnicode}`) && charCode < parseInt(`0x${unicodeMappings[unicodeMappingsKey].maxUnicode}`)) {
          probability = probability + 1;
          detectedLanguage = unicodeMappings[unicodeMappingsKey].language;
        }
      }
    });
  }
  if (probability/detectText.length > 0.5) {
    return detectedLanguage;
  } else {
    return 'Please check the text!';
  }
}

module.exports = {
  getLanguage
};
