import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
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
        <Route
            exact
            path="/"
            element={<Navigate to="/mails/inbox" replace={true} /> }
          />
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
