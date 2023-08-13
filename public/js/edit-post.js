const post_id = window.location.toString().split("/")[
  window.location.toString().split("/").length - 1
];

const updateguitarPostFormHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title-update-guitar-post").value.trim();
  const content = document
    .querySelector("#content-update-guitar-post")
    .value.trim();

  if (title && content) {
    const response = await fetch(`/api/posts/${post_id}`, {
      method: "PUT",
      body: JSON.stringify({ title, content }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard"); 
    } else {
      alert("Failed to update a post.");
    }
  }
};


const deleteguitarPostFormHandler = async (event) => {
  event.preventDefault();

  const response = await fetch(`/api/posts/${post_id}`, {
    method: "DELETE",
  });

  if (response.ok) {
    document.location.replace("/dashboard"); 
  } else {
    alert("Failed to delete a post."); 
  }
};


const updateguitarPostButton = document.querySelector("#update-guitar-post");

if (updateguitarPostButton) {
  updateguitarPostButton.addEventListener("click", updateguitarPostFormHandler);
}

const deleteguitarPostButton = document.querySelector("#delete-guitar-post");

if (deleteguitarPostButton) {
  deleteguitarPostButton.addEventListener("click", deleteguitarPostFormHandler);
}