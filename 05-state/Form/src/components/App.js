import React from "react";
import AddColorForm from "./AddColorForm";
export default () => (
  <AddColorForm
    onNewColor={(title, color) => {
      console.log(title, color);
    }}
  />
);
