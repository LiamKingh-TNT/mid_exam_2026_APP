import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, Pressable } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { useLocalSearchParams, useRouter } from "expo-router";
import React from "react";

export default function Page() {
  const { id, name, author, publishedTime, popularity, cover, desc } = useLocalSearchParams();
  const router = useRouter();
  const [collected, setCollected] = React.useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Pressable  onPress={() => router.back()}>
          <Image
            source={require("../../assets/icons/icon_back.png")}
            style={styles.headerIcon}
          />
        </Pressable>
        <Pressable  onPress={() => setCollected(!collected)}>
          <Image
            source={collected ? require("../../assets/icons/icon_bookmark_actived.png") : require("../../assets/icons/icon_bookmark.png")}
            style={styles.headerIcon}
          />
        </Pressable>
      </View>
      <ScrollView style={styles.body} 
      contentContainerStyle={{ alignItems: "center", flexDirection: "column", paddingBottom: 40}}>
        
        <Image  source={cover} style={styles.bookCover}/>
        <View style={{flexDirection: "column", alignItems: "center"}}>
          <Text style={styles.bookName}>{name}</Text>
          <Text style={styles.bookAuthor}>{author}</Text>
          <View style={styles.bookStars}>
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                source={
                  index < Math.floor(popularity)
                    ? require("../../assets/icons/icon_star_filled.png")
                    : require("../../assets/icons/icon_star_empty.png")
                }
                style={{ width: 14, height: 14 }}
              />
            ))}
            <Text style={{ marginLeft: 8, fontSize: 14, color: "#666666", fontFamily:"roboto-regular" }}>
              {parseFloat(popularity).toFixed(1)+"/5.0"}
            </Text>
          </View>
        </View>
        <Text style={styles.bookDescription}>{desc}</Text>
        <Pressable onPress={()=>{}} style={{marginTop: 50, flexDirection: "row",  justifyContent: "center", alignItems: "center", width: "hug", height:"hug", padding: 10, backgroundColor:"#6200EE" }}>
            <Text style={{ color: "white", fontSize: 16, fontFamily: "roboto-medium" }}>
              Buy Now for $46.99
            </Text>
        </Pressable>
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  header:{
    width: "100%",
    height: 56,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: 8
  },
  headerIcon: {
    width: 40,
    height: 40,
  },
  body:{
    flex: 1,
    width: "100%",
    backgroundColor: "#F5F5F5",
    flexDirection: "column",
    padding: 20,
    paddingTop: 8,
  },
  bookCover: {
    width: 210,
    height: 300,
    borderRadius: 8,
  },
  bookName: {
    fontSize: 24,
    color: "#333333",
    fontFamily:"roboto-medium",
    marginTop: 12,
  },
  bookAuthor: {
    fontSize: 14,
    color: "#666666",
    fontFamily:"roboto-regular",
    marginTop: 4,
  },
  bookDescription: {
    fontSize: 14,
    color: "#333333",
    fontFamily:"roboto-regular",
    marginTop: 12,
    textAlign: "center",
  },
  bookStars: {
    flexDirection: "row",
    marginTop: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  bookStar: {
    width: 14,
    height: 13,
    marginHorizontal: 2,
  },

});