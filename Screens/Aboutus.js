import React from "react";
import { Text,View,StyleSheet,TextInput,Button} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import submit from "./submit";

const Aboutus=({navigation})=>{
    return(
        <View>
        <View >
          <Text style={styles.form}>Admission🖋</Text>
        </View>
       
        <View >
          <TextInput style={styles.input}
            placeholder="Name"
          />
         
       
     
        <TextInput  style={styles.input}
          placeholder="Email"
         
        />
        <TextInput  style={styles.input}
          placeholder="Mobile Number"
          keyboardType="phone-pad"
          
        />

          <TextInput  style={styles.input}
            placeholder="Department"
           
          />
          <TextInput  style={styles.input}
            placeholder="City"
           
          />
        </View>
        <Button style={styles.buton}
          title="Submit"
           
        />
       
      </View>
    )
}
const styles = StyleSheet.create({
    form:{
        fontSize:29,
        color:'black',
        textAlign:'center',
        backgroundColor:'#39D84F',
        
          },
          input: {
            height: 45,
            margin: 6,
            borderWidth:.2,
            padding: 10,
            
          },
          buton:{
            width:50,
          }
  
    });



export default Aboutus;