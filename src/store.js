import React from 'react';

export const Store = React.createContext();

const initialState = {
    lightTheme: false,
    drawerOpen: true,
    drawerWidth: 240,
    footerHeight: 100
};

function reducer(state, action) {
    switch (action.type) {
        case 'LIGHT_THEME':
            return { ...state, lightTheme: action.payload };
        case 'DRAWER_OPEN':
            return { ...state, drawerOpen: action.payload };
        case 'DRAWER_WIDTH':
            return { ...state, drawerWidth: action.payload };
        case 'FOOTER_HEIGHT':
            return { ...state, footerHeight: action.payload };
        default:
            return state;
    }
}

export function StoreProvider(props) {
    const [ state, dispatch ] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={ value }>{ props.children }</Store.Provider>
}