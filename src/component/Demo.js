import React, { useState } from "react";

const Demo = () => {
  const [first, setFirst] = useState("");

  return (
    <div className="mt-5 mx-5">
      <input value={first} onChange={(event) => setFirst(event.target.value)} />
      {console.log(setFirst)}
      <br /> <br />
      <button>submit</button>
    </div>
  );
};

export default Demo;
