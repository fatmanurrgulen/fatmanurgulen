import React from 'react';
import { Box, Typography, useTheme } from '@mui/material';

const Footer = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        color: isDark ? '#e0e0e0' : '#333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        py: { xs: '0.75rem', sm: '1rem' },
        fontSize: { xs: '0.8rem', sm: '0.9rem' },
        textAlign: 'center',
      }}
    >
      <Typography variant="body2" component="span" sx={{ fontWeight: 500 }}>
        Fatmanurgulen
      </Typography>
      &nbsp;tarafından yapılmıştır.
    </Box>
  );
};

export default Footer;
