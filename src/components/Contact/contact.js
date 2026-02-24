// src/components/Contact/Contact.jsx
import React, { useRef, useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Snackbar,
  Alert,
  Paper,
  Box,
  useTheme,
} from '@mui/material';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const formRef = useRef();
  const [snackbar, setSnackbar] = useState({ open: false, severity: 'success', message: '' });

  const sendEmail = (e) => {
    e.preventDefault();

    // Honeypot bot kontrolü
    const honeypot = formRef.current.honey.value;
    if (honeypot) return;

    console.log('SendEmail tetiklendi'); // Debug

    emailjs
      .sendForm(
        'service_qpzisf4', // kendi serviceID
        'template_7rcebxe', // kendi templateID
        formRef.current,
        'nhOVeDyIyAxYLBWee' // kendi publicKey
      )
      .then(() => {
        formRef.current.reset();
        setSnackbar({ open: true, severity: 'success', message: 'Mesaj başarıyla gönderildi!' });
      })
      .catch((err) => {
        console.error('MailJS Hatası:', err);
        setSnackbar({ open: true, severity: 'error', message: 'Mesaj gönderilemedi. Lütfen izinleri kontrol edin.' });
      });
  };

  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: 'transparent' }}>
      <Container maxWidth="md">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            elevation={6}
            sx={{
              p: { xs: 3, md: 5 },
              borderRadius: '20px',
              backgroundColor: isDark ? '#1e1e2f' : '#fff',
              border: `1px solid ${isDark ? '#e09bc1' : '#c12a8c'}`,
              boxShadow: isDark
                ? '0 8px 24px rgba(193, 42, 140, 0.15)'
                : '0 8px 24px rgba(193, 42, 140, 0.08)',
            }}
          >
            <Typography
              variant="h4"
              align="center"
              sx={{ fontWeight: 700, mb: 2.5, color: isDark ? '#e09bc1' : '#c12a8c' }}
            >
              İletişim
            </Typography>

            <Typography
              variant="body1"
              align="center"
              sx={{ mb: 6, color: isDark ? '#ccc' : '#555' }}
            >
              Her zaman ulaşabilirsiniz, mesaj bırakmanız yeterli! ✉️
            </Typography>

            <form ref={formRef} onSubmit={sendEmail}>
              <input type="text" name="honey" style={{ display: 'none' }} />

              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    name="user_name"
                    label="Adınız"
                    variant="outlined"
                    InputProps={{
                      sx: { backgroundColor: isDark ? '#2c2c3a' : '#f9f9f9', borderRadius: '12px' },
                    }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    fullWidth
                    required
                    name="user_email"
                    type="email"
                    label="E-posta"
                    variant="outlined"
                    InputProps={{
                      sx: { backgroundColor: isDark ? '#2c2c3a' : '#f9f9f9', borderRadius: '12px' },
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
                    multiline
                    rows={5}
                    name="message"
                    label="Mesajınız"
                    variant="outlined"
                    InputProps={{
                      sx: { backgroundColor: isDark ? '#2c2c3a' : '#f9f9f9', borderRadius: '12px' },
                    }}
                  />
                </Grid>
              </Grid>

              <Box mt={4} textAlign="center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      px: 4,
                      py: 1.2,
                      borderRadius: '12px',
                      backgroundColor: '#c12a8c',
                      fontWeight: 600,
                      textTransform: 'none',
                      fontSize: '1rem',
                      '&:hover': { backgroundColor: '#e09bc1', transform: 'scale(1.05)' },
                    }}
                  >
                    Gönder
                  </Button>
                </motion.div>
              </Box>
            </form>
          </Paper>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={5000}
        onClose={() => setSnackbar({ ...snackbar, open: false })}
      >
        <Alert
          severity={snackbar.severity}
          sx={{ width: '100%' }}
          onClose={() => setSnackbar({ ...snackbar, open: false })}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact;