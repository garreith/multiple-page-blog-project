import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Blog from './Blog';
import { UsersId, Users, Favorites, History } from './Users';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Navigate to='/blog' replace />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/blog/users' element={<Users />} />
          <Route path='/blog/users/:id' element={<UsersId />} />
          <Route path='/blog/users/:id/favorites' element={<Favorites />} />
          <Route path='/blog/users/:id/history' element={<History />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
