import React, {useState} from 'react';
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

const Header = () => {

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
                {['How it works', 'Testimoninals', 'Features', 'Product Updates'].map((text, index) => (
                    <ListItem sx={{
                        cursor: 'pointer',
                        py: '1rem',
                    }} disableRipple button={false} key={text}>
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
        <Box sx={{
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
                        <Box sx={{
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
                        <ButtonPrimaryText>
                            How it works
                        </ButtonPrimaryText>

                        <ButtonPrimaryText>
                            Testimonials
                        </ButtonPrimaryText>

                        <ButtonPrimaryText>
                            Features
                        </ButtonPrimaryText>

                        <ButtonPrimaryText>
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
                                <ButtonPrimaryText onClick={toggleRentalSection.bind(this, 0)}
                                                   active={selectedRentalSection === 0} sx={{
                                    fontFamily: 'Roboto Slab',
                                    fontWeight: 700,
                                }}>
                                    For Agents
                                </ButtonPrimaryText>
                                {/*<Divider orientation="vertical" variant="middle" flexItem />*/}
                                <ButtonPrimaryText onClick={toggleRentalSection.bind(this, 1)}
                                                   active={selectedRentalSection === 1} sx={{
                                    fontFamily: 'Roboto Slab',
                                    fontWeight: 700,
                                }}>
                                    For Offices
                                </ButtonPrimaryText>
                            </Stack>
                        </Box>

                        <Box>
                            <Button sx={{
                                height: '50px',
                                textTransform: 'unset',
                            }} color={'primary'} variant={'outlined'}>
                                Sign-Up For Free
                            </Button>
                        </Box>

                    </Stack>

                </Stack>

                {/*    Header for tablet*/}

                <Stack
                    sx={{
                        display: {
                            xs: 'flex',
                            md: 'none'
                        },
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: '100px',
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
                        <IconButton onClick={toggleDrawer('left',false)}>
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
                                <ButtonPrimaryText onClick={toggleRentalSection.bind(this, 0)}
                                                   active={selectedRentalSection === 0} sx={{
                                    fontFamily: 'Roboto Slab',
                                    fontWeight: 700,
                                    fontSize: '18px',
                                }}>
                                    For Agents
                                </ButtonPrimaryText>
                                {/*<Divider orientation="vertical" variant="middle" flexItem />*/}
                                <ButtonPrimaryText onClick={toggleRentalSection.bind(this, 1)}
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
                            <Button fullWidth color={'primary'} variant={'contained'}>
                                Join our Beta
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
                                <IconButton>
                                    <FacebookIcon fontSize={'40px'} sx={{
                                        color: theme => theme.palette.primary.main,
                                    }}/>
                                </IconButton>

                                <IconButton>
                                    <FaTiktok size={'20.99'} style={{
                                        color: 'rgba(98, 0, 214, 1)',
                                    }}/>
                                </IconButton>

                                <IconButton>

                                    <InstagramIcon fontSize={'40px'} sx={{
                                        color: theme => theme.palette.primary.main,
                                    }}/>
                                </IconButton>

                                <IconButton>
                                    <TwitterIcon fontSize={'40px'} sx={{
                                        color: theme => theme.palette.primary.main,
                                    }}/>
                                </IconButton>

                                <IconButton>
                                    <LinkedInIcon fontSize={'40px'} sx={{
                                        color: theme => theme.palette.primary.main,
                                    }}/>
                                </IconButton>

                            </Box>
                        </Box>

                    </Box>

                </Drawer>
            </Box>

        </Box>
    );
};

export default Header;