import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { NavFavourites, NavOptions } from '../components/molecules'
import { useDispatch } from 'react-redux';
import { setOrigin,setDestination } from '../redux/slices/navSlices';
import { CustomAutoCompleteFromGoogle } from '../components/molecules';


const HomeScreen:React.FC = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[tw`bg-white h-full`]}>
      <View style={tw`p-5`}>
        <TouchableOpacity>
          <Text style={tw`text-4xl font-semibold py-6`}>BMC</Text>
        </TouchableOpacity>
        {/* <Image
          source={{
            uri:"https://links.papareact.com/gzs",
          }}
          style={{
            width:100,
            height:100,
            resizeMode:'contain'
          }}
        /> */}
        <CustomAutoCompleteFromGoogle
          onPress={(data: { description: any; },details:any=null)=>{
            console.log(details?.geometry,"details")
            dispatch(setOrigin({
              location:details?.geometry?.location,
              description: data?.description
            }))
            dispatch(setDestination(null))
          }}
         placeholder='Where From ?'/>
        <NavOptions/>
        <NavFavourites/>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({})