import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Entypo'
import tw from 'twrnc'
import { useDispatch } from 'react-redux'
import { setDestination } from '../../../redux/slices/navSlices'
import { useNavigation } from '@react-navigation/native'

const data = [
  {
    id: '123',
    icon: 'home',
    title : 'Home',
    location:  {"lat": 22.5287045, "lng": 88.3782746},
    destination: "214/A, Picnic Garden Road, Kata Pukur, Kasba, Kolkata, West Bengal, India"
  },
  {
    id: '456',
    icon: 'briefcase',
    title : 'Work',
    location: {"lat": 22.5735314, "lng": 88.4331189},
    destination: "Sector V, Bidhannagar, Kolkata, West Bengal, India"
  }
]

const NavFavourites = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<any>()
  return (
    <FlatList
      data={data}
      keyExtractor={(item)=>item?.id}
      ItemSeparatorComponent={()=>(
        <View style={[tw`bg-gray-200`,{height:0.5}]}/>
      )}
      renderItem={({item})=>(
        <TouchableOpacity style={tw`flex-row items-center p-5`} onPress={()=>{
          dispatch(setDestination({
            location:item?.location,
            description: item?.destination
          }))
          navigation.navigate("RideOptionsCard")
        }}>                    
          <View style={[tw`p-3 bg-black rounded-full w-10 mt-2`]}>
            <Icon name={item?.icon} color="white" style={{fontSize:16}}/>
          </View>
          <View style={tw`ml-5`}>
            <Text style={tw`font-semibold text-lg`}>{item?.title}</Text>
            <Text style={tw`text-gray-500`}>{item?.destination}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  )
}

export default NavFavourites

const styles = StyleSheet.create({})