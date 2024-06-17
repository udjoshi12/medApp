import Navbar from './components/Navbar';
import Intro from './pages/Intro';
import Admin from './pages/Admin';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import SignInSide from "../src/components/signIn/SignIn"
import SalesForm from './components/SalesForm';
import PurchaseForm from './components/PurchaseForm';
import BasicTable from './components/Table';

function App() {
  return (
    <BrowserRouter>
        
    <Routes>
      <Route path="/" element={<Intro/>}/>
      <Route path="/admin" element={<Navbar/>} />
      <Route path="/login" element={<SignInSide/>} />
      <Route path="/salesform" element={<SalesForm/>} />
      <Route path="/purchaseform" element={<PurchaseForm/>} />
      <Route path="/table" element={<BasicTable/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;