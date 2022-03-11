import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { BottomTabBar } from '@react-navigation/bottom-tabs';
import Bottomtabnavigator from './components/bottomtabnavigator';
export default function App() {
  return (
   <Bottomtabnavigator/>

  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
