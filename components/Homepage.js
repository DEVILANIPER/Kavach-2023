import { StyleSheet,
    View,
    Alert,
     Text,
     TextInput,
     TouchableOpacity ,
     Image
    } from 'react-native'
  import React from 'react'
  import { useState } from 'react';
import { handleCallPress, handleTextPress } from './Backend';




  const Header=()=>{

     const [search,setSearch]=useState('void')

    return(<View style={styles.header}>
    <View style={{flexDirection:"row",justifyContent:'space-between',marginTop:10}} >
  
    <Text style={{fontSize:25,color:'white',fontWeight:'bold'}}>
    Hello..
    </Text>
    <Image source={require('./assets/nav.png')}     style={{width:43,height:40}} />
    </View>
  <Text style={{fontSize:20,marginTop:10,color:'white'}}>
  How can we help you?
  </Text>
  
   <TextInput
          style={styles.input}
       
         
          placeholder="Search box"
           placeholderTextColor="#0A73A0" 
          keyboardType="default"
          onChangeText={(val)=>setSearch(val)}  // storing whatever user is typing ,we store it in a local state
        />
  
    
    </View>
    );
  
   }  // header ends
   const Mid=()=>{

    return(
      <View style={styles.mid}>
        
        <View style={styles.btn_container}>
    
    <View>
      <TouchableOpacity 
    onPress={() => handleTextPress(['+917982841013','+918920276362'])}>
        <Image source={require('./assets/L2.png')}   style={styles.btn_img}/>
    </TouchableOpacity>
    <Text> Send my location</Text>
    </View>
    <View>
      <TouchableOpacity 
    onPress={() => Alert.alert('Button with adjusted color pressed')}>
        <Image source={require('./assets/L1.png')}   style={styles.btn_img}/>
    </TouchableOpacity>
    <Text>Emergency Contacts</Text>
    </View>
    
      </View>
    
      
    <TouchableOpacity 
    onPress={() => handleCallPress(['+917982841013'])}>
    
    <View style={{position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center'}}>
    
    <Image source={require('./assets/sos.png')}   style={styles.sos}/>
   
    
    </View>
    </TouchableOpacity>
    
    
    
    
        <View style={[styles.btn_container,{marginTop:'10%'}]}>
      
    <View>
      <TouchableOpacity 
    onPress={() => Alert.alert('Button with adjusted color pressed')}>
        <Image source={require('./assets/L3.png')}   style={styles.btn_img}/>
    </TouchableOpacity>
    <Text> Self defense tips</Text>
    </View>
    <View>
    
      <TouchableOpacity 
    onPress={() => Alert.alert('Button with adjusted color pressed')}>
        <Image source={require('./assets/L4.png')}   style={styles.btn_img}/>
    </TouchableOpacity>
    <Text>    My Safe zone</Text>
    </View>
    
    
      </View>
    
      </View>
    );
    
    
    
    } //mid ends
    














  
  
  export default function Homepage() {
    return (
        <View >
        <Header/>
       <Mid/>         
       </View>
    )
  }




  //style sheet

  const styles = StyleSheet.create({


    header:{
    backgroundColor:'#3B7E94', 
    
    padding:10,
    paddingBottom:'25%'
    
    },
    
     text:{
    fontSize:30,
    color:'white'
     }
    
    ,input:{
      marginTop:20,
      width:300,
      padding:10 ,
      paddingLeft:'5%',  
      backgroundColor:'white',
      borderRadius:20,
      
      fontSize:20 // affect placeholder text
     },
    
    mid:{
      backgroundColor:'#ADD8E6'
    },
    
    btn_container:{
    flexDirection:"row",
    justifyContent:'space-between',
    padding:10,
    paddingBottom:'20%'
    },
    
    
    btn_img:{
    width:109,
    height:110,
    },
    
    sos:{
      width:150,
      height:150,
     
      
    }
    ,
    
   
    
    });   //style sheet ends
    