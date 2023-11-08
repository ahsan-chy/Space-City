import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
// import { Home, Login, Payment, Shop, SignUp } from '@/pages';
import Home from '@/pages/Home';
import NotFound from '@/pages/NotFound';
import Login from '@/pages/Login';
import SignUp from '@/pages/SignUp';

const Routers = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default Routers;
