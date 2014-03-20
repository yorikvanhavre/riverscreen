var bookmarks = [["Gmail","https://gmail.com"],
                 ["Google+","https://www.google.com/plus"],
                 ["Gcal","https://www.google.com/calendar"]
                 ];


var bookobjs = []
for (var i = 0; i < bookmarks.length; i++) {
	bookobjs.push( { 
		name: bookmarks[i][0], 
		url: bookmarks[i][1], 
		launch: function launch() { 
			window.open(this.url,'_blank','menubar=no,location=no,resizable=yes,scrollbars=yes,status=no') 
		} 
	} );
}

//console.log(bookobjs);
