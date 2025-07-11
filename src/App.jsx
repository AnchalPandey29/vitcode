import React, { Suspense, Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';
import { HelmetProvider } from 'react-helmet-async';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import theme from './theme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy-loaded pages
const HomePage = React.lazy(() => import('./components/HomePage'));
const TestimonialsPage = React.lazy(() => import('./components/TestimonialsPage'));
const ProgramsPage = React.lazy(() => import('./components/ProgramsPage'));
const PartnersPage = React.lazy(() => import('./components/PartnersPage'));
const CertificatesPage = React.lazy(() => import('./components/CertificatesPage'));
const NotFoundPage = React.lazy(() => import('./components/NotFoundPage')); // ✅ new

// Error Boundary
class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box sx={{ textAlign: 'center', py: 10, width: '100vw', bgcolor: theme.colors.background }}>
          <Typography variant="h6">Something went wrong. Please try again later.</Typography>
        </Box>
      );
    }
    return this.props.children;
  }
}

const muiTheme = createTheme({
  palette: {
    primary: { main: theme.colors.primary },
    secondary: { main: theme.colors.secondary },
    background: { default: theme.colors.background },
  },
  typography: {
    fontFamily: theme.typography.fontFamily.body,
    h1: { fontFamily: theme.typography.fontFamily.heading, fontSize: { xs: '2rem', md: '2.5rem' } },
    h2: { fontFamily: theme.typography.fontFamily.heading, fontSize: { xs: '1.5rem', md: '2rem' } },
    h3: { fontFamily: theme.typography.fontFamily.heading, fontSize: { xs: '1.25rem', md: '1.5rem' } },
    body1: { fontSize: theme.typography.sizes.body },
    caption: { fontSize: theme.typography.sizes.caption },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (min-width: 1200px)': { maxWidth: '100%' },
        },
      },
    },
  },
});

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider theme={muiTheme}>
        <Router>
          <Box sx={{ minHeight: '100vh', width: '100vw', display: 'flex', flexDirection: 'column', m: 0, p: 0 }}>
            <Navbar />
            <Box sx={{ mt: { xs: '56px', sm: '64px' } }}>
              <ErrorBoundary>
                <Suspense fallback={<LoadingSpinner />}>
                  <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/testimonials" element={<TestimonialsPage />} />
                    <Route path="/programs" element={<ProgramsPage />} />
                    <Route path="/partners" element={<PartnersPage />} />
                    <Route path="/certificates" element={<CertificatesPage />} />
                    <Route path="*" element={<NotFoundPage />} /> {/* ✅ new */}
                  </Routes>
                </Suspense>
              </ErrorBoundary>
            </Box>
            <Footer />
          </Box>
        </Router>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;
