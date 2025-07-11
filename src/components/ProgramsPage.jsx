import React, { useState, Suspense, memo } from "react";
import {
  Container,
  Grid,
  Typography,
  TextField,
  Tabs,
  Tab,
  Box,
  Button,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { motion } from "framer-motion";
import { FaTimes, FaSearch } from "react-icons/fa";
import styled from "styled-components";
import theme from "../theme";
import CourseCard from "./CourseCard";
import LoadingSpinner from "./LoadingSpinner";

// Styled Components

const GlassCard = styled(Box)`
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(8px);
  border-radius: ${theme.borderRadius.large};
  box-shadow: ${theme.shadows.card};
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  &:hover {
    transform: translateY(-5px) scale(1.03);
    box-shadow: ${theme.shadows.elevated};
  }
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 320px;
  max-height: 340px;
  min-width: 240px;
  max-width: 280px;
  margin: auto;
`;

const SearchField = styled(TextField)`
  & .MuiInputBase-root {
    background: rgba(255, 255, 255, 0.05);
    border-radius: ${theme.borderRadius.medium};
    color: ${theme.colors.text};
    transition: all 0.3s ease;
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: rgba(255, 215, 0, 0.4); /* soft golden */
  }
  &:hover .MuiOutlinedInput-notchedOutline,
  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${theme.colors.secondary};
    box-shadow: 0 0 4px rgba(255, 215, 0, 0.3);
  }
`;

const FilterChip = styled(Button)`
  flex: 0 0 auto;
  border-radius: ${theme.borderRadius.full};
  background: ${({ active }) =>
    active ? theme.colors.secondary : "rgba(255, 255, 255, 0.06)"};
  color: ${({ active }) => (active ? theme.colors.primary : theme.colors.text)};
  font-weight: 500;
  text-transform: none;
  padding: ${theme.spacing.xs} ${theme.spacing.md};
  font-size: 0.9rem;
  &:hover {
    background: ${theme.colors.secondary};
    color: ${theme.colors.primary};
  }
`;

const ScrollRow = styled(Box)`
  display: flex;
  gap: ${theme.spacing.sm};
  overflow-x: auto;
  padding: ${theme.spacing.sm} 0;
  &::-webkit-scrollbar {
    height: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background: ${theme.colors.secondary};
    border-radius: ${theme.borderRadius.medium};
  }
`;
const TabStyled = styled(Tab)`
  text-transform: none;
  font-weight: 600;
  color: ${theme.colors.text};
  font-size: 1rem;
  min-height: auto;
  padding: ${theme.spacing.sm} ${theme.spacing.md};
  &.Mui-selected {
    color: ${theme.colors.secondary};
  }
  &:hover {
    background: transparent;
  }
`;


const ViewDetailsButton = styled(Button)`
  background: ${theme.colors.secondary};
  color: ${theme.colors.primary};
  font-weight: 600;
  font-size: 0.85rem;
  text-transform: none;
  border-radius: ${theme.borderRadius.medium};
  margin-top: ${theme.spacing.xs};
  &:hover {
    background: #ffb300;
    box-shadow: ${theme.shadows.elevated};
  }
`;

const ProgramsPage = memo(() => {
  const categories = ["All", "AI", "Web", "Design", "Data"];
  const institutes = [
    "All",
    "IIT Hyderabad",
    "NIT Nagpur",
    "NIT Trichy",
    "BIT Mesra",
  ];
  const allPrograms = [
    {
      title: "AI Basics",
      desc: "Learn AI fundamentals.",
      category: "AI",
      institute: "IIT Hyderabad",
      image: "https://scitechdaily.com/images/Artificial-Intelligence-Robot-Thinking-Brain.jpg",
    },
    {
      title: "React Pro",
      desc: "Master React.",
      category: "Web",
      institute: "NIT Nagpur",
      image: "https://blog.zegocloud.com/wp-content/uploads/2024/03/types-of-web-development-services.jpg",
    },
    {
      title: "UX Design",
      desc: "Modern UI/UX.",
      category: "Design",
      institute: "NIT Trichy",
      image: "https://www.ogmaconceptions.com/uploads/e2482d2aa595742e9b718d99f7ffa53d2f4e.jpg",
    },
    {
      title: "Data Viz",
      desc: "Beautiful charts.",
      category: "Data",
      institute: "BIT Mesra",
      image: "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg",
    },
  ];

  const [search, setSearch] = useState("");
  const [tab, setTab] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedInstitute, setSelectedInstitute] = useState("All");

  const filteredPrograms = allPrograms.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) &&
      (tab === 0
        ? selectedCategory === "All" || p.category === selectedCategory
        : selectedInstitute === "All" || p.institute === selectedInstitute)
  );

  return (
    <Box
      sx={{
        bgcolor: theme.colors.background,
        py: { xs: theme.spacing.lg, sm: theme.spacing.xl, md: "48px" },
        px: {
          xs: theme.spacing.sm,
          sm: theme.spacing.md,
          md: theme.spacing.lg,
        },
      }}
    >
      <Container maxWidth="lg">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <Typography
            variant="h1"
            align="center"
            mt={theme.spacing.lg}
            sx={{
              mb: 1,
              fontWeight: 700,
              fontSize: { xs: "2rem", md: "2.8rem" },
            }}
          >
            Discover Your Path
          </Typography>
          <Typography
            align="center"
            sx={{ mb: theme.spacing.lg, opacity: 0.8 }}
          >
            Expert-led programs to level up your skills.
          </Typography>
        </motion.div>

        {/* Search */}
        <Box
          sx={{
            width: { xs: "90%", md: "50%" },
            mx: "auto",
            mb: theme.spacing.lg,
          }}
        >
          <SearchField
            placeholder="Search programs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            variant="outlined"
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <FaSearch
                    size={14}
                    style={{ color: theme.colors.secondary, opacity: 0.8 }}
                  />
                </InputAdornment>
              ),
              endAdornment: search && (
                <IconButton
                  onClick={() => setSearch("")}
                  size="small"
                  sx={{ color: theme.colors.secondary }}
                >
                  <FaTimes />
                </IconButton>
              ),
            }}
          />
        </Box>

        {/* Tabs */}
        <Tabs
          value={tab}
          onChange={(_, v) => setTab(v)}
          centered
          sx={{
            mb: theme.spacing.md,
            "& .MuiTabs-indicator": { backgroundColor: theme.colors.secondary },
          }}
        >
          <TabStyled label="By Category" />
          <TabStyled label="By Institute" />
        </Tabs>

        {/* Chips */}
        <ScrollRow>
          {(tab === 0 ? categories : institutes).map((item) => (
            <FilterChip
              key={item}
              active={
                (tab === 0 ? selectedCategory : selectedInstitute) === item
              }
              onClick={() =>
                tab === 0
                  ? setSelectedCategory(item)
                  : setSelectedInstitute(item)
              }
            >
              {item}
            </FilterChip>
          ))}
        </ScrollRow>

        {/* Cards */}
        <Grid
          container
          spacing={3}
          justifyContent="center"
          sx={{ mt: theme.spacing.md }}
        >
          {filteredPrograms.map((p, index) => (
            <Grid item xs={12} sm={6} md={4} key={p.title}>
              <motion.div
                initial={{ opacity: 0, y: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Suspense fallback={<LoadingSpinner />}>
                  <GlassCard>
                    <img
                      src={p.image}
                      alt={p.title}
                      style={{
                        width: "100%",
                        borderRadius: `${theme.borderRadius.large} ${theme.borderRadius.large} 0 0`,
                        height: "140px",
                        objectFit: "cover",
                      }}
                    />
                    <Box sx={{ p: theme.spacing.sm, flexGrow: 1 }}>
                      <Typography
                        variant="subtitle1"
                        color="theme.colors.primary"
                        sx={{ fontWeight: 800, mb: 0.3 }}
                      >
                        {p.title}
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{ opacity: 0.8, mb: 0.3 }}
                      >
                        {p.institute}
                      </Typography>
                      <Typography variant="body2" sx={{ opacity: 0.7 }}>
                        {p.desc}
                      </Typography>
                    </Box>
                    <Box sx={{ p: theme.spacing.sm }}>
                      <ViewDetailsButton>View Details</ViewDetailsButton>
                    </Box>
                  </GlassCard>
                </Suspense>
              </motion.div>
            </Grid>
          ))}
          {filteredPrograms.length === 0 && (
            <Grid item xs={12}>
              <Typography align="center" sx={{ opacity: 0.6 }}>
                No programs found.
              </Typography>
            </Grid>
          )}
        </Grid>
      </Container>
    </Box>
  );
});

export default ProgramsPage;
