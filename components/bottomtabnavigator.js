import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Transactionscreen from '../screens/transaction';
import Searchscreen from '../screens/search';
import Ionicons from "react-native-vector-icons/Ionicons"
const Tab = createBottomTabNavigator()


export default class Bottomtabnavigator extends React.Component {
  render() {
    return (
     <NavigationContainer>
         <Tab.Navigator
         screenOptions={({route})=>({
            tabBarIcon:({focused,colour,size})=>{
                let iconname;
                if(route.name==="Transaction"){
                    iconname = "book"
                } else if(route.name==="Search"){
                    iconname= "search"
                }
                return(
                    <Ionicons name={iconname} size={size} color={colour}/>
                )
                
            }
         })}
         tabBarOptions = {{
             activeTintColor:"white",
            inactiveTintColor:"black",
            style:{
                height:130,
                borderTopWidth:0,
                backgroundColor:"#5653d4"
            },
            labelStyle:{
                fontSize:20
            },
            labelPosition:"beside-icon",
            tabStyle:{
                marginTop:25,
                marginLeft:10,
                marginRight:10,
                borderRadius:30,
                borderWidth:2,
                alignItems:"center",
                justifyContent:"center",
                backgroundColor:"#5653d4"
            }
         }}
         >
             <Tab.Screen name="Transaction" component = {Transactionscreen}/>
             <Tab.Screen name="Search" component = {Searchscreen}/>
         </Tab.Navigator>
     </NavigationContainer>
    );
  }
}

