/*! For license information please see main.891f5f2a.js.LICENSE.txt */
(self.webpackChunkdocs = self.webpackChunkdocs || []).push([
  [792],
  {
    53: (e, t, n) => {
      "use strict";
      function r(e) {
        var t,
          n,
          a = "";
        if ("string" == typeof e || "number" == typeof e) a += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
              e[t] && (n = r(e[t])) && (a && (a += " "), (a += n));
          else for (t in e) e[t] && (a && (a += " "), (a += t));
        return a;
      }
      n.d(t, { A: () => a });
      const a = function () {
        for (var e, t, n = 0, a = ""; n < arguments.length; )
          (e = arguments[n++]) && (t = r(e)) && (a && (a += " "), (a += t));
        return a;
      };
    },
    115: (e) => {
      var t = "undefined" != typeof Element,
        n = "function" == typeof Map,
        r = "function" == typeof Set,
        a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      function o(e, i) {
        if (e === i) return !0;
        if (e && i && "object" == typeof e && "object" == typeof i) {
          if (e.constructor !== i.constructor) return !1;
          var l, s, u, c;
          if (Array.isArray(e)) {
            if ((l = e.length) != i.length) return !1;
            for (s = l; 0 != s--; ) if (!o(e[s], i[s])) return !1;
            return !0;
          }
          if (n && e instanceof Map && i instanceof Map) {
            if (e.size !== i.size) return !1;
            for (c = e.entries(); !(s = c.next()).done; )
              if (!i.has(s.value[0])) return !1;
            for (c = e.entries(); !(s = c.next()).done; )
              if (!o(s.value[1], i.get(s.value[0]))) return !1;
            return !0;
          }
          if (r && e instanceof Set && i instanceof Set) {
            if (e.size !== i.size) return !1;
            for (c = e.entries(); !(s = c.next()).done; )
              if (!i.has(s.value[0])) return !1;
            return !0;
          }
          if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
            if ((l = e.length) != i.length) return !1;
            for (s = l; 0 != s--; ) if (e[s] !== i[s]) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === i.source && e.flags === i.flags;
          if (
            e.valueOf !== Object.prototype.valueOf &&
            "function" == typeof e.valueOf &&
            "function" == typeof i.valueOf
          )
            return e.valueOf() === i.valueOf();
          if (
            e.toString !== Object.prototype.toString &&
            "function" == typeof e.toString &&
            "function" == typeof i.toString
          )
            return e.toString() === i.toString();
          if ((l = (u = Object.keys(e)).length) !== Object.keys(i).length)
            return !1;
          for (s = l; 0 != s--; )
            if (!Object.prototype.hasOwnProperty.call(i, u[s])) return !1;
          if (t && e instanceof Element) return !1;
          for (s = l; 0 != s--; )
            if (
              (("_owner" !== u[s] && "__v" !== u[s] && "__o" !== u[s]) ||
                !e.$$typeof) &&
              !o(e[u[s]], i[u[s]])
            )
              return !1;
          return !0;
        }
        return e != e && i != i;
      }
      e.exports = function (e, t) {
        try {
          return o(e, t);
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw n;
        }
      };
    },
    119: (e, t, n) => {
      "use strict";
      n.r(t);
    },
    253: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getErrorCausalChain = void 0),
        (t.getErrorCausalChain = function e(t) {
          return t.cause ? [t, ...e(t.cause)] : [t];
        });
    },
    311: (e) => {
      "use strict";
      e.exports = function (e, t, n, r, a, o, i, l) {
        if (!e) {
          var s;
          if (void 0 === t)
            s = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var u = [n, r, a, o, i, l],
              c = 0;
            (s = new Error(
              t.replace(/%s/g, function () {
                return u[c++];
              })
            )).name = "Invariant Violation";
          }
          throw ((s.framesToPop = 1), s);
        }
      };
    },
    418: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => r });
      const r = () => null;
    },
    440: function (e, t, n) {
      "use strict";
      var r =
        (this && this.__importDefault) ||
        function (e) {
          return e && e.__esModule ? e : { default: e };
        };
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.getErrorCausalChain =
          t.applyTrailingSlash =
          t.blogPostContainerID =
            void 0),
        (t.blogPostContainerID = "__blog-post-container");
      var a = n(2983);
      Object.defineProperty(t, "applyTrailingSlash", {
        enumerable: !0,
        get: function () {
          return r(a).default;
        },
      });
      var o = n(253);
      Object.defineProperty(t, "getErrorCausalChain", {
        enumerable: !0,
        get: function () {
          return o.getErrorCausalChain;
        },
      });
    },
    545: (e, t, n) => {
      "use strict";
      n.d(t, { mg: () => Z, vd: () => H });
      var r = n(6540),
        a = n(5556),
        o = n.n(a),
        i = n(115),
        l = n.n(i),
        s = n(311),
        u = n.n(s),
        c = n(2833),
        d = n.n(c);
      function f() {
        return (
          (f =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          f.apply(this, arguments)
        );
      }
      function p(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          m(e, t);
      }
      function m(e, t) {
        return (
          (m =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          m(e, t)
        );
      }
      function g(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++)
          t.indexOf((n = o[r])) >= 0 || (a[n] = e[n]);
        return a;
      }
      var h = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
          FRAGMENT: "Symbol(react.fragment)",
        },
        b = { rel: ["amphtml", "canonical", "alternate"] },
        v = { type: ["application/ld+json"] },
        y = {
          charset: "",
          name: ["robots", "description"],
          property: [
            "og:type",
            "og:title",
            "og:url",
            "og:image",
            "og:image:alt",
            "og:description",
            "twitter:url",
            "twitter:title",
            "twitter:description",
            "twitter:image",
            "twitter:image:alt",
            "twitter:card",
            "twitter:site",
          ],
        },
        w = Object.keys(h).map(function (e) {
          return h[e];
        }),
        k = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        E = Object.keys(k).reduce(function (e, t) {
          return (e[k[t]] = t), e;
        }, {}),
        S = function (e, t) {
          for (var n = e.length - 1; n >= 0; n -= 1) {
            var r = e[n];
            if (Object.prototype.hasOwnProperty.call(r, t)) return r[t];
          }
          return null;
        },
        x = function (e) {
          var t = S(e, h.TITLE),
            n = S(e, "titleTemplate");
          if ((Array.isArray(t) && (t = t.join("")), n && t))
            return n.replace(/%s/g, function () {
              return t;
            });
          var r = S(e, "defaultTitle");
          return t || r || void 0;
        },
        T = function (e) {
          return S(e, "onChangeClientState") || function () {};
        },
        A = function (e, t) {
          return t
            .filter(function (t) {
              return void 0 !== t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return f({}, e, t);
            }, {});
        },
        C = function (e, t) {
          return t
            .filter(function (e) {
              return void 0 !== e[h.BASE];
            })
            .map(function (e) {
              return e[h.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), a = 0; a < r.length; a += 1) {
                  var o = r[a].toLowerCase();
                  if (-1 !== e.indexOf(o) && n[o]) return t.concat(n);
                }
              return t;
            }, []);
        },
        _ = function (e, t, n) {
          var r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  console &&
                  "function" == typeof console.warn &&
                  console.warn(
                    "Helmet: " +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      typeof t[e] +
                      '"'
                  ),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              var a = {};
              n.filter(function (e) {
                for (var n, o = Object.keys(e), i = 0; i < o.length; i += 1) {
                  var l = o[i],
                    s = l.toLowerCase();
                  -1 === t.indexOf(s) ||
                    ("rel" === n && "canonical" === e[n].toLowerCase()) ||
                    ("rel" === s && "stylesheet" === e[s].toLowerCase()) ||
                    (n = s),
                    -1 === t.indexOf(l) ||
                      ("innerHTML" !== l &&
                        "cssText" !== l &&
                        "itemprop" !== l) ||
                      (n = l);
                }
                if (!n || !e[n]) return !1;
                var u = e[n].toLowerCase();
                return (
                  r[n] || (r[n] = {}),
                  a[n] || (a[n] = {}),
                  !r[n][u] && ((a[n][u] = !0), !0)
                );
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var o = Object.keys(a), i = 0; i < o.length; i += 1) {
                var l = o[i],
                  s = f({}, r[l], a[l]);
                r[l] = s;
              }
              return e;
            }, [])
            .reverse();
        },
        L = function (e, t) {
          if (Array.isArray(e) && e.length)
            for (var n = 0; n < e.length; n += 1) if (e[n][t]) return !0;
          return !1;
        },
        R = function (e) {
          return Array.isArray(e) ? e.join("") : e;
        },
        N = function (e, t) {
          return Array.isArray(e)
            ? e.reduce(
                function (e, n) {
                  return (
                    (function (e, t) {
                      for (var n = Object.keys(e), r = 0; r < n.length; r += 1)
                        if (t[n[r]] && t[n[r]].includes(e[n[r]])) return !0;
                      return !1;
                    })(n, t)
                      ? e.priority.push(n)
                      : e.default.push(n),
                    e
                  );
                },
                { priority: [], default: [] }
              )
            : { default: e };
        },
        P = function (e, t) {
          var n;
          return f({}, e, (((n = {})[t] = void 0), n));
        },
        O = [h.NOSCRIPT, h.SCRIPT, h.STYLE],
        D = function (e, t) {
          return (
            void 0 === t && (t = !0),
            !1 === t
              ? String(e)
              : String(e)
                  .replace(/&/g, "&amp;")
                  .replace(/</g, "&lt;")
                  .replace(/>/g, "&gt;")
                  .replace(/"/g, "&quot;")
                  .replace(/'/g, "&#x27;")
          );
        },
        I = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
          }, "");
        },
        M = function (e, t) {
          return (
            void 0 === t && (t = {}),
            Object.keys(e).reduce(function (t, n) {
              return (t[k[n] || n] = e[n]), t;
            }, t)
          );
        },
        B = function (e, t) {
          return t.map(function (t, n) {
            var a,
              o = (((a = { key: n })["data-rh"] = !0), a);
            return (
              Object.keys(t).forEach(function (e) {
                var n = k[e] || e;
                "innerHTML" === n || "cssText" === n
                  ? (o.dangerouslySetInnerHTML = {
                      __html: t.innerHTML || t.cssText,
                    })
                  : (o[n] = t[e]);
              }),
              r.createElement(e, o)
            );
          });
        },
        F = function (e, t, n) {
          switch (e) {
            case h.TITLE:
              return {
                toComponent: function () {
                  return (
                    (n = t.titleAttributes),
                    ((a = { key: (e = t.title) })["data-rh"] = !0),
                    (o = M(n, a)),
                    [r.createElement(h.TITLE, o, e)]
                  );
                  var e, n, a, o;
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var a = I(n),
                      o = R(t);
                    return a
                      ? "<" +
                          e +
                          ' data-rh="true" ' +
                          a +
                          ">" +
                          D(o, r) +
                          "</" +
                          e +
                          ">"
                      : "<" + e + ' data-rh="true">' + D(o, r) + "</" + e + ">";
                  })(e, t.title, t.titleAttributes, n);
                },
              };
            case "bodyAttributes":
            case "htmlAttributes":
              return {
                toComponent: function () {
                  return M(t);
                },
                toString: function () {
                  return I(t);
                },
              };
            default:
              return {
                toComponent: function () {
                  return B(e, t);
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var a = Object.keys(r)
                          .filter(function (e) {
                            return !("innerHTML" === e || "cssText" === e);
                          })
                          .reduce(function (e, t) {
                            var a =
                              void 0 === r[t] ? t : t + '="' + D(r[t], n) + '"';
                            return e ? e + " " + a : a;
                          }, ""),
                        o = r.innerHTML || r.cssText || "",
                        i = -1 === O.indexOf(e);
                      return (
                        t +
                        "<" +
                        e +
                        ' data-rh="true" ' +
                        a +
                        (i ? "/>" : ">" + o + "</" + e + ">")
                      );
                    }, "");
                  })(e, t, n);
                },
              };
          }
        },
        j = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            a = e.htmlAttributes,
            o = e.noscriptTags,
            i = e.styleTags,
            l = e.title,
            s = void 0 === l ? "" : l,
            u = e.titleAttributes,
            c = e.linkTags,
            d = e.metaTags,
            f = e.scriptTags,
            p = {
              toComponent: function () {},
              toString: function () {
                return "";
              },
            };
          if (e.prioritizeSeoTags) {
            var m = (function (e) {
              var t = e.linkTags,
                n = e.scriptTags,
                r = e.encode,
                a = N(e.metaTags, y),
                o = N(t, b),
                i = N(n, v);
              return {
                priorityMethods: {
                  toComponent: function () {
                    return [].concat(
                      B(h.META, a.priority),
                      B(h.LINK, o.priority),
                      B(h.SCRIPT, i.priority)
                    );
                  },
                  toString: function () {
                    return (
                      F(h.META, a.priority, r) +
                      " " +
                      F(h.LINK, o.priority, r) +
                      " " +
                      F(h.SCRIPT, i.priority, r)
                    );
                  },
                },
                metaTags: a.default,
                linkTags: o.default,
                scriptTags: i.default,
              };
            })(e);
            (p = m.priorityMethods),
              (c = m.linkTags),
              (d = m.metaTags),
              (f = m.scriptTags);
          }
          return {
            priority: p,
            base: F(h.BASE, t, r),
            bodyAttributes: F("bodyAttributes", n, r),
            htmlAttributes: F("htmlAttributes", a, r),
            link: F(h.LINK, c, r),
            meta: F(h.META, d, r),
            noscript: F(h.NOSCRIPT, o, r),
            script: F(h.SCRIPT, f, r),
            style: F(h.STYLE, i, r),
            title: F(h.TITLE, { title: s, titleAttributes: u }, r),
          };
        },
        z = [],
        U = function (e, t) {
          var n = this;
          void 0 === t && (t = "undefined" != typeof document),
            (this.instances = []),
            (this.value = {
              setHelmet: function (e) {
                n.context.helmet = e;
              },
              helmetInstances: {
                get: function () {
                  return n.canUseDOM ? z : n.instances;
                },
                add: function (e) {
                  (n.canUseDOM ? z : n.instances).push(e);
                },
                remove: function (e) {
                  var t = (n.canUseDOM ? z : n.instances).indexOf(e);
                  (n.canUseDOM ? z : n.instances).splice(t, 1);
                },
              },
            }),
            (this.context = e),
            (this.canUseDOM = t),
            t ||
              (e.helmet = j({
                baseTag: [],
                bodyAttributes: {},
                encodeSpecialCharacters: !0,
                htmlAttributes: {},
                linkTags: [],
                metaTags: [],
                noscriptTags: [],
                scriptTags: [],
                styleTags: [],
                title: "",
                titleAttributes: {},
              }));
        },
        $ = r.createContext({}),
        G = o().shape({
          setHelmet: o().func,
          helmetInstances: o().shape({
            get: o().func,
            add: o().func,
            remove: o().func,
          }),
        }),
        q = "undefined" != typeof document,
        H = (function (e) {
          function t(n) {
            var r;
            return (
              ((r = e.call(this, n) || this).helmetData = new U(
                r.props.context,
                t.canUseDOM
              )),
              r
            );
          }
          return (
            p(t, e),
            (t.prototype.render = function () {
              return r.createElement(
                $.Provider,
                { value: this.helmetData.value },
                this.props.children
              );
            }),
            t
          );
        })(r.Component);
      (H.canUseDOM = q),
        (H.propTypes = {
          context: o().shape({ helmet: o().shape() }),
          children: o().node.isRequired,
        }),
        (H.defaultProps = { context: {} }),
        (H.displayName = "HelmetProvider");
      var V = function (e, t) {
          var n,
            r = document.head || document.querySelector(h.HEAD),
            a = r.querySelectorAll(e + "[data-rh]"),
            o = [].slice.call(a),
            i = [];
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var r = document.createElement(e);
                for (var a in t)
                  Object.prototype.hasOwnProperty.call(t, a) &&
                    ("innerHTML" === a
                      ? (r.innerHTML = t.innerHTML)
                      : "cssText" === a
                      ? r.styleSheet
                        ? (r.styleSheet.cssText = t.cssText)
                        : r.appendChild(document.createTextNode(t.cssText))
                      : r.setAttribute(a, void 0 === t[a] ? "" : t[a]));
                r.setAttribute("data-rh", "true"),
                  o.some(function (e, t) {
                    return (n = t), r.isEqualNode(e);
                  })
                    ? o.splice(n, 1)
                    : i.push(r);
              }),
            o.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            i.forEach(function (e) {
              return r.appendChild(e);
            }),
            { oldTags: o, newTags: i }
          );
        },
        W = function (e, t) {
          var n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute("data-rh"),
                a = r ? r.split(",") : [],
                o = [].concat(a),
                i = Object.keys(t),
                l = 0;
              l < i.length;
              l += 1
            ) {
              var s = i[l],
                u = t[s] || "";
              n.getAttribute(s) !== u && n.setAttribute(s, u),
                -1 === a.indexOf(s) && a.push(s);
              var c = o.indexOf(s);
              -1 !== c && o.splice(c, 1);
            }
            for (var d = o.length - 1; d >= 0; d -= 1) n.removeAttribute(o[d]);
            a.length === o.length
              ? n.removeAttribute("data-rh")
              : n.getAttribute("data-rh") !== i.join(",") &&
                n.setAttribute("data-rh", i.join(","));
          }
        },
        K = function (e, t) {
          var n = e.baseTag,
            r = e.htmlAttributes,
            a = e.linkTags,
            o = e.metaTags,
            i = e.noscriptTags,
            l = e.onChangeClientState,
            s = e.scriptTags,
            u = e.styleTags,
            c = e.title,
            d = e.titleAttributes;
          W(h.BODY, e.bodyAttributes),
            W(h.HTML, r),
            (function (e, t) {
              void 0 !== e && document.title !== e && (document.title = R(e)),
                W(h.TITLE, t);
            })(c, d);
          var f = {
              baseTag: V(h.BASE, n),
              linkTags: V(h.LINK, a),
              metaTags: V(h.META, o),
              noscriptTags: V(h.NOSCRIPT, i),
              scriptTags: V(h.SCRIPT, s),
              styleTags: V(h.STYLE, u),
            },
            p = {},
            m = {};
          Object.keys(f).forEach(function (e) {
            var t = f[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (p[e] = n), r.length && (m[e] = f[e].oldTags);
          }),
            t && t(),
            l(e, p, m);
        },
        Y = null,
        Q = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).rendered = !1), t
            );
          }
          p(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e) {
              return !d()(e, this.props);
            }),
            (n.componentDidUpdate = function () {
              this.emitChange();
            }),
            (n.componentWillUnmount = function () {
              this.props.context.helmetInstances.remove(this),
                this.emitChange();
            }),
            (n.emitChange = function () {
              var e,
                t,
                n = this.props.context,
                r = n.setHelmet,
                a = null,
                o =
                  ((e = n.helmetInstances.get().map(function (e) {
                    var t = f({}, e.props);
                    return delete t.context, t;
                  })),
                  {
                    baseTag: C(["href"], e),
                    bodyAttributes: A("bodyAttributes", e),
                    defer: S(e, "defer"),
                    encode: S(e, "encodeSpecialCharacters"),
                    htmlAttributes: A("htmlAttributes", e),
                    linkTags: _(h.LINK, ["rel", "href"], e),
                    metaTags: _(
                      h.META,
                      ["name", "charset", "http-equiv", "property", "itemprop"],
                      e
                    ),
                    noscriptTags: _(h.NOSCRIPT, ["innerHTML"], e),
                    onChangeClientState: T(e),
                    scriptTags: _(h.SCRIPT, ["src", "innerHTML"], e),
                    styleTags: _(h.STYLE, ["cssText"], e),
                    title: x(e),
                    titleAttributes: A("titleAttributes", e),
                    prioritizeSeoTags: L(e, "prioritizeSeoTags"),
                  });
              H.canUseDOM
                ? ((t = o),
                  Y && cancelAnimationFrame(Y),
                  t.defer
                    ? (Y = requestAnimationFrame(function () {
                        K(t, function () {
                          Y = null;
                        });
                      }))
                    : (K(t), (Y = null)))
                : j && (a = j(o)),
                r(a);
            }),
            (n.init = function () {
              this.rendered ||
                ((this.rendered = !0),
                this.props.context.helmetInstances.add(this),
                this.emitChange());
            }),
            (n.render = function () {
              return this.init(), null;
            }),
            t
          );
        })(r.Component);
      (Q.propTypes = { context: G.isRequired }),
        (Q.displayName = "HelmetDispatcher");
      var X = ["children"],
        J = ["children"],
        Z = (function (e) {
          function t() {
            return e.apply(this, arguments) || this;
          }
          p(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e) {
              return !l()(P(this.props, "helmetData"), P(e, "helmetData"));
            }),
            (n.mapNestedChildrenToProps = function (e, t) {
              if (!t) return null;
              switch (e.type) {
                case h.SCRIPT:
                case h.NOSCRIPT:
                  return { innerHTML: t };
                case h.STYLE:
                  return { cssText: t };
                default:
                  throw new Error(
                    "<" +
                      e.type +
                      " /> elements are self-closing and can not contain children. Refer to our API for more information."
                  );
              }
            }),
            (n.flattenArrayTypeChildren = function (e) {
              var t,
                n = e.child,
                r = e.arrayTypeChildren;
              return f(
                {},
                r,
                (((t = {})[n.type] = [].concat(r[n.type] || [], [
                  f(
                    {},
                    e.newChildProps,
                    this.mapNestedChildrenToProps(n, e.nestedChildren)
                  ),
                ])),
                t)
              );
            }),
            (n.mapObjectTypeChildren = function (e) {
              var t,
                n,
                r = e.child,
                a = e.newProps,
                o = e.newChildProps,
                i = e.nestedChildren;
              switch (r.type) {
                case h.TITLE:
                  return f(
                    {},
                    a,
                    (((t = {})[r.type] = i), (t.titleAttributes = f({}, o)), t)
                  );
                case h.BODY:
                  return f({}, a, { bodyAttributes: f({}, o) });
                case h.HTML:
                  return f({}, a, { htmlAttributes: f({}, o) });
                default:
                  return f({}, a, (((n = {})[r.type] = f({}, o)), n));
              }
            }),
            (n.mapArrayTypeChildrenToProps = function (e, t) {
              var n = f({}, t);
              return (
                Object.keys(e).forEach(function (t) {
                  var r;
                  n = f({}, n, (((r = {})[t] = e[t]), r));
                }),
                n
              );
            }),
            (n.warnOnInvalidChildren = function (e, t) {
              return (
                u()(
                  w.some(function (t) {
                    return e.type === t;
                  }),
                  "function" == typeof e.type
                    ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to our API for more information."
                    : "Only elements types " +
                        w.join(", ") +
                        " are allowed. Helmet does not support rendering <" +
                        e.type +
                        "> elements. Refer to our API for more information."
                ),
                u()(
                  !t ||
                    "string" == typeof t ||
                    (Array.isArray(t) &&
                      !t.some(function (e) {
                        return "string" != typeof e;
                      })),
                  "Helmet expects a string as a child of <" +
                    e.type +
                    ">. Did you forget to wrap your children in braces? ( <" +
                    e.type +
                    ">{``}</" +
                    e.type +
                    "> ) Refer to our API for more information."
                ),
                !0
              );
            }),
            (n.mapChildrenToProps = function (e, t) {
              var n = this,
                a = {};
              return (
                r.Children.forEach(e, function (e) {
                  if (e && e.props) {
                    var r = e.props,
                      o = r.children,
                      i = g(r, X),
                      l = Object.keys(i).reduce(function (e, t) {
                        return (e[E[t] || t] = i[t]), e;
                      }, {}),
                      s = e.type;
                    switch (
                      ("symbol" == typeof s
                        ? (s = s.toString())
                        : n.warnOnInvalidChildren(e, o),
                      s)
                    ) {
                      case h.FRAGMENT:
                        t = n.mapChildrenToProps(o, t);
                        break;
                      case h.LINK:
                      case h.META:
                      case h.NOSCRIPT:
                      case h.SCRIPT:
                      case h.STYLE:
                        a = n.flattenArrayTypeChildren({
                          child: e,
                          arrayTypeChildren: a,
                          newChildProps: l,
                          nestedChildren: o,
                        });
                        break;
                      default:
                        t = n.mapObjectTypeChildren({
                          child: e,
                          newProps: t,
                          newChildProps: l,
                          nestedChildren: o,
                        });
                    }
                  }
                }),
                this.mapArrayTypeChildrenToProps(a, t)
              );
            }),
            (n.render = function () {
              var e = this.props,
                t = e.children,
                n = g(e, J),
                a = f({}, n),
                o = n.helmetData;
              return (
                t && (a = this.mapChildrenToProps(t, a)),
                !o || o instanceof U || (o = new U(o.context, o.instances)),
                o
                  ? r.createElement(
                      Q,
                      f({}, a, { context: o.value, helmetData: void 0 })
                    )
                  : r.createElement($.Consumer, null, function (e) {
                      return r.createElement(Q, f({}, a, { context: e }));
                    })
              );
            }),
            t
          );
        })(r.Component);
      (Z.propTypes = {
        base: o().object,
        bodyAttributes: o().object,
        children: o().oneOfType([o().arrayOf(o().node), o().node]),
        defaultTitle: o().string,
        defer: o().bool,
        encodeSpecialCharacters: o().bool,
        htmlAttributes: o().object,
        link: o().arrayOf(o().object),
        meta: o().arrayOf(o().object),
        noscript: o().arrayOf(o().object),
        onChangeClientState: o().func,
        script: o().arrayOf(o().object),
        style: o().arrayOf(o().object),
        title: o().string,
        titleAttributes: o().object,
        titleTemplate: o().string,
        prioritizeSeoTags: o().bool,
        helmetData: o().object,
      }),
        (Z.defaultProps = {
          defer: !0,
          encodeSpecialCharacters: !0,
          prioritizeSeoTags: !1,
        }),
        (Z.displayName = "Helmet");
    },
    961: (e, t, n) => {
      "use strict";
      !(function e() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = n(2551));
    },
    1003: (e, t, n) => {
      "use strict";
      n.d(t, { e3: () => f, be: () => c, Jx: () => p });
      var r = n(6540),
        a = n(53),
        o = n(5260),
        i = n(3102);
      function l() {
        const e = r.useContext(i.o);
        if (!e)
          throw new Error("Unexpected: no Docusaurus route context found");
        return e;
      }
      var s = n(6025),
        u = n(4586);
      function c(e) {
        let {
          title: t,
          description: n,
          keywords: a,
          image: i,
          children: l,
        } = e;
        const c = (function (e) {
            const { siteConfig: t } = (0, u.A)(),
              { title: n, titleDelimiter: r } = t;
            return e?.trim().length ? `${e.trim()} ${r} ${n}` : n;
          })(t),
          { withBaseUrl: d } = (0, s.h)(),
          f = i ? d(i, { absolute: !0 }) : void 0;
        return r.createElement(
          o.A,
          null,
          t && r.createElement("title", null, c),
          t && r.createElement("meta", { property: "og:title", content: c }),
          n && r.createElement("meta", { name: "description", content: n }),
          n &&
            r.createElement("meta", { property: "og:description", content: n }),
          a &&
            r.createElement("meta", {
              name: "keywords",
              content: Array.isArray(a) ? a.join(",") : a,
            }),
          f && r.createElement("meta", { property: "og:image", content: f }),
          f && r.createElement("meta", { name: "twitter:image", content: f }),
          l
        );
      }
      const d = r.createContext(void 0);
      function f(e) {
        let { className: t, children: n } = e;
        const i = r.useContext(d),
          l = (0, a.A)(i, t);
        return r.createElement(
          d.Provider,
          { value: l },
          r.createElement(o.A, null, r.createElement("html", { className: l })),
          n
        );
      }
      function p(e) {
        let { children: t } = e;
        const n = l(),
          o = `plugin-${n.plugin.name.replace(
            /docusaurus-(?:plugin|theme)-(?:content-)?/gi,
            ""
          )}`;
        const i = `plugin-id-${n.plugin.id}`;
        return r.createElement(f, { className: (0, a.A)(o, i) }, t);
      }
    },
    1043: (e, t, n) => {
      "use strict";
      n.r(t);
    },
    1258: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var r = (function () {
          var e = /(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,
            t = 0,
            n = {},
            r = {
              util: {
                encode: function e(t) {
                  return t instanceof a
                    ? new a(t.type, e(t.content), t.alias)
                    : Array.isArray(t)
                    ? t.map(e)
                    : t
                        .replace(/&/g, "&amp;")
                        .replace(/</g, "&lt;")
                        .replace(/\u00a0/g, " ");
                },
                type: function (e) {
                  return Object.prototype.toString.call(e).slice(8, -1);
                },
                objId: function (e) {
                  return (
                    e.__id || Object.defineProperty(e, "__id", { value: ++t }),
                    e.__id
                  );
                },
                clone: function e(t, n) {
                  var a, o;
                  switch (((n = n || {}), r.util.type(t))) {
                    case "Object":
                      if (((o = r.util.objId(t)), n[o])) return n[o];
                      for (var i in ((a = {}), (n[o] = a), t))
                        t.hasOwnProperty(i) && (a[i] = e(t[i], n));
                      return a;
                    case "Array":
                      return (
                        (o = r.util.objId(t)),
                        n[o]
                          ? n[o]
                          : ((a = []),
                            (n[o] = a),
                            t.forEach(function (t, r) {
                              a[r] = e(t, n);
                            }),
                            a)
                      );
                    default:
                      return t;
                  }
                },
                getLanguage: function (t) {
                  for (; t; ) {
                    var n = e.exec(t.className);
                    if (n) return n[1].toLowerCase();
                    t = t.parentElement;
                  }
                  return "none";
                },
                setLanguage: function (t, n) {
                  (t.className = t.className.replace(RegExp(e, "gi"), "")),
                    t.classList.add("language-" + n);
                },
                isActive: function (e, t, n) {
                  for (var r = "no-" + t; e; ) {
                    var a = e.classList;
                    if (a.contains(t)) return !0;
                    if (a.contains(r)) return !1;
                    e = e.parentElement;
                  }
                  return !!n;
                },
              },
              languages: {
                plain: n,
                plaintext: n,
                text: n,
                txt: n,
                extend: function (e, t) {
                  var n = r.util.clone(r.languages[e]);
                  for (var a in t) n[a] = t[a];
                  return n;
                },
                insertBefore: function (e, t, n, a) {
                  var o = (a = a || r.languages)[e],
                    i = {};
                  for (var l in o)
                    if (o.hasOwnProperty(l)) {
                      if (l == t)
                        for (var s in n) n.hasOwnProperty(s) && (i[s] = n[s]);
                      n.hasOwnProperty(l) || (i[l] = o[l]);
                    }
                  var u = a[e];
                  return (
                    (a[e] = i),
                    r.languages.DFS(r.languages, function (t, n) {
                      n === u && t != e && (this[t] = i);
                    }),
                    i
                  );
                },
                DFS: function e(t, n, a, o) {
                  o = o || {};
                  var i = r.util.objId;
                  for (var l in t)
                    if (t.hasOwnProperty(l)) {
                      n.call(t, l, t[l], a || l);
                      var s = t[l],
                        u = r.util.type(s);
                      "Object" !== u || o[i(s)]
                        ? "Array" !== u ||
                          o[i(s)] ||
                          ((o[i(s)] = !0), e(s, n, l, o))
                        : ((o[i(s)] = !0), e(s, n, null, o));
                    }
                },
              },
              plugins: {},
              highlight: function (e, t, n) {
                var o = { code: e, grammar: t, language: n };
                return (
                  r.hooks.run("before-tokenize", o),
                  (o.tokens = r.tokenize(o.code, o.grammar)),
                  r.hooks.run("after-tokenize", o),
                  a.stringify(r.util.encode(o.tokens), o.language)
                );
              },
              tokenize: function (e, t) {
                var n = t.rest;
                if (n) {
                  for (var r in n) t[r] = n[r];
                  delete t.rest;
                }
                var a = new l();
                return (
                  s(a, a.head, e),
                  i(e, a, t, a.head, 0),
                  (function (e) {
                    var t = [],
                      n = e.head.next;
                    for (; n !== e.tail; ) t.push(n.value), (n = n.next);
                    return t;
                  })(a)
                );
              },
              hooks: {
                all: {},
                add: function (e, t) {
                  var n = r.hooks.all;
                  (n[e] = n[e] || []), n[e].push(t);
                },
                run: function (e, t) {
                  var n = r.hooks.all[e];
                  if (n && n.length) for (var a, o = 0; (a = n[o++]); ) a(t);
                },
              },
              Token: a,
            };
          function a(e, t, n, r) {
            (this.type = e),
              (this.content = t),
              (this.alias = n),
              (this.length = 0 | (r || "").length);
          }
          function o(e, t, n, r) {
            e.lastIndex = t;
            var a = e.exec(n);
            if (a && r && a[1]) {
              var o = a[1].length;
              (a.index += o), (a[0] = a[0].slice(o));
            }
            return a;
          }
          function i(e, t, n, l, c, d) {
            for (var f in n)
              if (n.hasOwnProperty(f) && n[f]) {
                var p = n[f];
                p = Array.isArray(p) ? p : [p];
                for (var m = 0; m < p.length; ++m) {
                  if (d && d.cause == f + "," + m) return;
                  var g = p[m],
                    h = g.inside,
                    b = !!g.lookbehind,
                    v = !!g.greedy,
                    y = g.alias;
                  if (v && !g.pattern.global) {
                    var w = g.pattern.toString().match(/[imsuy]*$/)[0];
                    g.pattern = RegExp(g.pattern.source, w + "g");
                  }
                  for (
                    var k = g.pattern || g, E = l.next, S = c;
                    E !== t.tail && !(d && S >= d.reach);
                    S += E.value.length, E = E.next
                  ) {
                    var x = E.value;
                    if (t.length > e.length) return;
                    if (!(x instanceof a)) {
                      var T,
                        A = 1;
                      if (v) {
                        if (!(T = o(k, S, e, b)) || T.index >= e.length) break;
                        var C = T.index,
                          _ = T.index + T[0].length,
                          L = S;
                        for (L += E.value.length; C >= L; )
                          L += (E = E.next).value.length;
                        if (((S = L -= E.value.length), E.value instanceof a))
                          continue;
                        for (
                          var R = E;
                          R !== t.tail && (L < _ || "string" == typeof R.value);
                          R = R.next
                        )
                          A++, (L += R.value.length);
                        A--, (x = e.slice(S, L)), (T.index -= S);
                      } else if (!(T = o(k, 0, x, b))) continue;
                      C = T.index;
                      var N = T[0],
                        P = x.slice(0, C),
                        O = x.slice(C + N.length),
                        D = S + x.length;
                      d && D > d.reach && (d.reach = D);
                      var I = E.prev;
                      if (
                        (P && ((I = s(t, I, P)), (S += P.length)),
                        u(t, I, A),
                        (E = s(t, I, new a(f, h ? r.tokenize(N, h) : N, y, N))),
                        O && s(t, E, O),
                        A > 1)
                      ) {
                        var M = { cause: f + "," + m, reach: D };
                        i(e, t, n, E.prev, S, M),
                          d && M.reach > d.reach && (d.reach = M.reach);
                      }
                    }
                  }
                }
              }
          }
          function l() {
            var e = { value: null, prev: null, next: null },
              t = { value: null, prev: e, next: null };
            (e.next = t), (this.head = e), (this.tail = t), (this.length = 0);
          }
          function s(e, t, n) {
            var r = t.next,
              a = { value: n, prev: t, next: r };
            return (t.next = a), (r.prev = a), e.length++, a;
          }
          function u(e, t, n) {
            for (var r = t.next, a = 0; a < n && r !== e.tail; a++) r = r.next;
            (t.next = r), (r.prev = t), (e.length -= a);
          }
          return (
            (a.stringify = function e(t, n) {
              if ("string" == typeof t) return t;
              if (Array.isArray(t)) {
                var a = "";
                return (
                  t.forEach(function (t) {
                    a += e(t, n);
                  }),
                  a
                );
              }
              var o = {
                  type: t.type,
                  content: e(t.content, n),
                  tag: "span",
                  classes: ["token", t.type],
                  attributes: {},
                  language: n,
                },
                i = t.alias;
              i &&
                (Array.isArray(i)
                  ? Array.prototype.push.apply(o.classes, i)
                  : o.classes.push(i)),
                r.hooks.run("wrap", o);
              var l = "";
              for (var s in o.attributes)
                l +=
                  " " +
                  s +
                  '="' +
                  (o.attributes[s] || "").replace(/"/g, "&quot;") +
                  '"';
              return (
                "<" +
                o.tag +
                ' class="' +
                o.classes.join(" ") +
                '"' +
                l +
                ">" +
                o.content +
                "</" +
                o.tag +
                ">"
              );
            }),
            r
          );
        })(),
        a = r;
      (r.default = r),
        (a.languages.markup = {
          comment: { pattern: /<!--(?:(?!<!--)[\s\S])*?-->/, greedy: !0 },
          prolog: { pattern: /<\?[\s\S]+?\?>/, greedy: !0 },
          doctype: {
            pattern:
              /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
            greedy: !0,
            inside: {
              "internal-subset": {
                pattern: /(^[^\[]*\[)[\s\S]+(?=\]>$)/,
                lookbehind: !0,
                greedy: !0,
                inside: null,
              },
              string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
              punctuation: /^<!|>$|[[\]]/,
              "doctype-tag": /^DOCTYPE/i,
              name: /[^\s<>'"]+/,
            },
          },
          cdata: { pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i, greedy: !0 },
          tag: {
            pattern:
              /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
            greedy: !0,
            inside: {
              tag: {
                pattern: /^<\/?[^\s>\/]+/,
                inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
              },
              "special-attr": [],
              "attr-value": {
                pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                inside: {
                  punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
                },
              },
              punctuation: /\/?>/,
              "attr-name": {
                pattern: /[^\s>\/]+/,
                inside: { namespace: /^[^\s>\/:]+:/ },
              },
            },
          },
          entity: [
            { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
            /&#x?[\da-f]{1,8};/i,
          ],
        }),
        (a.languages.markup.tag.inside["attr-value"].inside.entity =
          a.languages.markup.entity),
        (a.languages.markup.doctype.inside["internal-subset"].inside =
          a.languages.markup),
        a.hooks.add("wrap", function (e) {
          "entity" === e.type &&
            (e.attributes.title = e.content.replace(/&amp;/, "&"));
        }),
        Object.defineProperty(a.languages.markup.tag, "addInlined", {
          value: function (e, t) {
            var n = {};
            (n["language-" + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: a.languages[t],
            }),
              (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var r = {
              "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            r["language-" + t] = { pattern: /[\s\S]+/, inside: a.languages[t] };
            var o = {};
            (o[e] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return e;
                  }
                ),
                "i"
              ),
              lookbehind: !0,
              greedy: !0,
              inside: r,
            }),
              a.languages.insertBefore("markup", "cdata", o);
          },
        }),
        Object.defineProperty(a.languages.markup.tag, "addAttribute", {
          value: function (e, t) {
            a.languages.markup.tag.inside["special-attr"].push({
              pattern: RegExp(
                /(^|["'\s])/.source +
                  "(?:" +
                  e +
                  ")" +
                  /\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,
                "i"
              ),
              lookbehind: !0,
              inside: {
                "attr-name": /^[^\s=]+/,
                "attr-value": {
                  pattern: /=[\s\S]+/,
                  inside: {
                    value: {
                      pattern: /(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,
                      lookbehind: !0,
                      alias: [t, "language-" + t],
                      inside: a.languages[t],
                    },
                    punctuation: [
                      { pattern: /^=/, alias: "attr-equals" },
                      /"|'/,
                    ],
                  },
                },
              },
            });
          },
        }),
        (a.languages.html = a.languages.markup),
        (a.languages.mathml = a.languages.markup),
        (a.languages.svg = a.languages.markup),
        (a.languages.xml = a.languages.extend("markup", {})),
        (a.languages.ssml = a.languages.xml),
        (a.languages.atom = a.languages.xml),
        (a.languages.rss = a.languages.xml),
        (function (e) {
          var t =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            n = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: "punctuation",
              inside: null,
            },
            r = {
              bash: n,
              environment: { pattern: RegExp("\\$" + t), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + t),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/,
            };
          (e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function",
              },
              { pattern: /\b[\w-]+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0,
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                  lookbehind: !0,
                  alias: "constant",
                },
              },
              alias: "variable",
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: n },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              { pattern: /(^|[^$\\])'[^']*'/, lookbehind: !0, greedy: !0 },
              {
                pattern: /\$'(?:[^'\\]|\\[\s\S])*'/,
                greedy: !0,
                inside: { entity: r.entity },
              },
            ],
            environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
            variable: r.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern:
                /\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (n.inside = e.languages.bash);
          for (
            var a = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              o = r.variable[1].inside,
              i = 0;
            i < a.length;
            i++
          )
            o[a[i]] = e.languages.bash[a[i]];
          e.languages.shell = e.languages.bash;
        })(a),
        (a.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,
          boolean: /\b(?:false|true)\b/,
          function: /\b\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (a.languages.c = a.languages.extend("clike", {
          comment: {
            pattern:
              /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: !0,
          },
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
            lookbehind: !0,
          },
          keyword:
            /\b(?:_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|__attribute__|asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|inline|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|typeof|union|unsigned|void|volatile|while)\b/,
          function: /\b[a-z_]\w*(?=\s*\()/i,
          number:
            /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
        })),
        a.languages.insertBefore("c", "string", {
          char: {
            pattern: /'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n]){0,32}'/,
            greedy: !0,
          },
        }),
        a.languages.insertBefore("c", "string", {
          macro: {
            pattern:
              /(^[\t ]*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
            inside: {
              string: [
                { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                a.languages.c.string,
              ],
              char: a.languages.c.char,
              comment: a.languages.c.comment,
              "macro-name": [
                { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                {
                  pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                  lookbehind: !0,
                  alias: "function",
                },
              ],
              directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: "keyword",
              },
              "directive-hash": /^#/,
              punctuation: /##|\\(?=[\r\n])/,
              expression: { pattern: /\S[\s\S]*/, inside: a.languages.c },
            },
          },
        }),
        a.languages.insertBefore("c", "function", {
          constant:
            /\b(?:EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|__DATE__|__FILE__|__LINE__|__TIMESTAMP__|__TIME__|__func__|stderr|stdin|stdout)\b/,
        }),
        delete a.languages.c.boolean,
        (function (e) {
          var t =
              /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|char8_t|class|co_await|co_return|co_yield|compl|concept|const|const_cast|consteval|constexpr|constinit|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|final|float|for|friend|goto|if|import|inline|int|int16_t|int32_t|int64_t|int8_t|long|module|mutable|namespace|new|noexcept|nullptr|operator|override|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|uint16_t|uint32_t|uint64_t|uint8_t|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,
            n = /\b(?!<keyword>)\w+(?:\s*\.\s*\w+)*\b/.source.replace(
              /<keyword>/g,
              function () {
                return t.source;
              }
            );
          (e.languages.cpp = e.languages.extend("c", {
            "class-name": [
              {
                pattern: RegExp(
                  /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                    /<keyword>/g,
                    function () {
                      return t.source;
                    }
                  )
                ),
                lookbehind: !0,
              },
              /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
              /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
              /\b\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
            ],
            keyword: t,
            number: {
              pattern:
                /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
              greedy: !0,
            },
            operator:
              />>=?|<<=?|->|--|\+\+|&&|\|\||[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:false|true)\b/,
          })),
            e.languages.insertBefore("cpp", "string", {
              module: {
                pattern: RegExp(
                  /(\b(?:import|module)\s+)/.source +
                    "(?:" +
                    /"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|<[^<>\r\n]*>/.source +
                    "|" +
                    /<mod-name>(?:\s*:\s*<mod-name>)?|:\s*<mod-name>/.source.replace(
                      /<mod-name>/g,
                      function () {
                        return n;
                      }
                    ) +
                    ")"
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  string: /^[<"][\s\S]+/,
                  operator: /:/,
                  punctuation: /\./,
                },
              },
              "raw-string": {
                pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                alias: "string",
                greedy: !0,
              },
            }),
            e.languages.insertBefore("cpp", "keyword", {
              "generic-function": {
                pattern:
                  /\b(?!operator\b)[a-z_]\w*\s*<(?:[^<>]|<[^<>]*>)*>(?=\s*\()/i,
                inside: {
                  function: /^\w+/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: e.languages.cpp,
                  },
                },
              },
            }),
            e.languages.insertBefore("cpp", "operator", {
              "double-colon": { pattern: /::/, alias: "punctuation" },
            }),
            e.languages.insertBefore("cpp", "class-name", {
              "base-clause": {
                pattern:
                  /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                lookbehind: !0,
                greedy: !0,
                inside: e.languages.extend("cpp", {}),
              },
            }),
            e.languages.insertBefore(
              "inside",
              "double-colon",
              { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
              e.languages.cpp["base-clause"]
            );
        })(a),
        (function (e) {
          var t =
            /(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: "selector",
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                "\\burl\\((?:" +
                  t.source +
                  "|" +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ")\\)",
                "i"
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
              },
            },
            selector: {
              pattern: RegExp(
                "(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                  t.source +
                  ")*(?=\\s*\\{)"
              ),
              lookbehind: !0,
            },
            string: { pattern: t, greedy: !0 },
            property: {
              pattern:
                /(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
              lookbehind: !0,
            },
            important: /!important\b/i,
            function: {
              pattern: /(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,
              lookbehind: !0,
            },
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
          var n = e.languages.markup;
          n &&
            (n.tag.addInlined("style", "css"),
            n.tag.addAttribute("style", "css"));
        })(a),
        (function (e) {
          var t,
            n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css.selector = {
            pattern: e.languages.css.selector.pattern,
            lookbehind: !0,
            inside: (t = {
              "pseudo-element":
                /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
              "pseudo-class": /:[-\w]+/,
              class: /\.[-\w]+/,
              id: /#[-\w]+/,
              attribute: {
                pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                greedy: !0,
                inside: {
                  punctuation: /^\[|\]$/,
                  "case-sensitivity": {
                    pattern: /(\s)[si]$/i,
                    lookbehind: !0,
                    alias: "keyword",
                  },
                  namespace: {
                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                    lookbehind: !0,
                    inside: { punctuation: /\|$/ },
                  },
                  "attr-name": {
                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                    lookbehind: !0,
                  },
                  "attr-value": [
                    n,
                    {
                      pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                      lookbehind: !0,
                    },
                  ],
                  operator: /[|~*^$]?=/,
                },
              },
              "n-th": [
                {
                  pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                  lookbehind: !0,
                  inside: { number: /[\dn]+/, operator: /[+-]/ },
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
              ],
              combinator: />|\+|~|\|\|/,
              punctuation: /[(),]/,
            }),
          }),
            (e.languages.css.atrule.inside[
              "selector-function-argument"
            ].inside = t),
            e.languages.insertBefore("css", "property", {
              variable: {
                pattern:
                  /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0,
              },
            });
          var r = { pattern: /(\b\d+)(?:%|[a-z]+(?![\w-]))/, lookbehind: !0 },
            a = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            };
          e.languages.insertBefore("css", "function", {
            operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
            hexcode: { pattern: /\B#[\da-f]{3,8}\b/i, alias: "color" },
            color: [
              {
                pattern:
                  /(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,
                lookbehind: !0,
              },
              {
                pattern:
                  /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                  unit: r,
                  number: a,
                  function: /[\w-]+(?=\()/,
                  punctuation: /[(),]/,
                },
              },
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: r,
            number: a,
          });
        })(a),
        (a.languages.javascript = a.languages.extend("clike", {
          "class-name": [
            a.languages.clike["class-name"],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|\})\s*)catch\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number: {
            pattern: RegExp(
              /(^|[^\w$])/.source +
                "(?:" +
                /NaN|Infinity/.source +
                "|" +
                /0[bB][01]+(?:_[01]+)*n?/.source +
                "|" +
                /0[oO][0-7]+(?:_[0-7]+)*n?/.source +
                "|" +
                /0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source +
                "|" +
                /\d+(?:_\d+)*n/.source +
                "|" +
                /(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/
                  .source +
                ")" +
                /(?![\w$])/.source
            ),
            lookbehind: !0,
          },
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (a.languages.javascript["class-name"][0].pattern =
          /(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/),
        a.languages.insertBefore("javascript", "keyword", {
          regex: {
            pattern:
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: a.languages.regex,
              },
              "regex-delimiter": /^\/|\/$/,
              "regex-flags": /^[a-z]+$/,
            },
          },
          "function-variable": {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function",
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: a.languages.javascript,
            },
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              lookbehind: !0,
              inside: a.languages.javascript,
            },
            {
              pattern:
                /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: a.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: a.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        a.languages.insertBefore("javascript", "string", {
          hashbang: { pattern: /^#!.*/, greedy: !0, alias: "comment" },
          "template-string": {
            pattern:
              /`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,
            greedy: !0,
            inside: {
              "template-punctuation": { pattern: /^`|`$/, alias: "string" },
              interpolation: {
                pattern:
                  /((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,
                lookbehind: !0,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^\$\{|\}$/,
                    alias: "punctuation",
                  },
                  rest: a.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "string-property": {
            pattern:
              /((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
          },
        }),
        a.languages.insertBefore("javascript", "operator", {
          "literal-property": {
            pattern:
              /((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,
            lookbehind: !0,
            alias: "property",
          },
        }),
        a.languages.markup &&
          (a.languages.markup.tag.addInlined("script", "javascript"),
          a.languages.markup.tag.addAttribute(
            /on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/
              .source,
            "javascript"
          )),
        (a.languages.js = a.languages.javascript),
        (function (e) {
          var t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: "variable" };
          (e.languages.coffeescript = e.languages.extend("javascript", {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: { interpolation: n },
              },
            ],
            keyword:
              /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
          })),
            e.languages.insertBefore("coffeescript", "comment", {
              "multiline-comment": {
                pattern: /###[\s\S]+?###/,
                alias: "comment",
              },
              "block-regex": {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: "regex",
                inside: { comment: t, interpolation: n },
              },
            }),
            e.languages.insertBefore("coffeescript", "string", {
              "inline-javascript": {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: "punctuation" },
                  script: {
                    pattern: /[\s\S]+/,
                    alias: "language-javascript",
                    inside: e.languages.javascript,
                  },
                },
              },
              "multiline-string": [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
                {
                  pattern: /"""[\s\S]*?"""/,
                  greedy: !0,
                  alias: "string",
                  inside: { interpolation: n },
                },
              ],
            }),
            e.languages.insertBefore("coffeescript", "keyword", {
              property: /(?!\d)\w+(?=\s*:(?!:))/,
            }),
            delete e.languages.coffeescript["template-string"],
            (e.languages.coffee = e.languages.coffeescript);
        })(a),
        (function (e) {
          var t = /[*&][^\s[\]{},]+/,
            n =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            r =
              "(?:" +
              n.source +
              "(?:[ \t]+" +
              t.source +
              ")?|" +
              t.source +
              "(?:[ \t]+" +
              n.source +
              ")?)",
            a =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                }
              ),
            o = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function i(e, t) {
            t = (t || "").replace(/m/g, "") + "m";
            var n =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|\]|\}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return r;
                })
                .replace(/<<value>>/g, function () {
                  return e;
                });
            return RegExp(n, t);
          }
          (e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return r;
                  }
                )
              ),
              lookbehind: !0,
              alias: "string",
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return r;
                  })
                  .replace(/<<key>>/g, function () {
                    return "(?:" + a + "|" + o + ")";
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "atrule",
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: "important",
            },
            datetime: {
              pattern: i(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: "number",
            },
            boolean: {
              pattern: i(/false|true/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            null: {
              pattern: i(/null|~/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            string: { pattern: i(o), lookbehind: !0, greedy: !0 },
            number: {
              pattern: i(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                "i"
              ),
              lookbehind: !0,
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml);
        })(a),
        (function (e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?![\r\n]))/.source;
          function n(e) {
            return (
              (e = e.replace(/<inner>/g, function () {
                return t;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
            );
          }
          var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            a = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return r;
              }
            ),
            o =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (e.languages.markdown = e.languages.extend("markup", {})),
            e.languages.insertBefore("markdown", "prolog", {
              "front-matter-block": {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  "front-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: e.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp("^" + a + o + "(?:" + a + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + a + o + ")(?:" + a + ")*$"),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(r),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + a + ")" + o + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + a + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(r),
                        alias: "important",
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: "keyword",
                },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: n(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: n(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              "code-snippet": {
                pattern:
                  /(^|[^\\`])(?:``[^`\r\n]+(?:`[^`\r\n]+)*``(?!`)|`[^`\r\n]+`(?!`))/,
                lookbehind: !0,
                greedy: !0,
                alias: ["code", "keyword"],
              },
              url: {
                pattern: n(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (t) {
              ["url", "bold", "italic", "strike", "code-snippet"].forEach(
                function (n) {
                  t !== n &&
                    (e.languages.markdown[t].inside.content.inside[n] =
                      e.languages.markdown[n]);
                }
              );
            }),
            e.hooks.add("after-tokenize", function (e) {
              ("markdown" !== e.language && "md" !== e.language) ||
                (function e(t) {
                  if (t && "string" != typeof t)
                    for (var n = 0, r = t.length; n < r; n++) {
                      var a = t[n];
                      if ("code" === a.type) {
                        var o = a.content[1],
                          i = a.content[3];
                        if (
                          o &&
                          i &&
                          "code-language" === o.type &&
                          "code-block" === i.type &&
                          "string" == typeof o.content
                        ) {
                          var l = o.content
                              .replace(/\b#/g, "sharp")
                              .replace(/\b\+\+/g, "pp"),
                            s =
                              "language-" +
                              (l = (/[a-z][\w-]*/i.exec(l) || [
                                "",
                              ])[0].toLowerCase());
                          i.alias
                            ? "string" == typeof i.alias
                              ? (i.alias = [i.alias, s])
                              : i.alias.push(s)
                            : (i.alias = [s]);
                        }
                      } else e(a.content);
                    }
                })(e.tokens);
            }),
            e.hooks.add("wrap", function (t) {
              if ("code-block" === t.type) {
                for (var n = "", r = 0, a = t.classes.length; r < a; r++) {
                  var o = t.classes[r],
                    u = /language-(.+)/.exec(o);
                  if (u) {
                    n = u[1];
                    break;
                  }
                }
                var c,
                  d = e.languages[n];
                if (d)
                  t.content = e.highlight(
                    ((c = t.content),
                    c
                      .replace(i, "")
                      .replace(
                        /&(\w{1,8}|#x?[\da-f]{1,8});/gi,
                        function (e, t) {
                          var n;
                          if ("#" === (t = t.toLowerCase())[0])
                            return (
                              (n =
                                "x" === t[1]
                                  ? parseInt(t.slice(2), 16)
                                  : Number(t.slice(1))),
                              s(n)
                            );
                          var r = l[t];
                          return r || e;
                        }
                      )),
                    d,
                    n
                  );
                else if (n && "none" !== n && e.plugins.autoloader) {
                  var f =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(1e16 * Math.random());
                  (t.attributes.id = f),
                    e.plugins.autoloader.loadLanguages(n, function () {
                      var t = document.getElementById(f);
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[n],
                          n
                        ));
                    });
                }
              }
            });
          var i = RegExp(e.languages.markup.tag.pattern.source, "gi"),
            l = { amp: "&", lt: "<", gt: ">", quot: '"' },
            s = String.fromCodePoint || String.fromCharCode;
          e.languages.md = e.languages.markdown;
        })(a),
        (a.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: "string",
            inside: {
              "language-markdown": {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: a.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:false|true)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": {
            pattern:
              /\b[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          "atom-input": { pattern: /\b[A-Z]\w*Input\b/, alias: "class-name" },
          scalar: /\b(?:Boolean|Float|ID|Int|String)\b/,
          constant: /\b[A-Z][A-Z_\d]*\b/,
          "class-name": {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*|:\s*|\[)[A-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-mutation": {
            pattern: /(\bmutation\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          "definition-query": {
            pattern: /(\bquery\s+)[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          "property-query": /\w+(?=\s*\()/,
          object: /\w+(?=\s*\{)/,
          punctuation: /[!(){}\[\]:=,]/,
          property: /\w+/,
        }),
        a.hooks.add("after-tokenize", function (e) {
          if ("graphql" === e.language)
            for (
              var t = e.tokens.filter(function (e) {
                  return (
                    "string" != typeof e &&
                    "comment" !== e.type &&
                    "scalar" !== e.type
                  );
                }),
                n = 0;
              n < t.length;

            ) {
              var r = t[n++];
              if ("keyword" === r.type && "mutation" === r.content) {
                var a = [];
                if (
                  d(["definition-mutation", "punctuation"]) &&
                  "(" === c(1).content
                ) {
                  n += 2;
                  var o = f(/^\($/, /^\)$/);
                  if (-1 === o) continue;
                  for (; n < o; n++) {
                    var i = c(0);
                    "variable" === i.type &&
                      (p(i, "variable-input"), a.push(i.content));
                  }
                  n = o + 1;
                }
                if (
                  d(["punctuation", "property-query"]) &&
                  "{" === c(0).content &&
                  (n++, p(c(0), "property-mutation"), a.length > 0)
                ) {
                  var l = f(/^\{$/, /^\}$/);
                  if (-1 === l) continue;
                  for (var s = n; s < l; s++) {
                    var u = t[s];
                    "variable" === u.type &&
                      a.indexOf(u.content) >= 0 &&
                      p(u, "variable-input");
                  }
                }
              }
            }
          function c(e) {
            return t[n + e];
          }
          function d(e, t) {
            t = t || 0;
            for (var n = 0; n < e.length; n++) {
              var r = c(n + t);
              if (!r || r.type !== e[n]) return !1;
            }
            return !0;
          }
          function f(e, r) {
            for (var a = 1, o = n; o < t.length; o++) {
              var i = t[o],
                l = i.content;
              if ("punctuation" === i.type && "string" == typeof l)
                if (e.test(l)) a++;
                else if (r.test(l) && 0 === --a) return o;
            }
            return -1;
          }
          function p(e, t) {
            var n = e.alias;
            n ? Array.isArray(n) || (e.alias = n = [n]) : (e.alias = n = []),
              n.push(t);
          }
        }),
        (a.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          identifier: {
            pattern: /(^|[^@\\])`(?:\\[\s\S]|[^`\\]|``)*`/,
            greedy: !0,
            lookbehind: !0,
            inside: { punctuation: /^`|`$/ },
          },
          function:
            /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword:
            /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:COL|_INSERT)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:ING|S)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:FALSE|NULL|TRUE)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
          operator:
            /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|DIV|ILIKE|IN|IS|LIKE|NOT|OR|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var t = e.languages.javascript["template-string"],
            n = t.pattern.source,
            r = t.inside.interpolation,
            a = r.inside["interpolation-punctuation"],
            o = r.pattern.source;
          function i(t, r) {
            if (e.languages[t])
              return {
                pattern: RegExp("((?:" + r + ")\\s*)" + n),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  "template-punctuation": { pattern: /^`|`$/, alias: "string" },
                  "embedded-code": { pattern: /[\s\S]+/, alias: t },
                },
              };
          }
          function l(e, t) {
            return "___" + t.toUpperCase() + "_" + e + "___";
          }
          function s(t, n, r) {
            var a = { code: t, grammar: n, language: r };
            return (
              e.hooks.run("before-tokenize", a),
              (a.tokens = e.tokenize(a.code, a.grammar)),
              e.hooks.run("after-tokenize", a),
              a.tokens
            );
          }
          function u(t) {
            var n = {};
            n["interpolation-punctuation"] = a;
            var o = e.tokenize(t, n);
            if (3 === o.length) {
              var i = [1, 1];
              i.push.apply(i, s(o[1], e.languages.javascript, "javascript")),
                o.splice.apply(o, i);
            }
            return new e.Token("interpolation", o, r.alias, t);
          }
          function c(t, n, r) {
            var a = e.tokenize(t, {
                interpolation: { pattern: RegExp(o), lookbehind: !0 },
              }),
              i = 0,
              c = {},
              d = s(
                a
                  .map(function (e) {
                    if ("string" == typeof e) return e;
                    for (
                      var n, a = e.content;
                      -1 !== t.indexOf((n = l(i++, r)));

                    );
                    return (c[n] = a), n;
                  })
                  .join(""),
                n,
                r
              ),
              f = Object.keys(c);
            return (
              (i = 0),
              (function e(t) {
                for (var n = 0; n < t.length; n++) {
                  if (i >= f.length) return;
                  var r = t[n];
                  if ("string" == typeof r || "string" == typeof r.content) {
                    var a = f[i],
                      o = "string" == typeof r ? r : r.content,
                      l = o.indexOf(a);
                    if (-1 !== l) {
                      ++i;
                      var s = o.substring(0, l),
                        d = u(c[a]),
                        p = o.substring(l + a.length),
                        m = [];
                      if ((s && m.push(s), m.push(d), p)) {
                        var g = [p];
                        e(g), m.push.apply(m, g);
                      }
                      "string" == typeof r
                        ? (t.splice.apply(t, [n, 1].concat(m)),
                          (n += m.length - 1))
                        : (r.content = m);
                    }
                  } else {
                    var h = r.content;
                    Array.isArray(h) ? e(h) : e([h]);
                  }
                }
              })(d),
              new e.Token(r, d, "language-" + r, t)
            );
          }
          e.languages.javascript["template-string"] = [
            i(
              "css",
              /\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/
                .source
            ),
            i("html", /\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),
            i("svg", /\bsvg/.source),
            i("markdown", /\b(?:markdown|md)/.source),
            i("graphql", /\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),
            i("sql", /\bsql/.source),
            t,
          ].filter(Boolean);
          var d = {
            javascript: !0,
            js: !0,
            typescript: !0,
            ts: !0,
            jsx: !0,
            tsx: !0,
          };
          function f(e) {
            return "string" == typeof e
              ? e
              : Array.isArray(e)
              ? e.map(f).join("")
              : f(e.content);
          }
          e.hooks.add("after-tokenize", function (t) {
            t.language in d &&
              (function t(n) {
                for (var r = 0, a = n.length; r < a; r++) {
                  var o = n[r];
                  if ("string" != typeof o) {
                    var i = o.content;
                    if (Array.isArray(i))
                      if ("template-string" === o.type) {
                        var l = i[1];
                        if (
                          3 === i.length &&
                          "string" != typeof l &&
                          "embedded-code" === l.type
                        ) {
                          var s = f(l),
                            u = l.alias,
                            d = Array.isArray(u) ? u[0] : u,
                            p = e.languages[d];
                          if (!p) continue;
                          i[1] = c(s, p, d);
                        }
                      } else t(i);
                    else "string" != typeof i && t([i]);
                  }
                }
              })(t.tokens);
          });
        })(a),
        (function (e) {
          (e.languages.typescript = e.languages.extend("javascript", {
            "class-name": {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            builtin:
              /\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/,
          })),
            e.languages.typescript.keyword.push(
              /\b(?:abstract|declare|is|keyof|readonly|require)\b/,
              /\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,
              /\btype\b(?=\s*(?:[\{*]|$))/
            ),
            delete e.languages.typescript.parameter,
            delete e.languages.typescript["literal-property"];
          var t = e.languages.extend("typescript", {});
          delete t["class-name"],
            (e.languages.typescript["class-name"].inside = t),
            e.languages.insertBefore("typescript", "function", {
              decorator: {
                pattern: /@[$\w\xA0-\uFFFF]+/,
                inside: {
                  at: { pattern: /^@/, alias: "operator" },
                  function: /^[\s\S]+/,
                },
              },
              "generic-function": {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function:
                    /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: t,
                  },
                },
              },
            }),
            (e.languages.ts = e.languages.typescript);
        })(a),
        (function (e) {
          function t(e, t) {
            return RegExp(
              e.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              t
            );
          }
          e.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
              pattern: RegExp(
                "(\\.\\s*)" +
                  e.languages.javascript["function-variable"].pattern.source
              ),
              lookbehind: !0,
              alias: [
                "function-variable",
                "method",
                "function",
                "property-access",
              ],
            },
          }),
            e.languages.insertBefore("javascript", "function", {
              method: {
                pattern: RegExp(
                  "(\\.\\s*)" + e.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ["function", "property-access"],
              },
            }),
            e.languages.insertBefore("javascript", "constant", {
              "known-class-name": [
                {
                  pattern:
                    /\b(?:(?:Float(?:32|64)|(?:Int|Uint)(?:8|16|32)|Uint8Clamped)?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|(?:Weak)?(?:Map|Set)|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|WebAssembly)\b/,
                  alias: "class-name",
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
              ],
            }),
            e.languages.insertBefore("javascript", "keyword", {
              imports: {
                pattern: t(
                  /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                    .source
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              exports: {
                pattern: t(
                  /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                    .source
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
            }),
            e.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module",
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|finally|for|if|return|switch|throw|try|while|yield)\b/,
                alias: "control-flow",
              },
              { pattern: /\bnull\b/, alias: ["null", "nil"] },
              { pattern: /\bundefined\b/, alias: "nil" }
            ),
            e.languages.insertBefore("javascript", "operator", {
              spread: { pattern: /\.{3}/, alias: "operator" },
              arrow: { pattern: /=>/, alias: "operator" },
            }),
            e.languages.insertBefore("javascript", "punctuation", {
              "property-access": {
                pattern: t(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|(?:local|session)Storage|location|navigator|performance|window)\b/,
                alias: "variable",
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
            });
          for (
            var n = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access",
              ],
              r = 0;
            r < n.length;
            r++
          ) {
            var a = n[r],
              o = e.languages.javascript[a];
            "RegExp" === e.util.type(o) &&
              (o = e.languages.javascript[a] = { pattern: o });
            var i = o.inside || {};
            (o.inside = i), (i["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(a),
        (function (e) {
          var t = e.util.clone(e.languages.javascript),
            n = /(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,
            r = /(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,
            a = /(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;
          function o(e, t) {
            return (
              (e = e
                .replace(/<S>/g, function () {
                  return n;
                })
                .replace(/<BRACES>/g, function () {
                  return r;
                })
                .replace(/<SPREAD>/g, function () {
                  return a;
                })),
              RegExp(e, t)
            );
          }
          (a = o(a).source),
            (e.languages.jsx = e.languages.extend("markup", t)),
            (e.languages.jsx.tag.pattern = o(
              /<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/
                .source
            )),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/),
            (e.languages.jsx.tag.inside["attr-value"].pattern =
              /=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/),
            (e.languages.jsx.tag.inside.tag.inside["class-name"] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            (e.languages.jsx.tag.inside.comment = t.comment),
            e.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern: o(/<SPREAD>/.source),
                  inside: e.languages.jsx,
                },
              },
              e.languages.jsx.tag
            ),
            e.languages.insertBefore(
              "inside",
              "special-attr",
              {
                script: {
                  pattern: o(/=<BRACES>/.source),
                  alias: "language-javascript",
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?=\{)/,
                      alias: "punctuation",
                    },
                    rest: e.languages.jsx,
                  },
                },
              },
              e.languages.jsx.tag
            );
          var i = function (e) {
              return e
                ? "string" == typeof e
                  ? e
                  : "string" == typeof e.content
                  ? e.content
                  : e.content.map(i).join("")
                : "";
            },
            l = function (t) {
              for (var n = [], r = 0; r < t.length; r++) {
                var a = t[r],
                  o = !1;
                if (
                  ("string" != typeof a &&
                    ("tag" === a.type &&
                    a.content[0] &&
                    "tag" === a.content[0].type
                      ? "</" === a.content[0].content[0].content
                        ? n.length > 0 &&
                          n[n.length - 1].tagName ===
                            i(a.content[0].content[1]) &&
                          n.pop()
                        : "/>" === a.content[a.content.length - 1].content ||
                          n.push({
                            tagName: i(a.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : n.length > 0 &&
                        "punctuation" === a.type &&
                        "{" === a.content
                      ? n[n.length - 1].openedBraces++
                      : n.length > 0 &&
                        n[n.length - 1].openedBraces > 0 &&
                        "punctuation" === a.type &&
                        "}" === a.content
                      ? n[n.length - 1].openedBraces--
                      : (o = !0)),
                  (o || "string" == typeof a) &&
                    n.length > 0 &&
                    0 === n[n.length - 1].openedBraces)
                ) {
                  var s = i(a);
                  r < t.length - 1 &&
                    ("string" == typeof t[r + 1] ||
                      "plain-text" === t[r + 1].type) &&
                    ((s += i(t[r + 1])), t.splice(r + 1, 1)),
                    r > 0 &&
                      ("string" == typeof t[r - 1] ||
                        "plain-text" === t[r - 1].type) &&
                      ((s = i(t[r - 1]) + s), t.splice(r - 1, 1), r--),
                    (t[r] = new e.Token("plain-text", s, null, s));
                }
                a.content && "string" != typeof a.content && l(a.content);
              }
            };
          e.hooks.add("after-tokenize", function (e) {
            ("jsx" !== e.language && "tsx" !== e.language) || l(e.tokens);
          });
        })(a),
        (function (e) {
          e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
          };
          var t = {
            "deleted-sign": "-",
            "deleted-arrow": "<",
            "inserted-sign": "+",
            "inserted-arrow": ">",
            unchanged: " ",
            diff: "!",
          };
          Object.keys(t).forEach(function (n) {
            var r = t[n],
              a = [];
            /^\w+$/.test(n) || a.push(/\w+/.exec(n)[0]),
              "diff" === n && a.push("bold"),
              (e.languages.diff[n] = {
                pattern: RegExp(
                  "^(?:[" + r + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
                  "m"
                ),
                alias: a,
                inside: {
                  line: {
                    pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                    lookbehind: !0,
                  },
                  prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] },
                },
              });
          }),
            Object.defineProperty(e.languages.diff, "PREFIXES", { value: t });
        })(a),
        (a.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-\u2013].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/ },
          },
          coord: /^@@.*@@$/m,
          "commit-sha1": /^commit \w{40}$/m,
        }),
        (a.languages.go = a.languages.extend("clike", {
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^"\\\r\n])*"|`[^`]*`/,
            lookbehind: !0,
            greedy: !0,
          },
          keyword:
            /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          boolean: /\b(?:_|false|iota|nil|true)\b/,
          number: [
            /\b0(?:b[01_]+|o[0-7_]+)i?\b/i,
            /\b0x(?:[a-f\d_]+(?:\.[a-f\d_]*)?|\.[a-f\d_]+)(?:p[+-]?\d+(?:_\d+)*)?i?(?!\w)/i,
            /(?:\b\d[\d_]*(?:\.[\d_]*)?|\B\.\d[\d_]*)(?:e[+-]?[\d_]+)?i?(?!\w)/i,
          ],
          operator:
            /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          builtin:
            /\b(?:append|bool|byte|cap|close|complex|complex(?:64|128)|copy|delete|error|float(?:32|64)|u?int(?:8|16|32|64)?|imag|len|make|new|panic|print(?:ln)?|real|recover|rune|string|uintptr)\b/,
        })),
        a.languages.insertBefore("go", "string", {
          char: { pattern: /'(?:\\.|[^'\\\r\n]){0,10}'/, greedy: !0 },
        }),
        delete a.languages.go["class-name"],
        (function (e) {
          function t(e, t) {
            return "___" + e.toUpperCase() + t + "___";
          }
          Object.defineProperties((e.languages["markup-templating"] = {}), {
            buildPlaceholders: {
              value: function (n, r, a, o) {
                if (n.language === r) {
                  var i = (n.tokenStack = []);
                  (n.code = n.code.replace(a, function (e) {
                    if ("function" == typeof o && !o(e)) return e;
                    for (
                      var a, l = i.length;
                      -1 !== n.code.indexOf((a = t(r, l)));

                    )
                      ++l;
                    return (i[l] = e), a;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (n, r) {
                if (n.language === r && n.tokenStack) {
                  n.grammar = e.languages[r];
                  var a = 0,
                    o = Object.keys(n.tokenStack);
                  !(function i(l) {
                    for (var s = 0; s < l.length && !(a >= o.length); s++) {
                      var u = l[s];
                      if (
                        "string" == typeof u ||
                        (u.content && "string" == typeof u.content)
                      ) {
                        var c = o[a],
                          d = n.tokenStack[c],
                          f = "string" == typeof u ? u : u.content,
                          p = t(r, c),
                          m = f.indexOf(p);
                        if (m > -1) {
                          ++a;
                          var g = f.substring(0, m),
                            h = new e.Token(
                              r,
                              e.tokenize(d, n.grammar),
                              "language-" + r,
                              d
                            ),
                            b = f.substring(m + p.length),
                            v = [];
                          g && v.push.apply(v, i([g])),
                            v.push(h),
                            b && v.push.apply(v, i([b])),
                            "string" == typeof u
                              ? l.splice.apply(l, [s, 1].concat(v))
                              : (u.content = v);
                        }
                      } else u.content && i(u.content);
                    }
                    return l;
                  })(n.tokens);
                }
              },
            },
          });
        })(a),
        (function (e) {
          (e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/, alias: "punctuation" },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number:
              /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:false|true)\b/,
            block: {
              pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/,
              lookbehind: !0,
              alias: "keyword",
            },
            brackets: {
              pattern: /\[[^\]]+\]/,
              inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
            },
            punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
          }),
            e.hooks.add("before-tokenize", function (t) {
              e.languages["markup-templating"].buildPlaceholders(
                t,
                "handlebars",
                /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
              );
            }),
            e.hooks.add("after-tokenize", function (t) {
              e.languages["markup-templating"].tokenizePlaceholders(
                t,
                "handlebars"
              );
            }),
            (e.languages.hbs = e.languages.handlebars);
        })(a),
        (a.languages.json = {
          property: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?=\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          string: {
            pattern: /(^|[^\\])"(?:\\.|[^\\"\r\n])*"(?!\s*:)/,
            lookbehind: !0,
            greedy: !0,
          },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
        (a.languages.webmanifest = a.languages.json),
        (a.languages.less = a.languages.extend("css", {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern:
              /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern:
              /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/,
          operator: /[+\-*\/]/,
        })),
        a.languages.insertBefore("less", "property", {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          "mixin-usage": {
            pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
            lookbehind: !0,
            alias: "function",
          },
        }),
        (a.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "builtin-target": {
            pattern: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
            alias: "builtin",
          },
          target: {
            pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
            alias: "symbol",
            inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword:
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
          function: {
            pattern:
              /(\()(?:abspath|addsuffix|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:list|s)?)(?=[ \t])/,
            lookbehind: !0,
          },
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (a.languages.objectivec = a.languages.extend("c", {
          string: {
            pattern: /@?"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
            greedy: !0,
          },
          keyword:
            /\b(?:asm|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|in|inline|int|long|register|return|self|short|signed|sizeof|static|struct|super|switch|typedef|typeof|union|unsigned|void|volatile|while)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete a.languages.objectivec["class-name"],
        (a.languages.objc = a.languages.objectivec),
        (a.languages.ocaml = {
          comment: { pattern: /\(\*[\s\S]*?\*\)/, greedy: !0 },
          char: {
            pattern: /'(?:[^\\\r\n']|\\(?:.|[ox]?[0-9a-f]{1,3}))'/i,
            greedy: !0,
          },
          string: [
            { pattern: /"(?:\\(?:[\s\S]|\r\n)|[^\\\r\n"])*"/, greedy: !0 },
            { pattern: /\{([a-z_]*)\|[\s\S]*?\|\1\}/, greedy: !0 },
          ],
          number: [
            /\b(?:0b[01][01_]*|0o[0-7][0-7_]*)\b/i,
            /\b0x[a-f0-9][a-f0-9_]*(?:\.[a-f0-9_]*)?(?:p[+-]?\d[\d_]*)?(?!\w)/i,
            /\b\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?\d[\d_]*)?(?!\w)/i,
          ],
          directive: { pattern: /\B#\w+/, alias: "property" },
          label: { pattern: /\B~\w+/, alias: "property" },
          "type-variable": { pattern: /\B'\w+/, alias: "function" },
          variant: { pattern: /`\w+/, alias: "symbol" },
          keyword:
            /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          "operator-like-punctuation": {
            pattern: /\[[<>|]|[>|]\]|\{<|>\}/,
            alias: "punctuation",
          },
          operator:
            /\.[.~]|:[=>]|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
          punctuation: /;;|::|[(){}\[\].,:;#]|\b_\b/,
        }),
        (a.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0, greedy: !0 },
          "string-interpolation": {
            pattern:
              /(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern:
                  /((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,
                lookbehind: !0,
                inside: {
                  "format-spec": {
                    pattern: /(:)[^:(){}]+(?=\}$)/,
                    lookbehind: !0,
                  },
                  "conversion-option": {
                    pattern: /![sra](?=[:}]$)/,
                    alias: "punctuation",
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "triple-quoted-string": {
            pattern: /(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,
            greedy: !0,
            alias: "string",
          },
          string: {
            pattern: /(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^[\t ]*)@\w+(?:\.\w+)*/m,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: { punctuation: /\./ },
          },
          keyword:
            /\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin:
            /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:False|None|True)\b/,
          number:
            /\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,
          operator: /[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (a.languages.python[
          "string-interpolation"
        ].inside.interpolation.inside.rest = a.languages.python),
        (a.languages.py = a.languages.python),
        (a.languages.reason = a.languages.extend("clike", {
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          "class-name": /\b[A-Z]\w*/,
          keyword:
            /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator:
            /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:asr|land|lor|lsl|lsr|lxor|mod)\b/,
        })),
        a.languages.insertBefore("reason", "class-name", {
          char: {
            pattern:
              /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            greedy: !0,
          },
          constructor: /\b[A-Z]\w*\b(?!\s*\.)/,
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" },
        }),
        delete a.languages.reason.function,
        (function (e) {
          (e.languages.sass = e.languages.extend("css", {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
              lookbehind: !0,
              greedy: !0,
            },
          })),
            e.languages.insertBefore("sass", "atrule", {
              "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                greedy: !0,
                inside: { atrule: /(?:@[\w-]+|[+=])/ },
              },
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|not|or)\b/,
              { pattern: /(\s)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore("sass", "property", {
            "variable-line": {
              pattern: /^[ \t]*\$.+/m,
              greedy: !0,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            "property-line": {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
              greedy: !0,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore("sass", "punctuation", {
              selector: {
                pattern:
                  /^([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/m,
                lookbehind: !0,
                greedy: !0,
              },
            });
        })(a),
        (a.languages.scss = a.languages.extend("css", {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern:
              /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]))/,
            inside: {
              parent: { pattern: /&/, alias: "important" },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        a.languages.insertBefore("scss", "atrule", {
          keyword: [
            /@(?:content|debug|each|else(?: if)?|extend|for|forward|function|if|import|include|mixin|return|use|warn|while)\b/i,
            { pattern: /( )(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        a.languages.insertBefore("scss", "important", {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        a.languages.insertBefore("scss", "function", {
          "module-modifier": {
            pattern: /\b(?:as|hide|show|with)\b/i,
            alias: "keyword",
          },
          placeholder: { pattern: /%[-\w]+/, alias: "selector" },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword",
          },
          boolean: /\b(?:false|true)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|not|or)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (a.languages.scss.atrule.inside.rest = a.languages.scss),
        (function (e) {
          var t = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
            n = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            },
            r = {
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
              },
              url: { pattern: /\burl\((["']?).*?\1\)/i, greedy: !0 },
              string: {
                pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                greedy: !0,
              },
              interpolation: null,
              func: null,
              important: /\B!(?:important|optional)\b/i,
              keyword: {
                pattern:
                  /(^|\s+)(?:(?:else|for|if|return|unless)(?=\s|$)|@[\w-]+)/,
                lookbehind: !0,
              },
              hexcode: /#[\da-f]{3,6}/i,
              color: [
                /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                {
                  pattern:
                    /\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                  inside: {
                    unit: t,
                    number: n,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/,
                  },
                },
              ],
              entity: /\\[\da-f]{1,8}/i,
              unit: t,
              boolean: /\b(?:false|true)\b/,
              operator: [
                /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
              ],
              number: n,
              punctuation: /[{}()\[\];:,]/,
            };
          (r.interpolation = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: "variable",
            inside: {
              delimiter: { pattern: /^\{|\}$/, alias: "punctuation" },
              rest: r,
            },
          }),
            (r.func = {
              pattern: /[\w-]+\([^)]*\).*/,
              inside: { function: /^[^(]+/, rest: r },
            }),
            (e.languages.stylus = {
              "atrule-declaration": {
                pattern: /(^[ \t]*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: r },
              },
              "variable-declaration": {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: r },
              },
              statement: {
                pattern: /(^[ \t]*)(?:else|for|if|return|unless)[ \t].+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: r },
              },
              "property-declaration": {
                pattern:
                  /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,]$(?!(?:\r?\n|\r)(?:\{|\2[ \t])))/m,
                lookbehind: !0,
                inside: {
                  property: {
                    pattern: /^[^\s:]+/,
                    inside: { interpolation: r.interpolation },
                  },
                  rest: r,
                },
              },
              selector: {
                pattern:
                  /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t])))/m,
                lookbehind: !0,
                inside: {
                  interpolation: r.interpolation,
                  comment: r.comment,
                  punctuation: /[{},]/,
                },
              },
              func: r.func,
              string: r.string,
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
                greedy: !0,
              },
              interpolation: r.interpolation,
              punctuation: /[{}()\[\];:.]/,
            });
        })(a),
        (function (e) {
          var t = e.util.clone(e.languages.typescript);
          (e.languages.tsx = e.languages.extend("jsx", t)),
            delete e.languages.tsx.parameter,
            delete e.languages.tsx["literal-property"];
          var n = e.languages.tsx.tag;
          (n.pattern = RegExp(
            /(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")",
            n.pattern.flags
          )),
            (n.lookbehind = !0);
        })(a),
        (a.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern:
                /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|neg?|nearest|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|sqrt|store(?:8|16|32)?|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^`|~]+/,
          number:
            /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        });
      const o = a;
    },
    1312: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => s, T: () => l });
      var r = n(6540);
      function a(e, t) {
        const n = e.split(/(\{\w+\})/).map((e, n) => {
          if (n % 2 == 1) {
            const n = t?.[e.slice(1, -1)];
            if (void 0 !== n) return n;
          }
          return e;
        });
        return n.some((e) => (0, r.isValidElement)(e))
          ? n
              .map((e, t) =>
                (0, r.isValidElement)(e) ? r.cloneElement(e, { key: t }) : e
              )
              .filter((e) => "" !== e)
          : n.join("");
      }
      var o = n(2654);
      function i(e) {
        let { id: t, message: n } = e;
        if (void 0 === t && void 0 === n)
          throw new Error(
            "Docusaurus translation declarations must have at least a translation id or a default translation message"
          );
        return o[t ?? n] ?? n ?? t;
      }
      function l(e, t) {
        let { message: n, id: r } = e;
        return a(i({ message: n, id: r }), t);
      }
      function s(e) {
        let { children: t, id: n, values: o } = e;
        if (t && "string" != typeof t)
          throw (
            (console.warn("Illegal <Translate> children", t),
            new Error(
              "The Docusaurus <Translate> component only accept simple string values"
            ))
          );
        const l = i({ message: t, id: n });
        return r.createElement(r.Fragment, null, a(l, o));
      }
    },
    1422: (e, t, n) => {
      "use strict";
      n.d(t, { N: () => h, u: () => s });
      var r = n(8168),
        a = n(6540),
        o = n(8193),
        i = n(3109);
      const l = "ease-in-out";
      function s(e) {
        let { initialState: t } = e;
        const [n, r] = (0, a.useState)(t ?? !1),
          o = (0, a.useCallback)(() => {
            r((e) => !e);
          }, []);
        return { collapsed: n, setCollapsed: r, toggleCollapsed: o };
      }
      const u = { display: "none", overflow: "hidden", height: "0px" },
        c = { display: "block", overflow: "visible", height: "auto" };
      function d(e, t) {
        const n = t ? u : c;
        (e.style.display = n.display),
          (e.style.overflow = n.overflow),
          (e.style.height = n.height);
      }
      function f(e) {
        let { collapsibleRef: t, collapsed: n, animation: r } = e;
        const o = (0, a.useRef)(!1);
        (0, a.useEffect)(() => {
          const e = t.current;
          function a() {
            const t = e.scrollHeight,
              n =
                r?.duration ??
                (function (e) {
                  if ((0, i.O)()) return 1;
                  const t = e / 36;
                  return Math.round(10 * (4 + 15 * t ** 0.25 + t / 5));
                })(t);
            return {
              transition: `height ${n}ms ${r?.easing ?? l}`,
              height: `${t}px`,
            };
          }
          function s() {
            const t = a();
            (e.style.transition = t.transition), (e.style.height = t.height);
          }
          if (!o.current) return d(e, n), void (o.current = !0);
          return (
            (e.style.willChange = "height"),
            (function () {
              const t = requestAnimationFrame(() => {
                n
                  ? (s(),
                    requestAnimationFrame(() => {
                      (e.style.height = u.height),
                        (e.style.overflow = u.overflow);
                    }))
                  : ((e.style.display = "block"),
                    requestAnimationFrame(() => {
                      s();
                    }));
              });
              return () => cancelAnimationFrame(t);
            })()
          );
        }, [t, n, r]);
      }
      function p(e) {
        if (!o.A.canUseDOM) return e ? u : c;
      }
      function m(e) {
        let {
          as: t = "div",
          collapsed: n,
          children: r,
          animation: o,
          onCollapseTransitionEnd: i,
          className: l,
          disableSSRStyle: s,
        } = e;
        const u = (0, a.useRef)(null);
        return (
          f({ collapsibleRef: u, collapsed: n, animation: o }),
          a.createElement(
            t,
            {
              ref: u,
              style: s ? void 0 : p(n),
              onTransitionEnd: (e) => {
                "height" === e.propertyName && (d(u.current, n), i?.(n));
              },
              className: l,
            },
            r
          )
        );
      }
      function g(e) {
        let { collapsed: t, ...n } = e;
        const [o, i] = (0, a.useState)(!t),
          [l, s] = (0, a.useState)(t);
        return (
          (0, a.useLayoutEffect)(() => {
            t || i(!0);
          }, [t]),
          (0, a.useLayoutEffect)(() => {
            o && s(t);
          }, [o, t]),
          o ? a.createElement(m, (0, r.A)({}, n, { collapsed: l })) : null
        );
      }
      function h(e) {
        let { lazy: t, ...n } = e;
        const r = t ? g : m;
        return a.createElement(r, n);
      }
    },
    1463: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var r = n(6540),
        a = n(5260);
      function o(e) {
        let { locale: t, version: n, tag: o } = e;
        const i = t;
        return r.createElement(
          a.A,
          null,
          t &&
            r.createElement("meta", { name: "docusaurus_locale", content: t }),
          n &&
            r.createElement("meta", { name: "docusaurus_version", content: n }),
          o && r.createElement("meta", { name: "docusaurus_tag", content: o }),
          i &&
            r.createElement("meta", { name: "docsearch:language", content: i }),
          n &&
            r.createElement("meta", { name: "docsearch:version", content: n }),
          o &&
            r.createElement("meta", {
              name: "docsearch:docusaurus_tag",
              content: o,
            })
        );
      }
    },
    1513: (e, t, n) => {
      "use strict";
      n.d(t, {
        zR: () => w,
        TM: () => A,
        yJ: () => p,
        sC: () => _,
        AO: () => f,
      });
      var r = n(8168);
      function a(e) {
        return "/" === e.charAt(0);
      }
      function o(e, t) {
        for (var n = t, r = n + 1, a = e.length; r < a; n += 1, r += 1)
          e[n] = e[r];
        e.pop();
      }
      const i = function (e, t) {
        void 0 === t && (t = "");
        var n,
          r = (e && e.split("/")) || [],
          i = (t && t.split("/")) || [],
          l = e && a(e),
          s = t && a(t),
          u = l || s;
        if (
          (e && a(e) ? (i = r) : r.length && (i.pop(), (i = i.concat(r))),
          !i.length)
        )
          return "/";
        if (i.length) {
          var c = i[i.length - 1];
          n = "." === c || ".." === c || "" === c;
        } else n = !1;
        for (var d = 0, f = i.length; f >= 0; f--) {
          var p = i[f];
          "." === p
            ? o(i, f)
            : ".." === p
            ? (o(i, f), d++)
            : d && (o(i, f), d--);
        }
        if (!u) for (; d--; d) i.unshift("..");
        !u || "" === i[0] || (i[0] && a(i[0])) || i.unshift("");
        var m = i.join("/");
        return n && "/" !== m.substr(-1) && (m += "/"), m;
      };
      var l = n(1561);
      function s(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function u(e) {
        return "/" === e.charAt(0) ? e.substr(1) : e;
      }
      function c(e, t) {
        return (function (e, t) {
          return (
            0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
            -1 !== "/?#".indexOf(e.charAt(t.length))
          );
        })(e, t)
          ? e.substr(t.length)
          : e;
      }
      function d(e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function f(e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          a = t || "/";
        return (
          n && "?" !== n && (a += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (a += "#" === r.charAt(0) ? r : "#" + r),
          a
        );
      }
      function p(e, t, n, a) {
        var o;
        "string" == typeof e
          ? ((o = (function (e) {
              var t = e || "/",
                n = "",
                r = "",
                a = t.indexOf("#");
              -1 !== a && ((r = t.substr(a)), (t = t.substr(0, a)));
              var o = t.indexOf("?");
              return (
                -1 !== o && ((n = t.substr(o)), (t = t.substr(0, o))),
                {
                  pathname: t,
                  search: "?" === n ? "" : n,
                  hash: "#" === r ? "" : r,
                }
              );
            })(e)),
            (o.state = t))
          : (void 0 === (o = (0, r.A)({}, e)).pathname && (o.pathname = ""),
            o.search
              ? "?" !== o.search.charAt(0) && (o.search = "?" + o.search)
              : (o.search = ""),
            o.hash
              ? "#" !== o.hash.charAt(0) && (o.hash = "#" + o.hash)
              : (o.hash = ""),
            void 0 !== t && void 0 === o.state && (o.state = t));
        try {
          o.pathname = decodeURI(o.pathname);
        } catch (l) {
          throw l instanceof URIError
            ? new URIError(
                'Pathname "' +
                  o.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : l;
        }
        return (
          n && (o.key = n),
          a
            ? o.pathname
              ? "/" !== o.pathname.charAt(0) &&
                (o.pathname = i(o.pathname, a.pathname))
              : (o.pathname = a.pathname)
            : o.pathname || (o.pathname = "/"),
          o
        );
      }
      function m() {
        var e = null;
        var t = [];
        return {
          setPrompt: function (t) {
            return (
              (e = t),
              function () {
                e === t && (e = null);
              }
            );
          },
          confirmTransitionTo: function (t, n, r, a) {
            if (null != e) {
              var o = "function" == typeof e ? e(t, n) : e;
              "string" == typeof o
                ? "function" == typeof r
                  ? r(o, a)
                  : a(!0)
                : a(!1 !== o);
            } else a(!0);
          },
          appendListener: function (e) {
            var n = !0;
            function r() {
              n && e.apply(void 0, arguments);
            }
            return (
              t.push(r),
              function () {
                (n = !1),
                  (t = t.filter(function (e) {
                    return e !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            t.forEach(function (e) {
              return e.apply(void 0, n);
            });
          },
        };
      }
      var g = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      function h(e, t) {
        t(window.confirm(e));
      }
      var b = "popstate",
        v = "hashchange";
      function y() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      function w(e) {
        void 0 === e && (e = {}), g || (0, l.A)(!1);
        var t,
          n = window.history,
          a =
            ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") &&
              -1 === t.indexOf("Android 4.0")) ||
              -1 === t.indexOf("Mobile Safari") ||
              -1 !== t.indexOf("Chrome") ||
              -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
          o = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          i = e,
          u = i.forceRefresh,
          w = void 0 !== u && u,
          k = i.getUserConfirmation,
          E = void 0 === k ? h : k,
          S = i.keyLength,
          x = void 0 === S ? 6 : S,
          T = e.basename ? d(s(e.basename)) : "";
        function A(e) {
          var t = e || {},
            n = t.key,
            r = t.state,
            a = window.location,
            o = a.pathname + a.search + a.hash;
          return T && (o = c(o, T)), p(o, r, n);
        }
        function C() {
          return Math.random().toString(36).substr(2, x);
        }
        var _ = m();
        function L(e) {
          (0, r.A)(U, e),
            (U.length = n.length),
            _.notifyListeners(U.location, U.action);
        }
        function R(e) {
          (function (e) {
            return (
              void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
            );
          })(e) || O(A(e.state));
        }
        function N() {
          O(A(y()));
        }
        var P = !1;
        function O(e) {
          if (P) (P = !1), L();
          else {
            _.confirmTransitionTo(e, "POP", E, function (t) {
              t
                ? L({ action: "POP", location: e })
                : (function (e) {
                    var t = U.location,
                      n = I.indexOf(t.key);
                    -1 === n && (n = 0);
                    var r = I.indexOf(e.key);
                    -1 === r && (r = 0);
                    var a = n - r;
                    a && ((P = !0), B(a));
                  })(e);
            });
          }
        }
        var D = A(y()),
          I = [D.key];
        function M(e) {
          return T + f(e);
        }
        function B(e) {
          n.go(e);
        }
        var F = 0;
        function j(e) {
          1 === (F += e) && 1 === e
            ? (window.addEventListener(b, R),
              o && window.addEventListener(v, N))
            : 0 === F &&
              (window.removeEventListener(b, R),
              o && window.removeEventListener(v, N));
        }
        var z = !1;
        var U = {
          length: n.length,
          action: "POP",
          location: D,
          createHref: M,
          push: function (e, t) {
            var r = "PUSH",
              o = p(e, t, C(), U.location);
            _.confirmTransitionTo(o, r, E, function (e) {
              if (e) {
                var t = M(o),
                  i = o.key,
                  l = o.state;
                if (a)
                  if ((n.pushState({ key: i, state: l }, null, t), w))
                    window.location.href = t;
                  else {
                    var s = I.indexOf(U.location.key),
                      u = I.slice(0, s + 1);
                    u.push(o.key), (I = u), L({ action: r, location: o });
                  }
                else window.location.href = t;
              }
            });
          },
          replace: function (e, t) {
            var r = "REPLACE",
              o = p(e, t, C(), U.location);
            _.confirmTransitionTo(o, r, E, function (e) {
              if (e) {
                var t = M(o),
                  i = o.key,
                  l = o.state;
                if (a)
                  if ((n.replaceState({ key: i, state: l }, null, t), w))
                    window.location.replace(t);
                  else {
                    var s = I.indexOf(U.location.key);
                    -1 !== s && (I[s] = o.key), L({ action: r, location: o });
                  }
                else window.location.replace(t);
              }
            });
          },
          go: B,
          goBack: function () {
            B(-1);
          },
          goForward: function () {
            B(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = _.setPrompt(e);
            return (
              z || (j(1), (z = !0)),
              function () {
                return z && ((z = !1), j(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = _.appendListener(e);
            return (
              j(1),
              function () {
                j(-1), t();
              }
            );
          },
        };
        return U;
      }
      var k = "hashchange",
        E = {
          hashbang: {
            encodePath: function (e) {
              return "!" === e.charAt(0) ? e : "!/" + u(e);
            },
            decodePath: function (e) {
              return "!" === e.charAt(0) ? e.substr(1) : e;
            },
          },
          noslash: { encodePath: u, decodePath: s },
          slash: { encodePath: s, decodePath: s },
        };
      function S(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.slice(0, t);
      }
      function x() {
        var e = window.location.href,
          t = e.indexOf("#");
        return -1 === t ? "" : e.substring(t + 1);
      }
      function T(e) {
        window.location.replace(S(window.location.href) + "#" + e);
      }
      function A(e) {
        void 0 === e && (e = {}), g || (0, l.A)(!1);
        var t = window.history,
          n = (window.navigator.userAgent.indexOf("Firefox"), e),
          a = n.getUserConfirmation,
          o = void 0 === a ? h : a,
          i = n.hashType,
          u = void 0 === i ? "slash" : i,
          b = e.basename ? d(s(e.basename)) : "",
          v = E[u],
          y = v.encodePath,
          w = v.decodePath;
        function A() {
          var e = w(x());
          return b && (e = c(e, b)), p(e);
        }
        var C = m();
        function _(e) {
          (0, r.A)(z, e),
            (z.length = t.length),
            C.notifyListeners(z.location, z.action);
        }
        var L = !1,
          R = null;
        function N() {
          var e,
            t,
            n = x(),
            r = y(n);
          if (n !== r) T(r);
          else {
            var a = A(),
              i = z.location;
            if (
              !L &&
              ((t = a),
              (e = i).pathname === t.pathname &&
                e.search === t.search &&
                e.hash === t.hash)
            )
              return;
            if (R === f(a)) return;
            (R = null),
              (function (e) {
                if (L) (L = !1), _();
                else {
                  var t = "POP";
                  C.confirmTransitionTo(e, t, o, function (n) {
                    n
                      ? _({ action: t, location: e })
                      : (function (e) {
                          var t = z.location,
                            n = I.lastIndexOf(f(t));
                          -1 === n && (n = 0);
                          var r = I.lastIndexOf(f(e));
                          -1 === r && (r = 0);
                          var a = n - r;
                          a && ((L = !0), M(a));
                        })(e);
                  });
                }
              })(a);
          }
        }
        var P = x(),
          O = y(P);
        P !== O && T(O);
        var D = A(),
          I = [f(D)];
        function M(e) {
          t.go(e);
        }
        var B = 0;
        function F(e) {
          1 === (B += e) && 1 === e
            ? window.addEventListener(k, N)
            : 0 === B && window.removeEventListener(k, N);
        }
        var j = !1;
        var z = {
          length: t.length,
          action: "POP",
          location: D,
          createHref: function (e) {
            var t = document.querySelector("base"),
              n = "";
            return (
              t && t.getAttribute("href") && (n = S(window.location.href)),
              n + "#" + y(b + f(e))
            );
          },
          push: function (e, t) {
            var n = "PUSH",
              r = p(e, void 0, void 0, z.location);
            C.confirmTransitionTo(r, n, o, function (e) {
              if (e) {
                var t = f(r),
                  a = y(b + t);
                if (x() !== a) {
                  (R = t),
                    (function (e) {
                      window.location.hash = e;
                    })(a);
                  var o = I.lastIndexOf(f(z.location)),
                    i = I.slice(0, o + 1);
                  i.push(t), (I = i), _({ action: n, location: r });
                } else _();
              }
            });
          },
          replace: function (e, t) {
            var n = "REPLACE",
              r = p(e, void 0, void 0, z.location);
            C.confirmTransitionTo(r, n, o, function (e) {
              if (e) {
                var t = f(r),
                  a = y(b + t);
                x() !== a && ((R = t), T(a));
                var o = I.indexOf(f(z.location));
                -1 !== o && (I[o] = t), _({ action: n, location: r });
              }
            });
          },
          go: M,
          goBack: function () {
            M(-1);
          },
          goForward: function () {
            M(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = C.setPrompt(e);
            return (
              j || (F(1), (j = !0)),
              function () {
                return j && ((j = !1), F(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = C.appendListener(e);
            return (
              F(1),
              function () {
                F(-1), t();
              }
            );
          },
        };
        return z;
      }
      function C(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function _(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.getUserConfirmation,
          a = t.initialEntries,
          o = void 0 === a ? ["/"] : a,
          i = t.initialIndex,
          l = void 0 === i ? 0 : i,
          s = t.keyLength,
          u = void 0 === s ? 6 : s,
          c = m();
        function d(e) {
          (0, r.A)(w, e),
            (w.length = w.entries.length),
            c.notifyListeners(w.location, w.action);
        }
        function g() {
          return Math.random().toString(36).substr(2, u);
        }
        var h = C(l, 0, o.length - 1),
          b = o.map(function (e) {
            return p(e, void 0, "string" == typeof e ? g() : e.key || g());
          }),
          v = f;
        function y(e) {
          var t = C(w.index + e, 0, w.entries.length - 1),
            r = w.entries[t];
          c.confirmTransitionTo(r, "POP", n, function (e) {
            e ? d({ action: "POP", location: r, index: t }) : d();
          });
        }
        var w = {
          length: b.length,
          action: "POP",
          location: b[h],
          index: h,
          entries: b,
          createHref: v,
          push: function (e, t) {
            var r = "PUSH",
              a = p(e, t, g(), w.location);
            c.confirmTransitionTo(a, r, n, function (e) {
              if (e) {
                var t = w.index + 1,
                  n = w.entries.slice(0);
                n.length > t ? n.splice(t, n.length - t, a) : n.push(a),
                  d({ action: r, location: a, index: t, entries: n });
              }
            });
          },
          replace: function (e, t) {
            var r = "REPLACE",
              a = p(e, t, g(), w.location);
            c.confirmTransitionTo(a, r, n, function (e) {
              e && ((w.entries[w.index] = a), d({ action: r, location: a }));
            });
          },
          go: y,
          goBack: function () {
            y(-1);
          },
          goForward: function () {
            y(1);
          },
          canGo: function (e) {
            var t = w.index + e;
            return t >= 0 && t < w.entries.length;
          },
          block: function (e) {
            return void 0 === e && (e = !1), c.setPrompt(e);
          },
          listen: function (e) {
            return c.appendListener(e);
          },
        };
        return w;
      }
    },
    1561: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var r = !0,
        a = "Invariant failed";
      function o(e, t) {
        if (!e) {
          if (r) throw new Error(a);
          var n = "function" == typeof t ? t() : t,
            o = n ? "".concat(a, ": ").concat(n) : a;
          throw new Error(o);
        }
      }
    },
    1653: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => u });
      var r = n(8168),
        a = n(6540),
        o = n(53),
        i = n(2303),
        l = n(5293);
      const s = {
        themedImage: "themedImage_ToTc",
        "themedImage--light": "themedImage--light_HNdA",
        "themedImage--dark": "themedImage--dark_i4oU",
      };
      function u(e) {
        const t = (0, i.A)(),
          { colorMode: n } = (0, l.G)(),
          { sources: u, className: c, alt: d, ...f } = e,
          p = t ? ("dark" === n ? ["dark"] : ["light"]) : ["light", "dark"];
        return a.createElement(
          a.Fragment,
          null,
          p.map((e) =>
            a.createElement(
              "img",
              (0, r.A)(
                {
                  key: e,
                  src: u[e],
                  alt: d,
                  className: (0, o.A)(s.themedImage, s[`themedImage--${e}`], c),
                },
                f
              )
            )
          )
        );
      }
    },
    1754: (e, t, n) => {
      "use strict";
      n.d(t, {
        d1: () => T,
        _o: () => m,
        w8: () => v,
        C5: () => f,
        $S: () => g,
        cC: () => p,
        mz: () => x,
        Vd: () => k,
        QB: () => S,
        fW: () => E,
        OF: () => w,
      });
      var r = n(6540),
        a = n(6347),
        o = n(2831),
        i = n(4070),
        l = n(5597),
        s = n(2252),
        u = n(6588);
      function c(e) {
        return Array.from(new Set(e));
      }
      var d = n(9169);
      const f = !!i.Gy;
      function p(e) {
        const t = (0, s.r)();
        if (!e) return;
        const n = t.docs[e];
        if (!n) throw new Error(`no version doc found by id=${e}`);
        return n;
      }
      function m(e) {
        if (e.href) return e.href;
        for (const t of e.items) {
          if ("link" === t.type) return t.href;
          if ("category" === t.type) {
            const e = m(t);
            if (e) return e;
          }
        }
      }
      function g() {
        const { pathname: e } = (0, a.zy)(),
          t = (0, u.t)();
        if (!t)
          throw new Error("Unexpected: cant find current sidebar in context");
        const n = y({
          sidebarItems: t.items,
          pathname: e,
          onlyCategories: !0,
        }).slice(-1)[0];
        if (!n)
          throw new Error(
            `${e} is not associated with a category. useCurrentSidebarCategory() should only be used on category index pages.`
          );
        return n;
      }
      const h = (e, t) => void 0 !== e && (0, d.ys)(e, t),
        b = (e, t) => e.some((e) => v(e, t));
      function v(e, t) {
        return "link" === e.type
          ? h(e.href, t)
          : "category" === e.type && (h(e.href, t) || b(e.items, t));
      }
      function y(e) {
        let { sidebarItems: t, pathname: n, onlyCategories: r = !1 } = e;
        const a = [];
        return (
          (function e(t) {
            for (const o of t)
              if (
                ("category" === o.type &&
                  ((0, d.ys)(o.href, n) || e(o.items))) ||
                ("link" === o.type && (0, d.ys)(o.href, n))
              ) {
                return (r && "category" !== o.type) || a.unshift(o), !0;
              }
            return !1;
          })(t),
          a
        );
      }
      function w() {
        const e = (0, u.t)(),
          { pathname: t } = (0, a.zy)(),
          n = (0, i.vT)()?.pluginData.breadcrumbs;
        return !1 !== n && e ? y({ sidebarItems: e.items, pathname: t }) : null;
      }
      function k(e) {
        const { activeVersion: t } = (0, i.zK)(e),
          { preferredVersion: n } = (0, l.g1)(e),
          a = (0, i.r7)(e);
        return (0, r.useMemo)(() => c([t, n, a].filter(Boolean)), [t, n, a]);
      }
      function E(e, t) {
        const n = k(t);
        return (0, r.useMemo)(() => {
          const t = n.flatMap((e) =>
              e.sidebars ? Object.entries(e.sidebars) : []
            ),
            r = t.find((t) => t[0] === e);
          if (!r)
            throw new Error(
              `Can't find any sidebar with id "${e}" in version${
                n.length > 1 ? "s" : ""
              } ${n
                .map((e) => e.name)
                .join(", ")}".\nAvailable sidebar ids are:\n- ${t
                .map((e) => e[0])
                .join("\n- ")}`
            );
          return r[1];
        }, [e, n]);
      }
      function S(e, t) {
        const n = k(t);
        return (0, r.useMemo)(() => {
          const t = n.flatMap((e) => e.docs),
            r = t.find((t) => t.id === e);
          if (!r) {
            if (n.flatMap((e) => e.draftIds).includes(e)) return null;
            throw new Error(
              `Couldn't find any doc with id "${e}" in version${
                n.length > 1 ? "s" : ""
              } "${n
                .map((e) => e.name)
                .join(", ")}".\nAvailable doc ids are:\n- ${c(
                t.map((e) => e.id)
              ).join("\n- ")}`
            );
          }
          return r;
        }, [e, n]);
      }
      function x(e) {
        let { route: t, versionMetadata: n } = e;
        const r = (0, a.zy)(),
          i = t.routes,
          l = i.find((e) => (0, a.B6)(r.pathname, e));
        if (!l) return null;
        const s = l.sidebar,
          u = s ? n.docsSidebars[s] : void 0;
        return { docElement: (0, o.v)(i), sidebarName: s, sidebarItems: u };
      }
      function T(e) {
        return e.filter((e) => "category" !== e.type || !!m(e));
      }
    },
    1911: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      const r = {
        onRouteDidUpdate(e) {
          let { location: t, previousLocation: n } = e;
          !n ||
            (t.pathname === n.pathname &&
              t.search === n.search &&
              t.hash === n.hash) ||
            setTimeout(() => {
              window.gtag("event", "page_view", {
                page_title: document.title,
                page_location: window.location.href,
                page_path: t.pathname + t.search + t.hash,
              });
            });
        },
      };
    },
    2131: (e, t, n) => {
      "use strict";
      n.d(t, { o: () => i });
      var r = n(4586),
        a = n(6347),
        o = n(440);
      function i() {
        const {
            siteConfig: { baseUrl: e, url: t, trailingSlash: n },
            i18n: { defaultLocale: i, currentLocale: l },
          } = (0, r.A)(),
          { pathname: s } = (0, a.zy)(),
          u = (0, o.applyTrailingSlash)(s, { trailingSlash: n, baseUrl: e }),
          c = l === i ? e : e.replace(`/${l}/`, "/"),
          d = u.replace(e, "");
        return {
          createUrl: function (e) {
            let { locale: n, fullyQualified: r } = e;
            return `${r ? t : ""}${(function (e) {
              return e === i ? `${c}` : `${c}${e}/`;
            })(n)}${d}`;
          },
        };
      }
    },
    2252: (e, t, n) => {
      "use strict";
      n.d(t, { n: () => i, r: () => l });
      var r = n(6540),
        a = n(9532);
      const o = r.createContext(null);
      function i(e) {
        let { children: t, version: n } = e;
        return r.createElement(o.Provider, { value: n }, t);
      }
      function l() {
        const e = (0, r.useContext)(o);
        if (null === e) throw new a.dV("DocsVersionProvider");
        return e;
      }
    },
    2303: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var r = n(6540),
        a = n(6125);
      function o() {
        return (0, r.useContext)(a.o);
      }
    },
    2551: (e, t, n) => {
      "use strict";
      var r = n(6540),
        a = n(5228),
        o = n(9982);
      function i(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      if (!r) throw Error(i(227));
      var l = new Set(),
        s = {};
      function u(e, t) {
        c(e, t), c(e + "Capture", t);
      }
      function c(e, t) {
        for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
      }
      var d = !(
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        f =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        p = Object.prototype.hasOwnProperty,
        m = {},
        g = {};
      function h(e, t, n, r, a, o, i) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = a),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = o),
          (this.removeEmptyString = i);
      }
      var b = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          b[e] = new h(e, 0, !1, e, null, !1, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          b[t] = new h(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            b[e] = new h(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          b[e] = new h(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            b[e] = new h(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          b[e] = new h(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          b[e] = new h(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          b[e] = new h(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          b[e] = new h(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var v = /[\-:]([a-z])/g;
      function y(e) {
        return e[1].toUpperCase();
      }
      function w(e, t, n, r) {
        var a = b.hasOwnProperty(t) ? b[t] : null;
        (null !== a
          ? 0 === a.type
          : !r &&
            2 < t.length &&
            ("o" === t[0] || "O" === t[0]) &&
            ("n" === t[1] || "N" === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null == t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, a, r) && (n = null),
          r || null === a
            ? (function (e) {
                return (
                  !!p.call(g, e) ||
                  (!p.call(m, e) &&
                    (f.test(e) ? (g[e] = !0) : ((m[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : a.mustUseProperty
            ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
            : ((t = a.attributeName),
              (r = a.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(v, y);
          b[t] = new h(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(v, y);
            b[t] = new h(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(v, y);
          b[t] = new h(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          b[e] = new h(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (b.xlinkHref = new h(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          b[e] = new h(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        E = 60103,
        S = 60106,
        x = 60107,
        T = 60108,
        A = 60114,
        C = 60109,
        _ = 60110,
        L = 60112,
        R = 60113,
        N = 60120,
        P = 60115,
        O = 60116,
        D = 60121,
        I = 60128,
        M = 60129,
        B = 60130,
        F = 60131;
      if ("function" == typeof Symbol && Symbol.for) {
        var j = Symbol.for;
        (E = j("react.element")),
          (S = j("react.portal")),
          (x = j("react.fragment")),
          (T = j("react.strict_mode")),
          (A = j("react.profiler")),
          (C = j("react.provider")),
          (_ = j("react.context")),
          (L = j("react.forward_ref")),
          (R = j("react.suspense")),
          (N = j("react.suspense_list")),
          (P = j("react.memo")),
          (O = j("react.lazy")),
          (D = j("react.block")),
          j("react.scope"),
          (I = j("react.opaque.id")),
          (M = j("react.debug_trace_mode")),
          (B = j("react.offscreen")),
          (F = j("react.legacy_hidden"));
      }
      var z,
        U = "function" == typeof Symbol && Symbol.iterator;
      function $(e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (U && e[U]) || e["@@iterator"])
          ? e
          : null;
      }
      function G(e) {
        if (void 0 === z)
          try {
            throw Error();
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            z = (t && t[1]) || "";
          }
        return "\n" + z + e;
      }
      var q = !1;
      function H(e, t) {
        if (!e || q) return "";
        q = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (
              ((t = function () {
                throw Error();
              }),
              Object.defineProperty(t.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              "object" == typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (s) {
                var r = s;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (s) {
                r = s;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (s) {
              r = s;
            }
            e();
          }
        } catch (s) {
          if (s && r && "string" == typeof s.stack) {
            for (
              var a = s.stack.split("\n"),
                o = r.stack.split("\n"),
                i = a.length - 1,
                l = o.length - 1;
              1 <= i && 0 <= l && a[i] !== o[l];

            )
              l--;
            for (; 1 <= i && 0 <= l; i--, l--)
              if (a[i] !== o[l]) {
                if (1 !== i || 1 !== l)
                  do {
                    if ((i--, 0 > --l || a[i] !== o[l]))
                      return "\n" + a[i].replace(" at new ", " at ");
                  } while (1 <= i && 0 <= l);
                break;
              }
          }
        } finally {
          (q = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : "") ? G(e) : "";
      }
      function V(e) {
        switch (e.tag) {
          case 5:
            return G(e.type);
          case 16:
            return G("Lazy");
          case 13:
            return G("Suspense");
          case 19:
            return G("SuspenseList");
          case 0:
          case 2:
          case 15:
            return (e = H(e.type, !1));
          case 11:
            return (e = H(e.type.render, !1));
          case 22:
            return (e = H(e.type._render, !1));
          case 1:
            return (e = H(e.type, !0));
          default:
            return "";
        }
      }
      function W(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case x:
            return "Fragment";
          case S:
            return "Portal";
          case A:
            return "Profiler";
          case T:
            return "StrictMode";
          case R:
            return "Suspense";
          case N:
            return "SuspenseList";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case _:
              return (e.displayName || "Context") + ".Consumer";
            case C:
              return (e._context.displayName || "Context") + ".Provider";
            case L:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ""),
                e.displayName ||
                  ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case P:
              return W(e.type);
            case D:
              return W(e._render);
            case O:
              (t = e._payload), (e = e._init);
              try {
                return W(e(t));
              } catch (n) {}
          }
        return null;
      }
      function K(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return e;
          default:
            return "";
        }
      }
      function Y(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function Q(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = Y(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              void 0 !== n &&
              "function" == typeof n.get &&
              "function" == typeof n.set
            ) {
              var a = n.get,
                o = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return a.call(this);
                  },
                  set: function (e) {
                    (r = "" + e), o.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = "" + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function X(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = Y(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function J(e) {
        if (
          void 0 ===
          (e = e || ("undefined" != typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function Z(e, t) {
        var n = t.checked;
        return a({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function ee(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = K(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value,
          });
      }
      function te(e, t) {
        null != (t = t.checked) && w(e, "checked", t, !1);
      }
      function ne(e, t) {
        te(e, t);
        var n = K(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? ae(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            ae(e, t.type, K(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function re(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        "" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n);
      }
      function ae(e, t, n) {
        ("number" === t && J(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      function oe(e, t) {
        return (
          (e = a({ children: void 0 }, t)),
          (t = (function (e) {
            var t = "";
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function ie(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
          for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== a && (e[n].selected = a),
              a && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + K(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n)
              return (
                (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
              );
            null !== t || e[a].disabled || (t = e[a]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function le(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(i(91));
        return a({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        });
      }
      function se(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(i(92));
            if (Array.isArray(n)) {
              if (!(1 >= n.length)) throw Error(i(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ""), (n = t);
        }
        e._wrapperState = { initialValue: K(n) };
      }
      function ue(e, t) {
        var n = K(t.value),
          r = K(t.defaultValue);
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r);
      }
      function ce(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          "" !== t &&
          null !== t &&
          (e.value = t);
      }
      var de = "http://www.w3.org/1999/xhtml",
        fe = "http://www.w3.org/2000/svg";
      function pe(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function me(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? pe(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      var ge,
        he,
        be =
          ((he = function (e, t) {
            if (e.namespaceURI !== fe || "innerHTML" in e) e.innerHTML = t;
            else {
              for (
                (ge = ge || document.createElement("div")).innerHTML =
                  "<svg>" + t.valueOf().toString() + "</svg>",
                  t = ge.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return he(e, t);
                });
              }
            : he);
      function ve(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var ye = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        we = ["Webkit", "ms", "Moz", "O"];
      function ke(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t
          ? ""
          : n ||
            "number" != typeof t ||
            0 === t ||
            (ye.hasOwnProperty(e) && ye[e])
          ? ("" + t).trim()
          : t + "px";
      }
      function Ee(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              a = ke(n, t[n], r);
            "float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, a) : (e[n] = a);
          }
      }
      Object.keys(ye).forEach(function (e) {
        we.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ye[t] = ye[e]);
        });
      });
      var Se = a(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function xe(e, t) {
        if (t) {
          if (
            Se[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(i(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(i(60));
            if (
              "object" != typeof t.dangerouslySetInnerHTML ||
              !("__html" in t.dangerouslySetInnerHTML)
            )
              throw Error(i(61));
          }
          if (null != t.style && "object" != typeof t.style) throw Error(i(62));
        }
      }
      function Te(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      function Ae(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var Ce = null,
        _e = null,
        Le = null;
      function Re(e) {
        if ((e = ra(e))) {
          if ("function" != typeof Ce) throw Error(i(280));
          var t = e.stateNode;
          t && ((t = oa(t)), Ce(e.stateNode, e.type, t));
        }
      }
      function Ne(e) {
        _e ? (Le ? Le.push(e) : (Le = [e])) : (_e = e);
      }
      function Pe() {
        if (_e) {
          var e = _e,
            t = Le;
          if (((Le = _e = null), Re(e), t))
            for (e = 0; e < t.length; e++) Re(t[e]);
        }
      }
      function Oe(e, t) {
        return e(t);
      }
      function De(e, t, n, r, a) {
        return e(t, n, r, a);
      }
      function Ie() {}
      var Me = Oe,
        Be = !1,
        Fe = !1;
      function je() {
        (null === _e && null === Le) || (Ie(), Pe());
      }
      function ze(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = oa(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(i(231, t, typeof n));
        return n;
      }
      var Ue = !1;
      if (d)
        try {
          var $e = {};
          Object.defineProperty($e, "passive", {
            get: function () {
              Ue = !0;
            },
          }),
            window.addEventListener("test", $e, $e),
            window.removeEventListener("test", $e, $e);
        } catch (he) {
          Ue = !1;
        }
      function Ge(e, t, n, r, a, o, i, l, s) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, u);
        } catch (c) {
          this.onError(c);
        }
      }
      var qe = !1,
        He = null,
        Ve = !1,
        We = null,
        Ke = {
          onError: function (e) {
            (qe = !0), (He = e);
          },
        };
      function Ye(e, t, n, r, a, o, i, l, s) {
        (qe = !1), (He = null), Ge.apply(Ke, arguments);
      }
      function Qe(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            !!(1026 & (t = e).flags) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function Xe(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function Je(e) {
        if (Qe(e) !== e) throw Error(i(188));
      }
      function Ze(e) {
        if (
          ((e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Qe(e))) throw Error(i(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var a = n.return;
              if (null === a) break;
              var o = a.alternate;
              if (null === o) {
                if (null !== (r = a.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (a.child === o.child) {
                for (o = a.child; o; ) {
                  if (o === n) return Je(a), e;
                  if (o === r) return Je(a), t;
                  o = o.sibling;
                }
                throw Error(i(188));
              }
              if (n.return !== r.return) (n = a), (r = o);
              else {
                for (var l = !1, s = a.child; s; ) {
                  if (s === n) {
                    (l = !0), (n = a), (r = o);
                    break;
                  }
                  if (s === r) {
                    (l = !0), (r = a), (n = o);
                    break;
                  }
                  s = s.sibling;
                }
                if (!l) {
                  for (s = o.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = o), (r = a);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = o), (n = a);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) throw Error(i(189));
                }
              }
              if (n.alternate !== r) throw Error(i(190));
            }
            if (3 !== n.tag) throw Error(i(188));
            return n.stateNode.current === n ? e : t;
          })(e)),
          !e)
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      function et(e, t) {
        for (var n = e.alternate; null !== t; ) {
          if (t === e || t === n) return !0;
          t = t.return;
        }
        return !1;
      }
      var tt,
        nt,
        rt,
        at,
        ot = !1,
        it = [],
        lt = null,
        st = null,
        ut = null,
        ct = new Map(),
        dt = new Map(),
        ft = [],
        pt =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
          );
      function mt(e, t, n, r, a) {
        return {
          blockedOn: e,
          domEventName: t,
          eventSystemFlags: 16 | n,
          nativeEvent: a,
          targetContainers: [r],
        };
      }
      function gt(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            lt = null;
            break;
          case "dragenter":
          case "dragleave":
            st = null;
            break;
          case "mouseover":
          case "mouseout":
            ut = null;
            break;
          case "pointerover":
          case "pointerout":
            ct.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            dt.delete(t.pointerId);
        }
      }
      function ht(e, t, n, r, a, o) {
        return null === e || e.nativeEvent !== o
          ? ((e = mt(t, n, r, a, o)),
            null !== t && null !== (t = ra(t)) && nt(t),
            e)
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== a && -1 === t.indexOf(a) && t.push(a),
            e);
      }
      function bt(e) {
        var t = na(e.target);
        if (null !== t) {
          var n = Qe(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Xe(n)))
                return (
                  (e.blockedOn = t),
                  void at(e.lanePriority, function () {
                    o.unstable_runWithPriority(e.priority, function () {
                      rt(n);
                    });
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function vt(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n)
            return null !== (t = ra(n)) && nt(t), (e.blockedOn = n), !1;
          t.shift();
        }
        return !0;
      }
      function yt(e, t, n) {
        vt(e) && n.delete(t);
      }
      function wt() {
        for (ot = !1; 0 < it.length; ) {
          var e = it[0];
          if (null !== e.blockedOn) {
            null !== (e = ra(e.blockedOn)) && tt(e);
            break;
          }
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Zt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) {
              e.blockedOn = n;
              break;
            }
            t.shift();
          }
          null === e.blockedOn && it.shift();
        }
        null !== lt && vt(lt) && (lt = null),
          null !== st && vt(st) && (st = null),
          null !== ut && vt(ut) && (ut = null),
          ct.forEach(yt),
          dt.forEach(yt);
      }
      function kt(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          ot ||
            ((ot = !0),
            o.unstable_scheduleCallback(o.unstable_NormalPriority, wt)));
      }
      function Et(e) {
        function t(t) {
          return kt(t, e);
        }
        if (0 < it.length) {
          kt(it[0], e);
          for (var n = 1; n < it.length; n++) {
            var r = it[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== lt && kt(lt, e),
            null !== st && kt(st, e),
            null !== ut && kt(ut, e),
            ct.forEach(t),
            dt.forEach(t),
            n = 0;
          n < ft.length;
          n++
        )
          (r = ft[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < ft.length && null === (n = ft[0]).blockedOn; )
          bt(n), null === n.blockedOn && ft.shift();
      }
      function St(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var xt = {
          animationend: St("Animation", "AnimationEnd"),
          animationiteration: St("Animation", "AnimationIteration"),
          animationstart: St("Animation", "AnimationStart"),
          transitionend: St("Transition", "TransitionEnd"),
        },
        Tt = {},
        At = {};
      function Ct(e) {
        if (Tt[e]) return Tt[e];
        if (!xt[e]) return e;
        var t,
          n = xt[e];
        for (t in n) if (n.hasOwnProperty(t) && t in At) return (Tt[e] = n[t]);
        return e;
      }
      d &&
        ((At = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete xt.animationend.animation,
          delete xt.animationiteration.animation,
          delete xt.animationstart.animation),
        "TransitionEvent" in window || delete xt.transitionend.transition);
      var _t = Ct("animationend"),
        Lt = Ct("animationiteration"),
        Rt = Ct("animationstart"),
        Nt = Ct("transitionend"),
        Pt = new Map(),
        Ot = new Map(),
        Dt = [
          "abort",
          "abort",
          _t,
          "animationEnd",
          Lt,
          "animationIteration",
          Rt,
          "animationStart",
          "canplay",
          "canPlay",
          "canplaythrough",
          "canPlayThrough",
          "durationchange",
          "durationChange",
          "emptied",
          "emptied",
          "encrypted",
          "encrypted",
          "ended",
          "ended",
          "error",
          "error",
          "gotpointercapture",
          "gotPointerCapture",
          "load",
          "load",
          "loadeddata",
          "loadedData",
          "loadedmetadata",
          "loadedMetadata",
          "loadstart",
          "loadStart",
          "lostpointercapture",
          "lostPointerCapture",
          "playing",
          "playing",
          "progress",
          "progress",
          "seeking",
          "seeking",
          "stalled",
          "stalled",
          "suspend",
          "suspend",
          "timeupdate",
          "timeUpdate",
          Nt,
          "transitionEnd",
          "waiting",
          "waiting",
        ];
      function It(e, t) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n],
            a = e[n + 1];
          (a = "on" + (a[0].toUpperCase() + a.slice(1))),
            Ot.set(r, t),
            Pt.set(r, a),
            u(a, [r]);
        }
      }
      (0, o.unstable_now)();
      var Mt = 8;
      function Bt(e) {
        if (1 & e) return (Mt = 15), 1;
        if (2 & e) return (Mt = 14), 2;
        if (4 & e) return (Mt = 13), 4;
        var t = 24 & e;
        return 0 !== t
          ? ((Mt = 12), t)
          : 32 & e
          ? ((Mt = 11), 32)
          : 0 !== (t = 192 & e)
          ? ((Mt = 10), t)
          : 256 & e
          ? ((Mt = 9), 256)
          : 0 !== (t = 3584 & e)
          ? ((Mt = 8), t)
          : 4096 & e
          ? ((Mt = 7), 4096)
          : 0 !== (t = 4186112 & e)
          ? ((Mt = 6), t)
          : 0 !== (t = 62914560 & e)
          ? ((Mt = 5), t)
          : 67108864 & e
          ? ((Mt = 4), 67108864)
          : 134217728 & e
          ? ((Mt = 3), 134217728)
          : 0 !== (t = 805306368 & e)
          ? ((Mt = 2), t)
          : 1073741824 & e
          ? ((Mt = 1), 1073741824)
          : ((Mt = 8), e);
      }
      function Ft(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return (Mt = 0);
        var r = 0,
          a = 0,
          o = e.expiredLanes,
          i = e.suspendedLanes,
          l = e.pingedLanes;
        if (0 !== o) (r = o), (a = Mt = 15);
        else if (0 !== (o = 134217727 & n)) {
          var s = o & ~i;
          0 !== s
            ? ((r = Bt(s)), (a = Mt))
            : 0 !== (l &= o) && ((r = Bt(l)), (a = Mt));
        } else
          0 !== (o = n & ~i)
            ? ((r = Bt(o)), (a = Mt))
            : 0 !== l && ((r = Bt(l)), (a = Mt));
        if (0 === r) return 0;
        if (
          ((r = n & (((0 > (r = 31 - qt(r)) ? 0 : 1 << r) << 1) - 1)),
          0 !== t && t !== r && !(t & i))
        ) {
          if ((Bt(t), a <= Mt)) return t;
          Mt = a;
        }
        if (0 !== (t = e.entangledLanes))
          for (e = e.entanglements, t &= r; 0 < t; )
            (a = 1 << (n = 31 - qt(t))), (r |= e[n]), (t &= ~a);
        return r;
      }
      function jt(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes)
          ? e
          : 1073741824 & e
          ? 1073741824
          : 0;
      }
      function zt(e, t) {
        switch (e) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return 0 === (e = Ut(24 & ~t)) ? zt(10, t) : e;
          case 10:
            return 0 === (e = Ut(192 & ~t)) ? zt(8, t) : e;
          case 8:
            return (
              0 === (e = Ut(3584 & ~t)) &&
                0 === (e = Ut(4186112 & ~t)) &&
                (e = 512),
              e
            );
          case 2:
            return 0 === (t = Ut(805306368 & ~t)) && (t = 268435456), t;
        }
        throw Error(i(358, e));
      }
      function Ut(e) {
        return e & -e;
      }
      function $t(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function Gt(e, t, n) {
        e.pendingLanes |= t;
        var r = t - 1;
        (e.suspendedLanes &= r),
          (e.pingedLanes &= r),
          ((e = e.eventTimes)[(t = 31 - qt(t))] = n);
      }
      var qt = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === e ? 32 : (31 - ((Ht(e) / Vt) | 0)) | 0;
            },
        Ht = Math.log,
        Vt = Math.LN2;
      var Wt = o.unstable_UserBlockingPriority,
        Kt = o.unstable_runWithPriority,
        Yt = !0;
      function Qt(e, t, n, r) {
        Be || Ie();
        var a = Jt,
          o = Be;
        Be = !0;
        try {
          De(a, e, t, n, r);
        } finally {
          (Be = o) || je();
        }
      }
      function Xt(e, t, n, r) {
        Kt(Wt, Jt.bind(null, e, t, n, r));
      }
      function Jt(e, t, n, r) {
        var a;
        if (Yt)
          if ((a = !(4 & t)) && 0 < it.length && -1 < pt.indexOf(e))
            (e = mt(null, e, t, n, r)), it.push(e);
          else {
            var o = Zt(e, t, n, r);
            if (null === o) a && gt(e, r);
            else {
              if (a) {
                if (-1 < pt.indexOf(e))
                  return (e = mt(o, e, t, n, r)), void it.push(e);
                if (
                  (function (e, t, n, r, a) {
                    switch (t) {
                      case "focusin":
                        return (lt = ht(lt, e, t, n, r, a)), !0;
                      case "dragenter":
                        return (st = ht(st, e, t, n, r, a)), !0;
                      case "mouseover":
                        return (ut = ht(ut, e, t, n, r, a)), !0;
                      case "pointerover":
                        var o = a.pointerId;
                        return (
                          ct.set(o, ht(ct.get(o) || null, e, t, n, r, a)), !0
                        );
                      case "gotpointercapture":
                        return (
                          (o = a.pointerId),
                          dt.set(o, ht(dt.get(o) || null, e, t, n, r, a)),
                          !0
                        );
                    }
                    return !1;
                  })(o, e, t, n, r)
                )
                  return;
                gt(e, r);
              }
              Ir(e, t, r, null, n);
            }
          }
      }
      function Zt(e, t, n, r) {
        var a = Ae(r);
        if (null !== (a = na(a))) {
          var o = Qe(a);
          if (null === o) a = null;
          else {
            var i = o.tag;
            if (13 === i) {
              if (null !== (a = Xe(o))) return a;
              a = null;
            } else if (3 === i) {
              if (o.stateNode.hydrate)
                return 3 === o.tag ? o.stateNode.containerInfo : null;
              a = null;
            } else o !== a && (a = null);
          }
        }
        return Ir(e, t, r, a, n), null;
      }
      var en = null,
        tn = null,
        nn = null;
      function rn() {
        if (nn) return nn;
        var e,
          t,
          n = tn,
          r = n.length,
          a = "value" in en ? en.value : en.textContent,
          o = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var i = r - e;
        for (t = 1; t <= i && n[r - t] === a[o - t]; t++);
        return (nn = a.slice(e, 1 < t ? 1 - t : void 0));
      }
      function an(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function on() {
        return !0;
      }
      function ln() {
        return !1;
      }
      function sn(e) {
        function t(t, n, r, a, o) {
          for (var i in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = a),
          (this.target = o),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(i) && ((t = e[i]), (this[i] = t ? t(a) : a[i]));
          return (
            (this.isDefaultPrevented = (
              null != a.defaultPrevented
                ? a.defaultPrevented
                : !1 === a.returnValue
            )
              ? on
              : ln),
            (this.isPropagationStopped = ln),
            this
          );
        }
        return (
          a(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = on));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = on));
            },
            persist: function () {},
            isPersistent: on,
          }),
          t
        );
      }
      var un,
        cn,
        dn,
        fn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        pn = sn(fn),
        mn = a({}, fn, { view: 0, detail: 0 }),
        gn = sn(mn),
        hn = a({}, mn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: _n,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return "movementX" in e
              ? e.movementX
              : (e !== dn &&
                  (dn && "mousemove" === e.type
                    ? ((un = e.screenX - dn.screenX),
                      (cn = e.screenY - dn.screenY))
                    : (cn = un = 0),
                  (dn = e)),
                un);
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : cn;
          },
        }),
        bn = sn(hn),
        vn = sn(a({}, hn, { dataTransfer: 0 })),
        yn = sn(a({}, mn, { relatedTarget: 0 })),
        wn = sn(
          a({}, fn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        kn = a({}, fn, {
          clipboardData: function (e) {
            return "clipboardData" in e
              ? e.clipboardData
              : window.clipboardData;
          },
        }),
        En = sn(kn),
        Sn = sn(a({}, fn, { data: 0 })),
        xn = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        Tn = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        An = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function Cn(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = An[e]) && !!t[e];
      }
      function _n() {
        return Cn;
      }
      var Ln = a({}, mn, {
          key: function (e) {
            if (e.key) {
              var t = xn[e.key] || e.key;
              if ("Unidentified" !== t) return t;
            }
            return "keypress" === e.type
              ? 13 === (e = an(e))
                ? "Enter"
                : String.fromCharCode(e)
              : "keydown" === e.type || "keyup" === e.type
              ? Tn[e.keyCode] || "Unidentified"
              : "";
          },
          code: 0,
          location: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          repeat: 0,
          locale: 0,
          getModifierState: _n,
          charCode: function (e) {
            return "keypress" === e.type ? an(e) : 0;
          },
          keyCode: function (e) {
            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
          },
          which: function (e) {
            return "keypress" === e.type
              ? an(e)
              : "keydown" === e.type || "keyup" === e.type
              ? e.keyCode
              : 0;
          },
        }),
        Rn = sn(Ln),
        Nn = sn(
          a({}, hn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })
        ),
        Pn = sn(
          a({}, mn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: _n,
          })
        ),
        On = sn(
          a({}, fn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        Dn = a({}, hn, {
          deltaX: function (e) {
            return "deltaX" in e
              ? e.deltaX
              : "wheelDeltaX" in e
              ? -e.wheelDeltaX
              : 0;
          },
          deltaY: function (e) {
            return "deltaY" in e
              ? e.deltaY
              : "wheelDeltaY" in e
              ? -e.wheelDeltaY
              : "wheelDelta" in e
              ? -e.wheelDelta
              : 0;
          },
          deltaZ: 0,
          deltaMode: 0,
        }),
        In = sn(Dn),
        Mn = [9, 13, 27, 32],
        Bn = d && "CompositionEvent" in window,
        Fn = null;
      d && "documentMode" in document && (Fn = document.documentMode);
      var jn = d && "TextEvent" in window && !Fn,
        zn = d && (!Bn || (Fn && 8 < Fn && 11 >= Fn)),
        Un = String.fromCharCode(32),
        $n = !1;
      function Gn(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== Mn.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function qn(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
      }
      var Hn = !1;
      var Vn = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Wn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!Vn[e.type] : "textarea" === t;
      }
      function Kn(e, t, n, r) {
        Ne(r),
          0 < (t = Br(t, "onChange")).length &&
            ((n = new pn("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
      }
      var Yn = null,
        Qn = null;
      function Xn(e) {
        Lr(e, 0);
      }
      function Jn(e) {
        if (X(aa(e))) return e;
      }
      function Zn(e, t) {
        if ("change" === e) return t;
      }
      var er = !1;
      if (d) {
        var tr;
        if (d) {
          var nr = "oninput" in document;
          if (!nr) {
            var rr = document.createElement("div");
            rr.setAttribute("oninput", "return;"),
              (nr = "function" == typeof rr.oninput);
          }
          tr = nr;
        } else tr = !1;
        er = tr && (!document.documentMode || 9 < document.documentMode);
      }
      function ar() {
        Yn && (Yn.detachEvent("onpropertychange", or), (Qn = Yn = null));
      }
      function or(e) {
        if ("value" === e.propertyName && Jn(Qn)) {
          var t = [];
          if ((Kn(t, Qn, e, Ae(e)), (e = Xn), Be)) e(t);
          else {
            Be = !0;
            try {
              Oe(e, t);
            } finally {
              (Be = !1), je();
            }
          }
        }
      }
      function ir(e, t, n) {
        "focusin" === e
          ? (ar(), (Qn = n), (Yn = t).attachEvent("onpropertychange", or))
          : "focusout" === e && ar();
      }
      function lr(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Jn(Qn);
      }
      function sr(e, t) {
        if ("click" === e) return Jn(t);
      }
      function ur(e, t) {
        if ("input" === e || "change" === e) return Jn(t);
      }
      var cr =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        dr = Object.prototype.hasOwnProperty;
      function fr(e, t) {
        if (cr(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!dr.call(t, n[r]) || !cr(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      function pr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function mr(e, t) {
        var n,
          r = pr(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = pr(r);
        }
      }
      function gr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? gr(e, t.parentNode)
                : "contains" in e
                ? e.contains(t)
                : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function hr() {
        for (var e = window, t = J(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" == typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = J((e = t.contentWindow).document);
        }
        return t;
      }
      function br(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      var vr = d && "documentMode" in document && 11 >= document.documentMode,
        yr = null,
        wr = null,
        kr = null,
        Er = !1;
      function Sr(e, t, n) {
        var r =
          n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        Er ||
          null == yr ||
          yr !== J(r) ||
          ("selectionStart" in (r = yr) && br(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                anchorNode: (r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
          (kr && fr(kr, r)) ||
            ((kr = r),
            0 < (r = Br(wr, "onSelect")).length &&
              ((t = new pn("onSelect", "select", null, t, n)),
              e.push({ event: t, listeners: r }),
              (t.target = yr))));
      }
      It(
        "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
          " "
        ),
        0
      ),
        It(
          "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
            " "
          ),
          1
        ),
        It(Dt, 2);
      for (
        var xr =
            "change selectionchange textInput compositionstart compositionend compositionupdate".split(
              " "
            ),
          Tr = 0;
        Tr < xr.length;
        Tr++
      )
        Ot.set(xr[Tr], 0);
      c("onMouseEnter", ["mouseout", "mouseover"]),
        c("onMouseLeave", ["mouseout", "mouseover"]),
        c("onPointerEnter", ["pointerout", "pointerover"]),
        c("onPointerLeave", ["pointerout", "pointerover"]),
        u(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(
            " "
          )
        ),
        u(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " "
          )
        ),
        u("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste",
        ]),
        u(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(" ")
        ),
        u(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(
            " "
          )
        ),
        u(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(
            " "
          )
        );
      var Ar =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          ),
        Cr = new Set(
          "cancel close invalid load scroll toggle".split(" ").concat(Ar)
        );
      function _r(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = n),
          (function (e, t, n, r, a, o, l, s, u) {
            if ((Ye.apply(this, arguments), qe)) {
              if (!qe) throw Error(i(198));
              var c = He;
              (qe = !1), (He = null), Ve || ((Ve = !0), (We = c));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function Lr(e, t) {
        t = !!(4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            a = r.event;
          r = r.listeners;
          e: {
            var o = void 0;
            if (t)
              for (var i = r.length - 1; 0 <= i; i--) {
                var l = r[i],
                  s = l.instance,
                  u = l.currentTarget;
                if (((l = l.listener), s !== o && a.isPropagationStopped()))
                  break e;
                _r(a, l, u), (o = s);
              }
            else
              for (i = 0; i < r.length; i++) {
                if (
                  ((s = (l = r[i]).instance),
                  (u = l.currentTarget),
                  (l = l.listener),
                  s !== o && a.isPropagationStopped())
                )
                  break e;
                _r(a, l, u), (o = s);
              }
          }
        }
        if (Ve) throw ((e = We), (Ve = !1), (We = null), e);
      }
      function Rr(e, t) {
        var n = ia(t),
          r = e + "__bubble";
        n.has(r) || (Dr(t, e, 2, !1), n.add(r));
      }
      var Nr = "_reactListening" + Math.random().toString(36).slice(2);
      function Pr(e) {
        e[Nr] ||
          ((e[Nr] = !0),
          l.forEach(function (t) {
            Cr.has(t) || Or(t, !1, e, null), Or(t, !0, e, null);
          }));
      }
      function Or(e, t, n, r) {
        var a =
            4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
          o = n;
        if (
          ("selectionchange" === e && 9 !== n.nodeType && (o = n.ownerDocument),
          null !== r && !t && Cr.has(e))
        ) {
          if ("scroll" !== e) return;
          (a |= 2), (o = r);
        }
        var i = ia(o),
          l = e + "__" + (t ? "capture" : "bubble");
        i.has(l) || (t && (a |= 4), Dr(o, e, a, t), i.add(l));
      }
      function Dr(e, t, n, r) {
        var a = Ot.get(t);
        switch (void 0 === a ? 2 : a) {
          case 0:
            a = Qt;
            break;
          case 1:
            a = Xt;
            break;
          default:
            a = Jt;
        }
        (n = a.bind(null, t, n, e)),
          (a = void 0),
          !Ue ||
            ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
            (a = !0),
          r
            ? void 0 !== a
              ? e.addEventListener(t, n, { capture: !0, passive: a })
              : e.addEventListener(t, n, !0)
            : void 0 !== a
            ? e.addEventListener(t, n, { passive: a })
            : e.addEventListener(t, n, !1);
      }
      function Ir(e, t, n, r, a) {
        var o = r;
        if (!(1 & t || 2 & t || null === r))
          e: for (;;) {
            if (null === r) return;
            var i = r.tag;
            if (3 === i || 4 === i) {
              var l = r.stateNode.containerInfo;
              if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
              if (4 === i)
                for (i = r.return; null !== i; ) {
                  var s = i.tag;
                  if (
                    (3 === s || 4 === s) &&
                    ((s = i.stateNode.containerInfo) === a ||
                      (8 === s.nodeType && s.parentNode === a))
                  )
                    return;
                  i = i.return;
                }
              for (; null !== l; ) {
                if (null === (i = na(l))) return;
                if (5 === (s = i.tag) || 6 === s) {
                  r = o = i;
                  continue e;
                }
                l = l.parentNode;
              }
            }
            r = r.return;
          }
        !(function (e, t, n) {
          if (Fe) return e(t, n);
          Fe = !0;
          try {
            return Me(e, t, n);
          } finally {
            (Fe = !1), je();
          }
        })(function () {
          var r = o,
            a = Ae(n),
            i = [];
          e: {
            var l = Pt.get(e);
            if (void 0 !== l) {
              var s = pn,
                u = e;
              switch (e) {
                case "keypress":
                  if (0 === an(n)) break e;
                case "keydown":
                case "keyup":
                  s = Rn;
                  break;
                case "focusin":
                  (u = "focus"), (s = yn);
                  break;
                case "focusout":
                  (u = "blur"), (s = yn);
                  break;
                case "beforeblur":
                case "afterblur":
                  s = yn;
                  break;
                case "click":
                  if (2 === n.button) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  s = bn;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  s = vn;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  s = Pn;
                  break;
                case _t:
                case Lt:
                case Rt:
                  s = wn;
                  break;
                case Nt:
                  s = On;
                  break;
                case "scroll":
                  s = gn;
                  break;
                case "wheel":
                  s = In;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  s = En;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  s = Nn;
              }
              var c = !!(4 & t),
                d = !c && "scroll" === e,
                f = c ? (null !== l ? l + "Capture" : null) : l;
              c = [];
              for (var p, m = r; null !== m; ) {
                var g = (p = m).stateNode;
                if (
                  (5 === p.tag &&
                    null !== g &&
                    ((p = g),
                    null !== f &&
                      null != (g = ze(m, f)) &&
                      c.push(Mr(m, g, p))),
                  d)
                )
                  break;
                m = m.return;
              }
              0 < c.length &&
                ((l = new s(l, u, null, n, a)),
                i.push({ event: l, listeners: c }));
            }
          }
          if (!(7 & t)) {
            if (
              ((s = "mouseout" === e || "pointerout" === e),
              (!(l = "mouseover" === e || "pointerover" === e) ||
                16 & t ||
                !(u = n.relatedTarget || n.fromElement) ||
                (!na(u) && !u[ea])) &&
                (s || l) &&
                ((l =
                  a.window === a
                    ? a
                    : (l = a.ownerDocument)
                    ? l.defaultView || l.parentWindow
                    : window),
                s
                  ? ((s = r),
                    null !==
                      (u = (u = n.relatedTarget || n.toElement)
                        ? na(u)
                        : null) &&
                      (u !== (d = Qe(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                      (u = null))
                  : ((s = null), (u = r)),
                s !== u))
            ) {
              if (
                ((c = bn),
                (g = "onMouseLeave"),
                (f = "onMouseEnter"),
                (m = "mouse"),
                ("pointerout" !== e && "pointerover" !== e) ||
                  ((c = Nn),
                  (g = "onPointerLeave"),
                  (f = "onPointerEnter"),
                  (m = "pointer")),
                (d = null == s ? l : aa(s)),
                (p = null == u ? l : aa(u)),
                ((l = new c(g, m + "leave", s, n, a)).target = d),
                (l.relatedTarget = p),
                (g = null),
                na(a) === r &&
                  (((c = new c(f, m + "enter", u, n, a)).target = p),
                  (c.relatedTarget = d),
                  (g = c)),
                (d = g),
                s && u)
              )
                e: {
                  for (f = u, m = 0, p = c = s; p; p = Fr(p)) m++;
                  for (p = 0, g = f; g; g = Fr(g)) p++;
                  for (; 0 < m - p; ) (c = Fr(c)), m--;
                  for (; 0 < p - m; ) (f = Fr(f)), p--;
                  for (; m--; ) {
                    if (c === f || (null !== f && c === f.alternate)) break e;
                    (c = Fr(c)), (f = Fr(f));
                  }
                  c = null;
                }
              else c = null;
              null !== s && jr(i, l, s, c, !1),
                null !== u && null !== d && jr(i, d, u, c, !0);
            }
            if (
              "select" ===
                (s =
                  (l = r ? aa(r) : window).nodeName &&
                  l.nodeName.toLowerCase()) ||
              ("input" === s && "file" === l.type)
            )
              var h = Zn;
            else if (Wn(l))
              if (er) h = ur;
              else {
                h = lr;
                var b = ir;
              }
            else
              (s = l.nodeName) &&
                "input" === s.toLowerCase() &&
                ("checkbox" === l.type || "radio" === l.type) &&
                (h = sr);
            switch (
              (h && (h = h(e, r))
                ? Kn(i, h, n, a)
                : (b && b(e, l, r),
                  "focusout" === e &&
                    (b = l._wrapperState) &&
                    b.controlled &&
                    "number" === l.type &&
                    ae(l, "number", l.value)),
              (b = r ? aa(r) : window),
              e)
            ) {
              case "focusin":
                (Wn(b) || "true" === b.contentEditable) &&
                  ((yr = b), (wr = r), (kr = null));
                break;
              case "focusout":
                kr = wr = yr = null;
                break;
              case "mousedown":
                Er = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                (Er = !1), Sr(i, n, a);
                break;
              case "selectionchange":
                if (vr) break;
              case "keydown":
              case "keyup":
                Sr(i, n, a);
            }
            var v;
            if (Bn)
              e: {
                switch (e) {
                  case "compositionstart":
                    var y = "onCompositionStart";
                    break e;
                  case "compositionend":
                    y = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    y = "onCompositionUpdate";
                    break e;
                }
                y = void 0;
              }
            else
              Hn
                ? Gn(e, n) && (y = "onCompositionEnd")
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (y = "onCompositionStart");
            y &&
              (zn &&
                "ko" !== n.locale &&
                (Hn || "onCompositionStart" !== y
                  ? "onCompositionEnd" === y && Hn && (v = rn())
                  : ((tn = "value" in (en = a) ? en.value : en.textContent),
                    (Hn = !0))),
              0 < (b = Br(r, y)).length &&
                ((y = new Sn(y, e, null, n, a)),
                i.push({ event: y, listeners: b }),
                v ? (y.data = v) : null !== (v = qn(n)) && (y.data = v))),
              (v = jn
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return qn(t);
                      case "keypress":
                        return 32 !== t.which ? null : (($n = !0), Un);
                      case "textInput":
                        return (e = t.data) === Un && $n ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (Hn)
                      return "compositionend" === e || (!Bn && Gn(e, t))
                        ? ((e = rn()), (nn = tn = en = null), (Hn = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                      default:
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return zn && "ko" !== t.locale ? null : t.data;
                    }
                  })(e, n)) &&
                0 < (r = Br(r, "onBeforeInput")).length &&
                ((a = new Sn("onBeforeInput", "beforeinput", null, n, a)),
                i.push({ event: a, listeners: r }),
                (a.data = v));
          }
          Lr(i, t);
        });
      }
      function Mr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Br(e, t) {
        for (var n = t + "Capture", r = []; null !== e; ) {
          var a = e,
            o = a.stateNode;
          5 === a.tag &&
            null !== o &&
            ((a = o),
            null != (o = ze(e, n)) && r.unshift(Mr(e, o, a)),
            null != (o = ze(e, t)) && r.push(Mr(e, o, a))),
            (e = e.return);
        }
        return r;
      }
      function Fr(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function jr(e, t, n, r, a) {
        for (var o = t._reactName, i = []; null !== n && n !== r; ) {
          var l = n,
            s = l.alternate,
            u = l.stateNode;
          if (null !== s && s === r) break;
          5 === l.tag &&
            null !== u &&
            ((l = u),
            a
              ? null != (s = ze(n, o)) && i.unshift(Mr(n, s, l))
              : a || (null != (s = ze(n, o)) && i.push(Mr(n, s, l)))),
            (n = n.return);
        }
        0 !== i.length && e.push({ event: t, listeners: i });
      }
      function zr() {}
      var Ur = null,
        $r = null;
      function Gr(e, t) {
        switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!t.autoFocus;
        }
        return !1;
      }
      function qr(e, t) {
        return (
          "textarea" === e ||
          "option" === e ||
          "noscript" === e ||
          "string" == typeof t.children ||
          "number" == typeof t.children ||
          ("object" == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var Hr = "function" == typeof setTimeout ? setTimeout : void 0,
        Vr = "function" == typeof clearTimeout ? clearTimeout : void 0;
      function Wr(e) {
        1 === e.nodeType
          ? (e.textContent = "")
          : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
      }
      function Kr(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function Yr(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e;
              t--;
            } else "/$" === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var Qr = 0;
      var Xr = Math.random().toString(36).slice(2),
        Jr = "__reactFiber$" + Xr,
        Zr = "__reactProps$" + Xr,
        ea = "__reactContainer$" + Xr,
        ta = "__reactEvents$" + Xr;
      function na(e) {
        var t = e[Jr];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[ea] || n[Jr])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = Yr(e); null !== e; ) {
                if ((n = e[Jr])) return n;
                e = Yr(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function ra(e) {
        return !(e = e[Jr] || e[ea]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function aa(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(i(33));
      }
      function oa(e) {
        return e[Zr] || null;
      }
      function ia(e) {
        var t = e[ta];
        return void 0 === t && (t = e[ta] = new Set()), t;
      }
      var la = [],
        sa = -1;
      function ua(e) {
        return { current: e };
      }
      function ca(e) {
        0 > sa || ((e.current = la[sa]), (la[sa] = null), sa--);
      }
      function da(e, t) {
        sa++, (la[sa] = e.current), (e.current = t);
      }
      var fa = {},
        pa = ua(fa),
        ma = ua(!1),
        ga = fa;
      function ha(e, t) {
        var n = e.type.contextTypes;
        if (!n) return fa;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var a,
          o = {};
        for (a in n) o[a] = t[a];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          o
        );
      }
      function ba(e) {
        return null != (e = e.childContextTypes);
      }
      function va() {
        ca(ma), ca(pa);
      }
      function ya(e, t, n) {
        if (pa.current !== fa) throw Error(i(168));
        da(pa, t), da(ma, n);
      }
      function wa(e, t, n) {
        var r = e.stateNode;
        if (((e = t.childContextTypes), "function" != typeof r.getChildContext))
          return n;
        for (var o in (r = r.getChildContext()))
          if (!(o in e)) throw Error(i(108, W(t) || "Unknown", o));
        return a({}, n, r);
      }
      function ka(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            fa),
          (ga = pa.current),
          da(pa, e),
          da(ma, ma.current),
          !0
        );
      }
      function Ea(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(i(169));
        n
          ? ((e = wa(e, t, ga)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            ca(ma),
            ca(pa),
            da(pa, e))
          : ca(ma),
          da(ma, n);
      }
      var Sa = null,
        xa = null,
        Ta = o.unstable_runWithPriority,
        Aa = o.unstable_scheduleCallback,
        Ca = o.unstable_cancelCallback,
        _a = o.unstable_shouldYield,
        La = o.unstable_requestPaint,
        Ra = o.unstable_now,
        Na = o.unstable_getCurrentPriorityLevel,
        Pa = o.unstable_ImmediatePriority,
        Oa = o.unstable_UserBlockingPriority,
        Da = o.unstable_NormalPriority,
        Ia = o.unstable_LowPriority,
        Ma = o.unstable_IdlePriority,
        Ba = {},
        Fa = void 0 !== La ? La : function () {},
        ja = null,
        za = null,
        Ua = !1,
        $a = Ra(),
        Ga =
          1e4 > $a
            ? Ra
            : function () {
                return Ra() - $a;
              };
      function qa() {
        switch (Na()) {
          case Pa:
            return 99;
          case Oa:
            return 98;
          case Da:
            return 97;
          case Ia:
            return 96;
          case Ma:
            return 95;
          default:
            throw Error(i(332));
        }
      }
      function Ha(e) {
        switch (e) {
          case 99:
            return Pa;
          case 98:
            return Oa;
          case 97:
            return Da;
          case 96:
            return Ia;
          case 95:
            return Ma;
          default:
            throw Error(i(332));
        }
      }
      function Va(e, t) {
        return (e = Ha(e)), Ta(e, t);
      }
      function Wa(e, t, n) {
        return (e = Ha(e)), Aa(e, t, n);
      }
      function Ka() {
        if (null !== za) {
          var e = za;
          (za = null), Ca(e);
        }
        Ya();
      }
      function Ya() {
        if (!Ua && null !== ja) {
          Ua = !0;
          var e = 0;
          try {
            var t = ja;
            Va(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (ja = null);
          } catch (n) {
            throw (null !== ja && (ja = ja.slice(e + 1)), Aa(Pa, Ka), n);
          } finally {
            Ua = !1;
          }
        }
      }
      var Qa = k.ReactCurrentBatchConfig;
      function Xa(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = a({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      var Ja = ua(null),
        Za = null,
        eo = null,
        to = null;
      function no() {
        to = eo = Za = null;
      }
      function ro(e) {
        var t = Ja.current;
        ca(Ja), (e.type._context._currentValue = t);
      }
      function ao(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if ((e.childLanes & t) === t) {
            if (null === n || (n.childLanes & t) === t) break;
            n.childLanes |= t;
          } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
          e = e.return;
        }
      }
      function oo(e, t) {
        (Za = e),
          (to = eo = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (!!(e.lanes & t) && (Bi = !0), (e.firstContext = null));
      }
      function io(e, t) {
        if (to !== e && !1 !== t && 0 !== t)
          if (
            (("number" == typeof t && 1073741823 !== t) ||
              ((to = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === eo)
          ) {
            if (null === Za) throw Error(i(308));
            (eo = t),
              (Za.dependencies = {
                lanes: 0,
                firstContext: t,
                responders: null,
              });
          } else eo = eo.next = t;
        return e._currentValue;
      }
      var lo = !1;
      function so(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null },
          effects: null,
        };
      }
      function uo(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects,
            });
      }
      function co(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        };
      }
      function fo(e, t) {
        if (null !== (e = e.updateQueue)) {
          var n = (e = e.shared).pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
      }
      function po(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var a = null,
            o = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var i = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              null === o ? (a = o = i) : (o = o.next = i), (n = n.next);
            } while (null !== n);
            null === o ? (a = o = t) : (o = o.next = t);
          } else a = o = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: a,
              lastBaseUpdate: o,
              shared: r.shared,
              effects: r.effects,
            }),
            void (e.updateQueue = n)
          );
        }
        null === (e = n.lastBaseUpdate)
          ? (n.firstBaseUpdate = t)
          : (e.next = t),
          (n.lastBaseUpdate = t);
      }
      function mo(e, t, n, r) {
        var o = e.updateQueue;
        lo = !1;
        var i = o.firstBaseUpdate,
          l = o.lastBaseUpdate,
          s = o.shared.pending;
        if (null !== s) {
          o.shared.pending = null;
          var u = s,
            c = u.next;
          (u.next = null), null === l ? (i = c) : (l.next = c), (l = u);
          var d = e.alternate;
          if (null !== d) {
            var f = (d = d.updateQueue).lastBaseUpdate;
            f !== l &&
              (null === f ? (d.firstBaseUpdate = c) : (f.next = c),
              (d.lastBaseUpdate = u));
          }
        }
        if (null !== i) {
          for (f = o.baseState, l = 0, d = c = u = null; ; ) {
            s = i.lane;
            var p = i.eventTime;
            if ((r & s) === s) {
              null !== d &&
                (d = d.next =
                  {
                    eventTime: p,
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null,
                  });
              e: {
                var m = e,
                  g = i;
                switch (((s = t), (p = n), g.tag)) {
                  case 1:
                    if ("function" == typeof (m = g.payload)) {
                      f = m.call(p, f, s);
                      break e;
                    }
                    f = m;
                    break e;
                  case 3:
                    m.flags = (-4097 & m.flags) | 64;
                  case 0:
                    if (
                      null ==
                      (s =
                        "function" == typeof (m = g.payload)
                          ? m.call(p, f, s)
                          : m)
                    )
                      break e;
                    f = a({}, f, s);
                    break e;
                  case 2:
                    lo = !0;
                }
              }
              null !== i.callback &&
                ((e.flags |= 32),
                null === (s = o.effects) ? (o.effects = [i]) : s.push(i));
            } else
              (p = {
                eventTime: p,
                lane: s,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null,
              }),
                null === d ? ((c = d = p), (u = f)) : (d = d.next = p),
                (l |= s);
            if (null === (i = i.next)) {
              if (null === (s = o.shared.pending)) break;
              (i = s.next),
                (s.next = null),
                (o.lastBaseUpdate = s),
                (o.shared.pending = null);
            }
          }
          null === d && (u = f),
            (o.baseState = u),
            (o.firstBaseUpdate = c),
            (o.lastBaseUpdate = d),
            ($l |= l),
            (e.lanes = l),
            (e.memoizedState = f);
        }
      }
      function go(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              a = r.callback;
            if (null !== a) {
              if (((r.callback = null), (r = n), "function" != typeof a))
                throw Error(i(191, a));
              a.call(r);
            }
          }
      }
      var ho = new r.Component().refs;
      function bo(e, t, n, r) {
        (n = null == (n = n(r, (t = e.memoizedState))) ? t : a({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n);
      }
      var vo = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && Qe(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = ps(),
            a = ms(e),
            o = co(r, a);
          (o.payload = t), null != n && (o.callback = n), fo(e, o), gs(e, a, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = ps(),
            a = ms(e),
            o = co(r, a);
          (o.tag = 1),
            (o.payload = t),
            null != n && (o.callback = n),
            fo(e, o),
            gs(e, a, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = ps(),
            r = ms(e),
            a = co(n, r);
          (a.tag = 2), null != t && (a.callback = t), fo(e, a), gs(e, r, n);
        },
      };
      function yo(e, t, n, r, a, o, i) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, o, i)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !fr(n, r) ||
              !fr(a, o);
      }
      function wo(e, t, n) {
        var r = !1,
          a = fa,
          o = t.contextType;
        return (
          "object" == typeof o && null !== o
            ? (o = io(o))
            : ((a = ba(t) ? ga : pa.current),
              (o = (r = null != (r = t.contextTypes)) ? ha(e, a) : fa)),
          (t = new t(n, o)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = vo),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              a),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
          t
        );
      }
      function ko(e, t, n, r) {
        (e = t.state),
          "function" == typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" == typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && vo.enqueueReplaceState(t, t.state, null);
      }
      function Eo(e, t, n, r) {
        var a = e.stateNode;
        (a.props = n), (a.state = e.memoizedState), (a.refs = ho), so(e);
        var o = t.contextType;
        "object" == typeof o && null !== o
          ? (a.context = io(o))
          : ((o = ba(t) ? ga : pa.current), (a.context = ha(e, o))),
          mo(e, n, a, r),
          (a.state = e.memoizedState),
          "function" == typeof (o = t.getDerivedStateFromProps) &&
            (bo(e, t, o, n), (a.state = e.memoizedState)),
          "function" == typeof t.getDerivedStateFromProps ||
            "function" == typeof a.getSnapshotBeforeUpdate ||
            ("function" != typeof a.UNSAFE_componentWillMount &&
              "function" != typeof a.componentWillMount) ||
            ((t = a.state),
            "function" == typeof a.componentWillMount && a.componentWillMount(),
            "function" == typeof a.UNSAFE_componentWillMount &&
              a.UNSAFE_componentWillMount(),
            t !== a.state && vo.enqueueReplaceState(a, a.state, null),
            mo(e, n, a, r),
            (a.state = e.memoizedState)),
          "function" == typeof a.componentDidMount && (e.flags |= 4);
      }
      var So = Array.isArray;
      function xo(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" != typeof e &&
          "object" != typeof e
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(i(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(i(147, e));
            var a = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" == typeof t.ref &&
              t.ref._stringRef === a
              ? t.ref
              : ((t = function (e) {
                  var t = r.refs;
                  t === ho && (t = r.refs = {}),
                    null === e ? delete t[a] : (t[a] = e);
                }),
                (t._stringRef = a),
                t);
          }
          if ("string" != typeof e) throw Error(i(284));
          if (!n._owner) throw Error(i(290, e));
        }
        return e;
      }
      function To(e, t) {
        if ("textarea" !== e.type)
          throw Error(
            i(
              31,
              "[object Object]" === Object.prototype.toString.call(t)
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : t
            )
          );
      }
      function Ao(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r
              ? ((r.nextEffect = n), (t.lastEffect = n))
              : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.flags = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function a(e, t) {
          return ((e = Ws(e, t)).index = 0), (e.sibling = null), e;
        }
        function o(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.flags = 2), n)
                  : r
                : ((t.flags = 2), n)
              : n
          );
        }
        function l(t) {
          return e && null === t.alternate && (t.flags = 2), t;
        }
        function s(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Xs(n, e.mode, r)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function u(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = a(t, n.props)).ref = xo(e, t, n)), (r.return = e), r)
            : (((r = Ks(n.type, n.key, n.props, null, e.mode, r)).ref = xo(
                e,
                t,
                n
              )),
              (r.return = e),
              r);
        }
        function c(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Js(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
        }
        function d(e, t, n, r, o) {
          return null === t || 7 !== t.tag
            ? (((t = Ys(n, e.mode, r, o)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function f(e, t, n) {
          if ("string" == typeof t || "number" == typeof t)
            return ((t = Xs("" + t, e.mode, n)).return = e), t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case E:
                return (
                  ((n = Ks(t.type, t.key, t.props, null, e.mode, n)).ref = xo(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case S:
                return ((t = Js(t, e.mode, n)).return = e), t;
            }
            if (So(t) || $(t))
              return ((t = Ys(t, e.mode, n, null)).return = e), t;
            To(e, t);
          }
          return null;
        }
        function p(e, t, n, r) {
          var a = null !== t ? t.key : null;
          if ("string" == typeof n || "number" == typeof n)
            return null !== a ? null : s(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case E:
                return n.key === a
                  ? n.type === x
                    ? d(e, t, n.props.children, r, a)
                    : u(e, t, n, r)
                  : null;
              case S:
                return n.key === a ? c(e, t, n, r) : null;
            }
            if (So(n) || $(n)) return null !== a ? null : d(e, t, n, r, null);
            To(e, n);
          }
          return null;
        }
        function m(e, t, n, r, a) {
          if ("string" == typeof r || "number" == typeof r)
            return s(t, (e = e.get(n) || null), "" + r, a);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case E:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === x
                    ? d(t, e, r.props.children, a, r.key)
                    : u(t, e, r, a)
                );
              case S:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  a
                );
            }
            if (So(r) || $(r)) return d(t, (e = e.get(n) || null), r, a, null);
            To(t, r);
          }
          return null;
        }
        function g(a, i, l, s) {
          for (
            var u = null, c = null, d = i, g = (i = 0), h = null;
            null !== d && g < l.length;
            g++
          ) {
            d.index > g ? ((h = d), (d = null)) : (h = d.sibling);
            var b = p(a, d, l[g], s);
            if (null === b) {
              null === d && (d = h);
              break;
            }
            e && d && null === b.alternate && t(a, d),
              (i = o(b, i, g)),
              null === c ? (u = b) : (c.sibling = b),
              (c = b),
              (d = h);
          }
          if (g === l.length) return n(a, d), u;
          if (null === d) {
            for (; g < l.length; g++)
              null !== (d = f(a, l[g], s)) &&
                ((i = o(d, i, g)),
                null === c ? (u = d) : (c.sibling = d),
                (c = d));
            return u;
          }
          for (d = r(a, d); g < l.length; g++)
            null !== (h = m(d, a, g, l[g], s)) &&
              (e &&
                null !== h.alternate &&
                d.delete(null === h.key ? g : h.key),
              (i = o(h, i, g)),
              null === c ? (u = h) : (c.sibling = h),
              (c = h));
          return (
            e &&
              d.forEach(function (e) {
                return t(a, e);
              }),
            u
          );
        }
        function h(a, l, s, u) {
          var c = $(s);
          if ("function" != typeof c) throw Error(i(150));
          if (null == (s = c.call(s))) throw Error(i(151));
          for (
            var d = (c = null), g = l, h = (l = 0), b = null, v = s.next();
            null !== g && !v.done;
            h++, v = s.next()
          ) {
            g.index > h ? ((b = g), (g = null)) : (b = g.sibling);
            var y = p(a, g, v.value, u);
            if (null === y) {
              null === g && (g = b);
              break;
            }
            e && g && null === y.alternate && t(a, g),
              (l = o(y, l, h)),
              null === d ? (c = y) : (d.sibling = y),
              (d = y),
              (g = b);
          }
          if (v.done) return n(a, g), c;
          if (null === g) {
            for (; !v.done; h++, v = s.next())
              null !== (v = f(a, v.value, u)) &&
                ((l = o(v, l, h)),
                null === d ? (c = v) : (d.sibling = v),
                (d = v));
            return c;
          }
          for (g = r(a, g); !v.done; h++, v = s.next())
            null !== (v = m(g, a, h, v.value, u)) &&
              (e &&
                null !== v.alternate &&
                g.delete(null === v.key ? h : v.key),
              (l = o(v, l, h)),
              null === d ? (c = v) : (d.sibling = v),
              (d = v));
          return (
            e &&
              g.forEach(function (e) {
                return t(a, e);
              }),
            c
          );
        }
        return function (e, r, o, s) {
          var u =
            "object" == typeof o &&
            null !== o &&
            o.type === x &&
            null === o.key;
          u && (o = o.props.children);
          var c = "object" == typeof o && null !== o;
          if (c)
            switch (o.$$typeof) {
              case E:
                e: {
                  for (c = o.key, u = r; null !== u; ) {
                    if (u.key === c) {
                      if (7 === u.tag) {
                        if (o.type === x) {
                          n(e, u.sibling),
                            ((r = a(u, o.props.children)).return = e),
                            (e = r);
                          break e;
                        }
                      } else if (u.elementType === o.type) {
                        n(e, u.sibling),
                          ((r = a(u, o.props)).ref = xo(e, u, o)),
                          (r.return = e),
                          (e = r);
                        break e;
                      }
                      n(e, u);
                      break;
                    }
                    t(e, u), (u = u.sibling);
                  }
                  o.type === x
                    ? (((r = Ys(o.props.children, e.mode, s, o.key)).return =
                        e),
                      (e = r))
                    : (((s = Ks(o.type, o.key, o.props, null, e.mode, s)).ref =
                        xo(e, r, o)),
                      (s.return = e),
                      (e = s));
                }
                return l(e);
              case S:
                e: {
                  for (u = o.key; null !== r; ) {
                    if (r.key === u) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === o.containerInfo &&
                        r.stateNode.implementation === o.implementation
                      ) {
                        n(e, r.sibling),
                          ((r = a(r, o.children || [])).return = e),
                          (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = Js(o, e.mode, s)).return = e), (e = r);
                }
                return l(e);
            }
          if ("string" == typeof o || "number" == typeof o)
            return (
              (o = "" + o),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = a(r, o)).return = e), (e = r))
                : (n(e, r), ((r = Xs(o, e.mode, s)).return = e), (e = r)),
              l(e)
            );
          if (So(o)) return g(e, r, o, s);
          if ($(o)) return h(e, r, o, s);
          if ((c && To(e, o), void 0 === o && !u))
            switch (e.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(i(152, W(e.type) || "Component"));
            }
          return n(e, r);
        };
      }
      var Co = Ao(!0),
        _o = Ao(!1),
        Lo = {},
        Ro = ua(Lo),
        No = ua(Lo),
        Po = ua(Lo);
      function Oo(e) {
        if (e === Lo) throw Error(i(174));
        return e;
      }
      function Do(e, t) {
        switch ((da(Po, t), da(No, e), da(Ro, Lo), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : me(null, "");
            break;
          default:
            t = me(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            );
        }
        ca(Ro), da(Ro, t);
      }
      function Io() {
        ca(Ro), ca(No), ca(Po);
      }
      function Mo(e) {
        Oo(Po.current);
        var t = Oo(Ro.current),
          n = me(t, e.type);
        t !== n && (da(No, e), da(Ro, n));
      }
      function Bo(e) {
        No.current === e && (ca(Ro), ca(No));
      }
      var Fo = ua(0);
      function jo(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) ||
                "$?" === n.data ||
                "$!" === n.data)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (64 & t.flags) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var zo = null,
        Uo = null,
        $o = !1;
      function Go(e, t) {
        var n = Hs(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.flags = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function qo(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) && ((e.stateNode = t), !0)
            );
          case 6:
            return (
              null !==
                (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), !0)
            );
          default:
            return !1;
        }
      }
      function Ho(e) {
        if ($o) {
          var t = Uo;
          if (t) {
            var n = t;
            if (!qo(e, t)) {
              if (!(t = Kr(n.nextSibling)) || !qo(e, t))
                return (
                  (e.flags = (-1025 & e.flags) | 2), ($o = !1), void (zo = e)
                );
              Go(zo, n);
            }
            (zo = e), (Uo = Kr(t.firstChild));
          } else (e.flags = (-1025 & e.flags) | 2), ($o = !1), (zo = e);
        }
      }
      function Vo(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        zo = e;
      }
      function Wo(e) {
        if (e !== zo) return !1;
        if (!$o) return Vo(e), ($o = !0), !1;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !qr(t, e.memoizedProps))
        )
          for (t = Uo; t; ) Go(e, t), (t = Kr(t.nextSibling));
        if ((Vo(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(i(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    Uo = Kr(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
              }
              e = e.nextSibling;
            }
            Uo = null;
          }
        } else Uo = zo ? Kr(e.stateNode.nextSibling) : null;
        return !0;
      }
      function Ko() {
        (Uo = zo = null), ($o = !1);
      }
      var Yo = [];
      function Qo() {
        for (var e = 0; e < Yo.length; e++)
          Yo[e]._workInProgressVersionPrimary = null;
        Yo.length = 0;
      }
      var Xo = k.ReactCurrentDispatcher,
        Jo = k.ReactCurrentBatchConfig,
        Zo = 0,
        ei = null,
        ti = null,
        ni = null,
        ri = !1,
        ai = !1;
      function oi() {
        throw Error(i(321));
      }
      function ii(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!cr(e[n], t[n])) return !1;
        return !0;
      }
      function li(e, t, n, r, a, o) {
        if (
          ((Zo = o),
          (ei = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (Xo.current = null === e || null === e.memoizedState ? Oi : Di),
          (e = n(r, a)),
          ai)
        ) {
          o = 0;
          do {
            if (((ai = !1), !(25 > o))) throw Error(i(301));
            (o += 1),
              (ni = ti = null),
              (t.updateQueue = null),
              (Xo.current = Ii),
              (e = n(r, a));
          } while (ai);
        }
        if (
          ((Xo.current = Pi),
          (t = null !== ti && null !== ti.next),
          (Zo = 0),
          (ni = ti = ei = null),
          (ri = !1),
          t)
        )
          throw Error(i(300));
        return e;
      }
      function si() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === ni ? (ei.memoizedState = ni = e) : (ni = ni.next = e), ni
        );
      }
      function ui() {
        if (null === ti) {
          var e = ei.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = ti.next;
        var t = null === ni ? ei.memoizedState : ni.next;
        if (null !== t) (ni = t), (ti = e);
        else {
          if (null === e) throw Error(i(310));
          (e = {
            memoizedState: (ti = e).memoizedState,
            baseState: ti.baseState,
            baseQueue: ti.baseQueue,
            queue: ti.queue,
            next: null,
          }),
            null === ni ? (ei.memoizedState = ni = e) : (ni = ni.next = e);
        }
        return ni;
      }
      function ci(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function di(e) {
        var t = ui(),
          n = t.queue;
        if (null === n) throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = ti,
          a = r.baseQueue,
          o = n.pending;
        if (null !== o) {
          if (null !== a) {
            var l = a.next;
            (a.next = o.next), (o.next = l);
          }
          (r.baseQueue = a = o), (n.pending = null);
        }
        if (null !== a) {
          (a = a.next), (r = r.baseState);
          var s = (l = o = null),
            u = a;
          do {
            var c = u.lane;
            if ((Zo & c) === c)
              null !== s &&
                (s = s.next =
                  {
                    lane: 0,
                    action: u.action,
                    eagerReducer: u.eagerReducer,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
            else {
              var d = {
                lane: c,
                action: u.action,
                eagerReducer: u.eagerReducer,
                eagerState: u.eagerState,
                next: null,
              };
              null === s ? ((l = s = d), (o = r)) : (s = s.next = d),
                (ei.lanes |= c),
                ($l |= c);
            }
            u = u.next;
          } while (null !== u && u !== a);
          null === s ? (o = r) : (s.next = l),
            cr(r, t.memoizedState) || (Bi = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = s),
            (n.lastRenderedState = r);
        }
        return [t.memoizedState, n.dispatch];
      }
      function fi(e) {
        var t = ui(),
          n = t.queue;
        if (null === n) throw Error(i(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          a = n.pending,
          o = t.memoizedState;
        if (null !== a) {
          n.pending = null;
          var l = (a = a.next);
          do {
            (o = e(o, l.action)), (l = l.next);
          } while (l !== a);
          cr(o, t.memoizedState) || (Bi = !0),
            (t.memoizedState = o),
            null === t.baseQueue && (t.baseState = o),
            (n.lastRenderedState = o);
        }
        return [o, r];
      }
      function pi(e, t, n) {
        var r = t._getVersion;
        r = r(t._source);
        var a = t._workInProgressVersionPrimary;
        if (
          (null !== a
            ? (e = a === r)
            : ((e = e.mutableReadLanes),
              (e = (Zo & e) === e) &&
                ((t._workInProgressVersionPrimary = r), Yo.push(t))),
          e)
        )
          return n(t._source);
        throw (Yo.push(t), Error(i(350)));
      }
      function mi(e, t, n, r) {
        var a = Dl;
        if (null === a) throw Error(i(349));
        var o = t._getVersion,
          l = o(t._source),
          s = Xo.current,
          u = s.useState(function () {
            return pi(a, t, n);
          }),
          c = u[1],
          d = u[0];
        u = ni;
        var f = e.memoizedState,
          p = f.refs,
          m = p.getSnapshot,
          g = f.source;
        f = f.subscribe;
        var h = ei;
        return (
          (e.memoizedState = { refs: p, source: t, subscribe: r }),
          s.useEffect(
            function () {
              (p.getSnapshot = n), (p.setSnapshot = c);
              var e = o(t._source);
              if (!cr(l, e)) {
                (e = n(t._source)),
                  cr(d, e) ||
                    (c(e),
                    (e = ms(h)),
                    (a.mutableReadLanes |= e & a.pendingLanes)),
                  (e = a.mutableReadLanes),
                  (a.entangledLanes |= e);
                for (var r = a.entanglements, i = e; 0 < i; ) {
                  var s = 31 - qt(i),
                    u = 1 << s;
                  (r[s] |= e), (i &= ~u);
                }
              }
            },
            [n, t, r]
          ),
          s.useEffect(
            function () {
              return r(t._source, function () {
                var e = p.getSnapshot,
                  n = p.setSnapshot;
                try {
                  n(e(t._source));
                  var r = ms(h);
                  a.mutableReadLanes |= r & a.pendingLanes;
                } catch (o) {
                  n(function () {
                    throw o;
                  });
                }
              });
            },
            [t, r]
          ),
          (cr(m, n) && cr(g, t) && cr(f, r)) ||
            (((e = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: ci,
              lastRenderedState: d,
            }).dispatch = c =
              Ni.bind(null, ei, e)),
            (u.queue = e),
            (u.baseQueue = null),
            (d = pi(a, t, n)),
            (u.memoizedState = u.baseState = d)),
          d
        );
      }
      function gi(e, t, n) {
        return mi(ui(), e, t, n);
      }
      function hi(e) {
        var t = si();
        return (
          "function" == typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue =
            {
              pending: null,
              dispatch: null,
              lastRenderedReducer: ci,
              lastRenderedState: e,
            }).dispatch =
            Ni.bind(null, ei, e)),
          [t.memoizedState, e]
        );
      }
      function bi(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = ei.updateQueue)
            ? ((t = { lastEffect: null }),
              (ei.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function vi(e) {
        return (e = { current: e }), (si().memoizedState = e);
      }
      function yi() {
        return ui().memoizedState;
      }
      function wi(e, t, n, r) {
        var a = si();
        (ei.flags |= e),
          (a.memoizedState = bi(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function ki(e, t, n, r) {
        var a = ui();
        r = void 0 === r ? null : r;
        var o = void 0;
        if (null !== ti) {
          var i = ti.memoizedState;
          if (((o = i.destroy), null !== r && ii(r, i.deps)))
            return void bi(t, n, o, r);
        }
        (ei.flags |= e), (a.memoizedState = bi(1 | t, n, o, r));
      }
      function Ei(e, t) {
        return wi(516, 4, e, t);
      }
      function Si(e, t) {
        return ki(516, 4, e, t);
      }
      function xi(e, t) {
        return ki(4, 2, e, t);
      }
      function Ti(e, t) {
        return "function" == typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function Ai(e, t, n) {
        return (
          (n = null != n ? n.concat([e]) : null),
          ki(4, 2, Ti.bind(null, t, e), n)
        );
      }
      function Ci() {}
      function _i(e, t) {
        var n = ui();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && ii(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function Li(e, t) {
        var n = ui();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && ii(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function Ri(e, t) {
        var n = qa();
        Va(98 > n ? 98 : n, function () {
          e(!0);
        }),
          Va(97 < n ? 97 : n, function () {
            var n = Jo.transition;
            Jo.transition = 1;
            try {
              e(!1), t();
            } finally {
              Jo.transition = n;
            }
          });
      }
      function Ni(e, t, n) {
        var r = ps(),
          a = ms(e),
          o = {
            lane: a,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
          },
          i = t.pending;
        if (
          (null === i ? (o.next = o) : ((o.next = i.next), (i.next = o)),
          (t.pending = o),
          (i = e.alternate),
          e === ei || (null !== i && i === ei))
        )
          ai = ri = !0;
        else {
          if (
            0 === e.lanes &&
            (null === i || 0 === i.lanes) &&
            null !== (i = t.lastRenderedReducer)
          )
            try {
              var l = t.lastRenderedState,
                s = i(l, n);
              if (((o.eagerReducer = i), (o.eagerState = s), cr(s, l))) return;
            } catch (u) {}
          gs(e, a, r);
        }
      }
      var Pi = {
          readContext: io,
          useCallback: oi,
          useContext: oi,
          useEffect: oi,
          useImperativeHandle: oi,
          useLayoutEffect: oi,
          useMemo: oi,
          useReducer: oi,
          useRef: oi,
          useState: oi,
          useDebugValue: oi,
          useDeferredValue: oi,
          useTransition: oi,
          useMutableSource: oi,
          useOpaqueIdentifier: oi,
          unstable_isNewReconciler: !1,
        },
        Oi = {
          readContext: io,
          useCallback: function (e, t) {
            return (si().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: io,
          useEffect: Ei,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null != n ? n.concat([e]) : null),
              wi(4, 2, Ti.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return wi(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = si();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = si();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue =
                {
                  pending: null,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }).dispatch =
                Ni.bind(null, ei, e)),
              [r.memoizedState, e]
            );
          },
          useRef: vi,
          useState: hi,
          useDebugValue: Ci,
          useDeferredValue: function (e) {
            var t = hi(e),
              n = t[0],
              r = t[1];
            return (
              Ei(
                function () {
                  var t = Jo.transition;
                  Jo.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Jo.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = hi(!1),
              t = e[0];
            return vi((e = Ri.bind(null, e[1]))), [e, t];
          },
          useMutableSource: function (e, t, n) {
            var r = si();
            return (
              (r.memoizedState = {
                refs: { getSnapshot: t, setSnapshot: null },
                source: e,
                subscribe: n,
              }),
              mi(r, e, t, n)
            );
          },
          useOpaqueIdentifier: function () {
            if ($o) {
              var e = !1,
                t = (function (e) {
                  return { $$typeof: I, toString: e, valueOf: e };
                })(function () {
                  throw (
                    (e || ((e = !0), n("r:" + (Qr++).toString(36))),
                    Error(i(355)))
                  );
                }),
                n = hi(t)[1];
              return (
                !(2 & ei.mode) &&
                  ((ei.flags |= 516),
                  bi(
                    5,
                    function () {
                      n("r:" + (Qr++).toString(36));
                    },
                    void 0,
                    null
                  )),
                t
              );
            }
            return hi((t = "r:" + (Qr++).toString(36))), t;
          },
          unstable_isNewReconciler: !1,
        },
        Di = {
          readContext: io,
          useCallback: _i,
          useContext: io,
          useEffect: Si,
          useImperativeHandle: Ai,
          useLayoutEffect: xi,
          useMemo: Li,
          useReducer: di,
          useRef: yi,
          useState: function () {
            return di(ci);
          },
          useDebugValue: Ci,
          useDeferredValue: function (e) {
            var t = di(ci),
              n = t[0],
              r = t[1];
            return (
              Si(
                function () {
                  var t = Jo.transition;
                  Jo.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Jo.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = di(ci)[0];
            return [yi().current, e];
          },
          useMutableSource: gi,
          useOpaqueIdentifier: function () {
            return di(ci)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Ii = {
          readContext: io,
          useCallback: _i,
          useContext: io,
          useEffect: Si,
          useImperativeHandle: Ai,
          useLayoutEffect: xi,
          useMemo: Li,
          useReducer: fi,
          useRef: yi,
          useState: function () {
            return fi(ci);
          },
          useDebugValue: Ci,
          useDeferredValue: function (e) {
            var t = fi(ci),
              n = t[0],
              r = t[1];
            return (
              Si(
                function () {
                  var t = Jo.transition;
                  Jo.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Jo.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = fi(ci)[0];
            return [yi().current, e];
          },
          useMutableSource: gi,
          useOpaqueIdentifier: function () {
            return fi(ci)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Mi = k.ReactCurrentOwner,
        Bi = !1;
      function Fi(e, t, n, r) {
        t.child = null === e ? _o(t, null, n, r) : Co(t, e.child, n, r);
      }
      function ji(e, t, n, r, a) {
        n = n.render;
        var o = t.ref;
        return (
          oo(t, a),
          (r = li(e, t, n, r, o, a)),
          null === e || Bi
            ? ((t.flags |= 1), Fi(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~a),
              il(e, t, a))
        );
      }
      function zi(e, t, n, r, a, o) {
        if (null === e) {
          var i = n.type;
          return "function" != typeof i ||
            Vs(i) ||
            void 0 !== i.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Ks(n.type, null, r, t, t.mode, o)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = i), Ui(e, t, i, r, a, o));
        }
        return (
          (i = e.child),
          a & o ||
          ((a = i.memoizedProps),
          !(n = null !== (n = n.compare) ? n : fr)(a, r) || e.ref !== t.ref)
            ? ((t.flags |= 1),
              ((e = Ws(i, r)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : il(e, t, o)
        );
      }
      function Ui(e, t, n, r, a, o) {
        if (null !== e && fr(e.memoizedProps, r) && e.ref === t.ref) {
          if (((Bi = !1), !(o & a))) return (t.lanes = e.lanes), il(e, t, o);
          16384 & e.flags && (Bi = !0);
        }
        return qi(e, t, n, r, o);
      }
      function $i(e, t, n) {
        var r = t.pendingProps,
          a = r.children,
          o = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
          if (4 & t.mode) {
            if (!(1073741824 & n))
              return (
                (e = null !== o ? o.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = { baseLanes: e }),
                Ss(t, e),
                null
              );
            (t.memoizedState = { baseLanes: 0 }),
              Ss(t, null !== o ? o.baseLanes : n);
          } else (t.memoizedState = { baseLanes: 0 }), Ss(t, n);
        else
          null !== o
            ? ((r = o.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            Ss(t, r);
        return Fi(e, t, a, n), t.child;
      }
      function Gi(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.flags |= 128);
      }
      function qi(e, t, n, r, a) {
        var o = ba(n) ? ga : pa.current;
        return (
          (o = ha(t, o)),
          oo(t, a),
          (n = li(e, t, n, r, o, a)),
          null === e || Bi
            ? ((t.flags |= 1), Fi(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~a),
              il(e, t, a))
        );
      }
      function Hi(e, t, n, r, a) {
        if (ba(n)) {
          var o = !0;
          ka(t);
        } else o = !1;
        if ((oo(t, a), null === t.stateNode))
          null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            wo(t, n, r),
            Eo(t, n, r, a),
            (r = !0);
        else if (null === e) {
          var i = t.stateNode,
            l = t.memoizedProps;
          i.props = l;
          var s = i.context,
            u = n.contextType;
          "object" == typeof u && null !== u
            ? (u = io(u))
            : (u = ha(t, (u = ba(n) ? ga : pa.current)));
          var c = n.getDerivedStateFromProps,
            d =
              "function" == typeof c ||
              "function" == typeof i.getSnapshotBeforeUpdate;
          d ||
            ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
              "function" != typeof i.componentWillReceiveProps) ||
            ((l !== r || s !== u) && ko(t, i, r, u)),
            (lo = !1);
          var f = t.memoizedState;
          (i.state = f),
            mo(t, r, i, a),
            (s = t.memoizedState),
            l !== r || f !== s || ma.current || lo
              ? ("function" == typeof c &&
                  (bo(t, n, c, r), (s = t.memoizedState)),
                (l = lo || yo(t, n, l, r, f, s, u))
                  ? (d ||
                      ("function" != typeof i.UNSAFE_componentWillMount &&
                        "function" != typeof i.componentWillMount) ||
                      ("function" == typeof i.componentWillMount &&
                        i.componentWillMount(),
                      "function" == typeof i.UNSAFE_componentWillMount &&
                        i.UNSAFE_componentWillMount()),
                    "function" == typeof i.componentDidMount && (t.flags |= 4))
                  : ("function" == typeof i.componentDidMount && (t.flags |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = s)),
                (i.props = r),
                (i.state = s),
                (i.context = u),
                (r = l))
              : ("function" == typeof i.componentDidMount && (t.flags |= 4),
                (r = !1));
        } else {
          (i = t.stateNode),
            uo(e, t),
            (l = t.memoizedProps),
            (u = t.type === t.elementType ? l : Xa(t.type, l)),
            (i.props = u),
            (d = t.pendingProps),
            (f = i.context),
            "object" == typeof (s = n.contextType) && null !== s
              ? (s = io(s))
              : (s = ha(t, (s = ba(n) ? ga : pa.current)));
          var p = n.getDerivedStateFromProps;
          (c =
            "function" == typeof p ||
            "function" == typeof i.getSnapshotBeforeUpdate) ||
            ("function" != typeof i.UNSAFE_componentWillReceiveProps &&
              "function" != typeof i.componentWillReceiveProps) ||
            ((l !== d || f !== s) && ko(t, i, r, s)),
            (lo = !1),
            (f = t.memoizedState),
            (i.state = f),
            mo(t, r, i, a);
          var m = t.memoizedState;
          l !== d || f !== m || ma.current || lo
            ? ("function" == typeof p &&
                (bo(t, n, p, r), (m = t.memoizedState)),
              (u = lo || yo(t, n, u, r, f, m, s))
                ? (c ||
                    ("function" != typeof i.UNSAFE_componentWillUpdate &&
                      "function" != typeof i.componentWillUpdate) ||
                    ("function" == typeof i.componentWillUpdate &&
                      i.componentWillUpdate(r, m, s),
                    "function" == typeof i.UNSAFE_componentWillUpdate &&
                      i.UNSAFE_componentWillUpdate(r, m, s)),
                  "function" == typeof i.componentDidUpdate && (t.flags |= 4),
                  "function" == typeof i.getSnapshotBeforeUpdate &&
                    (t.flags |= 256))
                : ("function" != typeof i.componentDidUpdate ||
                    (l === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 4),
                  "function" != typeof i.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && f === e.memoizedState) ||
                    (t.flags |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = m)),
              (i.props = r),
              (i.state = m),
              (i.context = s),
              (r = u))
            : ("function" != typeof i.componentDidUpdate ||
                (l === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof i.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && f === e.memoizedState) ||
                (t.flags |= 256),
              (r = !1));
        }
        return Vi(e, t, n, r, o, a);
      }
      function Vi(e, t, n, r, a, o) {
        Gi(e, t);
        var i = !!(64 & t.flags);
        if (!r && !i) return a && Ea(t, n, !1), il(e, t, o);
        (r = t.stateNode), (Mi.current = t);
        var l =
          i && "function" != typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.flags |= 1),
          null !== e && i
            ? ((t.child = Co(t, e.child, null, o)),
              (t.child = Co(t, null, l, o)))
            : Fi(e, t, l, o),
          (t.memoizedState = r.state),
          a && Ea(t, n, !0),
          t.child
        );
      }
      function Wi(e) {
        var t = e.stateNode;
        t.pendingContext
          ? ya(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && ya(0, t.context, !1),
          Do(e, t.containerInfo);
      }
      var Ki,
        Yi,
        Qi,
        Xi,
        Ji = { dehydrated: null, retryLane: 0 };
      function Zi(e, t, n) {
        var r,
          a = t.pendingProps,
          o = Fo.current,
          i = !1;
        return (
          (r = !!(64 & t.flags)) ||
            (r = (null === e || null !== e.memoizedState) && !!(2 & o)),
          r
            ? ((i = !0), (t.flags &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === a.fallback ||
              !0 === a.unstable_avoidThisFallback ||
              (o |= 1),
          da(Fo, 1 & o),
          null === e
            ? (void 0 !== a.fallback && Ho(t),
              (e = a.children),
              (o = a.fallback),
              i
                ? ((e = el(t, e, o, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = Ji),
                  e)
                : "number" == typeof a.unstable_expectedLoadTime
                ? ((e = el(t, e, o, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = Ji),
                  (t.lanes = 33554432),
                  e)
                : (((n = Qs(
                    { mode: "visible", children: e },
                    t.mode,
                    n,
                    null
                  )).return = t),
                  (t.child = n)))
            : (e.memoizedState,
              i
                ? ((a = nl(e, t, a.children, a.fallback, n)),
                  (i = t.child),
                  (o = e.child.memoizedState),
                  (i.memoizedState =
                    null === o
                      ? { baseLanes: n }
                      : { baseLanes: o.baseLanes | n }),
                  (i.childLanes = e.childLanes & ~n),
                  (t.memoizedState = Ji),
                  a)
                : ((n = tl(e, t, a.children, n)), (t.memoizedState = null), n))
        );
      }
      function el(e, t, n, r) {
        var a = e.mode,
          o = e.child;
        return (
          (t = { mode: "hidden", children: t }),
          2 & a || null === o
            ? (o = Qs(t, a, 0, null))
            : ((o.childLanes = 0), (o.pendingProps = t)),
          (n = Ys(n, a, r, null)),
          (o.return = e),
          (n.return = e),
          (o.sibling = n),
          (e.child = o),
          n
        );
      }
      function tl(e, t, n, r) {
        var a = e.child;
        return (
          (e = a.sibling),
          (n = Ws(a, { mode: "visible", children: n })),
          !(2 & t.mode) && (n.lanes = r),
          (n.return = t),
          (n.sibling = null),
          null !== e &&
            ((e.nextEffect = null),
            (e.flags = 8),
            (t.firstEffect = t.lastEffect = e)),
          (t.child = n)
        );
      }
      function nl(e, t, n, r, a) {
        var o = t.mode,
          i = e.child;
        e = i.sibling;
        var l = { mode: "hidden", children: n };
        return (
          2 & o || t.child === i
            ? (n = Ws(i, l))
            : (((n = t.child).childLanes = 0),
              (n.pendingProps = l),
              null !== (i = n.lastEffect)
                ? ((t.firstEffect = n.firstEffect),
                  (t.lastEffect = i),
                  (i.nextEffect = null))
                : (t.firstEffect = t.lastEffect = null)),
          null !== e ? (r = Ws(e, r)) : ((r = Ys(r, o, a, null)).flags |= 2),
          (r.return = t),
          (n.return = t),
          (n.sibling = r),
          (t.child = n),
          r
        );
      }
      function rl(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        null !== n && (n.lanes |= t), ao(e.return, t);
      }
      function al(e, t, n, r, a, o) {
        var i = e.memoizedState;
        null === i
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: a,
              lastEffect: o,
            })
          : ((i.isBackwards = t),
            (i.rendering = null),
            (i.renderingStartTime = 0),
            (i.last = r),
            (i.tail = n),
            (i.tailMode = a),
            (i.lastEffect = o));
      }
      function ol(e, t, n) {
        var r = t.pendingProps,
          a = r.revealOrder,
          o = r.tail;
        if ((Fi(e, t, r.children, n), 2 & (r = Fo.current)))
          (r = (1 & r) | 2), (t.flags |= 64);
        else {
          if (null !== e && 64 & e.flags)
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && rl(e, n);
              else if (19 === e.tag) rl(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((da(Fo, r), 2 & t.mode))
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                null !== (e = n.alternate) && null === jo(e) && (a = n),
                  (n = n.sibling);
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                al(t, !1, a, n, o, t.lastEffect);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === jo(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              al(t, !0, n, null, o, t.lastEffect);
              break;
            case "together":
              al(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        else t.memoizedState = null;
        return t.child;
      }
      function il(e, t, n) {
        if (
          (null !== e && (t.dependencies = e.dependencies),
          ($l |= t.lanes),
          n & t.childLanes)
        ) {
          if (null !== e && t.child !== e.child) throw Error(i(153));
          if (null !== t.child) {
            for (
              n = Ws((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = Ws(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        return null;
      }
      function ll(e, t) {
        if (!$o)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; null !== t; )
                null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; null !== n; )
                null !== n.alternate && (r = n), (n = n.sibling);
              null === r
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
          }
      }
      function sl(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
          case 17:
            return ba(t.type) && va(), null;
          case 3:
            return (
              Io(),
              ca(ma),
              ca(pa),
              Qo(),
              (r = t.stateNode).pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) ||
                (Wo(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
              Yi(t),
              null
            );
          case 5:
            Bo(t);
            var o = Oo(Po.current);
            if (((n = t.type), null !== e && null != t.stateNode))
              Qi(e, t, n, r, o), e.ref !== t.ref && (t.flags |= 128);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(i(166));
                return null;
              }
              if (((e = Oo(Ro.current)), Wo(t))) {
                (r = t.stateNode), (n = t.type);
                var l = t.memoizedProps;
                switch (((r[Jr] = t), (r[Zr] = l), n)) {
                  case "dialog":
                    Rr("cancel", r), Rr("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Rr("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < Ar.length; e++) Rr(Ar[e], r);
                    break;
                  case "source":
                    Rr("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Rr("error", r), Rr("load", r);
                    break;
                  case "details":
                    Rr("toggle", r);
                    break;
                  case "input":
                    ee(r, l), Rr("invalid", r);
                    break;
                  case "select":
                    (r._wrapperState = { wasMultiple: !!l.multiple }),
                      Rr("invalid", r);
                    break;
                  case "textarea":
                    se(r, l), Rr("invalid", r);
                }
                for (var u in (xe(n, l), (e = null), l))
                  l.hasOwnProperty(u) &&
                    ((o = l[u]),
                    "children" === u
                      ? "string" == typeof o
                        ? r.textContent !== o && (e = ["children", o])
                        : "number" == typeof o &&
                          r.textContent !== "" + o &&
                          (e = ["children", "" + o])
                      : s.hasOwnProperty(u) &&
                        null != o &&
                        "onScroll" === u &&
                        Rr("scroll", r));
                switch (n) {
                  case "input":
                    Q(r), re(r, l, !0);
                    break;
                  case "textarea":
                    Q(r), ce(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" == typeof l.onClick && (r.onclick = zr);
                }
                (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
              } else {
                switch (
                  ((u = 9 === o.nodeType ? o : o.ownerDocument),
                  e === de && (e = pe(n)),
                  e === de
                    ? "script" === n
                      ? (((e = u.createElement("div")).innerHTML =
                          "<script></script>"),
                        (e = e.removeChild(e.firstChild)))
                      : "string" == typeof r.is
                      ? (e = u.createElement(n, { is: r.is }))
                      : ((e = u.createElement(n)),
                        "select" === n &&
                          ((u = e),
                          r.multiple
                            ? (u.multiple = !0)
                            : r.size && (u.size = r.size)))
                    : (e = u.createElementNS(e, n)),
                  (e[Jr] = t),
                  (e[Zr] = r),
                  Ki(e, t, !1, !1),
                  (t.stateNode = e),
                  (u = Te(n, r)),
                  n)
                ) {
                  case "dialog":
                    Rr("cancel", e), Rr("close", e), (o = r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Rr("load", e), (o = r);
                    break;
                  case "video":
                  case "audio":
                    for (o = 0; o < Ar.length; o++) Rr(Ar[o], e);
                    o = r;
                    break;
                  case "source":
                    Rr("error", e), (o = r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Rr("error", e), Rr("load", e), (o = r);
                    break;
                  case "details":
                    Rr("toggle", e), (o = r);
                    break;
                  case "input":
                    ee(e, r), (o = Z(e, r)), Rr("invalid", e);
                    break;
                  case "option":
                    o = oe(e, r);
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (o = a({}, r, { value: void 0 })),
                      Rr("invalid", e);
                    break;
                  case "textarea":
                    se(e, r), (o = le(e, r)), Rr("invalid", e);
                    break;
                  default:
                    o = r;
                }
                xe(n, o);
                var c = o;
                for (l in c)
                  if (c.hasOwnProperty(l)) {
                    var d = c[l];
                    "style" === l
                      ? Ee(e, d)
                      : "dangerouslySetInnerHTML" === l
                      ? null != (d = d ? d.__html : void 0) && be(e, d)
                      : "children" === l
                      ? "string" == typeof d
                        ? ("textarea" !== n || "" !== d) && ve(e, d)
                        : "number" == typeof d && ve(e, "" + d)
                      : "suppressContentEditableWarning" !== l &&
                        "suppressHydrationWarning" !== l &&
                        "autoFocus" !== l &&
                        (s.hasOwnProperty(l)
                          ? null != d && "onScroll" === l && Rr("scroll", e)
                          : null != d && w(e, l, d, u));
                  }
                switch (n) {
                  case "input":
                    Q(e), re(e, r, !1);
                    break;
                  case "textarea":
                    Q(e), ce(e);
                    break;
                  case "option":
                    null != r.value && e.setAttribute("value", "" + K(r.value));
                    break;
                  case "select":
                    (e.multiple = !!r.multiple),
                      null != (l = r.value)
                        ? ie(e, !!r.multiple, l, !1)
                        : null != r.defaultValue &&
                          ie(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    "function" == typeof o.onClick && (e.onclick = zr);
                }
                Gr(n, r) && (t.flags |= 4);
              }
              null !== t.ref && (t.flags |= 128);
            }
            return null;
          case 6:
            if (e && null != t.stateNode) Xi(e, t, e.memoizedProps, r);
            else {
              if ("string" != typeof r && null === t.stateNode)
                throw Error(i(166));
              (n = Oo(Po.current)),
                Oo(Ro.current),
                Wo(t)
                  ? ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[Jr] = t),
                    r.nodeValue !== n && (t.flags |= 4))
                  : (((r = (
                      9 === n.nodeType ? n : n.ownerDocument
                    ).createTextNode(r))[Jr] = t),
                    (t.stateNode = r));
            }
            return null;
          case 13:
            return (
              ca(Fo),
              (r = t.memoizedState),
              64 & t.flags
                ? ((t.lanes = n), t)
                : ((r = null !== r),
                  (n = !1),
                  null === e
                    ? void 0 !== t.memoizedProps.fallback && Wo(t)
                    : (n = null !== e.memoizedState),
                  r &&
                    !n &&
                    2 & t.mode &&
                    ((null === e &&
                      !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    1 & Fo.current
                      ? 0 === jl && (jl = 3)
                      : ((0 !== jl && 3 !== jl) || (jl = 4),
                        null === Dl ||
                          (!(134217727 & $l) && !(134217727 & Gl)) ||
                          ys(Dl, Ml))),
                  (r || n) && (t.flags |= 4),
                  null)
            );
          case 4:
            return (
              Io(), Yi(t), null === e && Pr(t.stateNode.containerInfo), null
            );
          case 10:
            return ro(t), null;
          case 19:
            if ((ca(Fo), null === (r = t.memoizedState))) return null;
            if (((l = !!(64 & t.flags)), null === (u = r.rendering)))
              if (l) ll(r, !1);
              else {
                if (0 !== jl || (null !== e && 64 & e.flags))
                  for (e = t.child; null !== e; ) {
                    if (null !== (u = jo(e))) {
                      for (
                        t.flags |= 64,
                          ll(r, !1),
                          null !== (l = u.updateQueue) &&
                            ((t.updateQueue = l), (t.flags |= 4)),
                          null === r.lastEffect && (t.firstEffect = null),
                          t.lastEffect = r.lastEffect,
                          r = n,
                          n = t.child;
                        null !== n;

                      )
                        (e = r),
                          ((l = n).flags &= 2),
                          (l.nextEffect = null),
                          (l.firstEffect = null),
                          (l.lastEffect = null),
                          null === (u = l.alternate)
                            ? ((l.childLanes = 0),
                              (l.lanes = e),
                              (l.child = null),
                              (l.memoizedProps = null),
                              (l.memoizedState = null),
                              (l.updateQueue = null),
                              (l.dependencies = null),
                              (l.stateNode = null))
                            : ((l.childLanes = u.childLanes),
                              (l.lanes = u.lanes),
                              (l.child = u.child),
                              (l.memoizedProps = u.memoizedProps),
                              (l.memoizedState = u.memoizedState),
                              (l.updateQueue = u.updateQueue),
                              (l.type = u.type),
                              (e = u.dependencies),
                              (l.dependencies =
                                null === e
                                  ? null
                                  : {
                                      lanes: e.lanes,
                                      firstContext: e.firstContext,
                                    })),
                          (n = n.sibling);
                      return da(Fo, (1 & Fo.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== r.tail &&
                  Ga() > Wl &&
                  ((t.flags |= 64), (l = !0), ll(r, !1), (t.lanes = 33554432));
              }
            else {
              if (!l)
                if (null !== (e = jo(u))) {
                  if (
                    ((t.flags |= 64),
                    (l = !0),
                    null !== (n = e.updateQueue) &&
                      ((t.updateQueue = n), (t.flags |= 4)),
                    ll(r, !0),
                    null === r.tail &&
                      "hidden" === r.tailMode &&
                      !u.alternate &&
                      !$o)
                  )
                    return (
                      null !== (t = t.lastEffect = r.lastEffect) &&
                        (t.nextEffect = null),
                      null
                    );
                } else
                  2 * Ga() - r.renderingStartTime > Wl &&
                    1073741824 !== n &&
                    ((t.flags |= 64),
                    (l = !0),
                    ll(r, !1),
                    (t.lanes = 33554432));
              r.isBackwards
                ? ((u.sibling = t.child), (t.child = u))
                : (null !== (n = r.last) ? (n.sibling = u) : (t.child = u),
                  (r.last = u));
            }
            return null !== r.tail
              ? ((n = r.tail),
                (r.rendering = n),
                (r.tail = n.sibling),
                (r.lastEffect = t.lastEffect),
                (r.renderingStartTime = Ga()),
                (n.sibling = null),
                (t = Fo.current),
                da(Fo, l ? (1 & t) | 2 : 1 & t),
                n)
              : null;
          case 23:
          case 24:
            return (
              xs(),
              null !== e &&
                (null !== e.memoizedState) != (null !== t.memoizedState) &&
                "unstable-defer-without-hiding" !== r.mode &&
                (t.flags |= 4),
              null
            );
        }
        throw Error(i(156, t.tag));
      }
      function ul(e) {
        switch (e.tag) {
          case 1:
            ba(e.type) && va();
            var t = e.flags;
            return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
          case 3:
            if ((Io(), ca(ma), ca(pa), Qo(), 64 & (t = e.flags)))
              throw Error(i(285));
            return (e.flags = (-4097 & t) | 64), e;
          case 5:
            return Bo(e), null;
          case 13:
            return (
              ca(Fo),
              4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
            );
          case 19:
            return ca(Fo), null;
          case 4:
            return Io(), null;
          case 10:
            return ro(e), null;
          case 23:
          case 24:
            return xs(), null;
          default:
            return null;
        }
      }
      function cl(e, t) {
        try {
          var n = "",
            r = t;
          do {
            (n += V(r)), (r = r.return);
          } while (r);
          var a = n;
        } catch (o) {
          a = "\nError generating stack: " + o.message + "\n" + o.stack;
        }
        return { value: e, source: t, stack: a };
      }
      function dl(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      (Ki = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (Yi = function () {}),
        (Qi = function (e, t, n, r) {
          var o = e.memoizedProps;
          if (o !== r) {
            (e = t.stateNode), Oo(Ro.current);
            var i,
              l = null;
            switch (n) {
              case "input":
                (o = Z(e, o)), (r = Z(e, r)), (l = []);
                break;
              case "option":
                (o = oe(e, o)), (r = oe(e, r)), (l = []);
                break;
              case "select":
                (o = a({}, o, { value: void 0 })),
                  (r = a({}, r, { value: void 0 })),
                  (l = []);
                break;
              case "textarea":
                (o = le(e, o)), (r = le(e, r)), (l = []);
                break;
              default:
                "function" != typeof o.onClick &&
                  "function" == typeof r.onClick &&
                  (e.onclick = zr);
            }
            for (d in (xe(n, r), (n = null), o))
              if (!r.hasOwnProperty(d) && o.hasOwnProperty(d) && null != o[d])
                if ("style" === d) {
                  var u = o[d];
                  for (i in u)
                    u.hasOwnProperty(i) && (n || (n = {}), (n[i] = ""));
                } else
                  "dangerouslySetInnerHTML" !== d &&
                    "children" !== d &&
                    "suppressContentEditableWarning" !== d &&
                    "suppressHydrationWarning" !== d &&
                    "autoFocus" !== d &&
                    (s.hasOwnProperty(d)
                      ? l || (l = [])
                      : (l = l || []).push(d, null));
            for (d in r) {
              var c = r[d];
              if (
                ((u = null != o ? o[d] : void 0),
                r.hasOwnProperty(d) && c !== u && (null != c || null != u))
              )
                if ("style" === d)
                  if (u) {
                    for (i in u)
                      !u.hasOwnProperty(i) ||
                        (c && c.hasOwnProperty(i)) ||
                        (n || (n = {}), (n[i] = ""));
                    for (i in c)
                      c.hasOwnProperty(i) &&
                        u[i] !== c[i] &&
                        (n || (n = {}), (n[i] = c[i]));
                  } else n || (l || (l = []), l.push(d, n)), (n = c);
                else
                  "dangerouslySetInnerHTML" === d
                    ? ((c = c ? c.__html : void 0),
                      (u = u ? u.__html : void 0),
                      null != c && u !== c && (l = l || []).push(d, c))
                    : "children" === d
                    ? ("string" != typeof c && "number" != typeof c) ||
                      (l = l || []).push(d, "" + c)
                    : "suppressContentEditableWarning" !== d &&
                      "suppressHydrationWarning" !== d &&
                      (s.hasOwnProperty(d)
                        ? (null != c && "onScroll" === d && Rr("scroll", e),
                          l || u === c || (l = []))
                        : "object" == typeof c && null !== c && c.$$typeof === I
                        ? c.toString()
                        : (l = l || []).push(d, c));
            }
            n && (l = l || []).push("style", n);
            var d = l;
            (t.updateQueue = d) && (t.flags |= 4);
          }
        }),
        (Xi = function (e, t, n, r) {
          n !== r && (t.flags |= 4);
        });
      var fl = "function" == typeof WeakMap ? WeakMap : Map;
      function pl(e, t, n) {
        ((n = co(-1, n)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            Xl || ((Xl = !0), (Jl = r)), dl(0, t);
          }),
          n
        );
      }
      function ml(e, t, n) {
        (n = co(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
          var a = t.value;
          n.payload = function () {
            return dl(0, t), r(a);
          };
        }
        var o = e.stateNode;
        return (
          null !== o &&
            "function" == typeof o.componentDidCatch &&
            (n.callback = function () {
              "function" != typeof r &&
                (null === Zl ? (Zl = new Set([this])) : Zl.add(this), dl(0, t));
              var e = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: null !== e ? e : "",
              });
            }),
          n
        );
      }
      var gl = "function" == typeof WeakSet ? WeakSet : Set;
      function hl(e) {
        var t = e.ref;
        if (null !== t)
          if ("function" == typeof t)
            try {
              t(null);
            } catch (n) {
              Us(e, n);
            }
          else t.current = null;
      }
      function bl(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
          case 5:
          case 6:
          case 4:
          case 17:
            return;
          case 1:
            if (256 & t.flags && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                t.elementType === t.type ? n : Xa(t.type, n),
                r
              )),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            return;
          case 3:
            return void (256 & t.flags && Wr(t.stateNode.containerInfo));
        }
        throw Error(i(163));
      }
      function vl(e, t, n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            if (
              null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
            ) {
              e = t = t.next;
              do {
                if (!(3 & ~e.tag)) {
                  var r = e.create;
                  e.destroy = r();
                }
                e = e.next;
              } while (e !== t);
            }
            if (
              null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
            ) {
              e = t = t.next;
              do {
                var a = e;
                (r = a.next),
                  4 & (a = a.tag) && 1 & a && (Fs(n, e), Bs(n, e)),
                  (e = r);
              } while (e !== t);
            }
            return;
          case 1:
            return (
              (e = n.stateNode),
              4 & n.flags &&
                (null === t
                  ? e.componentDidMount()
                  : ((r =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : Xa(n.type, t.memoizedProps)),
                    e.componentDidUpdate(
                      r,
                      t.memoizedState,
                      e.__reactInternalSnapshotBeforeUpdate
                    ))),
              void (null !== (t = n.updateQueue) && go(n, t, e))
            );
          case 3:
            if (null !== (t = n.updateQueue)) {
              if (((e = null), null !== n.child))
                switch (n.child.tag) {
                  case 5:
                  case 1:
                    e = n.child.stateNode;
                }
              go(n, t, e);
            }
            return;
          case 5:
            return (
              (e = n.stateNode),
              void (
                null === t &&
                4 & n.flags &&
                Gr(n.type, n.memoizedProps) &&
                e.focus()
              )
            );
          case 6:
          case 4:
          case 12:
          case 19:
          case 17:
          case 20:
          case 21:
          case 23:
          case 24:
            return;
          case 13:
            return void (
              null === n.memoizedState &&
              ((n = n.alternate),
              null !== n &&
                ((n = n.memoizedState),
                null !== n && ((n = n.dehydrated), null !== n && Et(n))))
            );
        }
        throw Error(i(163));
      }
      function yl(e, t) {
        for (var n = e; ; ) {
          if (5 === n.tag) {
            var r = n.stateNode;
            if (t)
              "function" == typeof (r = r.style).setProperty
                ? r.setProperty("display", "none", "important")
                : (r.display = "none");
            else {
              r = n.stateNode;
              var a = n.memoizedProps.style;
              (a = null != a && a.hasOwnProperty("display") ? a.display : null),
                (r.style.display = ke("display", a));
            }
          } else if (6 === n.tag)
            n.stateNode.nodeValue = t ? "" : n.memoizedProps;
          else if (
            ((23 !== n.tag && 24 !== n.tag) ||
              null === n.memoizedState ||
              n === e) &&
            null !== n.child
          ) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === e) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === e) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }
      function wl(e, t) {
        if (xa && "function" == typeof xa.onCommitFiberUnmount)
          try {
            xa.onCommitFiberUnmount(Sa, t);
          } catch (o) {}
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var n = (e = e.next);
              do {
                var r = n,
                  a = r.destroy;
                if (((r = r.tag), void 0 !== a))
                  if (4 & r) Fs(t, n);
                  else {
                    r = t;
                    try {
                      a();
                    } catch (o) {
                      Us(r, o);
                    }
                  }
                n = n.next;
              } while (n !== e);
            }
            break;
          case 1:
            if (
              (hl(t),
              "function" == typeof (e = t.stateNode).componentWillUnmount)
            )
              try {
                (e.props = t.memoizedProps),
                  (e.state = t.memoizedState),
                  e.componentWillUnmount();
              } catch (o) {
                Us(t, o);
              }
            break;
          case 5:
            hl(t);
            break;
          case 4:
            Al(e, t);
        }
      }
      function kl(e) {
        (e.alternate = null),
          (e.child = null),
          (e.dependencies = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.return = null),
          (e.updateQueue = null);
      }
      function El(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function Sl(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (El(t)) break e;
            t = t.return;
          }
          throw Error(i(160));
        }
        var n = t;
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(i(161));
        }
        16 & n.flags && (ve(t, ""), (n.flags &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || El(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.flags) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.flags)) {
            n = n.stateNode;
            break e;
          }
        }
        r ? xl(e, n, t) : Tl(e, n, t);
      }
      function xl(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType
                  ? (t = n.parentNode).insertBefore(e, n)
                  : (t = n).appendChild(e),
                null != (n = n._reactRootContainer) ||
                  null !== t.onclick ||
                  (t.onclick = zr));
        else if (4 !== r && null !== (e = e.child))
          for (xl(e, t, n), e = e.sibling; null !== e; )
            xl(e, t, n), (e = e.sibling);
      }
      function Tl(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (Tl(e, t, n), e = e.sibling; null !== e; )
            Tl(e, t, n), (e = e.sibling);
      }
      function Al(e, t) {
        for (var n, r, a = t, o = !1; ; ) {
          if (!o) {
            o = a.return;
            e: for (;;) {
              if (null === o) throw Error(i(160));
              switch (((n = o.stateNode), o.tag)) {
                case 5:
                  r = !1;
                  break e;
                case 3:
                case 4:
                  (n = n.containerInfo), (r = !0);
                  break e;
              }
              o = o.return;
            }
            o = !0;
          }
          if (5 === a.tag || 6 === a.tag) {
            e: for (var l = e, s = a, u = s; ; )
              if ((wl(l, u), null !== u.child && 4 !== u.tag))
                (u.child.return = u), (u = u.child);
              else {
                if (u === s) break e;
                for (; null === u.sibling; ) {
                  if (null === u.return || u.return === s) break e;
                  u = u.return;
                }
                (u.sibling.return = u.return), (u = u.sibling);
              }
            r
              ? ((l = n),
                (s = a.stateNode),
                8 === l.nodeType
                  ? l.parentNode.removeChild(s)
                  : l.removeChild(s))
              : n.removeChild(a.stateNode);
          } else if (4 === a.tag) {
            if (null !== a.child) {
              (n = a.stateNode.containerInfo),
                (r = !0),
                (a.child.return = a),
                (a = a.child);
              continue;
            }
          } else if ((wl(e, a), null !== a.child)) {
            (a.child.return = a), (a = a.child);
            continue;
          }
          if (a === t) break;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === t) return;
            4 === (a = a.return).tag && (o = !1);
          }
          (a.sibling.return = a.return), (a = a.sibling);
        }
      }
      function Cl(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            var n = t.updateQueue;
            if (null !== (n = null !== n ? n.lastEffect : null)) {
              var r = (n = n.next);
              do {
                !(3 & ~r.tag) &&
                  ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()),
                  (r = r.next);
              } while (r !== n);
            }
            return;
          case 1:
          case 12:
          case 17:
            return;
          case 5:
            if (null != (n = t.stateNode)) {
              r = t.memoizedProps;
              var a = null !== e ? e.memoizedProps : r;
              e = t.type;
              var o = t.updateQueue;
              if (((t.updateQueue = null), null !== o)) {
                for (
                  n[Zr] = r,
                    "input" === e &&
                      "radio" === r.type &&
                      null != r.name &&
                      te(n, r),
                    Te(e, a),
                    t = Te(e, r),
                    a = 0;
                  a < o.length;
                  a += 2
                ) {
                  var l = o[a],
                    s = o[a + 1];
                  "style" === l
                    ? Ee(n, s)
                    : "dangerouslySetInnerHTML" === l
                    ? be(n, s)
                    : "children" === l
                    ? ve(n, s)
                    : w(n, l, s, t);
                }
                switch (e) {
                  case "input":
                    ne(n, r);
                    break;
                  case "textarea":
                    ue(n, r);
                    break;
                  case "select":
                    (e = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (o = r.value)
                        ? ie(n, !!r.multiple, o, !1)
                        : e !== !!r.multiple &&
                          (null != r.defaultValue
                            ? ie(n, !!r.multiple, r.defaultValue, !0)
                            : ie(n, !!r.multiple, r.multiple ? [] : "", !1));
                }
              }
            }
            return;
          case 6:
            if (null === t.stateNode) throw Error(i(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
          case 3:
            return void (
              (n = t.stateNode).hydrate &&
              ((n.hydrate = !1), Et(n.containerInfo))
            );
          case 13:
            return (
              null !== t.memoizedState && ((Vl = Ga()), yl(t.child, !0)),
              void _l(t)
            );
          case 19:
            return void _l(t);
          case 23:
          case 24:
            return void yl(t, null !== t.memoizedState);
        }
        throw Error(i(163));
      }
      function _l(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new gl()),
            t.forEach(function (t) {
              var r = Gs.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      function Ll(e, t) {
        return (
          null !== e &&
          (null === (e = e.memoizedState) || null !== e.dehydrated) &&
          null !== (t = t.memoizedState) &&
          null === t.dehydrated
        );
      }
      var Rl = Math.ceil,
        Nl = k.ReactCurrentDispatcher,
        Pl = k.ReactCurrentOwner,
        Ol = 0,
        Dl = null,
        Il = null,
        Ml = 0,
        Bl = 0,
        Fl = ua(0),
        jl = 0,
        zl = null,
        Ul = 0,
        $l = 0,
        Gl = 0,
        ql = 0,
        Hl = null,
        Vl = 0,
        Wl = 1 / 0;
      function Kl() {
        Wl = Ga() + 500;
      }
      var Yl,
        Ql = null,
        Xl = !1,
        Jl = null,
        Zl = null,
        es = !1,
        ts = null,
        ns = 90,
        rs = [],
        as = [],
        os = null,
        is = 0,
        ls = null,
        ss = -1,
        us = 0,
        cs = 0,
        ds = null,
        fs = !1;
      function ps() {
        return 48 & Ol ? Ga() : -1 !== ss ? ss : (ss = Ga());
      }
      function ms(e) {
        if (!(2 & (e = e.mode))) return 1;
        if (!(4 & e)) return 99 === qa() ? 1 : 2;
        if ((0 === us && (us = Ul), 0 !== Qa.transition)) {
          0 !== cs && (cs = null !== Hl ? Hl.pendingLanes : 0), (e = us);
          var t = 4186112 & ~cs;
          return (
            0 === (t &= -t) &&
              0 === (t = (e = 4186112 & ~e) & -e) &&
              (t = 8192),
            t
          );
        }
        return (
          (e = qa()),
          4 & Ol && 98 === e
            ? (e = zt(12, us))
            : (e = zt(
                (e = (function (e) {
                  switch (e) {
                    case 99:
                      return 15;
                    case 98:
                      return 10;
                    case 97:
                    case 96:
                      return 8;
                    case 95:
                      return 2;
                    default:
                      return 0;
                  }
                })(e)),
                us
              )),
          e
        );
      }
      function gs(e, t, n) {
        if (50 < is) throw ((is = 0), (ls = null), Error(i(185)));
        if (null === (e = hs(e, t))) return null;
        Gt(e, t, n), e === Dl && ((Gl |= t), 4 === jl && ys(e, Ml));
        var r = qa();
        1 === t
          ? 8 & Ol && !(48 & Ol)
            ? ws(e)
            : (bs(e, n), 0 === Ol && (Kl(), Ka()))
          : (!(4 & Ol) ||
              (98 !== r && 99 !== r) ||
              (null === os ? (os = new Set([e])) : os.add(e)),
            bs(e, n)),
          (Hl = e);
      }
      function hs(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
          (e.childLanes |= t),
            null !== (n = e.alternate) && (n.childLanes |= t),
            (n = e),
            (e = e.return);
        return 3 === n.tag ? n.stateNode : null;
      }
      function bs(e, t) {
        for (
          var n = e.callbackNode,
            r = e.suspendedLanes,
            a = e.pingedLanes,
            o = e.expirationTimes,
            l = e.pendingLanes;
          0 < l;

        ) {
          var s = 31 - qt(l),
            u = 1 << s,
            c = o[s];
          if (-1 === c) {
            if (!(u & r) || u & a) {
              (c = t), Bt(u);
              var d = Mt;
              o[s] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1;
            }
          } else c <= t && (e.expiredLanes |= u);
          l &= ~u;
        }
        if (((r = Ft(e, e === Dl ? Ml : 0)), (t = Mt), 0 === r))
          null !== n &&
            (n !== Ba && Ca(n),
            (e.callbackNode = null),
            (e.callbackPriority = 0));
        else {
          if (null !== n) {
            if (e.callbackPriority === t) return;
            n !== Ba && Ca(n);
          }
          15 === t
            ? ((n = ws.bind(null, e)),
              null === ja ? ((ja = [n]), (za = Aa(Pa, Ya))) : ja.push(n),
              (n = Ba))
            : 14 === t
            ? (n = Wa(99, ws.bind(null, e)))
            : ((n = (function (e) {
                switch (e) {
                  case 15:
                  case 14:
                    return 99;
                  case 13:
                  case 12:
                  case 11:
                  case 10:
                    return 98;
                  case 9:
                  case 8:
                  case 7:
                  case 6:
                  case 4:
                  case 5:
                    return 97;
                  case 3:
                  case 2:
                  case 1:
                    return 95;
                  case 0:
                    return 90;
                  default:
                    throw Error(i(358, e));
                }
              })(t)),
              (n = Wa(n, vs.bind(null, e)))),
            (e.callbackPriority = t),
            (e.callbackNode = n);
        }
      }
      function vs(e) {
        if (((ss = -1), (cs = us = 0), 48 & Ol)) throw Error(i(327));
        var t = e.callbackNode;
        if (Ms() && e.callbackNode !== t) return null;
        var n = Ft(e, e === Dl ? Ml : 0);
        if (0 === n) return null;
        var r = n,
          a = Ol;
        Ol |= 16;
        var o = Cs();
        for ((Dl === e && Ml === r) || (Kl(), Ts(e, r)); ; )
          try {
            Rs();
            break;
          } catch (s) {
            As(e, s);
          }
        if (
          (no(),
          (Nl.current = o),
          (Ol = a),
          null !== Il ? (r = 0) : ((Dl = null), (Ml = 0), (r = jl)),
          Ul & Gl)
        )
          Ts(e, 0);
        else if (0 !== r) {
          if (
            (2 === r &&
              ((Ol |= 64),
              e.hydrate && ((e.hydrate = !1), Wr(e.containerInfo)),
              0 !== (n = jt(e)) && (r = _s(e, n))),
            1 === r)
          )
            throw ((t = zl), Ts(e, 0), ys(e, n), bs(e, Ga()), t);
          switch (
            ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
          ) {
            case 0:
            case 1:
              throw Error(i(345));
            case 2:
            case 5:
              Os(e);
              break;
            case 3:
              if (
                (ys(e, n), (62914560 & n) === n && 10 < (r = Vl + 500 - Ga()))
              ) {
                if (0 !== Ft(e, 0)) break;
                if (((a = e.suspendedLanes) & n) !== n) {
                  ps(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = Hr(Os.bind(null, e), r);
                break;
              }
              Os(e);
              break;
            case 4:
              if ((ys(e, n), (4186112 & n) === n)) break;
              for (r = e.eventTimes, a = -1; 0 < n; ) {
                var l = 31 - qt(n);
                (o = 1 << l), (l = r[l]) > a && (a = l), (n &= ~o);
              }
              if (
                ((n = a),
                10 <
                  (n =
                    (120 > (n = Ga() - n)
                      ? 120
                      : 480 > n
                      ? 480
                      : 1080 > n
                      ? 1080
                      : 1920 > n
                      ? 1920
                      : 3e3 > n
                      ? 3e3
                      : 4320 > n
                      ? 4320
                      : 1960 * Rl(n / 1960)) - n))
              ) {
                e.timeoutHandle = Hr(Os.bind(null, e), n);
                break;
              }
              Os(e);
              break;
            default:
              throw Error(i(329));
          }
        }
        return bs(e, Ga()), e.callbackNode === t ? vs.bind(null, e) : null;
      }
      function ys(e, t) {
        for (
          t &= ~ql,
            t &= ~Gl,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
          0 < t;

        ) {
          var n = 31 - qt(t),
            r = 1 << n;
          (e[n] = -1), (t &= ~r);
        }
      }
      function ws(e) {
        if (48 & Ol) throw Error(i(327));
        if ((Ms(), e === Dl && e.expiredLanes & Ml)) {
          var t = Ml,
            n = _s(e, t);
          Ul & Gl && (n = _s(e, (t = Ft(e, t))));
        } else n = _s(e, (t = Ft(e, 0)));
        if (
          (0 !== e.tag &&
            2 === n &&
            ((Ol |= 64),
            e.hydrate && ((e.hydrate = !1), Wr(e.containerInfo)),
            0 !== (t = jt(e)) && (n = _s(e, t))),
          1 === n)
        )
          throw ((n = zl), Ts(e, 0), ys(e, t), bs(e, Ga()), n);
        return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = t),
          Os(e),
          bs(e, Ga()),
          null
        );
      }
      function ks(e, t) {
        var n = Ol;
        Ol |= 1;
        try {
          return e(t);
        } finally {
          0 === (Ol = n) && (Kl(), Ka());
        }
      }
      function Es(e, t) {
        var n = Ol;
        (Ol &= -2), (Ol |= 8);
        try {
          return e(t);
        } finally {
          0 === (Ol = n) && (Kl(), Ka());
        }
      }
      function Ss(e, t) {
        da(Fl, Bl), (Bl |= t), (Ul |= t);
      }
      function xs() {
        (Bl = Fl.current), ca(Fl);
      }
      function Ts(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), Vr(n)), null !== Il))
          for (n = Il.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                null != (r = r.type.childContextTypes) && va();
                break;
              case 3:
                Io(), ca(ma), ca(pa), Qo();
                break;
              case 5:
                Bo(r);
                break;
              case 4:
                Io();
                break;
              case 13:
              case 19:
                ca(Fo);
                break;
              case 10:
                ro(r);
                break;
              case 23:
              case 24:
                xs();
            }
            n = n.return;
          }
        (Dl = e),
          (Il = Ws(e.current, null)),
          (Ml = Bl = Ul = t),
          (jl = 0),
          (zl = null),
          (ql = Gl = $l = 0);
      }
      function As(e, t) {
        for (;;) {
          var n = Il;
          try {
            if ((no(), (Xo.current = Pi), ri)) {
              for (var r = ei.memoizedState; null !== r; ) {
                var a = r.queue;
                null !== a && (a.pending = null), (r = r.next);
              }
              ri = !1;
            }
            if (
              ((Zo = 0),
              (ni = ti = ei = null),
              (ai = !1),
              (Pl.current = null),
              null === n || null === n.return)
            ) {
              (jl = 1), (zl = t), (Il = null);
              break;
            }
            e: {
              var o = e,
                i = n.return,
                l = n,
                s = t;
              if (
                ((t = Ml),
                (l.flags |= 2048),
                (l.firstEffect = l.lastEffect = null),
                null !== s &&
                  "object" == typeof s &&
                  "function" == typeof s.then)
              ) {
                var u = s;
                if (!(2 & l.mode)) {
                  var c = l.alternate;
                  c
                    ? ((l.updateQueue = c.updateQueue),
                      (l.memoizedState = c.memoizedState),
                      (l.lanes = c.lanes))
                    : ((l.updateQueue = null), (l.memoizedState = null));
                }
                var d = !!(1 & Fo.current),
                  f = i;
                do {
                  var p;
                  if ((p = 13 === f.tag)) {
                    var m = f.memoizedState;
                    if (null !== m) p = null !== m.dehydrated;
                    else {
                      var g = f.memoizedProps;
                      p =
                        void 0 !== g.fallback &&
                        (!0 !== g.unstable_avoidThisFallback || !d);
                    }
                  }
                  if (p) {
                    var h = f.updateQueue;
                    if (null === h) {
                      var b = new Set();
                      b.add(u), (f.updateQueue = b);
                    } else h.add(u);
                    if (!(2 & f.mode)) {
                      if (
                        ((f.flags |= 64),
                        (l.flags |= 16384),
                        (l.flags &= -2981),
                        1 === l.tag)
                      )
                        if (null === l.alternate) l.tag = 17;
                        else {
                          var v = co(-1, 1);
                          (v.tag = 2), fo(l, v);
                        }
                      l.lanes |= 1;
                      break e;
                    }
                    (s = void 0), (l = t);
                    var y = o.pingCache;
                    if (
                      (null === y
                        ? ((y = o.pingCache = new fl()),
                          (s = new Set()),
                          y.set(u, s))
                        : void 0 === (s = y.get(u)) &&
                          ((s = new Set()), y.set(u, s)),
                      !s.has(l))
                    ) {
                      s.add(l);
                      var w = $s.bind(null, o, u, l);
                      u.then(w, w);
                    }
                    (f.flags |= 4096), (f.lanes = t);
                    break e;
                  }
                  f = f.return;
                } while (null !== f);
                s = Error(
                  (W(l.type) || "A React component") +
                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                );
              }
              5 !== jl && (jl = 2), (s = cl(s, l)), (f = i);
              do {
                switch (f.tag) {
                  case 3:
                    (o = s),
                      (f.flags |= 4096),
                      (t &= -t),
                      (f.lanes |= t),
                      po(f, pl(0, o, t));
                    break e;
                  case 1:
                    o = s;
                    var k = f.type,
                      E = f.stateNode;
                    if (
                      !(
                        64 & f.flags ||
                        ("function" != typeof k.getDerivedStateFromError &&
                          (null === E ||
                            "function" != typeof E.componentDidCatch ||
                            (null !== Zl && Zl.has(E))))
                      )
                    ) {
                      (f.flags |= 4096),
                        (t &= -t),
                        (f.lanes |= t),
                        po(f, ml(f, o, t));
                      break e;
                    }
                }
                f = f.return;
              } while (null !== f);
            }
            Ps(n);
          } catch (S) {
            (t = S), Il === n && null !== n && (Il = n = n.return);
            continue;
          }
          break;
        }
      }
      function Cs() {
        var e = Nl.current;
        return (Nl.current = Pi), null === e ? Pi : e;
      }
      function _s(e, t) {
        var n = Ol;
        Ol |= 16;
        var r = Cs();
        for ((Dl === e && Ml === t) || Ts(e, t); ; )
          try {
            Ls();
            break;
          } catch (a) {
            As(e, a);
          }
        if ((no(), (Ol = n), (Nl.current = r), null !== Il))
          throw Error(i(261));
        return (Dl = null), (Ml = 0), jl;
      }
      function Ls() {
        for (; null !== Il; ) Ns(Il);
      }
      function Rs() {
        for (; null !== Il && !_a(); ) Ns(Il);
      }
      function Ns(e) {
        var t = Yl(e.alternate, e, Bl);
        (e.memoizedProps = e.pendingProps),
          null === t ? Ps(e) : (Il = t),
          (Pl.current = null);
      }
      function Ps(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (((e = t.return), 2048 & t.flags)) {
            if (null !== (n = ul(t))) return (n.flags &= 2047), void (Il = n);
            null !== e &&
              ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
          } else {
            if (null !== (n = sl(n, t, Bl))) return void (Il = n);
            if (
              (24 !== (n = t).tag && 23 !== n.tag) ||
              null === n.memoizedState ||
              1073741824 & Bl ||
              !(4 & n.mode)
            ) {
              for (var r = 0, a = n.child; null !== a; )
                (r |= a.lanes | a.childLanes), (a = a.sibling);
              n.childLanes = r;
            }
            null !== e &&
              !(2048 & e.flags) &&
              (null === e.firstEffect && (e.firstEffect = t.firstEffect),
              null !== t.lastEffect &&
                (null !== e.lastEffect &&
                  (e.lastEffect.nextEffect = t.firstEffect),
                (e.lastEffect = t.lastEffect)),
              1 < t.flags &&
                (null !== e.lastEffect
                  ? (e.lastEffect.nextEffect = t)
                  : (e.firstEffect = t),
                (e.lastEffect = t)));
          }
          if (null !== (t = t.sibling)) return void (Il = t);
          Il = t = e;
        } while (null !== t);
        0 === jl && (jl = 5);
      }
      function Os(e) {
        var t = qa();
        return Va(99, Ds.bind(null, e, t)), null;
      }
      function Ds(e, t) {
        do {
          Ms();
        } while (null !== ts);
        if (48 & Ol) throw Error(i(327));
        var n = e.finishedWork;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
          throw Error(i(177));
        e.callbackNode = null;
        var r = n.lanes | n.childLanes,
          a = r,
          o = e.pendingLanes & ~a;
        (e.pendingLanes = a),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.expiredLanes &= a),
          (e.mutableReadLanes &= a),
          (e.entangledLanes &= a),
          (a = e.entanglements);
        for (var l = e.eventTimes, s = e.expirationTimes; 0 < o; ) {
          var u = 31 - qt(o),
            c = 1 << u;
          (a[u] = 0), (l[u] = -1), (s[u] = -1), (o &= ~c);
        }
        if (
          (null !== os && !(24 & r) && os.has(e) && os.delete(e),
          e === Dl && ((Il = Dl = null), (Ml = 0)),
          1 < n.flags
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
              : (r = n)
            : (r = n.firstEffect),
          null !== r)
        ) {
          if (
            ((a = Ol),
            (Ol |= 32),
            (Pl.current = null),
            (Ur = Yt),
            br((l = hr())))
          ) {
            if ("selectionStart" in l)
              s = { start: l.selectionStart, end: l.selectionEnd };
            else
              e: if (
                ((s = ((s = l.ownerDocument) && s.defaultView) || window),
                (c = s.getSelection && s.getSelection()) && 0 !== c.rangeCount)
              ) {
                (s = c.anchorNode),
                  (o = c.anchorOffset),
                  (u = c.focusNode),
                  (c = c.focusOffset);
                try {
                  s.nodeType, u.nodeType;
                } catch (A) {
                  s = null;
                  break e;
                }
                var d = 0,
                  f = -1,
                  p = -1,
                  m = 0,
                  g = 0,
                  h = l,
                  b = null;
                t: for (;;) {
                  for (
                    var v;
                    h !== s || (0 !== o && 3 !== h.nodeType) || (f = d + o),
                      h !== u || (0 !== c && 3 !== h.nodeType) || (p = d + c),
                      3 === h.nodeType && (d += h.nodeValue.length),
                      null !== (v = h.firstChild);

                  )
                    (b = h), (h = v);
                  for (;;) {
                    if (h === l) break t;
                    if (
                      (b === s && ++m === o && (f = d),
                      b === u && ++g === c && (p = d),
                      null !== (v = h.nextSibling))
                    )
                      break;
                    b = (h = b).parentNode;
                  }
                  h = v;
                }
                s = -1 === f || -1 === p ? null : { start: f, end: p };
              } else s = null;
            s = s || { start: 0, end: 0 };
          } else s = null;
          ($r = { focusedElem: l, selectionRange: s }),
            (Yt = !1),
            (ds = null),
            (fs = !1),
            (Ql = r);
          do {
            try {
              Is();
            } catch (A) {
              if (null === Ql) throw Error(i(330));
              Us(Ql, A), (Ql = Ql.nextEffect);
            }
          } while (null !== Ql);
          (ds = null), (Ql = r);
          do {
            try {
              for (l = e; null !== Ql; ) {
                var y = Ql.flags;
                if ((16 & y && ve(Ql.stateNode, ""), 128 & y)) {
                  var w = Ql.alternate;
                  if (null !== w) {
                    var k = w.ref;
                    null !== k &&
                      ("function" == typeof k ? k(null) : (k.current = null));
                  }
                }
                switch (1038 & y) {
                  case 2:
                    Sl(Ql), (Ql.flags &= -3);
                    break;
                  case 6:
                    Sl(Ql), (Ql.flags &= -3), Cl(Ql.alternate, Ql);
                    break;
                  case 1024:
                    Ql.flags &= -1025;
                    break;
                  case 1028:
                    (Ql.flags &= -1025), Cl(Ql.alternate, Ql);
                    break;
                  case 4:
                    Cl(Ql.alternate, Ql);
                    break;
                  case 8:
                    Al(l, (s = Ql));
                    var E = s.alternate;
                    kl(s), null !== E && kl(E);
                }
                Ql = Ql.nextEffect;
              }
            } catch (A) {
              if (null === Ql) throw Error(i(330));
              Us(Ql, A), (Ql = Ql.nextEffect);
            }
          } while (null !== Ql);
          if (
            ((k = $r),
            (w = hr()),
            (y = k.focusedElem),
            (l = k.selectionRange),
            w !== y &&
              y &&
              y.ownerDocument &&
              gr(y.ownerDocument.documentElement, y))
          ) {
            null !== l &&
              br(y) &&
              ((w = l.start),
              void 0 === (k = l.end) && (k = w),
              "selectionStart" in y
                ? ((y.selectionStart = w),
                  (y.selectionEnd = Math.min(k, y.value.length)))
                : (k =
                    ((w = y.ownerDocument || document) && w.defaultView) ||
                    window).getSelection &&
                  ((k = k.getSelection()),
                  (s = y.textContent.length),
                  (E = Math.min(l.start, s)),
                  (l = void 0 === l.end ? E : Math.min(l.end, s)),
                  !k.extend && E > l && ((s = l), (l = E), (E = s)),
                  (s = mr(y, E)),
                  (o = mr(y, l)),
                  s &&
                    o &&
                    (1 !== k.rangeCount ||
                      k.anchorNode !== s.node ||
                      k.anchorOffset !== s.offset ||
                      k.focusNode !== o.node ||
                      k.focusOffset !== o.offset) &&
                    ((w = w.createRange()).setStart(s.node, s.offset),
                    k.removeAllRanges(),
                    E > l
                      ? (k.addRange(w), k.extend(o.node, o.offset))
                      : (w.setEnd(o.node, o.offset), k.addRange(w))))),
              (w = []);
            for (k = y; (k = k.parentNode); )
              1 === k.nodeType &&
                w.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for (
              "function" == typeof y.focus && y.focus(), y = 0;
              y < w.length;
              y++
            )
              ((k = w[y]).element.scrollLeft = k.left),
                (k.element.scrollTop = k.top);
          }
          (Yt = !!Ur), ($r = Ur = null), (e.current = n), (Ql = r);
          do {
            try {
              for (y = e; null !== Ql; ) {
                var S = Ql.flags;
                if ((36 & S && vl(y, Ql.alternate, Ql), 128 & S)) {
                  w = void 0;
                  var x = Ql.ref;
                  if (null !== x) {
                    var T = Ql.stateNode;
                    Ql.tag,
                      (w = T),
                      "function" == typeof x ? x(w) : (x.current = w);
                  }
                }
                Ql = Ql.nextEffect;
              }
            } catch (A) {
              if (null === Ql) throw Error(i(330));
              Us(Ql, A), (Ql = Ql.nextEffect);
            }
          } while (null !== Ql);
          (Ql = null), Fa(), (Ol = a);
        } else e.current = n;
        if (es) (es = !1), (ts = e), (ns = t);
        else
          for (Ql = r; null !== Ql; )
            (t = Ql.nextEffect),
              (Ql.nextEffect = null),
              8 & Ql.flags && (((S = Ql).sibling = null), (S.stateNode = null)),
              (Ql = t);
        if (
          (0 === (r = e.pendingLanes) && (Zl = null),
          1 === r ? (e === ls ? is++ : ((is = 0), (ls = e))) : (is = 0),
          (n = n.stateNode),
          xa && "function" == typeof xa.onCommitFiberRoot)
        )
          try {
            xa.onCommitFiberRoot(Sa, n, void 0, !(64 & ~n.current.flags));
          } catch (A) {}
        if ((bs(e, Ga()), Xl)) throw ((Xl = !1), (e = Jl), (Jl = null), e);
        return 8 & Ol || Ka(), null;
      }
      function Is() {
        for (; null !== Ql; ) {
          var e = Ql.alternate;
          fs ||
            null === ds ||
            (8 & Ql.flags
              ? et(Ql, ds) && (fs = !0)
              : 13 === Ql.tag && Ll(e, Ql) && et(Ql, ds) && (fs = !0));
          var t = Ql.flags;
          256 & t && bl(e, Ql),
            !(512 & t) ||
              es ||
              ((es = !0),
              Wa(97, function () {
                return Ms(), null;
              })),
            (Ql = Ql.nextEffect);
        }
      }
      function Ms() {
        if (90 !== ns) {
          var e = 97 < ns ? 97 : ns;
          return (ns = 90), Va(e, js);
        }
        return !1;
      }
      function Bs(e, t) {
        rs.push(t, e),
          es ||
            ((es = !0),
            Wa(97, function () {
              return Ms(), null;
            }));
      }
      function Fs(e, t) {
        as.push(t, e),
          es ||
            ((es = !0),
            Wa(97, function () {
              return Ms(), null;
            }));
      }
      function js() {
        if (null === ts) return !1;
        var e = ts;
        if (((ts = null), 48 & Ol)) throw Error(i(331));
        var t = Ol;
        Ol |= 32;
        var n = as;
        as = [];
        for (var r = 0; r < n.length; r += 2) {
          var a = n[r],
            o = n[r + 1],
            l = a.destroy;
          if (((a.destroy = void 0), "function" == typeof l))
            try {
              l();
            } catch (u) {
              if (null === o) throw Error(i(330));
              Us(o, u);
            }
        }
        for (n = rs, rs = [], r = 0; r < n.length; r += 2) {
          (a = n[r]), (o = n[r + 1]);
          try {
            var s = a.create;
            a.destroy = s();
          } catch (u) {
            if (null === o) throw Error(i(330));
            Us(o, u);
          }
        }
        for (s = e.current.firstEffect; null !== s; )
          (e = s.nextEffect),
            (s.nextEffect = null),
            8 & s.flags && ((s.sibling = null), (s.stateNode = null)),
            (s = e);
        return (Ol = t), Ka(), !0;
      }
      function zs(e, t, n) {
        fo(e, (t = pl(0, (t = cl(n, t)), 1))),
          (t = ps()),
          null !== (e = hs(e, 1)) && (Gt(e, 1, t), bs(e, t));
      }
      function Us(e, t) {
        if (3 === e.tag) zs(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              zs(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                "function" == typeof n.type.getDerivedStateFromError ||
                ("function" == typeof r.componentDidCatch &&
                  (null === Zl || !Zl.has(r)))
              ) {
                var a = ml(n, (e = cl(t, e)), 1);
                if ((fo(n, a), (a = ps()), null !== (n = hs(n, 1))))
                  Gt(n, 1, a), bs(n, a);
                else if (
                  "function" == typeof r.componentDidCatch &&
                  (null === Zl || !Zl.has(r))
                )
                  try {
                    r.componentDidCatch(t, e);
                  } catch (o) {}
                break;
              }
            }
            n = n.return;
          }
      }
      function $s(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          (t = ps()),
          (e.pingedLanes |= e.suspendedLanes & n),
          Dl === e &&
            (Ml & n) === n &&
            (4 === jl || (3 === jl && (62914560 & Ml) === Ml && 500 > Ga() - Vl)
              ? Ts(e, 0)
              : (ql |= n)),
          bs(e, t);
      }
      function Gs(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 === (t = 0) &&
            (2 & (t = e.mode)
              ? 4 & t
                ? (0 === us && (us = Ul),
                  0 === (t = Ut(62914560 & ~us)) && (t = 4194304))
                : (t = 99 === qa() ? 1 : 2)
              : (t = 1)),
          (n = ps()),
          null !== (e = hs(e, t)) && (Gt(e, t, n), bs(e, n));
      }
      function qs(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.flags = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function Hs(e, t, n, r) {
        return new qs(e, t, n, r);
      }
      function Vs(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function Ws(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = Hs(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Ks(e, t, n, r, a, o) {
        var l = 2;
        if (((r = e), "function" == typeof e)) Vs(e) && (l = 1);
        else if ("string" == typeof e) l = 5;
        else
          e: switch (e) {
            case x:
              return Ys(n.children, a, o, t);
            case M:
              (l = 8), (a |= 16);
              break;
            case T:
              (l = 8), (a |= 1);
              break;
            case A:
              return (
                ((e = Hs(12, n, t, 8 | a)).elementType = A),
                (e.type = A),
                (e.lanes = o),
                e
              );
            case R:
              return (
                ((e = Hs(13, n, t, a)).type = R),
                (e.elementType = R),
                (e.lanes = o),
                e
              );
            case N:
              return ((e = Hs(19, n, t, a)).elementType = N), (e.lanes = o), e;
            case B:
              return Qs(n, a, o, t);
            case F:
              return ((e = Hs(24, n, t, a)).elementType = F), (e.lanes = o), e;
            default:
              if ("object" == typeof e && null !== e)
                switch (e.$$typeof) {
                  case C:
                    l = 10;
                    break e;
                  case _:
                    l = 9;
                    break e;
                  case L:
                    l = 11;
                    break e;
                  case P:
                    l = 14;
                    break e;
                  case O:
                    (l = 16), (r = null);
                    break e;
                  case D:
                    l = 22;
                    break e;
                }
              throw Error(i(130, null == e ? e : typeof e, ""));
          }
        return (
          ((t = Hs(l, n, t, a)).elementType = e), (t.type = r), (t.lanes = o), t
        );
      }
      function Ys(e, t, n, r) {
        return ((e = Hs(7, e, r, t)).lanes = n), e;
      }
      function Qs(e, t, n, r) {
        return ((e = Hs(23, e, r, t)).elementType = B), (e.lanes = n), e;
      }
      function Xs(e, t, n) {
        return ((e = Hs(6, e, null, t)).lanes = n), e;
      }
      function Js(e, t, n) {
        return (
          ((t = Hs(4, null !== e.children ? e.children : [], e.key, t)).lanes =
            n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function Zs(e, t, n) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
              null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 0),
          (this.eventTimes = $t(0)),
          (this.expirationTimes = $t(-1)),
          (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = $t(0)),
          (this.mutableSourceEagerHydrationData = null);
      }
      function eu(e, t, n, r) {
        var a = t.current,
          o = ps(),
          l = ms(a);
        e: if (n) {
          t: {
            if (Qe((n = n._reactInternals)) !== n || 1 !== n.tag)
              throw Error(i(170));
            var s = n;
            do {
              switch (s.tag) {
                case 3:
                  s = s.stateNode.context;
                  break t;
                case 1:
                  if (ba(s.type)) {
                    s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              s = s.return;
            } while (null !== s);
            throw Error(i(171));
          }
          if (1 === n.tag) {
            var u = n.type;
            if (ba(u)) {
              n = wa(n, u, s);
              break e;
            }
          }
          n = s;
        } else n = fa;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = co(o, l)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          fo(a, t),
          gs(a, l, o),
          l
        );
      }
      function tu(e) {
        return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null;
      }
      function nu(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function ru(e, t) {
        nu(e, t), (e = e.alternate) && nu(e, t);
      }
      function au(e, t, n) {
        var r =
          (null != n &&
            null != n.hydrationOptions &&
            n.hydrationOptions.mutableSources) ||
          null;
        if (
          ((n = new Zs(e, t, null != n && !0 === n.hydrate)),
          (t = Hs(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
          (n.current = t),
          (t.stateNode = n),
          so(t),
          (e[ea] = n.current),
          Pr(8 === e.nodeType ? e.parentNode : e),
          r)
        )
          for (e = 0; e < r.length; e++) {
            var a = (t = r[e])._getVersion;
            (a = a(t._source)),
              null == n.mutableSourceEagerHydrationData
                ? (n.mutableSourceEagerHydrationData = [t, a])
                : n.mutableSourceEagerHydrationData.push(t, a);
          }
        this._internalRoot = n;
      }
      function ou(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }
      function iu(e, t, n, r, a) {
        var o = n._reactRootContainer;
        if (o) {
          var i = o._internalRoot;
          if ("function" == typeof a) {
            var l = a;
            a = function () {
              var e = tu(i);
              l.call(e);
            };
          }
          eu(t, i, e, a);
        } else {
          if (
            ((o = n._reactRootContainer =
              (function (e, t) {
                if (
                  (t ||
                    (t = !(
                      !(t = e
                        ? 9 === e.nodeType
                          ? e.documentElement
                          : e.firstChild
                        : null) ||
                      1 !== t.nodeType ||
                      !t.hasAttribute("data-reactroot")
                    )),
                  !t)
                )
                  for (var n; (n = e.lastChild); ) e.removeChild(n);
                return new au(e, 0, t ? { hydrate: !0 } : void 0);
              })(n, r)),
            (i = o._internalRoot),
            "function" == typeof a)
          ) {
            var s = a;
            a = function () {
              var e = tu(i);
              s.call(e);
            };
          }
          Es(function () {
            eu(t, i, e, a);
          });
        }
        return tu(i);
      }
      function lu(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!ou(t)) throw Error(i(200));
        return (function (e, t, n) {
          var r =
            3 < arguments.length && void 0 !== arguments[3]
              ? arguments[3]
              : null;
          return {
            $$typeof: S,
            key: null == r ? null : "" + r,
            children: e,
            containerInfo: t,
            implementation: n,
          };
        })(e, t, null, n);
      }
      (Yl = function (e, t, n) {
        var r = t.lanes;
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || ma.current) Bi = !0;
          else {
            if (!(n & r)) {
              switch (((Bi = !1), t.tag)) {
                case 3:
                  Wi(t), Ko();
                  break;
                case 5:
                  Mo(t);
                  break;
                case 1:
                  ba(t.type) && ka(t);
                  break;
                case 4:
                  Do(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  r = t.memoizedProps.value;
                  var a = t.type._context;
                  da(Ja, a._currentValue), (a._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return n & t.child.childLanes
                      ? Zi(e, t, n)
                      : (da(Fo, 1 & Fo.current),
                        null !== (t = il(e, t, n)) ? t.sibling : null);
                  da(Fo, 1 & Fo.current);
                  break;
                case 19:
                  if (((r = !!(n & t.childLanes)), 64 & e.flags)) {
                    if (r) return ol(e, t, n);
                    t.flags |= 64;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null),
                      (a.tail = null),
                      (a.lastEffect = null)),
                    da(Fo, Fo.current),
                    r)
                  )
                    break;
                  return null;
                case 23:
                case 24:
                  return (t.lanes = 0), $i(e, t, n);
              }
              return il(e, t, n);
            }
            Bi = !!(16384 & e.flags);
          }
        else Bi = !1;
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (a = ha(t, pa.current)),
              oo(t, n),
              (a = li(null, t, r, e, a, n)),
              (t.flags |= 1),
              "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof)
            ) {
              if (
                ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                ba(r))
              ) {
                var o = !0;
                ka(t);
              } else o = !1;
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
                so(t);
              var l = r.getDerivedStateFromProps;
              "function" == typeof l && bo(t, r, l, e),
                (a.updater = vo),
                (t.stateNode = a),
                (a._reactInternals = t),
                Eo(t, r, e, n),
                (t = Vi(null, t, r, !0, o, n));
            } else (t.tag = 0), Fi(null, t, a, n), (t = t.child);
            return t;
          case 16:
            a = t.elementType;
            e: {
              switch (
                (null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (a = (o = a._init)(a._payload)),
                (t.type = a),
                (o = t.tag =
                  (function (e) {
                    if ("function" == typeof e) return Vs(e) ? 1 : 0;
                    if (null != e) {
                      if ((e = e.$$typeof) === L) return 11;
                      if (e === P) return 14;
                    }
                    return 2;
                  })(a)),
                (e = Xa(a, e)),
                o)
              ) {
                case 0:
                  t = qi(null, t, a, e, n);
                  break e;
                case 1:
                  t = Hi(null, t, a, e, n);
                  break e;
                case 11:
                  t = ji(null, t, a, e, n);
                  break e;
                case 14:
                  t = zi(null, t, a, Xa(a.type, e), r, n);
                  break e;
              }
              throw Error(i(306, a, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (a = t.pendingProps),
              qi(e, t, r, (a = t.elementType === r ? a : Xa(r, a)), n)
            );
          case 1:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Hi(e, t, r, (a = t.elementType === r ? a : Xa(r, a)), n)
            );
          case 3:
            if ((Wi(t), (r = t.updateQueue), null === e || null === r))
              throw Error(i(282));
            if (
              ((r = t.pendingProps),
              (a = null !== (a = t.memoizedState) ? a.element : null),
              uo(e, t),
              mo(t, r, null, n),
              (r = t.memoizedState.element) === a)
            )
              Ko(), (t = il(e, t, n));
            else {
              if (
                ((o = (a = t.stateNode).hydrate) &&
                  ((Uo = Kr(t.stateNode.containerInfo.firstChild)),
                  (zo = t),
                  (o = $o = !0)),
                o)
              ) {
                if (null != (e = a.mutableSourceEagerHydrationData))
                  for (a = 0; a < e.length; a += 2)
                    ((o = e[a])._workInProgressVersionPrimary = e[a + 1]),
                      Yo.push(o);
                for (n = _o(t, null, r, n), t.child = n; n; )
                  (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
              } else Fi(e, t, r, n), Ko();
              t = t.child;
            }
            return t;
          case 5:
            return (
              Mo(t),
              null === e && Ho(t),
              (r = t.type),
              (a = t.pendingProps),
              (o = null !== e ? e.memoizedProps : null),
              (l = a.children),
              qr(r, a) ? (l = null) : null !== o && qr(r, o) && (t.flags |= 16),
              Gi(e, t),
              Fi(e, t, l, n),
              t.child
            );
          case 6:
            return null === e && Ho(t), null;
          case 13:
            return Zi(e, t, n);
          case 4:
            return (
              Do(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Co(t, null, r, n)) : Fi(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (a = t.pendingProps),
              ji(e, t, r, (a = t.elementType === r ? a : Xa(r, a)), n)
            );
          case 7:
            return Fi(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Fi(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context),
                (a = t.pendingProps),
                (l = t.memoizedProps),
                (o = a.value);
              var s = t.type._context;
              if ((da(Ja, s._currentValue), (s._currentValue = o), null !== l))
                if (
                  ((s = l.value),
                  0 ===
                    (o = cr(s, o)
                      ? 0
                      : 0 |
                        ("function" == typeof r._calculateChangedBits
                          ? r._calculateChangedBits(s, o)
                          : 1073741823)))
                ) {
                  if (l.children === a.children && !ma.current) {
                    t = il(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (s = t.child) && (s.return = t); null !== s; ) {
                    var u = s.dependencies;
                    if (null !== u) {
                      l = s.child;
                      for (var c = u.firstContext; null !== c; ) {
                        if (c.context === r && c.observedBits & o) {
                          1 === s.tag &&
                            (((c = co(-1, n & -n)).tag = 2), fo(s, c)),
                            (s.lanes |= n),
                            null !== (c = s.alternate) && (c.lanes |= n),
                            ao(s.return, n),
                            (u.lanes |= n);
                          break;
                        }
                        c = c.next;
                      }
                    } else
                      l = 10 === s.tag && s.type === t.type ? null : s.child;
                    if (null !== l) l.return = s;
                    else
                      for (l = s; null !== l; ) {
                        if (l === t) {
                          l = null;
                          break;
                        }
                        if (null !== (s = l.sibling)) {
                          (s.return = l.return), (l = s);
                          break;
                        }
                        l = l.return;
                      }
                    s = l;
                  }
              Fi(e, t, a.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (a = t.type),
              (r = (o = t.pendingProps).children),
              oo(t, n),
              (r = r((a = io(a, o.unstable_observedBits)))),
              (t.flags |= 1),
              Fi(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (o = Xa((a = t.type), t.pendingProps)),
              zi(e, t, a, (o = Xa(a.type, o)), r, n)
            );
          case 15:
            return Ui(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (a = t.pendingProps),
              (a = t.elementType === r ? a : Xa(r, a)),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (t.tag = 1),
              ba(r) ? ((e = !0), ka(t)) : (e = !1),
              oo(t, n),
              wo(t, r, a),
              Eo(t, r, a, n),
              Vi(null, t, r, !0, e, n)
            );
          case 19:
            return ol(e, t, n);
          case 23:
          case 24:
            return $i(e, t, n);
        }
        throw Error(i(156, t.tag));
      }),
        (au.prototype.render = function (e) {
          eu(e, this._internalRoot, null, null);
        }),
        (au.prototype.unmount = function () {
          var e = this._internalRoot,
            t = e.containerInfo;
          eu(null, e, null, function () {
            t[ea] = null;
          });
        }),
        (tt = function (e) {
          13 === e.tag && (gs(e, 4, ps()), ru(e, 4));
        }),
        (nt = function (e) {
          13 === e.tag && (gs(e, 67108864, ps()), ru(e, 67108864));
        }),
        (rt = function (e) {
          if (13 === e.tag) {
            var t = ps(),
              n = ms(e);
            gs(e, n, t), ru(e, n);
          }
        }),
        (at = function (e, t) {
          return t();
        }),
        (Ce = function (e, t, n) {
          switch (t) {
            case "input":
              if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var a = oa(r);
                    if (!a) throw Error(i(90));
                    X(r), ne(r, a);
                  }
                }
              }
              break;
            case "textarea":
              ue(e, n);
              break;
            case "select":
              null != (t = n.value) && ie(e, !!n.multiple, t, !1);
          }
        }),
        (Oe = ks),
        (De = function (e, t, n, r, a) {
          var o = Ol;
          Ol |= 4;
          try {
            return Va(98, e.bind(null, t, n, r, a));
          } finally {
            0 === (Ol = o) && (Kl(), Ka());
          }
        }),
        (Ie = function () {
          !(49 & Ol) &&
            ((function () {
              if (null !== os) {
                var e = os;
                (os = null),
                  e.forEach(function (e) {
                    (e.expiredLanes |= 24 & e.pendingLanes), bs(e, Ga());
                  });
              }
              Ka();
            })(),
            Ms());
        }),
        (Me = function (e, t) {
          var n = Ol;
          Ol |= 2;
          try {
            return e(t);
          } finally {
            0 === (Ol = n) && (Kl(), Ka());
          }
        });
      var su = { Events: [ra, aa, oa, Ne, Pe, Ms, { current: !1 }] },
        uu = {
          findFiberByHostInstance: na,
          bundleType: 0,
          version: "17.0.2",
          rendererPackageName: "react-dom",
        },
        cu = {
          bundleType: uu.bundleType,
          version: uu.version,
          rendererPackageName: uu.rendererPackageName,
          rendererConfig: uu.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: k.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Ze(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance:
            uu.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        };
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var du = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!du.isDisabled && du.supportsFiber)
          try {
            (Sa = du.inject(cu)), (xa = du);
          } catch (he) {}
      }
      t.hydrate = function (e, t, n) {
        if (!ou(t)) throw Error(i(200));
        return iu(null, e, t, !0, n);
      };
    },
    2654: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"theme.AnnouncementBar.closeButtonAriaLabel":"Kapat","theme.BackToTopButton.buttonAriaLabel":"Sayfa ba\u015f\u0131na d\xf6n","theme.CodeBlock.copied":"Kopyaland\u0131","theme.CodeBlock.copy":"Kopyala","theme.CodeBlock.copyButtonAriaLabel":"Kodu panoya kopyala","theme.CodeBlock.wordWrapToggle":"Kelime kayd\u0131rmay\u0131 a\xe7/kapat","theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel":"Toggle the collapsible sidebar category \'{label}\'","theme.ErrorPageContent.title":"Bu sayfa \xe7\xf6kt\xfc.","theme.ErrorPageContent.tryAgain":"Tekrar deneyin","theme.NavBar.navAriaLabel":"Main","theme.NotFound.p1":"Arad\u0131\u011f\u0131n\u0131z \u015feyi bulamad\u0131k.","theme.NotFound.p2":"L\xfctfen sizi orijinal URL\'ye y\xf6nlendiren sitenin sahibiyle ileti\u015fime ge\xe7in ve ba\u011flant\u0131s\u0131n\u0131n bozuk oldu\u011funu bildirin.","theme.NotFound.title":"Sayfa Bulunamad\u0131","theme.TOCCollapsible.toggleButtonLabel":"Bu sayfada","theme.admonition.caution":"uyar\u0131","theme.admonition.danger":"tehlike","theme.admonition.info":"bilgi","theme.admonition.note":"not","theme.admonition.tip":"ipucu","theme.blog.archive.description":"Ar\u015fiv","theme.blog.archive.title":"Ar\u015fiv","theme.blog.paginator.navAriaLabel":"Blog g\xf6nderi sayfas\u0131 navigasyonu","theme.blog.paginator.newerEntries":"Yeni Girdiler","theme.blog.paginator.olderEntries":"Eski Girdiler","theme.blog.post.paginator.navAriaLabel":"Blog g\xf6nderi sayfas\u0131 navigasyonu","theme.blog.post.paginator.newerPost":"Daha Yeni G\xf6nderi","theme.blog.post.paginator.olderPost":"Daha Eski G\xf6nderi","theme.blog.post.plurals":"Bir g\xf6nderi|{count} g\xf6nderi","theme.blog.post.readMore":"Daha Fazla","theme.blog.post.readMoreLabel":"{title} hakk\u0131nda daha fazla bilgi edinin","theme.blog.post.readingTime.plurals":"{readingTime} dakikal\u0131k okuma|{readingTime} dakikal\u0131k okuma","theme.blog.sidebar.navAriaLabel":"Blog son g\xf6nderiler navigasyonu","theme.blog.tagTitle":"\\"{tagName}\\" ile etiketlenmi\u015f {nPosts}","theme.colorToggle.ariaLabel":"Karanl\u0131k ve ayd\u0131nl\u0131k mod aras\u0131nda ge\xe7i\u015f yap\u0131n (\u015fu anda {mode})","theme.colorToggle.ariaLabel.mode.dark":"Karanl\u0131k mod","theme.colorToggle.ariaLabel.mode.light":"Ayd\u0131nl\u0131k mod","theme.common.editThisPage":"Bu sayfay\u0131 d\xfczenle","theme.common.headingLinkTitle":"{heading} do\u011frudan ba\u011flant\u0131","theme.common.skipToMainContent":"Ana i\xe7eri\u011fe ge\xe7","theme.docs.DocCard.categoryDescription":"{count} items","theme.docs.breadcrumbs.home":"Ana sayfa","theme.docs.breadcrumbs.navAriaLabel":"Breadcrumbs","theme.docs.paginator.navAriaLabel":"Dok\xfcmanlar sayfas\u0131 navigasyonu","theme.docs.paginator.next":"Sonraki","theme.docs.paginator.previous":"\xd6nceki","theme.docs.sidebar.closeSidebarButtonAriaLabel":"Gezinme \xe7ubu\u011funu kapat","theme.docs.sidebar.collapseButtonAriaLabel":"Kenar \xe7ubu\u011funu daralt","theme.docs.sidebar.collapseButtonTitle":"Kenar \xe7ubu\u011funu daralt","theme.docs.sidebar.expandButtonAriaLabel":"Kenar \xe7ubu\u011funu geni\u015flet","theme.docs.sidebar.expandButtonTitle":"Kenar \xe7ubu\u011funu geni\u015flet","theme.docs.sidebar.navAriaLabel":"Docs sidebar","theme.docs.sidebar.toggleSidebarButtonAriaLabel":"Gezinme \xe7ubu\u011funu a\xe7/kapat","theme.docs.tagDocListPageTitle":"\\"{tagName}\\" ile etiketlenmi\u015f {nDocsTagged}","theme.docs.tagDocListPageTitle.nDocsTagged":"Bir dok\xfcman etiketlendi|{count} dok\xfcman etiketlendi","theme.docs.versionBadge.label":"Version: {versionLabel}","theme.docs.versions.latestVersionLinkLabel":"en son s\xfcr\xfcm","theme.docs.versions.latestVersionSuggestionLabel":"G\xfcncel belgeler i\xe7in bkz. {latestVersionLink} ({versionLabel}).","theme.docs.versions.unmaintainedVersionLabel":"Bu, {siteTitle} {versionLabel} dok\xfcmantasyonudur ve bak\u0131m\u0131 sonlanm\u0131\u015ft\u0131r.","theme.docs.versions.unreleasedVersionLabel":"Bu, {siteTitle} {versionLabel} s\xfcr\xfcm\xfc i\xe7in yay\u0131nlanmam\u0131\u015f dok\xfcmantasyondur.","theme.lastUpdated.atDate":" {date} tarihinde","theme.lastUpdated.byUser":" {user} taraf\u0131ndan","theme.lastUpdated.lastUpdatedAtBy":"En son {atDate} {byUser} g\xfcncellendi","theme.navbar.mobileLanguageDropdown.label":"Languages","theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel":"\u2190 Ana men\xfcye d\xf6n","theme.navbar.mobileVersionsDropdown.label":"Versiyonlar","theme.tags.tagsListLabel":"Etiketler:","theme.tags.tagsPageLink":"T\xfcm Etiketleri G\xf6r\xfcnt\xfcle","theme.tags.tagsPageTitle":"Etiketler","homepage.introduction":"Giri\u015f","homepage.header_welcome":"a Ho\u015f Geldiniz!","homepage.header_welcome_description":"vTime, sunucunuz i\xe7in G\xf6r\xfcnt\xfcl\xfc Kar\u015f\u0131lay\u0131c\u0131, G\xfcnl\xfckler, Genel komutlar, Moderasyon, Tepki rol, sosyal medya bildirimleri ve koruma gibi \xf6zellikler sunan, y\xfcksek d\xfczeyde yap\u0131land\u0131r\u0131labilir, \xe7ok ama\xe7l\u0131 bir bottur.","homepage.header_go_to_docs":"Dok\xfcmanlar\'a git","homepage.feature_one_category_first":"Y\xf6netim Paneli Kurulumu","homepage.feature_one_description_first":"Sunucu Y\xf6netimi i\xe7in Tek Noktadan Y\xf6netim Paneli","homepage.feature_one_category_second":"vTime Kurulumu","homepage.feature_one_description_second":"Ad\u0131m Ad\u0131m vTime\'u Davet Etmek","homepage.feature_one_category_third":"SSS","homepage.feature_one_description_third":"S\u0131k\xe7a Sorulan Sorular","homepage.feature_two_category_one":"Mod\xfcller","homepage.feature_two_description_first":"\xd6zel Sunucu Ayarlar\u0131, botun ayarlar\u0131n\u0131 s\u0131f\u0131rlayabilir ve dilini de\u011fi\u015ftirebilirsiniz.","homepage.feature_two_description_second":"Bir komut kanal\u0131n\u0131 se\xe7in, kara listeyi kontrol edin ve kolayca y\xf6netin.","homepage.feature_two_description_third":"vTime kay\u0131tlar\u0131n\u0131 etkinle\u015ftirip y\xf6netin, moderat\xf6r eylemlerini kaydedin ve kontrol panelinden kolayca \xf6zelle\u015ftirin.","homepage.feature_two_description_four":"Top 10 bildirimlerini etkinle\u015ftirerek rekabeti te\u015fvik edin ve sunucunuzun aktif kalmas\u0131n\u0131 sa\u011flay\u0131n.","homepage.learn_more":"Daha fazlas\u0131n\u0131 \xf6\u011frenin","homepage.category_first_section":"Sunucu Y\xf6netimi","homepage.category_second_section":"Mod\xfcller","theme.SearchBar.seeAll":"{count} sonucun t\xfcm\xfcn\xfc g\xf6r\xfcn","theme.SearchPage.documentsFound.plurals":"Bir d\xf6k\xfcman bulundu|{count} d\xf6k\xfcman bulundu","theme.SearchPage.existingResultsTitle":"Arama sonu\xe7lar\u0131","theme.SearchPage.emptyResultsTitle":"Dok\xfcmanlarda ara","theme.SearchPage.inputPlaceholder":"Araman\u0131z\u0131 buraya yaz\u0131n","theme.SearchPage.inputLabel":"Ara","theme.SearchPage.algoliaLabel":"Algolia ile Ara","theme.SearchPage.noResultsText":"Hi\xe7bir sonu\xe7 bulunamad\u0131","theme.SearchPage.fetchingNewResults":"Yeni sonu\xe7lar getiriliyor...","theme.SearchBar.label":"Ara","theme.SearchModal.searchBox.resetButtonTitle":"Sorguyu temizle","theme.SearchModal.searchBox.cancelButtonText":"\u0130ptal","theme.SearchModal.startScreen.recentSearchesTitle":"Son","theme.SearchModal.startScreen.noRecentSearchesText":"Son arama yok","theme.SearchModal.startScreen.saveRecentSearchButtonTitle":"Bu aramay\u0131 kaydet","theme.SearchModal.startScreen.removeRecentSearchButtonTitle":"Bu aramay\u0131 ge\xe7mi\u015ften kald\u0131r","theme.SearchModal.startScreen.favoriteSearchesTitle":"Favori","theme.SearchModal.startScreen.removeFavoriteSearchButtonTitle":"Bu aramay\u0131 favorilerden kald\u0131r","theme.SearchModal.errorScreen.titleText":"Sonu\xe7lar al\u0131namad\u0131","theme.SearchModal.errorScreen.helpText":"L\xfctfen a\u011f ba\u011flant\u0131n\u0131z\u0131 kontrol edin.","theme.SearchModal.footer.selectText":"Se\xe7","theme.SearchModal.footer.selectKeyAriaLabel":"Enter key","theme.SearchModal.footer.navigateText":"y\xf6nlendir","theme.SearchModal.footer.navigateUpKeyAriaLabel":"Yukar\u0131 ok","theme.SearchModal.footer.navigateDownKeyAriaLabel":"A\u015fa\u011f\u0131 ok","theme.SearchModal.footer.closeText":"Kapat","theme.SearchModal.footer.closeKeyAriaLabel":"ESC Tu\u015fu","theme.SearchModal.footer.searchByText":"\u015euna g\xf6re ara:","theme.SearchModal.noResultsScreen.noResultsText":"i\xe7in sonu\xe7 yok","theme.SearchModal.noResultsScreen.suggestedQueryText":"Aramay\u0131 deneyin","theme.SearchModal.noResultsScreen.reportMissingResultsText":"Bu sorgunun sonu\xe7 d\xf6nd\xfcrmesi gerekti\u011fine inan\u0131yor musunuz?","theme.SearchModal.noResultsScreen.reportMissingResultsLinkText":"Bilmemize izin ver.","theme.SearchModal.placeholder":"Dok\xfcmanlarda ara"}'
      );
    },
    2694: (e, t, n) => {
      "use strict";
      var r = n(6925);
      function a() {}
      function o() {}
      (o.resetWarningCache = a),
        (e.exports = function () {
          function e(e, t, n, a, o, i) {
            if (i !== r) {
              var l = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: a,
          };
          return (n.PropTypes = n), n;
        });
    },
    2799: (e, t) => {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        a = n ? Symbol.for("react.portal") : 60106,
        o = n ? Symbol.for("react.fragment") : 60107,
        i = n ? Symbol.for("react.strict_mode") : 60108,
        l = n ? Symbol.for("react.profiler") : 60114,
        s = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        f = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        m = n ? Symbol.for("react.suspense_list") : 60120,
        g = n ? Symbol.for("react.memo") : 60115,
        h = n ? Symbol.for("react.lazy") : 60116,
        b = n ? Symbol.for("react.block") : 60121,
        v = n ? Symbol.for("react.fundamental") : 60117,
        y = n ? Symbol.for("react.responder") : 60118,
        w = n ? Symbol.for("react.scope") : 60119;
      function k(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case c:
                case d:
                case o:
                case l:
                case i:
                case p:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case f:
                    case h:
                    case g:
                    case s:
                      return e;
                    default:
                      return t;
                  }
              }
            case a:
              return t;
          }
        }
      }
      function E(e) {
        return k(e) === d;
      }
      (t.AsyncMode = c),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = u),
        (t.ContextProvider = s),
        (t.Element = r),
        (t.ForwardRef = f),
        (t.Fragment = o),
        (t.Lazy = h),
        (t.Memo = g),
        (t.Portal = a),
        (t.Profiler = l),
        (t.StrictMode = i),
        (t.Suspense = p),
        (t.isAsyncMode = function (e) {
          return E(e) || k(e) === c;
        }),
        (t.isConcurrentMode = E),
        (t.isContextConsumer = function (e) {
          return k(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return k(e) === s;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return k(e) === f;
        }),
        (t.isFragment = function (e) {
          return k(e) === o;
        }),
        (t.isLazy = function (e) {
          return k(e) === h;
        }),
        (t.isMemo = function (e) {
          return k(e) === g;
        }),
        (t.isPortal = function (e) {
          return k(e) === a;
        }),
        (t.isProfiler = function (e) {
          return k(e) === l;
        }),
        (t.isStrictMode = function (e) {
          return k(e) === i;
        }),
        (t.isSuspense = function (e) {
          return k(e) === p;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === o ||
            e === d ||
            e === l ||
            e === i ||
            e === p ||
            e === m ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === h ||
                e.$$typeof === g ||
                e.$$typeof === s ||
                e.$$typeof === u ||
                e.$$typeof === f ||
                e.$$typeof === v ||
                e.$$typeof === y ||
                e.$$typeof === w ||
                e.$$typeof === b))
          );
        }),
        (t.typeOf = k);
    },
    2831: (e, t, n) => {
      "use strict";
      n.d(t, { u: () => i, v: () => l });
      var r = n(6347),
        a = n(8168),
        o = n(6540);
      function i(e, t, n) {
        return (
          void 0 === n && (n = []),
          e.some(function (e) {
            var a = e.path
              ? (0, r.B6)(t, e)
              : n.length
              ? n[n.length - 1].match
              : r.Ix.computeRootMatch(t);
            return (
              a &&
                (n.push({ route: e, match: a }), e.routes && i(e.routes, t, n)),
              a
            );
          }),
          n
        );
      }
      function l(e, t, n) {
        return (
          void 0 === t && (t = {}),
          void 0 === n && (n = {}),
          e
            ? o.createElement(
                r.dO,
                n,
                e.map(function (e, n) {
                  return o.createElement(r.qh, {
                    key: e.key || n,
                    path: e.path,
                    exact: e.exact,
                    strict: e.strict,
                    render: function (n) {
                      return e.render
                        ? e.render((0, a.A)({}, n, {}, t, { route: e }))
                        : o.createElement(
                            e.component,
                            (0, a.A)({}, n, t, { route: e })
                          );
                    },
                  });
                })
              )
            : null
        );
      }
    },
    2833: (e) => {
      e.exports = function (e, t, n, r) {
        var a = n ? n.call(r, e, t) : void 0;
        if (void 0 !== a) return !!a;
        if (e === t) return !0;
        if ("object" != typeof e || !e || "object" != typeof t || !t) return !1;
        var o = Object.keys(e),
          i = Object.keys(t);
        if (o.length !== i.length) return !1;
        for (
          var l = Object.prototype.hasOwnProperty.bind(t), s = 0;
          s < o.length;
          s++
        ) {
          var u = o[s];
          if (!l(u)) return !1;
          var c = e[u],
            d = t[u];
          if (
            !1 === (a = n ? n.call(r, c, d, u) : void 0) ||
            (void 0 === a && c !== d)
          )
            return !1;
        }
        return !0;
      };
    },
    2892: (e, t, n) => {
      "use strict";
      function r(e, t) {
        return (
          (r = Object.setPrototypeOf
            ? Object.setPrototypeOf.bind()
            : function (e, t) {
                return (e.__proto__ = t), e;
              }),
          r(e, t)
        );
      }
      function a(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          r(e, t);
      }
      n.d(t, { A: () => a });
    },
    2967: (e, t, n) => {
      "use strict";
      n.d(t, { Cy: () => r, tU: () => a });
      n(4586);
      const r = "default";
      function a(e, t) {
        return `docs-${e}-${t}`;
      }
    },
    2983: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (t.default = function (e, t) {
          const { trailingSlash: n, baseUrl: r } = t;
          if (e.startsWith("#")) return e;
          if (void 0 === n) return e;
          const [a] = e.split(/[#?]/),
            o =
              "/" === a || a === r
                ? a
                : ((i = a),
                  n
                    ? (function (e) {
                        return e.endsWith("/") ? e : `${e}/`;
                      })(i)
                    : (function (e) {
                        return e.endsWith("/") ? e.slice(0, -1) : e;
                      })(i));
          var i;
          return e.replace(a, o);
        });
    },
    3102: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => o, o: () => a });
      var r = n(6540);
      const a = r.createContext(null);
      function o(e) {
        let { children: t, value: n } = e;
        const o = r.useContext(a),
          i = (0, r.useMemo)(
            () =>
              (function (e) {
                let { parent: t, value: n } = e;
                if (!t) {
                  if (!n)
                    throw new Error(
                      "Unexpected: no Docusaurus route context found"
                    );
                  if (!("plugin" in n))
                    throw new Error(
                      "Unexpected: Docusaurus topmost route context has no `plugin` attribute"
                    );
                  return n;
                }
                const r = { ...t.data, ...n?.data };
                return { plugin: t.plugin, data: r };
              })({ parent: o, value: n }),
            [o, n]
          );
        return r.createElement(a.Provider, { value: i }, t);
      }
    },
    3104: (e, t, n) => {
      "use strict";
      n.d(t, { Mq: () => d, Tv: () => s, gk: () => f });
      var r = n(6540),
        a = n(8193),
        o = n(2303),
        i = n(9532);
      const l = r.createContext(void 0);
      function s(e) {
        let { children: t } = e;
        const n = (function () {
          const e = (0, r.useRef)(!0);
          return (0, r.useMemo)(
            () => ({
              scrollEventsEnabledRef: e,
              enableScrollEvents: () => {
                e.current = !0;
              },
              disableScrollEvents: () => {
                e.current = !1;
              },
            }),
            []
          );
        })();
        return r.createElement(l.Provider, { value: n }, t);
      }
      function u() {
        const e = (0, r.useContext)(l);
        if (null == e) throw new i.dV("ScrollControllerProvider");
        return e;
      }
      const c = () =>
        a.A.canUseDOM
          ? { scrollX: window.pageXOffset, scrollY: window.pageYOffset }
          : null;
      function d(e, t) {
        void 0 === t && (t = []);
        const { scrollEventsEnabledRef: n } = u(),
          a = (0, r.useRef)(c()),
          o = (0, i._q)(e);
        (0, r.useEffect)(() => {
          const e = () => {
              if (!n.current) return;
              const e = c();
              o(e, a.current), (a.current = e);
            },
            t = { passive: !0 };
          return (
            e(),
            window.addEventListener("scroll", e, t),
            () => window.removeEventListener("scroll", e, t)
          );
        }, [o, n, ...t]);
      }
      function f() {
        const e = (0, r.useRef)(null),
          t =
            (0, o.A)() &&
            "smooth" ===
              getComputedStyle(document.documentElement).scrollBehavior;
        return {
          startScroll: (n) => {
            e.current = t
              ? (function (e) {
                  return (
                    window.scrollTo({ top: e, behavior: "smooth" }), () => {}
                  );
                })(n)
              : (function (e) {
                  let t = null;
                  const n = document.documentElement.scrollTop > e;
                  return (
                    (function r() {
                      const a = document.documentElement.scrollTop;
                      ((n && a > e) || (!n && a < e)) &&
                        ((t = requestAnimationFrame(r)),
                        window.scrollTo(0, Math.floor(0.85 * (a - e)) + e));
                    })(),
                    () => t && cancelAnimationFrame(t)
                  );
                })(n);
          },
          cancelScroll: () => e.current?.(),
        };
      }
    },
    3109: (e, t, n) => {
      "use strict";
      function r() {
        return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      }
      n.d(t, { O: () => r });
    },
    3157: (e, t, n) => {
      var r = { "./": 8722 };
      function a(e) {
        var t = o(e);
        return n(t);
      }
      function o(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = o),
        (e.exports = a),
        (a.id = 3157);
    },
    3186: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var r = n(6540);
      const a = { iconExternalLink: "iconExternalLink_nPIU" };
      function o(e) {
        let { width: t = 13.5, height: n = 13.5 } = e;
        return r.createElement(
          "svg",
          {
            width: t,
            height: n,
            "aria-hidden": "true",
            viewBox: "0 0 24 24",
            className: a.iconExternalLink,
          },
          r.createElement("path", {
            fill: "currentColor",
            d: "M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z",
          })
        );
      }
    },
    3259: (e, t, n) => {
      "use strict";
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function a(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function i() {
        return (
          (i =
            Object.assign ||
            function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = arguments[t];
                for (var r in n)
                  Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
              }
              return e;
            }),
          i.apply(this, arguments)
        );
      }
      var l = n(6540),
        s = n(5556),
        u = [],
        c = [];
      function d(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      function f(e) {
        var t = { loading: !1, loaded: {}, error: null },
          n = [];
        try {
          Object.keys(e).forEach(function (r) {
            var a = d(e[r]);
            a.loading
              ? (t.loading = !0)
              : ((t.loaded[r] = a.loaded), (t.error = a.error)),
              n.push(a.promise),
              a.promise
                .then(function (e) {
                  t.loaded[r] = e;
                })
                .catch(function (e) {
                  t.error = e;
                });
          });
        } catch (r) {
          t.error = r;
        }
        return (
          (t.promise = Promise.all(n)
            .then(function (e) {
              return (t.loading = !1), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), e);
            })),
          t
        );
      }
      function p(e, t) {
        return l.createElement((n = e) && n.__esModule ? n.default : n, t);
        var n;
      }
      function m(e, t) {
        var d, f;
        if (!t.loading)
          throw new Error("react-loadable requires a `loading` component");
        var m = i(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: p,
              webpack: null,
              modules: null,
            },
            t
          ),
          g = null;
        function h() {
          return g || (g = e(m.loader)), g.promise;
        }
        return (
          u.push(h),
          "function" == typeof m.webpack &&
            c.push(function () {
              if (
                (0, m.webpack)().every(function (e) {
                  return void 0 !== e && void 0 !== n.m[e];
                })
              )
                return h();
            }),
          (f = d =
            (function (t) {
              function n(n) {
                var r;
                return (
                  o(a(a((r = t.call(this, n) || this))), "retry", function () {
                    r.setState({ error: null, loading: !0, timedOut: !1 }),
                      (g = e(m.loader)),
                      r._loadModule();
                  }),
                  h(),
                  (r.state = {
                    error: g.error,
                    pastDelay: !1,
                    timedOut: !1,
                    loading: g.loading,
                    loaded: g.loaded,
                  }),
                  r
                );
              }
              r(n, t),
                (n.preload = function () {
                  return h();
                });
              var i = n.prototype;
              return (
                (i.UNSAFE_componentWillMount = function () {
                  this._loadModule();
                }),
                (i.componentDidMount = function () {
                  this._mounted = !0;
                }),
                (i._loadModule = function () {
                  var e = this;
                  if (
                    (this.context.loadable &&
                      Array.isArray(m.modules) &&
                      m.modules.forEach(function (t) {
                        e.context.loadable.report(t);
                      }),
                    g.loading)
                  ) {
                    var t = function (t) {
                      e._mounted && e.setState(t);
                    };
                    "number" == typeof m.delay &&
                      (0 === m.delay
                        ? this.setState({ pastDelay: !0 })
                        : (this._delay = setTimeout(function () {
                            t({ pastDelay: !0 });
                          }, m.delay))),
                      "number" == typeof m.timeout &&
                        (this._timeout = setTimeout(function () {
                          t({ timedOut: !0 });
                        }, m.timeout));
                    var n = function () {
                      t({
                        error: g.error,
                        loaded: g.loaded,
                        loading: g.loading,
                      }),
                        e._clearTimeouts();
                    };
                    g.promise
                      .then(function () {
                        return n(), null;
                      })
                      .catch(function (e) {
                        return n(), null;
                      });
                  }
                }),
                (i.componentWillUnmount = function () {
                  (this._mounted = !1), this._clearTimeouts();
                }),
                (i._clearTimeouts = function () {
                  clearTimeout(this._delay), clearTimeout(this._timeout);
                }),
                (i.render = function () {
                  return this.state.loading || this.state.error
                    ? l.createElement(m.loading, {
                        isLoading: this.state.loading,
                        pastDelay: this.state.pastDelay,
                        timedOut: this.state.timedOut,
                        error: this.state.error,
                        retry: this.retry,
                      })
                    : this.state.loaded
                    ? m.render(this.state.loaded, this.props)
                    : null;
                }),
                n
              );
            })(l.Component)),
          o(d, "contextTypes", {
            loadable: s.shape({ report: s.func.isRequired }),
          }),
          f
        );
      }
      function g(e) {
        return m(d, e);
      }
      g.Map = function (e) {
        if ("function" != typeof e.render)
          throw new Error(
            "LoadableMap requires a `render(loaded, props)` function"
          );
        return m(f, e);
      };
      var h = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        r(t, e);
        var n = t.prototype;
        return (
          (n.getChildContext = function () {
            return { loadable: { report: this.props.report } };
          }),
          (n.render = function () {
            return l.Children.only(this.props.children);
          }),
          t
        );
      })(l.Component);
      function b(e) {
        for (var t = []; e.length; ) {
          var n = e.pop();
          t.push(n());
        }
        return Promise.all(t).then(function () {
          if (e.length) return b(e);
        });
      }
      o(h, "propTypes", { report: s.func.isRequired }),
        o(h, "childContextTypes", {
          loadable: s.shape({ report: s.func.isRequired }).isRequired,
        }),
        (g.Capture = h),
        (g.preloadAll = function () {
          return new Promise(function (e, t) {
            b(u).then(e, t);
          });
        }),
        (g.preloadReady = function () {
          return new Promise(function (e, t) {
            b(c).then(e, e);
          });
        }),
        (e.exports = g);
    },
    3465: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => d });
      var r = n(8168),
        a = n(6540),
        o = n(5489),
        i = n(6025),
        l = n(4586),
        s = n(6342),
        u = n(1653);
      function c(e) {
        let { logo: t, alt: n, imageClassName: r } = e;
        const o = {
            light: (0, i.A)(t.src),
            dark: (0, i.A)(t.srcDark || t.src),
          },
          l = a.createElement(u.A, {
            className: t.className,
            sources: o,
            height: t.height,
            width: t.width,
            alt: n,
            style: t.style,
          });
        return r ? a.createElement("div", { className: r }, l) : l;
      }
      function d(e) {
        const {
            siteConfig: { title: t },
          } = (0, l.A)(),
          {
            navbar: { title: n, logo: u },
          } = (0, s.p)(),
          { imageClassName: d, titleClassName: f, ...p } = e,
          m = (0, i.A)(u?.href || "/"),
          g = n ? "" : t,
          h = u?.alt ?? g;
        return a.createElement(
          o.A,
          (0, r.A)({ to: m }, p, u?.target && { target: u.target }),
          u && a.createElement(c, { logo: u, alt: h, imageClassName: d }),
          null != n && a.createElement("b", { className: f }, n)
        );
      }
    },
    4054: (e) => {
      "use strict";
      e.exports = JSON.parse(
        '{"/tr/docs-5d6":{"__comp":"1be78505","__context":{"plugin":"7fa5cf47"},"versionMetadata":"935f2afb"},"/tr/docs/category/getting-started-789":{"__comp":"14eb3368","categoryGeneratedIndex":"961729fb"},"/tr/docs/category/modules-4e7":{"__comp":"14eb3368","categoryGeneratedIndex":"929ecd66"},"/tr/docs/getting-started/commands-e2f":{"__comp":"17896441","content":"f4dd58c8"},"/tr/docs/getting-started/dashboard-814":{"__comp":"17896441","content":"7627bfe5"},"/tr/docs/getting-started/faq-57b":{"__comp":"17896441","content":"b3daed8e"},"/tr/docs/getting-started/premium-14f":{"__comp":"17896441","content":"bf25872c"},"/tr/docs/getting-started/setup-bb5":{"__comp":"17896441","content":"65217c5f"},"/tr/docs/intro-aba":{"__comp":"17896441","content":"cd544038"},"/tr/docs/modules/leaderboard-189":{"__comp":"17896441","content":"02da30df"},"/tr/docs/modules/logs-d39":{"__comp":"17896441","content":"e85f4645"},"/tr/docs/modules/modactions-bfe":{"__comp":"17896441","content":"041535af"},"/tr/docs/modules/moderation-fe0":{"__comp":"17896441","content":"420f3100"},"/tr/docs/modules/notifiestop10-e69":{"__comp":"17896441","content":"62219348"},"/tr/docs/modules/overview-3b9":{"__comp":"17896441","content":"f7c17443"},"/tr/docs/modules/serversettings-915":{"__comp":"17896441","content":"e2a8d2f8"},"/tr/-59f":{"__comp":"1df93b7f","__context":{"plugin":"c971f9b7"},"config":"5e9f5e1a"}}'
      );
    },
    4070: (e, t, n) => {
      "use strict";
      n.d(t, {
        zK: () => g,
        vT: () => f,
        Gy: () => c,
        HW: () => h,
        ht: () => d,
        r7: () => m,
        jh: () => p,
      });
      var r = n(6347),
        a = n(4586),
        o = n(7065);
      function i(e, t) {
        void 0 === t && (t = {});
        const n = (function () {
          const { globalData: e } = (0, a.A)();
          return e;
        })()[e];
        if (!n && t.failfast)
          throw new Error(
            `Docusaurus plugin global data not found for "${e}" plugin.`
          );
        return n;
      }
      const l = (e) => e.versions.find((e) => e.isLast);
      function s(e, t) {
        const n = (function (e, t) {
            const n = l(e);
            return [...e.versions.filter((e) => e !== n), n].find(
              (e) => !!(0, r.B6)(t, { path: e.path, exact: !1, strict: !1 })
            );
          })(e, t),
          a = n?.docs.find(
            (e) => !!(0, r.B6)(t, { path: e.path, exact: !0, strict: !1 })
          );
        return {
          activeVersion: n,
          activeDoc: a,
          alternateDocVersions: a
            ? (function (t) {
                const n = {};
                return (
                  e.versions.forEach((e) => {
                    e.docs.forEach((r) => {
                      r.id === t && (n[e.name] = r);
                    });
                  }),
                  n
                );
              })(a.id)
            : {},
        };
      }
      const u = {},
        c = () => i("docusaurus-plugin-content-docs") ?? u,
        d = (e) =>
          (function (e, t, n) {
            void 0 === t && (t = o.W), void 0 === n && (n = {});
            const r = i(e),
              a = r?.[t];
            if (!a && n.failfast)
              throw new Error(
                `Docusaurus plugin global data not found for "${e}" plugin with id "${t}".`
              );
            return a;
          })("docusaurus-plugin-content-docs", e, { failfast: !0 });
      function f(e) {
        void 0 === e && (e = {});
        const t = c(),
          { pathname: n } = (0, r.zy)();
        return (function (e, t, n) {
          void 0 === n && (n = {});
          const a = Object.entries(e)
              .sort((e, t) => t[1].path.localeCompare(e[1].path))
              .find((e) => {
                let [, n] = e;
                return !!(0, r.B6)(t, { path: n.path, exact: !1, strict: !1 });
              }),
            o = a ? { pluginId: a[0], pluginData: a[1] } : void 0;
          if (!o && n.failfast)
            throw new Error(
              `Can't find active docs plugin for "${t}" pathname, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(
                e
              )
                .map((e) => e.path)
                .join(", ")}`
            );
          return o;
        })(t, n, e);
      }
      function p(e) {
        return d(e).versions;
      }
      function m(e) {
        const t = d(e);
        return l(t);
      }
      function g(e) {
        const t = d(e),
          { pathname: n } = (0, r.zy)();
        return s(t, n);
      }
      function h(e) {
        const t = d(e),
          { pathname: n } = (0, r.zy)();
        return (function (e, t) {
          const n = l(e);
          return {
            latestDocSuggestion: s(e, t).alternateDocVersions[n.name],
            latestVersionSuggestion: n,
          };
        })(t, n);
      }
    },
    4090: (e, t, n) => {
      "use strict";
      n.d(t, { w: () => a, J: () => o });
      var r = n(6540);
      const a = "navigation-with-keyboard";
      function o() {
        (0, r.useEffect)(() => {
          function e(e) {
            "keydown" === e.type &&
              "Tab" === e.key &&
              document.body.classList.add(a),
              "mousedown" === e.type && document.body.classList.remove(a);
          }
          return (
            document.addEventListener("keydown", e),
            document.addEventListener("mousedown", e),
            () => {
              document.body.classList.remove(a),
                document.removeEventListener("keydown", e),
                document.removeEventListener("mousedown", e);
            }
          );
        }, []);
      }
    },
    4146: (e, t, n) => {
      "use strict";
      var r = n(4363),
        a = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        l = {};
      function s(e) {
        return r.isMemo(e) ? i : l[e.$$typeof] || a;
      }
      (l[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (l[r.Memo] = i);
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        f = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        m = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (m) {
            var a = p(n);
            a && a !== m && e(t, a, r);
          }
          var i = c(n);
          d && (i = i.concat(d(n)));
          for (var l = s(t), g = s(n), h = 0; h < i.length; ++h) {
            var b = i[h];
            if (!(o[b] || (r && r[b]) || (g && g[b]) || (l && l[b]))) {
              var v = f(n, b);
              try {
                u(t, b, v);
              } catch (y) {}
            }
          }
        }
        return t;
      };
    },
    4363: (e, t, n) => {
      "use strict";
      e.exports = n(2799);
    },
    4581: (e, t, n) => {
      "use strict";
      n.d(t, { l: () => u });
      var r = n(6540),
        a = n(8193);
      const o = { desktop: "desktop", mobile: "mobile", ssr: "ssr" },
        i = 996;
      function l() {
        return a.A.canUseDOM
          ? window.innerWidth > i
            ? o.desktop
            : o.mobile
          : o.ssr;
      }
      const s = !1;
      function u() {
        const [e, t] = (0, r.useState)(() => (s ? "ssr" : l()));
        return (
          (0, r.useEffect)(() => {
            function e() {
              t(l());
            }
            const n = s ? window.setTimeout(e, 1e3) : void 0;
            return (
              window.addEventListener("resize", e),
              () => {
                window.removeEventListener("resize", e), clearTimeout(n);
              }
            );
          }, []),
          e
        );
      }
    },
    4586: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var r = n(6540),
        a = n(6988);
      function o() {
        return (0, r.useContext)(a.o);
      }
    },
    4625: (e, t, n) => {
      "use strict";
      n.d(t, { Kd: () => c, N_: () => h, k2: () => y });
      var r = n(6347),
        a = n(2892),
        o = n(6540),
        i = n(1513),
        l = n(8168),
        s = n(8587),
        u = n(1561),
        c = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).history = (0,
              i.zR)(t.props)),
              t
            );
          }
          return (
            (0, a.A)(t, e),
            (t.prototype.render = function () {
              return o.createElement(r.Ix, {
                history: this.history,
                children: this.props.children,
              });
            }),
            t
          );
        })(o.Component);
      o.Component;
      var d = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        f = function (e, t) {
          return "string" == typeof e ? (0, i.yJ)(e, null, null, t) : e;
        },
        p = function (e) {
          return e;
        },
        m = o.forwardRef;
      void 0 === m && (m = p);
      var g = m(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          a = e.onClick,
          i = (0, s.A)(e, ["innerRef", "navigate", "onClick"]),
          u = i.target,
          c = (0, l.A)({}, i, {
            onClick: function (e) {
              try {
                a && a(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (u && "_self" !== u) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), r());
            },
          });
        return (c.ref = (p !== m && t) || n), o.createElement("a", c);
      });
      var h = m(function (e, t) {
          var n = e.component,
            a = void 0 === n ? g : n,
            c = e.replace,
            h = e.to,
            b = e.innerRef,
            v = (0, s.A)(e, ["component", "replace", "to", "innerRef"]);
          return o.createElement(r.XZ.Consumer, null, function (e) {
            e || (0, u.A)(!1);
            var n = e.history,
              r = f(d(h, e.location), e.location),
              s = r ? n.createHref(r) : "",
              g = (0, l.A)({}, v, {
                href: s,
                navigate: function () {
                  var t = d(h, e.location),
                    r = (0, i.AO)(e.location) === (0, i.AO)(f(t));
                  (c || r ? n.replace : n.push)(t);
                },
              });
            return (
              p !== m ? (g.ref = t || b) : (g.innerRef = b),
              o.createElement(a, g)
            );
          });
        }),
        b = function (e) {
          return e;
        },
        v = o.forwardRef;
      void 0 === v && (v = b);
      var y = v(function (e, t) {
        var n = e["aria-current"],
          a = void 0 === n ? "page" : n,
          i = e.activeClassName,
          c = void 0 === i ? "active" : i,
          p = e.activeStyle,
          m = e.className,
          g = e.exact,
          y = e.isActive,
          w = e.location,
          k = e.sensitive,
          E = e.strict,
          S = e.style,
          x = e.to,
          T = e.innerRef,
          A = (0, s.A)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return o.createElement(r.XZ.Consumer, null, function (e) {
          e || (0, u.A)(!1);
          var n = w || e.location,
            i = f(d(x, n), n),
            s = i.pathname,
            C = s && s.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            _ = C
              ? (0, r.B6)(n.pathname, {
                  path: C,
                  exact: g,
                  sensitive: k,
                  strict: E,
                })
              : null,
            L = !!(y ? y(_, n) : _),
            R = "function" == typeof m ? m(L) : m,
            N = "function" == typeof S ? S(L) : S;
          L &&
            ((R = (function () {
              for (
                var e = arguments.length, t = new Array(e), n = 0;
                n < e;
                n++
              )
                t[n] = arguments[n];
              return t
                .filter(function (e) {
                  return e;
                })
                .join(" ");
            })(R, c)),
            (N = (0, l.A)({}, N, p)));
          var P = (0, l.A)(
            { "aria-current": (L && a) || null, className: R, style: N, to: i },
            A
          );
          return (
            b !== v ? (P.ref = t || T) : (P.innerRef = T), o.createElement(h, P)
          );
        });
      });
    },
    4634: (e) => {
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == Object.prototype.toString.call(e);
        };
    },
    4784: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => r });
      const r = {
        title: "vTime Docs",
        tagline: "vTime Docs",
        url: "https://docs.vtime.me",
        baseUrl: "/tr/",
        onBrokenLinks: "throw",
        onBrokenMarkdownLinks: "warn",
        favicon: "img/vTime.ico",
        organizationName: "vTimeMain",
        projectName: "docs",
        i18n: {
          defaultLocale: "en",
          locales: ["en", "ar", "es", "fr", "tr", "ru", "ja"],
          localeConfigs: { ar: { direction: "rtl" } },
          path: "i18n",
        },
        presets: [
          [
            "classic",
            {
              theme: {
                customCss:
                  "C:\\Users\\Ghmdon\\Desktop\\vTime Docs\\docs 0.0.1\\src\\css\\custom.css",
              },
              blog: !1,
              gtag: { trackingID: "G-2ME5P0RZYD" },
            },
          ],
        ],
        themeConfig: {
          colorMode: {
            defaultMode: "dark",
            disableSwitch: !0,
            respectPrefersColorScheme: !1,
          },
          image: "img/logo.png",
          navbar: {
            title: "vTime Docs",
            logo: { alt: "vTime Docs", src: "img/logo.png" },
            items: [
              {
                type: "doc",
                docId: "introduction",
                position: "left",
                label: "Giri\u015f",
              },
              {
                to: "https://vTime.me/dashboard",
                label: "Y\xf6netim Paneli",
                position: "left",
              },
              {
                to: "https://discord.com/invite/vTime",
                label: "\u0130leti\u015fime ge\xe7in",
                position: "left",
              },
              {
                type: "localeDropdown",
                position: "right",
                dropdownItemsBefore: [],
                dropdownItemsAfter: [],
              },
            ],
            hideOnScroll: !1,
          },
          footer: {
            style: "dark",
            logo: {
              alt: "vTime brand logo",
              src: "img/logo.png",
              width: 130,
              height: 130,
            },
            links: [
              {
                title: "D\xf6k\xfcmanlar",
                items: [{ label: "Giri\u015f", to: "/docs/intro" }],
              },
              {
                title: "Topluluk",
                items: [{ label: "Discord", href: "https://discord.gg/vTime" }],
              },
              {
                title: "Daha Fazla",
                items: [
                  { label: "vTime Website", href: "https://vTime.me" },
                  { label: "Komutlar", href: "https://vTime.me/commands" },
                  { label: "Support", href: "https://vTime.me/commands" },
                  { label: "Privacy Policy", href: "https://vTime.me/privacy" },
                  {
                    label: "Terms and Conditions",
                    href: "https://vTime.me/terms",
                  },
                ],
              },
            ],
            copyright:
              "Copyright \xa9 2023 vTime, Inc. Docusaurus ile olu\u015fturuldu.",
          },
          prism: {
            darkTheme: {
              plain: { color: "#F8F8F2", backgroundColor: "#282A36" },
              styles: [
                {
                  types: ["prolog", "constant", "builtin"],
                  style: { color: "rgb(189, 147, 249)" },
                },
                {
                  types: ["inserted", "function"],
                  style: { color: "rgb(80, 250, 123)" },
                },
                { types: ["deleted"], style: { color: "rgb(255, 85, 85)" } },
                { types: ["changed"], style: { color: "rgb(255, 184, 108)" } },
                {
                  types: ["punctuation", "symbol"],
                  style: { color: "rgb(248, 248, 242)" },
                },
                {
                  types: ["string", "char", "tag", "selector"],
                  style: { color: "rgb(255, 121, 198)" },
                },
                {
                  types: ["keyword", "variable"],
                  style: { color: "rgb(189, 147, 249)", fontStyle: "italic" },
                },
                { types: ["comment"], style: { color: "rgb(98, 114, 164)" } },
                {
                  types: ["attr-name"],
                  style: { color: "rgb(241, 250, 140)" },
                },
              ],
            },
            theme: {
              plain: { color: "#bfc7d5", backgroundColor: "#292d3e" },
              styles: [
                {
                  types: ["comment"],
                  style: { color: "rgb(105, 112, 152)", fontStyle: "italic" },
                },
                {
                  types: ["string", "inserted"],
                  style: { color: "rgb(195, 232, 141)" },
                },
                { types: ["number"], style: { color: "rgb(247, 140, 108)" } },
                {
                  types: ["builtin", "char", "constant", "function"],
                  style: { color: "rgb(130, 170, 255)" },
                },
                {
                  types: ["punctuation", "selector"],
                  style: { color: "rgb(199, 146, 234)" },
                },
                { types: ["variable"], style: { color: "rgb(191, 199, 213)" } },
                {
                  types: ["class-name", "attr-name"],
                  style: { color: "rgb(255, 203, 107)" },
                },
                {
                  types: ["tag", "deleted"],
                  style: { color: "rgb(255, 85, 114)" },
                },
                { types: ["operator"], style: { color: "rgb(137, 221, 255)" } },
                { types: ["boolean"], style: { color: "rgb(255, 88, 116)" } },
                { types: ["keyword"], style: { fontStyle: "italic" } },
                {
                  types: ["doctype"],
                  style: { color: "rgb(199, 146, 234)", fontStyle: "italic" },
                },
                {
                  types: ["namespace"],
                  style: { color: "rgb(178, 204, 214)" },
                },
                { types: ["url"], style: { color: "rgb(221, 221, 221)" } },
              ],
            },
            additionalLanguages: [],
            magicComments: [
              {
                className: "theme-code-block-highlighted-line",
                line: "highlight-next-line",
                block: { start: "highlight-start", end: "highlight-end" },
              },
            ],
          },
          docs: {
            versionPersistence: "localStorage",
            sidebar: { hideable: !1, autoCollapseCategories: !1 },
          },
          metadata: [],
          tableOfContents: { minHeadingLevel: 2, maxHeadingLevel: 3 },
        },
        baseUrlIssueBanner: !0,
        onDuplicateRoutes: "warn",
        staticDirectories: ["static"],
        customFields: {},
        plugins: [],
        themes: [],
        scripts: [],
        headTags: [],
        stylesheets: [],
        clientModules: [],
        titleDelimiter: "|",
        noIndex: !1,
        markdown: { mermaid: !1 },
      };
    },
    5041: (e, t, n) => {
      "use strict";
      n.d(t, { Mj: () => m, oq: () => p });
      var r = n(6540),
        a = n(2303),
        o = n(9466),
        i = n(9532),
        l = n(6342);
      const s = (0, o.Wf)("docusaurus.announcement.dismiss"),
        u = (0, o.Wf)("docusaurus.announcement.id"),
        c = () => "true" === s.get(),
        d = (e) => s.set(String(e)),
        f = r.createContext(null);
      function p(e) {
        let { children: t } = e;
        const n = (function () {
          const { announcementBar: e } = (0, l.p)(),
            t = (0, a.A)(),
            [n, o] = (0, r.useState)(() => !!t && c());
          (0, r.useEffect)(() => {
            o(c());
          }, []);
          const i = (0, r.useCallback)(() => {
            d(!0), o(!0);
          }, []);
          return (
            (0, r.useEffect)(() => {
              if (!e) return;
              const { id: t } = e;
              let n = u.get();
              "annoucement-bar" === n && (n = "announcement-bar");
              const r = t !== n;
              u.set(t), r && d(!1), (!r && c()) || o(!1);
            }, [e]),
            (0, r.useMemo)(() => ({ isActive: !!e && !n, close: i }), [e, n, i])
          );
        })();
        return r.createElement(f.Provider, { value: n }, t);
      }
      function m() {
        const e = (0, r.useContext)(f);
        if (!e) throw new i.dV("AnnouncementBarProvider");
        return e;
      }
    },
    5062: (e, t, n) => {
      "use strict";
      n.d(t, { $: () => i });
      var r = n(6540),
        a = n(6347),
        o = n(9532);
      function i(e) {
        const t = (0, a.zy)(),
          n = (0, o.ZC)(t),
          i = (0, o._q)(e);
        (0, r.useEffect)(() => {
          n && t !== n && i({ location: t, previousLocation: n });
        }, [i, t, n]);
      }
    },
    5228: (e) => {
      "use strict";
      var t = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (a) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, a) {
            for (
              var o,
                i,
                l = (function (e) {
                  if (null == e)
                    throw new TypeError(
                      "Object.assign cannot be called with null or undefined"
                    );
                  return Object(e);
                })(e),
                s = 1;
              s < arguments.length;
              s++
            ) {
              for (var u in (o = Object(arguments[s])))
                n.call(o, u) && (l[u] = o[u]);
              if (t) {
                i = t(o);
                for (var c = 0; c < i.length; c++)
                  r.call(o, i[c]) && (l[i[c]] = o[i[c]]);
              }
            }
            return l;
          };
    },
    5260: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => o });
      var r = n(6540),
        a = n(545);
      function o(e) {
        return r.createElement(a.mg, e);
      }
    },
    5287: (e, t, n) => {
      "use strict";
      var r = n(5228),
        a = 60103,
        o = 60106;
      (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
      var i = 60109,
        l = 60110,
        s = 60112;
      t.Suspense = 60113;
      var u = 60115,
        c = 60116;
      if ("function" == typeof Symbol && Symbol.for) {
        var d = Symbol.for;
        (a = d("react.element")),
          (o = d("react.portal")),
          (t.Fragment = d("react.fragment")),
          (t.StrictMode = d("react.strict_mode")),
          (t.Profiler = d("react.profiler")),
          (i = d("react.provider")),
          (l = d("react.context")),
          (s = d("react.forward_ref")),
          (t.Suspense = d("react.suspense")),
          (u = d("react.memo")),
          (c = d("react.lazy"));
      }
      var f = "function" == typeof Symbol && Symbol.iterator;
      function p(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var m = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        g = {};
      function h(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = g),
          (this.updater = n || m);
      }
      function b() {}
      function v(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = g),
          (this.updater = n || m);
      }
      (h.prototype.isReactComponent = {}),
        (h.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(p(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (h.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (b.prototype = h.prototype);
      var y = (v.prototype = new b());
      (y.constructor = v), r(y, h.prototype), (y.isPureReactComponent = !0);
      var w = { current: null },
        k = Object.prototype.hasOwnProperty,
        E = { key: !0, ref: !0, __self: !0, __source: !0 };
      function S(e, t, n) {
        var r,
          o = {},
          i = null,
          l = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (i = "" + t.key),
          t))
            k.call(t, r) && !E.hasOwnProperty(r) && (o[r] = t[r]);
        var s = arguments.length - 2;
        if (1 === s) o.children = n;
        else if (1 < s) {
          for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
          o.children = u;
        }
        if (e && e.defaultProps)
          for (r in (s = e.defaultProps)) void 0 === o[r] && (o[r] = s[r]);
        return {
          $$typeof: a,
          type: e,
          key: i,
          ref: l,
          props: o,
          _owner: w.current,
        };
      }
      function x(e) {
        return "object" == typeof e && null !== e && e.$$typeof === a;
      }
      var T = /\/+/g;
      function A(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function C(e, t, n, r, i) {
        var l = typeof e;
        ("undefined" !== l && "boolean" !== l) || (e = null);
        var s = !1;
        if (null === e) s = !0;
        else
          switch (l) {
            case "string":
            case "number":
              s = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case a:
                case o:
                  s = !0;
              }
          }
        if (s)
          return (
            (i = i((s = e))),
            (e = "" === r ? "." + A(s, 0) : r),
            Array.isArray(i)
              ? ((n = ""),
                null != e && (n = e.replace(T, "$&/") + "/"),
                C(i, t, n, "", function (e) {
                  return e;
                }))
              : null != i &&
                (x(i) &&
                  (i = (function (e, t) {
                    return {
                      $$typeof: a,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    i,
                    n +
                      (!i.key || (s && s.key === i.key)
                        ? ""
                        : ("" + i.key).replace(T, "$&/") + "/") +
                      e
                  )),
                t.push(i)),
            1
          );
        if (((s = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
          for (var u = 0; u < e.length; u++) {
            var c = r + A((l = e[u]), u);
            s += C(l, t, n, c, i);
          }
        else if (
          ((c = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (f && e[f]) || e["@@iterator"])
              ? e
              : null;
          })(e)),
          "function" == typeof c)
        )
          for (e = c.call(e), u = 0; !(l = e.next()).done; )
            s += C((l = l.value), t, n, (c = r + A(l, u++)), i);
        else if ("object" === l)
          throw (
            ((t = "" + e),
            Error(
              p(
                31,
                "[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t
              )
            ))
          );
        return s;
      }
      function _(e, t, n) {
        if (null == e) return e;
        var r = [],
          a = 0;
        return (
          C(e, r, "", "", function (e) {
            return t.call(n, e, a++);
          }),
          r
        );
      }
      function L(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()),
            (e._status = 0),
            (e._result = t),
            t.then(
              function (t) {
                0 === e._status &&
                  ((t = t.default), (e._status = 1), (e._result = t));
              },
              function (t) {
                0 === e._status && ((e._status = 2), (e._result = t));
              }
            );
        }
        if (1 === e._status) return e._result;
        throw e._result;
      }
      var R = { current: null };
      function N() {
        var e = R.current;
        if (null === e) throw Error(p(321));
        return e;
      }
      var P = {
        ReactCurrentDispatcher: R,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: w,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (t.Children = {
        map: _,
        forEach: function (e, t, n) {
          _(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            _(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            _(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!x(e)) throw Error(p(143));
          return e;
        },
      }),
        (t.Component = h),
        (t.PureComponent = v),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P),
        (t.cloneElement = function (e, t, n) {
          if (null == e) throw Error(p(267, e));
          var o = r({}, e.props),
            i = e.key,
            l = e.ref,
            s = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((l = t.ref), (s = w.current)),
              void 0 !== t.key && (i = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var u = e.type.defaultProps;
            for (c in t)
              k.call(t, c) &&
                !E.hasOwnProperty(c) &&
                (o[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) o.children = n;
          else if (1 < c) {
            u = Array(c);
            for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
            o.children = u;
          }
          return {
            $$typeof: a,
            type: e.type,
            key: i,
            ref: l,
            props: o,
            _owner: s,
          };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: l,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: i, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = S),
        (t.createFactory = function (e) {
          var t = S.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: s, render: e };
        }),
        (t.isValidElement = x),
        (t.lazy = function (e) {
          return {
            $$typeof: c,
            _payload: { _status: -1, _result: e },
            _init: L,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return N().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return N().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return N().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return N().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return N().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return N().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return N().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return N().useRef(e);
        }),
        (t.useState = function (e) {
          return N().useState(e);
        }),
        (t.version = "17.0.2");
    },
    5293: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => h, a: () => g });
      var r = n(6540),
        a = n(8193),
        o = n(9532),
        i = n(9466),
        l = n(6342);
      const s = r.createContext(void 0),
        u = "theme",
        c = (0, i.Wf)(u),
        d = { light: "light", dark: "dark" },
        f = (e) => (e === d.dark ? d.dark : d.light),
        p = (e) =>
          a.A.canUseDOM
            ? f(document.documentElement.getAttribute("data-theme"))
            : f(e),
        m = (e) => {
          c.set(f(e));
        };
      function g(e) {
        let { children: t } = e;
        const n = (function () {
          const {
              colorMode: {
                defaultMode: e,
                disableSwitch: t,
                respectPrefersColorScheme: n,
              },
            } = (0, l.p)(),
            [a, o] = (0, r.useState)(p(e));
          (0, r.useEffect)(() => {
            t && c.del();
          }, [t]);
          const i = (0, r.useCallback)(
            function (t, r) {
              void 0 === r && (r = {});
              const { persist: a = !0 } = r;
              t
                ? (o(t), a && m(t))
                : (o(
                    n
                      ? window.matchMedia("(prefers-color-scheme: dark)")
                          .matches
                        ? d.dark
                        : d.light
                      : e
                  ),
                  c.del());
            },
            [n, e]
          );
          (0, r.useEffect)(() => {
            document.documentElement.setAttribute("data-theme", f(a));
          }, [a]),
            (0, r.useEffect)(() => {
              if (t) return;
              const e = (e) => {
                if (e.key !== u) return;
                const t = c.get();
                null !== t && i(f(t));
              };
              return (
                window.addEventListener("storage", e),
                () => window.removeEventListener("storage", e)
              );
            }, [t, i]);
          const s = (0, r.useRef)(!1);
          return (
            (0, r.useEffect)(() => {
              if (t && !n) return;
              const e = window.matchMedia("(prefers-color-scheme: dark)"),
                r = () => {
                  window.matchMedia("print").matches || s.current
                    ? (s.current = window.matchMedia("print").matches)
                    : i(null);
                };
              return e.addListener(r), () => e.removeListener(r);
            }, [i, t, n]),
            (0, r.useMemo)(
              () => ({
                colorMode: a,
                setColorMode: i,
                get isDarkTheme() {
                  return a === d.dark;
                },
                setLightTheme() {
                  i(d.light);
                },
                setDarkTheme() {
                  i(d.dark);
                },
              }),
              [a, i]
            )
          );
        })();
        return r.createElement(s.Provider, { value: n }, t);
      }
      function h() {
        const e = (0, r.useContext)(s);
        if (null == e)
          throw new o.dV(
            "ColorModeProvider",
            "Please see https://docusaurus.io/docs/api/themes/configuration#use-color-mode."
          );
        return e;
      }
    },
    5302: (e, t, n) => {
      var r = n(4634);
      (e.exports = m),
        (e.exports.parse = o),
        (e.exports.compile = function (e, t) {
          return s(o(e, t), t);
        }),
        (e.exports.tokensToFunction = s),
        (e.exports.tokensToRegExp = p);
      var a = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function o(e, t) {
        for (
          var n, r = [], o = 0, l = 0, s = "", u = (t && t.delimiter) || "/";
          null != (n = a.exec(e));

        ) {
          var d = n[0],
            f = n[1],
            p = n.index;
          if (((s += e.slice(l, p)), (l = p + d.length), f)) s += f[1];
          else {
            var m = e[l],
              g = n[2],
              h = n[3],
              b = n[4],
              v = n[5],
              y = n[6],
              w = n[7];
            s && (r.push(s), (s = ""));
            var k = null != g && null != m && m !== g,
              E = "+" === y || "*" === y,
              S = "?" === y || "*" === y,
              x = g || u,
              T = b || v,
              A =
                g ||
                ("string" == typeof r[r.length - 1] ? r[r.length - 1] : "");
            r.push({
              name: h || o++,
              prefix: g || "",
              delimiter: x,
              optional: S,
              repeat: E,
              partial: k,
              asterisk: !!w,
              pattern: T ? c(T) : w ? ".*" : i(x, A),
            });
          }
        }
        return l < e.length && (s += e.substr(l)), s && r.push(s), r;
      }
      function i(e, t) {
        return !t || t.indexOf(e) > -1
          ? "[^" + u(e) + "]+?"
          : u(t) + "|(?:(?!" + u(t) + ")[^" + u(e) + "])+?";
      }
      function l(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function s(e, t) {
        for (var n = new Array(e.length), a = 0; a < e.length; a++)
          "object" == typeof e[a] &&
            (n[a] = new RegExp("^(?:" + e[a].pattern + ")$", f(t)));
        return function (t, a) {
          for (
            var o = "",
              i = t || {},
              s = (a || {}).pretty ? l : encodeURIComponent,
              u = 0;
            u < e.length;
            u++
          ) {
            var c = e[u];
            if ("string" != typeof c) {
              var d,
                f = i[c.name];
              if (null == f) {
                if (c.optional) {
                  c.partial && (o += c.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + c.name + '" to be defined');
              }
              if (r(f)) {
                if (!c.repeat)
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(f) +
                      "`"
                  );
                if (0 === f.length) {
                  if (c.optional) continue;
                  throw new TypeError(
                    'Expected "' + c.name + '" to not be empty'
                  );
                }
                for (var p = 0; p < f.length; p++) {
                  if (((d = s(f[p])), !n[u].test(d)))
                    throw new TypeError(
                      'Expected all "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received `' +
                        JSON.stringify(d) +
                        "`"
                    );
                  o += (0 === p ? c.prefix : c.delimiter) + d;
                }
              } else {
                if (
                  ((d = c.asterisk
                    ? encodeURI(f).replace(/[?#]/g, function (e) {
                        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : s(f)),
                  !n[u].test(d))
                )
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to match "' +
                      c.pattern +
                      '", but received "' +
                      d +
                      '"'
                  );
                o += c.prefix + d;
              }
            } else o += c;
          }
          return o;
        };
      }
      function u(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function c(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1");
      }
      function d(e, t) {
        return (e.keys = t), e;
      }
      function f(e) {
        return e && e.sensitive ? "" : "i";
      }
      function p(e, t, n) {
        r(t) || ((n = t || n), (t = []));
        for (
          var a = (n = n || {}).strict, o = !1 !== n.end, i = "", l = 0;
          l < e.length;
          l++
        ) {
          var s = e[l];
          if ("string" == typeof s) i += u(s);
          else {
            var c = u(s.prefix),
              p = "(?:" + s.pattern + ")";
            t.push(s),
              s.repeat && (p += "(?:" + c + p + ")*"),
              (i += p =
                s.optional
                  ? s.partial
                    ? c + "(" + p + ")?"
                    : "(?:" + c + "(" + p + "))?"
                  : c + "(" + p + ")");
          }
        }
        var m = u(n.delimiter || "/"),
          g = i.slice(-m.length) === m;
        return (
          a || (i = (g ? i.slice(0, -m.length) : i) + "(?:" + m + "(?=$))?"),
          (i += o ? "$" : a && g ? "" : "(?=" + m + "|$)"),
          d(new RegExp("^" + i, f(n)), t)
        );
      }
      function m(e, t, n) {
        return (
          r(t) || ((n = t || n), (t = [])),
          (n = n || {}),
          e instanceof RegExp
            ? (function (e, t) {
                var n = e.source.match(/\((?!\?)/g);
                if (n)
                  for (var r = 0; r < n.length; r++)
                    t.push({
                      name: r,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return d(e, t);
              })(e, t)
            : r(e)
            ? (function (e, t, n) {
                for (var r = [], a = 0; a < e.length; a++)
                  r.push(m(e[a], t, n).source);
                return d(new RegExp("(?:" + r.join("|") + ")", f(n)), t);
              })(e, t, n)
            : (function (e, t, n) {
                return p(o(e, n), t, n);
              })(e, t, n)
        );
      }
    },
    5489: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => p });
      var r = n(8168),
        a = n(6540),
        o = n(4625),
        i = n(440),
        l = n(4586),
        s = n(6654),
        u = n(8193);
      const c = a.createContext({ collectLink: () => {} });
      var d = n(6025);
      function f(e, t) {
        let {
          isNavLink: n,
          to: f,
          href: p,
          activeClassName: m,
          isActive: g,
          "data-noBrokenLinkCheck": h,
          autoAddBaseUrl: b = !0,
          ...v
        } = e;
        const {
            siteConfig: { trailingSlash: y, baseUrl: w },
          } = (0, l.A)(),
          { withBaseUrl: k } = (0, d.h)(),
          E = (0, a.useContext)(c),
          S = (0, a.useRef)(null);
        (0, a.useImperativeHandle)(t, () => S.current);
        const x = f || p;
        const T = (0, s.A)(x),
          A = x?.replace("pathname://", "");
        let C =
          void 0 !== A
            ? ((_ = A), b && ((e) => e.startsWith("/"))(_) ? k(_) : _)
            : void 0;
        var _;
        C &&
          T &&
          (C = (0, i.applyTrailingSlash)(C, { trailingSlash: y, baseUrl: w }));
        const L = (0, a.useRef)(!1),
          R = n ? o.k2 : o.N_,
          N = u.A.canUseIntersectionObserver,
          P = (0, a.useRef)(),
          O = () => {
            L.current ||
              null == C ||
              (window.docusaurus.preload(C), (L.current = !0));
          };
        (0, a.useEffect)(
          () => (
            !N && T && null != C && window.docusaurus.prefetch(C),
            () => {
              N && P.current && P.current.disconnect();
            }
          ),
          [P, C, N, T]
        );
        const D = C?.startsWith("#") ?? !1,
          I = !C || !T || D;
        return (
          I || h || E.collectLink(C),
          I
            ? a.createElement(
                "a",
                (0, r.A)(
                  { ref: S, href: C },
                  x && !T && { target: "_blank", rel: "noopener noreferrer" },
                  v
                )
              )
            : a.createElement(
                R,
                (0, r.A)(
                  {},
                  v,
                  {
                    onMouseEnter: O,
                    onTouchStart: O,
                    innerRef: (e) => {
                      (S.current = e),
                        N &&
                          e &&
                          T &&
                          ((P.current = new window.IntersectionObserver((t) => {
                            t.forEach((t) => {
                              e === t.target &&
                                (t.isIntersecting || t.intersectionRatio > 0) &&
                                (P.current.unobserve(e),
                                P.current.disconnect(),
                                null != C && window.docusaurus.prefetch(C));
                            });
                          })),
                          P.current.observe(e));
                    },
                    to: C,
                  },
                  n && { isActive: g, activeClassName: m }
                )
              )
        );
      }
      const p = a.forwardRef(f);
    },
    5556: (e, t, n) => {
      e.exports = n(2694)();
    },
    5597: (e, t, n) => {
      "use strict";
      n.d(t, { VQ: () => h, g1: () => v });
      var r = n(6540),
        a = n(4070),
        o = n(7065),
        i = n(6342),
        l = n(1754),
        s = n(9532),
        u = n(9466);
      const c = (e) => `docs-preferred-version-${e}`,
        d = {
          save: (e, t, n) => {
            (0, u.Wf)(c(e), { persistence: t }).set(n);
          },
          read: (e, t) => (0, u.Wf)(c(e), { persistence: t }).get(),
          clear: (e, t) => {
            (0, u.Wf)(c(e), { persistence: t }).del();
          },
        },
        f = (e) =>
          Object.fromEntries(e.map((e) => [e, { preferredVersionName: null }]));
      const p = r.createContext(null);
      function m() {
        const e = (0, a.Gy)(),
          t = (0, i.p)().docs.versionPersistence,
          n = (0, r.useMemo)(() => Object.keys(e), [e]),
          [o, l] = (0, r.useState)(() => f(n));
        (0, r.useEffect)(() => {
          l(
            (function (e) {
              let { pluginIds: t, versionPersistence: n, allDocsData: r } = e;
              function a(e) {
                const t = d.read(e, n);
                return r[e].versions.some((e) => e.name === t)
                  ? { preferredVersionName: t }
                  : (d.clear(e, n), { preferredVersionName: null });
              }
              return Object.fromEntries(t.map((e) => [e, a(e)]));
            })({ allDocsData: e, versionPersistence: t, pluginIds: n })
          );
        }, [e, t, n]);
        return [
          o,
          (0, r.useMemo)(
            () => ({
              savePreferredVersion: function (e, n) {
                d.save(e, t, n),
                  l((t) => ({ ...t, [e]: { preferredVersionName: n } }));
              },
            }),
            [t]
          ),
        ];
      }
      function g(e) {
        let { children: t } = e;
        const n = m();
        return r.createElement(p.Provider, { value: n }, t);
      }
      function h(e) {
        let { children: t } = e;
        return l.C5
          ? r.createElement(g, null, t)
          : r.createElement(r.Fragment, null, t);
      }
      function b() {
        const e = (0, r.useContext)(p);
        if (!e) throw new s.dV("DocsPreferredVersionContextProvider");
        return e;
      }
      function v(e) {
        void 0 === e && (e = o.W);
        const t = (0, a.ht)(e),
          [n, i] = b(),
          { preferredVersionName: l } = n[e];
        return {
          preferredVersion: t.versions.find((e) => e.name === l) ?? null,
          savePreferredVersionName: (0, r.useCallback)(
            (t) => {
              i.savePreferredVersion(e, t);
            },
            [i, e]
          ),
        };
      }
    },
    5600: (e, t, n) => {
      "use strict";
      n.d(t, { GX: () => s, YL: () => l, y_: () => i });
      var r = n(6540),
        a = n(9532);
      const o = r.createContext(null);
      function i(e) {
        let { children: t } = e;
        const n = (0, r.useState)({ component: null, props: null });
        return r.createElement(o.Provider, { value: n }, t);
      }
      function l() {
        const e = (0, r.useContext)(o);
        if (!e) throw new a.dV("NavbarSecondaryMenuContentProvider");
        return e[0];
      }
      function s(e) {
        let { component: t, props: n } = e;
        const i = (0, r.useContext)(o);
        if (!i) throw new a.dV("NavbarSecondaryMenuContentProvider");
        const [, l] = i,
          s = (0, a.Be)(n);
        return (
          (0, r.useEffect)(() => {
            l({ component: t, props: s });
          }, [l, t, s]),
          (0, r.useEffect)(
            () => () => l({ component: null, props: null }),
            [l]
          ),
          null
        );
      }
    },
    5947: function (e, t, n) {
      var r, a;
      (r = function () {
        var e,
          t,
          n = { version: "0.2.0" },
          r = (n.settings = {
            minimum: 0.08,
            easing: "ease",
            positionUsing: "",
            speed: 200,
            trickle: !0,
            trickleRate: 0.02,
            trickleSpeed: 800,
            showSpinner: !0,
            barSelector: '[role="bar"]',
            spinnerSelector: '[role="spinner"]',
            parent: "body",
            template:
              '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
          });
        function a(e, t, n) {
          return e < t ? t : e > n ? n : e;
        }
        function o(e) {
          return 100 * (-1 + e);
        }
        function i(e, t, n) {
          var a;
          return (
            ((a =
              "translate3d" === r.positionUsing
                ? { transform: "translate3d(" + o(e) + "%,0,0)" }
                : "translate" === r.positionUsing
                ? { transform: "translate(" + o(e) + "%,0)" }
                : { "margin-left": o(e) + "%" }).transition =
              "all " + t + "ms " + n),
            a
          );
        }
        (n.configure = function (e) {
          var t, n;
          for (t in e)
            void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (r[t] = n);
          return this;
        }),
          (n.status = null),
          (n.set = function (e) {
            var t = n.isStarted();
            (e = a(e, r.minimum, 1)), (n.status = 1 === e ? null : e);
            var o = n.render(!t),
              u = o.querySelector(r.barSelector),
              c = r.speed,
              d = r.easing;
            return (
              o.offsetWidth,
              l(function (t) {
                "" === r.positionUsing &&
                  (r.positionUsing = n.getPositioningCSS()),
                  s(u, i(e, c, d)),
                  1 === e
                    ? (s(o, { transition: "none", opacity: 1 }),
                      o.offsetWidth,
                      setTimeout(function () {
                        s(o, {
                          transition: "all " + c + "ms linear",
                          opacity: 0,
                        }),
                          setTimeout(function () {
                            n.remove(), t();
                          }, c);
                      }, c))
                    : setTimeout(t, c);
              }),
              this
            );
          }),
          (n.isStarted = function () {
            return "number" == typeof n.status;
          }),
          (n.start = function () {
            n.status || n.set(0);
            var e = function () {
              setTimeout(function () {
                n.status && (n.trickle(), e());
              }, r.trickleSpeed);
            };
            return r.trickle && e(), this;
          }),
          (n.done = function (e) {
            return e || n.status
              ? n.inc(0.3 + 0.5 * Math.random()).set(1)
              : this;
          }),
          (n.inc = function (e) {
            var t = n.status;
            return t
              ? ("number" != typeof e &&
                  (e = (1 - t) * a(Math.random() * t, 0.1, 0.95)),
                (t = a(t + e, 0, 0.994)),
                n.set(t))
              : n.start();
          }),
          (n.trickle = function () {
            return n.inc(Math.random() * r.trickleRate);
          }),
          (e = 0),
          (t = 0),
          (n.promise = function (r) {
            return r && "resolved" !== r.state()
              ? (0 === t && n.start(),
                e++,
                t++,
                r.always(function () {
                  0 == --t ? ((e = 0), n.done()) : n.set((e - t) / e);
                }),
                this)
              : this;
          }),
          (n.render = function (e) {
            if (n.isRendered()) return document.getElementById("nprogress");
            c(document.documentElement, "nprogress-busy");
            var t = document.createElement("div");
            (t.id = "nprogress"), (t.innerHTML = r.template);
            var a,
              i = t.querySelector(r.barSelector),
              l = e ? "-100" : o(n.status || 0),
              u = document.querySelector(r.parent);
            return (
              s(i, {
                transition: "all 0 linear",
                transform: "translate3d(" + l + "%,0,0)",
              }),
              r.showSpinner ||
                ((a = t.querySelector(r.spinnerSelector)) && p(a)),
              u != document.body && c(u, "nprogress-custom-parent"),
              u.appendChild(t),
              t
            );
          }),
          (n.remove = function () {
            d(document.documentElement, "nprogress-busy"),
              d(document.querySelector(r.parent), "nprogress-custom-parent");
            var e = document.getElementById("nprogress");
            e && p(e);
          }),
          (n.isRendered = function () {
            return !!document.getElementById("nprogress");
          }),
          (n.getPositioningCSS = function () {
            var e = document.body.style,
              t =
                "WebkitTransform" in e
                  ? "Webkit"
                  : "MozTransform" in e
                  ? "Moz"
                  : "msTransform" in e
                  ? "ms"
                  : "OTransform" in e
                  ? "O"
                  : "";
            return t + "Perspective" in e
              ? "translate3d"
              : t + "Transform" in e
              ? "translate"
              : "margin";
          });
        var l = (function () {
            var e = [];
            function t() {
              var n = e.shift();
              n && n(t);
            }
            return function (n) {
              e.push(n), 1 == e.length && t();
            };
          })(),
          s = (function () {
            var e = ["Webkit", "O", "Moz", "ms"],
              t = {};
            function n(e) {
              return e
                .replace(/^-ms-/, "ms-")
                .replace(/-([\da-z])/gi, function (e, t) {
                  return t.toUpperCase();
                });
            }
            function r(t) {
              var n = document.body.style;
              if (t in n) return t;
              for (
                var r, a = e.length, o = t.charAt(0).toUpperCase() + t.slice(1);
                a--;

              )
                if ((r = e[a] + o) in n) return r;
              return t;
            }
            function a(e) {
              return (e = n(e)), t[e] || (t[e] = r(e));
            }
            function o(e, t, n) {
              (t = a(t)), (e.style[t] = n);
            }
            return function (e, t) {
              var n,
                r,
                a = arguments;
              if (2 == a.length)
                for (n in t)
                  void 0 !== (r = t[n]) && t.hasOwnProperty(n) && o(e, n, r);
              else o(e, a[1], a[2]);
            };
          })();
        function u(e, t) {
          return ("string" == typeof e ? e : f(e)).indexOf(" " + t + " ") >= 0;
        }
        function c(e, t) {
          var n = f(e),
            r = n + t;
          u(n, t) || (e.className = r.substring(1));
        }
        function d(e, t) {
          var n,
            r = f(e);
          u(e, t) &&
            ((n = r.replace(" " + t + " ", " ")),
            (e.className = n.substring(1, n.length - 1)));
        }
        function f(e) {
          return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
        }
        function p(e) {
          e && e.parentNode && e.parentNode.removeChild(e);
        }
        return n;
      }),
        void 0 === (a = "function" == typeof r ? r.call(t, n, t, e) : r) ||
          (e.exports = a);
    },
    6025: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => l, h: () => i });
      var r = n(6540),
        a = n(4586),
        o = n(6654);
      function i() {
        const {
            siteConfig: { baseUrl: e, url: t },
          } = (0, a.A)(),
          n = (0, r.useCallback)(
            (n, r) =>
              (function (e, t, n, r) {
                let { forcePrependBaseUrl: a = !1, absolute: i = !1 } =
                  void 0 === r ? {} : r;
                if (!n || n.startsWith("#") || (0, o.z)(n)) return n;
                if (a) return t + n.replace(/^\//, "");
                if (n === t.replace(/\/$/, "")) return t;
                const l = n.startsWith(t) ? n : t + n.replace(/^\//, "");
                return i ? e + l : l;
              })(t, e, n, r),
            [t, e]
          );
        return { withBaseUrl: n };
      }
      function l(e, t) {
        void 0 === t && (t = {});
        const { withBaseUrl: n } = i();
        return n(e, t);
      }
    },
    6125: (e, t, n) => {
      "use strict";
      n.d(t, { o: () => a, x: () => o });
      var r = n(6540);
      const a = r.createContext(!1);
      function o(e) {
        let { children: t } = e;
        const [n, o] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            o(!0);
          }, []),
          r.createElement(a.Provider, { value: n }, t)
        );
      }
    },
    6134: (e, t, n) => {
      "use strict";
      var r = n(1258),
        a = n(4784);
      !(function (e) {
        const {
            themeConfig: { prism: t },
          } = a.default,
          { additionalLanguages: r } = t;
        (globalThis.Prism = e),
          r.forEach((e) => {
            n(8692)(`./prism-${e}`);
          }),
          delete globalThis.Prism;
      })(r.A);
    },
    6294: (e, t, n) => {
      "use strict";
      n.r(t), n.d(t, { default: () => o });
      var r = n(5947),
        a = n.n(r);
      a().configure({ showSpinner: !1 });
      const o = {
        onRouteUpdate(e) {
          let { location: t, previousLocation: n } = e;
          if (n && t.pathname !== n.pathname) {
            const e = window.setTimeout(() => {
              a().start();
            }, 200);
            return () => window.clearTimeout(e);
          }
        },
        onRouteDidUpdate() {
          a().done();
        },
      };
    },
    6342: (e, t, n) => {
      "use strict";
      n.d(t, { p: () => a });
      var r = n(4586);
      function a() {
        return (0, r.A)().siteConfig.themeConfig;
      }
    },
    6347: (e, t, n) => {
      "use strict";
      n.d(t, {
        B6: () => S,
        Ix: () => y,
        W6: () => P,
        XZ: () => v,
        dO: () => R,
        qh: () => x,
        zy: () => O,
      });
      var r = n(2892),
        a = n(6540),
        o = n(5556),
        i = n.n(o),
        l = n(1513),
        s = n(1561),
        u = n(8168),
        c = n(5302),
        d = n.n(c),
        f = (n(4363), n(8587)),
        p = (n(4146), 1073741823),
        m =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : {};
      var g =
          a.createContext ||
          function (e, t) {
            var n,
              o,
              l =
                "__create-react-context-" +
                (function () {
                  var e = "__global_unique_id__";
                  return (m[e] = (m[e] || 0) + 1);
                })() +
                "__",
              s = (function (e) {
                function n() {
                  for (
                    var t, n, r, a = arguments.length, o = new Array(a), i = 0;
                    i < a;
                    i++
                  )
                    o[i] = arguments[i];
                  return (
                    ((t = e.call.apply(e, [this].concat(o)) || this).emitter =
                      ((n = t.props.value),
                      (r = []),
                      {
                        on: function (e) {
                          r.push(e);
                        },
                        off: function (e) {
                          r = r.filter(function (t) {
                            return t !== e;
                          });
                        },
                        get: function () {
                          return n;
                        },
                        set: function (e, t) {
                          (n = e),
                            r.forEach(function (e) {
                              return e(n, t);
                            });
                        },
                      })),
                    t
                  );
                }
                (0, r.A)(n, e);
                var a = n.prototype;
                return (
                  (a.getChildContext = function () {
                    var e;
                    return ((e = {})[l] = this.emitter), e;
                  }),
                  (a.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                      var n,
                        r = this.props.value,
                        a = e.value;
                      (
                        (o = r) === (i = a)
                          ? 0 !== o || 1 / o == 1 / i
                          : o != o && i != i
                      )
                        ? (n = 0)
                        : ((n = "function" == typeof t ? t(r, a) : p),
                          0 !== (n |= 0) && this.emitter.set(e.value, n));
                    }
                    var o, i;
                  }),
                  (a.render = function () {
                    return this.props.children;
                  }),
                  n
                );
              })(a.Component);
            s.childContextTypes = (((n = {})[l] = i().object.isRequired), n);
            var u = (function (t) {
              function n() {
                for (
                  var e, n = arguments.length, r = new Array(n), a = 0;
                  a < n;
                  a++
                )
                  r[a] = arguments[a];
                return (
                  ((e =
                    t.call.apply(t, [this].concat(r)) || this).observedBits =
                    void 0),
                  (e.state = { value: e.getValue() }),
                  (e.onUpdate = function (t, n) {
                    (0 | e.observedBits) & n &&
                      e.setState({ value: e.getValue() });
                  }),
                  e
                );
              }
              (0, r.A)(n, t);
              var a = n.prototype;
              return (
                (a.componentWillReceiveProps = function (e) {
                  var t = e.observedBits;
                  this.observedBits = null == t ? p : t;
                }),
                (a.componentDidMount = function () {
                  this.context[l] && this.context[l].on(this.onUpdate);
                  var e = this.props.observedBits;
                  this.observedBits = null == e ? p : e;
                }),
                (a.componentWillUnmount = function () {
                  this.context[l] && this.context[l].off(this.onUpdate);
                }),
                (a.getValue = function () {
                  return this.context[l] ? this.context[l].get() : e;
                }),
                (a.render = function () {
                  return ((e = this.props.children),
                  Array.isArray(e) ? e[0] : e)(this.state.value);
                  var e;
                }),
                n
              );
            })(a.Component);
            return (
              (u.contextTypes = (((o = {})[l] = i().object), o)),
              { Provider: s, Consumer: u }
            );
          },
        h = function (e) {
          var t = g();
          return (t.displayName = e), t;
        },
        b = h("Router-History"),
        v = h("Router"),
        y = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = {
                location: t.history.location,
              }),
              (n._isMounted = !1),
              (n._pendingLocation = null),
              t.staticContext ||
                (n.unlisten = t.history.listen(function (e) {
                  n._pendingLocation = e;
                })),
              n
            );
          }
          (0, r.A)(t, e),
            (t.computeRootMatch = function (e) {
              return { path: "/", url: "/", params: {}, isExact: "/" === e };
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              var e = this;
              (this._isMounted = !0),
                this.unlisten && this.unlisten(),
                this.props.staticContext ||
                  (this.unlisten = this.props.history.listen(function (t) {
                    e._isMounted && e.setState({ location: t });
                  })),
                this._pendingLocation &&
                  this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
              this.unlisten &&
                (this.unlisten(),
                (this._isMounted = !1),
                (this._pendingLocation = null));
            }),
            (n.render = function () {
              return a.createElement(
                v.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: t.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                a.createElement(b.Provider, {
                  children: this.props.children || null,
                  value: this.props.history,
                })
              );
            }),
            t
          );
        })(a.Component);
      a.Component;
      a.Component;
      var w = {},
        k = 1e4,
        E = 0;
      function S(e, t) {
        void 0 === t && (t = {}),
          ("string" == typeof t || Array.isArray(t)) && (t = { path: t });
        var n = t,
          r = n.path,
          a = n.exact,
          o = void 0 !== a && a,
          i = n.strict,
          l = void 0 !== i && i,
          s = n.sensitive,
          u = void 0 !== s && s;
        return [].concat(r).reduce(function (t, n) {
          if (!n && "" !== n) return null;
          if (t) return t;
          var r = (function (e, t) {
              var n = "" + t.end + t.strict + t.sensitive,
                r = w[n] || (w[n] = {});
              if (r[e]) return r[e];
              var a = [],
                o = { regexp: d()(e, a, t), keys: a };
              return E < k && ((r[e] = o), E++), o;
            })(n, { end: o, strict: l, sensitive: u }),
            a = r.regexp,
            i = r.keys,
            s = a.exec(e);
          if (!s) return null;
          var c = s[0],
            f = s.slice(1),
            p = e === c;
          return o && !p
            ? null
            : {
                path: n,
                url: "/" === n && "" === c ? "/" : c,
                isExact: p,
                params: i.reduce(function (e, t, n) {
                  return (e[t.name] = f[n]), e;
                }, {}),
              };
        }, null);
      }
      var x = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, r.A)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return a.createElement(v.Consumer, null, function (t) {
              t || (0, s.A)(!1);
              var n = e.props.location || t.location,
                r = e.props.computedMatch
                  ? e.props.computedMatch
                  : e.props.path
                  ? S(n.pathname, e.props)
                  : t.match,
                o = (0, u.A)({}, t, { location: n, match: r }),
                i = e.props,
                l = i.children,
                c = i.component,
                d = i.render;
              return (
                Array.isArray(l) &&
                  (function (e) {
                    return 0 === a.Children.count(e);
                  })(l) &&
                  (l = null),
                a.createElement(
                  v.Provider,
                  { value: o },
                  o.match
                    ? l
                      ? "function" == typeof l
                        ? l(o)
                        : l
                      : c
                      ? a.createElement(c, o)
                      : d
                      ? d(o)
                      : null
                    : "function" == typeof l
                    ? l(o)
                    : null
                )
              );
            });
          }),
          t
        );
      })(a.Component);
      function T(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function A(e, t) {
        if (!e) return t;
        var n = T(e);
        return 0 !== t.pathname.indexOf(n)
          ? t
          : (0, u.A)({}, t, { pathname: t.pathname.substr(n.length) });
      }
      function C(e) {
        return "string" == typeof e ? e : (0, l.AO)(e);
      }
      function _(e) {
        return function () {
          (0, s.A)(!1);
        };
      }
      function L() {}
      a.Component;
      var R = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, r.A)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return a.createElement(v.Consumer, null, function (t) {
              t || (0, s.A)(!1);
              var n,
                r,
                o = e.props.location || t.location;
              return (
                a.Children.forEach(e.props.children, function (e) {
                  if (null == r && a.isValidElement(e)) {
                    n = e;
                    var i = e.props.path || e.props.from;
                    r = i
                      ? S(o.pathname, (0, u.A)({}, e.props, { path: i }))
                      : t.match;
                  }
                }),
                r ? a.cloneElement(n, { location: o, computedMatch: r }) : null
              );
            });
          }),
          t
        );
      })(a.Component);
      var N = a.useContext;
      function P() {
        return N(b);
      }
      function O() {
        return N(v).location;
      }
    },
    6540: (e, t, n) => {
      "use strict";
      e.exports = n(5287);
    },
    6588: (e, t, n) => {
      "use strict";
      n.d(t, { V: () => l, t: () => s });
      var r = n(6540),
        a = n(9532);
      const o = Symbol("EmptyContext"),
        i = r.createContext(o);
      function l(e) {
        let { children: t, name: n, items: a } = e;
        const o = (0, r.useMemo)(
          () => (n && a ? { name: n, items: a } : null),
          [n, a]
        );
        return r.createElement(i.Provider, { value: o }, t);
      }
      function s() {
        const e = (0, r.useContext)(i);
        if (e === o) throw new a.dV("DocsSidebarProvider");
        return e;
      }
    },
    6654: (e, t, n) => {
      "use strict";
      function r(e) {
        return /^(?:\w*:|\/\/)/.test(e);
      }
      function a(e) {
        return void 0 !== e && !r(e);
      }
      n.d(t, { A: () => a, z: () => r });
    },
    6921: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      const r = (e) => "object" == typeof e && !!e && Object.keys(e).length > 0;
      function a(e) {
        const t = {};
        return (
          (function e(n, a) {
            Object.entries(n).forEach((n) => {
              let [o, i] = n;
              const l = a ? `${a}.${o}` : o;
              r(i) ? e(i, l) : (t[l] = i);
            });
          })(e),
          t
        );
      }
    },
    6925: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    6969: (e) => {
      e.exports &&
        (e.exports = {
          core: {
            meta: { path: "components/prism-core.js", option: "mandatory" },
            core: "Core",
          },
          themes: {
            meta: {
              path: "themes/{id}.css",
              link: "index.html?theme={id}",
              exclusive: !0,
            },
            prism: { title: "Default", option: "default" },
            "prism-dark": "Dark",
            "prism-funky": "Funky",
            "prism-okaidia": { title: "Okaidia", owner: "ocodia" },
            "prism-twilight": { title: "Twilight", owner: "remybach" },
            "prism-coy": { title: "Coy", owner: "tshedor" },
            "prism-solarizedlight": {
              title: "Solarized Light",
              owner: "hectormatos2011 ",
            },
            "prism-tomorrow": { title: "Tomorrow Night", owner: "Rosey" },
          },
          languages: {
            meta: {
              path: "components/prism-{id}",
              noCSS: !0,
              examplesPath: "examples/prism-{id}",
              addCheckAll: !0,
            },
            markup: {
              title: "Markup",
              alias: ["html", "xml", "svg", "mathml", "ssml", "atom", "rss"],
              aliasTitles: {
                html: "HTML",
                xml: "XML",
                svg: "SVG",
                mathml: "MathML",
                ssml: "SSML",
                atom: "Atom",
                rss: "RSS",
              },
              option: "default",
            },
            css: { title: "CSS", option: "default", modify: "markup" },
            clike: { title: "C-like", option: "default" },
            javascript: {
              title: "JavaScript",
              require: "clike",
              modify: "markup",
              optional: "regex",
              alias: "js",
              option: "default",
            },
            abap: { title: "ABAP", owner: "dellagustin" },
            abnf: { title: "ABNF", owner: "RunDevelopment" },
            actionscript: {
              title: "ActionScript",
              require: "javascript",
              modify: "markup",
              owner: "Golmote",
            },
            ada: { title: "Ada", owner: "Lucretia" },
            agda: { title: "Agda", owner: "xy-ren" },
            al: { title: "AL", owner: "RunDevelopment" },
            antlr4: { title: "ANTLR4", alias: "g4", owner: "RunDevelopment" },
            apacheconf: { title: "Apache Configuration", owner: "GuiTeK" },
            apex: {
              title: "Apex",
              require: ["clike", "sql"],
              owner: "RunDevelopment",
            },
            apl: { title: "APL", owner: "ngn" },
            applescript: { title: "AppleScript", owner: "Golmote" },
            aql: { title: "AQL", owner: "RunDevelopment" },
            arduino: {
              title: "Arduino",
              require: "cpp",
              alias: "ino",
              owner: "dkern",
            },
            arff: { title: "ARFF", owner: "Golmote" },
            armasm: {
              title: "ARM Assembly",
              alias: "arm-asm",
              owner: "RunDevelopment",
            },
            arturo: {
              title: "Arturo",
              alias: "art",
              optional: [
                "bash",
                "css",
                "javascript",
                "markup",
                "markdown",
                "sql",
              ],
              owner: "drkameleon",
            },
            asciidoc: { alias: "adoc", title: "AsciiDoc", owner: "Golmote" },
            aspnet: {
              title: "ASP.NET (C#)",
              require: ["markup", "csharp"],
              owner: "nauzilus",
            },
            asm6502: { title: "6502 Assembly", owner: "kzurawel" },
            asmatmel: { title: "Atmel AVR Assembly", owner: "cerkit" },
            autohotkey: { title: "AutoHotkey", owner: "aviaryan" },
            autoit: { title: "AutoIt", owner: "Golmote" },
            avisynth: { title: "AviSynth", alias: "avs", owner: "Zinfidel" },
            "avro-idl": {
              title: "Avro IDL",
              alias: "avdl",
              owner: "RunDevelopment",
            },
            awk: {
              title: "AWK",
              alias: "gawk",
              aliasTitles: { gawk: "GAWK" },
              owner: "RunDevelopment",
            },
            bash: {
              title: "Bash",
              alias: ["sh", "shell"],
              aliasTitles: { sh: "Shell", shell: "Shell" },
              owner: "zeitgeist87",
            },
            basic: { title: "BASIC", owner: "Golmote" },
            batch: { title: "Batch", owner: "Golmote" },
            bbcode: {
              title: "BBcode",
              alias: "shortcode",
              aliasTitles: { shortcode: "Shortcode" },
              owner: "RunDevelopment",
            },
            bbj: { title: "BBj", owner: "hyyan" },
            bicep: { title: "Bicep", owner: "johnnyreilly" },
            birb: { title: "Birb", require: "clike", owner: "Calamity210" },
            bison: { title: "Bison", require: "c", owner: "Golmote" },
            bnf: {
              title: "BNF",
              alias: "rbnf",
              aliasTitles: { rbnf: "RBNF" },
              owner: "RunDevelopment",
            },
            bqn: { title: "BQN", owner: "yewscion" },
            brainfuck: { title: "Brainfuck", owner: "Golmote" },
            brightscript: { title: "BrightScript", owner: "RunDevelopment" },
            bro: { title: "Bro", owner: "wayward710" },
            bsl: {
              title: "BSL (1C:Enterprise)",
              alias: "oscript",
              aliasTitles: { oscript: "OneScript" },
              owner: "Diversus23",
            },
            c: { title: "C", require: "clike", owner: "zeitgeist87" },
            csharp: {
              title: "C#",
              require: "clike",
              alias: ["cs", "dotnet"],
              owner: "mvalipour",
            },
            cpp: { title: "C++", require: "c", owner: "zeitgeist87" },
            cfscript: {
              title: "CFScript",
              require: "clike",
              alias: "cfc",
              owner: "mjclemente",
            },
            chaiscript: {
              title: "ChaiScript",
              require: ["clike", "cpp"],
              owner: "RunDevelopment",
            },
            cil: { title: "CIL", owner: "sbrl" },
            cilkc: {
              title: "Cilk/C",
              require: "c",
              alias: "cilk-c",
              owner: "OpenCilk",
            },
            cilkcpp: {
              title: "Cilk/C++",
              require: "cpp",
              alias: ["cilk-cpp", "cilk"],
              owner: "OpenCilk",
            },
            clojure: { title: "Clojure", owner: "troglotit" },
            cmake: { title: "CMake", owner: "mjrogozinski" },
            cobol: { title: "COBOL", owner: "RunDevelopment" },
            coffeescript: {
              title: "CoffeeScript",
              require: "javascript",
              alias: "coffee",
              owner: "R-osey",
            },
            concurnas: {
              title: "Concurnas",
              alias: "conc",
              owner: "jasontatton",
            },
            csp: { title: "Content-Security-Policy", owner: "ScottHelme" },
            cooklang: { title: "Cooklang", owner: "ahue" },
            coq: { title: "Coq", owner: "RunDevelopment" },
            crystal: {
              title: "Crystal",
              require: "ruby",
              owner: "MakeNowJust",
            },
            "css-extras": {
              title: "CSS Extras",
              require: "css",
              modify: "css",
              owner: "milesj",
            },
            csv: { title: "CSV", owner: "RunDevelopment" },
            cue: { title: "CUE", owner: "RunDevelopment" },
            cypher: { title: "Cypher", owner: "RunDevelopment" },
            d: { title: "D", require: "clike", owner: "Golmote" },
            dart: { title: "Dart", require: "clike", owner: "Golmote" },
            dataweave: { title: "DataWeave", owner: "machaval" },
            dax: { title: "DAX", owner: "peterbud" },
            dhall: { title: "Dhall", owner: "RunDevelopment" },
            diff: { title: "Diff", owner: "uranusjr" },
            django: {
              title: "Django/Jinja2",
              require: "markup-templating",
              alias: "jinja2",
              owner: "romanvm",
            },
            "dns-zone-file": {
              title: "DNS zone file",
              owner: "RunDevelopment",
              alias: "dns-zone",
            },
            docker: {
              title: "Docker",
              alias: "dockerfile",
              owner: "JustinBeckwith",
            },
            dot: {
              title: "DOT (Graphviz)",
              alias: "gv",
              optional: "markup",
              owner: "RunDevelopment",
            },
            ebnf: { title: "EBNF", owner: "RunDevelopment" },
            editorconfig: { title: "EditorConfig", owner: "osipxd" },
            eiffel: { title: "Eiffel", owner: "Conaclos" },
            ejs: {
              title: "EJS",
              require: ["javascript", "markup-templating"],
              owner: "RunDevelopment",
              alias: "eta",
              aliasTitles: { eta: "Eta" },
            },
            elixir: { title: "Elixir", owner: "Golmote" },
            elm: { title: "Elm", owner: "zwilias" },
            etlua: {
              title: "Embedded Lua templating",
              require: ["lua", "markup-templating"],
              owner: "RunDevelopment",
            },
            erb: {
              title: "ERB",
              require: ["ruby", "markup-templating"],
              owner: "Golmote",
            },
            erlang: { title: "Erlang", owner: "Golmote" },
            "excel-formula": {
              title: "Excel Formula",
              alias: ["xlsx", "xls"],
              owner: "RunDevelopment",
            },
            fsharp: { title: "F#", require: "clike", owner: "simonreynolds7" },
            factor: { title: "Factor", owner: "catb0t" },
            false: { title: "False", owner: "edukisto" },
            "firestore-security-rules": {
              title: "Firestore security rules",
              require: "clike",
              owner: "RunDevelopment",
            },
            flow: { title: "Flow", require: "javascript", owner: "Golmote" },
            fortran: { title: "Fortran", owner: "Golmote" },
            ftl: {
              title: "FreeMarker Template Language",
              require: "markup-templating",
              owner: "RunDevelopment",
            },
            gml: {
              title: "GameMaker Language",
              alias: "gamemakerlanguage",
              require: "clike",
              owner: "LiarOnce",
            },
            gap: { title: "GAP (CAS)", owner: "RunDevelopment" },
            gcode: { title: "G-code", owner: "RunDevelopment" },
            gdscript: { title: "GDScript", owner: "RunDevelopment" },
            gedcom: { title: "GEDCOM", owner: "Golmote" },
            gettext: { title: "gettext", alias: "po", owner: "RunDevelopment" },
            gherkin: { title: "Gherkin", owner: "hason" },
            git: { title: "Git", owner: "lgiraudel" },
            glsl: { title: "GLSL", require: "c", owner: "Golmote" },
            gn: { title: "GN", alias: "gni", owner: "RunDevelopment" },
            "linker-script": {
              title: "GNU Linker Script",
              alias: "ld",
              owner: "RunDevelopment",
            },
            go: { title: "Go", require: "clike", owner: "arnehormann" },
            "go-module": {
              title: "Go module",
              alias: "go-mod",
              owner: "RunDevelopment",
            },
            gradle: {
              title: "Gradle",
              require: "clike",
              owner: "zeabdelkhalek-badido18",
            },
            graphql: {
              title: "GraphQL",
              optional: "markdown",
              owner: "Golmote",
            },
            groovy: { title: "Groovy", require: "clike", owner: "robfletcher" },
            haml: {
              title: "Haml",
              require: "ruby",
              optional: [
                "css",
                "css-extras",
                "coffeescript",
                "erb",
                "javascript",
                "less",
                "markdown",
                "scss",
                "textile",
              ],
              owner: "Golmote",
            },
            handlebars: {
              title: "Handlebars",
              require: "markup-templating",
              alias: ["hbs", "mustache"],
              aliasTitles: { mustache: "Mustache" },
              owner: "Golmote",
            },
            haskell: { title: "Haskell", alias: "hs", owner: "bholst" },
            haxe: {
              title: "Haxe",
              require: "clike",
              optional: "regex",
              owner: "Golmote",
            },
            hcl: { title: "HCL", owner: "outsideris" },
            hlsl: { title: "HLSL", require: "c", owner: "RunDevelopment" },
            hoon: { title: "Hoon", owner: "matildepark" },
            http: {
              title: "HTTP",
              optional: [
                "csp",
                "css",
                "hpkp",
                "hsts",
                "javascript",
                "json",
                "markup",
                "uri",
              ],
              owner: "danielgtaylor",
            },
            hpkp: { title: "HTTP Public-Key-Pins", owner: "ScottHelme" },
            hsts: {
              title: "HTTP Strict-Transport-Security",
              owner: "ScottHelme",
            },
            ichigojam: { title: "IchigoJam", owner: "BlueCocoa" },
            icon: { title: "Icon", owner: "Golmote" },
            "icu-message-format": {
              title: "ICU Message Format",
              owner: "RunDevelopment",
            },
            idris: {
              title: "Idris",
              alias: "idr",
              owner: "KeenS",
              require: "haskell",
            },
            ignore: {
              title: ".ignore",
              owner: "osipxd",
              alias: ["gitignore", "hgignore", "npmignore"],
              aliasTitles: {
                gitignore: ".gitignore",
                hgignore: ".hgignore",
                npmignore: ".npmignore",
              },
            },
            inform7: { title: "Inform 7", owner: "Golmote" },
            ini: { title: "Ini", owner: "aviaryan" },
            io: { title: "Io", owner: "AlesTsurko" },
            j: { title: "J", owner: "Golmote" },
            java: { title: "Java", require: "clike", owner: "sherblot" },
            javadoc: {
              title: "JavaDoc",
              require: ["markup", "java", "javadoclike"],
              modify: "java",
              optional: "scala",
              owner: "RunDevelopment",
            },
            javadoclike: {
              title: "JavaDoc-like",
              modify: ["java", "javascript", "php"],
              owner: "RunDevelopment",
            },
            javastacktrace: {
              title: "Java stack trace",
              owner: "RunDevelopment",
            },
            jexl: { title: "Jexl", owner: "czosel" },
            jolie: { title: "Jolie", require: "clike", owner: "thesave" },
            jq: { title: "JQ", owner: "RunDevelopment" },
            jsdoc: {
              title: "JSDoc",
              require: ["javascript", "javadoclike", "typescript"],
              modify: "javascript",
              optional: ["actionscript", "coffeescript"],
              owner: "RunDevelopment",
            },
            "js-extras": {
              title: "JS Extras",
              require: "javascript",
              modify: "javascript",
              optional: [
                "actionscript",
                "coffeescript",
                "flow",
                "n4js",
                "typescript",
              ],
              owner: "RunDevelopment",
            },
            json: {
              title: "JSON",
              alias: "webmanifest",
              aliasTitles: { webmanifest: "Web App Manifest" },
              owner: "CupOfTea696",
            },
            json5: { title: "JSON5", require: "json", owner: "RunDevelopment" },
            jsonp: { title: "JSONP", require: "json", owner: "RunDevelopment" },
            jsstacktrace: { title: "JS stack trace", owner: "sbrl" },
            "js-templates": {
              title: "JS Templates",
              require: "javascript",
              modify: "javascript",
              optional: [
                "css",
                "css-extras",
                "graphql",
                "markdown",
                "markup",
                "sql",
              ],
              owner: "RunDevelopment",
            },
            julia: { title: "Julia", owner: "cdagnino" },
            keepalived: { title: "Keepalived Configure", owner: "dev-itsheng" },
            keyman: { title: "Keyman", owner: "mcdurdin" },
            kotlin: {
              title: "Kotlin",
              alias: ["kt", "kts"],
              aliasTitles: { kts: "Kotlin Script" },
              require: "clike",
              owner: "Golmote",
            },
            kumir: {
              title: "KuMir (\u041a\u0443\u041c\u0438\u0440)",
              alias: "kum",
              owner: "edukisto",
            },
            kusto: { title: "Kusto", owner: "RunDevelopment" },
            latex: {
              title: "LaTeX",
              alias: ["tex", "context"],
              aliasTitles: { tex: "TeX", context: "ConTeXt" },
              owner: "japborst",
            },
            latte: {
              title: "Latte",
              require: ["clike", "markup-templating", "php"],
              owner: "nette",
            },
            less: {
              title: "Less",
              require: "css",
              optional: "css-extras",
              owner: "Golmote",
            },
            lilypond: {
              title: "LilyPond",
              require: "scheme",
              alias: "ly",
              owner: "RunDevelopment",
            },
            liquid: {
              title: "Liquid",
              require: "markup-templating",
              owner: "cinhtau",
            },
            lisp: {
              title: "Lisp",
              alias: ["emacs", "elisp", "emacs-lisp"],
              owner: "JuanCaicedo",
            },
            livescript: { title: "LiveScript", owner: "Golmote" },
            llvm: { title: "LLVM IR", owner: "porglezomp" },
            log: {
              title: "Log file",
              optional: "javastacktrace",
              owner: "RunDevelopment",
            },
            lolcode: { title: "LOLCODE", owner: "Golmote" },
            lua: { title: "Lua", owner: "Golmote" },
            magma: { title: "Magma (CAS)", owner: "RunDevelopment" },
            makefile: { title: "Makefile", owner: "Golmote" },
            markdown: {
              title: "Markdown",
              require: "markup",
              optional: "yaml",
              alias: "md",
              owner: "Golmote",
            },
            "markup-templating": {
              title: "Markup templating",
              require: "markup",
              owner: "Golmote",
            },
            mata: { title: "Mata", owner: "RunDevelopment" },
            matlab: { title: "MATLAB", owner: "Golmote" },
            maxscript: { title: "MAXScript", owner: "RunDevelopment" },
            mel: { title: "MEL", owner: "Golmote" },
            mermaid: { title: "Mermaid", owner: "RunDevelopment" },
            metafont: { title: "METAFONT", owner: "LaeriExNihilo" },
            mizar: { title: "Mizar", owner: "Golmote" },
            mongodb: {
              title: "MongoDB",
              owner: "airs0urce",
              require: "javascript",
            },
            monkey: { title: "Monkey", owner: "Golmote" },
            moonscript: {
              title: "MoonScript",
              alias: "moon",
              owner: "RunDevelopment",
            },
            n1ql: { title: "N1QL", owner: "TMWilds" },
            n4js: {
              title: "N4JS",
              require: "javascript",
              optional: "jsdoc",
              alias: "n4jsd",
              owner: "bsmith-n4",
            },
            "nand2tetris-hdl": {
              title: "Nand To Tetris HDL",
              owner: "stephanmax",
            },
            naniscript: {
              title: "Naninovel Script",
              owner: "Elringus",
              alias: "nani",
            },
            nasm: { title: "NASM", owner: "rbmj" },
            neon: { title: "NEON", owner: "nette" },
            nevod: { title: "Nevod", owner: "nezaboodka" },
            nginx: { title: "nginx", owner: "volado" },
            nim: { title: "Nim", owner: "Golmote" },
            nix: { title: "Nix", owner: "Golmote" },
            nsis: { title: "NSIS", owner: "idleberg" },
            objectivec: {
              title: "Objective-C",
              require: "c",
              alias: "objc",
              owner: "uranusjr",
            },
            ocaml: { title: "OCaml", owner: "Golmote" },
            odin: { title: "Odin", owner: "edukisto" },
            opencl: {
              title: "OpenCL",
              require: "c",
              modify: ["c", "cpp"],
              owner: "Milania1",
            },
            openqasm: {
              title: "OpenQasm",
              alias: "qasm",
              owner: "RunDevelopment",
            },
            oz: { title: "Oz", owner: "Golmote" },
            parigp: { title: "PARI/GP", owner: "Golmote" },
            parser: { title: "Parser", require: "markup", owner: "Golmote" },
            pascal: {
              title: "Pascal",
              alias: "objectpascal",
              aliasTitles: { objectpascal: "Object Pascal" },
              owner: "Golmote",
            },
            pascaligo: { title: "Pascaligo", owner: "DefinitelyNotAGoat" },
            psl: { title: "PATROL Scripting Language", owner: "bertysentry" },
            pcaxis: { title: "PC-Axis", alias: "px", owner: "RunDevelopment" },
            peoplecode: {
              title: "PeopleCode",
              alias: "pcode",
              owner: "RunDevelopment",
            },
            perl: { title: "Perl", owner: "Golmote" },
            php: {
              title: "PHP",
              require: "markup-templating",
              owner: "milesj",
            },
            phpdoc: {
              title: "PHPDoc",
              require: ["php", "javadoclike"],
              modify: "php",
              owner: "RunDevelopment",
            },
            "php-extras": {
              title: "PHP Extras",
              require: "php",
              modify: "php",
              owner: "milesj",
            },
            "plant-uml": {
              title: "PlantUML",
              alias: "plantuml",
              owner: "RunDevelopment",
            },
            plsql: { title: "PL/SQL", require: "sql", owner: "Golmote" },
            powerquery: {
              title: "PowerQuery",
              alias: ["pq", "mscript"],
              owner: "peterbud",
            },
            powershell: { title: "PowerShell", owner: "nauzilus" },
            processing: {
              title: "Processing",
              require: "clike",
              owner: "Golmote",
            },
            prolog: { title: "Prolog", owner: "Golmote" },
            promql: { title: "PromQL", owner: "arendjr" },
            properties: { title: ".properties", owner: "Golmote" },
            protobuf: {
              title: "Protocol Buffers",
              require: "clike",
              owner: "just-boris",
            },
            pug: {
              title: "Pug",
              require: ["markup", "javascript"],
              optional: [
                "coffeescript",
                "ejs",
                "handlebars",
                "less",
                "livescript",
                "markdown",
                "scss",
                "stylus",
                "twig",
              ],
              owner: "Golmote",
            },
            puppet: { title: "Puppet", owner: "Golmote" },
            pure: {
              title: "Pure",
              optional: ["c", "cpp", "fortran"],
              owner: "Golmote",
            },
            purebasic: {
              title: "PureBasic",
              require: "clike",
              alias: "pbfasm",
              owner: "HeX0R101",
            },
            purescript: {
              title: "PureScript",
              require: "haskell",
              alias: "purs",
              owner: "sriharshachilakapati",
            },
            python: { title: "Python", alias: "py", owner: "multipetros" },
            qsharp: {
              title: "Q#",
              require: "clike",
              alias: "qs",
              owner: "fedonman",
            },
            q: { title: "Q (kdb+ database)", owner: "Golmote" },
            qml: {
              title: "QML",
              require: "javascript",
              owner: "RunDevelopment",
            },
            qore: { title: "Qore", require: "clike", owner: "temnroegg" },
            r: { title: "R", owner: "Golmote" },
            racket: {
              title: "Racket",
              require: "scheme",
              alias: "rkt",
              owner: "RunDevelopment",
            },
            cshtml: {
              title: "Razor C#",
              alias: "razor",
              require: ["markup", "csharp"],
              optional: ["css", "css-extras", "javascript", "js-extras"],
              owner: "RunDevelopment",
            },
            jsx: {
              title: "React JSX",
              require: ["markup", "javascript"],
              optional: ["jsdoc", "js-extras", "js-templates"],
              owner: "vkbansal",
            },
            tsx: { title: "React TSX", require: ["jsx", "typescript"] },
            reason: { title: "Reason", require: "clike", owner: "Golmote" },
            regex: { title: "Regex", owner: "RunDevelopment" },
            rego: { title: "Rego", owner: "JordanSh" },
            renpy: { title: "Ren'py", alias: "rpy", owner: "HyuchiaDiego" },
            rescript: { title: "ReScript", alias: "res", owner: "vmarcosp" },
            rest: { title: "reST (reStructuredText)", owner: "Golmote" },
            rip: { title: "Rip", owner: "ravinggenius" },
            roboconf: { title: "Roboconf", owner: "Golmote" },
            robotframework: {
              title: "Robot Framework",
              alias: "robot",
              owner: "RunDevelopment",
            },
            ruby: {
              title: "Ruby",
              require: "clike",
              alias: "rb",
              owner: "samflores",
            },
            rust: { title: "Rust", owner: "Golmote" },
            sas: {
              title: "SAS",
              optional: ["groovy", "lua", "sql"],
              owner: "Golmote",
            },
            sass: {
              title: "Sass (Sass)",
              require: "css",
              optional: "css-extras",
              owner: "Golmote",
            },
            scss: {
              title: "Sass (SCSS)",
              require: "css",
              optional: "css-extras",
              owner: "MoOx",
            },
            scala: { title: "Scala", require: "java", owner: "jozic" },
            scheme: { title: "Scheme", owner: "bacchus123" },
            "shell-session": {
              title: "Shell session",
              require: "bash",
              alias: ["sh-session", "shellsession"],
              owner: "RunDevelopment",
            },
            smali: { title: "Smali", owner: "RunDevelopment" },
            smalltalk: { title: "Smalltalk", owner: "Golmote" },
            smarty: {
              title: "Smarty",
              require: "markup-templating",
              optional: "php",
              owner: "Golmote",
            },
            sml: {
              title: "SML",
              alias: "smlnj",
              aliasTitles: { smlnj: "SML/NJ" },
              owner: "RunDevelopment",
            },
            solidity: {
              title: "Solidity (Ethereum)",
              alias: "sol",
              require: "clike",
              owner: "glachaud",
            },
            "solution-file": {
              title: "Solution file",
              alias: "sln",
              owner: "RunDevelopment",
            },
            soy: {
              title: "Soy (Closure Template)",
              require: "markup-templating",
              owner: "Golmote",
            },
            sparql: {
              title: "SPARQL",
              require: "turtle",
              owner: "Triply-Dev",
              alias: "rq",
            },
            "splunk-spl": { title: "Splunk SPL", owner: "RunDevelopment" },
            sqf: {
              title: "SQF: Status Quo Function (Arma 3)",
              require: "clike",
              owner: "RunDevelopment",
            },
            sql: { title: "SQL", owner: "multipetros" },
            squirrel: {
              title: "Squirrel",
              require: "clike",
              owner: "RunDevelopment",
            },
            stan: { title: "Stan", owner: "RunDevelopment" },
            stata: {
              title: "Stata Ado",
              require: ["mata", "java", "python"],
              owner: "RunDevelopment",
            },
            iecst: {
              title: "Structured Text (IEC 61131-3)",
              owner: "serhioromano",
            },
            stylus: { title: "Stylus", owner: "vkbansal" },
            supercollider: {
              title: "SuperCollider",
              alias: "sclang",
              owner: "RunDevelopment",
            },
            swift: { title: "Swift", owner: "chrischares" },
            systemd: {
              title: "Systemd configuration file",
              owner: "RunDevelopment",
            },
            "t4-templating": {
              title: "T4 templating",
              owner: "RunDevelopment",
            },
            "t4-cs": {
              title: "T4 Text Templates (C#)",
              require: ["t4-templating", "csharp"],
              alias: "t4",
              owner: "RunDevelopment",
            },
            "t4-vb": {
              title: "T4 Text Templates (VB)",
              require: ["t4-templating", "vbnet"],
              owner: "RunDevelopment",
            },
            tap: { title: "TAP", owner: "isaacs", require: "yaml" },
            tcl: { title: "Tcl", owner: "PeterChaplin" },
            tt2: {
              title: "Template Toolkit 2",
              require: ["clike", "markup-templating"],
              owner: "gflohr",
            },
            textile: {
              title: "Textile",
              require: "markup",
              optional: "css",
              owner: "Golmote",
            },
            toml: { title: "TOML", owner: "RunDevelopment" },
            tremor: {
              title: "Tremor",
              alias: ["trickle", "troy"],
              owner: "darach",
              aliasTitles: { trickle: "trickle", troy: "troy" },
            },
            turtle: {
              title: "Turtle",
              alias: "trig",
              aliasTitles: { trig: "TriG" },
              owner: "jakubklimek",
            },
            twig: {
              title: "Twig",
              require: "markup-templating",
              owner: "brandonkelly",
            },
            typescript: {
              title: "TypeScript",
              require: "javascript",
              optional: "js-templates",
              alias: "ts",
              owner: "vkbansal",
            },
            typoscript: {
              title: "TypoScript",
              alias: "tsconfig",
              aliasTitles: { tsconfig: "TSConfig" },
              owner: "dkern",
            },
            unrealscript: {
              title: "UnrealScript",
              alias: ["uscript", "uc"],
              owner: "RunDevelopment",
            },
            uorazor: { title: "UO Razor Script", owner: "jaseowns" },
            uri: {
              title: "URI",
              alias: "url",
              aliasTitles: { url: "URL" },
              owner: "RunDevelopment",
            },
            v: { title: "V", require: "clike", owner: "taggon" },
            vala: {
              title: "Vala",
              require: "clike",
              optional: "regex",
              owner: "TemplarVolk",
            },
            vbnet: { title: "VB.Net", require: "basic", owner: "Bigsby" },
            velocity: {
              title: "Velocity",
              require: "markup",
              owner: "Golmote",
            },
            verilog: { title: "Verilog", owner: "a-rey" },
            vhdl: { title: "VHDL", owner: "a-rey" },
            vim: { title: "vim", owner: "westonganger" },
            "visual-basic": {
              title: "Visual Basic",
              alias: ["vb", "vba"],
              aliasTitles: { vba: "VBA" },
              owner: "Golmote",
            },
            warpscript: { title: "WarpScript", owner: "RunDevelopment" },
            wasm: { title: "WebAssembly", owner: "Golmote" },
            "web-idl": {
              title: "Web IDL",
              alias: "webidl",
              owner: "RunDevelopment",
            },
            wgsl: { title: "WGSL", owner: "Dr4gonthree" },
            wiki: { title: "Wiki markup", require: "markup", owner: "Golmote" },
            wolfram: {
              title: "Wolfram language",
              alias: ["mathematica", "nb", "wl"],
              aliasTitles: {
                mathematica: "Mathematica",
                nb: "Mathematica Notebook",
              },
              owner: "msollami",
            },
            wren: { title: "Wren", owner: "clsource" },
            xeora: {
              title: "Xeora",
              require: "markup",
              alias: "xeoracube",
              aliasTitles: { xeoracube: "XeoraCube" },
              owner: "freakmaxi",
            },
            "xml-doc": {
              title: "XML doc (.net)",
              require: "markup",
              modify: ["csharp", "fsharp", "vbnet"],
              owner: "RunDevelopment",
            },
            xojo: { title: "Xojo (REALbasic)", owner: "Golmote" },
            xquery: { title: "XQuery", require: "markup", owner: "Golmote" },
            yaml: { title: "YAML", alias: "yml", owner: "hason" },
            yang: { title: "YANG", owner: "RunDevelopment" },
            zig: { title: "Zig", owner: "RunDevelopment" },
          },
          plugins: {
            meta: { path: "plugins/{id}/prism-{id}", link: "plugins/{id}/" },
            "line-highlight": {
              title: "Line Highlight",
              description: "Highlights specific lines and/or line ranges.",
            },
            "line-numbers": {
              title: "Line Numbers",
              description: "Line number at the beginning of code lines.",
              owner: "kuba-kubula",
            },
            "show-invisibles": {
              title: "Show Invisibles",
              description:
                "Show hidden characters such as tabs and line breaks.",
              optional: ["autolinker", "data-uri-highlight"],
            },
            autolinker: {
              title: "Autolinker",
              description:
                "Converts URLs and emails in code to clickable links. Parses Markdown links in comments.",
            },
            wpd: {
              title: "WebPlatform Docs",
              description:
                'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.',
            },
            "custom-class": {
              title: "Custom Class",
              description:
                "This plugin allows you to prefix Prism's default classes (<code>.comment</code> can become <code>.namespace--comment</code>) or replace them with your defined ones (like <code>.editor__comment</code>). You can even add new classes.",
              owner: "dvkndn",
              noCSS: !0,
            },
            "file-highlight": {
              title: "File Highlight",
              description:
                "Fetch external files and highlight them with Prism. Used on the Prism website itself.",
              noCSS: !0,
            },
            "show-language": {
              title: "Show Language",
              description:
                "Display the highlighted language in code blocks (inline code does not show the label).",
              owner: "nauzilus",
              noCSS: !0,
              require: "toolbar",
            },
            "jsonp-highlight": {
              title: "JSONP Highlight",
              description:
                "Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).",
              noCSS: !0,
              owner: "nauzilus",
            },
            "highlight-keywords": {
              title: "Highlight Keywords",
              description:
                "Adds special CSS classes for each keyword for fine-grained highlighting.",
              owner: "vkbansal",
              noCSS: !0,
            },
            "remove-initial-line-feed": {
              title: "Remove initial line feed",
              description: "Removes the initial line feed in code blocks.",
              owner: "Golmote",
              noCSS: !0,
            },
            "inline-color": {
              title: "Inline color",
              description:
                "Adds a small inline preview for colors in style sheets.",
              require: "css-extras",
              owner: "RunDevelopment",
            },
            previewers: {
              title: "Previewers",
              description:
                "Previewers for angles, colors, gradients, easing and time.",
              require: "css-extras",
              owner: "Golmote",
            },
            autoloader: {
              title: "Autoloader",
              description:
                "Automatically loads the needed languages to highlight the code blocks.",
              owner: "Golmote",
              noCSS: !0,
            },
            "keep-markup": {
              title: "Keep Markup",
              description:
                "Prevents custom markup from being dropped out during highlighting.",
              owner: "Golmote",
              optional: "normalize-whitespace",
              noCSS: !0,
            },
            "command-line": {
              title: "Command Line",
              description:
                "Display a command line with a prompt and, optionally, the output/response from the commands.",
              owner: "chriswells0",
            },
            "unescaped-markup": {
              title: "Unescaped Markup",
              description: "Write markup without having to escape anything.",
            },
            "normalize-whitespace": {
              title: "Normalize Whitespace",
              description:
                "Supports multiple operations to normalize whitespace in code blocks.",
              owner: "zeitgeist87",
              optional: "unescaped-markup",
              noCSS: !0,
            },
            "data-uri-highlight": {
              title: "Data-URI Highlight",
              description: "Highlights data-URI contents.",
              owner: "Golmote",
              noCSS: !0,
            },
            toolbar: {
              title: "Toolbar",
              description:
                "Attach a toolbar for plugins to easily register buttons on the top of a code block.",
              owner: "mAAdhaTTah",
            },
            "copy-to-clipboard": {
              title: "Copy to Clipboard Button",
              description:
                "Add a button that copies the code block to the clipboard when clicked.",
              owner: "mAAdhaTTah",
              require: "toolbar",
              noCSS: !0,
            },
            "download-button": {
              title: "Download Button",
              description:
                "A button in the toolbar of a code block adding a convenient way to download a code file.",
              owner: "Golmote",
              require: "toolbar",
              noCSS: !0,
            },
            "match-braces": {
              title: "Match braces",
              description: "Highlights matching braces.",
              owner: "RunDevelopment",
            },
            "diff-highlight": {
              title: "Diff Highlight",
              description: "Highlights the code inside diff blocks.",
              owner: "RunDevelopment",
              require: "diff",
            },
            "filter-highlight-all": {
              title: "Filter highlightAll",
              description:
                "Filters the elements the <code>highlightAll</code> and <code>highlightAllUnder</code> methods actually highlight.",
              owner: "RunDevelopment",
              noCSS: !0,
            },
            treeview: {
              title: "Treeview",
              description:
                "A language with special styles to highlight file system tree structures.",
              owner: "Golmote",
            },
          },
        });
    },
    6988: (e, t, n) => {
      "use strict";
      n.d(t, { o: () => c, l: () => d });
      var r = n(6540),
        a = n(4784);
      const o = JSON.parse(
          '{"docusaurus-plugin-google-gtag":{"default":{"trackingID":["G-2ME5P0RZYD"],"anonymizeIP":false,"id":"default"}},"docusaurus-plugin-content-docs":{"default":{"path":"/tr/docs","versions":[{"name":"current","label":"Next","isLast":true,"path":"/tr/docs","mainDocId":"introduction","docs":[{"id":"getting-started/commands","path":"/tr/docs/getting-started/commands","sidebar":"defaultSidebar"},{"id":"getting-started/dashboard","path":"/tr/docs/getting-started/dashboard","sidebar":"defaultSidebar"},{"id":"getting-started/faq","path":"/tr/docs/getting-started/faq","sidebar":"defaultSidebar"},{"id":"getting-started/premium","path":"/tr/docs/getting-started/premium","sidebar":"defaultSidebar"},{"id":"getting-started/setup","path":"/tr/docs/getting-started/setup","sidebar":"defaultSidebar"},{"id":"introduction","path":"/tr/docs/intro","sidebar":"defaultSidebar"},{"id":"modules/leaderboard","path":"/tr/docs/modules/leaderboard","sidebar":"defaultSidebar"},{"id":"modules/logs","path":"/tr/docs/modules/logs","sidebar":"defaultSidebar"},{"id":"modules/modactions","path":"/tr/docs/modules/modactions","sidebar":"defaultSidebar"},{"id":"modules/moderation","path":"/tr/docs/modules/moderation","sidebar":"defaultSidebar"},{"id":"modules/notifiestop10","path":"/tr/docs/modules/notifiestop10","sidebar":"defaultSidebar"},{"id":"modules/overview","path":"/tr/docs/modules/overview","sidebar":"defaultSidebar"},{"id":"modules/serversettings","path":"/tr/docs/modules/serversettings","sidebar":"defaultSidebar"},{"id":"/category/getting-started","path":"/tr/docs/category/getting-started","sidebar":"defaultSidebar"},{"id":"/category/modules","path":"/tr/docs/category/modules","sidebar":"defaultSidebar"}],"draftIds":[],"sidebars":{"defaultSidebar":{"link":{"path":"/tr/docs/intro","label":"introduction"}}}}],"breadcrumbs":true}}}'
        ),
        i = JSON.parse(
          '{"defaultLocale":"en","locales":["en","ar","es","fr","tr","ru","ja"],"path":"i18n","currentLocale":"tr","localeConfigs":{"en":{"label":"English","direction":"ltr","htmlLang":"en","calendar":"gregory","path":"en"},"ar":{"label":"\u0627\u0644\u0639\u0631\u0628\u064a\u0629","direction":"rtl","htmlLang":"ar","calendar":"gregory","path":"ar"},"es":{"label":"Espa\xf1ol","direction":"ltr","htmlLang":"es","calendar":"gregory","path":"es"},"fr":{"label":"Fran\xe7ais","direction":"ltr","htmlLang":"fr","calendar":"gregory","path":"fr"},"tr":{"label":"T\xfcrk\xe7e","direction":"ltr","htmlLang":"tr","calendar":"gregory","path":"tr"},"ru":{"label":"\u0420\u0443\u0441\u0441\u043a\u0438\u0439","direction":"ltr","htmlLang":"ru","calendar":"gregory","path":"ru"},"ja":{"label":"\u65e5\u672c\u8a9e","direction":"ltr","htmlLang":"ja","calendar":"gregory","path":"ja"}}}'
        );
      var l = n(2654);
      const s = JSON.parse(
          '{"docusaurusVersion":"2.4.3","siteVersion":"1.0.0","pluginVersions":{"docusaurus-plugin-content-docs":{"type":"package","name":"@docusaurus/plugin-content-docs","version":"2.4.3"},"docusaurus-plugin-content-pages":{"type":"package","name":"@docusaurus/plugin-content-pages","version":"2.4.3"},"docusaurus-plugin-google-gtag":{"type":"package","name":"@docusaurus/plugin-google-gtag","version":"2.4.3"},"docusaurus-plugin-sitemap":{"type":"package","name":"@docusaurus/plugin-sitemap","version":"2.4.3"},"docusaurus-theme-classic":{"type":"package","name":"@docusaurus/theme-classic","version":"2.4.3"}}}'
        ),
        u = {
          siteConfig: a.default,
          siteMetadata: s,
          globalData: o,
          i18n: i,
          codeTranslations: l,
        },
        c = r.createContext(u);
      function d(e) {
        let { children: t } = e;
        return r.createElement(c.Provider, { value: u }, t);
      }
    },
    7065: (e, t, n) => {
      "use strict";
      n.d(t, { W: () => r });
      const r = "default";
    },
    7463: (e, t) => {
      "use strict";
      var n, r, a, o;
      if (
        "object" == typeof performance &&
        "function" == typeof performance.now
      ) {
        var i = performance;
        t.unstable_now = function () {
          return i.now();
        };
      } else {
        var l = Date,
          s = l.now();
        t.unstable_now = function () {
          return l.now() - s;
        };
      }
      if ("undefined" == typeof window || "function" != typeof MessageChannel) {
        var u = null,
          c = null,
          d = function () {
            if (null !== u)
              try {
                var e = t.unstable_now();
                u(!0, e), (u = null);
              } catch (n) {
                throw (setTimeout(d, 0), n);
              }
          };
        (n = function (e) {
          null !== u ? setTimeout(n, 0, e) : ((u = e), setTimeout(d, 0));
        }),
          (r = function (e, t) {
            c = setTimeout(e, t);
          }),
          (a = function () {
            clearTimeout(c);
          }),
          (t.unstable_shouldYield = function () {
            return !1;
          }),
          (o = t.unstable_forceFrameRate = function () {});
      } else {
        var f = window.setTimeout,
          p = window.clearTimeout;
        if ("undefined" != typeof console) {
          var m = window.cancelAnimationFrame;
          "function" != typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
            "function" != typeof m &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              );
        }
        var g = !1,
          h = null,
          b = -1,
          v = 5,
          y = 0;
        (t.unstable_shouldYield = function () {
          return t.unstable_now() >= y;
        }),
          (o = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (v = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var w = new MessageChannel(),
          k = w.port2;
        (w.port1.onmessage = function () {
          if (null !== h) {
            var e = t.unstable_now();
            y = e + v;
            try {
              h(!0, e) ? k.postMessage(null) : ((g = !1), (h = null));
            } catch (n) {
              throw (k.postMessage(null), n);
            }
          } else g = !1;
        }),
          (n = function (e) {
            (h = e), g || ((g = !0), k.postMessage(null));
          }),
          (r = function (e, n) {
            b = f(function () {
              e(t.unstable_now());
            }, n);
          }),
          (a = function () {
            p(b), (b = -1);
          });
      }
      function E(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = (n - 1) >>> 1,
            a = e[r];
          if (!(void 0 !== a && 0 < T(a, t))) break e;
          (e[r] = t), (e[n] = a), (n = r);
        }
      }
      function S(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function x(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length; r < a; ) {
              var o = 2 * (r + 1) - 1,
                i = e[o],
                l = o + 1,
                s = e[l];
              if (void 0 !== i && 0 > T(i, n))
                void 0 !== s && 0 > T(s, i)
                  ? ((e[r] = s), (e[l] = n), (r = l))
                  : ((e[r] = i), (e[o] = n), (r = o));
              else {
                if (!(void 0 !== s && 0 > T(s, n))) break e;
                (e[r] = s), (e[l] = n), (r = l);
              }
            }
          }
          return t;
        }
        return null;
      }
      function T(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var A = [],
        C = [],
        _ = 1,
        L = null,
        R = 3,
        N = !1,
        P = !1,
        O = !1;
      function D(e) {
        for (var t = S(C); null !== t; ) {
          if (null === t.callback) x(C);
          else {
            if (!(t.startTime <= e)) break;
            x(C), (t.sortIndex = t.expirationTime), E(A, t);
          }
          t = S(C);
        }
      }
      function I(e) {
        if (((O = !1), D(e), !P))
          if (null !== S(A)) (P = !0), n(M);
          else {
            var t = S(C);
            null !== t && r(I, t.startTime - e);
          }
      }
      function M(e, n) {
        (P = !1), O && ((O = !1), a()), (N = !0);
        var o = R;
        try {
          for (
            D(n), L = S(A);
            null !== L &&
            (!(L.expirationTime > n) || (e && !t.unstable_shouldYield()));

          ) {
            var i = L.callback;
            if ("function" == typeof i) {
              (L.callback = null), (R = L.priorityLevel);
              var l = i(L.expirationTime <= n);
              (n = t.unstable_now()),
                "function" == typeof l ? (L.callback = l) : L === S(A) && x(A),
                D(n);
            } else x(A);
            L = S(A);
          }
          if (null !== L) var s = !0;
          else {
            var u = S(C);
            null !== u && r(I, u.startTime - n), (s = !1);
          }
          return s;
        } finally {
          (L = null), (R = o), (N = !1);
        }
      }
      var B = o;
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          P || N || ((P = !0), n(M));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return R;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return S(A);
        }),
        (t.unstable_next = function (e) {
          switch (R) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = R;
          }
          var n = R;
          R = t;
          try {
            return e();
          } finally {
            R = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = B),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = R;
          R = e;
          try {
            return t();
          } finally {
            R = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, o, i) {
          var l = t.unstable_now();
          switch (
            ("object" == typeof i && null !== i
              ? (i = "number" == typeof (i = i.delay) && 0 < i ? l + i : l)
              : (i = l),
            e)
          ) {
            case 1:
              var s = -1;
              break;
            case 2:
              s = 250;
              break;
            case 5:
              s = 1073741823;
              break;
            case 4:
              s = 1e4;
              break;
            default:
              s = 5e3;
          }
          return (
            (e = {
              id: _++,
              callback: o,
              priorityLevel: e,
              startTime: i,
              expirationTime: (s = i + s),
              sortIndex: -1,
            }),
            i > l
              ? ((e.sortIndex = i),
                E(C, e),
                null === S(A) &&
                  e === S(C) &&
                  (O ? a() : (O = !0), r(I, i - l)))
              : ((e.sortIndex = s), E(A, e), P || N || ((P = !0), n(M))),
            e
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = R;
          return function () {
            var n = R;
            R = t;
            try {
              return e.apply(this, arguments);
            } finally {
              R = n;
            }
          };
        });
    },
    7489: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => f });
      var r = n(6540),
        a = n(8193),
        o = n(5260),
        i = n(440),
        l = n(9408);
      function s(e) {
        let { error: t, tryAgain: n } = e;
        return r.createElement(
          "div",
          {
            style: {
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              minHeight: "100vh",
              width: "100%",
              maxWidth: "80ch",
              fontSize: "20px",
              margin: "0 auto",
              padding: "1rem",
            },
          },
          r.createElement(
            "h1",
            { style: { fontSize: "3rem" } },
            "This page crashed"
          ),
          r.createElement(
            "button",
            {
              type: "button",
              onClick: n,
              style: {
                margin: "1rem 0",
                fontSize: "2rem",
                cursor: "pointer",
                borderRadius: 20,
                padding: "1rem",
              },
            },
            "Try again"
          ),
          r.createElement(u, { error: t })
        );
      }
      function u(e) {
        let { error: t } = e;
        const n = (0, i.getErrorCausalChain)(t)
          .map((e) => e.message)
          .join("\n\nCause:\n");
        return r.createElement("p", { style: { whiteSpace: "pre-wrap" } }, n);
      }
      function c(e) {
        let { error: t, tryAgain: n } = e;
        return r.createElement(
          f,
          { fallback: () => r.createElement(s, { error: t, tryAgain: n }) },
          r.createElement(
            o.A,
            null,
            r.createElement("title", null, "Page Error")
          ),
          r.createElement(
            l.A,
            null,
            r.createElement(s, { error: t, tryAgain: n })
          )
        );
      }
      const d = (e) => r.createElement(c, e);
      class f extends r.Component {
        constructor(e) {
          super(e), (this.state = { error: null });
        }
        componentDidCatch(e) {
          a.A.canUseDOM && this.setState({ error: e });
        }
        render() {
          const { children: e } = this.props,
            { error: t } = this.state;
          if (t) {
            const e = {
              error: t,
              tryAgain: () => this.setState({ error: null }),
            };
            return (this.props.fallback ?? d)(e);
          }
          return e ?? null;
        }
      }
    },
    7559: (e, t, n) => {
      "use strict";
      n.d(t, { G: () => r });
      const r = {
        page: {
          blogListPage: "blog-list-page",
          blogPostPage: "blog-post-page",
          blogTagsListPage: "blog-tags-list-page",
          blogTagPostListPage: "blog-tags-post-list-page",
          docsDocPage: "docs-doc-page",
          docsTagsListPage: "docs-tags-list-page",
          docsTagDocListPage: "docs-tags-doc-list-page",
          mdxPage: "mdx-page",
        },
        wrapper: {
          main: "main-wrapper",
          blogPages: "blog-wrapper",
          docsPages: "docs-wrapper",
          mdxPages: "mdx-wrapper",
        },
        common: {
          editThisPage: "theme-edit-this-page",
          lastUpdated: "theme-last-updated",
          backToTopButton: "theme-back-to-top-button",
          codeBlock: "theme-code-block",
          admonition: "theme-admonition",
          admonitionType: (e) => `theme-admonition-${e}`,
        },
        layout: {},
        docs: {
          docVersionBanner: "theme-doc-version-banner",
          docVersionBadge: "theme-doc-version-badge",
          docBreadcrumbs: "theme-doc-breadcrumbs",
          docMarkdown: "theme-doc-markdown",
          docTocMobile: "theme-doc-toc-mobile",
          docTocDesktop: "theme-doc-toc-desktop",
          docFooter: "theme-doc-footer",
          docFooterTagsRow: "theme-doc-footer-tags-row",
          docFooterEditMetaRow: "theme-doc-footer-edit-meta-row",
          docSidebarContainer: "theme-doc-sidebar-container",
          docSidebarMenu: "theme-doc-sidebar-menu",
          docSidebarItemCategory: "theme-doc-sidebar-item-category",
          docSidebarItemLink: "theme-doc-sidebar-item-link",
          docSidebarItemCategoryLevel: (e) =>
            `theme-doc-sidebar-item-category-level-${e}`,
          docSidebarItemLinkLevel: (e) =>
            `theme-doc-sidebar-item-link-level-${e}`,
        },
        blog: {},
      };
    },
    8168: (e, t, n) => {
      "use strict";
      function r() {
        return (
          (r = Object.assign
            ? Object.assign.bind()
            : function (e) {
                for (var t = 1; t < arguments.length; t++) {
                  var n = arguments[t];
                  for (var r in n)
                    ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
                }
                return e;
              }),
          r.apply(null, arguments)
        );
      }
      n.d(t, { A: () => r });
    },
    8193: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => a });
      const r =
          "undefined" != typeof window &&
          "document" in window &&
          "createElement" in window.document,
        a = {
          canUseDOM: r,
          canUseEventListeners:
            r && ("addEventListener" in window || "attachEvent" in window),
          canUseIntersectionObserver: r && "IntersectionObserver" in window,
          canUseViewport: r && "screen" in window,
        };
    },
    8328: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => p });
      var r = n(6540),
        a = n(8168),
        o = n(3259),
        i = n.n(o),
        l = n(4054);
      const s = {
        "02da30df": [
          () => n.e(763).then(n.bind(n, 448)),
          "@site/i18n/tr/docusaurus-plugin-content-docs/current/modules/leaderboard.mdx",
          448,
        ],
        "041535af": [
          () => n.e(912).then(n.bind(n, 4856)),
          "@site/i18n/tr/docusaurus-plugin-content-docs/current/modules/modactions.mdx",
          4856,
        ],
        "14eb3368": [
          () => Promise.all([n.e(250), n.e(969)]).then(n.bind(n, 4136)),
          "@theme/DocCategoryGeneratedIndexPage",
          4136,
        ],
        17896441: [
          () => Promise.all([n.e(250), n.e(401)]).then(n.bind(n, 7528)),
          "@theme/DocItem",
          7528,
        ],
        "1be78505": [
          () => Promise.all([n.e(250), n.e(714)]).then(n.bind(n, 10)),
          "@theme/DocPage",
          10,
        ],
        "1df93b7f": [
          () =>
            Promise.all([n.e(250), n.e(964), n.e(583)]).then(n.bind(n, 3114)),
          "@site/src/pages/index.tsx",
          3114,
        ],
        "420f3100": [
          () => n.e(851).then(n.bind(n, 4733)),
          "@site/i18n/tr/docusaurus-plugin-content-docs/current/modules/moderation.mdx",
          4733,
        ],
        "5e9f5e1a": [
          () => Promise.resolve().then(n.bind(n, 4784)),
          "@generated/docusaurus.config",
          4784,
        ],
        62219348: [
          () => n.e(76).then(n.bind(n, 6730)),
          "@site/i18n/tr/docusaurus-plugin-content-docs/current/modules/notifiestop10.mdx",
          6730,
        ],
        "65217c5f": [
          () => n.e(100).then(n.bind(n, 2733)),
          "@site/i18n/tr/docusaurus-plugin-content-docs/current/getting-started/setup.mdx",
          2733,
        ],
        "7627bfe5": [
          () => n.e(123).then(n.bind(n, 7178)),
          "@site/i18n/tr/docusaurus-plugin-content-docs/current/getting-started/dashboard.mdx",
          7178,
        ],
        "7fa5cf47": [
          () => n.e(702).then(n.t.bind(n, 1966, 19)),
          "C:\\Users\\Ghmdon\\Desktop\\vTime Docs\\docs 0.0.1\\.docusaurus\\docusaurus-plugin-content-docs\\default\\plugin-route-context-module-100.json",
          1966,
        ],
        "929ecd66": [
          () => n.e(73).then(n.t.bind(n, 4440, 19)),
          "~docs/default/category-trdocs-defaultsidebar-category-modules-26d.json",
          4440,
        ],
        "935f2afb": [
          () => n.e(581).then(n.t.bind(n, 5610, 19)),
          "~docs/default/version-current-metadata-prop-751.json",
          5610,
        ],
        "961729fb": [
          () => n.e(865).then(n.t.bind(n, 55, 19)),
          "~docs/default/category-trdocs-defaultsidebar-category-getting-started-8ea.json",
          55,
        ],
        b3daed8e: [
          () => n.e(962).then(n.bind(n, 5290)),
          "@site/i18n/tr/docusaurus-plugin-content-docs/current/getting-started/faq.mdx",
          5290,
        ],
        bf25872c: [
          () => n.e(698).then(n.bind(n, 6557)),
          "@site/i18n/tr/docusaurus-plugin-content-docs/current/getting-started/premium.mdx",
          6557,
        ],
        c971f9b7: [
          () => n.e(453).then(n.t.bind(n, 4061, 19)),
          "C:\\Users\\Ghmdon\\Desktop\\vTime Docs\\docs 0.0.1\\.docusaurus\\docusaurus-plugin-content-pages\\default\\plugin-route-context-module-100.json",
          4061,
        ],
        cd544038: [
          () => n.e(460).then(n.bind(n, 6479)),
          "@site/i18n/tr/docusaurus-plugin-content-docs/current/introduction.mdx",
          6479,
        ],
        e2a8d2f8: [
          () => n.e(869).then(n.bind(n, 5043)),
          "@site/i18n/tr/docusaurus-plugin-content-docs/current/modules/serversettings.mdx",
          5043,
        ],
        e85f4645: [
          () => n.e(306).then(n.bind(n, 492)),
          "@site/i18n/tr/docusaurus-plugin-content-docs/current/modules/logs.mdx",
          492,
        ],
        f4dd58c8: [
          () => n.e(379).then(n.bind(n, 218)),
          "@site/i18n/tr/docusaurus-plugin-content-docs/current/getting-started/commands.mdx",
          218,
        ],
        f7c17443: [
          () => n.e(272).then(n.bind(n, 6732)),
          "@site/i18n/tr/docusaurus-plugin-content-docs/current/modules/overview.mdx",
          6732,
        ],
      };
      function u(e) {
        let { error: t, retry: n, pastDelay: a } = e;
        return t
          ? r.createElement(
              "div",
              {
                style: {
                  textAlign: "center",
                  color: "#fff",
                  backgroundColor: "#fa383e",
                  borderColor: "#fa383e",
                  borderStyle: "solid",
                  borderRadius: "0.25rem",
                  borderWidth: "1px",
                  boxSizing: "border-box",
                  display: "block",
                  padding: "1rem",
                  flex: "0 0 50%",
                  marginLeft: "25%",
                  marginRight: "25%",
                  marginTop: "5rem",
                  maxWidth: "50%",
                  width: "100%",
                },
              },
              r.createElement("p", null, String(t)),
              r.createElement(
                "div",
                null,
                r.createElement(
                  "button",
                  { type: "button", onClick: n },
                  "Retry"
                )
              )
            )
          : a
          ? r.createElement(
              "div",
              {
                style: {
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "100vh",
                },
              },
              r.createElement(
                "svg",
                {
                  id: "loader",
                  style: {
                    width: 128,
                    height: 110,
                    position: "absolute",
                    top: "calc(100vh - 64%)",
                  },
                  viewBox: "0 0 45 45",
                  xmlns: "http://www.w3.org/2000/svg",
                  stroke: "#61dafb",
                },
                r.createElement(
                  "g",
                  {
                    fill: "none",
                    fillRule: "evenodd",
                    transform: "translate(1 1)",
                    strokeWidth: "2",
                  },
                  r.createElement(
                    "circle",
                    { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
                    r.createElement("animate", {
                      attributeName: "r",
                      begin: "1.5s",
                      dur: "3s",
                      values: "6;22",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    }),
                    r.createElement("animate", {
                      attributeName: "stroke-opacity",
                      begin: "1.5s",
                      dur: "3s",
                      values: "1;0",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    }),
                    r.createElement("animate", {
                      attributeName: "stroke-width",
                      begin: "1.5s",
                      dur: "3s",
                      values: "2;0",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    })
                  ),
                  r.createElement(
                    "circle",
                    { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
                    r.createElement("animate", {
                      attributeName: "r",
                      begin: "3s",
                      dur: "3s",
                      values: "6;22",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    }),
                    r.createElement("animate", {
                      attributeName: "stroke-opacity",
                      begin: "3s",
                      dur: "3s",
                      values: "1;0",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    }),
                    r.createElement("animate", {
                      attributeName: "stroke-width",
                      begin: "3s",
                      dur: "3s",
                      values: "2;0",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    })
                  ),
                  r.createElement(
                    "circle",
                    { cx: "22", cy: "22", r: "8" },
                    r.createElement("animate", {
                      attributeName: "r",
                      begin: "0s",
                      dur: "1.5s",
                      values: "6;1;2;3;4;5;6",
                      calcMode: "linear",
                      repeatCount: "indefinite",
                    })
                  )
                )
              )
            )
          : null;
      }
      var c = n(6921),
        d = n(3102);
      function f(e, t) {
        if ("*" === e)
          return i()({
            loading: u,
            loader: () => n.e(774).then(n.bind(n, 1774)),
            modules: ["@theme/NotFound"],
            webpack: () => [1774],
            render(e, t) {
              const n = e.default;
              return r.createElement(
                d.W,
                { value: { plugin: { name: "native", id: "default" } } },
                r.createElement(n, t)
              );
            },
          });
        const o = l[`${e}-${t}`],
          f = {},
          p = [],
          m = [],
          g = (0, c.A)(o);
        return (
          Object.entries(g).forEach((e) => {
            let [t, n] = e;
            const r = s[n];
            r && ((f[t] = r[0]), p.push(r[1]), m.push(r[2]));
          }),
          i().Map({
            loading: u,
            loader: f,
            modules: p,
            webpack: () => m,
            render(t, n) {
              const i = JSON.parse(JSON.stringify(o));
              Object.entries(t).forEach((t) => {
                let [n, r] = t;
                const a = r.default;
                if (!a)
                  throw new Error(
                    `The page component at ${e} doesn't have a default export. This makes it impossible to render anything. Consider default-exporting a React component.`
                  );
                ("object" != typeof a && "function" != typeof a) ||
                  Object.keys(r)
                    .filter((e) => "default" !== e)
                    .forEach((e) => {
                      a[e] = r[e];
                    });
                let o = i;
                const l = n.split(".");
                l.slice(0, -1).forEach((e) => {
                  o = o[e];
                }),
                  (o[l[l.length - 1]] = a);
              });
              const l = i.__comp;
              delete i.__comp;
              const s = i.__context;
              return (
                delete i.__context,
                r.createElement(
                  d.W,
                  { value: s },
                  r.createElement(l, (0, a.A)({}, i, n))
                )
              );
            },
          })
        );
      }
      const p = [
        {
          path: "/tr/docs",
          component: f("/tr/docs", "5d6"),
          routes: [
            {
              path: "/tr/docs/category/getting-started",
              component: f("/tr/docs/category/getting-started", "789"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
            {
              path: "/tr/docs/category/modules",
              component: f("/tr/docs/category/modules", "4e7"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
            {
              path: "/tr/docs/getting-started/commands",
              component: f("/tr/docs/getting-started/commands", "e2f"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
            {
              path: "/tr/docs/getting-started/dashboard",
              component: f("/tr/docs/getting-started/dashboard", "814"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
            {
              path: "/tr/docs/getting-started/faq",
              component: f("/tr/docs/getting-started/faq", "57b"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
            {
              path: "/tr/docs/getting-started/premium",
              component: f("/tr/docs/getting-started/premium", "14f"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
            {
              path: "/tr/docs/getting-started/setup",
              component: f("/tr/docs/getting-started/setup", "bb5"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
            {
              path: "/tr/docs/intro",
              component: f("/tr/docs/intro", "aba"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
            {
              path: "/tr/docs/modules/leaderboard",
              component: f("/tr/docs/modules/leaderboard", "189"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
            {
              path: "/tr/docs/modules/logs",
              component: f("/tr/docs/modules/logs", "d39"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
            {
              path: "/tr/docs/modules/modactions",
              component: f("/tr/docs/modules/modactions", "bfe"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
            {
              path: "/tr/docs/modules/moderation",
              component: f("/tr/docs/modules/moderation", "fe0"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
            {
              path: "/tr/docs/modules/notifiestop10",
              component: f("/tr/docs/modules/notifiestop10", "e69"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
            {
              path: "/tr/docs/modules/overview",
              component: f("/tr/docs/modules/overview", "3b9"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
            {
              path: "/tr/docs/modules/serversettings",
              component: f("/tr/docs/modules/serversettings", "915"),
              exact: !0,
              sidebar: "defaultSidebar",
            },
          ],
        },
        { path: "/tr/", component: f("/tr/", "59f"), exact: !0 },
        { path: "*", component: f("*") },
      ];
    },
    8380: (e) => {
      "use strict";
      var t = (function () {
        var e = function () {};
        function t(e, t) {
          Array.isArray(e) ? e.forEach(t) : null != e && t(e, 0);
        }
        function n(e) {
          for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
          return t;
        }
        function r(e) {
          var n = {},
            r = [];
          function a(r, o) {
            if (!(r in n)) {
              o.push(r);
              var i = o.indexOf(r);
              if (i < o.length - 1)
                throw new Error(
                  "Circular dependency: " + o.slice(i).join(" -> ")
                );
              var l = {},
                s = e[r];
              if (s) {
                function u(t) {
                  if (!(t in e))
                    throw new Error(
                      r + " depends on an unknown component " + t
                    );
                  if (!(t in l))
                    for (var i in (a(t, o), (l[t] = !0), n[t])) l[i] = !0;
                }
                t(s.require, u), t(s.optional, u), t(s.modify, u);
              }
              (n[r] = l), o.pop();
            }
          }
          return function (e) {
            var t = n[e];
            return t || (a(e, r), (t = n[e])), t;
          };
        }
        function a(e) {
          for (var t in e) return !0;
          return !1;
        }
        return function (o, i, l) {
          var s = (function (e) {
              var t = {};
              for (var n in e) {
                var r = e[n];
                for (var a in r)
                  if ("meta" != a) {
                    var o = r[a];
                    t[a] = "string" == typeof o ? { title: o } : o;
                  }
              }
              return t;
            })(o),
            u = (function (e) {
              var n;
              return function (r) {
                if (r in e) return r;
                if (!n)
                  for (var a in ((n = {}), e)) {
                    var o = e[a];
                    t(o && o.alias, function (t) {
                      if (t in n)
                        throw new Error(
                          t + " cannot be alias for both " + a + " and " + n[t]
                        );
                      if (t in e)
                        throw new Error(
                          t +
                            " cannot be alias of " +
                            a +
                            " because it is a component."
                        );
                      n[t] = a;
                    });
                  }
                return n[r] || r;
              };
            })(s);
          (i = i.map(u)), (l = (l || []).map(u));
          var c = n(i),
            d = n(l);
          i.forEach(function e(n) {
            var r = s[n];
            t(r && r.require, function (t) {
              t in d || ((c[t] = !0), e(t));
            });
          });
          for (var f, p = r(s), m = c; a(m); ) {
            for (var g in ((f = {}), m)) {
              var h = s[g];
              t(h && h.modify, function (e) {
                e in d && (f[e] = !0);
              });
            }
            for (var b in d)
              if (!(b in c))
                for (var v in p(b))
                  if (v in c) {
                    f[b] = !0;
                    break;
                  }
            for (var y in (m = f)) c[y] = !0;
          }
          var w = {
            getIds: function () {
              var e = [];
              return (
                w.load(function (t) {
                  e.push(t);
                }),
                e
              );
            },
            load: function (t, n) {
              return (function (t, n, r, a) {
                var o = a ? a.series : void 0,
                  i = a ? a.parallel : e,
                  l = {},
                  s = {};
                function u(e) {
                  if (e in l) return l[e];
                  s[e] = !0;
                  var a,
                    c = [];
                  for (var d in t(e)) d in n && c.push(d);
                  if (0 === c.length) a = r(e);
                  else {
                    var f = i(
                      c.map(function (e) {
                        var t = u(e);
                        return delete s[e], t;
                      })
                    );
                    o
                      ? (a = o(f, function () {
                          return r(e);
                        }))
                      : r(e);
                  }
                  return (l[e] = a);
                }
                for (var c in n) u(c);
                var d = [];
                for (var f in s) d.push(l[f]);
                return i(d);
              })(p, c, t, n);
            },
          };
          return w;
        };
      })();
      e.exports = t;
    },
    8493: (e, t, n) => {
      "use strict";
      var r = n(6540);
      var a =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        o = r.useState,
        i = r.useEffect,
        l = r.useLayoutEffect,
        s = r.useDebugValue;
      function u(e) {
        var t = e.getSnapshot;
        e = e.value;
        try {
          var n = t();
          return !a(e, n);
        } catch (r) {
          return !0;
        }
      }
      var c =
        "undefined" == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
          ? function (e, t) {
              return t();
            }
          : function (e, t) {
              var n = t(),
                r = o({ inst: { value: n, getSnapshot: t } }),
                a = r[0].inst,
                c = r[1];
              return (
                l(
                  function () {
                    (a.value = n), (a.getSnapshot = t), u(a) && c({ inst: a });
                  },
                  [e, n, t]
                ),
                i(
                  function () {
                    return (
                      u(a) && c({ inst: a }),
                      e(function () {
                        u(a) && c({ inst: a });
                      })
                    );
                  },
                  [e]
                ),
                s(n),
                n
              );
            };
      void 0 !== r.useSyncExternalStore && r.useSyncExternalStore;
    },
    8536: (e, t, n) => {
      "use strict";
      var r = n(6540),
        a = n(961),
        o = n(4625),
        i = n(545),
        l = n(8193);
      const s = [n(1911), n(119), n(6134), n(6294), n(1043)];
      var u = n(8328),
        c = n(6347),
        d = n(2831);
      function f(e) {
        let { children: t } = e;
        return r.createElement(r.Fragment, null, t);
      }
      var p = n(8168),
        m = n(5260),
        g = n(4586),
        h = n(6025),
        b = n(6342),
        v = n(1003),
        y = n(2131),
        w = n(4090),
        k = n(2967),
        E = n(440),
        S = n(1463);
      function x() {
        const {
            i18n: { defaultLocale: e, localeConfigs: t },
          } = (0, g.A)(),
          n = (0, y.o)();
        return r.createElement(
          m.A,
          null,
          Object.entries(t).map((e) => {
            let [t, { htmlLang: a }] = e;
            return r.createElement("link", {
              key: t,
              rel: "alternate",
              href: n.createUrl({ locale: t, fullyQualified: !0 }),
              hrefLang: a,
            });
          }),
          r.createElement("link", {
            rel: "alternate",
            href: n.createUrl({ locale: e, fullyQualified: !0 }),
            hrefLang: "x-default",
          })
        );
      }
      function T(e) {
        let { permalink: t } = e;
        const {
            siteConfig: { url: n },
          } = (0, g.A)(),
          a = (function () {
            const {
                siteConfig: { url: e, baseUrl: t, trailingSlash: n },
              } = (0, g.A)(),
              { pathname: r } = (0, c.zy)();
            return (
              e +
              (0, E.applyTrailingSlash)((0, h.A)(r), {
                trailingSlash: n,
                baseUrl: t,
              })
            );
          })(),
          o = t ? `${n}${t}` : a;
        return r.createElement(
          m.A,
          null,
          r.createElement("meta", { property: "og:url", content: o }),
          r.createElement("link", { rel: "canonical", href: o })
        );
      }
      function A() {
        const {
            i18n: { currentLocale: e },
          } = (0, g.A)(),
          { metadata: t, image: n } = (0, b.p)();
        return r.createElement(
          r.Fragment,
          null,
          r.createElement(
            m.A,
            null,
            r.createElement("meta", {
              name: "twitter:card",
              content: "summary_large_image",
            }),
            r.createElement("body", { className: w.w })
          ),
          n && r.createElement(v.be, { image: n }),
          r.createElement(T, null),
          r.createElement(x, null),
          r.createElement(S.A, { tag: k.Cy, locale: e }),
          r.createElement(
            m.A,
            null,
            t.map((e, t) => r.createElement("meta", (0, p.A)({ key: t }, e)))
          )
        );
      }
      const C = new Map();
      function _(e) {
        if (C.has(e.pathname)) return { ...e, pathname: C.get(e.pathname) };
        if (
          (0, d.u)(u.A, e.pathname).some((e) => {
            let { route: t } = e;
            return !0 === t.exact;
          })
        )
          return C.set(e.pathname, e.pathname), e;
        const t = e.pathname.trim().replace(/(?:\/index)?\.html$/, "") || "/";
        return C.set(e.pathname, t), { ...e, pathname: t };
      }
      var L = n(6125),
        R = n(6988);
      function N(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        const a = s.map((t) => {
          const r = t.default?.[e] ?? t[e];
          return r?.(...n);
        });
        return () => a.forEach((e) => e?.());
      }
      const P = function (e) {
        let { children: t, location: n, previousLocation: a } = e;
        return (
          (0, r.useLayoutEffect)(() => {
            a !== n &&
              (!(function (e) {
                let { location: t, previousLocation: n } = e;
                if (!n) return;
                const r = t.pathname === n.pathname,
                  a = t.hash === n.hash,
                  o = t.search === n.search;
                if (r && a && !o) return;
                const { hash: i } = t;
                if (i) {
                  const e = decodeURIComponent(i.substring(1)),
                    t = document.getElementById(e);
                  t?.scrollIntoView();
                } else window.scrollTo(0, 0);
              })({ location: n, previousLocation: a }),
              N("onRouteDidUpdate", { previousLocation: a, location: n }));
          }, [a, n]),
          t
        );
      };
      function O(e) {
        const t = Array.from(new Set([e, decodeURI(e)]))
          .map((e) => (0, d.u)(u.A, e))
          .flat();
        return Promise.all(t.map((e) => e.route.component.preload?.()));
      }
      class D extends r.Component {
        previousLocation;
        routeUpdateCleanupCb;
        constructor(e) {
          super(e),
            (this.previousLocation = null),
            (this.routeUpdateCleanupCb = l.A.canUseDOM
              ? N("onRouteUpdate", {
                  previousLocation: null,
                  location: this.props.location,
                })
              : () => {}),
            (this.state = { nextRouteHasLoaded: !0 });
        }
        shouldComponentUpdate(e, t) {
          if (e.location === this.props.location) return t.nextRouteHasLoaded;
          const n = e.location;
          return (
            (this.previousLocation = this.props.location),
            this.setState({ nextRouteHasLoaded: !1 }),
            (this.routeUpdateCleanupCb = N("onRouteUpdate", {
              previousLocation: this.previousLocation,
              location: n,
            })),
            O(n.pathname)
              .then(() => {
                this.routeUpdateCleanupCb(),
                  this.setState({ nextRouteHasLoaded: !0 });
              })
              .catch((e) => {
                console.warn(e), window.location.reload();
              }),
            !1
          );
        }
        render() {
          const { children: e, location: t } = this.props;
          return r.createElement(
            P,
            { previousLocation: this.previousLocation, location: t },
            r.createElement(c.qh, { location: t, render: () => e })
          );
        }
      }
      const I = D,
        M = "__docusaurus-base-url-issue-banner-container",
        B = "__docusaurus-base-url-issue-banner-suggestion-container",
        F = "__DOCUSAURUS_INSERT_BASEURL_BANNER";
      function j(e) {
        return `\nwindow['${F}'] = true;\n\ndocument.addEventListener('DOMContentLoaded', maybeInsertBanner);\n\nfunction maybeInsertBanner() {\n  var shouldInsert = window['${F}'];\n  shouldInsert && insertBanner();\n}\n\nfunction insertBanner() {\n  var bannerContainer = document.getElementById('${M}');\n  if (!bannerContainer) {\n    return;\n  }\n  var bannerHtml = ${JSON.stringify(
          (function (e) {
            return `\n<div id="__docusaurus-base-url-issue-banner" style="border: thick solid red; background-color: rgb(255, 230, 179); margin: 20px; padding: 20px; font-size: 20px;">\n   <p style="font-weight: bold; font-size: 30px;">Your Docusaurus site did not load properly.</p>\n   <p>A very common reason is a wrong site <a href="https://docusaurus.io/docs/docusaurus.config.js/#baseUrl" style="font-weight: bold;">baseUrl configuration</a>.</p>\n   <p>Current configured baseUrl = <span style="font-weight: bold; color: red;">${e}</span> ${
              "/" === e ? " (default value)" : ""
            }</p>\n   <p>We suggest trying baseUrl = <span id="${B}" style="font-weight: bold; color: green;"></span></p>\n</div>\n`;
          })(e)
        ).replace(
          /</g,
          "\\<"
        )};\n  bannerContainer.innerHTML = bannerHtml;\n  var suggestionContainer = document.getElementById('${B}');\n  var actualHomePagePath = window.location.pathname;\n  var suggestedBaseUrl = actualHomePagePath.substr(-1) === '/'\n        ? actualHomePagePath\n        : actualHomePagePath + '/';\n  suggestionContainer.innerHTML = suggestedBaseUrl;\n}\n`;
      }
      function z() {
        const {
          siteConfig: { baseUrl: e },
        } = (0, g.A)();
        return (
          (0, r.useLayoutEffect)(() => {
            window[F] = !1;
          }, []),
          r.createElement(
            r.Fragment,
            null,
            !l.A.canUseDOM &&
              r.createElement(m.A, null, r.createElement("script", null, j(e))),
            r.createElement("div", { id: M })
          )
        );
      }
      function U() {
        const {
            siteConfig: { baseUrl: e, baseUrlIssueBanner: t },
          } = (0, g.A)(),
          { pathname: n } = (0, c.zy)();
        return t && n === e ? r.createElement(z, null) : null;
      }
      function $() {
        const {
            siteConfig: { favicon: e, title: t, noIndex: n },
            i18n: { currentLocale: a, localeConfigs: o },
          } = (0, g.A)(),
          i = (0, h.A)(e),
          { htmlLang: l, direction: s } = o[a];
        return r.createElement(
          m.A,
          null,
          r.createElement("html", { lang: l, dir: s }),
          r.createElement("title", null, t),
          r.createElement("meta", { property: "og:title", content: t }),
          r.createElement("meta", {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0",
          }),
          n &&
            r.createElement("meta", {
              name: "robots",
              content: "noindex, nofollow",
            }),
          e && r.createElement("link", { rel: "icon", href: i })
        );
      }
      var G = n(7489),
        q = n(2303);
      function H() {
        const e = (0, q.A)();
        return r.createElement(
          m.A,
          null,
          r.createElement("html", { "data-has-hydrated": e })
        );
      }
      function V() {
        const e = (0, d.v)(u.A),
          t = (0, c.zy)();
        return r.createElement(
          G.A,
          null,
          r.createElement(
            R.l,
            null,
            r.createElement(
              L.x,
              null,
              r.createElement(
                f,
                null,
                r.createElement($, null),
                r.createElement(A, null),
                r.createElement(U, null),
                r.createElement(I, { location: _(t) }, e)
              ),
              r.createElement(H, null)
            )
          )
        );
      }
      var W = n(4054);
      const K = (function (e) {
        try {
          return document.createElement("link").relList.supports(e);
        } catch {
          return !1;
        }
      })("prefetch")
        ? function (e) {
            return new Promise((t, n) => {
              if ("undefined" == typeof document) return void n();
              const r = document.createElement("link");
              r.setAttribute("rel", "prefetch"),
                r.setAttribute("href", e),
                (r.onload = () => t()),
                (r.onerror = () => n());
              const a =
                document.getElementsByTagName("head")[0] ??
                document.getElementsByName("script")[0]?.parentNode;
              a?.appendChild(r);
            });
          }
        : function (e) {
            return new Promise((t, n) => {
              const r = new XMLHttpRequest();
              r.open("GET", e, !0),
                (r.withCredentials = !0),
                (r.onload = () => {
                  200 === r.status ? t() : n();
                }),
                r.send(null);
            });
          };
      var Y = n(6921);
      const Q = new Set(),
        X = new Set(),
        J = () =>
          navigator.connection?.effectiveType.includes("2g") ||
          navigator.connection?.saveData,
        Z = {
          prefetch(e) {
            if (!((e) => !J() && !X.has(e) && !Q.has(e))(e)) return !1;
            Q.add(e);
            const t = (0, d.u)(u.A, e).flatMap((e) => {
              return (
                (t = e.route.path),
                Object.entries(W)
                  .filter((e) => {
                    let [n] = e;
                    return n.replace(/-[^-]+$/, "") === t;
                  })
                  .flatMap((e) => {
                    let [, t] = e;
                    return Object.values((0, Y.A)(t));
                  })
              );
              var t;
            });
            return Promise.all(
              t.map((e) => {
                const t = n.gca(e);
                return t && !t.includes("undefined")
                  ? K(t).catch(() => {})
                  : Promise.resolve();
              })
            );
          },
          preload: (e) => !!((e) => !J() && !X.has(e))(e) && (X.add(e), O(e)),
        },
        ee = Object.freeze(Z);
      if (l.A.canUseDOM) {
        window.docusaurus = ee;
        const e = a.hydrate;
        O(window.location.pathname).then(() => {
          e(
            r.createElement(
              i.vd,
              null,
              r.createElement(o.Kd, null, r.createElement(V, null))
            ),
            document.getElementById("__docusaurus")
          );
        });
      }
    },
    8587: (e, t, n) => {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n = {};
        for (var r in e)
          if ({}.hasOwnProperty.call(e, r)) {
            if (-1 !== t.indexOf(r)) continue;
            n[r] = e[r];
          }
        return n;
      }
      n.d(t, { A: () => r });
    },
    8692: (e, t, n) => {
      var r = { "./": 8722 };
      function a(e) {
        var t = o(e);
        return n(t);
      }
      function o(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = o),
        (e.exports = a),
        (a.id = 8692);
    },
    8722: (e, t, n) => {
      const r = n(6969),
        a = n(8380),
        o = new Set();
      function i(e) {
        void 0 === e
          ? (e = Object.keys(r.languages).filter((e) => "meta" != e))
          : Array.isArray(e) || (e = [e]);
        const t = [...o, ...Object.keys(Prism.languages)];
        a(r, e, t).load((e) => {
          if (!(e in r.languages))
            return void (
              i.silent || console.warn("Language does not exist: " + e)
            );
          const t = "./prism-" + e;
          delete n.c[n(3157).resolve(t)],
            delete Prism.languages[e],
            n(3157)(t),
            o.add(e);
        });
      }
      (i.silent = !1), (e.exports = i);
    },
    9169: (e, t, n) => {
      "use strict";
      n.d(t, { Dt: () => l, ys: () => i });
      var r = n(6540),
        a = n(8328),
        o = n(4586);
      function i(e, t) {
        const n = (e) => (!e || e.endsWith("/") ? e : `${e}/`)?.toLowerCase();
        return n(e) === n(t);
      }
      function l() {
        const { baseUrl: e } = (0, o.A)().siteConfig;
        return (0, r.useMemo)(
          () =>
            (function (e) {
              let { baseUrl: t, routes: n } = e;
              function r(e) {
                return e.path === t && !0 === e.exact;
              }
              function a(e) {
                return e.path === t && !e.exact;
              }
              return (function e(t) {
                if (0 === t.length) return;
                return (
                  t.find(r) || e(t.filter(a).flatMap((e) => e.routes ?? []))
                );
              })(n);
            })({ routes: a.A, baseUrl: e }),
          [e]
        );
      }
    },
    9408: (e, t, n) => {
      "use strict";
      n.d(t, { A: () => dt });
      var r = n(6540),
        a = n(53),
        o = n(7489),
        i = n(1003),
        l = n(8168),
        s = n(6347),
        u = n(1312),
        c = n(5062);
      const d = "__docusaurus_skipToContent_fallback";
      function f(e) {
        e.setAttribute("tabindex", "-1"),
          e.focus(),
          e.removeAttribute("tabindex");
      }
      function p() {
        const e = (0, r.useRef)(null),
          { action: t } = (0, s.W6)(),
          n = (0, r.useCallback)((e) => {
            e.preventDefault();
            const t =
              document.querySelector("main:first-of-type") ??
              document.getElementById(d);
            t && f(t);
          }, []);
        return (
          (0, c.$)((n) => {
            let { location: r } = n;
            e.current && !r.hash && "PUSH" === t && f(e.current);
          }),
          { containerRef: e, onClick: n }
        );
      }
      const m = (0, u.T)({
        id: "theme.common.skipToMainContent",
        description:
          "The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation",
        message: "Skip to main content",
      });
      function g(e) {
        const t = e.children ?? m,
          { containerRef: n, onClick: a } = p();
        return r.createElement(
          "div",
          { ref: n, role: "region", "aria-label": m },
          r.createElement(
            "a",
            (0, l.A)({}, e, { href: `#${d}`, onClick: a }),
            t
          )
        );
      }
      var h = n(7559),
        b = n(4090);
      const v = { skipToContent: "skipToContent_fXgn" };
      function y() {
        return r.createElement(g, { className: v.skipToContent });
      }
      var w = n(6342),
        k = n(5041);
      function E(e) {
        let {
          width: t = 21,
          height: n = 21,
          color: a = "currentColor",
          strokeWidth: o = 1.2,
          className: i,
          ...s
        } = e;
        return r.createElement(
          "svg",
          (0, l.A)({ viewBox: "0 0 15 15", width: t, height: n }, s),
          r.createElement(
            "g",
            { stroke: a, strokeWidth: o },
            r.createElement("path", {
              d: "M.75.75l13.5 13.5M14.25.75L.75 14.25",
            })
          )
        );
      }
      const S = { closeButton: "closeButton_CVFx" };
      function x(e) {
        return r.createElement(
          "button",
          (0, l.A)(
            {
              type: "button",
              "aria-label": (0, u.T)({
                id: "theme.AnnouncementBar.closeButtonAriaLabel",
                message: "Close",
                description:
                  "The ARIA label for close button of announcement bar",
              }),
            },
            e,
            {
              className: (0, a.A)(
                "clean-btn close",
                S.closeButton,
                e.className
              ),
            }
          ),
          r.createElement(E, { width: 14, height: 14, strokeWidth: 3.1 })
        );
      }
      const T = { content: "content_knG7" };
      function A(e) {
        const { announcementBar: t } = (0, w.p)(),
          { content: n } = t;
        return r.createElement(
          "div",
          (0, l.A)({}, e, {
            className: (0, a.A)(T.content, e.className),
            dangerouslySetInnerHTML: { __html: n },
          })
        );
      }
      const C = {
        announcementBar: "announcementBar_mb4j",
        announcementBarPlaceholder: "announcementBarPlaceholder_vyr4",
        announcementBarClose: "announcementBarClose_gvF7",
        announcementBarContent: "announcementBarContent_xLdY",
      };
      function _() {
        const { announcementBar: e } = (0, w.p)(),
          { isActive: t, close: n } = (0, k.Mj)();
        if (!t) return null;
        const { backgroundColor: a, textColor: o, isCloseable: i } = e;
        return r.createElement(
          "div",
          {
            className: C.announcementBar,
            style: { backgroundColor: a, color: o },
            role: "banner",
          },
          i &&
            r.createElement("div", { className: C.announcementBarPlaceholder }),
          r.createElement(A, { className: C.announcementBarContent }),
          i &&
            r.createElement(x, {
              onClick: n,
              className: C.announcementBarClose,
            })
        );
      }
      var L = n(9876),
        R = n(3104);
      var N = n(9532),
        P = n(5600);
      const O = r.createContext(null);
      function D(e) {
        let { children: t } = e;
        const n = (function () {
          const e = (0, L.M)(),
            t = (0, P.YL)(),
            [n, a] = (0, r.useState)(!1),
            o = null !== t.component,
            i = (0, N.ZC)(o);
          return (
            (0, r.useEffect)(() => {
              o && !i && a(!0);
            }, [o, i]),
            (0, r.useEffect)(() => {
              o ? e.shown || a(!0) : a(!1);
            }, [e.shown, o]),
            (0, r.useMemo)(() => [n, a], [n])
          );
        })();
        return r.createElement(O.Provider, { value: n }, t);
      }
      function I(e) {
        if (e.component) {
          const t = e.component;
          return r.createElement(t, e.props);
        }
      }
      function M() {
        const e = (0, r.useContext)(O);
        if (!e) throw new N.dV("NavbarSecondaryMenuDisplayProvider");
        const [t, n] = e,
          a = (0, r.useCallback)(() => n(!1), [n]),
          o = (0, P.YL)();
        return (0, r.useMemo)(
          () => ({ shown: t, hide: a, content: I(o) }),
          [a, o, t]
        );
      }
      function B(e) {
        let { header: t, primaryMenu: n, secondaryMenu: o } = e;
        const { shown: i } = M();
        return r.createElement(
          "div",
          { className: "navbar-sidebar" },
          t,
          r.createElement(
            "div",
            {
              className: (0, a.A)("navbar-sidebar__items", {
                "navbar-sidebar__items--show-secondary": i,
              }),
            },
            r.createElement(
              "div",
              { className: "navbar-sidebar__item menu" },
              n
            ),
            r.createElement(
              "div",
              { className: "navbar-sidebar__item menu" },
              o
            )
          )
        );
      }
      var F = n(5293),
        j = n(2303);
      function z(e) {
        return r.createElement(
          "svg",
          (0, l.A)({ viewBox: "0 0 24 24", width: 24, height: 24 }, e),
          r.createElement("path", {
            fill: "currentColor",
            d: "M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,7c-2.76,0-5,2.24-5,5s2.24,5,5,5s5-2.24,5-5 S14.76,7,12,7L12,7z M2,13l2,0c0.55,0,1-0.45,1-1s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S1.45,13,2,13z M20,13l2,0c0.55,0,1-0.45,1-1 s-0.45-1-1-1l-2,0c-0.55,0-1,0.45-1,1S19.45,13,20,13z M11,2v2c0,0.55,0.45,1,1,1s1-0.45,1-1V2c0-0.55-0.45-1-1-1S11,1.45,11,2z M11,20v2c0,0.55,0.45,1,1,1s1-0.45,1-1v-2c0-0.55-0.45-1-1-1C11.45,19,11,19.45,11,20z M5.99,4.58c-0.39-0.39-1.03-0.39-1.41,0 c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0s0.39-1.03,0-1.41L5.99,4.58z M18.36,16.95 c-0.39-0.39-1.03-0.39-1.41,0c-0.39,0.39-0.39,1.03,0,1.41l1.06,1.06c0.39,0.39,1.03,0.39,1.41,0c0.39-0.39,0.39-1.03,0-1.41 L18.36,16.95z M19.42,5.99c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06c-0.39,0.39-0.39,1.03,0,1.41 s1.03,0.39,1.41,0L19.42,5.99z M7.05,18.36c0.39-0.39,0.39-1.03,0-1.41c-0.39-0.39-1.03-0.39-1.41,0l-1.06,1.06 c-0.39,0.39-0.39,1.03,0,1.41s1.03,0.39,1.41,0L7.05,18.36z",
          })
        );
      }
      function U(e) {
        return r.createElement(
          "svg",
          (0, l.A)({ viewBox: "0 0 24 24", width: 24, height: 24 }, e),
          r.createElement("path", {
            fill: "currentColor",
            d: "M9.37,5.51C9.19,6.15,9.1,6.82,9.1,7.5c0,4.08,3.32,7.4,7.4,7.4c0.68,0,1.35-0.09,1.99-0.27C17.45,17.19,14.93,19,12,19 c-3.86,0-7-3.14-7-7C5,9.07,6.81,6.55,9.37,5.51z M12,3c-4.97,0-9,4.03-9,9s4.03,9,9,9s9-4.03,9-9c0-0.46-0.04-0.92-0.1-1.36 c-0.98,1.37-2.58,2.26-4.4,2.26c-2.98,0-5.4-2.42-5.4-5.4c0-1.81,0.89-3.42,2.26-4.4C12.92,3.04,12.46,3,12,3L12,3z",
          })
        );
      }
      const $ = {
        toggle: "toggle_vylO",
        toggleButton: "toggleButton_gllP",
        darkToggleIcon: "darkToggleIcon_wfgR",
        lightToggleIcon: "lightToggleIcon_pyhR",
        toggleButtonDisabled: "toggleButtonDisabled_aARS",
      };
      function G(e) {
        let { className: t, buttonClassName: n, value: o, onChange: i } = e;
        const l = (0, j.A)(),
          s = (0, u.T)(
            {
              message: "Switch between dark and light mode (currently {mode})",
              id: "theme.colorToggle.ariaLabel",
              description: "The ARIA label for the navbar color mode toggle",
            },
            {
              mode:
                "dark" === o
                  ? (0, u.T)({
                      message: "dark mode",
                      id: "theme.colorToggle.ariaLabel.mode.dark",
                      description: "The name for the dark color mode",
                    })
                  : (0, u.T)({
                      message: "light mode",
                      id: "theme.colorToggle.ariaLabel.mode.light",
                      description: "The name for the light color mode",
                    }),
            }
          );
        return r.createElement(
          "div",
          { className: (0, a.A)($.toggle, t) },
          r.createElement(
            "button",
            {
              className: (0, a.A)(
                "clean-btn",
                $.toggleButton,
                !l && $.toggleButtonDisabled,
                n
              ),
              type: "button",
              onClick: () => i("dark" === o ? "light" : "dark"),
              disabled: !l,
              title: s,
              "aria-label": s,
              "aria-live": "polite",
            },
            r.createElement(z, {
              className: (0, a.A)($.toggleIcon, $.lightToggleIcon),
            }),
            r.createElement(U, {
              className: (0, a.A)($.toggleIcon, $.darkToggleIcon),
            })
          )
        );
      }
      const q = r.memo(G),
        H = { darkNavbarColorModeToggle: "darkNavbarColorModeToggle_X3D1" };
      function V(e) {
        let { className: t } = e;
        const n = (0, w.p)().navbar.style,
          a = (0, w.p)().colorMode.disableSwitch,
          { colorMode: o, setColorMode: i } = (0, F.G)();
        return a
          ? null
          : r.createElement(q, {
              className: t,
              buttonClassName:
                "dark" === n ? H.darkNavbarColorModeToggle : void 0,
              value: o,
              onChange: i,
            });
      }
      var W = n(3465);
      function K() {
        return r.createElement(W.A, {
          className: "navbar__brand",
          imageClassName: "navbar__logo",
          titleClassName: "navbar__title text--truncate",
        });
      }
      function Y() {
        const e = (0, L.M)();
        return r.createElement(
          "button",
          {
            type: "button",
            "aria-label": (0, u.T)({
              id: "theme.docs.sidebar.closeSidebarButtonAriaLabel",
              message: "Close navigation bar",
              description: "The ARIA label for close button of mobile sidebar",
            }),
            className: "clean-btn navbar-sidebar__close",
            onClick: () => e.toggle(),
          },
          r.createElement(E, { color: "var(--ifm-color-emphasis-600)" })
        );
      }
      function Q() {
        return r.createElement(
          "div",
          { className: "navbar-sidebar__brand" },
          r.createElement(K, null),
          r.createElement(V, { className: "margin-right--md" }),
          r.createElement(Y, null)
        );
      }
      var X = n(5489),
        J = n(6025),
        Z = n(6654);
      function ee(e, t) {
        return void 0 !== e && void 0 !== t && new RegExp(e, "gi").test(t);
      }
      var te = n(3186);
      function ne(e) {
        let {
          activeBasePath: t,
          activeBaseRegex: n,
          to: a,
          href: o,
          label: i,
          html: s,
          isDropdownLink: u,
          prependBaseUrlToHref: c,
          ...d
        } = e;
        const f = (0, J.A)(a),
          p = (0, J.A)(t),
          m = (0, J.A)(o, { forcePrependBaseUrl: !0 }),
          g = i && o && !(0, Z.A)(o),
          h = s
            ? { dangerouslySetInnerHTML: { __html: s } }
            : {
                children: r.createElement(
                  r.Fragment,
                  null,
                  i,
                  g && r.createElement(te.A, u && { width: 12, height: 12 })
                ),
              };
        return o
          ? r.createElement(X.A, (0, l.A)({ href: c ? m : o }, d, h))
          : r.createElement(
              X.A,
              (0, l.A)(
                { to: f, isNavLink: !0 },
                (t || n) && {
                  isActive: (e, t) =>
                    n ? ee(n, t.pathname) : t.pathname.startsWith(p),
                },
                d,
                h
              )
            );
      }
      function re(e) {
        let { className: t, isDropdownItem: n = !1, ...o } = e;
        const i = r.createElement(
          ne,
          (0, l.A)(
            {
              className: (0, a.A)(
                n ? "dropdown__link" : "navbar__item navbar__link",
                t
              ),
              isDropdownLink: n,
            },
            o
          )
        );
        return n ? r.createElement("li", null, i) : i;
      }
      function ae(e) {
        let { className: t, isDropdownItem: n, ...o } = e;
        return r.createElement(
          "li",
          { className: "menu__list-item" },
          r.createElement(
            ne,
            (0, l.A)({ className: (0, a.A)("menu__link", t) }, o)
          )
        );
      }
      function oe(e) {
        let { mobile: t = !1, position: n, ...a } = e;
        const o = t ? ae : re;
        return r.createElement(
          o,
          (0, l.A)({}, a, {
            activeClassName:
              a.activeClassName ??
              (t ? "menu__link--active" : "navbar__link--active"),
          })
        );
      }
      var ie = n(1422),
        le = n(9169),
        se = n(4586);
      function ue(e, t) {
        return e.some((e) =>
          (function (e, t) {
            return (
              !!(0, le.ys)(e.to, t) ||
              !!ee(e.activeBaseRegex, t) ||
              !(!e.activeBasePath || !t.startsWith(e.activeBasePath))
            );
          })(e, t)
        );
      }
      function ce(e) {
        let { items: t, position: n, className: o, onClick: i, ...s } = e;
        const u = (0, r.useRef)(null),
          [c, d] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            const e = (e) => {
              u.current && !u.current.contains(e.target) && d(!1);
            };
            return (
              document.addEventListener("mousedown", e),
              document.addEventListener("touchstart", e),
              document.addEventListener("focusin", e),
              () => {
                document.removeEventListener("mousedown", e),
                  document.removeEventListener("touchstart", e),
                  document.removeEventListener("focusin", e);
              }
            );
          }, [u]),
          r.createElement(
            "div",
            {
              ref: u,
              className: (0, a.A)(
                "navbar__item",
                "dropdown",
                "dropdown--hoverable",
                { "dropdown--right": "right" === n, "dropdown--show": c }
              ),
            },
            r.createElement(
              ne,
              (0, l.A)(
                {
                  "aria-haspopup": "true",
                  "aria-expanded": c,
                  role: "button",
                  href: s.to ? void 0 : "#",
                  className: (0, a.A)("navbar__link", o),
                },
                s,
                {
                  onClick: s.to ? void 0 : (e) => e.preventDefault(),
                  onKeyDown: (e) => {
                    "Enter" === e.key && (e.preventDefault(), d(!c));
                  },
                }
              ),
              s.children ?? s.label
            ),
            r.createElement(
              "ul",
              { className: "dropdown__menu" },
              t.map((e, t) =>
                r.createElement(
                  xe,
                  (0, l.A)(
                    {
                      isDropdownItem: !0,
                      activeClassName: "dropdown__link--active",
                    },
                    e,
                    { key: t }
                  )
                )
              )
            )
          )
        );
      }
      function de(e) {
        let { items: t, className: n, position: o, onClick: i, ...u } = e;
        const c = (function () {
            const {
                siteConfig: { baseUrl: e },
              } = (0, se.A)(),
              { pathname: t } = (0, s.zy)();
            return t.replace(e, "/");
          })(),
          d = ue(t, c),
          {
            collapsed: f,
            toggleCollapsed: p,
            setCollapsed: m,
          } = (0, ie.u)({ initialState: () => !d });
        return (
          (0, r.useEffect)(() => {
            d && m(!d);
          }, [c, d, m]),
          r.createElement(
            "li",
            {
              className: (0, a.A)("menu__list-item", {
                "menu__list-item--collapsed": f,
              }),
            },
            r.createElement(
              ne,
              (0, l.A)(
                {
                  role: "button",
                  className: (0, a.A)(
                    "menu__link menu__link--sublist menu__link--sublist-caret",
                    n
                  ),
                },
                u,
                {
                  onClick: (e) => {
                    e.preventDefault(), p();
                  },
                }
              ),
              u.children ?? u.label
            ),
            r.createElement(
              ie.N,
              { lazy: !0, as: "ul", className: "menu__list", collapsed: f },
              t.map((e, t) =>
                r.createElement(
                  xe,
                  (0, l.A)(
                    {
                      mobile: !0,
                      isDropdownItem: !0,
                      onClick: i,
                      activeClassName: "menu__link--active",
                    },
                    e,
                    { key: t }
                  )
                )
              )
            )
          )
        );
      }
      function fe(e) {
        let { mobile: t = !1, ...n } = e;
        const a = t ? de : ce;
        return r.createElement(a, n);
      }
      var pe = n(2131);
      function me(e) {
        let { width: t = 20, height: n = 20, ...a } = e;
        return r.createElement(
          "svg",
          (0, l.A)(
            { viewBox: "0 0 24 24", width: t, height: n, "aria-hidden": !0 },
            a
          ),
          r.createElement("path", {
            fill: "currentColor",
            d: "M12.87 15.07l-2.54-2.51.03-.03c1.74-1.94 2.98-4.17 3.71-6.53H17V4h-7V2H8v2H1v1.99h11.17C11.5 7.92 10.44 9.75 9 11.35 8.07 10.32 7.3 9.19 6.69 8h-2c.73 1.63 1.73 3.17 2.98 4.56l-5.09 5.02L4 19l5-5 3.11 3.11.76-2.04zM18.5 10h-2L12 22h2l1.12-3h4.75L21 22h2l-4.5-12zm-2.62 7l1.62-4.33L19.12 17h-3.24z",
          })
        );
      }
      const ge = "iconLanguage_nlXk";
      var he = n(418);
      const be = { searchBox: "searchBox_ZlJk" };
      function ve(e) {
        let { children: t, className: n } = e;
        return r.createElement(
          "div",
          { className: (0, a.A)(n, be.searchBox) },
          t
        );
      }
      var ye = n(4070),
        we = n(1754);
      var ke = n(5597);
      const Ee = (e) => e.docs.find((t) => t.id === e.mainDocId);
      const Se = {
        default: oe,
        localeDropdown: function (e) {
          let {
            mobile: t,
            dropdownItemsBefore: n,
            dropdownItemsAfter: a,
            ...o
          } = e;
          const {
              i18n: { currentLocale: i, locales: c, localeConfigs: d },
            } = (0, se.A)(),
            f = (0, pe.o)(),
            { search: p, hash: m } = (0, s.zy)(),
            g = [
              ...n,
              ...c.map((e) => {
                const n = `${`pathname://${f.createUrl({
                  locale: e,
                  fullyQualified: !1,
                })}`}${p}${m}`;
                return {
                  label: d[e].label,
                  lang: d[e].htmlLang,
                  to: n,
                  target: "_self",
                  autoAddBaseUrl: !1,
                  className:
                    e === i
                      ? t
                        ? "menu__link--active"
                        : "dropdown__link--active"
                      : "",
                };
              }),
              ...a,
            ],
            h = t
              ? (0, u.T)({
                  message: "Languages",
                  id: "theme.navbar.mobileLanguageDropdown.label",
                  description:
                    "The label for the mobile language switcher dropdown",
                })
              : d[i].label;
          return r.createElement(
            fe,
            (0, l.A)({}, o, {
              mobile: t,
              label: r.createElement(
                r.Fragment,
                null,
                r.createElement(me, { className: ge }),
                h
              ),
              items: g,
            })
          );
        },
        search: function (e) {
          let { mobile: t, className: n } = e;
          return t
            ? null
            : r.createElement(
                ve,
                { className: n },
                r.createElement(he.A, null)
              );
        },
        dropdown: fe,
        html: function (e) {
          let {
            value: t,
            className: n,
            mobile: o = !1,
            isDropdownItem: i = !1,
          } = e;
          const l = i ? "li" : "div";
          return r.createElement(l, {
            className: (0, a.A)(
              { navbar__item: !o && !i, "menu__list-item": o },
              n
            ),
            dangerouslySetInnerHTML: { __html: t },
          });
        },
        doc: function (e) {
          let { docId: t, label: n, docsPluginId: a, ...o } = e;
          const { activeDoc: i } = (0, ye.zK)(a),
            s = (0, we.QB)(t, a);
          return null === s
            ? null
            : r.createElement(
                oe,
                (0, l.A)({ exact: !0 }, o, {
                  isActive: () =>
                    i?.path === s.path ||
                    (!!i?.sidebar && i.sidebar === s.sidebar),
                  label: n ?? s.id,
                  to: s.path,
                })
              );
        },
        docSidebar: function (e) {
          let { sidebarId: t, label: n, docsPluginId: a, ...o } = e;
          const { activeDoc: i } = (0, ye.zK)(a),
            s = (0, we.fW)(t, a).link;
          if (!s)
            throw new Error(
              `DocSidebarNavbarItem: Sidebar with ID "${t}" doesn't have anything to be linked to.`
            );
          return r.createElement(
            oe,
            (0, l.A)({ exact: !0 }, o, {
              isActive: () => i?.sidebar === t,
              label: n ?? s.label,
              to: s.path,
            })
          );
        },
        docsVersion: function (e) {
          let { label: t, to: n, docsPluginId: a, ...o } = e;
          const i = (0, we.Vd)(a)[0],
            s = t ?? i.label,
            u = n ?? ((e) => e.docs.find((t) => t.id === e.mainDocId))(i).path;
          return r.createElement(oe, (0, l.A)({}, o, { label: s, to: u }));
        },
        docsVersionDropdown: function (e) {
          let {
            mobile: t,
            docsPluginId: n,
            dropdownActiveClassDisabled: a,
            dropdownItemsBefore: o,
            dropdownItemsAfter: i,
            ...c
          } = e;
          const { search: d, hash: f } = (0, s.zy)(),
            p = (0, ye.zK)(n),
            m = (0, ye.jh)(n),
            { savePreferredVersionName: g } = (0, ke.g1)(n),
            h = [
              ...o,
              ...m.map((e) => {
                const t = p.alternateDocVersions[e.name] ?? Ee(e);
                return {
                  label: e.label,
                  to: `${t.path}${d}${f}`,
                  isActive: () => e === p.activeVersion,
                  onClick: () => g(e.name),
                };
              }),
              ...i,
            ],
            b = (0, we.Vd)(n)[0],
            v =
              t && h.length > 1
                ? (0, u.T)({
                    id: "theme.navbar.mobileVersionsDropdown.label",
                    message: "Versions",
                    description:
                      "The label for the navbar versions dropdown on mobile view",
                  })
                : b.label,
            y = t && h.length > 1 ? void 0 : Ee(b).path;
          return h.length <= 1
            ? r.createElement(
                oe,
                (0, l.A)({}, c, {
                  mobile: t,
                  label: v,
                  to: y,
                  isActive: a ? () => !1 : void 0,
                })
              )
            : r.createElement(
                fe,
                (0, l.A)({}, c, {
                  mobile: t,
                  label: v,
                  to: y,
                  items: h,
                  isActive: a ? () => !1 : void 0,
                })
              );
        },
      };
      function xe(e) {
        let { type: t, ...n } = e;
        const a = (function (e, t) {
            return e && "default" !== e
              ? e
              : "items" in t
              ? "dropdown"
              : "default";
          })(t, n),
          o = Se[a];
        if (!o)
          throw new Error(`No NavbarItem component found for type "${t}".`);
        return r.createElement(o, n);
      }
      function Te() {
        const e = (0, L.M)(),
          t = (0, w.p)().navbar.items;
        return r.createElement(
          "ul",
          { className: "menu__list" },
          t.map((t, n) =>
            r.createElement(
              xe,
              (0, l.A)({ mobile: !0 }, t, { onClick: () => e.toggle(), key: n })
            )
          )
        );
      }
      function Ae(e) {
        return r.createElement(
          "button",
          (0, l.A)({}, e, {
            type: "button",
            className: "clean-btn navbar-sidebar__back",
          }),
          r.createElement(
            u.A,
            {
              id: "theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",
              description:
                "The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)",
            },
            "\u2190 Back to main menu"
          )
        );
      }
      function Ce() {
        const e = 0 === (0, w.p)().navbar.items.length,
          t = M();
        return r.createElement(
          r.Fragment,
          null,
          !e && r.createElement(Ae, { onClick: () => t.hide() }),
          t.content
        );
      }
      function _e() {
        const e = (0, L.M)();
        var t;
        return (
          void 0 === (t = e.shown) && (t = !0),
          (0, r.useEffect)(
            () => (
              (document.body.style.overflow = t ? "hidden" : "visible"),
              () => {
                document.body.style.overflow = "visible";
              }
            ),
            [t]
          ),
          e.shouldRender
            ? r.createElement(B, {
                header: r.createElement(Q, null),
                primaryMenu: r.createElement(Te, null),
                secondaryMenu: r.createElement(Ce, null),
              })
            : null
        );
      }
      const Le = {
        navbarHideable: "navbarHideable_m1mJ",
        navbarHidden: "navbarHidden_jGov",
      };
      function Re(e) {
        return r.createElement(
          "div",
          (0, l.A)({ role: "presentation" }, e, {
            className: (0, a.A)("navbar-sidebar__backdrop", e.className),
          })
        );
      }
      function Ne(e) {
        let { children: t } = e;
        const {
            navbar: { hideOnScroll: n, style: o },
          } = (0, w.p)(),
          i = (0, L.M)(),
          { navbarRef: l, isNavbarVisible: s } = (function (e) {
            const [t, n] = (0, r.useState)(e),
              a = (0, r.useRef)(!1),
              o = (0, r.useRef)(0),
              i = (0, r.useCallback)((e) => {
                null !== e && (o.current = e.getBoundingClientRect().height);
              }, []);
            return (
              (0, R.Mq)((t, r) => {
                let { scrollY: i } = t;
                if (!e) return;
                if (i < o.current) return void n(!0);
                if (a.current) return void (a.current = !1);
                const l = r?.scrollY,
                  s = document.documentElement.scrollHeight - o.current,
                  u = window.innerHeight;
                l && i >= l ? n(!1) : i + u < s && n(!0);
              }),
              (0, c.$)((t) => {
                if (!e) return;
                const r = t.location.hash;
                if (r ? document.getElementById(r.substring(1)) : void 0)
                  return (a.current = !0), void n(!1);
                n(!0);
              }),
              { navbarRef: i, isNavbarVisible: t }
            );
          })(n);
        return r.createElement(
          "nav",
          {
            ref: l,
            "aria-label": (0, u.T)({
              id: "theme.NavBar.navAriaLabel",
              message: "Main",
              description: "The ARIA label for the main navigation",
            }),
            className: (0, a.A)(
              "navbar",
              "navbar--fixed-top",
              n && [Le.navbarHideable, !s && Le.navbarHidden],
              {
                "navbar--dark": "dark" === o,
                "navbar--primary": "primary" === o,
                "navbar-sidebar--show": i.shown,
              }
            ),
          },
          t,
          r.createElement(Re, { onClick: i.toggle }),
          r.createElement(_e, null)
        );
      }
      var Pe = n(440);
      const Oe = { errorBoundaryError: "errorBoundaryError_a6uf" };
      function De(e) {
        return r.createElement(
          "button",
          (0, l.A)({ type: "button" }, e),
          r.createElement(
            u.A,
            {
              id: "theme.ErrorPageContent.tryAgain",
              description:
                "The label of the button to try again rendering when the React error boundary captures an error",
            },
            "Try again"
          )
        );
      }
      function Ie(e) {
        let { error: t } = e;
        const n = (0, Pe.getErrorCausalChain)(t)
          .map((e) => e.message)
          .join("\n\nCause:\n");
        return r.createElement("p", { className: Oe.errorBoundaryError }, n);
      }
      class Me extends r.Component {
        componentDidCatch(e, t) {
          throw this.props.onError(e, t);
        }
        render() {
          return this.props.children;
        }
      }
      const Be = "right";
      function Fe(e) {
        let { width: t = 30, height: n = 30, className: a, ...o } = e;
        return r.createElement(
          "svg",
          (0, l.A)(
            {
              className: a,
              width: t,
              height: n,
              viewBox: "0 0 30 30",
              "aria-hidden": "true",
            },
            o
          ),
          r.createElement("path", {
            stroke: "currentColor",
            strokeLinecap: "round",
            strokeMiterlimit: "10",
            strokeWidth: "2",
            d: "M4 7h22M4 15h22M4 23h22",
          })
        );
      }
      function je() {
        const { toggle: e, shown: t } = (0, L.M)();
        return r.createElement(
          "button",
          {
            onClick: e,
            "aria-label": (0, u.T)({
              id: "theme.docs.sidebar.toggleSidebarButtonAriaLabel",
              message: "Toggle navigation bar",
              description:
                "The ARIA label for hamburger menu button of mobile navigation",
            }),
            "aria-expanded": t,
            className: "navbar__toggle clean-btn",
            type: "button",
          },
          r.createElement(Fe, null)
        );
      }
      const ze = { colorModeToggle: "colorModeToggle_DEke" };
      function Ue(e) {
        let { items: t } = e;
        return r.createElement(
          r.Fragment,
          null,
          t.map((e, t) =>
            r.createElement(
              Me,
              {
                key: t,
                onError: (t) =>
                  new Error(
                    `A theme navbar item failed to render.\nPlease double-check the following navbar item (themeConfig.navbar.items) of your Docusaurus config:\n${JSON.stringify(
                      e,
                      null,
                      2
                    )}`,
                    { cause: t }
                  ),
              },
              r.createElement(xe, e)
            )
          )
        );
      }
      function $e(e) {
        let { left: t, right: n } = e;
        return r.createElement(
          "div",
          { className: "navbar__inner" },
          r.createElement("div", { className: "navbar__items" }, t),
          r.createElement(
            "div",
            { className: "navbar__items navbar__items--right" },
            n
          )
        );
      }
      function Ge() {
        const e = (0, L.M)(),
          t = (0, w.p)().navbar.items,
          [n, a] = (function (e) {
            function t(e) {
              return "left" === (e.position ?? Be);
            }
            return [e.filter(t), e.filter((e) => !t(e))];
          })(t),
          o = t.find((e) => "search" === e.type);
        return r.createElement($e, {
          left: r.createElement(
            r.Fragment,
            null,
            !e.disabled && r.createElement(je, null),
            r.createElement(K, null),
            r.createElement(Ue, { items: n })
          ),
          right: r.createElement(
            r.Fragment,
            null,
            r.createElement(Ue, { items: a }),
            r.createElement(V, { className: ze.colorModeToggle }),
            !o && r.createElement(ve, null, r.createElement(he.A, null))
          ),
        });
      }
      function qe() {
        return r.createElement(Ne, null, r.createElement(Ge, null));
      }
      function He(e) {
        let { item: t } = e;
        const { to: n, href: a, label: o, prependBaseUrlToHref: i, ...s } = t,
          u = (0, J.A)(n),
          c = (0, J.A)(a, { forcePrependBaseUrl: !0 });
        return r.createElement(
          X.A,
          (0, l.A)(
            { className: "footer__link-item" },
            a ? { href: i ? c : a } : { to: u },
            s
          ),
          o,
          a && !(0, Z.A)(a) && r.createElement(te.A, null)
        );
      }
      function Ve(e) {
        let { item: t } = e;
        return t.html
          ? r.createElement("li", {
              className: "footer__item",
              dangerouslySetInnerHTML: { __html: t.html },
            })
          : r.createElement(
              "li",
              { key: t.href ?? t.to, className: "footer__item" },
              r.createElement(He, { item: t })
            );
      }
      function We(e) {
        let { column: t } = e;
        return r.createElement(
          "div",
          { className: "col footer__col" },
          r.createElement("div", { className: "footer__title" }, t.title),
          r.createElement(
            "ul",
            { className: "footer__items clean-list" },
            t.items.map((e, t) => r.createElement(Ve, { key: t, item: e }))
          )
        );
      }
      function Ke(e) {
        let { columns: t } = e;
        return r.createElement(
          "div",
          { className: "row footer__links" },
          t.map((e, t) => r.createElement(We, { key: t, column: e }))
        );
      }
      function Ye() {
        return r.createElement(
          "span",
          { className: "footer__link-separator" },
          "\xb7"
        );
      }
      function Qe(e) {
        let { item: t } = e;
        return t.html
          ? r.createElement("span", {
              className: "footer__link-item",
              dangerouslySetInnerHTML: { __html: t.html },
            })
          : r.createElement(He, { item: t });
      }
      function Xe(e) {
        let { links: t } = e;
        return r.createElement(
          "div",
          { className: "footer__links text--center" },
          r.createElement(
            "div",
            { className: "footer__links" },
            t.map((e, n) =>
              r.createElement(
                r.Fragment,
                { key: n },
                r.createElement(Qe, { item: e }),
                t.length !== n + 1 && r.createElement(Ye, null)
              )
            )
          )
        );
      }
      function Je(e) {
        let { links: t } = e;
        return (function (e) {
          return "title" in e[0];
        })(t)
          ? r.createElement(Ke, { columns: t })
          : r.createElement(Xe, { links: t });
      }
      var Ze = n(1653);
      const et = "footerLogoLink_BH7S";
      function tt(e) {
        let { logo: t } = e;
        const { withBaseUrl: n } = (0, J.h)(),
          o = { light: n(t.src), dark: n(t.srcDark ?? t.src) };
        return r.createElement(Ze.A, {
          className: (0, a.A)("footer__logo", t.className),
          alt: t.alt,
          sources: o,
          width: t.width,
          height: t.height,
          style: t.style,
        });
      }
      function nt(e) {
        let { logo: t } = e;
        return t.href
          ? r.createElement(
              X.A,
              { href: t.href, className: et, target: t.target },
              r.createElement(tt, { logo: t })
            )
          : r.createElement(tt, { logo: t });
      }
      function rt(e) {
        let { copyright: t } = e;
        return r.createElement("div", {
          className: "footer__copyright",
          dangerouslySetInnerHTML: { __html: t },
        });
      }
      function at(e) {
        let { style: t, links: n, logo: o, copyright: i } = e;
        return r.createElement(
          "footer",
          { className: (0, a.A)("footer", { "footer--dark": "dark" === t }) },
          r.createElement(
            "div",
            { className: "container container-fluid" },
            n,
            (o || i) &&
              r.createElement(
                "div",
                { className: "footer__bottom text--center" },
                o &&
                  r.createElement("div", { className: "margin-bottom--sm" }, o),
                i
              )
          )
        );
      }
      function ot() {
        const { footer: e } = (0, w.p)();
        if (!e) return null;
        const { copyright: t, links: n, logo: a, style: o } = e;
        return r.createElement(at, {
          style: o,
          links: n && n.length > 0 && r.createElement(Je, { links: n }),
          logo: a && r.createElement(nt, { logo: a }),
          copyright: t && r.createElement(rt, { copyright: t }),
        });
      }
      const it = r.memo(ot),
        lt = (0, N.fM)([
          F.a,
          k.oq,
          R.Tv,
          ke.VQ,
          i.Jx,
          function (e) {
            let { children: t } = e;
            return r.createElement(
              P.y_,
              null,
              r.createElement(L.e, null, r.createElement(D, null, t))
            );
          },
        ]);
      function st(e) {
        let { children: t } = e;
        return r.createElement(lt, null, t);
      }
      function ut(e) {
        let { error: t, tryAgain: n } = e;
        return r.createElement(
          "main",
          { className: "container margin-vert--xl" },
          r.createElement(
            "div",
            { className: "row" },
            r.createElement(
              "div",
              { className: "col col--6 col--offset-3" },
              r.createElement(
                "h1",
                { className: "hero__title" },
                r.createElement(
                  u.A,
                  {
                    id: "theme.ErrorPageContent.title",
                    description:
                      "The title of the fallback page when the page crashed",
                  },
                  "This page crashed."
                )
              ),
              r.createElement(
                "div",
                { className: "margin-vert--lg" },
                r.createElement(De, {
                  onClick: n,
                  className: "button button--primary shadow--lw",
                })
              ),
              r.createElement("hr", null),
              r.createElement(
                "div",
                { className: "margin-vert--md" },
                r.createElement(Ie, { error: t })
              )
            )
          )
        );
      }
      const ct = { mainWrapper: "mainWrapper_z2l0" };
      function dt(e) {
        const {
          children: t,
          noFooter: n,
          wrapperClassName: l,
          title: s,
          description: u,
        } = e;
        return (
          (0, b.J)(),
          r.createElement(
            st,
            null,
            r.createElement(i.be, { title: s, description: u }),
            r.createElement(y, null),
            r.createElement(_, null),
            r.createElement(qe, null),
            r.createElement(
              "div",
              {
                id: d,
                className: (0, a.A)(h.G.wrapper.main, ct.mainWrapper, l),
              },
              r.createElement(
                o.A,
                { fallback: (e) => r.createElement(ut, e) },
                t
              )
            ),
            !n && r.createElement(it, null)
          )
        );
      }
    },
    9466: (e, t, n) => {
      "use strict";
      n.d(t, { Wf: () => s });
      n(6540), n(9888);
      const r = "localStorage";
      function a(e) {
        let { key: t, oldValue: n, newValue: r, storage: a } = e;
        if (n === r) return;
        const o = document.createEvent("StorageEvent");
        o.initStorageEvent("storage", !1, !1, t, n, r, window.location.href, a),
          window.dispatchEvent(o);
      }
      function o(e) {
        if ((void 0 === e && (e = r), "undefined" == typeof window))
          throw new Error(
            "Browser storage is not available on Node.js/Docusaurus SSR process."
          );
        if ("none" === e) return null;
        try {
          return window[e];
        } catch (n) {
          return (
            (t = n),
            i ||
              (console.warn(
                "Docusaurus browser storage is not available.\nPossible reasons: running Docusaurus in an iframe, in an incognito browser session, or using too strict browser privacy settings.",
                t
              ),
              (i = !0)),
            null
          );
        }
        var t;
      }
      let i = !1;
      const l = {
        get: () => null,
        set: () => {},
        del: () => {},
        listen: () => () => {},
      };
      function s(e, t) {
        if ("undefined" == typeof window)
          return (function (e) {
            function t() {
              throw new Error(
                `Illegal storage API usage for storage key "${e}".\nDocusaurus storage APIs are not supposed to be called on the server-rendering process.\nPlease only call storage APIs in effects and event handlers.`
              );
            }
            return { get: t, set: t, del: t, listen: t };
          })(e);
        const n = o(t?.persistence);
        return null === n
          ? l
          : {
              get: () => {
                try {
                  return n.getItem(e);
                } catch (t) {
                  return (
                    console.error(
                      `Docusaurus storage error, can't get key=${e}`,
                      t
                    ),
                    null
                  );
                }
              },
              set: (t) => {
                try {
                  const r = n.getItem(e);
                  n.setItem(e, t),
                    a({ key: e, oldValue: r, newValue: t, storage: n });
                } catch (r) {
                  console.error(
                    `Docusaurus storage error, can't set ${e}=${t}`,
                    r
                  );
                }
              },
              del: () => {
                try {
                  const t = n.getItem(e);
                  n.removeItem(e),
                    a({ key: e, oldValue: t, newValue: null, storage: n });
                } catch (t) {
                  console.error(
                    `Docusaurus storage error, can't delete key=${e}`,
                    t
                  );
                }
              },
              listen: (t) => {
                try {
                  const r = (r) => {
                    r.storageArea === n && r.key === e && t(r);
                  };
                  return (
                    window.addEventListener("storage", r),
                    () => window.removeEventListener("storage", r)
                  );
                } catch (r) {
                  return (
                    console.error(
                      `Docusaurus storage error, can't listen for changes of key=${e}`,
                      r
                    ),
                    () => {}
                  );
                }
              },
            };
      }
    },
    9532: (e, t, n) => {
      "use strict";
      n.d(t, {
        Be: () => s,
        ZC: () => i,
        _q: () => o,
        dV: () => l,
        fM: () => u,
      });
      var r = n(6540);
      const a = n(8193).A.canUseDOM ? r.useLayoutEffect : r.useEffect;
      function o(e) {
        const t = (0, r.useRef)(e);
        return (
          a(() => {
            t.current = e;
          }, [e]),
          (0, r.useCallback)(function () {
            return t.current(...arguments);
          }, [])
        );
      }
      function i(e) {
        const t = (0, r.useRef)();
        return (
          a(() => {
            t.current = e;
          }),
          t.current
        );
      }
      class l extends Error {
        constructor(e, t) {
          super(),
            (this.name = "ReactContextError"),
            (this.message = `Hook ${
              this.stack?.split("\n")[1]?.match(/at (?:\w+\.)?(?<name>\w+)/)
                ?.groups.name ?? ""
            } is called outside the <${e}>. ${t ?? ""}`);
        }
      }
      function s(e) {
        const t = Object.entries(e);
        return (
          t.sort((e, t) => e[0].localeCompare(t[0])),
          (0, r.useMemo)(() => e, t.flat())
        );
      }
      function u(e) {
        return (t) => {
          let { children: n } = t;
          return r.createElement(
            r.Fragment,
            null,
            e.reduceRight((e, t) => r.createElement(t, null, e), n)
          );
        };
      }
    },
    9876: (e, t, n) => {
      "use strict";
      n.d(t, { e: () => f, M: () => p });
      var r = n(6540),
        a = n(5600),
        o = n(4581),
        i = n(6347),
        l = (n(9888), n(9532));
      function s(e) {
        !(function (e) {
          const t = (0, i.W6)(),
            n = (0, l._q)(e);
          (0, r.useEffect)(() => t.block((e, t) => n(e, t)), [t, n]);
        })((t, n) => {
          if ("POP" === n) return e(t, n);
        });
      }
      var u = n(6342);
      const c = r.createContext(void 0);
      function d() {
        const e = (function () {
            const e = (0, a.YL)(),
              { items: t } = (0, u.p)().navbar;
            return 0 === t.length && !e.component;
          })(),
          t = (0, o.l)(),
          n = !e && "mobile" === t,
          [i, l] = (0, r.useState)(!1);
        s(() => {
          if (i) return l(!1), !1;
        });
        const c = (0, r.useCallback)(() => {
          l((e) => !e);
        }, []);
        return (
          (0, r.useEffect)(() => {
            "desktop" === t && l(!1);
          }, [t]),
          (0, r.useMemo)(
            () => ({ disabled: e, shouldRender: n, toggle: c, shown: i }),
            [e, n, c, i]
          )
        );
      }
      function f(e) {
        let { children: t } = e;
        const n = d();
        return r.createElement(c.Provider, { value: n }, t);
      }
      function p() {
        const e = r.useContext(c);
        if (void 0 === e) throw new l.dV("NavbarMobileSidebarProvider");
        return e;
      }
    },
    9888: (e, t, n) => {
      "use strict";
      n(8493);
    },
    9982: (e, t, n) => {
      "use strict";
      e.exports = n(7463);
    },
  },
  (e) => {
    e.O(0, [250], () => {
      return (t = 8536), e((e.s = t));
      var t;
    });
    e.O();
  },
]);
