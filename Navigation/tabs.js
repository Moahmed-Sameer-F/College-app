import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Aboutus from "../Screens/Aboutus";
import Homescreen from "../Screens/Homescreen";
import Department from "../Screens/Department";




const Tab =  createBottomTabNavigator();
const Tabs=()=> {
  return (
    <Tab.Navigator>
       <Tab.Screen name="🔀Home"  component={Homescreen}></Tab.Screen>
       <Tab.Screen name="🔀Department" component={Department}></Tab.Screen>
       <Tab.Screen name="🔀Register form" component={Aboutus}></Tab.Screen>
     </Tab.Navigator>
  );
}

export default Tabs;