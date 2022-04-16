import View from "./View";

import icons  from 'url:../../img/icons.svg';

class PreviewView extends View  {

    _parentElement = ''
    
  

 
_generateMarkupPreview() {
  const id = window.location.hash.slice(1);
    return`
    <li class="preview">
<a class="preview__link preview__link
$this.id === id ? ' preview__link--active':''}" href="$thiss.id}">
  <figure class="preview__fig">
    <img src="${this.image}" alt=">${this.title}" />
  </figure>
  <div class="preview__data">
    <h4 class="preview__title">${this.title}</h4>
    <p class="preview__publisher">${this.publisher}</p>
   
  </div>
</a>
</li>
`
}
};

export default new PreviewView();