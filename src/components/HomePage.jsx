import React from 'react';
import { Container, Grid, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import theme from '../theme';
import TestimonialsCarousel from './TestimonialsCarousel';
import FeaturedProgramsSection from './FeaturedProgramsSection';

const HomePage = () => (
  <Box sx={{ bgcolor: theme.colors.background, overflowX: 'hidden' }}>
        
    {/* Hero Section */}
    <HeroSection />
    {/* Featured Programs Section */}
       <FeaturedProgramsSection />
    {/* Testimonials Section */}
    <TestimonialsCarousel />

  </Box>
);

export default HomePage;
