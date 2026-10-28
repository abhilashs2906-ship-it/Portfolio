import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Card,
  CardContent,
  CardMedia,
  Box,
  Avatar,
  Chip,
  TextField,
  Alert,
  Paper,
  Divider,
  Stack,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CssBaseline,
  ThemeProvider,
  createTheme
} from '@mui/material';
import dsc from './assets/dsc.jpg';

// ============================================================================
// 1. PORTFOLIO PROJECTS DATA (With Detailed Modal Info)
// ============================================================================
const initialProjects = [
  {
    id: 1,
    title: 'E-Commerce Storefront UI',
    category: 'React & MUI',
    shortDesc: 'Responsive online shopping interface built with Material UI Flexbox, product cards, and category filters.',
    fullDesc:
      'A modern e-commerce frontend designed during my web development training. It uses Material UI cards, Flexbox navigation, and dynamic React state to filter products and preview items seamlessly across mobile and desktop screens.',
    highlights: [
      'Responsive 4-column product grid that adapts to mobile, tablet, and desktop.',
      'Dynamic category filtering using ES6 .filter() and .map() array methods.',
      'Custom Material UI theme palette with smooth hover elevation effects.'
    ],
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=900&q=80',
    tags: ['React', 'Material UI', 'Flexbox'],
    liveLink: 'https://vercel.com',
    githubLink: 'https://github.com'
  },
  {
    id: 2,
    title: 'Creative Design Studio Landing Page',
    category: 'CSS Grid & Flexbox',
    shortDesc: 'Modern agency portfolio showcasing CSS Grid layouts, custom typography, and smooth hover transitions.',
    fullDesc:
      'A visually engaging landing page crafted to master two-dimensional CSS Grid layouts alongside one-dimensional Flexbox alignment. Features clean spacing, hero call-to-actions, and responsive cards.',
    highlights: [
      'Built with CSS Grid template columns and responsive gap spacing.',
      'Clean visual hierarchy with accessible contrast in both Light and Dark modes.',
      'Interactive service cards with subtle upward hover animations.'
    ],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    tags: ['HTML5', 'CSS Grid', 'Responsive UI'],
    liveLink: 'https://vercel.com',
    githubLink: 'https://github.com'
  },
  {
    id: 3,
    title: 'Interactive Task & Habit Tracker',
    category: 'JavaScript ES6+',
    shortDesc: 'Productivity web app utilizing ES6+ arrow functions, array filtering, and React state management.',
    fullDesc:
      'An interactive task organizer that helps users track daily learning goals. Built with React hooks (useState) and modern ES6+ JavaScript syntax to add, filter, and complete tasks in real time.',
    highlights: [
      'Instant task filtering (All, Active, Completed) using JavaScript array methods.',
      'Component-based architecture with clean props and state management.',
      'Intuitive user interface with Material UI Chip badges and Paper surfaces.'
    ],
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=900&q=80',
    tags: ['JavaScript ES6+', 'React State', 'MUI'],
    liveLink: 'https://vercel.com',
    githubLink: 'https://github.com'
  },
  {
    id: 4,
    title: 'Personal Developer Portfolio',
    category: 'React & MUI',
    shortDesc: 'Custom-themed portfolio featuring a Light/Dark mode toggle, project preview modals, and education timeline.',
    fullDesc:
      'My capstone frontend portfolio created for Maiyyam. Designed with a custom Maroon-Wine and Crisp White palette that switches smoothly into a sleek Dark Mode, complete with modal dialogs and an interactive timeline.',
    highlights: [
      'Live Light / Dark Mode theme switcher powered by Material UI ThemeProvider.',
      'Interactive Project Modal (<Dialog>) for deep-dive project previews.',
      'Vertical Experience & Education Timeline showcasing my learning journey.'
    ],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
    tags: ['React', 'Vite', 'MUI Theme'],
    liveLink: 'https://vercel.com',
    githubLink: 'https://github.com'
  }
];

// ============================================================================
// 2. EXPERIENCE & EDUCATION TIMELINE DATA
// ============================================================================
const timelineData = [
  {
    period: '2026 — Present',
    role: 'Web Development Trainee',
    organization: 'Maiyyam',
    badge: 'Current Training',
    description:
      'Mastering core frontend engineering: HTML5 semantic structure, CSS3 Flexbox & Grid layouts, modern ES6+ JavaScript, React with Vite, and Material UI component design.'
  },
  {
    period: '2026',
    role: 'Frontend Capstone Portfolio Project',
    organization: 'Self-Directed & Mentored Project',
    badge: 'Capstone',
    description:
      'Designed and deployed a responsive React + Material UI portfolio featuring dynamic project filtering, interactive modal dialogs, and custom Light/Dark theme switching.'
  },
  {
    period: '2025 — 2026',
    role: 'JavaScript & Responsive UI Foundations',
    organization: 'Hands-on Web Practice',
    badge: 'Foundations',
    description:
      'Built foundational web pages and interactive UI components focusing on mobile-first responsiveness, clean code structure, and Git/GitHub version control.'
  },
  {
    period: 'Academic Background',
    role: 'Higher Education & Computer Science',
    organization: 'Chennai, India',
    badge: 'Education',
    description:
      'Developed strong analytical thinking, programming fundamentals, and a passion for building clean, user-friendly web applications.'
  }
];

// ============================================================================
// 3. MAIN PORTFOLIO COMPONENT
// ============================================================================
export default function App() {
  // Feature 1: Interactive Light / Dark Theme Toggle State
  const [darkMode, setDarkMode] = useState(false);

  // Category Filter State (ES6 .filter)
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Feature 2: Project Modal Preview State (<Dialog>)
  const [activeProject, setActiveProject] = useState(null);

  // Frontend Contact Form State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submittedName, setSubmittedName] = useState('');

  // Dynamic Material UI Theme (Maroon-Wine Light Mode <-> Rose-Slate Dark Mode)
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: darkMode ? '#fb7185' : '#9f1239' // Maroon-wine in light, bright rose in dark
      },
      secondary: {
        main: darkMode ? '#818cf8' : '#4338ca'
      },
      background: {
        default: darkMode ? '#0b0f19' : '#ffffff',
        paper: darkMode ? '#111827' : '#f8fafc'
      },
      text: {
        primary: darkMode ? '#f8fafc' : '#0f172a',
        secondary: darkMode ? '#94a3b8' : '#475569'
      }
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif'
    }
  });

  const categories = ['All', 'React & MUI', 'CSS Grid & Flexbox', 'JavaScript ES6+'];
  const filteredProjects =
    selectedCategory === 'All'
      ? initialProjects
      : initialProjects.filter((project) => project.category === selectedCategory);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    setSubmittedName(formData.name);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      {/* ====================================================================
          STICKY TOP NAVBAR (With Light / Dark Theme Toggle)
         ==================================================================== */}
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          background: darkMode ? 'rgba(11, 15, 25, 0.9)' : 'rgba(255, 255, 255, 0.92)',
          backdropFilter: 'blur(12px)',
          borderBottom: darkMode ? '1px solid #1e293b' : '1px solid #e2e8f0',
          color: 'text.primary',
          transition: 'all 0.3s ease'
        }}
      >
        <Container maxWidth="lg">
          <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
            {/* Brand Logo */}
            <Stack direction="row" spacing={1.5} sx={{ alignItems: 'center' }}>
              <Box
                sx={{
                  width: 38,
                  height: 38,
                  borderRadius: '10px',
                  background: 'linear-gradient(135deg, #9f1239 0%, #e11d48 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 'bold',
                  color: '#ffffff',
                  boxShadow: '0 4px 14px rgba(159, 18, 57, 0.3)'
                }}
              >
                {'</>'}
              </Box>
              <Typography variant="h6" fontWeight="800" sx={{ letterSpacing: '0.5px' }}>
                ABHILASH
              </Typography>
            </Stack>

            {/* Navigation Links & Theme Switcher */}
            <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
              <Stack direction="row" spacing={1} sx={{ display: { xs: 'none', md: 'flex' } }}>
                <Button color="inherit" href="#home" sx={{ fontWeight: 600 }}>
                  Home
                </Button>
                <Button color="inherit" href="#projects" sx={{ fontWeight: 600 }}>
                  Projects
                </Button>
                <Button color="inherit" href="#journey" sx={{ fontWeight: 600 }}>
                  Timeline
                </Button>
                <Button color="inherit" href="#contact" sx={{ fontWeight: 600 }}>
                  Contact
                </Button>
              </Stack>

              {/* Feature #2: Interactive Theme Toggle Button */}
              <Button
                variant="outlined"
                size="small"
                onClick={() => setDarkMode(!darkMode)}
                sx={{
                  borderRadius: '20px',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  borderColor: darkMode ? '#334155' : '#cbd5e1',
                  color: 'text.primary',
                  px: 2
                }}
              >
                {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </Button>

              <Button
                variant="contained"
                href="#contact"
                sx={{
                  display: { xs: 'none', sm: 'inline-flex' },
                  background: 'linear-gradient(135deg, #9f1239 0%, #e11d48 100%)',
                  color: '#ffffff',
                  textTransform: 'none',
                  fontWeight: 'bold',
                  borderRadius: '8px'
                }}
              >
                Hire Me
              </Button>
            </Stack>
          </Toolbar>
        </Container>
      </AppBar>

      {/* ====================================================================
          HERO SECTION
         ==================================================================== */}
      <Box
        id="home"
        sx={{
          py: 10,
          textAlign: 'center',
          background: darkMode
            ? 'radial-gradient(circle at 50% 0%, #311024 0%, #0b0f19 70%)'
            : 'radial-gradient(circle at 50% 0%, #fff1f2 0%, #ffffff 75%)',
          borderBottom: darkMode ? '1px solid #1e293b' : '1px solid #f1f5f9',
          transition: 'all 0.3s ease'
        }}
      >
        <Container maxWidth="md">
          <Avatar
            src={dsc}
            alt="Abhilash"
            sx={{
              width: 148,
              height: 148,
              mx: 'auto',
              mb: 3,
              border: darkMode ? '4px solid #fb7185' : '4px solid #ffffff',
              boxShadow: '0 14px 35px rgba(159, 18, 57, 0.25)',
              bgcolor: '#9f1239',
              fontSize: '2.5rem',
              fontWeight: 'bold'
            }}
          >
            A
          </Avatar>

          <Stack
            direction="row"
            spacing={1}
            useFlexGap
            sx={{ justifyContent: 'center', mb: 2.5, flexWrap: 'wrap' }}
          >
            <Chip label="REACT & VITE" size="small" color="primary" variant="outlined" sx={{ fontWeight: 'bold' }} />
            <Chip label="MUI FLEXBOX & GRID" size="small" color="primary" variant="outlined" sx={{ fontWeight: 'bold' }} />
            <Chip label="ES6+ JAVASCRIPT" size="small" color="secondary" variant="outlined" sx={{ fontWeight: 'bold' }} />
            <Chip label="RESPONSIVE DESIGN" size="small" color="success" variant="outlined" sx={{ fontWeight: 'bold' }} />
          </Stack>

          <Typography variant="h3" fontWeight="900" gutterBottom>
            Hi, I'm Abhilash, Creative Web Developer.
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 620, mx: 'auto', mb: 4, fontSize: '1.08rem', lineHeight: 1.7 }}
          >
            I build clean, responsive, and user-friendly web interfaces using modern React,
            Material UI, CSS Grid, and Flexbox. Studying Web Development at Maiyyam.
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{ justifyContent: 'center', flexWrap: 'wrap' }}
          >
            <Button
              variant="contained"
              size="large"
              href="#projects"
              sx={{
                background: 'linear-gradient(135deg, #9f1239 0%, #e11d48 100%)',
                color: '#ffffff',
                textTransform: 'none',
                px: 4,
                py: 1.3,
                fontWeight: 'bold',
                boxShadow: '0 8px 20px rgba(159, 18, 57, 0.3)'
              }}
            >
              Explore My Projects
            </Button>
            <Button
              variant="outlined"
              size="large"
              href="#journey"
              sx={{
                textTransform: 'none',
                px: 3.5,
                py: 1.3,
                fontWeight: 'bold'
              }}
            >
              View My Timeline
            </Button>
          </Stack>
        </Container>
      </Box>

      {/* ====================================================================
          PROJECTS SECTION (With Clickable Modal Preview)
         ==================================================================== */}
      <Box id="projects" sx={{ py: 9, bgcolor: 'background.default', transition: 'all 0.3s ease' }}>
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: 'column', sm: 'row' }}
            spacing={2}
            sx={{
              justifyContent: 'space-between',
              alignItems: { xs: 'flex-start', sm: 'center' },
              mb: 4.5
            }}
          >
            <Box>
              <Typography variant="h4" fontWeight="800" gutterBottom>
                My Projects
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Click any project card to open a detailed preview popup!
              </Typography>
            </Box>

            <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
              {categories.map((cat) => (
                <Chip
                  key={cat}
                  label={cat}
                  clickable
                  onClick={() => setSelectedCategory(cat)}
                  sx={{
                    fontWeight: 'bold',
                    bgcolor:
                      selectedCategory === cat
                        ? 'primary.main'
                        : darkMode
                        ? '#1e293b'
                        : '#f1f5f9',
                    color: selectedCategory === cat ? '#ffffff' : 'text.primary',
                    '&:hover': {
                      opacity: 0.9
                    }
                  }}
                />
              ))}
            </Stack>
          </Stack>

          {/* 4-Column Responsive CSS Grid */}
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: '1fr',
                sm: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)'
              },
              gap: 3
            }}
          >
            {filteredProjects.map((project) => (
              <Card
                key={project.id}
                elevation={0}
                onClick={() => setActiveProject(project)}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  cursor: 'pointer',
                  borderRadius: 3,
                  bgcolor: 'background.paper',
                  border: darkMode ? '1px solid #1e293b' : '1px solid #e2e8f0',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    borderColor: 'primary.main',
                    boxShadow: darkMode
                      ? '0 16px 32px rgba(251, 113, 133, 0.15)'
                      : '0 16px 32px rgba(159, 18, 57, 0.14)'
                  }
                }}
              >
                <CardMedia component="img" height="155" image={project.image} alt={project.title} />
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
                  <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
                    {project.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" mb={2} sx={{ flexGrow: 1 }}>
                    {project.shortDesc}
                  </Typography>

                  <Stack direction="row" spacing={0.5} useFlexGap sx={{ flexWrap: 'wrap', mb: 2 }}>
                    {project.tags.map((tag, i) => (
                      <Chip
                        key={i}
                        label={tag}
                        size="small"
                        sx={{
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          bgcolor: darkMode ? 'rgba(251, 113, 133, 0.15)' : '#fff1f2',
                          color: 'primary.main'
                        }}
                      />
                    ))}
                  </Stack>

                  <Button
                    size="small"
                    variant="outlined"
                    fullWidth
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveProject(project);
                    }}
                    sx={{ textTransform: 'none', fontWeight: 'bold', borderRadius: 2 }}
                  >
                    🔍 Preview Details
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Container>
      </Box>

      {/* ====================================================================
          FEATURE #4: PROJECT MODAL PREVIEW (<Dialog>)
         ==================================================================== */}
      <Dialog
        open={Boolean(activeProject)}
        onClose={() => setActiveProject(null)}
        maxWidth="sm"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            bgcolor: 'background.paper'
          }
        }}
      >
        {activeProject && (
          <>
            <Box sx={{ position: 'relative' }}>
              <CardMedia
                component="img"
                height="220"
                image={activeProject.image}
                alt={activeProject.title}
              />
              <Chip
                label={activeProject.category}
                color="primary"
                size="small"
                sx={{
                  position: 'absolute',
                  top: 16,
                  left: 16,
                  fontWeight: 'bold',
                  boxShadow: 2
                }}
              />
            </Box>

            <DialogTitle sx={{ fontWeight: '800', pb: 1 }}>
              {activeProject.title}
            </DialogTitle>

            <DialogContent dividers>
              <Typography variant="body1" color="text.secondary" paragraph>
                {activeProject.fullDesc}
              </Typography>

              <Typography variant="subtitle2" fontWeight="bold" gutterBottom sx={{ color: 'primary.main' }}>
                Key Technical Highlights:
              </Typography>
              <Stack spacing={1} mb={2.5}>
                {activeProject.highlights.map((point, index) => (
                  <Stack key={index} direction="row" spacing={1} sx={{ alignItems: 'flex-start' }}>
                    <Typography color="primary.main" fontWeight="bold">
                      ✓
                    </Typography>
                    <Typography variant="body2" color="text.primary">
                      {point}
                    </Typography>
                  </Stack>
                ))}
              </Stack>

              <Stack direction="row" spacing={1} useFlexGap sx={{ flexWrap: 'wrap' }}>
                {activeProject.tags.map((tag, i) => (
                  <Chip key={i} label={tag} size="small" variant="outlined" color="primary" />
                ))}
              </Stack>
            </DialogContent>

            <DialogActions sx={{ p: 2, justifyContent: 'space-between' }}>
              <Button
                onClick={() => setActiveProject(null)}
                color="inherit"
                sx={{ textTransform: 'none', fontWeight: 'bold' }}
              >
                Close
              </Button>
              <Stack direction="row" spacing={1.5}>
                <Button
                  variant="outlined"
                  href={activeProject.githubLink}
                  target="_blank"
                  sx={{ textTransform: 'none', fontWeight: 'bold' }}
                >
                  GitHub Code
                </Button>
                <Button
                  variant="contained"
                  href={activeProject.liveLink}
                  target="_blank"
                  sx={{
                    background: 'linear-gradient(135deg, #9f1239 0%, #e11d48 100%)',
                    color: '#ffffff',
                    textTransform: 'none',
                    fontWeight: 'bold'
                  }}
                >
                  Live Demo ↗
                </Button>
              </Stack>
            </DialogActions>
          </>
        )}
      </Dialog>

      <Divider />

      {/* ====================================================================
          FEATURE #3: LIVE EXPERIENCE & EDUCATION TIMELINE
         ==================================================================== */}
      <Box
        id="journey"
        sx={{
          py: 9,
          bgcolor: darkMode ? '#0f172a' : '#f8fafc',
          transition: 'all 0.3s ease'
        }}
      >
        <Container maxWidth="md">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography variant="h4" fontWeight="800" gutterBottom>
              Experience & Education Timeline
            </Typography>
            <Typography variant="body2" color="text.secondary">
              My learning milestones and web development journey at Maiyyam.
            </Typography>
          </Box>

          <Box sx={{ position: 'relative', pl: { xs: 3, sm: 5 } }}>
            {/* Vertical Timeline Line */}
            <Box
              sx={{
                position: 'absolute',
                left: { xs: '11px', sm: '19px' },
                top: 8,
                bottom: 8,
                width: '3px',
                background: 'linear-gradient(180deg, #9f1239 0%, #fda4af 100%)',
                borderRadius: 2
              }}
            />

            <Stack spacing={4}>
              {timelineData.map((item, index) => (
                <Box key={index} sx={{ position: 'relative' }}>
                  {/* Timeline Node Dot */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: { xs: '-24px', sm: '-32px' },
                      top: 20,
                      width: 18,
                      height: 18,
                      borderRadius: '50%',
                      bgcolor: 'primary.main',
                      border: darkMode ? '3px solid #0f172a' : '3px solid #ffffff',
                      boxShadow: '0 0 0 3px rgba(159, 18, 57, 0.25)'
                    }}
                  />

                  <Paper
                    elevation={0}
                    sx={{
                      p: 3,
                      borderRadius: 3,
                      bgcolor: 'background.default',
                      border: darkMode ? '1px solid #1e293b' : '1px solid #e2e8f0',
                      transition: 'transform 0.2s ease',
                      '&:hover': {
                        transform: 'translateX(6px)',
                        borderColor: 'primary.main'
                      }
                    }}
                  >
                    <Stack
                      direction={{ xs: 'column', sm: 'row' }}
                      spacing={1}
                      sx={{
                        justifyContent: 'space-between',
                        alignItems: { xs: 'flex-start', sm: 'center' },
                        mb: 1
                      }}
                    >
                      <Typography variant="h6" fontWeight="bold">
                        {item.role}
                      </Typography>
                      <Chip
                        label={item.period}
                        size="small"
                        color="primary"
                        variant="outlined"
                        sx={{ fontWeight: 'bold' }}
                      />
                    </Stack>

                    <Stack direction="row" spacing={1} sx={{ alignItems: 'center', mb: 1.5 }}>
                      <Typography variant="subtitle2" color="primary.main" fontWeight="bold">
                        {item.organization}
                      </Typography>
                      <Typography variant="caption" color="text.secondary">
                        • {item.badge}
                      </Typography>
                    </Stack>

                    <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
                      {item.description}
                    </Typography>
                  </Paper>
                </Box>
              ))}
            </Stack>
          </Box>
        </Container>
      </Box>

      <Divider />

      {/* ====================================================================
          CONTACT SECTION (Clean Frontend State Form)
         ==================================================================== */}
      <Box id="contact" sx={{ py: 9, bgcolor: 'background.default', transition: 'all 0.3s ease' }}>
        <Container maxWidth="lg">
          <Typography variant="h4" fontWeight="800" mb={4}>
            Contact Me
          </Typography>

          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
              gap: 6
            }}
          >
            <Paper
              elevation={0}
              sx={{
                p: 4,
                borderRadius: 3,
                bgcolor: 'background.paper',
                border: darkMode ? '1px solid #1e293b' : '1px solid #e2e8f0'
              }}
            >
              <Box component="form" onSubmit={handleContactSubmit}>
                <Stack spacing={2.5}>
                  <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                    <TextField
                      fullWidth
                      size="small"
                      label="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <TextField
                      fullWidth
                      size="small"
                      label="Your Email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </Stack>

                  <TextField
                    fullWidth
                    multiline
                    rows={4}
                    label="Your Message"
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />

                  <Box>
                    <Button
                      type="submit"
                      variant="contained"
                      sx={{
                        background: 'linear-gradient(135deg, #9f1239 0%, #e11d48 100%)',
                        color: '#ffffff',
                        fontWeight: 'bold',
                        textTransform: 'none',
                        px: 4,
                        py: 1.2
                      }}
                    >
                      Send Message ➤
                    </Button>
                  </Box>
                </Stack>

                {submittedName && (
                  <Alert severity="success" sx={{ mt: 2.5 }} onClose={() => setSubmittedName('')}>
                    Thank you, <strong>{submittedName}</strong>! Your message has been received.
                  </Alert>
                )}
              </Box>
            </Paper>

            <Stack spacing={2.5} sx={{ justifyContent: 'center' }}>
              <Typography variant="body1" fontWeight="500">
                ✉️ abhilash@example.com
              </Typography>
              <Typography variant="body1" fontWeight="500">
                📍 Based in Chennai, India
              </Typography>
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  size="small"
                  href="https://linkedin.com"
                  target="_blank"
                  sx={{ fontWeight: 'bold', textTransform: 'none' }}
                >
                  LinkedIn Profile
                </Button>
                <Button
                  variant="outlined"
                  size="small"
                  href="https://github.com"
                  target="_blank"
                  sx={{ fontWeight: 'bold', textTransform: 'none' }}
                >
                  GitHub Repositories
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Container>
      </Box>
    </ThemeProvider>
  );
}