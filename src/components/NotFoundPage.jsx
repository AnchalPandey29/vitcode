import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import theme from '../theme';

const NotFoundPage = () => {
  return (
    <Box
      sx={{
        bgcolor: theme.colors.background,
        color: theme.colors.text,
        minHeight: '80vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        px: 2,
      }}
    >
      <Helmet>
        <title>404 - Page Not Found</title>
      </Helmet>
      <Typography variant="h1" sx={{ fontSize: { xs: '3rem', md: '4rem' }, mb: 2 }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 3 }}>
        Oops! The page you’re looking for doesn’t exist.
      </Typography>
      <Button
        variant="contained"
        component={Link}
        to="/"
        sx={{
          mt: 2,
          background: theme.colors.secondary,
          color: theme.colors.primary,
          fontWeight: 600,
          textTransform: 'none',
          borderRadius: theme.borderRadius.medium,
          '&:hover': { background: '#cf9306ff' },
        }}
      >
        Go Back Home
      </Button>
    </Box>
  );
};

export default NotFoundPage;
