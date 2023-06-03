import {Platform, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import tw from 'twrnc'
import { useSelector } from 'react-redux';
import { selectDestination, selectOrigin, selectTravelTimeInFormation, setTravelTimeInformation } from '../../../redux/slices/navSlices';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';

const Map = () => {
  const dispatch = useDispatch();
  const origin:any = useSelector(selectOrigin)
  const destination:any = useSelector(selectDestination)
  const mapRef = useRef<any>(null);

  useEffect(()=>{
    if(!origin || !destination) return;

    mapRef.current?.fitToSuppliedMarkers(['origin','destination'],{
      edgePadding:{ top:50, bottom:50, left:50, right:50 }
    })
  },[origin, destination])

  useEffect(()=>{
    if(!origin||!destination) return;
    const getTravelTime = ()=> {
      const URL = `https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin?.description}&destinations=${destination?.description}&key=${GOOGLE_MAPS_API_KEY}`
      fetch(URL).then(res=>res.json()).then(data=>{
        console.log(data,"fetched info")
        dispatch(setTravelTimeInformation(data?.rows[0]?.elements[0]) as any)
      })
      .catch(err=>console.log(err,"error while fetching details"))
    }
    getTravelTime()
  },[origin, destination, GOOGLE_MAPS_API_KEY])

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={[tw`flex-1`,styles.map]}
        initialRegion={{
          latitude: origin?.location?.lat || 37.78825,
          longitude: origin?.location?.lng || -122.4324,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        provider={PROVIDER_GOOGLE}
      >
        {origin && destination && (
            <MapViewDirections
              origin={{
                latitude: origin?.location?.lat,
                longitude: origin?.location?.lng
              }}
              destination={{
                latitude:destination?.location?.lat,
                longitude:destination?.location?.lng
              }}
              apikey={GOOGLE_MAPS_API_KEY}
              strokeWidth={3}
              strokeColor='black'
            />
        )}
        {
          origin?.location && (
            <Marker
              coordinate={{
                latitude:origin?.location?.lat,
                longitude: origin?.location?.lng
              }}
              title='Origin'
              description={origin?.description}
              identifier='origin'
            />
          )
        }
        {
          destination?.location && (
            <Marker
              coordinate={{
                latitude:destination?.location?.lat,
                longitude: destination?.location?.lng
              }}
              title='Destination'
              description={destination?.description}
              identifier='destination'
            />
          )
        }
      </MapView>
    </View>
  );
};

export default Map;

const styles = StyleSheet.create({
  container: {
    // ...StyleSheet.absoluteFillObject,
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });
