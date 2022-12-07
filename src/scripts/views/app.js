/* eslint-disable no-undef */
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import RouteUtils from '../utils/route-utils';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    // ..
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    if (RouteUtils.notCommonUrl(url)) {
      document.body.innerHTML = await page.render();
      const display = await page.afterRender();
      return display;
    }

    this._content.innerHTML = await page.render();
    const display = await page.afterRender();
    return display;
  }
}

export default App;
