import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import theme from '../theme';

// Shine effect (clean single layer)
const Shine = styled.div`
  position: absolute;
  top: 0;
  left: -75%;
  width: 50%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(255,255,255,0) 0%,
    rgba(255,255,255,0.25) 50%,
    rgba(255,255,255,0) 100%
  );
  transform: skewX(-20deg);
  animation: shine 2.5s infinite;
  
  @keyframes shine {
    0% { left: -75%; }
    100% { left: 125%; }
  }
`;

const CourseCard = React.memo(({ title, description, image }) => (
  <Card
    component={motion.div}
    whileHover={{ scale: 1.05, rotateY: 2 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 250 }}
    
    sx={{
      marginBottom:"10px",
      position: 'relative',
      bgcolor: 'rgba(255, 255, 255, 0.05)',
      backdropFilter: 'blur(10px)',
      borderRadius: theme.borderRadius.large,
      overflow: 'hidden',
      cursor: 'pointer',
      boxShadow: theme.shadows.card,
      display: 'flex',
      flexDirection: 'column',
      minHeight: { xs: 320, md: 350 },
      maxHeight: { xs: 340, md: 360 },
    }}
  >
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <img
        src={image}
        alt={title}
        style={{ width: '100%', height: 180, objectFit: 'cover' }}
      />
      <Shine />
    </Box>
    <CardContent
      sx={{
        flexGrow: 1,
        px: 2, py: 2,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Typography
        variant="h6"
        sx={{
          color: theme.colors.text,
          fontWeight: 700,
          mb: 0.5,
          overflow: 'hidden',
          whiteSpace: 'nowrap',
          textOverflow: 'ellipsis'
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: theme.colors.textSecondary,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
          WebkitLineClamp: 2,  // max 2 lines
          WebkitBoxOrient: 'vertical',
        }}
      >
        {description}
      </Typography>
    </CardContent>
  </Card>
));

export default CourseCard;
