import GrowfieSrc from '../../data/growfie-src';
import UrlParser from '../../routes/url-parser';

const Detail = {
  async render() {
    return `
      <article class="container p-3 col-lg-8" style="width: 80%;">
        <h1 class="title text-center"></h1>
        <img class="img-fluid my-4 article-img w-100"/>
        <div class="text-content"></div>
      </article>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { name: slug } = url;
    const response = await GrowfieSrc.getOneArticle({ slug });
    const { article } = response.data;

    const titleElement = document.querySelector('.title');
    titleElement.textContent = article.title;

    const imgElement = document.querySelector('.article-img');
    imgElement.setAttribute('src', `${article.img}`);

    const textContentElement = document.querySelector('.text-content');
    textContentElement.innerHTML = article.body;
  },
};

export default Detail;