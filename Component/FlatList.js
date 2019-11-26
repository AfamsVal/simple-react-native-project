import React from 'react';
import {Text, View, TouchableNativeFeedback, StyleSheet} from 'react-native';

const FlatList = props =>{

return (
    <TouchableNativeFeedback onPress={() => props.onDelete(props.id)}>
        <View style={styles.mapped}>
        <Text style={{color:'#fff',}}>{props.title}</Text>
        </View>
    </TouchableNativeFeedback>
)

}


const styles = StyleSheet.create({
    mapped:{
        borderColor:'#dee',
        borderWidth:1,
        marginBottom:5,
        backgroundColor:'teal',
        padding:5,
      } 
})

export default FlatList;