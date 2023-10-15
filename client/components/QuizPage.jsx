import React, {useState} from "react";
import {randomQuestion} from "../questions";
import Question from "./Question"

export default function QuizPage() {
    const [currentQuestion, setCurrentQuestion] = useState(randomQuestion());
    const [score, setScore] = useState(0);

    function clickAnswer(answerButtonValue) {
        console.log(answerButtonValue)
    }

    return (
        <div className="questionDiv">
            <p>Score: <i>{score}</i></p>
            <Question currentQuestion={currentQuestion} clickAnswer={clickAnswer} />
        </div>
    );
};