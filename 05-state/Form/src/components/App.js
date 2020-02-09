import React from "react";
import AddColorForm from "./AddColorForm";
import ControlledAddColorForm from "./ControlledAddColorForm";
import CustomHooksAddColorForm from "./CustomHooksAddColorForm";
export default () => (
  <>
    <AddColorForm
      onNewColor={(title, color) => {
        console.log(title, color);
      }}
    />
    <ControlledAddColorForm
      onNewColor={(title, color) => {
        console.log(title, color);
      }}
    />
    <CustomHooksAddColorForm
      onNewColor={(title, color) => {
        console.log(title, color);
      }}
    />
  </>
);
