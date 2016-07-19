/* REQUIRED PLUGINS
/* ========================================================================
/*! nanoScrollerJS - v0.8.7 - (c) 2015 James Florentino; Licensed BOC */
!function(a){return"function"==typeof define&&define.amd?define(["jquery"],function(b){return a(b,window,document)}):"object"==typeof exports?module.exports=a(require("jquery"),window,document):a(jQuery,window,document)}(function(a,b,c){"use strict";var d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H;z={paneClass:"nano-pane",sliderClass:"nano-slider",contentClass:"nano-content",iOSNativeScrolling:!1,preventPageScrolling:!1,disableResize:!1,alwaysVisible:!1,flashDelay:1500,sliderMinHeight:20,sliderMaxHeight:null,documentContext:null,windowContext:null},u="scrollbar",t="scroll",l="mousedown",m="mouseenter",n="mousemove",p="mousewheel",o="mouseup",s="resize",h="drag",i="enter",w="up",r="panedown",f="DOMMouseScroll",g="down",x="wheel",j="keydown",k="keyup",v="touchmove",d="Microsoft Internet Explorer"===b.navigator.appName&&/msie 7./i.test(b.navigator.appVersion)&&b.ActiveXObject,e=null,D=b.requestAnimationFrame,y=b.cancelAnimationFrame,F=c.createElement("div").style,H=function(){var a,b,c,d,e,f;for(d=["t","webkitT","MozT","msT","OT"],a=e=0,f=d.length;f>e;a=++e)if(c=d[a],b=d[a]+"ransform",b in F)return d[a].substr(0,d[a].length-1);return!1}(),G=function(a){return H===!1?!1:""===H?a:H+a.charAt(0).toUpperCase()+a.substr(1)},E=G("transform"),B=E!==!1,A=function(){var a,b,d;return a=c.createElement("div"),b=a.style,b.position="absolute",b.width="100px",b.height="100px",b.overflow=t,b.top="-9999px",c.body.appendChild(a),d=a.offsetWidth-a.clientWidth,c.body.removeChild(a),d},C=function(){var a,c,d;return c=b.navigator.userAgent,(a=/(?=.+Mac OS X)(?=.+Firefox)/.test(c))?(d=/Firefox\/\d{2}\./.exec(c),d&&(d=d[0].replace(/\D+/g,"")),a&&+d>23):!1},q=function(){function j(d,f){this.el=d,this.options=f,e||(e=A()),this.$el=a(this.el),this.doc=a(this.options.documentContext||c),this.win=a(this.options.windowContext||b),this.body=this.doc.find("body"),this.$content=this.$el.children("."+this.options.contentClass),this.$content.attr("tabindex",this.options.tabIndex||0),this.content=this.$content[0],this.previousPosition=0,this.options.iOSNativeScrolling&&null!=this.el.style.WebkitOverflowScrolling?this.nativeScrolling():this.generate(),this.createEvents(),this.addEvents(),this.reset()}return j.prototype.preventScrolling=function(a,b){if(this.isActive)if(a.type===f)(b===g&&a.originalEvent.detail>0||b===w&&a.originalEvent.detail<0)&&a.preventDefault();else if(a.type===p){if(!a.originalEvent||!a.originalEvent.wheelDelta)return;(b===g&&a.originalEvent.wheelDelta<0||b===w&&a.originalEvent.wheelDelta>0)&&a.preventDefault()}},j.prototype.nativeScrolling=function(){this.$content.css({WebkitOverflowScrolling:"touch"}),this.iOSNativeScrolling=!0,this.isActive=!0},j.prototype.updateScrollValues=function(){var a,b;a=this.content,this.maxScrollTop=a.scrollHeight-a.clientHeight,this.prevScrollTop=this.contentScrollTop||0,this.contentScrollTop=a.scrollTop,b=this.contentScrollTop>this.previousPosition?"down":this.contentScrollTop<this.previousPosition?"up":"same",this.previousPosition=this.contentScrollTop,"same"!==b&&this.$el.trigger("update",{position:this.contentScrollTop,maximum:this.maxScrollTop,direction:b}),this.iOSNativeScrolling||(this.maxSliderTop=this.paneHeight-this.sliderHeight,this.sliderTop=0===this.maxScrollTop?0:this.contentScrollTop*this.maxSliderTop/this.maxScrollTop)},j.prototype.setOnScrollStyles=function(){var a;B?(a={},a[E]="translate(0, "+this.sliderTop+"px)"):a={top:this.sliderTop},D?(y&&this.scrollRAF&&y(this.scrollRAF),this.scrollRAF=D(function(b){return function(){return b.scrollRAF=null,b.slider.css(a)}}(this))):this.slider.css(a)},j.prototype.createEvents=function(){this.events={down:function(a){return function(b){return a.isBeingDragged=!0,a.offsetY=b.pageY-a.slider.offset().top,a.slider.is(b.target)||(a.offsetY=0),a.pane.addClass("active"),a.doc.bind(n,a.events[h]).bind(o,a.events[w]),a.body.bind(m,a.events[i]),!1}}(this),drag:function(a){return function(b){return a.sliderY=b.pageY-a.$el.offset().top-a.paneTop-(a.offsetY||.5*a.sliderHeight),a.scroll(),a.contentScrollTop>=a.maxScrollTop&&a.prevScrollTop!==a.maxScrollTop?a.$el.trigger("scrollend"):0===a.contentScrollTop&&0!==a.prevScrollTop&&a.$el.trigger("scrolltop"),!1}}(this),up:function(a){return function(b){return a.isBeingDragged=!1,a.pane.removeClass("active"),a.doc.unbind(n,a.events[h]).unbind(o,a.events[w]),a.body.unbind(m,a.events[i]),!1}}(this),resize:function(a){return function(b){a.reset()}}(this),panedown:function(a){return function(b){return a.sliderY=(b.offsetY||b.originalEvent.layerY)-.5*a.sliderHeight,a.scroll(),a.events.down(b),!1}}(this),scroll:function(a){return function(b){a.updateScrollValues(),a.isBeingDragged||(a.iOSNativeScrolling||(a.sliderY=a.sliderTop,a.setOnScrollStyles()),null!=b&&(a.contentScrollTop>=a.maxScrollTop?(a.options.preventPageScrolling&&a.preventScrolling(b,g),a.prevScrollTop!==a.maxScrollTop&&a.$el.trigger("scrollend")):0===a.contentScrollTop&&(a.options.preventPageScrolling&&a.preventScrolling(b,w),0!==a.prevScrollTop&&a.$el.trigger("scrolltop"))))}}(this),wheel:function(a){return function(b){var c;if(null!=b)return c=b.delta||b.wheelDelta||b.originalEvent&&b.originalEvent.wheelDelta||-b.detail||b.originalEvent&&-b.originalEvent.detail,c&&(a.sliderY+=-c/3),a.scroll(),!1}}(this),enter:function(a){return function(b){var c;if(a.isBeingDragged)return 1!==(b.buttons||b.which)?(c=a.events)[w].apply(c,arguments):void 0}}(this)}},j.prototype.addEvents=function(){var a;this.removeEvents(),a=this.events,this.options.disableResize||this.win.bind(s,a[s]),this.iOSNativeScrolling||(this.slider.bind(l,a[g]),this.pane.bind(l,a[r]).bind(""+p+" "+f,a[x])),this.$content.bind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.removeEvents=function(){var a;a=this.events,this.win.unbind(s,a[s]),this.iOSNativeScrolling||(this.slider.unbind(),this.pane.unbind()),this.$content.unbind(""+t+" "+p+" "+f+" "+v,a[t])},j.prototype.generate=function(){var a,c,d,f,g,h,i;return f=this.options,h=f.paneClass,i=f.sliderClass,a=f.contentClass,(g=this.$el.children("."+h)).length||g.children("."+i).length||this.$el.append('<div class="'+h+'"><div class="'+i+'" /></div>'),this.pane=this.$el.children("."+h),this.slider=this.pane.find("."+i),0===e&&C()?(d=b.getComputedStyle(this.content,null).getPropertyValue("padding-right").replace(/[^0-9.]+/g,""),c={right:-14,paddingRight:+d+14}):e&&(c={right:-e},this.$el.addClass("has-scrollbar")),null!=c&&this.$content.css(c),this},j.prototype.restore=function(){this.stopped=!1,this.iOSNativeScrolling||this.pane.show(),this.addEvents()},j.prototype.reset=function(){var a,b,c,f,g,h,i,j,k,l,m,n;return this.iOSNativeScrolling?void(this.contentHeight=this.content.scrollHeight):(this.$el.find("."+this.options.paneClass).length||this.generate().stop(),this.stopped&&this.restore(),a=this.content,f=a.style,g=f.overflowY,d&&this.$content.css({height:this.$content.height()}),b=a.scrollHeight+e,l=parseInt(this.$el.css("max-height"),10),l>0&&(this.$el.height(""),this.$el.height(a.scrollHeight>l?l:a.scrollHeight)),i=this.pane.outerHeight(!1),k=parseInt(this.pane.css("top"),10),h=parseInt(this.pane.css("bottom"),10),j=i+k+h,n=Math.round(j/b*i),n<this.options.sliderMinHeight?n=this.options.sliderMinHeight:null!=this.options.sliderMaxHeight&&n>this.options.sliderMaxHeight&&(n=this.options.sliderMaxHeight),g===t&&f.overflowX!==t&&(n+=e),this.maxSliderTop=j-n,this.contentHeight=b,this.paneHeight=i,this.paneOuterHeight=j,this.sliderHeight=n,this.paneTop=k,this.slider.height(n),this.events.scroll(),this.pane.show(),this.isActive=!0,a.scrollHeight===a.clientHeight||this.pane.outerHeight(!0)>=a.scrollHeight&&g!==t?(this.pane.hide(),this.isActive=!1):this.el.clientHeight===a.scrollHeight&&g===t?this.slider.hide():this.slider.show(),this.pane.css({opacity:this.options.alwaysVisible?1:"",visibility:this.options.alwaysVisible?"visible":""}),c=this.$content.css("position"),("static"===c||"relative"===c)&&(m=parseInt(this.$content.css("right"),10),m&&this.$content.css({right:"",marginRight:m})),this)},j.prototype.scroll=function(){return this.isActive?(this.sliderY=Math.max(0,this.sliderY),this.sliderY=Math.min(this.maxSliderTop,this.sliderY),this.$content.scrollTop(this.maxScrollTop*this.sliderY/this.maxSliderTop),this.iOSNativeScrolling||(this.updateScrollValues(),this.setOnScrollStyles()),this):void 0},j.prototype.scrollBottom=function(a){return this.isActive?(this.$content.scrollTop(this.contentHeight-this.$content.height()-a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTop=function(a){return this.isActive?(this.$content.scrollTop(+a).trigger(p),this.stop().restore(),this):void 0},j.prototype.scrollTo=function(a){return this.isActive?(this.scrollTop(this.$el.find(a).get(0).offsetTop),this):void 0},j.prototype.stop=function(){return y&&this.scrollRAF&&(y(this.scrollRAF),this.scrollRAF=null),this.stopped=!0,this.removeEvents(),this.iOSNativeScrolling||this.pane.hide(),this},j.prototype.destroy=function(){return this.stopped||this.stop(),!this.iOSNativeScrolling&&this.pane.length&&this.pane.remove(),d&&this.$content.height(""),this.$content.removeAttr("tabindex"),this.$el.hasClass("has-scrollbar")&&(this.$el.removeClass("has-scrollbar"),this.$content.css({right:""})),this},j.prototype.flash=function(){return!this.iOSNativeScrolling&&this.isActive?(this.reset(),this.pane.addClass("flashed"),setTimeout(function(a){return function(){a.pane.removeClass("flashed")}}(this),this.options.flashDelay),this):void 0},j}(),a.fn.nanoScroller=function(b){return this.each(function(){var c,d;if((d=this.nanoscroller)||(c=a.extend({},z,b),this.nanoscroller=d=new q(this,c)),b&&"object"==typeof b){if(a.extend(d.options,b),null!=b.scrollBottom)return d.scrollBottom(b.scrollBottom);if(null!=b.scrollTop)return d.scrollTop(b.scrollTop);if(b.scrollTo)return d.scrollTo(b.scrollTo);if("bottom"===b.scroll)return d.scrollBottom(0);if("top"===b.scroll)return d.scrollTop(0);if(b.scroll&&b.scroll instanceof a)return d.scrollTo(b.scroll);if(b.stop)return d.stop();if(b.destroy)return d.destroy();if(b.flash)return d.flash()}return d.reset()})},a.fn.nanoScroller.Constructor=q});



/* REQUIRED PLUGINS
/*! ========================================================================
* metismenu - v2.5.2
* A jQuery menu plugin
* https://bankofchina.com/onokumus/metisMenu#readme
*
* Made by Osman Nuri Okumuş <onokumus@gmail.com> (https://bankofchina.com/onokumus)
* Under BOC License
*/
!function(n,i){if("function"==typeof define&&define.amd)define(["jquery"],i);else if("undefined"!=typeof exports)i(require("jquery"));else{var e={exports:{}};i(n.jquery),n.metisMenu=e.exports}}(this,function(n){"use strict";function i(n){return n&&n.__esModule?n:{"default":n}}function e(n,i){if(!(n instanceof i))throw new TypeError("Cannot call a class as a function")}var t=(i(n),"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol?"symbol":typeof n}),o=function(){function n(n,i){for(var e=0;e<i.length;e++){var t=i[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}return function(i,e,t){return e&&n(i.prototype,e),t&&n(i,t),i}}();(function(n){function i(){return{bindType:_.end,delegateType:_.end,handle:function(i){return n(i.target).is(this)?i.handleObj.handler.apply(this,arguments):void 0}}}function s(){if(window.QUnit)return!1;var n=document.createElement("mm");for(var i in T)if(void 0!==n.style[i])return{end:T[i]};return!1}function a(i){var e=this,t=!1;n(this).one(v.TRANSITION_END,function(){t=!0}),setTimeout(function(){t||v.triggerTransitionEnd(e)},i)}function r(){_=s(),v.supportsTransitionEnd()&&(n.event.special[v.TRANSITION_END]=i())}var l="metisMenu",f="metisMenu",c="."+f,d=".data-api",u=n.fn[l],h=350,g={toggle:!0,doubleTapToGo:!1,preventDefault:!0,activeClass:"active",collapseClass:"collapse",collapseInClass:"in",collapsingClass:"collapsing"},p={SHOW:"show"+c,SHOWN:"shown"+c,HIDE:"hide"+c,HIDDEN:"hidden"+c,CLICK_DATA_API:"click"+c+d},_=!1,T={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},v={TRANSITION_END:"mmTransitionEnd",triggerTransitionEnd:function(i){n(i).trigger(_.end)},supportsTransitionEnd:function(){return Boolean(_)}};r();var C=function(){function i(n,t){e(this,i),this._element=n,this._config=this._getConfig(t),this._transitioning=null,this.init()}return o(i,[{key:"init",value:function(){var i=this;n(this._element).find("li."+this._config.activeClass).has("ul").children("ul").attr("aria-expanded",!0).addClass(this._config.collapseClass+" "+this._config.collapseInClass),n(this._element).find("li").not("."+this._config.activeClass).has("ul").children("ul").attr("aria-expanded",!1).addClass(this._config.collapseClass),this._config.doubleTapToGo&&n(this._element).find("li."+this._config.activeClass).has("ul").children("a").addClass("doubleTapToGo"),n(this._element).find("li").has("ul").children("a").on(p.CLICK_DATA_API,function(e){var t=n(this),o=t.parent("li"),s=o.children("ul");return i._config.preventDefault&&e.preventDefault(),"true"!==t.attr("aria-disabled")?(o.hasClass(i._config.activeClass)&&!i._config.doubleTapToGo?(t.attr("aria-expanded",!1),i._hide(s)):(i._show(s),t.attr("aria-expanded",!0)),i._config.onTransitionStart&&i._config.onTransitionStart(e),i._config.doubleTapToGo&&i._doubleTapToGo(t)&&"#"!==t.attr("href")&&""!==t.attr("href")?(e.stopPropagation(),void(document.location=t.attr("href"))):void 0):void 0})}},{key:"_show",value:function(i){if(!this._transitioning&&!n(i).hasClass(this._config.collapsingClass)){var e=this,t=n(i);if(t.length){var o=n.Event(p.SHOW);if(t.trigger(o),!o.isDefaultPrevented()){t.parent("li").addClass(this._config.activeClass),this._config.toggle&&this._hide(t.parent("li").siblings().children("ul."+this._config.collapseInClass).attr("aria-expanded",!1)),t.removeClass(this._config.collapseClass).addClass(this._config.collapsingClass).height(0),this.setTransitioning(!0);var s=function(){t.removeClass(e._config.collapsingClass).addClass(e._config.collapseClass+" "+e._config.collapseInClass).height("").attr("aria-expanded",!0),e.setTransitioning(!1),t.trigger(p.SHOWN)};if(!v.supportsTransitionEnd())return void s();t.height(t[0].scrollHeight).one(v.TRANSITION_END,s),a(h)}}}}},{key:"_hide",value:function(i){if(!this._transitioning&&n(i).hasClass(this._config.collapseInClass)){var e=this,t=n(i);if(t.length){var o=n.Event(p.HIDE);if(t.trigger(o),!o.isDefaultPrevented()){t.parent("li").removeClass(this._config.activeClass),t.height(t.height())[0].offsetHeight,t.addClass(this._config.collapsingClass).removeClass(this._config.collapseClass).removeClass(this._config.collapseInClass),this.setTransitioning(!0);var s=function(){e._transitioning&&e._config.onTransitionEnd&&e._config.onTransitionEnd(),e.setTransitioning(!1),t.trigger(p.HIDDEN),t.removeClass(e._config.collapsingClass).addClass(e._config.collapseClass).attr("aria-expanded",!1)};if(!v.supportsTransitionEnd())return void s();0==t.height()||"none"==t.css("display")?s():t.height(0).one(v.TRANSITION_END,s),a(h)}}}}},{key:"_doubleTapToGo",value:function(i){return i.hasClass("doubleTapToGo")?(i.removeClass("doubleTapToGo"),!0):i.parent().children("ul").length?(n(this._element).find(".doubleTapToGo").removeClass("doubleTapToGo"),i.addClass("doubleTapToGo"),!1):void 0}},{key:"setTransitioning",value:function(n){this._transitioning=n}},{key:"_getConfig",value:function(i){return i=n.extend({},g,i)}}],[{key:"_jQueryInterface",value:function(e){return this.each(function(){var o=n(this),s=o.data(f),a=n.extend({},g,o.data(),"object"===("undefined"==typeof e?"undefined":t(e))&&e);if(s||(s=new i(this,a),o.data(f,s)),"string"==typeof e){if(void 0===s[e])throw new Error('No method named "'+e+'"');s[e]()}})}}]),i}();return n.fn[l]=C._jQueryInterface,n.fn[l].Constructor=C,n.fn[l].noConflict=function(){return n.fn[l]=u,C._jQueryInterface},C})(jQuery)});








/* ========================================================================
* INITIALIZED
* -------------------------------------------------------------------------
* - Back of China -
* ========================================================================*/

!function ($) {
    "use strict";

    $(document).ready(function(){
        $(document).trigger('gsp.ready');
    });


    $(document).on('gsp.ready', function(){
        //Activate the Bootstrap tooltips
        var tooltip = $('.add-tooltip');
        if (tooltip.length)tooltip.tooltip();

        var popover = $('.add-popover');
        if (popover.length)popover.popover();


        // Update nancoscroller
        $('#navbar-container .navbar-top-links').on('shown.bs.dropdown', '.dropdown', function () {
            $(this).find('.nano').nanoScroller({preventPageScrolling: true});
        });

        $.niftyNav('bind');
        $.niftyAside('bind');
    });
}(jQuery);







/* ========================================================================
* MEGA DROPDOWN v1.2
* ------------------------------------------------------------------------
* Gsp Exclusive Plugins - Back of China
* -------------------------------------------------------------------------
*
* OPTIONAL PLUGINS.
* You may choose whether to include it in your project or not.
*
* ========================================================================*/
!function ($) {
    "use strict";

    var megadropdown = null,
        mega = function(el){
            var megaBtn = el.find('.mega-dropdown-toggle'), megaMenu = el.find('.mega-dropdown-menu');

            megaBtn.on('click', function(e){
                e.preventDefault();
                el.toggleClass('open');
            });
        },
        methods = {
            toggle : function(){
                this.toggleClass('open');
                return null;
            },
            show : function(){
                this.addClass('open');
                return null;
            },
            hide : function(){
                this.removeClass('open');
                return null;
            }
        };

    $.fn.niftyMega = function(method){
        var chk = false;
        this.each(function(){
            if(methods[method]){
                chk = methods[method].apply($(this).find('input'),Array.prototype.slice.call(arguments, 1));
            }else if (typeof method === 'object' || !method) {
                mega($(this));
            };
        });
        return chk;
    };

    $(document).on('gsp.ready', function(){
        megadropdown = $('.mega-dropdown');
        if(megadropdown.length){
            megadropdown.niftyMega();
            $('html').on('click', function(e) {
                if (!$(e.target).closest('.mega-dropdown').length) {
                    megadropdown.removeClass('open');
                }
            });
        };
    });

}(jQuery);







/* ========================================================================
* PANEL REMOVAL v1.1
* -------------------------------------------------------------------------
* Gsp Exclusive Plugins - Back of China
* -------------------------------------------------------------------------
*
* OPTIONAL PLUGINS.
* You may choose whether to include it in your project or not.
*
* ========================================================================*/
!function ($) {
    "use strict";

    $(document).on('gsp.ready', function() {
        var closebtn = $('[data-dismiss="panel"]');

        if (closebtn.length) {
            closebtn.one('click', function(e){
                e.preventDefault();
                var el = $(this).parents('.panel');

                el.addClass('remove').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e){
                    if (e.originalEvent.propertyName == "opacity") {
                        el.remove();
                    }
                });
            });
        }else{closebtn = null}
    });

}(jQuery);







/* ========================================================================
* SCROLL TO TOP BUTTON v1.3
* -------------------------------------------------------------------------
* Gsp Exclusive Plugins - Back of China
* -------------------------------------------------------------------------
*
* OPTIONAL PLUGINS.
* You may choose whether to include it in your project or not.
*
* ========================================================================*/
!function ($) {
    "use strict";

    $(document).one('gsp.ready', function(){
        var niftyScrollTop = $('.scroll-top'), niftyWindow = $(window), isMobile = function(){
            return ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) )
        }();
        if (niftyScrollTop.length && !isMobile) {
            var isVisible = false;
            var offsetTop = 250;
            function calcScroll(){
                if (niftyWindow.scrollTop() > offsetTop && !isVisible) {
                    niftyScrollTop.addClass('in').stop(true, true).css({'animation':'none'}).show(0).css({
                        "animation" : "jellyIn .8s"
                    });
                    isVisible = true;
                }else if (niftyWindow.scrollTop() < offsetTop && isVisible) {
                    niftyScrollTop.removeClass('in');
                    isVisible = false;
                }
            };

            calcScroll();
            niftyWindow.scroll(calcScroll);
            niftyScrollTop.on('click', function(e){
                e.preventDefault();
                $('body, html').animate({scrollTop : 0}, 500);
            });
        }else{
            niftyScrollTop = null;
            niftyWindow = null;
        }
        isMobile = null;
    });
}(jQuery)







/* ========================================================================
* BOC OVERLAY v1.1
* -------------------------------------------------------------------------
* Gsp Exclusive Plugins - Back of China
* -------------------------------------------------------------------------
*
* OPTIONAL PLUGINS.
* You may choose whether to include it in your project or not.
*
* ========================================================================*/
!function ($) {
    "use strict";

    var defaults = {
        'displayIcon'	: true,
        // DESC	 		: Should we display the icon or not.
        // VALUE	 	: true or false
        // TYPE 	 	: Boolean


        'iconColor'		: 'text-dark',
        // DESC	 		: The color of the icon..
        // VALUE	 	: text-light || text-primary || text-info || text-success || text-warning || text-danger || text-mint || text-purple || text-pink || text-dark
        // TYPE 	 	: String

        'iconClass'		: 'fa fa-refresh fa-spin fa-2x',
        // DESC  		: Class name of the font awesome icons", Currently we use font-awesome for default value.
        // VALUE 		: (Icon Class Name)
        // TYPE			: String


        'title'			: '',
        // DESC			: Overlay title
        // TYPE			: String

        'desc'			: ''
        // DESC			: Descrition
        // TYPE			: String


    },
    uID = function() {
        return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    },
    methods = {
        'show' : function(el){
            var target = $(el.attr('data-target')),
                ovId = 'gsp-overlay-' + uID() + uID()+"-" + uID(),
                panelOv = $('<div id="'+ ovId +'" class="panel-overlay"></div>');

            el.prop('disabled', true).data('niftyOverlay',ovId);
            target.addClass('panel-overlay-wrap');
            panelOv.appendTo(target).html(el.data('overlayTemplate'));
            return null;
        },
        'hide': function(el){
            var target = $(el.attr('data-target'));
            var boxLoad = $('#'+ el.data('niftyOverlay'));

            if (boxLoad.length) {
                el.prop('disabled', false);
                target.removeClass('panel-overlay-wrap');
                boxLoad.hide().remove();
            }
            return null;
        }
    },
    loadBox = function(el,options){
        if (el.data('overlayTemplate')) {
            return null;
        }
        var opt = $.extend({},defaults,options),
            icon = (opt.displayIcon)?'<span class="panel-overlay-icon '+opt.iconColor+'"><i class="'+opt.iconClass+'"></i></span>':'';
        el.data('overlayTemplate', '<div class="panel-overlay-content pad-all unselectable">'+icon+'<h4 class="panel-overlay-title">'+opt.title+'</h4><p>'+opt.desc+'</p></div>');
        return null;
    };

    $.fn.niftyOverlay = function(method){
        if (methods[method]){
            return methods[method](this);
        }else if (typeof method === 'object' || !method) {
            return this.each(function () {
                loadBox($(this), method);
            });
        }
        return null;
    };

}(jQuery);







/* ========================================================================
* BOC NOTIFICATION v1.3
* -------------------------------------------------------------------------
* Gsp Exclusive Plugins - Back of China
* -------------------------------------------------------------------------
*
* OPTIONAL PLUGINS.
* You may choose whether to include it in your project or not.
*
* ========================================================================*/
!function ($) {
    "use strict";

    var pageHolder, floatContainer = {}, notyContainer, niftyContainer, niftyContentContainer, addNew = false, supportTransition = function(){
        var thisBody = document.body || document.documentElement,
            thisStyle = thisBody.style,
            support = thisStyle.transition !== undefined || thisStyle.WebkitTransition !== undefined;
        return support;
    }();
    $.niftyNoty = function(options){
        var defaults = {
            type        : 'primary',
            // DESC     : Specify style for the alerts.
            // VALUE    : primary || info || success || warning || danger || mint || purple || pink ||  dark
            // TYPE     : String


            icon        : '',
            // DESC     : Icon class names
            // VALUE    : (Icon Class Name)
            // TYPE     : String


            title       : '',
            // VALUE    : (The title of the alert)
            // TYPE     : String

            message     : '',
            // VALUE    : (Message of the alert.)
            // TYPE     : String


            closeBtn    : true,
            // VALUE    : Show or hide the close button.
            // TYPE     : Boolean



            container   : 'page',
            // DESC     : This option is particularly useful in that it allows you to position the notification.
            // VALUE    : page || floating ||  "specified target name"
            // TYPE     : STRING


            floating    : {
                position    : 'top-right',
                // Floating position.
                // Currently only supports "top-right". We will make further development for the next version.


                animationIn : 'jellyIn',
                // Please use the animated class name from animate.css

                animationOut: 'fadeOut'
                // Please use the animated class name from animate.css

            },

            html        : null,
            // Insert HTML into the notification.  If false, jQuery's text method will be used to insert content into the DOM.


            focus       : true,
            //Scroll to the notification


            timer       : 0,
            // DESC     : To enable the "auto close" alerts, please specify the time to show the alert before it closed.
            // VALUE    : Value is in milliseconds. (0 to disable the autoclose.)
            // TYPE     : Number


            //EVENTS / CALLBACK FUNCTIONS

            onShow      : function(){},
            // This event fires immediately when the show instance method is called.

            onShown     : function(){},
            // This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete).

            onHide      : function(){},
            // This event is fired immediately when the hide instance method has been called.

            onHidden    : function(){}
            // This event is fired when the notification has finished being hidden from the user (will wait for CSS transitions to complete).


        },
        opt = $.extend({},defaults, options ), el = $('<div class="alert-wrap"></div>'),
        iconTemplate = function(){
            var icon = '';
            if (options && options.icon) {
                icon = '<div class="media-left alert-icon"><i class="'+ opt.icon +'"></i></div>';
            }
            return icon;
        },
        alertTimer,
        template = function(){
            var clsBtn = opt.closeBtn ? '<button class="close" type="button"><i class="pci-cross pci-circle"></i></button>' : '';
            var defTemplate = '<div class="alert alert-'+ opt.type + '" role="alert">'+ clsBtn + '<div class="media">';
            if (!opt.html) {
                return defTemplate + iconTemplate() + '<div class="media-body"><h4 class="alert-title">'+ opt.title +'</h4><p class="alert-message">'+ opt.message +'</p></div></div>';
            }
            return defTemplate + opt.html +'</div></div>';
        }(),
        closeAlert = function(e){
            opt.onHide();
            if (opt.container === 'floating' && opt.floating.animationOut) {
                el.removeClass(opt.floating.animationIn).addClass(opt.floating.animationOut);
                if (!supportTransition) {
                    opt.onHidden();
                    el.remove();
                }
            }

            el.removeClass('in').on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e){
                if (e.originalEvent.propertyName == "max-height") {
                    opt.onHidden();
                    el.remove();
                }
            });
            clearInterval(alertTimer);
            return null;
        },
        focusElement = function(pos){
            $('body, html').animate({scrollTop: pos}, 300, function(){
                el.addClass('in');
            });
        },
        init = function(){
            opt.onShow();
            if (opt.container === 'page') {
                if (!pageHolder) {
                    pageHolder = $('<div id="page-alert"></div>');
                    if(!niftyContentContainer || !niftyContentContainer.length) niftyContentContainer = $('#content-container');
                    niftyContentContainer.prepend(pageHolder);
                };

                notyContainer = pageHolder;
                if (opt.focus) focusElement(0);

            }else if (opt.container === 'floating') {
                if (!floatContainer[opt.floating.position]) {
                    floatContainer[opt.floating.position] = $('<div id="floating-' + opt.floating.position + '" class="floating-container"></div>');
                    if(!niftyContainer || !niftyContentContainer.length) niftyContainer = $('#container');
                    niftyContainer.append(floatContainer[opt.floating.position]);
                }

                notyContainer = floatContainer[opt.floating.position];

                if (opt.floating.animationIn) el.addClass('in animated ' + opt.floating.animationIn );
                opt.focus = false;
            }else {
                var $ct =  $(opt.container);
                var $panelct = $ct.children('.panel-alert');
                var $panelhd = $ct.children('.panel-heading');

                if (!$ct.length) {
                    addNew = false;
                    return false;
                }


                if(!$panelct.length){
                    notyContainer = $('<div class="panel-alert"></div>');
                    if($panelhd.length){
                        $panelhd.after(notyContainer);
                    }else{
                        $ct.prepend(notyContainer)
                    }
                }else{
                    notyContainer = $panelct;
                }

                if (opt.focus) focusElement($ct.offset().top - 30);

            }
            addNew = true;
            return false;
        }();

        if (addNew) {
            notyContainer.append(el.html(template));
            el.find('[data-dismiss="noty"]').one('click', closeAlert);
            if(opt.closeBtn) el.find('.close').one('click', closeAlert);
            if (opt.timer > 0)alertTimer = setInterval(closeAlert, opt.timer);
            if (!opt.focus) var addIn = setInterval(function(){el.addClass('in');clearInterval(addIn);},200);
            el.one('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd', function(e){
                if ((e.originalEvent.propertyName == "max-height" || e.type == "animationend") && addNew) {
                    opt.onShown();
                    addNew = false;
                }
            });
        }
    };
}(jQuery);







/* ========================================================================
* BOC LANGUAGE SELECTOR v1.1
* -------------------------------------------------------------------------
* Gsp Exclusive Plugins - Back of China
* -------------------------------------------------------------------------
*
* OPTIONAL PLUGINS.
* You may choose whether to include it in your project or not.
*
*
* REQUIRE BOOTSTRAP DROPDOWNS
* http://backofchina.com/components/#dropdowns
* ========================================================================*/

!function ($) {
    "use strict";

    var defaults = {
        'dynamicMode'       : true,
        'selectedOn'        : null,
        'onChange'          : null
    },

    langSelector = function(el, opt){
        var options = $.extend({},defaults, opt );
        var $el = el.find('.lang-selected'),
            $langMenu = $el.parent('.lang-selector').siblings('.dropdown-menu'),
            $langBtn = $langMenu.find('a'),
            selectedID = $langBtn.filter('.active').find('.lang-id').text(),
            selectedName = $langBtn.filter('.active').find('.lang-name').text();

        var changeTo = function(te){
            $langBtn.removeClass('active');
            te.addClass('active');
            $el.html(te.html());

            selectedID = te.find('.lang-id').text();
            selectedName = te.find('.lang-name').text();
            el.trigger('onChange', [{id:selectedID, name : selectedName}]);



            if(typeof options.onChange == 'function'){
                options.onChange.call(this, {id:selectedID, name : selectedName});
            }
        };


        $langBtn.on('click', function(e){
            if (options.dynamicMode) {
                e.preventDefault();
                e.stopPropagation();
            };

            el.dropdown('toggle');
            changeTo($(this));
        });


        if (options.selectedOn) changeTo( $(options.selectedOn) );

    },
    methods = {
        'getSelectedID' : function(){
            return $(this).find('.lang-id').text();
        },
        'getSelectedName' : function(){
            return $(this).find('.lang-name').text();
        },
        'getSelected' :function(){
            var el = $(this);
            return {id:el.find('.lang-id').text() ,name:el.find('.lang-name').text()};
        },
        'setDisable' : function(){
            $(this).addClass('disabled');
            return null;
        },
        'setEnable' : function(el){
            $(this).removeClass('disabled');
            return null;
        }
    };

    $.fn.niftyLanguage = function(method){
        var chk = false;
        this.each(function(){
            if(methods[method]){
                chk = methods[method].apply(this,Array.prototype.slice.call(arguments, 1));
            }else if (typeof method === 'object' || !method) {
                langSelector($(this), method);
            };
        });
        return chk;
    }
}(jQuery);







/* ========================================================================
* BOC CHECK v1.2
* -------------------------------------------------------------------------
* Gsp Exclusive Plugins - Back of China
* -------------------------------------------------------------------------
*
* OPTIONAL PLUGINS.
* You may choose whether to include it in your project or not.
*
* ========================================================================*/
!function ($) {
    "use strict";

    var allFormEl,
    formElement = function(el){
        if (el.data('gsp-check')){
            return;
        }else{
            el.data('gsp-check', true);
            if (el.text().trim().length){
                el.addClass("form-text");
            }else{
                el.removeClass("form-text");
            }
        }


        var input 	= el.find('input')[0],
            groupName 	= input.name,
            $groupInput	= function(){
                if (input.type == 'radio' && groupName) {
                    //return $('.form-radio').not(el).find('input').filter('input[name='+groupName+']').parent();
                    return $('.form-radio').not(el).find('input').filter('input[name="' + groupName + '"]').parent();
                }else{
                    return false;
                }
            }(),
            changed = function(){
                if(input.type == 'radio' && $groupInput.length) {
                    $groupInput.each(function(){
                        var $gi = $(this);
                        if ($gi.hasClass('active')) $gi.trigger('gsp.ch.unchecked');
                        $gi.removeClass('active');
                    });
                }


                if (input.checked) {
                    el.addClass('active').trigger('gsp.ch.checked');
                }else{
                    el.removeClass('active').trigger('gsp.ch.unchecked');
                }
            };

        if (input.checked) {
            el.addClass('active');
        }else{
            el.removeClass('active');
        }

        $(input).on('change', changed);
    },
    methods = {
        isChecked : function(){
            return this[0].checked;
        },
        toggle : function(){
            this[0].checked = !this[0].checked;
            this.trigger('change');
            return null;
        },
        toggleOn : function(){
            if(!this[0].checked){
                this[0].checked = true;
                this.trigger('change');
            }
            return null;
        },
        toggleOff : function(){
            if(this[0].checked && this[0].type == 'checkbox'){
                this[0].checked = false;
                this.trigger('change');
            }
            return null;
        }
    },
    bindForm = function(){
        allFormEl = $('.form-checkbox, .form-radio');
        if(allFormEl.length) allFormEl.niftyCheck();
    }

    $.fn.niftyCheck = function(method){
        var chk = false;
        this.each(function(){
            if(methods[method]){
                chk = methods[method].apply($(this).find('input'),Array.prototype.slice.call(arguments, 1));
            }else if (typeof method === 'object' || !method) {
                formElement($(this));
            };
        });
        return chk;
    };

    $(document).on('gsp.ready',bindForm).on('change', '.form-checkbox, .form-radio', bindForm).on('change', '.btn-file :file', function() {
        var input = $(this),
            numFiles = input.get(0).files ? input.get(0).files.length : 1,
            label = input.val().replace(/\\/g, '/').replace(/.*\//, ''),
            size = function(){
                try{
                    return input[0].files[0].size;
                }catch(err){
                    return 'Nan';
                }
            }(),
            fileSize = function(){
                if (size == 'Nan' ) {
                    return "Unknown";
                }
                var rSize = Math.floor( Math.log(size) / Math.log(1024) );
                return ( size / Math.pow(1024, rSize) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][rSize];
            }();

        input.trigger('fileselect', [numFiles, label, fileSize]);
    });
}(jQuery);







/* ========================================================================
* NAVIGATION SHORTCUT BUTTONS
* -------------------------------------------------------------------------
* Gsp Exclusive Plugins - Back of China
* -------------------------------------------------------------------------
*
* OPTIONAL PLUGINS.
* You may choose whether to include it in your project or not.
*
* ========================================================================*/
!function ($) {
    $(document).on('gsp.ready', function() {
        var shortcutBtn = $('#mainnav-shortcut');
        if (shortcutBtn.length) {
            shortcutBtn.find('li').each(function () {
                var $el = $(this);
                $el.popover({
                    animation:false,
                    trigger: 'hover',
                    placement: 'bottom',
                    container: '#mainnav-container',
                    viewport: '#mainnav-container',
                    template: '<div class="popover mainnav-shortcut"><div class="arrow"></div><div class="popover-content"></div>'
                });
            });
        }else{
            shortcutBtn = null;
        }
    });
}(jQuery);







/* ========================================================================
* BOC NAVIGATION v1.5
* -------------------------------------------------------------------------
* Gsp Exclusive Plugins - Back of China
* -------------------------------------------------------------------------
*
* OPTIONAL PLUGINS.
* You may choose whether to include it in your project or not.
* Remove it if you don't use the Main Navigation.
* ========================================================================
*
* REQUIRE BOOTSTRAP POPOVER
* http://backofchina.com/javascript/#popovers
*
* REQUIRE JQUERY RESIZEEND
* https://bankofchina.com/nielse63/jQuery-ResizeEnd
*
* ========================================================================*/

/*! jQuery resizeEnd Event v1.0.1 - Copyright (c) 2013 Giuseppe Gurgone - License http://git.io/iRQs3g */
!function($,e){var t={};t.eventName="resizeEnd",t.delay=250,t.poll=function(){var n=$(this),a=n.data(t.eventName);a.timeoutId&&e.clearTimeout(a.timeoutId),a.timeoutId=e.setTimeout(function(){n.trigger(t.eventName)},t.delay)},$.event.special[t.eventName]={setup:function(){var e=$(this);e.data(t.eventName,{}),e.on("resize",t.poll)},teardown:function(){var n=$(this),a=n.data(t.eventName);a.timeoutId&&e.clearTimeout(a.timeoutId),n.removeData(t.eventName),n.off("resize",t.poll)}},$.fn[t.eventName]=function(e,n){return arguments.length>0?this.on(t.eventName,null,e,n):this.trigger(t.eventName)}}(jQuery,window);
 

!function ($) {
    "use strict";


    var $menulink               = null,
        niftyContainer          = null,
        boxedContainer          = null,
        niftyMainNav            = null,
        mainNavHeight           = null,
        scrollbar               = null,
        updateMethod            = false,
        isSmallNav              = false,
        screenSize              = null,
        screenCat               = null,
        defaultSize             = null,
        niftyWindow             = $(window),
        ignoreAffix             = false,


        // Determine and bind hover or "touch" event
        // ===============================================
        bindSmallNav = function(){
            var hidePopover, $menulink = $('#mainnav-menu > li > a, #mainnav-menu-wrap .mainnav-widget a[data-toggle="menu-widget"]');

            $menulink.each(function(){
                var $el             = $(this),
                    $listTitle          = $el.children('.menu-title'),
                    $listSub            = $el.siblings('.collapse'),
                    $listWidget         = $($el.attr('data-target')),
                    $listWidgetParent   = ($listWidget.length)?$listWidget.parent():null,
                    $popover            = null,
                    $poptitle			= null,
                    $popcontent         = null,
                    $popoverSub         = null,
                    popoverPosBottom    = 0,
                    popoverCssBottom    = 0,
                    elPadding           = $el.outerHeight() - $el.height()/4,
                    listSubScroll       = false,
                    elHasSub            = function(){
                        if ($listWidget.length){
                            $el.on('click', function(e){e.preventDefault()});
                        }
                        if ($listSub.length){
                            //$listSub.removeClass('in').removeAttr('style');
                            $el.on('click', function(e){e.preventDefault()}).parent('li').removeClass('active');
                            return true;
                        }else{
                            return false;
                        }
                    }(),
                    updateScrollInterval = null,
                    updateScrollBar		 = function(el){
                        clearInterval(updateScrollInterval);
                        updateScrollInterval = setInterval(function(){
                            el.nanoScroller({
                                preventPageScrolling : true,
                                alwaysVisible: true
                            });
                            clearInterval(updateScrollInterval);
                        },100);
                    };

                $(document).click(function(event) {
                    if(!$(event.target).closest('#mainnav-container').length) {
                        $el.removeClass('hover').popover('hide');
                    }
                });

                $('#mainnav-menu-wrap > .nano').on("update", function(event, values){
                    $el.removeClass('hover').popover('hide');
                });


                $el.popover({
                    animation       : false,
                    trigger         : 'manual',
                    container       : '#mainnav',
                    viewport		: $el,
                    html            : true,
                    title           : function(){
                        if (elHasSub) return $listTitle.html();
                        return null
                    },
                    content         : function(){
                        var $content;
                        if (elHasSub){
                            $content = $('<div class="sub-menu"></div>');
                            $listSub.addClass('pop-in').wrap('<div class="nano-content"></div>').parent().appendTo($content);
                        }else if($listWidget.length){
                            $content = $('<div class="sidebar-widget-popover"></div>');
                            $listWidget.wrap('<div class="nano-content"></div>').parent().appendTo($content);
                        }else{
                            $content = '<span class="single-content">' + $listTitle.html() + '</span>';
                        }
                        return $content;
                    },
                    template: '<div class="popover menu-popover"><h4 class="popover-title"></h4><div class="popover-content"></div></div>'
                }).on('show.bs.popover', function () {
                    if(!$popover){
                        $popover = $el.data('bs.popover').tip();
                        $poptitle = $popover.find('.popover-title');
                        $popcontent = $popover.children('.popover-content');

                        if (!elHasSub && $listWidget.length == 0)return;
                        $popoverSub = $popcontent.children('.sub-menu');
                    }
                    if (!elHasSub && $listWidget.length == 0)return;
                }).
                on('shown.bs.popover', function () {
                    if (!elHasSub && $listWidget.length == 0){
                        var margintop = 0 - (0.5 * $el.outerHeight());
                        $popcontent.css({'margin-top': margintop + 'px', 'width' : 'auto'});
                        return;
                    }


                    var offsetTop 		= parseInt($popover.css('top')),
                        elHeight		= $el.outerHeight(),
                        offsetBottom 	= function(){
                            if(niftyContainer.hasClass('mainnav-fixed')){
                                return $(window).outerHeight() - offsetTop - elHeight;
                            }else{
                                return $(document).height() - offsetTop - elHeight;
                            }
                        }(),
                        popoverHeight	= $popcontent.find('.nano-content').children().css('height','auto').outerHeight();
                    $popcontent.find('.nano-content').children().css('height','');



                    if( offsetTop > offsetBottom){
                        if($poptitle.length && !$poptitle.is(':visible')) elHeight = Math.round(0 - (0.5 * elHeight));
                        offsetTop -= 5;
                        $popcontent.css({'top': '','bottom': elHeight+'px', 'height': offsetTop}).children().addClass('nano').css({'width':'100%'}).nanoScroller({
                            preventPageScrolling : true
                        });
                        updateScrollBar($popcontent.find('.nano'));
                    }else{
                        if(!niftyContainer.hasClass('navbar-fixed') && niftyMainNav.hasClass('affix-top')) offsetBottom -= 50;
                        if(popoverHeight > offsetBottom){
                            if(niftyContainer.hasClass('navbar-fixed') || niftyMainNav.hasClass('affix-top')) offsetBottom -= (elHeight + 5);

                            offsetBottom -= 5;
                            $popcontent.css({'top':elHeight+'px', 'bottom':'', 'height': offsetBottom}).children().addClass('nano').css({'width':'100%'}).nanoScroller({
                                preventPageScrolling : true
                            });

                            updateScrollBar($popcontent.find('.nano'));
                        }else{
                            if($poptitle.length && !$poptitle.is(':visible')) elHeight = Math.round(0 - (0.5 * elHeight));
                            $popcontent.css({'top':elHeight+'px', 'bottom':'', 'height': 'auto'});
                        }
                    }
                    if($poptitle.length) $poptitle.css('height',$el.outerHeight());
                    $popcontent.on('click', function(){
                        $popcontent.find('.nano-pane').hide();
                        updateScrollBar($popcontent.find('.nano'));
                    });
                })

                    .on('click', function(){
                    if(!niftyContainer.hasClass('mainnav-sm')) return;
                    $menulink.popover('hide');
                    $el.addClass('hover').popover('show');
                })
                    .hover(
                    function(){
                        $menulink.popover('hide');
                        $el.addClass('hover').popover('show').one('hidden.bs.popover', function () {
                            // detach from popover, fire event then clean up data
                            $el.removeClass('hover');
                            if (elHasSub) {
                                $listSub.removeAttr('style').appendTo($el.parent());
                            }else if($listWidget.length){
                                $listWidget.appendTo($listWidgetParent);
                            }
                            clearInterval(hidePopover);
                        })
                    },
                    function(){
                        clearInterval(hidePopover);
                        hidePopover = setInterval(function(){
                            if ($popover) {
                                $popover.one('mouseleave', function(){
                                    $el.removeClass('hover').popover('hide');
                                });
                                if(!$popover.is(":hover")){
                                    $el.removeClass('hover').popover('hide');
                                }
                            };
                            clearInterval(hidePopover);
                        }, 100);
                    }
                );
            });
            isSmallNav = true;
        },
        unbindSmallNav = function(){
            var colapsed = $('#mainnav-menu').find('.collapse');
            if(colapsed.length){
                colapsed.each(function(){
                    var cl = $(this);
                    if (cl.hasClass('in')){
                        cl.parent('li').addClass('active');
                    }else{
                        cl.parent('li').removeClass('active');
                    }
                });
            }
            /*if(scrollbar != null && scrollbar.length){
                scrollbar.nanoScroller({stop : true});
            }*/

            $menulink.popover('destroy').unbind('mouseenter mouseleave');
            isSmallNav = false;
        },
        updateSize = function(){
            //if(!defaultSize) return;

            var sw = niftyContainer.width(), currentScreen;


            if (sw <= 740) {
                currentScreen = 'xs';
            }else if (sw > 740 && sw < 992) {
                currentScreen = 'sm';
            }else if (sw >= 992 && sw <= 1200 ) {
                currentScreen = 'md';
            }else{
                currentScreen = 'lg';
            }

            if (screenCat != currentScreen){
                screenCat = currentScreen;
                screenSize = currentScreen;
                if(screenSize == 'sm' && niftyContainer.hasClass('mainnav-lg')){
                    $.niftyNav('collapse');
                }else if(screenSize == "xs" && niftyContainer.hasClass('mainnav-lg')){
                    niftyContainer.removeClass('mainnav-sm mainnav-out mainnav-lg').addClass('mainnav-sm');
                }
                else if(screenSize == "lg"){
                    //$.niftyNav('expand');
                }
            }
        },
        boxedPosition = function(){
            if(niftyContainer.hasClass('boxed-layout') && niftyContainer.hasClass('mainnav-fixed') && boxedContainer.length){
                niftyMainNav.css({
                    'left' : boxedContainer.offset().left + 'px'
                });
            }else{
                niftyMainNav.css({
                    'left' :''
                });
            }
        },
        updateAffix = function(){
            if(!ignoreAffix){
                try{
                    niftyMainNav.niftyAffix('update');
                }catch(err){
                    ignoreAffix = true;
                }
            }
        },
        updateNav = function(e){
            updateAffix();

            unbindSmallNav();
            updateSize();
            boxedPosition();

            if (updateMethod == 'collapse' || niftyContainer.hasClass('mainnav-sm') ) {
                niftyContainer.removeClass('mainnav-in mainnav-out mainnav-lg');
                bindSmallNav();
            }

            mainNavHeight = $('#mainnav').height();
            updateMethod = false;
            return null;
        },
        init = function(){
            if (!defaultSize) {
                defaultSize = {
                    xs : 'mainnav-out',
                    sm : niftyMainNav.data('sm') || niftyMainNav.data('all'),
                    md : niftyMainNav.data('md') || niftyMainNav.data('all'),
                    lg : niftyMainNav.data('lg') || niftyMainNav.data('all')
                }

                var hasData = false;
                for (var item in defaultSize) {
                    if (defaultSize[item]) {
                        hasData = true;
                        break;
                    }
                }

                if (!hasData) defaultSize = null;
                updateSize();
            }
        },
        methods = {
            'revealToggle' : function(){
                if (!niftyContainer.hasClass('reveal')) niftyContainer.addClass('reveal');
                niftyContainer.toggleClass('mainnav-in mainnav-out').removeClass('mainnav-lg mainnav-sm')
                if(isSmallNav) unbindSmallNav();
                return;
            },
            'revealIn' : function(){
                if (!niftyContainer.hasClass('reveal')) niftyContainer.addClass('reveal');
                niftyContainer.addClass('mainnav-in').removeClass('mainnav-out mainnav-lg mainnav-sm');
                if(isSmallNav) unbindSmallNav();
                return;
            },
            'revealOut' : function(){
                if (!niftyContainer.hasClass('reveal')) niftyContainer.addClass('reveal');
                niftyContainer.removeClass('mainnav-in mainnav-lg mainnav-sm').addClass('mainnav-out');
                if(isSmallNav) unbindSmallNav();
                return;
            },
            'slideToggle' : function(){
                if (!niftyContainer.hasClass('slide')) niftyContainer.addClass('slide');
                niftyContainer.toggleClass('mainnav-in mainnav-out').removeClass('mainnav-lg mainnav-sm')
                if(isSmallNav) unbindSmallNav();
                return;
            },
            'slideIn' : function(){
                if (!niftyContainer.hasClass('slide')) niftyContainer.addClass('slide');
                niftyContainer.addClass('mainnav-in').removeClass('mainnav-out mainnav-lg mainnav-sm');
                if(isSmallNav) unbindSmallNav();
                return;
            },
            'slideOut' : function(){
                if (!niftyContainer.hasClass('slide')) niftyContainer.addClass('slide');
                niftyContainer.removeClass('mainnav-in mainnav-lg mainnav-sm').addClass('mainnav-out');
                if(isSmallNav) unbindSmallNav();
                return;
            },
            'pushToggle' : function(){
                niftyContainer.toggleClass('mainnav-in mainnav-out').removeClass('mainnav-lg mainnav-sm');
                if (niftyContainer.hasClass('mainnav-in mainnav-out')) niftyContainer.removeClass('mainnav-in');
                if(isSmallNav) unbindSmallNav();
                return;
            },
            'pushIn' : function(){
                niftyContainer.addClass('mainnav-in').removeClass('mainnav-out mainnav-lg mainnav-sm');
                if(isSmallNav) unbindSmallNav();
                return;
            },
            'pushOut' : function(){
                niftyContainer.removeClass('mainnav-in mainnav-lg mainnav-sm').addClass('mainnav-out');
                if(isSmallNav) unbindSmallNav();
                return;
            },
            'colExpToggle' : function(){
                if (niftyContainer.hasClass('mainnav-lg mainnav-sm')) niftyContainer.removeClass('mainnav-lg');
                niftyContainer.toggleClass('mainnav-lg mainnav-sm').removeClass('mainnav-in mainnav-out');
                return niftyWindow.trigger('resize');
            },
            'collapse' : function(){
                niftyContainer.addClass('mainnav-sm').removeClass('mainnav-lg mainnav-in mainnav-out');
                updateMethod = 'collapse';
                return niftyWindow.trigger('resize');
            },
            'expand' : function(){
                niftyContainer.removeClass('mainnav-sm mainnav-in mainnav-out').addClass('mainnav-lg');
                return niftyWindow.trigger('resize');
            },
            'togglePosition' : function(){
                niftyContainer.toggleClass('mainnav-fixed');
                updateAffix();
            },
            'fixedPosition' : function(){
                niftyContainer.addClass('mainnav-fixed');
                scrollbar.nanoScroller({preventPageScrolling : true});
                updateAffix();
            },
            'staticPosition' : function(){
                niftyContainer.removeClass('mainnav-fixed');
                scrollbar.nanoScroller({preventPageScrolling : false});
                updateAffix();
            },
            'update' : updateNav,
            'refresh' : updateNav,
            'getScreenSize' : function(){
                return screenCat
            },
            'bind' : function(){
                var menu = $('#mainnav-menu');
                if (menu.length == 0) return false;

                $menulink               = $('#mainnav-menu > li > a, #mainnav-menu-wrap .mainnav-widget a[data-toggle="menu-widget"]');
                niftyContainer          = $('#container');
                boxedContainer          = niftyContainer.children('.boxed');
                niftyMainNav            = $('#mainnav-container');
                mainNavHeight           = $('#mainnav').height();

                var transitionNav       = null;
                niftyMainNav.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e){
                    if(transitionNav || e.target === niftyMainNav[0]){
                        clearInterval(transitionNav);
                        transitionNav = setInterval(function(){
                            $(window).trigger('resize');
                            clearInterval(transitionNav);
                            transitionNav = null;
                        }, 300);
                    }
                });


                var toggleBtn = $('.mainnav-toggle');
                if(toggleBtn.length){
                    toggleBtn.on('click', function(e){
                        e.preventDefault();
                        e.stopPropagation();

                        if(toggleBtn.hasClass('push')){
                            $.niftyNav('pushToggle');
                        }else if(toggleBtn.hasClass('slide')){
                            $.niftyNav('slideToggle');
                        }else if(toggleBtn.hasClass('reveal')){
                            $.niftyNav('revealToggle');
                        }else{
                            $.niftyNav('colExpToggle');
                        }
                    }
                )};


                // COLLAPSIBLE MENU LIST
                // =================================================================
                // Require MetisMenu
                // http://demo.onokumus.com/metisMenu/
                // =================================================================
                try {
                    menu.metisMenu({ toggle: true });
                }catch(err) {
                    console.error(err.message);
                }




                // STYLEABLE SCROLLBARS
                // =================================================================
                // Require nanoScroller
                // http://jamesflorentino.github.io/nanoScrollerJS/
                // =================================================================
                try {
                    scrollbar = $('#mainnav-menu-wrap > .nano');
                    if(scrollbar.length) scrollbar.nanoScroller({ preventPageScrolling : (niftyContainer.hasClass('mainnav-fixed')?true:false)});
                }catch(err) {
                    console.error(err.message);
                }

                $(window).on('resizeEnd',updateNav).trigger('resize');
            }
        };


    $.niftyNav = function(method,complete){
        if (methods[method]){
            if(method == 'colExpToggle' || method == 'expand' || method == 'collapse'){
                if(screenSize == 'xs' && method == 'collapse'){
                    method = 'pushOut';
                }else if((screenSize == 'xs' || screenSize == 'sm') && (method=='colExpToggle' || method == 'expand') && niftyContainer.hasClass('mainnav-sm')){
                    method = 'pushIn';
                }
            }
            var val = methods[method].apply(this,Array.prototype.slice.call(arguments, 1));
            if(method != 'bind') updateNav();
            if(complete) return complete();
            else if (val) return val;
        }
        return null;
    };



    $.fn.isOnScreen = function(){
        var viewport = {
            top : niftyWindow.scrollTop(),
            left : niftyWindow.scrollLeft()
        };
        viewport.right = viewport.left + niftyWindow.width();
        viewport.bottom = viewport.top + niftyWindow.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.bottom || viewport.top > bounds.top));
    };


}(jQuery);







/* ========================================================================
* BOC ASIDE v1.4.1
* -------------------------------------------------------------------------
* Gsp Exclusive Plugins - Back of China
* -------------------------------------------------------------------------
*
* OPTIONAL PLUGINS.
* You may choose whether to include it in your project or not.
*
* ========================================================================*/
!function ($) {
    "use strict";

    var niftyAside = null, niftyContainer, niftyWindow = $(window),
        asideMethods = {
            'toggleHideShow' : function(){
                niftyContainer.toggleClass('aside-in');
                niftyWindow.trigger('resize');
                if(niftyContainer.hasClass('aside-in')){
                    toggleNav();
                }
            },
            'show' : function(){
                niftyContainer.addClass('aside-in');
                niftyWindow.trigger('resize');
                toggleNav();
            },
            'hide' : function(){
                niftyContainer.removeClass('aside-in');
                niftyWindow.trigger('resize');
            },
            'toggleAlign' : function(){
                niftyContainer.toggleClass('aside-left');
                updateAside();
            },
            'alignLeft' : function(){
                niftyContainer.addClass('aside-left');
                updateAside();
            },
            'alignRight' : function(){
                niftyContainer.removeClass('aside-left');
                updateAside();
            },
            'togglePosition' : function(){
                niftyContainer.toggleClass('aside-fixed');
                updateAside();
            },
            'fixedPosition' : function(){
                niftyContainer.addClass('aside-fixed');
                updateAside();
            },
            'staticPosition' : function(){
                niftyContainer.removeClass('aside-fixed');
                updateAside();
            },
            'toggleTheme' : function(){
                niftyContainer.toggleClass('aside-bright');
            },
            'brightTheme' : function(){
                niftyContainer.addClass('aside-bright');
            },
            'darkTheme' : function(){
                niftyContainer.removeClass('aside-bright');
            },
            'update' : function(){
                updateAside();
            },
            'bind' : function(){
                bindAside();
            }
        },
        toggleNav = function(){
            var sw = niftyContainer.width();
            if(niftyContainer.hasClass('mainnav-in') && sw > 740){
                if(sw > 740 && sw < 992){
                    $.niftyNav('collapse');
                }else{
                    niftyContainer.removeClass('mainnav-in mainnav-lg mainnav-sm').addClass('mainnav-out');
                }
            }
        },
        boxedContainer = $('#container').children('.boxed'), navlg = 0, navsm = 0,
        updateAside = function(){
            try{
                niftyAside.niftyAffix('update');
            }catch(err){}
            var cssProp = {};
            if(niftyContainer.hasClass('boxed-layout') && niftyContainer.hasClass('aside-fixed') && boxedContainer.length){
                if(niftyContainer.hasClass('aside-left')){
                    cssProp ={
                        '-ms-transform' : 'translateX(' + boxedContainer.offset().left + 'px)',
                        '-webkit-transform' : 'translateX(' + boxedContainer.offset().left + 'px)',
                        'transform' : 'translateX(' + boxedContainer.offset().left + 'px)'
                    }
                }else{
                    cssProp = {
                        '-ms-transform' : 'translateX(' + ( 0 - boxedContainer.offset().left) + 'px)',
                        '-webkit-transform' : 'translateX(' + (0 - boxedContainer.offset().left) + 'px)',
                        'transform' : 'translateX(' + (0 - boxedContainer.offset().left) + 'px)'
                    }
                }
            }else{
                cssProp = {
                    '-ms-transform' : '',
                    '-webkit-transform' : '',
                    'transform' : '',
                    'right':''
                }
            }
            niftyAside.css(cssProp);
        },
        bindAside = function(){
            niftyAside = $('#aside-container');
            if(niftyAside.length){
                niftyContainer = $('#container');
                niftyWindow.on('resizeEnd',updateAside);
                niftyAside.on('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(e){
                    if(e.target == niftyAside[0]){
                        niftyWindow.trigger('resize');
                    }
                });


                // STYLEABLE SCROLLBARS
                // =================================================================
                // Require nanoScroller
                // http://jamesflorentino.github.io/nanoScrollerJS/
                // =================================================================
                niftyAside.find('.nano').nanoScroller({preventPageScrolling : (niftyContainer.hasClass('aside-fixed')?true:false)});

                var toggleBtn = $('.aside-toggle');
                if(toggleBtn.length){
                    toggleBtn.on('click', function(e){
                        e.preventDefault();
                        $.niftyAside('toggleHideShow');
                    })
                }
            }
        };

    $.niftyAside = function(method,complete){
        if (asideMethods[method]){
            asideMethods[method].apply(this,Array.prototype.slice.call(arguments, 1));
            if(complete) return complete();
        }
        return null;
    }
}(jQuery);







/* ========================================================================
* BOC AFFIX v1.3
* -------------------------------------------------------------------------
* Gsp Exclusive Plugins - Back of China
* -------------------------------------------------------------------------
*
* PLEASE REMOVE THIS PLUGIN WHEN YOU DIDN'T USE THE NAVIGATION OR ASIDE WITH FIXED STATE.
*
*
*
* OPTIONAL PLUGINS.
* You may choose whether to include it in your project or not.
*
*
*
* REQUIRE BOOTSTRAP AFFIX
* http://backofchina.com/javascript/#affix
* ========================================================================*/

!function ($) {
    "use strict";

    var niftyMainNav, niftyAside, niftyContainer, niftyMainnavScroll, niftyAsideScroll, updateScrollInterval,
    updateScroll = function(e){
        clearInterval(updateScrollInterval);
        updateScrollInterval = setInterval(function(){
            if(e[0] == niftyMainNav[0]){
                niftyMainnavScroll.nanoScroller({flash : true, preventPageScrolling: (niftyContainer.hasClass('mainnav-fixed')?true:false)});
            }else if(e[0] == niftyAside[0]){
                niftyAsideScroll.nanoScroller({preventPageScrolling: (niftyContainer.hasClass('aside-fixed')?true:false)});
            }
            clearInterval(updateScrollInterval);
            updateScrollInterval = null;
        }, 500);
    },
    bindAffix = function(){
        niftyContainer          = $('#container')
        niftyMainNav           	= $('#mainnav-container');
        niftyAside             	= $('#aside-container');
        niftyMainnavScroll      = $('#mainnav-menu-wrap > .nano');
        niftyAsideScroll        = $('#aside > .nano');

        if (niftyMainNav.length) niftyMainNav.niftyAffix({className : 'mainnav-fixed'});
        if (niftyAside.length) niftyAside.niftyAffix({className : 'aside-fixed'});
    };

    $.fn.niftyAffix = function(method){
        return this.each(function(){
            var el = $(this), className;
            if (typeof method === 'object' || !method){
                className = method.className;
                el.data('gsp.af.class', method.className);
            }else if (method == 'update') {
                if(!el.data('gsp.af.class')) bindAffix();
                className = el.data('gsp.af.class');
                updateScroll(el);
            }else if(method == 'bind'){
                bindAffix();
            }

            if (niftyContainer.hasClass(className) && !niftyContainer.hasClass('navbar-fixed') ) {
                el.affix({
                    offset:{
                        top:$('#navbar').outerHeight()
                    }
                }).on('affixed.bs.affix affix.bs.affix', function(){
                    updateScroll(el);
                });
            }else if (!niftyContainer.hasClass(className) || niftyContainer.hasClass('navbar-fixed')) {
                $(window).off(el.attr('id') +'.affix');
                el.removeClass('affix affix-top affix-bottom').removeData('bs.affix');
            }
        });
    }
}(jQuery);
