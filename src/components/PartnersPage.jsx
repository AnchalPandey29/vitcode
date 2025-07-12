import React, { useState, Suspense } from "react";
import { Container, Grid, Typography, Button, Box } from "@mui/material";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import theme from "../theme";
import CollaborateModal from "./CollaborateModal";
const GlassCard = styled(Box)`
  position: relative;
  background: rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(14px);
  border-radius: ${theme.borderRadius.large};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${theme.spacing.md};
  max-height: 180px;
  min-width: 200px;
  max-width: 220px;
  transition: transform 0.4s ${theme.animations.easeInOut};

  &:hover {
    transform: translateY(-6px) scale(1.03);
  }

  /* subtle, thin animated glow */
  animation: subtleGlow 3s ease-in-out infinite;

  @keyframes subtleGlow {
    0% {
      box-shadow: 0 0 2px ${theme.colors.secondary};
    }
    50% {
      box-shadow: 0 0 6px ${theme.colors.secondary};
    }
    100% {
      box-shadow: 0 0 2px ${theme.colors.secondary};
    }
  }
`;

const PartnerLogo = styled(LazyLoadImage)`
  filter: grayscale(100%);
  transition: filter 0.4s ${theme.animations.easeInOut};
  width: 100%;
  max-height: 80px;
  object-fit: contain;

  &:hover {
    filter: grayscale(0%);
  }
`;

const PartnersPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const partners = [
    {
      name: "IIT Hyderabad",
      desc: "AI & ML training experts.",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/IIT_Hyderabad_Insignia.svg/640px-IIT_Hyderabad_Insignia.svg.png",
    },
    {
      name: "NIT Nagpur",
      desc: "Advanced software training.",
      img: "https://vnit.ac.in/pcems2024/assets/img/VNIT_LOGO.png",
    },
    {
      name: "NIT Trichy",
      desc: "Industry innovation network.",
      img: "https://upload.wikimedia.org/wikipedia/en/thumb/4/4f/National_Institute_of_Technology%2C_Tiruchirappalli.svg/800px-National_Institute_of_Technology%2C_Tiruchirappalli.svg.png",
    },
    {
      name: "BIT Mesra",
      desc: "Renowned design academy.",
      img: "https://upload.wikimedia.org/wikipedia/en/d/d2/Birla_Institute_of_Technology_Mesra.png",
    },
  ];

  return (
    <Box
      sx={{
        position: "relative",
        bgcolor: theme.colors.background,
        py: { xs: theme.spacing.lg, sm: theme.spacing.xl, md: "48px" },
        px: { xs: theme.spacing.sm, sm: theme.spacing.md, md: theme.spacing.lg },
      }}
    >
      <Helmet>
        <title>VitCode - Our Partners</title>
      </Helmet>
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>

        {/* Header animation: top to down */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: theme.animations.easeInOut }}
        >
          <Typography
            variant="h1"
            color={theme.colors.primary}
            mt={theme.spacing.lg}
            sx={{
              textAlign: "center",
              mb: 2,
              fontSize: { xs: "2rem", md: "2.8rem" },
              fontWeight: 700,
            }}
          >
            Our Trusted Partners
          </Typography>
          <Typography
          color={theme.colors.primary}
            variant="body1"
            sx={{
              
              textAlign: "center",
              mb: 5,
              maxWidth: "700px",
              mx: "auto",
              color: theme.colors.textSecondary,
            }}
          >
            We proudly collaborate with industry-leading institutions and
            organizations to empower learners worldwide.
          </Typography>
        </motion.div>

        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {partners.map((partner, index) => (
            <Grid item key={partner.name}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <GlassCard>
                  <Suspense fallback={<Box>Loading...</Box>}>
                    <PartnerLogo src={partner.img} alt={partner.name} effect="blur" />
                  </Suspense>
                  <Typography
                    variant="h3"
                    color={theme.colors.primary}
                    sx={{
                      mt: theme.spacing.sm,
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      textAlign: "center",
                    }}
                  >
                    {partner.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      textAlign: "center",
                      color: theme.colors.textSecondary,
                      mt: 0.5,
                    }}
                  >
                    {partner.desc}
                  </Typography>
                </GlassCard>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ textAlign: "center", mt: theme.spacing.xl }}>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: theme.colors.secondary,
                color: theme.colors.primary,
                px: 4, py: 1.2,
                fontWeight: 600,
                borderRadius: theme.borderRadius.medium,
                boxShadow: theme.shadows.card,
                "&:hover": { bgcolor: "#ffb300", transform: "translateY(-2px)" },
                transition: "all 0.3s ease",
              }}
              onClick={() => setModalOpen(true)}
            >
              Collaborate with Us
            </Button>
          </motion.div>
        </Box>

        {/* Modal */}
        <CollaborateModal open={modalOpen} handleClose={() => setModalOpen(false)} />
      </Container>
    </Box>
  );
};

export default PartnersPage;
