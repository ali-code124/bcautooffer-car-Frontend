!function(e) {
  var t = {};
  function i(s) {
      if (t[s])
          return t[s].exports;
      var n = t[s] = {
          i: s,
          l: !1,
          exports: {}
      };
      e[s].call(n.exports, n, n.exports, i);
      n.l = !0;
      return n.exports
  }
  i.m = e;
  i.c = t;
  i.d = function(e, t, s) {
      i.o(e, t) || Object.defineProperty(e, t, {
          enumerable: !0,
          get: s
      })
  }
  ;
  i.r = function(e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
          value: "Module"
      });
      Object.defineProperty(e, "__esModule", {
          value: !0
      })
  }
  ;
  i.t = function(e, t) {
      1 & t && (e = i(e));
      if (8 & t)
          return e;
      if (4 & t && "object" == typeof e && e && e.__esModule)
          return e;
      var s = Object.create(null);
      i.r(s);
      Object.defineProperty(s, "default", {
          enumerable: !0,
          value: e
      });
      if (2 & t && "string" != typeof e)
          for (var n in e)
              i.d(s, n, function(t) {
                  return e[t]
              }
              .bind(null, n));
      return s
  }
  ;
  i.n = function(e) {
      var t = e && e.__esModule ? function() {
          return e.default
      }
      : function() {
          return e
      }
      ;
      i.d(t, "a", t);
      return t
  }
  ;
  i.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
  }
  ;
  i.p = "//static.hsappstatic.net/conversations-embed/static-1.16153/";
  i(i.s = 0)
}([function(e, t, i) {
  "use strict";
  var s = i(1);
  (0,
  i(87).markStartPreDelay)();
  const n = ()=>{
      (0,
      s.startOnceReady)();
      document.removeEventListener("DOMContentLoaded", n)
  }
  ;
  "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : (0,
  s.startOnceReady)()
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.startOnceReady = I;
  var n = i(3)
    , o = i(90)
    , a = i(93)
    , r = i(115)
    , c = i(42)
    , d = i(35)
    , l = i(36)
    , u = s(i(45))
    , h = i(43)
    , g = s(i(44))
    , p = i(116)
    , f = i(102);
  const m = ()=>{
      console.warn(`loadImmediately is set to false and widget.load() has not been called on window.${l.GLOBAL_VARIABLE} yet. Please call widget.load() first or set loadImmediately on window.${l.SETTINGS_VARIABLE} to true.`)
  }
  ;
  function E({eventEmitter: e, logError: t}) {
      const i = (0,
      a.createEmbedScriptContext)()
        , s = new n.WidgetShell(i,t,e);
      if (window.hubspot_live_messages_running)
          console.warn("duplicate instance of live chat exists on page");
      else {
          window.hubspot_live_messages_running = !0;
          s.start()
      }
      return s
  }
  function _(e) {
      (0,
      o.loadWidgetCss)(document);
      if ((0,
      d.getExternalApiSettings)().loadImmediately)
          E({
              logError: e
          });
      else {
          const t = new u.default
            , i = new g.default;
          (0,
          c.setupExternalApi)({
              debug: m,
              on: t.on,
              off: t.off,
              clear: m,
              resetAndReloadWidget: m,
              widget: {
                  load: ()=>{
                      E({
                          eventEmitter: t,
                          logError: e
                      }).loadWidget()
                  }
                  ,
                  remove: m,
                  open: m,
                  close: m,
                  refresh: m,
                  status: ()=>({
                      loaded: !1
                  })
              }
          });
          (0,
          h.flushOnReadyCallbacks)({
              logger: i
          })
      }
  }
  function I() {
      if ((0,
      r.hasRequiredFeatures)(window)) {
          const e = new p.ErrorLogger;
          (0,
          f.getIsLocal)() ? _() : e.captureErrors(()=>{
              _(e)
          }
          )
      }
  }
}
, function(e, t, i) {
  "use strict";
  function s(e) {
      return e && e.__esModule ? e : {
          default: e
      }
  }
  e.exports = s
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.WidgetShell = void 0;
  var n = i(4)
    , o = i(9)
    , a = i(10)
    , r = i(11)
    , c = s(i(15))
    , d = i(17)
    , l = i(18)
    , u = i(20)
    , h = s(i(19))
    , g = i(21)
    , p = i(24)
    , f = i(25)
    , m = i(26)
    , E = i(27)
    , _ = i(28)
    , I = i(32)
    , v = i(41)
    , b = i(42)
    , T = i(43)
    , O = s(i(44))
    , S = s(i(45))
    , y = i(51)
    , A = i(52)
    , C = i(54)
    , P = i(55)
    , R = i(56)
    , M = i(34)
    , L = s(i(59))
    , w = s(i(63))
    , D = i(64)
    , N = i(66)
    , k = i(68)
    , x = i(69)
    , U = i(23)
    , W = i(71)
    , H = i(72)
    , G = i(74)
    , j = i(76)
    , F = i(77)
    , B = i(78)
    , V = i(79)
    , q = i(83)
    , $ = i(84)
    , K = i(85)
    , z = i(88)
    , X = i(89)
    , Y = i(22)
    , Q = i(50);
  const Z = "help-widget"
    , J = ()=>{}
  ;
  class ee {
      constructor(e, t, i) {
          this.handleDragStart = e=>{
              const t = document.getElementById(v.PARENT_ID);
              this.isDragging = !0;
              const i = "RIGHT_ALIGNED" === this.widgetData[k.WIDGET_LOCATION];
              this.offsetX = i ? t.getBoundingClientRect().right - e.clientX : e.clientX - t.getBoundingClientRect().left;
              this.offsetY = t.getBoundingClientRect().bottom - e.clientY;
              this.dragOverlayEl instanceof HTMLDivElement && this.dragOverlayEl.style.setProperty("display", "block");
              this.dragHandleEl instanceof HTMLDivElement && this.dragHandleEl.style.setProperty("cursor", "grabbing")
          }
          ;
          this.handleDragEnd = ()=>{
              if (!this.dragHandleEl)
                  return;
              this.iframeMessage.post(a.TRACK_WIDGET_DRAGGED, {
                  timeOnPage: performance && Math.round(performance.now() / 1e3),
                  isOpen: this.isOpen || !1
              });
              this.dragHandleEl.style.setProperty("cursor", "grab");
              this.dragOverlayEl instanceof HTMLDivElement && this.dragOverlayEl.style.setProperty("display", "none");
              this.isDragging = !1;
              const e = this.widgetData ? "RIGHT_ALIGNED" === this.widgetData[k.WIDGET_LOCATION] : "RIGHT_ALIGNED"
                , t = e ? "right" : "left"
                , i = `${u.cookies.WIDGET_POSITION}_${t}`
                , s = document.getElementById(v.PARENT_ID)
                , n = window.getComputedStyle(s)
                , o = parseInt(n.bottom, 10)
                , r = e ? parseInt(n.right, 10) : parseInt(n.left, 10);
              if (r || o)
                  (0,
                  l.setCookie)(i, JSON.stringify({
                      bottom: o,
                      horizontal: r
                  }), h.default.THIRTY_MINUTES);
              else {
                  s.style.removeProperty(t);
                  s.style.removeProperty("bottom");
                  (0,
                  Y.deleteCookie)(i)
              }
          }
          ;
          this.handleDrag = e=>{
              if (!this.isDragging)
                  return;
              const t = document.getElementById(v.PARENT_ID)
                , i = this.widgetData ? "RIGHT_ALIGNED" === this.widgetData[k.WIDGET_LOCATION] : "RIGHT_ALIGNED"
                , s = i ? "right" : "left"
                , n = i ? window.innerWidth - e.clientX - this.offsetX : e.clientX - this.offsetX
                , o = window.innerHeight - e.clientY - this.offsetY;
              t.style.setProperty(s, Math.min(Math.max(0, n), window.innerWidth - t.clientWidth) + "px", "important");
              t.style.setProperty("bottom", Math.min(Math.max(0, o), window.innerHeight - t.clientHeight) + "px", "important");
              t.style.setProperty("position", "fixed", "!important")
          }
          ;
          this.unintializeDrag = ()=>{
              if (this.dragHandleEl) {
                  this.dragHandleEl.removeEventListener("mousedown", this.handleDragStart);
                  window.removeEventListener("mousemove", this.handleDrag);
                  window.removeEventListener("mouseup", this.handleDragEnd);
                  window.removeEventListener("mouseleave", this.handleDragEnd);
                  this.dragHandleEl.remove()
              }
          }
          ;
          this.initalizeDrag = ()=>{
              const {accentColor: e, gates: t} = this.widgetData;
              if (!t || !t["Conversations:DraggableChat"] || (0,
              n.isAnyMobile)())
                  return;
              const i = "RIGHT_ALIGNED" === this.widgetData[k.WIDGET_LOCATION] ? "right" : "left";
              this.dragHandleEl = document.createElement("div");
              this.dragHandleEl.classList.add("hs-drag-handle", "hs-drag-handle--" + i);
              this.dragHandleEl.title = "Drag";
              this.dragHandleEl.style.setProperty("color", e);
              this.dragHandleEl.innerHTML = '\n      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2202_11221)"><path d="M11.1417 0H13.4333C14.0642 0 14.575 0.510833 14.575 1.14167V3.43333C14.575 4.06417 14.0642 4.575 13.4333 4.575H11.1417C10.5108 4.575 10 4.06417 10 3.43333V1.14167C10 0.510833 10.5108 0 11.1417 0ZM11.1417 6.85833H13.4333C14.0642 6.85833 14.575 7.36917 14.575 8V10.2917C14.575 10.9225 14.0642 11.4333 13.4333 11.4333H11.1417C10.5108 11.4333 10 10.9225 10 10.2917V8C10 7.36917 10.5108 6.85833 11.1417 6.85833ZM11.1417 13.7167H13.4333C14.0642 13.7167 14.575 14.2275 14.575 14.8583V17.15C14.575 17.7808 14.0642 18.2917 13.4333 18.2917H11.1417C10.5108 18.2917 10 17.7808 10 17.15V14.8583C10 14.2275 10.5108 13.7167 11.1417 13.7167ZM11.1417 20.575H13.4333C14.0642 20.575 14.575 21.0858 14.575 21.7167V24.0083C14.575 24.6392 14.0642 25.15 13.4333 25.15H11.1417C10.5108 25.15 10 24.6392 10 24.0083V21.7167C10 21.0858 10.5108 20.575 11.1417 20.575ZM18 0H20.2917C20.9225 0 21.4333 0.510833 21.4333 1.14167V3.43333C21.4333 4.06417 20.9225 4.575 20.2917 4.575H18C17.3692 4.575 16.8583 4.06417 16.8583 3.43333V1.14167C16.8583 0.510833 17.3692 0 18 0ZM18 6.85833H20.2917C20.9225 6.85833 21.4333 7.36917 21.4333 8V10.2917C21.4333 10.9225 20.9225 11.4333 20.2917 11.4333H18C17.3692 11.4333 16.8583 10.9225 16.8583 10.2917V8C16.8583 7.36917 17.3692 6.85833 18 6.85833ZM18 13.7167H20.2917C20.9225 13.7167 21.4333 14.2275 21.4333 14.8583V17.15C21.4333 17.7808 20.9225 18.2917 20.2917 18.2917H18C17.3692 18.2917 16.8583 17.7808 16.8583 17.15V14.8583C16.8583 14.2275 17.3692 13.7167 18 13.7167ZM18 20.575H20.2917C20.9225 20.575 21.4333 21.0858 21.4333 21.7167V24.0083C21.4333 24.6392 20.9225 25.15 20.2917 25.15H18C17.3692 25.15 16.8583 24.6392 16.8583 24.0083V21.7167C16.8583 21.0858 17.3692 20.575 18 20.575ZM11.1417 27.425H13.4333C14.0642 27.425 14.575 27.9358 14.575 28.5667V30.8583C14.575 31.4892 14.0642 32 13.4333 32H11.1417C10.5108 32 10 31.4892 10 30.8583V28.5667C10 27.9358 10.5108 27.425 11.1417 27.425ZM18 27.425H20.2917C20.9225 27.425 21.4333 27.9358 21.4333 28.5667V30.8583C21.4333 31.4892 20.9225 32 20.2917 32H18C17.3692 32 16.8583 31.4892 16.8583 30.8583V28.5667C16.8583 27.9358 17.3692 27.425 18 27.425Z" fill="currentColor"></path></g><defs><clipPath id="clip0_2202_11221"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>\n    ';
              this.dragOverlayEl = document.createElement("div");
              this.dragOverlayEl.classList.add("hs-drag-overlay");
              const s = document.getElementById(v.PARENT_ID);
              s.appendChild(this.dragOverlayEl);
              s.appendChild(this.dragHandleEl);
              s.style.setProperty("user-select", "none");
              this.dragHandleEl.addEventListener("mousedown", this.handleDragStart);
              window.addEventListener("mousemove", this.handleDrag);
              window.addEventListener("mouseup", this.handleDragEnd);
              window.addEventListener("mouseleave", this.handleDragEnd)
          }
          ;
          this.getDefaultSize = ()=>({
              width: 100,
              height: 96
          });
          this.getStartPosition = ()=>{
              if (!this.widgetData.gates || !this.widgetData.gates["Conversations:DraggableChat"] || (0,
              n.isAnyMobile)())
                  return null;
              const e = (this.widgetData ? "RIGHT_ALIGNED" === this.widgetData[k.WIDGET_LOCATION] : "RIGHT_ALIGNED") ? "right" : "left"
                , t = `${u.cookies.WIDGET_POSITION}_${e}`
                , i = (0,
              l.getCookie)(t);
              if (!i)
                  return null;
              try {
                  return JSON.parse(i)
              } catch (e) {
                  console.error("Error parsing cookie", e);
                  return null
              }
          }
          ;
          this.loadIFrame = ()=>{
              (0,
              n.isAnyMobile)() && document.documentElement.classList.add(p.MOBILE);
              const e = document.createElement("iframe");
              this.iframeSrc = this.embedScriptContext.getIFrameSrc();
              e.src = this.iframeSrc;
              e.id = v.IFRAME_ID;
              e.title = "Chat Widget";
              e.allowFullscreen = !0;
              e.setAttribute("data-test-id", "chat-widget-iframe");
              e.addEventListener("load", this.handleIframeLoad);
              const t = document.createElement("div");
              t.role = "region";
              t.ariaLabel = "Chat Widget";
              if ((0,
              M.shouldEmbedInline)()) {
                  const i = document.querySelector((0,
                  M.getInlineEmbedSelector)());
                  if (!i) {
                      this.devLogger.error(`cannot embed widget - element at \`${(0,
                      M.getInlineEmbedSelector)()}\` cannot be found`);
                      return
                  }
                  t.id = v.INLINE_PARENT_ID;
                  e.id = v.INLINE_IFRAME_ID;
                  this.iframe = t.appendChild(e);
                  i.appendChild(t);
                  return
              }
              if (document.getElementById(v.PARENT_ID)) {
                  console.warn(`Element with id ${v.PARENT_ID} already exists. Unable to load HubSpot Conversations Widget.`);
                  return
              }
              t.id = v.PARENT_ID;
              const i = this.getStartPosition();
              if (i) {
                  const e = "RIGHT_ALIGNED" === this.widgetData[k.WIDGET_LOCATION] ? "right" : "left";
                  t.style.setProperty(e, i.horizontal + "px", "important");
                  t.style.setProperty("bottom", i.bottom + "px", "important")
              }
              const {height: s, width: o} = this.getDefaultSize();
              t.style.minHeight = s + "px";
              t.style.minWidth = o + "px";
              const a = document.createElement("div");
              a.className = p.SHADOW_CONTAINER;
              const r = (0,
              E.isEmbeddedInProduct)(this.embedScriptContext);
              if (r) {
                  t.classList.add(p.INTERNAL);
                  a.classList.add(p.INTERNAL)
              }
              t.appendChild(a);
              r && (e.id = Z);
              this.iframe = t.appendChild(e);
              document.body.appendChild(t);
              this.initalizeDrag();
              this.setFrameClass()
          }
          ;
          this.handleI18nLabels = ({data: e})=>{
              if (!this.iframe || !e)
                  return;
              const t = e["conversations-visitor-ui.visitorExperienceAriaLabels.chatWidget"]
                , i = e["conversations-visitor-experience-components.visitorExperienceAriaLabels.drag"]
                , s = document.getElementById(v.PARENT_ID);
              t && s && (s.ariaLabel = t);
              i && this.dragHandleEl && this.dragHandleEl.setAttribute("title", i)
          }
          ;
          this.clampPosition = ()=>{
              const {gates: e} = this.widgetData || {};
              if (!e || !e["Conversations:DraggableChat"] || (0,
              n.isAnyMobile)())
                  return;
              let t = !1;
              const i = document.getElementById(v.PARENT_ID)
                , s = this.widgetData ? "RIGHT_ALIGNED" === this.widgetData[k.WIDGET_LOCATION] : "RIGHT_ALIGNED";
              if (!i || !i.getBoundingClientRect)
                  return;
              const {top: o, left: a, right: r, bottom: c} = i.getBoundingClientRect()
                , {innerWidth: d, innerHeight: l} = window
                , u = d - r
                , h = l - c
                , {clientWidth: g, clientHeight: p} = i;
              if (p > l) {
                  i.style.setProperty("bottom", "0px", "important");
                  t = !0
              } else if (o < 0) {
                  i.style.setProperty("bottom", l - p + "px", "important");
                  t = !0
              } else if (h < 0) {
                  i.style.setProperty("bottom", "0px", "important");
                  t = !0
              }
              if (s) {
                  if (u < 0) {
                      i.style.setProperty("right", "0px", "important");
                      t = !0
                  }
                  if (a < 0) {
                      i.style.setProperty("right", d - g + "px", "important");
                      t = !0
                  }
              } else {
                  if (u < 0) {
                      i.style.setProperty("left", d - g + "px", "important");
                      t = !0
                  }
                  if (a < 0) {
                      i.style.setProperty("left", "0px", "important");
                      t = !0
                  }
              }
              t && this.handleDragEnd()
          }
          ;
          this.setWidgetData = e=>{
              this.widgetData = e;
              this.setFrameClass()
          }
          ;
          this.embedScriptContext = e;
          this.dragHandleEl = null;
          this.dragOverlayEl = null;
          this.isDragging = !1;
          this.offsetX = 0;
          this.offsetY = 0;
          this.isOpen = (0,
          I.shouldWidgetStartOpen)();
          this.iframe = null;
          this.iframeSrc = null;
          this.hasLoadedIframe = !1;
          this.isLoadingIframe = !1;
          this.requestWidgetOpen = this.requestWidgetOpen.bind(this);
          this.requestWidgetClose = this.requestWidgetClose.bind(this);
          this.requestWidgetRefresh = (0,
          P.throttle)(this.requestWidgetRefresh.bind(this), 1e3);
          this.handleWindowResize = this.handleWindowResize.bind(this);
          this.handleIframeLoad = this.handleIframeLoad.bind(this);
          this.handleResizeMessage = this.handleResizeMessage.bind(this);
          this.handleOpenChange = this.handleOpenChange.bind(this);
          this.handleStoreMessagesCookie = this.handleStoreMessagesCookie.bind(this);
          this.handleRequestWidget = this.handleRequestWidget.bind(this);
          this.handleWidgetRefresh = this.handleWidgetRefresh.bind(this);
          this.setWidgetNotLoaded = this.setWidgetNotLoaded.bind(this);
          this.removeIframe = this.removeIframe.bind(this);
          this.handleExternalApiEventMessage = this.handleExternalApiEventMessage.bind(this);
          this.loadWidget = (0,
          P.throttle)(this.loadWidget.bind(this), 1e3);
          this.resetAndReloadWidget = this.resetAndReloadWidget.bind(this);
          this.setWidgetOpenCookie = this.setWidgetOpenCookie.bind(this);
          this.getStatus = this.getStatus.bind(this);
          this.handleScroll = this.handleScroll.bind(this);
          this.handleExitIntent = this.handleExitIntent.bind(this);
          this.extendedClearCookiesFunction = this.extendedClearCookiesFunction.bind(this);
          this.openToNewThread = this.openToNewThread.bind(this);
          this.devLogger = new O.default;
          this.eventEmitter = i || new S.default;
          this.logError = t ? t.logError : J;
          this.scrollPercentageTracker = new L.default({
              onScroll: this.handleScroll
          });
          this.exitIntentTracker = new w.default({
              onExitIntent: this.handleExitIntent
          });
          this.iframeMessage = (0,
          V.iframeMessagePool)({
              iframeSrc: this.embedScriptContext.getIFrameSrc()
          });
          this.apiUsageTracker = new W.ApiUsageTracker({
              postMessageToIframe: this.iframeMessage.post
          });
          const s = new H.PostMessageApiClient(this.iframeMessage.post)
            , d = new c.default;
          this.postMessageReceiver = new r.PostMessageReceiver({
              [o.SHOW_PAGE_TITLE_NOTIFICATION]: d.handleShow,
              [o.CLEAR_PAGE_TITLE_NOTIFICATION]: d.handleClear,
              [o.REQUEST_WIDGET]: this.handleRequestWidget,
              [o.IFRAME_RESIZE]: this.handleResizeMessage,
              [o.OPEN_CHANGE]: this.handleOpenChange,
              [o.CLOSED_WELCOME_MESSAGE]: q.hideWelcomeMessage,
              [o.STORE_MESSAGES_COOKIE]: this.handleStoreMessagesCookie,
              [o.EXTERNAL_API_EVENT]: this.handleExternalApiEventMessage,
              [o.API_REQUEST]: s.makeApiRequest,
              [o.I18N_LABELS]: this.handleI18nLabels
          },{
              allowedOrigin: this.embedScriptContext.getIFrameDomain(),
              iframeUuid: this.embedScriptContext.iframeUuid
          });
          this.exitIntentTracker.registerPostMessageReceivers(this.postMessageReceiver);
          this.scrollPercentageTracker.registerPostMessageReceivers(this.postMessageReceiver)
      }
      handleExternalApiEventMessage(e) {
          (0,
          y.handleExternalApiEventMessage)(e, {
              eventEmitter: this.eventEmitter
          })
      }
      handleScroll({scrollPercentage: e}) {
          this.iframeMessage.post(a.SCROLL_PERCENTAGE_CHANGE, {
              scrollPercentage: e
          })
      }
      handleExitIntent() {
          this.iframeMessage.post(a.EXIT_INTENT)
      }
      getStatus() {
          return {
              loaded: this.hasLoadedIframe,
              pending: this.isLoadingIframe
          }
      }
      handleIframeLoad() {
          setTimeout(()=>this.eventEmitter.trigger("widgetLoaded", {
              message: "widget has loaded"
          }));
          this.handleWindowResize();
          this.hasLoadedIframe = !0;
          this.isLoadingIframe = !1;
          (0,
          D.markEndPostDelay)();
          this.postPerfAttributes(this.embedScriptContext.getPerfAttributes())
      }
      postPerfAttributes(e) {
          Math.random() < .5 && this.iframeMessage.post(a.PERF_ATTRIBUTES, {
              perfAttributes: e
          })
      }
      resetAndReloadWidget() {
          this.removeIframe();
          (0,
          x.resetAndLaunchWidget)()
      }
      removeIframe() {
          this.unintializeDrag();
          const e = (0,
          M.shouldEmbedInline)() ? document.getElementById(v.INLINE_PARENT_ID) : document.getElementById(v.PARENT_ID);
          e && e.remove();
          this.iframeSrc = null;
          this.hasLoadedIframe = !1;
          this.isLoadingIframe = !1
      }
      handleResizeMessage({data: {height: e, width: t}={}}) {
          (0,
          $.resizeWidgetIframe)({
              height: e,
              width: t
          });
          e && e > 60 && this.dragHandleEl ? this.dragHandleEl.style.setProperty("display", "flex") : this.dragHandleEl && this.dragHandleEl.style.setProperty("display", "none");
          this.clampPosition()
      }
      setWidgetOpenCookie({isOpen: e}) {
          (0,
          l.setCookie)(u.cookies.IS_OPEN, e, h.default.THIRTY_MINUTES)
      }
      handleOpenChange({data: {isOpen: e, isUser: t}}) {
          const i = document.documentElement
            , s = document.getElementById(v.PARENT_ID).getElementsByClassName(p.SHADOW_CONTAINER)[0];
          this.isOpen = e;
          t && this.setWidgetOpenCookie({
              isOpen: this.isOpen
          });
          if (this.isOpen) {
              i.classList.add(p.ACTIVE);
              s.classList.add("active")
          } else {
              i.classList.remove(p.ACTIVE);
              s.classList.remove("active")
          }
      }
      handleRequestWidget({source: e}) {
          (0,
          G.sendWidgetDataToIframe)({
              source: e,
              widgetData: this.widgetData,
              embedScriptContext: this.embedScriptContext,
              apiUsageTracker: this.apiUsageTracker
          })
      }
      handleStoreMessagesCookie({data: e}) {
          this.iframeMessage.post(a.FIRST_VISITOR_SESSION, {
              isFirstVisitorSession: !1
          });
          "yes" === (0,
          z.getGlobalCookieOptOut)() && this.widgetData.gdprConsentOptions.cookieConsentPrompt !== X.NEVER && window._hsp.push(["showBanner"]);
          (0,
          m.setMessagesUtk)(e)
      }
      requestWidgetOpen() {
          this.isOpen ? this.devLogger.log("cannot open the widget, it is already open.") : this.iframeMessage.post(a.REQUEST_OPEN)
      }
      requestWidgetClose() {
          this.isOpen ? this.iframeMessage.post(a.REQUEST_CLOSE) : this.devLogger.log("cannot close the widget, it is already closed")
      }
      handleWindowResize() {
          const e = {
              height: window.innerHeight,
              width: window.innerWidth
          };
          this.iframeMessage.post(a.BROWSER_WINDOW_RESIZE, e);
          this.clampPosition()
      }
      requestWidgetRefresh({openToNewThread: e}={}) {
          const {portalId: t} = this.embedScriptContext;
          if (this.hasLoadedIframe || !this.isLoadingIframe)
              if (this.hasLoadedIframe) {
                  const i = this.embedScriptContext.getInitialRequestUrl();
                  (0,
                  A.fetchWidgetData)({
                      requestUrl: i,
                      portalId: t
                  }, t=>{
                      this.handleWidgetRefresh(t);
                      e && this.openToNewThread()
                  }
                  )
              } else {
                  this.loadWidget();
                  e && this.openToNewThread()
              }
          else
              this.devLogger.log("Cannot refresh the widget - it is currently loading.")
      }
      openToNewThread() {
          this.iframeMessage.post(a.OPEN_TO_NEW_THREAD)
      }
      extendedClearCookiesFunction(e) {
          e && e[U.RESET_WIDGET] && this.removeIframe();
          (0,
          g.clearCookies)(e)
      }
      handleWidgetRefresh(e) {
          this.setWidgetData(e);
          (0,
          d.getWidgetDataResponseType)(this.widgetData) === f.HIDE_WIDGET ? this.removeIframe() : this.iframeMessage.post(a.REFRESH_WIDGET_DATA, Object.assign({}, this.widgetData, {}, (0,
          R.getIframeQueryParams)(this.embedScriptContext)))
      }
      setWidgetNotLoaded({reason: e, description: t}) {
          this.hasLoadedIframe = !1;
          this.isLoadingIframe = !1;
          (e || t) && this.eventEmitter.trigger(Q.WIDGET_HIDDEN, {
              reason: e,
              description: t
          })
      }
      loadWidget(e={}) {
          const {portalId: t} = this.embedScriptContext;
          if (this.isLoadingIframe) {
              this.devLogger.log("Cannot load the widget - The widget is already being loaded.");
              this.logError("load widget called while public widget request is pending")
          } else if (this.hasLoadedIframe)
              this.devLogger.log("Cannot load the widget - the widget has already loaded.");
          else {
              this.isLoadingIframe = !0;
              e.widgetOpen && this.setWidgetOpenCookie({
                  isOpen: !0
              });
              (0,
              A.fetchWidgetData)({
                  requestUrl: this.embedScriptContext.getInitialRequestUrl(),
                  portalId: t
              }, (0,
              K.handleTargetingAndDelay)(this.setWidgetData, this.loadIFrame, this.setWidgetNotLoaded), ()=>{
                  C.EVENTS.messagesInitialized({
                      messageWillRender: !1
                  })
              }
              )
          }
      }
      start() {
          const {shouldRender: e} = (0,
          _.shouldRenderWidget)(this.embedScriptContext);
          if (e) {
              (0,
              b.setupExternalApi)({
                  debug: this.devLogger.debug,
                  on: (e,t)=>{
                      this.eventEmitter.on(e, t);
                      this.apiUsageTracker.trackEventListener(e)
                  }
                  ,
                  off: this.eventEmitter.off,
                  clear: e=>{
                      this.extendedClearCookiesFunction(e);
                      this.apiUsageTracker.trackMethod("clear")
                  }
                  ,
                  resetAndReloadWidget: this.resetAndReloadWidget,
                  widget: {
                      load: (...e)=>{
                          this.loadWidget(...e);
                          this.apiUsageTracker.trackMethod("load")
                      }
                      ,
                      remove: ()=>{
                          this.removeIframe();
                          this.apiUsageTracker.trackMethod("remove")
                      }
                      ,
                      open: ()=>{
                          this.requestWidgetOpen();
                          this.apiUsageTracker.trackMethod("open")
                      }
                      ,
                      close: ()=>{
                          this.requestWidgetClose();
                          this.apiUsageTracker.trackMethod("close")
                      }
                      ,
                      refresh: (...e)=>{
                          this.requestWidgetRefresh(...e);
                          this.apiUsageTracker.trackMethod("refresh")
                      }
                      ,
                      status: ()=>{
                          this.apiUsageTracker.trackMethod("status");
                          return this.getStatus()
                      }
                  }
              });
              (0,
              T.flushOnReadyCallbacks)({
                  logger: this.devLogger,
                  trackCallback: this.apiUsageTracker.trackOnReady
              });
              (0,
              F.registerHashChangeListener)({
                  requestWidgetOpen: this.requestWidgetOpen,
                  isOpen: this.isOpen
              });
              (0,
              B.registerWindowResizeListener)({
                  resizeCallbackFn: this.handleWindowResize
              });
              (0,
              j.registerCookieListeners)({
                  postMessageToIframe: this.iframeMessage.post
              });
              (0,
              M.shouldLoadImmediately)() && this.loadWidget();
              this.postVisitorIdentificationAttributes()
          } else
              try {
                  C.EVENTS.messagesInitialized({
                      messageWillRender: !1
                  })
              } catch (e) {
                  this.devLogger.log("widget load aborted")
              }
      }
      postVisitorIdentificationAttributes() {
          const {identificationEmail: e, identificationToken: t} = this.embedScriptContext;
          this.iframeMessage.post(a.VISITOR_IDENTIFICATION_ATTRIBUTES, {
              identificationEmail: e,
              identificationToken: t
          })
      }
      setFrameClass() {
          const e = document.getElementById(v.PARENT_ID);
          if (!e)
              return;
          const t = this.widgetData[k.WIDGET_LOCATION];
          (0,
          N.setClassInClassList)({
              widgetLocation: t,
              classList: e.classList
          })
      }
  }
  t.WidgetShell = ee
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getMobileState = r;
  t.isAnyMobile = c;
  t.isMobileSafari = d;
  t.isWindowsMobile = l;
  var n = s(i(5));
  const o = /WebKit/i;
  function a(e, t) {
      return e.test(t)
  }
  function r(e=window.navigator.userAgent) {
      let t = e
        , i = t.split("[FBAN");
      void 0 !== i[1] && (t = i[0]);
      i = t.split("Twitter");
      void 0 !== i[1] && (t = i[0]);
      const s = new n.default(t);
      s.other.webkit = a(o, t);
      s.safari = s.apple.device && s.other.webkit && !s.other.opera && !s.other.chrome;
      return s
  }
  function c() {
      const e = r();
      return e.any && !e.tablet
  }
  function d() {
      return r().safari
  }
  function l() {
      return r().windows.phone
  }
}
, function(e, t, i) {
  "use strict";
  var s = i(6);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  var n = {};
  Object.defineProperty(t, "default", {
      enumerable: !0,
      get: function() {
          return o.default
      }
  });
  var o = s(i(8));
  Object.keys(o).forEach((function(e) {
      "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(n, e) || Object.defineProperty(t, e, {
          enumerable: !0,
          get: function() {
              return o[e]
          }
      }))
  }
  ))
}
, function(e, t, i) {
  "use strict";
  var s = i(7);
  function n() {
      if ("function" != typeof WeakMap)
          return null;
      var e = new WeakMap;
      n = function() {
          return e
      }
      ;
      return e
  }
  function o(e) {
      if (e && e.__esModule)
          return e;
      if (null === e || "object" !== s(e) && "function" != typeof e)
          return {
              default: e
          };
      var t = n();
      if (t && t.has(e))
          return t.get(e);
      var i = {}
        , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var a in e)
          if (Object.prototype.hasOwnProperty.call(e, a)) {
              var r = o ? Object.getOwnPropertyDescriptor(e, a) : null;
              r && (r.get || r.set) ? Object.defineProperty(i, a, r) : i[a] = e[a]
          }
      i.default = e;
      t && t.set(e, i);
      return i
  }
  e.exports = o
}
, function(e, t, i) {
  "use strict";
  function s(t) {
      "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? e.exports = s = function(e) {
          return typeof e
      }
      : e.exports = s = function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
      }
      ;
      return s(t)
  }
  e.exports = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.default = v;
  var s = /iPhone/i
    , n = /iPod/i
    , o = /iPad/i
    , a = /\biOS-universal(?:.+)Mac\b/i
    , r = /\bAndroid(?:.+)Mobile\b/i
    , c = /Android/i
    , d = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i
    , l = /Silk/i
    , u = /Windows Phone/i
    , h = /\bWindows(?:.+)ARM\b/i
    , g = /BlackBerry/i
    , p = /BB10/i
    , f = /Opera Mini/i
    , m = /\b(CriOS|Chrome)(?:.+)Mobile/i
    , E = /Mobile(?:.+)Firefox\b/i
    , _ = function(e) {
      return void 0 !== e && "MacIntel" === e.platform && "number" == typeof e.maxTouchPoints && e.maxTouchPoints > 1 && "undefined" == typeof MSStream
  };
  function I(e) {
      return function(t) {
          return t.test(e)
      }
  }
  function v(e) {
      var t = {
          userAgent: "",
          platform: "",
          maxTouchPoints: 0
      };
      e || "undefined" == typeof navigator ? "string" == typeof e ? t.userAgent = e : e && e.userAgent && (t = {
          userAgent: e.userAgent,
          platform: e.platform,
          maxTouchPoints: e.maxTouchPoints || 0
      }) : t = {
          userAgent: navigator.userAgent,
          platform: navigator.platform,
          maxTouchPoints: navigator.maxTouchPoints || 0
      };
      var i = t.userAgent
        , v = i.split("[FBAN");
      void 0 !== v[1] && (i = v[0]);
      void 0 !== (v = i.split("Twitter"))[1] && (i = v[0]);
      var b = I(i)
        , T = {
          apple: {
              phone: b(s) && !b(u),
              ipod: b(n),
              tablet: !b(s) && (b(o) || _(t)) && !b(u),
              universal: b(a),
              device: (b(s) || b(n) || b(o) || b(a) || _(t)) && !b(u)
          },
          amazon: {
              phone: b(d),
              tablet: !b(d) && b(l),
              device: b(d) || b(l)
          },
          android: {
              phone: !b(u) && b(d) || !b(u) && b(r),
              tablet: !b(u) && !b(d) && !b(r) && (b(l) || b(c)),
              device: !b(u) && (b(d) || b(l) || b(r) || b(c)) || b(/\bokhttp\b/i)
          },
          windows: {
              phone: b(u),
              tablet: b(h),
              device: b(u) || b(h)
          },
          other: {
              blackberry: b(g),
              blackberry10: b(p),
              opera: b(f),
              firefox: b(E),
              chrome: b(m),
              device: b(g) || b(p) || b(f) || b(E) || b(m)
          },
          any: !1,
          phone: !1,
          tablet: !1
      };
      T.any = T.apple.device || T.android.device || T.windows.device || T.other.device;
      T.phone = T.apple.phone || T.android.phone || T.windows.phone;
      T.tablet = T.apple.tablet || T.android.tablet || T.windows.tablet;
      return T
  }
  e.exports = t.default
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.I18N_LABELS = t.API_REQUEST = t.STOP_TRACK_EXIT_INTENT = t.START_TRACK_EXIT_INTENT = t.STOP_TRACK_SCROLL_PERCENTAGE = t.START_TRACK_SCROLL_PERCENTAGE = t.EXTERNAL_API_EVENT = t.STORE_MESSAGES_COOKIE = t.REQUEST_WIDGET = t.CLOSED_WELCOME_MESSAGE = t.OPEN_CHANGE = t.IFRAME_RESIZE = t.CLEAR_PAGE_TITLE_NOTIFICATION = t.SHOW_PAGE_TITLE_NOTIFICATION = void 0;
  const s = "show-page-title-notification";
  t.SHOW_PAGE_TITLE_NOTIFICATION = s;
  const n = "clear-page-title-notification";
  t.CLEAR_PAGE_TITLE_NOTIFICATION = n;
  const o = "iframe-resize";
  t.IFRAME_RESIZE = o;
  const a = "open-change";
  t.OPEN_CHANGE = a;
  const r = "closed-welcome-message";
  t.CLOSED_WELCOME_MESSAGE = r;
  const c = "request-widget";
  t.REQUEST_WIDGET = c;
  const d = "store-messages-cookie";
  t.STORE_MESSAGES_COOKIE = d;
  const l = "external-api-event";
  t.EXTERNAL_API_EVENT = l;
  const u = "start-track-scroll-percentage";
  t.START_TRACK_SCROLL_PERCENTAGE = u;
  const h = "stop-track-scroll-percentage";
  t.STOP_TRACK_SCROLL_PERCENTAGE = h;
  const g = "start-track-exit-intent";
  t.START_TRACK_EXIT_INTENT = g;
  const p = "stop-track-exit-intent";
  t.STOP_TRACK_EXIT_INTENT = p;
  const f = "api-request";
  t.API_REQUEST = f;
  const m = "i18n-labels";
  t.I18N_LABELS = m
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.VISITOR_IDENTIFICATION_ATTRIBUTES = t.API_REQUEST_RESULT = t.OPEN_TO_NEW_THREAD = t.TRACK_WIDGET_DRAGGED = t.TRACK_API_USAGE = t.PERF_ATTRIBUTES = t.EXIT_INTENT = t.SCROLL_PERCENTAGE_CHANGE = t.BROWSER_WINDOW_RESIZE = t.REQUEST_CLOSE = t.REQUEST_OPEN = t.REFRESH_WIDGET_DATA = t.FIRST_VISITOR_SESSION = t.GLOBAL_COOKIE_OPT_OUT = t.HUBSPOT_UTK = t.WIDGET_DATA = void 0;
  const s = "widget-data";
  t.WIDGET_DATA = s;
  const n = "hubspot-utk";
  t.HUBSPOT_UTK = n;
  const o = "global-cookie-opt-out";
  t.GLOBAL_COOKIE_OPT_OUT = o;
  const a = "first-visitor-session";
  t.FIRST_VISITOR_SESSION = a;
  const r = "refresh-widget-data";
  t.REFRESH_WIDGET_DATA = r;
  const c = "request-open";
  t.REQUEST_OPEN = c;
  const d = "request-close";
  t.REQUEST_CLOSE = d;
  const l = "browser-window-resize";
  t.BROWSER_WINDOW_RESIZE = l;
  const u = "scroll-percentage-change";
  t.SCROLL_PERCENTAGE_CHANGE = u;
  const h = "exit-intent";
  t.EXIT_INTENT = h;
  const g = "perf-attributes";
  t.PERF_ATTRIBUTES = g;
  const p = "track-api-usage";
  t.TRACK_API_USAGE = p;
  const f = "track-widget-dragged";
  t.TRACK_WIDGET_DRAGGED = f;
  const m = "open-to-new-thread";
  t.OPEN_TO_NEW_THREAD = m;
  const E = "api-request-result";
  t.API_REQUEST_RESULT = E;
  const _ = "visitor-identification-attributes";
  t.VISITOR_IDENTIFICATION_ATTRIBUTES = _
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.PostMessageReceiver = void 0;
  var s = i(12)
    , n = i(14);
  class o {
      constructor(e, {allowedOrigin: t, iframeUuid: i}) {
          (0,
          n.objectInvariant)(e);
          (0,
          s.stringInvariant)(t);
          (0,
          s.stringInvariant)(i);
          this.allowedOrigin = t;
          this.iframeUuid = i;
          this._handlers = e;
          this.handleMessage = this.handleMessage.bind(this);
          window.addEventListener("message", this.handleMessage)
      }
      isOriginAllowed(e) {
          return e === this.allowedOrigin
      }
      handleMessage(e) {
          const {data: t, origin: i, source: s} = e;
          if (this.isOriginAllowed(i))
              try {
                  const e = JSON.parse(t);
                  if (e.uuid !== this.iframeUuid)
                      return;
                  const {type: i, data: n} = e
                    , o = this._handlers[i];
                  "function" == typeof o && o({
                      data: n,
                      source: s
                  })
              } catch (e) {
                  return
              }
      }
      register(e, t) {
          this._handlers[e] = t
      }
  }
  t.PostMessageReceiver = o
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.stringInvariant = void 0;
  var n = s(i(13));
  const o = (e,t="")=>(0,
  n.default)("string" == typeof e, "Expected %s to be a string, not a %s", t || e, typeof e);
  t.stringInvariant = o
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.default = void 0;
  var s = (e,t,...i)=>{
      if (!e) {
          let e;
          if (void 0 === t)
              e = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
          else {
              let s = 0;
              e = new Error("Invariant Violation: " + t.replace(/%s/g, ()=>i[s++]))
          }
          throw e
      }
  }
  ;
  t.default = s;
  e.exports = t.default
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.objectInvariant = void 0;
  var n = s(i(13));
  const o = (e,t="")=>(0,
  n.default)("object" == typeof e && null !== e, "Expected %s to be an object", t || e);
  t.objectInvariant = o
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.default = void 0;
  var s = i(12)
    , n = i(16);
  class o {
      constructor() {
          this.handleShow = this.handleShow.bind(this);
          this.handleClear = this.handleClear.bind(this);
          this.notificationIntervalId = 0;
          this.notificationMessageIsInPageTitle = !1;
          this.cachedOriginalDocumentTitle = ""
      }
      clearNotificationInterval() {
          clearInterval(this.notificationIntervalId)
      }
      notificationIntervalIsRunning() {
          return Boolean(this.notificationIntervalId)
      }
      start({title: e}) {
          if (!this.notificationIntervalIsRunning()) {
              this.cachedOriginalDocumentTitle = document.title;
              this.togglePageTitle({
                  notificationTitle: e
              });
              this.notificationIntervalId = setInterval(()=>{
                  this.togglePageTitle({
                      notificationTitle: e
                  })
              }
              , n.NOTIFICATION_INTERVAL_MS)
          }
      }
      stop() {
          this.clearNotificationInterval();
          this.updatePageTitle(this.cachedOriginalDocumentTitle);
          this.notificationIntervalId = 0;
          this.notificationMessageIsInPageTitle = !1;
          this.cachedOriginalDocumentTitle = ""
      }
      togglePageTitle({notificationTitle: e}) {
          if (this.notificationMessageIsInPageTitle) {
              this.updatePageTitle(this.cachedOriginalDocumentTitle);
              this.notificationMessageIsInPageTitle = !1
          } else {
              this.updatePageTitle(e);
              this.notificationMessageIsInPageTitle = !0
          }
      }
      handleShow({data: e}) {
          this.start({
              title: e.title
          })
      }
      handleClear() {
          this.stop()
      }
      updatePageTitle(e) {
          (0,
          s.stringInvariant)(e);
          document.title = e
      }
  }
  var a = o;
  t.default = a;
  e.exports = t.default
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.NOTIFICATION_INTERVAL_MS = void 0;
  const s = 1250;
  t.NOTIFICATION_INTERVAL_MS = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getWidgetDataResponseType = n;
  const s = "@type";
  function n(e) {
      return e && "object" == typeof e ? e[s] : void 0
  }
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getCookie = a;
  t.getHostnameWithoutWww = r;
  t.setCookie = c;
  var n = s(i(19));
  let o = !1;
  function a(e) {
      let t = "";
      if (document.cookie && "" !== document.cookie) {
          const i = document.cookie.split(";");
          for (let s = 0; s < i.length; s++) {
              const n = i[s].trim();
              if (n.substring(0, e.length + 1) === e + "=") {
                  t = n.substring(e.length + 1);
                  break
              }
          }
      }
      return t
  }
  function r() {
      return window.location.hostname.replace(/^www\./, "")
  }
  function c(e, t, i=n.default.SIX_MONTHS) {
      const s = [`${e}=${t}`, "expires=" + new Date(Date.now() + i).toUTCString(), "domain=" + ("." + r()), "path=/", "SameSite=Lax"];
      if (window.location.protocol.indexOf("https") > -1)
          s.push("Secure");
      else if (!o) {
          console.warn("HubSpot Conversations: You are using conversations on a non-https site! Not using https puts your visitor's data at risk, please enforce using https.");
          o = !0
      }
      const a = s.join(";");
      document.cookie = a
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.default = void 0;
  const s = 864e5;
  var n = {
      TWO_MINUTES: 12e4,
      THIRTY_MINUTES: 18e5,
      ONE_DAY: s,
      SIX_MONTHS: 30 * s * 6
  };
  t.default = n;
  e.exports = t.default
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.cookieValues = t.cookies = void 0;
  const s = {
      HUBSPOT: "hubspotutk",
      MESSAGES: "messagesUtk",
      IS_OPEN: "hs-messages-is-open",
      HIDE_WELCOME_MESSAGE: "hs-messages-hide-welcome-message",
      WIDGET_POSITION: "hs-messages-widget-position",
      HUBSPOT_API_CSRF: "hubspotapi-csrf",
      HSTC: "__hstc",
      HSSC: "__hssc",
      GLOBAL_COOKIE_OPT_OUT: "__hs_opt_out"
  };
  t.cookies = s;
  const n = {
      GLOBAL_COOKIE_OPT_OUT_YES: "yes",
      GLOBAL_COOKIE_OPT_OUT_NO: "no"
  };
  t.cookieValues = n
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.clearCookies = r;
  var s = i(20)
    , n = i(22)
    , o = i(1)
    , a = i(23);
  function r(e) {
      (0,
      n.deleteCookie)(s.cookies.MESSAGES);
      (0,
      n.deleteCookie)(s.cookies.IS_OPEN);
      (0,
      n.deleteCookie)(s.cookies.HIDE_WELCOME_MESSAGE);
      (0,
      n.deleteCookie)(s.cookies.WIDGET_POSITION + "_right");
      (0,
      n.deleteCookie)(s.cookies.WIDGET_POSITION + "_left");
      if (e && e[a.RESET_WIDGET]) {
          window.hubspot_live_messages_running = !1;
          (0,
          o.startOnceReady)()
      }
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.deleteCookie = n;
  var s = i(18);
  function n(e) {
      (0,
      s.setCookie)(e, "", -1)
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.RESET_WIDGET = void 0;
  const s = "resetWidget";
  t.RESET_WIDGET = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.ALIGNED_RIGHT_CLASS = t.ALIGNED_LEFT_CLASS = t.INTERNAL = t.SHADOW_CONTAINER = t.MOBILE = t.ACTIVE = void 0;
  const s = "hs-messages-widget-open";
  t.ACTIVE = s;
  const n = "hs-messages-mobile";
  t.MOBILE = n;
  const o = "hs-shadow-container";
  t.SHADOW_CONTAINER = o;
  const a = "internal";
  t.INTERNAL = a;
  const r = "widget-align-left";
  t.ALIGNED_LEFT_CLASS = r;
  const c = "widget-align-right";
  t.ALIGNED_RIGHT_CLASS = c
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.HIDE_WIDGET = t.V1 = void 0;
  const s = "V1";
  t.V1 = s;
  const n = "HIDE_WIDGET";
  t.HIDE_WIDGET = n
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.setMessagesUtk = o;
  var s = i(18)
    , n = i(20);
  function o(e) {
      (0,
      s.setCookie)(n.cookies.MESSAGES, e)
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.isEmbeddedInProduct = l;
  const s = 53
    , n = 99535353
    , o = 100048175
    , a = /^(?:app|local)\.hubspot(?:qa)?\.com$/
    , r = /(?:pricing)\/[0-9]+/
    , c = /signup-hubspot/
    , d = "pricing";
  function l({portalId: e, hostname: t=window.location.hostname, pathname: i=window.location.pathname}) {
      const l = -1 !== i.indexOf(d) && !r.test(i)
        , u = c.test(i);
      return !(!a.test(t) || l || u) && (-1 !== t.indexOf("qa") ? e === s || e === n || e === o : e === s)
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.shouldRenderWidget = void 0;
  var s = i(4)
    , n = i(27)
    , o = i(29)
    , a = i(30);
  const r = ({portalId: e})=>{
      let t = !1;
      (0,
      o.getPortalIdFromPath)(window.location.pathname) && (t = !0);
      const i = (0,
      n.isEmbeddedInProduct)({
          portalId: e
      }) && !t
        , r = window.disabledHsPopups && window.disabledHsPopups.indexOf("LIVE_CHAT") > -1;
      return (0,
      s.isWindowsMobile)() ? {
          shouldRender: !1,
          reason: "WINDOWS_PHONE"
      } : (0,
      a.isUsingUnsupportedFramework)() ? {
          shouldRender: !1,
          reason: "UNSUPPORTED_FRAMEWORK"
      } : i ? {
          shouldRender: !1,
          reason: "MISSING_PORTAL_ID"
      } : r ? {
          shouldRender: !1,
          reason: "IS_EMBEDDED_MEETINGS"
      } : {
          shouldRender: !0
      }
  }
  ;
  t.shouldRenderWidget = r
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getPortalIdFromPath = n;
  const s = /^\/(?:[A-Za-z0-9-_]*)\/(\d+)(?:\/|$)/;
  function n(e) {
      try {
          return s.exec(e)[1]
      } catch (e) {
          return ""
      }
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.isUsingUnsupportedFramework = void 0;
  var s = i(31);
  const n = ()=>{
      const e = s.METHODS.filter(e=>!!e).length;
      return Boolean(e)
  }
  ;
  t.isUsingUnsupportedFramework = n
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.METHODS = void 0;
  const s = [Object.prototype.toJSON, Array.prototype.toJSON, String.prototype.toJSON];
  t.METHODS = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.shouldWidgetStartOpen = d;
  var s = i(33)
    , n = i(18)
    , o = i(34)
    , a = i(20)
    , r = i(39)
    , c = i(40);
  function d() {
      const e = (0,
      o.shouldEmbedInline)();
      if (!e && (0,
      s.cookieIsSet)(a.cookies.IS_OPEN)) {
          const e = (0,
          n.getCookie)(a.cookies.IS_OPEN);
          return (0,
          c.stringToBoolean)(e)
      }
      return e || (0,
      r.urlHasHsChatHashLink)(window.location.href) || void 0
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.cookieIsSet = void 0;
  var s = i(18);
  const n = e=>Boolean((0,
  s.getCookie)(e));
  t.cookieIsSet = n
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getIdentificationToken = t.getIdentificationEmail = t.getEnableWidgetCookieBanner = t.shouldDisableInitialInputFocus = t.shouldDisableAttachment = t.shouldEmbedInline = t.getInlineEmbedSelector = t.shouldBeFullscreen = t.shouldLoadImmediately = void 0;
  var s = i(35);
  const n = ()=>!!(0,
  s.getExternalApiSettings)().loadImmediately;
  t.shouldLoadImmediately = n;
  const o = ()=>!!(0,
  s.getExternalApiSettings)().isFullscreen;
  t.shouldBeFullscreen = o;
  const a = ()=>(0,
  s.getExternalApiSettings)().inlineEmbedSelector;
  t.getInlineEmbedSelector = a;
  const r = ()=>!!(0,
  s.getExternalApiSettings)().inlineEmbedSelector;
  t.shouldEmbedInline = r;
  const c = ()=>!!(0,
  s.getExternalApiSettings)().disableAttachment;
  t.shouldDisableAttachment = c;
  const d = ()=>!!(0,
  s.getExternalApiSettings)().disableInitialInputFocus;
  t.shouldDisableInitialInputFocus = d;
  const l = ()=>(0,
  s.getExternalApiSettings)().enableWidgetCookieBanner;
  t.getEnableWidgetCookieBanner = l;
  const u = ()=>(0,
  s.getExternalApiSettings)().identificationEmail;
  t.getIdentificationEmail = u;
  const h = ()=>(0,
  s.getExternalApiSettings)().identificationToken;
  t.getIdentificationToken = h
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getExternalApiSettings = d;
  t.defaultSettings = void 0;
  var s = i(36)
    , n = i(37)
    , o = i(12)
    , a = i(38);
  const r = {
      loadImmediately: !0,
      isFullscreen: !1,
      inlineEmbedSelector: "",
      disableAttachment: !1,
      enableWidgetCookieBanner: !1,
      identificationEmail: "",
      identificationToken: "",
      disableInitialInputFocus: !1
  };
  t.defaultSettings = r;
  function c(e) {
      return Object.fromEntries(Object.entries(e).filter(([e,t])=>void 0 !== t))
  }
  function d() {
      const e = window[s.SETTINGS_VARIABLE]
        , t = Object.assign({}, r, c(e || {}));
      (0,
      n.booleanInvariant)(t.loadImmediately, "mergedSettings.loadImmediately");
      (0,
      n.booleanInvariant)(t.isFullscreen, "mergedSettings.isFullscreen");
      (0,
      n.booleanInvariant)(t.disableAttachment, "mergedSettings.disableAttachment");
      (0,
      n.booleanInvariant)(t.disableInitialInputFocus, "mergedSettings.disableInitialInputFocus");
      (0,
      a.oneOfListInvariant)(t.enableWidgetCookieBanner, "mergedSettings.enableWidgetCookieBanner", [!1, !0, s.ON_WIDGET_LOAD, s.ON_EXIT_INTENT]);
      (0,
      o.stringInvariant)(t.inlineEmbedSelector, "mergedSettings.inlineEmbedSelector");
      (0,
      o.stringInvariant)(t.identificationEmail, "mergedSettings.identificationEmail");
      (0,
      o.stringInvariant)(t.identificationToken, "mergedSettings.identificationToken");
      return t
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.ON_WIDGET_LOAD = t.ON_EXIT_INTENT = t.SETTINGS_VARIABLE = t.ON_READY_CALLBACKS = t.GLOBAL_VARIABLE = void 0;
  const s = "HubSpotConversations";
  t.GLOBAL_VARIABLE = s;
  const n = "hsConversationsOnReady";
  t.ON_READY_CALLBACKS = n;
  const o = "hsConversationsSettings";
  t.SETTINGS_VARIABLE = o;
  const a = "ON_EXIT_INTENT";
  t.ON_EXIT_INTENT = a;
  const r = "ON_WIDGET_LOAD";
  t.ON_WIDGET_LOAD = r
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.booleanInvariant = void 0;
  var n = s(i(13));
  const o = (e,t)=>(0,
  n.default)(!0 === e || !1 === e, "Expected %s to be a boolean but received a %s", t || e, typeof e);
  t.booleanInvariant = o
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.oneOfListInvariant = o;
  var n = s(i(13));
  function o(e, t, i) {
      (0,
      n.default)(i.indexOf(e) > -1, `Expected %s to be one of ${i.toString()} but got %s`, t, e)
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.urlHasHsChatHashLink = void 0;
  const s = new RegExp("" + "#hs-chat-open","i")
    , n = e=>s.test(e);
  t.urlHasHsChatHashLink = n
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.stringToBoolean = void 0;
  const s = e=>"true" === e;
  t.stringToBoolean = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.IFRAME_ID = t.INLINE_IFRAME_ID = t.INLINE_PARENT_ID = t.PARENT_ID = void 0;
  const s = "hubspot-messages-iframe-container";
  t.PARENT_ID = s;
  const n = "hubspot-conversations-inline-parent";
  t.INLINE_PARENT_ID = n;
  const o = "hubspot-conversations-inline-iframe";
  t.INLINE_IFRAME_ID = o;
  const a = "hubspot-conversations-iframe";
  t.IFRAME_ID = a
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.setupExternalApi = n;
  var s = i(36);
  function n(e) {
      window[s.GLOBAL_VARIABLE] = e
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.flushOnReadyCallbacks = n;
  var s = i(36);
  function n(e) {
      let {logger: t, trackCallback: i} = e;
      const n = window[s.ON_READY_CALLBACKS];
      if (Array.isArray(n)) {
          i && i();
          n.forEach(e=>{
              try {
                  e()
              } catch (e) {
                  e instanceof Error && t.error(e.message)
              }
          }
          )
      }
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.default = void 0;
  class s {
      constructor({debug: e}={}) {
          this._debug = Boolean(e);
          this.debug = this.debug.bind(this)
      }
      _isDebugMode() {
          return this._debug
      }
      debug(e) {
          this._debug = e
      }
      log(e) {
          this._isDebugMode() && console.log(`${s.LOGGING_PREFIX} ${e}`)
      }
      error(e) {
          this._isDebugMode() && console.error(`${s.LOGGING_PREFIX} ${e}`)
      }
  }
  s.LOGGING_PREFIX = "HubSpot Conversations log:";
  var n = s;
  t.default = n;
  e.exports = t.default
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.default = void 0;
  var n = s(i(46))
    , o = i(12)
    , a = i(47)
    , r = i(48)
    , c = i(49);
  class d {
      constructor() {
          this._eventEmitter = new n.default;
          this._namespacedEventType = this._namespacedEventType.bind(this);
          this.on = this.on.bind(this);
          this.off = this.off.bind(this);
          this.trigger = this.trigger.bind(this)
      }
      _namespacedEventType(e) {
          return `${r.EVENT_NAMESPACE}:${e}`
      }
      on(e, t) {
          (0,
          o.stringInvariant)(e);
          (0,
          a.functionInvariant)(t);
          if (!e.length)
              return;
          const i = this._namespacedEventType(e);
          this._eventEmitter.addListener(i, t)
      }
      off(e, t) {
          (0,
          o.stringInvariant)(e);
          (0,
          a.functionInvariant)(t);
          if (!e.length)
              return;
          const i = this._namespacedEventType(e);
          this._eventEmitter.removeListener(i, t)
      }
      trigger(e, t) {
          (0,
          c.eventTypeInvariant)(e);
          const i = this._namespacedEventType(e);
          this._eventEmitter.emit(i, t)
      }
  }
  var l = d;
  t.default = l;
  e.exports = t.default
}
, function(e, t, i) {
  "use strict";
  var s, n;
  n = function() {
      return function e(t, i, n) {
          function o(r, c) {
              if (!i[r]) {
                  if (!t[r]) {
                      if (!c && "function" == typeof s && s)
                          return s(r, !0);
                      if (a)
                          return a(r, !0);
                      var d = new Error("Cannot find module '" + r + "'");
                      throw d.code = "MODULE_NOT_FOUND",
                      d
                  }
                  var l = i[r] = {
                      exports: {}
                  };
                  t[r][0].call(l.exports, (function(e) {
                      return o(t[r][1][e] || e)
                  }
                  ), l, l.exports, e, t, i, n)
              }
              return i[r].exports
          }
          for (var a = "function" == typeof s && s, r = 0; r < n.length; r++)
              o(n[r]);
          return o
      }({
          1: [function(e, t, i) {
              var s = Object.prototype.hasOwnProperty
                , n = "~";
              function o() {}
              function a(e, t, i) {
                  this.fn = e,
                  this.context = t,
                  this.once = i || !1
              }
              function r(e, t, i, s, o) {
                  if ("function" != typeof i)
                      throw new TypeError("The listener must be a function");
                  var r = new a(i,s || e,o)
                    , c = n ? n + t : t;
                  return e._events[c] ? e._events[c].fn ? e._events[c] = [e._events[c], r] : e._events[c].push(r) : (e._events[c] = r,
                  e._eventsCount++),
                  e
              }
              function c(e, t) {
                  0 == --e._eventsCount ? e._events = new o : delete e._events[t]
              }
              function d() {
                  this._events = new o,
                  this._eventsCount = 0
              }
              Object.create && (o.prototype = Object.create(null),
              (new o).__proto__ || (n = !1)),
              d.prototype.eventNames = function() {
                  var e, t, i = [];
                  if (0 === this._eventsCount)
                      return i;
                  for (t in e = this._events)
                      s.call(e, t) && i.push(n ? t.slice(1) : t);
                  return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
              }
              ,
              d.prototype.listeners = function(e) {
                  var t = n ? n + e : e
                    , i = this._events[t];
                  if (!i)
                      return [];
                  if (i.fn)
                      return [i.fn];
                  for (var s = 0, o = i.length, a = new Array(o); s < o; s++)
                      a[s] = i[s].fn;
                  return a
              }
              ,
              d.prototype.listenerCount = function(e) {
                  var t = n ? n + e : e
                    , i = this._events[t];
                  return i ? i.fn ? 1 : i.length : 0
              }
              ,
              d.prototype.emit = function(e, t, i, s, o, a) {
                  var r = n ? n + e : e;
                  if (!this._events[r])
                      return !1;
                  var c, d, l = this._events[r], u = arguments.length;
                  if (l.fn) {
                      switch (l.once && this.removeListener(e, l.fn, void 0, !0),
                      u) {
                      case 1:
                          return l.fn.call(l.context),
                          !0;
                      case 2:
                          return l.fn.call(l.context, t),
                          !0;
                      case 3:
                          return l.fn.call(l.context, t, i),
                          !0;
                      case 4:
                          return l.fn.call(l.context, t, i, s),
                          !0;
                      case 5:
                          return l.fn.call(l.context, t, i, s, o),
                          !0;
                      case 6:
                          return l.fn.call(l.context, t, i, s, o, a),
                          !0
                      }
                      for (d = 1,
                      c = new Array(u - 1); d < u; d++)
                          c[d - 1] = arguments[d];
                      l.fn.apply(l.context, c)
                  } else {
                      var h, g = l.length;
                      for (d = 0; d < g; d++)
                          switch (l[d].once && this.removeListener(e, l[d].fn, void 0, !0),
                          u) {
                          case 1:
                              l[d].fn.call(l[d].context);
                              break;
                          case 2:
                              l[d].fn.call(l[d].context, t);
                              break;
                          case 3:
                              l[d].fn.call(l[d].context, t, i);
                              break;
                          case 4:
                              l[d].fn.call(l[d].context, t, i, s);
                              break;
                          default:
                              if (!c)
                                  for (h = 1,
                                  c = new Array(u - 1); h < u; h++)
                                      c[h - 1] = arguments[h];
                              l[d].fn.apply(l[d].context, c)
                          }
                  }
                  return !0
              }
              ,
              d.prototype.on = function(e, t, i) {
                  return r(this, e, t, i, !1)
              }
              ,
              d.prototype.once = function(e, t, i) {
                  return r(this, e, t, i, !0)
              }
              ,
              d.prototype.removeListener = function(e, t, i, s) {
                  var o = n ? n + e : e;
                  if (!this._events[o])
                      return this;
                  if (!t)
                      return c(this, o),
                      this;
                  var a = this._events[o];
                  if (a.fn)
                      a.fn !== t || s && !a.once || i && a.context !== i || c(this, o);
                  else {
                      for (var r = 0, d = [], l = a.length; r < l; r++)
                          (a[r].fn !== t || s && !a[r].once || i && a[r].context !== i) && d.push(a[r]);
                      d.length ? this._events[o] = 1 === d.length ? d[0] : d : c(this, o)
                  }
                  return this
              }
              ,
              d.prototype.removeAllListeners = function(e) {
                  var t;
                  return e ? (t = n ? n + e : e,
                  this._events[t] && c(this, t)) : (this._events = new o,
                  this._eventsCount = 0),
                  this
              }
              ,
              d.prototype.off = d.prototype.removeListener,
              d.prototype.addListener = d.prototype.on,
              d.prefixed = n,
              d.EventEmitter = d,
              void 0 !== t && (t.exports = d)
          }
          , {}]
      }, {}, [1])(1)
  }
  ,
  e.exports = n()
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.functionInvariant = void 0;
  var n = s(i(13));
  const o = e=>(0,
  n.default)("function" == typeof e && null !== e, "Expected %s to be a function", e);
  t.functionInvariant = o
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.EVENT_NAMESPACE = void 0;
  const s = "HubSpotConversations";
  t.EVENT_NAMESPACE = s
}
, function(e, t, i) {
  "use strict";
  var s = i(6)
    , n = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.eventTypeInvariant = void 0;
  var o = n(i(13))
    , a = s(i(50));
  const r = Object.values(a)
    , c = e=>(0,
  o.default)(-1 !== r.indexOf(e), "Expected a valid event type but received %s. Valid event types include %s.", e, r);
  t.eventTypeInvariant = c
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.WIDGET_HIDDEN = t.USER_SELECTED_THREAD = t.WIDGET_CLOSED = t.WIDGET_LOADED = t.QUICK_REPLY_BUTTON_CLICK = t.USER_INTERACTED_WITH_WIDGET = t.CONTACT_ASSOCIATED = t.INPUT_STAGING = t.UNREAD_CONVERSATION_COUNT_CHANGED = t.CONVERSATION_CLOSED = t.CONVERSATION_STARTED = void 0;
  const s = "conversationStarted";
  t.CONVERSATION_STARTED = s;
  const n = "conversationClosed";
  t.CONVERSATION_CLOSED = n;
  const o = "unreadConversationCountChanged";
  t.UNREAD_CONVERSATION_COUNT_CHANGED = o;
  const a = "inputStaging";
  t.INPUT_STAGING = a;
  const r = "contactAssociated";
  t.CONTACT_ASSOCIATED = r;
  const c = "userInteractedWithWidget";
  t.USER_INTERACTED_WITH_WIDGET = c;
  const d = "quickReplyButtonClick";
  t.QUICK_REPLY_BUTTON_CLICK = d;
  const l = "widgetLoaded";
  t.WIDGET_LOADED = l;
  const u = "widgetClosed";
  t.WIDGET_CLOSED = u;
  const h = "userSelectedThread";
  t.USER_SELECTED_THREAD = h;
  const g = "widgetHidden";
  t.WIDGET_HIDDEN = g
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.handleExternalApiEventMessage = void 0;
  var s = i(14)
    , n = i(12);
  const o = ({data: e},{eventEmitter: t})=>{
      (0,
      n.stringInvariant)(e.eventType);
      (0,
      s.objectInvariant)(e.payload);
      t.trigger(e.eventType, e.payload)
  }
  ;
  t.handleExternalApiEventMessage = o
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.fetchWidgetData = h;
  t.EXPECTED_WIDGET_WILL_NOT_LOAD_CODES = t.WIDGET_WILL_LOAD_CODES = void 0;
  var s = i(27)
    , n = i(53);
  const o = "X-HubSpot-Messages-Uri"
    , a = 4
    , r = [200, 304];
  t.WIDGET_WILL_LOAD_CODES = r;
  const c = [204, 404];
  t.EXPECTED_WIDGET_WILL_NOT_LOAD_CODES = c;
  const d = e=>r.indexOf(e) > -1
    , l = e=>!d(e) && c.indexOf(e) < 0
    , u = ()=>{}
  ;
  function h({requestUrl: e, portalId: t}, i, r=u) {
      const c = new XMLHttpRequest;
      c.addEventListener("readystatechange", ()=>{
          if (c.readyState === a)
              if (d(c.status))
                  try {
                      const e = JSON.parse(c.responseText);
                      i(e)
                  } catch (e) {
                      console.warn("Initial messages API response is invalid");
                      r()
                  }
              else {
                  l(c.status) && console.warn("Initial messages API call failed");
                  r()
              }
      }
      );
      c.open("GET", e);
      const h = "about:srcdoc" === window.location.href ? window.top.location.href : window.location.href;
      c.setRequestHeader(o, h);
      (0,
      s.isEmbeddedInProduct)({
          portalId: t
      }) && (0,
      n.addAuthToRequest)(c);
      c.send()
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.addAuthToRequest = t.addCsrfHeader = void 0;
  var s = i(18)
    , n = i(20);
  const o = e=>{
      e.setRequestHeader("X-HubSpot-CSRF-hubspotapi", (0,
      s.getCookie)(n.cookies.HUBSPOT_API_CSRF))
  }
  ;
  t.addCsrfHeader = o;
  const a = e=>{
      o(e);
      e.withCredentials = !0
  }
  ;
  t.addAuthToRequest = a
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.triggerEvent = n;
  t.EVENTS = void 0;
  const s = "hubspot:messages:";
  function n(e, t) {
      let i;
      const n = `${s}${e}`;
      if ("function" == typeof window.Event)
          i = Object.assign(new Event(n), t);
      else {
          i = Object.assign(document.createEvent("Event"), t);
          i.initEvent(n, !0, !0)
      }
      window.dispatchEvent(i)
  }
  const o = {
      messagesInitialized: ({messageWillRender: e, reason: t})=>{
          n("initialized", {
              messageWillRender: e,
              reason: t
          })
      }
  };
  t.EVENTS = o
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.throttle = s;
  function s(e, t) {
      let i = !1
        , s = null;
      return (...n)=>{
          if (i)
              s = ()=>{
                  e(...n)
              }
              ;
          else {
              i = !0;
              e(...n);
              setTimeout(()=>{
                  i = !1;
                  "function" == typeof s && s();
                  s = null
              }
              , t)
          }
      }
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getIframeQueryParams = l;
  var s = i(18)
    , n = i(4)
    , o = i(27)
    , a = i(57)
    , r = i(32)
    , c = i(34)
    , d = i(58);
  function l({messagesUtk: e, hubspotUtk: t, portalId: i, iframeUuid: l, globalCookieOptOut: u, isFirstVisitorSession: h, hstc: g}) {
      const p = (0,
      n.isAnyMobile)()
        , f = (0,
      c.shouldEmbedInline)()
        , m = (0,
      r.shouldWidgetStartOpen)()
        , E = (0,
      c.shouldDisableInitialInputFocus)()
        , _ = f && E;
      !f && E && console.warn("hsConversationsSettings: the `disableInitialInputFocus` object is only enabled for use when an `inlineEmbedSelector` object is also set");
      const I = {
          uuid: l,
          mobile: p,
          mobileSafari: (0,
          n.isMobileSafari)(),
          hideWelcomeMessage: (0,
          a.shouldHideWelcomeMessage)(),
          hstc: g,
          domain: (0,
          s.getHostnameWithoutWww)(),
          inApp53: (0,
          o.isEmbeddedInProduct)({
              portalId: i
          }),
          messagesUtk: e,
          url: window.location.href,
          inline: f,
          isFullscreen: (0,
          c.shouldBeFullscreen)(),
          globalCookieOptOut: u,
          isFirstVisitorSession: h,
          isAttachmentDisabled: (0,
          c.shouldDisableAttachment)(),
          isInitialInputFocusDisabled: _,
          enableWidgetCookieBanner: (0,
          c.getEnableWidgetCookieBanner)(),
          isInCMS: (0,
          d.isInCMS)()
      };
      void 0 !== m && (I.startOpen = m);
      t && (I.hubspotUtk = t);
      return I
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.shouldHideWelcomeMessage = o;
  var s = i(18)
    , n = i(20);
  function o() {
      return !!(0,
      s.getCookie)(n.cookies.HIDE_WELCOME_MESSAGE) || !1
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.isInCMS = void 0;
  const s = ()=>void 0 !== window.hsVars;
  t.isInCMS = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.default = void 0;
  var s = i(60)
    , n = i(61)
    , o = i(62)
    , a = i(9);
  class r {
      constructor({onScroll: e}) {
          this._onScroll = e;
          this._handleScroll = this._handleScroll.bind(this);
          this.add = this.add.bind(this);
          this.remove = this.remove.bind(this)
      }
      _handleScroll() {
          const e = (0,
          o.getPageHeight)() - (0,
          n.getViewportHeight)();
          if (0 === e)
              return;
          const t = 100 * (0,
          s.getBodyScrollTop)() / e;
          this._onScroll({
              scrollPercentage: t
          })
      }
      _add() {
          window.addEventListener("scroll", this._handleScroll, {
              capture: !0,
              passive: !0
          })
      }
      add() {
          this.remove();
          this._add()
      }
      remove() {
          window.removeEventListener("scroll", this._handleScroll, {
              capture: !0
          })
      }
      registerPostMessageReceivers(e) {
          e.register(a.START_TRACK_SCROLL_PERCENTAGE, this.add);
          e.register(a.STOP_TRACK_SCROLL_PERCENTAGE, this.remove)
      }
  }
  var c = r;
  t.default = c;
  e.exports = t.default
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getBodyScrollTop = void 0;
  const s = ()=>document.body.scrollTop || document.documentElement.scrollTop;
  t.getBodyScrollTop = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getViewportHeight = void 0;
  const s = ()=>Math.max(window.innerHeight || 0, document.documentElement.clientHeight);
  t.getViewportHeight = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getPageHeight = void 0;
  const s = ()=>Math.max(document.body.offsetHeight, document.body.scrollHeight);
  t.getPageHeight = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.default = void 0;
  var s = i(9);
  class n {
      constructor({onExitIntent: e}) {
          this._onExitIntent = e;
          this._handleMouseOut = this._handleMouseOut.bind(this);
          this._isExitIntent = this._isExitIntent.bind(this);
          this.add = this.add.bind(this);
          this.remove = this.remove.bind(this)
      }
      _isExitIntent(e) {
          if (!e)
              return !1;
          const t = e.relatedTarget || e.toElement;
          return (!t || "HTML" === t.nodeName) && e.clientY < 100
      }
      _handleMouseOut(e) {
          this._isExitIntent(e) && this._onExitIntent()
      }
      _add() {
          window.document.addEventListener("mouseout", this._handleMouseOut)
      }
      add() {
          this.remove();
          this._add()
      }
      remove() {
          window.document.removeEventListener("mouseout", this._handleMouseOut)
      }
      addExitIntentTracker() {
          this.add()
      }
      removeExitIntentTracker() {
          this.remove()
      }
      registerPostMessageReceivers(e) {
          e.register(s.START_TRACK_EXIT_INTENT, this.add);
          e.register(s.STOP_TRACK_EXIT_INTENT, this.remove)
      }
  }
  var o = n;
  t.default = o;
  e.exports = t.default
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.markEndPostDelay = n;
  t.markEndPreDelay = o;
  var s = i(65);
  function n() {
      try {
          performance.mark(s.END_MARK_POST_DELAY)
      } catch (e) {}
  }
  function o() {
      try {
          performance.mark(s.END_MARK_PRE_DELAY)
      } catch (e) {}
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.EXECUTION_MEASUREMENT_PRE_DELAY = t.EXECUTION_MEASUREMENT_POST_DELAY = t.END_MARK_POST_DELAY = t.START_MARK_POST_DELAY = t.END_MARK_PRE_DELAY = t.START_MARK_PRE_DELAY = void 0;
  const s = "embed-script-start-pre-delay";
  t.START_MARK_PRE_DELAY = s;
  const n = "embed-script-end-pre-delay";
  t.END_MARK_PRE_DELAY = n;
  const o = "embed-script-start-post-delay";
  t.START_MARK_POST_DELAY = o;
  const a = "embed-script-end-post-delay";
  t.END_MARK_POST_DELAY = a;
  const r = "embed-script-load-time-post-delay";
  t.EXECUTION_MEASUREMENT_POST_DELAY = r;
  const c = "embed-script-load-time-pre-delay";
  t.EXECUTION_MEASUREMENT_PRE_DELAY = c
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.setClassInClassList = void 0;
  var s = i(67)
    , n = i(24);
  const o = {
      [s.LEFT_ALIGNED]: n.ALIGNED_LEFT_CLASS,
      [s.RIGHT_ALIGNED]: n.ALIGNED_RIGHT_CLASS
  }
    , a = ({widgetLocation: e, classList: t})=>{
      const i = o[e];
      if (!t.contains(i)) {
          Object.keys(o).filter(t=>t !== e).forEach(e=>{
              t.remove(e)
          }
          );
          t.add(i)
      }
  }
  ;
  t.setClassInClassList = a
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.RIGHT_ALIGNED = t.LEFT_ALIGNED = void 0;
  const s = "LEFT_ALIGNED";
  t.LEFT_ALIGNED = s;
  const n = "RIGHT_ALIGNED";
  t.RIGHT_ALIGNED = n
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.WIDGET_LOCATION = void 0;
  const s = "widgetLocation";
  t.WIDGET_LOCATION = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.resetAndLaunchWidget = void 0;
  var s = i(21)
    , n = i(1)
    , o = i(70);
  const a = ()=>{
      (0,
      s.clearCookies)();
      window[o.USER_TOKEN_KEY] = "";
      window.hubspot_live_messages_running = !1;
      (0,
      n.startOnceReady)()
  }
  ;
  t.resetAndLaunchWidget = a
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.USER_TOKEN_KEY = void 0;
  const s = "__hsUserToken";
  t.USER_TOKEN_KEY = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.ApiUsageTracker = void 0;
  var s = i(10);
  class n {
      constructor({postMessageToIframe: e}) {
          if ("function" != typeof e)
              throw new TypeError("ApiUsageTracker: postMessageToIframe was not a function");
          this._postMessageToIframe = e;
          this.sendEventToTracker = this.sendEventToTracker.bind(this);
          this.trackSettingsUsed = this.trackSettingsUsed.bind(this);
          this.trackMethod = this.trackMethod.bind(this);
          this.trackEventListener = this.trackEventListener.bind(this);
          this.trackOnReady = this.trackOnReady.bind(this)
      }
      sendEventToTracker(e, t={}) {
          this._postMessageToIframe(s.TRACK_API_USAGE, {
              eventName: e,
              properties: t
          })
      }
      trackSettingsUsed(e) {
          const t = {};
          !1 === e.loadImmediately && (t.loadImmediately = !0);
          e.inlineEmbedSelector && (t.inlineEmbedSelector = !0);
          e.enableWidgetCookieBanner && (t.enableWidgetCookieBanner = !0);
          e.disableAttachment && (t.disableAttachment = !0);
          e.disableInitialInputFocus && (t.disableInitialInputFocus = !0);
          Object.keys(t).length > 0 && this.sendEventToTracker("HubspotConversations-hsConversationsSettings-used", t)
      }
      trackMethod(e) {
          this.sendEventToTracker("HubspotConversations-api-method-used", {
              method: e
          })
      }
      trackEventListener(e) {
          this.sendEventToTracker("HubspotConversations-api-event-listener-registered", {
              event: e
          })
      }
      trackOnReady() {
          this.sendEventToTracker("HubspotConversations-hsConversationsOnReady-used", {
              method: "hsConversationsOnReady"
          })
      }
  }
  t.ApiUsageTracker = n
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.PostMessageApiClient = void 0;
  var s = i(73)
    , n = i(10);
  class o {
      constructor(e) {
          this.makeApiRequest = ({data: e})=>{
              const {type: t, url: i, data: o} = e
                , a = "/_hcms" + i;
              this.currentRequest && this.currentRequest.readyState !== s.DONE_STATE && this.abortCurrentApiRequest();
              this.currentRequest = (0,
              s.doRequest)(t)(a, o)((e,t)=>{
                  t ? this.postMessage(n.API_REQUEST_RESULT, {
                      result: "failed",
                      data: t,
                      url: i
                  }) : this.postMessage(n.API_REQUEST_RESULT, {
                      result: "succeeded",
                      data: e,
                      url: i
                  })
              }
              )
          }
          ;
          this.postMessage = e;
          this.currentRequest = null
      }
      abortCurrentApiRequest() {
          this.currentRequest && this.currentRequest.abort()
      }
  }
  t.PostMessageApiClient = o
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.put = t.post = t.get = t.doRequest = t.DONE_STATE = void 0;
  const s = 4;
  t.DONE_STATE = s;
  const n = e=>e >= 300
    , o = e=>(t,i)=>o=>{
      const a = new XMLHttpRequest;
      a.addEventListener("readystatechange", ()=>{
          if (a.readyState === s)
              try {
                  const e = JSON.parse(a.responseText);
                  n(a.status) ? o(null, e) : o(e)
              } catch (e) {
                  o(null, "Invalid api response")
              }
      }
      );
      a.open(e, t);
      a.send(i);
      return a
  }
  ;
  t.doRequest = o;
  const a = o("GET");
  t.get = a;
  const r = o("POST");
  t.post = r;
  const c = o("PUT");
  t.put = c
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.sendWidgetDataToIframe = void 0;
  var s = i(75)
    , n = i(35)
    , o = i(56)
    , a = i(10);
  const r = ({source: e, widgetData: t, embedScriptContext: i, apiUsageTracker: r})=>{
      e.postMessage(JSON.stringify({
          type: a.WIDGET_DATA,
          data: Object.assign({}, t, {}, (0,
          o.getIframeQueryParams)(i))
      }), "*");
      (0,
      s.throttleInProductInitialMessagePopups)(i);
      r.trackSettingsUsed((0,
      n.getExternalApiSettings)())
  }
  ;
  t.sendWidgetDataToIframe = r
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.throttleInProductInitialMessagePopups = d;
  var n = i(18)
    , o = i(20)
    , a = s(i(19))
    , r = i(27)
    , c = i(57);
  function d({portalId: e}) {
      (0,
      r.isEmbeddedInProduct)({
          portalId: e
      }) && !(0,
      c.shouldHideWelcomeMessage)() && (0,
      n.setCookie)(o.cookies.HIDE_WELCOME_MESSAGE, !0, a.default.ONE_DAY)
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.registerCookieListeners = void 0;
  var s = i(10)
    , n = i(20)
    , o = i(22);
  const a = ({postMessageToIframe: e})=>{
      const t = t=>{
          const i = t.categories ? t.categories.functionality : t.allowed
            , a = i ? n.cookieValues.GLOBAL_COOKIE_OPT_OUT_NO : n.cookieValues.GLOBAL_COOKIE_OPT_OUT_YES;
          e(s.GLOBAL_COOKIE_OPT_OUT, {
              globalCookieOptOut: a
          });
          i || (0,
          o.deleteCookie)(n.cookies.MESSAGES)
      }
      ;
      window._hsq = window._hsq || [];
      window._hsq.push(["addPrivacyConsentListener", t]);
      window._hsq.push(["addUserTokenListener", t=>e(s.HUBSPOT_UTK, {
          utk: t
      })])
  }
  ;
  t.registerCookieListeners = a
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.registerHashChangeListener = void 0;
  var s = i(39);
  const n = ({requestWidgetOpen: e, isOpen: t})=>{
      window.addEventListener("hashchange", ()=>{
          (0,
          s.urlHasHsChatHashLink)(window.location.href) && !t && e()
      }
      )
  }
  ;
  t.registerHashChangeListener = n
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.registerWindowResizeListener = void 0;
  const s = ({resizeCallbackFn: e})=>{
      window.addEventListener("resize", e, {
          passive: !0
      })
  }
  ;
  t.registerWindowResizeListener = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.iframeMessagePool = t.createQueue = void 0;
  var s = i(80)
    , n = i(81)
    , o = i(82);
  const a = ()=>{
      const e = [];
      return {
          enqueue: t=>e.unshift(t),
          dequeue: ()=>e.shift(),
          peek: ()=>e[0]
      }
  }
  ;
  t.createQueue = a;
  const r = ({iframeSrc: e})=>{
      const t = a();
      return {
          post: (i,a={})=>{
              const r = (0,
              s.getIframeFromDocumentQuery)()
                , c = r && r.contentDocument && "about:blank" === r.contentDocument.URL;
              if (!r || c)
                  t.enqueue({
                      type: i,
                      data: a
                  });
              else {
                  (0,
                  n.postMessageToIframe)({
                      iframe: r,
                      iframeSrc: e,
                      type: i,
                      data: a
                  });
                  (0,
                  o.executeAllIframeMessageQueueEvents)({
                      iframe: r,
                      iframeSrc: e,
                      eventQueue: t
                  })
              }
          }
      }
  }
  ;
  t.iframeMessagePool = r
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getIframeFromDocumentQuery = void 0;
  var s = i(34)
    , n = i(41);
  const o = ()=>{
      const e = (0,
      s.shouldEmbedInline)() ? (0,
      s.getInlineEmbedSelector)() : "#" + n.PARENT_ID;
      return document.querySelector(e + " iframe")
  }
  ;
  t.getIframeFromDocumentQuery = o
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.postMessageToIframe = void 0;
  const s = ({iframe: e, iframeSrc: t, type: i, data: s})=>{
      e.contentWindow.postMessage(JSON.stringify({
          type: i,
          data: s
      }), t)
  }
  ;
  t.postMessageToIframe = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.executeAllIframeMessageQueueEvents = void 0;
  var s = i(81);
  const n = ({iframe: e, iframeSrc: t, eventQueue: i})=>{
      do {
          const n = i.dequeue();
          if (n) {
              const {type: i, data: o} = n;
              (0,
              s.postMessageToIframe)({
                  iframe: e,
                  iframeSrc: t,
                  type: i,
                  data: o
              })
          }
      } while (i.peek() && 0 !== Object.keys(i.peek()).length)
  }
  ;
  t.executeAllIframeMessageQueueEvents = n
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.hideWelcomeMessage = void 0;
  var n = i(20)
    , o = i(18)
    , a = s(i(19));
  const r = ()=>{
      (0,
      o.setCookie)(n.cookies.HIDE_WELCOME_MESSAGE, !0, a.default.THIRTY_MINUTES)
  }
  ;
  t.hideWelcomeMessage = r
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.resizeWidgetIframe = void 0;
  var s = i(41);
  const n = ({height: e, width: t})=>{
      const i = document.getElementById(s.PARENT_ID);
      if (i && t && e) {
          i.style.width = t + "px";
          i.style.height = e + "px"
      }
  }
  ;
  t.resizeWidgetIframe = n
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.handleTargetingAndDelay = void 0;
  var s = i(4)
    , n = i(17)
    , o = i(25)
    , a = i(86)
    , r = i(54)
    , c = i(64)
    , d = i(87);
  const l = (e,t,i)=>l=>{
      const u = !((0,
      n.getWidgetDataResponseType)(l) === o.HIDE_WIDGET) && !!l.sessionId;
      if (u) {
          const {shouldDelayLoadingIframe: i, timeDelay: n} = (0,
          a.getDelayLoadingWidgetIframe)(l, (0,
          s.isAnyMobile)());
          (0,
          c.markEndPreDelay)();
          if (i)
              setTimeout(()=>{
                  e(l);
                  (0,
                  d.markStartPostDelay)();
                  t()
              }
              , n);
          else {
              e(l);
              (0,
              d.markStartPostDelay)();
              t()
          }
      } else {
          const {description: e, reason: t} = l.metadata || {};
          i({
              description: e,
              reason: t
          })
      }
      r.EVENTS.messagesInitialized({
          messageWillRender: u
      })
  }
  ;
  t.handleTargetingAndDelay = l
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getDelayLoadingWidgetIframe = void 0;
  const s = (e,t)=>{
      const {message: i} = e
        , {popOpenWelcomeMessage: s, popOpenWidget: n, popMessageOnSmallScreens: o, clientTriggers: a} = i
        , {displayOnTimeDelay: r} = a
        , {enabled: c, timeDelaySeconds: d} = r
        , l = 1e3 * d;
      return t ? {
          shouldDelayLoadingIframe: !o && c && !window.ONLY_53_DISPLAY_LAUNCHER_ON_MOBILE,
          timeDelay: l
      } : {
          shouldDelayLoadingIframe: !n && !s && c,
          timeDelay: l
      }
  }
  ;
  t.getDelayLoadingWidgetIframe = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.markStartPreDelay = n;
  t.markStartPostDelay = o;
  var s = i(65);
  function n() {
      try {
          performance.mark(s.START_MARK_PRE_DELAY)
      } catch (e) {}
  }
  function o() {
      try {
          performance.mark(s.START_MARK_POST_DELAY)
      } catch (e) {}
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getGlobalCookieOptOut = o;
  var s = i(18)
    , n = i(20);
  function o() {
      return (0,
      s.getCookie)(n.cookies.GLOBAL_COOKIE_OPT_OUT)
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.ON_EXIT_INTENT = t.ON_WIDGET_LOAD = t.NEVER = void 0;
  const s = "NEVER";
  t.NEVER = s;
  const n = "ON_WIDGET_LOAD";
  t.ON_WIDGET_LOAD = n;
  const o = "ON_EXIT_INTENT";
  t.ON_EXIT_INTENT = o
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.loadWidgetCss = o;
  var n = s(i(91));
  function o(e) {
      const {hsConversationsSettings: t} = window;
      if (t && t.avoidInlineStyles) {
          const t = e.createElement("link");
          t.setAttribute("rel", "stylesheet");
          t.setAttribute("type", "text/css");
          t.setAttribute("href", n.default.replace(".sass", ".css"));
          e.head.appendChild(t)
      } else {
          const t = i(92)
            , s = e.createElement("style");
          s.setAttribute("type", "text/css");
          const n = document.createTextNode(t);
          s.appendChild(n);
          e.head.appendChild(s)
      }
  }
}
, function(e, t) {
  e.exports = "//static.hsappstatic.net/conversations-embed/static-1.16153/sass/messagesWidgetShell.sass"
}
, function(e, t) {
  e.exports = 'html.hs-messages-widget-open.hs-messages-mobile,html.hs-messages-widget-open.hs-messages-mobile body{overflow:hidden!important;position:relative!important}html.hs-messages-widget-open.hs-messages-mobile body{height:100%!important;margin:0!important}#hubspot-messages-iframe-container{display:initial!important;z-index:2147483647;position:fixed!important;bottom:0!important}#hubspot-messages-iframe-container.widget-align-left{left:0!important}#hubspot-messages-iframe-container.widget-align-right{right:0!important}#hubspot-messages-iframe-container.internal{z-index:1016}#hubspot-messages-iframe-container.internal iframe{min-width:108px}#hubspot-messages-iframe-container .hs-shadow-container{display:initial!important;z-index:-1;position:absolute;width:0;height:0;bottom:0;content:""}#hubspot-messages-iframe-container .hs-shadow-container.internal{display:none!important}#hubspot-messages-iframe-container .hs-shadow-container.active{width:400px;height:400px}#hubspot-messages-iframe-container iframe{display:initial!important;width:100%!important;height:100%!important;border:none!important;position:absolute!important;bottom:0!important;right:0!important;background:transparent!important}.hs-drag-handle{position:absolute;bottom:16px;cursor:grab;height:60px;display:none;align-items:center}.hs-drag-handle--right{right:76px}.hs-drag-handle--left{left:76px}.hs-drag-overlay{position:absolute;top:0;left:0;right:0;bottom:0;user-select:none;z-index:999;display:none}'
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.createEmbedScriptContext = d;
  var n = i(94)
    , o = i(95)
    , a = i(102)
    , r = s(i(103))
    , c = i(34);
  function d() {
      const {messagesEnv: e, portalId: t, messagesHublet: i} = (0,
      a.getScriptEnvParams)();
      let s = !1;
      try {
          s = localStorage && "true" === localStorage["live-chat-local-toggle"]
      } catch (e) {}
      const d = void 0 !== window.messagesConfig ? window.messagesConfig.iFrameDomain : ""
        , l = (0,
      n.getUuid)()
        , u = encodeURIComponent(document.referrer)
        , {messagesUtk: h, hubspotUtk: g, hstc: p, hssc: f, globalCookieOptOut: m, isFirstVisitorSession: E} = (0,
      o.prepareVisitorIdentifiers)();
      return new r.default({
          messagesHublet: i,
          globalCookieOptOut: m,
          hubspotUtk: g,
          hstc: p,
          hssc: f,
          iFrameDomainOverride: d,
          iframeUuid: l,
          isFirstVisitorSession: E,
          messagesEnv: e,
          messagesUtk: h,
          referrer: u,
          portalId: t,
          useLocalBuild: s,
          identificationEmail: (0,
          c.getIdentificationEmail)(),
          identificationToken: (0,
          c.getIdentificationToken)()
      })
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getUuid = o;
  function s() {
      let e = (new Date).getTime();
      return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, t=>{
          const i = (e + 16 * Math.random()) % 16 | 0;
          e = Math.floor(e / 16);
          return ("x" === t ? i : 3 & i | 8).toString(16)
      }
      )
  }
  function n() {
      const e = window.crypto || window.msCrypto
        , t = new Uint16Array(8);
      e.getRandomValues(t);
      const i = e=>{
          let t = e.toString(16);
          for (; t.length < 4; )
              t = "0" + t;
          return t
      }
      ;
      return i(t[0]) + i(t[1]) + i(t[2]) + i(t[3]) + i(t[4]) + i(t[5]) + i(t[6]) + i(t[7])
  }
  function o() {
      const e = window.crypto || window.msCrypto;
      return void 0 !== e && void 0 !== e.getRandomValues && void 0 === window.Uint16Array ? n() : s()
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.prepareVisitorIdentifiers = void 0;
  var s = i(96)
    , n = i(97)
    , o = i(99)
    , a = i(88)
    , r = i(100)
    , c = i(101)
    , d = i(26);
  const l = ()=>{
      const e = (0,
      n.getMessagesUtkFromCookie)();
      e && (0,
      d.setMessagesUtk)(e);
      const t = (0,
      o.getHubSpotUtkFromCookie)()
        , i = (0,
      r.getHstcFromCookie)()
        , l = (0,
      c.getHsscFromCookie)()
        , u = (0,
      a.getGlobalCookieOptOut)()
        , {messagesUtk: h, isFirstVisitorSession: g} = (0,
      s.chooseMessagesUtk)({
          existingMessagesUtk: e
      });
      return {
          messagesUtk: h,
          hubspotUtk: t,
          hstc: i,
          hssc: l,
          globalCookieOptOut: u,
          isFirstVisitorSession: g
      }
  }
  ;
  t.prepareVisitorIdentifiers = l
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.chooseMessagesUtk = n;
  var s = i(94);
  function n({existingMessagesUtk: e}={}) {
      let t, i = !1;
      if (e)
          t = e;
      else {
          i = !0;
          t = (0,
          s.getUuid)()
      }
      return {
          messagesUtk: t,
          isFirstVisitorSession: i
      }
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getMessagesUtkFromCookie = a;
  var s = i(18)
    , n = i(98)
    , o = i(20);
  function a() {
      const e = (0,
      s.getCookie)(o.cookies.MESSAGES);
      return (0,
      n.isUtk)(e) ? e : void 0
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.isUtk = n;
  t.UTK_REGEX = void 0;
  const s = /[a-zA-Z\d]{32}/;
  t.UTK_REGEX = s;
  function n(e) {
      return s.test(e)
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getHubSpotUtkFromCookie = o;
  var s = i(20)
    , n = i(18);
  function o() {
      return (0,
      n.getCookie)(s.cookies.HUBSPOT)
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getHstcFromCookie = o;
  var s = i(20)
    , n = i(18);
  function o() {
      return (0,
      n.getCookie)(s.cookies.HSTC)
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getHsscFromCookie = o;
  var s = i(20)
    , n = i(18);
  function o() {
      return (0,
      n.getCookie)(s.cookies.HSSC)
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getScriptEnvParams = r;
  t.getIsLocal = t.getMessagesHublet = t.getMessagesEnv = t.getPortalId = void 0;
  const s = ()=>{
      const e = document.getElementById("hubspot-messages-loader");
      return parseInt(e.getAttribute("data-hsjs-portal"), 10)
  }
  ;
  t.getPortalId = s;
  const n = ()=>document.getElementById("hubspot-messages-loader").getAttribute("data-hsjs-env");
  t.getMessagesEnv = n;
  const o = ()=>document.getElementById("hubspot-messages-loader").getAttribute("data-hsjs-hublet");
  t.getMessagesHublet = o;
  const a = ()=>"true" === document.getElementById("hubspot-messages-loader").getAttribute("data-hsjs-local");
  t.getIsLocal = a;
  function r() {
      return {
          ungatedFor: document.getElementById("hubspot-messages-loader").getAttribute("ungated-for"),
          portalId: s(),
          messagesEnv: n(),
          messagesHublet: o(),
          isLocal: a()
      }
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.default = t.EmbedScriptContext = void 0;
  var s = i(104)
    , n = i(12)
    , o = i(27)
    , a = i(105)
    , r = i(109)
    , c = i(56)
    , d = i(58)
    , l = i(110)
    , u = i(34)
    , h = i(114);
  class g {
      constructor(e) {
          const {globalCookieOptOut: t, hubspotUtk: i, hstc: o, hssc: a, iFrameDomainOverride: r, iframeUuid: c, isFirstVisitorSession: d, messagesEnv: l, messagesUtk: u, referrer: h, portalId: g, useLocalBuild: p, identificationEmail: f, identificationToken: m, messagesHublet: E} = e;
          (0,
          n.stringInvariant)(c, "iframeUuid");
          (0,
          n.stringInvariant)(l, "messagesEnv");
          (0,
          n.stringInvariant)(u, "messagesUtk");
          (0,
          s.numberInvariant)(g, "portalId");
          this.globalCookieOptOut = t;
          this.hubspotUtk = i;
          this.hstc = o;
          this.hssc = a;
          this.iFrameDomainOverride = r;
          this.iframeUuid = c;
          this.isFirstVisitorSession = d;
          this.messagesEnv = l;
          this.messagesUtk = u;
          this.referrer = h;
          this.portalId = g;
          this.useLocalBuild = p;
          this.identificationEmail = f;
          this.identificationToken = m;
          this.messagesHublet = E;
          this.getIFrameDomain = this.getIFrameDomain.bind(this);
          this.getIFrameSrc = this.getIFrameSrc.bind(this);
          this.getInitialRequestUrl = this.getInitialRequestUrl.bind(this)
      }
      getIFrameDomain() {
          const e = "qa" === this.messagesEnv ? "qa" : ""
            , t = "na1" !== this.messagesHublet && this.messagesHublet ? "-" + this.messagesHublet : "";
          return this.iFrameDomainOverride ? this.iFrameDomainOverride : this.useLocalBuild ? `https://local${t}.hubspot${e}.com` : `https://app${t}.hubspot${e}.com`
      }
      getIFrameSrc() {
          const e = (0,
          r.serializeQueryParameters)((0,
          c.getIframeQueryParams)({
              messagesUtk: this.messagesUtk,
              hubspotUtk: this.hubspotUtk,
              portalId: this.portalId,
              iframeUuid: this.iframeUuid,
              globalCookieOptOut: this.globalCookieOptOut,
              isFirstVisitorSession: this.isFirstVisitorSession,
              hstc: this.hstc
          }));
          return `${this.getIFrameDomain()}/conversations-visitor/${this.portalId}/threads/utk/${this.messagesUtk}?${e}`
      }
      getEncodedIdentificationEmail() {
          let e = this.identificationEmail;
          e.includes("@") || (e = decodeURIComponent(e));
          return encodeURIComponent(e)
      }
      getInitialRequestUrl() {
          if ((0,
          d.isInCMS)())
              return (0,
              a.getCMSRequestUrl)({
                  messagesUtk: this.messagesUtk,
                  hubspotUtk: this.hubspotUtk,
                  portalId: this.portalId,
                  referrer: this.referrer,
                  hstc: this.hstc,
                  hssc: this.hssc,
                  email: this.identificationEmail && this.getEncodedIdentificationEmail(),
                  identificationToken: this.identificationToken
              });
          if ((0,
          o.isEmbeddedInProduct)({
              portalId: this.portalId
          }))
              return (0,
              a.getInternalRequestUrl)({
                  messagesHublet: this.messagesHublet,
                  messagesEnv: this.messagesEnv,
                  messagesUtk: this.messagesUtk,
                  portalId: this.portalId
              });
          return ((0,
          h.isInSDK)() ? a.getPublicRequestUrlForMobileSDK : a.getPublicRequestUrl)({
              messagesHublet: this.messagesHublet,
              messagesEnv: this.messagesEnv,
              messagesUtk: this.messagesUtk,
              hubspotUtk: this.hubspotUtk,
              portalId: this.portalId,
              referrer: this.referrer,
              hstc: this.hstc,
              hssc: this.hssc,
              email: this.identificationEmail && this.getEncodedIdentificationEmail(),
              identificationToken: this.identificationToken
          })
      }
      getPerfAttributes() {
          const e = (0,
          l.getPerfAttributes)({
              portalId: this.portalId,
              messagesEnv: this.messagesEnv
          });
          if ((0,
          u.shouldLoadImmediately)() && e)
              return e
      }
  }
  t.EmbedScriptContext = g;
  var p = g;
  t.default = p
}
, function(e, t, i) {
  "use strict";
  var s = i(2);
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.numberInvariant = void 0;
  var n = s(i(13));
  const o = (e,t="")=>(0,
  n.default)("number" == typeof e, "Expected %s to be a number, not a %s", t || e, typeof e);
  t.numberInvariant = o
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getInternalRequestUrl = c;
  t.getCMSRequestUrl = l;
  t.getPublicRequestUrl = u;
  t.getPublicRequestUrlForMobileSDK = h;
  var s = i(106)
    , n = i(107)
    , o = i(108)
    , a = i(29)
    , r = i(4);
  function c({messagesEnv: e, portalId: t, messagesUtk: i, messagesHublet: s}) {
      const o = (0,
      a.getPortalIdFromPath)(window.location.pathname);
      return `${(0,
      n.getApiDomain)(e, s)}/livechat/v1/message/public/hubspot-app?portalId=${o}&mobile=${(0,
      r.isAnyMobile)()}&embeddedPortalId=${t}&traceId=${i}`
  }
  function d({messagesUtk: e, hubspotUtk: t, portalId: i, referrer: n, hstc: o, hssc: a, email: c, identificationToken: d}) {
      let l = `?portalId=${i}&${s.bender.project}=${s.bender.depVersions[s.bender.project]}&mobile=${(0,
      r.isAnyMobile)()}`;
      e && (l = `${l}&messagesUtk=${e}&traceId=${e}`);
      t && (l = `${l}&hubspotUtk=${t}`);
      o && (l = `${l}&__hstc=${o}`);
      a && (l = `${l}&__hssc=${a}`);
      n && (l = `${l}&referrer=${n}`);
      d && (l = `${l}&identificationToken=${d}`);
      c && (l = `${l}&email=${c}`);
      return l
  }
  function l({messagesUtk: e, hubspotUtk: t, portalId: i, referrer: s, hstc: n, hssc: o, email: a, identificationToken: r}) {
      return "/_hcms/livechat/widget" + d({
          messagesUtk: e,
          hubspotUtk: t,
          portalId: i,
          referrer: s,
          hstc: n,
          hssc: o,
          email: a,
          identificationToken: r
      })
  }
  function u({messagesHublet: e, messagesEnv: t, messagesUtk: i, hubspotUtk: s, portalId: o, referrer: a, hstc: r, hssc: c, email: l, identificationToken: u}) {
      return `${(0,
      n.getApiDomain)(t, e)}/livechat-public/v1/message/public${d({
          messagesUtk: i,
          hubspotUtk: s,
          portalId: o,
          referrer: a,
          hstc: r,
          hssc: c,
          email: l,
          identificationToken: u
      })}`
  }
  function h({messagesHublet: e, messagesEnv: t, messagesUtk: i, hubspotUtk: s, portalId: a, referrer: r, hstc: c, hssc: l, email: u, identificationToken: h}) {
      return `${(0,
      n.getApiDomain)(t, e)}/livechat-public/v1/message/public/mobile${d({
          messagesUtk: i,
          hubspotUtk: s,
          portalId: a,
          referrer: r,
          hstc: c,
          hssc: l,
          email: u,
          identificationToken: h
      })}&chatflow=${(0,
      o.getChatflowTagFromQueryParams)()}`
  }
}
, function(e, t) {
  e.exports = {
      mode: "compressed",
      staticDomainPrefix: "//static.hsappstatic.net",
      bender: {
          depVersions: {
              "conversations-embed": "static-1.16153",
              "browserslist-config-hubspot": "static-1.97",
              classnames: "static-2.10",
              "conversations-internal-schema": "static-1.8329",
              csstype: "static-1.8",
              cssUtils: "static-1.290",
              enviro: "static-4.209",
              "foundations-assets": "static-1.185",
              "foundations-components": "static-1.319",
              "foundations-theming": "static-1.68",
              "hds-components": "static-1.1028",
              "hds-tokens": "static-1.266",
              "head-dlb": "static-1.694",
              HeadJS: "static-2.410",
              "hoist-non-react-statics": "static-3.9",
              "hs-story-utils": "static-1.2860",
              "hubspot-url-utils": "static-1.217",
              HubStyle: "static-2.6352",
              HubStyleTokens: "static-2.6042",
              I18n: "static-7.1096",
              "i18n-data": "static-1.156",
              icons: "static-2.564",
              immutable: "static-2.19",
              isMobile: "static-1.7",
              jasmine: "static-4.108",
              "jasmine-runner": "static-1.1038",
              "metrics-js": "static-1.3955",
              "moment-timezone": "static-5.17",
              PortalIdParser: "static-2.201",
              quartz: "static-1.1418",
              react: "static-7.96",
              "react-aria": "static-1.7",
              "react-dom": "static-7.62",
              "react-input-autosize": "static-2.17",
              "react-select-plus": "static-1.41",
              "react-utils": "static-2.1276",
              "react-virtualized": "static-2.26",
              sassPrefix: "static-1.95",
              sinon: "static-1.9",
              "styled-components": "static-2.27",
              StyleGuideUI: "static-3.383",
              transmute: "static-2.29",
              "ui-fonts": "static-1.315",
              "ui-images": "static-2.655",
              UIComponents: "static-3.2993",
              "webpack-env": "static-1.4",
              "hs-promise-rejection-tracking": "static-1.288",
              raven: "static-3.174",
              "raven-hubspot": "static-1.481",
              moment: "static-3.22"
          },
          depPathPrefixes: {
              "conversations-embed": "/conversations-embed/static-1.16153",
              "browserslist-config-hubspot": "/browserslist-config-hubspot/static-1.97",
              classnames: "/classnames/static-2.10",
              "conversations-internal-schema": "/conversations-internal-schema/static-1.8329",
              csstype: "/csstype/static-1.8",
              cssUtils: "/cssUtils/static-1.290",
              enviro: "/enviro/static-4.209",
              "foundations-assets": "/foundations-assets/static-1.185",
              "foundations-components": "/foundations-components/static-1.319",
              "foundations-theming": "/foundations-theming/static-1.68",
              "hds-components": "/hds-components/static-1.1028",
              "hds-tokens": "/hds-tokens/static-1.266",
              "head-dlb": "/head-dlb/static-1.694",
              HeadJS: "/HeadJS/static-2.410",
              "hoist-non-react-statics": "/hoist-non-react-statics/static-3.9",
              "hs-story-utils": "/hs-story-utils/static-1.2860",
              "hubspot-url-utils": "/hubspot-url-utils/static-1.217",
              HubStyle: "/HubStyle/static-2.6352",
              HubStyleTokens: "/HubStyleTokens/static-2.6042",
              I18n: "/I18n/static-7.1096",
              "i18n-data": "/i18n-data/static-1.156",
              icons: "/icons/static-2.564",
              immutable: "/immutable/static-2.19",
              isMobile: "/isMobile/static-1.7",
              jasmine: "/jasmine/static-4.108",
              "jasmine-runner": "/jasmine-runner/static-1.1038",
              "metrics-js": "/metrics-js/static-1.3955",
              "moment-timezone": "/moment-timezone/static-5.17",
              PortalIdParser: "/PortalIdParser/static-2.201",
              quartz: "/quartz/static-1.1418",
              react: "/react/static-7.96",
              "react-aria": "/react-aria/static-1.7",
              "react-dom": "/react-dom/static-7.62",
              "react-input-autosize": "/react-input-autosize/static-2.17",
              "react-select-plus": "/react-select-plus/static-1.41",
              "react-utils": "/react-utils/static-2.1276",
              "react-virtualized": "/react-virtualized/static-2.26",
              sassPrefix: "/sassPrefix/static-1.95",
              sinon: "/sinon/static-1.9",
              "styled-components": "/styled-components/static-2.27",
              StyleGuideUI: "/StyleGuideUI/static-3.383",
              transmute: "/transmute/static-2.29",
              "ui-fonts": "/ui-fonts/static-1.315",
              "ui-images": "/ui-images/static-2.655",
              UIComponents: "/UIComponents/static-3.2993",
              "webpack-env": "/webpack-env/static-1.4",
              "hs-promise-rejection-tracking": "/hs-promise-rejection-tracking/static-1.288",
              raven: "/raven/static-3.174",
              "raven-hubspot": "/raven-hubspot/static-1.481",
              moment: "/moment/static-3.22"
          },
          project: "conversations-embed",
          staticDomain: "//static.hsappstatic.net",
          staticDomainPrefix: "//static.hsappstatic.net"
      }
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getApiDomain = s;
  function s(e, t) {
      return `https://api${"na1" !== t && t ? "-" + t : ""}.hubspot${"qa" === e ? "qa" : ""}.com`
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getChatflowTagFromQueryParams = s;
  function s() {
      return new URL(window.location.href).searchParams.get("chatflow") || ""
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.serializeQueryParameters = t.withValuesConvertedToString = void 0;
  const s = e=>Object.keys(e).map(t=>[t, "" + e[t]]);
  t.withValuesConvertedToString = s;
  const n = e=>new URLSearchParams(s(e)).toString();
  t.serializeQueryParameters = n
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.getPerfAttributes = r;
  var s = i(65)
    , n = i(111)
    , o = i(112)
    , a = i(113);
  function r({portalId: e, messagesEnv: t}) {
      try {
          const i = "qa" === t ? "qa" : ""
            , r = (0,
          a.buildNonCmsScriptLoaderPath)({
              env: i,
              portalId: e
          })
            , c = (0,
          n.buildCmsScriptLoaderSrc)({
              portalId: e
          })
            , d = (0,
          o.buildCmsScriptLoaderPath)({
              portalId: e
          })
            , l = `https://js.usemessages${i}.com/conversations-embed.js`
            , u = performance.getEntries().map(({name: e})=>e)
            , h = u.find(e=>e.includes(r)) || r
            , g = u.find(e=>e.includes(d)) || d
            , p = Boolean(document.querySelector(`script[src^="${c}"]`));
          performance.measure(s.EXECUTION_MEASUREMENT_PRE_DELAY, s.START_MARK_PRE_DELAY, s.END_MARK_PRE_DELAY);
          performance.measure(s.EXECUTION_MEASUREMENT_POST_DELAY, s.START_MARK_POST_DELAY, s.END_MARK_POST_DELAY);
          const f = performance.getEntriesByName(s.EXECUTION_MEASUREMENT_PRE_DELAY)[0]
            , m = performance.getEntriesByName(s.EXECUTION_MEASUREMENT_POST_DELAY)[0]
            , E = f.duration + m.duration
            , _ = performance.getEntriesByName(h)[0]
            , I = performance.getEntriesByName(g)[0]
            , v = (p ? I : _).duration
            , b = performance.getEntriesByName(l)[0].duration;
          if (E && v && b)
              return {
                  iframeLoadTime: E,
                  scriptLoaderScriptTime: v,
                  embedScriptTime: b
              }
      } catch (e) {}
      return null
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.buildCmsScriptLoaderSrc = void 0;
  const s = ({portalId: e})=>`/hs/scriptloader/${e}.js`;
  t.buildCmsScriptLoaderSrc = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.buildCmsScriptLoaderPath = void 0;
  var s = i(111);
  const n = ({portalId: e})=>{
      const t = (0,
      s.buildCmsScriptLoaderSrc)({
          portalId: e
      });
      return `${document.location.origin}${t}`
  }
  ;
  t.buildCmsScriptLoaderPath = n
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.buildNonCmsScriptLoaderPath = void 0;
  const s = ({env: e="", portalId: t})=>`${document.location.protocol}//js.hs-scripts${e}.com/${t}.js`;
  t.buildNonCmsScriptLoaderPath = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.isInSDK = void 0;
  const s = ()=>/\bHub[sS]pot ?Mobile ?SDK\b/.test(window.navigator.userAgent);
  t.isInSDK = s
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.hasRequiredFeatures = s;
  function s(e) {
      return ["function" == typeof e.WeakMap, "function" == typeof e.requestAnimationFrame, "function" == typeof e.URLSearchParams, "function" == typeof Object.fromEntries].every(e=>e)
  }
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.ErrorLogger = void 0;
  var s = i(117)
    , n = i(102);
  const o = "https://exceptions.hubspot.com/api/1/store/?sentry_key=7ab6425e7a7c4b01b71fdb51e76514bf&sentry_version=7"
    , a = 4;
  function r() {
      return Date.now() / 1e3
  }
  function c() {
      const e = window.crypto || window.msCrypto;
      if (void 0 !== typeof e && e.getRandomValues) {
          const t = new Uint16Array(8);
          e.getRandomValues(t);
          t[3] = 4095 & t[3] | 16384;
          t[4] = 16383 & t[4] | 32768;
          const i = function(e) {
              let t = e.toString(16);
              for (; t.length < 4; )
                  t = "0" + t;
              return t
          };
          return i(t[0]) + i(t[1]) + i(t[2]) + i(t[3]) + i(t[4]) + i(t[5]) + i(t[6]) + i(t[7])
      }
      return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, e=>{
          const t = 16 * Math.random() | 0;
          return ("x" === e ? t : 3 & t | 8).toString(16)
      }
      )
  }
  function d(e) {
      const t = new XMLHttpRequest;
      t.addEventListener("readystatechange", ()=>{
          t.readyState === a && t.status >= 300 && console.warn("Failed logging HSConversations error")
      }
      );
      t.open("POST", o);
      t.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
      t.send(JSON.stringify(e))
  }
  class l {
      constructor() {
          this.config = {
              environment: (0,
              n.getMessagesEnv)(),
              tags: {
                  portalId: (0,
                  n.getPortalId)(),
                  env: (0,
                  n.getMessagesEnv)(),
                  project: "conversations-embed"
              },
              logger: "javascript",
              platform: "javascript",
              request: {
                  headers: {
                      "User-Agent": navigator.userAgent
                  },
                  url: window.location.href
              }
          };
          this.logError = this.logError.bind(this)
      }
      logError(e) {
          const t = r();
          d(Object.assign({}, this.config, {
              event_id: c(),
              transaction: "conversations embed error",
              level: "error",
              exception: {
                  values: [{
                      mechanism: {
                          handled: !0,
                          type: "generic"
                      },
                      type: e,
                      value: e
                  }]
              },
              timestamp: t
          }))
      }
      captureErrors(e) {
          try {
              e()
          } catch (e) {
              const t = r();
              if (e instanceof Error && "Aborting: redirection in progress" !== e.message) {
                  const i = (0,
                  s.computeStackTrace)(e);
                  d(Object.assign({}, this.config, {
                      event_id: c(),
                      transaction: i.stack[0].filename,
                      level: "error",
                      exception: {
                          values: [{
                              mechanism: {
                                  handled: !0,
                                  type: "generic"
                              },
                              type: i.name,
                              value: i.message,
                              stacktrace: {
                                  frames: i.stack.reverse()
                              }
                          }]
                      },
                      timestamp: t
                  }))
              }
              throw e
          }
      }
  }
  t.ErrorLogger = l
}
, function(e, t, i) {
  "use strict";
  Object.defineProperty(t, "__esModule", {
      value: !0
  });
  t.computeStackTrace = d;
  const s = "?";
  function n() {
      return "undefined" == typeof document || null == document.location ? "" : document.location.href
  }
  function o() {
      return "undefined" == typeof document || null == document.location ? "" : document.location.origin ? document.location.origin : `${document.location.protocol}//${document.location.hostname}${document.location.port ? ":" + document.location.port : ""}`
  }
  function a(e) {
      if (void 0 === e.stack || !e.stack)
          return null;
      const t = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i
        , i = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i
        , a = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i
        , r = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i
        , c = /\((\S*)(?::(\d+))(?::(\d+))\)/
        , d = e.stack.split("\n")
        , l = [];
      let u, h, g;
      for (let n = 0, p = d.length; n < p; ++n) {
          if (h = t.exec(d[n])) {
              const e = h[2] && 0 === h[2].indexOf("native");
              if (h[2] && 0 === h[2].indexOf("eval") && (u = c.exec(h[2]))) {
                  h[2] = u[1];
                  h[3] = u[2];
                  h[4] = u[3]
              }
              g = {
                  filename: e ? null : h[2],
                  function: h[1] || s,
                  args: e ? [h[2]] : [],
                  lineno: h[3] ? +h[3] : null,
                  colno: h[4] ? +h[4] : null
              }
          } else if (h = i.exec(d[n]))
              g = {
                  filename: h[2],
                  function: h[1] || s,
                  args: [],
                  lineno: +h[3],
                  colno: h[4] ? +h[4] : null
              };
          else {
              if (!(h = a.exec(d[n])))
                  continue;
              if (h[3] && h[3].indexOf(" > eval") > -1 && (u = r.exec(h[3]))) {
                  h[3] = u[1];
                  h[4] = u[2];
                  h[5] = null
              } else
                  0 !== n || h[5] || void 0 === e.columnNumber || (l[0].column = e.columnNumber + 1);
              g = {
                  filename: h[3],
                  function: h[1] || s,
                  args: h[2] ? h[2].split(",") : [],
                  lineno: h[4] ? +h[4] : null,
                  colno: h[5] ? +h[5] : null
              }
          }
          !g.function && g.line && (g.function = s);
          if (g.filename && "blob:" === g.filename.substr(0, 5)) {
              const e = new XMLHttpRequest;
              e.open("GET", g.filename, !1);
              e.send(null);
              if (200 === e.status) {
                  let t = e.responseText || "";
                  t = t.slice(-300);
                  const i = t.match(/\/\/# sourceMappingURL=(.*)$/);
                  if (i) {
                      let e = i[1];
                      "~" === e.charAt(0) && (e = o() + e.slice(1));
                      g.url = e.slice(0, -4)
                  }
              }
          }
          l.push(g)
      }
      return l.length ? {
          name: e.name,
          message: e.message,
          url: n(),
          stack: l
      } : null
  }
  function r(e, t, i) {
      const n = {
          filename: t,
          lineno: i
      };
      if (n.filename && n.lineno) {
          e.incomplete = !1;
          n.function || (n.function = s);
          if (e.stack.length > 0 && e.stack[0].filename === n.filename) {
              if (e.stack[0].lineno === n.lineno)
                  return !1;
              if (!e.stack[0].lineno && e.stack[0].function === n.function) {
                  e.stack[0].lineno = n.lineno;
                  return !1
              }
          }
          e.stack.unshift(n);
          e.partial = !0;
          return !0
      }
      e.incomplete = !0;
      return !1
  }
  function c(e, t) {
      const i = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i
        , o = []
        , a = {};
      let l, u, h = !1;
      for (let e = c.caller; e && !h; e = e.caller)
          if (e !== d) {
              u = {
                  filename: null,
                  function: s,
                  lineno: null,
                  colno: null
              };
              e.name ? u.function = e.name : (l = i.exec(e.toString())) && (u.function = l[1]);
              if (void 0 === u.function)
                  try {
                      u.function = l.input.substring(0, l.input.indexOf("{"))
                  } catch (e) {}
              a["" + e] ? h = !0 : a["" + e] = !0;
              o.push(u)
          }
      t && o.splice(0, t);
      const g = {
          name: e.name,
          message: e.message,
          filename: n(),
          stack: o
      };
      r(g, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description);
      return g
  }
  function d(e, t) {
      let i = null;
      t = null == t ? 0 : +t;
      try {
          i = a(e);
          if (i)
              return i
      } catch (e) {}
      try {
          i = c(e, t + 1);
          if (i)
              return i
      } catch (e) {}
      return {
          name: e.name,
          message: e.message,
          filename: n()
      }
  }
}
]);
//# sourceMappingURL=//static.hsappstatic.net/conversations-embed/static-1.16153/bundles/project.js.map
