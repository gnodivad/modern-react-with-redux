import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");

  useEffect(() => {
    console.log("hello");
  }, [term]);

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label htmlFor="">Enter Search Term</label>
          <input
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
