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
        <strong>What is an IFSC? </strong> 
        <br></br>
        IFSC (Indian Financial System Code) is an alphanumeric code used to uniquely identify a specific branch of a bank in India. It is primarily used for electronic payment systems, such as Real Time Gross Settlement (RTGS), Immediate Payment Service (IMPS), and National Electronic Funds Transfer (NEFT). The code is typically 11 characters long and consists of: 
        <br></br>
        <ol>
        <li>The first four characters representing the bank's name.</li>
        <li>The fifth character is always '0' (zero), reserved for future use.</li>
        <li>The last six characters represent the specific branch of the bank.</li>
        </ol>
        <br></br>
        For example, in the IFSC code "SBIN0001234", "SBIN" represents the State Bank of India, and "001234" identifies a specific branch.
        <br></br>
        <strong>When is IFSC required?</strong>
        <br></br>
        The IFSC (Indian Financial System Code) is required in various situations related to electronic financial transactions. Here are the most common scenarios where an IFSC code is needed:
        <br></br>
        <ol>
        <li><strong>Fund Transfers via NEFT (National Electronic Funds Transfer)</strong>: When you want to transfer money from your bank account to another person&rsquo;s account through NEFT, the IFSC code of the recipient's bank branch is needed.</li>
        <li><strong>Fund Transfers via RTGS (Real Time Gross Settlement)</strong>: For high-value, real-time transactions, RTGS requires the IFSC code of the beneficiary&rsquo;s bank branch to facilitate the transfer.</li>
        <li><strong>Fund Transfers via IMPS (Immediate Payment Service)</strong>: IMPS allows instant transfers, and you need the IFSC code of the recipient's bank branch to complete the transaction.</li>
        <li><strong>UPI Transactions (Unified Payments Interface)</strong>: While UPI transactions typically do not require an IFSC code directly for person-to-person transfers, the underlying infrastructure often uses the IFSC code for routing the payments between different banks.</li>
        <li><strong>Bill Payments or EMI Payments</strong>: When making bill payments or EMI (Equated Monthly Instalment) payments through bank transfers, the IFSC code may be required to identify the bank branch.</li>
        <li><strong>Cheque Clearing</strong>: While not directly used in writing a cheque, the IFSC code is used during the clearing process to ensure that the cheque is routed to the correct bank branch.</li>
        <li><strong>Opening Bank Accounts</strong>: When you&rsquo;re opening a new account or setting up an online banking profile, you may be asked for the IFSC code of your branch, especially for linking to payment systems or for fund transfer purposes.</li>
        <li><strong>Banking Software or Apps</strong>: When setting up payments in mobile banking apps, internet banking, or any online financial platforms, the IFSC code is often requested to correctly identify the bank branch for transactions.</li>
        <li><strong>Direct Deposits (Salary or Government Subsidy)</strong>: Some systems for receiving government subsidies or salary payments electronically may require the IFSC code to route funds directly to your bank branch.</li>
        </ol>
        <br></br>
        In short, the IFSC code is essential for facilitating secure, accurate, and swift electronic transactions across various banking channels.
        <br></br>

        
      
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
