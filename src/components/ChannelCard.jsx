import { Typography, CardContent, CardMedia, Box } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const ChannelCard = ({ channelDetail, marginTop = "0px" }) => {
  return (
    <Box
      sx={{
        borderRadius: "20px",
        display: "flex",
        justifyContent: "center",
        height: "280px",
        width: { md: "359.98px", xs: "359.98px" },
        margin: "auto",
        marginTop: { marginTop },
      }}
    >
      <Link
        to={`/channel/${channelDetail?.id?.channelId || channelDetail?.id}`}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            textAlign: "center",
            color: "#fff",
          }}
        >
          <CardMedia
            image={channelDetail?.snippet?.thumbnails?.high?.url}
            alt={channelDetail?.snippet?.title}
            sx={{
              width: 170,
              borderRadius: "50%",
              height: 170,
              mb: 3,
              border: "3px solid #c1c1c1",
            }}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}
            {parseInt(channelDetail?.statistics?.subscriberCount) >= 100000 && (
              <CheckCircle sx={{ fontSize: 15, color: "#c1c1c1", ml: "2px" }} />
            )}
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(
                channelDetail?.statistics?.subscriberCount
              ).toLocaleString()}{" "}
              Subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
