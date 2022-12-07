/* eslint-disable no-shadow */
import GrowfieSrc from '../../data/growfie-src';

const cardDetail = {
  async render() {
    return `
      <div class="container-fluid">
      <div class="title-wrapper py-4 mx-0">
      <h1 class="text-center fw-bold display-4 my-3">Budgeting</h1>
  
      <div class="container text-center mb-3">
          <a href="#/budgeting-children" class="btn category rounded-pill">Baby</a>
          <a href="#/budgeting-toddler" class="btn category rounded-pill">Toddler</a>
          <a href="#/budgeting-kids" class="btn category rounded-pill">Kids</a>
      </div>
      </div>
  
      <div class="py-4 mx-4">
          <h3 id="pregnancy" class="text-center">Baby needs</h3>
  
          <div class="row row-cols-md-4 row-cols-sm-2 row-cols-xs-1" id="budgeting"></div>
      </div>
      `;
  },

  async afterRender() {
    const bayiResponse = await GrowfieSrc.getDetailProducts('bayi');

    const bayiProducts = bayiResponse.data.products;

    const articles = [...bayiProducts];
    const articlesContainer = document.querySelector('#budgeting');

    const numberFormatterToRupiah = (number) => {
      const numberString = number.toString();
      const splitNumber = numberString.split(',');
      const sisa = splitNumber[0].length % 3;
      let rupiah = splitNumber[0].substr(0, sisa);
      const ribuan = splitNumber[0].substr(sisa).match(/\d{3}/gi);

      if (ribuan) {
        const separator = sisa ? '.' : '';
        rupiah += separator + ribuan.join('.');
      }

      rupiah = splitNumber[1] !== undefined ? `${rupiah} , ${splitNumber[1]}` : rupiah;
      return `Rp. ${rupiah}`;
    };

    articles.forEach((c) => {
      articlesContainer.innerHTML += `
      <div class="mt-5">
             <div class="card box">
                 <div class="card-body">
                 <h5 class="card-title">${c.name}</h5>
                 <h6 class="card-subtitle mb-2 text-muted">${c.category}</h6>
                 <h6 class="card-subtitle mb-2 text-muted">${c.brand}</h6>
                 <p class="card-subtitle mb-2 text-muted">${numberFormatterToRupiah(c.price)}</h6>
                 <p class="card-text">${c.features}</p>
                 <a href="${c.source}" class="btn position-absolute top-100 start-50 translate-middle fw-light">Go to shop</a>
                 </div>
             </div>
      `;
    });
  },
};

export default cardDetail;