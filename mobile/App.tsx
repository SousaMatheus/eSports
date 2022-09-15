import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello World</Text>
      <Button titulo='Enviar 1'></Button>
      <StatusBar style="auto" />
    </View>
  );
}

interface ButtonProps{
 titulo : string;
}
function Button(props : ButtonProps){
  return (
  <TouchableOpacity>
    <Text>
      {props.titulo}
    </Text>
  </TouchableOpacity>
  );
}         
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
