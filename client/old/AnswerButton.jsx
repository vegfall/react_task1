import React from "react";
import {isCorrectAnswer} from "../questions";

export default function AnswerButton(props) {
    function clickAnswer() {
        console.log(props);
    }

    return (
        <button key={props[0]} className="questionButton" onClick={clickAnswer}>{props[1]}</button>
    );
};