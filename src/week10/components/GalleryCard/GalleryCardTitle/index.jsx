import { Group } from '@mui/icons-material';
import GroupsIcon from '@mui/icons-material/Groups';
import { Avatar, Stack, Typography } from '@mui/material';
import { deepOrange } from '@mui/material/colors';

export default function GalleryCardTitle() {
    return (
        <>
            <Stack direction="row" spacing={2}
            sx={{justifyContent: "space-between",
            alignItems: "center"}}>
                <GroupNumber />
                <Title />
                <Members />
            </Stack>
        </>
    )
}

// helpers

function GroupNumber({groupNumber = 1}) {
    return (
        <>
        <Avatar sx={{ bgcolor: deepOrange[500] }}>{groupNumber}</Avatar>
        </>
    )
}
function Title({ title = "Title", subtitle = "Subtitle" }) {
    return (
        <>
            <Stack direction="column" spacing={2}>
                <Typography variant="h5">{title}</Typography>
                <Typography variant="subtitle1">{subtitle}</Typography>
            </Stack>
        </>
    )
}
function Members() {
    return (
        <>
            <GroupsIcon />
        </>
    )
}