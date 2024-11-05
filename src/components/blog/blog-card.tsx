import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface BlogCardProps {
  id: number;
  title: string;
  summary: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, summary }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/blog/${id}`);
  };

  return (
    <Card onClick={handleClick}>
      <CardActionArea>
        <CardContent>
          <Typography variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summary}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
