import { Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import ChatJmo from "./components/ChatJmo";
import "./scss/main.scss";

const App = () => {
  return (
    <>
      <MainNav />
      <main>
        <Routes>
          <Route index element={<ChatJmo />} />
          <Route path="/chat" element={<ChatJmo />} />
          {/* @TODO - Make a noMatch page
          <Route path="*" element={<NoMatch />} /> */}
        </Routes>
      </main>
    </>
  );
};

export default App;
