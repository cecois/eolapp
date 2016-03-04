var State = Backbone.Model.extend({
    defaults: {
        "q": null,
        "slug": "about-cover-letter-gloss",
        // "panestate": 1, // or 0 for collapsed
        "panestate": "out", // or 0 for collapsed
        // "tab": "about", // prefix this with menu-a for use
        "bbox": null,
        "basemap": null,
        "agobs":[],
        "agob":null,
        "gobseens":[]
        // "ap": {
        //     "slug": null,
        //     "geomid": null
        // }
    },
    initialize: function(options) {
        options || (options = {});
        // this.listenTo(appQuery, 'change:rawstring', this.update)
        // this.listenTo(appQuery, 'change:solrstring', this.test_appquerysolrstring)
        // this.listenTo(appQuery, 'change:solrstring', this.update_q)
        this.listenTo(appBaseLayers, 'change', this.update_b),
        // this.listenTo($("div.bhoechie-tab-menu>div.list-group>a"), 'click', this.update_t),

// set the slug from default
this.upSlug()

            // this.on('change:bbox', this.update, this),
            // this.on('change:panestate', this.update, this),
            // this.on('change:tab', this.update, this),
            this.on('change:slug', this.upSlug, this),
            this.on('change:agobs', this.upGobs, this)
            // this.on('change:agob', this.upGob, this),
            // this.on('change:gobseen', this.update, this)



        return this
    },
    upSlug: function(){

// when a slug comes in or is set, we parse it for the major category so in display we can show that stuff's pane
// this used to be a routing param but basically pointless there, trumped by the slug every time
this.set({tab:this.get("slug").split("-")[0]})
        // appRoute.navigate(this.pullurl(), {trigger: false});

        return this

    },
    upGobs: function(){

// if agobs is an array, we can really only have one be THE active one
// we could let users pass this in (or web app logic) but for now we'll just choose...kinda randomly
        this.set({agob:_.last(this.get("agobs"))})

        return this

    },
    update_tab: function(){

        appRoute.navigate(this.pullurl(), {trigger: true});

        return this

    },
    nonny: function(){
        console.log("url would be:");
        console.log(this.pullurl());
        return this
    },
    update_m: function() {
        appRoute.navigate(this.pullurl())
        return this
    },
    update_b: function() {
        var tl = appBaseLayers.findWhere({
            active: true
        })
        this.set({
            basemap: tl.get("name")
        })
        return this
    }, //update_b

    update: function() {
            appRoute.navigate(this.pullurl(), {
                // trigger: true
            })
        } //update
        ,
    upGob: function() {
this.get("agobs").push(appState.get("agob"))

 // appRoute.navigate(this.pullurl(), {trigger: true});

// appState.get("agobs").push(appState.get("agob"))
// dunno man - #returnto - this wznt firing on its own
                // appState.update()
                return this

        } //update
        ,
        getAgobString: function(){


var str = this.get("agobs")

if(str.length==1){
    return str
} else if(str.length==0){
    return ''

    }
    else {
            return str.join(",")
        }

        },
    pullurl: function() {
        // var aslug = this.get("ap").slug
        var aslug = this.get("slug")
        var abbox = this.get("bbox")
        var apanestate = this.get("panestate")
        var agobs = this.getAgobString()
        var apane = this.get("pane")
        var abase = this.get("basemap")
        var atab = this.get("tab")
        var state =
            //thishost+"/#"+
            // appQuery.get("solrstring") + "/" + apane + "/" + aslug + "/" + abbox + "/" + apanestate + "/" + aagob + "/" + abase
            "#"+ aslug + "/" + abbox + "/" + atab +"/" + apanestate + "/" + agobs
             // + "/" + abase
        return state
    }
});