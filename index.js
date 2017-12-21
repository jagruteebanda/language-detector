const unicodeMappings = require('./unicodeMappings.json');
const async = require('async');
let probability = 0;
let language = '';
const detectText = process.argv[2];
const unicodeMappingsKeys = Object.keys(unicodeMappings);

for (var i = 0; i < detectText.length; i++) {
  const charCode = detectText.charCodeAt(i);
  async.map(unicodeMappingsKeys, function (unicodeMappingsKey, unicodeMappingsKeysCallback) {
    if (unicodeMappingsKey) {
      // console.log(parseInt(`0x${charCode}`));
      // console.log(parseInt(`0x${unicodeMappings[unicodeMappingsKey].minUnicode}`), unicodeMappings[unicodeMappingsKey].minUnicode);
      if (charCode > parseInt(`0x${unicodeMappings[unicodeMappingsKey].minUnicode}`) && charCode < parseInt(`0x${unicodeMappings[unicodeMappingsKey].maxUnicode}`)) {
        probability = probability + 1;
        language = unicodeMappings[unicodeMappingsKey].language;
      }
    }
  });
}

console.log(language);
