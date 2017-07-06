---
layout: post
title: 'Portfolio'
splash: 'splash-cv-portfolio.jpg'
date: 2016-03-22 02:18:42.000000000 -04:00
type: post
published: true
status: publish
order: 1
category:
- cv
- menud
tags:
- apps
meta:
author:
display_name: CCM
first_name: C.C.
last_name: Miller
---

### MITLL

<img src="/assets/img/noun_199345_cc.png" class="pull-right"/>MIT Lincoln Laboratory is a federally-funded research and development center that "applies advanced technology to problems of national security." As such, they take security very seriously and my work there cannot be shown. I can say that my primary objective when I started in 2012 was to build a system for the storage, search, discovery, and delivery of spatial data. Which I did - with <a href="https://www.mongodb.com/">MongoDB</a> and [PostGIS](http://postgis.net/) on the back end; [Apache Solr](http://lucene.apache.org/solr/), [GeoServer](http://geoserver.org/), [GeoWebcache](http://geowebcache.org/), and [MapProxy](https://mapproxy.org) in the middle; an API (first in [Slim](http://www.slimframework.com/), then [Node](https://nodejs.org)) that I also happen to consume with a single-page web app written primarily against [BackboneJS](backbonejs.com) (but with other fun stuff such as [Bootstrap](http://getbootstrap.com/), [Leaflet](http://leafletjs.com), [Handlebars](http://handlebarsjs.com/), all that hip stuff). There are numerous third-party APIs and projects in there as well (e.g. the erstwhile [Freebase](https://www.freebase.com/), [D3.js](https://d3js.org/), [MapQuest](http://open.mapquestapi.com/), [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Main_Page), [CloudMade](http://cloudmade.com/)). The result is pretty, clean, and a success for my sector. But I cannot show it.

There are other projects at MITLL, too, that evidence a growing and diversifying skill set - an API in NodeJS that brokers map routing (against data in PostGIS+pgRouting); a web scraper in NodeJS that harvests web targets based on certain semantic requirements; a MongoDB Map/Reduce workflow that summarizes and reports on many millions of archival items; and numerous ad hoc web apps designed to visualize this or that data problem or to deliver data found on behalf of a lab researcher. But these, too, cannot be copied, distributed, or shown off.


### This Site

This electronic CV was built during <span class="copy-trigger" data-type="gob" data-id="g|1">my commute</span>. It's a [Jekyll](https://jekyllrb.com/) instance that has been draped over [BackboneJS](backbonejs.com) with [Leaflet](http://leafletjs.com) as the map framework. There is a smattering of smaller other libraries in there, as well ([Less](http://lesscss.org/), [Underscore](http://underscorejs.org), [Handlebars](http://handlebarsjs.com/), etc.) I chose [Jekyll](https://jekyllrb.com/) so that I could freely and easily write about my work in Markdown and not worry about formatting and display (or even organization, to some extent).

But Jekyll is static (by design) and I wanted something more dynamic for the mapping piece. Fortunately, it's pretty easy to wrap static Jekyll content in the logic and MVC-ness of Backbone (or Ember or Angular, et al, but I use Backbone). Check it, from App.js:

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

...And just like that all of that Jekyll content, front matter intact, is available to do with what we please based on this or that model or method in the GUI. (Although *nota bene* - [Gulp](http://gulpjs.com) will squeeze this out of the file so it can't really be minimized into your concatenated app.min.js or whatever). "Hey, genius," you'll note - "why not just build your big, fat JavaScript app and pipe static html files into it?" Well, because then I would have a full and complete Jekyll site sitting around for super fast re-theming (should I decide to do so) AND because I wouldn't have learned what I did about coupling Jekyll with a webmapping framework (Leaflet) in the way I like Leaflet to operate. Who wants their Leaflet map to reset/refetch/redraw every time you hop from one static Jekyll html to another?

P.S. As with several other projects, map data (commute, the locations of my previous positions, etc.) are hosted in [CartoDB](https://cartodb.com/), a cloud spatial database with an easy SQL API. In this particular case the data are prefetched and served statically out of the generated Jekyll dir. If for no other reason than it's easier to work on the T that way (i.e. easier on the ol' T-Mobile tether).


### Vulcan Maps here?????? (or in their own .md?)
### Only the Lonely
### GarbageBot
### Garbage Atlas 2014
### WendyMarks.com
### The Clothes I Own

### Hobby Site #1 - faceted podcast jokes
* <img style="margin-left:12px;margin-botto
m:12px;" class="pull-right" src="https://s3.amazonaws.com/f.cl.ly/items/2y0s291c0A0d1J1A0p3Q/BitMap__CBB.jpg?v=b67f3575" alt="" width="250px" height="178px" border="0" />Eschewing the conventional wisdom that it's not great to get personal in a job application, a hobby site I wrote that [indexes and maps every recurring joke](http://bitmap-lbones.rhcloud.com/#huh) on the Comedy Bang! Bang! podcast also represents my ability to present complex data as cleanly as possible. I don't feel totally comfortable sharing a personal passion project in this way, but it is built with [MongoDB](https://www.mongodb.com), [CartoDB](https://cartodb.com/), [Leaflet](http://leafletjs.com), [Backbone](backbonejs.com), [Solr](http://lucene.apache.org/solr/), and [Bootstrap](http://getbootstrap.com/) and hosted on a [Red Hat OpenShift](https://www.openshift.com/) instance. If you're not a fan it won't make a ton of sense, but suffice it to say that I've built a site that allows other fans to search for any recurring joke from the history of the show, any character, any guest, etc. and, when mappable, see them in the location they reference on earth. Results are faceted by tag and episode number (in addition to the actual bit). The entire site runs on an [OpenShift](http://openshift.redhat.com) instance.

### Hobby Site #2 - WordPress --> Jekyll
* <img style="margin-left:12px;margin-bott
om:12px;" class="pull-right" src="https://s3.amazonaws.com/f.cl.ly/items/342D10090E25280z0X37/thumb-spatialtrack.jpg?v=aef44080" alt="" width="250px" height="178px" border="0" />Another instance where more became less (became more) is my conversion of an old [WordPress](https://wordpress.org/) blog into a [more svelte and muuuuch faster Jekyll+Leaflet coupling](http://map.milleria.org/). None of the map plugins for WordPress ever gave enough map, always felt like afterthoughts. When web applications force primary content into little side boxes -- especially map content -- it drives me crazy. Using a custom Leaflet+Jekyll pairing again allows a user to engage the blog copy normally but also allows them to immerse themselves into a full-frame map and access primary content that way, too. This site also runs on an [OpenShift](http://openshift.redhat.com) instance.


### Select Older Work

*At Purdue and Texas A&M International, I was not strictly-speaking in a developer position. I was faculty in both places, charged at TAMIU with developing out library-based spatial data & GIS services and at Purdue with a much greater mission of developing library data services and education to better support and collaborate with other cyberinfrastructure-building projects across campus. It just so happened that effectively _all_ of this work required web-facing development, either custom, ground-up mapping or search apps or (less niche) [WordPress](https://wordpress.org/) instances that advertised our services. At times I directed the work of others (post-docs, graduate RAs, and undergrads), but typically I did all of my own authoring.*


* _Spatial Data Catalog Project (MADA@P)_ - Purdue, 2008-2012
	* an open source­-built metadata+data+GUI stack to deliver spatial data
	* built (by me) with [GeoServer](http://geoserver.org) ([MapServer](http://mapserver.org), early on), [OpenLayers](http://openlayers.org), [jQuery](http://jquery.com), on top of a metadata store in [GeoNetwork OpenSource](http://geonetwork-opensource.org) that I re-re-indexed with a [Solr](http://lucene.apache.org/solr).


* _Targeted Metadata Crawler_ - Purdue, 2008-2011
	* web crawler side project that harvested specifically spatial metadata from social data streams
	* design by me, parser written in Java by one of my graduate assistants


* _IsoMAP: Isoscape Modeling, Analysis and Prediction_ - Purdue, 2008-2012
	* spatial data processing and organization workflows
	* web app (in [OpenLayers](http://openlayers.org)) that interfaces with metadata stores, spatial database contents, and TeraGrid job managing software
	* metadata authoring, metadata indexing, and metadata search mechanism
	* I built the spatial component of this NSF-funded cyberinfrastructure project that delivers powerful environmental isotope modeling, analysis, and visualization over the web


* _ISEE: Integrating Spatial Educational Experiences into Crop, Soil, and Environmental Science_ - Purdue, 2008-2012
	* 100s of GBs of soil imagery prepared and delivered to web and other clients (Google Earth) in soil science classrooms


* _Geoinformatics Course_: 2008, 2010
	* graduate-level course taught by me in which geoscientific technologies, data, and workflows are examined and practiced together as irrevocably interrelated pieces of a growing geocyberinfrastructure


* _Vulcan_ - Purdue, 2006-2012
	* provided data location and preparation and GIS methodologies to this groundbreaking inventory of U.S. CO2 emissions (<a href="http://vulcan.project.asu.edu/">now at ASU</a>)


* _Spatialized Repository Collections_ - Purdue, 2010-2012
	* a side-project that was building mostly­-automated workflows designed to extract semantically useful placenames and other location data from fulltext scholarly repository documents


* _Automated Georeferencer (PLAutoGeoRef)_ - Purdue, 2010-2012
	* in-house research designed to automate the laborious georeferencing of historic aerial photo collections
	* design and direction by me - processing algorithm by my GA, Jae Sung Kim


* _1906 Soil Survey Resurrection_ - Purdue, 2007­-2008
	* historic map digitization and data extraction ­a 1906 soil survey document was digitized and deposited into the Purdue Libraries institutional repository; its map was further georeferenced and run through a segmentation algorithm (Jae Sung Kim) which helped us pull out real polygonal vector data for use in modern GISs


* _Pilot PTO Dailies_ - Purdue, 2010-2012
	* an automated data publishing workflow incorporates extant library data APIs to push Purdue Terrestrial Observatory remote sensing data to the web

### Purdue Tenure Doc
Lastly, here is a document left over from a successful bid for tenure at Purdue University. It is a prose case that argues my value to the overall strategic mission of Purdue at that time as well as the specific objectives of Purdue University Libraries. It is included here because it might provide some context and exposition for how a nominal librarian might come to be a teacher/developer/mappaker/sysadmin.

[Purdue University Tenure Narrative](https://www.dropbox.com/s/2slebgh83kzuegj/ccmiller_tenureNarrative.pdf?dl=0)
