import { View, StyleSheet, Image, SafeAreaView, Text } from "react-native";
import React from "react";

export default function Index() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.avatar_container}>
        <View style={{ justifyContent: "center", alignItems: "center" }}>
          <Image
            style={{
              marginBottom: 10,
              maxWidth: 150,
              maxHeight: 150,
              borderRadius: 100,
            }}
            source={require("./../assets/images/profile.jpg")}
          />
          <Text>Lave o rosto nas aguas sagradas da pia </Text>
          <Text>Nada como um dia após o outro dia</Text>
        </View>
      </View>
      <View style={styles.details_container}>
        <View style={styles.item}>
          <Text style ={styles.name}>Name:</Text>
          <Text style = {styles.data}>Maycon Douglas</Text>
        </View>
        <View style={styles.item}>
          <Text style ={styles.name}>City:</Text>
          <Text style = {styles.data}>Onchan</Text>
        </View>
        <View style={styles.item}>
          <Text style ={styles.name}>Favourite Animal</Text>
          <Text style = {styles.data}>Cat</Text>
        </View>
        <View style={styles.item}>
          <Text style ={styles.name}>Job</Text>
          <Text style = {styles.data}>None</Text>
        </View>
        
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ccc",
  },
  avatar_container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 0.4,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  details_container: {
    backgroundColor: "white",
    flex: 0.6,
  },
  item: {
    borderTopWidth: 1,
    borderColor: "black",
    flex: 0.25,
    flexDirection: "row",
    paddingHorizontal: 10,  
    alignItems: "center",

  },
  name: {
     flex: 0.8,
     color: "orange",
     fontSize: 32
  },
  data: {
    flex: 0.2,
    color: "black",
    fontSize: 22
  }
});
