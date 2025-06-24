import React, { useRef, useState } from 'react'; 
import { TextField, Button, Container, Typography, Grid, Box, Paper, Snackbar, Alert } from '@mui/material';
import { FaJsSquare, FaReact, FaNodeJs, FaTypo3, FaDatabase } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import { keyframes } from '@emotion/react';

const Contact = () => {
    const form = useRef();
    const contactSection = useRef(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);
    const [rotateIcons, setRotateIcons] = useState({
        js: false,
        react: false,
        node: false,
        typo: false,
        db: false
    });

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_qpzisf4', 'template_7rcebxe', form.current, 'nhOVeDyIyAxYLBWee')
            .then((result) => {
                console.log('SUCCESS!', result.text);
                e.target.reset();
                setOpenSnackbar(true);
            }, (error) => {
                console.log('FAILED...', error.text);
            });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false);
    };

    const handleScrollToContact = () => {
        if (contactSection.current) {
            contactSection.current.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log("contactSection is null");
        }
    };

    // İkonların döndürme animasyonu
    const rotate = keyframes`
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    `;

    // İkonların mouse olaylarını yönet
    const handleMouseEnter = (iconName) => {
        setRotateIcons({ ...rotateIcons, [iconName]: true });
    };

    const handleMouseLeave = (iconName) => {
        setRotateIcons({ ...rotateIcons, [iconName]: false });
    };

    return (
        <Container maxWidth="md" sx={{ mt: 3 }}>
            {/* Tools Section */}
            <Box textAlign="center" mb={8}>
            <Grid container spacing={4} justifyContent="center" sx={{ mt: 4, mb: 4 }}>
    <Grid item>
        <FaJsSquare
            size={50}
            style={{
                color: "#F7DF1E",
                transform: rotateIcons.js ? 'rotate(360deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s ease',
                cursor: 'pointer',
            }}
            onMouseEnter={() => handleMouseEnter('js')}
            onMouseLeave={() => handleMouseLeave('js')}
        />
    </Grid>
    <Grid item>
        <FaReact
            size={50}
            style={{
                color: "#61DAFB",
                transform: rotateIcons.react ? 'rotate(360deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s ease',
                cursor: 'pointer',
            }}
            onMouseEnter={() => handleMouseEnter('react')}
            onMouseLeave={() => handleMouseLeave('react')}
        />
    </Grid>
    <Grid item>
        <FaNodeJs
            size={50}
            style={{
                color: "#339933",
                transform: rotateIcons.node ? 'rotate(360deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s ease',
                cursor: 'pointer',
            }}
            onMouseEnter={() => handleMouseEnter('node')}
            onMouseLeave={() => handleMouseLeave('node')}
        />
    </Grid>
    <Grid item>
        <FaTypo3
            size={50}
            style={{
                color: "#FF8700",
                transform: rotateIcons.typo ? 'rotate(360deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s ease',
                cursor: 'pointer',
            }}
            onMouseEnter={() => handleMouseEnter('typo')}
            onMouseLeave={() => handleMouseLeave('typo')}
        />
    </Grid>
    <Grid item>
        <FaDatabase
            size={50}
            style={{
                color: "#00648B",
                transform: rotateIcons.db ? 'rotate(360deg)' : 'rotate(0deg)',
                transition: 'transform 0.5s ease',
                cursor: 'pointer',
            }}
            onMouseEnter={() => handleMouseEnter('db')}
            onMouseLeave={() => handleMouseLeave('db')}
        />
    </Grid>
</Grid>

            </Box>

            {/* Contact Section */}
            <div ref={contactSection} id="contact">
                <Paper elevation={3} sx={{ padding: 4, borderRadius: 4, boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)", mb: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom textAlign="center">
                        İletişim
                    </Typography>
                    <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
                        Sanırım bir mesajınız var :)
                    </Typography>

                    <form ref={form} onSubmit={sendEmail}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Adınız"
                                    name="user_name"
                                    variant="outlined"
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{
                                        sx: {
                                            height: '56px',
                                            '&:hover': { borderColor: '#c12a8c', transform: 'scale(1.02)' }, // Hover büyüme animasyonu
                                            transition: 'transform 0.3s ease',
                                            caretColor: '#c12a8c',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#c12a8c',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#e09bc1',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#c12a8c',
                                                },
                                            },
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="E-mail"
                                    name="user_email"
                                    variant="outlined"
                                    type="email"
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{
                                        sx: {
                                            height: '56px',
                                            '&:hover': { borderColor: '#c12a8c', transform: 'scale(1.02)' },
                                            transition: 'transform 0.3s ease',
                                            caretColor: '#c12a8c',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#c12a8c',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#e09bc1',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#c12a8c',
                                                },
                                            },
                                        },
                                    }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Mesajınız"
                                    name="message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{
                                        sx: {
                                            '&:hover': { borderColor: '#c12a8c', transform: 'scale(1.02)' },
                                            transition: 'transform 0.3s ease',
                                            caretColor: '#c12a8c',
                                            '& .MuiOutlinedInput-root': {
                                                '& fieldset': {
                                                    borderColor: '#c12a8c',
                                                },
                                                '&:hover fieldset': {
                                                    borderColor: '#e09bc1',
                                                },
                                                '&.Mui-focused fieldset': {
                                                    borderColor: '#c12a8c',
                                                },
                                            },
                                        },
                                    }}
                                />
                            </Grid>
                        </Grid>
                        <Box mt={4} textAlign="center">
                        <Button
  type="submit"
  variant="contained"
  color="primary"
  sx={{
    backgroundColor: 'rgb(193, 42, 140)',
    padding: '0.75rem 2.5rem',
    borderRadius: '0.75rem',
    fontFamily: "'Roboto', sans-serif",
    fontWeight: 600,
    fontSize: '1rem',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 15px rgba(193, 42, 140, 0.4)', // Glow efekti
    '&:hover': {
      backgroundColor: '#e09bc1',
      color: '#fff',
      transform: 'scale(1.05)', // Büyüme efekti
    },
    '&:active': {
      transform: 'scale(1.02)', // Tıklama sonrası hafif küçülme
      boxShadow: '0 0 15px rgba(193, 42, 140, 0.7)', // Ripple efekti
    },
  }}
>
  Gönder
</Button>
</Box>

                    </form>
                </Paper>
            </div>

            {/* Snackbar */}
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    E-posta başarıyla gönderildi! En kısa sürede size geri döneceğim.
                </Alert>
            </Snackbar>
        </Container>
    );
};

export default Contact;
