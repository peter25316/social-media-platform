import CommentItem from "./CommentItem";

const CommentFeed = (props) => {
  const { comments = [] } = props;
  return (
    <>
      {comments.map((comment) => (
        <CommentItem key={comment.id} data={comment} />
      ))}
    </>
  );
};

export default CommentFeed;
