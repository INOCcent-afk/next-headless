import { createClient } from "contentful";

export default function Home() {
  return <div className="recipe-list">Recipe Lists</div>;
}

export const getStaticProps = () => {
  const client = createClient();
};
