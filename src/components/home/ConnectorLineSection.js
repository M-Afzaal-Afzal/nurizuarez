import React from 'react';
import {Box} from "@mui/material";
import Image from 'next/image';

const ConnectorLineSection = () => {
    return (
        <Box display={'grid'} gridTemplateColumns={'1fr 1fr'}>
            <Box display={'flex'}
                justifyContent={'flex-end'}
                sx={{
                    // marginLeft: '35%',
                    '& img' : {
                        width: '90%',
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
        </Box>
    );
};

export default ConnectorLineSection;