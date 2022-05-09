import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "./editor.css";

export default function Editor() {
  const [code, setcode] = useState("");

  useEffect(() => {
    Prism.highlightAll();
  }, [code]);

  return (
    <>
      <div>
        <textarea
          id="editing"
          onChange={(e) => {
            setcode(e.target.value);
          }}
        ></textarea>
        <pre id="highlighting" aria-hidden="true">
          <code className="language-javascript" id="highlighting-content">
            {code}
          </code>
        </pre>
      </div>
    </>
  );
}
