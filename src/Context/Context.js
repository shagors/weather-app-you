import React, { useReducer, useContext } from 'react'

import { weatherReducer } from './Reducer';

const WeatherAPPContext = React.createContext();

const WeatherAPPProvider = ({children}) => {
    const [state, dispatch] = useReducer(weatherReducer, {
        city:'',
        current:'',
        daily:'',
    });

    return {
        <>
            <WeatherAPPContext.Provider value={{state, dispatch}}>
                {children}
            </WeatherAPPContext.Provider>
        </>
    }
}

export default WeatherAPPProvider;

export const UseWeatherAPPContext = () => {
    return useContext(WeatherAPPContext);
}