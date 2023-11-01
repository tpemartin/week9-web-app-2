import * as React from 'react';
import { Alert, Backdrop } from "@mui/material";


export default function OutOfOffice() {


    const [open, setOpen] = React.useState(true);
    
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: 2 }}
            open={open}
            onClick={() =>{
                setOpen(false)
            }}>

            <Alert onClose={() => {
                setOpen(false)
            }}>臨時有事，約3點回來</Alert>
        </Backdrop>

    )
}