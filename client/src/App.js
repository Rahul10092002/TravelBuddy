
import './App.css';
import BottomNav from './components/BottomNav';
import Loading from './components/Loading';
import Navbar from './components/Navbar/Navbar';
import Notification from './components/Notification';
import Login from './components/user/Login';

function App() {
  return (
    <>
      <Loading/>
      <Notification/>
      <Login />
      <Navbar />
      <BottomNav/>
    </>
  );
}

export default App;
