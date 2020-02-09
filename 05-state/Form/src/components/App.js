import React, { useState } from "react";
import AddColorForm from "./form/AddColorForm";
import ControlledAddColorForm from "./form/ControlledAddColorForm";
import CustomHooksAddColorForm from "./form/CustomHooksAddColorForm";
import colorData from "./ui/color-data.json";
import ColorList from "./ui/ColorList.js";
import { v4 } from "uuid";

export default () => {
  const [colors, setColors] = useState(colorData);
  return (
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
          const newColors = [
            ...colors,
            {
              id: v4(),
              rating: 0,
              title,
              color
            }
          ];
          setColors(newColors);
        }}
      />
      <ColorList
        colors={colors}
        onRemoveColor={id => {
          const newColors = colors.filter(color => color.id !== id);
          setColors(newColors);
        }}
        onRateColor={(id, rating) => {
          const newColors = colors.map(color =>
            color.id === id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
      />
    </>
  );
};
