import React from 'react';
import {Button} from "@mui/material";

const ButtonPrimaryText = React.forwardRef(({children,sx,...props},ref) => {
    return (
        <Button sx={{
            textTransform: 'unset',
            color: 'rgba(0, 0, 0, 1)',
            '&:hover': {
                color: 'primary.light',
                backgroundColor: 'unset',
            },
            ...sx,
        }} disableRipple={true} variant="text"
                {...props}
            ref={ref}
        >
            {children}
        </Button>
    );
});

export default ButtonPrimaryText;