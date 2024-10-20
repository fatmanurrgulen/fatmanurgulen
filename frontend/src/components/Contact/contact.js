import React, { useRef, useState } from 'react'; 
import { TextField, Button, Container, Typography, Grid, Box, Paper, Snackbar, Alert } from '@mui/material';
import { FaJsSquare, FaReact, FaNodeJs, FaTypo3, FaDatabase } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const contactSection = useRef(null);
    const [openSnackbar, setOpenSnackbar] = useState(false);

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

    return (
        <Container maxWidth="md" sx={{ mt: 3 }}>
            {/* Araçlar Kısmı */}
            <Box textAlign="center" mb={8}>
                <Typography variant="h4" component="h1" gutterBottom>
                    Tools I Use
                </Typography>
                <Grid container spacing={4} justifyContent="center">
                    <Grid item>
                        <FaJsSquare size={50} style={{ color: "#F7DF1E" }} />
                    </Grid>
                    <Grid item>
                        <FaReact size={50} style={{ color: "#61DAFB" }} />
                    </Grid>
                    <Grid item>
                        <FaNodeJs size={50} style={{ color: "#339933" }} />
                    </Grid>
                    <Grid item>
                        <FaTypo3 size={50} style={{ color: "#FF8700" }} />
                    </Grid>
                    <Grid item>
                        <FaDatabase size={50} style={{ color: "#00648B" }} />
                    </Grid>
                </Grid>
            </Box>

            {/* İletişim Kısmı */}
            <div ref={contactSection}>
                <Paper id="contact" elevation={3} sx={{ padding: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom textAlign="center">
                        İletişim
                    </Typography>
                    <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
                    Sanırım bir mesajınız var hemen yazınız :)                </Typography>
                    
                    <form ref={form} onSubmit={sendEmail}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Adınız "
                                    name="user_name"
                                    variant="outlined"
                                    required
                                    InputLabelProps={{ shrink: true }}
                                    InputProps={{
                                        sx: {
                                            height: '56px', // Alan yüksekliğini ayarla
                                            display: 'flex',
                                            alignItems: 'center', // Dikey ortalama
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
                                            height: '56px', // Alan yüksekliğini ayarla
                                            display: 'flex',
                                            alignItems: 'center', // Dikey ortalama
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
                                            display: 'flex',
                                            alignItems: 'center', // Dikey ortalama
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
                                    borderRadius: '0.5rem',
                                    fontFamily: "'Roboto', sans-serif",
                                    fontWeight: 600,
                                    fontSize: '1rem',
                                    transition: 'background-color 0.3s ease, border-radius 0.3s ease, color 0.3s ease',
                                    '&:hover': {
                                        backgroundColor: '#e09bc1',
                                        color: '#fff',
                                        borderRadius: '0.5rem',
                                        fontFamily: "'Roboto', sans-serif",
                                        fontWeight: 600,
                                    },
                                }}
                            >
                                Gönder
                            </Button>
                        </Box>
                    </form>
                </Paper>
            </div>

            {/* Snackbar - Mail gönderildiğinde açılır */}
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                E-posta başarıyla gönderildi! En kısa sürede size geri döneceğim.                </Alert>
            </Snackbar>

            {/* Footer için boşluk ekleme */}
            <Box sx={{ mt: 8 }}></Box>
        </Container>
    );
};

export default Contact;
