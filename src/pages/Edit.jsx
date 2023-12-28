import React, { useState, createRef } from "react";
import { Button } from "react-bootstrap";

import { useSearchParams } from "react-router-dom";
import Text from "../components/Text";

import { exportComponentAsJPEG } from "react-component-export-image";

const EditPage = () => {
  const [params] = useSearchParams();
  // console.log(params.get("url"));
  const [count, setCount] = useState(0);
  const addText = () => {
    setCount(count + 1);
  };

  const memeRef = createRef();

  return (
    <div>
      <div
        style={{ width: "600px", marginTop: "25px", border: "1px solid" }}
        ref={memeRef}
        className="meme mt-25 mb-25"
      >
        <img
          src={params.get("url")}
          alt="memeImage"
          style={{ width: "300px" }}
        />

        {Array(count)
          .fill(0)
          .map((e) => (
            <Text />
          ))}
      </div>

      <Button onClick={addText}>Add Text</Button>
      <Button variant="success" onClick={() => exportComponentAsJPEG(memeRef)}>
        Save
      </Button>
    </div>
  );
};

export default EditPage;
