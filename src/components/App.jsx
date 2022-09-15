import { Route, Routes } from "react-router-dom";
import Difficulty from "./Difficulty";
import Header from "./Header";
import Main from "./Main";
import Topic from "./Topic";
import Game from "./game/Game";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GameOver from "./game/GameOver";

function App() {
  window.addEventListener("offline", () => {
    toast.info("The Page is now offline!");
  });
  window.addEventListener("online", () => {
    toast.info("Online Again!");
  });
  return (
    <>
      <Header />
      <ToastContainer autoClose={2000} />
      <main>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="/Topic" element={<Topic />} />
          <Route path="/Difficulty" element={<Difficulty />} />
          <Route path="/Game" element={<Game />} />
          <Route path="/GameOver" element={<GameOver />} />
          <Route path="*" element={<Main />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
