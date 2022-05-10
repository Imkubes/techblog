const newFormHandler = async (event) => {
    event.preventDefault();
  
    const name = document.querySelector("#post-name").value.trim();
    const experience_level = document.querySelector("#post-funding").value.trim();
    const description = document.querySelector("#post-desc").value.trim();
  
    if (name && experience_level && description) {
      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({ name, experience_level, description }),
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (response.ok) {
        document.location.replace("/profile");
      } else {
        alert("Failed to create post");
      }
    }
  };
  
  document
    .querySelector(".new-post-form")
    .addEventListener("submit", addCommentSubmit);
      