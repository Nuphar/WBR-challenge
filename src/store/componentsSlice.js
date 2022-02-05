import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    componentsList: [
        {
            id: 'comp1',
            component: <div style={{ backgroundColor: "yellow" }}>Component 1</div>
        },
        {
            id: 'comp2',
            component: <div style={{ backgroundColor: "green" }}>Component 2</div>
        },
        {
            id: 'comp3',
            component: <div style={{ backgroundColor: "red" }}>Component 3</div>
        },
        {
            id: 'comp4',
            component: <div style={{ backgroundColor: "blue" }}>Component 4</div>
        }
    ]
}

export const componentsSlice = createSlice({
    name: 'components',
    initialState,
    reducers: {
    }
});

export const getComponentById = id => state => {
    return state.components.componentsList.find(l => l.id === id);
}

export default componentsSlice.reducer;