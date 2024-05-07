import usePosts from "@/hooks/usePosts";
import PostItem from "./PostItem";

const PostFeed = (props) => {
  const { userId } = props;
  const { data: posts = [] } = usePosts(userId);

  return (
    <>
      {posts.map((post) => (
        <PostItem userId={userId} key={post.id} data={post} />
      ))}
    </>
  );
};

export default PostFeed;
