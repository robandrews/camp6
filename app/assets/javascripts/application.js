// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require moment.min
//= require jquery
//= require jquery_ujs
//= require jquery-ui.custom.min
//= require typeahead.bundle
//= require transition
//= require tooltip
//= require advanced
//= require wysihtml5
//= require fullcalendar
//= require underscore
//= require backbone
//= require camp6
//= require_tree ../templates
//= require_tree ./models
//= require_tree ./collections
//= require_tree ./support
//= require_tree ./views
//= require_tree ./routers
//= require_tree .

$(function(){
  $("#create-proj-button").on("click", function(){
    $("#new-proj-form").submit();
  })
})

$(document).ready(function() {
        $("body").css("display", "none");
        $("body").fadeIn(1000);
});