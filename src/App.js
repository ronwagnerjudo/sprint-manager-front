import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./pages/Menu/Menu"
import Homepage from "./pages/Homepage/Homepage"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tasks from './pages/Tasks/Tasks';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Menu />
      <BrowserRouter>
        <Routes>
          <Route index path="*" element={<Homepage />} />
          <Route path="/tasks" element={<PrivateRoute><Tasks /></PrivateRoute>} />
          <Route path="/settings" element={<></>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
