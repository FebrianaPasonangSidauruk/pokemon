import { Route, Routes} from "react-router-dom";
import MainPage from "./components/MainPage";

function App() {
  return (
    <Routes>
      <>
        <Route path="/" exact element={<MainPage/>}/>
      </>
    </Routes>
  );
}

export default App;
