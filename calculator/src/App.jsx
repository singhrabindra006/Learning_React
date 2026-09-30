import React from "react";
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";

const App = () => {
  return (
    <div className={styles.calculator}>
      <Display />
      <ButtonContainer></ButtonContainer>
    </div>
  );
};

export default App;
