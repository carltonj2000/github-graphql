console.log(document.getElementById("body-new"));

const simplemde = new SimpleMDE({
  element: document.getElementById("body-new")
});

const getRequest = async url => {
  try {
    const resp = await fetch(url, { method: "GET" });
    return await resp.json();
  } catch (error) {
    console.log("Failed! getRequest wit:", error);
  }
};

const url =
  "https://api.github.com/users/carltonj2000/repos?sort=pushed&per_page=100";
const displayposts = async () => {
  const allposts = document.getElementById("allposts");
  const ul = document.getElementById("posts");
  const contents = await getRequest(url);
  allposts.appendChild(document.createTextNode(` - ${contents.length}`));
  contents.map(item => {
    const li = document.createElement("li");
    li.innerText = item.name;
    ul.appendChild(li);
  });
};

displayposts();
