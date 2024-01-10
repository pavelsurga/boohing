import { BrowserRouter } from 'react-router-dom';
import './App.css';
import IndexRoutes from './routes/indexRoutes';


const App = () => {
  return (
    <BrowserRouter>
      <IndexRoutes />
    </BrowserRouter>
  );
}

export default App;
