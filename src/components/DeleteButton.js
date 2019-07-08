import React from "react";
import icon from "../media/012_restart-2-128.png";
import { getThemeProps } from "@material-ui/styles";

export default function DeleteButton(props) {
    return (
        <button onClick={() => props.disassembleAvengers(props.id)}><img src={icon}/></button>
    )
}