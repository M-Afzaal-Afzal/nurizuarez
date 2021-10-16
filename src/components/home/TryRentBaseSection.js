import React, {useState} from 'react';
import {Box, Typography, OutlinedInput, FormHelperText, Chip, Stack, Modal} from "@mui/material";
import {useForm, Controller} from "react-hook-form";
import PrimaryButtonContained from "../common/buttons/PrimaryButtonContained";
import Image from 'next/image'

const TryRentBaseSection = () => {

    // Success modal functions and state start

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    // success modal functions and state end

    const {control, formState: {errors}, reset, handleSubmit} = useForm();

    const [selectedRole, setSelectedRole] = useState(0);

    const roleChangeHandler = (index) => {
        setSelectedRole(index);
    }

    const roles = ['Agent', 'Manager', 'real-estate professional', 'Other']

    // Example POST method implementation:
    async function postData(url = '', data = {}) {
      // Default options are marked with *
      const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // body data type must match "Content-Type" header
      });
      return response.json(); // parses JSON response into native JavaScript objects
    }

    const onSubmit = (postAttrs) => {
      const mergedAttrs = { ...postAttrs, role: roles[selectedRole], pageUri: window.location.href };
      // console.log('attrs posted', mergedAttrs);

      postData('/api/prospect', mergedAttrs)
      .then(data => {
        console.log('RESPONSE DATA', data); // JSON data parsed by `data.json()` call
        // Here we're resetting the formc
        reset({
            name: '',
            email: '',
        })

        handleOpen();
      });
    };

    if (errors) {
      console.log(errors);
    }

    return (
        <Box
            sx={{
                maxWidth: '991px',
                px: {
                    xs: '1rem',
                    md: '1.5rem'
                },
                py: '3rem',
                mx: {
                    xs: '8px',
                    md: 'auto',
                },
                borderRadius: '12px',
                border: '1px solid rgba(221, 221, 221, 1)',
                mb: '2rem',
                display: 'grid',
                gridGap: '2rem',
                gridTemplateColumns: {xs: '1fr', md: '1fr 1fr'},
            }}
        >

            {/* Left Section*/}
            <Box>

                <Typography sx={{
                    fontSize: {
                        xs: '25px',
                        md: '35px',
                    }
                }} fontWeight={'700'} variant={'h1'}>
                    Get RentBase for your <br/>
                    team or office now.
                </Typography>

                <Box sx={{
                    py: '2rem',
                }}>
                    <Typography variant={'body1'}>
                    With our combined decades of experience in residential leasing,
                    we’ve built a best-in-class platform to help agents across the country save time, 
                    stay organized, and close more deals. And that’s just with our freemium option.
                    It’s time to open more doors and close more deals with RentBase.

                    </Typography>
                </Box>

                <Box xs={{
                    display: {
                        xs: 'none',
                        md: 'block',
                    }
                }}>

                    <Typography fontWeight={'bold'} variant={'body1'}>
                        No credit card needed
                    </Typography>

                    {/*<Box mt={'2.5rem'}>*/}
                    {/*    <Typography variant={'body1'}>*/}
                    {/*        Trusted by Agent at*/}
                    {/*    </Typography>*/}
                    {/*</Box>*/}

                    {/*<Stack mt={'1rem'} direction={'row'} spacing={3}>*/}
                    {/*    <Box>*/}
                    {/*        <Image src={'/icons/svg/kw.svg'} width={58.6} height={25.75}/>*/}
                    {/*    </Box>*/}

                    {/*    <Box>*/}
                    {/*        <Image src={'/icons/svg/kw.svg'} width={58.6} height={25.75}/>*/}
                    {/*    </Box>*/}

                    {/*    <Box>*/}
                    {/*        <Image src={'/icons/svg/kw.svg'} width={58.6} height={25.75}/>*/}
                    {/*    </Box>*/}

                    {/*    <Box>*/}
                    {/*        <Image src={'/icons/svg/kw.svg'} width={58.6} height={25.75}/>*/}
                    {/*    </Box>*/}
                    {/*</Stack>*/}

                </Box>

            </Box>

            {/* Right From Section*/}
            <Box>
                <form onSubmit={handleSubmit(onSubmit)}>

                    <Box>

                        <Typography
                            sx={{
                                mb: '1rem',
                            }}
                            fontSize={'14px'}
                            variant={'h1'}
                        >
                            Full Name
                        </Typography>

                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "Your full name is required.",
                            }}
                            render={({field}) => (
                                <OutlinedInput fullWidth  {...field} />
                            )}
                        />

                        <FormHelperText sx={{color: 'red'}}>
                            {errors.name && errors.name?.message}
                        </FormHelperText>
                    </Box>

                    <Box mt={'2rem'}>

                        <Typography
                            sx={{
                                mb: '1rem',
                            }}
                            fontSize={'14px'}
                            variant={'h1'}
                        >
                            Your Email
                        </Typography>

                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "A valid email address is required",
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Invalid Email',
                                },
                            }}
                            render={({field}) => (
                                <OutlinedInput fullWidth  {...field} />
                            )}
                        />

                        <FormHelperText sx={{color: 'red'}}>
                            {errors.email && errors.email?.message}
                        </FormHelperText>
                    </Box>

                    <Box mt={'2rem'}>

                        <Typography
                            sx={{
                                mb: '1rem',
                            }}
                            fontSize={'14px'}
                            variant={'h1'}
                        >
                            Your Role
                        </Typography>

                        <Box display={'flex'} sx={{
                            maxWidth: {
                                xs: '275px',
                                md: 'auto',
                            }
                        }} flexWrap={'wrap'} direction={'row'} spacing={2}>

                            {
                                roles.map((role, index) => (
                                    <Box key={index} margin={'8px'}>
                                        <Chip
                                            label={role}
                                            variant={(selectedRole === index) ? 'filled' : "outlined"}
                                            onClick={() => {
                                                roleChangeHandler(index)
                                            }}
                                            color={(selectedRole === index) ? "primary" : 'default'}
                                            sx={{
                                                borderColor: theme => theme.palette.primary.main,
                                                minWidth: '88.32px',
                                                color: (selectedRole === index) && '#fff',
                                                background: theme => (selectedRole === index) && theme.palette.primary.main,
                                                '&:hover': {
                                                    background: theme => (selectedRole === index) && theme.palette.primary.light
                                                }
                                            }}
                                        />
                                    </Box>
                                ))
                            }


                        </Box>

                    </Box>

                    <Box mt={'2rem'}>
                        <PrimaryButtonContained type={'submit'} sx={{width: "193.04px"}}>
                            Submit
                        </PrimaryButtonContained>
                    </Box>

                </form>
            </Box>


            {/*     Success Modal   */}
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    maxWidth: {
                        xs: '344px',
                        md: '548px'
                    },
                    width: '100%',
                    // height: '502px',
                    background: '#fff',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    bgcolor: 'background.paper',
                    boxShadow: 24,
                    p: 4,
                }}>

                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                    }}>
                        <Box onClick={handleClose} component={'button'} sx={{
                            cursor: 'pointer',
                            background: 'transparent',
                            border: 'none',
                        }} fontSize={'11px'}>
                            x close
                        </Box>
                    </Box>

                    {/*     Success Image Logo   */}
                    <Box mt={'8px'} display={'flex'} justifyContent={'center'}>
                        <Image src={'/icons/svg/successIcon.svg'} width={81} height={78}/>
                    </Box>

                    <Typography
                        sx={{
                            mt: '1.5rem',
                            fontSize: '35px',
                            lineHeight: '33px',
                            fontFamily: 'Roboto Slab',
                            fontWeight: 'bold',
                        }}
                        textAlign={'center'}
                        variant={'h1'}
                    >
                        Thanks for Signning up!
                    </Typography>

                    <Typography sx={{
                        mt: '1.5rem',
                        fontSize: {
                            xs: '16px',
                            md: '18px'
                        },
                        color: 'rgba(0, 0, 0, 1)',
                        lineHeight: '33px',
                    }} textAlign={'center'} variant={'body1'}>
                        A confirmation email was sent to your email. <br/>
                        Didnt get an email? Check your spam <br/>
                        or <br/>
                        <Box sx={{
                            cursor: 'pointer',
                            color: theme => theme.palette.primary.main,
                        }} component={'span'}>
                            Contact us {' '}
                        </Box>
                        and we’ll sort it out
                    </Typography>

                    <Typography sx={{
                        mt: '3.5rem',
                        fontSize: '14px',
                        color: 'rgba(0, 0, 0, 1)',
                        lineHeight: '33px',
                    }} textAlign={'center'} variant={'body1'}>
                        Get the latest word from our CEO <br/>
                        at our <Box sx={{
                        cursor: 'pointer',
                        color: theme => theme.palette.primary.main,
                    }} component={'span'}
                    >
                        RentBase Blog {' '}
                    </Box>
                    </Typography>


                </Box>
            </Modal>

        </Box>
    );
};

export default TryRentBaseSection;
