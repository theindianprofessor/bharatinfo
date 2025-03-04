import React from 'react';
import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface NewsCardProps {
  id: number;
  title: string;
  summary: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ id, title, summary }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/News/${id}`);
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

export default NewsCard;
