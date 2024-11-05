import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Grid, TextField, MenuItem, Select, InputLabel, FormControl, Box, SelectChangeEvent, Pagination, OutlinedInput, Chip, Button, CardActionArea } from '@mui/material';
import blogs from '../../assets/data/blogs.json';
import tagsData from '../../assets/data/tags.json';

const BlogList: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const itemsPerPage = 16; // 4x4 matrix

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

  const filteredBlogs = blogs.filter((blog) => {
    const matchesTags = selectedTags.length ? selectedTags.every(tag => blog.tags.includes(tag)) : true;
    const matchesDate = selectedDate ? blog.publishedDate === selectedDate : true;
    return matchesTags && matchesDate;
  });

  const paginatedBlogs = filteredBlogs.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  return (
    <Box p={3}>
      <Box mb={3} display="flex" justifyContent="space-between" alignItems="center">
        <FormControl sx={{ minWidth: 300 }}>
          <InputLabel>Tags</InputLabel>
          <Select
            multiple
            value={selectedTags}
            onChange={handleTagChange}
            input={<OutlinedInput label="Tags" />}
            renderValue={(selected) => (
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
          >
            {tagsData.tags.map((tag) => (
              <MenuItem key={tag} value={tag}>
                {tag}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          label="Published Date"
          type="date"
          value={selectedDate}
          onChange={handleDateChange}
          InputLabelProps={{ shrink: true }}
          sx={{ minWidth: 200 }}
        />
        <Button variant="contained" color="secondary" onClick={handleResetFilters}>
          Reset Filters
        </Button>
      </Box>
      <Grid container spacing={3}>
        {paginatedBlogs.map((blog) => (
          <Grid item xs={12} sm={6} md={3} key={blog.id}>
            <Card sx={{ boxShadow: 3, height: '100%' }}>
            <CardActionArea component={Link} to={`/blog/${blog.id}`}>
            <CardContent>
                <Typography  gutterBottom variant="h5" component="div">
                  {blog.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {blog.summary}
                </Typography>
                <Link to={`/blog/${blog.id}`}>Read More</Link>
              </CardContent>
            </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box mt={3} display="flex" justifyContent="center">
        <Pagination
          count={Math.ceil(filteredBlogs.length / itemsPerPage)}
          page={page}
          onChange={handlePageChange}
          color="primary"
        />

      </Box>
    </Box>
  );
};

export default BlogList;
