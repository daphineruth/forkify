

class SearchView {
    _parentEl = document.querySelector('.search');
  
    getQuery() {
      const query = this._parentEl.querySelector('.search__field').value;
      this._clearInput();
      return query;
    }
}
export default new SearchView();
