import view from './View'

import icons  from 'url:../../img/icons.svg';

class PaginationView extends View  {
    _parentElement = document.querySelector('."pagination');

    _generateMarkup(){

        const numPages = math.ceil(this._data.results.length / this.data. resultsPerPage);

        //first page and there are other pages
        if (this._data.page === 1 && numPages > 1){
            return 'page 1 others'
        }

       //first page and there are no other pages
       return'only one page'

       //last page
       if (this._data.page === numPages && numPages > 1){
           return 'last page'
       }

       //other pages
       if (this._data.page < numPages) {
           return 'other page'
       }
    }
}


export  default PaginationView()
