import { Avatar, Paper, Stack, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import OutOfOffice from "./OutOfOffice";

export default function OfficeInformation({ imgLink, title, name, officeHour, email, phone, office }) {
    return (
        <>
        <Paper elevation={3} sx={{p: 2, maxWidth: "500px", height: "700px"}}>
            <OfficeInfoHeader imgLink={imgLink} name={name} title={title} email={email} phone={phone} />
            <OutOfOffice/>
        </Paper>
        </>
    )
}

function OfficeInfoHeader({ name, title, imgLink, email, phone }) {
    return (
        <Stack direction="row" spacing={2}>
            <Avatar alt={name} src={imgLink} sx={{ width: 100, height: 100 }} />
            <Name_Email_Phone name={name} title={title} email={email} phone={phone} />
        </Stack>
    )
}

function Name_Email_Phone({ name, title, email, phone }) {
    return (
        <Stack direction="column" spacing={0}>
            <Typography variant="h4">
                {name} {title}
            </Typography>
            <Typography variant="body1">
                <EmailIcon /> {email}
            </Typography>
            <Typography variant="body1">
                <PhoneIcon /> {phone}
            </Typography>
        </Stack>
    )
}



