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
          <p><strong>What is an IFSC?</strong></p>

        
          <ol>
          <li>The first four characters representing the bank's name.</li>
          <li>The fifth character is always '0' (zero), reserved for future use.</li>
          <li>The last six characters represent the specific branch of the bank.</li>
          </ol>
          <p>For example, in the IFSC code "SBIN0001234", "SBIN" represents the State Bank of India, and "001234" identifies a specific branch.</p>
          <p>&nbsp;</p>
          
          <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri","sans-serif";margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>When is IFSC required?</span></strong></p>
          <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri","sans-serif";margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;text-align:justify;'>The IFSC (Indian Financial System Code) is required in various situations related to electronic financial transactions. Here are the most common scenarios where an IFSC code is needed:</p>
          <ol style="list-style-type: decimal;margin-left: 26px;">
              <li><strong>Fund Transfers via NEFT (National Electronic Funds Transfer)</strong>: When you want to transfer money from your bank account to another person&rsquo;s account through NEFT, the IFSC code of the recipient&apos;s bank branch is needed.</li>
              <li><strong>Fund Transfers via RTGS (Real Time Gross Settlement)</strong>: For high-value, real-time transactions, RTGS requires the IFSC code of the beneficiary&rsquo;s bank branch to facilitate the transfer.</li>
              <li><strong>Fund Transfers via IMPS (Immediate Payment Service)</strong>: IMPS allows instant transfers, and you need the IFSC code of the recipient&apos;s bank branch to complete the transaction.</li>
              <li><strong>UPI Transactions (Unified Payments Interface)</strong>: While UPI transactions typically do not require an IFSC code directly for person-to-person transfers, the underlying infrastructure often uses the IFSC code for routing the payments between different banks.</li>
              <li><strong>Bill Payments or EMI Payments</strong>: When making bill payments or EMI (Equated Monthly Instalment) payments through bank transfers, the IFSC code may be required to identify the bank branch.</li>
              <li><strong>Cheque Clearing</strong>: While not directly used in writing a cheque, the IFSC code is used during the clearing process to ensure that the cheque is routed to the correct bank branch.</li>
              <li><strong>Opening Bank Accounts</strong>: When you&rsquo;re opening a new account or setting up an online banking profile, you may be asked for the IFSC code of your branch, especially for linking to payment systems or for fund transfer purposes.</li>
              <li><strong>Banking Software or Apps</strong>: When setting up payments in mobile banking apps, internet banking, or any online financial platforms, the IFSC code is often requested to correctly identify the bank branch for transactions.</li>
              <li><strong>Direct Deposits (Salary or Government Subsidy)</strong>: Some systems for receiving government subsidies or salary payments electronically may require the IFSC code to route funds directly to your bank branch.</li>
          </ol>
          <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri","sans-serif";margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;text-align:justify;'>In short, the IFSC code is essential for facilitating secure, accurate, and swift electronic transactions across various banking channels.</p>
          <p>&nbsp;</p>
          
          <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri","sans-serif";margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>What is the importance of IFSC?</span></strong></p>
              <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri","sans-serif";margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;text-align:justify;'>The IFSC (Indian Financial System Code) is crucial for several reasons:</p>
              <ol style="list-style-type: decimal;margin-left: 26px;">
                  <li><strong>Facilitates Electronic Transactions</strong>: IFSC codes are essential for conducting secure electronic financial transactions like NEFT (National Electronic Funds Transfer), RTGS (Real Time Gross Settlement), IMPS (Immediate Payment Service), and UPI (Unified Payments Interface). They ensure accurate routing of funds between banks and branches.</li>
                  <li><strong>Unique Identification</strong>: Each IFSC code uniquely identifies a specific branch of a bank, which prevents confusion and errors in fund transfers. It ensures that money reaches the intended destination.</li>
                  <li><strong>Standardized Format</strong>: IFSC codes provide a standardized way of identifying branches across all banks in India. This simplifies the process for users and banks, ensuring smooth financial operations across different institutions.</li>
                  <li><strong>Supports Inter-Bank Transactions</strong>: IFSC codes are crucial for enabling transactions between different banks, ensuring seamless interbank fund transfers, both within the country and across various banking platforms.</li>
                  <li><strong>Compliance with Regulatory Standards</strong>: For banks, using IFSC codes ensures compliance with regulations set by the Reserve Bank of India (RBI) and other financial regulatory bodies, streamlining operations.</li>
                  <li><strong>Prevents Fraud</strong>: By using a specific IFSC for each branch, the system helps mitigate the risks of fraudulent transactions, ensuring funds are directed only to verified accounts and branches.</li>
                  <li><strong>Promotes Financial Inclusion</strong>: IFSC codes make it easier for individuals to transfer funds, especially for those who may not have access to traditional banking services. They enable secure, fast, and low-cost electronic transactions.</li>
              </ol>
              <p style='margin-right:0cm;margin-left:0cm;font-size:16px;font-family:"Calibri","sans-serif";margin-top:0cm;margin-bottom:8.0pt;font-size:11.0pt;text-align:justify;'>In summary, the IFSC code plays a vital role in maintaining the integrity, security, and efficiency of the Indian banking system by ensuring the correct routing of transactions.</p>
              <p>&nbsp;</p>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Is there any alternative of IFSC?</span></strong></p>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Yes, there are alternative methods to the IFSC code for conducting electronic transactions in India. Some of the main alternatives are:</span></p>
              <ol start="1" type="1" style="margin-bottom:0cm;">
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>UPI (Unified Payments Interface)</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>UPI allows for seamless money transfers between different banks using mobile apps. It does not require the use of the IFSC code for transactions. Instead, UPI uses identifiers such as the Virtual Payment Address (VPA) or the recipient&apos;s mobile number, making it a more user-friendly and quick method for peer-to-peer and merchant transactions.</span></li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Aadhaar-based Payments (Aadhaar Pay)</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>With Aadhaar Pay, payments can be made using the Aadhaar number linked to a bank account, without the need for an IFSC code. The Aadhaar number acts as an identifier, and biometric authentication can be used to authorize the transaction.</span></li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Mobile Number-based Transfers (IMPS)</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>While IMPS does use the IFSC code for routing, there are alternatives where money can be transferred using just the mobile number of the recipient, particularly with services that are linked with the recipient&apos;s mobile number and bank account (e.g., BHIM app).</span></li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Bank Account Number</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>In some cases, particularly in the context of NEFT or RTGS transfers, the recipient&rsquo;s account number can be sufficient for fund transfer if the sender knows the branch code or is transferring funds within the same bank. However, this is less common as most systems require an IFSC code for precise routing.</span></li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Cheque or Demand Draft</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Though not electronic, physical methods like cheques and demand drafts are alternatives to digital transactions, where IFSC codes are not needed when dealing with non-electronic payments.</span></li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>IMPS using MMID</span></strong><span style='font-size:16px;font-family:     "Times New Roman","serif";'>:</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>IMPS transactions can also be carried out using MMID (Mobile Money Identifier) and the recipient&apos;s mobile number, which removes the need for the IFSC code, especially in peer-to-peer or bank-to-bank transfers.</span></li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>SWIFT Code for International Transfers</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>For international money transfers, a SWIFT (Society for Worldwide Interbank Financial Telecommunication) code is often used instead of an IFSC code. This code is used to identify a specific bank or financial institution globally.</span></li>
                      </ul>
                  </li>
              </ol>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>In summary, while the IFSC code is crucial for domestic bank transfers within India, alternatives such as UPI, Aadhaar-based payments, MMID, and mobile number-based transactions offer more convenient and sometimes more direct options for transferring money. However, these alternatives often rely on other types of identifiers (such as mobile numbers, Aadhaar, or MMID) and may still indirectly use the IFSC code for routing.</span></p>
              <p>&nbsp;</p>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Can we find any bank in India using IFSC?</span></strong></p>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Yes, you can find a bank and its branch details in India using the IFSC (Indian Financial System Code). The IFSC code is unique to each bank branch and can help you identify the bank and its specific branch. Here&apos;s how you can do it:</span></p>
              <ol start="1" type="1" style="margin-bottom:0cm;">
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Structure of IFSC Code</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>The IFSC code is an 11-character alphanumeric code, which can be broken down as follows:&nbsp;</span>
                              <ul type="square" style="margin-bottom:0cm;">
                                  <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>The first four characters represent the <strong>bank</strong> (e.g., &quot;SBIN&quot; for State Bank of India).</span></li>
                                  <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>The fifth character is always <strong>0</strong> (zero), reserved for future use.</span></li>
                                  <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>The last six characters represent the <strong>branch</strong> (a unique identifier for the specific branch).</span></li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>How to Find Bank Information Using IFSC</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>By knowing the first four characters of the IFSC code, you can identify the bank name.</span></li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>The last six characters can help pinpoint the branch of that bank.</span></li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>You can find the location of the branch by using online IFSC code lookup tools provided by the <strong>Reserve Bank of India (RBI)</strong> or individual bank websites.</span></li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Using Online IFSC Lookup</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Many websites offer <strong>IFSC code lookup tools</strong> where you can input the IFSC code to get detailed information, such as:&nbsp;</span>
                              <ul type="square" style="margin-bottom:0cm;">
                                  <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Bank name</span></strong></li>
                                  <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Branch name</span></strong></li>
                                  <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Branch address</span></strong></li>
                                  <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>City and state</span></strong></li>
                              </ul>
                          </li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Popular websites for IFSC lookup include:&nbsp;</span>
                              <ul type="square" style="margin-bottom:0cm;">
                                  <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>RBI&rsquo;s official website</span></strong></li>
                                  <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Bank websites</span></strong></li>
                                  <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Third-party sites like IFSC Code Finder, BankBazaar, etc.</span></strong></li>
                              </ul>
                          </li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Examples</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>SBIN0001234</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>: From the code, we know it&apos;s State Bank of India (SBIN), and the branch identifier is &quot;001234&quot;.</span></li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";line-height: normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>HDFC0001234</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>: This would be HDFC Bank, with branch identifier &quot;001234&quot;.</span></li>
                      </ul>
                  </li>
              </ol>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>In conclusion, you can easily identify the bank and its branch using the IFSC code with the help of online tools or the structure of the IFSC itself.</span></p>
              <p>&nbsp;</p>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>What is the difference between IFSC and MICR?</span></strong></p>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>IFSC (Indian Financial System Code)</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>&nbsp;and <strong>MICR (Magnetic Ink Character Recognition)</strong> are both codes used in the banking system, but they serve different purposes and are used in different types of transactions. Here&apos;s a breakdown of the differences:</span></p>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:18px;font-family:"Times New Roman","serif";'>1. Purpose and Use:</span></strong></p>
              <ul type="disc" style="margin-bottom:0cm;">
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>IFSC (Indian Financial System Code)</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:&nbsp;</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Purpose</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>: The IFSC code is used for <strong>electronic fund transfers</strong> in India, such as NEFT (National Electronic Funds Transfer), RTGS (Real Time Gross Settlement), IMPS (Immediate Payment Service), and UPI (Unified Payments Interface).</span></li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Use</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>: It helps route transactions to the correct bank branch during electronic transfers and online banking.</span></li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>MICR (Magnetic Ink Character Recognition)</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:&nbsp;</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Purpose</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>: The MICR code is used for <strong>processing cheques</strong> and <strong>automating cheque clearance</strong>.</span></li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Use</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>: MICR helps identify the bank, branch, and account details from the printed information on the cheque to ensure its swift and secure processing.</span></li>
                      </ul>
                  </li>
              </ul>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:18px;font-family:"Times New Roman","serif";'>2. Structure:</span></strong></p>
              <ul type="disc" style="margin-bottom:0cm;">
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>IFSC</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:&nbsp;</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>It is an 11-character alphanumeric code.</span></li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Format: First 4 characters represent the bank code, followed by a &apos;0&apos; (zero), and then the last 6 characters represent the branch code.</span></li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Example: <strong>SBIN0001234</strong> (SBI bank, branch 1234).</span></li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>MICR</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:&nbsp;</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>It is a 9-digit numeric code.</span></li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Format: The MICR code is typically printed on the bottom of a cheque and contains the following:&nbsp;</span>
                              <ul type="square" style="margin-bottom:0cm;">
                                  <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>The first 3 digits represent the <strong>city code</strong>.</span></li>
                                  <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>The next 3 digits represent the <strong>bank code</strong>.</span></li>
                                  <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>The last 3 digits represent the <strong>branch code</strong>.</span></li>
                              </ul>
                          </li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Example: <strong>123456789</strong> (where the code specifies city, bank, and branch).</span></li>
                      </ul>
                  </li>
              </ul>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:18px;font-family:"Times New Roman","serif";'>3. Medium of Use:</span></strong></p>
              <ul type="disc" style="margin-bottom:0cm;">
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>IFSC</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:&nbsp;</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Used for <strong>digital transactions</strong> such as online fund transfers, mobile banking, and internet banking.</span></li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Works in electronic systems and doesn&apos;t require physical presentation of documents.</span></li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>MICR</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:&nbsp;</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Used for <strong>physical cheque processing</strong>. It&rsquo;s read by machines to automate the clearing and settlement of cheques in banks.</span></li>
                      </ul>
                  </li>
              </ul>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:18px;font-family:"Times New Roman","serif";'>4. Technology:</span></strong></p>
              <ul type="disc" style="margin-bottom:0cm;">
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>IFSC</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:&nbsp;</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>It is an alphanumeric code used in modern banking and electronic transactions.</span></li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>It plays a critical role in digital banking systems.</span></li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>MICR</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:&nbsp;</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>It uses <strong>magnetic ink</strong> to print the characters on paper, which makes it readable by magnetic recognition machines.</span></li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>MICR is mainly associated with traditional banking methods, particularly cheque processing.</span></li>
                      </ul>
                  </li>
              </ul>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:18px;font-family:"Times New Roman","serif";'>5. Security:</span></strong></p>
              <ul type="disc" style="margin-bottom:0cm;">
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>IFSC</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:&nbsp;</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>It&apos;s mainly used for electronic transfers and provides security by ensuring funds are routed to the correct bank branch and account.</span></li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>MICR</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:&nbsp;</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>The use of magnetic ink for printing helps prevent tampering with cheque details, adding a layer of security to physical cheque transactions.</span></li>
                      </ul>
                  </li>
              </ul>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:18px;font-family:"Times New Roman","serif";'>6. Applications:</span></strong></p>
              <ul type="disc" style="margin-bottom:0cm;">
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>IFSC</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:&nbsp;</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Used for fund transfers like NEFT, RTGS, IMPS, UPI, etc.</span></li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Used when setting up online payments or linking bank accounts for electronic transactions.</span></li>
                      </ul>
                  </li>
                  <li style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>MICR</span></strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>:&nbsp;</span>
                      <ul type="circle" style="margin-bottom:0cm;">
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Used to identify and process <strong>cheques</strong> during clearing.</span></li>
                          <li style='margin-top: 0cm;margin-right: 0cm;margin-bottom: 8pt;font-size:15px;font-family: Calibri, "sans-serif";text-align: justify;line-height: normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Part of the physical cheque processing infrastructure in banks.</span></li>
                      </ul>
                  </li>
              </ul>
              <p>&nbsp;</p>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:18px;font-family:"Times New Roman","serif";'>Summary of Key Differences:</span></strong></p>
              <table style="border: none; width: 100%;">
                  <thead>
                      <tr>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Feature</span></strong></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>IFSC</span></strong></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>MICR</span></strong></p>
                          </td>
                      </tr>
                  </thead>
                  <tbody>
                      <tr>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Full Form</span></strong></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Indian Financial System Code</span></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Magnetic Ink Character Recognition</span></p>
                          </td>
                      </tr>
                      <tr>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Length</span></strong></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>11 characters (alphanumeric)</span></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>9 digits (numeric)</span></p>
                          </td>
                      </tr>
                      <tr>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Use</span></strong></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Electronic fund transfers (NEFT, RTGS, IMPS, UPI)</span></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Processing and clearing of cheques</span></p>
                          </td>
                      </tr>
                      <tr>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Structure</span></strong></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Bank code + Branch code</span></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>City code + Bank code + Branch code</span></p>
                          </td>
                      </tr>
                      <tr>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Technology</span></strong></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Digital (used in online systems)</span></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Magnetic ink (used in cheque processing)</span></p>
                          </td>
                      </tr>
                      <tr>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Security</span></strong></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Ensures correct routing in electronic transfers</span></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Ensures tamper-proof cheque processing</span></p>
                          </td>
                      </tr>
                      <tr>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><strong><span style='font-size:16px;font-family:"Times New Roman","serif";'>Medium</span></strong></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Electronic (no physical document needed)</span></p>
                          </td>
                          <td style="padding:.75pt .75pt .75pt .75pt;">
                              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:  justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>Physical (requires cheques to be processed)</span></p>
                          </td>
                      </tr>
                  </tbody>
              </table>
              <p>&nbsp;</p>
              <p style='margin-top:0cm;margin-right:0cm;margin-bottom:8.0pt;margin-left:0cm;font-size:11.0pt;font-family:"Calibri","sans-serif";text-align:justify;line-height:normal;'><span style='font-size:16px;font-family:"Times New Roman","serif";'>In conclusion, <strong>IFSC is primarily for electronic transactions, while MICR is used in physical cheque processing,</strong> both essential for different types of banking operations.</span></p>
                   
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
