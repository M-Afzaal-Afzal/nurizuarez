import React from 'react';
import {Box} from "@mui/material";
import Image from 'next/image';

const ConnectorLineSection = () => {
    return (
        <Box display={'grid'} gridTemplateColumns={'1fr 1fr'}>
            <Box display={'flex'}
                justifyContent={'flex-end'}
                sx={{
                    marginLeft: '35%',
                }}
            >
                <Image
                    src={'/home/ConnectorLine.svg'}
                    height={80.81}
                    width={470.5}
                    layout={'intrinsic'}
                />
            </Box>
            <Box/>
        </Box>
    );
};

export default ConnectorLineSection;