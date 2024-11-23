import React from "react";
import style from "./ErrorMessage.module.css";
import { ErrorMessageProps } from "../App/App.types";

const ErrorMessage: React.FC<ErrorMessageProps> = () => {
  return <p className={style.errorMessage}>Oops, something went wrong... 🤷‍♂️</p>;
};

export default ErrorMessage;
