var toc = '<div class="title">Table of content</div>'
try {
	if(tocTitle) {
		toc = '<div class="title">' + tocTitle + '</div>';
	}
} catch(e) {
	// Do nothing
}

$("#TOC").prepend(toc);
