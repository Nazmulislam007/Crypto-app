import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import CoinPage from "./Pages/CoinPage";
import HomePage from "./Pages/HomePage";
import { useStyles } from "./styles/AppStyle";

function App() {
  const classes = useStyles();
  return (
    <div className={classes.App}>
      <Header />
      <Routes>
        <Route path="/" index element={<HomePage />} />
        <Route path="coin/:id" element={<CoinPage />} />
      </Routes>
    </div>
  );
}

export default App;
