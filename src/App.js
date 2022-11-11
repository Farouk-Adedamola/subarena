import { Fragment } from "react";
import Header from "./Components/Header/Header";
import Area from "./Components/Header/Area/Area";
import Wedo from "./Components/Wedo/Wedo";

function App() {
  return (
    <Fragment>
      <Header />
      <Area />
      <Wedo />
    </Fragment>
  );
}

export default App;
