import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Box, SelectChangeEvent, Pagination, OutlinedInput, Chip, Button, CardActionArea } from '@mui/material';
import tagsData from '../../assets/data/tags.json';
import { useNews } from './NewsContext';

const NewsList: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 16;

  const { newsData, loading, error } = useNews(); // Use context instead of useFetchNews

  const handleTagChange = (event: SelectChangeEvent<string[]>) => {
    const { value } = event.target;
    setSelectedTags(typeof value === 'string' ? value.split(',') : value);
  };

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(event.target.value);
  };

  const handlePageChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const handleResetFilters = () => {
    setSelectedTags([]);
    setSelectedDate('');
    setPage(1);
  };

  if (loading) return <Box p={3}>Loading...</Box>;
  if (error) return <Box p={3}>Error: {error}</Box>;
  if (!newsData?.articles) return <Box p={3}>No news available</Box>;

  const filteredNews = newsData.articles.filter((article) => {
    const matchesTags = selectedTags.length 
      ? selectedTags.every(tag => article.content?.includes(tag)) 
      : true;
    const matchesDate = selectedDate 
      ? new Date(article.publishedAt).toISOString().split('T')[0] === selectedDate 
      : true;
    return matchesTags && matchesDate;
  });

  const paginatedNews = filteredNews.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Box p={3}>
      <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel>Tags</InputLabel>
          <Select multiple value={selectedTags} onChange={handleTagChange} input={<OutlinedInput label="Tags" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => <Chip key={value} label={value} />)}
              </Box>
            )}
          >
            {tagsData.tags.map((tag) => (
              <MenuItem key={tag} value={tag}>{tag}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField label="Published Date" type="date" value={selectedDate} onChange={handleDateChange}
          InputLabelProps={{ shrink: true }} sx={{ minWidth: 200 }}
        />
        <Button variant="contained" color="secondary" onClick={handleResetFilters}>Reset Filters</Button>
      </Box>
      <Grid container spacing={3}>
        {paginatedNews.map((article, paginatedIndex) => {
          const originalIndex = filteredNews.indexOf(article);
          return (
            <Grid item xs={12} sm={6} md={3} key={originalIndex}>
              <Card sx={{ boxShadow: 3, height: '100%' }}>
                <CardActionArea component={Link} to={`/news/${originalIndex}`}>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {article.description}
                    </Typography>
                    <Link to={`/news/${originalIndex}`}>Read More</Link>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Grid>
      <Box mt={3} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(filteredNews.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />
      </Box>
    </Box>
  );
};

export default NewsList;