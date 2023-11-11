
import './App.css';
import {Provider} from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Login from './components/users/Login';
import Header from './components/common/Header';
import Logout from './components/users/Logout';
import AuthRoute from './components/hoc/authRouter';
import appStore from './store/store';


const LoginView = AuthRoute({ component: Login, protectedRoute: false})
const RegisterView = AuthRoute({ component: Register, protectedRoute: false})
const TaskView = AuthRoute({ component: () => <h1>Task View</h1>, protectedRoute: true})

function App() {
  return (
   <Provider store={appStore}>
 <div>
  <BrowserRouter>
  <Header />
  <Routes>
  <Route path="/login" element={<Login />}/>
  <Route path='/logout' element={<Logout />} />
  </Routes>
  </BrowserRouter>
 </div>
   </Provider>
  );
}

export default App;
