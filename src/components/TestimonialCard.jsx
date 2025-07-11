import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import theme from '../theme';

// Styled Card
const Card = styled(motion.div)`
  background: linear-gradient(135deg, rgba(255,255,255,0.05), rgba(255,255,255,0.08));
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(8px);
  min-height: 160px;
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.card};
  padding: ${theme.spacing.lg};
  text-align: center;
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-8px) rotateX(2deg) rotateY(-2deg);
    box-shadow: ${theme.shadows.elevated};
  }
`;

// Avatar with glow ring
const StyledAvatar = styled(Avatar)`
  width: 80px;
  height: 80px;
  margin: 0 auto ${theme.spacing.md};
  border: 3px solid ${theme.colors.secondary};
  box-shadow: 0 0 12px rgba(255, 193, 7, 0.4);
`;

// Text
const Quote = styled(Typography)`
  font-style: italic;
  color: ${theme.colors.text};
  font-size: 1rem;
  margin-bottom: ${theme.spacing.md};
  line-height: 1.6;
`;

const Name = styled(Typography)`
  font-weight: 600;
  color: ${theme.colors.secondary};
  font-size: 1.1rem;
`;

const TestimonialCard = ({ name, quote, image }) => (
  <Card
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: 'spring', stiffness: 200, damping: 15 }}
  >
    <StyledAvatar src={image} alt={name} />
    <Quote>“{quote}”</Quote>
    <Name>{name}</Name>
  </Card>
);

export default TestimonialCard;
