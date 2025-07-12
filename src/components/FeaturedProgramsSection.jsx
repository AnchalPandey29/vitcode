import React from 'react';
import { Container, Typography, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import theme from '../theme';
import CourseCard from './CourseCard';

const featuredCourses = [
  {
    title: 'Web Development',
    description: 'Build full-stack applications from scratch.',
    image: 'https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg'
  },
  {
    title: 'UI/UX Design',
    description: 'Design user-centric digital products.',
    image: 'https://www.ogmaconceptions.com/uploads/e2482d2aa595742e9b718d99f7ffa53d2f4e.jpg'
  },
  {
    title: 'Data Science',
    description: 'Master data analysis, ML & AI.',
    image: 'https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg'
  },
];

const FeaturedProgramsSection = () => (
  <Box sx={{ py: { xs: 6, md: 10 }, position: 'relative', overflow: 'hidden', bgcolor: theme.colors.background }}>
    {/* Decorative animated gradient blob */}
    <Box
      component={motion.div}
      sx={{
        position: 'absolute',
        top: { xs: '-20px', md: '-50px' },
        right: { xs: '-40px', md: '-80px' },
        width: { xs: '120px', md: '200px' },
        height: { xs: '120px', md: '200px' },
        bgcolor: theme.colors.accent,
        borderRadius: '50%',
        opacity: 0.08,
        zIndex: 0,
      }}
      animate={{ scale: [1, 1.15, 1], rotate: [0, 20, 0] }}
      transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
    />

    <Container sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
      <Typography
      color={theme.colors.primary}
        component={motion.h2}
        variant="h2"
        sx={{ mb: 2, fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' } }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Featured Programs
      </Typography>
      <Typography
        color={theme.colors.primary}
        sx={{
          maxWidth: '620px',
          mx: 'auto',
          mb: 5,
          fontSize: { xs: '1rem', md: '1.1rem' },
        }}
      >
        Industry-focused courses to help you become job-ready with real projects & expert mentorship.
      </Typography>

      {/* Horizontal scroll on mobile, grid on larger */}
   <Box
  sx={{
    display: { xs: 'flex', md: 'grid' },
    justifyContent: { md: 'center' },
    gridTemplateColumns: { md: 'repeat(auto-fit, minmax(280px, 1fr))' },
    gap: { xs: 2, md: 0 },
    overflowX: { xs: 'auto', md: 'unset' },
    px: { xs: 2, md: 0 },
    scrollSnapType: { xs: 'x mandatory', md: 'none' },
    WebkitOverflowScrolling: 'touch',
  }}
>

        {featuredCourses.map((course, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05, rotateZ: 0.3 }}
            transition={{ type: 'spring', stiffness: 200 }}
            style={{
              flex: '0 0 auto',
              scrollSnapAlign: 'center',
            }}
          >
            <Box
              sx={{
                minWidth: { xs: '260px', sm: '280px', md: '280px' },
                maxWidth: { xs: '280px', sm: '300px', md: '300px' },
                minHeight: { xs: '320px', md: '350px' },
                maxHeight: { xs: '350px', md: '380px' },
                mx: 'auto',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                backdropFilter: 'blur(8px)',
                borderRadius: theme.borderRadius.medium,
                boxShadow: theme.shadows.card,
                transition: 'transform 0.3s ease',
                '&:hover': { transform: 'translateY(-4px)' },
              }}
            >
              <CourseCard {...course} />
            </Box>
          </motion.div>
        ))}
      </Box>

      <Button
        variant="contained"
        component={Link}
                to="/programs"
                
        sx={{
          mt: 5,
          bgcolor: theme.colors.secondary,
          color: theme.colors.primary,
          px: 4,
          py: 1.2,
          fontWeight: 600,
          borderRadius: theme.borderRadius.medium,
          boxShadow: theme.shadows.card,
          '&:hover': { bgcolor: '#ffb300', transform: 'translateY(-2px)' },
          transition: 'all 0.3s ease',
        }}
      >
        Explore All Programs
      </Button>
    </Container>
  </Box>
);

export default FeaturedProgramsSection;
