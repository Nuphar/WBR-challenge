import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedLayout: '2',
    layoutPageGridData: {
        layout: {
            lg: [
                { w: 4, h: 1, x: 0, y: 0, i: "1" },
                { w: 4, h: 1, x: 5, y: 0, i: "2" }
            ],
            sm: [
                { w: 4, h: 1, x: 0, y: 0, i: "1" },
                { w: 4, h: 1, x: 0, y: 2, i: "2" }
            ]
        },
        breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
        cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 },
        rowHeight: 280,
    },
    layoutsCatalog: [
        {
            id: '1',
            layout: {
                lg: [
                    { i: "a", x: 0, y: 0, w: 4, h: 1, static: true  },
                    { i: "b", x: 4, y: 0, w: 4, h: 1, static: true  },
                    { i: "c", x: 8, y: 0, w: 4, h: 1, static: true  },
                    { i: "d", x: 0, y: 1, w: 4, h: 1, static: true  },
                    { i: "e", x: 4, y: 1, w: 4, h: 1, static: true  },
                    { i: "f", x: 8, y: 1, w: 4, h: 1, static: true  },
                ],
                sm: [
                    { i: "a", x: 0, y: 0, w: 1, h: 1, static: true  },
                    { i: "b", x: 1, y: 0, w: 1, h: 1, static: true  },
                    { i: "c", x: 2, y: 0, w: 1, h: 1, static: true  },
                    { i: "d", x: 0, y: 1, w: 1, h: 1, static: true  },
                    { i: "e", x: 1, y: 1, w: 1, h: 1, static: true  },
                    { i: "f", x: 2, y: 1, w: 1, h: 1, static: true  },
                ],
                xs: [
                    { i: "a", x: 0, y: 0, w: 1, h: 1, static: true  },
                    { i: "b", x: 1, y: 0, w: 1, h: 1, static: true  },
                    { i: "c", x: 2, y: 0, w: 1, h: 1, static: true  },
                    { i: "d", x: 0, y: 1, w: 1, h: 1, static: true  },
                    { i: "e", x: 1, y: 1, w: 1, h: 1, static: true  },
                    { i: "f", x: 2, y: 1, w: 1, h: 1, static: true  },
                ]
            },
            breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
            cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 4 },
            rowHeight: 120,
            items: [{id:'a', children:[]}, {id:'b', children:[]}, {id:'c', children:[]}, {id:'d', children:[]},{id:'e', children:[]},{id:'f', children:[]}]
        },
        {
            id: '2',
            layout: {
                lg: [
                    { i: "a", x: 0, y: 0, w: 4, h: 1, static: false  },
                    { i: "b", x: 4, y: 0, w: 8, h: 1, static: false  },
                    { i: "c", x: 0, y: 4, w: 12, h: 1, static: false  },
                ],
                sm: [
                    { i: "a", x: 0, y: 0, w: 1, h: 1, static: false  },
                    { i: "b", x: 1, y: 0, w: 3, h: 1, static: false  },
                    { i: "c", x: 0, y: 1, w: 6, h: 1, static: false  },
                ],
                xs: [
                    { i: "a", x: 0, y: 0, w: 1, h: 1, static: false  },
                    { i: "b", x: 1, y: 0, w: 2, h: 1, static: false  },
                    { i: "c", x: 0, y: 1, w: 3, h: 1, static: false  },
                ]
            },
            breakpoints: { lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 },
            cols: { lg: 12, md: 10, sm: 6, xs: 4, xxs: 3 },
            rowHeight: 80,
            items: [{id:'a', children:[]}, {id:'b', children:[]}, {id:'c', children:[]}]
        }
    ],
    configuredLayout: {
        '1': {
            items: [{id:'a', children:[]}, {id:'b', children:[]}, {id:'c', children:[]}, {id:'d', children:[]},{id:'e', children:[]},{id:'f', children:[]}]
        },
        '2': {
            items: [{id:'a', children:[]}, {id:'b', children:[]}, {id:'c', children:[]}]
        }
    }
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        selectLayout: (state, action) => {
            state.selectedLayout = action.payload;
        },
        addChildToLayout: (state, action) => {
            const currentItemIndex = state.configuredLayout[state.selectedLayout].items.findIndex(item => item.id === action.payload.id);
            state.configuredLayout[state.selectedLayout].items[currentItemIndex].children.push(action.payload.component);
        }
    }
});

export const {selectLayout,addChildToLayout} = layoutSlice.actions;

export const getLayoutsIds = state => {
    const ids = [];

    state.layout.layoutsCatalog.forEach(currLayout => {
        ids.push(currLayout.id);
    });

    return ids;
}

export const getLayoutById = id => state => {
    return state.layout.layoutsCatalog.find(currLayout => currLayout.id === id);
}

export const getLayoutItemsById = (layoutId) => state => {
    return state.layout.configuredLayout[layoutId].items;
}

export const getLayoutItemsFromCatalogById = (layoutId) => state => {
    const layoutIndex = state.layout.layoutsCatalog.findIndex(currLayout => currLayout.id === layoutId);
    return state.layout.layoutsCatalog[layoutIndex].items;
}

export default layoutSlice.reducer;
