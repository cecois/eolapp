var State = Backbone.Model.extend({
    defaults: {
        "q": null,
        "slug": null,
        "panestate": "out", // or 0 for collapsed
        "bbox": null,
        "basemap": null,
        "agob": null,
        "gogob":false
    },
    initialize: function(options) {
        options || (options = {});

        if( !this.get('gobseens') ){ 
            this.set({gobseens: new Array()});
        }

        this.on('change:slug', this.update, this)
        this.on('change:panestate', this.update, this)
        this.on('change:bbox', this.update, this)
        this.on('change:agob', this.up_gob, this)

        return this
    },
    up_gob: function() {

        var gbseens = this.get("gobseens")


        gbseens.push(this.previousAttributes().agob)
        this.set({gobseens:_.unique(gbseens)})


        return this
        .update()

    },
    update: function() {



        appRoute.navigate(this.pullurl());
        return this
        } //update
        ,
        getAgobString: function() {
            var str = this.get("agobs")
            if (str.length == 0 || typeof str == 'undefined') {
                return "null"
            } else if(typeof str == 'object'){
                return str.join(",")
            } else {
                return str}
            },

            pullurl: function() {

                var state = "#" + this.get("slug")+"/"+this.get("panestate")+ "/" + this.get("agob")+"/"+this.get("bbox")
                return state
            }
        });

var BaseLayer = Backbone.Model.extend({

    defaults:{
        active:false
    },
    initialize:function(){

    }
});


var Geom = Backbone.Model.extend({});


var Post = Backbone.Model.extend({


    url: function() {
        return "api/jekyllfetcher.php"
    },
    initialize: function(options) {
        options || (options = {});
        return this
    }
}); //Post

var UTIL = Backbone.Model.extend({
    initialize: function(){return this},
    get_style: function(gtype,active,seen){

  /**
        in here we nudge the style definitions a little bc it's not always a 1:1 match between
        geomtype and the name of the style applies (e.g. linestring vs. multilinestring
        or the fact that polys get line styles, too)
        **/

// first let's normalize for beauty:
if(gtype.toLowerCase()=='point'){var gtypa=gtype.toLowerCase()}
    if(gtype.toLowerCase()=='poly'){var gtypa=gtype.toLowerCase();}
if(gtype.toLowerCase()=='multipolygon'){var gtypa='poly';}
if(gtype.toLowerCase()=='polygon'){var gtypa='poly';}
if(gtype.toLowerCase()=='line'){var gtypa=gtype.toLowerCase();}
if(gtype.toLowerCase()=='multilinestring'){var gtypa='line';}
if(gtype.toLowerCase()=='linestring'){var gtypa='line';}



var fill = "#384754";
var filla = "#C7E048";
var fills = "black";
var pipeseen = "#929292";
var bord = "#C7E048";
var borda = "#C7E048";
switch (gtypa) {
    case 'point':
    if (active==1) {
        var style = {
            radius: 18,
            fillColor: filla,
            color: borda,
            weight: 13,
            opacity: 1,
            fillOpacity: 0.8,
        };
    } else {
        if (seen==1) {
            var style = {
                radius: 8,
                fillColor: fill,
                color: fills,
                weight: 10,
                opacity: .6,
                fillOpacity: 0.2,
            };
        } else {
            var style = {
                radius: 8,
                fillColor: fill,
                color: fills,
                weight: 10,
                opacity: 1,
                fillOpacity: 0.8,
            };
        }}
        break;
        case 'poly':
        if (active==1) {
            var style = {
                fillColor: filla,
                color: borda,
                weight: 13,
                opacity: 1,
            };
        } else {
            if (seen==1) {
                var style = {
                    fillColor: fill,
                    color: fills,
                    weight: 10,
                    opacity: .2,
                };
            } else {
                var style = {
                    fillColor: fill,
                    color: fill,
                    weight: 10,
                    opacity: .8,
                };
            }}
            break;
            case 'line':
            if (active==1) {
                var style = {
                    fillColor: filla,
                    color: borda,
                    weight: 13,
                    opacity: 1,
                };
            } else {
                if (seen==1) {
                    var style = {
                        fillColor: fills,
                        color: pipeseen,
                        weight: 10,
                        opacity: 1,
                    };
                } else {
                    var style = {
                        fillColor: fill,
                        color: fill,
                        weight: 10,
                        opacity: .8,
                    };
                }}
                break;
                default:
                var style = {
                    fillColor: "gray",
                    color: "gray",
                    weight: 3,
                    opacity: .3
                };
            }
            return style


    } //get_style
})