import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Project from "./pages/Project";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sertificate from "./pages/Sertificate";
import FinanceReport from "./pages/FinanceReport";
import FinDocPdfPage from "./pages/FinDocPdfPage";
import audit2023Pdf from './img/financeDoc/audit2023.pdf'
import audit2019Pdf from './img/financeDoc/audit2019.pdf'
import audit2022Pdf from './img/financeDoc/audit2022.pdf'
import audit2020Pdf from './img/financeDoc/audit2020.pdf'
import report2021Pdf from './img/financeDoc/report2021.pdf'
import coruption from './img/coruption/Appened.PDF'
import ProfUnion from "./pages/ProfUnion";
import Corrumpere from "./pages/Corrumpere";
import PrivateQuestion from "./pages/PrivateQuestion";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/project" element={<Project />} />
        <Route path="/sertificate" element={<Sertificate />} />
        <Route path="/fin" element={<FinanceReport />} />
        <Route path="/profUnion" element={<ProfUnion />} />
        <Route path="/coruption" element={<Corrumpere/>} />
        <Route path="/audit2023" element={<FinDocPdfPage pdf={audit2023Pdf}/>} />
        <Route path="/audit2019" element={<FinDocPdfPage pdf={audit2019Pdf}/>} />
        <Route path="/audit2022" element={<FinDocPdfPage pdf={audit2022Pdf}/>} />
        <Route path="/audit2020" element={<FinDocPdfPage pdf={audit2020Pdf}/>} />
        <Route path="/report2021" element={<FinDocPdfPage pdf={report2021Pdf}/>} />
        <Route path="/coruptionAppend" element={<FinDocPdfPage pdf={coruption}/>} />
        <Route path="/privateQuestion" element={<PrivateQuestion/>} />
        <Route path="/contacts" element={<Contact/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
