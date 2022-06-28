import { createSlice } from '@reduxjs/toolkit';

const initialEmployeeState = {
    employees: [],
    sortedEmployees: []
}

const employeeSlice = createSlice({
    name: 'employee',
    initialState: initialEmployeeState,
    reducers: {
        getEmployees(state, action) {
            state.employees = action.payload;
            state.sortedEmployees = action.payload;
        },

        increaseEmployeeVote(state, action) {
            const allEmployees = state.sortedEmployees;
            const updatedEmployees = allEmployees.map(employee => {
                if(employee.login.uuid === action.payload) return {...employee, vote: employee.vote+1}
                return employee;
            });
            const descendingSorted = updatedEmployees.sort((a, b) => b.vote - a.vote);
            state.sortedEmployees = descendingSorted;
        }
    }
})

export const employeeActions = employeeSlice.actions;
export default employeeSlice;