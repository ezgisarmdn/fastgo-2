import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
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
    <><MapView
      style={styles.map}
      region={region}
      onRegionChangeComplete={(region) => setRegion(region)}
    >
      <Marker
        coordinate={{
          latitude: 39.862032157320705,
          longitude: 32.71182183993842,
        }} />
      <Marker
        coordinate={{
          latitude: 39.87091966815384,
          longitude: 32.68740044178544,
        }} />
      <Marker
        coordinate={{
          latitude: 39.900661616741466,
          longitude: 32.691058393916364,
        }} />
      <Marker
        coordinate={{
          latitude: 39.8740683202531,
          longitude: 32.64941351664429,
        }} />
      <Marker
        coordinate={{
          latitude: 39.87776222179223,
          longitude: 32.70676790286716,
        }} />
    </MapView><View>
        <TouchableOpacity style={styles.back}>
          <Text
            style={styles.backText}
            onPress={() => navigation.navigate("Home")}
          >
            Back
          </Text>
        </TouchableOpacity>
      </View></>
  );
};
export default Map;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
  back: {
    fontSize: 18,
    color: "white",
    fontWeight: "bold",
    backgroundColor: "#5FD068",
    paddingVertical: 13,
    paddingHorizontal: 30,
    overflow: "hidden",
  },
  backText: {
    textAlign: "center",
    fontSize: 24,
    color: '#ffffff',
  },
});