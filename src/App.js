import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {  Route, Routes } from 'react-router-dom';

import AppRoutes from './routes';
import Home from './pages/Home';

function App() {

  return (
  
    <div>
   

   <AppRoutes />
   
      <Routes>
      <Route index element={<Home />} />
      
     

      </Routes>
    
      
    </div>
  
  );
}

export default App;
