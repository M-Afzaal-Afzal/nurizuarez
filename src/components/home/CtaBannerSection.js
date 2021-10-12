import React from 'react';
import {Box, Typography} from "@mui/material";
import ButtonGreyContained from "../common/buttons/ButtonGreyContained";

const CtaBannerSection = () => {
    return (
        <Box>
            <Box maxWidth={'991px'} sx={{
                height: '87px',
                background: theme => theme.palette.primary.main,
                borderRadius: '8px',
                maxWidth: '991px',
                display: 'grid',
                alignItems: 'center',
                justifyContent: 'space-between',
                mx: {xs: '2rem',md: 'auto'},
                px: '2rem',
                gridTemplateColumns: '1fr auto',
            }}>

                <Typography
                    variant={'body1'}
                    fontSize={'22px'}

                    sx={{
                        color: '#fff',
                        textAlign: {
                            xs: 'center',
                            md: 'left'
                        }
                    }}
                >
                    Get our essential offerings for free if you join now {' '}
                    <Typography
                        variant={'body1'}
                        fontWeight={'bold'}
                        component={'span'}
                        fontSize={'22px'}
                    >

                    </Typography>
                </Typography>

                <Box sx={{
                    display: {
                        xs: 'none',
                        md: 'flex'
                    }
                }} justifyContent={'flex-end'}>
                    <ButtonGreyContained>
                        Start for Free
                    </ButtonGreyContained>
                </Box>

            </Box>
        </Box>
    )
        ;
};

export default CtaBannerSection;
