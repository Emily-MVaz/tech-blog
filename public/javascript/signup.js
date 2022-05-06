const signupFormHandler = async (event) => {
  event.preventDefault();

  const username = document.querySelector("#name-signup").value.trim();
  const email = document.querySelector("#email-signup").value.trim();
  const password = document.querySelector("#password-signup").value.trim();
  const twitter = document.querySelector("#twitter-signup").value.trim();
  const github = document.querySelector("#github-signup").value.trim();

  if (username && email && password && twitter && github) {
    const response = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ username, email, password, twitter, github }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      document.location.replace("/dashboard");
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);
