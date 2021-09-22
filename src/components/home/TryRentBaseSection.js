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

    const roles = ['Agent', 'Manager', 'real-estate professional', 'Other']

    const onSubmit = (data) => {
        console.log(data);
        console.log(roles[selectedRole])
    };

    console.log(errors);

    return (
        <Box
            sx={{
                maxWidth: '991px',
                mx: 'auto',
                px: '1.5rem',
                py: '3rem',
                borderRadius: '12px',
                border: '1px solid rgba(221, 221, 221, 1)',
                mb: '2rem',
                display: 'grid',
                gridGap: '2rem',
                gridTemplateColumns: '1fr 1fr',
            }}
        >

            {/* Left Section*/}
            <Box>

                <Typography fontWeight={'700'} fontSize={'35px'} variant={'h1'}>
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
                            Your Name
                        </Typography>

                        <Controller
                            name="name"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "You must have to specify your name",
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
                            Your Role
                        </Typography>

                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: "You must have to specify your email",
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

                        <Stack direction={'row'} spacing={2}>

                            {
                                roles.map((role, index) => (
                                    <Box>
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


                        </Stack>

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