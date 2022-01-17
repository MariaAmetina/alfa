import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Layout from "./components/Layout/Layout";
import Cards from "./components/Card/Cards";
import { fetchCardData } from "./store/card-actions";

function App() {
  const dispatch = useDispatch();
  const displayLikedCards = useSelector((state) => state.cards.displayLiked);

  useEffect(() => {
    if (!displayLikedCards) {
      dispatch(fetchCardData());
    }
  }, [dispatch, displayLikedCards]);

  return (
    <Layout>
      <Cards />
    </Layout>
  );
}

export default App;
