import React from "react";
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardActionArea,
} from "@mui/material";
import { Link } from "react-router-dom";
import { urlFor } from "../sanityClient.js";

const truncateWords = (text, wordLimit) => {
  if (!text) return "";
  const words = text.split(" ");
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(" ") + "...";
};

const PostCard = ({ post }) => {
  return (
    <Card
      sx={{
        borderRadius: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardActionArea component={Link} to={`/post/${post.slug.current}`}>
        <CardMedia
          component="img"
          image={urlFor(post.image).width(600).height(400).url()}
          alt={post.title}
          sx={{
            width: "100%",
            height: 200,
            objectFit: "cover",
            objectPosition: "top",
          }}
        />
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {new Date(post.publishedAt).toLocaleDateString("pt-BR")}
          </Typography>
          <Typography variant="body2" color="text.primary">
            {truncateWords(post.description || post.body[0]?.children[0]?.text || "", 20)}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions sx={{ mt: "auto", px: 2, pb: 2 }}>
        <Button
          size="small"
          variant="outlined"
          component={Link}
          to={`/post/${post.slug.current}`}
        >
          Ler post
        </Button>
      </CardActions>
    </Card>
  );
};

export default PostCard;
