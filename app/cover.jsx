import { Button } from "react-native";
import { StyleSheet, Text, Image, View, ScrollView, TouchableOpacity, Pressable  } from "react-native";
import '../global.css';
import { useLocalSearchParams, useRouter } from "expo-router";
export default function Cover() {
    const router = useRouter();
    return (
        <Pressable style={styles.Cover} onPress={() => router.push("/center")}>
            <View style={{justifyContent:"center", alignItems:"flex-start"}}>
                <Text style={styles.CoverText}>
                    Daily
                </Text>
                <Text style={styles.CoverText}>
                    Mission
                </Text>
                <Text style={styles.CoverText}>
                    Reminder
                </Text>
            </View>
            <Text style={[styles.CoverText, {fontSize:30}]}>
                每日任務簽到器
            </Text>
            <Text style={[styles.CoverText, {fontSize:30, marginTop: 60}]}>
                Tap To Start
            </Text>
        </Pressable>
);};

const styles = StyleSheet.create({
    Cover: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#D9D9D9",
        width: "100%",
    },
    CoverText: {
        fontWeight: "bold",
        fontSize: 48,
        color: "#333333",
        fontFamily:"roboto-regular",
        fontFamily:"inter",
    }
});