const preset = require('jest-expo/jest-preset');
module.exports = {
  ...preset,
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|react-native-svg|@testing-library|expo)/'
  ],
};
