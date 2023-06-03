import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Map } from '../components/molecules'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigateCard, RideOptionsCard } from '../components/organisms'
import Icon from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'

const MapScreen = () => {
  const navigation = useNavigation<any>()
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")} style={[tw`absolute left-5 top-10`,{zIndex:1}]}>
        <Icon name='menu' size={30}/>
      </TouchableOpacity>
      <View style={tw`h-1/2`}>
        <Map/>
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
            <Stack.Screen
              name='NavigateCard'
              component={NavigateCard}
              options={{
                headerShown:false
              }}
            />
            <Stack.Screen
              name='RideOptionsCard'
              component={RideOptionsCard}
              options={{
                headerShown:false
              }}
            />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})