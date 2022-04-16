import View from "./View";

import previewView from './previewView.js';

import icons  from 'url:../../img/icons.svg';

class BookmarksView extends View  {

    _parentElement = document.querySelector('.bookmarks__list')
    _data;
    _errorMessage = 'no bookmarks';
    _message = '';
  
    addHandlerRender(handler) {
      window.addEventListener('load', handler);
    }
  _generateMarkup() {

return this._data.map(bookmark => previewView.render(bookmark, false))
.join('');
  }

};

export default new BookmarksView();