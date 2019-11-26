import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import { green } from 'ansi-colors';
import FlatLister from './Component/FlatList';
import InputLayer from './Component/InputLayer';

export default function App() {

  const [storeResult,setResult] = useState([])
  const [isModal,setModal]= useState(false)

  const btnHandler = put =>{
    if(put.length == 0){
      return;
    }
    setResult([...storeResult,{key:Math.random().toString(), value:put}])
    setModal(false);
  }

  const deleteHandle = id => {
    setResult(current => {
      return current.filter(goal => goal.key !== id);
    })
  }

const showHandler = () =>{
  setModal(true);
}

  return (
    <View style={styles.container}>
      <View style={{justifyContent:'center',alignItems:'center',backgroundColor:'teal',paddingTop:30,}}>
        <Text style={{fontSize:26,color:'#fff',fontWeight:'800'}}>LAFFOUT</Text>
      </View>

      <View style={styles.head}>
          <Button title="Set New Goal" color="teal" onPress={showHandler}/>
      </View>
    
      <InputLayer visible={isModal} onCancel={()=> setModal(false) } onInput={btnHandler}/>
      <FlatList style={{padding:12, backgroundColor:'#999'}} data={storeResult} renderItem={data => <FlatLister title={data.item.value} id={data.item.key} onDelete={deleteHandle}/>} />
      <View style={styles.footer}>
        <Text style={{textAlign:'center',padding:5}}>
    Copywrite @ CodeGlobal 2019
    </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#bbb',
    
  },
  head:{
    padding:30,
  },
  footer:{
    marginTop:10,
    backgroundColor:'teal',
  }
 
})
