const newFormHandler = async (event) => {
    event.preventDefault();

    console.log(event.target.value);
  
    const name = document.querySelector("#post-name").value.trim();
    const description = document.querySelector("#post-desc").value.trim();
  
    if (name && description) {
      const response = await fetch(`/api/posts`, {
        method: "POST",
        body: JSON.stringify({ name, description }),
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
    .addEventListener("submit", newFormHandler);
      