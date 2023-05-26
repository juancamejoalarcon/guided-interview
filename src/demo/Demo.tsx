import Menu from "./Menu";
import { BrowserRouter } from "react-router-dom";
import Playground from "./Playground";

function Demo() {
  return (
    <BrowserRouter>
      <Menu>
        <Playground />
      </Menu>
    </BrowserRouter>
  );
}

export default Demo;
