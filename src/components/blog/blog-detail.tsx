import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import {
  Typography,
  Container,
  Box,
  Paper,
  Chip,
  Divider,
  IconButton,
  Stack,
  useTheme,
  alpha
} from '@mui/material';
import {
  AccessTime as AccessTimeIcon,
  Bookmark as BookmarkIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon
} from '@mui/icons-material';
import Layout from '../../props/layout/layout';
import Breadcrumbs from './bread-crumbs';
import blogs from '../../assets/data/blogs.json';

// Types
// interface Blog {
//   id: number;
//   title: string;
//   summary: string;
//   content: string;
//   author?: {
//     name: string;
//     avatar?: string;
//     role?: string;
//   };
//   publishedDate?: string;
//   readTime?: string;
//   tags?: string[];
// }


// interface Blog {
//   id: number;
//   title: string;
//   summary: string;
//   content: string[]; // Content is an array of strings
//   author: {
//     name: string;
//     avatar: string;
//     role: string;
//   };
//   publishedDate: string;
//   readTime: string;
//   tags: string[];
// }
// interface BlogContentProps {
//   blog: Blog[];
// }


const BlogDetail: React.FC = () => {
  const theme = useTheme();
  const { id } = useParams<{ id: string }>();
  const blog = id ? blogs.find((b) => b.id === parseInt(id)) : undefined;

  if (!blog) {
    return <Navigate to="/404" replace />;
  }

  const formattedDate = blog.publishedDate
    ? new Date(blog.publishedDate).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : null;

  return (
    <Layout>
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Paper
          elevation={0}
          sx={{
            borderRadius: theme.shape.borderRadius,
            overflow: "hidden",
            bgcolor: "background.paper",
            border: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
          }}
        >
          {/* Header Section */}
          <Box
            sx={{
              bgcolor: alpha(theme.palette.primary.main, 0.03),
              py: 4,
              px: { xs: 2, md: 4 },
            }}
          >
            <Breadcrumbs current={blog.title} />

            <Typography
              variant="h2"
              component="h1"
              sx={{
                color: theme.palette.text.primary,
                fontSize: { xs: "2rem", md: "2.5rem" },
                fontWeight: 700,
                mb: 3,
                mt: 2,
              }}
            >
              {blog.title}
            </Typography>

            {/* Author and Metadata */}
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={3}
              alignItems={{ xs: "flex-start", sm: "center" }}
            >
              <Stack
                direction="row"
                spacing={3}
                alignItems="center"
                sx={{ color: "text.secondary" }}
              >
                {formattedDate && (
                  <Stack direction="row" spacing={1} alignItems="center">
                    <AccessTimeIcon sx={{ fontSize: "1rem" }} />
                    <Typography variant="body2">{formattedDate}</Typography>
                  </Stack>
                )}
                {blog.readTime && (
                  <Typography variant="body2">
                    {blog.readTime} min read
                  </Typography>
                )}
              </Stack>
            </Stack>
          </Box>

          {/* Content Section */}
          <Box sx={{ p: { xs: 2, md: 4 } }}>
            {/* Summary */}
            <Typography
              variant="subtitle1"
              sx={{
                color: theme.palette.text.secondary,
                mb: 4,
                fontStyle: "italic",
              }}
            >
              {blog.summary}
            </Typography>

            <Divider sx={{ mb: 4 }} />

            {/* Main Content */}
            <Typography
              variant="body1"
              component="div"
              sx={{
                lineHeight: 1.8,
                color: theme.palette.text.primary,
                "& p": {
                  mb: 2,
                },
              }}
            >

              {Array.isArray(blog.content) &&
                blog.content.map((paragraph, index) => (
                  <Typography key={index} component="p" sx={{ marginBottom: 2 }}>
                  {paragraph}
                </Typography>
                ))
              }
            </Typography>
            {/* Tags and Share Section */}
            <Box sx={{ mt: 6 }}>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems="center"
                spacing={2}
              >
                {/* Tags */}
                {blog.tags && (
                  <Stack direction="row" spacing={1} flexWrap="wrap">
                    {blog.tags.map((tag) => (
                      <Chip
                        key={tag}
                        label={tag}
                        size="small"
                        variant="outlined"
                        sx={{
                          borderColor: theme.palette.primary.main,
                          "&:hover": {
                            bgcolor: alpha(theme.palette.primary.main, 0.1),
                          },
                        }}
                      />
                    ))}
                  </Stack>
                )}

                {/* Share Buttons */}
                <Stack direction="row" spacing={1}>
                  <IconButton
                    size="small"
                    color="primary"
                    sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}
                  >
                    <FacebookIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="primary"
                    sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}
                  >
                    <TwitterIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="primary"
                    sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}
                  >
                    <LinkedInIcon />
                  </IconButton>
                  <IconButton
                    size="small"
                    color="primary"
                    sx={{ bgcolor: alpha(theme.palette.primary.main, 0.1) }}
                  >
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

export default BlogDetail;
