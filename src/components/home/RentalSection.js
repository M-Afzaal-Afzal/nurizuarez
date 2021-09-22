import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ButtonPrimaryText from "../common/buttons/ButtonPrimaryText";
import Image from 'next/image';
import PrimaryButtonContained from "../common/buttons/PrimaryButtonContained";

const TabPanel = (props) => {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{p: 3}}>
                    {children}
                </Box>
            )}
        </div>
    );
}

const RentalSection = () => {

    const a11yProps = (index) => {
        return {
            id: `simple-tab-${index}`,
            'aria-controls': `simple-tabpanel-${index}`,
        };
    }

    const [value, setValue] = React.useState(0);

    const [selectedSubOption, setSelectedSubOption] = useState(1);

    const selectSubOption = (index) => {
        setSelectedSubOption(index);
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    // Tabs Data
    const data = [
        {
            name: "for agents",
            options: [
                {
                    name: "Stay Organized",
                    imgUrl: "/home/mocks/desktop/stayOrganized.png",
                    heading: "Stay Organized",
                    subHeading: <>saves agents 10-15 hours <br/>a week on average</>,
                    url: "",
                    description: "Save countless hours by streamlining your lead intake with our qualifying tools, and automatically match your leads to the listings their most likely to rent.",
                },
                {
                    name: "Optimize your Leads",
                    imgUrl: "/home/mocks/desktop/optimizeYourLead.png",
                    heading: "Optimize your Leads",
                    subHeading: <>saves agents 10-15 hours <br/>a week on average</>,
                    url: "",
                    description: "Save countless hours by streamlining your lead intake with our qualifying tools, and automatically match your leads to the listings their most likely to rent.",
                },
                {
                    name: "Predictive Automation",
                    imgUrl: "/home/mocks/desktop/productiveAutomations.png",
                    heading: "Predictive Automation",
                    subHeading: <>saves agents 10-15 hours <br/>a week on average</>,
                    url: "",
                    description: "Save countless hours by streamlining your lead intake with our qualifying tools, and automatically match your leads to the listings their most likely to rent.",
                },
            ]
        },
        {
            name: "for offices",
            options: [
                {
                    name: "Increase Agents Productivity",
                    imgUrl: "/home/mocks/desktop/increaseAgentsProductivity.png",
                    heading: "Increase Agents Productivity",
                    subHeading: <>saves agents 10-15 hours <br/>a week on average</>,
                    url: "",
                    description: "Save countless hours by streamlining your lead intake with our qualifying tools, and automatically match your leads to the listings their most likely to rent.",
                },
                {
                    name: "Improve Transparency",
                    imgUrl: "/home/mocks/desktop/improveTransparancy.png",
                    heading: "Improve Transparency",
                    subHeading: <>saves agents 10-15 hours <br/>a week on average</>,
                    url: "",
                    description: "Save countless hours by streamlining your lead intake with our qualifying tools, and automatically match your leads to the listings their most likely to rent.",
                },
                {
                    name: "Agent Management and Training",
                    imgUrl: "/home/mocks/desktop/agentManagementAndTrain.png",
                    heading: "Agent Management and Training",
                    subHeading: <>saves agents 10-15 hours <br/>a week on average</>,
                    url: "",
                    description: "Save countless hours by streamlining your lead intake with our qualifying tools, and automatically match your leads to the listings their most likely to rent.",
                },
            ]
        },
    ]

    return (
        <Box>

            <Typography
                maxWidth={'30rem'}
                mx={'auto'}
                fontSize={'35px'}
                fontWeight={'700'}
                textAlign={'center'}
                variant={'h1'}
            >
                Start Making Your Rental Data
                Work For You
            </Typography>

            <Typography
                maxWidth={'40rem'}
                mx={'auto'}
                my={'1.5rem'}
                textAlign={'center'}
                variant={'body1'}
            >
                With your data our CRM and full automation rental operating system for realtors we’ll maximize your
                current ROI and open new passive revenue lanes by using the same data you already own.
            </Typography>

            <Box sx={{borderBottom: 1, maxWidth: '40rem', mx: 'auto', borderColor: 'divider'}}>

                <Tabs
                    textColor="primary"
                    indicatorColor="primary"
                    value={value} centered
                    onChange={handleChange}
                    aria-label="basic tabs example"
                >

                    {
                        data.map(({name}) => (
                            <Tab
                                key={name}
                                sx={{
                                    fontFamily: 'Roboto Slab',
                                    fontSize: '35px',
                                    fontWeight: '700',
                                }} label={name} {...a11yProps(0)}
                            />
                        ))
                    }

                </Tabs>

            </Box>

            {/* First tab panel i. for agents*/}

            <TabPanel value={value} index={0}>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: "1fr 1fr 1fr",
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '45rem',
                        mx: 'auto',
                    }}
                >

                    {
                        data[value].options.map(({name}, index) => (
                            <ButtonPrimaryText active={index === selectedSubOption} onClick={() => {
                                selectSubOption(index);
                            }}>
                                {name}
                            </ButtonPrimaryText>
                        ))
                    }

                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        justifyContent: "center",
                        alignItems: 'center',
                        gridTemplateColumns: "1fr 1fr",
                        gridGap: '2rem',
                        mt: "1.5rem",
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        <Image
                            src={data[value].options[selectedSubOption].imgUrl}
                            width={320}
                            height={445}
                        />
                    </Box>

                    <Box sx={{
                        height: '100%',
                    }}>
                        <Box sx={{
                            p: '1.5rem',
                            maxWidth: "347px",
                            height: '100%',
                            border: "1px solid rgba(0, 0, 0, 1)",
                            borderRadius: '6px',
                        }}>

                            <Typography
                                sx={{
                                    fontSize: '22px',
                                    fontWeight: "bold",
                                }}
                                variant={'body1'}
                            >
                                {data[value].options[selectedSubOption].heading}
                            </Typography>

                            <Typography
                                variant={'body1'}
                                sx={{
                                    fontSize: '14px',
                                    color: theme => theme.palette.primary.main,
                                    py: '.5rem',
                                }}
                            >
                                {data[value].options[selectedSubOption].subHeading}
                            </Typography>

                            <Typography lineHeight={'30px'} fontSize={'16px'} variant={'body1'}>
                                {data[value].options[selectedSubOption].description}
                            </Typography>

                            <Box py={'1.5rem'}>
                                <PrimaryButtonContained sx={{
                                    width: "187px",
                                    height: "50px",

                                }}>
                                    Try For Free
                                </PrimaryButtonContained>
                            </Box>

                            <Typography lineHeight={'22px'} fontSize={'16px'} variant={'body1'}>
                                Join now and get <br/>
                                <Box sx={{
                                    color: theme => theme.palette.primary.main,
                                    fontWeight: 'bold',
                                }} component={'span'}>
                                    Essentials free for life
                                </Box>
                            </Typography>


                        </Box>
                    </Box>

                </Box>

            </TabPanel>

            {/*First tab panel i. for offices*/}

            <TabPanel value={value} index={1}>

                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: "1fr 1fr 1fr",
                        justifyContent: 'center',
                        alignItems: 'center',
                        maxWidth: '50rem',
                        mx: 'auto',
                    }}
                >

                    {
                        data[value].options.map(({name}, index) => (
                            <ButtonPrimaryText active={index === selectedSubOption} onClick={() => {
                                selectSubOption(index);
                            }}>
                                {name}
                            </ButtonPrimaryText>
                        ))
                    }

                </Box>

                <Box
                    sx={{
                        display: 'grid',
                        justifyContent: "center",
                        alignItems: 'center',
                        gridTemplateColumns: "1fr 1fr",
                        gridGap: '2rem',
                        mt: "1.5rem",
                    }}
                >
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        <Image
                            src={data[value].options[selectedSubOption].imgUrl}
                            width={320}
                            height={445}
                        />
                    </Box>

                    <Box sx={{
                        height: '100%',
                    }}>
                        <Box sx={{
                            p: '1.5rem',
                            maxWidth: "347px",
                            height: '100%',
                            border: "1px solid rgba(0, 0, 0, 1)",
                            borderRadius: '6px',
                        }}>

                            <Typography
                                sx={{
                                    fontSize: '22px',
                                    fontWeight: "bold",
                                }}
                                variant={'body1'}
                            >
                                {data[value].options[selectedSubOption].heading}
                            </Typography>

                            <Typography
                                variant={'body1'}
                                sx={{
                                    fontSize: '14px',
                                    color: theme => theme.palette.primary.main,
                                    py: '.5rem',
                                }}
                            >
                                {data[value].options[selectedSubOption].subHeading}
                            </Typography>

                            <Typography lineHeight={'30px'} fontSize={'16px'} variant={'body1'}>
                                {data[value].options[selectedSubOption].description}
                            </Typography>

                            <Box py={'1.5rem'}>
                                <PrimaryButtonContained sx={{
                                    width: "187px",
                                    height: "50px",

                                }}>
                                    Try For Free
                                </PrimaryButtonContained>
                            </Box>

                            <Typography lineHeight={'22px'} fontSize={'16px'} variant={'body1'}>
                                Join now and get <br/>
                                <Box sx={{
                                    color: theme => theme.palette.primary.main,
                                    fontWeight: 'bold',
                                }} component={'span'}>
                                    Essentials free for life
                                </Box>
                            </Typography>


                        </Box>
                    </Box>

                </Box>

            </TabPanel>

        </Box>
    );
};

export default RentalSection;