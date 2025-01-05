import React, { useState } from 'react'
import Layout from '../../props/layout/layout';
import { Box,  Grid,  Paper,  TextField,  Typography } from '@mui/material';
import useFetchIfsc from '../../hooks/fetch';

const Ifsc: React.FC = () => {

  const [ifscCode, setIfscCode] = useState<string>('');
  const [isValid, setIsValid] = useState<boolean>(true);
  const { data, loading, error } = useFetchIfsc(ifscCode);


  /// Validation method
  const validateIfscCode = (ifscCodeDetail: string): boolean => {
    const regex = /^[A-Z]{4}0[A-Z0-9]{6}$/;
    return regex.test(ifscCodeDetail);
  };

  // Handle change and validation
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setIfscCode(value);
    setIsValid(validateIfscCode(value));
  };

  
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
                  Ifsc
                </Typography>
              </Box>
            </Box>
        </Box>
       {/* widgets */}
       {/* //orange */}
      <Box  px={3} sx={{backgroundColor: ""}}>
        <Box width="100%">
        <Grid container spacing={3} m={1}>
      <Grid item xs={12} md={6} lg={6}>
        <TextField
          fullWidth
          label="Enter the IFSC Code"
          id="fullWidth"
          value={ifscCode}
          onChange={handleChange}
          error={!isValid}
          helperText={!isValid ? "Invalid IFSC Code" : ""}
        />
      </Grid>
      <Grid item xs={2} md={2} lg={2}>
        {/* <Button variant="contained" fullWidth onClick={handleSearch}>
          Search
        </Button> */}
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}
        {data && (
          <Paper elevation={3} style={{ padding: '16px', wordWrap: 'break-word' }}>
            <Typography m={1}><b>Bank:</b> {data.BANK}</Typography>
            <Typography m={1}><b>Branch:</b> {data.BRANCH}</Typography>
            <Typography m={1}><b>Address:</b> {data.ADDRESS}</Typography>
            <Typography m={1}><b>City:</b> {data.CITY}</Typography>
            <Typography m={1}><b>District:</b> {data.DISTRICT}</Typography>
            <Typography m={1}><b>State: </b>{data.STATE}</Typography>
          </Paper>
        )}
      </Grid>
    </Grid>
        </Box>
      </Box>
      {/* grey */  
      <p>
      <strong>What is an IFSC?</strong>
  /*    IFSC (Indian Financial System Code) is an alphanumeric code used to uniquely identify a specific branch of a bank in India. It is primarily used for electronic payment systems, such as Real Time Gross Settlement (RTGS), Immediate Payment Service (IMPS), and National Electronic Funds Transfer (NEFT). The code is typically 11 characters long and consists of:</br>
      <ol>
      <li>The first four characters representing the bank's name.</li>
      <li>The fifth character is always '0' (zero), reserved for future use.</li>
      <li>The last six characters represent the specific branch of the bank.</li>
      </ol>
      </br> For example, in the IFSC code "SBIN0001234", "SBIN" represents the State Bank of India, and "001234" identifies a specific branch.
      */
      </p>

          





        
      }
      <Box py={20} px={3} sx={{backgroundColor: ""}}>
        <Box width="100%">

        </Box>
      </Box>
      
    </Box>
  </Layout>
  );
};

export default Ifsc
