import {useRouter} from "expo-router";
import {useState} from "react"
import { Button,
        Text, 
        View, 
        TextInput, 
        StyleSheet, 
        Touchable, 
        TouchableOpacity,
        ScrollView } from "react-native";

export default function Index() {

  const [contador, setContador] = useState(0);
  const [contadores, setContadores] = useState<Number[]>([])
  const [oddEven, setOddEven] = useState<string>('Par');
  const [modificador, setModificador] = useState(1);


  function handleNumberAdd(){
    setContador(contador+modificador)
    handleAddContador()
  }

  function handleNumberSub(){
    setContador(contador-modificador)
    handleAddContador()
  }

  function handleAddContador(){
    if(contador !== null){
      setContadores(oldState => [...oldState, contador])
    }
  }

  function handleClear(){
    setContador(0)
    setContadores([])
    setModificador(1)
  }

  // function handleOdd(){
  //   if(contador%2==0){
  //     setOddEven('Par')
  //   }
  //   else{
  //     setOddEven('Impar')
  //   }
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Contador Inteligente</Text>

      <Text style={styles.counter}>
      {contador}
      </Text>

      <Text style={styles.parImpar}>
        O número é {contador%2==0 ? 'Par' : 'Impar'}
      </Text>

      <View style={styles.botoes}>

      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={.5} 
        onPress={handleNumberSub}>

        
        <Text style= {styles.buttonText}>DIMINUIR</Text>
        

      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        activeOpacity={.5}
        onPress={handleNumberAdd}>
        
        <Text style= {styles.buttonText}>AUMENTAR</Text>

      </TouchableOpacity>

      </View>

      <TextInput
      style={styles.input}
      placeholder='1'
      value={String(modificador)}
      onChangeText={(item)=> setModificador(parseInt(item) || 0)}
      />
        
        <View style={styles.botoes}>

<TouchableOpacity 
  style={styles.button} 
  activeOpacity={.5}
  onPress={handleClear}
  >

  
  <Text style= {styles.buttonText}>ZERAR</Text>
  

</TouchableOpacity>

<TouchableOpacity 
  style={styles.button} 
  activeOpacity={.5}>
  
  <Text style= {styles.buttonText}>INICIAR AUTO</Text>

</TouchableOpacity>

</View>

<Text style = {styles.history}>

  Histórico:

</Text>

<ScrollView
keyboardShouldPersistTaps= 'handled'>

  {
    contadores.slice(-10).reverse().map((item, index) =>(
      <Text key={index} style={styles.contadoresItem}>
        {String(item)}
      </Text>
    ))
  }

</ScrollView>


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
    textAlign: 'center',
    marginTop: 15,
    color: '#5b5756'
  },

  parImpar: {
    textAlign: 'center',
    marginTop: 15,
  },

  button: {
    backgroundColor: '#3092e6',
    padding: 10,
    borderRadius: 2,
    marginTop: 20,
  },

  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  botoes: {
    flexDirection: "row",
    justifyContent: 'center',
    gap: 10,
  },

  input: {
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#fff',
    borderColor: '#dadbdc',
    marginTop: 30,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
  },

  history: {
    fontSize: 18,
    textAlign:  'center',
    marginTop: 25,
    fontWeight: 'bold'
  },

  contadoresItem: {
    marginTop: 10,
    fontSize: 14,
    textAlign: 'center'
  }

})
