var PostsActiveView = Backbone.View.extend({
    el: "#posts-active",
    url: function() {
        return 'api/postfetcher.php?slug=' + this.collection.findWhere({
            "active": true
        }).get("lopath")
    },
    events: {
        // "click .bt-post-zoomto": "zoomto",
    },
    template: Handlebars.templates['postsActiveViewTpl'],
    // events: {},
    initialize: function() {
        this.render()
        this.listenTo(this.collection, 'change:active', this.render)
        // return this.render().rewire();
    },
    zoomto: function() {
        var a = this.collection.findWhere({
                "active": true
            })
            // map.panInsideBounds(a.get("zoomto"));
        map.fitBounds(a.get("zoomto"));
        return this
    },
    rewire: function() {

        // $(".bt-post-zoomto").tooltip({
        //         position:'top',
        //         trigger:'hover',
        //         container: 'body'
        //     })

$(".bt-post-bank li").tooltip({
                position:'top',
                trigger:'hover',
                container: 'body'
            })

            var that=this
        $(".bt-post-zoomto").click(function(e){
            e.preventDefault()
            that.zoomto()
        })
            //
        return this
        .show()
    },
    show: function(){

        $(".bhoechie-tab-content").removeClass("active");
$(".list-group-item").removeClass("active")

$("#bhoechie-active-container").addClass("active");
$("#menu-a-active").addClass("active")

var img = document.createElement('img');
// var img = $("#active-post-jacket-tmp")
var a = appPosts.findWhere({
                "active": true
            })
var iu = "offline/jackets/"+a.get("id")+".jpg"

$("#active-post-jacket-tmp").attr("src",iu)

img.setAttribute('src', iu)

img.addEventListener('load', function() {
    var vibrant = new Vibrant(img);
    var swatches = vibrant.swatches()

// there's a pointless color bar that we fill w/ post jacket swatches
    $(".active-colorbar-0").css("background-color",swatches.Vibrant.getHex())
            $(".active-colorbar-1").css("background-color",swatches.Muted.getHex())
            $(".active-colorbar-2").css("background-color",swatches.DarkVibrant.getHex())
            $(".active-colorbar-3").css("background-color",swatches.DarkMuted.getHex())

// color the buttons, too
            $(".bt-post-bank-item").css("color",swatches.Muted.getHex());

$("#posts-active > h3").css("color",swatches.DarkVibrant.getHex())
    // for (var swatch in swatches)
    //     if (swatches.hasOwnProperty(swatch) && swatches[swatch])



    //         console.log(swatch, swatches[swatch].getHex())

    /*
     * Results into:
     * Vibrant #7a4426
     * Muted #7b9eae
     * DarkVibrant #348945
     * DarkMuted #141414
     * LightVibrant #f3ccb4
     */
});

return this

    },
    render: function() {
            var a = this.collection.findWhere({
                "active": true
            })
            if (typeof a !== 'undefined') {
                var slug = a.get("id")
                    // console.log("ths.url");
                    // console.log(this.url());
            }
            if (typeof a !== 'undefined' && a !== null) {
                // $(this.el).html(this.template(a.toJSON()))} else {
                //  $(this.el).html("no active post")
                // }
                //
                var that = this;
                var post = $.ajax({
                    url: this.url(),
                    // type: 'default GET (Other values: POST)',
                    dataType: 'html'
                        // data: {param1: 'value1'},
                }).success(function(p) {
                    // $(that.el).html(p)
                    $(that.el).html(that.template({
                        title: a.get("title"),
                        id:a.get("id"),
                        guts: p
                    }));
                    return p
                }).done(function() {
                    // console.log("done");
                }).fail(function() {
                    // console.log("error");
                }).always(function() {
                    // console.log("complete");
                });
                // var img = "offline/jackets/" + a.get("id") + ".jpg"
                //     // background-image:url('offline/dummy-thumb.png')
                // $("#menu-a-active").css("background-image", "url('" + img + "')")
// var iu = "offline/jackets/"+a.get("id")+".jpg"
                //

$(".bt-post-bank").removeClass("inactive")

                    // background-image:url('offline/dummy-thumb.png')
            return this.rewire()
            } else {
                // $(this.el).addClass("hidden")
                $("#menu-a-active").css("background-image", "none")
$(".bt-post-bank").addClass("inactive")
                $(this.el).html('NO ACXTIVE POST')
            return this
            }
            // if (typeof post !== 'undefined') {
            //     // $(this.el).html(post.responseText)
            //     // $(this.el).html(post)
            //     // console.log("48:");
            //     // console.log(post);
            //     $(this.el).removeClass("hidden")
            // } else {
            //     // $(this.el).addClass("hidden")
            //     $(this.el).html('NO ACXTIVE POST')
            // }
        } //render
});