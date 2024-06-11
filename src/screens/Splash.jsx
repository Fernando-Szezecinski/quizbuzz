import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import tw from 'twrnc';


export default Splash = ({navigation}) => {
    return (
        <View style={tw`flex-1 items-center`}>
            <Image 
                source={require("../../assets/splash2.jpg")}
                style={tw.style(tw`h-3/6`,{ aspectRatio:1})}/>
            <Text style={tw`text-2xl text-center mb-10 mt-10`}>Instructions</Text>

            <View style={tw`bg-yellow-600 p-2 rounded h-30 w-80 items-center justify-center`}>
                <Text style={tw`text-white text-lg`}>Each quiz has four options</Text>
                <Text style={tw`text-white text-lg`}>Progress will be shown at the top</Text>
                <Text style={tw`text-white text-lg`}>Score will be shown at the end</Text>
            </View>
            <Pressable 
                style={tw`bg-blue-600 mt-10 px-8 py-1 rounded`}
                onPress={() => {navigation.navigate("Questions")}}>
                <Text style={tw`text-white text-lg`}>Start</Text>
            </Pressable>
        </View>


    );
};

const styles = StyleSheet.create({});