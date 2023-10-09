import { fetchData } from "./api.js";

document.addEventListener("DOMContentLoaded", async () => {
  const params = new URLSearchParams(window.location.search);
  const articleId = params.get("id");

  if (articleId) {
    try {
      // Загрузка данных о статье
      const articleData = await fetchData(
        `https://gorest.co.in/public-api/posts/${articleId}`
      );
      const { title, body, user_id } = articleData.data;

      // Загрузка данных об авторе
      const userData = await fetchData(
        `https://gorest.co.in/public-api/users/${user_id}`
      );
      const { name } = userData.data;

      // Обновление элементов на странице
      const articleTitle = document.querySelector(".article__title");
      const articleText = document.querySelector(".article__text");
      const articleAuthor = document.querySelector(".article__author");

      articleTitle.textContent = title;
      articleText.textContent = body;
      articleAuthor.textContent = name;
    } catch (error) {
      console.error("Произошла ошибка:", error);
    }
  }
});


