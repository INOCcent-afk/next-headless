import { createClient } from "contentful";

export default function Home({ recipes }) {
  console.log(recipes);
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div key={recipe.sys.id}>{recipe.fields.title}</div>
      ))}
    </div>
  );
}

export const getStaticProps = async () => {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "recipe" });

  return {
    props: {
      recipes: res.items,
    },
  };
};
