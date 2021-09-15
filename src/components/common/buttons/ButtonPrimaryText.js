import React from 'react';
import {Button} from "@mui/material";

const ButtonPrimaryText = React.forwardRef(({children, sx, active, ...props}, ref) => {
    return (
        <Button sx={{
            textTransform: 'unset',
            color: active ? (theme) => theme.palette.primary.main : 'rgba(0, 0, 0, 1)',
            // fontWeight: active ? '700' : 'normal',
            transform: active ? 'scale(1.05)' : 'scale(1)',
            transition: 'all .3s linear',
            backfaceVisibility: 'hidden',
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