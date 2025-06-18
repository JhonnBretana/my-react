import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SampleUpload from './Pages/SampleUpload';

function App() {
  return (

    <Router>
      
        <Routes>
          <Route path="/" element={<SampleUpload/>} />
        
        </Routes>
      
    </Router>

    
  );
}

export default App;
