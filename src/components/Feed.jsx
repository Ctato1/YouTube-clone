import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { Sidebar, Videos } from "../components";

import { fetchAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");
  const [videos, setVideos] = useState([]);
  const hamburger= true;

  useEffect(() => {
    fetchAPI(`search?part=snippet&q=${selectedCategory}`).then((data) => {
      setVideos(data?.items);
    });
  
  }, [videos,selectedCategory]);

  return (
    <Stack
      sx={{
        flexDirection: { sx: "column", md: "row" },
      }}
    >
      <Box
        sx={{
          width: { sx: "auto", md: hamburger ? "200px" : "0vw" },
          height: { sx: "auto", md: "93vh" },
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />

        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.2, color: "#fff",textAlign:'center' }}
        >
          Copyright 2023 Tato Dznelashvili
        </Typography>
      </Box>

      <Box p={3} sx={{ overflowY: "auto", height: "93vh", flex: 1}}>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={3}
          sx={{
            color: "#fff",
          }}
        >
          {selectedCategory} <span style={{ color: "#f31500" }}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
