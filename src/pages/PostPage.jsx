import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { client, urlFor } from "../sanityClient.js";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  useTheme,
  Button,
  Avatar,
  Paper,
  Stack,
  Fade,
  Divider,
} from "@mui/material";
import { PortableText } from "@portabletext/react";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Helmet } from "react-helmet";

const PostPage = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const theme = useTheme();
  const navigate = useNavigate();

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post" && slug.current == $slug][0]{
          title,
          publishedAt,
          body,
          image,
          "author": author->{
            name,
            shortbio,
            photo
          }
        }`,
        { slug }
      )
      .then(setPost);
  }, [slug]);

  if (!post) {
    return (
      <Box display="flex" justifyContent="center" mt={10}>
        <CircularProgress />
      </Box>
    );
  }

  const plainTextBody = post.body
    .map(block =>
      block.children
        ?.map(child => child.text)
        .join(" ")
    )
    .join(" ")
    .slice(0, 150)
    .concat("...");

  return (
    <>
      <Helmet>
        <title>{post.title} | Alimento Diário</title>
        <meta name="description" content={plainTextBody} />
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={plainTextBody} />
        {post.image && (
          <meta
            property="og:image"
            content={urlFor(post.image).width(1200).height(630).url()}
          />
        )}
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Fade in timeout={600}>
        <Container maxWidth="md" sx={{ mt: 6, mb: 10 }}>
          <Box mb={4}>
            <Button
              onClick={() => navigate("/")}
              startIcon={<ArrowBackIcon />}
              variant="outlined"
              sx={{
                borderRadius: "50px",
                textTransform: "none",
                fontWeight: 500,
                px: 3,
                py: 1,
                transition: "all 0.3s ease",
                "&:hover": {
                  backgroundColor: theme.palette.grey[100],
                  transform: "translateX(-2px)",
                },
              }}
            >
              Voltar ao início
            </Button>
          </Box>

          {post.image && (
            <Box
              sx={{
                width: "100%",
                height: { xs: 220, sm: 380, md: 480 },
                overflow: "hidden",
                borderRadius: 3,
                mb: 4,
              }}
            >
              <img
                src={urlFor(post.image).width(1200).height(600).url()}
                alt={post.title}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
              />
            </Box>
          )}

          <Typography variant="h3" component="h1" fontWeight={700} gutterBottom>
            {post.title}
          </Typography>

          <Box
            display="flex"
            alignItems="center"
            gap={1.5}
            color="text.secondary"
            mb={4}
            flexWrap="wrap"
          >
            <CalendarTodayIcon fontSize="small" />
            <Typography variant="body2">
              {new Date(post.publishedAt).toLocaleDateString("pt-BR", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </Typography>
            {post.author?.name && (
              <Typography variant="body2" sx={{ ml: 2 }}>
                • Por <strong>{post.author.name}</strong>
              </Typography>
            )}
          </Box>

          <Divider sx={{ mb: 4 }} />

          <Box sx={{ typography: "body1", lineHeight: 1.8 }}>
            <PortableText
              value={post.body}
              components={{
                marks: {
                  strong: ({ children }) => (
                    <strong style={{ fontWeight: 600 }}>{children}</strong>
                  ),
                },
                block: {
                  normal: ({ children }) => (
                    <Typography variant="body1" paragraph>
                      {children}
                    </Typography>
                  ),
                  blockquote: ({ children }) => (
                    <Typography
                      variant="body1"
                      sx={{
                        fontStyle: "italic",
                        borderLeft: `4px solid ${theme.palette.grey[400]}`,
                        pl: 2,
                        my: 3,
                        color: theme.palette.text.secondary,
                      }}
                    >
                      {children}
                    </Typography>
                  ),
                  h2: ({ children }) => (
                    <Typography variant="h5" mt={5} mb={2} fontWeight={600}>
                      {children}
                    </Typography>
                  ),
                  h3: ({ children }) => (
                    <Typography variant="h6" mt={4} mb={1.5} fontWeight={500}>
                      {children}
                    </Typography>
                  ),
                },
              }}
            />
          </Box>

          {post.author && (
            <Paper
              elevation={2}
              sx={{
                mt: 8,
                p: 4,
                borderRadius: 4,
                backgroundColor: theme.palette.grey[50],
              }}
            >
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={3}
                alignItems="center"
              >
                {post.author.photo && (
                  <Avatar
                    src={urlFor(post.author.photo).width(200).height(200).url()}
                    alt={post.author.name}
                    sx={{ width: 100, height: 100 }}
                  />
                )}
                <Box>
                  <Typography variant="h6" fontWeight={600} gutterBottom>
                    {post.author.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {post.author.shortbio}
                  </Typography>
                </Box>
              </Stack>
            </Paper>
          )}
        </Container>
      </Fade>
    </>
  );
};

export default PostPage;
