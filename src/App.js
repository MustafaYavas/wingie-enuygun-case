import Layout from './components/layout/Layout';
import Employees from './pages/Employees/Employees';
import Detail from './pages/Detail';
import Home from './pages/Home';
import { fetchEmployeeData } from './store/employee-actions';

import { Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchEmployeeData());
    }, [dispatch])

    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/vote' element={<Employees />}/>
                <Route path='/employee/:username' element={<Detail />}/>
            </Routes>
        </Layout>
    )
}

export default App;