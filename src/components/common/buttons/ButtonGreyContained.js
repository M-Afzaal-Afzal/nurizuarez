import React from 'react';
import {Button} from "@mui/material";

const ButtonGreyContained = React.forwardRef(({children,sx,...props},ref) => {
    return (
        <Button variant={'contained'} ref={ref} color={'grey'} {...props}
                sx={{
                    color: theme => theme.palette.primary.main,
                    width: '194.62px',
                    height: '50px',
                    fontSize: '16px',
                    fontWeight: '600',
                    textTransform: 'capitalize',
                    ...sx,
                }}
        >
            {children}
        </Button>
    );
});

export default ButtonGreyContained;