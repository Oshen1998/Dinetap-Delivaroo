import LocalizedStrings from 'react-native-localization';

import genericEn from './en/en.generic';
import genericSi from './si/si.generic';

const languageStrings = {
  ...genericEn,
};

const sinhalaLanguageStrings = {
  ...genericSi,
};

const strings = new LocalizedStrings({
  'en-UK': languageStrings,
  en: languageStrings,
  si: sinhalaLanguageStrings,
});

export default strings;
