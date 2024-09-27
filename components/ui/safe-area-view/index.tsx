'use client';
import { useColorScheme } from '@/hooks/useColorScheme';
import { SafeAreaView as RNSafeAreaView } from 'react-native';
import colors from 'tailwindcss/colors';

function SafeAreaView({ children }: any) {
  const colorScheme = useColorScheme();
  return <RNSafeAreaView style={{ flex: 1, backgroundColor: colorScheme === 'dark' ? '#181A20' : colors.white }} {...{ children }} />;
}

export { SafeAreaView };