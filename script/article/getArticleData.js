import { getPageElements } from "./getPageElements.js";

const { titleText, sidebarText, contentText, infoAuthor } = getPageElements();

const dataPost = async () => {
  const id = new URLSearchParams(window.location.search).get("id");
  if (id) {
    const request = await fetch(`https://gorest.co.in/public-api/posts/${id}`);
    const { data } = await request.json();
    return data;
  }
};

const dataAuthor = async (id) => {
  const request = await fetch(`https://gorest.co.in/public-api/users/${id}`);
  const { data } = await request.json();
  return data;
};

export const loadData = async () => {
  try {
    const postData = await dataPost();
    const { title, body, user_id: userId } = postData;

    if (!userId) {
      return;
    }

    const authorData = await dataAuthor(userId);
    const { name } = authorData;

    titleText.textContent = title;
    contentText.textContent = body;
    infoAuthor.textContent = name;

    sidebarText.forEach((element) => {
      element.textContent = title;
    });
  } catch (error) {
    console.error("Произошла ошибка:", error);
  }
};

// Убедитесь, что код выполняется после полной загрузки страницы
window.addEventListener("load", () => {
  loadData();
});
