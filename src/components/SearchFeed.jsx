import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "../components";

import { fetchAPI } from "../utils/fetchFromAPI";

import { useParams } from "react-router-dom";


const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${searchTerm}`).then((data) => {
      setVideos(data?.items);
    });
  
  }, [searchTerm]);

  return (
    <Box p={3} sx={{ overflowY: "auto", height: "93vh", flex: 1}}>
    <Typography
      variant="h4"
      fontWeight="bold"
      mb={3}
      sx={{
        color: "#fff",
      }}
    >
      {searchTerm} <span style={{ color: "#f31500" }}>videos</span>
    </Typography>
    <Videos videos={videos}/>
  </Box>
  );
};

export default SearchFeed;
