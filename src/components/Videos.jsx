import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./";

const Videos = ({ videos ,directions }) => {

  if (!videos?.length) return "Loading...";

  return (
    <Stack
      direction={directions || "row"}
      flexWrap="wrap"
      gap={1.5}
      sx={{
        justifyContent:{sm:'center', md:'start'},
      }}
    >
      {videos.map((video, id) => (
        <Box key={id}>
          {video.id.videoId && <VideoCard video={video} />}
          {video.id.channelId && <ChannelCard channelDetail={video} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
