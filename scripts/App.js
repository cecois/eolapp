---
---

/*
----------------------------------------------------------------------  GLOBALS
*/
window.verbose=true
window.gpre_point = "g."
window.gpre_poly = "gD"
window.gpre_line = "g|"


{% capture posts %}
[
{% for post in site.categories.menud reversed %}
{
	"title"    : "{{ post.title }}",
	"url"      : "{{ post.url }}",
	"order"      : "{{ post.order }}",
	"slug"      : "{{ post.slug }}",
	"splash"      : "{{ post.splash }}",
	"date"     : "{{ post.date | date: "%B %d, %Y" }}",
	"content"  : "{{ post.content | escape }}"
} {% if forloop.last %}{% else %},{% endif %}
{% endfor %}
]
{% endcapture %}


var appState = new State({});

/* -------------------------------------------------- MAP STUFF -----------------------  */

/* -------------- MAP STYLES -----------------------  */

var CVJUTIL = new UTIL();

/* ---------- BASELAYERS ------------ */

var baselayers = {
	"layers": [{
		"name": "carto_darkmatter",
		"active": false,
		"source": "carto",
		"nom": "Carto Dark Matter",
		"mapis": "dark",
		"definition": {
			"subdomains": ["a", "b", "c", "d"],
			"maxZoom": 18,
			"url": "https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}.png",
			"noWrap": true
		}
	},{
		"name": "stamen_toner",
		"active": true,
		"source": "stame",
		"nom": "Stamen Toner",
		"mapis": "dark",
		"definition": {
			"subdomains": ["a", "b", "c","d"],
			"maxZoom": 18,
			"url": "http://{s}.tile.stamen.com/toner/{z}/{x}/{y}.png",
			"noWrap": true
		}
	}, {
		"name": "dummy",
		"active": false,
		"source": "localhost",
		"nom": "A Real Dummy",
		"thumb": "assets/offline/thumb-dummy.png",
		"mapis": "dark",
		"definition": {
			"maxZoom": 18,
			"url": "assets/offline/thumb-dummy.png",
			"noWrap": true
		}
	}

	]
}

var mapBaseLayers = new BaseLayersCollection(baselayers.layers);
var mapBaseView = new BaseLayersView({
	collection: mapBaseLayers
});


/* -------------------------------------------------- POSTS -----------------------  */
var posts = {{posts | strip_newlines}}

var cxPosts = new PostsCollection(_.sortBy(posts,'order'), {});
var vPostsView = new PostsView({
	collection: cxPosts
});
var vPostsMenu = new PostsMenuView({
	collection: cxPosts
});

/* -------------------------------------------------- GEOMS -----------------------  */

var mapGeoms = new GeomsCollection();
var mapGeomsView = new GeomsView({
	collection: mapGeoms
});
mapGeoms.fetch()

/* -------------------------------------------------- HANDLEBARS -----------------------  */
Handlebars.registerHelper('debug', function(options) {

	return new Handlebars.SafeString("check console");
});

Handlebars.registerHelper('groupem', function(slug) {


	// var group = this.split("-")[0]
	var grop = slug.split("-")[0]
	return new Handlebars.SafeString(grop);
});

Handlebars.registerHelper('time-year-month', function(object) {
	var timeobj = new Time(object);
	var t = timeobj.format('Y' + " " + 'M');
	return new Handlebars.SafeString(t);
});

/* -------------------------------------------------- FUNCS -----------------------  */

function pullEOLID(idin) {
	var idina = idin.split(":")
	switch (idina[0]) {
		case 'line':
		var id = gpre_line + idina[1]
		break;
		case 'poly':
		var id = gpre_poly + idina[1]
		break;
		case 'point':
		var id = gpre_point + idina[1]
		break;
		default:
		var id = null
	}
	return id
}


function leafletize_Bbox(bboxstring){
	// what we could do in here is add some validation, fix the syntax for ppl who don't send form West,South,East,North but get with it yo!
	var ba = bboxstring.split(",")

	var southWest = L.latLng(ba[1], ba[0]),
	northEast = L.latLng(ba[3], ba[2]),
	bounds = L.latLngBounds(southWest, northEast);

	return bounds
}

/* -------------------------------------------------- READY -----------------------  */
$(document).ready(function() {

	$('[data-toggle="tooltip"]').tooltip()

	// $("div.bhoechie-tab-menu>div.list-group>a").click(function(e) {
	// 	e.preventDefault();
	// 	var tid = $(e.currentTarget).attr('id').split("-")[2]
	// 	$(this).siblings('a.active').removeClass("active");
	// 	$(this).addClass("active");
	// 	var index = $(this).index();
	// 	$("div.bhoechie-tab>div.bhoechie-tab-content").removeClass("active");
	// 	$("div.bhoechie-tab>div.bhoechie-tab-content").eq(index).addClass("active");
 //    }); //click

 $("#paneToggler").click(function(e){

 	if(appState.get("panestate")=="down"){
 		// $(this).removeClass("collapsed")
 		appState.set({panestate:"out"});
 	} else {
 		appState.set({panestate:"down"});
 		// $(this).addClass("collapsed")
 	}
 })

 $(document).keydown(function(e){
 	if(e.keyCode == 18){
 		if(appState.get("panestate")=="down"){
 			appState.set({panestate:"out"});
 		} else {
 			appState.set({panestate:"down"});
 		}
 	}
 })

// if(appState.get("panestate")=="down"){
//             $("#postslist-container").addClass("collapsed")
//         $("#active-container").addClass("collapsed")
// $('body').find('[data-toggle="tooltip"]').tooltip('hide');



});