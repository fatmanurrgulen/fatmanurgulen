import React, { useRef, useState, useEffect } from 'react';
import { TextField, Button, Container, Typography, Grid, Box, Paper, Snackbar, Alert } from '@mui/material';
import { FaJsSquare, FaReact, FaNodeJs, FaTypo3, FaDatabase } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const contactSection = useRef(null); // Contact section için ref
    const [openSnackbar, setOpenSnackbar] = useState(false); // Snackbar açılma durumu için state

    const sendEmail = (e) => {
        e.preventDefault();
        
        emailjs.sendForm('service_qpzisf4', 'template_7rcebxe', form.current, 'nhOVeDyIyAxYLBWee') 
            .then((result) => {
                console.log('SUCCESS!', result.text);
                e.target.reset(); // Formu sıfırla
                setOpenSnackbar(true); // Snackbar'ı aç
            }, (error) => {
                console.log('FAILED...', error.text);
            });
    };

    const handleCloseSnackbar = () => {
        setOpenSnackbar(false); // Snackbar'ı kapat
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
    <FaJsSquare size={50} style={{ color: "#F7DF1E" }} /> {/* JavaScript sarı */}
  </Grid>
  <Grid item>
    <FaReact size={50} style={{ color: "#61DAFB" }} /> {/* React mavi */}
  </Grid>
  <Grid item>
    <FaNodeJs size={50} style={{ color: "#339933" }} /> {/* Node.js yeşil */}
  </Grid>
  <Grid item>
    <FaTypo3 size={50} style={{ color: "#FF8700" }} /> {/* Typo3 turuncu */}
  </Grid>
  <Grid item>
    <FaDatabase size={50} style={{ color: "#00648B" }} /> {/* Database mavi (SQL tarzı) */}
  </Grid>
</Grid>

            </Box>

            {/* İletişim Kısmı */}
            <div ref={contactSection}> {/* Buraya referansı ekleyelim */}
                <Paper id="contact" elevation={3} sx={{ padding: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom textAlign="center">
                        Contact Me
                    </Typography>
                    <Typography variant="body1" color="textSecondary" textAlign="center" mb={4}>
                        I would love to hear from you! Feel free to reach out using the form below.
                    </Typography>
                    
                    <form ref={form} onSubmit={sendEmail}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Your Name"
                                    name="user_name"
                                    variant="outlined"
                                    required
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    fullWidth
                                    label="Your Email"
                                    name="user_email"
                                    variant="outlined"
                                    type="email"
                                    required
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    fullWidth
                                    label="Your Message"
                                    name="message"
                                    variant="outlined"
                                    multiline
                                    rows={4}
                                    required
                                    InputLabelProps={{ shrink: true }}
                                />
                            </Grid>
                        </Grid>
                        <Box mt={4} textAlign="center">
    <Button
        type="submit"
        variant="contained"
        color="primary"
        sx={{
            backgroundColor: 'rgb(193, 42, 140)', // Ana buton rengi
            padding: '0.75rem 2.5rem',
            borderRadius: '0.5rem', // Köşe yuvarlağı
            fontFamily: "'Roboto', sans-serif", // Yazı fontu
            fontWeight: 600, // Yazı kalınlığı
            fontSize: '1rem', // Yazı boyutu
            transition: 'background-color 0.3s ease, border-radius 0.3s ease, color 0.3s ease', // Yumuşak geçiş
            '&:hover': {
                backgroundColor: '#e09bc1', // Hover arka plan rengi
                color: '#fff', // Hover yazı rengi beyaz olacak
                borderRadius: '0.5rem', // Köşe yuvarlağı
                fontFamily: "'Roboto', sans-serif", // Yazı stili korunur
                fontWeight: 600, // Yazı kalınlığı korunur
            },
        }}
    >
        Submit
    </Button>
</Box>


                        

                    </form>
                </Paper>
            </div>

            {/* Snackbar - Mail gönderildiğinde açılır */}
            <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleCloseSnackbar}>
                <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
                    Email sent successfully! I'll get back to you as soon as possible.
                </Alert>
            </Snackbar>

            {/* Footer için boşluk ekleme */}
            <Box sx={{ mt: 8 }}> 
                
            </Box>
        </Container>
    );
};

export default Contact;
