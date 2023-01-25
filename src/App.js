import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Components/Header/Header";
import {CreditCardForm, DynamicForm, FilesForm, SimpleForm} from "./Pages";

function App() {
  return (
    <div className="container mx-auto">
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<SimpleForm/>}/>
          <Route path="/credit-card" element={<CreditCardForm/>}/>
          <Route path="/dynamic-form" element={<DynamicForm/>}/>
          <Route path="/files-form" element={<FilesForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
