import Header from '../UI/Header/Header';

import { useSelector } from 'react-redux';
import LoadingSpinner from '../UI/LoadingSpinner/LoadingSpinner';

const Layout = (props) => {
    const { children } = props;
    const employees = useSelector(state => state.employee).employees;

    return (
        <>
            { employees.length === 0 && <LoadingSpinner /> }

            {
                employees.length > 0 && 
                <>
                    <Header/>
                    { children }
                </>
            }
        </>
    )
}

export default Layout;