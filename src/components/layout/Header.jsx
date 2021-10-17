import React, {useEffect, useState} from 'react';
import {
    Box, Button,
    Container, Divider, Drawer, IconButton, ListItem, ListItemText,
    Stack,
} from "@mui/material";
import ButtonPrimaryText from "../common/buttons/ButtonPrimaryText";
import Image from 'next/image';
import {useGlobalContext} from "../../../context/GlobalContext";
import List from '@mui/material/List';
import CloseIcon from '@mui/icons-material/Close';
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import {FaTiktok} from "react-icons/fa";
import {useRouter} from "next/router";
import {ctaClickHandler} from "../../utils/utils";

const Header = () => {

    const [itemToNavigate, setItemToNavigate] = useState(null);
    const router = useRouter();

    const {isNavbarFixed, selectedRentalSection, toggleRentalSection} = useGlobalContext();
    const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

    const mobileNavToggler = (val) => {
        setIsMobileNavOpen(val);
    }

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        mobileNavToggler(open);

    };

    const linkClickHandler = (name) => {
        const elementId = name.toLowerCase();
        setItemToNavigate(elementId)

        if (itemToNavigate === elementId) {
            setItemToNavigate(name.toUpperCase())
        }

    }

    const startForFreeClickHandler = () => {
        ctaClickHandler();
        mobileNavToggler(false);
    }

    useEffect(() => {
        if (itemToNavigate) {

            if (router.pathname === '/') {
                const yOffset = -100;
                const element = document.getElementById(itemToNavigate.toString().toLowerCase());
                const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

                window.scrollTo({top: y, behavior: 'smooth'});
                // document.getElementById(itemToNavigate.toString().toLowerCase()).scrollIntoView({
                //     behavior: 'smooth',
                // })
            } else {
                // router.push('/')
                //     .then(() => {
                //         document.getElementById(itemToNavigate.toString().toLowerCase()).scrollIntoView({
                //             behavior: 'smooth',
                //         })
                //     })

            }


        }
    }, [itemToNavigate])

    const list = (anchor) => (
        <Box
            sx={{
                width: {
                    xs: '313px',
                    sm: '347px',
                }
            }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List sx={{
                px: '2rem',
                pt: '3rem',
            }}>
                {[{text:'How it works',id: 'howitworks'},{text:'Testimoninals',id: 'testimonials'}, {text:'Features',id: 'features'}, {text:'Product Updates',id: 'productupdates'}, ].map(({text,id}, index) => (
                    <ListItem onClick={() => {
                        linkClickHandler(id);
                    }} sx={{
                        cursor: 'pointer',
                        py: '1rem',
                    }} disableRipple button={false} key={id}>
                        {/*<ListItemIcon>*/}
                        {/*    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}*/}
                        {/*</ListItemIcon>*/}
                        <ListItemText primaryTypographyProps={{
                            color: 'primary',
                            fontSize: '18px',
                            fontWeight: 'medium',
                            variant: 'body1',
                        }} primary={text}/>
                    </ListItem>
                ))}
            </List>

        </Box>
    );


    return (
        <Box id={'header'} sx={{
            position: isNavbarFixed ? 'fixed' : 'relative',
            background: isNavbarFixed ? 'rgba(255, 255, 255, 0.65)' : 'relative',
            backdropFilter: 'blur(64px)',
            width: '100%',
            zIndex: 55,
        }}>

            <Container maxWidth={'xl'}>
                {/* Header for Desktop*/}
                <Stack direction={'row'} sx={{
                    display: {
                        xs: 'none',
                        md: 'flex'
                    },
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    height: '100px',
                }}>
                    {/* Left Side of header*/}
                    <Stack direction={'row'} spacing={'10px'}>
                        <Box onClick={linkClickHandler.bind(this, 'header')} sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}>
                            <Image src={'/whiteBackground.svg'}
                                // layout={'intrinsic'}
                                   width={167}
                                   height={45}
                                   priority={true}
                            />
                            {/*<Box sx={{width: '8px'}}/>*/}
                            {/*<Image src={'/logoTextDark.svg'}*/}
                            {/*    // layout={'intrinsic'}*/}
                            {/*       width={98.93}*/}
                            {/*       height={16.35}*/}
                            {/*       priority={true}*/}
                            {/*/>*/}

                        </Box>
                        <ButtonPrimaryText onClick={linkClickHandler.bind(this, 'howitworks')}>
                            How it works
                        </ButtonPrimaryText>

                        <ButtonPrimaryText onClick={linkClickHandler.bind(this, 'testimonials')}>
                            Testimonials
                        </ButtonPrimaryText>

                        <ButtonPrimaryText onClick={linkClickHandler.bind(this, 'features')}>
                            Features
                        </ButtonPrimaryText>

                        <ButtonPrimaryText onClick={linkClickHandler.bind(this, 'productupdates')}>
                            Product Updates
                        </ButtonPrimaryText>
                    </Stack>

                    {/* Right side of header*/}
                    <Stack spacing={4} alignItems={'center'} direction={'row'}>
                        <Box>
                            <Stack
                                direction={'row'}
                                divider={<Box>|</Box>} spacing={'0px'}
                                alignItems={'center'}
                            >
                                <ButtonPrimaryText onClick={() => {
                                    toggleRentalSection(0);
                                    linkClickHandler( 'howitworks')
                                }}
                                                   active={selectedRentalSection === 0} sx={{
                                    fontFamily: 'Roboto Slab',
                                    fontWeight: 700,
                                }}>
                                    For Agents
                                </ButtonPrimaryText>
                                {/*<Divider orientation="vertical" variant="middle" flexItem />*/}
                                <ButtonPrimaryText
                                    onClick={() => {
                                        toggleRentalSection( 1);
                                        linkClickHandler( 'howitworks')
                                    }}
                                    active={selectedRentalSection === 1}
                                    sx={{
                                        fontFamily: 'Roboto Slab',
                                        fontWeight: 700,
                                    }}
                                >
                                    For Offices
                                </ButtonPrimaryText>
                            </Stack>
                        </Box>

                        <Box>
                            <Button onClick={startForFreeClickHandler} sx={{
                                height: '50px',
                                textTransform: 'unset',
                            }} color={'primary'} variant={'outlined'}>
                                Start For Free
                            </Button>
                        </Box>

                    </Stack>

                </Stack>

                {/*    Header for tablet*/}

                <Stack
                    sx={{
                        display: {
                            xs: 'grid',
                            md: 'none'
                        },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '100px',
                        gridTemplateColumns: '31px 1fr 31px',
                        placeItems: 'center',
                    }}
                    direction={'row'}
                >

                    {/* left icon*/}
                    <Box>
                        <Box
                            onClick={mobileNavToggler}
                            sx={{
                                cursor: 'pointer',
                            }} component={'span'}
                        >
                            <Image
                                priority
                                height={22}
                                width={31}
                                src={isNavbarFixed ? '/icons/svg/naIconBlack.svg' : '/icons/svg/navIcon.svg'}
                            />
                        </Box>
                    </Box>

                    <Box>
                        <Image
                            priority
                            height={45}
                            width={167}
                            src={isNavbarFixed ? '/logos/svg/whitebackground.svg' : '/logos/svg/blackbackground.svg'}
                        />

                    </Box>

                    {/* Empty box , just for layout*/}
                    <Box/>

                </Stack>

            </Container>

            {/*     Sidebar Nav For Tablet and Mobile */}

            <Box>
                <Drawer
                    anchor={'left'}
                    open={isMobileNavOpen}
                    onClose={toggleDrawer('left', false)}
                    sx={{
                        '& .MuiDrawer-paperAnchorLeft': {
                            borderTopRightRadius: '40px',
                            borderBottomRightRadius: '40px',
                            display: 'grid',
                            gridTemplateRows: 'auto 1fr auto',
                        },
                        '&:: -webkit-scrollbar': {
                            display: 'none',
                        },
                    }}
                >
                    <Box sx={{
                        px: '2rem',
                        pt: '1rem',
                        pb: '1rem',
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        <IconButton onClick={toggleDrawer('left', false)}>
                            <CloseIcon/>
                        </IconButton>
                    </Box>

                    <Box>


                        <Box sx={{
                            px: '2rem',
                            display: 'flex',
                            // justifyContent: 'center',
                        }}>
                            <Image src={'/whiteBackground.svg'}
                                // layout={'intrinsic'}
                                   width={164.14}
                                   height={43.37}
                                   priority={true}
                            />
                        </Box>

                        {list('left')}

                        <Divider/>

                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            py: '1rem',
                            px: '2rem',

                        }}>
                            <Stack
                                direction={'row'}
                                divider={<Box>|</Box>} spacing={{
                                xs: '6px',
                                sm: '22px',
                            }}
                                alignItems={'center'}
                            >
                                <ButtonPrimaryText onClick={() => {
                                    toggleRentalSection( 0);
                                    linkClickHandler('howitworks');
                                    mobileNavToggler(false);
                                } }
                                                   active={selectedRentalSection === 0} sx={{
                                    fontFamily: 'Roboto Slab',
                                    fontWeight: 700,
                                    fontSize: '18px',
                                }}>
                                    For Agents
                                </ButtonPrimaryText>
                                {/*<Divider orientation="vertical" variant="middle" flexItem />*/}
                                <ButtonPrimaryText onClick={() => {
                                    toggleRentalSection( 1);
                                    linkClickHandler('howitworks');
                                    mobileNavToggler(false);
                                } }
                                                   active={selectedRentalSection === 1} sx={{
                                    fontFamily: 'Roboto Slab',
                                    fontWeight: 700,
                                    fontSize: '18px,'
                                }}>
                                    For Offices
                                </ButtonPrimaryText>
                            </Stack>
                        </Box>

                        <Divider/>

                        <Box sx={{
                            py: '2rem',
                            px: '2rem',
                        }}>
                            <Button onClick={startForFreeClickHandler} fullWidth color={'primary'} variant={'contained'}>
                                Start For Free
                            </Button>
                        </Box>

                    </Box>

                    <Box sx={{
                        // height: "100%",
                        py: '1rem',
                        px: '2rem',
                    }}>

                        <Box mt={'auto'}>
                            <Box
                                // display={'grid'}
                                //  gridTemplateColumns={'1fr 1fr 1fr 1fr 1fr'}
                                //  justifyContent={'left'}
                            >
                                {/*<IconButton>*/}
                                {/*    <FacebookIcon fontSize={'40px'} sx={{*/}
                                {/*        color: theme => theme.palette.primary.main,*/}
                                {/*    }}/>*/}
                                {/*</IconButton>*/}

                                {/*<IconButton>*/}
                                {/*    <FaTiktok size={'20.99'} style={{*/}
                                {/*        color: 'rgba(98, 0, 214, 1)',*/}
                                {/*    }}/>*/}
                                {/*</IconButton>*/}

                                    <a target={'_blank'} href="https://www.instagram.com/therentbase/">
                                <IconButton>

                                        <InstagramIcon fontSize={'40px'} sx={{
                                            color: 'rgba(98, 0, 214, 1)'
                                        }}/>
                                </IconButton>
                                    </a>

                                {/*<IconButton>*/}
                                {/*    <TwitterIcon fontSize={'40px'} sx={{*/}
                                {/*        color: theme => theme.palette.primary.main,*/}
                                {/*    }}/>*/}
                                {/*</IconButton>*/}

                                    <a target={'_blank'} href="https://www.linkedin.com/company/therentbase">
                                <IconButton>
                                        <LinkedInIcon fontSize={'40px'} sx={{
                                           color: 'rgba(98, 0, 214, 1)',
                                        }}/>
                                </IconButton>
                                    </a>

                            </Box>
                        </Box>

                    </Box>

                </Drawer>
            </Box>

        </Box>
    );
};

export default Header;