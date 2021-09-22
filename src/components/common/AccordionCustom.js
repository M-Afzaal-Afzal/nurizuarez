import React from 'react';
import {Accordion, AccordionDetails, AccordionSummary, Box, Typography} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const AccordionCustom = ({heading, description}) => {
    return (
        <Accordion sx={{
            // '&.Mui-expanded': {
            //     background: '#ed9419',
            //     margin: 0,
            // },
            // background: '#262022',
            // color: '#fff',
            my: '1rem',
            boxShadow: '0px 4px 15px 0px rgba(234, 237, 240, 1)',
            borderBottom: '0',
            "&:before": {
                background: 'unset',
            },
            '.css-yw020d-MuiAccordionSummary-expandIconWrapper': {
                paddingLeft: "3rem",
                paddingRight: '3rem'
            },
            '.css-yw020d-MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
                paddingLeft: "3rem",
                paddingRight: '3rem',
            }

        }}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon/>}
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                    '.css-o4b71y-MuiAccordionSummary-content': {
                        margin: 0,
                    },
                }}
            >
                <Box height={'78px'} sx={{
                    display: "flex",
                    alignItems: 'center',
                }}>

                    <Typography sx={{
                        px: '3rem',
                    }} variant={'body1'} fontWeight={'400'}>
                        {heading}
                    </Typography>
                </Box>
            </AccordionSummary>

            <AccordionDetails sx={{
                background: '#fff',
                color: 'black',
                borderTop: '1px solid #eee',
            }}>
                <Box py={'1.5rem'} px={'3rem'}>
                    {
                        description.map(desc => (
                            <Typography variant={'body1'}>
                                {desc}
                            </Typography>
                        ))
                    }
                </Box>

            </AccordionDetails>
        </Accordion>
    );
};

export default AccordionCustom;