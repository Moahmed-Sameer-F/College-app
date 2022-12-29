import React from "react";
import { Text,View,StyleSheet } from "react-native";



const Department=({navigation})=>{
    return(
        <View>
            <Text style={style.TT}> VARIOUS DEPARTMENTS📝:</Text>
            <Text style={style.list}>{'\n'}◾B.E Computer Science and Engineering</Text>
            <Text style={style.list}>{'\n'}◾B.E Electrical and Electronics Engineering</Text>
            <Text style={style.list}>{'\n'}◾B.E Mechanical Engineering</Text>
            <Text style={style.list}>{'\n'}◾B.E Biomedical Engineering </Text>
            <Text style={style.list}>{'\n'}◾B.E Artificial Intelligence and Data Science</Text>
            <Text style={style.list}>{'\n'}◾B.E Chemical Engineering</Text>
            <Text style={style.list}>{'\n'}◾B.E Information Technology</Text>
            <Text style={style.list}>{'\n'}◾B.E Structural Engineering</Text>
        </View>
    )
}
const style = StyleSheet.create({
    list:{
  paddingLeft:24,
  fontSize:18,

    },
    TT:{
        fontSize:24,
        paddingLeft:10,
        backgroundColor:'#39D84F',
        paddingTop:5,
        color:'black',
        paddingBottom:5,
        
    }
  
  
    });



export default Department;