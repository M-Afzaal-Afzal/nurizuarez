import React from 'react';
import {Button} from "@mui/material";

const ButtonPrimaryText = React.forwardRef(({children,sx,...props},ref) => {
    return (
        <Button variant={'contained'} ref={ref} color={'primary'} {...props}
        sx={sx}
        >
            {children}
        </Button>
    );
});

export default ButtonPrimaryText;