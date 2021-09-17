import React from 'react';
import {Box} from "@mui/material";
import Image from 'next/image';

const ConnectorLineSection2 = () => {
    return (
        <Box display={'grid'} mt={'-12px'} gridTemplateColumns={'1fr 1fr'}>
            <Box/>
            <Box display={'flex'}
                 justifyContent={'flex-start'}
            >
                <Image
                    src={'/home/ConnectorLine2.svg'}
                    height={127.32}
                    width={194.59}
                    layout={'intrinsic'}
                />
            </Box>

        </Box>
    );
};

export default ConnectorLineSection2;