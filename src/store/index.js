import employeeSlice from './employee-slice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        employee: employeeSlice.reducer
    }
})

export default store