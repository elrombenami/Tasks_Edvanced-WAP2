import { FC } from "react";
import usePosts from "../hooks/usePosts";
import ListGroup from "./ListGroup";

const PostsList: FC = () => {
    const { posts, isLoading, error } = usePosts()
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            <ListGroup title="Posts" items={posts.map((post) => post.title)} onItemSelected={(index) => { console.log("Selected " + index) }} />
        </div>
    )
}

export default PostsList