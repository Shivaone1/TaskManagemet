import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
// import Signin from './components/registration/Signin';
// import Signup from './components/registration/Signup';
import Home from './pages/home/Home';
import TaskManager from './pages/taskmanagement/TaskManager';
import Dashboard from './pages/dashboard/Dashboard';
// import RequireAuth from './utils/RequireAuth';

function App () {
  return (
    <>

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signin' element={<Dashboard />}/>
          <Route path='/signup' element={<Dashboard />}/>
          <Route path='/taskmanager' element={<TaskManager />}/>
          <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
