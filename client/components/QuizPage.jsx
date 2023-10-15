import React, {useState} from "react";
import {randomQuestion, isCorrectAnswer} from "../questions";
import Question from "./Question"

export default function QuizPage() {
    const [currentQuestion, setCurrentQuestion] = useState(randomQuestion());
    const [score, setScore] = useState(0);
    const [result, setResult] = useState("");

    function clickAnswer(answerButtonValue) {
        if (isCorrectAnswer(currentQuestion, answerButtonValue[0])) {
            setScore(score + 1);
            setResult("Correct :)");
        } else {
            setResult("Wrong :(")
        }

        setCurrentQuestion(randomQuestion());
    }

    return (
        <div className="questionDiv">
            <p>Score: <i>{score}</i></p>
            <Question currentQuestion={currentQuestion} clickAnswer={clickAnswer} />
            <p>{result}</p>
        </div>
    );
};