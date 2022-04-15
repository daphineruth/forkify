import view from './View'

import icons  from 'url:../../img/icons.svg';

class PaginationView extends View  {
    _parentElement = document.querySelector('."pagination');

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function (e) {
            const btn = e.target.closest('.btn--inline')
            handler();

            const goToPage = btn.dataset.goto;

        })
    }
    _generateMarkup(){
        const curPage = this._data.page;

         const numPages = math.ceil(this._data.results.length / this.data. resultsPerPage);

        //first page and there are other pages
        if (curPage === 1 && numPages > 1) {
            return `
            <button data-goto="${ curPage + 1}"  class="btn--inline pagination__btn--next">
            <span>${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>

            `;
        }

       //first page and there are no other pages
       {
       return ''
       }
       //last page
       if (curPage === numPages && numPages > 1) {
           return `
           <button  data-goto="${ curPage - 1}"  class="btn--inline pagination__btn--prev">
           <svg class="search__icon">
             <use href="${icons}#icon-arrow-left"></use>
           </svg>
           <span>Page ${curPage - 1}</span>
         </button>
         `;
       }

       //other pages
       if (curPage < numPages) {
           return 
           `
           <button  data-goto="${ curPage - 1}"  class="btn--inline pagination__btn--prev">
           <svg class="search__icon">
             <use href="${icons}#icon-arrow-left"></use>
           </svg>
           <span>Page ${curPage - 1}</span>
         </button>

         <button  data-goto="${ curPage + 1}"  class="btn--inline pagination__btn--next">
         <span>${curPage + 1}</span>
         <svg class="search__icon">
           <use href="${icons}#icon-arrow-right"></use>
         </svg>
       </button>

           `
       }
    }
}


export  default PaginationView()
