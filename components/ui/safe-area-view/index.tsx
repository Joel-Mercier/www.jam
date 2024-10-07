'use client';
import useApp from '@/contexts/app';
import { SafeAreaView as RNSafeAreaView } from 'react-native';
import colors from 'tailwindcss/colors';

function SafeAreaView({ children, style }: any) {
  const theme = useApp.use.theme()
  return <RNSafeAreaView style={[{ flex: 1, backgroundColor: theme === 'dark' ? '#181A20' : colors.white }, style]} {...{ children }} />;
}

export { SafeAreaView };