import React from "react";
import { Text,View,StyleSheet,Image } from "react-native";



const Homescreen=({navigation})=>{
    return(
        <View>
    <Text style={style.title}>🎄KPRIET</Text>
            <Text style={style.content}>{'\n'}KPR Institute of Engineering and Technology is an autonomous engineering college
             established in the year 2009 , Coimbatore, Tamil Nadu. KPRIET is approved by AICTE, New Delhi
              and affiliated to Anna University, Chennai.[1] Institution is accredited by NAAC[2] with "A" grade
               and courses are approved by National Board of Accreditation (NBA). Courses were 
               offered under Bachelor's & Master's Degree as well.{'\n'}{'\n'}</Text>
<Text style={style.ph}>Phone no:7653498786</Text>
<Text style={style.ph}>Address: {'\n'}Avinashi - Coimbatore Road, Arasur, Tamil Nadu 641407</Text>
        </View>
    )
}

const style = StyleSheet.create({
    title:{
  fontSize:34,
  color:'black',
  textAlign:'center',
  backgroundColor:'#39D84F',
  
    },
    content:{
lineHeight:25,
fontSize:15,

    },
    ph:{
        fontSize:24,
        
    }
  
  
    });



export default Homescreen;