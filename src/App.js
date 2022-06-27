import Layout from './components/layout/Layout';
import Employees from './pages/Employees';
import Detail from './pages/Detail';

import { Routes, Route } from 'react-router-dom';

const App = () => {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Employees />}/>
                <Route path='/employee/:username' element={<Detail />}/>
            </Routes>
        </Layout>
    )
}

export default App;