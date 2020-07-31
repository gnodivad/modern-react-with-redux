import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne BAD!!
      <a href="/pagetwo">Navigate to Page Two</a>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo BAD!!
      <a href="/">Navigate to Page One</a>
    </div>
  );
};

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route path="/" exact component={PageOne} />
        <Route path="/pagetwo" component={PageTwo} />
      </BrowserRouter>
    </div>
  );
}

export default App;
