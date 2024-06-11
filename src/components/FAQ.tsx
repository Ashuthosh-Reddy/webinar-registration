import React from 'react';
import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    ThemeProvider,
    createTheme,
    Box
} from '@mui/material';


const theme = createTheme();

interface FAQProps {
    title: string;
    description: string;
    icon: string;
}

const FAQ: React.FC<FAQProps> = ({ title, description, icon }) => (
    <Card
        sx={{
            height: '150px',
            width: '100%',
            maxWidth: '600px',
            background: 'linear-gradient(to right, rgba(102,32,212,0.3),rgba(107,36,124,0.3))',
            borderRadius: '10px',
            position: 'relative',
            mb: 2,
        }}
    >
        <CardMedia
            component="img"
            src={icon}
            sx={{
                height: '100',
                width: '80px',
                objectFit: 'cover',
                backgroundSize: 'cover',
                position: 'absolute',
                padding: '40px',
            }}
        />
        <CardContent sx={{ ml: { xs: '70px', sm: '150px', md: '30%' }, mt: 1 }}>
            <Typography variant="h6" sx={{ color: 'white', fontSize: '16px' }}>{title}</Typography>
            <Typography variant="body1" sx={{ color: '#BEBEBE', fontSize: '12px' }}>{description}</Typography>
        </CardContent>
    </Card>
);

const FAQs: React.FC = () => (
    <ThemeProvider theme={theme}>
        <Box
            style={{
                backgroundColor: 'black',
                minHeight: '100vh',
                paddingBottom: '40px'
            }}
        >
            <Typography
                variant="h3"
                sx={{
                    textAlign: 'center',
                    padding: '20px',
                    color: 'white',
                    fontSize: '28px'
                }}
            >
                FAQ'S
            </Typography>
            <Grid
                container
                spacing={1}
                sx={{
                    padding: '40px',
                    background: 'rgba(21,10,39,0.5)',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <FAQ
                        title="Is this webinar for everyone?"
                        description="Absolutely! Whether you're a recent graduate, a seasoned professional, or simply curious about the future of work, this webinar is for you."
                        icon="/images/image5.png"
                    />
                </Grid>
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <FAQ
                        title="I don't have a technical background. Will I still benefit?"
                        description="You don't need to be a tech whiz to understand the impact of AI on the job market. This webinar is designed to be accessible and informative for everyone."
                        icon="/images/image6.png"
                    />
                </Grid>
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <FAQ
                        title="How long is the webinar?"
                        description="The webinar will be __ minutes long, followed by a live Q&A session where you can get your questions answered by the expert."
                        icon="/images/image7.png"
                    />
                </Grid>
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <FAQ
                        title="Will this be live or pre-recorded?"
                        description="No, this is not a live session but even better than that!"
                        icon="/images/image8.png"
                    />
                </Grid>
                <Grid item xs={14} sm={10} md={8} lg={6}>
                    <FAQ
                        title="How can I stay updated on future developments, webinars, projects, and courses related to AI?"
                        description="Stay updated through our website, emails, and social media channels."
                        icon="/images/image9.png"
                    />
                </Grid>
                <Grid item xs={12} sm={10} md={8} lg={6}>
                    <FAQ
                        title="How will I benefit from this webinar?"
                        description="It will help you understand future job trends and essential skills, and provide networking opportunities with industry experts."
                        icon="/images/image66.png"
                    />
                </Grid>
            </Grid>
            <Box mx="auto" >
                <Typography variant='body1' color={'white'} sx={{
                    textAlign: 'center',
                }}>Technologies Used
                </Typography>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '8px'
                }}>
                    <img src='/images/chatgpt.png' alt='chatgpt' width="180px" style={{ paddingRight: "25px" }}></img>
                    <img src='/images/python.png' alt='chatgpt' width="180px" style={{ paddingLeft: '25px' }}></img>
                </Box>
            </Box>
        </Box>
    </ThemeProvider>
);

export default FAQs;
