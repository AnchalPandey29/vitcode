import React from 'react';
import Slider from 'react-slick';
import { Box, Typography, Container } from '@mui/material';
import { motion } from 'framer-motion';
import TestimonialCard from '../components/TestimonialCard';
import theme from '../theme';

const testimonials = [
  { name: 'Jane Doe', quote: 'VitCode transformed my career with hands-on learning & mentorship.', image: 'https://randomuser.me/api/portraits/women/44.jpg' },
  { name: 'John Smith', quote: 'The live sessions and real projects helped me build confidence.', image: 'https://randomuser.me/api/portraits/men/32.jpg' },
  { name: 'Sara Lee', quote: 'A life-changing experience that led me to my dream job.', image: 'https://randomuser.me/api/portraits/women/65.jpg' },
  { name: 'Alex Brown', quote: 'Loved the community and guidance!', image: 'https://randomuser.me/api/portraits/men/45.jpg' },
];

const carouselSettings = {
  infinite: true,
  centerMode: true,
  centerPadding: '0px', // we'll handle spacing with CSS
  slidesToShow: 3,
  speed: 600,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200, // tablets
      settings: { slidesToShow: 2 }
    },
    {
      breakpoint: 768, // mobile
      settings: { slidesToShow: 1 }
    }
  ]
};

const TestimonialsCarousel = () => (
  <Box sx={{ bgcolor: theme.colors.accent, py: { xs: 6, md: 10 } }}>
    <Container sx={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
      <Typography
        component={motion.h2}
        variant="h2"
        sx={{ mb: 2, fontWeight: 700, fontSize: { xs: '2rem', md: '2.8rem' }, color: theme.colors.primary }}
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What Learners Say
      </Typography>
      <Typography
        sx={{
          maxWidth: '600px',
          mx: 'auto',
          mb: 5,
          color: theme.colors.primary,
          fontSize: { xs: '1rem', md: '1.1rem' },
          opacity: 0.9,
        }}
      >
        Hear directly from our students about their journey & success stories.
      </Typography>

      <Box
        sx={{
          px: { xs: 1, md: 2 },
          '.slick-list': {
            overflow: 'visible',
          },
          '.slick-slide > div': {
            px: { xs: 1, md: 2 }, // gap between cards
          },
          '.slick-center > div': {
            transform: 'scale(1.05)',
            transition: 'transform 0.3s ease',
          }
        }}
      >
        <Slider {...carouselSettings}>
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.07 }}
              transition={{ type: 'spring', stiffness: 200 }}
              style={{ perspective: '1000px' }}
            >
              <Box
                sx={{
                  transform: 'rotateY(0deg)',
                  transition: 'transform 0.6s ease',
                  '&:hover': { transform: 'rotateY(2deg)' },
                }}
              >
                <TestimonialCard {...testimonial} />
              </Box>
            </motion.div>
          ))}
        </Slider>
      </Box>
    </Container>
  </Box>
);

export default TestimonialsCarousel;
