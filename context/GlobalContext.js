import React, {createContext, useContext, useState} from 'react';

const GlobalContext = createContext({

});


const GlobalContextProvider = ({children}) => {

    const [isNavbarFixed,setIsNavbarFixed] = useState(false);
    const [selectedRentalSection,setSelectedRentalSection] = useState(0);

    const toggleRentalSection = (value) => {
        setSelectedRentalSection(value);
    }

    const toggleIsNavbarFixed = (value) => {
        setIsNavbarFixed(value);
    }

    const contextValue = {
        isNavbarFixed,
        toggleIsNavbarFixed,
        selectedRentalSection,
        toggleRentalSection
    }

    return (
        <GlobalContext.Provider
            value={contextValue}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export const useGlobalContext = () => useContext(GlobalContext);

export default GlobalContextProvider;