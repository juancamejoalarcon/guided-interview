import Menu from "./Menu";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Playground from "./Playground";
import Text from "./Text";

function Demo() {
  return (
    <BrowserRouter>
      <Menu>
        <Routes>
          <Route path="/" element={<Playground />} />
          <Route path="/questions" element={<Playground />} />
          <Route path="/text" element={<Text />} />
        </Routes>
      </Menu>
    </BrowserRouter>
  );
}

export default Demo;
