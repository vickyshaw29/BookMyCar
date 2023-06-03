import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY} from '@env'

export const CustomAutoCompleteFromGoogle = ({placeholder ,onPress, styles,  ...props}:{placeholder:string ,onPress:any, styles?:any}) => {
  return (
    <GooglePlacesAutocomplete
    styles={{
      textInput:{
        fontSize:18
      },
      container:{
        flex:0,
      },
      ...styles,
    }}
    minLength={2}
    enablePoweredByContainer={false}
    fetchDetails
    onPress={onPress}
    nearbyPlacesAPI='GooglePlacesSearch' debounce={400} placeholder={placeholder} query={{ key:GOOGLE_MAPS_API_KEY, language:'en' }}
    {...props}
    />
  )
}

