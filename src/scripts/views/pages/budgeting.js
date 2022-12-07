import LocalStorageUtils from '../../utils/local-storage-utils';
import RouteUtils from '../../utils/route-utils';
import {
  createDashboardTemplate, createBudgetingListTemplate,
} from '../templates/templates-creator';

const Budgeting = {
  async render() {
    if (!LocalStorageUtils.checkUserStorage()) {
      return RouteUtils.redirectToLogin();
    }

    return `
      <div class="dashboard-wrapper"></div>
    `;
  },

  async afterRender() {
    const getUser = LocalStorageUtils.getUserStorage();
    const user = JSON.parse(getUser);

    if (!RouteUtils.isUserAccountUrl(user.username)) return;

    const dashboardWrapperElement = document.querySelector('.dashboard-wrapper');
    dashboardWrapperElement.innerHTML = createDashboardTemplate();

    // Logout button
    const logoutButtonElement = document.querySelector('#logoutButton');
    logoutButtonElement.addEventListener('click', () => {
      LocalStorageUtils.removeUserStorage();
      RouteUtils.redirectToLogin();
    });

    const mainContentDashboardElement = document.querySelector('#mainContentDashboard');
    mainContentDashboardElement.innerHTML = createBudgetingListTemplate();
  },
};

export default Budgeting;