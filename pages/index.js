import * as React from 'react';
import {Box} from "@mui/material";
import HeroSection from "../src/components/home/HeroSection";
import ConnectorLineSection from "../src/components/home/ConnectorLineSection";
import RentalSection from "../src/components/home/RentalSection";
import ConnectorLineSection2 from "../src/components/home/ConnectorLineSection2";
import AgentsSection from "../src/components/home/AgentsSection";
import CtaBannerSection from "../src/components/home/CtaBannerSection";
// import {AppBar, Box, Stack, Toolbar} from "@mui/material";

export default function Index() {

    return (
        <Box>
            <HeroSection/>
            <ConnectorLineSection/>
            <RentalSection/>
            <ConnectorLineSection2/>
            <AgentsSection/>
            <Box py={'4rem'}>
                <CtaBannerSection/>
            </Box>

        </Box>
    );
}
