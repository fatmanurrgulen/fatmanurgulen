import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        bgcolor: '#ffffff',
        color: '#666',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        paddingY: { xs: '0.5rem', sm: '0.75rem', md: '0.5rem' }, // Daha ince padding
        fontWeight: 300,
        fontSize: { xs: '0.8rem', sm: '0.9rem' },
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" component="span" fontWeight="bold">
        Fatmanurgulen
      </Typography>
      &nbsp;tarafından yapılmıştır.
    </Box>
  );
};

export default Footer;
