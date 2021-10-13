import * as React from 'react';
import {Box} from "@mui/material";
import HeroSection from "../src/components/home/HeroSection";
import ConnectorLineSection from "../src/components/home/ConnectorLineSection";
import RentalSection from "../src/components/home/RentalSection";
import ConnectorLineSection2 from "../src/components/home/ConnectorLineSection2";
import AgentsSection from "../src/components/home/AgentsSection";
import CtaBannerSection from "../src/components/home/CtaBannerSection";
import FacilitiesSection from "../src/components/home/FacilitiesSection";
import TryRentBaseSection from "../src/components/home/TryRentBaseSection";
import FaqSection from "../src/components/home/FaqSection";
import CookiesPolicy from "../src/components/home/CookiesPolicy";
// import {AppBar, Box, Stack, Toolbar} from "@mui/material";

export default function Index() {

    return (
        <Box>
            <HeroSection/>
            <ConnectorLineSection/>
            <RentalSection/>
            <ConnectorLineSection2/>
            <AgentsSection/>

            <Box position={'relative'} zIndex={10} mt={'-43.5px'} mb={'-43.5px'}>
                <CtaBannerSection/>
            </Box>

            <FacilitiesSection/>

            <TryRentBaseSection/>

            <FaqSection/>

        {/*    Cookies Policy Component*/}
            <CookiesPolicy/>

        </Box>
    );
}
