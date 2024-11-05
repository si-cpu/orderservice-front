import React from 'react';
import { Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Container style={{ padding: '20px 0', textAlign: 'center' }}>
      <Typography variant='body2' color='textSecondary'>
        © 2024 MyApp, All Rights Reserved.
      </Typography>
    </Container>
  );
}

export default Footer;
