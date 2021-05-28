import { createClient } from "contentful";

export default function Home() {
  return <div className="recipe-list">Recipe Lists</div>;
}

export const getStaticProps = () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });
};
