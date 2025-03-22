import {useRouter} from "expo-router";
import {useState} from "react"
import { Button,
        Text, 
        View, 
        TextInput, 
        StyleSheet, 
        Touchable, 
        TouchableOpacity } from "react-native";

export default function Index() {

  let [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Contador Inteligente</Text>

      <Text style={styles.counter}>
      {contador}
      </Text>

      <Text>
        
      </Text>


      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 60,
    paddingVertical: 40,
    backgroundColor: '#fff'
  },

  title: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 25,
  },

  counter: {
    justifyContent: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  }


})
