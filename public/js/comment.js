const addCommentSubmit = async function (event) {
  event.preventDefault();

  const comment = document.querySelector('#comment');
  const postid = document.location.pathname.slice(6);

  const response = await fetch("/api/comment/", {
    method: "POST",
    body: JSON.stringify({
      contents: comment.value,
      post_id: postid,
    }),
    headers: { "Content-Type": "application/json" },
  });

  if (response.ok) {
    document.location.replace("/");
    alert('Added to the list!')
  } else {
    alert("Failed to post");
  }
};

document
  .querySelector("#comment-form")
  .addEventListener("submit", addCommentSubmit);