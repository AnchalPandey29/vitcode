// src/components/CollaborateModal.jsx
import React from 'react';
import { Box, Typography, Modal, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import theme from '../theme';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: theme.colors.background,
  borderRadius: theme.borderRadius.large,
  boxShadow: 24,
  p: theme.spacing.lg,
  maxWidth: 400,
  width: '90%',
  textAlign: 'center'
};

const CollaborateModal = ({ open, handleClose }) => (
  <Modal open={open} onClose={handleClose}>
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Box sx={style}>
        <Typography
          variant="h4"
          sx={{
            fontWeight: 600,
            mb: theme.spacing.sm,
            color: theme.colors.text
          }}
        >
          Collaborate with Us
        </Typography>
        <Typography sx={{ color: theme.colors.textSecondary, mb: theme.spacing.md }}>
          Email us or call to discuss partnership opportunities.
        </Typography>
        <Stack spacing={2}>
          <Button
            variant="contained"
            sx={{
              bgcolor: theme.colors.secondary,
              color: theme.colors.primary,
              fontWeight: 600,
              '&:hover': { bgcolor: '#ffb300' }
            }}
            href="mailto:contact@vitcode.com?subject=Collaboration Inquiry"
          >
            Email Us
          </Button>
          <Typography sx={{ color: theme.colors.textSecondary }}>
            Or call: +91-9876543210
          </Typography>
        </Stack>
      </Box>
    </motion.div>
  </Modal>
);

export default CollaborateModal;
