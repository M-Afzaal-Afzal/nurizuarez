import React from 'react';
import {Box, Container} from "@mui/material";
import Image from 'next/image';

const ConnectorLineSection = () => {
    return (
        <Container maxWidth={'xl'}>

            <Box sx={{
                display: {
                    xs: 'none',
                    md: 'grid',
                }
            }} display={'grid'} gridTemplateColumns={'70px 1fr 1fr 70px'}>

                {/* Box for layout purpose*/}
                <Box/>

                <Box display={'flex'}
                     justifyContent={'flex-end'}
                     sx={{
                         // marginLeft: '35%',
                         '& img': {
                             // marginLeft: '5rem',
                             // width: '90%',
                             height: 'auto',
                         }
                     }}
                >
                    <Image
                        src={'/home/ConnectorLine.svg'}
                        height={90.81}
                        width={700.5}
                        // layout={'intrinsic'}
                    />
                </Box>
                <Box/>
                <Box/>
            </Box>
        </Container>
    );
};

export default ConnectorLineSection;
