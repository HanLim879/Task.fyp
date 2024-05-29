import React, {useEffect, useRef} from 'react';
import {View, Text, PermissionsAndroid, Image, StyleSheet} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';

const Location = () => {

  const INITIAL_REGION = {
    
      latitude: 4.3348,
      longitude: 101.1351,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
  
  }
  
  return (
    
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        region={INITIAL_REGION}
      showsUserLocation
    showsMyLocationButton
    >
      <Marker coordinate={{
        latitude: 4.3348,
        longitude: 101.1351,
      }}
        image={require('../../components/assets/map_marker.png')}
        title="Test Title"
        description="This is the test desc"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>Task #1</Text>
              <Text> A simple task</Text>
              
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />

            
          </View>
        </Callout>
      </Marker>
        </MapView>
    
  );
};

export default Location;

const styles = StyleSheet.create({
  map: {
    height: '100%'
  },
  // Callout bubble
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  // Arrow below the bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
    // marginBottom: -15
  },
  // Character name
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  // Character image
  image: {
    width: "100%",
    height: 80,
  },
});
