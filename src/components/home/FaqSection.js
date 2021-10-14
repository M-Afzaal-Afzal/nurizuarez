import React from 'react';
import {Box, Typography} from "@mui/material";
import AccordionCustom from "../common/AccordionCustom";
// import Image from "next/image";

const FaqSection = () => {

    return (


        <Box
            pt={'1.5rem'}
            id={'faq'}
            pb={'5rem'}
        >
            <Box sx={{
                maxWidth: "988px",
                mx: "auto",
            }}>

                <Typography
                    fontWeight={'bold'}
                    textAlign={'center'}
                    variant={'h1'}
                    fontSize={'36px'}
                >
                    Have a question?
                </Typography>

                {/*     Accordion Section     */}

                <Box mt={'3rem'}>

                    <AccordionCustom
                        heading={'Who is RentBase meant for?'}
                        description={["RentBase is built for solo agents or brokers working as a team to help organize and manage all landlords, listings and leads in one place.", "Property managers and DIY landlords with multiple properties can also benefit from the time saving values RentBase provides such as leads pre-qualification and rental listing management."]}
                    />


                    <AccordionCustom
                        heading={'Will you share or sell my data?'}
                        description={[
                            'No we do not sell or share any of your data. Full stop. No fine print.',
                            'We take data protection very seriously at RentBase and know how important it is to keep your make sure your data remains only your data.'
                        ]}
                    />

                    <AccordionCustom
                        heading={'What can I do with all the extra time I\'ve saved?'}
                        description={[
                            ' Besides feeling like a master of your own time again, you can:',
                            '1. Get more rental deals in your pipeline - touch base with old leads, find more listings to work on, etc.',
                            '2. Contact your landlords and engage with them - they might be into buying more properties or selling their own properties.',
                            '3. Have proper dinner and a movie with family and friends - with RentBase all you have to do to reply to a lead is send our pre-qualification lead, the lead will take it from there.'
                        ]}
                    />

                    <AccordionCustom
                        heading={'Is this real life?'}
                        description={[
                            "YES! We've been working hard since 2020 to get you the best in class rentals database and CRM.",
                            "Our focus is saving you time to enable you manage and grow your rental business, with automations and best practices embedded to the rental cycles."
                        ]}
                    />

                    <AccordionCustom
                        heading={'Will I close more deals?'}
                        description={[
                            ' We have reserved 60 Fangsters for giveaways, events, collabs and 4 to portray our team\n' +
                            '                                members.',
                        ]}
                    />
                    <AccordionCustom
                        heading={'Will i be able to integrate with my other platforms?'}
                        description={[
                            'This is on our roadmap and you can expect to see some integrations in early 2022.\n' +
                            "We would love to know more about your needs so feel free to drop us a line at support@therentbase.com with the platforms you'd like us to integrate with.",
                        ]}
                    />
                    <AccordionCustom
                        heading={'How easy it is to migrate all my listings?'}
                        description={[
                            'Our easy to follow listing and landlords import flow that should enable you to import your listings in less than 5 minutes.',
                            'Not sure how to do it? Need help importing?',
                            'We would love to help, just contact us - support@therentbase.com.'
                        ]}
                    />

                </Box>

            </Box>
        </Box>

    );
};

export default FaqSection;
