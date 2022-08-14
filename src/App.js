import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header";
import SimpleForm from "./Pages/SimpleForm/SimpleForm";
import CreditCardForm from "./Pages/CreditCardForm/CreditCardForm";

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<SimpleForm/>}/>
          <Route path="/credit-card" element={<CreditCardForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
