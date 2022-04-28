import BaseForm from './components/forms/BaseForm';
import SignUp from './components/forms/signUp';
import { Route, Routes } from 'react-router-dom';
import AppLayout from './components/layouts/AppLayout';
import Dashboard from './components/layouts/Dashboard';
import CardDetails from './components/layouts/CardDetails';

export default function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/acceuil" element={ <Dashboard/> } />
        <Route path="/" element={
            <AppLayout>
              <BaseForm/>
            </AppLayout>
            } />
        <Route path="/sign-up" element={
            <AppLayout>
              <SignUp />
            </AppLayout>
          } />
        <Route path="/livre/:index" element={<CardDetails/>} />
      </Routes>
      
    </div>
  )
}

/*
<AppLayout>
        <Routes>
            <Route path="/" element={<BaseForm />} />
            <Route path="/sign-up" element={<SignUp />} />
        </Routes>
      </AppLayout>

*/
