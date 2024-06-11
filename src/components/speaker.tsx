import React from 'react';
import { Box, Grid, Avatar, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


interface Speaker {
    name: string;
    title: string;
}

interface WebinarItem {
    title: string;
    icon: React.ReactElement;
}

const webinarItems: WebinarItem[] = [
    {
        title: 'Discover the latest trends and advancements in the field.',
        icon: <CheckCircleIcon sx={{ marginRight: 1, color: 'white' }} />,
    },
    {
        title: 'Learn how AI is reshaping and enhancing jobs.',
        icon: <CheckCircleIcon sx={{ marginRight: 1, color: 'white' }} />,
    },
    {
        title: 'Explore AI\'s current impact and applications across sectors.',
        icon: <CheckCircleIcon sx={{ marginRight: 1, color: 'white' }} />,
    },
    {
        title: 'Discover emerging job opportunities driven by AI.',
        icon: <CheckCircleIcon sx={{ marginRight: 1, color: 'white' }} />,
    },
    {
        title: 'Identify key skills and education for AI careers.',
        icon: <CheckCircleIcon sx={{ marginRight: 1, color: 'white' }} />,
    },
];

const speaker: Speaker = {
    name: 'Speaker Name',
    title: 'Title & Credentials',
};

function WebinarDetails() {
    return (
        <Box
            sx={{
                background: 'black',
                flexGrow: 1,
                padding: 2,
                minHeight: '100vh',
                position: 'relative',
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
                color: 'white',
            }}
        >
            {/* Background overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/images/image4.png)',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.4,
                    zIndex: 1,
                }}
            />
            {/* Content container */}
            <Grid container spacing={2} sx={{ position: 'relative', zIndex: 2 }}>
                <Grid item xs={12} md={4}>
                    <Box
                        sx={{
                            padding: 2,
                            textAlign: 'center',
                            color: 'white',
                        }}
                    >
                        <Avatar
                            alt="Speaker Name"
                            src="/images/image11.png"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                margin: '0 auto',
                                objectFit: 'cover',
                                backgroundSize: 'cover',
                            }}
                        />
                        <Box width="100%" sx={{ border: '3px solid #FF8686', marginTop: '12px' }}></Box>
                        <Typography
                            variant="h6"
                            gutterBottom
                            sx={{ marginTop: 2, marginBottom: 1 }}
                        >
                            {speaker.name}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            {speaker.title}
                        </Typography>
                        <Typography variant="body2" gutterBottom>
                            A renowned expert in the field of AI, {speaker.name} will share their insights and guide you through the exciting landscape of AI-driven careers.
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box
                        sx={{
                            pl: { xs: 0, md: 20 },
                            color: 'white',
                            pt: 7,
                            mx: 'auto',
                        }}
                    >
                        <Typography
                            variant="h5"
                            gutterBottom
                            ml='5px'
                            padding={2}
                            fontWeight="bold"
                        >
                            Here's how the webinar will proceed
                            <Box width="40%" sx={{ border: '3px solid #FF8686', marginTop: '12px' }}></Box>
                        </Typography>

                        {webinarItems.map((item) => (
                            <Box
                                key={item.title}
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    marginBottom: 1,
                                    padding: '15px',
                                    color: 'white',
                                }}
                            >
                                {item.icon}
                                <Typography variant="body1" sx={{ color: 'white' }}>
                                    {item.title}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default WebinarDetails;
