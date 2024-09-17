const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');
  
const defaultConfig = getDefaultConfig(__dirname);

const { transformer, resolver } = defaultConfig;
const config = {
  ...defaultConfig,
  transformer: {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer/expo")
  },
  resolver: {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"]
  }
}
  
module.exports = withNativeWind(config, { input: './global.css' });
  