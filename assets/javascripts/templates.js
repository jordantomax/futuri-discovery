this["Handlebars"] = this["Handlebars"] || {};
this["Handlebars"]["templates"] = this["Handlebars"]["templates"] || {};

this["Handlebars"]["templates"]["notification"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, buffer = "<div class=\"mod-notify\">\n  ";
  stack1 = ((helper = (helper = helpers.message || (depth0 != null ? depth0.message : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"message","hash":{},"data":data}) : helper));
  if (stack1 != null) { buffer += stack1; }
  return buffer + "\n  <a class=\"js-notify-close mod-notify-close\"><i class=\"icon-cross\"></i></a>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["school-card"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        "
    + escapeExpression(lambda(depth0, depth0))
    + ", \n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "      <dt>difficulty:</dt>\n      <dd>"
    + escapeExpression(((helper = (helper = helpers.difficulty || (depth0 != null ? depth0.difficulty : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"difficulty","hash":{},"data":data}) : helper)))
    + "</dd>\n\n      <dt>Regular Deadline:</dt>\n      <dd>"
    + escapeExpression(((helper = (helper = helpers.regularDeadline || (depth0 != null ? depth0.regularDeadline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"regularDeadline","hash":{},"data":data}) : helper)))
    + "</dd>\n\n      <h3>SAT</h3>\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.SATMath : depth0), {"name":"with","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.SATWriting : depth0), {"name":"with","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.SATReading : depth0), {"name":"with","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </dl>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <dt>Math:</dt>\n        <dd>"
    + escapeExpression(((helper = (helper = helpers.halfClassRange || (depth0 != null ? depth0.halfClassRange : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"halfClassRange","hash":{},"data":data}) : helper)))
    + "</dd>\n";
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <dt>Reading:</dt>\n        <dd>"
    + escapeExpression(((helper = (helper = helpers.halfClassRange || (depth0 != null ? depth0.halfClassRange : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"halfClassRange","hash":{},"data":data}) : helper)))
    + "</dd>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.financialAid : depth0), {"name":"with","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </dl>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "        <dl>\n          <dt>Application Deadline</dt>\n          <dd>"
    + escapeExpression(((helper = (helper = helpers.applicationDeadline || (depth0 != null ? depth0.applicationDeadline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"applicationDeadline","hash":{},"data":data}) : helper)))
    + "</dd>\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.allUndergraduates : depth0), {"name":"with","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <dt>Applications:</dt> <dd>"
    + escapeExpression(((helper = (helper = helpers.applicants || (depth0 != null ? depth0.applicants : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"applicants","hash":{},"data":data}) : helper)))
    + "</dd>\n              <dt>Found to have Need:</dt> <dd>"
    + escapeExpression(((helper = (helper = helpers.foundToHaveNeed || (depth0 != null ? depth0.foundToHaveNeed : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"foundToHaveNeed","hash":{},"data":data}) : helper)))
    + "</dd>\n              <dt>Received Aid:</dt> <dd>"
    + escapeExpression(((helper = (helper = helpers.receivedAid || (depth0 != null ? depth0.receivedAid : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"receivedAid","hash":{},"data":data}) : helper)))
    + "</dd>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"mod-school-card mod-white no-padding\">\n  <div class=\"js-sticky\">\n    <div class=\"mod-school-header\">\n      <div class=\"mod-school-card-actions\">\n        <button class=\"ui-btn-large js-new-school\"><i class=\"icon-cross\"></i>Skip</button>\n        <button class=\"ui-btn-large js-new-school js-add-school\"><i class=\"icon-check\"></i>Save</button>\n      </div>\n\n      <div class=\"mod-school-header-left\">\n        <h1 class=\"mod-school-name\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " </h1>\n        <span class=\"mod-school-chances\">Chances of getting in: <span class=\"mod-school-card-chance-range "
    + escapeExpression(((helper = (helper = helpers.chance || (depth0 != null ? depth0.chance : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"chance","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.chance || (depth0 != null ? depth0.chance : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"chance","hash":{},"data":data}) : helper)))
    + "</span></span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mod-school-card-banner\" style=\"background-image: url('"
    + escapeExpression(((helper = (helper = helpers.site_url || (depth0 != null ? depth0.site_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"site_url","hash":{},"data":data}) : helper)))
    + "/assets/img/banners/"
    + escapeExpression(((helper = (helper = helpers.banner || (depth0 != null ? depth0.banner : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"banner","hash":{},"data":data}) : helper)))
    + "')\")>\n    <div class=\"mod-school-card-info-wrap\">\n      <div class=\"mod-school-card-info\">\n        <div class=\"mod-school-card-logo-wrap\">\n          <img class=\"mod-school-card-logo\" src=\""
    + escapeExpression(((helper = (helper = helpers.site_url || (depth0 != null ? depth0.site_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"site_url","hash":{},"data":data}) : helper)))
    + "/assets/img/logos/"
    + escapeExpression(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"logo","hash":{},"data":data}) : helper)))
    + "\"/>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mod-school-section\">\n    <h5 class=\"type-weight-normal mod-school-card-because\">Recommended because you like "
    + escapeExpression(((helper = (helper = helpers.reason || (depth0 != null ? depth0.reason : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"reason","hash":{},"data":data}) : helper)))
    + " <a class=\"pos-right\" href=\""
    + escapeExpression(((helper = (helper = helpers.site_url || (depth0 != null ? depth0.site_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"site_url","hash":{},"data":data}) : helper)))
    + "/me/recommendations\">Improve Recomendations</a></h5>\n    <dl>\n      <dt>Region:</dt>\n      <dd>"
    + escapeExpression(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"region","hash":{},"data":data}) : helper)))
    + "</dd>\n\n      <dt>Popular Majors:</dt>\n      <dd>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.mostPopularMajors : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "      </dd>\n    </dl>\n  </div>\n\n  <div class=\"mod-school-section\">\n    <header class=\"mod-school-section-header\">\n      <h2>Admissions</h2>\n    </header>\n\n    <dl>\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.admissionsData : depth0), {"name":"with","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    Acceptance Rate\n    "
    + escapeExpression(((helper = (helper = helpers.acceptanceRate || (depth0 != null ? depth0.acceptanceRate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"acceptanceRate","hash":{},"data":data}) : helper)))
    + "\n\n    Application Website:\n    "
    + escapeExpression(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"website","hash":{},"data":data}) : helper)))
    + "\n\n    <h4>Difficulty</h4>\n    gpa: "
    + escapeExpression(((helper = (helper = helpers.gpaLow || (depth0 != null ? depth0.gpaLow : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gpaLow","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = helpers.gpaHigh || (depth0 != null ? depth0.gpaHigh : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gpaHigh","hash":{},"data":data}) : helper)))
    + "\n    sat: "
    + escapeExpression(((helper = (helper = helpers.satLow || (depth0 != null ? depth0.satLow : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"satLow","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = helpers.satHigh || (depth0 != null ? depth0.satHigh : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"satHigh","hash":{},"data":data}) : helper)))
    + "\n    act: "
    + escapeExpression(((helper = (helper = helpers.actLow || (depth0 != null ? depth0.actLow : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"actLow","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = helpers.actHigh || (depth0 != null ? depth0.actHigh : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"actHigh","hash":{},"data":data}) : helper)))
    + "\n    application: "
    + escapeExpression(((helper = (helper = helpers.applicationSite || (depth0 != null ? depth0.applicationSite : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"applicationSite","hash":{},"data":data}) : helper)))
    + "\n    interested in communicating with this school? \n  </div>\n\n  <div class=\"mod-school-section\">\n    <header class=\"mod-school-section-header\">\n      <h2>Tuition</h2>\n    </header>\n\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.tuition : depth0), {"name":"with","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n</div>\n";
},"useData":true});

this["Handlebars"]["templates"]["your-schools-active"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var lambda=this.lambda, escapeExpression=this.escapeExpression;
  return "        "
    + escapeExpression(lambda(depth0, depth0))
    + ", \n";
},"3":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "      <dt>difficulty:</dt>\n      <dd>"
    + escapeExpression(((helper = (helper = helpers.difficulty || (depth0 != null ? depth0.difficulty : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"difficulty","hash":{},"data":data}) : helper)))
    + "</dd>\n\n      <dt>Regular Deadline:</dt>\n      <dd>"
    + escapeExpression(((helper = (helper = helpers.regularDeadline || (depth0 != null ? depth0.regularDeadline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"regularDeadline","hash":{},"data":data}) : helper)))
    + "</dd>\n\n      <h3>SAT</h3>\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.SATMath : depth0), {"name":"with","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.SATWriting : depth0), {"name":"with","hash":{},"fn":this.program(4, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.SATReading : depth0), {"name":"with","hash":{},"fn":this.program(6, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "    </dl>\n";
},"4":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <dt>Math:</dt>\n        <dd>"
    + escapeExpression(((helper = (helper = helpers.halfClassRange || (depth0 != null ? depth0.halfClassRange : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"halfClassRange","hash":{},"data":data}) : helper)))
    + "</dd>\n";
},"6":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <dt>Reading:</dt>\n        <dd>"
    + escapeExpression(((helper = (helper = helpers.halfClassRange || (depth0 != null ? depth0.halfClassRange : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"halfClassRange","hash":{},"data":data}) : helper)))
    + "</dd>\n";
},"8":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.financialAid : depth0), {"name":"with","hash":{},"fn":this.program(9, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "        </dl>\n";
},"9":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "        <dl>\n          <dt>Application Deadline</dt>\n          <dd>"
    + escapeExpression(((helper = (helper = helpers.applicationDeadline || (depth0 != null ? depth0.applicationDeadline : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"applicationDeadline","hash":{},"data":data}) : helper)))
    + "</dd>\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.allUndergraduates : depth0), {"name":"with","hash":{},"fn":this.program(10, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"10":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "              <dt>Applications:</dt> <dd>"
    + escapeExpression(((helper = (helper = helpers.applicants || (depth0 != null ? depth0.applicants : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"applicants","hash":{},"data":data}) : helper)))
    + "</dd>\n              <dt>Found to have Need:</dt> <dd>"
    + escapeExpression(((helper = (helper = helpers.foundToHaveNeed || (depth0 != null ? depth0.foundToHaveNeed : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"foundToHaveNeed","hash":{},"data":data}) : helper)))
    + "</dd>\n              <dt>Received Aid:</dt> <dd>"
    + escapeExpression(((helper = (helper = helpers.receivedAid || (depth0 != null ? depth0.receivedAid : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"receivedAid","hash":{},"data":data}) : helper)))
    + "</dd>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression, buffer = "<div class=\"mod-school-card mod-white no-padding\">\n  <div class=\"js-sticky\">\n    <div class=\"mod-school-header\">\n      <div class=\"mod-school-card-actions ui-btn-set\">\n        <button class=\"ui-btn js-school-remove js-notify\" data-message=\"'School Name' has been removed from your schools\">\n          <i class=\"icon-cross\"></i>\n        </button>\n      </div>\n\n      <div class=\"mod-school-header-left\">\n        <h1 class=\"mod-school-name\">"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + " </h1>\n        <span class=\"mod-school-chances\"><span class=\"mod-school-card-chance-range "
    + escapeExpression(((helper = (helper = helpers.chance || (depth0 != null ? depth0.chance : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"chance","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.chance || (depth0 != null ? depth0.chance : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"chance","hash":{},"data":data}) : helper)))
    + "</span></span>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mod-school-card-banner\" style=\"background-image: url('"
    + escapeExpression(((helper = (helper = helpers.site_url || (depth0 != null ? depth0.site_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"site_url","hash":{},"data":data}) : helper)))
    + "/assets/img/banners/"
    + escapeExpression(((helper = (helper = helpers.banner || (depth0 != null ? depth0.banner : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"banner","hash":{},"data":data}) : helper)))
    + "')\")>\n    <div class=\"mod-school-card-info-wrap\">\n      <div class=\"mod-school-card-info\">\n        <div class=\"mod-school-card-logo-wrap\">\n          <img class=\"mod-school-card-logo\" src=\""
    + escapeExpression(((helper = (helper = helpers.site_url || (depth0 != null ? depth0.site_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"site_url","hash":{},"data":data}) : helper)))
    + "/assets/img/logos/"
    + escapeExpression(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"logo","hash":{},"data":data}) : helper)))
    + "\"/>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"mod-school-section\">\n    <div class=\"s1\">\n      <button class=\"ui-btn \">Connect On LinkedIn</button>\n      <button class=\"ui-btn \">Export Plan of Action</button>\n    </div>\n\n    <div>\n      <label class=\"ui-form-checkbox-label pg-header-checkbox\"><input type=\"checkbox\" checked=\"checked\" />I'm open to talking with "
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</label>\n    </div>\n\n    <dl>\n      <dt>Region:</dt>\n      <dd>"
    + escapeExpression(((helper = (helper = helpers.region || (depth0 != null ? depth0.region : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"region","hash":{},"data":data}) : helper)))
    + "</dd>\n\n      <dt>Popular Majors:</dt>\n      <dd>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.mostPopularMajors : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "      </dd>\n    </dl>\n  </div>\n\n  <div class=\"mod-school-section\">\n    <header class=\"mod-school-section-header\">\n      <h2>Admissions</h2>\n    </header>\n\n    <dl>\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.generalAdmissionsData : depth0), {"name":"with","hash":{},"fn":this.program(3, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  buffer += "\n    Acceptance Rate\n    "
    + escapeExpression(((helper = (helper = helpers.acceptanceRate || (depth0 != null ? depth0.acceptanceRate : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"acceptanceRate","hash":{},"data":data}) : helper)))
    + "\n\n    Application Website:\n    "
    + escapeExpression(((helper = (helper = helpers.website || (depth0 != null ? depth0.website : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"website","hash":{},"data":data}) : helper)))
    + "\n\n    <h4>Difficulty</h4>\n    gpa: "
    + escapeExpression(((helper = (helper = helpers.gpaLow || (depth0 != null ? depth0.gpaLow : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gpaLow","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = helpers.gpaHigh || (depth0 != null ? depth0.gpaHigh : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"gpaHigh","hash":{},"data":data}) : helper)))
    + "\n    sat: "
    + escapeExpression(((helper = (helper = helpers.satLow || (depth0 != null ? depth0.satLow : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"satLow","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = helpers.satHigh || (depth0 != null ? depth0.satHigh : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"satHigh","hash":{},"data":data}) : helper)))
    + "\n    act: "
    + escapeExpression(((helper = (helper = helpers.actLow || (depth0 != null ? depth0.actLow : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"actLow","hash":{},"data":data}) : helper)))
    + " "
    + escapeExpression(((helper = (helper = helpers.actHigh || (depth0 != null ? depth0.actHigh : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"actHigh","hash":{},"data":data}) : helper)))
    + "\n    application: "
    + escapeExpression(((helper = (helper = helpers.applicationSite || (depth0 != null ? depth0.applicationSite : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"applicationSite","hash":{},"data":data}) : helper)))
    + "\n    interested in communicating with this school? \n  </div>\n\n  <div class=\"mod-school-section\">\n    <header class=\"mod-school-section-header\">\n      <h2>Tuition</h2>\n    </header>\n\n";
  stack1 = helpers['with'].call(depth0, (depth0 != null ? depth0.tuition : depth0), {"name":"with","hash":{},"fn":this.program(8, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "  </div>\n</div>\n\n";
},"useData":true});

this["Handlebars"]["templates"]["your-schools"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, lambda=this.lambda, escapeExpression=this.escapeExpression, functionType="function", helperMissing=helpers.helperMissing;
  return "  <li class=\"mod-school-card-small mod-white\" data-index=\""
    + escapeExpression(lambda((data && data.index), depth0))
    + "\">\n    <div class=\"mod-school-card-info-wrap\">\n      <div class=\"mod-school-card-logo-wrap pos-left\">\n        <img class=\"mod-school-card-logo-small\" src=\""
    + escapeExpression(((helper = (helper = helpers.site_url || (depth0 != null ? depth0.site_url : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"site_url","hash":{},"data":data}) : helper)))
    + "/assets/img/logos/"
    + escapeExpression(((helper = (helper = helpers.logo || (depth0 != null ? depth0.logo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"logo","hash":{},"data":data}) : helper)))
    + "\"/>\n      </div>\n\n      <h4>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</h4>\n    </div>\n  </li>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "";
  stack1 = helpers.each.call(depth0, depth0, {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});