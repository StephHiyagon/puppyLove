"use strict";$(".cross").hide(),$(".menu").hide(),$(".hamburger").click(function(){$(".menu").fadeToggle("slow",function(){$(".hamburger").hide(),$(".cross").show()})}),$(".cross").click(function(){$(".menu").fadeToggle("slow",function(){$(".cross").hide(),$(".hamburger").show()})}),$(window).scroll(function(o){var c=$(window).scrollTop();console.log(c),c>70?($(".fixed").css("background","#6b6a6a"),$(".logo").show()):($(".fixed").css("background","transparent"),$(".logo").hide())}),$(document).ready(function(){$(".parallax").parallax(),$("section").scrollSpy()});