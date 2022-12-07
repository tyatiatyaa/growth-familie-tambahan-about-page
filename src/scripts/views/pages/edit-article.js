/* eslint-disable no-undef */
import UrlParser from '../../routes/url-parser';
import EditArticleUtils from '../../utils/edit-article-utils';
import RouteUtils from '../../utils/route-utils';
import LocalStorageUtils from '../../utils/local-storage-utils';
import {
  createDashboardTemplate,
  createArticleFormTemplate,
} from '../templates/templates-creator';

const EditArticle = {
  async render() {
    return `
      <div class="dashboard-wrapper"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const { name: id } = url;

    if (!RouteUtils.isEditArticleUrl(id)) return;

    const getUser = LocalStorageUtils.getUserStorage();
    const user = JSON.parse(getUser);

    const dashboardWrapperElement = document.querySelector('.dashboard-wrapper');
    dashboardWrapperElement.innerHTML = createDashboardTemplate();

    // Logout button
    const logoutButtonElement = document.querySelector('#logoutButton');
    logoutButtonElement.addEventListener('click', () => {
      LocalStorageUtils.removeUserStorage();
      RouteUtils.redirectToLogin();
    });

    // Main content
    const mainContentDashboardElement = document.querySelector('#mainContentDashboard');
    mainContentDashboardElement.innerHTML = createArticleFormTemplate();

    // Tiny MCE
    tinymce.init({
      selector: '#articleBodyInput',
      plugins:
        'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
      toolbar:
        'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
    });

    // Edit article utils
    EditArticleUtils.init({
      id,
      user,
      form: document.querySelector('#articleForm'),
      title: document.querySelector('#articleTitleInput'),
      category: document.querySelector('#articleCategorySelect'),
      from: document.querySelector('#articleFromInput'),
      img: document.querySelector('#articleImgLinkInput'),
      body: document.querySelector('#articleBodyInput'),
      refresh: document.querySelector('#refreshButton'),
    });
  },
};

export default EditArticle;