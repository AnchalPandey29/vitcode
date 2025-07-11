import React, { useState, memo } from 'react';
import {
  AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemText, Box,
  useMediaQuery, useScrollTrigger, Slide
} from '@mui/material';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import theme from '../theme';

// Styled Components
const StyledAppBar = styled(AppBar)`
  background: rgba(26, 35, 126, 0.85); /* theme.colors.primary with opacity */
  backdrop-filter: blur(8px);
  box-shadow: ${theme.shadows.card};
  transition: background 0.3s ease, opacity 0.3s ease;
`;

const LogoContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const NavLinks = styled(Box)`
  display: flex;
  gap: ${theme.spacing.md};
  align-items: center;
`;

const MobileMenuIcon = styled(IconButton)`
  color: ${theme.colors.background};
`;

const DrawerList = styled(List)`
  background: ${theme.colors.primary}; /* Solid primary color for full height */
  height: 100%;
  width: 280px;
  padding: ${theme.spacing.lg};
  backdrop-filter: blur(12px);
`;

const NavButton = styled(NavLink)`
  position: relative;
  color: ${theme.colors.background};
  font-family: ${theme.typography.fontFamily.body};
  text-decoration: none;
  font-weight: 500;
  padding: 6px 0;
  &.active {
    color: ${theme.colors.secondary};
  }
  &:hover {
    color: ${theme.colors.secondary};
  }
`;

const DrawerNavButton = styled(NavLink)`
  display: block;
  color: ${theme.colors.background};
  font-family: ${theme.typography.fontFamily.body};
  font-weight: 500;
  font-size: clamp(1.1rem, 2.5vw, 1.2rem);
  padding: ${theme.spacing.md};
  text-decoration: none;
  border-radius: ${theme.borderRadius.medium};
  transition: all 0.3s ${theme.animations.easeInOut};
  &.active {
    color: ${theme.colors.secondary};
    background: rgba(255, 255, 255, 0.1);
  }
  &:hover {
    color: ${theme.colors.secondary};
    background: rgba(255, 255, 255, 0.15);
  }
`;

const ActiveIndicator = styled(motion.div)`
  position: absolute;
  bottom: -2px;
  left: 0;
  height: 3px;
  width: 100%;
  background: ${theme.colors.secondary};
`;

const Navbar = memo(() => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:900px)'); // tablet & below
  const trigger = useScrollTrigger({ disableHysteresis: true, threshold: 50 });

  const toggleDrawer = (open) => (e) => {
    if (e.type === 'keydown' && (e.key === 'Tab' || e.key === 'Shift')) return;
    setDrawerOpen(open);
  };

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Testimonials', path: '/testimonials' },
    { label: 'Programs', path: '/programs' },
    { label: 'Partners', path: '/partners' },
    { label: 'Certificates', path: '/certificates' },
  ];

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      <StyledAppBar
        position="fixed"
        sx={{
          opacity: trigger && isMobile ? 0.7 : 1,
          transition: 'opacity 0.3s ease',
        }}
      >
        <Toolbar sx={{ justifyContent: 'space-between', px: { xs: 2, sm: 3, md: 5 } }}>
          <NavLink to="/" style={{ textDecoration: 'none' }} aria-label="VitCode Home">
            <LogoContainer
              as={motion.div}
              initial={{ opacity: 0, y: -10 }}
              animate={
                isMobile && !trigger
                  ? {
                      opacity: 1,
                      y: 0,
                      scale: [1, 1.05, 1],
                      transition: {
                        duration: 1.5,
                        repeat: Infinity,
                        ease: theme.animations.easeInOut,
                      },
                    }
                  : { opacity: 1, y: 0 }
              }
              whileHover={{ scale: isMobile ? 1.1 : 1.05 }}
              whileTap={isMobile ? { scale: 0.95 } : {}}
              transition={{ duration: 0.4, ease: theme.animations.easeInOut }}
            >
              <img
                src="https://cdn.prod.website-files.com/625817c1528a47fcf91345e8/6409a2dc85ef9f513485ae2d_34-code-outline.gif"
                alt="VitCode Logo"
                style={{ width: '40px', height: '40px', objectFit: 'contain' }}
              />
              <Box
                component="span"
                sx={{
                  color: theme.colors.background,
                  fontFamily: theme.typography.fontFamily.heading,
                  fontSize: { xs: '1rem', sm: '1.2rem', md: '1.2rem' },
                  fontWeight: 600,
                }}
              >
                VitCode
              </Box>
            </LogoContainer>
          </NavLink>

          {!isMobile && (
            <AnimatePresence>
              <NavLinks
                as={motion.div}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4 }}
              >
                {navItems.map((item) => (
                  <NavButton
                    key={item.label}
                    to={item.path}
                    className={({ isActive }) => (isActive ? 'active' : '')}
                    aria-label={`Navigate to ${item.label}`}
                  >
                    {({ isActive }) => (
                      <>
                        {item.label}
                        {isActive && (
                          <ActiveIndicator
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            transition={{ duration: 0.3, ease: theme.animations.easeInOut }}
                          />
                        )}
                      </>
                    )}
                  </NavButton>
                ))}
              </NavLinks>
            </AnimatePresence>
          )}

          {isMobile && (
            <MobileMenuIcon
              edge="end"
              onClick={toggleDrawer(true)}
              aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
              as={motion.div}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              animate={trigger ? { rotate: [0, 10, -10, 0] } : { rotate: 0 }}
              transition={{ duration: 0.3, ease: theme.animations.easeInOut }}
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: drawerOpen ? 180 : 0 }}
                transition={{ duration: 0.4 }}
              >
                {drawerOpen ? (
                  <FaTimes color={theme.colors.background} size={24} />
                ) : (
                  <FaBars color={theme.colors.background} size={24} />
                )}
              </motion.div>
            </MobileMenuIcon>
          )}

          <Drawer
            anchor="right"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            PaperProps={{
              sx: {
                width: { xs: '80vw', sm: '280px' },
                height:'100vh',
                maxWidth: '280px',
                  background: 'rgba(0, 0, 0, 0.5)',
              },
            }}
            ModalProps={{
              BackdropProps: {
                sx: {
                  background: 'rgba(0, 0, 0, 0.5)',
                  backdropFilter: 'blur(4px)',
                },
              },
            }}
          >
            <motion.div
              initial={{ x: 300 }}
              animate={{ x: 0 }}
              exit={{ x: 300 }}
              transition={{ duration: 0.4, ease: theme.animations.easeInOut }}
            >
              <DrawerList>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1, ease: theme.animations.easeInOut }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ListItem
                      button
                      component={DrawerNavButton}
                      to={item.path}
                      onClick={toggleDrawer(false)}
                      className={({ isActive }) => (isActive ? 'active' : '')}
                      aria-label={`Navigate to ${item.label}`}
                    >
                      <ListItemText primary={item.label} />
                    </ListItem>
                  </motion.div>
                ))}
              </DrawerList>
            </motion.div>
          </Drawer>
        </Toolbar>
      </StyledAppBar>
    </Slide>
  );
});

export default Navbar;