const LOGIN_URL = '#/login';
const DASHBOARD_URL = '#/dashboard';
const ADD_ARTICLE_URL = (username) => `#/dashboard/${username}/add-article`;
const EDIT_ARTICLE_URL = (id) => `#/dashboard/${id}/edit-article`;
const DETAIL_ARTICLE_URL = (slug) => `#/article/${slug}`;
const MY_ACCOUNT_URL = (username) => `#/dashboard/${username}/account`;

const RouteUtils = {
  isLoginUrl() {
    return window.location.hash === LOGIN_URL;
  },

  isDashboardUrl() {
    return window.location.hash === DASHBOARD_URL;
  },

  isAddArticleUrl(username) {
    return window.location.hash === ADD_ARTICLE_URL(username);
  },

  isEditArticleUrl(id) {
    return window.location.hash === EDIT_ARTICLE_URL(id);
  },

  isUserAccountUrl(username) {
    return window.location.hash === MY_ACCOUNT_URL(username);
  },

  redirectToDetailArticle(slug) {
    return window.open(DETAIL_ARTICLE_URL(slug), '_blank');
  },

  redirectToEditArticle(id) {
    window.location.replace(EDIT_ARTICLE_URL(id));
    window.location.reload();
  },

  redirectToAddArticle(username) {
    window.location.replace(ADD_ARTICLE_URL(username));
    window.location.reload();
  },

  redirectToDashboard() {
    window.location.replace(DASHBOARD_URL);
  },

  redirectToLogin() {
    window.location.replace(LOGIN_URL);
  },

  notCommonUrl(url) {
    const userAccountUrl = url === '/dashboard/account';
    const loginOrDashboardUrl = (url === '/login') || (url === '/dashboard');
    const addOrEditArticleUrl = (url === '/dashboard/add-article')
      || (url === '/dashboard/edit-article');

    if (loginOrDashboardUrl || addOrEditArticleUrl || userAccountUrl) return true;

    return false;
  },
};

export default RouteUtils;