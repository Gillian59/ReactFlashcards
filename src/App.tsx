import React from "react";
import logo from "./logo.svg";
import "./App.css";

const Flashcard = () => {
  const [question, setAnswer] = React.useState("question posée?");
};

export const App: React.FC = () => {
  return <div className="container default-flex">console.log(question);</div>;
};
