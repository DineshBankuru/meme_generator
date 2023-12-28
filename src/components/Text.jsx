import React, { useState } from "react";
import Draggable from "react-draggable";
function Text() {
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState("Double Click to Edit");
  return (
    <Draggable>
      {edit ? (
        <input
          value={val}
          onChange={(e) => setVal(e.target.value)}
          onDoubleClick={(e) => setEdit(false)}
        />
      ) : (
        <h2 onDoubleClick={(e) => setEdit(true)}>{val}</h2>
      )}
    </Draggable>
  );
}

export default Text;
