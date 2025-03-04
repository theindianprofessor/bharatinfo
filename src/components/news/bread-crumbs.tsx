import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Breadcrumbs as MUIBreadcrumbs, Link, Typography } from '@mui/material';

interface BreadcrumbsProps {
  current: string;
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ current }) => {
  return (
    <MUIBreadcrumbs aria-label="breadcrumb">
      <Link component={RouterLink} to="/news" color="inherit">
        NEWS
      </Link>
      <Typography color="textPrimary">{current}</Typography>
    </MUIBreadcrumbs>
  );
};

export default Breadcrumbs;
