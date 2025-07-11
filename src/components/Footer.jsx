import React from 'react';
import { Container, Grid, Typography, Box, IconButton, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaLinkedin, FaTwitter, FaInstagram, FaArrowUp } from 'react-icons/fa';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import theme from '../theme';

const GlassFooter = styled(Box)`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(10px);
  border-radius: ${theme.borderRadius.large};
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.card};
`;

const SocialIcon = styled(IconButton)`
  color: ${theme.colors.background};
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(4px);
  border-radius: 50%;
  transition: all 0.3s ease;
  &:hover {
    color: ${theme.colors.secondary};
    transform: translateY(-2px);
    background: rgba(255, 255, 255, 0.12);
  }
`;

const Footer = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <Box sx={{ bgcolor: theme.colors.primary, color: theme.colors.background, mt: 'auto', pt: { xs: 4, md: 6 } }}>
      <Container>
        <GlassFooter>
          <Grid
            container
            spacing={{ xs: 4, md: 6 }}
            justifyContent={{ xs: 'center', md: 'space-around' }}
            alignItems="flex-start"
          >
            {/* Logo & tagline */}
            <Grid item xs={12} md={5} sx={{ textAlign: { xs: 'center', md: 'left' }, mx: { xs: 'auto', md: 0 } }}>
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <LazyLoadImage
                  src="https://cdn.prod.website-files.com/625817c1528a47fcf91345e8/6409a2dc85ef9f513485ae2d_34-code-outline.gif"
                  alt="VitCode Logo"
                  effect="blur"
                  style={{ marginBottom: theme.spacing.sm, width: '120px' }}
                />
                <Typography variant="body2" sx={{ opacity: 0.9 }}>
                  Skills for the Future<br />Learn. Grow. Succeed.
                </Typography>
              </motion.div>
            </Grid>

            {/* Quick Links */}
            <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h6" sx={{ mb: theme.spacing.sm, fontWeight: 600 }}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.8 }}>
                {['Home', 'Programs', 'Partners', 'Testimonials', 'Certificates'].map((item) => (
                  <motion.div key={item} whileHover={{ x: 5 }} transition={{ type: 'spring', stiffness: 200 }}>
                    <NavLink to={`/${item.toLowerCase()}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                      <Typography variant="body2">{item}</Typography>
                    </NavLink>
                  </motion.div>
                ))}
              </Box>
            </Grid>

            {/* Contact & social */}
            <Grid item xs={12} md={3} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Typography variant="h6" sx={{ mb: theme.spacing.sm, fontWeight: 600 }}>
                Contact Us
              </Typography>
              <Typography variant="body2" sx={{ mb: 0.5, opacity: 0.9 }}>
                Email: info@vitcode.com
              </Typography>
              <Typography variant="body2" sx={{ mb: 1, opacity: 0.9 }}>
                Phone: +91 123-456-7890
              </Typography>
              <Box sx={{ display: 'flex', gap: theme.spacing.sm, justifyContent: { xs: 'center', md: 'flex-start' }, mt: theme.spacing.sm }}>
                {[{ icon: <FaLinkedin />, label: 'LinkedIn' }, { icon: <FaTwitter />, label: 'Twitter' }, { icon: <FaInstagram />, label: 'Instagram' }].map(({ icon, label }, i) => (
                  <motion.div key={i} whileHover={{ scale: 1.2 }}>
                    <SocialIcon aria-label={label}>{icon}</SocialIcon>
                  </motion.div>
                ))}
              </Box>
            </Grid>
          </Grid>

          {/* Bottom links */}
          <Box sx={{ textAlign: 'center', mt: theme.spacing.lg }}>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <Box sx={{ mb: 1 }}>
                {['Privacy Policy', 'Terms of Service'].map((item) => (
                  <NavLink
                    key={item}
                    to={`/${item.toLowerCase().replace(' ', '-')}`}
                    style={{ textDecoration: 'none', color: 'inherit', margin: '0 8px', fontSize: '0.85rem' }}
                  >
                    {item}
                  </NavLink>
                ))}
              </Box>
              <Typography variant="caption" sx={{ opacity: 0.8 }}>
                © 2025 VitCode. All rights reserved.
              </Typography>
            </motion.div>
          </Box>
        </GlassFooter>

        {/* Scroll to top */}
        <Box sx={{ textAlign: 'center', mt: theme.spacing.md }}>
          <motion.div whileHover={{ scale: 1.2 }} transition={{ type: 'spring', stiffness: 200 }}>
            <IconButton
              onClick={scrollToTop}
              sx={{
                bgcolor: theme.colors.secondary,
                color: theme.colors.primary,
                '&:hover': { bgcolor: '#ffb300' },
                transition: 'all 0.3s ease',
              }}
            >
              <FaArrowUp />
            </IconButton>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
