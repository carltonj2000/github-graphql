import path from "path";
import dotenv from "dotenv";
import "cross-fetch/polyfill";

dotenv.config({ path: path.resolve(process.cwd(), ".env.local") });
const token = process.env.GITHUB_AUTH_TOKEN;

const query1 = `
query {
  user(login: "carltonj2000") {
    repositories {
      totalCount
    }
  }
}
`;

const query2 = `query { 
  user(login: "carltonj2000") { 
    repositories(first: 100, orderBy: {field: UPDATED_AT, direction:DESC }) {
      nodes {
        name
        description
      }
    }
  }
}
`;

const url = "https://api.github.com/graphql";

const main = async () => {
  try {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `bearer ${token}`
      },
      body: JSON.stringify({ query: query2 })
    });
    const result = await resp.json();
    result.data.user.repositories.nodes.map(item => {
      console.log(item.name, item.description);
    });
  } catch (error) {
    console.log("Failed! main with:", error);
  }
};

main();
