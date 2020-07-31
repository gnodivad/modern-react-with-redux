import React from "react";
import { BrowserRouter, Link, Route } from "react-router-dom";

const PageOne = () => {
  return (
    <div>
      PageOne
      <Link to="/pagetwo">Navigate to Page Two</Link>
    </div>
  );
};

const PageTwo = () => {
  return (
    <div>
      PageTwo
      <Link to="/">Navigate to Page One</Link>
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
