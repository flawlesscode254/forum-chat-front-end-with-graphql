import { useQuery, gql } from "@apollo/client";

import Nav from "./Nav";
import Card from "../components/Card";

function Home() {
  const GET_POSTS = gql`
    {
      getPosts {
        id
        username
        email
        body
        createdAt
        comments {
          id
          username
          email
          body
        }
        likes {
          id
          username
          email
        }
        likeCount
        commentCount
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <Nav />
      {data &&
        data.getPosts.map((post) => {
          return (
            <Card 
                key={post.id} 
                username={post.username} 
                body={post.body} 
                likeCount={post.likeCount}
                commentCount={post.commentCount}
            />
          );
        })}
    </div>
  );
}

export default Home;
