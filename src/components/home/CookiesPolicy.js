import React, {useEffect, useState} from 'react';
import {Box, Button, Typography} from "@mui/material";

const CookiesPolicy = () => {
    const [isCookiesPolicyShown,setIsCookiesPolicyShown] = useState(false);

    const cookiesPolicyClickHandler = () => {
        setIsCookiesPolicyShown(false);
        localStorage.setItem('cookies','accepted');
    }

    useEffect(() => {
       const isCookiesPolicyAccepted = localStorage.getItem('cookies');
       if (!isCookiesPolicyAccepted) {
           setIsCookiesPolicyShown(true);
       }
    },[])

    return (
        isCookiesPolicyShown && (
            <Box
                sx={{
                    position: 'fixed',
                    bottom: 20,
                    zIndex: 999,
                    color: '#fff',
                    left: '50%',
                    placeItems: 'center',
                    transform: 'translate(-50%,0)',
                    maxWidth: {
                        xs: '376px',
                        sm: '704.68px',
                        lg: '1200px',
                    },
                    width: '100%',
                    gridGap: '1rem',
                    padding: '1rem',
                    px: {
                        xs: '1.5rem',
                        md: '3rem',
                        lg: '1.5rem',
                    },
                    background: '#000000E0',
                    display: 'grid',
                    gridTemplateColumns: {
                        lg: 'auto auto',
                        sm: 'auto',
                    },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}
            >
                <Typography sx={{
                    fontSize: '14px',
                    textAlign: 'center',
                }} variant={'body1'}>
                    We use cookies on our website to see how you interact with it. By accepting, you agree to our use of such cookies. See Privacy Policy
                </Typography>

                <Button variant={'contained'} onClick={cookiesPolicyClickHandler} sx={{
                    background: '#fff',
                    width: '141px',
                    color: '#000000',
                    textTransform: 'unset',
                    '&:hover': {
                        background: '#fff',
                        color: '#000000',
                    }
                }}>
                    Accept
                </Button>

            </Box>
        )
    );
};

export default CookiesPolicy;