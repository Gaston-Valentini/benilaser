import style from "./App.module.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./views/Home/Home";
import Treatments from "./views/Treatments/Treatments";
import FrequentlyQuestions from "./views/FrequentlyQuestions/FrequentlyQuestions";

export default function App() {
    return (
        <Router>
            <div className={style.app}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/treatments" element={<Treatments />} />
                    <Route path="/frequently-questions" element={<FrequentlyQuestions />} />
                </Routes>
            </div>
        </Router>
    );
}
