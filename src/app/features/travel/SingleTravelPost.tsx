import { Container } from "@mui/material"
import { observer } from "mobx-react-lite"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useStore } from "../../store/store"
import TravelPost from "./TravelPost";
import EventLoader from "../../layout/Loader/EventLoader";

const SingleTravelPost = () => {
    const { travelStore: { travelPost, getSinglePost, clearSelctedPost } } = useStore();
    const { id } = useParams();

    useEffect(() => {
        getSinglePost(id!);

        return () => clearSelctedPost();
    }, [getSinglePost, id, clearSelctedPost])

    return (
        <div className="h-70">
            {!travelPost ? <EventLoader /> : <Container className='mb-4'>{travelPost && <TravelPost travelPost={travelPost} postId={id} />}</Container>}
        </div>
    )
}

export default observer(SingleTravelPost)