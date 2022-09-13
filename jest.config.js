module.exports = {
  preset: 'react-native',
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  setupFiles: ['<rootDir>/__tests__/jest-setup.js'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?@react-native|react-native|react-navigation|@react-navigation/.*)',
  ],
};
