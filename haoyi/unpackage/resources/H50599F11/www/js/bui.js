/* @preserve 
 * @name: BUI v1.5.2  
 * @detail: BUI 是一个免费的UI交互框架, 用于快速定制开发WebApp,微信,混合移动应用(Bingotouch,Link,Dcloud,Apicloud,Appcan等).
 * @site: http://www.easybui.com/ 
 * Copyright © 2016-2019 BUI. All Rights Reserved. 
 */
! function(e, t) {
	"object" == typeof exports && "undefined" != typeof module ? t() : "function" == typeof define && define.amd ? define(
		t) : t()
}(0, function() {
	"use strict";

	function e(e, t) {
		return t = {
			exports: {}
		}, e(t, t.exports), t.exports
	}
	window.libs = window.Zepto || window.jQuery || {}, window.bui = {}, window.router = {},
		function(e) {
			e.debug = !0, e.hasRouter = !1, e.isWebapp, e.currentPlatform = "", e.log = !0, e.trace = !1, e.native = {}, e.config = {},
				e.config.namespace = "bui", e.config.classNamePrefix = e.config.namespace + "-", e.config.version = "1.5.2", e.config
				.versionCode = 20190401, e.version = e.config.version, e.versionCode = e.config.versionCode, e.config.viewport = {
					zoom: !0,
					create: !0
				}, e.config.init = {
					auto: !0
				}, e.config.ready = {}, e.config.ajax = {}, e.config.back = {}, e.config.load = {}, e.config.getPageParams = {}, e
				.config.refresh = {}, e.config.run = {}, e.config.checkVersion = {}, e.config.dialog = {}, e.config.confirm = {},
				e.config.alert = {}, e.config.hint = {}, e.config.prompt = {}, e.config.loading = {}, e.config.mask = {}, e.config
				.list = {}, e.config.listview = {}, e.config.scroll = {}, e.config.pullrefresh = {}, e.config.select = {}, e.config
				.sidebar = {}, e.config.slide = {}, e.config.actionsheet = {}, e.config.dropdown = {}, e.config.accordion = {}, e.config
				.stepbar = {}, e.config.rating = {}, e.config.number = {}, e.config.file = {}, e.config.fileselect = {}, e.config.upload = {},
				e.config.download = {}, e.config.swipe = {}, e.config.router = {}, e.config.loader = {}, e.config.store = {}
		}(window.bui);
	var t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
			return typeof e
		} : function(e) {
			return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		},
		n = function(e) {
			if (Array.isArray(e)) {
				for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t];
				return n
			}
			return Array.from(e)
		};
	! function(e, n) {
		e.prefix = function(t) {
			return e.config.classNamePrefix + t
		}, e.showLog = function(n, i) {
			i = i || "";
			var a = "";
			"object" == (void 0 === n ? "undefined" : t(n)) && "message" in n && "name" in n ? a = n.message + ":" + n.name +
				"&&stack:" + n.stack : "string" == typeof n && (a = n), e.log && console.error(i + " " + a), e.trace && console.trace &&
				console.trace()
		}, e.guid = function(e) {
			function t() {
				return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
			}
			return (e = void 0 === e ? "bui" : e || "") + t().substr(e.length) + t() + "-" + t() + "-" + t() + "-" + t() + "-" +
				t() + t() + t()
		}, e.swipeDirection = function(e, t, n, i) {
			var a = t - e,
				o = i - n,
				r = Math.abs(a),
				l = Math.abs(o);
			return !(r < 9 && l < 9) && (r / l > 3 ? a > 0 ? "swiperight" : "swipeleft" : o > 0 ? "swipedown" : "swipeup")
		}, e.obj = function(i, a) {
			var o = null;
			a = a || null;
			var r = e.hasRouter ? router.currentPage() || "body" : "body";
			r = a || r;
			var l = n(r),
				c = /^(\d)/,
				s = /^[a-zA-z]/,
				u = /^\[.+\]$/,
				d = /^#\d/,
				f = /^\.\d/,
				h = "string" == typeof i,
				p =
				/^(html|head|body|header|main|footer|ul|li|section|dt|dd|div|span|img|article|i|strong|input|textarea|select|h1|h2|h3|h4|h5|h6|p)$/gi;
			if ("object" === (void 0 === i ? "undefined" : t(i))) return o = n(i);
			if (h && c.test(i)) return o = l.find("[id='" + i + "']");
			if (h && s.test(i)) {
				var g = p.test(i) || u.test(i) ? i : "#" + i;
				return o = l.find(g)
			}
			return d.test(i) ? o = l.find("[id='" + i.substr(1) + "']") : f.test(i) ? o = l.find("[class='" + i.substr(1) +
				"']") : i && (o = l.find(i)), o
		}, e.objId = function(t) {
			return e.obj(t, "html")
		}, e.selector = function(e) {
			return void 0 === e ? this : n(e, this)
		}, e.widget = function(e) {
			return e && e in this ? this[e] : this
		}, e.option = function(t, i) {
			if ("object" !== e.typeof(t) && void 0 === i) return "string" == typeof t ? this.config[t] : this.config;
			if ("id" == t) return e.showLog("不允许修改控件的ID参数"), this;
			if (t && "object" === e.typeof(t)) {
				var a = n.extend(this.config, t);
				return this.init(a)
			}
			if (this.config.hasOwnProperty(t)) {
				var o = {};
				o[t] = i;
				var a = n.extend(this.config, o);
				return this.init(a)
			}
			return this
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.emitter = function() {
			function n() {
				this.handle = Object.create(null)
			}
			return n.prototype.on = function(e, t, n) {
					return "function" == typeof t ? (n = t, t = this) : (n = n, t = t || this), t.handle = t.handle || {}, (e && e.indexOf(
						",") > -1 ? e.split(",") : [e]).forEach(function(e, i) {
						void 0 === t.handle[e] && (t.handle[e] = []), t.handle[e].push(n)
					}), t
				}, n.prototype.off = function(n, i, a) {
					if ("function" == typeof i ? (a = i, i = this) : "function" == typeof a ? (a = a, i = i || this) : i = this,
						"undefined" === n) i.handle = {};
					else if ("string" == typeof n && "function" == typeof a) {
						var o = i.handle[n] || [];
						e.array.remove(o, a)
					} else "string" == typeof n && ("object" !== t(i.handle) && (i.handle = {}), i.handle[n] = []);
					return i
				}, n.prototype.one = function(e, t) {
					function n() {
						t && t.apply(i, arguments), i.off(e, n)
					}
					var i = this;
					return this.on(e, n), this
				}, n.prototype.trigger = function(e) {
					try {
						if (this.handle[arguments[0]] instanceof Array) {
							var t = this.handle[arguments[0]],
								n = [].slice.apply(arguments);
							n.shift();
							for (var i = 0, a = t.length; i < a; i++) t[i] && t[i].apply(this.self || this, n)
						}
					} catch (e) {}
					return this
				}, n.prototype.notify = function() {
					try {
						for (var e in this.handle)
							if (this.handle[e] instanceof Array)
								for (var t = this.handle[e], n = 0, i = t.length; n < i; n++) t[n] && t[n].apply(this.self || this)
					} catch (e) {}
					return this
				},
				function(e) {
					return new n
				}
		}();
		var i = bui.emitter();
		e.on = i.on, e.off = i.off, e.trigger = i.trigger, e.one = i.one
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.store = function(i) {
			function a() {
				xe = e.hasRouter ? router.$ : n, ke = "object" === t(ae.el) ? n(ae.el) : xe(ae.el), Ie = ke && ke.parent(), Te =
					ke && ke.children(), Re.$el = ke, Re.$parent = Ie, Re.$children = Te, te.call(Re, "beforemount"), ae.beforeMount &&
					ae.beforeMount.call(Re), U(oe), se && f(), de && l(), le && d(), r(), fe ? ae.needCompile && router && router.on(
						"complete",
						function(e) {
							ae.needCompile && h(), ge = !1, ve = !0, je && ae.mounted && ae.mounted.call(Re, e), te.call(Re, "mounted", e),
								je = !1
						}) : (je || ee(), pe && o(), ae.needCompile && h(), ae.mounted && ae.mounted.call(Re), ge = !1, ve = !0, te.call(
						Re, "mounted"), je = !1)
			}

			function o() {
				var e = ke.html();
				return e = p(e), ke.html(e), this
			}

			function r() {
				for (var e in oe) ! function(e) {
					Object.defineProperty(Re, e, {
						configurable: !0,
						get: function() {
							return Le && console.log("1. module getting " + e, Ce), !ge && ve ? (ge = !0, ve = !1, Ce = []) : (ge = !1,
								ve = !1), oe[e]
						},
						set: function(t) {
							Le && console.log("2. module setting " + e, Ce), Ce = [], oe[e] = t, Se[e] = t
						}
					})
				}(e)
			}

			function l() {
				Object.keys(de).forEach(function(e, t) {
					u(e, de[e])
				})
			}

			function c(t) {
				return Q("nexttick", function(n) {
					try {
						t && t.call(Re, n)
					} catch (n) {
						e.showLog(n)
					}
				}), this
			}

			function s(t, n) {
				var i = "nexttick-" + t;
				return me.hasOwnProperty(i) ? this : (Q("nexttick", function(i) {
					if (i.keyname === t) try {
						n && n.call(Re, i)
					} catch (i) {
						e.showLog(i)
					}
				}), me[i] = n, this)
			}

			function u(t, n) {
				return Q(t, function(t) {
					var i = [t.value, t.preValue || "", t];
					if ("init" !== t.action) {
						var a = n;
						try {
							switch (e.typeof(a)) {
								case "function":
									a.apply(Re, i);
									break;
								case "array":
									a.forEach(function(e, t) {
										e.apply(Re, i)
									});
									break;
								case "string":
									new Function(a + "(" + t.value + "," + (t.preValue || "") + ")")();
									break;
								default:
									a.apply(Re, i)
							}
						} catch (t) {
							e.showLog(t)
						}
					}
				}), this
			}

			function d() {
				Object.keys(le).forEach(function(t) {
					try {
						if (oe.hasOwnProperty(t)) return void e.showLog("不能跟data的键值相同:" + t);
						var n = le[t];
						Object.defineProperty(Re, t, {
							get: function() {
								var e, i = "function" == typeof n ? n.bind(this) : n.get.bind(this);
								return ye.target = function() {
									var e = i();
									te(t, {
										target: null,
										value: e,
										action: "set",
										keyname: t,
										param: [],
										origin: Se
									}), Ce = []
								}, e = i(), ye.target = null, Ce = [], e
							},
							set: n && "object" === e.typeof(n) ? n.set || function() {} : function() {}
						})
					} catch (e) {}
				})
			}

			function f() {
				Object.keys(se).forEach(function(t) {
					try {
						if (oe.hasOwnProperty(t)) return void e.showLog("不能跟data的键值相同:" + t);
						Object.defineProperty(Re, t, {
							get: function() {
								return se[t].bind(this)
							},
							set: function() {}
						})
					} catch (e) {}
				})
			}

			function h(t) {
				var n = void 0 !== t ? xe(t) : ke;
				try {
					k(n), v(n), Oe || (b(n), y(n), w(n), Oe = !0), Ce = []
				} catch (t) {
					e.showLog(t)
				}
			}

			function p(t) {
				var i = this,
					a = t || "",
					o = new RegExp("{{[\\s]?" + re + ce + "(.*?)}}", "mg");
				return a = a.replace(o, function(t, a) {
					var o = a.split(re + ce);
					"" === n.trim(o[0]) && o.shift();
					var r = o.length > 0 && e.unit.getKeyValue(o.join("."), Se) || "";
					return "function" == typeof r ? r.call(i) : r
				})
			}

			function g(t, n) {
				var i = void 0;
				if (t in Fe) i = Fe[t];
				else {
					if (void 0 === (i = e.unit.getKeyValue(t, n))) return void(Le && console.warn("请检查 " + t + " 在bui.store scope:" +
						re + " 中有没有声明定义"));
					Fe[t] = i
				}
				return i
			}

			function v(t) {
				var n = t,
					i = [],
					a = n.html() || "",
					o = a.match(Ne) || [],
					r = e.array.uniq(o);
				r.length && r.forEach(function(t, a) {
					var o = n.find("[" + t + "*=" + re + "]");
					o.length && o.each(function(n, a) {
						var o = this,
							r = "",
							l = H.call(this, "" + t),
							c = l[0] && l[0].keyname || "",
							s = c.indexOf(".length"),
							u = s > -1 ? c.substr(0, s) : c,
							d = l[0] && l[0].param;
						g(u, Re);
						var f = H.call(this, "b-linked");
						if (f.length && f.forEach(function(t, n) {
								Q(t.keyname, function(t) {
									te(c, {
										target: null,
										value: e.unit.getKeyValue(c, Re),
										action: "set",
										keyname: c,
										param: d,
										origin: Se
									})
								})
							}), "b-show" === t) switch (l[0] && l[0].rule) {
							case "!":
								r = "b-hide";
								break;
							default:
								r = "b-show"
						} else r = t;
						if (fe) {
							var h = e.array.compare(De[r], u);
							!h && De[r].push(u), !h && Q(u, Pe[r].bind(o))
						} else Q(u, Pe[r].bind(o));
						e.array.compare(i, u) || i.push(u), Ce = [], ge = !1, ve = !0
					})
				}), m(i)
			}

			function m(t) {
				t.forEach(function(t, n) {
					te(t, {
						target: null,
						action: "init",
						value: e.unit.getKeyValue(t, Re),
						param: null,
						keyname: t,
						origin: Se
					}), Ce = []
				})
			}

			function b(t) {
				function i(t) {
					var n = t.target.value,
						i = H.call(this, "b-model"),
						a = i[0].keyname;
					e.unit.setKeyValue(a, n, oe), e.unit.setKeyValue(a, n, Se), Ce = [], t.stopPropagation()
				}

				function a(t) {
					var n = this.getAttribute("value") || this.checked,
						i = this.getAttribute("type"),
						a = H.call(this, "b-model"),
						o = a[0].keyname,
						r = null;
					switch (r = g(o, Re), i) {
						case "checkbox":
							this.checked && (r && "array" === e.typeof(r) ? !e.array.compare(r, n) && r.push(n) : _(o, n), this.checked = !
								0), this.checked || (r && "array" === e.typeof(r) ? e.array.remove(r, n) : _(o, n), this.checked = !1);
							break;
						case "radio":
						default:
							e.unit.setKeyValue(o, n, oe), e.unit.setKeyValue(o, n, Se)
					}
					Ce = [], t.stopPropagation()
				}

				function o(t) {
					var i = n(this).val(),
						a = (this.selectedIndex, this.multiple),
						o = H.call(this, "b-model"),
						r = o[0].keyname,
						l = null;
					switch (l = g(r, Re), a) {
						case !0:
							"array" !== e.typeof(l) && e.showLog(r + "的类型必须为数组"), i.splice(0, 0, 0, i.length + 1), l.splice.apply(l, i);
							break;
						default:
							e.unit.setKeyValue(r, i, oe), e.unit.setKeyValue(r, i, Se)
					}
					Ce = [], t.stopPropagation()
				}
				var r = t,
					l = '[type="text"][b-model*=' + re + '],\n                                [type="search"][b-model*=' + re +
					'],\n                                [type="password"][b-model*=' + re +
					'],\n                                [type="url"][b-model*=' + re +
					'],\n                                [type="number"][b-model*=' + re +
					'],\n                                [type="email"][b-model*=' + re +
					'],\n                                [type="range"][b-model*=' + re +
					"],\n                                textarea[b-model*=" + re + "]";
				r.on(he, l, i);
				var c = '[type="checkbox"][b-model*=' + re + '],\n                                [type="radio"][b-model*=' + re +
					"]";
				r.on("change", c, a);
				var s = "select[b-model*=" + re + "]";
				r.on("change", s, o)
			}

			function w(t) {
				t.on("change", "[b-checked*=" + re + "]", function(t) {
					var n = this.checked,
						i = H.call(this, "b-checked"),
						a = i[0].keyname;
					e.unit.setKeyValue(a, n, oe), e.unit.setKeyValue(a, n, Se), Ce = [], t.stopPropagation()
				})
			}

			function y(e) {
				var t = e;
				t.on("click", "[b-click*=" + re + "]", function(e) {
					x.call(this, e, "b-click")
				}), t.find("[b-touchstart*=" + re + "]").length && t.on("touchstart", "[b-touchstart*=" + re + "]", function(e) {
					x.call(this, e, "b-touchstart")
				}), t.find("[b-touchmove*=" + re + "]").length && t.on("touchmove", "[b-touchmove*=" + re + "]", function(e) {
					x.call(this, e, "b-touchmove")
				}), t.find("[b-touchend*=" + re + "]").length && t.on("touchend", "[b-touchend*=" + re + "]", function(e) {
					x.call(this, e, "b-touchend")
				}), t.find("[b-focus*=" + re + "]").length && t.on("focus", "[b-focus*=" + re + "]", function(e) {
					x.call(this, e, "b-focus")
				}), t.find("[b-blur*=" + re + "]").length && t.on("blur", "[b-blur*=" + re + "]", function(e) {
					x.call(this, e, "b-blur")
				})
			}

			function x(t, n) {
				var i = H.call(this, n),
					a = i[0].keyname,
					o = i[0].param,
					r = null;
				o.push(t);
				try {
					r = g(a, Re), "function" == typeof r && r.apply(Re, o), Ce = []
				} catch (t) {
					e.showLog(t)
				}
				te(a, {
					target: this,
					value: r,
					action: "set",
					keyname: a,
					param: o,
					origin: Se
				})
			}

			function k(t) {
				var n = t,
					i = n.find("[b-template*=" + re + "]"),
					a = [];
				if (i.length) try {
					i.each(function(t, n) {
						var i = this,
							o = xe(i),
							r = H.call(this, "b-template"),
							l = r[0].keyname,
							c = r[0].param,
							s = re + ce;
						if (!c[0]) return void console.error('b-template 需要传数据源, 格式为: b-template="page.template(page.sources)"');
						var u = c[0].replace(new RegExp(s), ""),
							d = o.attr("b-command"),
							f = d || "html",
							h = o.attr("b-children");
						g(u, Re);
						fe && ee(u), Q(u, function(t) {
							var n, i = t.param;
							switch (t.action) {
								case "push":
								case "unshift":
									n = i;
									break;
								case "splice":
									n = i.slice(2) || "";
									break;
								default:
									n = t.value
							}
							if (l in ue) {
								c[0] = n;
								var a = void 0 !== n && "undefined" !== n && ue[l] && ue[l].apply(Re, c) || "";
								fe && (o = xe('[b-template*="' + (s + u) + '"]'));
								var r = h ? o.children(h) : o.children();
								switch (t.action) {
									case "push":
										o.append(a);
										break;
									case "unshift":
										o.prepend(a);
										break;
									case "pop":
										var d = r.length - 1;
										r.eq(d).remove();
										break;
									case "shift":
										r.eq(0).remove();
										break;
									case "length":
										break;
									case "splice":
										var p = parseInt(i[0]),
											g = parseInt(i[1]),
											v = r.length,
											m = v > 0;
										if (0 == g) m && v - 1 >= p ? r.eq(p).before(a) : o.append(a);
										else if (g > 0) {
											void 0 !== i[2] && (m && v - 1 >= p ? r.eq(p).before(a) : o.append(a));
											for (var b = 0; b < i[1]; b++) r.eq(p + b).remove()
										}
										break;
									case "reverse":
									case "sort":
										o.html(a);
										break;
									default:
										o[f](a)
								}
								te.call(Re, "nexttick", t)
							} else e.showLog("找不到对应的模板,请检查下 scope:" + re + " 的templates是否存在" + l, "bui.store")
						}), e.array.compare(a, u) || a.push(u), Ce = []
					}), m(a)
				} catch (t) {
					e.showLog(t)
				}
			}

			function I(t) {
				var n = T.call(this, t, "b-text"),
					i = "",
					a = e.typeof(t.value),
					o = n.attr("b-text"),
					r = H.call(this, "b-text"),
					l = (r[0].keyname, r[0].param);
				switch (a) {
					case "array":
						i = C(t, o);
						break;
					case "function":
						i = t.value.apply(Re, l);
						break;
					default:
						i = t.value
				}
				n.text(i), Ce = []
			}

			function T(e, t) {
				var i = re + ce + e.keyname;
				return fe ? n("[" + t + '="' + i + '"]') : xe(this)
			}

			function C(e, t) {
				return t.indexOf(".length") > -1 ? e.value.length || 0 : e.value instanceof Array ? e.value.join(",") : e.value
			}

			function O(t) {
				var n = T.call(this, t, "b-html"),
					i = "",
					a = e.typeof(t.value),
					o = n.attr("b-html"),
					r = H.call(this, "b-html"),
					l = (r[0].keyname, r[0].param);
				switch (a) {
					case "array":
						i = C(t, o);
						break;
					case "function":
						i = t.value.apply(Re, l);
						break;
					default:
						i = t.value
				}
				n.html(i), Ce = []
			}

			function j(e) {
				var t = T.call(this, e, "b-value");
				fe ? t.each(function(t, n) {
					S.call(this, e)
				}) : S.call(t[0], e), Ce = []
			}

			function S(t) {
				var n = this.getAttribute("type"),
					i = this.value,
					a = this,
					o = this.getAttribute("b-value");
				switch (n) {
					case "radio":
						i == t.value ? this.checked = !0 : this.checked = !1;
						break;
					case "checkbox":
						"array" === e.typeof(t.value) && t.value.forEach(function(e, t) {
							i == e && (a.checked = !0)
						});
						break;
					default:
						this.value = C(t, o)
				}
			}

			function E(e) {
				var t = T.call(this, e, "b-model");
				fe ? t.each(function(t, n) {
					L.call(this, e)
				}) : L.call(t[0], e)
			}

			function L(e) {
				var t = this.getAttribute("type"),
					i = this.value,
					a = (e.param, this);
				if ("SELECT" === this.nodeName && this.multiple) return void(e.value.length > 1 ? e.value.forEach(function(e, t) {
					"string" == typeof e ? n(a).find("option[value=" + e + "]").attr("selected", !0) : n(a).find("option[value=" +
						e.value + "]").attr("selected", !0)
				}) : this.value = e.value[0]);
				switch (t) {
					case "radio":
						i == e.value ? this.checked = !0 : this.checked = !1;
						break;
					case "checkbox":
						if (i && e.value instanceof Array) switch (e.action) {
							case "push":
							case "unshift":
								e.param.filter(function(e, t) {
									if (i === e) return void(a.checked = !0)
								});
								break;
							case "pop":
							case "shift":
								e.param.filter(function(e, t) {
									i === e && (a.checked = !1)
								});
								break;
							case "splice":
								var o = e.param,
									r = parseInt(o[1]),
									l = o.slice(2);
								0 == r ? l.filter(function(e, t) {
									i === e && (a.checked = !0)
								}) : r > 0 && (void 0 !== o[2] && l.filter(function(e, t) {
									i === e && (a.checked = !0)
								}), e.param.filter(function(e, t) {
									i === e && (a.checked = !1)
								}));
								break;
							case "length":
								break;
							default:
								e.value.filter(function(e, t) {
									i == e && (a.checked = !0)
								})
						} else e.value ? this.checked = !0 : this.checked = !1;
						break;
					default:
						this.value = e.value
				}
				Ce = []
			}

			function N(e) {
				var t = T.call(this, e, "b-show"),
					i = n(this)[0].style.display || t.css("display"),
					a = t.attr("class") || "",
					o = a.indexOf("bui-box") > -1 || i.indexOf("flex") > -1 || i.indexOf("box") > -1;
				e.value ? o ? t.css("display", "-webkit-box") : t.css("display", "block") : t.css("display", "none"), Ce = []
			}

			function P(e) {
				var t = "!" + re + ce + e.keyname,
					i = fe ? n('[b-show="' + t + '"]') : xe(this);
				e.value ? i.css("display", "none") : i.css("display", "block")
			}

			function D(e) {
				this.checked = !!e.value, Ce = []
			}

			function F(e) {
				var n = T.call(this, e, "b-bind"),
					i = this,
					a = e.keyname,
					o = e.value;
				if ("object" === (void 0 === o ? "undefined" : t(o))) {
					for (var r in o) ! function(t) {
						Q(a + "." + t, function(n) {
							R(T.call(i, e, "b-bind"), t, n.value)
						}), R(n, t, o[t])
					}(r)
				} else {
					var l = "string" == typeof a && a.split(".");
					R(n, l[l.length - 1], o)
				}
			}

			function R(e, n, i) {
				switch (n) {
					case "disabled":
						i ? e.attr(n, i) : e.removeAttr(n);
						break;
					case "checked":
						e.prop(n, i);
						break;
					default:
						var a = "object" === (void 0 === i ? "undefined" : t(i)) ? JSON.stringify(i) : i;
						e.attr(n, a)
				}
				Ce = []
			}

			function B(e) {
				var t = T.call(this, e, "b-src");
				t.attr("src", e.value), Ce = []
			}

			function A(e) {
				var t = T.call(this, e, "b-href");
				t.attr("href", e.value), Ce = []
			}

			function M(e) {
				var n = T.call(this, e, "b-style"),
					i = this;
				if ("object" === t(e.value)) {
					for (var a in e.value) ! function(t) {
						Q(e.keyname + "." + t, function(n) {
							T.call(i, e, "b-style").css(t, n.value)
						}), n.css(e.value)
					}(a)
				} else n.css(e.keyname, e.value);
				Ce = []
			}

			function z(n) {
				var i = T.call(this, n, "b-class"),
					a = this;
				this.classList;
				if ("object" === t(n.value))
					if ("array" === e.typeof(n.value)) i.attr("class", ""), n.value.forEach(function(e, t) {
						!i.hasClass(e) && i.addClass(e)
					});
					else {
						for (var o in n.value) ! function(e) {
							var t = n.value[e],
								o = n.preValue && n.preValue[e] || "";
							Q(n.keyname + "." + e, function(t) {
								V(T.call(a, n, "b-class"), e, t.value)
							}), V(i, e, t, o)
						}(o)
					}
				else {
					var r = "string" == typeof n.keyname && n.keyname.split(".");
					V(i, r[r.length - 1], n.value, n.preValue)
				}
				Ce = []
			}

			function V(e, t, n, i) {
				"boolean" == typeof n ? (n && e.addClass(t), !n && e.removeClass(t)) : "string" == typeof n && (fe && e.removeClass(
					n), i && e.removeClass(i), n && !e.hasClass(n) && e.addClass(n))
			}

			function H(t) {
				var n = [],
					i = this,
					a = this.getAttribute(t) || "",
					o = a.indexOf("&") > -1 ? a.split("&") : a && [a] || [];
				try {
					o.forEach(function(e, t) {
						var a = {},
							o = q.call(i, e);
						a.scope = re, a.rule = o.rule, a.keyname = o.name, a.param = o.param, a.eventType = o.eventType, a.eventProperty =
							o.eventProperty, n.push(a)
					})
				} catch (t) {
					e.showLog("参数处理出错")
				}
				return n
			}

			function q(t) {
				try {
					var i = /([^@|\(|\)]+)/g,
						a = t ? t.match(i) : [],
						o = "",
						r = "",
						l = null,
						c = [],
						s = null,
						u = "",
						d = this,
						f = "",
						h = "";
					if (l = a[0] && a[0].indexOf(re + ce) > -1 ? a[0].split(re + ce) : [re, a[0]], u = l[0].split(re), u = u[0] || u[
							1] || "", o = re, r = l[1] || "", r.indexOf("$index") > -1) {
						var p = n(d).index();
						r = r.replace("$index", p)
					} else if (r.indexOf("$id") > -1) {
						var g = d.id;
						r = r.replace("$id", g)
					} else if (r.indexOf("$parentIndex") > -1) {
						var v = n(d).parent().index();
						r = r.replace("$parentIndex", v)
					}
					if (void 0 !== a[1]) {
						var m = a[1] || "";
						try {
							var b = /\{.+\}$/g,
								w = /\[.+\]$/g,
								y = /([a-zA-Z0-9][-a-zA-Z0-9\._]{0,62})|(\{.+\})|(\[.+])|([$\w\.]+)|([\d\.]+)|([\u4e00-\u9fa5|\w|\d]+)/g,
								x = m ? m.match(y) : [];
							c = x.map(function(e, t) {
								var i = e,
									a = n(d).attr("b-target"),
									o = a ? n(d).parents(a)[0] || d : d;
								switch (e) {
									case "$this":
										i = o;
										break;
									case "$index":
										i = n(o).index();
										break;
									case "$parentIndex":
										i = n(o).parent().index();
										break;
									case "$parent":
										i = o.parentNode;
										break;
									case "$children":
										i = n(o).children();
										break;
									case "$id":
										i = o.id;
										break;
									case "$text":
										i = o.textContent;
										break;
									case "$value":
										i = o.value;
										break;
									case "$html":
										i = o.innerHTML
								}
								return b.test(e) || w.test(e) ? JSON.parse(e) : i
							})
						} catch (t) {
							e.showLog(t, "getArguments"), c = []
						}
					}
					void 0 !== a[2] && (s = a[2].indexOf(".") > -1 ? a[2].split(".") : [a[2]], f = s[0], h = s[1] || "")
				} catch (n) {
					e.showLog("参数格式错误:" + t)
				}
				return {
					scope: o,
					rule: u,
					name: r,
					param: c,
					eventType: f,
					eventProperty: h
				}
			}

			function U(e, t) {
				return W(e, t)
			}

			function W(t, n) {
				function i(t, n) {
					var i = t[n];
					if (i instanceof Array ? K(i, n) : $(t, n), i && "object" === e.typeof(i)) return U(i)
				}
				if (n && "array" === e.typeof(n))
					if (n.length > 1) {
						var a = n.pop(),
							o = e.unit.getKeyValue(n.join("."), t);
						i(o, a)
					} else i(t, n[0]);
				else Object.keys(t).forEach(function(e) {
					i(t, e)
				})
			}

			function $(n, i) {
				var a = n[i],
					o = "function" == typeof a ? a.call(Re) : a,
					r = [];
				Object.defineProperty(n, i, {
					enumerable: !0,
					configurable: !0,
					get: function(e) {
						Le && console.log("3. data getting " + i, Ce);
						var t = Ce[Ce.length - 1];
						return this.hasOwnProperty(t) && (ge = !1, ve = !1), we.target = this, (ge || !ge && ve) && Ce.push(i), ye.target &&
							r.push(ye.target), o
					},
					set: function(n) {
						if (n === o) return Ce = [], be = !1, ge = !1, ve = !0, !0;
						we.target === this && (Ce = []), we.target = this, (!ve || !ge && ve) && Ce.push(i);
						var a = Ce.join(".");
						te.call(Re, "beforeupdate", {
							action: "set",
							value: n,
							preValue: o,
							keyname: a,
							origin: Se
						}), Le && console.log("4. data setting " + a, Ce);
						var l = e.unit.getKeyValue(a, Se);
						return o = n, r.forEach(function(e) {
							return e()
						}), te(a, {
							action: "set",
							value: o,
							preValue: l,
							keyname: a,
							origin: Se
						}), e.unit.setKeyValue(a, o, Se), o instanceof Array ? U(oe, Ce) : "object" === (void 0 === o ? "undefined" :
							t(o)) && (ae.deep && U(n), o && Object.keys(o).forEach(function(e, t) {
							var n = i + "." + e;
							Ce = [], te(n, {
								target: null,
								value: o[e],
								preValue: l && l[e],
								action: "set",
								keyname: n,
								origin: Se
							})
						})), Ce = [], be = !1, ge = !1, ve = !0, te.call(Re, "update", {
							action: "set",
							value: o,
							preValue: l,
							keyname: a,
							origin: Se
						}), !0
					}
				})
			}

			function K(t, n) {
				var i = [],
					a = Array.prototype,
					o = Object.create(a);
				return ["push", "pop", "shift", "unshift", "splice", "sort", "reverse", "length"].forEach(function(t) {
					var r = a[t];
					Object.defineProperty(o, t, {
						enumerable: !0,
						configurable: !0,
						value: function(a) {
							var o = [].concat(Array.prototype.slice.call(arguments)),
								l = r.apply(this, o);
							te.call(Re, "beforeupdate", {
								target: null,
								action: t,
								param: o,
								value: this,
								keyname: n,
								origin: Se
							}), i.push(n), n in oe || i.unshift(Ce.join("."));
							var c = i.join("."),
								s = e.unit.getKeyValue(c, Se);
							switch (Le && console.log(c + " action " + t + " "), t) {
								case "pop":
								case "shift":
									o = [l]
							}
							e.unit.setKeyValue(c, this, Se);
							var u = ke.find('[b-template*="' + re + "." + c + '"]');
							return te(c, {
								target: u,
								action: t,
								param: o,
								value: this,
								preValue: s,
								keyname: n,
								origin: Se
							}), i = [], Ce = [], te.call(Re, "update", {
								target: u,
								action: t,
								param: o,
								value: this,
								preValue: s,
								keyname: n,
								origin: Se
							}), l
						}
					})
				}), t.__proto__ = o, t
			}

			function Y(t) {
				if (void 0 === t) return Se = Se;
				if ("string" == typeof t) {
					var n = e.unit.getKeyValue(t, Se);
					return Ce = [], n
				}
				return Se
			}

			function _(i, a) {
				var o = "string" == typeof i,
					r = [],
					l = null;
				if (Ce = [], o && void 0 !== a) {
					Le && console.log("set " + i + " ");
					var c = e.unit.getKeyValue(i, Se);
					a && "object" === e.typeof(a) ? (l = n.extend(!0, {}, a), r.push(i), Object.keys(a).forEach(function(e, t) {
							var n = i + "." + e;
							te(n, {
								target: null,
								value: a[e],
								preValue: c,
								action: "set",
								keyname: n,
								origin: Se
							})
						})) : l = a, e.unit.setKeyValue(i, a, oe), e.unit.setKeyValue(i, l, Se), Ee[i] = l, te(i, {
							target: null,
							value: l,
							preValue: c,
							action: "set",
							keyname: i,
							origin: Se
						}), "object" === (void 0 === a ? "undefined" : t(a)) && (a instanceof Array ? U(oe, i.split(ce)) : U(a)), be = !
						0, Ce = []
				} else i && "object" === e.typeof(i) && (Se = n.extend(!0, {}, Se, i), Z(i));
				return Se
			}

			function J(t, n) {
				return "string" == typeof t && (e.unit.delKey(t, Se), n && n.call(Re, t)), Se
			}

			function X(e, t) {
				return J(e, function(t) {
					te(e)
				}), Se
			}

			function Z(t, n) {
				for (var i in t) {
					var a = void 0 === n ? i : n + i,
						o = t[i];
					te(a, {
						target: null,
						value: o,
						preValue: Se[i] || "undefined",
						action: "set",
						param: null,
						keyname: a,
						origin: Se
					}), o && "object" === e.typeof(o) && Z(o, i + ".")
				}
			}

			function Q(e, t) {
				var n = re + ce + e;
				return we.on.call(Re, n, t), this
			}

			function G(e, t) {
				return me.hasOwnProperty(e) ? this : (Q(e, t), me[e] = t, this)
			}

			function ee(e, t) {
				if (e) {
					var n = re + ce + e;
					we.off.call(Re, n, t)
				} else Re.handle = {};
				return this
			}

			function te(e) {
				var t = re + ce + e;
				return Le && console.log(t, "trigger"), arguments[0] = t, we.trigger.apply(Re, arguments), ge = !1, ve = !0, this
			}

			function ne() {
				return Ce = [], ge = !1, ve = !0, this
			}
			var ie = {
					el: null,
					scope: "",
					data: null,
					computed: null,
					methods: null,
					watch: null,
					templates: null,
					beforeMount: null,
					mounted: null,
					isPublic: !1,
					modelEvent: "input",
					scopeSplit: ".",
					delayInput: 200,
					needStatic: !1,
					needCompile: !0,
					deep: !0,
					log: !1,
					autoinit: !0
				},
				ae = n.extend(!0, {}, ie, e.config.store, i),
				oe = ae.data,
				re = ae.scope || e.guid(),
				le = ae.computed,
				ce = ae.scopeSplit,
				se = ae.methods,
				ue = ae.templates,
				de = ae.watch || ie.watch,
				fe = (ae.delayInput, ae.isPublic),
				he = ae.modelEvent,
				pe = ae.needStatic,
				ge = !1,
				ve = !0,
				me = {},
				be = !1,
				we = e.emitter(),
				ye = {
					target: null
				};
			ae.el ? ae.el = ae.el : ae.el = fe ? "body" : ".bui-page";
			var xe = null,
				ke = null,
				Ie = null,
				Te = null,
				Ce = [],
				Oe = !1,
				je = !0,
				Se = n.extend(!0, {}, oe),
				Ee = {},
				Le = void 0 === ae.log ? ie.log : ae.log,
				Ne = /b-text|b-html|b-value|b-show|b-hide|b-checked|b-src|b-href|b-bind|b-style|b-class|b-model/gim,
				Pe = {
					"b-text": I,
					"b-html": O,
					"b-value": j,
					"b-show": N,
					"b-hide": P,
					"b-checked": D,
					"b-bind": F,
					"b-src": B,
					"b-href": A,
					"b-class": z,
					"b-model": E,
					"b-style": M
				},
				De = {
					"b-text": [],
					"b-html": [],
					"b-value": [],
					"b-show": [],
					"b-hide": [],
					"b-checked": [],
					"b-bind": [],
					"b-src": [],
					"b-href": [],
					"b-class": [],
					"b-model": [],
					"b-style": []
				},
				Fe = {},
				Re = (n.extend(!0, {}, oe, se, de, le, ue), {
					$data: oe,
					$methods: se,
					$templates: ue,
					config: ae,
					watch: u,
					nextTick: c,
					oneTick: s,
					get: Y,
					set: _,
					delete: X,
					del: X,
					observer: U,
					compile: h,
					compileHtml: p,
					clearKey: ne,
					init: a,
					on: Q,
					off: ee,
					one: G,
					trigger: te
				});
			return ae.autoinit && a(), Re
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		function n(n, i) {
			function a(t) {
				var n = i || 750,
					a = document.head.parentNode,
					o = t || (p / n * 100).toFixed(2);
				return u = o || 48, e.config.viewport.zoom && (a.style.fontSize = u + "px"), e.trigger.call(e, "viewportinit"),
					this
			}

			function o(e) {
				return p || t("body").width() || t("#bui-router").width() || t(".bui-page").width()
			}

			function r(e) {
				return g || t("body").height() || t("#bui-router").height() || t(".bui-page").height()
			}

			function l(e) {
				return v
			}

			function c(e) {
				return m
			}

			function s(e) {
				return h
			}
			e.trigger.call(e, "viewportbefore");
			var u, d = document.querySelector("meta[name=viewport]"),
				f = "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no",
				h = window.devicePixelRatio,
				p = document.documentElement.clientWidth,
				g = document.documentElement.clientHeight,
				v = parseInt(p) * parseInt(h),
				m = parseInt(g) * parseInt(h);
			if (d) e.config.viewport.create && (d.content = f);
			else {
				var b = document.createElement("meta");
				b.name = "viewport", b.content = f;
				var w = document.head;
				e.config.viewport.create && w.appendChild(b), b = null
			}
			var y = [240, 320, 360, 375, 384, 412, 414, 435, 480, 512, 540, 768, 1024, 1536, 2048, 2732, 534, 854, 750],
				x = [32, 42.67, 48, 50, 51.2, 54.93, 55.2, 58, 64, 68.27, 60, 60, 60, 60, 60, 60, 60, 60, 60],
				k = e.array.index(y, document.documentElement.clientWidth);
			return k > -1 && void 0 === n ? u = x[k] : a(n), {
				width: o,
				height: r,
				fontSize: u,
				screenWidth: l,
				screenHeight: c,
				ratio: s,
				init: a
			}
		}
		e.viewport = n
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.loader = function(i) {
			function o(e) {
				return e = e || {}, T = n.extend({}, T, e), this
			}

			function r(e) {
				if (void 0 === e) return S;
				if ("object" === (void 0 === e ? "undefined" : t(e)) && ("modules" in e || "baseUrl" in e)) S = n.extend(!0, {},
					S, e), E = S.modules;
				else if ("object" === (void 0 === e ? "undefined" : t(e)) && "moduleName" in e) {
					var i = l(e);
					E[e.moduleName] = i || {}, S = n.extend(!1, S, {
						modules: E
					}), E = S.modules
				}
				return S
			}

			function l(e) {
				var t = {
						id: "",
						moduleName: "",
						template: "",
						data: null,
						depend: [],
						script: "",
						style: [],
						isDefined: !1,
						isLoaded: !1,
						beforeCreate: null,
						created: null,
						beforeLoad: null,
						loaded: null,
						beforeDestroy: null,
						destroyed: null,
						exports: {},
						dependExports: []
					},
					i = {};
				return e.moduleName in E && (i = E[e.moduleName]), n.extend(!0, {}, t, i, e)
			}

			function c(t) {
				T.log && console.log("destroy " + t);
				var i = "string" == typeof t ? E[t] : null;
				if (i) {
					i.beforeDestroy && i.beforeDestroy.call(i);
					var a = n('script[name="' + t + '"]').attr("src");
					C = e.array.remove(C, a), n('script[name="' + t + '"]').remove(), delete S.modules[t], E = S.modules, i.destroyed &&
						i.destroyed.call(i)
				}
			}

			function s(t, i, a) {
				var o = {
						moduleName: "",
						template: "",
						data: null,
						depend: [],
						beforeCreate: null,
						created: null,
						beforeLoad: null,
						loaded: null,
						beforeDestroy: null,
						destroyed: null
					},
					l = {},
					c = "";
				try {
					var s = d().name ? d() : u(),
						h = s.name
				} catch (e) {}
				var p = [],
					g = [];
				if (void 0 === t) return e.showLog("define第1个参数不能为空"), this;
				"function" == typeof t ? (a = t, c = h, i = []) : "object" === e.typeof(t) ? (c = h, i = t.depend || [], a = t.loaded,
					l = n.extend(!0, {}, o, t)) : "array" === e.typeof(t) ? (a = i, i = t, c = h) : "function" == typeof i ? (c = t,
					a = i, i = []) : (c = t, i = i, a = a);
				var v = c in E ? E[c].script || s.src : s.src;
				if (T.log && console.log("define " + c), i.length)
					for (var m = 0; m < i.length; m++) {
						var b = i[m];
						b.indexOf(".css") > -1 ? b.indexOf("css!") > -1 ? g.push(b.substr(4)) : g.push(b) : (p.push(b), b in E || r({
							moduleName: b
						}))
					}
				if ("string" == typeof c && "function" == typeof a) {
					var w = function() {
						var e = [f, E[h] && E[h].exports, E[h]],
							t = [];
						p.length && p.forEach(function(e, n) {
							E[e] && t.push(E[e].exports)
						});
						var n = t.concat(e);
						return a && a.apply(this, n)
					};
					l = t && "object" === e.typeof(t) ? n.extend(!0, {}, o, t) : n.extend(!0, {}, o), l.moduleName = c, l.depend = p,
						l.style = g, l.script = v, l.loaded = w, r(l)
				} else e.showLog("define " + c + "模块的参数格式不对");
				return this
			}

			function u(e) {
				var t = window.location.pathname,
					n = t.indexOf(".html"),
					i = "",
					a = "";
				return n > -1 ? (i = t.substr(0, n), a = i + ".js") : (i = t, a = i + ".js"), {
					name: i,
					src: a
				}
			}

			function d() {
				var e, t, i = window.location.href,
					o = [],
					r = document.currentScript;
				if (i.indexOf("#") > -1 ? o = i.split("#") : o.push(i), k = o[0].replace("/index.html", "") + "/", r) return e =
					r.src.replace(k, ""), t = r.getAttribute("name") || e.substr("0", e.indexOf(T.scriptSuffix)), {
						name: t,
						src: e
					};
				try {
					a()
				} catch (e) {
					var l = e.stack || e.sourceURL || e.stacktrace || "",
						c = l.split(/[@ ]/g).pop(),
						s = c.replace(/(:\d+)?:\d+$/i, ""),
						s = s.replace(new RegExp(k, "g"), "");
					return r = n('script[src="' + s + '"]')[0], t = r ? r.getAttribute("name") : s.replace(T.scriptSuffix, ""), {
						name: t,
						src: s
					}
				}
			}

			function f(t, n) {
				T.log && console.log("require " + t);
				if (t && "string" == typeof t) {
					var i = t.indexOf(".html");
					t = i > -1 ? t.substr(0, i) : t, t = [t]
				}
				if (n && "function" != typeof n) return e.showLog("require第2个参数格式为function", "bui.loader.require"), this;
				try {
					h(t, n)
				} catch (t) {
					e.showLog(t, "bui.loader.require")
				}
				return this
			}

			function h(t, n) {
				function i(t, n) {
					function o(e, a) {
						var o = E[e];
						o && (o.isDefined = !0), o && o.beforeLoad && o.beforeLoad.call(o, o.depend), o && o.depend && o.depend.length &&
							i(o.depend, n), a == t.length - 1 && n && n.apply(o)
					}
					t = t || [], E = S.modules, t.forEach(function(i, r) {
						var l = E[i];
						if (E[i] && E[i].style && E[i] && E[i].style.length && y(E[i].style), e.array.compare(a, i) || a.unshift(i),
							l && l.isLoaded) r == t.length - 1 && (n && n.apply(l), a = []);
						else if (l && l.loaded) {
							var c = E[i].beforeCreate && E[i].beforeCreate.call(E[i]);
							if (!1 === c) return !1;
							E[i].created && E[i].created.call(E[i]), o(i, r)
						} else w(i, function() {
							var e = E[i];
							if (!1 === (e && e.beforeCreate && e.beforeCreate.call(E[i]))) return !1;
							e && e.style && e.style.length && y(e.style), e && e.created && e.created.call(E[i]), o(i, r)
						}, function() {
							r == t.length - 1 && (n && n.apply(null), a = [])
						})
					})
				}
				var a = [];
				i(t, function() {
					if (g(a)) {
						var e = [];
						t.forEach(function(i, a) {
							p(i), e.push(E[i] && E[i].exports), a === t.length - 1 && n && n.apply(L, e || [])
						})
					}
				})
			}

			function p(t) {
				E = S.modules;
				var n = "string" == typeof t ? E[t] || {} : t,
					i = n.depend || [],
					a = null,
					o = [];
				n.dependExports = [];
				try {
					if (i.length)
						for (var r = 0; r < i.length; r++) {
							var l = i[r],
								c = E[l];
							c.isLoaded ? o[r] = c.exports : o[r] = p(c) || c.exports, c.exports = o[r], n.dependExports.push(o[r]), c.isLoaded = !
								0
						}
					a = n.isLoaded ? n.exports : n.loaded && n.loaded.apply(n, o), n.exports = a || E[n.moduleName] && E[n.moduleName]
						.exports, n.isLoaded = !0, T.log && console.log("execute " + n.moduleName)
				} catch (t) {
					e.showLog(t, "bui.loader.execute")
				}
				return a
			}

			function g(e) {
				var t = !0,
					n = e || [];
				if (E = S.modules, n.length) n.forEach(function(e, n) {
					E[e] && !1 === E[e].isDefined && (t = !1)
				});
				else
					for (var i in E) E[i] && !1 === E[i].isDefined && (t = !1);
				return t
			}

			function v(t) {
				var n = !0,
					i = [];
				if (E = S.modules, "string" == typeof t) {
					t.indexOf(",") > -1 ? i = t.split(",") : i.push(t)
				} else t && "array" === e.typeof(t) && (i = t || []);
				if (i.length) i.forEach(function(e, t) {
					e in E || (n = !1), E[e] && !1 === E[e].isLoaded && (n = !1)
				});
				else
					for (var a in E) E[a] && !1 === E[a].isLoaded && (n = !1);
				return n
			}

			function m(t, n, i) {
				return "string" == typeof t ? t.indexOf(".css") > -1 ? (x(t), n && n(t)) : t.indexOf(".html") > -1 || t.indexOf(
					".htm") > -1 ? b(t, n, i) : w(t, n, i) : t && "array" === e.typeof(t) && t.forEach(function(e, a) {
					e.indexOf(".css") > -1 ? (x(e), a == t.length - 1 && n && n(t)) : e.indexOf(".html") > -1 || e.indexOf(".htm") >
						-1 ? b(e, n, i) : a == t.length - 1 ? w(e, n, i) : w(e)
				}), this
			}

			function b(e, t, i) {
				if (j.hasOwnProperty(e)) return t && t.call(L, j[e], 200), this;
				"string" == typeof e && n.ajax({
					url: e,
					dataType: "html",
					success: function(n, i, a) {
						a.url = e, t && t.call(L, n, i, a), j[e] = n
					},
					error: function(e, t, n) {
						i && i.call(L, e, t, n)
					}
				})
			}

			function w(t, i, a) {
				var o, r = this;
				if (E = S.modules, void 0 === t || "" == t) return a && a.call(r, t), this;
				if (t in E) o = t, t = E[t].script || o + T.scriptSuffix;
				else {
					var l = t.indexOf(T.scriptSuffix);
					l > -1 ? (t = t, o = t.substr(0, l)) : (o = t, t += T.scriptSuffix)
				}
				var c = document.createElement("script") || {},
					s = T.cache ? "" : "?t=" + (new Date).getTime(),
					u = t.indexOf("http://") > -1 || t.indexOf("https://") > -1;
				c.type = "text/javascript", c.async = T.async, c.src = u ? t + s : S.baseUrl + t + s, c.setAttribute("name", o),
					c.onload = function() {
						T.log && console.log("create " + t), i && i(t)
					}, c.onerror = function(e) {
						T.log && console.log("createError " + t), a && a(t)
					};
				var d = e.array.index(C, t),
					f = n('script[name="' + o + '"]').length || n('script[src="' + t + '"]').length;
				return d > -1 || f ? i && i(t) : d < 0 && (document.body && document.body.appendChild(c), T.cache && C.push(t)),
					c = null, this
			}

			function y(t) {
				var n, i = t.length;
				if ("array" === e.typeof(t))
					for (n = 0; n < i; n++) {
						var a = t[n];
						x(a)
					} else x(t)
			}

			function x(t) {
				if ("string" != typeof t) return void e.showLog(t + "的格式不正确");
				if (e.array.index(O, t) < 0) {
					var n = document.createElement("link") || {};
					n.href = t + (T.cache ? "" : "?t=" + (new Date).getTime()), n.setAttribute("rel", "stylesheet"), n.setAttribute(
						"type", "text/css"), document.head && document.head.appendChild(n), n = null, O.push(t)
				}
			}
			var k, I = {
					cache: !0,
					async: !1,
					log: !1,
					scriptSuffix: ".js"
				},
				T = n.extend({}, I, e.config.loader, i),
				C = [],
				O = [],
				j = {},
				S = {
					baseUrl: "",
					modules: {}
				},
				E = {},
				L = {
					init: o,
					define: s,
					require: f,
					destroy: c,
					map: r,
					import: m,
					checkLoad: v,
					checkDefine: g
				};
			return L
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.router = function(i) {
			function a(t) {
				if (t = n.extend(!0, {}, U, e.config.router, t),
					U = we.config = t, we.store = t.store || null, e.hasRouter = !0, me = !0, "pages/main/main.html" === t.indexModule
					.template && "pages/main/main.js" === t.indexModule.script || (pe = loader.map(t.indexModule)), te && "effect" in
					t && oe.forEach(function(e, n) {
						e.effect = t.effect
					}), !t.id) return e.showLog("id 不能为空", "bui.router.init"), !1;
				if (z = e.objId(t.id), H = bui.mask({
						appendTo: z,
						opacity: 0,
						autoClose: !1
					}), V = e.loading({
						display: "block",
						width: 30,
						height: 30,
						opacity: 0
					}), K = z.children(".bui-router-main"), X = t.width || window && window.viewport && window.viewport.width() ||
					document.documentElement.clientWidth || "100%", Z = t.height || window && window.viewport && window.viewport.height() ||
					document.documentElement.clientHeight || "100%", K.length) K.css({
					width: X,
					height: Z
				});
				else {
					var i = j(t);
					z.html(i), K = z.children(".bui-router-main")
				}
				return J || l(t), F.call(this, "init", {
					target: z[0]
				}), we
			}

			function o(e) {
				var e = e || {};
				return e.width = e.width || U.width, e.height = e.height || U.height, window.viewport = bui.viewport(), X = e.width ||
					window && window.viewport && window.viewport.width() || document.documentElement.clientWidth || "100%", Z = e.height ||
					window && window.viewport && window.viewport.height() || document.documentElement.clientHeight || "100%", K.css({
						width: X,
						height: Z
					}), F.call(this, "resize", {
						target: oe[oe.length - 1]
					}), this
			}

			function r() {
				var e = ve.get("hasCache", 0);
				Boolean(e) && U.reloadCache ? fe.load() : c(), ue = !0
			}

			function l(t) {
				return r(), window.addEventListener("beforeunload", function(e) {
					U.reloadCache && fe.save(), F.call($, "beforeunload", {
						target: oe[oe.length - 1]
					})
				}), t.hash ? (window.addEventListener("hashchange", function(t) {
					var n = s(),
						i = "" == n.pid || "undefined" == n.pid ? "main" : n.pid,
						a = e.array.index(oe, i, "pid");
					a > -1 ? (p({
						index: -(oe.length - a - 1)
					}), F.call($, "popstate", {
						type: "back",
						prevTarget: oe[a - 1],
						target: oe[a]
					})) : (d({
						url: i,
						param: n.param,
						replace: !0
					}), F.call($, "popstate", {
						type: "load",
						prevTarget: oe[oe.length - 2],
						target: oe[oe.length - 1]
					}))
				}), this) : (U.syncHistory && "pushState" in window.history && window.addEventListener("popstate", function(t) {
					var n = s(),
						i = "" == n.pid ? U.indexModule.moduleName : n.pid,
						a = v(i);
					e.array.index(oe, i, "pid") > -1 ? (p({
						index: a,
						param: n.param
					}), F.call($, "popstate", {
						type: "back",
						prevTarget: oe[a - 1],
						target: oe[a]
					})) : (d({
						url: i,
						param: n.param
					}), F.call($, "popstate", {
						type: "load",
						prevTarget: oe[oe.length - 2],
						target: oe[oe.length - 1]
					}))
				}), this)
			}

			function c(t) {
				try {
					var n = s();
					if (n.pid) {
						if (n.pid.indexOf("http://") > -1 || n.pid.indexOf("https://") > -1) return void d({
							url: n.pid,
							param: n.param,
							iframe: !0
						});
						d({
							url: n.pid,
							param: n.param
						})
					} else d({
						url: U.indexModule.moduleName,
						param: n.param || {}
					})
				} catch (t) {
					e.showLog(t, "bui.router.loadUrl")
				}
			}

			function s(e) {
				var t = window.location.hash || window.location.search,
					e = 0 != e,
					n = t && t.indexOf("?"),
					i = n > -1 ? t && t.substr(1, n - 1) : window.location.hash.substr(1),
					a = i && i.indexOf(U.pageSuffix),
					o = a > -1 ? i.substr(0, a) : i,
					r = a > -1 ? i : i + U.pageSuffix,
					l = {};
				if (n > -1)
					for (var c = t && t.substr(n + 1), s = c && c.split("&"), u = 0; u < s.length; u++) {
						var d = e ? decodeURIComponent(s[u].split("=")[1]) : s[u].split("=")[1];
						l[s[u].split("=")[0]] = d
					}
				return {
					pid: o,
					url: r,
					param: l
				}
			}

			function u(t) {
				var i = n.Deferred(),
					a = function(n, a) {
						return m(n.url, function(i) {
							var o = e.guid(),
								r = h(n.url),
								l = r.pid,
								c = (E({
									id: o,
									content: i,
									pid: l
								}), []);
							fe.add(l, {
									id: o,
									pid: l,
									template: i
								}), c.push(l), n.style && "array" === e.typeof(n.style) ? n.style.forEach(function(e, t) {
									c.push(e)
								}) : n.style && "string" === e.typeof(n.style) && c.push(n.style), n.script && "array" === e.typeof(n.script) ?
								n.script.forEach(function(e, t) {
									c.push(e)
								}) : n.script && "string" === e.typeof(n.script) && c.push(n.script), loader.import(c, function() {
									F.call(we, "preloadafter", {
										prevTarget: null,
										target: null
									}), a && a(t)
								}, function() {
									F.call(we, "preloadafter", {
										prevTarget: null,
										target: null
									}), a && a(t)
								})
						}, function(t) {
							e.showLog(n.url + "请求失败"), i.reject(n.url)
						}), i.promise()
					};
				return t && "object" === e.typeof(t) ? "url" in t && a(t, function() {
					i.resolve(t)
				}) : t && "array" === e.typeof(t) && t.forEach(function(e, n) {
					n == t.length - 1 ? "url" in e && a(e, function() {
						i.resolve(t)
					}) : "url" in e && a(e)
				}), i
			}

			function d(t) {
				function i(e) {
					H && H.hide(), d.progress && V && V.hide(), re.removeLast(), f.reject(e)
				}

				function a() {
					ee || k in ae ? (c({
						pid: k
					}), se && r()) : (loader.checkLoad(k) ? c({
						pid: k
					}) : loader.require(k, function(t) {
						try {
							d.firstAnimate && d.progress && V && V.hide(), ae[k] = t || null, f.resolve(t)
						} catch (t) {
							e.showLog(t, "bui.router.load"), f.reject()
						}
					}), d.callback && d.callback({
						prevTarget: p,
						target: T
					}), F.call(we, "complete", {
						prevTarget: p,
						target: T
					}))
				}

				function o() {
					W = e.objId(P.id);
					var t = W.find(".bui-page");
					t.length && d.autoInit && e.init({
						id: t,
						height: Z
					})
				}

				function r(t) {
					W = e.objId(b), C(), O();
					try {
						Q || ee || d.replace || d.part ? (!d.firstAnimate && d.progress && V && V.hide(), t && t(), H && H.hide(), W.css(
							"zIndex", 5), F.call(we, "pageshow", {
							target: re.getLast()
						})) : (Y && Y.hide(), _ && _.show(function() {
							!d.firstAnimate && d.progress && V && V.hide(), t && t(), W.css("zIndex", 5), H && H.hide(), F.call(we,
								"pagehide", {
									target: oe[oe.length - 2]
								}), F.call(we, "pageshow", {
								target: re.getLast()
							})
						}))
					} catch (t) {
						e.showLog(t, "bui.router.doAnimate")
					}
				}

				function l(t) {
					var n = "";
					if (we.store && (t = we.store.compileHtml(t)), d.part) n = L({
						content: t
					}), d.id ? w.html(n) : e.showLog("id 不能为空", "router.loadPart");
					else if (d.replace) {
						var i = re.getLast();
						w = oe.length ? e.objId(i.id) : K, i.pid = k, i.url = I, i.param = g;
						e.array.index(oe, k, "pid");
						n = k in le ? fe.get(k, "template") : L({
							content: t
						}), w.html(n).attr("data-page", k)
					} else ee || (n = E({
						id: b,
						content: t,
						pid: k
					}), K && K.attr("data-main", b).append(n));
					return n
				}

				function c(e) {
					var t = e || re.getLast(),
						n = ge[t.pid] && ge[t.pid] || {},
						i = n.loaded,
						a = i && i.apply(n, n.dependExports) || n.exports;
					ae[t.pid] = a || null, n.exports = a, ee = !1, Q = !1, F.call(we, "refresh", {
						prevTarget: p,
						target: t
					}), H && H.hide(), U.progress && V && V.hide(), f.resolve(a)
				}

				function s() {
					var e = oe[oe.length - 2] || null,
						t = re.getLast();
					Q && !d.part && (F.call(we, "firstload", {
						prevTarget: e,
						target: t
					}), Q = !1), d.part ? F.call(we, "loadpart", {
						prevTarget: e,
						target: t
					}) : F.call(we, "load", {
						prevTarget: e,
						target: t
					})
				}
				var u = {
						id: "",
						url: "",
						param: {},
						effect: "",
						firstAnimate: U.firstAnimate,
						progress: U.progress,
						reload: U.reload,
						autoInit: U.autoInit,
						replace: !1,
						iframe: !1,
						decode: !1,
						part: !1,
						cache: U.cache,
						callback: null,
						beforeLoad: U.beforeLoad
					},
					d = n.extend(!0, {}, u, t),
					f = n.Deferred(),
					p = re.getLast() || null,
					g = (oe[oe.length - 2], null),
					v = {};
				d.id = (d.id && d.id.indexOf("#") > -1 ? d.id.substr(1) : d.id) || "";
				var b = d.replace ? p.id : d.id || e.guid(),
					w = e.objId(b);
				if (!d.url) return e.showLog("url 不能为空", "bui.router.load"), f.promise();
				if (d.url = d.decode ? decodeURIComponent(d.url) : d.url, d.url.indexOf("tel:") >= 0 || d.url.indexOf("mailto:") >=
					0 || d.url.indexOf("sms:") >= 0) return e.unit.openExtral(d.url), f.promise();
				if (d.url && d.url.indexOf("?") > -1) {
					var y = d.url.split("?");
					v = e.unit.keyStringToObject(y[1]), d.url = y[0]
				}
				g = n.extend(!0, {}, v, d.param), "undefined" == d.url && (d.url = "main");
				var x = h(d.url),
					k = x.pid,
					I = d.iframe ? d.url : x.url,
					T = {
						id: b,
						pid: k,
						url: I,
						replace: d.replace,
						param: g,
						part: {},
						effect: t.effect || U.effect
					};
				ne = T;
				var j = "function" == typeof d.beforeLoad ? d.beforeLoad.call(we, {
					prevTarget: p,
					target: T
				}) : d.beforeLoad;
				if (F.call(we, "loadbefore", {
						prevTarget: p,
						target: T
					}), F.call(we, "beforeload", {
						prevTarget: p,
						target: T
					}), !1 === j) return this;
				if (H && H.show(), d.progress && V && V.show(), loader.map({
						moduleName: k,
						id: b
					}), oe.length && d.effect) {
					var N = oe.length - 1;
					oe[N].effect = d.effect
				}!ee && !d.part && !d.replace && re.add(T), d.replace && re.replace(T);
				var P = re.getLast();
				if (d.part && (P.part && (P.part[b] = {
						id: b,
						pid: k,
						url: I,
						param: g
					}), P.currentPart = b, P.part && oe.splice(oe.length - 1, 1, P)), d.part || (de = T), k in le) ! function(e) {
					l(fe.get(e.pid, "template")), e.part ? c(e) : (o(), !ee && r(function() {
						e.progress && V && V.hide()
					}), c(e))
				}({
					pid: k,
					progress: d.progress,
					part: d.part
				}), d.callback && d.callback({
					prevTarget: p,
					target: T
				}), F.call(we, "complete", {
					prevTarget: p,
					target: T
				});
				else {
					if (d.iframe) return function(e) {
						var t = S({
							id: e.id,
							pid: e.pid,
							url: e.url,
							param: e.param
						});
						K && K.attr("data-main", e.id).append(t), r(function() {
							d.progress && V && V.hide()
						})
					}({
						id: b,
						pid: k,
						url: d.url,
						param: g
					}), f.promise();
					if (d.part) return function() {
						m(I, function(t, n, i) {
							e.objId(b).html(t), a(), s(), d.cache && fe.add(k, {
								id: b,
								pid: k,
								template: t
							}), H && H.hide(), d.progress && V && V.hide()
						}, function(e, t, n) {
							i(I), F.call(we, "loadfail", e, t, n)
						})
					}(), f.promise();
					if (d.firstAnimate) return function() {
						var t = E({
							id: b,
							content: "",
							pid: k
						});
						K && K.attr("data-main", b).append(t), r(function() {
							m(I, function(t, n, i) {
								we.store && (t = we.store.compileHtml(t)), e.objId(b).html(t), o(), a(), s(), d.cache && (E({
									id: b,
									content: t,
									pid: k
								}), fe.add(k, {
									id: b,
									pid: k,
									template: t
								})), he.add(k, {
									id: b,
									pid: k,
									param: g
								})
							}, function(e, t, n) {
								i(I), F.call(we, "loadfail", e, t, n)
							})
						})
					}(), f.promise();
					! function() {
						m(I, function(e, t, n) {
							l(e), d.cache && fe.add(k, {
								id: b,
								pid: k,
								template: e
							}), o(), r(function() {
								d.progress && V && V.hide()
							}), a(), s(), he.add(k, {
								id: b,
								pid: k,
								param: g
							})
						}, function(e, t, n) {
							i(I), F.call(we, "loadfail", e, t, n)
						})
					}()
				}
				return f.promise()
			}

			function f(e) {
				var t = {
					id: "",
					url: "",
					param: {},
					part: !0
				};
				return d(n.extend(!0, {}, t, e)).promise()
			}

			function h(e) {
				var t = "",
					n = e;
				pe = loader.map(), ge = pe.modules;
				var i = n.indexOf(U.pageSuffix);
				return i > -1 ? (t = n, (n = t.substr(0, i)) in ge || (n = I(t) || n)) : (n = n, t = ge[n] && ge[n].template || n +
					U.pageSuffix || ""), {
					pid: n,
					url: t
				}
			}

			function p(t) {
				var i = this,
					a = {};
				"function" == typeof t ? a.callback = t : a = t || {};
				var o = n.extend(!0, {
						index: -1,
						name: "",
						beforeBack: U.beforeBack,
						callback: null
					}, a),
					r = parseInt(o.index),
					l = oe.length;
				if (pe = loader.map(), ge = pe.modules, r > 0) return void e.showLog("index 参数只能是负数", "bui.router.back");
				var c = re.getLast(),
					s = l - 1,
					u = "function" == typeof a.beforeBack ? a.beforeBack.call(we, {
						prevTarget: null,
						target: c
					}) : a.beforeBack;
				return F.call(we, "backbefore", {
					prevTarget: null,
					target: c
				}), F.call(we, "beforeback", {
					prevTarget: null,
					target: c
				}), !1 === u ? this : (o.name && (r = v(o.name)), Math.abs(r) > s && (r = -s), l > 1 && G && (r < -1 && O(r), G = !
					1, a.effect && (Y.option({
						effect: a.effect
					}), _.option({
						effect: a.effect
					})), Y && Y.show(), _ && _.hide(function() {
						var t = l + r;
						T(t), re.removeNext(t), O();
						var n = C(),
							a = n.pid;
						e.objId(n.id).css("zIndex", 5),
							function() {
								var e = {};
								e = ae[a] || {}, o.callback && o.callback.call(i, e, n), F.call(we, "back", {
									prevTarget: c,
									target: n
								}), de = n, F.call(we, "pageshow", {
									target: n
								}), F.call(we, "pagehide", {
									target: c
								}), G = !0
							}(), U.cache || g(c.pid)
					})), this)
			}

			function g(t) {
				return "string" == typeof t && "main" !== t ? (loader.destroy(t), fe.del(t), t in ae && delete ae[t]) : e.showLog(
					"参数只能是字符串"), this
			}

			function v(t) {
				var n, i = e.array.indexs(oe, t, "pid"),
					a = i.length;
				if (a) {
					var o = -(oe.length - i[a - 1] - 1);
					n = 0 == o ? -1 : o
				} else n = -1;
				return n
			}

			function m(t, i, a) {
				if ("string" == typeof t) n.ajax({
					url: t,
					dataType: "html",
					async: U.async,
					success: function(e, n, a) {
						a.url = t, "" === e && F.call(we, "fail", e, n, a), i && i(e, n, a), F.call(we, "success", e, n, a)
					},
					error: function(e, t, n) {
						a && a(e, t, n), F.call(we, "fail", e, t, n)
					}
				});
				else if ("function" == typeof t) {
					var o = t && t();
					i && i(o, 200, {}), F.call(we, "success", o, 200, {})
				} else e.showLog("url 不能为空", "bui.router.requestUrl")
			}

			function b() {
				ee = !0;
				var e = oe.length - 1,
					t = oe[e];
				return d({
					id: t.id,
					url: t.pid,
					param: t.param
				}), this
			}

			function w(e) {
				return e = e || {}, d({
					url: e.url || "",
					param: e.param || {},
					replace: !0
				}), this
			}

			function y() {
				return re.getLast().param
			}

			function x(e) {
				var t = re.getLast(),
					n = e || t.currentPart,
					i = null,
					a = n in t.part ? t.part[n] : {};
				return "param" in a && (i = a.param), i
			}

			function k(e) {
				var t;
				return e && (t = e in ae), t
			}

			function I(t) {
				for (var n in ge) try {
					if ((ge[n].template || "") === t) return n
				} catch (t) {
					e.showLog(t.message)
				}
			}

			function T(e) {
				K.children().each(function(t, i) {
					t >= e && n(i).remove()
				})
			}

			function C() {
				var t = re.getLast(),
					n = t.id || "",
					i = t.effect || U.effect;
				return n && (F.call(we, "beforepageshow", {
					target: t
				}), _ = null, _ = e.toggle({
					id: document.getElementById(n),
					effect: ie[i].inRight || ""
				}), K && K.attr("data-main", n)), t
			}

			function O(t) {
				t = t || -1;
				var n = oe.length + t - 1,
					i = oe[n],
					a = i && i.id || "",
					o = i && i.effect || U.effect;
				return a && (F.call(we, "beforepagehide", {
					target: i
				}), Y = null, Y = e.toggle({
					id: document.getElementById(a),
					effect: ie[o].inLeft || ""
				})), i
			}

			function j(e) {
				e = e || {};
				var t = "";
				return t += '<div class="bui-router-main" style="width:' + (String(X).indexOf("%") > -1 ? X : X + "px") +
					";height:" + (String(Z).indexOf("%") > -1 ? Z : Z + "px") + ';">', t += "</div>"
			}

			function S(t) {
				var n = t.param ? e.setUrlParams(t.url, t.param) : t.url,
					i = "";
				return i += '<div id="' + t.id + '" class="bui-router-item" data-page="' + t.pid + '">', i +=
					'<iframe class="bui-router-iframe" src="' + n + '"></iframe>', i += "</div>"
			}

			function E(e) {
				var t = "";
				return t += '<div id="' + e.id + '" class="bui-router-item" data-page="' + e.pid + '">', t += e.content || "", t +=
					"</div>"
			}

			function L(e) {
				var t = "";
				return t += e.content
			}

			function N(t, n) {
				return te = !0, e.option.call(we, t, n)
			}

			function P(t, n) {
				return e.on.apply(we, arguments), this
			}

			function D(t, n) {
				return e.off.apply(we, arguments), this
			}

			function F(t) {
				we.self = this == window || this == we ? null : this, e.trigger.apply(we, arguments)
			}

			function R() {
				return ne || re.getLast()
			}

			function B() {
				var e = ne || re.getLast();
				return document.getElementById(e.id)
			}

			function A(e) {
				return ne.id
			}

			function M(i) {
				var a = re.getLast(),
					o = e.objId(a.id),
					r = "object" === (void 0 === i ? "undefined" : t(i)) ? n(i) : o.find(".bui-page");
				return r.length && e.init({
					id: r,
					height: Z
				}), this
			}
			var z, V, H, q = {
					id: "",
					progress: !1,
					syncHistory: !0,
					autoInit: !0,
					firstAnimate: !1,
					baseUrl: "",
					indexModule: {
						moduleName: "main",
						template: "pages/main/main.html",
						script: "pages/main/main.js"
					},
					hash: !1,
					cache: !0,
					reloadCache: !1,
					reload: !1,
					useScroll: ".bui-scroll-x",
					beforeBack: null,
					beforeLoad: null,
					store: null,
					width: 0,
					height: 0,
					async: !0,
					effect: "push",
					hashPrefix: "#",
					scriptSuffix: ".js",
					pageSuffix: ".html"
				},
				U = n.extend({}, q, e.config.router, i),
				W = null,
				$ = this,
				K = null,
				Y = null,
				_ = null,
				J = !1,
				X = "",
				Z = "",
				Q = !0,
				G = !0,
				ee = !1,
				te = !1,
				ne = null,
				ie = {
					none: {
						inRight: "showIn",
						inLeft: "showIn"
					},
					fadein: {
						inRight: "fadeIn",
						inLeft: "fadeIn"
					},
					fadeinslide: {
						inRight: "fadeInRight",
						inLeft: "fadeInLeft"
					},
					slide: {
						inRight: "slideInRight",
						inLeft: "slideInLeft"
					},
					push: {
						inRight: "pushInRight",
						inLeft: "pushInLeft"
					},
					zoom: {
						inRight: "zoomIn",
						inLeft: "zoomIn"
					},
					cover: {
						inRight: "coverInRight",
						inLeft: "coverInLeft"
					},
					zoomslide: {
						inRight: "zoomSlideInRight",
						inLeft: "zoomSlideInLeft"
					},
					fadeinslideback: {
						inRight: "fadeInLeft",
						inLeft: "fadeInRight"
					},
					slideback: {
						inRight: "slideInLeft",
						inLeft: "slideInRight"
					},
					pushback: {
						inRight: "pushInLeft",
						inLeft: "pushInRight"
					},
					coverback: {
						inRight: "coverInLeft",
						inLeft: "coverInRight"
					},
					zoomslideback: {
						inRight: "zoomSlideInLeft",
						inLeft: "zoomSlideInRight"
					}
				},
				ae = {},
				oe = [],
				re = {},
				le = {},
				ce = {},
				se = !1,
				ue = !1,
				de = {},
				fe = {},
				he = {},
				pe = loader.map(U.indexModule),
				ge = pe.modules,
				ve = e.storage({
					local: !1
				}),
				me = !1;
			re.get = function() {
				return oe
			}, re.add = function(t) {
				t = t || {};
				var n = window.location.origin + window.location.pathname + "#" + t.pid,
					i = e.setUrlParams(n, t.param);
				if (oe.push(t), !Q) return U.syncHistory && "pushState" in window.history && window.history.pushState(t, null, i),
					oe
			}, re.prepend = function(t) {
				t = t || {};
				var n = window.location.origin + window.location.pathname + "#" + t.pid;
				e.setUrlParams(n, t.param);
				return oe.unshift(t), oe
			}, re.replace = function(t) {
				t = t || {};
				var n = oe.length - 1,
					i = window.location.origin + window.location.pathname + "#" + t.pid,
					a = e.setUrlParams(i, t.param);
				return n > -1 && (oe.splice(n, 1, t), U.syncHistory && "replaceState" in window.history && window.history.replaceState(
					t, null, a)), oe
			}, re.getLast = function(e) {
				var t = oe.length - 1,
					n = oe[t] || {};
				return e ? n[e] : n
			}, re.removeNext = function(t) {
				var n = oe.length - t;
				oe.splice(t, n);
				var i = re.getLast(),
					a = window.location.origin + window.location.pathname + "#" + i.pid,
					o = e.setUrlParams(a, i.param);
				U.syncHistory && "replaceState" in window.history && window.history.replaceState(i.param, null, o)
			}, re.removeLast = function() {
				var e = oe.length - 1;
				re.removeNext(e)
			}, fe.add = function(e, t) {
				return le[e] = t || {}, le[e]
			}, fe.del = function(e) {
				delete le[e]
			}, fe.get = function(e, t) {
				if (t) {
					return (le[e] || {})[t]
				}
				return le[e]
			}, fe.save = function() {
				if (oe.length > 1) {
					var e = z.html();
					ve.set("cacheHtml", e), ve.set("cacheHistory", oe), ve.set("hasCache", "true")
				}
			}, fe.load = function() {
				var t = ve.get("cacheHtml", 0),
					n = ve.get("cacheHistory", 0),
					i = [];
				if (n.length > 1) {
					z.html(t), K = z.children(".bui-router-main");
					p({
						name: s().pid
					});
					try {
						n.forEach(function(e, t) {
							var n = "string" == typeof e ? JSON.parse(e) : e;
							i.push(n)
						});
						var a = i[i.length - 1];
						de = a, loader.require(a.pid, function(e) {
							ae[a.pid] = e || null
						}), P("back", function(e) {
							loader.require(e.target.pid, function(t) {
								ae[e.target.pid] = t || null
							})
						})
					} catch (t) {
						e.showLog(t)
					}
					oe = i, C(), O(), Q = !1, se = !0, fe.clear()
				}
			}, fe.clear = function() {
				ve.remove("cacheHistory"), ve.remove("cacheHtml"), ve.remove("hasCache")
			}, he.add = function(e, t) {
				return ce[e] = t || {}, ce[e]
			}, he.get = function(e, t) {
				if (t) {
					return (ce[e] || {})[t]
				}
				return ce[e]
			};
			var be = function(t) {
					var n = ne || re.getLast(),
						i = document.getElementById(n.id) || document;
					return e.obj(t, i)
				},
				we = {
					init: a,
					option: N,
					data: {},
					on: P,
					off: D,
					trigger: F,
					load: d,
					resize: o,
					destroy: g,
					loadPart: f,
					replace: w,
					refresh: b,
					back: p,
					isLoad: k,
					$: be,
					currentId: A,
					currentPage: B,
					currentModule: R,
					getPageParams: y,
					getPartParams: x,
					getHistory: re.get,
					preload: u,
					initScroll: M,
					history: {
						get: re.get,
						getLast: re.getLast
					}
				};
			return we
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.setUrlParams = function(n, i, a) {
			var a = 0 != a,
				i = "object" == (void 0 === i ? "undefined" : t(i)) ? i : {},
				o = e.unit.objectToKeyString(i, a);
			return "" == o ? n : n + "?" + o
		}, e.getUrlParams = function(t) {
			var t = 0 != t,
				n = window.location.search,
				i = {};
			if (n.indexOf("?") > -1) {
				var a = n.substr(1);
				i = e.unit.keyStringToObject(a, t)
			}
			return i
		}, e.getUrlParam = function(e) {
			var t = window.location.search,
				n = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
				i = t.substr(1).match(n);
			return null != i ? decodeURIComponent(i[2]) : null
		}, e.typeof = function(e) {
			var t = Object.prototype.toString.call(e).slice(8, -1);
			return t = t.toLowerCase()
		}
	}(window.bui || {}, window.libs),
	function(e, i) {
		e.array = {}, e.array.index = e.inArray = function(t, n, i) {
			var a, o;
			t instanceof Array ? (a = t || [], o = n) : (a = n || [], o = t);
			for (var r in a) try {
				if ((a[r] && a[r][i] || a[r]) == o) return parseInt(r)
			} catch (t) {
				e.showLog(t.message, "bui.inArray")
			}
			return -1
		}, e.array.compare = e.compareArray = function(e, t, n) {
			var i, a;
			e instanceof Array ? (i = e || [], a = t) : (i = t || [], a = e);
			for (var o in i) try {
				if ((i[o] && i[o][n] || i[o]) == a) return !0
			} catch (e) {}
			return !1
		}, e.array.remove = e.removeArray = function(t, n, i) {
			function a(e) {
				l.forEach(function(t, n) {
					try {
						("string" == typeof i || "number" == typeof i ? t[i] || t : t) == e && l.splice(n, 1)
					} catch (e) {}
				})
			}
			var o, r;
			t instanceof Array ? (o = t || [], r = n) : (o = n || [], r = t || []);
			var l = o || [];
			return r && "array" === e.typeof(r) ? r.forEach(function(e, t) {
				a("string" == typeof i || "number" == typeof i ? e[i] || e : e)
			}) : a(r), l
		}, e.array.filter = e.filterArray = function(e, t, n) {
			var i, a;
			e instanceof Array ? (i = e || [], a = t) : (i = t || [], a = e);
			var o = [];
			for (var r in i) try {
				var l = i[r] && i[r][n] || i[r];
				new RegExp(a).test(l) && o.push(i[r])
			} catch (e) {}
			return o
		}, e.array.indexs = e.indexArray = function(e, t, n) {
			var i, a;
			e instanceof Array ? (i = e || [], a = t) : (i = t || [], a = e);
			var o = [];
			for (var r in i) try {
				(i[r] && i[r][n] || i[r]) === a && o.push(+r)
			} catch (e) {}
			return o
		}, e.array.excess = e.excessArray = function(e, t, n) {
			var i;
			e instanceof Array ? i = e || [] : i = t || [];
			var a = {},
				o = [];
			for (var r in i) try {
				var l = i[r] && i[r][n] || i[r];
				a[l] != l && (a[l] = l, o.push(i[r]))
			} catch (e) {}
			return o
		}, e.array.uniq = function(t, n) {
			for (var i = [], a = 0; a < t.length; a++) {
				var o = void 0 === n,
					r = o ? t[a] : t[a][n] || t[a];
				(o ? -1 == e.array.index(i, r, n) : -1 == i.indexOf(r)) && i.push(r)
			}
			return i
		}, e.array.copy = e.copyArray = function(t, n, i) {
			var a = [];
			if (form = n || 0, i = i || t && t.length, !t || "array" === e.typeof(t)) {
				t.forEach(function(e, t) {
					a.push(e)
				});
				return a.splice(n, i) || []
			}
		}, e.array.empty = function(t) {
			if (!t || "array" === e.typeof(t)) return t.splice(0, t.length), []
		}, e.array.replace = function(t, n) {
			if (!t || "array" === e.typeof(t)) {
				var i = [0, t.length].concat(n);
				return t.splice.apply(t, i), t
			}
		}, e.array.merge = function(i) {
			var a;
			if (!i || "array" === e.typeof(i)) {
				var o = arguments,
					r = o[o.length - 1];
				if ("string" == typeof r && o.length > 2) {
					var l = function() {
						for (var t = o.length - 1, n = [], a = 1; a < t; a++) ! function(e) {
							i.forEach(function(t, i) {
								var a = t[r],
									l = o[e];
								l instanceof Array && l.forEach(function(e, i) {
									var o = e[r];
									if (a === o)
										for (var l in e) t[l] = e[l];
									else n.push(e)
								})
							})
						}(a);
						return e.array.merge(i, n), {
							v: i
						}
					}();
					if ("object" === (void 0 === l ? "undefined" : t(l))) return l.v
				}
				var c = (a = [i.length, 0]).concat.apply(a, n(Array.prototype.slice.call(arguments, 1)));
				return i.splice.apply(i, c), i
			}
		}, e.array.get = function(e, t, n) {
			var i, e = e || [];
			for (var a in e) try {
				(e[a] && e[a][n] || e[a]) == t && (i = e[a])
			} catch (e) {}
			return i
		}, e.array.getAll = function(e, t, n) {
			var e = e || [],
				i = [];
			for (var a in e) try {
				(e[a] && e[a][n] || e[a]) == t && i.push(e[a])
			} catch (e) {}
			return i
		}, e.array.set = function(t, n, i, a) {
			if (!t || "array" === e.typeof(t)) return t.filter(function(e, o) {
				var r = void 0 === a ? e : e[a] || e;
				o != n && r !== n || t.splice(o, 1, i)
			}), t
		}, e.array.delete = function(t, n, i) {
			function a(e) {
				o && o.forEach(function(t, n) {
					try {
						("string" == typeof i || "number" == typeof i ? t[i] || t : t) != e && n != e || o.splice(n, 1)
					} catch (e) {}
				})
			}
			var o = t || [],
				r = e.array.indexs(o, n, i);
			return n && "array" === e.typeof(n) ? n.forEach(function(e, t) {
				a("string" == typeof i || "number" == typeof i ? e[i] || e : e)
			}) : a(n), r
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.storage = function(n) {
			function i(t, n, i) {
				var a = 1 == l ? null : d.getItem(t),
					o = [],
					r = "",
					c = i ? n[i] : n;
				if (null === a) {
					o.push(n), r = JSON.stringify(o);
					try {
						d.setItem(t, r)
					} catch (e) {
						"QuotaExceededError" == e.name && console.log("超出本地存储限额！")
					}
				} else {
					var s = JSON.parse(a);
					if (i ? e.array.compare(s, c, i) : e.array.compare(s, c)) {
						e.array.remove(s, c, i), s[u](n);
						try {
							r = JSON.stringify(s), d.setItem(t, r)
						} catch (e) {
							"QuotaExceededError" == e.name && console.log("超出本地存储限额！")
						}
					} else {
						s[u](n), s.length > l && 0 != l && s.pop();
						try {
							r = JSON.stringify(s), d.setItem(t, r)
						} catch (e) {
							"QuotaExceededError" == e.name && console.log("超出本地存储限额！")
						}
					}
				}
				return this
			}

			function a(t, n, i) {
				var a, o = d.getItem(t) || "";
				try {
					a = o && e.unit.stringToJson(o)
				} catch (t) {
					a = o, e.showLog(t.name + ": " + t.message, "bui.storage.get")
				}
				if ("number" == typeof n && i) a = a && a[n] && a[n][i] || void 0;
				else if ("string" == typeof n) {
					var r = e.array.index(a, n, i);
					a = a && a[r]
				} else a = "number" == typeof n ? a && a[n] || void 0 : a;
				return a
			}

			function o(t, n, i) {
				if ("string" != typeof t) return void e.showLog("要删除的字段名只能是字符串", "bui.storage.remove");
				var o = a(t) || [];
				if ("number" == typeof n) {
					var r = "number" == typeof i ? i : r;
					o.splice(n, r);
					try {
						var l = JSON.stringify(o) || "";
						d.setItem(t, l)
					} catch (t) {
						e.showLog(t.name + ": " + t.message, "bui.storage.remove")
					}
				} else if ("string" == typeof n) {
					var c = e.array.remove(o, n, i);
					try {
						var l = JSON.stringify(c) || "";
						d.setItem(t, l)
					} catch (t) {
						e.showLog(t.name + ": " + t.message, "bui.storage.remove")
					}
				} else d.removeItem(t);
				return this
			}

			function r() {
				return d.clear(), this
			}
			var l, c, s;
			"number" == typeof n || "string" == typeof n ? (l = 0 == parseInt(n) ? 0 : parseInt(n) || 1, s = !0, c = !0) :
				"object" === (void 0 === n ? "undefined" : t(n)) ? (l = n && 0 == n.size ? 0 : n.size || 1, s = !n || 0 != n.local,
					c = !n || 0 != n.reverse) : (l = 1, s = !0, c = !0);
			var u = c ? "push" : "unshift",
				d = s ? localStorage : sessionStorage;
			return {
				get: a,
				set: i,
				remove: o,
				clear: r
			}
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.unit = {}, e.unit.remToPx = function(e) {
			var t = window && window.viewport && window.viewport.fontSize || 100,
				e = (parseFloat(e) * t).toFixed(2);
			return e
		}, e.unit.pxToRem = function(e) {
			var t = window && window.viewport && window.viewport.fontSize || 100,
				e = (parseFloat(e) / t).toFixed(2);
			return e
		}, e.unit.pxToRemZoom = function(e) {
			var e = (parseFloat(e) / 100).toFixed(2);
			return e
		}, e.unit.debounce = function(e, t, n) {
			var i;
			return function() {
				var a = n || this,
					o = arguments,
					r = function() {
						i = null, e.apply(a, o)
					};
				clearTimeout(i), i = setTimeout(r, t)
			}
		}, e.unit.throttle = function(e, t, n) {
			t || (t = 250);
			var i, a;
			return function() {
				var o = n || this,
					r = +new Date,
					l = arguments;
				i && r < i + t ? (clearTimeout(a), a = setTimeout(function() {
					i = r, e.apply(o, l)
				}, t)) : (i = r, e.apply(o, l))
			}
		}, e.unit.startWithCss = function(e) {
			var t = new RegExp("^\\.|^#");
			return "string" == typeof e && t.test(e)
		}, e.unit.startWithId = function(e) {
			var t = new RegExp("^#");
			return "string" == typeof e && t.test(e)
		}, e.unit.startWithClass = function(e) {
			var t = new RegExp("^\\.");
			return "string" == typeof e && t.test(e)
		}, e.unit.endWithImage = function(e) {
			var t = new RegExp("(.png|.jpg|.gif)$");
			return "string" == typeof e && t.test(e)
		}, e.unit.tel = function(t) {
			var n, t = String(t),
				i = "tel:";
			return 0 == t.indexOf("+") && (i = "wtai://wp/mc;"), n = t, window.location.href = i + n, e
		}, e.unit.sms = function(t, n) {
			var i = navigator.userAgent,
				a = /(iPhone|iPad|iOS)/i.test(i),
				o = a ? "&" : "?";
			return window.location.href = "sms:" + t + o + "body=" + n, e
		}, e.unit.mailto = function(t) {
			var t = "email" in t ? t : {};
			return "string" == typeof t.email && t.email.indexOf("@") > 0 ? window.location.href = "mailto:" + t.email +
				"?subject=" + (t.subject || "") + "&body=" + (t.body || "") + "&cc=" + (t.cc || "") : e.showLog(email + "格式不正确"),
				e
		}, e.unit.openExtral = function(t) {
			var n = [],
				i = "",
				t = String(t);
			if (t.indexOf("mailto:") >= 0)
				if (n = t.split("mailto:"), i = n[1], i.indexOf("?") > -1) {
					var a = i.split("?"),
						o = e.unit.keyStringToObject(a[1]);
					o.email = a[0], e.unit.mailto(o)
				} else e.unit.mailto({
					email: i
				});
			if (t.indexOf("tel:") >= 0 && (n = t.split("tel:"), i = parseInt(n[1]), e.unit.tel(i)), t.indexOf("sms:") >= 0)
				if (n = t.split("sms:"), i = n[1], t.indexOf("=") >= 0) {
					var r = t.split("="),
						l = r[1];
					e.unit.sms(i, l)
				} else e.unit.sms(i);
			return e
		}, e.unit.objectToKeyString = function(e, t) {
			var n = "";
			for (var i in e) {
				n += "&" + i + "=" + (t ? encodeURIComponent(e[i]) : e[i])
			}
			return n.substr(1)
		}, e.unit.keyStringToObject = function(t, n) {
			var i, a = {},
				o = [];
			try {
				for (o = t.split("&"), i = 0; i < o.length; i++) {
					var r = n ? decodeURIComponent(o[i].split("=")[1]) : o[i].split("=")[1];
					a[o[i].split("=")[0]] = r
				}
			} catch (t) {
				e.showLog(t)
			}
			return a
		}, e.unit.checkTargetInclude = function(e, t) {
			var i = t,
				a = [];
			if (i.indexOf(",") > -1) {
				a = i.split(",");
				var o, r = a.length;
				for (o = 0; o < r; o++) {
					var l = a[o];
					l.indexOf(".") > -1 && (a[o] = l.substr(1))
				}
			} else i.indexOf(".") > -1 ? a[0] = i.substr(1) : a[0] = i;
			var c, s = a.length;
			for (c = 0; c < s; c++)
				if (n(e).hasClass(a[c])) return !0;
			return !1
		}, e.unit.jsonToString = function(n) {
			function i(n) {
				if (n && "object" === e.typeof(n)) {
					for (var i in n) {
						var a = n[i];
						"object" === (void 0 === a ? "undefined" : t(a)) && (n[i] = JSON.stringify(a))
					}
					return n
				}
			}

			function a(n) {
				if (n && "array" === e.typeof(n)) return n.forEach(function(e, i) {
					"object" === (void 0 === e ? "undefined" : t(e)) && (n[i] = JSON.stringify(e))
				}), n
			}
			return "object" === (void 0 === n ? "undefined" : t(n)) ? function(t) {
				function n(t, n) {
					var o = t[n];
					return o && "object" === e.typeof(o) ? t[n] = i(o) : o && "array" === e.typeof(o) ? t[n] = a(o) : t[n] = o, t[n]
				}
				var o;
				if ("object" === e.typeof(t)) {
					for (var r in t) t[r] = n(t, r);
					o = JSON.stringify(t)
				} else "array" === e.typeof(t) ? (t.forEach(function(e, i) {
					t[i] = n(t, i)
				}), o = JSON.stringify(t)) : o = t;
				return o
			}(n) : n
		}, e.unit.stringToJson = function(n) {
			function i(n) {
				var a, o;
				try {
					if (a = "object" === (void 0 === n ? "undefined" : t(n)) ? n : JSON.parse(n), "array" === e.typeof(a)) a.forEach(
						function(e, t) {
							a[t] = i(e)
						});
					else if ("object" === e.typeof(a))
						for (var r in a) {
							var l = a[r];
							a[r] = i(l)
						}
					o = a
				} catch (e) {
					o = n
				}
				return o
			}
			return n && i(n)
		}, e.unit.setKeyValue = function(e, t, n) {
			function i(e, n) {
				if (a.length) return i(a.shift(), n[e] || {});
				n[e] = t
			}
			var a = e && e.indexOf(".") > -1 ? e.split(".") : [e];
			return i(a.shift(), n)
		}, e.unit.getKeyValue = function(e, t) {
			function n(e, t) {
				var a = t[e];
				if (a && "string" == typeof a && a.indexOf("{") > -1 && a.indexOf("}") > -1) try {
					t[e] = JSON.parse(a)
				} catch (n) {
					t[e] = a
				}
				return void 0 !== a && i.length ? n(i.shift(), a) : a
			}
			var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];
			return n(i.shift(), t)
		}, e.unit.getKeyObj = function(e, t) {
			function n(e, t) {
				var a = t[e];
				return !a instanceof Array && a instanceof Object ? n(i.shift(), a) : a
			}
			var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];
			return n(i.shift(), t)
		}, e.unit.delKey = function(e, t) {
			function n(e, a) {
				return i.length ? n(i.shift(), a[e]) : (delete a[e], t)
			}
			var i = e && e.indexOf(".") > -1 ? e.split(".") : [e];
			return n(i.shift(), t)
		}, e.unit.calcHeight = function(e, t) {
			var i = n(e);
			i[0] && (i[0].style.height = "calc(100% - " + t + ")")
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.platform = function() {
			function e(e) {
				return /Windows NT/i.test(s)
			}

			function t() {
				return /Macintosh/i.test(s)
			}

			function n(e) {
				return /(Android|Linux)/i.test(s)
			}

			function i(e) {
				return /(iPhone)/i.test(s)
			}

			function a(e) {
				var t = !1;
				return 3 == window.devicePixelRatio && 375 == document.documentElement.clientWidth && 812 == document.documentElement
					.clientHeight && (t = !0), t
			}

			function o(e) {
				return /(iPad)/i.test(s)
			}

			function r(e) {
				return /(iPhone|iPad|iOS)/i.test(s)
			}

			function l(e) {
				return /(micromessenger)/i.test(s)
			}

			function c(e) {
				return /(crosswalk)/i.test(s)
			}
			var s = navigator.userAgent;
			return {
				isAndroid: n,
				isIphone: i,
				isIpad: o,
				isIos: r,
				isWeiXin: l,
				isBingotouch: c,
				isMac: t,
				isIphoneX: a,
				isWindow: e
			}
		}()
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.checkVersion = function(n) {
			function i() {
				e.platform.isIos() ? e.run({
					id: d,
					native: f.native
				}) : e.run({
					id: u,
					native: f.native
				})
			}

			function a(n) {
				h.on("click", function() {
					g < l ? (x(), y({
						title: "新版本" + s,
						content: c,
						buttons: n.buttons,
						width: n.width,
						height: n.height,
						mask: n.mask,
						callback: function(e) {
							"立即下载" == t(e.target).text().trim() && i()
						}
					})) : (k(), e.hint(b)), n.callback && n.callback.call(this)
				}), p = !0
			}

			function o(n) {
				e.ajax(n).done(function(o) {
					var r = o,
						h = parseInt(r.minVersionCode);
					u = r.downloadUrl || "", d = r.iosDownloadUrl || "", c = r.remark || "检测到新版本" + s + ",是否立即下载", l = parseInt(r.versionCode),
						s = r.versionName, r.isForced ? (x(), g < h ? y({
							title: n.title,
							content: m,
							width: n.width,
							height: n.height,
							mask: n.mask,
							autoClose: !1,
							buttons: [{
								name: "立即下载",
								className: "primary-reverse"
							}],
							callback: function() {
								try {
									i()
								} catch (t) {
									e.showLog(t)
								}
							}
						}) : g > h && g < l ? y({
							title: n.title,
							content: c,
							buttons: n.buttons,
							width: n.width,
							height: n.height,
							mask: n.mask,
							callback: function() {
								try {
									"立即下载" == t(this).text().trim() && i()
								} catch (t) {
									e.showLog(t)
								}
							}
						}) : (k(), n.needTips && e.hint(b))) : g < l ? x() : k(), f.onSuccess && f.onSuccess(r), !p && f.id && a(n)
				}).fail(function(t) {
					f.onFail && f.onFail(), n.tips.fail && e.hint(n.tips.fail)
				})
			}
			var r = {
				id: "",
				target: "i",
				title: "版本更新",
				tips: {
					nowVersion: "",
					minVersion: "您的版本太低,需要卸载安装最新版才能正常使用!",
					fail: "网络超时,请检测网络再次尝试"
				},
				currentVersion: "",
				currentVersionCode: "",
				width: 580,
				height: 500,
				mask: !0,
				needTips: !0,
				url: "",
				data: {},
				native: !0,
				method: "GET",
				buttons: [{
					name: "取消",
					className: ""
				}, {
					name: "立即下载",
					className: "primary-reverse"
				}],
				timeout: 2e4,
				callback: null,
				onSuccess: null,
				onFail: null
			};
			n = n || {};
			var l, c, s, u, d, f = t.extend(!0, r, e.config.checkVersion, n),
				h = t(f.id),
				p = !1,
				g = parseInt(f.currentVersionCode || e.config.versionCode),
				v = f.currentVersion || e.config.version,
				m = f.tips.minVersion,
				b = f.tips.nowVersion || "您目前的版本" + v + ",已经是最新了 ^_^",
				w = f.target.indexOf("#") > -1 ? e.obj(f.target) : h ? h.find(f.target) : null,
				y = e.confirm;
			! function(e) {
				o(e)
			}(f);
			var x = function() {
					w && w.find(".bui-badges").length || w && w.append('<span class="bui-badges"></span>')
				},
				k = function() {
					w && w.find(".bui-badges").remove()
				}
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.timer = function(n) {
			function i() {
				return d = h, f = !0, clearTimeout(p), this
			}

			function a() {
				return h = s ? c.times : 0, clearTimeout(p), g(), this
			}

			function o() {
				if (f && (h = d, f = !1), 0 == h) return h = 0, u && u.text(h), c.onEnd && c.onEnd.call(this, {
					count: h,
					target: u && u[0]
				}), void clearTimeout(p);
				var e = h < 10 ? "0" + h : h;
				return u && u.text(e), c.onProcess && c.onProcess.call(this, {
					count: h,
					target: u && u[0]
				}), h--, p = setTimeout(function() {
					o()
				}, c.interval), this
			}

			function r() {
				if (f && (h = d, f = !1), h == c.times) return c.onEnd && c.onEnd.call(this), h = c.times, u && u.text(h), void clearTimeout(
					p);
				var e = h < 10 ? "0" + h : h;
				return u && u.text(e), c.onProcess && c.onProcess.call(this, h), h++, p = setTimeout(function() {
					r()
				}, c.interval), this
			}
			var l = {
					interval: 1e3,
					target: null,
					reduce: !0,
					onEnd: null,
					onProcess: null,
					times: 10
				},
				c = t.extend({}, l, n),
				s = c.reduce,
				u = c.target ? e.obj(c.target) : null,
				d = 0,
				f = !1,
				h = s ? c.times : 0,
				p = null,
				g = s ? o : r;
			return {
				stop: function() {
					d = 0, h = s ? c.times : 0, clearTimeout(p)
				},
				start: g,
				restart: a,
				pause: i
			}
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.animate = function(i) {
			function a(t) {
				return t.id ? (N = e.objId(t.id), N.css({
					"-webkit-transition": z,
					transition: z
				}), P = t.open3D, D = t.zoom, F = t.animates || [], B = R.config = t, this) : void e.showLog("animate id不能为空",
					"bui.animate")
			}

			function o(e) {
				var e = e,
					t = Math.abs(parseFloat(e));
				e = "string" == typeof e && e.indexOf("%") > -1 ? "-" + e : D ? -t / 100 + "rem" : -t + "px";
				var n = "translateX(" + e + ")";
				return F.push(n), A.push(n), this
			}

			function r(e) {
				var e = e,
					t = Math.abs(parseFloat(e));
				e = "string" == typeof e && e.indexOf("%") > -1 ? e : D ? t / 100 + "rem" : t + "px";
				var n = "translateX(" + e + ")";
				return F.push(n), A.push(n), this
			}

			function l(e) {
				var e = e,
					t = Math.abs(parseFloat(e));
				e = "string" == typeof e && e.indexOf("%") > -1 ? "-" + e : D ? -t / 100 + "rem" : -t + "px";
				var n = "translateY(" + e + ")";
				return F.push(n), A.push(n), this
			}

			function c(e) {
				var e = e,
					t = Math.abs(parseFloat(e));
				e = "string" == typeof e && e.indexOf("%") > -1 ? e : D ? t / 100 + "rem" : t + "px";
				var n = "translateY(" + e + ")";
				return F.push(n), A.push(n), this
			}

			function s(e) {
				var t = String(e),
					e = t.indexOf(",") > -1 ? t : e + ",1",
					n = "scale(" + e + ")";
				return F.push(n), A.push(n), this
			}

			function u(e) {
				var e = String(e),
					t = "scaleX(" + e + ")";
				return F.push(t), A.push(t), this
			}

			function d(e) {
				var e = String(e),
					t = "scaleY(" + e + ")";
				return F.push(t), A.push(t), this
			}

			function f(e) {
				var t = String(e),
					e = t.indexOf("deg") > -1 ? t : t + "deg",
					n = "rotate(" + e + ")";
				return F.push(n), A.push(n), this
			}

			function h(e) {
				var t = String(e),
					e = t.indexOf("deg") > -1 ? t : t + "deg",
					n = "rotateX(" + e + ")";
				return F.push(n), A.push(n), this
			}

			function p(e) {
				var t = String(e),
					e = t.indexOf("deg") > -1 ? t : t + "deg",
					n = "rotateY(" + e + ")";
				return F.push(n), A.push(n), this
			}

			function g(e) {
				var e, t = String(e),
					i = [];
				t.indexOf(",") > -1 ? (i = t.split(","), e = "", n.each(i, function(t, n) {
					t < 2 && (e += n.indexOf("deg") > -1 ? "," + n : "," + n + "deg")
				}), e = e.substr(1)) : e = t.indexOf("deg") > -1 ? t : t + "deg,0";
				var a = "skew(" + e + ")";
				return F.push(a), A.push(a), this
			}

			function v(e) {
				var t = String(e),
					e = t.indexOf("deg") > -1 ? t : t + "deg",
					n = "skewX(" + e + ")";
				return F.push(n), A.push(n),
					this
			}

			function m(e) {
				var t = String(e),
					e = t.indexOf("deg") > -1 ? t : t + "deg",
					n = "skewY(" + e + ")";
				return F.push(n), A.push(n), this
			}

			function b(e) {
				var t = String(e);
				return N.css({
					"-webkit-transform-origin": t,
					"transform-origin": t
				}), this
			}

			function w(e, t) {
				var n = t || "ease-out";
				return z = "number" == typeof e ? "all " + e + "ms " + n : 0 == e || "none" == e ? "none" : 1 == e ? "all 300ms " +
					n : e || "all 300ms " + n, N.css({
						"-webkit-transition": z,
						transition: z
					}), this
			}

			function y() {
				return F = [], A = [], M = [], V = 0, this
			}

			function x(e) {
				return H && (w(), H = !1), N.css({
					"-webkit-transform": "",
					transform: ""
				}), "none" != z && N.one("webkitTransitionEnd", function() {
					e && e.call(R, this)
				}), y(), this
			}

			function k(e) {
				var t = P ? A.join("") + "translateZ(0)" : A.join("");
				try {
					M[V] = [], M[V].push(F.join("")), F = [], V++
				} catch (e) {}
				return N.css({
					"-webkit-transform": t,
					transform: t
				}), "none" != z ? N.one("webkitTransitionEnd", function() {
					e && e.call(R, this)
				}) : e && e.call(R, this), this
			}

			function I(e) {
				function t(e) {
					var o = e[i] || [],
						r = e[i + 1] || [];
					n = P ? o.join("") + "translateZ(0)" : o.join(""), n = A.join("") + n.replace(/\(.*?\)/g, "(0)"), N.css({
						"-webkit-transform": "",
						transform: ""
					}), i++;
					try {
						N.one("webkitTransitionEnd", function() {
							if (!r || !r.length) return i = 0, void(historyCache = []);
							t(a)
						})
					} catch (e) {}
				}
				var n, i = 0,
					a = M.reverse();
				return t(a), this
			}

			function T(e, t) {
				return N.css({
					"-webkit-transform": e,
					transform: e
				}), t && "none" != w && N.one("webkitTransitionEnd", function() {
					t.call(R, this)
				}), this
			}

			function C(e) {
				return e = parseFloat(e) || 100, P = !0, N.parent().css({
					perspective: e + "px"
				}), this
			}

			function O(e, n) {
				var i = {};
				return "object" === (void 0 === e ? "undefined" : t(e)) ? (i = e, n = "") : "string" == typeof e && (i[e] = n ||
					""), N.css(i), this
			}

			function j(t) {
				var n = {};
				return e.widget.call(n, t)
			}

			function S(t, n) {
				return e.option.call(R, t, n)
			}
			var E = {
				id: "",
				zoom: !0,
				open3D: !1,
				animates: []
			};
			if ("object" === (void 0 === i ? "undefined" : t(i)) && i.id) i = i || {};
			else {
				var L = i || "";
				i = {}, i.id = L
			}
			var N, P, D, F, R = {
					origin: b,
					transition: w,
					property: O,
					open3D: C,
					transform: T,
					start: k,
					stop: x,
					clear: y,
					left: o,
					right: r,
					up: l,
					down: c,
					scale: s,
					scaleX: u,
					scaleY: d,
					rotate: f,
					rotateX: h,
					rotateY: p,
					skew: g,
					skewX: v,
					skewY: m,
					reverse: I,
					widget: j,
					option: S,
					config: B,
					init: a
				},
				B = R.config = n.extend(!0, {}, E, i),
				A = [],
				M = [],
				z = "all 300ms ease-out";
			a(B);
			var V = 0,
				H = !1;
			return R
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.toggle = function(n) {
			function i(t) {
				if (t = t || m, b = !1, !t.id) return void e.showLog("toggle id不能为空", "bui.toggle");
				y = e.objId(t.id), m = v.config = t, g = y.attr("class") || "";
				var n = t.effect,
					i = t.inOrder ? e.array.index(w.hideInOrder, n) : e.array.index(w.hide, n),
					a = n && (e.array.index(w.show, n) > -1 ? e.array.index(w.show, n) : i);
				return I = !(y[0] && "none" == y[0].style.display || "none" == y.css("display")), a < 0 ? (p = w.show[0], h = t.inOrder ?
					w.hideInOrder[0] : w.hide[0]) : (p = w.show[a], h = t.inOrder ? w.hideInOrder[a] : w.hide[a]), this
			}

			function a() {
				return I
			}

			function o(t, n) {
				if (!b) return y = e.objId(m.id), !(!x && !k) && (x = !1, "function" == typeof t ? (t = t, n = n || p || "") : (n =
					t || p || "", t = null), y[0] && "none" == y[0].style.display && y.css("display", "block"), y.addClass(
					"animated " + n), "showIn" == n || "showOut" == n || "none" == n ? (m.revert && y.removeClass("animated " + n),
					t && t.call(v, this), I = !0, x = !0) : y.one("webkitAnimationEnd", function() {
					try {
						!I && y.css("display", "block"), m.revert && y.removeClass("animated " + n), t && t.call(v, this), I = !0,
							x = !0
					} catch (t) {
						e.showLog(t, "toggle show method")
					}
				}), this)
			}

			function r(t, n) {
				if (!b && (y = e.objId(m.id), x || k)) return k = !1, "function" == typeof t ? (t = t, n = n || h || "") : (n = t ||
						h || "", t = null), y.css("display", "block").addClass("animated " + n), "showIn" == n || "showOut" == n ||
					"none" == n ? (y.css("display", "none"), m.revert && y.removeClass("animated " + n), t && t.call(v, this), I = !
						1, k = !0) : y.one("webkitAnimationEnd", function() {
						try {
							y.css("display", "none"), m.revert && y.removeClass("animated " + n), t && t.call(v, this), I = !1, k = !0
						} catch (t) {
							e.showLog(t, "toggle hide method")
						}
					}), this
			}

			function l() {
				return y.remove(), this
			}

			function c(e) {
				var e = 1 == e;
				y && (y.off(), e && y.remove()), b = !0
			}

			function s(t) {
				var n = {};
				return e.widget.call(n, t)
			}

			function u(t, n) {
				return e.option.call(v, t, n)
			}
			var d = {
				id: "",
				effect: "fadeIn",
				revert: !0,
				inOrder: !1
			};
			if ("string" == typeof n) {
				var f = n || "";
				n = {}, n.id = f
			}
			var h, p, g, v = {
					show: o,
					hide: r,
					remove: l,
					isShow: a,
					destroy: c,
					widget: s,
					option: u,
					config: m,
					init: i
				},
				m = v.config = t.extend(!0, {}, d, n),
				b = !1,
				w = {
					show: ["fadeIn", "fadeInLeft", "fadeInRight", "fadeInDown", "fadeInUp", "fadeInLeftBig", "fadeInRightBig",
						"fadeInUpBig", "fadeInDownBig", "zoomIn", "bounceIn", "rotateIn", "rollIn", "flipInX", "flipInY",
						"lightSpeedIn", "showIn", "slideInRight", "slideInLeft", "coverInLeft", "coverInRight", "zoomSlideInLeft",
						"zoomSlideInRight", "pushInLeft", "pushInRight"
					],
					hide: ["fadeOut", "fadeOutLeft", "fadeOutRight", "fadeOutUp", "fadeOutDown", "fadeOutLeftBig", "fadeOutRightBig",
						"fadeOutDownBig", "fadeOutUpBig", "zoomOut", "bounceOut", "rotateOut", "rollOut", "flipOutX", "flipOutY",
						"lightSpeedOut", "showOut", "slideOutRight", "slideOutLeft", "coverOutLeft", "coverOutRight",
						"zoomSlideOutLeft", "zoomSlideOutRight", "pushOutLeft", "pushOutRight"
					],
					hideInOrder: ["fadeOut", "fadeOutRight", "fadeOutLeft", "fadeOutDown", "fadeOutUp", "fadeOutRightBig",
						"fadeOutLeftBig", "fadeOutUpBig", "fadeOutDownBig", "zoomOut", "bounceOut", "rotateOut", "rollOut", "flipOutX",
						"flipOutY", "lightSpeedOut", "showOut", "slideOutLeft", "slideOutRight", "coverOutRight", "coverOutLeft",
						"zoomSlideOutRight", "zoomSlideOutLeft", "pushOutRight", "pushOutLeft"
					]
				},
				y = null,
				x = !0,
				k = !0,
				I = !1;
			return m.id && i(m), v
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.mask = function(n) {
			function i(n) {
				j = !1;
				var i = t.extend(!0, w, x, n);
				return i.onBeforeInit && i.onBeforeInit.call(y, i), i.appendTo = i.appendTo || "body", T = e.objId(i.appendTo), x =
					y.config = i, m = T.css("position"), i.autoTrigger && r(i), C = e.objId(i.id), i.onInited && i.onInited.call(y,
						i), this
			}

			function a(e) {
				var t = function(t) {
					e.callback && e.callback.call(y, t), e.autoClose && s(), t.stopPropagation()
				};
				C.on("click.mask", t), O = !0
			}

			function o(t) {
				var n = t.background ? t.background : "rgba(0,0,0," + t.opacity + ")",
					i = "";
				return i += '<div id="' + I + '" class="' + e.prefix("mask") + '" style="background:' + n + ";z-index:" + t.zIndex +
					'"></div>'
			}

			function r(n) {
				if (!j) {
					var i = t.extend(!0, {}, w, x, n),
						r = o(i);
					return C = e.objId(I), C && C.length ? C.css("display", "block") : (T.append(r).css("position", "relative"), C =
						e.objId(I)), b = !0, v.call(y, "show"), O || a(i), this
				}
			}

			function l() {
				if (!j) return C && C.remove(), C = null, T.css("position", m || "static"), b = !1, O = !1, v.call(y, "hide"),
					this
			}

			function c(t) {
				if (!j) return C = e.objId(I), C && C.length ? (C.css("display", "block"), T.css("position", "relative"), b = !0) :
					r(x), v.call(y, "show"), this
			}

			function s() {
				if (!j) return C && C.css("display", "none"), T.css("position", "relative"), b = !1, v.call(y, "hide"), this
			}

			function u() {
				return b
			}

			function d(e) {
				l(), T && T.off("click.mask"), g("show"), g("hide"), j = !0
			}

			function f(t) {
				var n = {};
				return e.widget.call(n, t)
			}

			function h(t, n) {
				return e.option.call(y, t, n)
			}

			function p(t, n) {
				return e.on.apply(y, arguments), this
			}

			function g(t, n) {
				return e.off.apply(y, arguments), this
			}

			function v(t) {
				y.self = this == window || this == y ? null : this, e.trigger.apply(y, arguments)
			}
			var m, b, w = {
					id: "",
					appendTo: "",
					opacity: .3,
					background: "",
					zIndex: 100,
					autoTrigger: !1,
					autoClose: !1,
					onBeforeInit: null,
					onInited: null,
					callback: null
				},
				y = {
					handle: {},
					on: p,
					off: g,
					hide: s,
					show: c,
					isShow: u,
					remove: l,
					destroy: d,
					widget: f,
					option: h,
					config: x,
					init: i
				},
				x = y.config = t.extend(!0, {}, w, e.config.mask, n),
				k = e.guid(),
				I = x.id ? x.id.indexOf("#") > -1 ? x.id.substring(1) : x.id : k,
				T = (t("body"), e.objId(x.appendTo)),
				C = null,
				O = !1,
				j = !1;
			return i(x), y
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.loading = function(n) {
			function i(i) {
				D = !1;
				var a = t.extend(!0, {}, j, i);
				return a.onBeforeInit && a.onBeforeInit.call(O, n), a.appendTo = a.appendTo || "body", S = t(a.appendTo), j = O.config =
					a, a.autoTrigger && N.length < 1 && r(a), N = e.objId(E), a.onInited && a.onInited.call(O, a), this
			}

			function a(e) {
				var t = e || j,
					n = function(e) {
						t.callback && t.callback.call(O, e), e.stopPropagation()
					};
				return S.on("click.bui", "#" + E, n), P = !0, this
			}

			function o(t) {
				t = t || {};
				var n = t.text,
					i = S.width() || document.documentElement.clientWidth,
					a = n && "block" == t.display ? parseInt(t.height) + 30 : parseInt(t.height),
					o = -i / 2,
					r = -a / 2,
					l = "block" == t.display ? e.prefix("loading-block") : e.prefix("loading-inline"),
					c = "";
				return c += '<div id="' + E + '" class="' + e.prefix("loading") + " " + l + '" style="width:' + i + "px;height:" +
					a + "px;line-height:" + a + "px;margin-left:" + o + "px;margin-top:" + r + "px;" + (t.zIndex ? "z-index:" + t.zIndex :
						"") + '" >', t.onlyText || (c += '<div class="' + e.prefix("loading-cell") + '" style="width:' + parseFloat(t.width) +
						"px;height:" + parseFloat(t.height) + 'px;"></div>'), c += '<div class="' + e.prefix("loading-text") + '">' + t
					.text + "</div>", c += "</div>", t && t.template ? t.template.call(O, t) : c
			}

			function r(n) {
				if (!D) {
					var i = t.extend(!0, {}, j, n);
					if (N = e.objId(E), T = N.children(".bui-loading-cell"), N.hasClass("bui-loading-pause")) N.removeClass(
						"bui-loading-pause"), k.call(this, "start");
					else {
						N.length && N.remove();
						var r = o(i);
						S.append(r), M && M.show(), k.call(this, "show")
					}
					return i.timeout && (R && clearTimeout(R), R = setTimeout(function() {
						d()
					}, i.timeout)), P || a(i), F = !0, this
				}
			}

			function l(t) {
				if (!D) {
					N = e.objId(E), I = N.children(".bui-loading-text");
					return void 0 === t ? I && I.text() : (I && I.text(t), this)
				}
			}

			function c() {
				D || (N = e.objId(E), T = N.children(".bui-loading-cell"), T.css("display", "inline-block"), N.removeClass(
					"bui-loading-pause"))
			}

			function s() {
				D || (N = e.objId(E), T = N.children(".bui-loading-cell"), T.css("display", "none"), N.addClass(
					"bui-loading-pause"))
			}

			function u() {
				return F
			}

			function d() {
				if (!D) return N = e.objId(E), N && N.remove(), N = null, M && M.remove(), P = !1, F = !1, k.call(this, "remove"),
					k.call(this, "hide"), this
			}

			function f() {
				if (!D) return N.addClass("bui-loading-pause"), k.call(this, "pause"), this
			}

			function h(n) {
				var i = n || {};
				if (!D) {
					var a = t.extend(!0, j, i);
					return N = e.objId(a.id), N && N.length ? (l(a.text), N[0].style.display = "-webkit-box", M && M.show(), "" == a
						.appendTo && g(j), k.call(this, "show")) : r(a), j.timeout && (R && clearTimeout(R), R = setTimeout(function(e) {
						p()
					}, j.timeout)), F = !0, this
				}
			}

			function p() {
				if (!D) return N = e.objId(E), j.appendTo ? (N.css("display", "none"), M && M.hide()) : (v(), openCache.length <
					1 && N && N.length && (N.css("display", "none"), M && M.hide())), F = !1, k.call(this, "hide"), this
			}

			function g(t) {
				!e.array.compare(openCache, E, "id") && t.callback && openCache.push({
					id: E,
					callback: t.callback
				})
			}

			function v() {
				openCache.pop()
			}

			function m(e) {
				var e = 1 == e;
				d(), S && openCache.length < 1 && S.off("click.bui"), x("show"), x("hide"), x("start"), x("stop"), x("pause"), x(
					"remove"), M && M.destroy(e), D = !0
			}

			function b(t) {
				var n = {
					mask: M || {}
				};
				return e.widget.call(n, t)
			}

			function w(t, n) {
				return e.option.call(O, t, n)
			}

			function y(t, n) {
				return e.on.apply(O, arguments), this
			}

			function x(t, n) {
				return e.off.apply(O, arguments), this
			}

			function k(t) {
				O.self = this == window || this == O ? null : this, e.trigger.apply(O, arguments)
			}
			var I, T, C = {
					appendTo: "",
					width: 30,
					height: 30,
					text: "",
					onlyText: !1,
					mask: !0,
					zIndex: "",
					autoTrigger: !1,
					autoClose: !0,
					timeout: 0,
					opacity: 0,
					display: "block",
					template: null,
					onBeforeInit: null,
					onInited: null,
					callback: null
				},
				O = {
					handle: {},
					on: y,
					off: x,
					start: r,
					stop: d,
					isLoading: u,
					pause: f,
					text: l,
					showRing: c,
					hideRing: s,
					show: h,
					hide: p,
					destroy: m,
					widget: b,
					option: w,
					config: j,
					init: i
				},
				j = O.config = t.extend(!0, {}, C, e.config.loading, n),
				S = (t("body"), null),
				E = e.guid(),
				L = E + "-mask",
				N = e.objId(E),
				P = !1,
				D = !1,
				F = !1,
				R = null;
			j.id = E;
			var B = j.callback;
			j.callback = function(e) {
				j.autoClose && d(), B && B.call(O, e)
			};
			var A = t.extend(!0, {}, j, {
					id: L
				}),
				M = j.mask ? e.mask(A) : null;
			return i(j), O
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.slide = function(n) {
			function i(n) {
				var i = t.extend(!1, he, n);
				if (!1 === (i.onBeforeInit && i.onBeforeInit.call(fe, i))) return this;
				if (!i.id) return void e.showLog("slide id不能为空", "bui.slide.init");
				if (z = e.obj(i.id), he = fe.config = i, Z = i.direction, oe = window && window.viewport && window.viewport.width() ||
					document.documentElement.clientWidth, re = window && window.viewport && window.viewport.height() || document.documentElement
					.clientHeight, i.height = String(i.height).indexOf("%") > -1 ? parseFloat(i.height) / 100 * re : parseFloat(i.height),
					i.width = String(i.width).indexOf("%") > -1 ? parseFloat(i.width) / 100 * oe : parseFloat(i.width), "function" ==
					typeof i.template) z.html(i.template.call(fe, i.data || []) || "");
				else if (i.data && !i.template) {
					var l = z.find(i.main).length <= 0;
					if (l) {
						var c = N(i);
						z.html(c)
					}
					var s = z.find(i.children),
						u = P.call(fe, i.data);
					s.html(u)
				}
				if (V = 0 == i.menu.indexOf("#") ? e.obj(i.menu) : z.find(i.menu).eq(0), H = V.children(), q = z.find(i.children)
					.eq(0), U = q.parent(), W = q.children(), se = W.length, i.loop && W.length) {
					var d = W.eq(W.length - 1).clone(!0),
						f = W.eq(0).clone(!0);
					q.prepend(d).append(f), W = q.children();
					var h = W.length - 1;
					A("afterto"), B("afterto", function(e) {
						0 == e && g(h - 1, "none"), e == h && g(1, "none")
					}), g(1, "none");
					!z.hasClass(".bui-slide-loop") && z.addClass("bui-slide-loop"), me = !0
				}
				if (i.cross && W.length) {
					var p = function(e) {
						var t = W.eq(e);
						t.removeClass("bui-cross-prev").removeClass("bui-cross-next"), t.prev().removeClass("bui-cross-next").addClass(
							"bui-cross-prev"), t.next().removeClass("bui-cross-prev").addClass("bui-cross-next")
					};
					!z.hasClass(".bui-slide-cross") && z.addClass("bui-slide-cross"), A("to", p), B("to", p), g(1, "none"), be = !0
				}
				return a(i), r(), ce = i.autoplay, ce && v(), ve || (o(), ke = !0), ge = q.children(".active").length ? q.children(
						".active").index() : ge || i.index, parseInt(i.index) > 0 ? g(i.index, "none") : g(ge, "none"), i.onInited && i
					.onInited.call(fe, i), this
			}

			function a(e) {
				var t = z.parents(".bui-page"),
					n = (z.parents("main"), z[0] && z[0].offsetTop || 0),
					i = t.children(e.header),
					a = i[0] && i[0].offsetHeight || 0,
					o = t.children(e.footer),
					r = o[0] && o[0].offsetHeight || 0;
				ne = re - (a || 0) - (r || 0) - n, ie = 0 == e.height ? ne : e.height;
				var l = "static" == V.parent().css("position") ? V.css("position") : V.parent().css("position");
				ae = z.find(e.menu).length ? "absolute" == l || "fixed" == l ? ie : ie - (V[0] && V[0].offsetHeight || 0) : ie, X =
					e.fullscreen ? re : 0 == e.height ? ae : e.height, J = e.fullscreen ? oe : e.width || oe, $ = W.length, Q = "x" ==
					Z ? J / he.visibleNum : J, te = "y" == Z ? X / he.visibleNum : X, le = "y" == he.direction ? te * he.scrollNum :
					Q * he.scrollNum, Y = J * $ / he.visibleNum, _ = X * $ / he.visibleNum
			}

			function o() {
				var e = function(e) {
					var n = t(this).hasClass("active"),
						i = t(this).index(),
						a = t(this).attr("disabled"),
						o = t(this).hasClass("disabled") || "" == a || "true" == a || "disabled" == a;
					n || o || (he.animate ? g(i) : g(i, "none"), k(i), ce && v()), e.stopPropagation()
				};
				0 == he.menu.indexOf("#") ? V.on("click.bui", "li", e) : z.on("click.bui", he.menu + " li", e), z.on("click.bui",
					he.prev, y), z.on("click.bui", he.next, x);
				var n = he.children + " " + he.item;
				z.on("click.bui", n, function(e) {
					var n = t(e.target).closest(W),
						i = n.attr("href");
					i && bui.load({
						url: i
					}), M.call(fe, "click", e), he.callback && he.callback.call(fe, e, fe)
				}), T(), he.swipe || I(), ve = !0
			}

			function r() {
				Ie = {
					x: {
						swipeDir: "swipeleft",
						swipeDir2: "swiperight",
						width: le
					},
					y: {
						swipeDir: "swipeup",
						swipeDir2: "swipedown",
						width: le
					}
				}, ue = {
					x: {
						parentInitKey: "width",
						parentInitValue: Y,
						boxCss: "display:-webkit-box;display:box;-webkit-box-align: start;-webkit-box-pack: center;width:100%;",
						boxItemCSS: "-webkit-box-flex:1;box-flex:1;width:" + Q + "px;height:" + te + "px;"
					},
					y: {
						parentInitKey: "height",
						parentInitValue: _,
						box: "display:-webkit-box;display:box;-webkit-box-align: start;-webkit-box-pack: center;width:100%;-webkit-box-orient: vertical;box-orient: vertical;",
						boxItemCSS: "-webkit-box-flex:1;box-flex:1;width:" + Q + "px;height:" + te + "px;"
					}
				}, W = q.children(), se = W.length, U[ue[Z].parentInitKey](ue[Z].parentInitValue);
				var e, n = W.length;
				for (e = 0; e < n; e++) {
					var i = W[e].getAttribute("data-scroll"),
						a = null == i ? he.scroll : "false" != i;
					ue[Z].boxItemCSS = ue[Z].boxItemCSS + (a ? "overflow:auto;" : "overflow:hidden;"), W[e].style.cssText = ue[Z].boxItemCSS
				}
				try {
					q[0] && (q[0].style.cssText = ue[Z].boxCss)
				} catch (e) {
					console.log("请检查下children参数是否正确.", "bui.slide id:" + he.id)
				}
				var o = "y" == Z && he.visibleNum > 1 ? ae / he.visibleNum : ae,
					r = he.zoom ? ie / 100 + "rem" : ie + "px",
					c = he.zoom ? o / 100 + "rem" : o + "px";
				he.zoom;
				if (he.fullscreen ? (t("main").css({
						position: "static"
					}), z.addClass("bui-slide-fullscreen").css({
						position: "absolute",
						top: 0,
						left: 0,
						right: 0,
						bottom: 0,
						"z-index": 10,
						overflow: "hidden",
						width: J,
						height: re
					}), W.addClass(he.alignClassName || "bui-box-center").css("height", re)) : (z.css({
						position: "relative",
						overflow: "hidden",
						width: J,
						height: r
					}), W.addClass(he.alignClassName).height(c)), he.autoheight && z.addClass("bui-slide-autoheight"), he.autopage) {
					var s = l(),
						u = q.find(".active").index() + 1,
						d = C(s, u);
					z.children(".bui-slide-head").remove(), z.append(d), H = z.find(he.menu).eq(0).children()
				}
			}

			function l() {
				var e = W.length,
					t = e - he.visibleNum;
				return e % he.scrollNum != 0 ? t + 1 : t / he.scrollNum + 1
			}

			function c(t) {
				var n = t.originalEvent && t.originalEvent.targetTouches || t.targetTouches,
					i = Ce ? n[0] : t;
				return pe.x1 = i.pageX, pe.y1 = i.pageY, pe.direction = "", he.stopHandle && e.unit.checkTargetInclude(t.target,
					he.stopHandle) ? void(Se = !1) : (Le = -ge * le, Ne = -ge * le, n.length > 1 || t.scale && 1 !== t.scale ? void f(
					"x" == Z ? Le : Ne) : (ce && (m(), ce = !0), M.call(fe, "touchstart", t, pe), he.onStart && he.onStart.call(fe,
					t, pe, fe), void(Se = !0)))
			}

			function s(n) {
				var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches;
				if (i.length > 1 || n.scale && 1 !== n.scale) return void f("x" == Z ? Le : Ne);
				if (Se) {
					var a = Ce ? i[0] : n;
					pe.x2 = a.pageX, pe.y2 = a.pageY, pe.direction || (pe.direction = e.swipeDirection(pe.x1, pe.x2, pe.y1, pe.y2)),
						"swipeleft" !== pe.direction && "swiperight" !== pe.direction || (n.preventDefault(), n.stopPropagation()), M.call(
							fe, "touchmove", n, pe);
					try {
						if ("y" == Z && he.scroll) {
							var o = t(n.target).closest(".active"),
								r = o[0].scrollTop || 0,
								c = o[0].scrollHeight || 0,
								s = o[0].offsetHeight || 0;
							if ("swipedown" === pe.direction && r > 1) return void(Ee = !1);
							if ("swipeup" === pe.direction && c - r - s >= 2) return void(Ee = !1)
						}
					} catch (n) {}
					G = pe.x2 - pe.x1, ee = pe.y2 - pe.y1, Ie.x.move = Le + G, Ie.x.absDelta = Math.abs(G), Ie.y.move = Ne + ee, Ie.y
						.absDelta = Math.abs(ee);
					var u = l();
					pe.direction !== Ie[Z].swipeDir && pe.direction !== Ie[Z].swipeDir2 || (he.delay && Ie[Z].absDelta > he.distance &&
						f(Ie[Z].move, "none"), he.delay || (he.bufferEffect ? f(Ie[Z].move, "none") : 0 == ge && u > 1 && ("swipeleft" ==
							pe.direction || "swipeup" == pe.direction) ? f(Ie[Z].move, "none") : ge == u - 1 && u > 1 && ("swiperight" ==
							pe.direction || "swipedown" == pe.direction) ? f(Ie[Z].move, "none") : ge > 0 && ge < u - 1 && u > 1 && f(Ie[
							Z].move, "none"), n.preventDefault()), he.onMove && he.onMove.call(fe, n, pe, fe)), Ee = !0
				}
			}

			function u(e) {
				M.call(fe, "touchend", e, pe), Ee && (G = pe.x2 - pe.x1, ee = pe.y2 - pe.y1, Ie.x.delta = Le, Ie.x.absDelta =
					Math.abs(G), Ie.y.delta = Ne, Ie.y.absDelta = Math.abs(ee), Ie[Z].absDelta > he.distance ? (d.call(this, e, pe,
						Ie), he.onEnd && he.onEnd.call(fe, e, pe, fe)) : Ie[Z].absDelta < he.distance && f(Ie[Z].delta), ce && v(),
					"swipeleft" != pe.direction && "swiperight" != pe.direction || e.stopPropagation(), Oe += pe.y2 - pe.y1, je +=
					pe.x2 - pe.x1, pe.lastX = je, pe.lastY = Oe, pe = {
						x1: 0,
						x2: 0,
						y1: 0,
						y2: 0,
						direction: ""
					}, Se = !1, Ee = !1, p())
			}

			function d(e, t, i) {
				ge = q.children(".active").index();
				var a;
				if (t.direction == i[Z].swipeDir) {
					var o = W.length,
						r = o - he.visibleNum,
						l = o % he.scrollNum != 0 ? r + 1 : r / he.scrollNum + 1;
					if (ge >= l - 1) a = ge, i[Z].delta = -a * i[Z].width, f(i[Z].delta), ge = a, k(a), M.call(fe, "last", a);
					else if (a = ge + 1, i[Z].delta = -a * i[Z].width, f(i[Z].delta), ge = a, k(a), n.autoload) O(ge);
					else {
						W.eq(ge);
						if (n.loop && ge > se) return;
						M.call(fe, "to", a)
					}
					M.call(fe, "next", a)
				} else if (t.direction == i[Z].swipeDir2)
					if (ge > 0) {
						if (a = ge - 1, i[Z].delta = -a * i[Z].width, f(i[Z].delta), ge = a, k(a), n.autoload) O(ge);
						else {
							W.eq(ge);
							if (n.loop && 0 == ge) return;
							M.call(fe, "to", a)
						}
						M.call(fe, "prev", a)
					} else a = ge, i[Z].delta = -a * i[Z].width, f(i[Z].delta), ge = a, k(a), M.call(fe, "first", a)
			}

			function f(e, t) {
				var n = he.transition,
					t = t || "all " + n + "ms",
					e = e || 0;
				switch (Z) {
					case "x":
						h(e + "px", 0, t, U);
						break;
					case "y":
						h(0, e + "px", t, U)
				}
				return this
			}

			function h(e, t, n, i) {
				var a = t || 0;
				"y" == Z && he.zoom && String(t).indexOf("%") <= -1 && (a = parseInt(t) / 100 + "rem");
				var n, i = i || z,
					e = e || 0,
					o = e,
					r = String(e).indexOf("%") > -1 ? String(e) : o,
					l = String(t).indexOf("%") > -1 ? String(t) : a;
				n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms";
				try {
					i.css({
						"-webkit-transition": n,
						transition: n,
						"-webkit-transform": "translate(" + r + "," + l + ")",
						transform: "translate(" + r + "," + l + ")"
					})
				} catch (e) {
					console.log(e.message)
				}
			}

			function p(e) {
				U.one("webkitTransitionEnd", function() {
					U.css({
						"-webkit-transition": "none",
						transition: "none"
					}), e && e.call(fe, ge), M.call(fe, "afterto", ge)
				})
			}

			function g(e, i, a) {
				var o = 0,
					r = null,
					a = 0 != a;
				if ("string" == typeof e && e.indexOf(".html") > -1) {
					var c = [];
					H.each(function(n, i) {
						var a = t(i).attr("href") || void 0;
						c[n] = a, a == e && (o = n)
					})
				} else o = parseInt(e);
				"function" == typeof i && (r = i, i = "");
				var s = {
						x: {
							transform: -o * parseFloat(le)
						},
						y: {
							transform: -o * parseFloat(le)
						}
					},
					u = l();
				if (o >= u || o < 0) return !1;
				if (f(s[Z].transform, i), ge = o, k(o), ce && v(), n.autoload) O(ge);
				else {
					W.eq(ge);
					if (!a) return;
					M.call(fe, "to", o)
				}
				return p(r), this
			}

			function v(e) {
				var e = e || he.interval;
				m(), ce = !0;
				var t = ge;
				K = setInterval(function() {
					var e = l();
					t >= 0 && t < e - 1 ? t += 1 : t = 0, g(t)
				}, e), M.call(fe, "play")
			}

			function m(e) {
				if (K) try {
					window.clearInterval(K), ce = !1, M.call(fe, "stop")
				} catch (e) {}
				return this
			}

			function b(e) {
				v(e)
			}

			function w() {
				return ge
			}

			function y() {
				var e = ge - 1;
				return he.loop && -1 == e && (e = se), g(e), M.call(fe, "prev", e), this
			}

			function x() {
				var e = ge + 1;
				return he.loop && e > se + 1 && (e = 1), g(e), M.call(fe, "next", e), this
			}

			function k(e) {
				e = e || 0, W.removeClass("active"), W.eq(e).addClass("active"), H.removeClass("active"), H.eq(e).addClass(
					"active")
			}

			function I() {
				return z.off("touchstart", c).off("touchmove", s).off("touchend", u).off("touchcancel"), M.call(fe, "lock"), this
			}

			function T(e) {
				return z.on("touchstart", c).on("touchmove", s).on("touchend", u).on("touchcancel", function() {
					f("x" == Z ? Le : Ne)
				}), M.call(fe, "unlock"), this
			}

			function C(e, t) {
				var n, i = "",
					t = t || 1;
				for (i += '<div class="bui-slide-head">', i += "<ul >", n = 1; n < Number(e) + 1; n++) i += "<li " + (n == t ?
					'class="active"' : "") + ">" + n + "</li>";
				return i += "</ul >", i += "</div >"
			}

			function O(n) {
				var i = W.eq(n),
					a = H.eq(n),
					o = a.attr("href") || "";
				if (e.array.compare(ye, n)) return M.call(fe, "to", n, "200"), !1;
				he.autoload && (o ? o in we ? (i.html(we[o]), ye.push(n), !ke && M.call(fe, "load", n, status), !ke && M.call(fe,
					"to", n, status), ke = !1) : (we[o] = "", t.ajax({
					url: o,
					dataType: "html",
					async: he.async,
					success: function(e, t) {
						we[o] = e, i.html(e), ye.push(n), M.call(fe, "load", n, t), !ke && M.call(fe, "to", n, t), ke = !1
					},
					error: function(e, t) {
						M.call(fe, "loadfail", n, t)
					}
				})) : (!ke && M.call(fe, "to", n), ke = !1))
			}

			function j(t) {
				var n, i = e.guid(),
					t = t || 1,
					a = "";
				for (n = 0; n < t; n++) a += '<li id="' + i + '" style="-webkit-box-flex:1;box-flex:1;width:' + Q + "px;height:" +
					te + 'px;"></li>';
				q.append(a), W = q.children();
				var o = Q * W.length;
				$ = W.length, U.width(o)
			}

			function S(n) {
				var i = {
						id: null,
						url: "",
						preload: !1,
						param: {},
						success: null,
						fail: null
					},
					a = t.extend(!0, {}, i, n),
					o = a.url || "",
					r = null,
					l = W.length ? ge + 1 : 0;
				if (a.id) r = e.obj(a.id);
				else {
					var c = W.eq(l);
					c.length ? r = c : (j(), W = q.children(), r = W.eq(l))
				}
				if (o)
					if (ge = l, xe[l] = a.param, o in we) {
						e.array.compare(ye, l) || (ye.push(l), r.html(we[o]), a.success && a.success.call(fe, we[o], "cache"), M.call(
							fe, "load", we[o], "cache")), a.preload || g(l)
					} else t.ajax({
						url: o,
						success: function(t, n) {
							t ? (we[o] = t, e.array.compare(ye, l) || (ye.push(l), r.html(we[o]), a.success && a.success.call(fe, we[o],
								n), M.call(fe, "load", t, n)), a.preload || g(l)) : (a.fail && a.fail.call(r, t, n), M.call(fe,
								"loadfail", t, n))
						},
						error: function(e, t) {
							a.fail && a.fail.call(fe, e, t), M.call(fe, "loadfail", e, t)
						}
					});
				return this
			}

			function E(e) {
				var e = "number" == typeof e ? e : ge;
				return xe[e] || {}
			}

			function L(e) {
				return W.eq(ge)[0]
			}

			function N(e) {
				return '<div class="' + e.main.substr(1) +
					'">\n              <ul class="bui-slide-main-ul">\n              </ul>\n            </div>'
			}

			function P(e) {
				var e = e || [],
					t = "";
				return e.length && e.forEach(function(e, n) {
					var i = e.title ? '<div class="bui-slide-title">' + e.title + "</div>" : "",
						a = e.background ? '<div class="bui-slide-img" style="background-image:url(' + e.background + ')"></div>' :
						'<div class="bui-slide-img"><img src="' + e.image + '" alt="' + (e.title || "") + '"/></div>';
					t += '<li data-id="' + (e.id || "") + '" href="' + (e.url || "") + '" >\n                  ' + a +
						"\n                  " + i + "\n                  </li>"
				}), t
			}

			function D(e) {
				var e = 1 == e;
				m(), V && (V.off("click.bui"), e && V.remove()), z && (z.off(), e && z.remove()), A("stop"), A("play"), A("first"),
					A("last"), A("to")
			}

			function F(t) {
				var n = {};
				return e.widget.call(n, t)
			}

			function R(t, n) {
				return e.option.call(fe, t, n)
			}

			function B(t, n) {
				return e.on.apply(fe, arguments), this
			}

			function A(t, n) {
				return e.off.apply(fe, arguments), this
			}

			function M(t) {
				fe.self = this == window || this == fe ? null : this, e.trigger.apply(fe, arguments)
			}
			var z, V, H, q, U, W, $, K, Y, _, J, X, Z, Q, G, ee, te, ne, ie, ae, oe, re, le, ce, se, ue, de = {
					id: "",
					menu: ".bui-slide-head > ul",
					children: ".bui-slide-main > ul",
					main: ".bui-slide-main",
					header: "header",
					footer: "footer",
					item: "li",
					prev: ".bui-slide-prev",
					next: ".bui-slide-next",
					alignClassName: "",
					stopHandle: "",
					width: 0,
					height: 0,
					data: null,
					zoom: !0,
					transition: 200,
					interval: 5e3,
					swipe: !0,
					animate: !0,
					delay: !1,
					bufferEffect: !0,
					visibleNum: 1,
					scrollNum: 1,
					distance: 40,
					direction: "x",
					autoplay: !1,
					loop: !1,
					cross: !1,
					autoheight: !1,
					autoinit: !0,
					scroll: !1,
					index: 0,
					fullscreen: !1,
					autopage: !1,
					autoload: !1,
					async: !0,
					template: null,
					callback: null,
					onBeforeInit: null,
					onInited: null,
					onStart: null,
					onMove: null,
					onEnd: null
				},
				fe = {
					handle: {},
					on: B,
					off: A,
					to: g,
					load: S,
					getPageParams: E,
					getPages: l,
					$active: L,
					prev: y,
					next: x,
					stop: m,
					start: b,
					lock: I,
					index: w,
					unlock: T,
					destroy: D,
					widget: F,
					option: R,
					config: he,
					init: i
				},
				he = fe.config = t.extend(!0, {}, de, e.config.slide, n),
				pe = {},
				ge = 0,
				ve = !1,
				me = !1,
				be = !1,
				we = {},
				ye = [],
				xe = [],
				ke = !1,
				Ie = {
					x: {},
					y: {}
				},
				Te = /hp-tablet/gi.test(navigator.appVersion),
				Ce = "ontouchstart" in window && !Te,
				Z = "",
				Oe = 0,
				je = 0,
				Se = !1,
				Ee = !1,
				pe = {
					x1: 0,
					x2: 0,
					y1: 0,
					y2: 0,
					direction: ""
				};
			try {
				he.autoinit && i(he)
			} catch (t) {
				e.showLog(t)
			}
			var Le, Ne;
			return fe
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.swipe = function() {
			var n = null,
				i = null;
			return function(a) {
				function o(i) {
					var a = t.extend(!0, X, i);
					return a.onBeforeInit && a.onBeforeInit.call(J, a), pe = !1, a.id ? (B = e.obj(a.id), V = a.width > 0 ? a.width :
						Ie.clientWidth, H = a.height > 0 ? a.height : Ie.clientHeight, A = B.children(a.handle), M = G ? B.children() :
						B, U = M.children(a.swipeleft), W = M.children(a.swiperight), $ = M.children(a.swipeup), K = M.children(a.swipedown),
						Y = parseFloat(a.movingDistance), z = Y, c(), ee || (r(a), ee = !0), n && n.close(), de || S(), a.onInited &&
						a.onInited.call(J, a), this) : void e.showLog("swipe id不能为空", "bui.swipe.init")
				}

				function r(e) {
					M.css({
						width: V,
						position: "relative",
						overflow: "hidden"
					}), !G && M.css({
						height: H
					}), A.css({
						position: "relative",
						"z-index": 10
					});
					try {
						var t = U.attr("data-moving") || Y,
							n = W.attr("data-moving") || Y,
							i = $.attr("data-moving") || Y,
							a = K.attr("data-moving") || Y,
							o = l(t),
							r = l(n),
							c = l(i),
							s = l(a);
						ne && U.css({
							width: o
						}), te && W.css({
							width: r
						}), ae && K.css({
							height: s
						}), ie && $.css({
							height: c
						})
					} catch (e) {}
				}

				function l(e) {
					return X.zoom ? e / 100 + "rem" : e + "px"
				}

				function c() {
					"x" == Q ? (te = !!W.length, ne = !!U.length) : "y" == Q ? (ae = !!K.length, ie = !!$.length) : "xy" == Q && (
						ae = !!K.length, ie = !!$.length, ne = !!U.length, te = !!W.length)
				}

				function s(n) {
					var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches;
					if (i.length > 1 || n.scale && 1 !== n.scale) return void(be = !1);
					if (X.stopHandle && e.unit.checkTargetInclude(n.target, X.stopHandle)) return void(be = !1);
					var a = me ? i[0] : n;
					Z.id = X.id, Z.x1 = a.pageX, Z.y1 = a.pageY, Z.direction = "", q = t(n.target).closest(X.handle), R.call(J,
						"touchstart", n, Z);
					var o = t(n.target).closest(".bui-scroll"),
						l = t(n.target).closest(".bui-tab-main li.active"),
						s = t(n.target).closest("main"),
						u = t(n.target).closest(".swipedown"),
						d = t(n.target).closest(".swipeup"),
						f = u.length ? u : d.length ? d : q;
					if (Z.scrollObj = o.length ? o : l.length ? l : s.length ? s : u.length ? u : f, Te = Z.scrollObj.scrollTop() ||
						0, G && !ge) {
						A = q, M = A.parent(), U = M.children(X.swipeleft), W = M.children(X.swiperight), $ = M.children(X.swipeup), K =
							M.children(X.swipedown), c();
						M.index();
						r(X), (0 == X.height || "" == M[0].style.height) && M.height(q[0] && q[0].offsetHeight)
					}
					if (Z.movingleft = parseInt(U.attr("data-moving") || Y), Z.movingright = parseInt(W.attr("data-moving") || Y),
						Z.movingup = parseInt($.attr("data-moving") || Y), Z.movingdown = parseInt(K.attr("data-moving") || Y), q.length
					) {
						var h = !1;
						switch (Q) {
							case "x":
								h = !(!ne && !te);
								break;
							case "y":
								h = !(!ie && !ae);
								break;
							case "xy":
								h = !!(ne || te || ie || ae)
						}
					}
					be = void 0 == h || 1 == h
				}

				function u(t) {
					var a = t.originalEvent && t.originalEvent.targetTouches || t.targetTouches;
					if (a.length > 1 || t.scale && 1 !== t.scale) return void k();
					var o = me ? a[0] : t;
					if (Z.x2 = o.pageX, Z.y2 = o.pageY, R.call(J, "touchmove", t, Z), n && t.stopPropagation(), be) {
						var r = Z.scrollObj.scrollTop() <= 0,
							l = (Z.scrollObj[0] && Z.scrollObj[0].scrollHeight) - (Z.scrollObj[0] && Z.scrollObj[0].offsetHeight) - Z.scrollObj
							.scrollTop() <= 2,
							c = Z.y2 - Z.y1 > 0,
							s = Z.y2 - Z.y1 < 0;
						if (le) {
							if (c && r) return we = !1, void t.preventDefault();
							if (s && l && t.preventDefault(), s && !l) return void(we = !1);
							if (c && !r) return void(we = !1)
						}
						if (ae && !le && (c && r && t.preventDefault(), s && l && t.preventDefault()), !ae && c && r && t.preventDefault(),
							ce) {
							if (c && r && t.preventDefault(), s && l) return t.preventDefault(), void(we = !1);
							if (s && !l) return void(we = !1);
							if (c && !r) return void(we = !1)
						}
						Z.direction || (Z.direction = e.swipeDirection(Z.x1, Z.x2, Z.y1, Z.y2)), "swipeleft" !== Z.direction &&
							"swiperight" !== Z.direction || t.preventDefault();
						try {
							if ("swipeup" === Z.direction || "swipedown" === Z.direction) {
								var u = B[0].scrollTop || 0,
									d = (B[0].scrollHeight, q[0].scrollTop, q[0].scrollHeight, Z.scrollObj[0] && Z.scrollObj[0].scrollTop || 0),
									p = Z.scrollObj[0] && Z.scrollObj[0].offsetHeight || 0,
									g = Z.scrollObj[0] && Z.scrollObj[0].scrollHeight || 0,
									v = !1,
									m = !1;
								u <= 0 && d <= 0 && (v = !0), g - d - p <= 2 && (m = !0)
							}
						} catch (t) {}
						var b = "swiperight" == Z.direction || "swipeleft" == Z.direction ? Z.x2 - Z.x1 : Z.y2 - Z.y1,
							w = 0;
						Z.deltax = ge ? Math.abs(b) : Math.abs(b) + xe, !te || "swiperight" != Z.direction || re || ge || i ? !v || !
							ae || "swipedown" != Z.direction || le || ge || i ? !ne || "swipeleft" != Z.direction || oe || ge || i ? !m ||
							!ie || "swipeup" != Z.direction || ce || ge || i ? "swipeleft" == Z.direction && re ? (z = Z.movingright, w =
								f(Z, Z.movingright), ue && E(-Z.deltax, 0, "none", i || W), se && E(-w, 0, "none", A), R.call(J,
									"movingleft", t, Z), we = !0, t.stopPropagation()) : "swipeup" == Z.direction && le ? (z = Z.movingdown, w =
								f(Z, Z.movingdown), ue && E(0, -Z.deltax, "none", i || K), se && E(0, -w, "none", A), R.call(J, "movingup",
									t, Z), we = !0, t.preventDefault(), t.stopPropagation()) : "swiperight" == Z.direction && oe ? (z = Z.movingleft,
								w = f(Z, Z.movingleft), ue && E(Z.deltax, 0, "none", i || U), se && E(w, 0, "none", A), R.call(J,
									"movingright", t, Z), we = !0, t.stopPropagation()) : "swipedown" == Z.direction && ce && (z = Z.movingup,
								w = f(Z, Z.movingup), ue && E(0, Z.deltax, "none", i || $), se && E(0, w, "none", A), R.call(J, "movingdown",
									t, Z), we = !0, t.preventDefault(), t.stopPropagation()) : (z = Z.movingup, w = h(Z, Z.movingup), ue && E(0,
									w, "none", $), se && E(0, -Z.deltax, "none", A), R.call(J, "movingup", t, Z), we = !0, t.preventDefault(),
								t.stopPropagation()) : (z = Z.movingleft, w = h(Z, Z.movingleft), ue && E(w, 0, "none", U), se && E(-Z.deltax,
								0, "none", A), R.call(J, "movingleft", t, Z), we = !0, t.stopPropagation()) : (z = Z.movingdown, w = f(Z, Z.movingdown),
								ue && E(0, w, "none", K), se && E(0, Z.deltax, "none", A), R.call(J, "movingdown", t, Z), we = !0, t.preventDefault(),
								t.stopPropagation()) : (z = Z.movingright, w = f(Z, Z.movingright), ue && E(w, 0, "none", W), se && E(Z.deltax,
								0, "none", A), R.call(J, "movingright", t, Z), we = !0, t.stopPropagation())
					}
				}

				function d(e) {
					if (R.call(J, "touchend", e, Z), we) {
						var t = "swiperight" == Z.direction || "swipeleft" == Z.direction ? Math.abs(Z.x2 - Z.x1) : Math.abs(Z.y2 - Z.y1),
							n = "";
						switch (Z.direction) {
							case "swiperight":
								n = "swipeleft";
								break;
							case "swipeleft":
								n = "swiperight";
								break;
							case "swipeup":
								n = "swipedown";
								break;
							case "swipedown":
								n = "swipeup"
						}
						te && "swiperight" == Z.direction && t > X.distance && !re && !ge ? (g(), R.call(J, Z.direction, e, Z), R.call(
								J, "open", Z.direction)) : ne && "swipeleft" == Z.direction && t > X.distance && !oe && !ge ? (p(), R.call(J,
								Z.direction, e, Z), R.call(J, "open", Z.direction)) : ie && "swipeup" == Z.direction && t > X.distance && !
							ce && !ge ? (v(), R.call(J, Z.direction, e, Z), R.call(J, "open", Z.direction)) : ae && "swipedown" == Z.direction &&
							t > X.distance && !le && !ge ? (m(), R.call(J, Z.direction, e, Z), R.call(J, "open", Z.direction)) : ge && t <
							X.distance ? (ne && oe && p(), te && re && g(), ie && ce && v(), ae && le && m(), R.call(J, Z.direction, e, Z),
								X.alwaysTrigger && R.call(J, "open", Z.direction)) : ge && t > X.distance ? (ne && oe && w(), te && re && b(),
								ie && ce && y(), ae && le && x(), R.call(J, Z.direction, e, Z), R.call(J, "close", n)) : !ge && t < X.distance &&
							("swipeleft" === Z.direction && ne && !oe && w(), "swiperight" === Z.direction && te && !re && b(), "swipeup" ===
								Z.direction && ie && !ce && y(), "swipedown" === Z.direction && ae && !le && x(), X.alwaysTrigger && R.call(
									J, "close", n), R.call(J, Z.direction, e, Z)), ye = Z.direction, be = !1, we = !1, e.stopPropagation()
					}
				}

				function f(e, t) {
					var n = -t + e.deltax;
					return n = n > 0 ? 0 : n
				}

				function h(e, t) {
					var n = t - e.deltax;
					return n = n > t ? t : n
				}

				function p(e) {
					e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || U, e.handle = e.handle || A, n &&
						n.close(), ge = !0, oe = !0, G && (n = J, i = U, Ie.addEventListener("click", j, !0)), ue && E(0, 0, e.transition,
							e.target), se && E(-z, 0, e.transition, e.handle)
				}

				function g(e) {
					e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || W, e.handle = e.handle || A, n &&
						n.close(), ge = !0, re = !0, G && (n = J, i = W, Ie.addEventListener("click", j, !0)), ue && E(0, 0, e.transition,
							e.target), se && E(z, 0, e.transition, e.handle)
				}

				function v(e) {
					e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || $, e.handle = e.handle || A, n &&
						n.close(), ge = !0, ce = !0, G && (n = J, i = $, Ie.addEventListener("click", j, !0)), ue && E(0, 0, e.transition,
							e.target), se && E(0, -z, e.transition, e.handle)
				}

				function m(e) {
					e = e || {}, e.transition = e.transition || X.transition, e.target = e.target || K, e.handle = e.handle || A, n &&
						n.close(), ge = !0, le = !0, G && (n = J, i = K,
							Ie.addEventListener("click", j, !0)), ue && E(0, 0, e.transition, e.target), se && E(0, z, e.transition, e.handle)
				}

				function b(e) {
					e = e || {}, e.transition = e.transition || X.transition, e.target = W, e.handle = he || A, ge = !1, re = !1, G &&
						(n = null, i = null, fe = null, he = null, Ie.removeEventListener("click", j, !0)), ue && E(-(z + 1), 0, e.transition,
							e.target), se && E(xe, 0, e.transition, e.handle)
				}

				function w(e) {
					e = e || {}, e.transition = e.transition || X.transition, e.target = U, e.handle = he || A, ge = !1, oe = !1, G &&
						(n = null, i = null, fe = null, he = null, Ie.removeEventListener("click", j, !0)), ue && E("101%", 0, e.transition,
							e.target), se && E(-xe, 0, e.transition, e.handle)
				}

				function y(e) {
					e = e || {}, e.transition = e.transition || X.transition, e.target = $, e.handle = he || A, ge = !1, ce = !1, G &&
						(n = null, i = null, fe = null, he = null, Ie.removeEventListener("click", j, !0)), ue && E(0, "100%", e.transition,
							e.target), se && E(0, -xe, e.transition, e.handle)
				}

				function x(e) {
					e = e || {}, e.transition = e.transition || X.transition, e.target = K, e.handle = he || A, ge = !1, le = !1, G &&
						(n = null, i = null, fe = null, he = null, Ie.removeEventListener("click", j, !0)), ue && E(0, -z, e.transition,
							e.target), se && E(0, xe, e.transition, e.handle)
				}

				function k() {
					re && b(), oe && w(), le && x(), ce && y(), R.call(J, "close", ye)
				}

				function I() {
					if (!pe) return k(), this
				}

				function T(e) {
					if (!pe) {
						var t = e || {};
						t.transition = t.transition || X.transition, t.index = t.index || 0;
						var n, i = t.target;
						switch (ye = i, i) {
							case "swiperight":
								t.target = W.eq(t.index), n = t.target.parent().index(), t.handle = G ? B.children().eq(n).children(X.handle) :
									A, he = t.handle, fe = t.target, z = W.attr("data-moving") || Y, te && g(t);
								break;
							case "swipeleft":
								t.target = U.eq(t.index), n = t.target.parent().index(), t.handle = G ? B.children().eq(n).children(X.handle) :
									A, he = t.handle, fe = t.target, z = U.attr("data-moving") || Y, ne && p(t);
								break;
							case "swipedown":
								t.target = K.eq(t.index), n = t.target.parent().index(), t.handle = G ? B.children().eq(n).children(X.handle) :
									A, he = t.handle, fe = t.target, z = K.attr("data-moving") || Y, ae && m(t);
								break;
							case "swipeup":
								t.target = $.eq(t.index), n = t.target.parent().index(), t.handle = G ? B.children().eq(n).children(X.handle) :
									A, he = t.handle, fe = t.target, z = $.attr("data-moving") || Y, ie && v(t);
								break;
							default:
								t.target = W.eq(t.index), n = t.target.parent().index(), t.handle = G ? B.children().eq(n).children(X.handle) :
									A, he = t.handle, fe = t.target, te && g(t)
						}
						return R.call(J, "open", i), this
					}
				}

				function C() {
					return n
				}

				function O() {
					return ge
				}

				function j(e) {
					var i = t(e.target),
						a = i.closest(U).length || i.closest(W).length || i.closest($).length || i.closest(K).length || e.target.className
						.indexOf("bui-mask") > -1 || e.target.className.indexOf("bui-click") > -1;
					n && (a || (n.close(), e.stopPropagation()))
				}

				function S() {
					B.on("touchstart", s).on("touchmove", u).on("touchend", d).on("touchcancel", function() {}), de = !0
				}

				function E(e, t, n, i) {
					var n, a = i || B,
						e = e || 0,
						t = t || 0,
						o = X.zoom ? parseFloat(e) / 100 + "rem" : parseFloat(e) + "px",
						r = X.zoom ? parseFloat(t) / 100 + "rem" : parseFloat(t) + "px",
						l = String(e).indexOf("%") > -1 ? e : o,
						c = String(t).indexOf("%") > -1 ? t : r;
					return n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms", a.css({
						"-webkit-transition": n,
						transition: n,
						"-webkit-transform": "translate(" + l + "," + c + ")",
						transform: "translate(" + l + "," + c + ")"
					}).one("webkitTransitionEnd", function() {
						a.css({
							"-webkit-transition": "none",
							transition: "none"
						})
					}), this
				}

				function L() {
					if (!pe) return B.off("touchmove", u).off("touchend", d).off("touchcancel", function() {}), R.call(J, "lock"),
						this
				}

				function N() {
					if (!pe) return B.on("touchmove", u).on("touchend", d).on("touchcancel", function() {}), R.call(J, "unlock"),
						this
				}

				function P(e) {
					var e = 1 == e;
					B && (B.off(), e && B.remove()), F("open"), F("close"), pe = !0
				}

				function D(t, n) {
					return e.on.apply(J, arguments), this
				}

				function F(t, n) {
					return e.off.apply(J, arguments), this
				}

				function R(t) {
					J.self = this == window || this == J ? null : this, e.trigger.apply(J, arguments)
				}
				var B, A, M, z, V, H, q, U, W, $, K, Y, _ = {
						id: "",
						handle: ".handle",
						swiperight: ".swiperight",
						swipeleft: ".swipeleft",
						swipeup: ".swipeup",
						swipedown: ".swipedown",
						direction: "x",
						stopHandle: "",
						hasChild: !1,
						handleMove: !0,
						targetMove: !0,
						alwaysTrigger: !1,
						width: 0,
						height: 0,
						movingDistance: 280,
						initDistance: 0,
						zoom: !1,
						distance: 40,
						autoinit: !0,
						onBeforeInit: null,
						onInited: null,
						transition: 300
					},
					J = {
						handle: {},
						active: C,
						isActive: O,
						on: D,
						off: F,
						close: I,
						open: T,
						destroy: P,
						lock: L,
						unlock: N,
						init: o
					},
					X = J.config = t.extend(!0, {}, _, e.config.swipe, a),
					Z = {},
					Q = X.direction,
					G = X.hasChild,
					ee = !1,
					te = !1,
					ne = !1,
					ie = !1,
					ae = !1,
					oe = !1,
					re = !1,
					le = !1,
					ce = !1,
					se = X.handleMove,
					ue = X.targetMove,
					de = !1,
					fe = null,
					he = null,
					pe = !1,
					ge = !1,
					ve = /hp-tablet/gi.test(navigator.appVersion),
					me = "ontouchstart" in window && !ve,
					be = !1,
					we = !1,
					Z = {
						x1: 0,
						x2: 0,
						y1: 0,
						y2: 0,
						direction: "",
						deltax: 0,
						movingleft: 0,
						movingright: 0,
						movingup: 0,
						movingdown: 0,
						scrollObj: null
					},
					ye = "",
					xe = X.initDistance,
					ke = document,
					Ie = ke.documentElement;
				X.autoinit && o(X);
				var Te = 0;
				return J
			}
		}()
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.sidebar = function(n) {
			function i(n) {
				var i = t.extend(!0, y, n);
				return i.onBeforeInit && i.onBeforeInit.call(w, i), y = w.config = i, i.trigger && (C = e.obj(i.trigger)), k = e.obj(
					i.handle), m || (m = e.swipe({
					id: i.id,
					handle: i.handle,
					movingDistance: i.width,
					swiperight: i.swiperight,
					swipeleft: i.swipeleft,
					direction: "x",
					hasChild: !1,
					width: 0,
					height: 0,
					handleMove: i.handleMove,
					zoom: i.zoom,
					distance: i.distance,
					transition: 300
				})), y.mask && !x && (x = bui.mask({
					id: i.id + "-mask",
					appendTo: k,
					autoTrigger: !1,
					opacity: i.opacity,
					callback: function() {
						m.close()
					}
				})), T || (a(), i.height > 0 && e.obj(i.id).height(i.height)), i.onInited && i.onInited.call(w, i), this
			}

			function a() {
				var e = this;
				m.on("open", function(t) {
					C && C.addClass("active"), x && x.show(), k.css("overflow-y", "hidden"), I = !0, v.call(e, "open", t)
				}), m.on("close", function() {
					C && C.removeClass("active"), x && x.hide(), k.css("overflow-y", "auto"), I = !1, v.call(e, "close")
				}), C && C.on("click.bui", function(e) {
					if (!t(this).hasClass("disabled")) {
						var n = t(this).attr("data-target") || "swiperight";
						I ? r() : o({
							target: n
						})
					}
				}), T = !0
			}

			function o(e) {
				var t = e || {};
				return t.target = t.target || "swiperight", t.transition = t.transition || 300, m.open(t), this
			}

			function r() {
				return m.close(), this
			}

			function l() {
				return m.lock(), v.call(this, "lock"), this
			}

			function c(e) {
				return m.unlock(), v.call(this, "unlock"), this
			}

			function s() {
				return I
			}

			function u() {
				return m.active()
			}

			function d(e) {
				var e = 1 == e;
				C && C.off("click.bui"), g("open"), g("close"), x && x.destroy(e), m && m.destroy(e)
			}

			function f(t) {
				var n = {
					swipe: m,
					mask: x
				};
				return e.widget.call(n, t)
			}

			function h(t, n) {
				return e.option.call(w, t, n)
			}

			function p(t, n) {
				return e.on.apply(w, arguments), this
			}

			function g(t, n) {
				return e.off.apply(w, arguments), this
			}

			function v(t) {
				w.self = this == window || this == w ? null : this, e.trigger.apply(w, arguments)
			}
			var m, b = {
					id: "",
					trigger: "",
					handle: ".bui-page",
					swiperight: ".swiperight",
					swipeleft: ".swipeleft",
					handleMove: !0,
					mask: !0,
					width: 280,
					opacity: .1,
					height: 0,
					zoom: !0,
					autoinit: !0,
					onBeforeInit: null,
					onInited: null,
					distance: 40
				},
				w = {
					handle: {},
					on: p,
					off: g,
					active: u,
					isActive: s,
					open: o,
					close: r,
					lock: l,
					unlock: c,
					destroy: d,
					widget: f,
					option: h,
					config: y,
					init: i
				},
				y = w.config = t.extend(!0, {}, b, e.config.sidebar, n),
				x = null,
				k = null,
				I = !1,
				T = !1,
				C = null;
			return y.autoinit && i(y), w
		}
	}(bui || {}, libs),
	function(e, t) {
		e.listview = function(n) {
			function i(n) {
				var i = t.extend(!0, k, n);
				return i.onBeforeInit && i.onBeforeInit.call(x, i), k = x.config = i, b = e.obj(i.id), w = b.children(), w.length &&
					a(i), I || o(i), i.onInited && i.onInited.call(x, i), this
			}

			function a(e) {
				e.height > 0 && b.height(e.height), e.data && e.data.length ? w.each(function(n, i) {
					var a = t(i),
						o = a.attr("status"),
						l = e.menuHeight > 0 ? e.menuHeight : i.offsetHeight;
					if (!o) {
						var c = "function" == typeof e.template ? e.template.call(x, e.data) : r(e);
						a.append(c).attr("status", "1")
					}
					i.style.height || t(i).height(l)
				}) : w.each(function(n, i) {
					var a = e.menuHeight > 0 ? e.menuHeight : i.offsetHeight;
					i.style.height || t(i).height(a)
				})
			}

			function o(e) {
				var t = this,
					n = function(t) {
						t.ui = x, e.callback && e.callback.call(x, t, m)
					};
				b.on("click.bui", ".bui-listview-menu .bui-btn", n), m = bui.swipe({
					id: e.id,
					handle: e.handle,
					movingDistance: e.menuWidth,
					swiperight: e.swiperight,
					swipeleft: e.swipeleft,
					direction: "x",
					hasChild: !0,
					width: e.width,
					height: 0,
					zoom: k.zoom,
					distance: e.distance,
					transition: 300
				}), m.on("open", function(e) {
					T = !0, v.call(t, "open", e)
				}), m.on("close", function(e) {
					T = !1, v.call(t, "close", e)
				}), I = !0
			}

			function r(e) {
				var n = "",
					i = "right" == e.position ? e.swipeleft.substr(1) : e.swiperight.substr(1);
				return n += '<div class="bui-listview-menu ' + i + '">', t.each(e.data, function(e, t) {
					n += '    <div class="bui-btn ' + t.classname + '">' + t.text + "</div>"
				}), n += "</div>"
			}

			function l() {
				return m.active()
			}

			function c(e) {
				var t = e || {};
				return t.target = t.target || ("right" == k.position ? k.swipeleft.substr(1) : k.swiperight.substr(1)), t.transition =
					t.transition || 300, t.index = t.index || 0, m.open(t), this
			}

			function s() {
				return m.close(), this
			}

			function u() {
				return m.lock(), v.call(this, "lock"), this
			}

			function d(e) {
				return m.unlock(), v.call(this, "unlock"), this
			}

			function f(e) {
				var e = 1 == e;
				w && (w.off("click.bui"), w = null), b && (b.off("click.bui"), e && b.remove(), b = null), g("open"), g("close"),
					m && m.destroy(e), k = null, x = null
			}

			function h(t) {
				var n = {
					swipe: m
				};
				return e.widget.call(n, t)
			}

			function p(t, n) {
				return e.option.call(x, t, n)
			}

			function g(t, n) {
				return e.off.apply(x, arguments), this
			}

			function v(t) {
				x.self = this == window || this == x ? null : this, e.trigger.apply(x, arguments)
			}
			var m, b, w, y = {
					id: "",
					data: [],
					handle: ".bui-btn",
					swiperight: ".swiperight",
					swipeleft: ".swipeleft",
					position: "right",
					width: 0,
					height: 0,
					menuWidth: 160,
					menuHeight: 0,
					distance: 80,
					zoom: !1,
					autoinit: !0,
					template: null,
					onBeforeInit: null,
					onInited: null,
					callback: null
				},
				x = {
					active: l,
					lock: u,
					unlock: d,
					open: c,
					close: s,
					destroy: f,
					widget: h,
					option: p,
					config: k,
					init: i
				},
				k = x.config = t.extend(!0, {}, y, e.config.listview, n),
				I = !1,
				T = !1;
			return k.autoinit && i(k), x
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.btn = function(n) {
			function i(n) {
				var n = n;
				o();
				var i = 0;
				r.on("click.bui", s, function(a) {
					var o = n || t(this).attr("href"),
						r = t(this).attr("target"),
						s = t(this).attr("disabled"),
						d = t(this).hasClass("disabled") || "" == s || "true" == s || "disabled" == s;
					if (o && !d && !(o && o.indexOf("javascript:") > -1)) {
						var f = t(this).attr("param") || "",
							h = f && f.indexOf("{") > -1 && f.indexOf("}") > -1 ? JSON.parse(t(this).attr("param")) : {},
							p = h;
						(t(this).attr("progress") ? "false" != t(this).attr("progress") : l) && e.loading({
							autoTrigger: !0,
							display: "block",
							opacity: 0,
							timeout: u.timeout
						});
						var g = +new Date;
						if (g - i < 350) return !1;
						i = g;
						var v = {
							url: o,
							param: p,
							replace: c
						};
						return "_blank" == r ? e.run({
							id: o,
							data: p
						}) : e.load(v), !1
					}
				})
			}

			function a(n, i) {
				var i = i || {};
				o(), r.on("click.bui", s, function(a) {
					var o = this,
						r = t(o).css("background-color"),
						l = "none" == r ? "#fff" : r;
					i.appendTo = o, i.background = i.background || l, i.display = i.display || "inline", i.width = i.width || 15,
						i.height = i.height || 15, i.text = i.text || "加载中", i.autoClose = 1 == i.autoClose, i.autoTrigger = 0 != i.autoTrigger;
					var c = e.loading(i);
					return n && n.call(o, c)
				})
			}

			function o() {
				return r.off("click.bui", s), this
			}
			var r, l, c, s, u = {};
			return function(n) {
				"object" === e.typeof(n) ? (u.id = n.id || "", u.handle = n.handle || "", u.progress = "progress" in n && n.progress,
						u.replace = "replace" in n && n.replace, u.timeout = n.timeout || 3e3) : "string" === e.typeof(n) && (u.id = n ||
						"", u.handle = "", u.progress = !1, u.replace = !1, u.timeout = 3e3), r = t(u.id), s = u.handle, l = u.progress,
					c = u.replace
			}(n), {
				load: i,
				submit: a,
				off: o
			}
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.dialog = function(i) {
			function a(i) {
				var a = n.extend(!0, O, i);
				switch (a.onBeforeInit && a.onBeforeInit.call(C, a), a.appendTo = a.appendTo || (e.hasRouter ? router.currentPage() ||
						"body" : "body"), F = !1, k = a.effect, P = window && window.viewport && window.viewport.width() || document.documentElement
					.clientWidth, D = window && window.viewport && window.viewport.height() || document.documentElement.clientHeight,
					a.position) {
					case "top":
						j = "bui-dialog-top", k = a.effect || "fadeInDown";
						break;
					case "bottom":
						j = "bui-dialog-bottom", k = a.effect || "fadeInUp";
						break;
					case "left":
						j = "bui-dialog-left", k = a.effect || "fadeInLeft";
						break;
					case "right":
						j = "bui-dialog-right", k = a.effect || "fadeInRight";
						break;
					case "center":
						j = "bui-dialog-center", k = a.effect || L
				}
				a.fullscreen && (j = "bui-dialog-fullscreen", k = a.effect || L), a.render ? (a.id = e.guid(), u(a), y = e.objId(
						a.id)) : (y = e.obj(a.id), y.addClass(j)), S = y.width() > P ? P : y.width(), E = y.height() > D ? D : y.height(),
					y.css("display", "none"), x || (x = e.toggle({
						id: a.id,
						effect: k
					}));
				try {
					var o = "object" === t(a.id) ? n(a.id).attr("id") + "-mask" : a.id + "-mask";
					i.mask && !I && (I = e.mask({
						id: o,
						opacity: i.opacity,
						appendTo: y.parent(),
						autoTrigger: !1,
						onlyOne: !0,
						autoClose: !1,
						zIndex: parseInt(i.zIndex, 10) - 1,
						callback: function(e) {
							i.onMask && i.onMask.call(C, e), O.autoClose && (O.render ? c(s) : c())
						}
					}))
				} catch (e) {
					console.log(e)
				}
				return N && !O.render || d(), O = C.config = a, a.onInited && a.onInited.call(C, a), this
			}

			function o(e) {
				var t = "";
				return t += '<div id="' + e.id + '" class="bui-dialog ' + j + " " + e.className +
					'" style="display:block;z-index:' + e.zIndex + '">', e.title && (t += '\t<div class="bui-dialog-head">' + e.title +
						"</div>"), t += '\t<div class="bui-dialog-main">', e.content && (t += e.content), t += "\t</div>", e.buttons &&
					e.buttons.length && (t += '\t<div class="bui-dialog-foot bui-box">', n(e.buttons).each(function(e, n) {
						t += '\t\t<div class="bui-btn span1 ' + (n.className || "") + '" value="' + (n.value || "") + '">' + (n.name ||
							n) + "</div>"
					}), t += "\t</div>"), e.close && (t += '   <div class="bui-dialog-close">' + (e.closeText ? e.closeText :
						'<i class="icon-close"></i>') + "</div>"), t += "</div>"
			}

			function r(t) {
				if (!l && !F) {
					var i = {
							width: O.width,
							height: O.height,
							zoom: O.zoom,
							fullscreen: O.fullscreen,
							position: O.position,
							scroll: O.scroll,
							onBeforeOpen: O.onBeforeOpen,
							effect: "",
							callback: null
						},
						a = i;
					"function" == typeof t ? a.callback = t : "string" == typeof t ? a.effect = t : t && "object" === e.typeof(t) &&
						(a = n.extend(!0, {}, i, t));
					var o = a.onBeforeOpen && a.onBeforeOpen.call(C, {
						toggle: x
					});
					if (w.call(C, "beforeopen", {
							toggle: x
						}), !1 === o) return this;
					y.css("display", "block");
					if (0 == (y.attr("status") || 0)) {
						S = String(a.width).indexOf("%") > -1 ? P * parseFloat(a.width) / 100 : a.width || y.width(), E = String(a.height)
							.indexOf("%") > -1 ? D * parseFloat(a.height) / 100 : a.height || y.height();
						var r = e.unit.pxToRemZoom(S),
							c = e.unit.pxToRemZoom(E),
							s = a.zoom ? r + "rem" : S + "px",
							u = a.zoom ? c + "rem" : E + "px",
							f = a.zoom ? "-" + c / 2 + "rem" : "-" + E / 2 + "px",
							h = a.zoom ? "-" + r / 2 + "rem" : "-" + S / 2 + "px";
						if ("center" != a.position || a.fullscreen || y.css({
								width: s,
								height: u,
								top: "50%",
								"margin-top": f,
								left: "50%",
								"margin-left": h,
								right: "auto"
							}), a.fullscreen || y.css({
								width: s,
								height: u
							}), a.fullscreen && y.addClass("bui-dialog-fullscreen"), a.scroll) {
							var p = y.children(".bui-dialog-head"),
								g = y.children(".bui-dialog-foot"),
								v = y.children(".bui-dialog-main"),
								m = p.length ? p.height() : 0,
								b = g.length ? g.height() : 0,
								k = y.height() - m - b;
							v.css({
								height: k
							})
						}
						y.attr("status", "1")
					}
					return I && I.show(), x.show(function(e) {
						l = !0, a.callback && a.callback.call(C, {
							toggle: x
						}), w.call(C, "openafter", {
							toggle: x
						}), w.call(C, "afteropen", {
							toggle: x
						})
					}, a.effect), N || d(), w.call(C, "open", {
						toggle: x
					}), this
				}
			}

			function l(e) {
				return l
			}

			function c(t) {
				if (l && !F) {
					var n = {};
					"function" == typeof t ? n.callback = t : "string" == typeof t ? (n.effect = t, n.callback = O.onClose) : t &&
						"object" === e.typeof(t) && (n = t), n.onBeforeClose = O.onBeforeClose;
					var i = n.onBeforeClose && n.onBeforeClose.call(C, {
						toggle: x
					});
					if (w.call(C, "beforeclose", {
							toggle: x
						}), !1 === i) return this;
					try {
						x.hide(function(e) {
							l = !1, n.callback && n.callback.call(C, {
								toggle: x
							})
						}, n.effect), I && I.hide(), w.call(this, "close", {
							toggle: x
						})
					} catch (t) {
						e.showLog(t, "bui.dialog.close")
					}
					return this
				}
			}

			function s() {
				try {
					y.remove(), I && I.remove(), w.call(this, "remove")
				} catch (t) {
					e.showLog(t, "bui.dialog.remove")
				}
				return this
			}

			function u(e) {
				var t = o(e);
				return n(e.appendTo).append(t), this
			}

			function d() {
				return y.on("click.bui", ".bui-dialog-close", function(e) {
					O.onClose && O.onClose.call(C, e, C), O.autoClose && (O.render ? c(s) : c()), e.stopPropagation()
				}), y.on("click.bui", ".bui-dialog-foot .bui-btn", function(e) {
					e.target = this, O.callback && O.callback.call(C, e, C), O.autoClose && (O.render ? c(s) : c()), e.stopPropagation()
				}), N = !0, this
			}

			function f(t) {
				return e.selector.call(y, t)
			}

			function h(e) {
				var t = e || {};
				return T.title = O.title || "提示", T.content = O.content || "", T.close = !1, T.render = !0, T.autoClose = O.autoClose,
					T.mask = O.mask, T.buttons = O.buttons && O.buttons.length ? O.buttons : ["确定"], a(n.extend(!0, T, t)), w.call(C,
						"create"), this
			}

			function p() {
				var e = 1 == e;
				y && (y.off("click.bui"), y.remove(), y = null), b("open"), b("close"), I && I.destroy(e), x && x.destroy(e), F = !
					0
			}

			function g(t) {
				var n = {
					toggle: x,
					mask: I
				};
				return e.widget.call(n, t)
			}

			function v(t, n) {
				return e.option.call(C, t, n)
			}

			function m(t, n) {
				return e.on.apply(C, arguments), this
			}

			function b(t, n) {
				return e.off.apply(C, arguments), this
			}

			function w(t) {
				C.self = this == window || this == C ? null : this, e.trigger.apply(C, arguments)
			}
			var y, x, k, I, T = {
					id: "",
					title: "",
					effect: "zoomIn",
					content: "",
					className: "",
					appendTo: "",
					position: "center",
					fullscreen: !1,
					width: 0,
					height: 0,
					mask: !0,
					opacity: .6,
					render: !1,
					autoClose: !0,
					close: !0,
					scroll: !0,
					closeText: "",
					zoom: !1,
					zIndex: 100,
					buttons: [],
					onBeforeClose: null,
					onBeforeOpen: null,
					onBeforeInit: null,
					autoinit: !0,
					onInited: null,
					onMask: null,
					onClose: null,
					callback: null
				},
				C = {
					selector: f,
					$el: f,
					$: f,
					handle: {},
					on: m,
					off: b,
					open: r,
					close: c,
					isOpen: l,
					create: h,
					remove: s,
					destroy: p,
					widget: g,
					option: v,
					config: O,
					init: a
				},
				O = C.config = n.extend(!1, {}, T, e.config.dialog, i),
				j = "",
				S = "",
				E = "",
				L = "fadeInDown",
				l = !1,
				N = !1,
				P = window && window.viewport && window.viewport.width() || document.documentElement.clientWidth,
				D = window && window.viewport && window.viewport.height() || document.documentElement.clientHeight,
				F = !1;
			return O.id && O.autoinit && a(O), C
		}
	}(bui || {}, libs),
	function(e, t) {
		e.alert = function(n, i) {
			var a = e.dialog(),
				o = {};
			o.className = "bui-alert", o.title = "", o.width = 580, o.height = 360, o.scroll = !0, o.zIndex = 111, o.position =
				"center", o.autoClose = !0, o.zoom = !0, o.buttons = [{
					name: "确定",
					className: "primary-reverse"
				}], o.callback = i || function() {};
			var r = t.extend(o, e.config.alert),
				l = "";
			try {
				l = "string" == typeof n && n.indexOf("<") > -1 && n.indexOf(">") > -1 ? "<xmp>" + n + "</xmp>" : !n || "object" !==
					e.typeof(n) && "array" !== e.typeof(n) ? n && "function" === e.typeof(n) ? n.toString() : n : JSON.stringify(n),
					r.content = '<div class="bui-dialog-text bui-box-center" style="height:100%;">' + l + "</div>"
			} catch (t) {
				e.showLog(t, "bui.alert")
			}
			return a.create(r).open(), a
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.confirm = function(i, a) {
			var o = e.dialog(),
				r = {};
			r.className = "bui-confirm", r.title = "", r.width = 580, r.height = 360, r.scroll = !0, r.zIndex = 111, r.autoClose = !
				0, r.zoom = !0, r.position = "center", r.buttons = [{
					name: "取消",
					className: ""
				}, {
					name: "确定",
					className: "primary-reverse"
				}], r.callback = a || function() {};
			var l = {};
			return "object" === (void 0 === i ? "undefined" : t(i)) ? (i.content =
				'<div class="bui-dialog-text bui-box-center" style="height:100%;">' + i.content + "</div>", l = n.extend(r, e.config
					.confirm, i)) : (l = n.extend(r, e.config.confirm), l.content =
				'<div class="bui-dialog-text bui-box-center" style="height:100%;">' + i + "</div>", l.callback = a || function() {}
			), o.create(l).open(), o
		}
	}(window.bui || {}, window.libs);
	e(function(e) {
		! function(n, i) {
			n.prompt = function(a, o) {
				var r = n.dialog(),
					l = {};
				l.className = "bui-prompt", l.title = "", l.width = 580, l.height = 400, l.scroll = !0, l.autoClose = !1, l.zoom = !
					0, l.zIndex = 111, l.position = "center", l.buttons = [{
						name: "取消",
						className: ""
					}, {
						name: "确定",
						className: "primary-reverse"
					}], l.callback = o || function() {}, l.placeholder = "", l.row = 1, l.type = "text", l.value = "", l.onChange =
					null;
				var c = {},
					s = "",
					u = "";
				switch ("object" === (void 0 === a ? "undefined" : t(a)) ? (c = i.extend(l, n.config.prompt, a), s = c.content ||
					"") : (c = i.extend(l, n.config.prompt), c.callback = o || function() {}, s = a || ""), c.type) {
					case "number":
						c.content = '<div class="bui-prompt-main bui-box-vertical"> <div class="bui-prompt-label">' + s +
							'</div> <div class="span1"> <input class="bui-prompt-text" placeholder="' + c.placeholder + '" type="' + c.type +
							'" value="' + c.value + '"/> </div> </div>';
						break;
					default:
						c.content = '<div class="bui-prompt-main bui-box-vertical"> <div class="bui-prompt-label">' + s +
							'</div> <div class="span1"> <textarea class="bui-prompt-text" placeholder="' + c.placeholder + '" rows="' +
							c.row + '" >' + c.value + "</textarea> </div> </div>"
				}
				return r.create(c).open(), i("#" + r.config.id).on("change", ".bui-prompt-text", function(t) {
					u = this.value, c.onChange && c.onChange.call(e, t)
				}), r.value = function(e) {
					return void 0 === e ? u : (i("#" + r.config.id).find(".bui-prompt-text").val(e), u = e)
				}, r.focus = function(e) {
					i("#" + r.config.id).find(".bui-prompt-text").focus()
				}, r
			}
		}(window.bui || {}, window.libs)
	});
	! function(e, n) {
		e.hint = function(i, a) {
			function o(t) {
				var i = n.extend(!0, T, t);
				return i.onBeforeInit && i.onBeforeInit.call(I, i), x = e.guid(), j = "top" === i.position ? "fadeInDown" :
					"bottom" === i.position ? "fadeInUp" : i.effect, T = I.config = i, l(x, i.content, C, i.appendTo), ++C, O = e.objId(
						x), y || (y = e.toggle({
						id: O,
						effect: j
					})), S = !0, y.show(), i.autoClose && (k && clearTimeout(k), k = setTimeout(function() {
						i.onClose && i.onClose.call(I), s()
					}, i.timeout)), E || r(i), i.onInited && i.onInited.call(I, i), this
			}

			function r(e) {
				e.showClose && O.on("click.bui", ".bui-hint-close", function(t) {
					s(), e.onClose && e.onClose.call(I, t)
				}), E = !0
			}

			function l(t, i, a, o) {
				var r, l = "11" + a,
					c = o ? e.obj(o) : n("body");
				switch (T.position) {
					case "top":
						r = "bui-hint-top";
						break;
					case "bottom":
						r = "bui-hint-bottom";
						break;
					case "center":
						r = "bui-hint-center"
				}
				var s = T.background ? "background:" + T.background : "",
					u = s + ";z-index:" + l + ";opacity:" + T.opacity,
					d = '<div id="' + t + '" class="bui-hint ' + r + " " + T.skin + '" style="' + u + '">' + i + (T.showClose ?
						'<div class="bui-hint-close"><i class="icon-close"></i></div>' : "") + "</div>";
				c.append(d), o && c.css("position", "relative")
			}

			function c() {
				return S
			}

			function s() {
				var e = this;
				return y && (S = !1, y.hide(function() {
					y.remove(), m.call(e, "remove", {
						toggle: y
					}), y = null
				})), this
			}

			function u(e, t) {
				var n = this;
				return "function" == typeof e ? (e = e, t = t || T.effect || "") : (t = e || T.effect || "", e = null), y && (S = !
					1, y.hide(function() {
						e && e.call(I, {
							toggle: y
						}), m.call(n, "hide", {
							toggle: y
						})
					}, t)), this
			}

			function d(e, t) {
				var n = this;
				return "function" == typeof e ? (e = e, t = t || T.effect || "") : (t = e || T.effect || "", e = null), y && (S = !
					0, y.show(function(t) {
						m.call(n, "show", {
							toggle: y
						}), e && e.call(I, {
							toggle: y
						})
					}, t)), this
			}

			function f(e) {
				var e = 1 == e;
				O.off("click.bui"), y && y.destroy(e), v("show"), v("hide")
			}

			function h(t) {
				var n = {
					toggle: y
				};
				return e.widget.call(n, t)
			}

			function p(t, n) {
				return e.option.call(I, t, n)
			}

			function g(t, n) {
				return e.on.apply(I, arguments), this
			}

			function v(t, n) {
				return e.off.apply(I, arguments), this
			}

			function m(t) {
				I.self = this == window || this == I ? null : this, e.trigger.apply(I, arguments)
			}
			var b = {
				appendTo: "",
				content: "",
				timeout: 2e3,
				autoClose: !0,
				showClose: !1,
				opacity: 1,
				background: "",
				effect: "fadeInUp",
				skin: "",
				position: "bottom",
				onBeforeInit: null,
				onInited: null,
				onClose: null
			};
			if ("number" == typeof i || "string" == typeof i) {
				var w = i || "";
				i = {}, i.content = w, i.onClose = a || null
			} else "object" === (void 0 === i ? "undefined" : t(i)) && i.content && (i = i);
			var y, x, k, I = {
					handle: {},
					on: g,
					off: v,
					remove: s,
					hide: u,
					show: d,
					isShow: c,
					destroy: f,
					widget: h,
					option: p,
					config: T,
					init: o
				},
				T = I.config = n.extend(!0, {}, b, e.config.hint, i),
				C = 0,
				O = null,
				j = "",
				S = !1,
				E = !1;
			return T.content && o(T), I
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.pullrefresh = function(n) {
			function i(n) {
				var i = t.extend(!0, A, n);
				return i.onBeforeInit && i.onBeforeInit.call(B, i), i.id ? (T = e.obj(i.id), A = B.config = i, C = T[0], O = T.children(
					P), j = T.children(D), S = T.children(F), N = a, L = i.refreshTips.end, U || (U = e.loading({
					appendTo: O,
					width: 15,
					height: 15,
					autoClose: !1,
					text: L,
					onlyText: !0,
					display: "inline",
					autoTrigger: !1,
					mask: !1
				})), i.autoLoad && (V = !0, U.start({
					text: i.refreshTips.start,
					onlyText: !1
				}), N()), H || r(i), m(i.height), i.onInited && i.onInited.call(B, i), this) : void e.hint("pullrefresh id不能为空")
			}

			function a() {
				z = (new Date).getTime(), A.onBeforeRefresh && A.onBeforeRefresh.call(B), A.onRefresh && A.onRefresh.call(B), I.call(
					B, "refresh")
			}

			function o() {
				var e = (new Date).getTime(),
					t = e - z,
					n = Math.floor(t / 36e5),
					i = Math.floor(t / 6e4);
				Math.floor(t / 1e3);
				return n <= 0 && i <= 0 ? "刚刚更新" : n <= 0 && i > 0 ? i + "分钟前更新" : "上次更新时间:" + (n < 10 ? "0" + n : n) + ":" + (i <
					10 ? "0" + i : i)
			}

			function r(e) {
				M || d(), H = !0
			}

			function l(n) {
				var i = n.originalEvent && n.originalEvent.targetTouches || n.targetTouches,
					a = $ ? i[0] : n;
				return X.x1 = a.pageX, X.y1 = a.pageY, X.direction = "", Z = T.scrollTop(), A.stopHandle && e.unit.checkTargetInclude(
					n.target, A.stopHandle) ? void(_ = !1) : i.length > 1 || n.scale && 1 !== n.scale ? void(_ = !1) : (L = A.lastUpdated ?
					o() : A.refreshTips.end, I.call(B, "touchstart", n, X), void(t(window).scrollTop() <= 0 && Z <= 0 && A.onRefresh &&
						!V ? (_ = !0, t(this).css("touch-action", "none")) : _ = !1))
			}

			function c(t) {
				var n = t.originalEvent && t.originalEvent.targetTouches || t.targetTouches || [];
				if (!_) return void h();
				if (n.length > 1 || t.scale && 1 !== t.scale) return void h();
				var i = $ ? n[0] : t;
				X.x2 = i.pageX, X.y2 = i.pageY, X.direction || (X.direction = e.swipeDirection(X.x1, X.x2, X.y1, X.y2)), I.call(B,
						"touchmove", t, X), "swipeleft" !== X.direction && "swiperight" !== X.direction || t.preventDefault(), X.y2 - X
					.y1 > 0 && Z <= 0 && t.preventDefault(), "swipedown" == X.direction ? (I.call(B, "movingdown", t, X), E = Math.abs(
						X.y2 - X.y1), h(E / 2, !1), E >= A.distance ? Q || (U.show({
						text: A.refreshTips.release,
						onlyText: !1
					}).pause(), Q = !0) : G || (U.show({
						text: L,
						onlyText: !1
					}).pause(), G = !0), J = !0, A.maxDistance > A.distance && E >= A.maxDistance && (U.show({
							text: A.refreshTips.start,
							onlyText: !1
						}).start(), V = !0, A.onRefresh && N(), J = !1, Q = !1, G = !1, X = {}, K += X.y2 - X.y1, Y += X.x2 - X.x1, X.lastX =
						Y, X.lastY = K, X = {
							x1: 0,
							x2: 0,
							y1: 0,
							y2: 0,
							direction: ""
						}, _ = !1, J = !1), t.preventDefault(), t.stopPropagation()) : "swipeup" == X.direction && (I.call(B,
						"movingup", t, X), J = !0)
			}

			function s(e) {
				if (I.call(B, "touchend", e, X), t(this).css("touch-action", "auto"), !J) return X = {
					x1: 0,
					x2: 0,
					y1: 0,
					y2: 0,
					direction: ""
				}, _ = !1, void(J = !1);
				"swipedown" == X.direction ? (I.call(B, X.direction, e, X), E >= A.distance ? (h(A.distance / 2), U.show({
						text: A.refreshTips.start,
						onlyText: !1
					}).start(), V = !0, A.onRefresh && N()) : h(), e.stopPropagation(), Q = !1, G = !1, X = {}) : "swipeup" == X.direction &&
					I.call(B, X.direction, e, X), K += X.y2 - X.y1, Y += X.x2 - X.x1, X.lastX = Y, X.lastY = K, X = {
						x1: 0,
						x2: 0,
						y1: 0,
						y2: 0,
						direction: ""
					}, _ = !1, J = !1
			}

			function u(e) {
				return M = !0, T.off("touchstart", l).off("touchmove", c).off("touchend", s).off("touchcancel", h), h(), e && e.call(
					B), I.call(B, "lock"), this
			}

			function d(e) {
				return M = !1, T.on("touchstart", l).on("touchmove", c).on("touchend", s).on("touchcancel", h), e && e.call(this),
					I.call(B, "unlock"), this
			}

			function f(e, t, n) {
				return q || (U.show({
					text: A.refreshTips.success,
					onlyText: !1
				}), h(e, t), j.one("webkitTransitionEnd", function() {
					U && U.hide(), q = !1, n && n.call(B)
				})), this
			}

			function h(e, t) {
				t = 0 != t, e = e || 0, V = !1;
				var n = t ? "all 300ms ease-out" : "none";
				return p(0, e + "px", n, j), S.length && p(0, e + "px", n, S), this
			}

			function p(e, t, n, i) {
				var n, i = i || T,
					e = e || 0,
					t = t || 0,
					a = e,
					o = t,
					r = String(e).indexOf("%") > -1 ? String(e) : a,
					l = String(t).indexOf("%") > -1 ? String(t) : o;
				n = "number" == typeof n ? "all " + n + "ms" : n || "all 300ms";
				try {
					i.css({
						"-webkit-transition": n,
						transition: n,
						"-webkit-transform": "translate(" + r + "," + l + ")",
						transform: "translate(" + r + "," + l + ")"
					}), i.one("webkitTransitionEnd", function() {
						i.css({
							"-webkit-transition": "none",
							transition: "none"
						})
					})
				} catch (e) {
					console.log(e.message)
				}
			}

			function g() {
				q = !0, h(), e.hint(A.refreshTips.fail), I.call(B, "fail")
			}

			function v() {
				h(A.distance / 2, !0), U.start({
					text: A.refreshTips.start,
					onlyText: !1
				}), A.onRefresh && N()
			}

			function m(e) {
				var t = T.parents(".bui-page"),
					n = (t.children("main"), t.find(".bui-tab-head .bui-nav")),
					i = C && C.offsetTop || 0,
					a = t.children(A.header),
					o = a.length > 1 ? a.eq(a.length - 1).height() : a.height(),
					r = t.children(A.footer),
					l = r.length > 1 ? r.eq(r.length - 1).height() : r.height(),
					c = window && window.viewport && window.viewport.height() - (o || 0) - (l || 0) - i - n.height(),
					s = e ? parseFloat(e) : c;
				T.height(s)
			}

			function b(e) {
				var e = 1 == e;
				T && (T.off(), e && T.remove()), U && U.destroy(e), k("refresh"), k("movingdown"), k("swipedown")
			}

			function w(t) {
				var n = {
					loading: U
				};
				return e.widget.call(n, t)
			}

			function y(t, n) {
				return e.option.call(B, t, n)
			}

			function x(t, n) {
				return e.on.apply(B, arguments), this
			}

			function k(t, n) {
				return e.off.apply(B, arguments), this
			}

			function I(t) {
				B.self = this == window || this == B ? null : this, e.trigger.apply(B, arguments)
			}
			var T, C, O, j, S, E, L, N, P = "." + e.prefix("scroll-head"),
				D = "." + e.prefix("scroll-main"),
				F = "." + e.prefix("scroll-foot"),
				R = {
					id: "",
					stopHandle: "",
					childrenTop: P,
					childrenMain: D,
					header: ".bui-page header",
					footer: ".bui-page footer",
					distance: 90,
					maxDistance: 0,
					autoLoad: !0,
					lastUpdated: !1,
					height: 0,
					refreshTips: {
						start: "刷新中..",
						release: "松开刷新",
						end: "下拉刷新",
						fail: "刷新失败,请检查下网络再试试",
						success: "刷新成功"
					},
					autoinit: !0,
					onBeforeInit: null,
					onBeforeRefresh: null,
					onInited: null,
					onRefresh: null
				},
				B = {
					handle: {},
					on: x,
					off: k,
					reverse: f,
					refresh: v,
					setHeight: m,
					fail: g,
					lock: u,
					unlock: d,
					destroy: b,
					widget: w,
					option: y,
					config: A,
					init: i
				},
				A = B.config = t.extend(!0, {}, R, e.config.pullrefresh, n),
				M = !1,
				z = (new Date).getTime(),
				V = !1,
				H = !1,
				q = !1,
				U = null,
				W = /hp-tablet/gi.test(navigator.appVersion),
				$ = "ontouchstart" in window && !W,
				K = 0,
				Y = 0,
				_ = !1,
				J = !1,
				X = {
					x1: 0,
					x2: 0,
					y1: 0,
					y2: 0,
					direction: ""
				};
			A.autoinit && i(A);
			var Z = 0,
				Q = !1,
				G = !1;
			return B
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.scroll = function(i) {
			function a(t) {
				var i = n.extend(!0, _, t);
				if (i.onBeforeInit && i.onBeforeInit.call(Y, i), F = n(window), !i.id) return void e.hint("scroll id不能为空");
				P = e.obj(i.id), ae = i.page, oe = i.pageSize, _ = Y.config = i, ee = !0, te = !0, ne = !1, ie = !1, D = P[0], B =
					P.children(U), M = P.children(W), A = P.children($), M.css({
						position: "relative"
					}), X || (X = e.loading({
						appendTo: A,
						width: 20,
						height: 20,
						autoClose: !1,
						text: i.scrollTips.start,
						display: "inline",
						autoTrigger: !1,
						mask: !1
					})), z = c, V = l, H ? H.init({
						id: i.id,
						onBeforeRefresh: i.onBeforeRefresh,
						onRefresh: z,
						distance: i.distance,
						maxDistance: i.maxDistance,
						lastUpdated: i.lastUpdated,
						height: i.height,
						refreshTips: i.refreshTips,
						autoLoad: i.autoRefresh
					}) : i.refresh && i.onRefresh ? (H = e.pullrefresh({
						id: i.id,
						onBeforeRefresh: i.onBeforeRefresh,
						onRefresh: z,
						distance: i.distance,
						stopHandle: i.stopHandle,
						maxDistance: i.maxDistance,
						lastUpdated: i.lastUpdated,
						header: i.header,
						footer: i.footer,
						height: i.height,
						refreshTips: i.refreshTips,
						autoLoad: i.autoRefresh
					}), H.lock(), Q = !0) : w(i.height);
				try {
					V && V.call(Y, ae, oe)
				} catch (t) {
					e.showLog(t, "bui.scroll.init")
				}
				return re || o(i), i.onInited && i.onInited.call(Y, i), this
			}

			function o(t) {
				P.on("scroll", e.unit.debounce(r, t.delayTime)), re = !0
			}

			function r(e) {
				var t = e.target;
				0 == (t.scrollTop || 0) ? N.call(Y, "scrolltop", e) : t.scrollTop + t.clientHeight >= (t && t.scrollHeight - _.endDistance) &&
					_.onLoad && (_.page = Y.config.page = ++ae, _.autoScroll && V && V.call(Y, _.page, oe), N.call(Y, "scrollbottom",
						e)), N.call(Y, "scrollend", e), _.onScrolling && _.onScrolling.call(Y, e, Y)
			}

			function l(e, t) {
				return G = !0, ie = !1, te && !ne && (_.page = Y.config.page = e, _.onBeforeLoad && _.onBeforeLoad.call(Y, e, t),
					_.onLoad && X && X.start({
						text: _.scrollTips.start,
						onlyText: !1
					}), _.onLoad && _.onLoad.call(Y, e, t)), Q && _.refresh && H && H.unlock(), this
			}

			function c() {
				G = !0, te = !0, ne = !1, ee = !0, ie = !0, ae = J, oe = _.pageSize, le = {}, X && X.start({
					text: _.scrollTips.end,
					onlyText: !0
				}), _.page = Y.config.page = ae, N.call(Y, "refresh", ae), _.onRefresh && _.onRefresh.call(Y, ae, oe)
			}

			function s(t, n, i) {
				var i = 0 != i;
				if (!n || "array" != e.typeof(n)) return X && X.stop(), e.showLog(
					"scroll 控件的updatePage 第2个参数,必须是一个数组,如果是list控件,检测field的data映射是否准确", "bui.scroll.updatePage"), void(n = []);
				n = n, G = !1, ce && clearTimeout(ce), ce = setTimeout(function() {
					var e = parseInt(P.height()),
						a = parseInt(P.find(_.childrenMain)[0] && P.find(_.childrenMain)[0].scrollHeight);
					if (i)
						if (n && n.length > oe - 1) {
							if (te = !0, ne = !1, ee = !1, X && X.start({
									text: _.scrollTips.end,
									onlyText: !0
								}), a >= 10 && a < e && _.autoNext && _.onLoad) {
								var o = ++ae;
								V && V.call(Y, o, oe)
							}
							N.call(Y, "loadpage", n, ae)
						} else {
							te = !1, ne = !0;
							var r = ee && n && n.length < 1 ? _.scrollTips.nodata : _.scrollTips.last;
							X && X.start({
								text: r,
								onlyText: !0
							}), N.call(Y, "loadpage", n, ae), N.call(Y, "lastpage", n, ae)
						}
					else te = !1, ne = !0, X && X.stop();
					return le[t] = n
				}, 10)
			}

			function u(e) {
				return H && H.reverse(), e && e.call(Y, H), this
			}

			function d() {
				return ie
			}

			function f(e) {
				return le
			}

			function h(e) {
				le = {}
			}

			function p(e, t) {
				return Z = !0, Q = !0, X.show({
					text: _.scrollTips.fail,
					onlyText: !0,
					callback: function(n) {
						l(e, t)
					}
				}), H && H.lock(), this
			}

			function g(t, n) {
				var i, a, o = [];
				if (t && n)
					for (i in le) {
						var r = e.array.filter(le[i], t, n) || [];
						if (r.length)
							for (a in r) o.push(r[a])
					}
				return o
			}

			function v(e, t) {
				var e = e || 0;
				R = P.find(_.children).children(_.handle);
				var n = P.height(),
					i = parseFloat(R.height()),
					a = D.scrollHeight,
					o = i * parseInt(e) - i;
				return a > n && (D.scrollTop = o, N.call(Y, "to", e), t && t.call(Y, parseInt(e))), this
			}

			function m(e) {
				return R = P.find(_.children).children(_.handle), v(R.length, e), this
			}

			function b(e) {
				var i = 0;
				return i = "object" === (void 0 === e ? "undefined" : t(e)) ? n(e)[0].offsetTop : "string" == typeof e && e.indexOf(
					"#") > -1 ? n(e)[0].offsetTop : parseInt(e) || 0, D.scrollTop = i, this
			}

			function w(e) {
				var t = P.parents(".bui-page"),
					n = (t.children("main"), t.find(".bui-tab-head .bui-nav")),
					i = D && D.offsetTop || 0,
					a = t.children(_.header),
					o = a.length > 1 ? a.eq(a.length - 1).height() : a.height(),
					r = t.children(_.footer),
					l = r.length > 1 ? r.eq(r.length - 1).height() : r.height(),
					c = window.viewport.height() - (o || 0) - (l || 0) - i - n.height(),
					s = e ? parseFloat(e) : c;
				P.height(s)
			}

			function y() {
				return P.off("scroll", e.unit.debounce(r, _.delayTime)), N.call(Y, "lock"), this
			}

			function x(t) {
				return P.on("scroll", e.unit.debounce(r, _.delayTime)), N.call(Y, "unlock"), this
			}

			function k() {
				return v(1), H && H.refresh(), this
			}

			function I(e) {
				var e = e || ae;
				return ae = e, V && V.call(Y, ae, oe), this
			}

			function T() {
				return V && V.call(Y, ++ae, oe), this
			}

			function C() {
				return ae-- > 0 && V && V.call(Y, ae--, oe), this
			}

			function O(e) {
				var e = 1 == e;
				P && (P.off("scroll"), e && P.remove()), H && H.destroy(e), X && X.destroy(e), L("loadpage"), L("lastpage"), L(
					"scrolltop"), L("scrollbottom"), L("scrollend")
			}

			function j(t) {
				var n = {
					pullrefresh: H,
					loading: X
				};
				return e.widget.call(n, t)
			}

			function S(t, n) {
				return e.option.call(Y, t, n)
			}

			function E(t, n) {
				return e.on.apply(Y, arguments), this
			}

			function L(t, n) {
				return e.off.apply(Y, arguments), this
			}

			function N(t) {
				Y.self = this == window || this == Y ? null : this, e.trigger.apply(Y, arguments)
			}
			var P, D, F, R, B, A, M, z, V, H, q = "." + e.prefix("list"),
				U = "." + e.prefix("scroll-head"),
				W = "." + e.prefix("scroll-main"),
				$ = "." + e.prefix("scroll-foot"),
				K = {
					id: "",
					childrenTop: U,
					childrenMain: W,
					childrenBottom: $,
					children: q,
					stopHandle: "",
					header: ".bui-page header",
					footer: ".bui-page footer",
					handle: "li",
					distance: 100,
					endDistance: 1,
					height: 0,
					page: 1,
					pageSize: 10,
					lastUpdated: !0,
					autoRefresh: !1,
					autoNext: !0,
					autoScroll: !0,
					refresh: !0,
					delayTime: 100,
					scrollTips: {
						start: "努力加载中..",
						end: "上拉加载更多",
						nodata: "没有更多内容",
						last: "没有更多内容",
						fail: "点击重新加载"
					},
					refreshTips: {
						start: "刷新中..",
						release: "松开刷新",
						end: "下拉刷新",
						fail: "点击加载",
						success: "刷新成功"
					},
					autoinit: !0,
					onBeforeInit: null,
					onInited: null,
					onScrolling: null,
					onBeforeRefresh: null,
					onRefresh: null,
					onBeforeLoad: null,
					onLoad: null
				},
				Y = {
					handle: {},
					on: E,
					off: L,
					reverse: u,
					updateCache: s,
					updatePage: s,
					getCache: f,
					clearCache: h,
					fail: p,
					filter: g,
					to: v,
					toBottom: m,
					scrollTop: b,
					lock: y,
					unlock: x,
					refresh: k,
					load: I,
					nextPage: T,
					prevPage: C,
					setHeight: w,
					isRefresh: d,
					destroy: O,
					widget: j,
					option: S,
					config: _,
					init: a
				},
				_ = Y.config = n.extend(!0, {}, K, e.config.scroll, i),
				J = _.page,
				X = null,
				Z = !1,
				Q = !1,
				G = !1,
				Z = !1,
				ee = !0,
				te = !0,
				ne = !1,
				ie = !1,
				ae = _.page,
				oe = _.pageSize,
				re = !1,
				le = {};
			_.autoinit && a(_);
			var ce;
			return Y
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.list = function(n) {
			function i(n) {
				var i = t.extend(!0, I, n);
				i.onBeforeInit && i.onBeforeInit.call(k, i), m = e.obj(i.id), b = m.find(i.children), I = k.config = i, C = I.data;
				var l = 0 == I.refresh ? null : r;
				return y ? y.init({
					id: i.id,
					children: i.children,
					handle: i.handle,
					page: i.page,
					pageSize: i.pageSize,
					distance: i.distance,
					maxDistance: i.maxDistance,
					height: i.height,
					refresh: i.refresh,
					autoNext: i.autoNext,
					autoScroll: i.autoScroll,
					scrollTips: i.scrollTips,
					refreshTips: i.refreshTips,
					lastUpdated: i.lastUpdated,
					onBeforeRefresh: i.onBeforeRefresh,
					onBeforeLoad: i.onBeforeLoad,
					onRefresh: l,
					onLoad: o
				}) : y = bui.scroll({
					id: i.id,
					children: i.children,
					handle: i.handle,
					header: i.header,
					footer: i.footer,
					page: i.page,
					pageSize: i.pageSize,
					distance: i.distance,
					stopHandle: i.stopHandle,
					maxDistance: i.maxDistance,
					height: i.height,
					refresh: i.refresh,
					autoNext: i.autoNext,
					autoScroll: i.autoScroll,
					scrollTips: i.scrollTips,
					refreshTips: i.refreshTips,
					lastUpdated: i.lastUpdated,
					onBeforeRefresh: i.onBeforeRefresh,
					onBeforeLoad: i.onBeforeLoad,
					onRefresh: l,
					onLoad: o
				}), O || a(i), i.onInited && i.onInited.call(k, i), this
			}

			function a(e) {
				return e.callback && m.on("click", e.handle, function(t) {
					e.callback.call(k, t)
				}), O = !0, this
			}

			function o(i, a, o) {
				function r(e, t, n) {
					var i = (e - 1) * t;
					return i + t >= n.length ? n.slice(i, n.length) : n.slice(i, i + t)
				}

				function l(t, a, o) {
					var l, u, d;
					l = "string" == typeof t ? t && JSON.parse(t) || {} : t || {}, u = I && I.field && "" == I.field.data ? l || [] :
						"object" === e.typeof(l) && e.unit.getKeyValue(I.field.data, l) || [];
					var f = /\[.+\]$/g;
					if ("string" == typeof u && f.test(u)) try {
						d = JSON.parse(u)
					} catch (t) {
						d = u, e.showLog(t)
					} else d = u;
					u = d && "array" === e.typeof(d) ? d : [], I.localData && (u = r(i, I.pageSize, u));
					var h = n.template && n.template(u, l, i) || "";
					b && b[s](h);
					var p = y && y.isRefresh() || !1;
					v.call(c, "success", t, i, o);
					try {
						p ? (I.onRefresh && I.onRefresh.call(k, y, l, o), v.call(c, "refresh", t, i, o), I.refresh && y.reverse()) : (v
								.call(this, "onloadbefore"), I.onLoad && I.onLoad.call(k, y, l, o), v.call(c, "onload", t, i, o)), I.localData ?
							c && c.updatePage(i, u) : y && y.updatePage(i, u)
					} catch (e) {}
				}
				var c = this,
					s = o || I.commandLoad;
				return C = t.extend(!0, {}, j, I.data, C), I.field.page.length && e.unit.setKeyValue(I.field.page, i, C), I.field
					.size.length && e.unit.setKeyValue(I.field.size, a, C), I.page = k.config.page = i, I.data = C, I.localData ?
					void l(I.localData, 200) : (w = e.ajax(I).done(l).fail(function(e, t, n) {
						v.call(c, "fail", e, i, n), I.onFail && I.onFail.call(k, t, y, i, n), y && y.fail(i, a, e)
					}), this)
			}

			function r() {
				var e = T,
					t = I.pageSize;
				return v.call(this, "refreshbefore"), o(e, t, I.commandRefresh), this
			}

			function l() {
				return v.call(this, "refreshbefore"), y.refresh(), this
			}

			function c(n, i) {
				var a;
				if ("string" == typeof i) try {
					a = JSON.parse(i)
				} catch (t) {
					return void e.showLog("data 参数必须为对象", "bui.list.modifyData")
				} else a = i;
				return C = t.extend(!0, {}, j, a)
			}

			function s() {
				return b.html(""), this
			}

			function u(e) {
				var e = 1 == e;
				m && (m.off("click.bui"), e && m.remove(), m = null), g("refreshbefore"), g("refresh"), g("success"), g("fail"),
					y && y.destroy(e)
			}

			function d(t) {
				var n = {
					scroll: y,
					ajax: w
				};
				return e.widget.call(n, t)
			}

			function f(t, n) {
				return "data" == t && void 0 !== n ? c(t, n) : e.option.call(k, t, n)
			}

			function h(e) {
				return I = k.config = t.extend(!0, {}, k.config, e), C = I.data, this
			}

			function p(t, n) {
				return e.on.apply(k, arguments), this
			}

			function g(t, n) {
				return e.off.apply(k, arguments), this
			}

			function v(t) {
				k.self = this == window || this == k ? null : this, e.trigger.apply(k, arguments)
			}
			var m, b, w, y, x = {
					id: "",
					url: "",
					data: {},
					method: "GET",
					dataType: "json",
					headers: {},
					contentType: "",
					timeout: 2e4,
					field: {
						page: "page",
						size: "pageSize",
						data: ""
					},
					scrollTips: {
						start: "努力加载中..",
						end: "上拉加载更多",
						nodata: "没有更多内容",
						last: "没有更多内容",
						fail: "点击重新加载"
					},
					refreshTips: {
						start: "刷新中..",
						release: "松开刷新",
						end: "下拉刷新",
						fail: "点击加载",
						success: "刷新成功"
					},
					lastUpdated: !1,
					page: 1,
					pageSize: 10,
					autoNext: !0,
					autoScroll: !0,
					autoinit: !0,
					native: !0,
					needNative: !1,
					refresh: !0,
					stopHandle: "",
					children: ".bui-list",
					handle: ".bui-btn",
					header: ".bui-page header",
					footer: ".bui-page footer",
					height: 0,
					commandRefresh: "html",
					commandLoad: "append",
					localData: null,
					template: null,
					onBeforeInit: null,
					onInited: null,
					onBeforeRefresh: null,
					onRefresh: null,
					onLoad: null,
					onFail: null,
					callback: null
				},
				k = {
					handle: {},
					on: p,
					off: g,
					empty: s,
					refresh: l,
					modify: h,
					destroy: u,
					widget: d,
					option: f,
					config: I,
					init: i
				},
				I = k.config = t.extend(!0, {}, x, e.config.list, n),
				T = I.page,
				C = {},
				O = !1,
				j = I.data;
			return I.autoinit && i(I), k
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.searchbar = function(n) {
			function i(n) {
				var i = t.extend(!0, b, n);
				return i.onBeforeInit && i.onBeforeInit.call(m, i), f = e.obj(i.id), b = m.config = i, p = f.find("input"), f.find(
						i.handleRemove).length > 0 || p.after('<i class="' + i.handleRemove.substr(1) + '"></i>'), g = f.find(i.handleRemove),
					g.hide(), w || a(i), i.onInited && i.onInited.call(m, i), this
			}

			function a(n) {
				return f.on("click.bui", n.handle, function(e) {
					document.activeElement.blur();
					var t = p.val();
					h = t, d.call(m, "search", e, t), n.callback && n.callback.call(m, e, t)
				}), f.on("click.bui", n.handleRemove, function(e) {
					document.activeElement.blur(), p.val("");
					var i = p.val();
					h = i, t(this).hide(), d.call(m, "remove", e, i), n.onRemove && n.onRemove.call(m, e, i)
				}), f.on("input", "input", e.unit.debounce(function(e) {
					var t = p.val();
					h = t, t ? g.show() : g.hide(), d.call(m, "input", e, t), n.onInput && n.onInput.call(m, e, t)
				}, n.delayTime)), w = !0, this
			}

			function o(e) {
				return e = e || h, d.call(this, "search", {}, e), b.callback && b.callback.call(this, {}, e), this
			}

			function r(e) {
				var e = 1 == e;
				f && (f.off(), e && f.remove()), u("search"), u("remove"), u("input")
			}

			function l(t) {
				var n = {};
				return e.widget.call(n, t)
			}

			function c(t, n) {
				return e.option.call(m, t, n)
			}

			function s(t, n) {
				return e.on.apply(m, arguments), this
			}

			function u(t, n) {
				return e.off.apply(m, arguments), this
			}

			function d(t) {
				m.self = this == window || this == m ? null : this, e.trigger.apply(m, arguments)
			}
			var f, h, p, g, v = {
					id: "",
					handle: ".icon-search,.btn-search",
					handleRemove: ".icon-removefill",
					delayTime: 400,
					onInput: null,
					onRemove: null,
					autoinit: !0,
					onBeforeInit: null,
					onInited: null,
					callback: null
				},
				m = {
					handle: {},
					on: s,
					off: u,
					search: o,
					destroy: r,
					widget: l,
					option: c,
					config: b,
					init: i
				},
				b = m.config = t.extend(!0, {}, v, e.config.searchbar, n),
				w = !1;
			return b.autoinit && i(b), m
		}
	}(bui || {}, libs),
	function(e, n) {
		e.select = function(i) {
			function a(t) {
				var i = n.extend(!0, q, t);
				if (i.onBeforeInit && i.onBeforeInit.call(H, i), i.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() ||
						"body" : "body"), X = [], Z = [], Q = [], U = i.id ? e.obj(i.id).attr("id") : U, q = H.config = i, J =
					"function" == typeof i.template ? i.template : u, i.data && i.data.length || G) var a = J.call(this, i.data);
				if (i.popup)
					if (z) R.find(".bui-dialog-main").html(a);
					else {
						if (i.id) R = e.obj(i.id);
						else {
							var r = c();
							n(i.appendTo).append(r), R = e.obj(U), R.find(".bui-dialog-main").html(a)
						}
						z = e.dialog({
							id: U,
							effect: i.effect,
							mask: i.mask,
							position: i.position,
							autoClose: !1,
							height: i.height,
							width: i.width,
							zoom: !1,
							fullscreen: i.fullscreen,
							onMask: function(e) {
								h()
							}
						})
					}
				else {
					if (!i.id) return void e.hint("select id 必须有");
					R = e.obj(i.id), i.data && i.data.length && R.html(a)
				}
				return M = R.find(i.handle), i.data && i.data.length < 1 && o(), G || l(i), i.value && g(i.value), i.onInited &&
					i.onInited.call(H, i), this
			}

			function o() {
				var e = [],
					t = [];
				return M.find("input").each(function(i, a) {
					var o = n(this);
					if (!(o.length < 1)) {
						var l = o.val(),
							c = o.attr("text"),
							s = o.attr("image"),
							u = o.attr("icon"),
							d = o.is(":checked");
						q.data[i] = {}, q.data[i][$] = c, q.data[i][K] = l, q.data[i][Y] = s, q.data[i][_] = u, e.push(l), t.push(c),
							d && r({
								name: c,
								value: l,
								index: i
							})
					}
				}), {
					value: e,
					text: t
				}
			}

			function r(e) {
				var t = parseInt(e.index, 10);
				switch (q.type) {
					case "radio":
					case "select":
						X = [], Z = [], Q = [], X.push(e.name), Z.push(e.value), Q.push(t);
						break;
					case "checkbox":
						X.push(e.name), Z.push(e.value), Q.push(t)
				}
			}

			function l(t) {
				t.trigger && (F = e.obj(t.trigger), A = F.find(t.triggerChildren).length ? F.find(t.triggerChildren) : F, B = t.placeholder ||
					n.trim(A.html() || ""), t.placeholder && A.html(t.placeholder), F.on("click.bui", function(e) {
						var i = t.onBeforeOpen && t.onBeforeOpen.call(H);
						n(this).hasClass("disabled") || 0 == i || d()
					}));
				var i = function(i) {
						var a = n(i.target[i.target.length - 1]);
						if (!a.attr("disabled")) {
							var o = a.val(),
								l = a.attr("text"),
								c = a.attr("index"),
								s = "INPUT" !== i.srcElement.nodeName ? a.is(":checked") : !a.is(":checked");
							i.target = a[0], i.index = c, s ? s && (t.toggle || "checkbox" == t.type) && (D.call(H, "uncheck", i), e.array
								.remove(X, l), e.array.remove(Z, o), e.array.remove(Q, c), t.onChange && t.onChange.call(H, i)) : (D.call(H,
								"check", i), r({
								name: l,
								value: o,
								index: c
							}), t.onChange && t.onChange.call(H, i)), g(Z.join(",") || "", i), m(X.join(",") || "")
						}
					},
					a = function(e) {
						var a = null;
						e.srcElement = e.originalEvent && e.originalEvent.srcElement || e.srcElement, a = n(this).find("input"), e.target = [
							a[0]
						], i.call(H, e), t.popup && t.autoClose && h(), D.call(H, "select", e), e.stopPropagation()
					};
				R.on("click", t.handle, a);
				var o = function(e) {
					t.callback && t.callback.call(H, e, H), e.stopPropagation()
				};
				R.on("click.bui", t.callbackHandle, o), G = !0
			}

			function c(e) {
				var t = "";
				return q.popup && (t += '<div id="' + U + '" class="bui-dialog bui-dialog-select">', q.title && (t +=
					'<div class="bui-dialog-head">' + q.title + "</div>"), t += '  <div class="bui-dialog-main">'), q.popup && (t +=
					"  </div>", q.buttons.length > 0 && (t += '    <div class="bui-dialog-foot bui-box">', n.each(q.buttons,
						function(e, n) {
							t += '        <div class="span1">', t += '             <div class="bui-btn ' + (n.className || "") +
								'" value="' + (n.value || "") + '">' + (n.name || n) + "</div>", t += "        </div>"
						}), t += "    </div>"), t += "</div>"), t
			}

			function s(e) {
				var e = e || {},
					t = document.createElement("input");
				for (var n in e) "string" != typeof e[n] && "number" != typeof e[n] || t.setAttribute(n, e[n]);
				switch (q.type) {
					case "select":
						t.setAttribute("type", "radio"), t.setAttribute("class", q.className || "bui-choose");
						break;
					case "radio":
						t.setAttribute("type", "radio"), t.setAttribute("class", q.className || "bui-radio");
						break;
					case "checkbox":
						t.setAttribute("type", "checkbox"), t.setAttribute("class", q.className || "bui-choose");
						break;
					default:
						t.setAttribute("type", "checkbox")
				}
				return t
			}

			function u(t) {
				var i = W,
					a = "",
					o = "";
				return n.each(t, function(t, a) {
					var r = "string" == typeof a ? a : a[$] || a || "",
						l = a && a[Y] ? a[Y] || a : "",
						c = a && a[_] ? a[_] || a : "",
						u = a && a[K] ? a[K] || a : a || r || t,
						d = t,
						f = {
							name: i,
							value: u,
							text: r,
							index: d
						};
					l && (f.image = l), c && (f.icon = c), a = a && "object" === e.typeof(a) ? a : {};
					var h = n.extend(!0, {}, a, f),
						p = s(h).outerHTML;
					if (o += '    <div class="bui-btn bui-box bui-btn-line">', "left" == q.direction && (o += p), l) {
						var g = e.unit.endWithImage(l) ? '<div class="thumbnail"><img src="' + l + '" alt="" /></div>' :
							'<div class="thumbnail ' + l + '"></div>';
						o += g
					}
					if (c) {
						var v = e.unit.endWithImage(c) ? '<i class="icon"><img src="' + c + '" alt="" /></i>' : '<i class="icon ' + c +
							'"></i>';
						o += v
					}
					"center" == q.direction ? (o += '        <div class="span1" align="center">' + r + "</div>", o += p) : o +=
						'        <div class="span1">' + r + "</div>", "right" == q.direction && (o += p), o += "    </div>"
				}), a += '    <div class="bui-list bui-list-select">', a += o, a += "    </div>"
			}

			function d(e) {
				D.call(this, "beforeshow");
				var n = {};
				return "function" == typeof e ? n.callback = function() {
						e && e.call(H), D.call(H, "show")
					} : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), q.popup &&
					z ? (!z.isOpen() && z.open(n), D.call(H, "show")) : (R.css("display", "block"), n.callback ? n.callback() : D.call(
						H, "show")), this
			}

			function f() {
				return R.html(""), q.data = [], this
			}

			function h(e) {
				D.call(this, "beforehide");
				var n = {};
				return "function" == typeof e ? n.callback = function() {
						e && e.call(H), D.call(H, "hide")
					} : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), q.popup &&
					z ? z.isOpen() && z.close(n) : (R.css("display", "none"), n.callback ? n.callback() : D.call(H, "hide")), this
			}

			function p() {
				return Q.join(",")
			}

			function g(t, n) {
				if (void 0 === t) return Z.join(",");
				M = R.find(q.handle);
				var i = [],
					a = [],
					o = [],
					r = [],
					l = [];
				"string" == typeof t && t.indexOf(",") > -1 ? l = t.split(",") : t instanceof Array ? l = t : t && l.push(t), q.data &&
					q.data.forEach(function(t, n) {
						var c = t && "object" === e.typeof(t) && t.hasOwnProperty($) ? String(t[$]) : String(t),
							s = t && "object" === e.typeof(t) && t.hasOwnProperty(K) ? String(t[K]) : String(t) || String(n),
							u = M.eq(n).find("input");
						if ("" == t) return u.prop("checked", !1), X = [], Z = [], void(Q = []);
						var d = e.array.index(l, c);
						e.array.index(l, s) > -1 || d > -1 ? ("radio" != q.type && "select" != q.type || (a = [], o = [], r = []), a.push(
							c), o.push(s), r.push(n), i[n] = u, u.prop("checked", !0)) : u.prop("checked", !1)
					}), X = a.slice(0), Z = o.slice(0), Q = r.slice(0);
				var c = n || {
					target: i[i.length - 1],
					index: Q
				};
				D.call(H, "change", c), F && q.change && (F.attr("value", o.join(",")), A.text(X.join(","))), R.attr("value", o.join(
					","))
			}

			function v() {
				var e = [];
				return Z.forEach(function(t, n) {
					e.push({
						value: t,
						name: X[n],
						index: Q[n]
					})
				}), e
			}

			function m(e) {
				return void 0 === e ? X.join(",") : (F && q.change && (F.attr("text", e), A.html(e || B)), R.attr("text", e),
					this)
			}

			function b(e) {
				var t = [];
				return String(e).indexOf(",") > -1 ? t = e.split(",") : t.push(parseInt(e)), X = [], Z = [], t.forEach(function(e,
					t) {
					q.data[e] && X.push(q.data[e][$] || q.data[e]), q.data[e] && Z.push(q.data[e][K] || t)
				}), "checkbox" == q.type ? (m(X.join(",")), g(Z.join(","))) : (m(X[0]), g(Z[0])), this
			}

			function w(t) {
				var n = [];
				return String(t).indexOf(",") > -1 ? n = t.split(",") : n.push(parseInt(t)), n.forEach(function(t, n) {
					var i = M.eq(t).find("input"),
						a = i.val(),
						o = i.attr("text");
					e.array.delete(X, o), e.array.delete(Z, a), i.prop("checked", null)
				}), this
			}

			function y() {
				if ("checkbox" == q.type) {
					b(q.data.map(function(e, t) {
						return t
					}).join(","))
				} else b(0);
				return this
			}

			function x() {
				return X = [], Z = [], M.find("input").prop("checked", null), g(""), m(""), D.call(this, "reset"), this
			}

			function k() {
				if ("checkbox" == q.type) {
					var t = X.map(function(e, t) {
						return e
					});
					Z.map(function(e, t) {
						return e
					});
					X = [], Z = [], q.data && q.data.forEach(function(n, i) {
						var a = M.eq(i).find("input");
						e.array.index(t, n[$]) > -1 ? a.prop("checked", null) : (a.prop("checked", !0), X.push(n[$]), Z.push(n[K]))
					}), g(Z.join(",") || ""), m(X.join(",") || "")
				} else x();
				return this
			}

			function I(t) {
				var n = [];
				return String(t).indexOf(",") > -1 ? n = t.split(",") : n.push(t), n.forEach(function(t, n) {
					var i = null;
					q.data.forEach(function(n, a) {
						var o = n[$] || n,
							r = n[K] || n;
						t != r && t != o || (i = M.eq(a).find("input"), i.prop("checked", null), e.array.remove(X, o), e.array.remove(
							Z, r))
					})
				}), this
			}

			function T() {
				var e = F;
				return e && e.addClass("disabled"), this
			}

			function C() {
				var e = F;
				return e && e.removeClass("disabled"), this
			}

			function O(e) {
				if (void 0 === e) M.find("input").attr("disabled", !0);
				else {
					if ("number" != typeof e) return void console.log("index 必须为数字");
					M.eq(e).find("input").attr("disabled", !0)
				}
				return this
			}

			function j(e) {
				if (void 0 === e) M.find("input").removeAttr("disabled");
				else {
					if ("number" != typeof e) return void console.log("index 必须为数字");
					M.eq(e).find("input").removeAttr("disabled")
				}
				return this
			}

			function S(e) {
				var e = 1 == e;
				return R && (R.off(), e && R.remove()), F && (F.off("click.bui"), e && F.remove()), z && z.destroy(e), P("show"),
					P("hide"), P("change"), P("select"), P("check"), P("uncheck"), this
			}

			function E(t) {
				var n = {
					dialog: z || {}
				};
				return e.widget.call(n, t)
			}

			function L(t, n) {
				return e.option.call(H, t, n)
			}

			function N(t, n) {
				return e.on.apply(H, arguments), this
			}

			function P(t, n) {
				return e.off.apply(H, arguments), this
			}

			function D(t) {
				H.self = this == window || this == H ? null : this, e.trigger.apply(H, arguments)
			}
			var F, R, B, A, M, z, V = {
					id: "",
					trigger: "",
					triggerChildren: ".span1",
					handle: ".bui-list .bui-btn",
					className: "",
					name: "",
					appendTo: "",
					data: [],
					popup: !0,
					title: "",
					autoClose: !1,
					placeholder: "",
					field: {
						name: "name",
						value: "value",
						image: "image",
						icon: "icon"
					},
					height: 0,
					width: 0,
					mask: !0,
					change: !0,
					toggle: !1,
					effect: "fadeInUp",
					type: "select",
					direction: "left",
					position: "bottom",
					fullscreen: !1,
					value: "",
					buttons: [],
					onChange: null,
					autoinit: !0,
					onBeforeOpen: null,
					onBeforeInit: null,
					template: null,
					onInited: null,
					callbackHandle: ".bui-dialog-foot .bui-btn",
					callback: null
				},
				H = {
					handle: {},
					on: N,
					off: P,
					value: g,
					values: v,
					index: p,
					active: b,
					unactive: w,
					disabled: T,
					enabled: C,
					disabledSelect: O,
					enabledSelect: j,
					template: J,
					empty: f,
					text: m,
					show: d,
					hide: h,
					selectAll: y,
					selectNone: x,
					unselect: k,
					unselected: I,
					destroy: S,
					widget: E,
					option: L,
					config: q,
					init: a
				},
				q = H.config = n.extend(!0, {}, V, e.config.select, i),
				U = e.guid(),
				W = q.name || e.guid(),
				$ = q.field.name,
				K = q.field.value,
				Y = q.field.image,
				_ = q.field.icon,
				J = null,
				X = [],
				Z = [],
				Q = [],
				G = !1;
			return q.autoinit && a(q), H
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.dropdown = function(n) {
			function i(n) {
				var i = t.extend(!0, N, n);
				if (i.onBeforeInit && i.onBeforeInit.call(L, i), !i.id) return void e.showLog("dropdown id不能为空",
					"bui.dropdown.init");
				if (I = e.obj(i.id), N = L.config = i, T = I.children(i.handle), S = i.target ? I.find(i.target) : T.next(), F =
					T.text(), i.data && i.data.length) {
					var l = "function" == typeof i.template ? i.template.call(L, i.data) : p(i.data);
					S.length ? S.remove() && T.after(l) : I.append(l), S = I.find(i.target)
				}
				O = i.relative, C = I.attr("position") || i.position;
				var c = I[0] && I[0].offsetLeft >= document.documentElement.clientWidth ? 0 : I[0] && I[0].offsetLeft,
					u = i.width ? "auto" : -c + "px",
					d = {
						bottom: {
							menuPosition: "bui-menu-bottom",
							arrowPosition: "bui-arrow-up",
							left: u
						},
						top: {
							menuPosition: "bui-menu-top",
							arrowPosition: "bui-arrow-down",
							left: u
						},
						left: {
							menuPosition: "bui-menu-left",
							arrowPosition: "bui-arrow-right",
							left: "auto"
						},
						right: {
							menuPosition: "bui-menu-right",
							arrowPosition: "bui-arrow-left",
							left: "100%"
						}
					};
				if (j = i.width > 0 ? i.width : O ? P : i.width, parseFloat(j) > 0 && S.width(j), o(i.showArrow ? d[C].arrowPosition +
						" " + d[C].menuPosition : d[C].menuPosition, d[C].left), i.value) r(i.value);
				else {
					var f = S.find(i.targetHandle + ".active").eq(0),
						h = f.index();
					h > -1 && s(h)
				}
				return D || a(i), i.onInited && i.onInited.call(L, i), this
			}

			function a(e) {
				var n = function(n) {
						if (!t(this).hasClass("disabled")) {
							var i = t(this).hasClass("active"),
								a = e.target ? t(this).parent().find(e.target) : t(this).next();
							h(), i ? (t(this).removeClass("active"), a.css("display", "none"), k.call(L, "hide")) : (t(this).addClass(
								"active"), a.css("display", "block"), k.call(L, "show")), n.stopPropagation()
						}
					},
					i = function(n) {
						var i = t(this),
							a = i.parent(),
							o = i.attr("value") || "";
						t.trim(i.text()), void 0 != a.attr("change") ? a.attr("change") : e.change;
						e.showActive && i.addClass("active").siblings().removeClass("active"), r.call(this, o), N.autoClose && d(), n.target =
							this, e.callback && e.callback.call(L, n), N.stopPropagation && n.stopPropagation()
					};
				T.on("click.bui", n), I.on("click.bui", e.targetHandle, i);
				var a = function(e) {
					h(), e.stopPropagation()
				};
				N.autoClose && t("body").off("click.bui").on("click.bui", ":not(.bui-dropdown)", a), D = !0
			}

			function o(e, t) {
				S.addClass(e), O && S.css({
					left: t
				})
			}

			function r(n) {
				if (void 0 === n) {
					return R || T.attr("value")
				}
				var i = "htmllielement" === e.typeof(this),
					a = i && t(this).parent(),
					o = i ? t(this).parents(".bui-dropdown").children(N.handle) : T,
					r = i ? a.find(N.targetHandle) : S.find(N.targetHandle);
				if (r.removeClass("active"), N.data && N.data.length) {
					if ("" == n) return R = "", void o.attr("value", n);
					var l = e.array.index(N.data, n, "value"),
						c = e.array.index(N.data, n, "name");
					l > -1 && (r.eq(l).addClass("active"), o.attr("value", n), N.change && u.call(this, N.data[l].name), R = n), c >
						-1 && (r.eq(c).addClass("active"), o.attr("value", N.data[c].value), N.change && u.call(this, n), R = N.data[c]
							.value)
				} else r.each(function(e, i) {
					var a = i.innerText,
						r = i.getAttribute("value");
					a != n && r != n || (t(this).addClass("active"), o.attr("value", r), N.change && u.call(this, a), R = r)
				});
				N.change || k.call(this, "change")
			}

			function l() {
				return {
					name: B,
					value: R
				}
			}

			function c() {
				return R = "", r(""), u(F), d(), this
			}

			function s(e) {
				e = parseInt(e);
				var n = S.find(N.targetHandle).eq(e);
				if (n.length >= 0) {
					r(n.attr("value") || t.trim(n.text()) || ""), N.showActive && n.addClass("active").siblings().removeClass(
						"active")
				}
				return this
			}

			function u(n) {
				if (void 0 === n) {
					return B || t.trim(T.text())
				}
				var i = "htmllielement" === e.typeof(this),
					a = i ? t(this).parents(".bui-dropdown").children(N.handle) : T,
					o = a.children(N.handleChildren);
				return o.length ? o.text(n) : a.text(n), B = n, k.call(this, "change"), this
			}

			function d() {
				return T.removeClass("active"), S.css("display", "none"), k.call(this, "hide"), this
			}

			function f() {
				return T.addClass("active"), S.css("display", "block"), k.call(this, "show"), this
			}

			function h() {
				return t(".bui-dropdown > .bui-btn").removeClass("active"), t(".bui-dropdown > .bui-list").css("display", "none"),
					k.call(this, "hide"), this
			}

			function p(e) {
				var t = "";
				return t += '<ul class="bui-list">', e.map(function(e, n) {
					t += '<li class="bui-btn" value="' + e.value + '">' + e.name + "</li>"
				}), t += "</ul>"
			}

			function g() {
				var e = T;
				return e && e.addClass("disabled"), this
			}

			function v() {
				var e = T;
				return e && e.removeClass("disabled"), this
			}

			function m(e) {
				var e = 1 == e;
				I && (I.off("click.bui"), e && I.remove()), T && (T.off("click.bui"), e && T.remove()), t("body").off("click.bui"),
					x("show"), x("hide")
			}

			function b(t) {
				var n = {};
				return e.widget.call(n, t)
			}

			function w(t, n) {
				return e.option.call(L, t, n)
			}

			function y(t, n) {
				return e.on.apply(L, arguments), this
			}

			function x(t, n) {
				return e.off.apply(L, arguments), this
			}

			function k(t) {
				L.self = this == window || this == L ? null : this, e.trigger.apply(L, arguments)
			}
			var I, T, C, O, j, S, E = {
					id: "",
					handle: ".bui-btn",
					handleChildren: ".span1",
					target: ".bui-list",
					targetHandle: ".bui-btn",
					data: null,
					position: "bottom",
					showArrow: !1,
					showActive: !0,
					autoClose: !0,
					stopPropagation: !1,
					width: 0,
					value: "",
					relative: !0,
					change: !0,
					autoinit: !0,
					template: null,
					onBeforeInit: null,
					onInited: null,
					callback: null
				},
				L = {
					handle: {},
					on: y,
					off: x,
					active: s,
					disabled: g,
					enabled: v,
					value: r,
					values: l,
					reset: c,
					text: u,
					hide: d,
					show: f,
					hideAll: h,
					destroy: m,
					widget: b,
					option: w,
					config: N,
					init: i
				},
				N = L.config = t.extend(!0, {}, E, e.config.dropdown, n),
				P = document.documentElement.clientWidth,
				D = !1,
				F = "",
				R = "",
				B = "";
			return N.autoinit && i(N), L
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.accordion = function(n) {
			function i(n) {
				var i = t.extend(!0, j, n);
				return i.onBeforeInit && i.onBeforeInit.call(O, i), x = document.documentElement.clientWidth, k = document.documentElement
					.clientHeight, S = e.obj(i.id) || e.obj("." + e.prefix("accordion")), j = O.config = i, I = i.handle.indexOf("#") >
					-1 ? e.obj(i.handle) : S.children(i.handle), T = i.target.indexOf("#") > -1 ? e.obj(i.target) : S.children(i.target),
					a(i), E || o(i), i.onInited && i.onInited.call(O, i), this
			}

			function a(e) {
				I.removeClass("active"), T.css("display", "none"), parseFloat(e.targetHeight) > 0 && T.height(e.targetHeight),
					parseFloat(e.height) > 0 && S.height(e.height)
			}

			function o(e) {
				var n = function(n) {
					t(this).hasClass("disabled") || t(this).attr("href") || (c.call(this, n, e), e.callback && e.callback.call(O, n),
						!t(this).attr("href") && n.stopPropagation())
				};
				e.handle.indexOf("#") > -1 ? I.on("click.bui", n) : S.off("click.bui").on("click.bui", e.handle, n), E = !0
			}

			function r(e) {
				var t;
				return t = "number" == typeof e ? I.eq(e) : I, t && t.addClass("disabled"), this
			}

			function l(e) {
				var t;
				return t = "number" == typeof e ? I.eq(e) : I, t && t.removeClass("disabled"), this
			}

			function c(n, i) {
				var a = t(this),
					o = a.hasClass("active"),
					r = (I.index(this), i.target.indexOf("#") > -1 ? e.obj(i.target) : a.next(i.target));
				i.single ? o ? (a.removeClass("active"), r.css("display", "none"), y.call(O, "hide", n)) : (p(), a.addClass(
					"active"), r.css("display", "block"), y.call(O, "show", n)) : o ? (a.removeClass("active"), r.css("display",
					"none"), y.call(O, "hide", n)) : (a.addClass("active"), r.css("display", "block"), y.call(O, "show", n))
			}

			function s(e) {
				var e = Number(e) || 0,
					t = I.eq(e).length ? I.eq(e) : I,
					n = T.eq(e).length ? T.eq(e) : t.next(j.target);
				return t.addClass("active"), n.css("display", "block"), y.call(this, "show", {
					target: I[e]
				}), this
			}

			function u(e) {
				var e = Number(e) || 0,
					t = I.eq(e).length ? I.eq(e) : I,
					n = T.eq(e).length ? T.eq(e) : t.next(j.target);
				return t.removeClass("active"), n.css("display", "none"), y.call(this, "hide", {
					target: I[e]
				}), this
			}

			function d() {
				return S.length > 1 ? S.each(function(e, t) {
					f(0, t)
				}) : f(0), y.call(this, "show", {
					target: I[0]
				}), this
			}

			function f(e, n) {
				var e = e || 0;
				(n ? t(n) : S).children(j.handle).eq(e).addClass("active").next(j.target).css("display", "block")
			}

			function h() {
				return I.each(function(e, n) {
					t(n).addClass("active").next(j.target).css("display", "block")
				}), y.call(this, "showall", {
					target: I
				}), this
			}

			function p() {
				return I.each(function(e, n) {
					t(n).removeClass("active").next(j.target).css("display", "none")
				}), y.call(this, "hideall", {
					target: I
				}), this
			}

			function g(e) {
				S && (S.off("click.bui"), S.remove(), S = null), w("hide"), w("show")
			}

			function v(t) {
				var n = {};
				return e.widget.call(n, t)
			}

			function m(t, n) {
				return e.option.call(O, t, n)
			}

			function b(t, n) {
				return e.on.apply(O, arguments), this
			}

			function w(t, n) {
				return e.off.apply(O, arguments), this
			}

			function y(t) {
				O.self = this == window || this == O ? null : this, e.trigger.apply(O, arguments)
			}
			var x, k, I, T, C = {
					id: "",
					handle: "dt",
					target: "dd",
					height: 0,
					targetHeight: 0,
					single: !1,
					autoinit: !0,
					onBeforeInit: null,
					onInited: null,
					callback: null
				},
				O = {
					handle: {},
					on: b,
					off: w,
					showFirst: d,
					showAll: h,
					hideAll: p,
					disabled: r,
					enabled: l,
					destroy: g,
					show: s,
					hide: u,
					widget: v,
					option: m,
					config: j,
					init: i
				},
				j = O.config = t.extend(!0, {}, C, e.config.accordion, n),
				S = null,
				E = !1;
			return j.autoinit && i(j), O
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.rating = function(n) {
			function i(n) {
				var i = t.extend(!0, O, n);
				return i.onBeforeInit && i.onBeforeInit.call(C, i), i.id ? (w = e.obj(i.id), O = C.config = i, y = i.fullClassName,
					x = i.halfClassName, l(i), j || r(i), i.onInited && i.onInited.call(C, i), this) : void e.hint("rating id不能为空")
			}

			function a(t) {
				var n = (e.guid(), ""),
					i = 0,
					a = t.stars;
				for (i = 0; i < a; i++) n += '<div class="bui-rating-cell" ></div>';
				return n
			}

			function o(e) {
				var t, n = "",
					e = String(e) || String(k),
					i = 0,
					a = O.stars,
					o = [];
				o = e.indexOf(".") > -1 ? e.split(".") : [e, 0];
				var r = parseInt(o[0]);
				for (t = o[1] / 10 * 100 + "%", i = 0; i < a; i++) i < r && (n +=
						'<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:100%;">&nbsp;</div></div>'), i ==
					r && (n += '<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:' + t +
						';">&nbsp;</div></div>'), i > r && (n +=
						'<div class="bui-rating-cell" ><div class="bui-rating-cell-full" style="width:0;">&nbsp;</div></div>');
				return n
			}

			function r(e) {
				if (!e.disabled) {
					var n = String(e.value).indexOf(".") > -1 ? 1 : 0;
					w.on("click.bui", e.handle, function(i) {
						var a = t(this).index(),
							o = 0;
						if (e.half) {
							o = n % 2 == 0 ? a + .5 : a + 1
						} else o = a + 1;
						c(o), s(o), n++, e.callback && e.callback.call(C, i), i.stopPropagation()
					})
				}
				j = !0
			}

			function l(e) {
				if (e.render) {
					var t = a(e);
					w.html(t), I = w.children(e.handle)
				} else I = w.children(e.handle);
				s(e.value)
			}

			function c(e) {
				var n = [];
				e = String(e), O.half && e.indexOf(".") > -1 ? n = e.split(".") : n.push(e), I.removeClass(y).removeClass(x), I.each(
					function(e, i) {
						1 == n.length && e < n[0] ? t(i).addClass(y) : 2 == n.length && (e < n[0] && t(i).addClass(y), e == n[0] && t(
							i).addClass(x))
					})
			}

			function s(e) {
				return e ? (w.attr("value", e), c(e), k = e, b.call(C, "change", e)) : k = w.attr("value"), k
			}

			function u(e) {
				var t = o(e);
				w.attr("value", e).html(t), k = e
			}

			function d(e) {
				var e = 0 != e;
				return e ? (w.off("click.bui", O.handle), b.call(C, "disabled")) : f(), this
			}

			function f(e) {
				return O.disabled = !1, r(), b.call(C, "undisabled"), this
			}

			function h(e) {
				var e = 1 == e;
				w && (w.off("click.bui"), e && w.remove()), m("change")
			}

			function p(t) {
				var n = {};
				return e.widget.call(n, t)
			}

			function g(t, n) {
				return e.option.call(C, t, n)
			}

			function v(t, n) {
				return e.on.apply(C, arguments), this
			}

			function m(t, n) {
				return e.off.apply(C, arguments), this
			}

			function b(t) {
				C.self = this == window || this == C ? null : this, e.trigger.apply(C, arguments)
			}
			var w, y, x, k, I, T = {
					id: "",
					handle: ".bui-rating-cell",
					fullClassName: "bui-rating-cell-full",
					halfClassName: "bui-rating-cell-half",
					half: !1,
					stars: 5,
					value: 0,
					disabled: !1,
					render: !0,
					autoinit: !0,
					onBeforeInit: null,
					onInited: null,
					callback: null
				},
				C = {
					handle: {},
					on: v,
					off: m,
					disabled: d,
					show: u,
					value: s,
					destroy: h,
					widget: p,
					option: g,
					config: O,
					init: i
				},
				O = C.config = t.extend(!0, {}, T, e.config.rating, n),
				j = !1;
			return O.autoinit && i(O), C
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.actionsheet = function(i) {
			function a(t) {
				var i = n.extend(!0, O, t);
				i.onBeforeInit && i.onBeforeInit.call(C, i), x = e.obj(i.trigger), O = C.config = i, O.id = k = e.guid();
				var a = "function" == typeof i.template ? i.template.call(C, i.data || i.buttons) : r(i.data || i.buttons);
				return e.obj(i.appendTo).append(a), w || (w = e.dialog({
					id: O.id,
					position: i.position,
					mask: i.mask,
					effect: i.effect,
					opacity: i.opacity,
					onBeforeOpen: i.onBeforeOpen,
					onBeforeClose: i.onBeforeClose,
					onMask: function() {
						c(), i.onMask && i.onMask()
					}
				})), I = w.$el(), y = I.find(i.handle), j || o(), i.onInited && i.onInited.call(C, i), this
			}

			function o() {
				var e = function(e) {
						e.target = this, O.callback && O.callback.call(C, e, C), b.call(C, "click", e)
					},
					t = function(e) {
						n(this).hasClass("disabled") || s.call(this)
					};
				I && I.on("click.bui", O.handle, e), x && x.on("click.bui", t), j = !0
			}

			function r(e) {
				var t = parseFloat(O.width),
					n = t > 0 ? "width:" + t + "px;left:50%;right:0;margin-left:-" + t / 2 + "px;" : "",
					i = "";
				return e && e.length && (i += '<div id="' + O.id + '" class="bui-actionsheet" style="' + n + '">', i +=
					'    <ul class="bui-list">', i += l(e), i += "    </ul>", O.cancelText && (i +=
						'    <div class="bui-btn" value="cancel">' + O.cancelText + "</div>"), i += "</div>"), i
			}

			function l(e) {
				var t = "";
				return n.each(e, function(e, n) {
					t += '        <li class="bui-btn ' + (n.className || "") + '" value="' + (n.value || "") + '">' + (n.name ||
						"") + "</li>"
				}), t
			}

			function c(e) {
				b.call(this, "beforehide");
				var n = {};
				return "function" == typeof e ? n.callback = function() {
						e && e.call(C), b.call(C, "hide")
					} : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), w.isOpen() &&
					w.close(n), this
			}

			function s(e) {
				b.call(this, "beforeshow");
				var n = {};
				return "function" == typeof e ? n.callback = function() {
						e && e.call(C), b.call(C, "show")
					} : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), !w.isOpen() &&
					w.open(n), this
			}

			function u(e) {
				var t = x;
				return t && t.addClass("disabled"), this
			}

			function d() {
				var e = x;
				return e && e.removeClass("disabled"), this
			}

			function f(e) {
				var e = 1 == e;
				x && x.off("click.bui"), m("hide"), m("show"), w && w.destroy(e)
			}

			function h(t) {
				var n = {
					dialog: w
				};
				return e.widget.call(n, t)
			}

			function p(t, n) {
				return "buttons" == t && void 0 !== n ? g(t, n) : e.option.call(C, t, n)
			}

			function g(t, n) {
				if (n && "array" === e.typeof(n)) {
					var i = l(n);
					e.obj(O.id).find(".bui-list").html(i)
				}
			}

			function v(t, n) {
				return e.on.apply(C, arguments), this
			}

			function m(t, n) {
				return e.off.apply(C, arguments), this
			}

			function b(t) {
				C.self = this == window || this == C ? null : this, e.trigger.apply(C, arguments)
			}
			var w, y, x, k, I, T = {
					id: "",
					appendTo: ".bui-page",
					trigger: "",
					handle: ".bui-btn",
					position: "bottom",
					effect: "fadeInUp",
					width: 0,
					mask: !0,
					opacity: .6,
					data: null,
					buttons: [],
					template: null,
					cancelText: "取消",
					autoinit: !0,
					onMask: null,
					onBeforeOpen: null,
					onBeforeClose: null,
					onBeforeInit: null,
					onInited: null,
					callback: null
				},
				C = {
					handle: {},
					on: v,
					off: m,
					disabled: u,
					enabled: d,
					hide: c,
					show: s,
					destroy: f,
					widget: h,
					option: p,
					config: O,
					init: a
				},
				O = C.config = n.extend(!1, {}, T, e.config.actionsheet, i),
				j = !1;
			return O.autoinit && a(O), C
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.number = function(n) {
			function i(n) {
				var i = t.extend(!0, N, n);
				return i.onBeforeInit && i.onBeforeInit.call(L, i), D = !1, k = i.max, I = i.min, T = i.step, S = i.id ? e.obj(i.id) :
					e.obj(".bui-number"), N = L.config = i, i.render && o(i), C = S.children(i.prev), O = S.children(i.next), j = S.children(
						i.input), P || l(i), i.disabled && j.attr("disabled", "disabled"), s(i.value), i.target = j, i.value = i.value,
					i.onInited && i.onInited.call(L, i), i.inited && i.inited.call(L, i), this
			}

			function a(e) {
				var t = "";
				return t += '    <div class="bui-number-prev"><i class="icon-minus"></i></div>', t +=
					'    <input type="text" name="' + e.name + '" value="' + e.value + '"/>', t +=
					'    <div class="bui-number-next"><i class="icon-plus"></i></div>'
			}

			function o(e) {
				var t = a(e);
				return S.html(t), this
			}

			function r(t) {
				return e.selector.call(S, t)
			}

			function l(n) {
				return n.onInput && S.off("input", n.input).on("input", n.input, e.unit.debounce(function(e) {
						var i = t(this).val();
						e.value = i, n.onInput && n.onInput.call(L, e), e.stopPropagation()
					}, 400)), S.off("change", n.input).on("change", n.input, function(e) {
						var i = n.autocheck && isNaN(parseInt(t(this).val(), 10)) ? 0 : parseInt(t(this).val(), 10);
						/^[0-9]*$/i.test(i) && s.call(this, i), e.value = i, n.onChange && n.onChange.call(L, e), e.stopPropagation()
					}), S.off("click.bui", n.prev).on("click.bui", n.prev, function(e) {
						var i = t(this).next(N.input);
						e.value = i.val(), p.call(i, e), n.callback && n.callback.call(L, e), e.preventDefault(), e.stopPropagation()
					}),
					S.off("click.bui", n.next).on("click.bui", n.next, function(e) {
						var i = t(this).prev(N.input);
						e.value = i.val(), g.call(i, e), n.callback && n.callback.call(L, e), e.preventDefault(), e.stopPropagation()
					}), P = !0, this
			}

			function c() {
				var e = this == L ? j : t(this);
				return parseInt(e.val(), 10)
			}

			function s(e) {
				var n = this == L ? j : t(this);
				return Array.prototype.slice.call(n).forEach(function(t, n) {
					var i = t.getAttribute("max") || t.parentElement.getAttribute("data-max") || N.max,
						a = t.getAttribute("min") || t.parentElement.getAttribute("data-min") || N.min,
						o = N.autocheck ? u(e, a, i) : e;
					t.value = o;
					x.call(L, "change", {
						target: t,
						value: e
					}), N.onChange && N.onChange.call(L, {
						target: t,
						value: e
					})
				}), this
			}

			function u(e, t, n) {
				var i = e || 0;
				return i > n && (i = n), i < t && (i = t), i && i >= t && i <= n && (i = i), i
			}

			function d(e) {
				var t = 0;
				return e ? (s.call(this, e), t = e) : t = c.call(this), t
			}

			function f(t) {
				if (t && "array" === e.typeof(t)) return Array.prototype.slice.call(S).forEach(function(e, n) {
					(e.id || e.getAttribute("name") || "") == t[n].id && (e.querySelector("input").value = t[n].value)
				}), this;
				var n = [];
				return Array.prototype.slice.call(S).forEach(function(e, t) {
					var i = e.id || e.getAttribute("name") || "",
						a = parseInt(e.querySelector("input").value, 10);
					n.push({
						id: i,
						value: a
					})
				}), n
			}

			function h(e) {
				var n = this == L ? j : t(this),
					e = 0 != e;
				return e ? n.attr("disabled", "disabled") : n.removeAttr("disabled"), this
			}

			function p() {
				var e = this == L ? j : t(this),
					n = e.val(),
					i = parseInt(n, 10),
					a = i -= T;
				return s.call(e, a), x.call(L, "prev", a), this
			}

			function g() {
				var e = this == L ? j : t(this),
					n = e.val(),
					i = parseInt(n, 10),
					a = i += T;
				return s.call(e, a), x.call(L, "next", a), this
			}

			function v(e) {
				var e = 1 == e;
				S && (S.off("click.bui"), S.off("input"), e && S.remove()), y("prev"), y("next"), y("change"), D = !0
			}

			function m(t) {
				var n = {};
				return e.widget.call(n, t)
			}

			function b(t, n) {
				return e.option.call(L, t, n)
			}

			function w(t, n) {
				return e.on.apply(L, arguments), this
			}

			function y(t, n) {
				return e.off.apply(L, arguments), this
			}

			function x(t) {
				L.self = this == window || this == L ? null : this, e.trigger.apply(L, arguments)
			}
			var k, I, T, C, O, j, S, E = {
					id: null,
					min: 0,
					max: 100,
					step: 1,
					value: 1,
					disabled: !1,
					render: !0,
					tips: !1,
					autocheck: !0,
					name: "",
					prev: ".bui-number-prev",
					input: "input",
					next: ".bui-number-next",
					onInput: null,
					autoinit: !0,
					inited: null,
					onBeforeInit: null,
					onInited: null,
					onChange: null,
					callback: null
				},
				L = {
					handle: {},
					on: w,
					off: y,
					$el: r,
					disabled: h,
					value: d,
					values: f,
					prev: p,
					next: g,
					destroy: v,
					widget: m,
					option: b,
					config: N,
					init: i
				},
				N = L.config = t.extend(!0, {}, E, e.config.number, n),
				P = !1,
				D = !1;
			return N.autoinit && i(N), L
		}
	}(bui || {}, libs),
	function(e, t) {
		e.stepbar = function(n) {
			function i(n) {
				var i = t.extend(!0, w, n);
				if (i.onBeforeInit && i.onBeforeInit.call(b, i), !i.id) return void e.hint("stepbar id不能为空");
				g = e.obj(i.id), w = b.config = i;
				var r = "function" == typeof i.template ? i.template.call(b, i.data) : a(i.data);
				return i.lineCenter && g.addClass("bui-stepbar-center"), g.html(r), v = g.children(), y || o(i), i.onInited && i.onInited
					.call(b, i), this
			}

			function a(e) {
				var n = "";
				return t.each(e, function(e, t) {
					var i = w.hasNumber ? e + 1 : "",
						a = w.hasNumber ? "bui-stepbar-number" : "";
					n += '<div class="bui-stepbar-cell ' + a + '">', n += '    <span class="bui-stepbar-dot">' + i + "</span>", n +=
						'    <div class="bui-stepbar-text">', t.title && (n += "        <h3>" + t.title + "</h3>"), t.subtitle && (n +=
							'        <p class="bui-stepbar-time">' + t.subtitle + "</p>"), t.content && (n +=
							'        <p class="bui-stepbar-desc">' + t.content + "</p>"), n += "    </div>", n += "</div>"
				}), n
			}

			function o(e) {
				var n = function(n) {
					if (e.click) {
						r(t(this).index())
					}
					e.callback && e.callback.call(b, n, b)
				};
				return g.on("click.bui", e.handle, n), y = !0, this
			}

			function r(e) {
				if ("number" == typeof e) return e = e >= v.length - 1 ? v.length - 1 : e < 0 ? 0 : e, v.each(function(n, i) {
					n < e && t(i).removeClass("active").addClass("visited"), n == e && t(i).removeClass("visited").addClass(
						"active"), n > e && t(i).removeClass("visited active")
				}), p.call(this, "change", e), e;
				var e = g.children(".active").index();
				return e
			}

			function l() {
				var e = r() + 1;
				return p.call(this, "next", e), r(e)
			}

			function c() {
				var e = r() - 1;
				return p.call(this, "prev", e), r(e)
			}

			function s(e) {
				var e = 1 == e;
				g && (g.off("click.bui"), e && g.remove()), h("next"), h("prev"), h("change")
			}

			function u(t) {
				var n = {};
				return e.widget.call(n, t)
			}

			function d(t, n) {
				return e.option.call(b, t, n)
			}

			function f(t, n) {
				return e.on.apply(b, arguments), this
			}

			function h(t, n) {
				return e.off.apply(b, arguments), this
			}

			function p(t) {
				b.self = this == window || this == b ? null : this, e.trigger.apply(b, arguments)
			}
			var g, v, m = {
					id: null,
					handle: ".bui-stepbar-cell",
					hasNumber: !1,
					lineCenter: !1,
					click: !0,
					autoinit: !0,
					data: [],
					template: null,
					onBeforeInit: null,
					onInited: null,
					callback: null
				},
				b = {
					handle: {},
					on: f,
					off: h,
					value: r,
					next: l,
					prev: c,
					destroy: s,
					widget: u,
					option: d,
					config: w,
					init: i
				},
				w = b.config = t.extend(!0, {}, m, e.config.stepbar, n),
				y = !1;
			return w.autoinit && i(w), b
		}
	}(window.bui || {}, window.libs);
	var i = function(e) {
		function t(e) {
			return window.cancelAnimationFrame ? window.cancelAnimationFrame(e) : window.webkitCancelAnimationFrame ? window.webkitCancelAnimationFrame(
				e) : window.mozCancelAnimationFrame ? window.mozCancelAnimationFrame(e) : window.clearTimeout(e)
		}

		function n(e, t) {
			for (var n = 0; n < e.length; n++) {
				var i = e[n].style;
				i.webkitTransform = i.MsTransform = i.msTransform = i.MozTransform = i.OTransform = i.transform = t
			}
			return e
		}

		function i(e, t) {
			"string" != typeof t && (t += "ms");
			for (var n = 0; n < e.length; n++) {
				var i = e[n].style;
				i.webkitTransitionDuration = i.MsTransitionDuration = i.msTransitionDuration = i.MozTransitionDuration = i.OTransitionDuration =
					i.transitionDuration = t
			}
			return e
		}

		function a(e, t) {
			var n, i, a, o;
			return void 0 === t && (t = "x"), a = window.getComputedStyle(e, null), window.WebKitCSSMatrix ? (i = a.transform ||
				a.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map(function(e) {
					return e.replace(",", ".")
				}).join(", ")), o = new WebKitCSSMatrix("none" === i ? "" : i)) : (o = a.MozTransform || a.OTransform || a.MsTransform ||
				a.msTransform || a.transform || a.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n =
				o.toString().split(",")), "x" === t && (i = window.WebKitCSSMatrix ? o.m41 : 16 === n.length ? parseFloat(n[12]) :
				parseFloat(n[4])), "y" === t && (i = window.WebKitCSSMatrix ? o.m42 : 16 === n.length ? parseFloat(n[13]) :
				parseFloat(n[5])), i || 0
		}
		var o = this,
			r = {
				updateValuesOnTouchmove: !1,
				rotateEffect: !1,
				momentumRatio: 7,
				freeMode: !1
			};
		e = e || {};
		for (var l in r) void 0 === e[l] && (e[l] = r[l]);
		o.params = e, o.cols = [], o.initialized = !1;
		var c = function() {
			var e = navigator.userAgent,
				t = e.match(/(Android);?[\s\/]+([\d.]+)?/),
				n = e.match(/(iPad).*OS\s([\d_]+)/),
				i = e.match(/(iPod)(.*OS\s([\d_]+))?/),
				a = !n && e.match(/(iPhone\sOS)\s([\d_]+)/),
				o = n || i || a,
				r = !!t;
			return o || navigator.userAgent.toLowerCase().indexOf("safari") >= 0 && navigator.userAgent.toLowerCase().indexOf(
				"chrome") < 0 && !r
		}();
		return o.setValue = function(e, t) {
			var n = 0;
			if (0 === o.cols.length) return o.value = e, void o.updateValue(e);
			for (var i = 0; i < o.cols.length; i++) o.cols[i] && !o.cols[i].divider && (o.cols[i].setValue(e[n], t), n++)
		}, o.updateValue = function(e) {
			for (var t = e || [], n = [], i = 0; i < o.cols.length; i++) o.cols[i].divider || (t.push(o.cols[i].value), n.push(
				o.cols[i].displayValue));
			t.indexOf(void 0) >= 0 || (o.value = t, o.displayValue = n, o.params.onChange && o.params.onChange(o, o.value, o.displayValue))
		}, o.initPickerCol = function(e, r) {
			function l(e) {
				if (!k && !x) {
					var t = e.originalEvent || e;
					t.preventDefault(), x = !0, I = T = t.targetTouches[0].pageY, C = (new Date).getTime(), D = !0, j = E = a(p.wrapper[
						0], "y")
				}
			}

			function s(e) {
				if (x) {
					var r = e.originalEvent || e;
					r.preventDefault(), D = !1, T = r.targetTouches[0].pageY, k || (t(y), k = !0, j = E = a(p.wrapper[0], "y"), i(p
						.wrapper, "0ms")), r.preventDefault();
					E = j + (T - I), S = void 0, E < b && (E = b - Math.pow(b - E, .8), S = "min"), E > w && (E = w + Math.pow(E -
							w, .8), S = "max"), n(p.wrapper, "translate3d(0," + E + "px,0)"), p.updateItems(void 0, E, 0, o.params.updateValuesOnTouchmove),
						N = E - L || E, P = (new Date).getTime(), L = E
				}
			}

			function u(e) {
				if (!x || !k) return void(x = k = !1);
				x = k = !1, i(p.wrapper, ""), S && ("min" === S ? n(p.wrapper, "translate3d(0," + b + "px,0)") : n(p.wrapper,
					"translate3d(0," + w + "px,0)")), O = (new Date).getTime();
				var t;
				O - C > 300 ? t = E : (Math.abs(N / (O - P)), t = E + N * o.params.momentumRatio), t = Math.max(Math.min(t, w),
					b);
				var a = -Math.floor((t - w) / v);
				o.params.freeMode || (t = -a * v + w), n(p.wrapper, "translate3d(0," + parseInt(t, 10) + "px,0)"), p.updateItems(
					a, t, "", !0), setTimeout(function() {
					D = !0
				}, 100)
			}

			function d(e) {
				if (D) {
					t(y);
					var n = $(this).attr("data-picker-value");
					p.setValue(n)
				}
			}
			var f = $(e),
				h = f.index(),
				p = o.cols[h];
			if (!p.divider) {
				p.container = f, p.wrapper = p.container.find(".picker-items-col-wrapper"), p.items = p.wrapper.find(
					".picker-item");
				var g, v, m, b, w;
				p.replaceValues = function(e, t, n) {
					p.destroyEvents(), p.values = e, p.displayValues = t;
					var i = o.columnHTML(p, !0);
					p.wrapper.html(i), p.items = p.wrapper.find(".picker-item"), p.calcSize(), p.setValue(n || p.values[0], 0, !0),
						p.initEvents()
				}, p.calcSize = function() {
					o.params.rotateEffect && (p.container.removeClass("picker-items-col-absolute"), p.width || (p.container[0].style
						.width = ""));
					var e, t;
					e = 0, t = p.container[0].offsetHeight, g = p.wrapper[0].offsetHeight, v = p.items[0].offsetHeight, m = v * p.items
						.length, b = t / 2 - m + v / 2, w = t / 2 - v / 2, p.width && (e = p.width, parseInt(e, 10) === e && (e +=
							"px"), p.container[0].style.width = e), o.params.rotateEffect && (p.width || (p.items.each(function() {
							var t = $(this);
							t[0].style.width = "auto", e = Math.max(e, t[0].offsetWidth), t[0].style.width = ""
						}), p.container[0].style.width = e + 2 + "px"), p.container.addClass("picker-items-col-absolute"))
				}, p.calcSize(), n(p.wrapper, "translate3d(0," + w + "px,0)"), i(p.wrapper, "0ms");
				var y;
				p.setValue = function(e, t, a) {
					void 0 === t && (t = "");
					var o = p.wrapper.find('.picker-item[data-picker-value="' + e + '"]').index();
					void 0 !== o && -1 !== o || (o = 0);
					var r = -o * v + w;
					n(p.wrapper, "translate3d(0," + r + "px,0)"), i(p.wrapper, t + "ms"), p.updateItems(o, r, t, a)
				}, p.updateItems = function(e, t, r, l) {
					void 0 === t && (t = a(p.wrapper[0], "y")), void 0 === e && (e = -Math.round((t - w) / v)), e < 0 && (e = 0),
						e >= p.items.length && (e = p.items.length - 1);
					var s = p.activeIndex;
					p.wrapper.find(".picker-selected").removeClass("picker-selected"), i(p.items, r);
					var u = p.items.eq(e).addClass("picker-selected");
					if (n(u, ""), o.params.rotateEffect) {
						Math.floor((t - w) / v);
						p.items.each(function() {
							var e = $(this),
								i = e.index() * v,
								a = w - t,
								o = i - a,
								r = o / v,
								l = Math.ceil(p.height / v / 2) + 1,
								s = -18 * r;
							s > 180 && (s = 180), s < -180 && (s = -180), Math.abs(r) > l ? e.addClass("picker-item-far") : e.removeClass(
								"picker-item-far"), n(e, "translate3d(0, " + (-t + w) + "px, " + (c ? -110 : 0) + "px) rotateX(" + s +
								"deg)")
						})
					}(l || void 0 === l) && (p.value = u.attr("data-picker-value"), p.displayValue = p.displayValues ? p.displayValues[
						e] : p.value, s != e && (p.onChange && p.onChange(o, p.value, p.displayValue), o.updateValue()))
				}, r && p.updateItems(0, w, 0);
				var x, k, I, T, C, O, j, S, E, L, N, P, D = !0;
				p.initEvents = function(e) {
					var t = /hp-tablet/gi.test(navigator.appVersion),
						n = "ontouchstart" in window && !t,
						i = n ? "touchstart" : "mousedown",
						a = n ? "touchmove" : "mousemove",
						o = n ? "touchend" : "mouseup",
						r = e ? "off" : "on";
					p.container[r](i, l), p.container[r](a, s), p.container[r](o, u), "mouseup" == o && document.documentElement.addEventListener(
						"mouseleave", u, !1), p.items[r]("click", d)
				}, p.destroyEvents = function() {
					p.initEvents(!0)
				}, p.initEvents()
			}
		}, o.columnHTML = function(e, t) {
			var n = "",
				i = "";
			if (e.divider) i += '<div class="picker-items-col picker-items-col-divider ' + (e.textAlign ? "picker-items-col-" +
				e.textAlign : "") + " " + (e.cssClass || "") + '">' + e.content + "</div>";
			else {
				for (var a = 0; a < e.values.length; a++) n += '<div class="picker-item" data-picker-value="' + e.values[a] +
					'">' + (e.displayValues ? e.displayValues[a] : e.values[a]) + "</div>";
				i += '<div class="picker-items-col ' + (e.textAlign ? "picker-items-col-" + e.textAlign : "") + " " + (e.cssClass ||
					"") + '"><div class="picker-items-col-wrapper">' + n + "</div></div>"
			}
			return t ? n : i
		}, o.layout = function() {
			var e, t = "",
				n = "";
			o.cols = [];
			var i = "";
			for (e = 0; e < o.params.cols.length; e++) {
				var a = o.params.cols[e];
				i += o.columnHTML(o.params.cols[e]), o.cols.push(a)
			}
			n = "picker-modal picker-columns " + (o.params.cssClass || "") + (o.params.rotateEffect ? " picker-3d" : ""), t =
				'<div class="' + n + '"><div class="picker-modal-inner picker-items">' + i +
				'<div class="picker-center-highlight"></div></div></div>', o.pickerHTML = t
		}, o.init = function() {
			o.initialized || (o.layout(), o.container = $(o.pickerHTML), o.container.addClass("picker-modal-inline"), $(o.params
				.container).html(o.container), o.container.find(".picker-items-col").each(function() {
				var e = !0;
				(!o.initialized && o.params.value || o.initialized && o.value) && (e = !1), o.initPickerCol(this, e)
			}), o.value ? o.setValue(o.value, 0) : o.params.value && o.setValue(o.params.value, 0)), o.initialized = !0
		}, o.init(), o
	};
	! function(e, t) {
		e.picker = function(e) {
			return new i(e)
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.pickerdate = function() {
			function i(e) {
				if (e && e.constructor == Date) return e;
				if (e && "string" == typeof e) {
					if (e = e.replace(/-/gim, "/").replace(/^(\d+\/\d+?)($|\s)/, function(e, t) {
							return t + "/1"
						}), e.indexOf("/") < 0) {
						var t = new Date;
						e = t.getFullYear() + "/" + t.getMonth() + "/" + t.getDate() + " " + e
					}
					return new Date(e)
				}
				return "number" == typeof e ? new Date(e) : new Date
			}

			function a(e, t) {
				var e, t, n = new Date;
				return n.getTime() < e.getTime() ? e : n.getTime() > t.getTime() ? t : n
			}

			function o(o) {
				function r(e) {
					var t = new Date("1970/1/1");
					return L.forEach(function(n, i) {
						t["set" + n](e[O[n]].value - ("Month" == n ? 1 : 0))
					}), t
				}

				function l(e) {
					var t = i(e);
					return L.map(function(e, n) {
						return t["get" + e]() + ("Month" == e ? 1 : 0)
					})
				}

				function c() {
					n(this).hasClass("disabled") || T && !T.isOpen() && T.open()
				}

				function s(t) {
					k.self = this == window || this == k ? null : this, e.trigger.apply(k, arguments)
				}
				var u, d, f, h, p, g, v, m, b, w, y = e.guid(),
					x = {
						id: y,
						height: 260,
						popup: !0,
						mask: !0,
						autoinit: !0,
						position: "bottom",
						effect: "fadeInUp",
						appendTo: "",
						rotateEffect: !1,
						buttons: [{
							name: "取消",
							className: ""
						}, {
							name: "确定",
							className: "primary-reverse"
						}],
						onBeforeInit: null,
						onInited: null,
						onMask: function() {
							T && T.close()
						},
						callback: null
					},
					k = this,
					I = function() {},
					T = null,
					C = n.extend(!0, {}, x, o);
				C.appendTo = C.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), C.callback = function(e) {
					var t = o.callback && o.callback.call(k, e);
					if (1 == t || void 0 === t)
						if ("取消" == n(e.target).text().trim() || "cancel" == n(e.target).text().trim() || "关闭" == n(e.target).text().trim())
							try {
								var a = i(u);
								k.value(a)
							} catch (e) {} else u = k.value()
				};
				var O = {},
					j = ["FullYear", "Month", "Date"],
					S = ["Hours", "Minutes", "Seconds"],
					E = {
						FullYear: "year",
						Month: "month",
						Date: "date",
						Hours: "hour",
						Minutes: "minute",
						Seconds: "second"
					},
					L = [],
					N = !1;
				this.config = {}, this.option = function() {}, this.cols = function(e) {
					e = e || {};
					var t = [];
					return b = [], m = [], O = {}, L = [], j.forEach(function(n, i) {
						"none" !== e[E[n]] && (L.push(n), t.push(n))
					}), S.forEach(function(t, n) {
						"none" !== e[E[t]] && (L.push(t), b.push(t))
					}), t.forEach(function(t, n) {
						O[t] = m.length, m.push(F[t](e[E[t]]))
					}), b.forEach(function(n, i) {
						0 == i && 0 != t.length ? m.push(F.Space()) : m.push(F.Divider()), 0 == t.length && (m[0].content = ""), O[n] =
							m.length, m.push(F[n](e[E[n]]))
					}), k.picker && (k.picker.params.cols = m, k.picker.initialized = !1, k.picker.init()), N = !1, this
				}, this.id = function(e) {
					e && !p && (p = e)
				}, this.reset = function() {
					return k.picker && (k.picker.initialized = !1, k.picker.init()), this
				}, this.min = function(e) {
					return f = i(e || C.min || "1960/01/01 00:00:00"), this
				}, this.max = function(e) {
					return h = i(e || C.max || "2024/01/01 00:00:00"), this
				}, this.value = function(e) {
					if (e) {
						var t = i(e),
							n = l(t);
						return k.picker.setValue(n, 0), this
					}
					return v(k.picker, k.value, k.displayValue)
				}, this.handle = function(t) {
					if (t && d !== t) {
						var n = e.obj(d);
						n && n.off("click", c), n = e.obj(t), n && n.on("click", c), c.hasOpen = !1, d = t
					}
					return this
				};
				var P = {
					y: function(e, t) {
						return e.getFullYear().toString().slice(-t)
					},
					M: function(e, t) {
						return ((t > 1 ? "0" : "") + (e.getMonth() + 1)).slice(-2)
					},
					d: function(e, t) {
						return ((t > 1 ? "0" : "") + e.getDate()).slice(-2)
					},
					h: function(e, t) {
						return ((t > 1 ? "0" : "") + e.getHours()).slice(-2)
					},
					m: function(e, t) {
						return ((t > 1 ? "0" : "") + e.getMinutes()).slice(-2)
					},
					s: function(e, t) {
						return ((t > 1 ? "0" : "") + e.getSeconds()).slice(-2)
					}
				};
				this.formatValue = function(e) {
					return v = function(t, n, i) {
						var a = r(t.cols);
						return e.replace(/y+|M+|d+|h+|m+|s+/g, function(e) {
							return P[e[0]](a, e.length)
						})
					}, k.picker && k.picker.updateValue(), N = !1, this
				}, this.onChange = function(e) {
					return g = e || I, s.call(this, "change", w), this
				}, this.popup = function(i) {
					if (C.popup && !T) {
						var a = '<div id="' + y + '" class="bui-dialog" >';
						a += '<div class="bui-dialog-main"><div id="' + y + '-picker"></div></div>', C.buttons && C.buttons.length &&
							(a += '<div class="bui-dialog-foot bui-box">', n.each(C.buttons, function(e, n) {
								var i = "object" == (void 0 === n ? "undefined" : t(n)) && "className" in n ? " " + n.className : "",
									o = "object" == (void 0 === n ? "undefined" : t(n)) && "name" in n ? n.name : n;
								a += '<div class="span1"><div class="bui-btn' + i + '">' + o + "</div></div>"
							}), a += "</div>"), a += "</div>";
						n(C.appendTo).append(a);
						p = e.obj(y + "-picker")
					}
					return this
				};
				var D = function(e, t, n) {
						var i = r(e.cols),
							a = f["get" + t](),
							o = h["get" + t](),
							l = i.getTime(),
							c = f.getTime(),
							s = h.getTime();
						return l < c && i["get" + t]() < a ? ("Month" == t && (a += 1), void e.cols[O[t]].setValue(a)) : l > s && i[
							"get" + t]() > o ? ("Month" == t && (o += 1), void e.cols[O[t]].setValue(o)) : void(n && (l < c || l > s) &&
							e.cols[O[n]].onChange(e))
					},
					F = {};
				F.FullYear = function(e) {
					return e = e || {
						values: function() {
							for (var e = [], t = f.getFullYear(), n = h.getFullYear(), i = t; i <= n; i++) e.push(i);
							return e
						}()
					}, {
						values: e.values,
						displayValues: e.displayValues,
						onChange: function(e, t, n) {
							D(e, "FullYear", O.Month ? "Month" : "")
						}
					}
				}, F.Month = function(e) {
					return e = e || {
						values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
						displayValues: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"]
					}, {
						values: e.values,
						displayValues: e.displayValues,
						textAlign: "right",
						onChange: function(e, t, n) {
							for (var i = new Date(e.cols[O.FullYear].value, parseInt(e.cols[O.Month].value), 0).getDate(), a = [], o =
									1; o <= i; o++) a.push(o);
							var r = e.cols[O.Date];
							r && r.replaceValues && r.replaceValues(a, null, r.value < i ? r.value : i), D(e, "Month", O.Date ? "Date" :
								"")
						}
					}
				}, F.Date = function(e) {
					return e = e || {
						values: function() {
							var e = 31,
								t = [];
							do {
								t.unshift(e)
							} while (e--);
							return t
						}(),
						displayValues: function() {
							var e = 31,
								t = [];
							do {
								t.unshift(e + "天")
							} while (e--);
							return t
						}()
					}, {
						values: e.values,
						displayValues: e.displayValues,
						onChange: function(e, t, n) {
							D(e, "Date", O.Hours ? "Hours" : "")
						}
					}
				}, F.Space = function() {
					return {
						divider: !0,
						content: "  "
					}
				}, F.Hours = function(e) {
					return e = e || function() {
						for (var e = [], t = [], n = 0; n < 24; n++) e.push(n), t.push(("0" + n).slice(-2));
						return {
							values: e,
							displayValues: t
						}
					}(), {
						values: e.values,
						displayValues: e.displayValues,
						onChange: function(e, t, n) {
							D(e, "Hours", O.Minutes ? "Minutes" : "")
						}
					}
				}, F.Divider = function() {
					return {
						divider: !0,
						textAlign: "center",
						content: ":"
					}
				}, F.Minutes = function(e) {
					return e = e || function() {
						for (var e = [], t = [], n = 0; n < 60; n++) e.push(n), t.push(("0" + n).slice(-2));
						return {
							values: e,
							displayValues: t
						}
					}(), {
						values: e.values,
						displayValues: e.displayValues,
						onChange: function(e, t, n) {
							D(e, "Minutes", O.Seconds ? "Seconds" : "")
						}
					}
				}, F.Seconds = function(e) {
					return e = e || function() {
						for (var e = [], t = [], n = 0; n < 60; n++) e.push(n), t.push(("0" + n).slice(-2));
						return {
							values: e,
							displayValues: t
						}
					}(), {
						values: e.values,
						displayValues: e.displayValues,
						onChange: function(e, t, n) {
							D(e, "Seconds")
						}
					}
				}, k.init = function(t) {
					var o = n.extend(!0, C, t);
					o.onBeforeInit && o.onBeforeInit.call(k, o), k.min(o.min), k.max(o.max), k.cols(o.cols), k.onChange(o.onChange),
						k.formatValue(o.formatValue || "yyyy-MM-dd hh:mm:ss"), k.id(o.id), k.handle(o.handle), k.popup(o), k.picker =
						e.picker({
							container: p,
							rotateEffect: o.rotateEffect,
							value: l(o.value ? i(o.value) : a(f, h)),
							onChange: function(e, t, n) {
								var i = v(e, t, n);
								w != i && (w = i, g(i), s.call(this, "change", i))
							},
							cols: m
						}), o.popup && !T && (T = e.dialog(o), T && T.on("open", function() {
							u = v(k.picker, k.value, k.displayValue), k.picker && (k.picker.initialized = !1, k.picker.init()), s.call(
								this, "show")
						}), T && T.on("close", function() {
							s.call(this, "hide")
						})), o.onInited && o.onInited.call(k, o)
				}, C.autoinit && k.init(C), this.disabled = function() {
					var t = e.obj(d);
					return t && t.addClass("disabled"), this
				}, this.enabled = function() {
					var t = e.obj(d);
					return t && t.removeClass("disabled"), this
				}, this.destroy = function(e) {
					var e = 1 == e;
					this.off("show"), this.off("hide"), this.off("change"), T && T.destroy(e), k = null
				}, this.widget = function(t) {
					var n = {
						dialog: T || {}
					};
					return e.widget.call(n, t)
				}, this.on = function(t, n) {
					return e.on.apply(k, arguments), this
				}, this.off = function(t, n) {
					return e.off.apply(k, arguments), this
				}
			}
			return function(e) {
				return new o(e)
			}
		}()
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.levelselect = function(i) {
			function a(t) {
				i = n.extend(!0, {}, w, t), i.onBeforeInit && i.onBeforeInit.call(D, i);
				var a = "";
				i.popup ? (a = h(i), F.append(a), P || (P = bui.dialog({
					id: x,
					height: i.height,
					mask: i.mask,
					scroll: !1,
					autoClose: i.autoClose,
					fullscreen: i.fullscreen,
					position: i.position,
					effect: i.effect,
					onMask: i.onMask
				})), I = e.obj(x)) : (a = p(i), F.append(a), I = e.objId(x)), T = e.objId(k);
				var o = 0;
				for (o = 0; o < i.level; o++) ! function(t) {
					L[t] = n(".select-level-val-" + t, I), E[t] = n(".select-level-" + t, T), i.trigger && (N[t] = n(i.trigger).eq(
						t)), S[t] || (S[t] = bui.select({
						id: E[t],
						type: "select",
						direction: "right",
						field: {
							name: i.field.name,
							icon: i.field.icon,
							image: i.field.image,
							value: i.field.value || i.field.name
						},
						popup: !1,
						data: [],
						template: i.template,
						onChange: i.onChange
					}), S[t].on("change", function(a) {
						i.log && console.log("change", t);
						var o = S[t].index() || 0,
							r = S[t].value() || 0,
							l = S[t].text() || S[t].value();
						O[t] = {
							name: l,
							value: r,
							index: o
						};
						var c = [],
							s = [];
						"string" == typeof i.field.data ? c = y[t][o][i.field.data] || y[t][o] : i.field.data && "array" === e.typeof(
							i.field.data) && (i.field.data.forEach(function(e, n) {
							s.push(y[t][o][i.field.data[n]])
						}), c = s[0] || s[1] || s[2] || s[3] || s[4] || s[5] || s[6]), y[t + 1] = c, S[t + 1] && S[t + 1].option(
							"data", y[t + 1]), S[t + 2] && S[t + 2].option("data", [""]), E[t] && E[t].find(".bui-btn").removeClass(
							"active"), n(a.target).parents(".bui-btn").addClass("active"), f(t), L[t] && L[t].text(l), L[t + 1] && L[
							t + 1].text(i.placeholder), L[t + 2] && L[t + 2].text(""), N[t] && N[t].text(l), N[t + 1] && N[t + 1].text(
							i.placeholder), N[t + 2] && N[t + 2].text(""), a.context = {
							trigger: N[t],
							selector: L[t],
							index: t,
							select: S[t],
							data: y[t]
						}, m.call(D, "change", a), t == i.level - 1 && m.call(D, "lastchange", a), i.popup && !P.isOpen() || (t ==
							i.level - 1 ? (i.log && console.log("close"), i.autoClose && P.close()) : t % i.visibleNum == 1 && (i.log &&
								console.log("next"), j.next()))
					}), L[t].on("click", function() {
						n(this).addClass("active").siblings().removeClass("active"), j.prev()
					}))
				}(o);
				var r = window && window.viewport && window.viewport.height() || n(window).height(),
					l = i.fullscreen ? r : String(i.height).indexOf("%") > -1 ? r * parseFloat(i.height) / 100 : i.height;
				i.popup && P ? P.on("open", function(e) {
					C = l - I.find(".select-value").height() - I.children(".bui-dialog-head").height(), u(i)
				}) : (C = l, u(i)), L[0] && L[0].text(i.placeholder), N[0] && N[0].text(i.placeholder), y[0] = i.data, S[0].option(
					"data", y[0]), i.value && d(i.value), i.onInited && i.onInited.call(this, i), R = !1
			}

			function o(e, t) {
				return j && j.to(e, t), this
			}

			function r() {
				return j && j.prev(), this
			}

			function l() {
				return j && j.next(), this
			}

			function c(e) {
				m.call(this, "beforeshow");
				var n = {};
				"function" == typeof e ? n.callback = function() {
					e && e.call(D), m.call(D, "show")
				} : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), P && P.open(
					n)
			}

			function s(e) {
				m.call(this, "beforehide");
				var n = {};
				"function" == typeof e ? n.callback = function() {
					e && e.call(D), m.call(D, "hide")
				} : "string" == typeof e ? n.effect = e : "object" === (void 0 === e ? "undefined" : t(e)) && (n = e), P && P.close(
					n)
			}

			function u(e) {
				j || (j = bui.tab({
					id: k,
					height: C,
					scroll: !0,
					zoom: !1,
					visibleNum: e.visibleNum,
					scrollNum: e.scrollNum
				}).lock(), j.on("to", function(e) {
					f(e)
				}))
			}

			function d(n) {
				if (void 0 === n) return O;
				n && "array" === e.typeof(n) ? n.forEach(function(e, n) {
					"string" == typeof e ? S[n].value(e) : "object" === (void 0 === e ? "undefined" : t(e)) && (S[n].text(e.name),
						S[n].value(e.value))
				}) : e.showLog("参数是一个数组类型")
			}

			function f(e) {
				n(".select-value div", I).removeClass("active"), n(".select-value div", I).eq(e).addClass("active")
			}

			function h(e) {
				var t = "";
				return t += '<div id="' + x + '" class="bui-dialog bui-levelselect" style="display:none;">', t +=
					'    <div class="bui-dialog-head">' + e.title + "</div>", t += '    <div class="bui-dialog-main">', t += p(e), t +=
					"    </div>", t += '    <div class="bui-dialog-close"><i class="icon-close"></i></div>', t += "</div>"
			}

			function p(e) {
				var t = "",
					n = 0;
				if (e.popup || (t += '<div id="' + x + '" class="bui-levelselect">'), e.showValue) {
					for (t += '    <div class="bui-box select-value">', n = 0; n < e.level; n++) t +=
						'        <div class="select-level-val-' + n + '"></div>';
					t += "    </div>"
				}
				for (t += '<div id="' + k + '" class="bui-tab bui-levelselect-tab">', t += '    <div class="bui-tab-main">', t +=
					"        <ul>", n = 0; n < e.level; n++) t += "            <li>", t +=
					'                <div class="select-level-' + n + '"></div>', t += "            </li>";
				return t += "        </ul>", t += "    </div>", t += "</div>", e.popup || (t += "</div>"), t
			}

			function g(t, n) {
				return e.on.apply(D, arguments), this
			}

			function v(t, n) {
				return e.off.apply(D, arguments), this
			}

			function m(t) {
				D.self = this == window || this == D ? null : this, e.trigger.apply(D, arguments)
			}
			var b = {
					popup: !0,
					data: [],
					height: 300,
					appendTo: "",
					title: "所在地区",
					trigger: null,
					placeholder: "请选择",
					level: 3,
					visibleNum: 2,
					scrollNum: 1,
					log: !1,
					mask: !0,
					autoClose: !0,
					fullscreen: !1,
					position: "bottom",
					effect: "fadeInUp",
					showValue: !0,
					onMask: null,
					value: [],
					autoinit: !0,
					onChange: null,
					onBeforeInit: null,
					template: null,
					onInited: null,
					field: {
						name: "n",
						icon: "icon",
						image: "image",
						value: "",
						data: ["c", "a"]
					}
				},
				w = n.extend(!0, {}, b, i),
				y = [],
				x = bui.guid(),
				k = x + "-slide",
				I = null,
				T = null,
				C = 0,
				O = [],
				j = null,
				S = [],
				E = [],
				L = [],
				N = [],
				P = null,
				D = {
					init: a,
					show: c,
					hide: s,
					value: d,
					to: o,
					prev: r,
					next: l,
					on: g,
					off: v,
					trigger: m
				};
			i.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body");
			var F = n(i.id ? i.id : i.appendTo),
				R = !0;
			return w.onBeforeInit && w.onBeforeInit.call(D, w), w.autoinit && a(w), D
		}
	}(window.bui || {}, window.libs);
	e(function(e) {
		! function(t, n) {
			t.tab = function(i) {
				var a = {
						id: "",
						menu: ".bui-tab-head > ul",
						children: ".bui-tab-main > ul",
						header: "header",
						footer: "footer",
						main: ".bui-tab-main",
						item: "li",
						prev: ".bui-tab-prev",
						next: ".bui-tab-next",
						alignClassName: "",
						stopHandle: "",
						width: 0,
						height: 0,
						zoom: !1,
						swipe: !0,
						animate: !0,
						bufferEffect: !1,
						visibleNum: 1,
						scrollNum: 1,
						distance: 40,
						direction: "x",
						autoplay: !1,
						autoheight: !1,
						scroll: !0,
						index: 0,
						fullscreen: !1,
						autopage: !1,
						autoload: !1,
						autoinit: !0,
						data: null,
						template: null,
						async: !0,
						callback: null,
						onBeforeInit: null,
						onInited: null,
						onStart: null,
						onMove: null,
						onEnd: null
					},
					o = e.config = n.extend(!0, {}, a, t.config.slide, i);
				return t.slide(o)
			}
		}(window.bui || {}, window.libs)
	});
	! function(e, t) {
		e.input = function(n) {
			function i(n) {
				var i = t.extend(!0, k, n);
				if (i.onBeforeInit && i.onBeforeInit.call(x, i), k = x.config = i, "" != i.id && null !== i.id) {
					if (p = e.obj(i.id), w = p.find(i.target), v = w.eq(0), m = e.unit.startWithClass(i.iconClass) ? i.iconClass :
						"." + i.iconClass, !I) {
						if (a(i), i.showLength) {
							var r = o(i);
							p.append(r)
						}
						i.maxLength > 0 && w.attr("maxlength", i.maxLength)
					}
					return i.onInited && i.onInited.call(x, i), this
				}
			}

			function a(e) {
				return w.on(e.event, bui.unit.debounce(function(n) {
					var i = this.value,
						a = t(this).parent(),
						o = a.find(m);
					g = i, i.length > 0 && e.showIcon ? o && o.length ? o.css("display", "block") : (a.append('<i class="' + m.substr(
						1) + '"></i>'), o = w.find(m)) : o && o.css("display", "none"), e.showLength && (b = a.find("em"), b.text(i
						.length)), e.onInput && e.onInput.call(x, n), h.call(x, "input", n)
				}, 100)), w.on("focus", function(n) {
					var i = this.value;
					g = i, v = t(this), e.showIcon && (p.find(m).css("display", "none"), i && t(this).next().css("display",
						"block")), e.onFocus && e.onFocus.call(x, n), h.call(x, "focus", n)
				}), w.on("blur", function(t) {
					var n = e.onBlur && e.onBlur.call(x, t);
					g = 1 == n || null === n ? this.value : "", h.call(x, "blur", t)
				}), e.showIcon && p.on("click", m, function(t) {
					e.callback && e.callback.call(x, t), h.call(x, "click", t)
				}), I = !0, this
			}

			function o(e) {
				v.parent();
				return '<span class="bui-input-length"><em>0</em>/' + e.maxLength + "</span>"
			}

			function r(e) {
				return void 0 !== e ? (v.val(e), w.trigger(k.event), this) : v.val()
			}

			function l() {
				return v.val(""), v.next().css("display", "none"), k.showLength && b.text(0), this
			}

			function c() {
				return "text" == v.attr("type") ? v.attr("type", "password") : v.attr("type", "text"), this
			}

			function s(t) {
				var n = {};
				return e.widget.call(n, t)
			}

			function u(t, n) {
				return e.option.call(x, t, n)
			}

			function d(t, n) {
				return e.on.apply(x, arguments), this
			}

			function f(t, n) {
				return e.off.apply(x, arguments), this
			}

			function h(t) {
				x.self = this == window || this == x ? null : this, e.trigger.apply(x, arguments)
			}
			var p, g, v, m, b, w, y = {
					id: "",
					target: "input,textarea",
					event: "input",
					iconClass: ".icon-remove",
					showIcon: !0,
					showLength: !1,
					maxLength: 0,
					onInput: null,
					onBlur: null,
					onFocus: null,
					autoinit: !0,
					onBeforeInit: null,
					onInited: null,
					callback: null
				},
				x = {
					handle: {},
					empty: l,
					value: r,
					toggleType: c,
					on: d,
					off: f,
					widget: s,
					option: u,
					config: k,
					init: i
				},
				k = x.config = t.extend(!0, {}, y, e.config.searchbar, n),
				I = !1;
			return k.autoinit && i(k), x
		}
	}(bui || {}, libs),
	function(e, n) {
		e.ajax = function(i) {
			function a(e) {
				var t = function(t, n, i) {
						var a;
						if ("string" == typeof t && "json" == e.dataType) try {
							a = JSON.parse(t)
						} catch (e) {
							a = t
						} else a = t || {};
						s && s(a, n, i), o.resolve(a, n, i)
					},
					i = function(t, n, i) {
						var a;
						if ("string" == typeof t && "json" == e.dataType) try {
							a = JSON.parse(t)
						} catch (e) {
							a = t
						} else a = t || {};
						u && u(a, n, i), o.reject(a, n, i)
					};
				e.success = t, e.error = i;
				var a = e.type && e.type.toUpperCase();
				e.type = a || e.method.toUpperCase(), r = n.ajax(e)
			}
			var o = n.Deferred(),
				r = null,
				l = {
					data: {},
					method: "GET",
					dataType: "json",
					timeout: 6e4,
					headers: {},
					processData: !0,
					mimeType: "none",
					cache: !1,
					async: !0,
					needJsonString: !1,
					contentType: "",
					localData: null,
					native: !0,
					needNative: !1
				},
				c = n.extend(!0, {}, l, e.config.ajax, i),
				s = c.success,
				u = c.fail || c.error;
			"" === c.contentType && "GET" == c.method ? c.contentType = "text/html;charset=UTF-8" : "" === c.contentType &&
				"POST" == c.method ? c.contentType = "application/x-www-form-urlencoded" : c.contentType = c.contentType;
			"object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp;
			if (c.needJsonString) try {
				c.data = "object" === t(c.data) ? JSON.stringify(c.data) : c.data
			} catch (e) {
				c.data = c.data
			}
			if (!c.url) return e.showLog("url不能为空", "bui.ajax"), o;
			if (o.abort = function() {
					r && r.abort()
				}, c.localData) return s && s(c.localData, 200), o.resolve(c.localData, 200), o;
			if (c.needNative) {
				if (void 0 === e.native.ajax) return a(c), o;
				o = e.native.ajax && e.native.ajax(c) || o
			} else a(c);
			return o
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.load = function(n) {
			var i, a = {
					url: "",
					param: {},
					reload: !1,
					replace: !1,
					native: !0,
					needNative: !1
				},
				o = t.extend(!0, {}, a, e.config.load, n),
				r = {},
				l = o.url;
			if (!o.url) return void e.showLog("url 不能为空!", "bui.load:web");
			if (l.indexOf("tel:") >= 0 || l.indexOf("mailto:") >= 0 || l.indexOf("sms:") >= 0) return void e.unit.openExtral(l);
			if (l && l.indexOf("?") > -1) {
				var c = l.split("?");
				r = e.unit.keyStringToObject(c[1]), o.url = c[0]
			}
			try {
				var s = "string" == typeof o.param && JSON.parse(o.param) || o.param || {};
				o.param = t.extend(!0, {}, r, s)
			} catch (t) {
				return void e.showLog("param 参数值必须是一个{}对象", "bui.load:web")
			}
			return document.activeElement.blur(), n && n.needNative ? void(e.native.load && e.native.load(o)) : (i = e.setUrlParams(
				o.url, o.param), o.reload && e.isWebapp ? void(window.location.href = i) : o.reload && !e.isWebapp ? void(e.native
				.load && e.native.load(o)) : !o.replace || "load" in window.router ? void("load" in window.router ? window.router
				.load(o) : o.native && e.isWebapp || !o.native && !e.isWebapp ? window.location.href = i : e.native.load && e.native
				.load(o)) : void window.location.replace(i))
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.getPageParams = function(i) {
			var a = n.Deferred(),
				o = {
					callback: null,
					native: !0,
					needNative: !1
				};
			i = i || {};
			var r = n.extend(!0, {}, o, e.config.getPageParams);
			"function" == typeof i ? r.callback = i : i && "object" === e.typeof(i) && (r = n.extend(!0, {}, o, e.config.getPageParams,
				i));
			"object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp;
			if (i && i.needNative) return a = e.native.getPageParams && e.native.getPageParams(r) || a;
			if ("getPageParams" in window.router) {
				var l = window.router.getPageParams && window.router.getPageParams();
				r.callback && r.callback(l), a.resolve(l)
			} else if (r.native && e.isWebapp || !r.native && !e.isWebapp) {
				var c = e.getUrlParams();
				r.callback && r.callback(c), a.resolve(c)
			} else a = e.native.getPageParams && e.native.getPageParams(r) || a;
			return a
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.back = function(i) {
			function a() {
				if (window.history.go(o.index), f) try {
					clearTimeout(f)
				} catch (e) {}
				o.delay && o.callback ? f = setTimeout(function() {
					if (e.hasRouter) {
						var t = router.history.getLast(),
							n = loader.map().modules[t.pid].exports;
						o.callback.call(router, n)
					} else o.callback()
				}, 500) : o.callback && o.callback()
			}
			var o, r = {
				index: -1,
				name: "",
				delay: !0,
				native: !0,
				beforeBack: !0,
				callback: null
			};
			"function" == typeof i ? (r.callback = i, o = n.extend(!0, {}, r, e.config.back)) : o = i && "object" === e.typeof(
				i) ? n.extend(!0, {}, r, e.config.back, i) : n.extend(!0, {}, r, e.config.back);
			var l = ("object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? i.needNative : e.isWebapp,
				e.hasRouter ? router.history && router.history.getLast() || null : null);
			if (!1 !== ("function" == typeof o.beforeBack ? o.beforeBack.call(this, {
					prevTarget: null,
					target: l
				}) : o.beforeBack)) {
				if (i && i.needNative) return void(e.native.back && e.native.back(o));
				if ("back" in window.router)
					if (window.router.config.syncHistory) {
						var c = router.history.get(),
							s = c.length - 1;
						if (o.name) {
							var u = e.array.indexs(c, o.name, "pid"),
								d = u.length;
							o.index = d ? -(c.length - u[d - 1]) : -1
						}
						if (Math.abs(o.index) >= c.length && (o.index = -s), Math.abs(o.index) >= window.history.length && window.router
							.config.hash && (o.index = window.router.config.reloadCache ? -s : -(window.history.length - 1)), 0 == o.index &&
							(o.index = -1),
							window.router.config.hash && !window.router.config.reloadCache) return void a();
						c.length > 1 && a()
					} else window.router.back && window.router.back(o);
				else o.native && e.isWebapp || !o.native && !e.isWebapp ? a() : e.native.back && e.native.back(o);
				var f
			}
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.refresh = function(n) {
			var i = {
					native: !0,
					needNative: !1
				},
				a = t.extend(!0, {}, i, e.config.refresh, n);
			if (n && n.needNative) return void(e.native.refresh && e.native.refresh());
			"refresh" in window.router ? window.router.refresh() : a.native && e.isWebapp || !a.native && !e.isWebapp ? window
				.location.reload(!0) : e.native.refresh && e.native.refresh()
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.run = function(i) {
			var a = {},
				o = {
					id: "",
					name: "",
					data: null,
					onFail: null,
					native: !0,
					needNative: !1
				};
			"string" == typeof i ? a.id = i : i && "object" === e.typeof(i) && (a = n.extend(!0, {}, o, e.config.run, i));
			var r = String(a.id);
			if ("object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? !i.needNative : e.isWebapp) {
				if (r.indexOf("http://") > -1 || r.indexOf("https://") > -1) {
					var l = e.setUrlParams(a.id, a.data);
					if (e.platform.isIos()) return void(window.location.href = l);
					var c = window.open("", "_blank") || window.open("", "_newtab");
					c.location.href = l
				}
			} else e.native.run && e.native.run(a)
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.fileselect = function(i) {
			function a(t) {
				var i = n.extend(!0, w, t);
				switch (w.appendTo = i.appendTo || (e.hasRouter ? router.currentPage() || "body" : "body"), i.mediaType) {
					case "allmedeia":
						C = "*";
						break;
					case "picture":
					case "image":
						C = "image/*";
						break;
					case "video":
						C = "video/*";
						break;
					case "audio":
						C = "audio/*";
						break;
					default:
						C = i.mediaType
				}
				return I = [], T ? c() : m = e.native.fileselect && e.native.fileselect(t, {
					module: y
				}) || {}, this
			}

			function o(t) {
				x = null;
				var i = this,
					a = n.extend(!0, w, t);
				return k = a, T ? (t.from ? "picture" === t.from || "photo" === t.from || "savephoto" === t.from ? v.removeAttr(
					"capture") : v.attr("capture", t.from) : v.removeAttr("capture"), v.off("change").on("change", function() {
					var t = this.files;
					if (t.length < 1) return void(a.onFail && a.onFail.call(i, t, I));
					t.length > 1 && e.showLog("一次只能选一张图片", "bui.fileselect:web"), x = t[0];
					try {
						var n = {
							name: t[0].name,
							data: t[0],
							type: t[0].type,
							size: t[0].size
						};
						I.push(n)
					} catch (t) {
						e.showLog(t, "bui.fileselect:web")
					}
					a.onSuccess && a.onSuccess.call(i, t, I), this.value = ""
				}), e.platform.isIos() && "function" == typeof FastClick ? v[0].dispatchEvent(new Event("click")) : v.trigger(
					"click")) : m.add.bind(i)(a), this
			}

			function r(e) {
				var e = e || {},
					t = e.mimeType,
					n = e.data || x,
					i = void 0 !== e.needCompress && e.needCompress,
					a = e.onSuccess || function() {},
					o = e.onFail || function() {};
				if (T) try {
					! function(e) {
						var n = new FileReader;
						n.onloadend = function(n) {
							var r = new Image,
								l = !1,
								c = this.result,
								s = k.width || 800,
								u = k.quality || .8,
								d = document.createElement("canvas"),
								f = d.getContext("2d"),
								h = c.split(","),
								p = h[0].match(/:(.*?);/)[1];
							r.src = c, r.onload = function() {
								if (i && (d.width = s, d.height = s * (r.height / r.width), f.drawImage(r, 0, 0, d.width, d.height), r.src =
										d.toDataURL(t || p, u)), !l) return a && a.call(y, r.src, e), void(l = !0)
							}, r.onerror = function() {
								o && o.call(y, r.src, e), l = !1
							}
						}, n.readAsDataURL(e)
					}(n)
				} catch (e) {} else m.toBase64(e);
				return this
			}

			function l(e, t) {
				t = t || "file";
				for (var n = e.split(","), i = n[0].match(/:(.*?);/)[1], a = i.split("/")[1], o = atob(n[1]), r = o.length, l =
						new Uint8Array(r); r--;) l[r] = o.charCodeAt(r);
				return new File([l], t + "." + a, {
					type: i
				})
			}

			function c() {
				if (void 0 == v) {
					g = bui.guid();
					var e = w.from ? 'capture="' + w.from + '"' : "",
						t = '<input type="file" accept="' + C + '" name="uploadFiles" id="' + g + '" ' + e + ' style="display:none"/>';
					n(w.appendTo).append(t), v = n("#" + g) || n('input[name="uploadFiles"]')
				}
			}

			function s(t, n) {
				var n = n || "name";
				if (!T) return I = m.remove(t, n);
				if ("string" == typeof t) {
					e.array.remove(I, t, n);
					var i = I.length ? I[I.length - 1].data : null;
					return x = i, v[0].value = "", I
				}
				return this
			}

			function u() {
				return I = [], x = null, T ? v[0].value = "" : m.clear(), I
			}

			function d() {
				return I = T ? I : m.data()
			}

			function f() {
				return x = T ? x : m.value()
			}

			function h() {
				return T ? x.name : m.value().name
			}

			function p() {
				return T ? I.length - 1 : m.data().length - 1
			}
			var g, v, m, b = {
					native: !0,
					needNative: !1,
					appendTo: "",
					quality: .8,
					from: "camera",
					width: 800,
					height: 800,
					mediaType: "picture"
				},
				w = n.extend(!0, {}, b, e.config.fileselect, i),
				y = {
					add: o,
					remove: s,
					clear: u,
					value: f,
					data: d,
					toFile: l,
					toBase64: r,
					currentIndex: p,
					currentName: h,
					init: a
				},
				x = null,
				k = null,
				I = [],
				T = "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? !i.needNative : e.isWebapp,
				C = "*";
			return a(w), y
		}
	}(bui || {}, libs),
	function(e, n) {
		e.file = function(i) {
			function a(t) {
				return w = e.fileselect(t), v = o(t), C && (m = r({
					root: !0,
					create: !0
				})), this
			}

			function o(t) {
				function i(e) {
					var t = "";
					try {
						switch (e.code) {
							case FileError.QUOTA_EXCEEDED_ERR:
								t = "QUOTA_EXCEEDED_ERR";
								break;
							case FileError.NOT_FOUND_ERR:
								t = "NOT_FOUND_ERR";
								break;
							case FileError.SECURITY_ERR:
								t = "SECURITY_ERR";
								break;
							case FileError.INVALID_MODIFICATION_ERR:
								t = "INVALID_MODIFICATION_ERR";
								break;
							case FileError.INVALID_STATE_ERR:
								t = "INVALID_STATE_ERR";
								break;
							default:
								t = "Unknown Error"
						}
					} catch (e) {}
					var n = {
						msg: t
					};
					a.reject(n)
				}
				var a = n.Deferred();
				return C ? (p = "bui.app", g = window, b = 1024 * parseInt(T.size) * 1024, window.requestFileSystem = window.requestFileSystem ||
					window.webkitRequestFileSystem, navigator.webkitPersistentStorage && navigator.webkitPersistentStorage.requestQuota(
						b,
						function(e) {
							window.requestFileSystem(window.PERSISTENT, e, function(e) {
								a.resolve(e)
							}, i)
						})) : y = e.native.file && e.native.file(t, {
					fileselect: w,
					module: I
				}) || {}, a
			}

			function r(e) {
				var t = {
						folderName: p,
						root: !1,
						create: !1,
						msg: "",
						param: {
							create: !1,
							exclusive: !1
						},
						onSuccess: null,
						onFail: null
					},
					i = n.extend({}, t, e),
					a = "";
				if (i.create ? (a = "创建 ", i.param.create = !0) : (a = "获取 ", i.param.create = !1), C) {
					var o = l(i.folderName);
					o = i.root ? o : p + "/" + o, v.done(function(e) {
						e.root.getDirectory(o, i.param, function(t) {
							i.onSuccess && i.onSuccess.call(I, t, e)
						}, function(e) {
							var t = {
								msg: a + o + " 文件夹失败"
							};
							i.onFail && i.onFail.call(I, t)
						})
					}).fail(function(e) {
						var t = {
							msg: "文件系统还没准备好."
						};
						i.onFail && i.onFail.call(I, t)
					})
				} else y.getFolder(i);
				return this
			}

			function l(e) {
				var t;
				return "." == e[0] || "/" == e[0] || " " == e[0] ? (t = e.slice(1), l(t)) : "." != e[0] && "/" != e[0] && " " !=
					e[0] ? e : void 0
			}

			function c(e) {
				return e && e.indexOf("/") > -1 ? e.slice(e.lastIndexOf("/") + 1, e.indexOf("?") > -1 ? e.indexOf("?") : void 0) :
					e
			}

			function s(e) {
				var t = {
						fileName: "",
						folderName: "",
						root: !1,
						create: !1,
						param: {
							create: !1,
							exclusive: !1
						},
						onSuccess: null,
						onFail: null
					},
					i = n.extend({}, t, e),
					a = "";
				if (i.create ? (a = "创建 ", i.param.create = !0) : (a = "获取 ", i.param.create = !1), !i.fileName || i.fileName.indexOf(
						".") < 0) return void(i.onFail && i.onFail());
				if (C) {
					var o = c(i.fileName);
					r({
						root: i.root,
						folderName: i.folderName,
						create: !0,
						onSuccess: function(e, t) {
							var n = e.name == p ? e.name + "/" + o : p + "/" + e.name + "/" + o;
							t.root.getFile(n, i.param, function(e) {
								x = e, i.onSuccess && i.onSuccess.call(I, e, t)
							}, function(e) {
								var t = {
									msg: a + o + " 文件失败"
								};
								i.onFail && i.onFail.call(I, t)
							})
						},
						onFail: function(e) {
							i.onFail && i.onFail(e)
						}
					})
				} else y.getFile(i);
				return this
			}

			function u(e) {
				var t = n.extend(!0, {}, e);
				return C ? r({
					root: t.root,
					folderName: t.folderName,
					create: t.create,
					onSuccess: function(e, n) {
						e.removeRecursively(function() {
							t.onSuccess && t.onSuccess.call(I, e, n)
						}, function(n) {
							var i = {
								msg: "删除 " + t.folderName + " 文件失败"
							};
							t.onFail && t.onFail.call(I, i, e)
						})
					},
					onFail: function(e) {
						var n = {
							msg: "删除 " + t.folderName + " 文件失败"
						};
						t.onFail && t.onFail.call(I, n)
					}
				}) : y.removeFolder(t), this
			}

			function d(e) {
				var t = n.extend(!0, {}, e);
				return C ? s({
					root: t.root,
					create: t.create,
					folderName: t.folderName,
					fileName: t.fileName,
					onSuccess: function(e, n) {
						e.remove(function() {
							t.onSuccess && t.onSuccess.call(I, e, n)
						}, function(n) {
							var i = {
								msg: "删除 " + t.fileName + " 文件失败"
							};
							t.onFail && t.onFail.call(I, i, e)
						})
					},
					onFail: function(e) {
						var n = {
							msg: "删除 " + t.fileName + " 文件失败"
						};
						t.onFail && t.onFail.call(I, n)
					}
				}) : y.removeFile(t), this
			}

			function f(t) {
				var n = t || {};
				if (n.url) {
					c(n.url);
					return C ? e.showLog("web暂不支持open方法", "bui.file.open:web") : y.open(n), this
				}
			}

			function h(e) {
				return w.toBase64(e), this
			}
			var p, g, v, m, b, w, y, x, k = {
					size: 10,
					native: !0,
					needNative: !1
				},
				I = {
					getFolder: r,
					removeFolder: u,
					getFile: s,
					getFileName: c,
					removeFile: d,
					toBase64: h,
					open: f,
					init: a
				},
				T = I.config = n.extend(!0, {}, k, e.config.file, i),
				C = "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? !i.needNative : e.isWebapp;
			return a(T), I
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.upload = function(i) {
			function a(t) {
				return y = e.loading({
					display: "block",
					width: 30,
					height: 30,
					opacity: 0,
					autoClose: t.autoClose,
					callback: t.onMask
				}), x = e.fileselect({
					native: t.native,
					needNative: t.needNative,
					from: t.from,
					mediaType: t.mediaType
				}), D || (I = e.native.upload && e.native.upload(t, {
					loading: y,
					fileselect: x,
					module: L
				}) || {}), t.data ? (u(t), this) : this
			}

			function o(e) {
				return x.add.bind(L)(e), this
			}

			function r(e, t) {
				var n = s(),
					i = n.length;
				return /\d/.test(e) ? x.remove(n[e].name, t) : "string" == typeof e ? x.remove(e, t) : x.remove(n[i - 1].name, t),
					this
			}

			function l() {
				return x.clear(), this
			}

			function c(e) {
				return x.toBase64(e), this
			}

			function s() {
				return x.data()
			}

			function u(e) {
				var t = n.extend(!0, {}, S, e);
				if (C = t.url, T = x.value(), N = t.showProgress, T) {
					if (N && y.show(), D) {
						var i = t.data,
							a = new FormData;
						a.append(t.fileKey, T);
						for (var o in i) t.fileKey === o && a.delete(o), a.append(o, i[o]);
						return t.data = a, h(t)
					}
					return I.start(t) || E
				}
			}

			function d(e) {
				var t = n.extend(!0, {}, S, e),
					i = x.data();
				return null === t.data && (t.data = {}), i.forEach(function(e, n) {
					! function(e) {
						t.data[t.fileKey] = i[e].data, u(t)
					}(n)
				}), E
			}

			function f(e) {
				return D ? (y && y.stop(), k && k.abort(), e && e.call(L, y, k)) : I.stop(e), this
			}

			function h(e) {
				var t = e.onSuccess,
					i = e.onFail;
				return k = n.ajax({
					url: C,
					type: e.method,
					data: e.data,
					cache: e.cache,
					headers: e.headers,
					dataType: e.dataType,
					contentType: e.contentType,
					processData: e.processData,
					timeout: e.timeout,
					xhr: function() {
						var e = n.ajaxSettings.xhr();
						if (p && e.upload) return e.upload.addEventListener("progress", p, !1), e
					},
					success: function(e) {
						v(), t && t.call(L, e), E.resolve(e)
					},
					error: function(e, t, n) {
						v(), i && i.call(L, e, t), E.reject(e, t, n)
					}
				}), E
			}

			function p(e) {
				window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame, window.requestAnimationFrame(
					function() {
						if (e.lengthComputable) {
							var t = Math.round(100 * e.loaded / e.total);
							O = t.toString() + "%", t < 100 ? g(O) : v(), P && P.call(L, O)
						}
					})
			}

			function g(e) {
				return y && y.show({
					text: e
				}), this
			}

			function v() {
				return y && y.stop(), this
			}

			function m() {
				return x.currentName()
			}

			function b() {
				return x.currentIndex()
			}

			function w(t) {
				var n = {
					loading: y,
					fileselect: x,
					ajax: k
				};
				return e.widget.call(n, t)
			}
			var y, x, k, I, T, C, O, j = {
					url: "",
					data: null,
					headers: {},
					showProgress: !0,
					timeout: 6e4,
					contentType: !1,
					processData: !1,
					autoClose: !0,
					native: !0,
					needNative: !1,
					method: "POST",
					fileKey: "file",
					dataType: "json",
					mediaType: "picture",
					from: "picture",
					onProgress: null,
					onMask: function() {
						f()
					},
					onSuccess: null,
					onFail: null
				},
				S = n.extend(!0, {}, j, e.config.upload, i),
				E = n.Deferred(),
				L = {
					init: a,
					add: o,
					remove: r,
					currentIndex: b,
					currentName: m,
					clear: l,
					data: s,
					start: u,
					startAll: d,
					stop: f,
					toBase64: c,
					widget: w
				},
				N = S.showProgress,
				P = S.onProgress,
				D = "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? !i.needNative : e.isWebapp;
			return a(S), L
		}
	}(window.bui || {}, window.libs),
	function(e, n) {
		e.download = function(i) {
			function a(t) {
				return L = t.showProgress && e.loading({
					display: "block",
					width: 30,
					height: 30,
					opacity: 0,
					callback: function() {
						u()
					}
				}), m = e.file({
					native: t.native,
					needNative: t.needNative
				}), O ? function(e) {
					m.getFolder({
						folderName: e.folderName,
						create: !1,
						onSuccess: function(e, t) {
							y = e.fullPath
						},
						onFail: function(t) {
							m.getFolder({
								folderName: e.folderName,
								create: !0,
								onSuccess: function(e, t) {
									y = e.fullPath
								},
								onFail: function(e) {
									E && E.call(T, e)
								}
							})
						}
					}), e.url && o(e)
				}(t) : b = e.native.download && e.native.download(t, {
					file: m,
					loading: L,
					module: T
				}) || {}, this
			}

			function o(e) {
				var t = n.extend(!0, {}, C, e);
				w = t.needEncode ? encodeURI(t.url) : t.url, S = t.onProgress, j = t.showProgress, j && L && L.show({
					text: "0%"
				}), x = y + "/" + (e.fileName || m.getFileName(t.url)), O ? (t.cache = !1, t.contentType = !1, t.processData = !
					1, v = n.ajax({
						url: w,
						type: t.method,
						data: t.data,
						cache: t.cache,
						headers: t.headers,
						contentType: t.contentType,
						processData: t.processData,
						timeout: t.timeout,
						xhr: function() {
							var e = n.ajaxSettings.xhr();
							if (d && e) return e.addEventListener("progress", d, !1), e
						},
						success: function(n) {
							var i = e.fileName || m.getFileName(t.url);
							m.getFile({
								fileName: i,
								folderName: t.folderName,
								create: !0,
								onSuccess: function(e, n) {
									t.onSuccess && t.onSuccess.call(T, e.fullPath, n)
								}
							})
						},
						fail: function(e) {
							h(), t.onFail && t.onFail.call(T, e)
						}
					})) : b.start(t)
			}

			function r(e) {
				var t = n.extend(!0, {
						autoDown: !0
					}, C, e),
					i = e.fileName || m.getFileName(t.url);
				m.getFile({
					fileName: i,
					folderName: t.folderName,
					onSuccess: function(e, n) {
						t.onSuccess && t.onSuccess.call(T, e.fullPath, e, n)
					},
					onFail: function(e) {
						t.autoDown = o(t)
					}
				})
			}

			function l(t) {
				return t.fileName ? (t.folderName = t.folderName || C.folderName, m.removeFile(t), this) : (e.showLog(
					"请告诉我们你要删除哪个文件, fileName "), this)
			}

			function c(e) {
				return e.folderName = e.folderName || C.folderName, m.removeFolder(e), this
			}

			function s(e) {
				return m.open(e), this
			}

			function u(e) {
				O ? (h(), v && v.abort(), N && window.cancelAnimationFrame(N)) : b.stop(), e && e.call(T, L, v)
			}

			function d(e) {
				window.requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame, N = window.requestAnimationFrame(
					function() {
						if (e.lengthComputable) {
							var t = Math.round(100 * e.loaded / e.total);
							k = t.toString() + "%", t < 100 ? f(k) : h(), S && S.call(T, k)
						}
					})
			}

			function f(e) {
				j && L && L.show({
					text: e
				})
			}

			function h() {
				j && L && L.stop()
			}

			function p(e) {
				return m.toBase64(e), this
			}

			function g(t) {
				var n = {
					loading: L,
					file: m,
					ajax: v
				};
				return e.widget.call(n, t)
			}
			var v, m, b, w, y, x, k, I = {
					url: "",
					data: {},
					headers: {},
					method: "GET",
					showProgress: !0,
					timeout: 6e4,
					fileName: "",
					folderName: "download",
					native: !0,
					needNative: !1,
					onProgress: null,
					onSuccess: null,
					onFail: null
				},
				T = {
					open: s,
					getFile: r,
					removeFile: l,
					removeFolder: c,
					start: o,
					stop: u,
					toBase64: p,
					init: a,
					widget: g
				},
				C = T.config = n.extend(!0, {}, I, e.config.download, i),
				O = "object" === (void 0 === i ? "undefined" : t(i)) && void 0 !== i.needNative ? !i.needNative : e.isWebapp,
				j = C.showProgress,
				S = C.onProgress,
				E = C.onFail,
				L = null,
				N = null;
			return a(C), T
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.currentPlatform = "webapp", e.on("pagereadybefore", function() {
			e.platform.isWindow() || e.platform.isMac() ? window.viewport = e.viewport(40) : window.viewport = e.viewport(),
				e.config.init.auto && e.init()
		}), e.webready = function(n) {
			t(document).ready(function() {
				e.trigger.call(e, "pagereadybefore"), n && n.call(e), e.trigger.call(e, "pageready")
			})
		}, e.ready = function(n) {
			e.isWebapp = void 0 === e.isWebapp ? e.debug : e.isWebapp;
			var i = t.Deferred();
			if (e.isWebapp) t(document).ready(function() {
				e.trigger.call(e, "pagereadybefore"), n && n.call(e), e.trigger.call(e, "pageready"), i.resolve()
			});
			else {
				if (void 0 === e.native.ready) return e.showLog(
					"当前 bui.isWebapp = false; 但bui.js为webapp版本,不支持原生方法,请使用 buijs update -p xxx, 更换bui.js为对应xxx平台版本;"), e.webready(
					n), i;
				i = e.native.ready && e.native.ready(n) || i
			}
			return i
		}
	}(window.bui || {}, window.libs),
	function(e, t) {
		e.init = function(n) {
				var i, a = {
					id: ".bui-page",
					height: 0,
					header: "header",
					main: "main",
					footer: "footer"
				};
				if ("object" == e.typeof(n)) i = t.extend({}, a, e.config.init, n);
				else {
					var o = {};
					o.height = n, i = t.extend({}, a, o)
				}
				var r = i.height || document.documentElement.clientHeight || t("body").height() || t("#bui-router").height() || t(
					".bui-page").height();
				if (!(e.obj(i.main).length < 1)) {
					try {
						var l = e.obj(i.id),
							c = i.header.indexOf("#") > -1 ? e.obj(i.header)[0] : l.children(i.header)[0],
							s = i.footer.indexOf("#") > -1 ? e.obj(i.footer)[0] : l.children(i.footer)[0],
							u = i.main.indexOf("#") > -1 ? e.obj(i.main) : l.children(i.main),
							d = c ? c.offsetHeight : 0,
							f = s ? s.offsetHeight : 0,
							h = r - d - f;
						if (parseInt(h) > 0) u.height(h);
						else {
							var p = d + f + "px";
							e.unit.calcHeight(u, p)
						}
					} catch (t) {
						e.showLog(t, "bui.init")
					}
					return h
				}
			}, window.addEventListener ? window.addEventListener("load", function(t) {
				e.trigger.call(e, "onload")
			}, !1) : window.attachEvent("onload", function(t) {
				e.trigger.call(e, "onload")
			}), window.loader = e.loader(), e.define = loader.define, e.require = loader.require, e.map = loader.map, e.import =
			loader.import, e.checkLoad = loader.checkLoad, e.checkDefine = loader.checkDefine, t(document).ready(function() {
				e.isWebapp = void 0 === e.isWebapp ? e.debug : e.isWebapp, e.trigger.call(e, "pagebefore"), "function" == typeof FastClick &&
					FastClick.attach(document.body), e.trigger.call(e, "pageinit")
			});
		try {
			var n = "hidden" in document ? "hidden" : "webkitHidden" in document ? "webkitHidden" : "",
				i = n.replace(/hidden/i, "visibilitychange"),
				a = function(t) {
					document[n] ? e.trigger.call(e, "pagehide", t) : e.trigger.call(e, "pageshow", t)
				};
			document.addEventListener(i, a)
		} catch (e) {}
		try {
			navigator.control.gesture(!1), navigator.control.longpressMenu(!1)
		} catch (e) {}
	}(window.bui || {}, window.libs)
});
