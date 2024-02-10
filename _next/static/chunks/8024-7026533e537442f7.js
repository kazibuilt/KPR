"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
	[8024], {
		62338: function (e) {
			e.exports = function () {
				function e() {
					return (e = Object.assign || function (e) {
						for (var t = 1; t < arguments.length; t++) {
							var r = arguments[t];
							for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
						}
						return e
					}).apply(this, arguments)
				}

				function t(e, t) {
					(null == t || t > e.length) && (t = e.length);
					for (var r = 0, n = Array(t); r < t; r++) n[r] = e[r];
					return n
				}
				var r = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";

				function n(e) {
					return ("image-" + e.split("/").slice(-1)[0]).replace(/\.([a-z]+)$/, "-$1")
				}
				var i = [
						["width", "w"],
						["height", "h"],
						["format", "fm"],
						["download", "dl"],
						["blur", "blur"],
						["sharpen", "sharp"],
						["invert", "invert"],
						["orientation", "or"],
						["minHeight", "min-h"],
						["maxHeight", "max-h"],
						["minWidth", "min-w"],
						["maxWidth", "max-w"],
						["quality", "q"],
						["fit", "fit"],
						["crop", "crop"],
						["saturation", "sat"],
						["auto", "auto"],
						["dpr", "dpr"],
						["pad", "pad"]
					],
					o = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"],
					a = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"],
					u = ["format"],
					s = function () {
						function s(t, r) {
							this.options = void 0, this.options = t ? e({}, t.options || {}, r || {}) : e({}, r || {})
						}
						var l = s.prototype;
						return l.withOptions = function (r) {
							var n = r.baseUrl || this.options.baseUrl,
								o = {
									baseUrl: n
								};
							for (var a in r) r.hasOwnProperty(a) && (o[function (e) {
								for (var r, n = function (e, r) {
										var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
										if (n) return (n = n.call(e)).next.bind(n);
										if (Array.isArray(e) || (n = function (e, r) {
												if (e) {
													if ("string" == typeof e) return t(e, r);
													var n = Object.prototype.toString.call(e).slice(8, -1);
													if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
													if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return t(e, r)
												}
											}(e))) {
											n && (e = n);
											var i = 0;
											return function () {
												return i >= e.length ? {
													done: !0
												} : {
													done: !1,
													value: e[i++]
												}
											}
										}
										throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
									}(i); !(r = n()).done;) {
									var o = r.value,
										a = o[0],
										u = o[1];
									if (e === a || e === u) return a
								}
								return e
							}(a)] = r[a]);
							return new s(this, e({
								baseUrl: n
							}, o))
						}, l.image = function (e) {
							return this.withOptions({
								source: e
							})
						}, l.dataset = function (e) {
							return this.withOptions({
								dataset: e
							})
						}, l.projectId = function (e) {
							return this.withOptions({
								projectId: e
							})
						}, l.bg = function (e) {
							return this.withOptions({
								bg: e
							})
						}, l.dpr = function (e) {
							return this.withOptions(e && 1 !== e ? {
								dpr: e
							} : {})
						}, l.width = function (e) {
							return this.withOptions({
								width: e
							})
						}, l.height = function (e) {
							return this.withOptions({
								height: e
							})
						}, l.focalPoint = function (e, t) {
							return this.withOptions({
								focalPoint: {
									x: e,
									y: t
								}
							})
						}, l.maxWidth = function (e) {
							return this.withOptions({
								maxWidth: e
							})
						}, l.minWidth = function (e) {
							return this.withOptions({
								minWidth: e
							})
						}, l.maxHeight = function (e) {
							return this.withOptions({
								maxHeight: e
							})
						}, l.minHeight = function (e) {
							return this.withOptions({
								minHeight: e
							})
						}, l.size = function (e, t) {
							return this.withOptions({
								width: e,
								height: t
							})
						}, l.blur = function (e) {
							return this.withOptions({
								blur: e
							})
						}, l.sharpen = function (e) {
							return this.withOptions({
								sharpen: e
							})
						}, l.rect = function (e, t, r, n) {
							return this.withOptions({
								rect: {
									left: e,
									top: t,
									width: r,
									height: n
								}
							})
						}, l.format = function (e) {
							return this.withOptions({
								format: e
							})
						}, l.invert = function (e) {
							return this.withOptions({
								invert: e
							})
						}, l.orientation = function (e) {
							return this.withOptions({
								orientation: e
							})
						}, l.quality = function (e) {
							return this.withOptions({
								quality: e
							})
						}, l.forceDownload = function (e) {
							return this.withOptions({
								download: e
							})
						}, l.flipHorizontal = function () {
							return this.withOptions({
								flipHorizontal: !0
							})
						}, l.flipVertical = function () {
							return this.withOptions({
								flipVertical: !0
							})
						}, l.ignoreImageParams = function () {
							return this.withOptions({
								ignoreImageParams: !0
							})
						}, l.fit = function (e) {
							if (-1 === o.indexOf(e)) throw Error('Invalid fit mode "' + e + '"');
							return this.withOptions({
								fit: e
							})
						}, l.crop = function (e) {
							if (-1 === a.indexOf(e)) throw Error('Invalid crop mode "' + e + '"');
							return this.withOptions({
								crop: e
							})
						}, l.saturation = function (e) {
							return this.withOptions({
								saturation: e
							})
						}, l.auto = function (e) {
							if (-1 === u.indexOf(e)) throw Error('Invalid auto mode "' + e + '"');
							return this.withOptions({
								auto: e
							})
						}, l.pad = function (e) {
							return this.withOptions({
								pad: e
							})
						}, l.url = function () {
							return function (t) {
								var o = e({}, t || {}),
									a = o.source;
								delete o.source;
								var u = function (t) {
									var r;
									if (!t) return null;
									if ("string" == typeof t && /^https?:\/\//.test("" + t)) r = {
										asset: {
											_ref: n(t)
										}
									};
									else if ("string" == typeof t) r = {
										asset: {
											_ref: t
										}
									};
									else if (t && "string" == typeof t._ref) r = {
										asset: t
									};
									else if (t && "string" == typeof t._id) r = {
										asset: {
											_ref: t._id || ""
										}
									};
									else if (t && t.asset && "string" == typeof t.asset.url) r = {
										asset: {
											_ref: n(t.asset.url)
										}
									};
									else {
										if ("object" != typeof t.asset) return null;
										r = e({}, t)
									}
									return t.crop && (r.crop = t.crop), t.hotspot && (r.hotspot = t.hotspot),
										function (t) {
											if (t.crop && t.hotspot) return t;
											var r = e({}, t);
											return r.crop || (r.crop = {
												left: 0,
												top: 0,
												bottom: 0,
												right: 0
											}), r.hotspot || (r.hotspot = {
												x: .5,
												y: .5,
												height: 1,
												width: 1
											}), r
										}(r)
								}(a);
								if (!u) throw Error("Unable to resolve image URL from source (" + JSON.stringify(a) + ")");
								var s = function (e) {
										var t = e.split("-"),
											n = t[1],
											i = t[2],
											o = t[3];
										if (!n || !i || !o) throw Error("Malformed asset _ref '" + e + "'. Expected an id like \"" + r + '".');
										var a = i.split("x"),
											u = a[0],
											s = a[1],
											l = +u,
											c = +s;
										if (!(isFinite(l) && isFinite(c))) throw Error("Malformed asset _ref '" + e + "'. Expected an id like \"" + r + '".');
										return {
											id: n,
											width: l,
											height: c,
											format: o
										}
									}(u.asset._ref || u.asset._id || ""),
									l = Math.round(u.crop.left * s.width),
									c = Math.round(u.crop.top * s.height),
									f = {
										left: l,
										top: c,
										width: Math.round(s.width - u.crop.right * s.width - l),
										height: Math.round(s.height - u.crop.bottom * s.height - c)
									},
									d = u.hotspot.height * s.height / 2,
									p = u.hotspot.width * s.width / 2,
									h = u.hotspot.x * s.width,
									g = u.hotspot.y * s.height;
								return o.rect || o.focalPoint || o.ignoreImageParams || o.crop || (o = e({}, o, function (e, t) {
										var r, n = t.width,
											i = t.height;
										if (!(n && i)) return {
											width: n,
											height: i,
											rect: e.crop
										};
										var o = e.crop,
											a = e.hotspot,
											u = n / i;
										if (o.width / o.height > u) {
											var s = Math.round(o.height),
												l = Math.round(s * u),
												c = Math.max(0, Math.round(o.top)),
												f = Math.max(0, Math.round(Math.round((a.right - a.left) / 2 + a.left) - l / 2));
											f < o.left ? f = o.left : f + l > o.left + o.width && (f = o.left + o.width - l), r = {
												left: f,
												top: c,
												width: l,
												height: s
											}
										} else {
											var d = o.width,
												p = Math.round(d / u),
												h = Math.max(0, Math.round(o.left)),
												g = Math.max(0, Math.round(Math.round((a.bottom - a.top) / 2 + a.top) - p / 2));
											g < o.top ? g = o.top : g + p > o.top + o.height && (g = o.top + o.height - p), r = {
												left: h,
												top: g,
												width: d,
												height: p
											}
										}
										return {
											width: n,
											height: i,
											rect: r
										}
									}({
										crop: f,
										hotspot: {
											left: h - p,
											top: g - d,
											right: h + p,
											bottom: g + d
										}
									}, o))),
									function (e) {
										var t = (e.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""),
											r = e.asset.id + "-" + e.asset.width + "x" + e.asset.height + "." + e.asset.format,
											n = t + "/images/" + e.projectId + "/" + e.dataset + "/" + r,
											o = [];
										if (e.rect) {
											var a = e.rect,
												u = a.left,
												s = a.top,
												l = a.width,
												c = a.height;
											(0 !== u || 0 !== s || c !== e.asset.height || l !== e.asset.width) && o.push("rect=" + u + "," + s + "," + l + "," + c)
										}
										e.bg && o.push("bg=" + e.bg), e.focalPoint && (o.push("fp-x=" + e.focalPoint.x), o.push("fp-y=" + e.focalPoint.y));
										var f = [e.flipHorizontal && "h", e.flipVertical && "v"].filter(Boolean).join("");
										return (f && o.push("flip=" + f), i.forEach(function (t) {
											var r = t[0],
												n = t[1];
											void 0 !== e[r] ? o.push(n + "=" + encodeURIComponent(e[r])) : void 0 !== e[n] && o.push(n + "=" + encodeURIComponent(e[n]))
										}), 0 === o.length) ? n : n + "?" + o.join("&")
									}(e({}, o, {
										asset: s
									}))
							}(this.options)
						}, l.toString = function () {
							return this.url()
						}, s
					}();
				return function (e) {
					if (e && "config" in e && "function" == typeof e.config) {
						var t = e.config(),
							r = t.apiHost,
							n = t.projectId,
							i = t.dataset;
						return new s(null, {
							baseUrl: (r || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
							projectId: n,
							dataset: i
						})
					}
					if (e && "clientConfig" in e && "object" == typeof e.clientConfig) {
						var o = e.clientConfig,
							a = o.apiHost,
							u = o.projectId,
							l = o.dataset;
						return new s(null, {
							baseUrl: (a || "https://api.sanity.io").replace(/^https:\/\/api\./, "https://cdn."),
							projectId: u,
							dataset: l
						})
					}
					return new s(null, e)
				}
			}()
		},
		5156: function (e, t) {
			var r;
			!
			/*!
				Copyright (c) 2018 Jed Watson.
				Licensed under the MIT License (MIT), see
				http://jedwatson.github.io/classnames
			*/
			function () {
				var n = {}.hasOwnProperty;

				function i() {
					for (var e = [], t = 0; t < arguments.length; t++) {
						var r = arguments[t];
						if (r) {
							var o = typeof r;
							if ("string" === o || "number" === o) e.push(r);
							else if (Array.isArray(r)) {
								if (r.length) {
									var a = i.apply(null, r);
									a && e.push(a)
								}
							} else if ("object" === o) {
								if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
									e.push(r.toString());
									continue
								}
								for (var u in r) n.call(r, u) && r[u] && e.push(u)
							}
						}
					}
					return e.join(" ")
				}
				e.exports ? (i.default = i, e.exports = i) : void 0 !== (r = (function () {
					return i
				}).apply(t, [])) && (e.exports = r)
			}()
		},
		34051: function (e, t, r) {
			r.d(t, {
				default: function () {
					return i.a
				}
			});
			var n = r(20992),
				i = r.n(n)
		},
		1070: function (e, t, r) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), Object.defineProperty(t, "Image", {
				enumerable: !0,
				get: function () {
					return w
				}
			});
			let n = r(50049),
				i = r(34033),
				o = r(32835),
				a = i._(r(59686)),
				u = n._(r(18925)),
				s = n._(r(2053)),
				l = r(45271),
				c = r(79665),
				f = r(25776);
			r(30584);
			let d = r(10812),
				p = n._(r(27561)),
				h = {
					deviceSizes: [856, 1440, 1920, 2880],
					imageSizes: [400, 200, 50],
					path: "/_next/image",
					loader: "default",
					dangerouslyAllowSVG: !1,
					unoptimized: !1
				};

			function g(e, t, r, n, i, o) {
				let a = null == e ? void 0 : e.src;
				e && e["data-loaded-src"] !== a && (e["data-loaded-src"] = a, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
					if (e.parentElement && e.isConnected) {
						if ("empty" !== t && i(!0), null == r ? void 0 : r.current) {
							let t = new Event("load");
							Object.defineProperty(t, "target", {
								writable: !1,
								value: e
							});
							let n = !1,
								i = !1;
							r.current({
								...t,
								nativeEvent: t,
								currentTarget: e,
								target: e,
								isDefaultPrevented: () => n,
								isPropagationStopped: () => i,
								persist: () => {},
								preventDefault: () => {
									n = !0, t.preventDefault()
								},
								stopPropagation: () => {
									i = !0, t.stopPropagation()
								}
							})
						}(null == n ? void 0 : n.current) && n.current(e)
					}
				}))
			}

			function m(e) {
				let [t, r] = a.version.split(".", 2), n = parseInt(t, 10), i = parseInt(r, 10);
				return n > 18 || 18 === n && i >= 3 ? {
					fetchPriority: e
				} : {
					fetchpriority: e
				}
			}
			let y = (0, a.forwardRef)((e, t) => {
				let {
					src: r,
					srcSet: n,
					sizes: i,
					height: u,
					width: s,
					decoding: l,
					className: c,
					style: f,
					fetchPriority: d,
					placeholder: p,
					loading: h,
					unoptimized: y,
					fill: v,
					onLoadRef: w,
					onLoadingCompleteRef: b,
					setBlurComplete: _,
					setShowAltText: O,
					onLoad: E,
					onError: S,
					...x
				} = e;
				return (0, o.jsx)("img", {
					...x,
					...m(d),
					loading: h,
					width: s,
					height: u,
					decoding: l,
					"data-nimg": v ? "fill" : "1",
					className: c,
					style: f,
					sizes: i,
					srcSet: n,
					src: r,
					ref: (0, a.useCallback)(e => {
						t && ("function" == typeof t ? t(e) : "object" == typeof t && (t.current = e)), e && (S && (e.src = e.src), e.complete && g(e, p, w, b, _, y))
					}, [r, p, w, b, _, S, y, t]),
					onLoad: e => {
						g(e.currentTarget, p, w, b, _, y)
					},
					onError: e => {
						O(!0), "empty" !== p && _(!0), S && S(e)
					}
				})
			});

			function v(e) {
				let {
					isAppRouter: t,
					imgAttributes: r
				} = e, n = {
					as: "image",
					imageSrcSet: r.srcSet,
					imageSizes: r.sizes,
					crossOrigin: r.crossOrigin,
					referrerPolicy: r.referrerPolicy,
					...m(r.fetchPriority)
				};
				return t && u.default.preload ? (u.default.preload(r.src, n), null) : (0, o.jsx)(s.default, {
					children: (0, o.jsx)("link", {
						rel: "preload",
						href: r.srcSet ? void 0 : r.src,
						...n
					}, "__nimg-" + r.src + r.srcSet + r.sizes)
				})
			}
			let w = (0, a.forwardRef)((e, t) => {
				let r = (0, a.useContext)(d.RouterContext),
					n = (0, a.useContext)(f.ImageConfigContext),
					i = (0, a.useMemo)(() => {
						let e = h || n || c.imageConfigDefault,
							t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
							r = e.deviceSizes.sort((e, t) => e - t);
						return {
							...e,
							allSizes: t,
							deviceSizes: r
						}
					}, [n]),
					{
						onLoad: u,
						onLoadingComplete: s
					} = e,
					g = (0, a.useRef)(u);
				(0, a.useEffect)(() => {
					g.current = u
				}, [u]);
				let m = (0, a.useRef)(s);
				(0, a.useEffect)(() => {
					m.current = s
				}, [s]);
				let [w, b] = (0, a.useState)(!1), [_, O] = (0, a.useState)(!1), {
					props: E,
					meta: S
				} = (0, l.getImgProps)(e, {
					defaultLoader: p.default,
					imgConf: i,
					blurComplete: w,
					showAltText: _
				});
				return (0, o.jsxs)(o.Fragment, {
					children: [(0, o.jsx)(y, {
						...E,
						unoptimized: S.unoptimized,
						placeholder: S.placeholder,
						fill: S.fill,
						onLoadRef: g,
						onLoadingCompleteRef: m,
						setBlurComplete: b,
						setShowAltText: O,
						ref: t
					}), S.priority ? (0, o.jsx)(v, {
						isAppRouter: !r,
						imgAttributes: E
					}) : null]
				})
			});
			("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
				value: !0
			}), Object.assign(t.default, t), e.exports = t.default)
		},
		20966: function (e, t, r) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), Object.defineProperty(t, "AmpStateContext", {
				enumerable: !0,
				get: function () {
					return n
				}
			});
			let n = r(50049)._(r(59686)).default.createContext({})
		},
		6762: function (e, t) {
			function r(e) {
				let {
					ampFirst: t = !1,
					hybrid: r = !1,
					hasQuery: n = !1
				} = void 0 === e ? {} : e;
				return t || r && n
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), Object.defineProperty(t, "isInAmpMode", {
				enumerable: !0,
				get: function () {
					return r
				}
			})
		},
		45271: function (e, t, r) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), Object.defineProperty(t, "getImgProps", {
				enumerable: !0,
				get: function () {
					return u
				}
			}), r(30584);
			let n = r(39125),
				i = r(79665);

			function o(e) {
				return void 0 !== e.default
			}

			function a(e) {
				return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
			}

			function u(e, t) {
				var r;
				let u, s, l, {
						src: c,
						sizes: f,
						unoptimized: d = !1,
						priority: p = !1,
						loading: h,
						className: g,
						quality: m,
						width: y,
						height: v,
						fill: w = !1,
						style: b,
						onLoad: _,
						onLoadingComplete: O,
						placeholder: E = "empty",
						blurDataURL: S,
						fetchPriority: x,
						layout: j,
						objectFit: C,
						objectPosition: P,
						lazyBoundary: T,
						lazyRoot: R,
						...I
					} = e,
					{
						imgConf: M,
						showAltText: k,
						blurComplete: A,
						defaultLoader: L
					} = t,
					V = M || i.imageConfigDefault;
				if ("allSizes" in V) u = V;
				else {
					let e = [...V.deviceSizes, ...V.imageSizes].sort((e, t) => e - t),
						t = V.deviceSizes.sort((e, t) => e - t);
					u = {
						...V,
						allSizes: e,
						deviceSizes: t
					}
				}
				let z = I.loader || L;
				delete I.loader, delete I.srcSet;
				let D = "__next_img_default" in z;
				if (D) {
					if ("custom" === u.loader) throw Error('Image with src "' + c + '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')
				} else {
					let e = z;
					z = t => {
						let {
							config: r,
							...n
						} = t;
						return e(n)
					}
				}
				if (j) {
					"fill" === j && (w = !0);
					let e = {
						intrinsic: {
							maxWidth: "100%",
							height: "auto"
						},
						responsive: {
							width: "100%",
							height: "auto"
						}
					} [j];
					e && (b = {
						...b,
						...e
					});
					let t = {
						responsive: "100vw",
						fill: "100vw"
					} [j];
					t && !f && (f = t)
				}
				let U = "",
					N = a(y),
					W = a(v);
				if ("object" == typeof (r = c) && (o(r) || void 0 !== r.src)) {
					let e = o(c) ? c.default : c;
					if (!e.src) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " + JSON.stringify(e));
					if (!e.height || !e.width) throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " + JSON.stringify(e));
					if (s = e.blurWidth, l = e.blurHeight, S = S || e.blurDataURL, U = e.src, !w) {
						if (N || W) {
							if (N && !W) {
								let t = N / e.width;
								W = Math.round(e.height * t)
							} else if (!N && W) {
								let t = W / e.height;
								N = Math.round(e.width * t)
							}
						} else N = e.width, W = e.height
					}
				}
				let F = !p && ("lazy" === h || void 0 === h);
				(!(c = "string" == typeof c ? c : U) || c.startsWith("data:") || c.startsWith("blob:")) && (d = !0, F = !1), u.unoptimized && (d = !0), D && c.endsWith(".svg") && !u.dangerouslyAllowSVG && (d = !0), p && (x = "high");
				let H = a(m),
					q = Object.assign(w ? {
						position: "absolute",
						height: "100%",
						width: "100%",
						left: 0,
						top: 0,
						right: 0,
						bottom: 0,
						objectFit: C,
						objectPosition: P
					} : {}, k ? {} : {
						color: "transparent"
					}, b),
					$ = A || "empty" === E ? null : "blur" === E ? 'url("data:image/svg+xml;charset=utf-8,' + (0, n.getImageBlurSvg)({
						widthInt: N,
						heightInt: W,
						blurWidth: s,
						blurHeight: l,
						blurDataURL: S || "",
						objectFit: q.objectFit
					}) + '")' : 'url("' + E + '")',
					B = $ ? {
						backgroundSize: q.objectFit || "cover",
						backgroundPosition: q.objectPosition || "50% 50%",
						backgroundRepeat: "no-repeat",
						backgroundImage: $
					} : {},
					G = function (e) {
						let {
							config: t,
							src: r,
							unoptimized: n,
							width: i,
							quality: o,
							sizes: a,
							loader: u
						} = e;
						if (n) return {
							src: r,
							srcSet: void 0,
							sizes: void 0
						};
						let {
							widths: s,
							kind: l
						} = function (e, t, r) {
							let {
								deviceSizes: n,
								allSizes: i
							} = e;
							if (r) {
								let e = /(^|\s)(1?\d?\d)vw/g,
									t = [];
								for (let n; n = e.exec(r); n) t.push(parseInt(n[2]));
								if (t.length) {
									let e = .01 * Math.min(...t);
									return {
										widths: i.filter(t => t >= n[0] * e),
										kind: "w"
									}
								}
								return {
									widths: i,
									kind: "w"
								}
							}
							return "number" != typeof t ? {
								widths: n,
								kind: "w"
							} : {
								widths: [...new Set([t, 2 * t].map(e => i.find(t => t >= e) || i[i.length - 1]))],
								kind: "x"
							}
						}(t, i, a), c = s.length - 1;
						return {
							sizes: a || "w" !== l ? a : "100vw",
							srcSet: s.map((e, n) => u({
								config: t,
								src: r,
								quality: o,
								width: e
							}) + " " + ("w" === l ? e : n + 1) + l).join(", "),
							src: u({
								config: t,
								src: r,
								quality: o,
								width: s[c]
							})
						}
					}({
						config: u,
						src: c,
						unoptimized: d,
						width: N,
						quality: H,
						sizes: f,
						loader: z
					});
				return {
					props: {
						...I,
						loading: F ? "lazy" : h,
						fetchPriority: x,
						width: N,
						height: W,
						decoding: "async",
						className: g,
						style: {
							...q,
							...B
						},
						sizes: G.sizes,
						srcSet: G.srcSet,
						src: G.src
					},
					meta: {
						unoptimized: d,
						priority: p,
						placeholder: E,
						fill: w
					}
				}
			}
		},
		2053: function (e, t, r) {
			Object.defineProperty(t, "__esModule", {
					value: !0
				}),
				function (e, t) {
					for (var r in t) Object.defineProperty(e, r, {
						enumerable: !0,
						get: t[r]
					})
				}(t, {
					defaultHead: function () {
						return f
					},
					default: function () {
						return g
					}
				});
			let n = r(50049),
				i = r(34033),
				o = r(32835),
				a = i._(r(59686)),
				u = n._(r(80882)),
				s = r(20966),
				l = r(23477),
				c = r(6762);

			function f(e) {
				void 0 === e && (e = !1);
				let t = [(0, o.jsx)("meta", {
					charSet: "utf-8"
				})];
				return e || t.push((0, o.jsx)("meta", {
					name: "viewport",
					content: "width=device-width"
				})), t
			}

			function d(e, t) {
				return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
			}
			r(30584);
			let p = ["name", "httpEquiv", "charSet", "itemProp"];

			function h(e, t) {
				let {
					inAmpMode: r
				} = t;
				return e.reduce(d, []).reverse().concat(f(r).reverse()).filter(function () {
					let e = new Set,
						t = new Set,
						r = new Set,
						n = {};
					return i => {
						let o = !0,
							a = !1;
						if (i.key && "number" != typeof i.key && i.key.indexOf("$") > 0) {
							a = !0;
							let t = i.key.slice(i.key.indexOf("$") + 1);
							e.has(t) ? o = !1 : e.add(t)
						}
						switch (i.type) {
							case "title":
							case "base":
								t.has(i.type) ? o = !1 : t.add(i.type);
								break;
							case "meta":
								for (let e = 0, t = p.length; e < t; e++) {
									let t = p[e];
									if (i.props.hasOwnProperty(t)) {
										if ("charSet" === t) r.has(t) ? o = !1 : r.add(t);
										else {
											let e = i.props[t],
												r = n[t] || new Set;
											("name" !== t || !a) && r.has(e) ? o = !1 : (r.add(e), n[t] = r)
										}
									}
								}
						}
						return o
					}
				}()).reverse().map((e, t) => {
					let n = e.key || t;
					if (!r && "link" === e.type && e.props.href && ["https://fonts.googleapis.com/css", "https://use.typekit.net/"].some(t => e.props.href.startsWith(t))) {
						let t = {
							...e.props || {}
						};
						return t["data-href"] = t.href, t.href = void 0, t["data-optimized-fonts"] = !0, a.default.cloneElement(e, t)
					}
					return a.default.cloneElement(e, {
						key: n
					})
				})
			}
			let g = function (e) {
				let {
					children: t
				} = e, r = (0, a.useContext)(s.AmpStateContext), n = (0, a.useContext)(l.HeadManagerContext);
				return (0, o.jsx)(u.default, {
					reduceComponentsToState: h,
					headManager: n,
					inAmpMode: (0, c.isInAmpMode)(r),
					children: t
				})
			};
			("function" == typeof t.default || "object" == typeof t.default && null !== t.default) && void 0 === t.default.__esModule && (Object.defineProperty(t.default, "__esModule", {
				value: !0
			}), Object.assign(t.default, t), e.exports = t.default)
		},
		39125: function (e, t) {
			function r(e) {
				let {
					widthInt: t,
					heightInt: r,
					blurWidth: n,
					blurHeight: i,
					blurDataURL: o,
					objectFit: a
				} = e, u = n ? 40 * n : t, s = i ? 40 * i : r, l = u && s ? "viewBox='0 0 " + u + " " + s + "'" : "";
				return "%3Csvg xmlns='http://www.w3.org/2000/svg' " + l + "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" + (l ? "none" : "contain" === a ? "xMidYMid" : "cover" === a ? "xMidYMid slice" : "none") + "' style='filter: url(%23b);' href='" + o + "'/%3E%3C/svg%3E"
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), Object.defineProperty(t, "getImageBlurSvg", {
				enumerable: !0,
				get: function () {
					return r
				}
			})
		},
		25776: function (e, t, r) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), Object.defineProperty(t, "ImageConfigContext", {
				enumerable: !0,
				get: function () {
					return o
				}
			});
			let n = r(50049)._(r(59686)),
				i = r(79665),
				o = n.default.createContext(i.imageConfigDefault)
		},
		79665: function (e, t) {
			Object.defineProperty(t, "__esModule", {
					value: !0
				}),
				function (e, t) {
					for (var r in t) Object.defineProperty(e, r, {
						enumerable: !0,
						get: t[r]
					})
				}(t, {
					VALID_LOADERS: function () {
						return r
					},
					imageConfigDefault: function () {
						return n
					}
				});
			let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
				n = {
					deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
					imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
					path: "/_next/image",
					loader: "default",
					loaderFile: "",
					domains: [],
					disableStaticImages: !1,
					minimumCacheTTL: 60,
					formats: ["image/webp"],
					dangerouslyAllowSVG: !1,
					contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
					contentDispositionType: "inline",
					remotePatterns: [],
					unoptimized: !1
				}
		},
		20992: function (e, t, r) {
			Object.defineProperty(t, "__esModule", {
					value: !0
				}),
				function (e, t) {
					for (var r in t) Object.defineProperty(e, r, {
						enumerable: !0,
						get: t[r]
					})
				}(t, {
					getImageProps: function () {
						return u
					},
					default: function () {
						return s
					}
				});
			let n = r(50049),
				i = r(45271),
				o = r(1070),
				a = n._(r(27561)),
				u = e => {
					let {
						props: t
					} = (0, i.getImgProps)(e, {
						defaultLoader: a.default,
						imgConf: {
							deviceSizes: [856, 1440, 1920, 2880],
							imageSizes: [400, 200, 50],
							path: "/_next/image",
							loader: "default",
							dangerouslyAllowSVG: !1,
							unoptimized: !1
						}
					});
					for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
					return {
						props: t
					}
				},
				s = o.Image
		},
		27561: function (e, t) {
			function r(e) {
				let {
					config: t,
					src: r,
					width: n,
					quality: i
				} = e;
				return t.path + "?url=" + encodeURIComponent(r) + "&w=" + n + "&q=" + (i || 75)
			}
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), Object.defineProperty(t, "default", {
				enumerable: !0,
				get: function () {
					return n
				}
			}), r.__next_img_default = !0;
			let n = r
		},
		10812: function (e, t, r) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), Object.defineProperty(t, "RouterContext", {
				enumerable: !0,
				get: function () {
					return n
				}
			});
			let n = r(50049)._(r(59686)).default.createContext(null)
		},
		80882: function (e, t, r) {
			Object.defineProperty(t, "__esModule", {
				value: !0
			}), Object.defineProperty(t, "default", {
				enumerable: !0,
				get: function () {
					return a
				}
			});
			let n = r(59686),
				i = n.useLayoutEffect,
				o = n.useEffect;

			function a(e) {
				let {
					headManager: t,
					reduceComponentsToState: r
				} = e;

				function a() {
					if (t && t.mountedInstances) {
						let i = n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
						t.updateHead(r(i, e))
					}
				}
				return i(() => {
					var r;
					return null == t || null == (r = t.mountedInstances) || r.add(e.children), () => {
						var r;
						null == t || null == (r = t.mountedInstances) || r.delete(e.children)
					}
				}), i(() => (t && (t._pendingUpdate = a), () => {
					t && (t._pendingUpdate = a)
				})), o(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
					t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
				})), null
			}
		},
		692: function (e) {
			var t, r, n, i = e.exports = {};

			function o() {
				throw Error("setTimeout has not been defined")
			}

			function a() {
				throw Error("clearTimeout has not been defined")
			}

			function u(e) {
				if (t === setTimeout) return setTimeout(e, 0);
				if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
				try {
					return t(e, 0)
				} catch (r) {
					try {
						return t.call(null, e, 0)
					} catch (r) {
						return t.call(this, e, 0)
					}
				}
			}! function () {
				try {
					t = "function" == typeof setTimeout ? setTimeout : o
				} catch (e) {
					t = o
				}
				try {
					r = "function" == typeof clearTimeout ? clearTimeout : a
				} catch (e) {
					r = a
				}
			}();
			var s = [],
				l = !1,
				c = -1;

			function f() {
				l && n && (l = !1, n.length ? s = n.concat(s) : c = -1, s.length && d())
			}

			function d() {
				if (!l) {
					var e = u(f);
					l = !0;
					for (var t = s.length; t;) {
						for (n = s, s = []; ++c < t;) n && n[c].run();
						c = -1, t = s.length
					}
					n = null, l = !1,
						function (e) {
							if (r === clearTimeout) return clearTimeout(e);
							if ((r === a || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
							try {
								r(e)
							} catch (t) {
								try {
									return r.call(null, e)
								} catch (t) {
									return r.call(this, e)
								}
							}
						}(e)
				}
			}

			function p(e, t) {
				this.fun = e, this.array = t
			}

			function h() {}
			i.nextTick = function (e) {
				var t = Array(arguments.length - 1);
				if (arguments.length > 1)
					for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
				s.push(new p(e, t)), 1 !== s.length || l || u(d)
			}, p.prototype.run = function () {
				this.fun.apply(null, this.array)
			}, i.title = "browser", i.browser = !0, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = h, i.addListener = h, i.once = h, i.off = h, i.removeListener = h, i.removeAllListeners = h, i.emit = h, i.prependListener = h, i.prependOnceListener = h, i.listeners = function (e) {
				return []
			}, i.binding = function (e) {
				throw Error("process.binding is not supported")
			}, i.cwd = function () {
				return "/"
			}, i.chdir = function (e) {
				throw Error("process.chdir is not supported")
			}, i.umask = function () {
				return 0
			}
		},
		66746: function (e, t, r) {
			var n = r(63666);

			function i() {}

			function o() {}
			o.resetWarningCache = i, e.exports = function () {
				function e(e, t, r, i, o, a) {
					if (a !== n) {
						var u = Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
						throw u.name = "Invariant Violation", u
					}
				}

				function t() {
					return e
				}
				e.isRequired = e;
				var r = {
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
					resetWarningCache: i
				};
				return r.PropTypes = r, r
			}
		},
		78970: function (e, t, r) {
			e.exports = r(66746)()
		},
		63666: function (e) {
			e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
		},
		92019: function (e, t, r) {
			/**
			 * @license React
			 * use-sync-external-store-shim.production.min.js
			 *
			 * Copyright (c) Facebook, Inc. and its affiliates.
			 *
			 * This source code is licensed under the MIT license found in the
			 * LICENSE file in the root directory of this source tree.
			 */
			var n = r(59686),
				i = "function" == typeof Object.is ? Object.is : function (e, t) {
					return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
				},
				o = n.useState,
				a = n.useEffect,
				u = n.useLayoutEffect,
				s = n.useDebugValue;

			function l(e) {
				var t = e.getSnapshot;
				e = e.value;
				try {
					var r = t();
					return !i(e, r)
				} catch (e) {
					return !0
				}
			}
			var c = void 0 === window.document || void 0 === window.document.createElement ? function (e, t) {
				return t()
			} : function (e, t) {
				var r = t(),
					n = o({
						inst: {
							value: r,
							getSnapshot: t
						}
					}),
					i = n[0].inst,
					c = n[1];
				return u(function () {
					i.value = r, i.getSnapshot = t, l(i) && c({
						inst: i
					})
				}, [e, r, t]), a(function () {
					return l(i) && c({
						inst: i
					}), e(function () {
						l(i) && c({
							inst: i
						})
					})
				}, [e]), s(r), r
			};
			t.useSyncExternalStore = void 0 !== n.useSyncExternalStore ? n.useSyncExternalStore : c
		},
		50156: function (e, t, r) {
			e.exports = r(92019)
		},
		86730: function (e, t, r) {
			r.d(t, {
				ZP: function () {
					return Q
				}
			});
			var n, i = r(59686),
				o = r(50156);
			let a = () => {},
				u = a(),
				s = Object,
				l = e => e === u,
				c = e => "function" == typeof e,
				f = (e, t) => ({
					...e,
					...t
				}),
				d = e => c(e.then),
				p = new WeakMap,
				h = 0,
				g = e => {
					let t, r;
					let n = typeof e,
						i = e && e.constructor,
						o = i == Date;
					if (s(e) !== e || o || i == RegExp) t = o ? e.toJSON() : "symbol" == n ? e.toString() : "string" == n ? JSON.stringify(e) : "" + e;
					else {
						if (t = p.get(e)) return t;
						if (t = ++h + "~", p.set(e, t), i == Array) {
							for (r = 0, t = "@"; r < e.length; r++) t += g(e[r]) + ",";
							p.set(e, t)
						}
						if (i == s) {
							t = "#";
							let n = s.keys(e).sort();
							for (; !l(r = n.pop());) l(e[r]) || (t += r + ":" + g(e[r]) + ",");
							p.set(e, t)
						}
					}
					return t
				},
				m = new WeakMap,
				y = {},
				v = {},
				w = "undefined",
				b = typeof document != w,
				_ = () => typeof window.requestAnimationFrame != w,
				O = (e, t) => {
					let r = m.get(e);
					return [() => !l(t) && e.get(t) || y, n => {
						if (!l(t)) {
							let i = e.get(t);
							t in v || (v[t] = i), r[5](t, f(i, n), i || y)
						}
					}, r[6], () => !l(t) && t in v ? v[t] : !l(t) && e.get(t) || y]
				},
				E = !0,
				[S, x] = window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [a, a],
				j = {
					initFocus: e => (b && document.addEventListener("visibilitychange", e), S("focus", e), () => {
						b && document.removeEventListener("visibilitychange", e), x("focus", e)
					}),
					initReconnect: e => {
						let t = () => {
								E = !0, e()
							},
							r = () => {
								E = !1
							};
						return S("online", t), S("offline", r), () => {
							x("online", t), x("offline", r)
						}
					}
				},
				C = !i.useId,
				P = "Deno" in window,
				T = e => _() ? window.requestAnimationFrame(e) : setTimeout(e, 1),
				R = P ? i.useEffect : i.useLayoutEffect,
				I = "undefined" != typeof navigator && navigator.connection,
				M = !P && I && (["slow-2g", "2g"].includes(I.effectiveType) || I.saveData),
				k = e => {
					if (c(e)) try {
						e = e()
					} catch (t) {
						e = ""
					}
					let t = e;
					return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? g(e) : "", t]
				},
				A = 0,
				L = () => ++A;
			var V = {
				ERROR_REVALIDATE_EVENT: 3,
				FOCUS_EVENT: 0,
				MUTATE_EVENT: 2,
				RECONNECT_EVENT: 1
			};
			async function z() {
				for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				let [n, i, o, a] = t, s = f({
					populateCache: !0,
					throwOnError: !0
				}, "boolean" == typeof a ? {
					revalidate: a
				} : a || {}), p = s.populateCache, h = s.rollbackOnError, g = s.optimisticData, y = !1 !== s.revalidate, v = e => "function" == typeof h ? h(e) : !1 !== h, w = s.throwOnError;
				if (c(i)) {
					let e = [];
					for (let t of n.keys()) !/^\$(inf|sub)\$/.test(t) && i(n.get(t)._k) && e.push(t);
					return Promise.all(e.map(b))
				}
				return b(i);
				async function b(e) {
					let r;
					let [i] = k(e);
					if (!i) return;
					let [a, s] = O(n, i), [f, h, b, _] = m.get(n), E = () => {
						let e = f[i];
						return y && (delete b[i], delete _[i], e && e[0]) ? e[0](2).then(() => a().data) : a().data
					};
					if (t.length < 3) return E();
					let S = o,
						x = L();
					h[i] = [x, 0];
					let j = !l(g),
						C = a(),
						P = C.data,
						T = C._c,
						R = l(T) ? P : T;
					if (j && s({
							data: g = c(g) ? g(R, P) : g,
							_c: R
						}), c(S)) try {
						S = S(R)
					} catch (e) {
						r = e
					}
					if (S && d(S)) {
						if (S = await S.catch(e => {
								r = e
							}), x !== h[i][0]) {
							if (r) throw r;
							return S
						}
						r && j && v(r) && (p = !0, s({
							data: R,
							_c: u
						}))
					}
					if (p && !r && (c(p) ? s({
							data: p(S, R),
							error: u,
							_c: u
						}) : s({
							data: S,
							error: u,
							_c: u
						})), h[i][1] = L(), Promise.resolve(E()).then(() => {
							s({
								_c: u
							})
						}), r) {
						if (w) throw r;
						return
					}
					return S
				}
			}
			let D = (e, t) => {
					for (let r in e) e[r][0] && e[r][0](t)
				},
				U = (e, t) => {
					if (!m.has(e)) {
						let r = f(j, t),
							n = {},
							i = z.bind(u, e),
							o = a,
							s = {},
							l = (e, t) => {
								let r = s[e] || [];
								return s[e] = r, r.push(t), () => r.splice(r.indexOf(t), 1)
							},
							c = (t, r, n) => {
								e.set(t, r);
								let i = s[t];
								if (i)
									for (let e of i) e(r, n)
							},
							d = () => {
								if (!m.has(e) && (m.set(e, [n, {}, {}, {}, i, c, l]), !P)) {
									let t = r.initFocus(setTimeout.bind(u, D.bind(u, n, 0))),
										i = r.initReconnect(setTimeout.bind(u, D.bind(u, n, 1)));
									o = () => {
										t && t(), i && i(), m.delete(e)
									}
								}
							};
						return d(), [e, i, d, o]
					}
					return [e, m.get(e)[4]]
				},
				[N, W] = U(new Map),
				F = f({
					onLoadingSlow: a,
					onSuccess: a,
					onError: a,
					onErrorRetry: (e, t, r, n, i) => {
						let o = r.errorRetryCount,
							a = i.retryCount,
							u = ~~((Math.random() + .5) * (1 << (a < 8 ? a : 8))) * r.errorRetryInterval;
						(l(o) || !(a > o)) && setTimeout(n, u, i)
					},
					onDiscarded: a,
					revalidateOnFocus: !0,
					revalidateOnReconnect: !0,
					revalidateIfStale: !0,
					shouldRetryOnError: !0,
					errorRetryInterval: M ? 1e4 : 5e3,
					focusThrottleInterval: 5e3,
					dedupingInterval: 2e3,
					loadingTimeout: M ? 5e3 : 3e3,
					compare: (e, t) => g(e) == g(t),
					isPaused: () => !1,
					cache: N,
					mutate: W,
					fallback: {}
				}, {
					isOnline: () => E,
					isVisible: () => {
						let e = b && document.visibilityState;
						return l(e) || "hidden" !== e
					}
				}),
				H = (e, t) => {
					let r = f(e, t);
					if (t) {
						let {
							use: n,
							fallback: i
						} = e, {
							use: o,
							fallback: a
						} = t;
						n && o && (r.use = n.concat(o)), i && a && (r.fallback = f(i, a))
					}
					return r
				},
				q = (0, i.createContext)({}),
				$ = window.__SWR_DEVTOOLS_USE__,
				B = $ ? window.__SWR_DEVTOOLS_USE__ : [],
				G = e => c(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
				J = () => f(F, (0, i.useContext)(q)),
				Y = B.concat(e => (t, r, n) => {
					let i = r && function () {
						for (var e = arguments.length, n = Array(e), i = 0; i < e; i++) n[i] = arguments[i];
						let [o] = k(t), [, , , a] = m.get(N);
						if (o.startsWith("$inf$")) return r(...n);
						let u = a[o];
						return l(u) ? r(...n) : (delete a[o], u)
					};
					return e(t, i, n)
				}),
				X = (e, t, r) => {
					let n = t[e] || (t[e] = []);
					return n.push(r), () => {
						let e = n.indexOf(r);
						e >= 0 && (n[e] = n[n.length - 1], n.pop())
					}
				};
			$ && (window.__SWR_DEVTOOLS_REACT__ = i);
			let Z = i.use || (e => {
					if ("pending" === e.status) throw e;
					if ("fulfilled" === e.status) return e.value;
					if ("rejected" === e.status) throw e.reason;
					throw e.status = "pending", e.then(t => {
						e.status = "fulfilled", e.value = t
					}, t => {
						e.status = "rejected", e.reason = t
					}), e
				}),
				K = {
					dedupe: !0
				};
			s.defineProperty(e => {
				let {
					value: t
				} = e, r = (0, i.useContext)(q), n = c(t), o = (0, i.useMemo)(() => n ? t(r) : t, [n, r, t]), a = (0, i.useMemo)(() => n ? o : H(r, o), [n, r, o]), s = o && o.provider, l = (0, i.useRef)(u);
				s && !l.current && (l.current = U(s(a.cache || N), o));
				let d = l.current;
				return d && (a.cache = d[0], a.mutate = d[1]), R(() => {
					if (d) return d[2] && d[2](), d[3]
				}, []), (0, i.createElement)(q.Provider, f(e, {
					value: a
				}))
			}, "defaultValue", {
				value: F
			});
			let Q = (n = (e, t, r) => {
				let {
					cache: n,
					compare: a,
					suspense: s,
					fallbackData: d,
					revalidateOnMount: p,
					revalidateIfStale: h,
					refreshInterval: g,
					refreshWhenHidden: y,
					refreshWhenOffline: v,
					keepPreviousData: w
				} = r, [b, _, E, S] = m.get(n), [x, j] = k(e), I = (0, i.useRef)(!1), M = (0, i.useRef)(!1), A = (0, i.useRef)(x), D = (0, i.useRef)(t), U = (0, i.useRef)(r), N = () => U.current, W = () => N().isVisible() && N().isOnline(), [F, H, q, $] = O(n, x), B = (0, i.useRef)({}).current, G = l(d) ? r.fallback[x] : d, J = (e, t) => {
					for (let r in B)
						if ("data" === r) {
							if (!a(e[r], t[r]) && (!l(e[r]) || !a(ea, t[r]))) return !1
						} else if (t[r] !== e[r]) return !1;
					return !0
				}, Y = (0, i.useMemo)(() => {
					let e = !!x && !!t && (l(p) ? !N().isPaused() && !s && (!!l(h) || h) : p),
						r = t => {
							let r = f(t);
							return (delete r._k, e) ? {
								isValidating: !0,
								isLoading: !0,
								...r
							} : r
						},
						n = F(),
						i = $(),
						o = r(n),
						a = n === i ? o : r(i),
						u = o;
					return [() => {
						let e = r(F());
						return J(e, u) ? (u.data = e.data, u.isLoading = e.isLoading, u.isValidating = e.isValidating, u.error = e.error, u) : (u = e, e)
					}, () => a]
				}, [n, x]), Q = (0, o.useSyncExternalStore)((0, i.useCallback)(e => q(x, (t, r) => {
					J(r, t) || e()
				}), [n, x]), Y[0], Y[1]), ee = !I.current, et = b[x] && b[x].length > 0, er = Q.data, en = l(er) ? G : er, ei = Q.error, eo = (0, i.useRef)(en), ea = w ? l(er) ? eo.current : er : en, eu = (!et || !!l(ei)) && (ee && !l(p) ? p : !N().isPaused() && (s ? !l(en) && h : l(en) || h)), es = !!(x && t && ee && eu), el = l(Q.isValidating) ? es : Q.isValidating, ec = l(Q.isLoading) ? es : Q.isLoading, ef = (0, i.useCallback)(async e => {
					let t, n;
					let i = D.current;
					if (!x || !i || M.current || N().isPaused()) return !1;
					let o = !0,
						s = e || {},
						f = !E[x] || !s.dedupe,
						d = () => C ? !M.current && x === A.current && I.current : x === A.current,
						p = {
							isValidating: !1,
							isLoading: !1
						},
						h = () => {
							H(p)
						},
						g = () => {
							let e = E[x];
							e && e[1] === n && delete E[x]
						},
						m = {
							isValidating: !0
						};
					l(F().data) && (m.isLoading = !0);
					try {
						if (f && (H(m), r.loadingTimeout && l(F().data) && setTimeout(() => {
								o && d() && N().onLoadingSlow(x, r)
							}, r.loadingTimeout), E[x] = [i(j), L()]), [t, n] = E[x], t = await t, f && setTimeout(g, r.dedupingInterval), !E[x] || E[x][1] !== n) return f && d() && N().onDiscarded(x), !1;
						p.error = u;
						let e = _[x];
						if (!l(e) && (n <= e[0] || n <= e[1] || 0 === e[1])) return h(), f && d() && N().onDiscarded(x), !1;
						let s = F().data;
						p.data = a(s, t) ? s : t, f && d() && N().onSuccess(t, x, r)
					} catch (r) {
						g();
						let e = N(),
							{
								shouldRetryOnError: t
							} = e;
						!e.isPaused() && (p.error = r, f && d() && (e.onError(r, x, e), (!0 === t || c(t) && t(r)) && W() && e.onErrorRetry(r, x, e, e => {
							let t = b[x];
							t && t[0] && t[0](V.ERROR_REVALIDATE_EVENT, e)
						}, {
							retryCount: (s.retryCount || 0) + 1,
							dedupe: !0
						})))
					}
					return o = !1, h(), !0
				}, [x, n]), ed = (0, i.useCallback)(function () {
					for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
					return z(n, A.current, ...t)
				}, []);
				if (R(() => {
						D.current = t, U.current = r, l(er) || (eo.current = er)
					}), R(() => {
						if (!x) return;
						let e = ef.bind(u, K),
							t = 0,
							r = X(x, b, function (r) {
								let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
								if (r == V.FOCUS_EVENT) {
									let r = Date.now();
									N().revalidateOnFocus && r > t && W() && (t = r + N().focusThrottleInterval, e())
								} else if (r == V.RECONNECT_EVENT) N().revalidateOnReconnect && W() && e();
								else if (r == V.MUTATE_EVENT) return ef();
								else if (r == V.ERROR_REVALIDATE_EVENT) return ef(n)
							});
						return M.current = !1, A.current = x, I.current = !0, H({
							_k: j
						}), eu && (l(en) || P ? e() : T(e)), () => {
							M.current = !0, r()
						}
					}, [x]), R(() => {
						let e;

						function t() {
							let t = c(g) ? g(F().data) : g;
							t && -1 !== e && (e = setTimeout(r, t))
						}

						function r() {
							!F().error && (y || N().isVisible()) && (v || N().isOnline()) ? ef(K).then(t) : t()
						}
						return t(), () => {
							e && (clearTimeout(e), e = -1)
						}
					}, [g, y, v, x]), (0, i.useDebugValue)(ea), s && l(en) && x) {
					if (!C && P) throw Error("Fallback data is required when using suspense in SSR.");
					D.current = t, U.current = r, M.current = !1;
					let e = S[x];
					if (l(e) || Z(ed(e)), l(ei)) {
						let e = ef(K);
						l(ea) || (e.status = "fulfilled", e.value = !0), Z(e)
					} else throw ei
				}
				return {
					mutate: ed,
					get data() {
						return B.data = !0, ea
					},
					get error() {
						return B.error = !0, ei
					},
					get isValidating() {
						return B.isValidating = !0, el
					},
					get isLoading() {
						return B.isLoading = !0, ec
					}
				}
			}, function () {
				for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
				let i = J(),
					[o, a, u] = G(t),
					s = H(i, u),
					l = n,
					{
						use: c
					} = s,
					f = (c || []).concat(Y);
				for (let e = f.length; e--;) l = f[e](l);
				return l(o, a || s.fetcher || null, s)
			})
		}
	}
]);