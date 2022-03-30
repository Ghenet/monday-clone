import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from './components/Nav';
import DashBoard from "./pages/DashBoard";
import TicketPage from './pages/TicketPage';

const App = () => {
  return (
    <div className="app">
     <BrowserRouter>
       <Nav />
       <Routes>
         <Route path='/' element={<DashBoard />} />
         <Route path='/ticket' element={<TicketPage />} />
         <Route path='/ticket/:id' element={<TicketPage editMode={true}/>} />
       </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
