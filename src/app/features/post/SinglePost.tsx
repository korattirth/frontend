import { Container } from "@mui/material";
import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../store/store";
import Post from "./Post";

const SinglePost = () => {
  const {
    postStore: { singlePost, getSinglePost, clearSelctedPost },
  } = useStore();
  const { id } = useParams();

  useEffect(() => {
    getSinglePost(id!);

    return () => clearSelctedPost();
  }, [getSinglePost, id, clearSelctedPost]);

  return (
    <>
      <Container className="mb-4">
        {singlePost && <Post post={singlePost} postId={id} />}
      </Container>
    </>
  );
};

export default observer(SinglePost);
