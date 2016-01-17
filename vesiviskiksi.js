// I stole all this stuff from here: https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js

walk(document.body);

function walk(node) {
	// I stole this function from here:
	// http://is.gd/mwZp7E
	var child, next;
	
	switch (node.nodeType) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while (child) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;
		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode)  {
	var v = textNode.nodeValue;
	
    v = v.replace(/Vesi/g, "Viski");
    v = v.replace(/Vedet/g, "Viskit");
	v = v.replace(/Vettä/g, "Viskiä");
    v = v.replace(/Vesiä/g, "Viskejä");
	v = v.replace(/Veden/g, "Viskin");
	v = v.replace(/Vesien/g, "Viskien");
	v = v.replace(/Vedeksi/g, "Viskiksi");
	v = v.replace(/Vesiksi/g, "Viskeiksi");
    v = v.replace(/Veteen/g, "Viskiin");
    v = v.replace(/Vesiin/g, "Viskeihin");
    v = v.replace(/Vetenä/g, "Viskinä");
    v = v.replace(/Vesinä/g, "Viskeinä");
	v = v.replace(/Vedessä/g, "Viskissä");
	v = v.replace(/Vesissä/g, "Viskeissä");
	v = v.replace(/Vedettä/g, "Viskittä");
	v = v.replace(/Vedellä/g, "Viskillä");
	v = v.replace(/Vesillä/g, "Viskeillä");
	v = v.replace(/Vedelle/g, "Viskille");
	v = v.replace(/Vesille/g, "Viskeille");
	v = v.replace(/Vedeltä/g, "Viskiltä");
	v = v.replace(/Vesiltä/g, "Viskeiltä");
	v = v.replace(/Vedestä/g, "Viskistä");
	v = v.replace(/Vesistä/g, "Viskeistä");
	v = v.replace(/Valtameri/g, "Viskimeri");
	
    v = v.replace(/vesi/g, "viski");
    v = v.replace(/vedet/g, "viskit");
	v = v.replace(/vettä/g, "viskiä");
    v = v.replace(/vesiä/g, "viskejä");
	v = v.replace(/veden/g, "viskin");
	v = v.replace(/vesien/g, "viskien");
	v = v.replace(/vedeksi/g, "viskiksi");
	v = v.replace(/vesiksi/g, "viskeiksi");
    v = v.replace(/veteen/g, "viskiin");
    v = v.replace(/vesiin/g, "viskeihin");
    v = v.replace(/vetenä/g, "viskinä");
    v = v.replace(/vesinä/g, "viskeinä");
	v = v.replace(/vedessä/g, "viskissä");
	v = v.replace(/vesissä/g, "viskeissä");
	v = v.replace(/vedettä/g, "viskittä");
	v = v.replace(/vedellä/g, "viskillä");
	v = v.replace(/vesillä/g, "viskeillä");
	v = v.replace(/vedelle/g, "viskille");
	v = v.replace(/vesille/g, "viskeille");
	v = v.replace(/vedeltä/g, "viskiltä");
	v = v.replace(/vesiltä/g, "viskeiltä");
	v = v.replace(/vedestä/g, "viskistä");
	v = v.replace(/vesistä/g, "viskeistä");
	v = v.replace(/valtameri/g, "viskimeri");
	
	textNode.nodeValue = v;
}
