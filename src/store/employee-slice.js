import { createSlice } from '@reduxjs/toolkit';

const initialEmployeeState = {
    employees: []
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState: initialEmployeeState,
    reducers: {

    }
})

export const employeeActions = employeeSlice.actions;
export default employeeSlice;