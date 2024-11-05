import React, {  useState } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent,CircularProgress } from '@mui/material';



interface PincodeEntry {
  officename: string;
  pincode: string;
  officeType: string;
  Deliverystatus: string;
  divisionname: string;
  regionname: string;
  circlename: string;
  Taluk: string;
  Districtname: string;
  statename: string;
  Telephone: string;
  "Related Suboffice": string;
  "Related Headoffice": string;
  longitude: string;
  latitude: string;
}

const PincodeSearch: React.FC = () => {
  const [pincode, setPincode] = useState<string>('');
  const [details, setDetails] = useState<PincodeEntry | null>(null);

  //const [pincodeData, setPincodeData] = useState<PincodeEntry[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  // useEffect(() => {
  //   fetch("https://jsondata-i375.onrender.com/pincodes")
  //     .then((response) => response.json())
  //     .then((data) => setPincodeData(data))
  //     .catch((error) => console.error("Error fetching JSON:", error));
  // }, []);

  // const handleSearch = () => { 
  //   setLoading(true); setTimeout(() => { 
  //     const result = pincodeData.find((entry) => entry.pincode === pincode); 
  //     setDetails(result || null); 
  //     setLoading(false); 
  //   }, 5000); // Simulate a delay for loading 
  // };
  const handleSearch = () => {
    setLoading(true);
    fetch(
      `https://jsondata-i375.onrender.com/getpincodedetailBypincode/${pincode}`
    )
      .then((response) => response.json())
      .then((data) => {
        setDetails(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching JSON:", error);
        setLoading(false);
      });
  };

  return (
    <Box p={3}>
      <Box mb={3} display="flex" justifyContent="center">
        <TextField
          label="Enter Pincode"
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
          variant="outlined"
          sx={{ marginRight: 2 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleSearch}
          disabled={loading}
        >
          {" "}
          {loading ? <CircularProgress size={24} /> : "Search"}{" "}
        </Button>
      </Box>
      {details && (
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              {details.officename}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Pincode: {details.pincode}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Office Type: {details.officeType}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Delivery Status: {details.Deliverystatus}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Division Name: {details.divisionname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Region Name: {details.regionname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Circle Name: {details.circlename}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Taluk: {details.Taluk}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              District Name: {details.Districtname}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              State Name: {details.statename}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Telephone: {details.Telephone}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Related Suboffice: {details["Related Suboffice"]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Related Headoffice: {details["Related Headoffice"]}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Longitude: {details.longitude}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Latitude: {details.latitude}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Box>
  );
};

export default PincodeSearch;
