import { Routes, Route } from "react-router-dom";
import MainNav from "./components/MainNav";
import ChatJmo from "./components/ChatJmo";
import Home from "./components/Home";
import Error from "./components/Error";
import "./scss/main.scss";

const App = () => {
  return (
    <>
      <MainNav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chat" element={<ChatJmo />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
