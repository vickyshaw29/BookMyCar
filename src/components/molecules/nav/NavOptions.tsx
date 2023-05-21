import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { selectOrigin } from '../../../redux/slices/navSlices'


const data = [
    {
        id: "123",
        title: 'Get a ride',
        image: "https://links.papareact.com/3pn",
        screen:'MapScreen'
    },
    {
        id: "456",
        title: 'Order food',
        image: "https://links.papareact.com/28w",
        screen:'EatsScreen'  
    }
]

const NavOptions = () => {
    const navigation = useNavigation<any>();
    const origin = useSelector(selectOrigin)
  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item)=>item?.id}
        renderItem={({item})=>(
            <TouchableOpacity style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40`}
            onPress={()=>navigation.navigate(item?.screen)}
            disabled={!origin}
            >
                <View style={tw`${!origin && 'opacity-20'}`}>
                    <Image
                        source={{
                            uri:item?.image
                        }}
                        style={{
                            width:120,
                            height:120,
                            resizeMode:'contain'
                        }}
                    />
                    <Text style={tw`mt-2 text-lg font-semibold`}>{item?.title}</Text>
                    <View style={[tw`p-3 bg-black rounded-full w-10 mt-2`]}>
                        <Icon name='arrowright' color="white" style={{fontSize:16}}/>
                    </View>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})