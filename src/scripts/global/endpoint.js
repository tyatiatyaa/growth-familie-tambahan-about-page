import CONFIG from './config';

const ENDPOINT = {
  ALL_ARTICLES: `${CONFIG.BASE_URL}/articles`,
  ALL_CATEGORIES: `${CONFIG.BASE_URL}/categories`,
  ALL_PRODUCTS: `${CONFIG.BASE_URL}/products`,
  DETAIL_ARTICLE_BY_SLUG: (slug) => `${CONFIG.BASE_URL}/articles/${slug}`,
  DETAIL_ARTICLE_BY_ID: (id) => `${CONFIG.BASE_URL}/articles/id/${id}`,
  DETAIL_PRODUCTS: (name) => `${CONFIG.BASE_URL}/products/category/${name}`,
  DELETE_ARTICLE_BY_ID: (id) => `${CONFIG.BASE_URL}/articles/id/${id}`,
  ARTICLES_BY_CATEGORY: (category) => `${CONFIG.BASE_URL}/articles/category/${category}`,
  EDIT_ARTICLE: (id) => `${CONFIG.BASE_URL}/articles/id/${id}`,
  EDIT_ACCOUNT: (username) => `${CONFIG.BASE_URL}/users/${username}`,
  LOGIN: `${CONFIG.BASE_URL}/login`,
};

export default ENDPOINT;