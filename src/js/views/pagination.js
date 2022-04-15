import view from './View'

import icons  from 'url:../../img/icons.svg';

class PaginationView extends View  {
    _parentElement = document.querySelector('."pagination');

    _generateMarkup(){
        const curPage = this._data.page;

         const numPages = math.ceil(this._data.results.length / this.data. resultsPerPage);

        //first page and there are other pages
        if (curPage === 1 && numPages > 1){
            return 'page 1 others'
        }

       //first page and there are no other pages
       return'only one page'

       //last page
       if (curPage === numPages && numPages > 1){
           return `
           <button class="btn--inline pagination__btn--prev">
           <svg class="search__icon">
             <use href="${icons}#icon-arrow-left"></use>
           </svg>
           <span>Page ${curPage - 1}</span>
         </button>
         `;
       }

       //other pages
       if (curPage < numPages) {
           return 'other page'
       }
    }
}


export  default PaginationView()
