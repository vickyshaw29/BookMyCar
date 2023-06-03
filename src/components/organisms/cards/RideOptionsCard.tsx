import { StyleSheet, Text, SafeAreaView, TouchableOpacity, View, FlatList, Image } from 'react-native'
import React, { useState } from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectTravelTimeInFormation } from '../../../redux/slices/navSlices'

const data = [
  {
    id: "BMC-X-123",
    title: "BMCX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "BMC-XL-456",
    title: "BMC XL",
    multiplier: 1.5,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "BMC-LUX-789",
    title: "BMC LUX",
    multiplier: 2.5,
    image: "https://links.papareact.com/7pf"
  }
]

const SURGE_CHARGE_RATE = 10
const RideOptionsCard = () => {
  const navigation = useNavigation<any>();
  const [selected, setSelected] = useState<any>(null)
  const travelTimeInfo:any = useSelector(selectTravelTimeInFormation)
  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <TouchableOpacity style={[tw`absolute top-3 left-5 p-3 rounded-full`,{zIndex:1}]}>
          <Icon name="chevron-left" style={{fontSize:24}} onPress={()=>navigation.navigate('NavigateCard')}/>
        </TouchableOpacity>
        <Text style={tw`text-center py-5 text-xl`}>Select a Ride - {travelTimeInfo?.distance?.text}</Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item)=>item?.id}
        renderItem={({item})=>(
          <TouchableOpacity
           onPress={()=>setSelected(item)}
           style={tw`flex flex-row justify-between items-center px-6 ${item?.id === selected?.id ? 'bg-gray-200':''}`}>
              <Image
                style={{
                  height:100,
                  width:100,
                  resizeMode:'contain'
                }}
                source={{uri:item?.image}}
              />
              <View style={tw`-ml-6`}>
                <Text style={tw`text-xl font-semibold`}>{item?.title}</Text>
                <Text>{travelTimeInfo?.duration?.text} Travel time</Text>
              </View>
              <Text style={tw`text-xl`}>{
                new Intl.NumberFormat('en-gb',{
                  style:'currency',
                  currency:'INR'
                }).format(
                  (travelTimeInfo?.duration?.value * SURGE_CHARGE_RATE 
                    * item?.multiplier
                    )/100
                )
              }</Text>
          </TouchableOpacity>
        )}
      />
      <View style={tw`mt-auto border-t border-gray-200`}>
        <TouchableOpacity style={tw`bg-black py-3 m-3 ${!selected ? 'bg-gray-300':''}`}
          disabled={!selected}
        >
          <Text style={tw`text-xl text-center text-white`}>{`Choose ${selected?.title||""}`}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default RideOptionsCard

const styles = StyleSheet.create({})