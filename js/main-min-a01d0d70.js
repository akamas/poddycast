void 0===window.dataLayer&&(window.dataLayer=[]),function(t,e,a,o,i){"use strict";var n=t(".episode-subscribe"),s=t(".episode-shownotes-link"),r=t('[data-link-type="subscribe"]'),d=t('[data-link-type="social share"]');new a(".js-action-copy a").on("success",function(e){var a=t(e.trigger).nextAll(".episode-copy-ok").first();a.addClass("show"),setTimeout(function(){a.removeClass("show")},2e3)}),r.on("click",function(){var e=t(this),a=e.parents(".subscribe-links:first"),i=e.data("service");o.push({"data-listen-platform":i,"data-podcast-title":a.data("episode-title"),event:"listen-with"})}),d.on("click",function(e){var a=t(this),i=a.parents(".share-link:first"),n=a.data("service");"copylink"===n&&e.preventDefault(),o.push({"data-share-network":n,"data-podcast-title":i.data("episode-title"),event:"social-share"})}),e.LazyLoad.init(),n.on("click",function(e){var a=t(e.target).attr("data-subscribe-links"),o=document.getElementById(a);i.Modal.createModal(e.target,o,{title:"Subscribe to IRL",closeText:"Close modal",onCreate:function(){},onDestroy:function(){}})}),s.on("click",function(e){e.preventDefault();var a=t(e.target).attr("data-shownotes"),o=document.getElementById(a);i.Modal.createModal(e.target,o,{title:"Shownotes",closeText:"Close modal",onCreate:function(){},onDestroy:function(){}})})}(window.jQuery,window.Mozilla,window.Clipboard,window.dataLayer,window.Mzp||[]);