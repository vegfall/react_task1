import React from "react";
import {randomQuestion} from "../questions";
import Question from "./Question"

export default function QuizPage() {
    const question = randomQuestion();

    return (
        <div className="questionDiv">
            <Question {...question} />
        </div>
    );
};