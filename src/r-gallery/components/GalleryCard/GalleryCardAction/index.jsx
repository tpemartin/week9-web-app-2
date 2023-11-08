import GitHubIcon from '@mui/icons-material/GitHub';
import { Box, Fade, Rating, Stack } from '@mui/material';
import GradeIcon from '@mui/icons-material/Grade';
import CloseIcon from '@mui/icons-material/Close';

export default function GalleryCardAction({ ratingOpen = false }) {

    return (
        <>
            <Stack direction="row" spacing={2}
                sx={{ justifyContent: "space-between" }}>
                <GitHubIcon />
                <ProjectRating ratingOpen={ratingOpen} />
                <ActionControl ratingOpen={ratingOpen} />
            </Stack>
        </>
    )
}

// transition: fade, https://mui.com/material-ui/transitions/#fade
function ProjectRating({ ratingOpen = false }) {
    return (
        <>
            <Box>
                <Fade in={ratingOpen} timeout={300}>
                    <Rating name="project-rating" value={null} max={5}
                    />
                </Fade>
            </Box>
        </>
    )
}

function ActionControl({ ratingOpen = false }) {

    const actionControl = ratingOpen ? <CloseIcon /> : <GradeIcon />

    return (
        <>
            {actionControl}
        </>
    )
}