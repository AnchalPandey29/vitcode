import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import HeroSection from '../components/HeroSection';
import CourseCard from '../components/CourseCard';
import TestimonialCard from '../components/TestimonialCard';
import theme from '../theme';

const HomePage = () => (
  <Box sx={{ bgcolor: theme.colors.background }}>
    <HeroSection />

    {/* Courses */}
    <Container sx={{ py: 8, textAlign: 'center' }}>
      <Typography variant="h2" sx={{ mb: 4, fontWeight: 700 }}>Featured Programs</Typography>
      <Grid container spacing={4} justifyContent="center">
        {[
          { title: 'Web Dev', description: 'Build full-stack apps.', image: '...' },
          { title: 'Data Science', description: 'Analyze and predict.', image: '...' },
        ].map((c, i) => (
          <Grid item xs={12} sm={6} md={4} key={i}>
            <CourseCard {...c} />
          </Grid>
        ))}
      </Grid>
    </Container>

    {/* Testimonials */}
    <Box sx={{ bgcolor: theme.colors.accent, py: 8 }}>
      <Container sx={{ textAlign: 'center' }}>
        <Typography variant="h2" sx={{ mb: 4, fontWeight: 700 }}>What Learners Say</Typography>
        <Grid container spacing={4} justifyContent="center">
          {[
            { name: 'Jane Doe', quote: 'Loved it!', image: '...' },
            { name: 'John Smith', quote: 'Amazing!', image: '...' },
          ].map((t, i) => (
            <Grid item xs={12} sm={6} md={4} key={i}>
              <TestimonialCard {...t} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  </Box>
);

export default HomePage;
