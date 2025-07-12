import React, { useState } from 'react';
import {
  Container, Grid, Typography, TextField, Box, Button, Tabs, Tab, IconButton, Tooltip, CircularProgress
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { FaDownload, FaLink, FaCheckCircle, FaTimes } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import theme from '../theme';

// Styled Components
const GlassCard = styled(Box)`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${theme.borderRadius.large};
  backdrop-filter: blur(16px);
  padding: ${theme.spacing.lg};
  box-shadow: ${theme.shadows.card};
  transition: all 0.4s ${theme.animations.easeInOut};
  &:hover {
    transform: translateY(-6px);
    box-shadow: ${theme.shadows.elevated};
    border-color: ${theme.colors.secondary};
  }
`;

const PreviewCard = styled(Box)`
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: ${theme.borderRadius.large};
  backdrop-filter: blur(16px);
  padding: ${theme.spacing.lg};
  text-align: center;
  box-shadow: ${theme.shadows.elevated};
  transition: all 0.4s ${theme.animations.easeInOut};
  position: relative;
  overflow: hidden;
  &:hover {
    transform: translateY(-8px) scale(1.03) rotateY(2deg);
    box-shadow: ${theme.shadows.elevated};
    border-color: ${theme.colors.secondary};
  }
`;

const ActionButton = styled(Button)`
  background: #D4A017;
  color: ${theme.colors.primary};
  font-family: ${theme.typography.fontFamily.body};
  font-weight: 600;
  text-transform: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  border-radius: ${theme.borderRadius.medium};
  &:hover {
    background: #cf9306ff;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  }
`;

const TabStyled = styled(Tab)`
  font-family: ${theme.typography.fontFamily.body};
  font-weight: 600;
  font-size: clamp(1rem, 2vw, 1.1rem);
  color: ${theme.colors.text};
  text-transform: none;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  &.Mui-selected {
    color: ${theme.colors.secondary};
  }
`;

const FormField = styled(TextField)`
  & .MuiInputBase-root {
    background: rgba(255, 255, 255, 0.08);
    border-radius: ${theme.borderRadius.medium};
    transition: all 0.3s ${theme.animations.easeInOut};
  }
  & .MuiInputBase-input {
    font-family: ${theme.typography.fontFamily.body};
    color: ${theme.colors.background};
    padding: ${theme.spacing.sm};
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: rgba(255, 255, 255, 0.2);
  }
  &:hover .MuiOutlinedInput-notchedOutline,
  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${theme.colors.secondary};
  }
`;

const StatusBadge = styled(Box)`
  position: absolute;
  top: ${theme.spacing.sm};
  right: ${theme.spacing.sm};
  background: ${({ status }) => (status === 'Verified' ? 'rgba(0, 255, 0, 0.2)' : 'rgba(255, 165, 0, 0.2)')};
  color: ${({ status }) => (status === 'Verified' ? '#00cc00' : '#ffa500')};
  font-family: ${theme.typography.fontFamily.body};
  font-weight: 500;
  font-size: 0.85rem;
  padding: 4px 12px;
  border-radius: ${theme.borderRadius.full};
  backdrop-filter: blur(4px);
`;

const CertificateImage = styled(LazyLoadImage)`
  border-radius: ${theme.borderRadius.medium};
  box-shadow: ${theme.shadows.card};
  transition: transform 0.3s ${theme.animations.easeInOut};
  &:hover {
    transform: scale(1.05);
  }
`;

const CertificatePage = () => {
  const [mode, setMode] = useState('verify'); // 'verify' or 'generate'
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });
  const [verified, setVerified] = useState(null); // null, 'Verified', or 'Generated'
  const [errors, setErrors] = useState({});
  const [isVerifying, setIsVerifying] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.id.trim()) newErrors.id = 'Certificate ID is required';
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (mode === 'generate' && !formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (mode === 'generate' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleVerify = () => {
    if (!validateForm()) return;
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      setVerified(mode === 'verify' ? 'Verified' : 'Generated');
      // Placeholder for real API
      alert(`Certificate ${mode === 'verify' ? 'verified' : 'generated'} for ${formData.name}`);
    }, 1500);
  };

  const handleClear = (field) => {
    setFormData({ ...formData, [field]: '' });
    setErrors({ ...errors, [field]: '' });
    setVerified(null);
  };

  return (
    <Box sx={{ bgcolor: theme.colors.background, minHeight: '100vh', py: { xs: theme.spacing.lg, sm: theme.spacing.xl, md: "48px" },
        px: { xs: theme.spacing.sm, sm: theme.spacing.md, md: theme.spacing.lg },
      }}>
      <Helmet>
        <title>VitCode - Certificate Verification</title>
      </Helmet>

      <Container sx={{ maxWidth: '960px' }}>
        {/* Hero */}
        <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <Typography variant="h1" textAlign="center" fontWeight={700} fontSize={{ xs: '2rem', md: '2.8rem' }} mt={theme.spacing.lg} mb={1} color={theme.colors.primary}>
            Certificate Verification & Generation
          </Typography>
          <Typography textAlign="center" color={theme.colors.primary} opacity={0.8} mb={theme.spacing.lg}>
            Authenticate or create your official VitCode certificate with ease.
          </Typography>
        </motion.div>

        {/* Toggle */}
        <Box display="flex" justifyContent="center" mb={theme.spacing.lg}>
          <Tabs
            value={mode}
            onChange={(e, newVal) => { setMode(newVal); setVerified(null); setFormData({ id: '', name: '', email: '' }); setErrors({}); }}
            centered
            sx={{ '& .MuiTabs-indicator': { backgroundColor: theme.colors.secondary, height: '3px' } }}
          >
            <TabStyled value="verify" label="Verify Certificate" />
            <TabStyled value="generate" label="Generate Certificate" />
          </Tabs>
        </Box>

        {/* Form */}
        <GlassCard>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <FormField
                label="Certificate ID"
                value={formData.id}
                onChange={(e) => setFormData({ ...formData, id: e.target.value })}
                error={!!errors.id}
                helperText={errors.id}
                fullWidth
                InputProps={{
                  endAdornment: formData.id && (
                    <IconButton onClick={() => handleClear('id')}><FaTimes size={16} color={theme.colors.text} /></IconButton>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormField
                label="Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                error={!!errors.name}
                helperText={errors.name}
                fullWidth
                InputProps={{
                  endAdornment: formData.name && (
                    <IconButton onClick={() => handleClear('name')}><FaTimes size={16} color={theme.colors.text} /></IconButton>
                  )
                }}
              />
            </Grid>
            {mode === 'generate' && (
              <Grid item xs={12}>
                <FormField
                  label="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  error={!!errors.email}
                  helperText={errors.email}
                  fullWidth
                  InputProps={{
                    endAdornment: formData.email && (
                      <IconButton onClick={() => handleClear('email')}><FaTimes size={16} color={theme.colors.text} /></IconButton>
                    )
                  }}
                />
              </Grid>
            )}
            <Grid item xs={12} textAlign="center">
              <ActionButton onClick={handleVerify} disabled={isVerifying} component={motion.button} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {isVerifying ? <CircularProgress size={24} sx={{ color: theme.colors.primary }} /> : (mode === 'verify' ? 'Verify Certificate' : 'Generate Certificate')}
              </ActionButton>
            </Grid>
          </Grid>
        </GlassCard>

        {/* Result Preview */}
        <AnimatePresence>
          {verified && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.6, ease: theme.animations.easeInOut }}
              style={{ overflow: 'hidden' }}
            >
              <Box mt={theme.spacing.lg}>
                <PreviewCard>
                  <StatusBadge status={verified}>{verified}</StatusBadge>
                  <CertificateImage src="https://images.unsplash.com/photo-1584464491271-23f7f4c5a81d?auto=format&fit=crop&w=300&h=200" alt="Certificate" width="100%" height="200px" effect="blur" style={{ marginBottom: theme.spacing.md }} />
                  <Typography variant="h4" fontWeight={700} mb={1}>🎉 Certificate {verified} Successfully!</Typography>
                  <Typography color={theme.colors.text} opacity={0.8}>Name: {formData.name} | ID: {formData.id}</Typography>
                  <Box display="flex" justifyContent="center" gap={theme.spacing.sm} mt={theme.spacing.md}>
                    <Tooltip title="Download Certificate"><IconButton sx={{ color: '#00cc00' }}><FaDownload /></IconButton></Tooltip>
                    <Tooltip title="Share Link"><IconButton sx={{ color: '#00b7eb' }}><FaLink /></IconButton></Tooltip>
                    <Tooltip title="Verified"><IconButton sx={{ color: theme.colors.secondary }} disabled><FaCheckCircle /></IconButton></Tooltip>
                  </Box>
                </PreviewCard>
              </Box>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </Box>
  );
};

export default CertificatePage;
