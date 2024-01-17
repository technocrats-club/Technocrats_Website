
import './App.css';

import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
function App() {
  return (
<>
<Toaster
                    position="top-right"
                    toastOptions={{
                        success: {
                            theme: {
                                primary: '#4aed88',
                            },
                        },
                    }}
                ></Toaster>

<div className='container'>
<Header/>
<Outlet/>
<Footer/>
</div></>



  );






}

export default App;
