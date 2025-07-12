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
        <Typography sx={{ mb: theme.spacing.md }} color={theme.colors.primary}>
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
href="mailto:contact@vitcode.com?subject=Collaboration%20Inquiry&body=I%20hope%20this%20message%20finds%20you%20well.%0A%0AI%20am%20reaching%20out%20to%20explore%20the%20possibility%20of%20collaborating%20with%20VitCode.%20We%20are%20eager%20to%20empower%20and%20educate%20our%20students%20through%20engaging%20workshops%20conducted%20by%20your%20team.%0A%0APlease%20find%20my%20contact%20details%20below%20for%20your%20reference:%0A%5BYour%20Contact%20Details%5D%0A%0AI%20look%20forward%20to%20your%20response%20and%20the%20opportunity%20to%20discuss%20this%20collaboration%20further.%0A%0AThank%20you%20and%20best%20regards."
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
