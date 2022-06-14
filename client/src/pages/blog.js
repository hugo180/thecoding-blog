import Comments from "../componentscopy/App";

const PicturePage = () => {
  return (
    <div>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default PicturePage;