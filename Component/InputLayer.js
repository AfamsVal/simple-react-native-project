import React, {useState} from 'react';
import {View, TextInput, Button, StyleSheet, Modal} from 'react-native';

const InputLayer = props =>{

    const [getInput,setInput] = useState('');

    const inputHandler = text =>{
        setInput(text)
    }

    const saveInputHandle = () =>{
        props.onInput(getInput);
        setInput('');
    }

    return (
    <Modal visible={props.visible} animationType="slide">
    <View style={styles.head}>
        <TextInput style={styles.tInput} placeholder="Enter something.." onChangeText={inputHandler} placeholderTextColor="teal"/>
       <View style={styles.myBtn}>
       <View style={styles.myBtnInner}>
    <Button color="teal" style={styles.btn} onPress={saveInputHandle} title="ADD" /></View>
    <View style={styles.myBtnInner}>   
      <Button color="red" style={styles.btn} onPress={props.onCancel} title="CANCEL" />
    </View>
    </View>
     </View>

    </Modal>
    )
}

const styles = StyleSheet.create({
    tInput:{
        marginBottom:10,
        borderBottomColor:'teal',
        borderBottomWidth:1,
        height:40,
        width:'80%',
        },
        myBtn:{
          flexDirection:'row',
          justifyContent:'space-between',
          width:'60%',
        },
        myBtnInner:{
            width:'46%',
        },
        head:{
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center',
            paddingLeft:30,
            paddingRight:30,
            flex:1
          },
})

export default InputLayer;