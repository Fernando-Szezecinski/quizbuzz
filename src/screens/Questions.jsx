import { Alert, Pressable, StyleSheet, Text, View } from "react-native";
import { reactQuestions } from "../config/question";
import { useState } from "react";
import tw from "twrnc";
import * as Progress from 'react-native-progress';


export default function Questions({navigation}){
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isCorrect, setIsCorrect] = useState(null);
    const [quizProgress, setQuizProgress] = useState(reactQuestions.length);

    const progress = (currentQuestionIndex +1)/quizProgress;

    const handleNext = () => {
        if(currentQuestionIndex === reactQuestions.length-1){
            navigation.navigate("Score", {score: score, total: reactQuestions.length});
        }else{
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setIsCorrect(null);
        }
        
    }

    const handleAnswer = (pressedOption) => {
        setSelectedOption(pressedOption);

        const IsAnswerCorrect = reactQuestions[currentQuestionIndex].correctAnswer === pressedOption;

        setIsCorrect(IsAnswerCorrect);

        if(IsAnswerCorrect){
            setScore((previousScore) => previousScore + 10);
        }
    }

    return (
        <View style={tw`mt-6 p-4`}>
            <Text style={tw`text-3xl mb-4`}>{reactQuestions[currentQuestionIndex].question}</Text>
            {
                reactQuestions[currentQuestionIndex].options.map((option) => (
                    <Pressable 
                        style={tw`border-2 border-purple-500 p-4 my-2 rounded-md 
                        ${ 
                            selectedOption === option 
                                ? isCorrect 
                                    ? "bg-green-200 border-green-500" 
                                    : "bg-red-200 border-red-500" 
                                : "border-purple-500"
                        }`}
                        key={option}
                        onPress={()=> handleAnswer(option)}
                        // disabled={selectedOption}
                        >
                        <Text style={tw`text-lg`}>{option}</Text>
                    </Pressable>
                ))
            }
            <Pressable 
                style={tw`bg-purple-500 p-4 rounded-md`}
                onPress={() => handleNext()}
                >
                <Text style={tw`text-white text-center text-lg font-bold`}>
                    {
                        currentQuestionIndex === reactQuestions.length-1 ? "Finish" : "Next"
                    }</Text>
            </Pressable>
            <View style={tw`flex-row mt-4`}>
                <View style={tw`flex-1`}>
                    <Progress.Bar progress={progress} width={null} height={20}/>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({});