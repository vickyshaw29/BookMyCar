import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { CustomAutoCompleteFromGoogle, NavFavourites } from '../../molecules'
import { setDestination } from '../../../redux/slices/navSlices'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import Icon from 'react-native-vector-icons/AntDesign'



const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation<any>();
  return (
    <View style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good morning, Vicky</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
            <CustomAutoCompleteFromGoogle
                placeholder='Where to'
                onPress={(data: { description: any; },details:any=null)=>{
                    console.log(details?.geometry?.location,"Location")
                    dispatch(setDestination({
                      location:details?.geometry?.location,
                      description: data?.description
                    }))
                    navigation.navigate('RideOptionsCard')
                  }}
                styles={styles}
            />
        </View>
         <NavFavourites/>    
         <View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100 mt-4`}>
            <TouchableOpacity style={tw`flex flex-row justify-between bg-black justify-between w-24 px-4 py-3 rounded-full`}
              onPress={()=>navigation.navigate("RideOptionsCard")}
              >
                <Icon name='car' color="white" style={{fontSize:16}}/>
                <Text style={tw`text-white text-center`}>Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`flex flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                <Icon name='car' color="black" style={{fontSize:16}}/>
                <Text style={tw`text-black text-center`}>Eats</Text>
            </TouchableOpacity>
         </View>
      </View>
    </View>
  )
}

export default NavigateCard

const styles = StyleSheet.create({
    container:{
        backgroundColor:'white',
        paddingTop:20,
        flex:0
    },
    textInput:{
        backgroundColor:'#DDDDDF',
        borderRadius:0,
        fontSize:18
    },
    textInputContainer:{
        paddingHorizontal:20,
        paddingBottom:0
    }
})