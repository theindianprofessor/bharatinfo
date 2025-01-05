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
            
             For example, in the IFSC code "SBIN0001234", "SBIN" represents the State Bank of India, and "001234" identifies a specific branch.
            <br></br>
            <br></br>
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
           
            In short, the IFSC code is essential for facilitating secure, accurate, and swift electronic transactions across various banking channels.
            <br></br>
            <br></br>
            <strong>What is the importance of IFSC?</strong>
            <br></br>
            The IFSC (Indian Financial System Code) is crucial for several reasons:
            <ol>
                  
            <li><strong>Facilitates Electronic Transactions</strong>: IFSC codes are essential for conducting secure electronic financial transactions like NEFT (National Electronic Funds Transfer), RTGS (Real Time Gross Settlement), IMPS (Immediate Payment Service), and UPI (Unified Payments Interface). They ensure accurate routing of funds between banks and branches.</li>
            <li><strong>Unique Identification</strong>: Each IFSC code uniquely identifies a specific branch of a bank, which prevents confusion and errors in fund transfers. It ensures that money reaches the intended destination.</li>
            <li><strong>Standardized Format</strong>: IFSC codes provide a standardized way of identifying branches across all banks in India. This simplifies the process for users and banks, ensuring smooth financial operations across different institutions.</li>
            <li><strong>Supports Inter-Bank Transactions</strong>: IFSC codes are crucial for enabling transactions between different banks, ensuring seamless interbank fund transfers, both within the country and across various banking platforms.</li>
            <li><strong>Compliance with Regulatory Standards</strong>: For banks, using IFSC codes ensures compliance with regulations set by the Reserve Bank of India (RBI) and other financial regulatory bodies, streamlining operations.</li>
            <li><strong>Prevents Fraud</strong>: By using a specific IFSC for each branch, the system helps mitigate the risks of fraudulent transactions, ensuring funds are directed only to verified accounts and branches.</li>
            <li><strong>Promotes Financial Inclusion</strong>: IFSC codes make it easier for individuals to transfer funds, especially for those who may not have access to traditional banking services. They enable secure, fast, and low-cost electronic transactions.</li>
            </ol>
            In summary, the IFSC code plays a vital role in maintaining the integrity, security, and efficiency of the Indian banking system by ensuring the correct routing of transactions.
            <br></br>
            <br></br>
            <strong>Is there any alternative of IFSC?</strong>
            <br></br>
            Yes, there are alternative methods to the IFSC code for conducting electronic transactions in India. Some of the main alternatives are:
            <ol>
            <li><strong>UPI (Unified Payments Interface)</strong>:</li>
            <ul>
            <li>UPI allows for seamless money transfers between different banks using mobile apps. It does not require the use of the IFSC code for transactions. Instead, UPI uses identifiers such as the Virtual Payment Address (VPA) or the recipient's mobile number, making it a more user-friendly and quick method for peer-to-peer and merchant transactions.</li>
            </ul>
            <li><strong>Aadhaar-based Payments (Aadhaar Pay)</strong>:</li>
            <ul>
            <li>With Aadhaar Pay, payments can be made using the Aadhaar number linked to a bank account, without the need for an IFSC code. The Aadhaar number acts as an identifier, and biometric authentication can be used to authorize the transaction.</li>
            </ul>
            <li><strong>Mobile Number-based Transfers (IMPS)</strong>:</li>
            <ul>
            <li>While IMPS does use the IFSC code for routing, there are alternatives where money can be transferred using just the mobile number of the recipient, particularly with services that are linked with the recipient's mobile number and bank account (e.g., BHIM app).</li>
            </ul>
            <li><strong>Bank Account Number</strong>:</li>
            <ul>
            <li>In some cases, particularly in the context of NEFT or RTGS transfers, the recipient&rsquo;s account number can be sufficient for fund transfer if the sender knows the branch code or is transferring funds within the same bank. However, this is less common as most systems require an IFSC code for precise routing.</li>
            </ul>
            <li><strong>Cheque or Demand Draft</strong>:</li>
            <ul>
            <li>Though not electronic, physical methods like cheques and demand drafts are alternatives to digital transactions, where IFSC codes are not needed when dealing with non-electronic payments.</li>
            </ul>
            <li><strong>IMPS using MMID</strong>:</li>
            <ul>
            <li>IMPS transactions can also be carried out using MMID (Mobile Money Identifier) and the recipient's mobile number, which removes the need for the IFSC code, especially in peer-to-peer or bank-to-bank transfers.</li>
            </ul>
            <li><strong>SWIFT Code for International Transfers</strong>:</li>
            <ul>
            <li>For international money transfers, a SWIFT (Society for Worldwide Interbank Financial Telecommunication) code is often used instead of an IFSC code. This code is used to identify a specific bank or financial institution globally.</li>
            </ul>
            </ol>
            In summary, while the IFSC code is crucial for domestic bank transfers within India, alternatives such as UPI, Aadhaar-based payments, MMID, and mobile number-based transactions offer more convenient and sometimes more direct options for transferring money. However, these alternatives often rely on other types of identifiers (such as mobile numbers, Aadhaar, or MMID) and may still indirectly use the IFSC code for routing.
            <br></br>
            <br></br>
            <strong>Can we find any bank in India using IFSC?</strong>
            <br></br>
            Yes, you can find a bank and its branch details in India using the IFSC (Indian Financial System Code). The IFSC code is unique to each bank branch and can help you identify the bank and its specific branch. Here's how you can do it:
            <ol>
            <li><strong>Structure of IFSC Code</strong>:</li>
            <ul>
            <li>The IFSC code is an 11-character alphanumeric code, which can be broken down as follows:</li>
            <ul>
            <li>The first four characters represent the <strong>bank</strong> (e.g., "SBIN" for State Bank of India).</li>
            <li>The fifth character is always <strong>0</strong> (zero), reserved for future use.</li>
            <li>The last six characters represent the <strong>branch</strong> (a unique identifier for the specific branch).</li>
            </ul>
            </ul>
            <li><strong>How to Find Bank Information Using IFSC</strong>:</li>
            <ul>
            <li>By knowing the first four characters of the IFSC code, you can identify the bank name.</li>
            <li>The last six characters can help pinpoint the branch of that bank.</li>
            <li>You can find the location of the branch by using online IFSC code lookup tools provided by the <strong>Reserve Bank of India (RBI)</strong> or individual bank websites.</li>
            </ul>
            <li><strong>Using Online IFSC Lookup</strong>:</li>
            <ul>
            <li>Many websites offer <strong>IFSC code lookup tools</strong> where you can input the IFSC code to get detailed information, such as:</li>
            <ul>
            <li><strong>Bank name</strong></li>
            <li><strong>Branch name</strong></li>
            <li><strong>Branch address</strong></li>
            <li><strong>City and state</strong></li>
            </ul>
            <li>Popular websites for IFSC lookup include:</li>
            <ul>
            <li><strong>RBI&rsquo;s official website</strong></li>
            <li><strong>Bank websites</strong></li>
            <li><strong>Third-party sites like IFSC Code Finder, BankBazaar, etc.</strong></li>
            </ul>
            </ul>
            <li><strong>Examples</strong>:</li>
            <ul>
            <li><strong>SBIN0001234</strong>: From the code, we know it's State Bank of India (SBIN), and the branch identifier is "001234".</li>
            <li><strong>HDFC0001234</strong>: This would be HDFC Bank, with branch identifier "001234".</li>
            </ul>
            </ol>
            In conclusion, you can easily identify the bank and its branch using the IFSC code with the help of online tools or the structure of the IFSC itself.
            <br></br>
            <br></br>
            <br></br>
            <strong>What is the difference between IFSC and MICR?</strong>
            <br></br>
            <strong>IFSC (Indian Financial System Code)</strong> and <strong>MICR (Magnetic Ink Character Recognition)</strong> are both codes used in the banking system, but they serve different purposes and are used in different types of transactions. Here's a breakdown of the differences:
            <br></br>
            <br></br>
            <strong>(1) Purpose and Use:</strong>
            <br></br>
            <ul>
            <li><strong>IFSC (Indian Financial System Code)</strong>:</li>
            <ul>
            <li><strong>Purpose</strong>: The IFSC code is used for <strong>electronic fund transfers</strong> in India, such as NEFT (National Electronic Funds Transfer), RTGS (Real Time Gross Settlement), IMPS (Immediate Payment Service), and UPI (Unified Payments Interface).</li>
            <li><strong>Use</strong>: It helps route transactions to the correct bank branch during electronic transfers and online banking.</li>
            </ul>
            <li><strong>MICR (Magnetic Ink Character Recognition)</strong>:</li>
            <ul>
            <li><strong>Purpose</strong>: The MICR code is used for <strong>processing cheques</strong> and <strong>automating cheque clearance</strong>.</li>
            <li><strong>Use</strong>: MICR helps identify the bank, branch, and account details from the printed information on the cheque to ensure its swift and secure processing.</li>
            </ul>
            </ul>
            <br></br>
            <strong>(2) Structure:</strong>
            <br></br>
            <ul>
            <li><strong>IFSC</strong>:</li>
            <ul>
            <li>It is an 11-character alphanumeric code.</li>
            <li>Format: First 4 characters represent the bank code, followed by a '0' (zero), and then the last 6 characters represent the branch code.</li>
            <li>Example: <strong>SBIN0001234</strong> (SBI bank, branch 1234).</li>
            </ul>
            <li><strong>MICR</strong>:</li>
            <ul>
            <li>It is a 9-digit numeric code.</li>
            <li>Format: The MICR code is typically printed on the bottom of a cheque and contains the following:</li>
            <ul>
            <li>The first 3 digits represent the <strong>city code</strong>.</li>
            <li>The next 3 digits represent the <strong>bank code</strong>.</li>
            <li>The last 3 digits represent the <strong>branch code</strong>.</li>
            </ul>
            <li>Example: <strong>123456789</strong> (where the code specifies city, bank, and branch).</li>
            </ul>
            </ul>
            <br></br>
            <strong>(3) Medium of Use:</strong>
            <br></br>
            <ul>
            <li><strong>IFSC</strong>:</li>
            <ul>
            <li>Used for <strong>digital transactions</strong> such as online fund transfers, mobile banking, and internet banking.</li>
            <li>Works in electronic systems and doesn't require physical presentation of documents.</li>
            </ul>
            <li><strong>MICR</strong>:</li>
            <ul>
            <li>Used for <strong>physical cheque processing</strong>. It&rsquo;s read by machines to automate the clearing and settlement of cheques in banks.</li>
            </ul>
            </ul>
            <br></br>
            <strong> (4) Technology:</strong>
            <br></br>
            <ul>
            <li><strong>IFSC</strong>:</li>
            <ul>
            <li>It is an alphanumeric code used in modern banking and electronic transactions.</li>
            <li>It plays a critical role in digital banking systems.</li>
            </ul>
            <li><strong>MICR</strong>:</li>
            <ul>
            <li>It uses <strong>magnetic ink</strong> to print the characters on paper, which makes it readable by magnetic recognition machines.</li>
            <li>MICR is mainly associated with traditional banking methods, particularly cheque processing.</li>
            </ul>
            </ul>
            <br></br>
            <strong>(5) Security:</strong>
            <br></br>
            <ul>
            <li><strong>IFSC</strong>:</li>
            <ul>
            <li>It's mainly used for electronic transfers and provides security by ensuring funds are routed to the correct bank branch and account.</li>
            </ul>
            <li><strong>MICR</strong>:</li>
            <ul>
            <li>The use of magnetic ink for printing helps prevent tampering with cheque details, adding a layer of security to physical cheque transactions.</li>
            </ul>
            </ul>
            <br></br>
            <strong>(6) Applications:</strong>
            <br></br>
            <ul>
            <li><strong>IFSC</strong>:</li>
            <ul>
            <li>Used for fund transfers like NEFT, RTGS, IMPS, UPI, etc.</li>
            <li>Used when setting up online payments or linking bank accounts for electronic transactions.</li>
            </ul>
            <li><strong>MICR</strong>:</li>
            <ul>
            <li>Used to identify and process <strong>cheques</strong> during clearing.</li>
            <li>Part of the physical cheque processing infrastructure in banks.</li>
            </ul>
            </ul>
    
            <br></br>
            <strong>Summary of Key Differences:</strong>
            <br></br>
            <table>
            <tbody>
            <tr>
            <td>
            <strong>Feature</strong>
            </td>
            <td>
            <strong>IFSC</strong>
            </td>
            <td>
            <strong>MICR</strong>
            </td>
            </tr>
            <tr>
            <td>
            <strong>Full Form</strong>
            </td>
            <td>
            Indian Financial System Code
            </td>
            <td>
            Magnetic Ink Character Recognition
            </td>
            </tr>
            <tr>
            <td>
            <strong>Length</strong>
            </td>
            <td>
            11 characters (alphanumeric)
            </td>
            <td>
            9 digits (numeric)
            </td>
            </tr>
            <tr>
            <td>
            <strong>Use</strong>
            </td>
            <td>
            Electronic fund transfers (NEFT, RTGS, IMPS, UPI)
            </td>
            <td>
            Processing and clearing of cheques
            </td>
            </tr>
            <tr>
            <td>
            <strong>Structure</strong>
            </td>
            <td>
            Bank code + Branch code
            </td>
            <td>
            City code + Bank code + Branch code
            </td>
            </tr>
            <tr>
            <td>
            <strong>Technology</strong>
            </td>
            <td>
            Digital (used in online systems)
            </td>
            <td>
            Magnetic ink (used in cheque processing)
            </td>
            </tr>
            <tr>
            <td>
            <strong>Security</strong>
            </td>
            <td>
            Ensures correct routing in electronic transfers
            </td>
            <td>
            Ensures tamper-proof cheque processing
            </td>
            </tr>
            <tr>
            <td>
            <strong>Medium</strong>
            </td>
            <td>
            Electronic (no physical document needed)
            </td>
            <td>
            Physical (requires cheques to be processed)
            </td>
            </tr>
            </tbody>
            </table>
            <br></br>
            
            In conclusion, <strong>IFSC is primarily for electronic transactions, while MICR is used in physical cheque processing,</strong> both essential for different types of banking operations.
            
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
