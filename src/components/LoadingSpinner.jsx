import React from 'react';
import { CircularProgress, Box } from '@mui/material';
import theme from '../theme';

const LoadingSpinner = () => {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', p: 2 }}>
      <CircularProgress sx={{ color: theme.colors.secondary }} />
    </Box>
  );
};

export default LoadingSpinner;