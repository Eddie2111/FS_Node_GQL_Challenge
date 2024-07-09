import { useQuery, gql } from "@apollo/client";
function App() {
  const GET_Hello = gql`
    query HelloWorld {
      hello
    }
  `;
  const { loading, error, data } = useQuery(GET_Hello);
  console.log(loading, error, data);
  return (
    <div className="mx-auto container">
      <h1 className="font-bold text-[8rem] text-center md:text-[12rem]">TeeBay</h1>
      <p className="text-lg">Here, you can add, rent and buy products</p>
    </div>
  );
}

export default App;
