import React from 'react'
import "./setupMaterialWebComponents";
function log() {
  console.log("It works!");
}

function TonalButton({children,onClick}) {
  
  return (
    <md-filled-tonal-button label="Tonal Button" onClick={onClick}>
      {children}
    </md-filled-tonal-button>
  );
}

export default TonalButton;