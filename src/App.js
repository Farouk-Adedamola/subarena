import { Fragment } from "react";

import Nav from "./Pagination/Nav/Nav";
// import Header from "./Components/Header/Header";
import Area from "./Components/Header/Area/Area";
import Wedo from "./Components/Wedo/Wedo";
import About from "./Components/WhoWeAre/About";

function App() {
  return (
    <Fragment>
      <Nav />
      {/* <Header /> */}
      <Area />
      <Wedo />
      <About />
    </Fragment>
  );
}

export default App;
