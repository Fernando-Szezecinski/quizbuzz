import { useRoute } from "@react-navigation/native";
import { View, Image, Text,Pressable } from "react-native";
import tw from "twrnc";

export default function Score({navigation}){
    const route = useRoute();
    const {score, total} = route.params;
    return(
        <View style={tw`flex-1 items-center`}>
             <Image 
                source={require("../../assets/splash2.jpg")}
                style={tw.style(tw`h-1/3`,{ aspectRatio:1})}/>
                <Text>You've scored {score} out of {total*10} points!</Text>
                <Pressable 
                    style={tw`bg-blue-600 mt-10 px-8 py-1 rounded`}
                    onPress={() => {navigation.navigate("Splash")}}>
                    <Text style={tw`text-white text-lg`}>Play again!</Text>
            </Pressable>
        </View>
    )
}