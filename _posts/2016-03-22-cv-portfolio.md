---
layout: post
title: 'Portfolio'
date: 2016-03-22 02:18:42.000000000 -04:00
type: post
published: true
status: publish
order: 1
category:
- cv
tags:
- apps
meta:
author:
display_name: CCM
first_name: C.C.
last_name: Miller
---

### MITLL

MIT Lincoln Laboratory is a federally-funded research and development center that "applies advanced technology to problems of national security." As such, they take security very seriously and my work there cannot be made public. I can say, however, that my primary objective when I started in 2012 was to build a system for the storage, search, discovery, and delivery of spatial data. Which I did - with <a href="https://www.mongodb.com/">MongoDB</a> and [PostGIS](http://postgis.net/) on the back end and [Apache Solr](http://lucene.apache.org/solr/), [GeoServer](http://geoserver.org/), [GeoWebcache](http://geowebcache.org/) in the middle, I wrote an API (first in [Slim](http://www.slimframework.com/), then [Kohana](https://kohanaframework.org/)) that I also happen to consume with a single-page web app written primarily against [BackboneJS](backbonejs.com) (but with other fun stuff such as [Bootstrap](http://getbootstrap.com/), [Leaflet](http://leafletjs.com), [Handlebars](http://handlebarsjs.com/), all that hip stuff). There are numerous third-party APIs and projects in there as well (e.g. [Freebase](https://www.freebase.com/), [D3.js](https://d3js.org/), [MapQuest](http://open.mapquestapi.com/), [OpenStreetMap](https://wiki.openstreetmap.org/wiki/Main_Page), [CloudMade](http://cloudmade.com/)). The result is beautiful, clean, and a success for my sector - given interest from the Lab community, I have begun work that will couple the lightweight web GUI with powerful grid computing resources at MITLL in order to support additional features.

I do wish I could show it off (it's pretty!), but I cannot. 

### This Site

This electronic CV was built during <span class="copy-trigger" data-type="gob" data-id="g|1">my commute</span>. It has three chief components: 

1. The web app you're using - it's written in [Jekyll](https://jekyllrb.com/) and built on [BackboneJS](backbonejs.com) with [Leaflet](http://leafletjs.com) as the map framework. There is a smattering of smaller other libraries in there, as well ([Less](http://lesscss.org/), [Underscore](http://underscorejs.org), [Handlebars](http://handlebarsjs.com/), etc.) I chose [Jekyll](https://jekyllrb.com/) so that I could freely and easily write about my work in Markdown and not worry about formatting and display (or even organization, to some extent). 

2. But Jekyll is static (by design) and I wanted something more dynamic for the mapping piece. Fortunately, it's very easy to wrap static Jekyll content in the logic and MVC-ness of Backbone (or Ember or Angular, et al, but I use Backbone), organizing and calling upon individual nodes or posts at will based on this or that model or method in the gui.

4. Map data (<span class="copy-trigger" data-type="gob" data-id="g|1">my commute</span>, the locations of my previous jobs, etc.) are hosted in [CartoDB](https://cartodb.com/), a cloud spatial database with an easy SQL API.


### Hobby Site #1 - faceted podcast jokes
* <img style="margin-left:12px;margin-botto
m:12px;" class="pull-right" src="https://s3.amazonaws.com/f.cl.ly/items/2y0s291c0A0d1J1A0p3Q/BitMap__CBB.jpg?v=b67f3575" alt="" width="250px" height="178px" border="0" />Eschewing the conventional wisdom that it's not great to get personal in a job application, a hobby site I wrote that [indexes and maps every recurring joke](http://bitmap-lbones.rhcloud.com/#huh) on the Comedy Bang! Bang! podcast also represents my ability to present complex data as cleanly as possible. I don't feel totally comfortable sharing a personal passion project in this way, but it is built with [MongoDB](https://www.mongodb.com), [CartoDB](https://cartodb.com/), [Leaflet](http://leafletjs.com), [Backbone](backbonejs.com), [Solr](http://lucene.apache.org/solr/), and [Bootstrap](http://getbootstrap.com/) and hosted on a [Red Hat OpenShift](https://www.openshift.com/) instance. If you're not a fan it won't make a ton of sense, but suffice it to say that I've built a site that allows other fans to search for any recurring joke from the history of the show, any character, any guest, etc. and, when mappable, see them in the location they reference on earth. Results are faceted by tag and episode number (in addition to the actual bit). The entire site runs on an [OpenShift](http://openshift.redhat.com) instance.

### Hobby Site #2 - WordPress --> Jekyll
* <img style="margin-left:12px;margin-bott
om:12px;" class="pull-right" src="/cvjek/assets/offline/thumb-spatialtrack.jpg" alt="" width="250px" height="178px" border="0" />Another instance where more became less (became more) is my conversion of an old [WordPress](https://wordpress.org/) blog into a more svelte and muuuuch faster Jekyll+Leaflet coupling. None of the map plugins for WordPress ever gave enough map, always felt like afterthoughts. When web applications force primary content into little side boxes -- especially map content -- it drives me crazy. Using a custom Leaflet+Jekyll pairing again allows a user to engage the blog copy normally but also allows them to immerse themselves into a full-frame map and access primary content that way, too. This site also runs on an [OpenShift](http://openshift.redhat.com) instance.


### Select Older Work

*At Purdue and Texas A&M International, I was not strictly-speaking in a developer position. I was faculty in both places, charged at TAMIU with developing out library-based spatial data & GIS services and at Purdue with a much greater mission of developing library data services and education to better support and collaborate with other cyberinfrastructure-building projects across campus. It just so happened that effectively _all_ of this work required web-facing development, either custom, ground-up mapping or search apps or (less niche) [WordPress](https://wordpress.org/) instances that advertised our services. At times I directed the work of others (post-docs, graduate RAs, and undergrads), but typically I did all of my own authoring.*


* Spatial Data Catalog Project (MADA@P) - Purdue, 2008-2012
	* an open source­-built metadata+data+GUI stack to deliver spatial data
	* built (by me) with [GeoServer](http://geoserver.org) ([MapServer](http://mapserver.org), early on), [OpenLayers](http://openlayers.org), [jQuery](http://jquery.com), on top of a metadata store in [GeoNetwork OpenSource](http://geonetwork-opensource.org) that I re-re-indexed with a [Solr](http://lucene.apache.org/solr).


* Targeted Metadata Crawler - Purdue, 2008-2011
	* web crawler side project that harvested specifically spatial metadata from social data streams
	* design by me, parser written in Java by one of my graduate assistants


* IsoMAP: Isoscape Modeling, Analysis and Prediction - Purdue, 2008-2012
	* spatial data processing and organization workflows 
	* web app (in [OpenLayers](http://openlayers.org)) that interfaces with metadata stores, spatial database contents, and TeraGrid job managing software
	* metadata authoring, metadata indexing, and metadata search mechanism
	* I built the spatial component of an NSF­-funded cyberinfrastructure project that delivers powerful environmental isotope modeling, analysis, and visualization over the web


* ISEE: Integrating Spatial Educational Experiences into Crop, Soil, and Environmental Science - Purdue, 2008-2012
	* 100s of GBs of soil imagery prepared and delivered to web and other clients (Google Earth) in soil science classrooms


* Geoinformatics Course: 2008, 2010
	* graduate­level course taught by me in which geoscientific technologies, data, and workflows are examined together as irrevocably interrelated pieces of a growing geocyberinfrastructure


* Vulcan - Purdue, 2006-2012
	* provided data location and preparation and GIS methodologies to this groundbreaking inventory of U.S. CO2 emissions (<a href="http://vulcan.project.asu.edu/">now at ASU</a>)


* Spatialized Repository Collections - Purdue, 2010-2012
	* a side-project that was building mostly­-automated workflows designed to extract semantically useful placenames and other location data from fulltext scholarly repository documents


* Automated Georeferencer (PLAutoGeoRef) - Purdue, 2010-2012
	* in-­house research designed to automate the laborious georeferencing of historic aerial photo collections
	* design and direction by me - processing algorithm by my GA, Jae Sung Kim


* 1906 Soil Survey Resurrection - Purdue, 2007­-2008
	* historic map digitization and data extraction ­a 1906 soil survey document was digitized and deposited into the Purdue Libraries institutional repository; its map was further georeferenced and run through a segmentation algorithm (Jae Sung Kim) which helped us pull out real polygonal vector data for use in modern GISs


* Pilot PTO Dailies - Purdue, 2010-2012
	* an automated data publishing workflow incorporates extant library data APIs to push Purdue Terrestrial Observatory remote sensing data to the web