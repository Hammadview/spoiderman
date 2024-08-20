import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './screens/Home';
import { Provider } from 'react-redux';
import store from './store/slices';

export default function App() {
  return (
    <Provider store={store}>
 <View>
   <Home/>  
   </View>
    </Provider>
  
  );
}

const styles = StyleSheet.create({
 
});
