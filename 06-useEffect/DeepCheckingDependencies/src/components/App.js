import React, { useState, useEffect } from "react";

const useAnyKeyToRender = () => {
  const [, forceRender] = useState();

  useEffect(() => {
    console.log("event hookup");
    window.addEventListener("keydown", forceRender);
    return () => {
      console.log("event un-hookup");
      window.removeEventListener("keydown", forceRender);
    };
  });
};

export default function App() {
  useAnyKeyToRender();

  useEffect(() => {
    console.log("fresh render");
  });

  return <h1>Open the console</h1>;
}
