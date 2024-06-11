import React, { useState, ChangeEvent, FormEvent } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';
import axios from 'axios';

interface FormData {
    name: string;
    email: string;
    profession: string;
    institutes: string;
}

function RegistrationForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        profession: '',
        institutes: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/register', formData);
            alert(response.data.message);
            setFormData({
                name: '',
                email: '',
                profession: '',
                institutes: ''
            });
        } catch (error) {
            alert('Error registering user');
            console.error(error);
        }
    };

    return (
        <Box sx={{ background: 'black', position: 'relative', justifyContent: 'center', alignItems: 'center', display: 'flex', minHeight: '100vh', width: '100%', overflow: 'hidden', flexDirection: { xs: 'column', md: 'row' }, }}>
            <Box
                sx={{
                    backgroundImage: 'url(/images/image71.png)', // Use your background image path
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    minHeight: '-webkit-fill-available',
                    color: 'white',
                    opacity: '0.4',
                    top: '0px',
                    left: '0px',
                    width: '100%'
                }}
            ></Box>
            <Box
                sx={{
                    flex: 0.7,
                    p: 3,
                    textAlign: { xs: 'center', md: 'left' },
                    color: 'white',
                    zIndex: 10,


                }}
            >
                <Box sx={{ mb: 4, display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, background: 'rgba(255, 255, 255, 0.1)', width: '122px', borderRadius: '5px', padding: '5px' }}>
                    <Typography variant="body2" sx={{ mb: 0, mr: 1, fontWeight: 'bold' }}>Powered by</Typography>
                    <img src="/images/image99.png" alt="Logo" style={{ height: 40 }} /> {/* Use your logo path */}
                </Box>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    Adapting to Tomorrow's
                </Typography>
                <Typography variant="h4" sx={{ mb: 1 }}>
                    Workforce: 5 Ways <span style={{ color: '#FF8686' }}>AI is Shaping</span>
                </Typography>
                <Typography variant="h4" sx={{ mb: 2 }}>
                    <span style={{ color: '#FF8686' }}>Career Paths</span>
                </Typography>
                <Typography variant="h6" >
                    In this engaging session, we will explore the AI's impact on the job
                </Typography>
                <Typography variant="h6" sx={{ mb: 4 }}>
                    landscape and how you can prepare yourself for the future of work.
                </Typography>
                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: { xs: 'center', md: 'flex-start' }, gap: 4 }}>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                        <span role="img" aria-label="calendar" style={{ marginRight: 8 }}>📅</span> May 12th 2024
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                        <span role="img" aria-label="clock" style={{ marginRight: 8 }}>⏰</span> 09:00 AM
                    </Typography>
                    <Typography variant="body1" sx={{ display: 'flex', alignItems: 'center' }}>
                        <span role="img" aria-label="people" style={{ marginRight: 8 }}>👥</span> Everyone
                    </Typography>
                </Box>
            </Box>

            {/* Right side form content */}
            <Box sx={{
                flex: 0.5,
                mt: { xs: 3, md: 0 },
                color: 'white',
                zIndex: 10,

                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{
                        width: '100%',
                        maxWidth: '400px',
                        background: 'rgba(255, 255, 255, 0.1)', // Slightly transparent black
                        padding: 3,
                        borderRadius: 2,
                        boxShadow: 3,
                        mx: 'auto',


                    }}
                >
                    <Typography variant='h4' sx={{ color: 'white', textAlign: 'center', mb: 2 }}>Reserve Your Spot Today!</Typography>
                    <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        variant="outlined"
                        margin="normal"
                        value={formData.name}
                        onChange={handleChange}
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '5px' }}
                    />
                    <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        variant="outlined"
                        margin="normal"
                        value={formData.email}
                        onChange={handleChange}
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '5px' }}
                    />
                    <TextField
                        fullWidth
                        label="Profession"
                        name="profession"
                        variant="outlined"
                        margin="normal"
                        value={formData.profession}
                        onChange={handleChange}
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '5px' }}
                    />
                    <TextField
                        fullWidth
                        label="Institutes/Organizations"
                        name="institutes"
                        variant="outlined"
                        margin="normal"
                        value={formData.institutes}
                        onChange={handleChange}
                        sx={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '5px' }}
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            sx={{ borderRadius: '5px', backgroundColor: 'rgba(255, 87, 34, 0.9)' }}
                        >
                            Register
                        </Button>
                    </Box>
                </Box>
            </Box>
        </Box>

    );
}

export default RegistrationForm;
