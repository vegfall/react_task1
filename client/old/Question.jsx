import React from "react";
import AnswerButton from "./AnswerButton";

export default function Question(props) {
    const testing = Object.entries(props)

    console.log(testing)

    const answer = Object.entries(props.answers)
        .filter(question => question[1])
        .map((question) => {
            return <AnswerButton {...question}/>
        });

    return (
        <>
            <p>{props.question}</p>
            <p>{answer}</p>
        </>
    )
};