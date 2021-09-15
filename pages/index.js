import * as React from 'react';
import {Box} from "@mui/material";
import HeroSection from "../src/components/home/HeroSection";
import ConnectorLineSection from "../src/components/home/ConnectorLineSection";
import RentalSection from "../src/components/home/RentalSection";
// import {AppBar, Box, Stack, Toolbar} from "@mui/material";

export default function Index() {

    return (
        <Box>
            <HeroSection/>
            <ConnectorLineSection/>
            <RentalSection/>
        </Box>
    );
}
