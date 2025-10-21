import './index.css';
import { Route, Routes } from 'react-router-dom';
import { Home, Login } from './containers/Public';
import { path } from './ultils/contant'
import Register from './containers/Public/Register';
function App() {
  return (
    <div className="h-screen w-screen bg-primary">
      <Routes>
        <Route path={path.HOME} element={<Home />} >
          <Route path={path.LOGIN} element={<Login />} />
          <Route path={path.REGISTER} element={<Register />} />

        </Route>
      </Routes>
    </div>
  );
}

export default App;
