import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAPI } from "../utils/fetchFromAPI";

import { Box, Stack } from "@mui/material";

import ChannelCard from "./ChannelCard";
import VideoCard from "./VideoCard";

const ChannelDetail = () => {
  const { id } = useParams();

  const [channel, setChannel] = useState(null);
  const [videos, setVideo] = useState([]);

  useEffect(() => {
    fetchAPI(`channels?part="snippet&id=${id}`).then((data) => {
      setChannel(data?.items[0]);
    });
    fetchAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => {
      setVideo(data?.items);
    });
  }, [id]);

  return (
    <Box minHeight="95vh">
      <Box>
        <div className="channel_thumbnail"></div>
        <ChannelCard channelDetail={channel} marginTop="-90px" />
      </Box>
      
      <Box display="flex" p="3" pt="100px" pb="100px">
        <Box
          sx={{
            marginRight: { sm: "5vw", md: "10vw" },
          }}
        />
        <Stack
          direction="row"
          flexWrap="wrap"
          gap={1.5}
          sx={{
            justifyContent: { sm: "center", md: "start" },
          }}
        >
          {videos.map((video,index) => (
            <VideoCard video={video} key={video.id.videoId}/>
          ))}
        </Stack>
        <Box
          sx={{
            marginRight: { sm: "5vw", md: "10vw" },
          }}
        />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
