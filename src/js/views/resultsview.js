import View from "./View";

import previewView from "./previewView";
import icons  from 'url:../../img/icons.svg';

class resultsView extends View  {

    _parentElement = document.querySelector('.results')
    
    _errorMessage = 'no recipe for your query';
    _message = '';
  

  _generateMarkup() {


return this._data.map(bookmark => previewView.render(bookmark, false))
.join('');
  }

  
};

export default new resultsView();