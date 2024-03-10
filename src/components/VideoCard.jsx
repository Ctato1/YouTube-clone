import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card
      sx={{
        width: { xs: "100%", sm: "358px", md: "359.98px" },
        boxShadow: "0 0 30px -25px #f1f1f1",
        borderRadius: "15px",
      }}
    >
      <Link to={videoId && `/video/${videoId}`}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url}
          loading="lazy"
          alt={snippet?.title}
          sx={{
            width: { xs: "100%", sm: "360px" },
            height: 180,
          }}
        />
      </Link>
      <CardContent
        className="youtube_shorter"
        sx={{
          backgroundColor: "#0f0f0f",
          height: "60px",
          width: { xs: "100%", sm: "100%" },
        }}
      >
        <Link to={videoId && `/video/${videoId}`}>
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            color="#fff"
            className="youtube_shorter-text"
          >
            {snippet?.title.slice(0, 150)}
          </Typography>
        </Link>

        <Link to={snippet?.channelId && `/channel/${snippet?.channelId}`}>
          <Typography variant="subtitle2" fontWeight="normal" color="#c1c1c1">
            {snippet?.channelTitle}
            <CheckCircle sx={{ fontSize: 12, color: "#c1c1c1", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
