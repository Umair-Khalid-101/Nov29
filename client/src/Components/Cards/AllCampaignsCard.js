import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import { Button, Checkbox, Grid } from "@mui/material";
import Favorite from "@mui/icons-material/Favorite";
import FavButton from "../Buttons/FavButton";
import { useNavigate } from "react-router-dom";

export default function AllCampaignsCard({ posts }) {
  const navigate = useNavigate();
  return (
    <Card sx={{ maxWidth: 340 }}>
      <CardHeader
        avatar={<Avatar src={posts.posterPic} />}
        title={posts.title}
        subheader={posts.posterName}
      />
      <CardMedia
        component="img"
        height="194"
        image={posts.picture}
        alt="Paella dish"
      />
      <CardContent>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Target: {posts.campaignGoal}
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body2" color="text.secondary">
              Raised:
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
      <CardActions disableSpacing>
        <div className="row">
          <div className="col-6">
            <FavButton post={posts} />
            <IconButton aria-label="share">
              <ShareIcon />
            </IconButton>
          </div>
          <div className="col-6 mt-2">
            <Button
              variant="contained"
              sx={{
                marginLeft: "2rem",
                "&.MuiButton-contained": {
                  backgroundColor: "#242F9B",
                },
                borderRadius: "50px",
                width: "110%",
              }}
              onClick={() => navigate(`/CampaignDetails/${posts._id}`)}
            >
              Read More
            </Button>
          </div>
        </div>
      </CardActions>
    </Card>
  );
}
