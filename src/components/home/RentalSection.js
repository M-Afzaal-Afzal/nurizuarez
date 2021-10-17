import React, {useState} from 'react';
import {Box, Typography} from "@mui/material";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import ButtonPrimaryText from "../common/buttons/ButtonPrimaryText";
import Image from 'next/image';
import PrimaryButtonContained from "../common/buttons/PrimaryButtonContained";
import {useGlobalContext} from "../../../context/GlobalContext";
import {ctaClickHandler} from "../../utils/utils";

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
    const {selectedRentalSection: value,toggleRentalSection } = useGlobalContext();

    const [selectedSubOption, setSelectedSubOption] = useState(1);

    const selectSubOption = (index) => {
        setSelectedSubOption(index);
    }

    const handleChange = (event, newValue) => {
        toggleRentalSection(newValue);
    };

    // Tabs Data
    const data = [
        {
            name: "For Agents",
            options: [
                {
                    name: "Stay Organized",
                    imgUrl: "/home/mocks/desktop/stayOrganized.png",
                    imgUrlMobile: "/home/mocks/mobile/stayOrganized.png",
                    heading: "Stay Organized",
                    subHeading: <>saves agents 10-15 hours <br/>a week on average</>,
                    url: "",
                    description: "Keep all your data and follow-ups for landlords, listings, and leads organize in one place.",
                },
                {
                    name: "Optimize your Leads",
                    imgUrl: "/home/mocks/desktop/optimizeYourLead.png",
                    imgUrlMobile: "/home/mocks/mobile/optimizeYourLead.png",
                    heading: "Optimize your Leads",
                    subHeading: <>saves agents 10-15 hours <br/>a week on average</>,
                    url: "",
                    description: "RentBase's automated qualifying tool helps save agents 5-10 hrs a week and match your leads to your listing.",
                },
                {
                    name: "Predictive Automation",
                    imgUrl: "/home/mocks/desktop/productiveAutomations.png",
                    imgUrlMobile: "/home/mocks/mobile/productiveAutomations.png",
                    heading: "Predictive Automation",
                    subHeading: <>saves agents 10-15 hours <br/>a week on average</>,
                    url: "",
                    description: "Data-driven insights power automated follow-ups and identify when a renter is likely to turn into a sale.",
                },
            ]
        },
        {
            name: "For Offices",
            options: [
                {
                    name: "Increase Agents Productivity",
                    imgUrl: "/home/mocks/desktop/increaseAgentsProductivity.png",
                    imgUrlMobile: "/home/mocks/mobile/increaseAgentsProductivity.png",
                    heading: "Increase Agents Productivity",
                    subHeading: <>saves agents 10-15 hours <br/>a week on average</>,
                    url: "",
                    description: `Get the best out of your agents by providing them a next-generation rental operating system you can run your entire rental business out of. Agents can work faster and smarter with RentBase's data-insight driven features.`
                },
                {
                    name: "Improve Transparency",
                    imgUrl: "/home/mocks/desktop/improveTransparancy.png",
                    imgUrlMobile: "/home/mocks/mobile/improveTransparancy.png",
                    heading: "Improve Transparency",
                    subHeading: <>saves agents 10-15 hours <br/>a week on average</>,
                    url: "",
                    description: `Now your entire team can work off of a centralized database they can access both in the office and on the go. RentBase notifies your whole team of live updates to your shared database and promotes teamwork amongst your agent.`
                },
                {
                    name: "Agent Management and Training",
                    imgUrl: "/home/mocks/desktop/agentManagementAndTrain.png",
                    imgUrlMobile: "/home/mocks/mobile/agentManagementAndTrain.png",
                    heading: "Agent Management and Training",
                    subHeading: <>saves agents 10-15 hours <br/>a week on average</>,
                    url: "",
                    description:`Track key stats on your agents production and identify where your team's strengths and weaknesses are. RentBase's best practices and training tools help shorten the learning curve with new agents.`
                },
            ]
        },
    ]

    return (
        <Box id={'howitworks'}>

            {/* heading and paragraph*/}

            <Box sx={{
                display: {
                    xs: 'none',
                    md: 'block',
                }
            }}>

                <Typography
                    maxWidth={'30rem'}
                    mx={'auto'}
                    fontSize={'35px'}
                    fontWeight={'700'}
                    textAlign={'center'}
                    variant={'h1'}
                >
                    Make Your Rental Data Work for You
                </Typography>

                <Typography
                    maxWidth={'40rem'}
                    mx={'auto'}
                    my={'1.5rem'}
                    textAlign={'center'}
                    variant={'body1'}
                >
                    Our CRM and rental operating system takes information you already have and builds predictive automations, turning passive revenues into active ones. Simply put, without doing any more work (and with proven time savers) RentBase will maximize your current ROI.
                </Typography>
            </Box>

            <Box
                sx={{
                    borderBottom: 1,
                    maxWidth: {
                        xs: '18rem',
                        md: '40rem'
                    },
                    mx: 'auto',
                    borderColor: 'divider'
                }}
            >

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
                                    fontSize: {
                                        xs: '25px',
                                        me: '35px'
                                    },
                                    padding: {
                                        xs: 0,
                                        md: '12px 16px',
                                    },
                                    margin: {
                                        xs: '0 12px',
                                        md: '0',
                                    },
                                    textTransform: 'unset',
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
                        maxWidth: '50rem',
                        mx: 'auto',
                    }}
                >
                    {/*/!* Tab Panel Names* for desktop/}*/}
                    {
                        data[value].options.map(({name}, index) => (
                            <ButtonPrimaryText sx={{
                                display: {
                                    xs: 'none',
                                    md: 'block',
                                }
                            }} active={index === selectedSubOption} onClick={() => {
                                selectSubOption(index);
                            }}
                            >
                                {name}
                            </ButtonPrimaryText>
                        ))
                    }


                    {/*    Tab Panel Names for mobile*/}
                    {
                        data[value].options.map(({name}, index) => (
                            <ButtonPrimaryText sx={{
                                display: {
                                    xs: 'block',
                                    md: 'none',
                                },
                                height: '100%',
                                color: (index === selectedSubOption) ? "#fff" : 'rgba(132, 132, 132, 1)',
                                background: (index === selectedSubOption) ? "rgba(98, 0, 214, 1)" : 'transparent',
                                border: (index === selectedSubOption) ? '1px solid rgba(98, 0, 214, 1)' : '1px solid rgba(132, 132, 132, 1)',
                                margin: {
                                    xs: '3px',
                                    md: '8px',
                                },
                                fontSize: {
                                    xs: '14px',
                                    me: '35px'
                                },
                                '&:hover': {
                                    background: "rgba(98, 0, 214, 1)",
                                    color: "#fff",
                                }

                            }} onClick={() => {
                                selectSubOption(index);
                            }}
                            >
                                {name}
                            </ButtonPrimaryText>
                        ))
                    }

                </Box>

                {/* Tab Panel Section for desktop*/}
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'grid',
                        },
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
                                <PrimaryButtonContained
                                    onClick={ctaClickHandler}
                                    sx={{
                                    width: "187px",
                                    height: "50px",

                                }}>
                                    Start For Free
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

                {/*    Tab Panel Section for tablet */}
                <Box sx={{
                    display: {
                        xs: 'block',
                        md: 'none',
                    }
                }} py={'2rem'}>
                    <Typography
                        textAlign={'center'}
                        sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                        }} variant={'h1'}
                    >
                        {/*todo - Here add the selection section name*/}
                        {data[value].options[selectedSubOption].heading}
                    </Typography>

                    <Typography sx={{
                        mt: '12px',
                        fontSize: '16px',
                        textAlign: 'center',
                    }} variant={'body1'}>
                        {data[value].options[selectedSubOption].description}
                    </Typography>

                    <Typography color={'primary'} sx={{
                        mt: '12px',
                        fontSize: '16px',
                        textAlign: 'center',
                        fontWeight: '600',

                    }} variant={'body1'}>
                        Saves agents 10-15 hours a week
                    </Typography>

                    {/*    Image*/}
                    <Box sx={{
                        mt: '1rem',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Image src={data[value].options[selectedSubOption].imgUrlMobile} width={334} height={207.31}/>
                    </Box>

                </Box>

            </TabPanel>

            {/*Second tab panel i. for offices*/}
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
                    {/*/!* Tab Panel Names* for desktop/}*/}
                    {
                        data[value].options.map(({name}, index) => (
                            <ButtonPrimaryText sx={{
                                display: {
                                    xs: 'none',
                                    md: 'block',
                                }
                            }} active={index === selectedSubOption} onClick={() => {
                                selectSubOption(index);
                            }}
                            >
                                {name}
                            </ButtonPrimaryText>
                        ))
                    }


                    {/*    Tab Panel Names for mobile*/}
                    {
                        data[value].options.map(({name}, index) => (
                            <ButtonPrimaryText sx={{
                                display: {
                                    xs: 'block',
                                    md: 'none',
                                },
                                height: '100%',
                                color: (index === selectedSubOption) ? "#fff" : 'rgba(132, 132, 132, 1)',
                                background: (index === selectedSubOption) ? "rgba(98, 0, 214, 1)" : 'transparent',
                                border: (index === selectedSubOption) ? '1px solid rgba(98, 0, 214, 1)' : '1px solid rgba(132, 132, 132, 1)',
                                margin: {
                                    xs: '3px',
                                    md: '8px',
                                },
                                fontSize: {
                                    xs: '14px',
                                    me: '35px'
                                },
                                '&:hover': {
                                    background: "rgba(98, 0, 214, 1)",
                                    color: "#fff",
                                }

                            }} onClick={() => {
                                selectSubOption(index);
                            }}
                            >
                                {name}
                            </ButtonPrimaryText>
                        ))
                    }

                </Box>

                {/* Tab Panel Section for desktop*/}
                <Box
                    sx={{
                        display: {
                            xs: 'none',
                            md: 'grid',
                        },
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
                                <PrimaryButtonContained
                                    onClick={ctaClickHandler}
                                    sx={{
                                    width: "187px",
                                    height: "50px",

                                }}>
                                    Start For Free
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

                {/*    Tab Panel Section for tablet */}
                <Box sx={{
                    display: {
                        xs: 'block',
                        md: 'none',
                    }
                }} py={'2rem'}>
                    <Typography
                        textAlign={'center'}
                        sx={{
                            fontSize: '25px',
                            fontWeight: 'bold',
                        }} variant={'h1'}
                    >
                        {/* Todo - add the haeding there*/}
                        {data[value].options[selectedSubOption].heading}
                    </Typography>

                    <Typography sx={{
                        mt: '12px',
                        fontSize: '16px',
                        textAlign: 'center',
                    }} variant={'body1'}>
                        {data[value].options[selectedSubOption].description}
                    </Typography>

                    <Typography color={'primary'} sx={{
                        mt: '12px',
                        fontSize: '16px',
                        textAlign: 'center',
                        fontWeight: '600',

                    }} variant={'body1'}>
                        Saves agents 10-15 hours a week
                    </Typography>

                    {/*    Image*/}
                    <Box sx={{
                        mt: '1rem',
                        display: 'flex',
                        justifyContent: 'center',
                    }}>
                        <Image src={data[value].options[selectedSubOption].imgUrlMobile} width={334} height={207.31}/>
                    </Box>

                </Box>

            </TabPanel>

        </Box>
    );
};

export default RentalSection;
