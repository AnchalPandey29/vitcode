import React, { Suspense, useState } from 'react';
import { Container, Grid, Typography, Tabs, Tab, Box, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import styled from 'styled-components';
import theme from '../theme';
import TestimonialCard from './TestimonialCard';

// Dummy data
const learnerTestimonials = [
  {
    name: "Ananya Sharma",
    quote: "VitCode helped me land my first tech internship!",
    image: "https://randomuser.me/api/portraits/women/41.jpg"
  },
  {
    name: "Ravi Kumar",
    quote: "The workshops made learning so engaging and hands-on.",
    image: "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    name: "Pooja Mehta",
    quote: "Loved the mentorship and structured programs at VitCode.",
    image: "https://randomuser.me/api/portraits/women/43.jpg"
  },
  {
    name: "Arjun Singh",
    quote: "Boosted my confidence to build real-world projects.",
    image: "https://randomuser.me/api/portraits/men/44.jpg"
  }
];

const partnerTestimonials = [
  {
    name: "TechSpark",
    quote: "An exceptional collaboration bringing industry and learners closer.",
    image: "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    name: "InnovateHub",
    quote: "Together with VitCode, we delivered impactful training programs.",
    image: "https://randomuser.me/api/portraits/men/52.jpg"
  }
];

// Styled card
const GlassCard = styled(Box)`
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: ${theme.borderRadius.large};
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.25);
  padding: ${theme.spacing.md};
  width: 100%;
  max-width: 280px;
  min-height: 240px;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: transform 0.3s ${theme.animations.easeInOut};
  &:hover {
    transform: translateY(-6px) scale(1.03);
  }
`;

const TestimonialsPage = () => {
  const [tab, setTab] = useState(0); // 0 = Learners, 1 = Partners

  const testimonials = tab === 0 ? learnerTestimonials : partnerTestimonials;

  return (
    <Box sx={{ bgcolor: theme.colors.background, py: { xs: 6, md: 10 } }}>
      <Helmet>
        <title>VitCode - Testimonials</title>
      </Helmet>
      <Container>
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography
            variant="h2"
            sx={{
              textAlign: 'center',
                            color: theme.colors.primary,
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: '2rem', md: '2.6rem' }
            }}
          >
            What Our Community Says
          </Typography>
          <Typography
            sx={{
              textAlign: 'center',
              color: theme.colors.primary,
              mb: 4,
              maxWidth: '650px',
              mx: 'auto'
            }}
          >
            Stories & feedback from learners and partners who grew with VitCode.
          </Typography>
        </motion.div>

        {/* Tabs */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: theme.spacing.lg }}>
          <Tabs
            value={tab}
            onChange={(_, newValue) => setTab(newValue)}
            centered
            sx={{
              bgcolor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(6px)',
              borderRadius: '50px',
              px: 1,
              '& .MuiTab-root': {
                color: theme.colors.textSecondary,
                textTransform: 'none',
                fontWeight: 500,
                borderRadius: '50px',
                px: 3,
              },
              '& .Mui-selected': {
                bgcolor: theme.colors.secondary,
                color: theme.colors.primary,
              },
              '& .MuiTabs-indicator': { display: 'none' },
            }}
          >
            <Tab label="Learners" />
            <Tab label="Partners" />
          </Tabs>
        </Box>

        {/* Cards */}
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {testimonials.map((t, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={t.name}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Suspense fallback={<Box>Loading...</Box>}>
                  <GlassCard>
                    <TestimonialCard
                      name={t.name}
                      quote={t.quote}
                      image={t.image}
                    />
                  </GlassCard>
                </Suspense>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* CTA */}
        <Box sx={{ textAlign: 'center', mt: theme.spacing.xl }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: theme.colors.secondary,
                color: theme.colors.primary,
                fontWeight: 600,
                px: 4, py: 1.2,
                borderRadius: theme.borderRadius.medium,
                boxShadow: theme.shadows.card,
                '&:hover': { bgcolor: '#ffb300', transform: 'translateY(-2px)' },
                transition: 'all 0.3s ease',
              }}
              href="/programs"
            >
              Join Our Community
            </Button>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default TestimonialsPage;
