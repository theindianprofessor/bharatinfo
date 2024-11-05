import React from 'react'
import Layout from '../../props/layout/layout'
import { Box, Typography } from '@mui/material'
import BlogList from './blog-list'

const Blog: React.FC = () => {
  return (
    <Layout>
    {/* Breadcrumbs */}
    <Box sx={{borderRadius: 2,borderColor:"#4caf50"}}>
      <Box py={0} px={4} sx={{backgroundColor: "#fff",
                              borderRadius: 2,
                              borderBottomLeftRadius:0,
                              borderBottomRightRadius:0,
                              borderColor:"#cddc39"}}>
          <Box width="100%">
            <Box width="100%">
              <Typography variant="h5" component="h1" my={1} fontWeight={400} sx={{color:'#2BBBAD'}}>
                Blogs
              </Typography>
            </Box>
          </Box>
      </Box>
     {/* widgets */}
    <Box py={0} px={3} sx={{backgroundColor: ""}}>
      <Box width="100%">
             <BlogList/>
      </Box>
    </Box>
    <Box py={20} px={3} sx={{backgroundColor: ""}}>
      <Box width="100%">

      </Box>
    </Box>
    
  </Box>
</Layout>
  )
}

export default Blog