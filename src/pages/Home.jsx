import React, { useEffect, useState } from "react";
import { client } from "../sanityClient.js";
import PostCard from "../components/PostCard.jsx";
import { Grid, Typography, Box, Pagination, Stack } from "@mui/material";
import { Helmet } from "react-helmet";

const POSTS_PER_PAGE = 5;

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post"] | order(publishedAt desc) {
          _id, title, slug, body, publishedAt, image
        }`
      )
      .then((data) => setPosts(data));
  }, []);

  const countPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const postsToShow = posts.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  const handleChange = (event, value) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Alimento Diário - Devocionais e reflexões bíblicas</title>
        <meta name="description" content="Alimento diário com devocionais e reflexões bíblicas para fortalecer sua fé." />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Box sx={{ mb: 4, textAlign: "center" }}>
        <Typography variant="h3" fontWeight={700} gutterBottom>
          Alimento Diário
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          Devocionais e reflexões bíblicas para fortalecer sua fé
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {postsToShow.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post._id}>
            <PostCard post={post} />
          </Grid>
        ))}
      </Grid>

      {countPages > 0 && (
        <Stack spacing={2} mt={5} alignItems="center">
          <Pagination
            count={countPages}
            page={page}
            onChange={handleChange}
            variant="outlined"
            shape="rounded"
            showFirstButton
            showLastButton
            siblingCount={1}
            boundaryCount={1}
            size="large"
            sx={{ direction: "ltr" }}
            getItemAriaLabel={(type, page, selected) => {
              const labels = {
                page: `Página ${page}`,
                first: "Primeira página",
                last: "Última página",
                next: "Próxima página",
                previous: "Página anterior",
              };
              return labels[type] || "";
            }}
          />
        </Stack>
      )}
    </>
  );
};

export default Home;
