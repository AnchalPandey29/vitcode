const theme = {
  colors: {
    primary: '#0A2540',
    secondary: '#D4A017',
    background: '#F8FAFC',
    accent: '#E2E8F0',
    text: '#1F2937',
    success: '#10B981',
  },
  typography: {
    fontFamily: {
      heading: "'Poppins', sans-serif",
      body: "'Inter', sans-serif",
    },
    sizes: {
      h1: { xs: '2rem', md: '2.5rem', lg: '3rem' },
      h2: { xs: '1.5rem', md: '2rem', lg: '2.25rem' },
      h3: { xs: '1.25rem', md: '1.5rem', lg: '1.75rem' },
      body: '1rem',
      caption: '0.875rem',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
  },
  borderRadius: {
    small: '8px',
    medium: '12px',
    large: '16px',
  },
  shadows: {
    card: '0 4px 12px rgba(0, 0, 0, 0.15)',
    elevated: '0 8px 24px rgba(0, 0, 0, 0.2)',
  },
  animations: {
    easeInOut: [0.4, 0, 0.2, 1],
    duration: '0.5s',
  },
};

export default theme;