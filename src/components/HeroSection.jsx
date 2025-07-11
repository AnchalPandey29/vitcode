import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import theme from '../theme';

const FALLBACK_IMAGE = 'https://i.pinimg.com/736x/34/2d/cc/342dccd695b2aac2f527eb7e78531ac0.jpg';

const HeroSection = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [stats, setStats] = useState({ learners: 0, courses: 0, experts: 0 });

  useEffect(() => {
    const handleMove = (e) =>
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 10,
        y: (e.clientY / window.innerHeight - 0.5) * 10,
      });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStats((prev) => ({
        learners: prev.learners < 1000 ? prev.learners + 20 : 1000,
        courses: prev.courses < 50 ? prev.courses + 1 : 50,
        experts: prev.experts < 20 ? prev.experts + 1 : 20,
      }));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const waves = [
    { opacity: 0.2, duration: 5, offset: 0 },
    { opacity: 0.5, duration: 8, offset: -20 },
    { opacity: 0.3, duration: 6, offset: -40 },
    { opacity: 0.005, duration: 7, offset: 10 },

  ];

  return (
    <Box
      sx={{
        position: 'relative',
        bgcolor: theme.colors.primary,
        height: { xs: 'auto', md: '100vh' },
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        px: { xs: 2, sm: 4 },
        pt: { xs: '64px', sm: '70px', md:'30px' }, // space for navbar
        pb: { xs: 6, md: 0 },
        overflow: 'hidden',
        boxSizing: 'border-box',
      }}
    >
      {/* Background gradient animation */}
      <Box
        component={motion.div}
        sx={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          background: `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 50%, ${theme.colors.accent} 100%)`,
        }}
        animate={{
          background: [
            `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 50%, ${theme.colors.accent} 100%)`,
            `linear-gradient(135deg, ${theme.colors.secondary} 0%, ${theme.colors.accent} 50%, ${theme.colors.primary} 100%)`,
            `linear-gradient(135deg, ${theme.colors.primary} 0%, ${theme.colors.secondary} 50%, ${theme.colors.accent} 100%)`,
          ],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Blurred background parallax */}
      <Box
        component={motion.div}
        sx={{ position: 'absolute', inset: 0, zIndex: 2, opacity: 0.08 }}
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ type: 'spring', stiffness: 50 }}
      >
        <img
          src={FALLBACK_IMAGE}
          alt="Background pattern"
          style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'blur(4px)' }}
          onError={(e) => (e.target.src = FALLBACK_IMAGE)}
        />
      </Box>

      {/* Content */}
      <Grid
        container
        direction={{ xs: 'column', md: 'row' }}
        sx={{
          position: 'relative',
          zIndex: 3,
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          maxWidth: '1200px',
          margin: 0,
          boxSizing: 'border-box',
        }}
        spacing={{ xs: 4, md: 4 }}
      >
        {/* Text and stats */}
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography
              variant="h1"
              sx={{
                fontSize: { xs: '2.2rem', sm: 'clamp(2.8rem, 6vw, 4.2rem)' },
                fontWeight: 800,
                textAlign: 'center',
                color: '#fff',
                mb: 2,
                lineHeight: 1.2,
                letterSpacing: '-0.02em',
              }}
            >
              Learn. Grow. Succeed.
            </Typography>
            <Typography
              variant="body1"
              sx={{
                color: '#fff',
                fontSize: { xs: '1rem', sm: 'clamp(1.1rem, 2.5vw, 1.3rem)' },
                mb: 4,
                textAlign: 'center',
                lineHeight: 1.6,
                opacity: 0.9,
              }}
            >
              Join live expert-led workshops & hands-on sessions to master new skills.
            </Typography>

            {/* Stats */}
            <Box
              sx={{
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'center',
                alignItems: 'center',
                gap: theme.spacing.md,
                mb: 4,
                width: '100%',
                maxWidth: '100%',
              }}
            >
              {[
                { value: stats.learners, label: 'Learners' },
                { value: stats.courses, label: 'Courses' },
                { value: stats.experts, label: 'Experts' },
              ].map((stat, index) => (
                <Box
                  key={index}
                  component={motion.div}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 * (index + 1) }}
                  sx={{
                    bgcolor: theme.colors.background,
                    borderRadius: theme.borderRadius.medium,
                    p: theme.spacing.sm,
                    textAlign: 'center',
                    width: { xs: '100%', sm: '33%' },
                    maxWidth: { xs: '320px', sm: 'none' },
                    boxShadow: theme.shadows.card,
                  }}
                >
                  <Typography variant="h5" sx={{ fontWeight: 700, color: theme.colors.primary }}>
                    {stat.value}+
                  </Typography>
                  <Typography sx={{ color: theme.colors.text, fontSize: '0.9rem' }}>{stat.label}</Typography>
                </Box>
              ))}
            </Box>

            {/* Buttons */}
            <Box sx={{ display: 'flex', gap: theme.spacing.md, flexWrap: 'wrap', justifyContent: { xs: 'center', sm: 'flex-start' } }}>
              <Button
                component={Link}
                to="/programs"
                variant="contained"
                sx={{
                  bgcolor: theme.colors.secondary,
                  color: theme.colors.primary,
                  px: 4,
                  py: 1.2,
                  fontWeight: 600,
                  borderRadius: theme.borderRadius.medium,
                  boxShadow: theme.shadows.card,
                  '&:hover': { bgcolor: '#ffb300', boxShadow: theme.shadows.elevated, transform: 'translateY(-2px)' },
                  transition: 'all 0.3s ease',
                }}
              >
                Explore Courses
              </Button>
              <Button
                component={Link}
                to="/testimonials"
                variant="outlined"
                sx={{
                  borderColor: theme.colors.primary,
                  color: theme.colors.primary,
                  px: 4,
                  py: 1.2,
                  fontWeight: 600,
                  borderRadius: theme.borderRadius.medium,
                  '&:hover': { bgcolor: theme.colors.secondary, color: theme.colors.primary, boxShadow: theme.shadows.elevated },
                  transition: 'all 0.3s ease',
                }}
              >
                Learn More
              </Button>
            </Box>
          </Box>
        </Grid>

        {/* Vector image */}
        <Grid item xs={12} md={6}>
          <Box
            component={motion.div}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              rotateY: mousePos.x * 0.1,
              rotateX: -mousePos.y * 0.1,
            }}
            transition={{ duration: 0.8, delay: 0.4, type: 'spring', stiffness: 80, damping: 20 }}
            whileHover={{ scale: 1.03 }}
          >
            <img
              src="https://prod-web-assets-securly.s3.us-west-1.amazonaws.com/images/rhithm-support@2x.webp"
              alt="Learning illustration"
              style={{
                width: '100%',
                maxWidth: '400px',
                height: 'auto',
                objectFit: 'contain',
              }}
              onError={(e) => (e.target.src = FALLBACK_IMAGE)}
            />
          </Box>
        </Grid>
      </Grid>

      {/* Waves */}
      {waves.map((w, i) => (
        <motion.svg
          key={i}
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          style={{
            position: 'absolute',
            bottom: w.offset,
            width: '120%',
            minWidth: '1440px',
            height: '80px',
            zIndex: 2,
            fill: theme.colors.background,
          }}
          animate={{
            x: [0, (i + 1) * 20, -(i + 1) * 15, (i + 1) * 10, -(i + 1) * 20, 0],
            y: [0, (i + 1) * 10, -(i + 1) * 5, (i + 1) * 15, -(i + 1) * 10, 0],
            opacity: [w.opacity, w.opacity * 1.2, w.opacity * 0.8, w.opacity * 1.1, w.opacity],
          }}
          transition={{
            x: { repeat: Infinity, duration: w.duration, ease: 'easeInOut' },
            y: { repeat: Infinity, duration: w.duration * 1.5, ease: 'easeInOut' },
            opacity: { repeat: Infinity, duration: w.duration * 0.8, ease: 'easeInOut' },
          }}
        >
          <path
            d="M0,50L48,45C96,40,192,30,288,35C384,40,480,55,576,60C672,65,768,60,864,55C960,50,1056,45,1152,40C1248,35,1344,30,1392,25L1440,20L1440,80L0,80Z"
            fill={theme.colors.background}
          />
        </motion.svg>
      ))}
    </Box>
  );
};

export default HeroSection;