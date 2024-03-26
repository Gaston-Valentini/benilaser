import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

export default function App() {
    return (
        <Router>
            <div className={style.app}>
                <Navbar />
            </div>
        </Router>
    );
}
