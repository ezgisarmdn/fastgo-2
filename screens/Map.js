import { StyleSheet, TouchableOpacity, Text } from "react-native";
import React, { useState } from "react";
import MapView, { Marker } from "react-native-maps";

const Map = (props) => {
  const { navigation } = props;
  const [region, setRegion] = useState({
    latitude: 39.89421886135021,
    longitude: 32.67897857062164,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  return (
    <MapView
      style={styles.map}
      region={region}
      onRegionChangeComplete={(region) => setRegion(region)}
    >
      <Marker
        coordinate={{
          latitude: 39.862032157320705,
          longitude: 32.71182183993842,
        }}
      />
      <Marker
        coordinate={{
          latitude: 39.87091966815384,
          longitude: 32.68740044178544,
        }}
      />
      <Marker
        coordinate={{
          latitude: 39.900661616741466,
          longitude: 32.691058393916364,
        }}
      />
      <Marker
        coordinate={{
          latitude: 39.8740683202531,
          longitude: 32.64941351664429,
        }}
      />
      <Marker
        coordinate={{
          latitude: 39.87776222179223,
          longitude: 32.70676790286716,
        }}
      />

      <TouchableOpacity style={styles.back}>
        <Text
          style={styles.backText}
          onPress={() => navigation.navigate("Home")}
        >
          Back
        </Text>
      </TouchableOpacity>
    </MapView>
  );
};
export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  back: {
    justifyContent: "center",
    alignSelf: "center",
    bottom: 50,
    left: 40,
    position: "absolute",
    backgroundColor: "#5FD068",
    width: 50,
    height: 30,
    borderRadius: 10,
  },
  backText: {
    textAlign: "center",
    fontSize: 30,
  },
});