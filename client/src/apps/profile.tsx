import { useQuery } from "@apollo/client";

import { GET_USER } from "../graphql/mutations/users/index"

const Test = () => {
  const { data, loading, error } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h1>User Profile</h1>
      {data?.user ? (
        <div>
          <p>ID: {data.user.id}</p>
          <p>Name: {data.user.name}</p>
          <p>Email: {data.user.email}</p>
        </div>
      ) : (
        <p>No user logged in</p>
      )}
    </div>
  );
};

export default Test;
