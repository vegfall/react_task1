import React from "react";

export default function Response(props) {


    return (
        <button key={props[0]} className="questionButton">{props[1]}</button>
    );
};