import view from './View'

import icons  from 'url:../../img/icons.svg';

class PaginationView extends View  {
    _parentElement = document.querySelector('."pagination');

    _generateMarkup(){

        const numPages = math.ceil(this._data.results.length / this.data. resultsPerPage);
    }
}


export  default PaginationView()
