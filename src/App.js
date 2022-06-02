import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import About from './pages/About/About';
import Appointment from './pages/Appointment/Appointment';
import ContactUs from './pages/Contact/ContactUs';
import AddDoctors from './pages/Dashboard/AddDoctors';
import Dashboard from './pages/Dashboard/Dashboard';
import ManageDoctor from './pages/Dashboard/ManageDoctor';
import MyAppointment from './pages/Dashboard/MyAppointment';
import MyHistory from './pages/Dashboard/MyHistory';
import MyReview from './pages/Dashboard/MyReview';
import Payment from './pages/Dashboard/Payment';
import Users from './pages/Dashboard/Users';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import RequireAdmin from './pages/Login/RequierAdmin';
import RequireAuth from './pages/Login/RequireAuth';
import SignUp from './pages/Login/SignUp';
import Reviews from './pages/Reviews/Reviews';
import NavBar from './pages/Shared/NavBar';

function App() {
  return (
    <div className='xl:max-w-7xl mx-auto'>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment></Appointment>
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyAppointment></MyAppointment>}></Route>
          <Route path='review' element={<MyReview></MyReview>}></Route>
          <Route path='history' element={<MyHistory></MyHistory>}></Route>
          <Route path='payment/:id' element={<Payment></Payment>}></Route>
          <Route path='users' element={<RequireAdmin><Users></Users></RequireAdmin>}></Route>
          <Route path='addDoctor' element={<RequireAdmin><AddDoctors></AddDoctors></RequireAdmin>}></Route>
          <Route path='manageDoctor' element={<RequireAdmin><ManageDoctor></ManageDoctor></RequireAdmin>}></Route>
        </Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/contact' element={<ContactUs></ContactUs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
