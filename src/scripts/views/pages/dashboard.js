import ArticlesUtils from '../../utils/articles-utils';
import LocalStorageUtils from '../../utils/local-storage-utils';
import RouteUtils from '../../utils/route-utils';
import {
  createArticlesListTemplate,
  createDashboardTemplate,
} from '../templates/templates-creator';

const Dashboard = {
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

    if (!RouteUtils.isDashboardUrl()) return;

    const dashboardWrapperElement = document.querySelector('.dashboard-wrapper');
    dashboardWrapperElement.innerHTML = createDashboardTemplate();

    // Logout button
    const logoutButtonElement = document.querySelector('#logoutButton');
    logoutButtonElement.addEventListener('click', () => {
      LocalStorageUtils.removeUserStorage();
      RouteUtils.redirectToLogin();
    });

    const mainContentDashboardElement = document.querySelector('#mainContentDashboard');
    mainContentDashboardElement.innerHTML = createArticlesListTemplate();

    // Add article button
    const goToAddArticleButtonElement = document.querySelector('#goToAddArticleButton');
    goToAddArticleButtonElement.addEventListener('click', () => {
      RouteUtils.redirectToAddArticle(user.username);
    });

    // Go to Budgeting page
    const myBudgetingAnchorElement = document.querySelector('#budgeting');
    myBudgetingAnchorElement.setAttribute('href', `#/dashboard/${user.username}/budgeting`);

    // Go to my account page
    const myAccountAnchorElement = document.querySelector('#myAccount');
    myAccountAnchorElement.setAttribute('href', `#/dashboard/${user.username}/account`);

    // Dashboard home - articles table
    ArticlesUtils.init({
      table: document.querySelector('#articleList'),
    });
  },
};

export default Dashboard;