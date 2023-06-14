import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MailList from './pages/MailList';
import Mail from './pages/Mail';
import Sidebar from './components/Sidebar';
import ErrorPage from './pages/404';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='flex'>
      <Sidebar />
        <Routes>
          <Route exact path={"/"} element={
            <Home />
          } />
          <Route path={"mail/:mailId"} element={
            <Mail />
          } />
          <Route path={"mails/:mailType"} element={
            <MailList />
          } />
          <Route path={"*"} element={
            <ErrorPage />
          } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
