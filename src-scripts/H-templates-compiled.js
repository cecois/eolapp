this["CVJEK"] = this["CVJEK"] || {};
this["CVJEK"]["templates"] = this["CVJEK"]["templates"] || {};
this["CVJEK"]["templates"]["postsActiveViewTpl"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "active";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1, helper, alias1=this.escapeExpression;

  return "<li data-id=\""
    + alias1(this.lambda((depth0 != null ? depth0.slug : depth0), depth0))
    + "\" class=\""
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	"
    + alias1(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"content","hash":{},"data":data}) : helper)))
    + "\n</li>\n";
},"useData":true});
this["CVJEK"]["templates"]["postsMenuView-MiniTpl"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<a data-id=\""
    + alias2(alias1((depth0 != null ? depth0.slug : depth0), depth0))
    + "\" href=\"#\" class=\"list-group-item-min text-center "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<br/>\n	"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\n</a>\n";
},"2":function(depth0,helpers,partials,data) {
    return "active";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
this["CVJEK"]["templates"]["postsMenuViewTpl"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "<a data-id=\""
    + alias2(alias1((depth0 != null ? depth0.slug : depth0), depth0))
    + "\" href=\"#\" class=\"col-lg-12 col-md-12 col-sm-12 col-xs-12 list-group-item text-center "
    + ((stack1 = helpers['if'].call(depth0,(depth0 != null ? depth0.active : depth0),{"name":"if","hash":{},"fn":this.program(2, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "\">\n	<div class=\"posts-menu-a-splash-wrapper col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n	<img class=\"posts-menu-a-splash-img\" src=\"/assets/img/"
    + alias2(alias1((depth0 != null ? depth0.splash : depth0), depth0))
    + "\"></img>\n	</div>\n	<br/>\n	<div class=\"posts-menu-a-title col-lg-12 col-md-12 col-sm-12 col-xs-12\">\n	"
    + alias2(alias1((depth0 != null ? depth0.title : depth0), depth0))
    + "\n	</div>\n</a>\n";
},"2":function(depth0,helpers,partials,data) {
    return "active";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.rows : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "");
},"useData":true});