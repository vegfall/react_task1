import React from "react";
import AnswerButton from "./AnswerButton";

export default function Question({currentQuestion, clickAnswer}) {
    const answer = Object.entries(currentQuestion.answers)
        .filter(answerFiltered => answerFiltered[1])
        .map((answerOption) => {
            return <AnswerButton
                key={answerOption}
                buttonValue={answerOption}
                clickAnswer={() => clickAnswer(answerOption)}/>
        });

    return (
        <>
            <b>{currentQuestion.question}</b>
            <p>{answer}</p>
        </>
    );
};