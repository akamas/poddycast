!function(e){"use strict";var t=document.getElementById("newsletter_form");if(t){var n=function(e,t){for(;!e.classList.contains(t);)if(void 0===typeof(e=e.parentNode))return null;return e}(t,"newsletter");if(n.classList.contains("js-collapse")){var r=document.getElementById("email");r.addEventListener("focus",function e(){n.classList.remove("js-collapse"),r.removeEventListener("focus",e,!1)},!1)}var s=[],o=document.getElementById("newsletter_errors");t.addEventListener("submit",function(n){if(t.getAttribute("data-skip-xhr"))return!0;for(n.preventDefault(),n.stopPropagation(),s=[],o.style.display="none";o.firstChild;)o.removeChild(o.firstChild);var r=document.getElementById("fmt").value,a=document.getElementById("email").value,i=document.querySelector('input[name="newsletters"]:checked')?document.querySelector('input[name="newsletters"]:checked').value:"",u=document.querySelector('input[name="privacy"]:checked')?"&privacy=true":"",d="email="+encodeURIComponent(a)+"&newsletters="+i+u+"&fmt="+r,c=new XMLHttpRequest;c.onload=function(n){if(n.target.status>=200&&n.target.status<300){if(null===r)return void l(new Error);var r=n.target.response;if(!0===r.success)t.style.display="none",document.getElementById("newsletter_thanks").style.display="block",e.push({event:"newsletter-signup-success",newsletter:i});else{if(r.errors)for(var o=0;o<r.errors.length;o++)s.push(r.errors[o]);l(new Error)}}else l(new Error)},c.onerror=function(e){l()};var m=t.getAttribute("action");return c.open("POST",m,!0),c.setRequestHeader("Content-type","application/x-www-form-urlencoded"),c.setRequestHeader("X-Requested-With","XMLHttpRequest"),c.timeout=5e3,c.ontimeout=l,c.responseType="json",c.send(d),!1},!1)}function l(){var e=document.createElement("ul");if(s.length)for(var n=0;n<s.length;n++){var r=document.createElement("li");r.appendChild(document.createTextNode(s[n])),e.appendChild(r)}else t.setAttribute("data-skip-xhr",!0),t.submit();o.appendChild(e),o.style.display="block"}}(window.dataLayer||[]);