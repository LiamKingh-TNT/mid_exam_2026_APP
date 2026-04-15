import { Button } from "react-native";
import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, Pressable  } from "react-native";

import { useLocalSearchParams, useRouter, Stack, Slot } from "expo-router";
import Header from "../component/header";
import Footer from "../component/footer";
export default function Center() {
    const router = useRouter();
    const activePage = "home";
    return (
        <View style={styles.Page}>
            <Header type="default" title="任務表" />
            <View style={styles.Content}>
                <Slot />
            </View>
            <Footer type="default" title="任務表" />
        </View>
    );
}

const styles = StyleSheet.create({
    Content:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D9D9D9",
        width: "100%",
    },  
    Page: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D9D9D9",
        width: "100%",
    }
});