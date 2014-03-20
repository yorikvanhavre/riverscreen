//console.log('search.js initialized');

var searchform = document.querySelector("#search");

if (searchform) {
  searchform.onsubmit = function () {
    var searchfield = document.querySelector("#searchfield");
    if (searchfield) {
      searchterm = searchfield.value;
      searchterm = searchterm.replace(/s/g,"%20");
      searchurl = "https://duckduckgo.com/?q="+searchterm 
      console.log("search form submitted:"+searchurl);
      window.open(searchurl, '_blank','menubar=no,location=no,resizable=yes,scrollbars=yes,status=no');
    }
    return false;
  };
}