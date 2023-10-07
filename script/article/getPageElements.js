export const getPageElements = () => {

    const titleText = document.querySelector('.article__title');
    const sidebarText = document.querySelectorAll('.bread-crumbs__link');
    const contentText = document.querySelector('.article__text');
    const infoAuthor = document.querySelector('.article__author');

    return {
        titleText,
        sidebarText,
        contentText,
        infoAuthor,
    }
}