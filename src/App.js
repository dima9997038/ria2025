import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Email from "./components/Email";
import {useState} from "react";
import About from "./components/About";

function App() {
    const [email, setEmail] = useState('');
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home email={email} setEmail={setEmail} />}/>
                <Route path="/about" element={<About email={email} setEmail={setEmail} />}/>
                <Route path="/email" element={<Email email={email} setEmail={setEmail}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
