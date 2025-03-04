import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  Typography,
  Container,
  Box,
  Paper,
  Divider,
  IconButton,
  Stack,
  useTheme,
  alpha,
} from '@mui/material';
import {
  AccessTime as AccessTimeIcon,
  Bookmark as BookmarkIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
} from '@mui/icons-material';
import Layout from '../../props/layout/layout';
import Breadcrumbs from './bread-crumbs';
import { useNews } from './NewsContext';

const NewsDetail: React.FC = () => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();
  const { newsData, loading, error } = useNews(); // Use shared data from context

  // Debugging logs
  console.log('NewsDetail - Loading:', loading);
  console.log('NewsDetail - Error:', error);
  console.log('NewsDetail - Data:', newsData);
  console.log('NewsDetail - ID:', id);

  if (loading) {
    return (
      <Layout>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box>Loading news details...</Box>
        </Container>
      </Layout>
    );
  }

  if (error) {
    return (
      <Layout>
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box>Error loading news: {error}</Box>
        </Container>
      </Layout>
    );
  }

  if (!newsData || !newsData.articles || newsData.articles.length === 0) {
    console.log('NewsDetail - No data or articles, navigating to 404');
    return <Navigate to="/404" replace />;
  }

  const articleIndex = Number(id);
  if (isNaN(articleIndex) || articleIndex < 0 || articleIndex >= newsData.articles.length) {
    console.log('NewsDetail - Invalid article index, navigating to 404');
    return <Navigate to="/404" replace />;
  }

  const article = newsData.articles[articleIndex];
  const formattedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
    : null;

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: theme.shape.borderRadius,
            overflow: 'hidden',
            bgcolor: 'background.paper',
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          }}
        >
          <Box
            sx={{
              bgcolor: alpha(theme.palette.primary.main, 0.03),
              py: 4,
              px: { xs: 2, md: 4 },
            }}
          >
            <Breadcrumbs current={article.title} />
            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: '2rem', md: '2.5rem' },
                fontWeight: 700,
                mb: 3,
                mt: 2,
              }}
            >
              {article.title}
            </Typography>
            <Stack
              direction={{ xs: 'column', sm: 'row' }}
              spacing={3}
              alignItems={{ xs: 'flex-start', sm: 'center' }}
            >
              <Stack direction="row" spacing={3} alignItems="center" sx={{ color: 'text.secondary' }}>
                {formattedDate && (
                  <Stack direction="row" spacing={1} alignItems="center">
                    <AccessTimeIcon sx={{ fontSize: '1rem' }} />
                    <Typography variant="body2">{formattedDate}</Typography>
                  </Stack>
                )}
              </Stack>
            </Stack>
          </Box>

          <Box sx={{ p: { xs: 2, md: 4 } }}>
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.text.secondary,
                mb: 4,
                fontStyle: 'italic',
              }}
            >
              {article.description}
            </Typography>

            <Divider sx={{ mb: 4 }} />

            <Typography
              variant="body1"
              component="div"
              sx={{
                lineHeight: 1.8,
                color: theme.palette.text.primary,
                '& p': { mb: 2 },
              }}
            >
              <Typography component="p" sx={{ marginBottom: 2 }}>
                {article.content}
              </Typography>
            </Typography>

            <Box sx={{ mt: 6 }}>
              <Stack
                direction={{ xs: 'column', sm: 'row' }}
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                <Stack direction="row" spacing={1} flexWrap="wrap" />
                <Stack direction="row" spacing={1}>
                  <IconButton size="small" color="primary" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
                    <FacebookIcon />
                  </IconButton>
                  <IconButton size="small" color="primary" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
                    <TwitterIcon />
                  </IconButton>
                  <IconButton size="small" color="primary" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton size="small" color="primary" sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}>
                    <BookmarkIcon />
                  </IconButton>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Paper>
      </Container>
    </Layout>
  );
};

export default NewsDetail;