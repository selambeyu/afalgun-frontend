import { useCallback, useEffect, useState } from "react";
import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { format, subHours } from "date-fns";
import { useQuery, useQueryClient } from "react-query";
import {
  Avatar,
  Box,
  Button,
  Card,
  Chip,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { blogApi } from "../../api/blog-api";

import { BlogComment } from "../../../components/post/blog-comment";
import { BlogCommentAdd } from "../../../components/post/blog-comment-add";
import { ArrowLeft as ArrowLeftIcon } from "../../../icons/arrow-left";
import { useMounted } from "../../../hooks/use-mounted";
import { getItemByIdApi } from "../../api/item-api-client";
import { MainLayout } from "../../../layouts/main-layout";

import { gtm } from "../../../lib/gtm";
import { LoadingUI } from "../../../components/loadingUi";

const comments = [
  {
    id: "d0ab3d02ef737fa6b007e35d",
    authorAvatar: "/static/mock-images/avatars/avatar-alcides_antonio.png",
    authorName: "Alcides Antonio",
    authorRole: "Product Designer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    createdAt: subHours(new Date(), 2).getTime(),
    isLiked: true,
    likes: 12,
  },
  {
    id: "3ac1e17289e38a84108efdf3",
    authorAvatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
    authorName: "Jie Yan Song",
    authorRole: "Web Developer",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
    createdAt: subHours(new Date(), 8).getTime(),
    isLiked: false,
    likes: 8,
  },
];

const PeoplePostDetails = () => {
  const isMounted = useMounted();
  const [post, setPost] = useState(null);
  const router = useRouter();
  const postId = router.query.postId;
  const { data, isLoading, isError } = useQuery(
    ["item"],
    async () => await getItemByIdApi(postId)
  );

  console.log("data",data);


  console.log("post id",postId)
  useEffect(() => {
    gtm.push({ event: "page_view" });
  }, []);

  const getPost = useCallback(async () => {
    try {
      const data = await blogApi.getPost();

      if (isMounted()) {
        setPost(data);
      }
    } catch (err) {
      console.error(err);
    }
  }, [isMounted]);

  useEffect(() => {
    getPost();
  }, [getPost]);

  if (isLoading) {
    return <LoadingUI />;
  }
  if (isError) {
    return <p>Error Fetching post Item</p>;
  }

  return (
    <>
      <Head>
        <title>Blog: Post Details | Material Kit Pro</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="md">
          <NextLink href="/" passHref>
            <Button
            
              startIcon={<ArrowLeftIcon fontSize="small" />}
            >
              Back
            </Button>
          </NextLink>

          <Chip color={data.status =='lost' ? 'error' : 'primary'} label={data.status} />
          <Typography sx={{ mt: 3 }} variant="h3">
            {data.name}
          </Typography>
          <Typography color="textSecondary" sx={{ mt: 3 }} variant="subtitle1">
            {data.description}
          </Typography>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              mt: 3,
            }}
          >
            <Avatar src={post.author.avatar} />
            <Box sx={{ ml: 2 }}>
              <Typography variant="subtitle2">
                By {data.owner.name} •{" "}
                {/* {format(post.createdAt, "MMMM d, yyyy")} */}
              </Typography>
              {/* <Typography color="textSecondary" variant="body2">
                {`${post.readTime} read`}
              </Typography> */}
            </Box>
          </Box>
          <Box
            sx={{
              backgroundImage: `url(${post.cover})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              borderRadius: 1,
              height: 380,
              mt: 3,
            }}
          />
          {/* <Box sx={{ py: 3 }}>
            <MarkdownWrapper>
              {post.content && <Markdown children={post.content} />}
            </MarkdownWrapper>
          </Box> */}
          <Divider sx={{ my: 3 }} />
          {comments.map((comment) => (
            <BlogComment key={comment.id} {...comment} />
          ))}
          <Divider sx={{ my: 3 }} />
          <BlogCommentAdd />
          {/* <Box sx={{ mt: 8 }}>
            <BlogNewsletter />
          </Box> */}
        </Container>
      </Box>
    </>
  );
};

PeoplePostDetails.getLayout = (page) => <MainLayout>{page}</MainLayout>;

export default PeoplePostDetails;
