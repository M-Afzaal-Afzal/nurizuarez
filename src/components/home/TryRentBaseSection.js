import React, {useState} from 'react';
import {Box, Typography, OutlinedInput, FormHelperText, Chip, Stack} from "@mui/material";
import {useForm, Controller} from "react-hook-form";
import PrimaryButtonContained from "../common/buttons/PrimaryButtonContained";
import Image from 'next/image'

const TryRentBaseSection = () => {

    const {control, formState: {errors}, handleSubmit} = useForm();

    const [selectedRole, setSelectedRole] = useState(0);

    const roleChangeHandler = (index) => {
        setSelectedRole(index);
    }

    const roles = ['Agent', 'Manager', 'Real-estate professional', 'Other']

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
                    Try RentBase for your <br/>
                    team or office.
                </Typography>

                <Box sx={{
                    py: '2rem',
                }}>
                    <Typography variant={'body1'}>
                        With our combined decades of experience in residential leasing, we’ve created a best-in-class
                        platform to help agents across the country save time, stay organized, and close more rental
                        deals.
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

                    <Box mt={'2.5rem'}>
                        <Typography variant={'body1'}>
                            Trusted by Agent at
                        </Typography>
                    </Box>

                    <Stack mt={'1rem'} direction={'row'} spacing={3}>
                        <Box>
                            <Image src={'/icons/svg/kw.svg'} width={58.6} height={25.75}/>
                        </Box>

                        <Box>
                            <Image src={'/icons/svg/kw.svg'} width={58.6} height={25.75}/>
                        </Box>

                        <Box>
                            <Image src={'/icons/svg/kw.svg'} width={58.6} height={25.75}/>
                        </Box>

                        <Box>
                            <Image src={'/icons/svg/kw.svg'} width={58.6} height={25.75}/>
                        </Box>
                    </Stack>

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
                            Your role
                        </Typography>

                        <Box display={'flex'} sx={{
                            maxWidth: {
                                xs: '275px',
                                md: 'auto',
                            }
                        }} flexWrap={'wrap'} direction={'row'} spacing={2}>

                            {
                                roles.map((role, index) => (
                                    <Box margin={'8px'}>
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

        </Box>
    );
};

export default TryRentBaseSection;
