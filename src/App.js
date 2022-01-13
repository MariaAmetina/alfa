import { useEffect, useSelector } from "react";
import { useDispatch } from "react-redux";

import Layout from "./components/Layout/Layout";
import Cards from "./components/Card/Cards";
import { fetchCardData } from "./store/card-actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCardData());
  }, [dispatch]);

  return (
    <Layout>
      <Cards />
    </Layout>
  );
}

export default App;
