import { format, subHours, subMinutes, subSeconds } from "date-fns";
import { useQuery, useQueryClient } from "react-query";
import {
  Avatar,
  Box,
  Card,
  CardHeader,
  CardMedia,
  Chip,
  Grid,
  Link,
  Typography,
} from "@mui/material";
import { getItemsApi } from "../../pages/api/item-api-client";
import { styled } from "@mui/material/styles";
import { LoadingUI } from "../loadingUi";

const now = new Date();

const posts = [
  {
    id: "24b76cac9a1228cd949747080",
    category: "people",
    author: {
      avatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
      name: "Jie Yan Song",
    },
    type: "Lost",
    cover: "/static/mock-images/covers/cover_4.jpeg",
    publishedAt: subMinutes(subSeconds(now, 16), 45).getTime(),
    readTime: "5 min",
    // shortDescription: 'Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh. Vivamus sit amet tristique dui. Praesent in bibendum arcu, at placerat augue. Nam varius fermentum diam, at tristique libero ultrices non. Praesent scelerisque diam vitae posuere dignissim. In et purus ac sapien posuere accumsan sit amet id diam. Pellentesque sit amet nulla ante. Maecenas nec leo vitae quam volutpat pretium id vitae augue.',
    title: "Why I Still Lisp, and You Should Too",
  },
  {
    id: "a9c19d0caf2caa91020aacd1f",
    category: "people",
    author: {
      avatar: "/static/mock-images/avatars/avatar-omar_darboe.png",
      name: "Omar Darobe",
    },
    type: "Found",
    cover: "/static/mock-images/covers/cover_5.jpeg",
    publishedAt: subHours(subMinutes(subSeconds(now, 29), 51), 6).getTime(),
    readTime: "6 min",
    // shortDescription: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in turpis ac quam luctus interdum. Nullam ac lorem ligula. Integer sed massa bibendum, blandit ipsum et, iaculis augue. Curabitur nec enim eget dolor tincidunt posuere eget nec dolor. Ut ullamcorper dignissim arcu vel laoreet. Sed ligula dolor, vulputate quis eros ac, maximus pharetra orci. Aenean lobortis volutpat vehicula. Suspendisse vel nunc enim. Cras ultrices metus libero, non aliquam diam condimentum vel. Vestibulum arcu leo, consectetur id diam a, semper elementum odio. Proin eleifend volutpat sapien tempor bibendum. Etiam sagittis nulla sit amet aliquam sollicitudin.',
    title: "Scrum Has Hit the Glass Ceiling",
  },
  {
    id: "44df90cbf89963jb8aa625c7d",
    author: {
      avatar: "/static/mock-images/avatars/avatar-siegbert_gottfried.png",
      name: "Siegbert Gottfried",
    },
    category: "people",
    type: "Lost",
    cover: "/static/mock-images/covers/cover_6.jpeg",
    publishedAt: subHours(subMinutes(subSeconds(now, 6), 46), 16).getTime(),
    readTime: "3 min",
    // shortDescription: 'Praesent eget leo mauris. Morbi ac vulputate nibh. In hac habitasse platea dictumst. Praesent fermentum lacus eleifend erat cursus, congue rhoncus mi porta. Mauris rhoncus mollis nisl, vitae tempus tortor. Proin sit amet feugiat felis. Donec nunc urna, pretium sed viverra vel, blandit at urna. Integer pharetra placerat mauris, at fringilla arcu dignissim a. Morbi nec fermentum purus. Integer vel justo interdum lectus euismod bibendum.',
    title: "How Model View Controller (MVC) Architectures Work",
  },
  {
    id: "24b76cac9ka128cjd949747080",
    author: {
      avatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
      name: "Jie Yan Song",
    },
    category: "people",
    type: "Lost",
    cover: "/static/mock-images/covers/cover_4.jpeg",
    publishedAt: subMinutes(subSeconds(now, 16), 45).getTime(),
    readTime: "5 min",
    // shortDescription: 'Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh. Vivamus sit amet tristique dui. Praesent in bibendum arcu, at placerat augue. Nam varius fermentum diam, at tristique libero ultrices non. Praesent scelerisque diam vitae posuere dignissim. In et purus ac sapien posuere accumsan sit amet id diam. Pellentesque sit amet nulla ante. Maecenas nec leo vitae quam volutpat pretium id vitae augue.',
    title: "Why I Still Lisp, and You Should Too",
  },
  {
    id: "a9c19d0cawf2ca91020aacd1f",
    author: {
      avatar: "/static/mock-images/avatars/avatar-omar_darboe.png",
      name: "Omar Darobe",
    },
    category: "people",
    type: "Found",
    cover: "/static/mock-images/covers/cover_5.jpeg",
    publishedAt: subHours(subMinutes(subSeconds(now, 29), 51), 6).getTime(),
    readTime: "6 min",
    // shortDescription: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in turpis ac quam luctus interdum. Nullam ac lorem ligula. Integer sed massa bibendum, blandit ipsum et, iaculis augue. Curabitur nec enim eget dolor tincidunt posuere eget nec dolor. Ut ullamcorper dignissim arcu vel laoreet. Sed ligula dolor, vulputate quis eros ac, maximus pharetra orci. Aenean lobortis volutpat vehicula. Suspendisse vel nunc enim. Cras ultrices metus libero, non aliquam diam condimentum vel. Vestibulum arcu leo, consectetur id diam a, semper elementum odio. Proin eleifend volutpat sapien tempor bibendum. Etiam sagittis nulla sit amet aliquam sollicitudin.',
    title: "Scrum Has Hit the Glass Ceiling",
  },
  {
    id: "44df90cbfl89963b8aa625c7d",
    // author: {
    //   avatar: "/static/mock-images/avatars/avatar-siegbert_gottfried.png",
    //   name: "Siegbert Gottfried",
    // },
    category: "people",
    type: "Lost",
    cover: "/static/mock-images/covers/cover_6.jpeg",
    publishedAt: subHours(subMinutes(subSeconds(now, 6), 46), 16).getTime(),
    readTime: "3 min",
    // shortDescription: 'Praesent eget leo mauris. Morbi ac vulputate nibh. In hac habitasse platea dictumst. Praesent fermentum lacus eleifend erat cursus, congue rhoncus mi porta. Mauris rhoncus mollis nisl, vitae tempus tortor. Proin sit amet feugiat felis. Donec nunc urna, pretium sed viverra vel, blandit at urna. Integer pharetra placerat mauris, at fringilla arcu dignissim a. Morbi nec fermentum purus. Integer vel justo interdum lectus euismod bibendum.',
    title: "How Model View Controller (MVC) Architectures Work",
  },
  {
    id: "24b76cac9aa128cd949747080",
    // author: {
    //   avatar: "/static/mock-images/avatars/avatar-jie_yan_song.png",
    //   name: "Jie Yan Song",
    // },
    type: "Lost",
    category: "people",
    cover: "/static/mock-images/covers/cover_4.jpeg",
    publishedAt: subMinutes(subSeconds(now, 16), 45).getTime(),
    readTime: "5 min",
    // shortDescription: 'Aliquam dapibus elementum nulla at malesuada. Ut mi nisl, aliquet non mollis vel, feugiat non nibh. Vivamus sit amet tristique dui. Praesent in bibendum arcu, at placerat augue. Nam varius fermentum diam, at tristique libero ultrices non. Praesent scelerisque diam vitae posuere dignissim. In et purus ac sapien posuere accumsan sit amet id diam. Pellentesque sit amet nulla ante. Maecenas nec leo vitae quam volutpat pretium id vitae augue.',
    title: "Why I Still Lisp, and You Should Too",
  },
  {
    id: "a9c19d0caf2ca91ee020aacd1f",
    // author: {
    //   avatar: "/static/mock-images/avatars/avatar-omar_darboe.png",
    //   name: "Omar Darobe",
    // },
    category: "people",
    type: "Found",
    cover: "/static/mock-images/covers/cover_5.jpeg",
    publishedAt: subHours(subMinutes(subSeconds(now, 29), 51), 6).getTime(),
    readTime: "6 min",
    // shortDescription: 'Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi in turpis ac quam luctus interdum. Nullam ac lorem ligula. Integer sed massa bibendum, blandit ipsum et, iaculis augue. Curabitur nec enim eget dolor tincidunt posuere eget nec dolor. Ut ullamcorper dignissim arcu vel laoreet. Sed ligula dolor, vulputate quis eros ac, maximus pharetra orci. Aenean lobortis volutpat vehicula. Suspendisse vel nunc enim. Cras ultrices metus libero, non aliquam diam condimentum vel. Vestibulum arcu leo, consectetur id diam a, semper elementum odio. Proin eleifend volutpat sapien tempor bibendum. Etiam sagittis nulla sit amet aliquam sollicitudin.',
    title: "Scrum Has Hit the Glass Ceiling",
  },
  {
    id: "44df90cbf899663b8aa625c7d",
    // author: {
    //   avatar: "/static/mock-images/avatars/avatar-siegbert_gottfried.png",
    //   name: "Siegbert Gottfried",
    // },
    type: "Lost",
    category: "people",
    cover: "/static/mock-images/covers/cover_6.jpeg",
    publishedAt: subHours(subMinutes(subSeconds(now, 6), 46), 16).getTime(),
    readTime: "3 min",
    // shortDescription: 'Praesent eget leo mauris. Morbi ac vulputate nibh. In hac habitasse platea dictumst. Praesent fermentum lacus eleifend erat cursus, congue rhoncus mi porta. Mauris rhoncus mollis nisl, vitae tempus tortor. Proin sit amet feugiat felis. Donec nunc urna, pretium sed viverra vel, blandit at urna. Integer pharetra placerat mauris, at fringilla arcu dignissim a. Morbi nec fermentum purus. Integer vel justo interdum lectus euismod bibendum.',
    title: "How Model View Controller (MVC) Architectures Work",
  },
];

const BlogPostCardMediaWrapper = styled("div")({
  paddingTop: "calc(100% * 4 / 4)",
  position: "relative",
});

export const GridList1 = () => {
  const { data, isLoading, isError } = useQuery(
    ["items"],
    async () => await getItemsApi()
  );

if(isLoading){
  return <LoadingUI/>
}

if(isError){
  return <p>Error Loading Postes</p>
}
  console.log("what is data here", data)
  return (
    <Box
      sx={{
        backgroundColor: "background.default",
        minHeight: "100%",
        p: 3,
      }}
    >
      <Grid container spacing={3}>
        {data.items.map((post) => (
          <Grid item key={post._id} md={4} xs={12}>
            <Card
              sx={{
                height: "100%",
                p: 2,
              }}
            >
              {/* <CardHeader title="Missing"></CardHeader> */}
              <BlogPostCardMediaWrapper>
                <CardMedia
                  image={post.cover}
                  sx={{
                    height: "100%",
                    position: "absolute",
                    top: 0,
                    width: "100%",
                  }}
                />
              </BlogPostCardMediaWrapper>
              <Box sx={{ mt: 2 }}>
                <div>
                  <Chip color={post.status == 'lost' ? "error" : "primary"} label={post.status} variant="outlined" />
                </div>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    my: 2,
                  }}
                >
                  <Avatar
                    src={
                      post.author && post.author.avatar
                        ? post.author.avatar
                        : ""
                    }
                  />
                  <Box sx={{ ml: 2 }}>
                    <Typography variant="subtitle2">
                      {post.owner && post.owner.name ? post.owner.name : ""}
                    </Typography>
                    <Typography color="textSecondary" variant="caption">
                      {/* {`${format(post.createdAt, "dd MMM yy")} `} */}
                    </Typography>
                  </Box>
                </Box>
                <Link href={`/post/${post._id}`} variant="h5">
                  {post.name}
                </Link>
                {/* <Typography
                color="textSecondary"
                sx={{
                  height: 72,
                  mt: 1,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                }}
                variant="body1"
              >
                {post.shortDescription}
              </Typography> */}
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
