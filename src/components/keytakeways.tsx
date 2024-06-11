import React from 'react';
import {
    Grid,
    Typography,
    Card,
    CardContent,
    CardMedia,
    ThemeProvider,
    createTheme,
} from '@mui/material';

const theme = createTheme();

interface KeyTakeawayProps {
    title: string;
    description: string;
    icon: string;
}

const KeyTakeaway: React.FC<KeyTakeawayProps> = ({
    title,
    description,
    icon,
}) => {
    return (
        <Card sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: theme.spacing(2),
            background: 'linear-gradient(to bottom, rgba(80,74,248,0.3), rgba(115,115,115,0))',
            [theme.breakpoints.down('sm')]: {
                padding: 1,
            },
            overflow: 'visible'
        }}>
            <CardMedia
                sx={{
                    height: 100,
                    width: 130,
                    marginTop: '-60px',
                    zIndex: 10
                }}
                image={icon}
                title={title}
            />
            <CardContent>
                <Typography
                    variant="h6"
                    sx={{
                        textAlign: 'center',
                        fontSize: 16,
                        fontWeight: 'bold',
                        marginBottom: theme.spacing(1),
                        color: 'white',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: 14,
                        },
                    }}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{
                        textAlign: 'center',
                        fontSize: 12,
                        color: 'white',
                        [theme.breakpoints.down('sm')]: {
                            fontSize: 10,
                        },
                    }}
                >
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

const KeyTakeaways: React.FC = () => {
    return (
        <div style={{
            flexGrow: 1,
            padding: theme.spacing(2),
            background: 'rgba(21,10,39,0.5)',
            backgroundColor: 'black',
        }}>
            <Typography
                variant='h3'
                sx={{
                    color: 'white',
                    fontSize: 28,
                    textAlign: 'center',
                    padding: '40px',
                    [theme.breakpoints.down('sm')]: {
                        fontSize: 24,
                        padding: '20px',
                    },
                }}
            >
                Key Takeaways
            </Typography>
            <Grid
                container
                justifyContent="center"
                spacing={3}
                rowGap={{ xs: 5 }}
                sx={{ marginTop: '30px' }}
            >
                <Grid item xs={12} sm={6} md={3}>
                    <KeyTakeaway
                        title="AI's Impact on Jobs"
                        description="Understanding how AI is reshaping job roles and industries."
                        icon="/images/benefit1.png"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <KeyTakeaway
                        title="New AI Job Opportunities"
                        description="Identifying new opportunities in the AI-driven job market."
                        icon="/images/benefit2.png"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <KeyTakeaway
                        title="Skills for AI Jobs"
                        description="Skill requirements in the AI-driven job market."
                        icon="/images/benefit3.png"
                    />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <KeyTakeaway
                        title="Staying Relevant"
                        description="How to remain competitive in a rapidly changing workforce."
                        icon="/images/benefit4.png"
                    />
                </Grid>
            </Grid>
        </div>
    );
};

const App: React.FC = () => (
    <ThemeProvider theme={theme}>
        <KeyTakeaways />
    </ThemeProvider>
);

export default App;
