/* eslint-disable no-undef */
import AddArticleUtils from '../../utils/add-article-utils';
import LocalStorageUtils from '../../utils/local-storage-utils';
import RouteUtils from '../../utils/route-utils';
import {
  createDashboardTemplate,
  createArticleFormTemplate,
} from '../templates/templates-creator';

const AddArticle = {
  async render() {
    if (!LocalStorageUtils.checkUserStorage()) {
      RouteUtils.redirectToLogin();
    }

    return `
      <div class="dashboard-wrapper"></div>
    `;
  },

  async afterRender() {
    const getUser = LocalStorageUtils.getUserStorage();
    const user = JSON.parse(getUser);

    if (!RouteUtils.isAddArticleUrl(user.username)) return;

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

    // Add article utils
    AddArticleUtils.init({
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

export default AddArticle;