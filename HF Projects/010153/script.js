/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
	var u = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
	var Di = u(() => {
		window.tram = (function (e) {
			function t(l, v) {
				var y = new U.Bare();
				return y.init(l, v);
			}
			function r(l) {
				return l.replace(/[A-Z]/g, function (v) {
					return "-" + v.toLowerCase();
				});
			}
			function n(l) {
				var v = parseInt(l.slice(1), 16),
					y = (v >> 16) & 255,
					I = (v >> 8) & 255,
					_ = 255 & v;
				return [y, I, _];
			}
			function o(l, v, y) {
				return (
					"#" + ((1 << 24) | (l << 16) | (v << 8) | y).toString(16).slice(1)
				);
			}
			function i() {}
			function a(l, v) {
				f("Type warning: Expected: [" + l + "] Got: [" + typeof v + "] " + v);
			}
			function s(l, v, y) {
				f("Units do not match [" + l + "]: " + v + ", " + y);
			}
			function c(l, v, y) {
				if ((v !== void 0 && (y = v), l === void 0)) return y;
				var I = y;
				return (
					Nt.test(l) || !vt.test(l)
						? (I = parseInt(l, 10))
						: vt.test(l) && (I = 1e3 * parseFloat(l)),
					0 > I && (I = 0),
					I === I ? I : y
				);
			}
			function f(l) {
				de.debug && window && window.console.warn(l);
			}
			function E(l) {
				for (var v = -1, y = l ? l.length : 0, I = []; ++v < y; ) {
					var _ = l[v];
					_ && I.push(_);
				}
				return I;
			}
			var p = (function (l, v, y) {
					function I(re) {
						return typeof re == "object";
					}
					function _(re) {
						return typeof re == "function";
					}
					function O() {}
					function z(re, he) {
						function W() {
							var Le = new se();
							return _(Le.init) && Le.init.apply(Le, arguments), Le;
						}
						function se() {}
						he === y && ((he = re), (re = Object)), (W.Bare = se);
						var le,
							be = (O[l] = re[l]),
							rt = (se[l] = W[l] = new O());
						return (
							(rt.constructor = W),
							(W.mixin = function (Le) {
								return (se[l] = W[l] = z(W, Le)[l]), W;
							}),
							(W.open = function (Le) {
								if (
									((le = {}),
									_(Le) ? (le = Le.call(W, rt, be, W, re)) : I(Le) && (le = Le),
									I(le))
								)
									for (var Ir in le) v.call(le, Ir) && (rt[Ir] = le[Ir]);
								return _(rt.init) || (rt.init = re), W;
							}),
							W.open(he)
						);
					}
					return z;
				})("prototype", {}.hasOwnProperty),
				h = {
					ease: [
						"ease",
						function (l, v, y, I) {
							var _ = (l /= I) * l,
								O = _ * l;
							return (
								v +
								y * (-2.75 * O * _ + 11 * _ * _ + -15.5 * O + 8 * _ + 0.25 * l)
							);
						},
					],
					"ease-in": [
						"ease-in",
						function (l, v, y, I) {
							var _ = (l /= I) * l,
								O = _ * l;
							return v + y * (-1 * O * _ + 3 * _ * _ + -3 * O + 2 * _);
						},
					],
					"ease-out": [
						"ease-out",
						function (l, v, y, I) {
							var _ = (l /= I) * l,
								O = _ * l;
							return (
								v +
								y * (0.3 * O * _ + -1.6 * _ * _ + 2.2 * O + -1.8 * _ + 1.9 * l)
							);
						},
					],
					"ease-in-out": [
						"ease-in-out",
						function (l, v, y, I) {
							var _ = (l /= I) * l,
								O = _ * l;
							return v + y * (2 * O * _ + -5 * _ * _ + 2 * O + 2 * _);
						},
					],
					linear: [
						"linear",
						function (l, v, y, I) {
							return (y * l) / I + v;
						},
					],
					"ease-in-quad": [
						"cubic-bezier(0.550, 0.085, 0.680, 0.530)",
						function (l, v, y, I) {
							return y * (l /= I) * l + v;
						},
					],
					"ease-out-quad": [
						"cubic-bezier(0.250, 0.460, 0.450, 0.940)",
						function (l, v, y, I) {
							return -y * (l /= I) * (l - 2) + v;
						},
					],
					"ease-in-out-quad": [
						"cubic-bezier(0.455, 0.030, 0.515, 0.955)",
						function (l, v, y, I) {
							return (l /= I / 2) < 1
								? (y / 2) * l * l + v
								: (-y / 2) * (--l * (l - 2) - 1) + v;
						},
					],
					"ease-in-cubic": [
						"cubic-bezier(0.550, 0.055, 0.675, 0.190)",
						function (l, v, y, I) {
							return y * (l /= I) * l * l + v;
						},
					],
					"ease-out-cubic": [
						"cubic-bezier(0.215, 0.610, 0.355, 1)",
						function (l, v, y, I) {
							return y * ((l = l / I - 1) * l * l + 1) + v;
						},
					],
					"ease-in-out-cubic": [
						"cubic-bezier(0.645, 0.045, 0.355, 1)",
						function (l, v, y, I) {
							return (l /= I / 2) < 1
								? (y / 2) * l * l * l + v
								: (y / 2) * ((l -= 2) * l * l + 2) + v;
						},
					],
					"ease-in-quart": [
						"cubic-bezier(0.895, 0.030, 0.685, 0.220)",
						function (l, v, y, I) {
							return y * (l /= I) * l * l * l + v;
						},
					],
					"ease-out-quart": [
						"cubic-bezier(0.165, 0.840, 0.440, 1)",
						function (l, v, y, I) {
							return -y * ((l = l / I - 1) * l * l * l - 1) + v;
						},
					],
					"ease-in-out-quart": [
						"cubic-bezier(0.770, 0, 0.175, 1)",
						function (l, v, y, I) {
							return (l /= I / 2) < 1
								? (y / 2) * l * l * l * l + v
								: (-y / 2) * ((l -= 2) * l * l * l - 2) + v;
						},
					],
					"ease-in-quint": [
						"cubic-bezier(0.755, 0.050, 0.855, 0.060)",
						function (l, v, y, I) {
							return y * (l /= I) * l * l * l * l + v;
						},
					],
					"ease-out-quint": [
						"cubic-bezier(0.230, 1, 0.320, 1)",
						function (l, v, y, I) {
							return y * ((l = l / I - 1) * l * l * l * l + 1) + v;
						},
					],
					"ease-in-out-quint": [
						"cubic-bezier(0.860, 0, 0.070, 1)",
						function (l, v, y, I) {
							return (l /= I / 2) < 1
								? (y / 2) * l * l * l * l * l + v
								: (y / 2) * ((l -= 2) * l * l * l * l + 2) + v;
						},
					],
					"ease-in-sine": [
						"cubic-bezier(0.470, 0, 0.745, 0.715)",
						function (l, v, y, I) {
							return -y * Math.cos((l / I) * (Math.PI / 2)) + y + v;
						},
					],
					"ease-out-sine": [
						"cubic-bezier(0.390, 0.575, 0.565, 1)",
						function (l, v, y, I) {
							return y * Math.sin((l / I) * (Math.PI / 2)) + v;
						},
					],
					"ease-in-out-sine": [
						"cubic-bezier(0.445, 0.050, 0.550, 0.950)",
						function (l, v, y, I) {
							return (-y / 2) * (Math.cos((Math.PI * l) / I) - 1) + v;
						},
					],
					"ease-in-expo": [
						"cubic-bezier(0.950, 0.050, 0.795, 0.035)",
						function (l, v, y, I) {
							return l === 0 ? v : y * Math.pow(2, 10 * (l / I - 1)) + v;
						},
					],
					"ease-out-expo": [
						"cubic-bezier(0.190, 1, 0.220, 1)",
						function (l, v, y, I) {
							return l === I
								? v + y
								: y * (-Math.pow(2, (-10 * l) / I) + 1) + v;
						},
					],
					"ease-in-out-expo": [
						"cubic-bezier(1, 0, 0, 1)",
						function (l, v, y, I) {
							return l === 0
								? v
								: l === I
								? v + y
								: (l /= I / 2) < 1
								? (y / 2) * Math.pow(2, 10 * (l - 1)) + v
								: (y / 2) * (-Math.pow(2, -10 * --l) + 2) + v;
						},
					],
					"ease-in-circ": [
						"cubic-bezier(0.600, 0.040, 0.980, 0.335)",
						function (l, v, y, I) {
							return -y * (Math.sqrt(1 - (l /= I) * l) - 1) + v;
						},
					],
					"ease-out-circ": [
						"cubic-bezier(0.075, 0.820, 0.165, 1)",
						function (l, v, y, I) {
							return y * Math.sqrt(1 - (l = l / I - 1) * l) + v;
						},
					],
					"ease-in-out-circ": [
						"cubic-bezier(0.785, 0.135, 0.150, 0.860)",
						function (l, v, y, I) {
							return (l /= I / 2) < 1
								? (-y / 2) * (Math.sqrt(1 - l * l) - 1) + v
								: (y / 2) * (Math.sqrt(1 - (l -= 2) * l) + 1) + v;
						},
					],
					"ease-in-back": [
						"cubic-bezier(0.600, -0.280, 0.735, 0.045)",
						function (l, v, y, I, _) {
							return (
								_ === void 0 && (_ = 1.70158),
								y * (l /= I) * l * ((_ + 1) * l - _) + v
							);
						},
					],
					"ease-out-back": [
						"cubic-bezier(0.175, 0.885, 0.320, 1.275)",
						function (l, v, y, I, _) {
							return (
								_ === void 0 && (_ = 1.70158),
								y * ((l = l / I - 1) * l * ((_ + 1) * l + _) + 1) + v
							);
						},
					],
					"ease-in-out-back": [
						"cubic-bezier(0.680, -0.550, 0.265, 1.550)",
						function (l, v, y, I, _) {
							return (
								_ === void 0 && (_ = 1.70158),
								(l /= I / 2) < 1
									? (y / 2) * l * l * (((_ *= 1.525) + 1) * l - _) + v
									: (y / 2) *
											((l -= 2) * l * (((_ *= 1.525) + 1) * l + _) + 2) +
									  v
							);
						},
					],
				},
				g = {
					"ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
					"ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
					"ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)",
				},
				S = document,
				b = window,
				x = "bkwld-tram",
				A = /[\-\.0-9]/g,
				w = /[A-Z]/,
				T = "number",
				N = /^(rgb|#)/,
				C = /(em|cm|mm|in|pt|pc|px)$/,
				q = /(em|cm|mm|in|pt|pc|px|%)$/,
				G = /(deg|rad|turn)$/,
				k = "unitless",
				Y = /(all|none) 0s ease 0s/,
				ie = /^(width|height)$/,
				ee = " ",
				D = S.createElement("a"),
				m = ["Webkit", "Moz", "O", "ms"],
				L = ["-webkit-", "-moz-", "-o-", "-ms-"],
				M = function (l) {
					if (l in D.style) return { dom: l, css: l };
					var v,
						y,
						I = "",
						_ = l.split("-");
					for (v = 0; v < _.length; v++)
						I += _[v].charAt(0).toUpperCase() + _[v].slice(1);
					for (v = 0; v < m.length; v++)
						if (((y = m[v] + I), y in D.style))
							return { dom: y, css: L[v] + l };
				},
				X = (t.support = {
					bind: Function.prototype.bind,
					transform: M("transform"),
					transition: M("transition"),
					backface: M("backface-visibility"),
					timing: M("transition-timing-function"),
				});
			if (X.transition) {
				var $ = X.timing.dom;
				if (((D.style[$] = h["ease-in-back"][0]), !D.style[$]))
					for (var te in g) h[te][0] = g[te];
			}
			var P = (t.frame = (function () {
					var l =
						b.requestAnimationFrame ||
						b.webkitRequestAnimationFrame ||
						b.mozRequestAnimationFrame ||
						b.oRequestAnimationFrame ||
						b.msRequestAnimationFrame;
					return l && X.bind
						? l.bind(b)
						: function (v) {
								b.setTimeout(v, 16);
						  };
				})()),
				H = (t.now = (function () {
					var l = b.performance,
						v = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
					return v && X.bind
						? v.bind(l)
						: Date.now ||
								function () {
									return +new Date();
								};
				})()),
				j = p(function (l) {
					function v(Z, fe) {
						var Te = E(("" + Z).split(ee)),
							pe = Te[0];
						fe = fe || {};
						var De = B[pe];
						if (!De) return f("Unsupported property: " + pe);
						if (!fe.weak || !this.props[pe]) {
							var Ke = De[0],
								Xe = this.props[pe];
							return (
								Xe || (Xe = this.props[pe] = new Ke.Bare()),
								Xe.init(this.$el, Te, De, fe),
								Xe
							);
						}
					}
					function y(Z, fe, Te) {
						if (Z) {
							var pe = typeof Z;
							if (
								(fe ||
									(this.timer && this.timer.destroy(),
									(this.queue = []),
									(this.active = !1)),
								pe == "number" && fe)
							)
								return (
									(this.timer = new Ee({
										duration: Z,
										context: this,
										complete: O,
									})),
									void (this.active = !0)
								);
							if (pe == "string" && fe) {
								switch (Z) {
									case "hide":
										W.call(this);
										break;
									case "stop":
										z.call(this);
										break;
									case "redraw":
										se.call(this);
										break;
									default:
										v.call(this, Z, Te && Te[1]);
								}
								return O.call(this);
							}
							if (pe == "function") return void Z.call(this, this);
							if (pe == "object") {
								var De = 0;
								rt.call(
									this,
									Z,
									function (Se, xm) {
										Se.span > De && (De = Se.span), Se.stop(), Se.animate(xm);
									},
									function (Se) {
										"wait" in Se && (De = c(Se.wait, 0));
									}
								),
									be.call(this),
									De > 0 &&
										((this.timer = new Ee({ duration: De, context: this })),
										(this.active = !0),
										fe && (this.timer.complete = O));
								var Ke = this,
									Xe = !1,
									sn = {};
								P(function () {
									rt.call(Ke, Z, function (Se) {
										Se.active && ((Xe = !0), (sn[Se.name] = Se.nextStyle));
									}),
										Xe && Ke.$el.css(sn);
								});
							}
						}
					}
					function I(Z) {
						(Z = c(Z, 0)),
							this.active
								? this.queue.push({ options: Z })
								: ((this.timer = new Ee({
										duration: Z,
										context: this,
										complete: O,
								  })),
								  (this.active = !0));
					}
					function _(Z) {
						return this.active
							? (this.queue.push({ options: Z, args: arguments }),
							  void (this.timer.complete = O))
							: f(
									"No active transition timer. Use start() or wait() before then()."
							  );
					}
					function O() {
						if (
							(this.timer && this.timer.destroy(),
							(this.active = !1),
							this.queue.length)
						) {
							var Z = this.queue.shift();
							y.call(this, Z.options, !0, Z.args);
						}
					}
					function z(Z) {
						this.timer && this.timer.destroy(),
							(this.queue = []),
							(this.active = !1);
						var fe;
						typeof Z == "string"
							? ((fe = {}), (fe[Z] = 1))
							: (fe = typeof Z == "object" && Z != null ? Z : this.props),
							rt.call(this, fe, Le),
							be.call(this);
					}
					function re(Z) {
						z.call(this, Z), rt.call(this, Z, Ir, Nm);
					}
					function he(Z) {
						typeof Z != "string" && (Z = "block"), (this.el.style.display = Z);
					}
					function W() {
						z.call(this), (this.el.style.display = "none");
					}
					function se() {
						this.el.offsetHeight;
					}
					function le() {
						z.call(this), e.removeData(this.el, x), (this.$el = this.el = null);
					}
					function be() {
						var Z,
							fe,
							Te = [];
						this.upstream && Te.push(this.upstream);
						for (Z in this.props)
							(fe = this.props[Z]), fe.active && Te.push(fe.string);
						(Te = Te.join(",")),
							this.style !== Te &&
								((this.style = Te), (this.el.style[X.transition.dom] = Te));
					}
					function rt(Z, fe, Te) {
						var pe,
							De,
							Ke,
							Xe,
							sn = fe !== Le,
							Se = {};
						for (pe in Z)
							(Ke = Z[pe]),
								pe in _e
									? (Se.transform || (Se.transform = {}),
									  (Se.transform[pe] = Ke))
									: (w.test(pe) && (pe = r(pe)),
									  pe in B ? (Se[pe] = Ke) : (Xe || (Xe = {}), (Xe[pe] = Ke)));
						for (pe in Se) {
							if (((Ke = Se[pe]), (De = this.props[pe]), !De)) {
								if (!sn) continue;
								De = v.call(this, pe);
							}
							fe.call(this, De, Ke);
						}
						Te && Xe && Te.call(this, Xe);
					}
					function Le(Z) {
						Z.stop();
					}
					function Ir(Z, fe) {
						Z.set(fe);
					}
					function Nm(Z) {
						this.$el.css(Z);
					}
					function ke(Z, fe) {
						l[Z] = function () {
							return this.children
								? qm.call(this, fe, arguments)
								: (this.el && fe.apply(this, arguments), this);
						};
					}
					function qm(Z, fe) {
						var Te,
							pe = this.children.length;
						for (Te = 0; pe > Te; Te++) Z.apply(this.children[Te], fe);
						return this;
					}
					(l.init = function (Z) {
						if (
							((this.$el = e(Z)),
							(this.el = this.$el[0]),
							(this.props = {}),
							(this.queue = []),
							(this.style = ""),
							(this.active = !1),
							de.keepInherited && !de.fallback)
						) {
							var fe = V(this.el, "transition");
							fe && !Y.test(fe) && (this.upstream = fe);
						}
						X.backface &&
							de.hideBackface &&
							d(this.el, X.backface.css, "hidden");
					}),
						ke("add", v),
						ke("start", y),
						ke("wait", I),
						ke("then", _),
						ke("next", O),
						ke("stop", z),
						ke("set", re),
						ke("show", he),
						ke("hide", W),
						ke("redraw", se),
						ke("destroy", le);
				}),
				U = p(j, function (l) {
					function v(y, I) {
						var _ = e.data(y, x) || e.data(y, x, new j.Bare());
						return _.el || _.init(y), I ? _.start(I) : _;
					}
					l.init = function (y, I) {
						var _ = e(y);
						if (!_.length) return this;
						if (_.length === 1) return v(_[0], I);
						var O = [];
						return (
							_.each(function (z, re) {
								O.push(v(re, I));
							}),
							(this.children = O),
							this
						);
					};
				}),
				F = p(function (l) {
					function v() {
						var O = this.get();
						this.update("auto");
						var z = this.get();
						return this.update(O), z;
					}
					function y(O, z, re) {
						return z !== void 0 && (re = z), O in h ? O : re;
					}
					function I(O) {
						var z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(O);
						return (z ? o(z[1], z[2], z[3]) : O).replace(
							/#(\w)(\w)(\w)$/,
							"#$1$1$2$2$3$3"
						);
					}
					var _ = { duration: 500, ease: "ease", delay: 0 };
					(l.init = function (O, z, re, he) {
						(this.$el = O), (this.el = O[0]);
						var W = z[0];
						re[2] && (W = re[2]),
							K[W] && (W = K[W]),
							(this.name = W),
							(this.type = re[1]),
							(this.duration = c(z[1], this.duration, _.duration)),
							(this.ease = y(z[2], this.ease, _.ease)),
							(this.delay = c(z[3], this.delay, _.delay)),
							(this.span = this.duration + this.delay),
							(this.active = !1),
							(this.nextStyle = null),
							(this.auto = ie.test(this.name)),
							(this.unit = he.unit || this.unit || de.defaultUnit),
							(this.angle = he.angle || this.angle || de.defaultAngle),
							de.fallback || he.fallback
								? (this.animate = this.fallback)
								: ((this.animate = this.transition),
								  (this.string =
										this.name +
										ee +
										this.duration +
										"ms" +
										(this.ease != "ease" ? ee + h[this.ease][0] : "") +
										(this.delay ? ee + this.delay + "ms" : "")));
					}),
						(l.set = function (O) {
							(O = this.convert(O, this.type)), this.update(O), this.redraw();
						}),
						(l.transition = function (O) {
							(this.active = !0),
								(O = this.convert(O, this.type)),
								this.auto &&
									(this.el.style[this.name] == "auto" &&
										(this.update(this.get()), this.redraw()),
									O == "auto" && (O = v.call(this))),
								(this.nextStyle = O);
						}),
						(l.fallback = function (O) {
							var z =
								this.el.style[this.name] || this.convert(this.get(), this.type);
							(O = this.convert(O, this.type)),
								this.auto &&
									(z == "auto" && (z = this.convert(this.get(), this.type)),
									O == "auto" && (O = v.call(this))),
								(this.tween = new J({
									from: z,
									to: O,
									duration: this.duration,
									delay: this.delay,
									ease: this.ease,
									update: this.update,
									context: this,
								}));
						}),
						(l.get = function () {
							return V(this.el, this.name);
						}),
						(l.update = function (O) {
							d(this.el, this.name, O);
						}),
						(l.stop = function () {
							(this.active || this.nextStyle) &&
								((this.active = !1),
								(this.nextStyle = null),
								d(this.el, this.name, this.get()));
							var O = this.tween;
							O && O.context && O.destroy();
						}),
						(l.convert = function (O, z) {
							if (O == "auto" && this.auto) return O;
							var re,
								he = typeof O == "number",
								W = typeof O == "string";
							switch (z) {
								case T:
									if (he) return O;
									if (W && O.replace(A, "") === "") return +O;
									re = "number(unitless)";
									break;
								case N:
									if (W) {
										if (O === "" && this.original) return this.original;
										if (z.test(O))
											return O.charAt(0) == "#" && O.length == 7 ? O : I(O);
									}
									re = "hex or rgb string";
									break;
								case C:
									if (he) return O + this.unit;
									if (W && z.test(O)) return O;
									re = "number(px) or string(unit)";
									break;
								case q:
									if (he) return O + this.unit;
									if (W && z.test(O)) return O;
									re = "number(px) or string(unit or %)";
									break;
								case G:
									if (he) return O + this.angle;
									if (W && z.test(O)) return O;
									re = "number(deg) or string(angle)";
									break;
								case k:
									if (he || (W && q.test(O))) return O;
									re = "number(unitless) or string(unit or %)";
							}
							return a(re, O), O;
						}),
						(l.redraw = function () {
							this.el.offsetHeight;
						});
				}),
				Q = p(F, function (l, v) {
					l.init = function () {
						v.init.apply(this, arguments),
							this.original || (this.original = this.convert(this.get(), N));
					};
				}),
				ue = p(F, function (l, v) {
					(l.init = function () {
						v.init.apply(this, arguments), (this.animate = this.fallback);
					}),
						(l.get = function () {
							return this.$el[this.name]();
						}),
						(l.update = function (y) {
							this.$el[this.name](y);
						});
				}),
				ce = p(F, function (l, v) {
					function y(I, _) {
						var O, z, re, he, W;
						for (O in I)
							(he = _e[O]),
								(re = he[0]),
								(z = he[1] || O),
								(W = this.convert(I[O], re)),
								_.call(this, z, W, re);
					}
					(l.init = function () {
						v.init.apply(this, arguments),
							this.current ||
								((this.current = {}),
								_e.perspective &&
									de.perspective &&
									((this.current.perspective = de.perspective),
									d(this.el, this.name, this.style(this.current)),
									this.redraw()));
					}),
						(l.set = function (I) {
							y.call(this, I, function (_, O) {
								this.current[_] = O;
							}),
								d(this.el, this.name, this.style(this.current)),
								this.redraw();
						}),
						(l.transition = function (I) {
							var _ = this.values(I);
							this.tween = new pt({
								current: this.current,
								values: _,
								duration: this.duration,
								delay: this.delay,
								ease: this.ease,
							});
							var O,
								z = {};
							for (O in this.current) z[O] = O in _ ? _[O] : this.current[O];
							(this.active = !0), (this.nextStyle = this.style(z));
						}),
						(l.fallback = function (I) {
							var _ = this.values(I);
							this.tween = new pt({
								current: this.current,
								values: _,
								duration: this.duration,
								delay: this.delay,
								ease: this.ease,
								update: this.update,
								context: this,
							});
						}),
						(l.update = function () {
							d(this.el, this.name, this.style(this.current));
						}),
						(l.style = function (I) {
							var _,
								O = "";
							for (_ in I) O += _ + "(" + I[_] + ") ";
							return O;
						}),
						(l.values = function (I) {
							var _,
								O = {};
							return (
								y.call(this, I, function (z, re, he) {
									(O[z] = re),
										this.current[z] === void 0 &&
											((_ = 0),
											~z.indexOf("scale") && (_ = 1),
											(this.current[z] = this.convert(_, he)));
								}),
								O
							);
						});
				}),
				J = p(function (l) {
					function v(W) {
						re.push(W) === 1 && P(y);
					}
					function y() {
						var W,
							se,
							le,
							be = re.length;
						if (be)
							for (P(y), se = H(), W = be; W--; )
								(le = re[W]), le && le.render(se);
					}
					function I(W) {
						var se,
							le = e.inArray(W, re);
						le >= 0 &&
							((se = re.slice(le + 1)),
							(re.length = le),
							se.length && (re = re.concat(se)));
					}
					function _(W) {
						return Math.round(W * he) / he;
					}
					function O(W, se, le) {
						return o(
							W[0] + le * (se[0] - W[0]),
							W[1] + le * (se[1] - W[1]),
							W[2] + le * (se[2] - W[2])
						);
					}
					var z = { ease: h.ease[1], from: 0, to: 1 };
					(l.init = function (W) {
						(this.duration = W.duration || 0), (this.delay = W.delay || 0);
						var se = W.ease || z.ease;
						h[se] && (se = h[se][1]),
							typeof se != "function" && (se = z.ease),
							(this.ease = se),
							(this.update = W.update || i),
							(this.complete = W.complete || i),
							(this.context = W.context || this),
							(this.name = W.name);
						var le = W.from,
							be = W.to;
						le === void 0 && (le = z.from),
							be === void 0 && (be = z.to),
							(this.unit = W.unit || ""),
							typeof le == "number" && typeof be == "number"
								? ((this.begin = le), (this.change = be - le))
								: this.format(be, le),
							(this.value = this.begin + this.unit),
							(this.start = H()),
							W.autoplay !== !1 && this.play();
					}),
						(l.play = function () {
							this.active ||
								(this.start || (this.start = H()), (this.active = !0), v(this));
						}),
						(l.stop = function () {
							this.active && ((this.active = !1), I(this));
						}),
						(l.render = function (W) {
							var se,
								le = W - this.start;
							if (this.delay) {
								if (le <= this.delay) return;
								le -= this.delay;
							}
							if (le < this.duration) {
								var be = this.ease(le, 0, 1, this.duration);
								return (
									(se = this.startRGB
										? O(this.startRGB, this.endRGB, be)
										: _(this.begin + be * this.change)),
									(this.value = se + this.unit),
									void this.update.call(this.context, this.value)
								);
							}
							(se = this.endHex || this.begin + this.change),
								(this.value = se + this.unit),
								this.update.call(this.context, this.value),
								this.complete.call(this.context),
								this.destroy();
						}),
						(l.format = function (W, se) {
							if (((se += ""), (W += ""), W.charAt(0) == "#"))
								return (
									(this.startRGB = n(se)),
									(this.endRGB = n(W)),
									(this.endHex = W),
									(this.begin = 0),
									void (this.change = 1)
								);
							if (!this.unit) {
								var le = se.replace(A, ""),
									be = W.replace(A, "");
								le !== be && s("tween", se, W), (this.unit = le);
							}
							(se = parseFloat(se)),
								(W = parseFloat(W)),
								(this.begin = this.value = se),
								(this.change = W - se);
						}),
						(l.destroy = function () {
							this.stop(),
								(this.context = null),
								(this.ease = this.update = this.complete = i);
						});
					var re = [],
						he = 1e3;
				}),
				Ee = p(J, function (l) {
					(l.init = function (v) {
						(this.duration = v.duration || 0),
							(this.complete = v.complete || i),
							(this.context = v.context),
							this.play();
					}),
						(l.render = function (v) {
							var y = v - this.start;
							y < this.duration ||
								(this.complete.call(this.context), this.destroy());
						});
				}),
				pt = p(J, function (l, v) {
					(l.init = function (y) {
						(this.context = y.context),
							(this.update = y.update),
							(this.tweens = []),
							(this.current = y.current);
						var I, _;
						for (I in y.values)
							(_ = y.values[I]),
								this.current[I] !== _ &&
									this.tweens.push(
										new J({
											name: I,
											from: this.current[I],
											to: _,
											duration: y.duration,
											delay: y.delay,
											ease: y.ease,
											autoplay: !1,
										})
									);
						this.play();
					}),
						(l.render = function (y) {
							var I,
								_,
								O = this.tweens.length,
								z = !1;
							for (I = O; I--; )
								(_ = this.tweens[I]),
									_.context &&
										(_.render(y), (this.current[_.name] = _.value), (z = !0));
							return z
								? void (this.update && this.update.call(this.context))
								: this.destroy();
						}),
						(l.destroy = function () {
							if ((v.destroy.call(this), this.tweens)) {
								var y,
									I = this.tweens.length;
								for (y = I; y--; ) this.tweens[y].destroy();
								(this.tweens = null), (this.current = null);
							}
						});
				}),
				de = (t.config = {
					debug: !1,
					defaultUnit: "px",
					defaultAngle: "deg",
					keepInherited: !1,
					hideBackface: !1,
					perspective: "",
					fallback: !X.transition,
					agentTests: [],
				});
			(t.fallback = function (l) {
				if (!X.transition) return (de.fallback = !0);
				de.agentTests.push("(" + l + ")");
				var v = new RegExp(de.agentTests.join("|"), "i");
				de.fallback = v.test(navigator.userAgent);
			}),
				t.fallback("6.0.[2-5] Safari"),
				(t.tween = function (l) {
					return new J(l);
				}),
				(t.delay = function (l, v, y) {
					return new Ee({ complete: v, duration: l, context: y });
				}),
				(e.fn.tram = function (l) {
					return t.call(null, this, l);
				});
			var d = e.style,
				V = e.css,
				K = { transform: X.transform && X.transform.css },
				B = {
					color: [Q, N],
					background: [Q, N, "background-color"],
					"outline-color": [Q, N],
					"border-color": [Q, N],
					"border-top-color": [Q, N],
					"border-right-color": [Q, N],
					"border-bottom-color": [Q, N],
					"border-left-color": [Q, N],
					"border-width": [F, C],
					"border-top-width": [F, C],
					"border-right-width": [F, C],
					"border-bottom-width": [F, C],
					"border-left-width": [F, C],
					"border-spacing": [F, C],
					"letter-spacing": [F, C],
					margin: [F, C],
					"margin-top": [F, C],
					"margin-right": [F, C],
					"margin-bottom": [F, C],
					"margin-left": [F, C],
					padding: [F, C],
					"padding-top": [F, C],
					"padding-right": [F, C],
					"padding-bottom": [F, C],
					"padding-left": [F, C],
					"outline-width": [F, C],
					opacity: [F, T],
					top: [F, q],
					right: [F, q],
					bottom: [F, q],
					left: [F, q],
					"font-size": [F, q],
					"text-indent": [F, q],
					"word-spacing": [F, q],
					width: [F, q],
					"min-width": [F, q],
					"max-width": [F, q],
					height: [F, q],
					"min-height": [F, q],
					"max-height": [F, q],
					"line-height": [F, k],
					"scroll-top": [ue, T, "scrollTop"],
					"scroll-left": [ue, T, "scrollLeft"],
				},
				_e = {};
			X.transform &&
				((B.transform = [ce]),
				(_e = {
					x: [q, "translateX"],
					y: [q, "translateY"],
					rotate: [G],
					rotateX: [G],
					rotateY: [G],
					scale: [T],
					scaleX: [T],
					scaleY: [T],
					skew: [G],
					skewX: [G],
					skewY: [G],
				})),
				X.transform &&
					X.backface &&
					((_e.z = [q, "translateZ"]),
					(_e.rotateZ = [G]),
					(_e.scaleZ = [T]),
					(_e.perspective = [C]));
			var Nt = /ms/,
				vt = /s|\./;
			return (e.tram = t);
		})(window.jQuery);
	});
	var ms = u((YW, ys) => {
		var Pm = window.$,
			Lm = Di() && Pm.tram;
		ys.exports = (function () {
			var e = {};
			e.VERSION = "1.6.0-Webflow";
			var t = {},
				r = Array.prototype,
				n = Object.prototype,
				o = Function.prototype,
				i = r.push,
				a = r.slice,
				s = r.concat,
				c = n.toString,
				f = n.hasOwnProperty,
				E = r.forEach,
				p = r.map,
				h = r.reduce,
				g = r.reduceRight,
				S = r.filter,
				b = r.every,
				x = r.some,
				A = r.indexOf,
				w = r.lastIndexOf,
				T = Array.isArray,
				N = Object.keys,
				C = o.bind,
				q =
					(e.each =
					e.forEach =
						function (m, L, M) {
							if (m == null) return m;
							if (E && m.forEach === E) m.forEach(L, M);
							else if (m.length === +m.length) {
								for (var X = 0, $ = m.length; X < $; X++)
									if (L.call(M, m[X], X, m) === t) return;
							} else
								for (var te = e.keys(m), X = 0, $ = te.length; X < $; X++)
									if (L.call(M, m[te[X]], te[X], m) === t) return;
							return m;
						});
			(e.map = e.collect =
				function (m, L, M) {
					var X = [];
					return m == null
						? X
						: p && m.map === p
						? m.map(L, M)
						: (q(m, function ($, te, P) {
								X.push(L.call(M, $, te, P));
						  }),
						  X);
				}),
				(e.find = e.detect =
					function (m, L, M) {
						var X;
						return (
							G(m, function ($, te, P) {
								if (L.call(M, $, te, P)) return (X = $), !0;
							}),
							X
						);
					}),
				(e.filter = e.select =
					function (m, L, M) {
						var X = [];
						return m == null
							? X
							: S && m.filter === S
							? m.filter(L, M)
							: (q(m, function ($, te, P) {
									L.call(M, $, te, P) && X.push($);
							  }),
							  X);
					});
			var G =
				(e.some =
				e.any =
					function (m, L, M) {
						L || (L = e.identity);
						var X = !1;
						return m == null
							? X
							: x && m.some === x
							? m.some(L, M)
							: (q(m, function ($, te, P) {
									if (X || (X = L.call(M, $, te, P))) return t;
							  }),
							  !!X);
					});
			(e.contains = e.include =
				function (m, L) {
					return m == null
						? !1
						: A && m.indexOf === A
						? m.indexOf(L) != -1
						: G(m, function (M) {
								return M === L;
						  });
				}),
				(e.delay = function (m, L) {
					var M = a.call(arguments, 2);
					return setTimeout(function () {
						return m.apply(null, M);
					}, L);
				}),
				(e.defer = function (m) {
					return e.delay.apply(e, [m, 1].concat(a.call(arguments, 1)));
				}),
				(e.throttle = function (m) {
					var L, M, X;
					return function () {
						L ||
							((L = !0),
							(M = arguments),
							(X = this),
							Lm.frame(function () {
								(L = !1), m.apply(X, M);
							}));
					};
				}),
				(e.debounce = function (m, L, M) {
					var X,
						$,
						te,
						P,
						H,
						j = function () {
							var U = e.now() - P;
							U < L
								? (X = setTimeout(j, L - U))
								: ((X = null), M || ((H = m.apply(te, $)), (te = $ = null)));
						};
					return function () {
						(te = this), ($ = arguments), (P = e.now());
						var U = M && !X;
						return (
							X || (X = setTimeout(j, L)),
							U && ((H = m.apply(te, $)), (te = $ = null)),
							H
						);
					};
				}),
				(e.defaults = function (m) {
					if (!e.isObject(m)) return m;
					for (var L = 1, M = arguments.length; L < M; L++) {
						var X = arguments[L];
						for (var $ in X) m[$] === void 0 && (m[$] = X[$]);
					}
					return m;
				}),
				(e.keys = function (m) {
					if (!e.isObject(m)) return [];
					if (N) return N(m);
					var L = [];
					for (var M in m) e.has(m, M) && L.push(M);
					return L;
				}),
				(e.has = function (m, L) {
					return f.call(m, L);
				}),
				(e.isObject = function (m) {
					return m === Object(m);
				}),
				(e.now =
					Date.now ||
					function () {
						return new Date().getTime();
					}),
				(e.templateSettings = {
					evaluate: /<%([\s\S]+?)%>/g,
					interpolate: /<%=([\s\S]+?)%>/g,
					escape: /<%-([\s\S]+?)%>/g,
				});
			var k = /(.)^/,
				Y = {
					"'": "'",
					"\\": "\\",
					"\r": "r",
					"\n": "n",
					"\u2028": "u2028",
					"\u2029": "u2029",
				},
				ie = /\\|'|\r|\n|\u2028|\u2029/g,
				ee = function (m) {
					return "\\" + Y[m];
				},
				D = /^\s*(\w|\$)+\s*$/;
			return (
				(e.template = function (m, L, M) {
					!L && M && (L = M), (L = e.defaults({}, L, e.templateSettings));
					var X = RegExp(
							[
								(L.escape || k).source,
								(L.interpolate || k).source,
								(L.evaluate || k).source,
							].join("|") + "|$",
							"g"
						),
						$ = 0,
						te = "__p+='";
					m.replace(X, function (U, F, Q, ue, ce) {
						return (
							(te += m.slice($, ce).replace(ie, ee)),
							($ = ce + U.length),
							F
								? (te +=
										`'+
((__t=(` +
										F +
										`))==null?'':_.escape(__t))+
'`)
								: Q
								? (te +=
										`'+
((__t=(` +
										Q +
										`))==null?'':__t)+
'`)
								: ue &&
								  (te +=
										`';
` +
										ue +
										`
__p+='`),
							U
						);
					}),
						(te += `';
`);
					var P = L.variable;
					if (P) {
						if (!D.test(P))
							throw new Error("variable is not a bare identifier: " + P);
					} else
						(te =
							`with(obj||{}){
` +
							te +
							`}
`),
							(P = "obj");
					te =
						`var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` +
						te +
						`return __p;
`;
					var H;
					try {
						H = new Function(L.variable || "obj", "_", te);
					} catch (U) {
						throw ((U.source = te), U);
					}
					var j = function (U) {
						return H.call(this, U, e);
					};
					return (
						(j.source =
							"function(" +
							P +
							`){
` +
							te +
							"}"),
						j
					);
				}),
				e
			);
		})();
	});
	var Be = u(($W, Rs) => {
		var ve = {},
			jt = {},
			kt = [],
			Fi = window.Webflow || [],
			yt = window.jQuery,
			Ye = yt(window),
			Dm = yt(document),
			nt = yt.isFunction,
			ze = (ve._ = ms()),
			Is = (ve.tram = Di() && yt.tram),
			cn = !1,
			Gi = !1;
		Is.config.hideBackface = !1;
		Is.config.keepInherited = !0;
		ve.define = function (e, t, r) {
			jt[e] && bs(jt[e]);
			var n = (jt[e] = t(yt, ze, r) || {});
			return Os(n), n;
		};
		ve.require = function (e) {
			return jt[e];
		};
		function Os(e) {
			ve.env() &&
				(nt(e.design) && Ye.on("__wf_design", e.design),
				nt(e.preview) && Ye.on("__wf_preview", e.preview)),
				nt(e.destroy) && Ye.on("__wf_destroy", e.destroy),
				e.ready && nt(e.ready) && Mm(e);
		}
		function Mm(e) {
			if (cn) {
				e.ready();
				return;
			}
			ze.contains(kt, e.ready) || kt.push(e.ready);
		}
		function bs(e) {
			nt(e.design) && Ye.off("__wf_design", e.design),
				nt(e.preview) && Ye.off("__wf_preview", e.preview),
				nt(e.destroy) && Ye.off("__wf_destroy", e.destroy),
				e.ready && nt(e.ready) && Fm(e);
		}
		function Fm(e) {
			kt = ze.filter(kt, function (t) {
				return t !== e.ready;
			});
		}
		ve.push = function (e) {
			if (cn) {
				nt(e) && e();
				return;
			}
			Fi.push(e);
		};
		ve.env = function (e) {
			var t = window.__wf_design,
				r = typeof t < "u";
			if (!e) return r;
			if (e === "design") return r && t;
			if (e === "preview") return r && !t;
			if (e === "slug") return r && window.__wf_slug;
			if (e === "editor") return window.WebflowEditor;
			if (e === "test") return window.__wf_test;
			if (e === "frame") return window !== window.top;
		};
		var un = navigator.userAgent.toLowerCase(),
			Ss = (ve.env.touch =
				"ontouchstart" in window ||
				(window.DocumentTouch && document instanceof window.DocumentTouch)),
			Gm = (ve.env.chrome =
				/chrome/.test(un) &&
				/Google/.test(navigator.vendor) &&
				parseInt(un.match(/chrome\/(\d+)\./)[1], 10)),
			Xm = (ve.env.ios = /(ipod|iphone|ipad)/.test(un));
		ve.env.safari = /safari/.test(un) && !Gm && !Xm;
		var Mi;
		Ss &&
			Dm.on("touchstart mousedown", function (e) {
				Mi = e.target;
			});
		ve.validClick = Ss
			? function (e) {
					return e === Mi || yt.contains(e, Mi);
			  }
			: function () {
					return !0;
			  };
		var As = "resize.webflow orientationchange.webflow load.webflow",
			Um = "scroll.webflow " + As;
		ve.resize = Xi(Ye, As);
		ve.scroll = Xi(Ye, Um);
		ve.redraw = Xi();
		function Xi(e, t) {
			var r = [],
				n = {};
			return (
				(n.up = ze.throttle(function (o) {
					ze.each(r, function (i) {
						i(o);
					});
				})),
				e && t && e.on(t, n.up),
				(n.on = function (o) {
					typeof o == "function" && (ze.contains(r, o) || r.push(o));
				}),
				(n.off = function (o) {
					if (!arguments.length) {
						r = [];
						return;
					}
					r = ze.filter(r, function (i) {
						return i !== o;
					});
				}),
				n
			);
		}
		ve.location = function (e) {
			window.location = e;
		};
		ve.env() && (ve.location = function () {});
		ve.ready = function () {
			(cn = !0), Gi ? Vm() : ze.each(kt, Ts), ze.each(Fi, Ts), ve.resize.up();
		};
		function Ts(e) {
			nt(e) && e();
		}
		function Vm() {
			(Gi = !1), ze.each(jt, Os);
		}
		var qt;
		ve.load = function (e) {
			qt.then(e);
		};
		function ws() {
			qt && (qt.reject(), Ye.off("load", qt.resolve)),
				(qt = new yt.Deferred()),
				Ye.on("load", qt.resolve);
		}
		ve.destroy = function (e) {
			(e = e || {}),
				(Gi = !0),
				Ye.triggerHandler("__wf_destroy"),
				e.domready != null && (cn = e.domready),
				ze.each(jt, bs),
				ve.resize.off(),
				ve.scroll.off(),
				ve.redraw.off(),
				(kt = []),
				(Fi = []),
				qt.state() === "pending" && ws();
		};
		yt(ve.ready);
		ws();
		Rs.exports = window.Webflow = ve;
	});
	var qs = u((QW, Ns) => {
		var Cs = Be();
		Cs.define(
			"brand",
			(Ns.exports = function (e) {
				var t = {},
					r = document,
					n = e("html"),
					o = e("body"),
					i = ".w-webflow-badge",
					a = window.location,
					s = /PhantomJS/i.test(navigator.userAgent),
					c =
						"fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
					f;
				t.ready = function () {
					var g = n.attr("data-wf-status"),
						S = n.attr("data-wf-domain") || "";
					/\.webflow\.io$/i.test(S) && a.hostname !== S && (g = !0),
						g &&
							!s &&
							((f = f || p()),
							h(),
							setTimeout(h, 500),
							e(r).off(c, E).on(c, E));
				};
				function E() {
					var g =
						r.fullScreen ||
						r.mozFullScreen ||
						r.webkitIsFullScreen ||
						r.msFullscreenElement ||
						!!r.webkitFullscreenElement;
					e(f).attr("style", g ? "display: none !important;" : "");
				}
				function p() {}
				function h() {
					var g = o.children(i),
						S = g.length && g.get(0) === f,
						b = Cs.env("editor");
					if (S) {
						b && g.remove();
						return;
					}
					g.length && g.remove(), b || o.append(f);
				}
				return t;
			})
		);
	});
	var Ps = u((ZW, xs) => {
		var Ui = Be();
		Ui.define(
			"edit",
			(xs.exports = function (e, t, r) {
				if (
					((r = r || {}),
					(Ui.env("test") || Ui.env("frame")) && !r.fixture && !Wm())
				)
					return { exit: 1 };
				var n = {},
					o = e(window),
					i = e(document.documentElement),
					a = document.location,
					s = "hashchange",
					c,
					f = r.load || h,
					E = !1;
				try {
					E =
						localStorage &&
						localStorage.getItem &&
						localStorage.getItem("WebflowEditor");
				} catch {}
				E
					? f()
					: a.search
					? (/[?&](edit)(?:[=&?]|$)/.test(a.search) ||
							/\?edit$/.test(a.href)) &&
					  f()
					: o.on(s, p).triggerHandler(s);
				function p() {
					c || (/\?edit/.test(a.hash) && f());
				}
				function h() {
					(c = !0),
						(window.WebflowEditor = !0),
						o.off(s, p),
						w(function (N) {
							e.ajax({
								url: A("https://editor-api.webflow.com/api/editor/view"),
								data: { siteId: i.attr("data-wf-site") },
								xhrFields: { withCredentials: !0 },
								dataType: "json",
								crossDomain: !0,
								success: g(N),
							});
						});
				}
				function g(N) {
					return function (C) {
						if (!C) {
							console.error("Could not load editor data");
							return;
						}
						(C.thirdPartyCookiesSupported = N),
							S(x(C.bugReporterScriptPath), function () {
								S(x(C.scriptPath), function () {
									window.WebflowEditor(C);
								});
							});
					};
				}
				function S(N, C) {
					e.ajax({ type: "GET", url: N, dataType: "script", cache: !0 }).then(
						C,
						b
					);
				}
				function b(N, C, q) {
					throw (console.error("Could not load editor script: " + C), q);
				}
				function x(N) {
					return N.indexOf("//") >= 0
						? N
						: A("https://editor-api.webflow.com" + N);
				}
				function A(N) {
					return N.replace(/([^:])\/\//g, "$1/");
				}
				function w(N) {
					var C = window.document.createElement("iframe");
					(C.src = "https://webflow.com/site/third-party-cookie-check.html"),
						(C.style.display = "none"),
						(C.sandbox = "allow-scripts allow-same-origin");
					var q = function (G) {
						G.data === "WF_third_party_cookies_unsupported"
							? (T(C, q), N(!1))
							: G.data === "WF_third_party_cookies_supported" &&
							  (T(C, q), N(!0));
					};
					(C.onerror = function () {
						T(C, q), N(!1);
					}),
						window.addEventListener("message", q, !1),
						window.document.body.appendChild(C);
				}
				function T(N, C) {
					window.removeEventListener("message", C, !1), N.remove();
				}
				return n;
			})
		);
		function Wm() {
			try {
				return window.top.__Cypress__;
			} catch {
				return !1;
			}
		}
	});
	var Ds = u((JW, Ls) => {
		var Bm = Be();
		Bm.define(
			"focus-visible",
			(Ls.exports = function () {
				function e(r) {
					var n = !0,
						o = !1,
						i = null,
						a = {
							text: !0,
							search: !0,
							url: !0,
							tel: !0,
							email: !0,
							password: !0,
							number: !0,
							date: !0,
							month: !0,
							week: !0,
							time: !0,
							datetime: !0,
							"datetime-local": !0,
						};
					function s(T) {
						return !!(
							T &&
							T !== document &&
							T.nodeName !== "HTML" &&
							T.nodeName !== "BODY" &&
							"classList" in T &&
							"contains" in T.classList
						);
					}
					function c(T) {
						var N = T.type,
							C = T.tagName;
						return !!(
							(C === "INPUT" && a[N] && !T.readOnly) ||
							(C === "TEXTAREA" && !T.readOnly) ||
							T.isContentEditable
						);
					}
					function f(T) {
						T.getAttribute("data-wf-focus-visible") ||
							T.setAttribute("data-wf-focus-visible", "true");
					}
					function E(T) {
						T.getAttribute("data-wf-focus-visible") &&
							T.removeAttribute("data-wf-focus-visible");
					}
					function p(T) {
						T.metaKey ||
							T.altKey ||
							T.ctrlKey ||
							(s(r.activeElement) && f(r.activeElement), (n = !0));
					}
					function h() {
						n = !1;
					}
					function g(T) {
						s(T.target) && (n || c(T.target)) && f(T.target);
					}
					function S(T) {
						s(T.target) &&
							T.target.hasAttribute("data-wf-focus-visible") &&
							((o = !0),
							window.clearTimeout(i),
							(i = window.setTimeout(function () {
								o = !1;
							}, 100)),
							E(T.target));
					}
					function b() {
						document.visibilityState === "hidden" && (o && (n = !0), x());
					}
					function x() {
						document.addEventListener("mousemove", w),
							document.addEventListener("mousedown", w),
							document.addEventListener("mouseup", w),
							document.addEventListener("pointermove", w),
							document.addEventListener("pointerdown", w),
							document.addEventListener("pointerup", w),
							document.addEventListener("touchmove", w),
							document.addEventListener("touchstart", w),
							document.addEventListener("touchend", w);
					}
					function A() {
						document.removeEventListener("mousemove", w),
							document.removeEventListener("mousedown", w),
							document.removeEventListener("mouseup", w),
							document.removeEventListener("pointermove", w),
							document.removeEventListener("pointerdown", w),
							document.removeEventListener("pointerup", w),
							document.removeEventListener("touchmove", w),
							document.removeEventListener("touchstart", w),
							document.removeEventListener("touchend", w);
					}
					function w(T) {
						(T.target.nodeName && T.target.nodeName.toLowerCase() === "html") ||
							((n = !1), A());
					}
					document.addEventListener("keydown", p, !0),
						document.addEventListener("mousedown", h, !0),
						document.addEventListener("pointerdown", h, !0),
						document.addEventListener("touchstart", h, !0),
						document.addEventListener("visibilitychange", b, !0),
						x(),
						r.addEventListener("focus", g, !0),
						r.addEventListener("blur", S, !0);
				}
				function t() {
					if (typeof document < "u")
						try {
							document.querySelector(":focus-visible");
						} catch {
							e(document);
						}
				}
				return { ready: t };
			})
		);
	});
	var Fs = u((eB, Ms) => {
		var Hm = Be();
		Hm.define(
			"focus-within",
			(Ms.exports = function () {
				function e(i) {
					for (
						var a = [i], s = null;
						(s = i.parentNode || i.host || i.defaultView);

					)
						a.push(s), (i = s);
					return a;
				}
				function t(i) {
					typeof i.getAttribute != "function" ||
						i.getAttribute("data-wf-focus-within") ||
						i.setAttribute("data-wf-focus-within", "true");
				}
				function r(i) {
					typeof i.getAttribute != "function" ||
						!i.getAttribute("data-wf-focus-within") ||
						i.removeAttribute("data-wf-focus-within");
				}
				function n() {
					var i = function (a) {
						var s;
						function c() {
							(s = !1),
								a.type === "blur" &&
									Array.prototype.slice.call(e(a.target)).forEach(r),
								a.type === "focus" &&
									Array.prototype.slice.call(e(a.target)).forEach(t);
						}
						s || (window.requestAnimationFrame(c), (s = !0));
					};
					return (
						document.addEventListener("focus", i, !0),
						document.addEventListener("blur", i, !0),
						t(document.body),
						!0
					);
				}
				function o() {
					if (
						typeof document < "u" &&
						document.body.hasAttribute("data-wf-focus-within")
					)
						try {
							document.querySelector(":focus-within");
						} catch {
							n();
						}
				}
				return { ready: o };
			})
		);
	});
	var Us = u((tB, Xs) => {
		var Gs = Be();
		Gs.define(
			"focus",
			(Xs.exports = function () {
				var e = [],
					t = !1;
				function r(a) {
					t &&
						(a.preventDefault(),
						a.stopPropagation(),
						a.stopImmediatePropagation(),
						e.unshift(a));
				}
				function n(a) {
					var s = a.target,
						c = s.tagName;
					return (
						(/^a$/i.test(c) && s.href != null) ||
						(/^(button|textarea)$/i.test(c) && s.disabled !== !0) ||
						(/^input$/i.test(c) &&
							/^(button|reset|submit|radio|checkbox)$/i.test(s.type) &&
							!s.disabled) ||
						(!/^(button|input|textarea|select|a)$/i.test(c) &&
							!Number.isNaN(Number.parseFloat(s.tabIndex))) ||
						/^audio$/i.test(c) ||
						(/^video$/i.test(c) && s.controls === !0)
					);
				}
				function o(a) {
					n(a) &&
						((t = !0),
						setTimeout(() => {
							for (t = !1, a.target.focus(); e.length > 0; ) {
								var s = e.pop();
								s.target.dispatchEvent(new MouseEvent(s.type, s));
							}
						}, 0));
				}
				function i() {
					typeof document < "u" &&
						document.body.hasAttribute("data-wf-focus-within") &&
						Gs.env.safari &&
						(document.addEventListener("mousedown", o, !0),
						document.addEventListener("mouseup", r, !0),
						document.addEventListener("click", r, !0));
				}
				return { ready: i };
			})
		);
	});
	var Bs = u((rB, Ws) => {
		"use strict";
		var Vi = window.jQuery,
			it = {},
			ln = [],
			Vs = ".w-ix",
			fn = {
				reset: function (e, t) {
					t.__wf_intro = null;
				},
				intro: function (e, t) {
					t.__wf_intro ||
						((t.__wf_intro = !0), Vi(t).triggerHandler(it.types.INTRO));
				},
				outro: function (e, t) {
					t.__wf_intro &&
						((t.__wf_intro = null), Vi(t).triggerHandler(it.types.OUTRO));
				},
			};
		it.triggers = {};
		it.types = { INTRO: "w-ix-intro" + Vs, OUTRO: "w-ix-outro" + Vs };
		it.init = function () {
			for (var e = ln.length, t = 0; t < e; t++) {
				var r = ln[t];
				r[0](0, r[1]);
			}
			(ln = []), Vi.extend(it.triggers, fn);
		};
		it.async = function () {
			for (var e in fn) {
				var t = fn[e];
				fn.hasOwnProperty(e) &&
					(it.triggers[e] = function (r, n) {
						ln.push([t, n]);
					});
			}
		};
		it.async();
		Ws.exports = it;
	});
	var Bi = u((nB, ks) => {
		"use strict";
		var Wi = Bs();
		function Hs(e, t) {
			var r = document.createEvent("CustomEvent");
			r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r);
		}
		var jm = window.jQuery,
			dn = {},
			js = ".w-ix",
			km = {
				reset: function (e, t) {
					Wi.triggers.reset(e, t);
				},
				intro: function (e, t) {
					Wi.triggers.intro(e, t), Hs(t, "COMPONENT_ACTIVE");
				},
				outro: function (e, t) {
					Wi.triggers.outro(e, t), Hs(t, "COMPONENT_INACTIVE");
				},
			};
		dn.triggers = {};
		dn.types = { INTRO: "w-ix-intro" + js, OUTRO: "w-ix-outro" + js };
		jm.extend(dn.triggers, km);
		ks.exports = dn;
	});
	var Ks = u((iB, Et) => {
		function Hi(e) {
			return (
				(Et.exports = Hi =
					typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
						? function (t) {
								return typeof t;
						  }
						: function (t) {
								return t &&
									typeof Symbol == "function" &&
									t.constructor === Symbol &&
									t !== Symbol.prototype
									? "symbol"
									: typeof t;
						  }),
				(Et.exports.__esModule = !0),
				(Et.exports.default = Et.exports),
				Hi(e)
			);
		}
		(Et.exports = Hi),
			(Et.exports.__esModule = !0),
			(Et.exports.default = Et.exports);
	});
	var Kt = u((oB, Or) => {
		var Km = Ks().default;
		function zs(e) {
			if (typeof WeakMap != "function") return null;
			var t = new WeakMap(),
				r = new WeakMap();
			return (zs = function (o) {
				return o ? r : t;
			})(e);
		}
		function zm(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || (Km(e) !== "object" && typeof e != "function"))
				return { default: e };
			var r = zs(t);
			if (r && r.has(e)) return r.get(e);
			var n = {},
				o = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var i in e)
				if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
					var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
					a && (a.get || a.set)
						? Object.defineProperty(n, i, a)
						: (n[i] = e[i]);
				}
			return (n.default = e), r && r.set(e, n), n;
		}
		(Or.exports = zm),
			(Or.exports.__esModule = !0),
			(Or.exports.default = Or.exports);
	});
	var ot = u((aB, br) => {
		function Ym(e) {
			return e && e.__esModule ? e : { default: e };
		}
		(br.exports = Ym),
			(br.exports.__esModule = !0),
			(br.exports.default = br.exports);
	});
	var me = u((sB, Ys) => {
		var pn = function (e) {
			return e && e.Math == Math && e;
		};
		Ys.exports =
			pn(typeof globalThis == "object" && globalThis) ||
			pn(typeof window == "object" && window) ||
			pn(typeof self == "object" && self) ||
			pn(typeof global == "object" && global) ||
			(function () {
				return this;
			})() ||
			Function("return this")();
	});
	var zt = u((uB, $s) => {
		$s.exports = function (e) {
			try {
				return !!e();
			} catch {
				return !0;
			}
		};
	});
	var xt = u((cB, Qs) => {
		var $m = zt();
		Qs.exports = !$m(function () {
			return (
				Object.defineProperty({}, 1, {
					get: function () {
						return 7;
					},
				})[1] != 7
			);
		});
	});
	var vn = u((lB, Zs) => {
		var Sr = Function.prototype.call;
		Zs.exports = Sr.bind
			? Sr.bind(Sr)
			: function () {
					return Sr.apply(Sr, arguments);
			  };
	});
	var ru = u((tu) => {
		"use strict";
		var Js = {}.propertyIsEnumerable,
			eu = Object.getOwnPropertyDescriptor,
			Qm = eu && !Js.call({ 1: 2 }, 1);
		tu.f = Qm
			? function (t) {
					var r = eu(this, t);
					return !!r && r.enumerable;
			  }
			: Js;
	});
	var ji = u((dB, nu) => {
		nu.exports = function (e, t) {
			return {
				enumerable: !(e & 1),
				configurable: !(e & 2),
				writable: !(e & 4),
				value: t,
			};
		};
	});
	var $e = u((pB, ou) => {
		var iu = Function.prototype,
			ki = iu.bind,
			Ki = iu.call,
			Zm = ki && ki.bind(Ki);
		ou.exports = ki
			? function (e) {
					return e && Zm(Ki, e);
			  }
			: function (e) {
					return (
						e &&
						function () {
							return Ki.apply(e, arguments);
						}
					);
			  };
	});
	var uu = u((vB, su) => {
		var au = $e(),
			Jm = au({}.toString),
			eT = au("".slice);
		su.exports = function (e) {
			return eT(Jm(e), 8, -1);
		};
	});
	var lu = u((EB, cu) => {
		var tT = me(),
			rT = $e(),
			nT = zt(),
			iT = uu(),
			zi = tT.Object,
			oT = rT("".split);
		cu.exports = nT(function () {
			return !zi("z").propertyIsEnumerable(0);
		})
			? function (e) {
					return iT(e) == "String" ? oT(e, "") : zi(e);
			  }
			: zi;
	});
	var Yi = u((hB, fu) => {
		var aT = me(),
			sT = aT.TypeError;
		fu.exports = function (e) {
			if (e == null) throw sT("Can't call method on " + e);
			return e;
		};
	});
	var Ar = u((gB, du) => {
		var uT = lu(),
			cT = Yi();
		du.exports = function (e) {
			return uT(cT(e));
		};
	});
	var at = u((_B, pu) => {
		pu.exports = function (e) {
			return typeof e == "function";
		};
	});
	var Yt = u((yB, vu) => {
		var lT = at();
		vu.exports = function (e) {
			return typeof e == "object" ? e !== null : lT(e);
		};
	});
	var wr = u((mB, Eu) => {
		var $i = me(),
			fT = at(),
			dT = function (e) {
				return fT(e) ? e : void 0;
			};
		Eu.exports = function (e, t) {
			return arguments.length < 2 ? dT($i[e]) : $i[e] && $i[e][t];
		};
	});
	var gu = u((TB, hu) => {
		var pT = $e();
		hu.exports = pT({}.isPrototypeOf);
	});
	var yu = u((IB, _u) => {
		var vT = wr();
		_u.exports = vT("navigator", "userAgent") || "";
	});
	var Au = u((OB, Su) => {
		var bu = me(),
			Qi = yu(),
			mu = bu.process,
			Tu = bu.Deno,
			Iu = (mu && mu.versions) || (Tu && Tu.version),
			Ou = Iu && Iu.v8,
			Qe,
			En;
		Ou &&
			((Qe = Ou.split(".")),
			(En = Qe[0] > 0 && Qe[0] < 4 ? 1 : +(Qe[0] + Qe[1])));
		!En &&
			Qi &&
			((Qe = Qi.match(/Edge\/(\d+)/)),
			(!Qe || Qe[1] >= 74) &&
				((Qe = Qi.match(/Chrome\/(\d+)/)), Qe && (En = +Qe[1])));
		Su.exports = En;
	});
	var Zi = u((bB, Ru) => {
		var wu = Au(),
			ET = zt();
		Ru.exports =
			!!Object.getOwnPropertySymbols &&
			!ET(function () {
				var e = Symbol();
				return (
					!String(e) ||
					!(Object(e) instanceof Symbol) ||
					(!Symbol.sham && wu && wu < 41)
				);
			});
	});
	var Ji = u((SB, Cu) => {
		var hT = Zi();
		Cu.exports = hT && !Symbol.sham && typeof Symbol.iterator == "symbol";
	});
	var eo = u((AB, Nu) => {
		var gT = me(),
			_T = wr(),
			yT = at(),
			mT = gu(),
			TT = Ji(),
			IT = gT.Object;
		Nu.exports = TT
			? function (e) {
					return typeof e == "symbol";
			  }
			: function (e) {
					var t = _T("Symbol");
					return yT(t) && mT(t.prototype, IT(e));
			  };
	});
	var xu = u((wB, qu) => {
		var OT = me(),
			bT = OT.String;
		qu.exports = function (e) {
			try {
				return bT(e);
			} catch {
				return "Object";
			}
		};
	});
	var Lu = u((RB, Pu) => {
		var ST = me(),
			AT = at(),
			wT = xu(),
			RT = ST.TypeError;
		Pu.exports = function (e) {
			if (AT(e)) return e;
			throw RT(wT(e) + " is not a function");
		};
	});
	var Mu = u((CB, Du) => {
		var CT = Lu();
		Du.exports = function (e, t) {
			var r = e[t];
			return r == null ? void 0 : CT(r);
		};
	});
	var Gu = u((NB, Fu) => {
		var NT = me(),
			to = vn(),
			ro = at(),
			no = Yt(),
			qT = NT.TypeError;
		Fu.exports = function (e, t) {
			var r, n;
			if (
				(t === "string" && ro((r = e.toString)) && !no((n = to(r, e)))) ||
				(ro((r = e.valueOf)) && !no((n = to(r, e)))) ||
				(t !== "string" && ro((r = e.toString)) && !no((n = to(r, e))))
			)
				return n;
			throw qT("Can't convert object to primitive value");
		};
	});
	var Uu = u((qB, Xu) => {
		Xu.exports = !1;
	});
	var hn = u((xB, Wu) => {
		var Vu = me(),
			xT = Object.defineProperty;
		Wu.exports = function (e, t) {
			try {
				xT(Vu, e, { value: t, configurable: !0, writable: !0 });
			} catch {
				Vu[e] = t;
			}
			return t;
		};
	});
	var gn = u((PB, Hu) => {
		var PT = me(),
			LT = hn(),
			Bu = "__core-js_shared__",
			DT = PT[Bu] || LT(Bu, {});
		Hu.exports = DT;
	});
	var io = u((LB, ku) => {
		var MT = Uu(),
			ju = gn();
		(ku.exports = function (e, t) {
			return ju[e] || (ju[e] = t !== void 0 ? t : {});
		})("versions", []).push({
			version: "3.19.0",
			mode: MT ? "pure" : "global",
			copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)",
		});
	});
	var zu = u((DB, Ku) => {
		var FT = me(),
			GT = Yi(),
			XT = FT.Object;
		Ku.exports = function (e) {
			return XT(GT(e));
		};
	});
	var mt = u((MB, Yu) => {
		var UT = $e(),
			VT = zu(),
			WT = UT({}.hasOwnProperty);
		Yu.exports =
			Object.hasOwn ||
			function (t, r) {
				return WT(VT(t), r);
			};
	});
	var oo = u((FB, $u) => {
		var BT = $e(),
			HT = 0,
			jT = Math.random(),
			kT = BT((1).toString);
		$u.exports = function (e) {
			return "Symbol(" + (e === void 0 ? "" : e) + ")_" + kT(++HT + jT, 36);
		};
	});
	var ao = u((GB, tc) => {
		var KT = me(),
			zT = io(),
			Qu = mt(),
			YT = oo(),
			Zu = Zi(),
			ec = Ji(),
			$t = zT("wks"),
			Pt = KT.Symbol,
			Ju = Pt && Pt.for,
			$T = ec ? Pt : (Pt && Pt.withoutSetter) || YT;
		tc.exports = function (e) {
			if (!Qu($t, e) || !(Zu || typeof $t[e] == "string")) {
				var t = "Symbol." + e;
				Zu && Qu(Pt, e)
					? ($t[e] = Pt[e])
					: ec && Ju
					? ($t[e] = Ju(t))
					: ($t[e] = $T(t));
			}
			return $t[e];
		};
	});
	var oc = u((XB, ic) => {
		var QT = me(),
			ZT = vn(),
			rc = Yt(),
			nc = eo(),
			JT = Mu(),
			eI = Gu(),
			tI = ao(),
			rI = QT.TypeError,
			nI = tI("toPrimitive");
		ic.exports = function (e, t) {
			if (!rc(e) || nc(e)) return e;
			var r = JT(e, nI),
				n;
			if (r) {
				if (
					(t === void 0 && (t = "default"), (n = ZT(r, e, t)), !rc(n) || nc(n))
				)
					return n;
				throw rI("Can't convert object to primitive value");
			}
			return t === void 0 && (t = "number"), eI(e, t);
		};
	});
	var so = u((UB, ac) => {
		var iI = oc(),
			oI = eo();
		ac.exports = function (e) {
			var t = iI(e, "string");
			return oI(t) ? t : t + "";
		};
	});
	var co = u((VB, uc) => {
		var aI = me(),
			sc = Yt(),
			uo = aI.document,
			sI = sc(uo) && sc(uo.createElement);
		uc.exports = function (e) {
			return sI ? uo.createElement(e) : {};
		};
	});
	var lo = u((WB, cc) => {
		var uI = xt(),
			cI = zt(),
			lI = co();
		cc.exports =
			!uI &&
			!cI(function () {
				return (
					Object.defineProperty(lI("div"), "a", {
						get: function () {
							return 7;
						},
					}).a != 7
				);
			});
	});
	var fo = u((fc) => {
		var fI = xt(),
			dI = vn(),
			pI = ru(),
			vI = ji(),
			EI = Ar(),
			hI = so(),
			gI = mt(),
			_I = lo(),
			lc = Object.getOwnPropertyDescriptor;
		fc.f = fI
			? lc
			: function (t, r) {
					if (((t = EI(t)), (r = hI(r)), _I))
						try {
							return lc(t, r);
						} catch {}
					if (gI(t, r)) return vI(!dI(pI.f, t, r), t[r]);
			  };
	});
	var Rr = u((HB, pc) => {
		var dc = me(),
			yI = Yt(),
			mI = dc.String,
			TI = dc.TypeError;
		pc.exports = function (e) {
			if (yI(e)) return e;
			throw TI(mI(e) + " is not an object");
		};
	});
	var Cr = u((hc) => {
		var II = me(),
			OI = xt(),
			bI = lo(),
			vc = Rr(),
			SI = so(),
			AI = II.TypeError,
			Ec = Object.defineProperty;
		hc.f = OI
			? Ec
			: function (t, r, n) {
					if ((vc(t), (r = SI(r)), vc(n), bI))
						try {
							return Ec(t, r, n);
						} catch {}
					if ("get" in n || "set" in n) throw AI("Accessors not supported");
					return "value" in n && (t[r] = n.value), t;
			  };
	});
	var _n = u((kB, gc) => {
		var wI = xt(),
			RI = Cr(),
			CI = ji();
		gc.exports = wI
			? function (e, t, r) {
					return RI.f(e, t, CI(1, r));
			  }
			: function (e, t, r) {
					return (e[t] = r), e;
			  };
	});
	var vo = u((KB, _c) => {
		var NI = $e(),
			qI = at(),
			po = gn(),
			xI = NI(Function.toString);
		qI(po.inspectSource) ||
			(po.inspectSource = function (e) {
				return xI(e);
			});
		_c.exports = po.inspectSource;
	});
	var Tc = u((zB, mc) => {
		var PI = me(),
			LI = at(),
			DI = vo(),
			yc = PI.WeakMap;
		mc.exports = LI(yc) && /native code/.test(DI(yc));
	});
	var Eo = u((YB, Oc) => {
		var MI = io(),
			FI = oo(),
			Ic = MI("keys");
		Oc.exports = function (e) {
			return Ic[e] || (Ic[e] = FI(e));
		};
	});
	var yn = u(($B, bc) => {
		bc.exports = {};
	});
	var Nc = u((QB, Cc) => {
		var GI = Tc(),
			Rc = me(),
			ho = $e(),
			XI = Yt(),
			UI = _n(),
			go = mt(),
			_o = gn(),
			VI = Eo(),
			WI = yn(),
			Sc = "Object already initialized",
			mo = Rc.TypeError,
			BI = Rc.WeakMap,
			mn,
			Nr,
			Tn,
			HI = function (e) {
				return Tn(e) ? Nr(e) : mn(e, {});
			},
			jI = function (e) {
				return function (t) {
					var r;
					if (!XI(t) || (r = Nr(t)).type !== e)
						throw mo("Incompatible receiver, " + e + " required");
					return r;
				};
			};
		GI || _o.state
			? ((Tt = _o.state || (_o.state = new BI())),
			  (Ac = ho(Tt.get)),
			  (yo = ho(Tt.has)),
			  (wc = ho(Tt.set)),
			  (mn = function (e, t) {
					if (yo(Tt, e)) throw new mo(Sc);
					return (t.facade = e), wc(Tt, e, t), t;
			  }),
			  (Nr = function (e) {
					return Ac(Tt, e) || {};
			  }),
			  (Tn = function (e) {
					return yo(Tt, e);
			  }))
			: ((Lt = VI("state")),
			  (WI[Lt] = !0),
			  (mn = function (e, t) {
					if (go(e, Lt)) throw new mo(Sc);
					return (t.facade = e), UI(e, Lt, t), t;
			  }),
			  (Nr = function (e) {
					return go(e, Lt) ? e[Lt] : {};
			  }),
			  (Tn = function (e) {
					return go(e, Lt);
			  }));
		var Tt, Ac, yo, wc, Lt;
		Cc.exports = { set: mn, get: Nr, has: Tn, enforce: HI, getterFor: jI };
	});
	var Pc = u((ZB, xc) => {
		var To = xt(),
			kI = mt(),
			qc = Function.prototype,
			KI = To && Object.getOwnPropertyDescriptor,
			Io = kI(qc, "name"),
			zI = Io && function () {}.name === "something",
			YI = Io && (!To || (To && KI(qc, "name").configurable));
		xc.exports = { EXISTS: Io, PROPER: zI, CONFIGURABLE: YI };
	});
	var Gc = u((JB, Fc) => {
		var $I = me(),
			Lc = at(),
			QI = mt(),
			Dc = _n(),
			ZI = hn(),
			JI = vo(),
			Mc = Nc(),
			eO = Pc().CONFIGURABLE,
			tO = Mc.get,
			rO = Mc.enforce,
			nO = String(String).split("String");
		(Fc.exports = function (e, t, r, n) {
			var o = n ? !!n.unsafe : !1,
				i = n ? !!n.enumerable : !1,
				a = n ? !!n.noTargetGet : !1,
				s = n && n.name !== void 0 ? n.name : t,
				c;
			if (
				(Lc(r) &&
					(String(s).slice(0, 7) === "Symbol(" &&
						(s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
					(!QI(r, "name") || (eO && r.name !== s)) && Dc(r, "name", s),
					(c = rO(r)),
					c.source || (c.source = nO.join(typeof s == "string" ? s : ""))),
				e === $I)
			) {
				i ? (e[t] = r) : ZI(t, r);
				return;
			} else o ? !a && e[t] && (i = !0) : delete e[t];
			i ? (e[t] = r) : Dc(e, t, r);
		})(Function.prototype, "toString", function () {
			return (Lc(this) && tO(this).source) || JI(this);
		});
	});
	var Oo = u((eH, Xc) => {
		var iO = Math.ceil,
			oO = Math.floor;
		Xc.exports = function (e) {
			var t = +e;
			return t !== t || t === 0 ? 0 : (t > 0 ? oO : iO)(t);
		};
	});
	var Vc = u((tH, Uc) => {
		var aO = Oo(),
			sO = Math.max,
			uO = Math.min;
		Uc.exports = function (e, t) {
			var r = aO(e);
			return r < 0 ? sO(r + t, 0) : uO(r, t);
		};
	});
	var Bc = u((rH, Wc) => {
		var cO = Oo(),
			lO = Math.min;
		Wc.exports = function (e) {
			return e > 0 ? lO(cO(e), 9007199254740991) : 0;
		};
	});
	var jc = u((nH, Hc) => {
		var fO = Bc();
		Hc.exports = function (e) {
			return fO(e.length);
		};
	});
	var bo = u((iH, Kc) => {
		var dO = Ar(),
			pO = Vc(),
			vO = jc(),
			kc = function (e) {
				return function (t, r, n) {
					var o = dO(t),
						i = vO(o),
						a = pO(n, i),
						s;
					if (e && r != r) {
						for (; i > a; ) if (((s = o[a++]), s != s)) return !0;
					} else
						for (; i > a; a++)
							if ((e || a in o) && o[a] === r) return e || a || 0;
					return !e && -1;
				};
			};
		Kc.exports = { includes: kc(!0), indexOf: kc(!1) };
	});
	var Ao = u((oH, Yc) => {
		var EO = $e(),
			So = mt(),
			hO = Ar(),
			gO = bo().indexOf,
			_O = yn(),
			zc = EO([].push);
		Yc.exports = function (e, t) {
			var r = hO(e),
				n = 0,
				o = [],
				i;
			for (i in r) !So(_O, i) && So(r, i) && zc(o, i);
			for (; t.length > n; ) So(r, (i = t[n++])) && (~gO(o, i) || zc(o, i));
			return o;
		};
	});
	var In = u((aH, $c) => {
		$c.exports = [
			"constructor",
			"hasOwnProperty",
			"isPrototypeOf",
			"propertyIsEnumerable",
			"toLocaleString",
			"toString",
			"valueOf",
		];
	});
	var Zc = u((Qc) => {
		var yO = Ao(),
			mO = In(),
			TO = mO.concat("length", "prototype");
		Qc.f =
			Object.getOwnPropertyNames ||
			function (t) {
				return yO(t, TO);
			};
	});
	var el = u((Jc) => {
		Jc.f = Object.getOwnPropertySymbols;
	});
	var rl = u((cH, tl) => {
		var IO = wr(),
			OO = $e(),
			bO = Zc(),
			SO = el(),
			AO = Rr(),
			wO = OO([].concat);
		tl.exports =
			IO("Reflect", "ownKeys") ||
			function (t) {
				var r = bO.f(AO(t)),
					n = SO.f;
				return n ? wO(r, n(t)) : r;
			};
	});
	var il = u((lH, nl) => {
		var RO = mt(),
			CO = rl(),
			NO = fo(),
			qO = Cr();
		nl.exports = function (e, t) {
			for (var r = CO(t), n = qO.f, o = NO.f, i = 0; i < r.length; i++) {
				var a = r[i];
				RO(e, a) || n(e, a, o(t, a));
			}
		};
	});
	var al = u((fH, ol) => {
		var xO = zt(),
			PO = at(),
			LO = /#|\.prototype\./,
			qr = function (e, t) {
				var r = MO[DO(e)];
				return r == GO ? !0 : r == FO ? !1 : PO(t) ? xO(t) : !!t;
			},
			DO = (qr.normalize = function (e) {
				return String(e).replace(LO, ".").toLowerCase();
			}),
			MO = (qr.data = {}),
			FO = (qr.NATIVE = "N"),
			GO = (qr.POLYFILL = "P");
		ol.exports = qr;
	});
	var ul = u((dH, sl) => {
		var wo = me(),
			XO = fo().f,
			UO = _n(),
			VO = Gc(),
			WO = hn(),
			BO = il(),
			HO = al();
		sl.exports = function (e, t) {
			var r = e.target,
				n = e.global,
				o = e.stat,
				i,
				a,
				s,
				c,
				f,
				E;
			if (
				(n
					? (a = wo)
					: o
					? (a = wo[r] || WO(r, {}))
					: (a = (wo[r] || {}).prototype),
				a)
			)
				for (s in t) {
					if (
						((f = t[s]),
						e.noTargetGet ? ((E = XO(a, s)), (c = E && E.value)) : (c = a[s]),
						(i = HO(n ? s : r + (o ? "." : "#") + s, e.forced)),
						!i && c !== void 0)
					) {
						if (typeof f == typeof c) continue;
						BO(f, c);
					}
					(e.sham || (c && c.sham)) && UO(f, "sham", !0), VO(a, s, f, e);
				}
		};
	});
	var ll = u((pH, cl) => {
		var jO = Ao(),
			kO = In();
		cl.exports =
			Object.keys ||
			function (t) {
				return jO(t, kO);
			};
	});
	var dl = u((vH, fl) => {
		var KO = xt(),
			zO = Cr(),
			YO = Rr(),
			$O = Ar(),
			QO = ll();
		fl.exports = KO
			? Object.defineProperties
			: function (t, r) {
					YO(t);
					for (var n = $O(r), o = QO(r), i = o.length, a = 0, s; i > a; )
						zO.f(t, (s = o[a++]), n[s]);
					return t;
			  };
	});
	var vl = u((EH, pl) => {
		var ZO = wr();
		pl.exports = ZO("document", "documentElement");
	});
	var Il = u((hH, Tl) => {
		var JO = Rr(),
			eb = dl(),
			El = In(),
			tb = yn(),
			rb = vl(),
			nb = co(),
			ib = Eo(),
			hl = ">",
			gl = "<",
			Co = "prototype",
			No = "script",
			yl = ib("IE_PROTO"),
			Ro = function () {},
			ml = function (e) {
				return gl + No + hl + e + gl + "/" + No + hl;
			},
			_l = function (e) {
				e.write(ml("")), e.close();
				var t = e.parentWindow.Object;
				return (e = null), t;
			},
			ob = function () {
				var e = nb("iframe"),
					t = "java" + No + ":",
					r;
				return (
					(e.style.display = "none"),
					rb.appendChild(e),
					(e.src = String(t)),
					(r = e.contentWindow.document),
					r.open(),
					r.write(ml("document.F=Object")),
					r.close(),
					r.F
				);
			},
			On,
			bn = function () {
				try {
					On = new ActiveXObject("htmlfile");
				} catch {}
				bn =
					typeof document < "u"
						? document.domain && On
							? _l(On)
							: ob()
						: _l(On);
				for (var e = El.length; e--; ) delete bn[Co][El[e]];
				return bn();
			};
		tb[yl] = !0;
		Tl.exports =
			Object.create ||
			function (t, r) {
				var n;
				return (
					t !== null
						? ((Ro[Co] = JO(t)), (n = new Ro()), (Ro[Co] = null), (n[yl] = t))
						: (n = bn()),
					r === void 0 ? n : eb(n, r)
				);
			};
	});
	var bl = u((gH, Ol) => {
		var ab = ao(),
			sb = Il(),
			ub = Cr(),
			qo = ab("unscopables"),
			xo = Array.prototype;
		xo[qo] == null && ub.f(xo, qo, { configurable: !0, value: sb(null) });
		Ol.exports = function (e) {
			xo[qo][e] = !0;
		};
	});
	var Sl = u(() => {
		"use strict";
		var cb = ul(),
			lb = bo().includes,
			fb = bl();
		cb(
			{ target: "Array", proto: !0 },
			{
				includes: function (t) {
					return lb(this, t, arguments.length > 1 ? arguments[1] : void 0);
				},
			}
		);
		fb("includes");
	});
	var wl = u((mH, Al) => {
		var db = me(),
			pb = $e();
		Al.exports = function (e, t) {
			return pb(db[e].prototype[t]);
		};
	});
	var Cl = u((TH, Rl) => {
		Sl();
		var vb = wl();
		Rl.exports = vb("Array", "includes");
	});
	var ql = u((IH, Nl) => {
		var Eb = Cl();
		Nl.exports = Eb;
	});
	var Pl = u((OH, xl) => {
		var hb = ql();
		xl.exports = hb;
	});
	var Dl = u((bH, Ll) => {
		var gb =
			typeof global == "object" && global && global.Object === Object && global;
		Ll.exports = gb;
	});
	var Fl = u((SH, Ml) => {
		var _b = Dl(),
			yb = typeof self == "object" && self && self.Object === Object && self,
			mb = _b || yb || Function("return this")();
		Ml.exports = mb;
	});
	var Po = u((AH, Gl) => {
		var Tb = Fl(),
			Ib = Tb.Symbol;
		Gl.exports = Ib;
	});
	var Wl = u((wH, Vl) => {
		var Xl = Po(),
			Ul = Object.prototype,
			Ob = Ul.hasOwnProperty,
			bb = Ul.toString,
			xr = Xl ? Xl.toStringTag : void 0;
		function Sb(e) {
			var t = Ob.call(e, xr),
				r = e[xr];
			try {
				e[xr] = void 0;
				var n = !0;
			} catch {}
			var o = bb.call(e);
			return n && (t ? (e[xr] = r) : delete e[xr]), o;
		}
		Vl.exports = Sb;
	});
	var Hl = u((RH, Bl) => {
		var Ab = Object.prototype,
			wb = Ab.toString;
		function Rb(e) {
			return wb.call(e);
		}
		Bl.exports = Rb;
	});
	var zl = u((CH, Kl) => {
		var jl = Po(),
			Cb = Wl(),
			Nb = Hl(),
			qb = "[object Null]",
			xb = "[object Undefined]",
			kl = jl ? jl.toStringTag : void 0;
		function Pb(e) {
			return e == null
				? e === void 0
					? xb
					: qb
				: kl && kl in Object(e)
				? Cb(e)
				: Nb(e);
		}
		Kl.exports = Pb;
	});
	var $l = u((NH, Yl) => {
		function Lb(e, t) {
			return function (r) {
				return e(t(r));
			};
		}
		Yl.exports = Lb;
	});
	var Zl = u((qH, Ql) => {
		var Db = $l(),
			Mb = Db(Object.getPrototypeOf, Object);
		Ql.exports = Mb;
	});
	var ef = u((xH, Jl) => {
		function Fb(e) {
			return e != null && typeof e == "object";
		}
		Jl.exports = Fb;
	});
	var Lo = u((PH, rf) => {
		var Gb = zl(),
			Xb = Zl(),
			Ub = ef(),
			Vb = "[object Object]",
			Wb = Function.prototype,
			Bb = Object.prototype,
			tf = Wb.toString,
			Hb = Bb.hasOwnProperty,
			jb = tf.call(Object);
		function kb(e) {
			if (!Ub(e) || Gb(e) != Vb) return !1;
			var t = Xb(e);
			if (t === null) return !0;
			var r = Hb.call(t, "constructor") && t.constructor;
			return typeof r == "function" && r instanceof r && tf.call(r) == jb;
		}
		rf.exports = kb;
	});
	var nf = u((Do) => {
		"use strict";
		Object.defineProperty(Do, "__esModule", { value: !0 });
		Do.default = Kb;
		function Kb(e) {
			var t,
				r = e.Symbol;
			return (
				typeof r == "function"
					? r.observable
						? (t = r.observable)
						: ((t = r("observable")), (r.observable = t))
					: (t = "@@observable"),
				t
			);
		}
	});
	var of = u((Fo, Mo) => {
		"use strict";
		Object.defineProperty(Fo, "__esModule", { value: !0 });
		var zb = nf(),
			Yb = $b(zb);
		function $b(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var Qt;
		typeof self < "u"
			? (Qt = self)
			: typeof window < "u"
			? (Qt = window)
			: typeof global < "u"
			? (Qt = global)
			: typeof Mo < "u"
			? (Qt = Mo)
			: (Qt = Function("return this")());
		var Qb = (0, Yb.default)(Qt);
		Fo.default = Qb;
	});
	var Go = u((Pr) => {
		"use strict";
		Pr.__esModule = !0;
		Pr.ActionTypes = void 0;
		Pr.default = cf;
		var Zb = Lo(),
			Jb = uf(Zb),
			eS = of(),
			af = uf(eS);
		function uf(e) {
			return e && e.__esModule ? e : { default: e };
		}
		var sf = (Pr.ActionTypes = { INIT: "@@redux/INIT" });
		function cf(e, t, r) {
			var n;
			if (
				(typeof t == "function" && typeof r > "u" && ((r = t), (t = void 0)),
				typeof r < "u")
			) {
				if (typeof r != "function")
					throw new Error("Expected the enhancer to be a function.");
				return r(cf)(e, t);
			}
			if (typeof e != "function")
				throw new Error("Expected the reducer to be a function.");
			var o = e,
				i = t,
				a = [],
				s = a,
				c = !1;
			function f() {
				s === a && (s = a.slice());
			}
			function E() {
				return i;
			}
			function p(b) {
				if (typeof b != "function")
					throw new Error("Expected listener to be a function.");
				var x = !0;
				return (
					f(),
					s.push(b),
					function () {
						if (x) {
							(x = !1), f();
							var w = s.indexOf(b);
							s.splice(w, 1);
						}
					}
				);
			}
			function h(b) {
				if (!(0, Jb.default)(b))
					throw new Error(
						"Actions must be plain objects. Use custom middleware for async actions."
					);
				if (typeof b.type > "u")
					throw new Error(
						'Actions may not have an undefined "type" property. Have you misspelled a constant?'
					);
				if (c) throw new Error("Reducers may not dispatch actions.");
				try {
					(c = !0), (i = o(i, b));
				} finally {
					c = !1;
				}
				for (var x = (a = s), A = 0; A < x.length; A++) x[A]();
				return b;
			}
			function g(b) {
				if (typeof b != "function")
					throw new Error("Expected the nextReducer to be a function.");
				(o = b), h({ type: sf.INIT });
			}
			function S() {
				var b,
					x = p;
				return (
					(b = {
						subscribe: function (w) {
							if (typeof w != "object")
								throw new TypeError("Expected the observer to be an object.");
							function T() {
								w.next && w.next(E());
							}
							T();
							var N = x(T);
							return { unsubscribe: N };
						},
					}),
					(b[af.default] = function () {
						return this;
					}),
					b
				);
			}
			return (
				h({ type: sf.INIT }),
				(n = { dispatch: h, subscribe: p, getState: E, replaceReducer: g }),
				(n[af.default] = S),
				n
			);
		}
	});
	var Uo = u((Xo) => {
		"use strict";
		Xo.__esModule = !0;
		Xo.default = tS;
		function tS(e) {
			typeof console < "u" &&
				typeof console.error == "function" &&
				console.error(e);
			try {
				throw new Error(e);
			} catch {}
		}
	});
	var df = u((Vo) => {
		"use strict";
		Vo.__esModule = !0;
		Vo.default = aS;
		var lf = Go(),
			rS = Lo(),
			FH = ff(rS),
			nS = Uo(),
			GH = ff(nS);
		function ff(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function iS(e, t) {
			var r = t && t.type,
				n = (r && '"' + r.toString() + '"') || "an action";
			return (
				"Given action " +
				n +
				', reducer "' +
				e +
				'" returned undefined. To ignore an action, you must explicitly return the previous state.'
			);
		}
		function oS(e) {
			Object.keys(e).forEach(function (t) {
				var r = e[t],
					n = r(void 0, { type: lf.ActionTypes.INIT });
				if (typeof n > "u")
					throw new Error(
						'Reducer "' +
							t +
							'" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.'
					);
				var o =
					"@@redux/PROBE_UNKNOWN_ACTION_" +
					Math.random().toString(36).substring(7).split("").join(".");
				if (typeof r(void 0, { type: o }) > "u")
					throw new Error(
						'Reducer "' +
							t +
							'" returned undefined when probed with a random type. ' +
							("Don't try to handle " +
								lf.ActionTypes.INIT +
								' or other actions in "redux/*" ') +
							"namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined."
					);
			});
		}
		function aS(e) {
			for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
				var o = t[n];
				typeof e[o] == "function" && (r[o] = e[o]);
			}
			var i = Object.keys(r);
			if (!1) var a;
			var s;
			try {
				oS(r);
			} catch (c) {
				s = c;
			}
			return function () {
				var f =
						arguments.length <= 0 || arguments[0] === void 0
							? {}
							: arguments[0],
					E = arguments[1];
				if (s) throw s;
				if (!1) var p;
				for (var h = !1, g = {}, S = 0; S < i.length; S++) {
					var b = i[S],
						x = r[b],
						A = f[b],
						w = x(A, E);
					if (typeof w > "u") {
						var T = iS(b, E);
						throw new Error(T);
					}
					(g[b] = w), (h = h || w !== A);
				}
				return h ? g : f;
			};
		}
	});
	var vf = u((Wo) => {
		"use strict";
		Wo.__esModule = !0;
		Wo.default = sS;
		function pf(e, t) {
			return function () {
				return t(e.apply(void 0, arguments));
			};
		}
		function sS(e, t) {
			if (typeof e == "function") return pf(e, t);
			if (typeof e != "object" || e === null)
				throw new Error(
					"bindActionCreators expected an object or a function, instead received " +
						(e === null ? "null" : typeof e) +
						'. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?'
				);
			for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
				var i = r[o],
					a = e[i];
				typeof a == "function" && (n[i] = pf(a, t));
			}
			return n;
		}
	});
	var Ho = u((Bo) => {
		"use strict";
		Bo.__esModule = !0;
		Bo.default = uS;
		function uS() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
				t[r] = arguments[r];
			if (t.length === 0)
				return function (i) {
					return i;
				};
			if (t.length === 1) return t[0];
			var n = t[t.length - 1],
				o = t.slice(0, -1);
			return function () {
				return o.reduceRight(function (i, a) {
					return a(i);
				}, n.apply(void 0, arguments));
			};
		}
	});
	var Ef = u((jo) => {
		"use strict";
		jo.__esModule = !0;
		var cS =
			Object.assign ||
			function (e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var n in r)
						Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
				}
				return e;
			};
		jo.default = pS;
		var lS = Ho(),
			fS = dS(lS);
		function dS(e) {
			return e && e.__esModule ? e : { default: e };
		}
		function pS() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
				t[r] = arguments[r];
			return function (n) {
				return function (o, i, a) {
					var s = n(o, i, a),
						c = s.dispatch,
						f = [],
						E = {
							getState: s.getState,
							dispatch: function (h) {
								return c(h);
							},
						};
					return (
						(f = t.map(function (p) {
							return p(E);
						})),
						(c = fS.default.apply(void 0, f)(s.dispatch)),
						cS({}, s, { dispatch: c })
					);
				};
			};
		}
	});
	var ko = u((He) => {
		"use strict";
		He.__esModule = !0;
		He.compose =
			He.applyMiddleware =
			He.bindActionCreators =
			He.combineReducers =
			He.createStore =
				void 0;
		var vS = Go(),
			ES = Zt(vS),
			hS = df(),
			gS = Zt(hS),
			_S = vf(),
			yS = Zt(_S),
			mS = Ef(),
			TS = Zt(mS),
			IS = Ho(),
			OS = Zt(IS),
			bS = Uo(),
			BH = Zt(bS);
		function Zt(e) {
			return e && e.__esModule ? e : { default: e };
		}
		He.createStore = ES.default;
		He.combineReducers = gS.default;
		He.bindActionCreators = yS.default;
		He.applyMiddleware = TS.default;
		He.compose = OS.default;
	});
	var hf = u((Ce) => {
		"use strict";
		Object.defineProperty(Ce, "__esModule", { value: !0 });
		Ce.QuickEffectIds =
			Ce.QuickEffectDirectionConsts =
			Ce.EventTypeConsts =
			Ce.EventLimitAffectedElements =
			Ce.EventContinuousMouseAxes =
			Ce.EventBasedOn =
			Ce.EventAppliesTo =
				void 0;
		var SS = {
			NAVBAR_OPEN: "NAVBAR_OPEN",
			NAVBAR_CLOSE: "NAVBAR_CLOSE",
			TAB_ACTIVE: "TAB_ACTIVE",
			TAB_INACTIVE: "TAB_INACTIVE",
			SLIDER_ACTIVE: "SLIDER_ACTIVE",
			SLIDER_INACTIVE: "SLIDER_INACTIVE",
			DROPDOWN_OPEN: "DROPDOWN_OPEN",
			DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
			MOUSE_CLICK: "MOUSE_CLICK",
			MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
			MOUSE_DOWN: "MOUSE_DOWN",
			MOUSE_UP: "MOUSE_UP",
			MOUSE_OVER: "MOUSE_OVER",
			MOUSE_OUT: "MOUSE_OUT",
			MOUSE_MOVE: "MOUSE_MOVE",
			MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
			SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
			SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
			SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
			ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
			ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
			PAGE_START: "PAGE_START",
			PAGE_FINISH: "PAGE_FINISH",
			PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
			PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
			PAGE_SCROLL: "PAGE_SCROLL",
		};
		Ce.EventTypeConsts = SS;
		var AS = { ELEMENT: "ELEMENT", CLASS: "CLASS", PAGE: "PAGE" };
		Ce.EventAppliesTo = AS;
		var wS = { ELEMENT: "ELEMENT", VIEWPORT: "VIEWPORT" };
		Ce.EventBasedOn = wS;
		var RS = { X_AXIS: "X_AXIS", Y_AXIS: "Y_AXIS" };
		Ce.EventContinuousMouseAxes = RS;
		var CS = {
			CHILDREN: "CHILDREN",
			SIBLINGS: "SIBLINGS",
			IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN",
		};
		Ce.EventLimitAffectedElements = CS;
		var NS = {
			FADE_EFFECT: "FADE_EFFECT",
			SLIDE_EFFECT: "SLIDE_EFFECT",
			GROW_EFFECT: "GROW_EFFECT",
			SHRINK_EFFECT: "SHRINK_EFFECT",
			SPIN_EFFECT: "SPIN_EFFECT",
			FLY_EFFECT: "FLY_EFFECT",
			POP_EFFECT: "POP_EFFECT",
			FLIP_EFFECT: "FLIP_EFFECT",
			JIGGLE_EFFECT: "JIGGLE_EFFECT",
			PULSE_EFFECT: "PULSE_EFFECT",
			DROP_EFFECT: "DROP_EFFECT",
			BLINK_EFFECT: "BLINK_EFFECT",
			BOUNCE_EFFECT: "BOUNCE_EFFECT",
			FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
			FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
			RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
			JELLO_EFFECT: "JELLO_EFFECT",
			GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
			SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
			PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT",
		};
		Ce.QuickEffectIds = NS;
		var qS = {
			LEFT: "LEFT",
			RIGHT: "RIGHT",
			BOTTOM: "BOTTOM",
			TOP: "TOP",
			BOTTOM_LEFT: "BOTTOM_LEFT",
			BOTTOM_RIGHT: "BOTTOM_RIGHT",
			TOP_RIGHT: "TOP_RIGHT",
			TOP_LEFT: "TOP_LEFT",
			CLOCKWISE: "CLOCKWISE",
			COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE",
		};
		Ce.QuickEffectDirectionConsts = qS;
	});
	var Ko = u((Jt) => {
		"use strict";
		Object.defineProperty(Jt, "__esModule", { value: !0 });
		Jt.ActionTypeConsts = Jt.ActionAppliesTo = void 0;
		var xS = {
			TRANSFORM_MOVE: "TRANSFORM_MOVE",
			TRANSFORM_SCALE: "TRANSFORM_SCALE",
			TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
			TRANSFORM_SKEW: "TRANSFORM_SKEW",
			STYLE_OPACITY: "STYLE_OPACITY",
			STYLE_SIZE: "STYLE_SIZE",
			STYLE_FILTER: "STYLE_FILTER",
			STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
			STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
			STYLE_BORDER: "STYLE_BORDER",
			STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
			PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
			GENERAL_DISPLAY: "GENERAL_DISPLAY",
			GENERAL_START_ACTION: "GENERAL_START_ACTION",
			GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
			GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
			GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
			GENERAL_LOOP: "GENERAL_LOOP",
			STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW",
		};
		Jt.ActionTypeConsts = xS;
		var PS = {
			ELEMENT: "ELEMENT",
			ELEMENT_CLASS: "ELEMENT_CLASS",
			TRIGGER_ELEMENT: "TRIGGER_ELEMENT",
		};
		Jt.ActionAppliesTo = PS;
	});
	var gf = u((Sn) => {
		"use strict";
		Object.defineProperty(Sn, "__esModule", { value: !0 });
		Sn.InteractionTypeConsts = void 0;
		var LS = {
			MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
			MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
			MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
			SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
			SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
			MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
			PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
			PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
			PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
			NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
			DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
			ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
			TAB_INTERACTION: "TAB_INTERACTION",
			SLIDER_INTERACTION: "SLIDER_INTERACTION",
		};
		Sn.InteractionTypeConsts = LS;
	});
	var _f = u((An) => {
		"use strict";
		Object.defineProperty(An, "__esModule", { value: !0 });
		An.ReducedMotionTypes = void 0;
		var DS = Ko(),
			{
				TRANSFORM_MOVE: MS,
				TRANSFORM_SCALE: FS,
				TRANSFORM_ROTATE: GS,
				TRANSFORM_SKEW: XS,
				STYLE_SIZE: US,
				STYLE_FILTER: VS,
				STYLE_FONT_VARIATION: WS,
			} = DS.ActionTypeConsts,
			BS = {
				[MS]: !0,
				[FS]: !0,
				[GS]: !0,
				[XS]: !0,
				[US]: !0,
				[VS]: !0,
				[WS]: !0,
			};
		An.ReducedMotionTypes = BS;
	});
	var yf = u((oe) => {
		"use strict";
		Object.defineProperty(oe, "__esModule", { value: !0 });
		oe.IX2_VIEWPORT_WIDTH_CHANGED =
			oe.IX2_TEST_FRAME_RENDERED =
			oe.IX2_STOP_REQUESTED =
			oe.IX2_SESSION_STOPPED =
			oe.IX2_SESSION_STARTED =
			oe.IX2_SESSION_INITIALIZED =
			oe.IX2_RAW_DATA_IMPORTED =
			oe.IX2_PREVIEW_REQUESTED =
			oe.IX2_PLAYBACK_REQUESTED =
			oe.IX2_PARAMETER_CHANGED =
			oe.IX2_MEDIA_QUERIES_DEFINED =
			oe.IX2_INSTANCE_STARTED =
			oe.IX2_INSTANCE_REMOVED =
			oe.IX2_INSTANCE_ADDED =
			oe.IX2_EVENT_STATE_CHANGED =
			oe.IX2_EVENT_LISTENER_ADDED =
			oe.IX2_ELEMENT_STATE_CHANGED =
			oe.IX2_CLEAR_REQUESTED =
			oe.IX2_ANIMATION_FRAME_CHANGED =
			oe.IX2_ACTION_LIST_PLAYBACK_CHANGED =
				void 0;
		var HS = "IX2_RAW_DATA_IMPORTED";
		oe.IX2_RAW_DATA_IMPORTED = HS;
		var jS = "IX2_SESSION_INITIALIZED";
		oe.IX2_SESSION_INITIALIZED = jS;
		var kS = "IX2_SESSION_STARTED";
		oe.IX2_SESSION_STARTED = kS;
		var KS = "IX2_SESSION_STOPPED";
		oe.IX2_SESSION_STOPPED = KS;
		var zS = "IX2_PREVIEW_REQUESTED";
		oe.IX2_PREVIEW_REQUESTED = zS;
		var YS = "IX2_PLAYBACK_REQUESTED";
		oe.IX2_PLAYBACK_REQUESTED = YS;
		var $S = "IX2_STOP_REQUESTED";
		oe.IX2_STOP_REQUESTED = $S;
		var QS = "IX2_CLEAR_REQUESTED";
		oe.IX2_CLEAR_REQUESTED = QS;
		var ZS = "IX2_EVENT_LISTENER_ADDED";
		oe.IX2_EVENT_LISTENER_ADDED = ZS;
		var JS = "IX2_EVENT_STATE_CHANGED";
		oe.IX2_EVENT_STATE_CHANGED = JS;
		var eA = "IX2_ANIMATION_FRAME_CHANGED";
		oe.IX2_ANIMATION_FRAME_CHANGED = eA;
		var tA = "IX2_PARAMETER_CHANGED";
		oe.IX2_PARAMETER_CHANGED = tA;
		var rA = "IX2_INSTANCE_ADDED";
		oe.IX2_INSTANCE_ADDED = rA;
		var nA = "IX2_INSTANCE_STARTED";
		oe.IX2_INSTANCE_STARTED = nA;
		var iA = "IX2_INSTANCE_REMOVED";
		oe.IX2_INSTANCE_REMOVED = iA;
		var oA = "IX2_ELEMENT_STATE_CHANGED";
		oe.IX2_ELEMENT_STATE_CHANGED = oA;
		var aA = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
		oe.IX2_ACTION_LIST_PLAYBACK_CHANGED = aA;
		var sA = "IX2_VIEWPORT_WIDTH_CHANGED";
		oe.IX2_VIEWPORT_WIDTH_CHANGED = sA;
		var uA = "IX2_MEDIA_QUERIES_DEFINED";
		oe.IX2_MEDIA_QUERIES_DEFINED = uA;
		var cA = "IX2_TEST_FRAME_RENDERED";
		oe.IX2_TEST_FRAME_RENDERED = cA;
	});
	var mf = u((R) => {
		"use strict";
		Object.defineProperty(R, "__esModule", { value: !0 });
		R.W_MOD_JS =
			R.W_MOD_IX =
			R.WILL_CHANGE =
			R.WIDTH =
			R.WF_PAGE =
			R.TRANSLATE_Z =
			R.TRANSLATE_Y =
			R.TRANSLATE_X =
			R.TRANSLATE_3D =
			R.TRANSFORM =
			R.SKEW_Y =
			R.SKEW_X =
			R.SKEW =
			R.SIBLINGS =
			R.SCALE_Z =
			R.SCALE_Y =
			R.SCALE_X =
			R.SCALE_3D =
			R.ROTATE_Z =
			R.ROTATE_Y =
			R.ROTATE_X =
			R.RENDER_TRANSFORM =
			R.RENDER_STYLE =
			R.RENDER_PLUGIN =
			R.RENDER_GENERAL =
			R.PRESERVE_3D =
			R.PLAIN_OBJECT =
			R.PARENT =
			R.OPACITY =
			R.IX2_ID_DELIMITER =
			R.IMMEDIATE_CHILDREN =
			R.HTML_ELEMENT =
			R.HEIGHT =
			R.FONT_VARIATION_SETTINGS =
			R.FLEX =
			R.FILTER =
			R.DISPLAY =
			R.CONFIG_Z_VALUE =
			R.CONFIG_Z_UNIT =
			R.CONFIG_Y_VALUE =
			R.CONFIG_Y_UNIT =
			R.CONFIG_X_VALUE =
			R.CONFIG_X_UNIT =
			R.CONFIG_VALUE =
			R.CONFIG_UNIT =
			R.COMMA_DELIMITER =
			R.COLOR =
			R.COLON_DELIMITER =
			R.CHILDREN =
			R.BOUNDARY_SELECTOR =
			R.BORDER_COLOR =
			R.BAR_DELIMITER =
			R.BACKGROUND_COLOR =
			R.BACKGROUND =
			R.AUTO =
			R.ABSTRACT_NODE =
				void 0;
		var lA = "|";
		R.IX2_ID_DELIMITER = lA;
		var fA = "data-wf-page";
		R.WF_PAGE = fA;
		var dA = "w-mod-js";
		R.W_MOD_JS = dA;
		var pA = "w-mod-ix";
		R.W_MOD_IX = pA;
		var vA = ".w-dyn-item";
		R.BOUNDARY_SELECTOR = vA;
		var EA = "xValue";
		R.CONFIG_X_VALUE = EA;
		var hA = "yValue";
		R.CONFIG_Y_VALUE = hA;
		var gA = "zValue";
		R.CONFIG_Z_VALUE = gA;
		var _A = "value";
		R.CONFIG_VALUE = _A;
		var yA = "xUnit";
		R.CONFIG_X_UNIT = yA;
		var mA = "yUnit";
		R.CONFIG_Y_UNIT = mA;
		var TA = "zUnit";
		R.CONFIG_Z_UNIT = TA;
		var IA = "unit";
		R.CONFIG_UNIT = IA;
		var OA = "transform";
		R.TRANSFORM = OA;
		var bA = "translateX";
		R.TRANSLATE_X = bA;
		var SA = "translateY";
		R.TRANSLATE_Y = SA;
		var AA = "translateZ";
		R.TRANSLATE_Z = AA;
		var wA = "translate3d";
		R.TRANSLATE_3D = wA;
		var RA = "scaleX";
		R.SCALE_X = RA;
		var CA = "scaleY";
		R.SCALE_Y = CA;
		var NA = "scaleZ";
		R.SCALE_Z = NA;
		var qA = "scale3d";
		R.SCALE_3D = qA;
		var xA = "rotateX";
		R.ROTATE_X = xA;
		var PA = "rotateY";
		R.ROTATE_Y = PA;
		var LA = "rotateZ";
		R.ROTATE_Z = LA;
		var DA = "skew";
		R.SKEW = DA;
		var MA = "skewX";
		R.SKEW_X = MA;
		var FA = "skewY";
		R.SKEW_Y = FA;
		var GA = "opacity";
		R.OPACITY = GA;
		var XA = "filter";
		R.FILTER = XA;
		var UA = "font-variation-settings";
		R.FONT_VARIATION_SETTINGS = UA;
		var VA = "width";
		R.WIDTH = VA;
		var WA = "height";
		R.HEIGHT = WA;
		var BA = "backgroundColor";
		R.BACKGROUND_COLOR = BA;
		var HA = "background";
		R.BACKGROUND = HA;
		var jA = "borderColor";
		R.BORDER_COLOR = jA;
		var kA = "color";
		R.COLOR = kA;
		var KA = "display";
		R.DISPLAY = KA;
		var zA = "flex";
		R.FLEX = zA;
		var YA = "willChange";
		R.WILL_CHANGE = YA;
		var $A = "AUTO";
		R.AUTO = $A;
		var QA = ",";
		R.COMMA_DELIMITER = QA;
		var ZA = ":";
		R.COLON_DELIMITER = ZA;
		var JA = "|";
		R.BAR_DELIMITER = JA;
		var ew = "CHILDREN";
		R.CHILDREN = ew;
		var tw = "IMMEDIATE_CHILDREN";
		R.IMMEDIATE_CHILDREN = tw;
		var rw = "SIBLINGS";
		R.SIBLINGS = rw;
		var nw = "PARENT";
		R.PARENT = nw;
		var iw = "preserve-3d";
		R.PRESERVE_3D = iw;
		var ow = "HTML_ELEMENT";
		R.HTML_ELEMENT = ow;
		var aw = "PLAIN_OBJECT";
		R.PLAIN_OBJECT = aw;
		var sw = "ABSTRACT_NODE";
		R.ABSTRACT_NODE = sw;
		var uw = "RENDER_TRANSFORM";
		R.RENDER_TRANSFORM = uw;
		var cw = "RENDER_GENERAL";
		R.RENDER_GENERAL = cw;
		var lw = "RENDER_STYLE";
		R.RENDER_STYLE = lw;
		var fw = "RENDER_PLUGIN";
		R.RENDER_PLUGIN = fw;
	});
	var Ue = u((Ae) => {
		"use strict";
		var Tf = Kt().default;
		Object.defineProperty(Ae, "__esModule", { value: !0 });
		var wn = { IX2EngineActionTypes: !0, IX2EngineConstants: !0 };
		Ae.IX2EngineConstants = Ae.IX2EngineActionTypes = void 0;
		var zo = hf();
		Object.keys(zo).forEach(function (e) {
			e === "default" ||
				e === "__esModule" ||
				Object.prototype.hasOwnProperty.call(wn, e) ||
				(e in Ae && Ae[e] === zo[e]) ||
				Object.defineProperty(Ae, e, {
					enumerable: !0,
					get: function () {
						return zo[e];
					},
				});
		});
		var Yo = Ko();
		Object.keys(Yo).forEach(function (e) {
			e === "default" ||
				e === "__esModule" ||
				Object.prototype.hasOwnProperty.call(wn, e) ||
				(e in Ae && Ae[e] === Yo[e]) ||
				Object.defineProperty(Ae, e, {
					enumerable: !0,
					get: function () {
						return Yo[e];
					},
				});
		});
		var $o = gf();
		Object.keys($o).forEach(function (e) {
			e === "default" ||
				e === "__esModule" ||
				Object.prototype.hasOwnProperty.call(wn, e) ||
				(e in Ae && Ae[e] === $o[e]) ||
				Object.defineProperty(Ae, e, {
					enumerable: !0,
					get: function () {
						return $o[e];
					},
				});
		});
		var Qo = _f();
		Object.keys(Qo).forEach(function (e) {
			e === "default" ||
				e === "__esModule" ||
				Object.prototype.hasOwnProperty.call(wn, e) ||
				(e in Ae && Ae[e] === Qo[e]) ||
				Object.defineProperty(Ae, e, {
					enumerable: !0,
					get: function () {
						return Qo[e];
					},
				});
		});
		var dw = Tf(yf());
		Ae.IX2EngineActionTypes = dw;
		var pw = Tf(mf());
		Ae.IX2EngineConstants = pw;
	});
	var If = u((Rn) => {
		"use strict";
		Object.defineProperty(Rn, "__esModule", { value: !0 });
		Rn.ixData = void 0;
		var vw = Ue(),
			{ IX2_RAW_DATA_IMPORTED: Ew } = vw.IX2EngineActionTypes,
			hw = (e = Object.freeze({}), t) => {
				switch (t.type) {
					case Ew:
						return t.payload.ixData || Object.freeze({});
					default:
						return e;
				}
			};
		Rn.ixData = hw;
	});
	var Lr = u((JH, ht) => {
		function Zo() {
			return (
				(ht.exports = Zo =
					Object.assign
						? Object.assign.bind()
						: function (e) {
								for (var t = 1; t < arguments.length; t++) {
									var r = arguments[t];
									for (var n in r)
										Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
								}
								return e;
						  }),
				(ht.exports.__esModule = !0),
				(ht.exports.default = ht.exports),
				Zo.apply(this, arguments)
			);
		}
		(ht.exports = Zo),
			(ht.exports.__esModule = !0),
			(ht.exports.default = ht.exports);
	});
	var er = u((Ie) => {
		"use strict";
		Object.defineProperty(Ie, "__esModule", { value: !0 });
		var gw =
			typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
				? function (e) {
						return typeof e;
				  }
				: function (e) {
						return e &&
							typeof Symbol == "function" &&
							e.constructor === Symbol &&
							e !== Symbol.prototype
							? "symbol"
							: typeof e;
				  };
		Ie.clone = Nn;
		Ie.addLast = Sf;
		Ie.addFirst = Af;
		Ie.removeLast = wf;
		Ie.removeFirst = Rf;
		Ie.insert = Cf;
		Ie.removeAt = Nf;
		Ie.replaceAt = qf;
		Ie.getIn = qn;
		Ie.set = xn;
		Ie.setIn = Pn;
		Ie.update = Pf;
		Ie.updateIn = Lf;
		Ie.merge = Df;
		Ie.mergeDeep = Mf;
		Ie.mergeIn = Ff;
		Ie.omit = Gf;
		Ie.addDefaults = Xf;
		var Of = "INVALID_ARGS";
		function bf(e) {
			throw new Error(e);
		}
		function Jo(e) {
			var t = Object.keys(e);
			return Object.getOwnPropertySymbols
				? t.concat(Object.getOwnPropertySymbols(e))
				: t;
		}
		var _w = {}.hasOwnProperty;
		function Nn(e) {
			if (Array.isArray(e)) return e.slice();
			for (var t = Jo(e), r = {}, n = 0; n < t.length; n++) {
				var o = t[n];
				r[o] = e[o];
			}
			return r;
		}
		function Ve(e, t, r) {
			var n = r;
			n == null && bf(Of);
			for (
				var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3;
				s < i;
				s++
			)
				a[s - 3] = arguments[s];
			for (var c = 0; c < a.length; c++) {
				var f = a[c];
				if (f != null) {
					var E = Jo(f);
					if (E.length)
						for (var p = 0; p <= E.length; p++) {
							var h = E[p];
							if (!(e && n[h] !== void 0)) {
								var g = f[h];
								t && Cn(n[h]) && Cn(g) && (g = Ve(e, t, n[h], g)),
									!(g === void 0 || g === n[h]) &&
										(o || ((o = !0), (n = Nn(n))), (n[h] = g));
							}
						}
				}
			}
			return n;
		}
		function Cn(e) {
			var t = typeof e > "u" ? "undefined" : gw(e);
			return e != null && (t === "object" || t === "function");
		}
		function Sf(e, t) {
			return Array.isArray(t) ? e.concat(t) : e.concat([t]);
		}
		function Af(e, t) {
			return Array.isArray(t) ? t.concat(e) : [t].concat(e);
		}
		function wf(e) {
			return e.length ? e.slice(0, e.length - 1) : e;
		}
		function Rf(e) {
			return e.length ? e.slice(1) : e;
		}
		function Cf(e, t, r) {
			return e
				.slice(0, t)
				.concat(Array.isArray(r) ? r : [r])
				.concat(e.slice(t));
		}
		function Nf(e, t) {
			return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1));
		}
		function qf(e, t, r) {
			if (e[t] === r) return e;
			for (var n = e.length, o = Array(n), i = 0; i < n; i++) o[i] = e[i];
			return (o[t] = r), o;
		}
		function qn(e, t) {
			if ((!Array.isArray(t) && bf(Of), e != null)) {
				for (var r = e, n = 0; n < t.length; n++) {
					var o = t[n];
					if (((r = r?.[o]), r === void 0)) return r;
				}
				return r;
			}
		}
		function xn(e, t, r) {
			var n = typeof t == "number" ? [] : {},
				o = e ?? n;
			if (o[t] === r) return o;
			var i = Nn(o);
			return (i[t] = r), i;
		}
		function xf(e, t, r, n) {
			var o = void 0,
				i = t[n];
			if (n === t.length - 1) o = r;
			else {
				var a =
					Cn(e) && Cn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
				o = xf(a, t, r, n + 1);
			}
			return xn(e, i, o);
		}
		function Pn(e, t, r) {
			return t.length ? xf(e, t, r, 0) : r;
		}
		function Pf(e, t, r) {
			var n = e?.[t],
				o = r(n);
			return xn(e, t, o);
		}
		function Lf(e, t, r) {
			var n = qn(e, t),
				o = r(n);
			return Pn(e, t, o);
		}
		function Df(e, t, r, n, o, i) {
			for (
				var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
				c < a;
				c++
			)
				s[c - 6] = arguments[c];
			return s.length
				? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, o, i].concat(s))
				: Ve(!1, !1, e, t, r, n, o, i);
		}
		function Mf(e, t, r, n, o, i) {
			for (
				var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
				c < a;
				c++
			)
				s[c - 6] = arguments[c];
			return s.length
				? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, o, i].concat(s))
				: Ve(!1, !0, e, t, r, n, o, i);
		}
		function Ff(e, t, r, n, o, i, a) {
			var s = qn(e, t);
			s == null && (s = {});
			for (
				var c = void 0,
					f = arguments.length,
					E = Array(f > 7 ? f - 7 : 0),
					p = 7;
				p < f;
				p++
			)
				E[p - 7] = arguments[p];
			return (
				E.length
					? (c = Ve.call.apply(Ve, [null, !1, !1, s, r, n, o, i, a].concat(E)))
					: (c = Ve(!1, !1, s, r, n, o, i, a)),
				Pn(e, t, c)
			);
		}
		function Gf(e, t) {
			for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
				if (_w.call(e, r[o])) {
					n = !0;
					break;
				}
			if (!n) return e;
			for (var i = {}, a = Jo(e), s = 0; s < a.length; s++) {
				var c = a[s];
				r.indexOf(c) >= 0 || (i[c] = e[c]);
			}
			return i;
		}
		function Xf(e, t, r, n, o, i) {
			for (
				var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), c = 6;
				c < a;
				c++
			)
				s[c - 6] = arguments[c];
			return s.length
				? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, o, i].concat(s))
				: Ve(!0, !1, e, t, r, n, o, i);
		}
		var yw = {
			clone: Nn,
			addLast: Sf,
			addFirst: Af,
			removeLast: wf,
			removeFirst: Rf,
			insert: Cf,
			removeAt: Nf,
			replaceAt: qf,
			getIn: qn,
			set: xn,
			setIn: Pn,
			update: Pf,
			updateIn: Lf,
			merge: Df,
			mergeDeep: Mf,
			mergeIn: Ff,
			omit: Gf,
			addDefaults: Xf,
		};
		Ie.default = yw;
	});
	var Vf = u((Ln) => {
		"use strict";
		var mw = ot().default;
		Object.defineProperty(Ln, "__esModule", { value: !0 });
		Ln.ixRequest = void 0;
		var Tw = mw(Lr()),
			Iw = Ue(),
			Ow = er(),
			{
				IX2_PREVIEW_REQUESTED: bw,
				IX2_PLAYBACK_REQUESTED: Sw,
				IX2_STOP_REQUESTED: Aw,
				IX2_CLEAR_REQUESTED: ww,
			} = Iw.IX2EngineActionTypes,
			Rw = { preview: {}, playback: {}, stop: {}, clear: {} },
			Uf = Object.create(null, {
				[bw]: { value: "preview" },
				[Sw]: { value: "playback" },
				[Aw]: { value: "stop" },
				[ww]: { value: "clear" },
			}),
			Cw = (e = Rw, t) => {
				if (t.type in Uf) {
					let r = [Uf[t.type]];
					return (0, Ow.setIn)(e, [r], (0, Tw.default)({}, t.payload));
				}
				return e;
			};
		Ln.ixRequest = Cw;
	});
	var Bf = u((Dn) => {
		"use strict";
		Object.defineProperty(Dn, "__esModule", { value: !0 });
		Dn.ixSession = void 0;
		var Nw = Ue(),
			st = er(),
			{
				IX2_SESSION_INITIALIZED: qw,
				IX2_SESSION_STARTED: xw,
				IX2_TEST_FRAME_RENDERED: Pw,
				IX2_SESSION_STOPPED: Lw,
				IX2_EVENT_LISTENER_ADDED: Dw,
				IX2_EVENT_STATE_CHANGED: Mw,
				IX2_ANIMATION_FRAME_CHANGED: Fw,
				IX2_ACTION_LIST_PLAYBACK_CHANGED: Gw,
				IX2_VIEWPORT_WIDTH_CHANGED: Xw,
				IX2_MEDIA_QUERIES_DEFINED: Uw,
			} = Nw.IX2EngineActionTypes,
			Wf = {
				active: !1,
				tick: 0,
				eventListeners: [],
				eventState: {},
				playbackState: {},
				viewportWidth: 0,
				mediaQueryKey: null,
				hasBoundaryNodes: !1,
				hasDefinedMediaQueries: !1,
				reducedMotion: !1,
			},
			Vw = 20,
			Ww = (e = Wf, t) => {
				switch (t.type) {
					case qw: {
						let { hasBoundaryNodes: r, reducedMotion: n } = t.payload;
						return (0, st.merge)(e, { hasBoundaryNodes: r, reducedMotion: n });
					}
					case xw:
						return (0, st.set)(e, "active", !0);
					case Pw: {
						let {
							payload: { step: r = Vw },
						} = t;
						return (0, st.set)(e, "tick", e.tick + r);
					}
					case Lw:
						return Wf;
					case Fw: {
						let {
							payload: { now: r },
						} = t;
						return (0, st.set)(e, "tick", r);
					}
					case Dw: {
						let r = (0, st.addLast)(e.eventListeners, t.payload);
						return (0, st.set)(e, "eventListeners", r);
					}
					case Mw: {
						let { stateKey: r, newState: n } = t.payload;
						return (0, st.setIn)(e, ["eventState", r], n);
					}
					case Gw: {
						let { actionListId: r, isPlaying: n } = t.payload;
						return (0, st.setIn)(e, ["playbackState", r], n);
					}
					case Xw: {
						let { width: r, mediaQueries: n } = t.payload,
							o = n.length,
							i = null;
						for (let a = 0; a < o; a++) {
							let { key: s, min: c, max: f } = n[a];
							if (r >= c && r <= f) {
								i = s;
								break;
							}
						}
						return (0, st.merge)(e, { viewportWidth: r, mediaQueryKey: i });
					}
					case Uw:
						return (0, st.set)(e, "hasDefinedMediaQueries", !0);
					default:
						return e;
				}
			};
		Dn.ixSession = Ww;
	});
	var jf = u((nj, Hf) => {
		function Bw() {
			(this.__data__ = []), (this.size = 0);
		}
		Hf.exports = Bw;
	});
	var Mn = u((ij, kf) => {
		function Hw(e, t) {
			return e === t || (e !== e && t !== t);
		}
		kf.exports = Hw;
	});
	var Dr = u((oj, Kf) => {
		var jw = Mn();
		function kw(e, t) {
			for (var r = e.length; r--; ) if (jw(e[r][0], t)) return r;
			return -1;
		}
		Kf.exports = kw;
	});
	var Yf = u((aj, zf) => {
		var Kw = Dr(),
			zw = Array.prototype,
			Yw = zw.splice;
		function $w(e) {
			var t = this.__data__,
				r = Kw(t, e);
			if (r < 0) return !1;
			var n = t.length - 1;
			return r == n ? t.pop() : Yw.call(t, r, 1), --this.size, !0;
		}
		zf.exports = $w;
	});
	var Qf = u((sj, $f) => {
		var Qw = Dr();
		function Zw(e) {
			var t = this.__data__,
				r = Qw(t, e);
			return r < 0 ? void 0 : t[r][1];
		}
		$f.exports = Zw;
	});
	var Jf = u((uj, Zf) => {
		var Jw = Dr();
		function e0(e) {
			return Jw(this.__data__, e) > -1;
		}
		Zf.exports = e0;
	});
	var td = u((cj, ed) => {
		var t0 = Dr();
		function r0(e, t) {
			var r = this.__data__,
				n = t0(r, e);
			return n < 0 ? (++this.size, r.push([e, t])) : (r[n][1] = t), this;
		}
		ed.exports = r0;
	});
	var Mr = u((lj, rd) => {
		var n0 = jf(),
			i0 = Yf(),
			o0 = Qf(),
			a0 = Jf(),
			s0 = td();
		function tr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r; ) {
				var n = e[t];
				this.set(n[0], n[1]);
			}
		}
		tr.prototype.clear = n0;
		tr.prototype.delete = i0;
		tr.prototype.get = o0;
		tr.prototype.has = a0;
		tr.prototype.set = s0;
		rd.exports = tr;
	});
	var id = u((fj, nd) => {
		var u0 = Mr();
		function c0() {
			(this.__data__ = new u0()), (this.size = 0);
		}
		nd.exports = c0;
	});
	var ad = u((dj, od) => {
		function l0(e) {
			var t = this.__data__,
				r = t.delete(e);
			return (this.size = t.size), r;
		}
		od.exports = l0;
	});
	var ud = u((pj, sd) => {
		function f0(e) {
			return this.__data__.get(e);
		}
		sd.exports = f0;
	});
	var ld = u((vj, cd) => {
		function d0(e) {
			return this.__data__.has(e);
		}
		cd.exports = d0;
	});
	var ea = u((Ej, fd) => {
		var p0 =
			typeof global == "object" && global && global.Object === Object && global;
		fd.exports = p0;
	});
	var Ze = u((hj, dd) => {
		var v0 = ea(),
			E0 = typeof self == "object" && self && self.Object === Object && self,
			h0 = v0 || E0 || Function("return this")();
		dd.exports = h0;
	});
	var rr = u((gj, pd) => {
		var g0 = Ze(),
			_0 = g0.Symbol;
		pd.exports = _0;
	});
	var gd = u((_j, hd) => {
		var vd = rr(),
			Ed = Object.prototype,
			y0 = Ed.hasOwnProperty,
			m0 = Ed.toString,
			Fr = vd ? vd.toStringTag : void 0;
		function T0(e) {
			var t = y0.call(e, Fr),
				r = e[Fr];
			try {
				e[Fr] = void 0;
				var n = !0;
			} catch {}
			var o = m0.call(e);
			return n && (t ? (e[Fr] = r) : delete e[Fr]), o;
		}
		hd.exports = T0;
	});
	var yd = u((yj, _d) => {
		var I0 = Object.prototype,
			O0 = I0.toString;
		function b0(e) {
			return O0.call(e);
		}
		_d.exports = b0;
	});
	var Dt = u((mj, Id) => {
		var md = rr(),
			S0 = gd(),
			A0 = yd(),
			w0 = "[object Null]",
			R0 = "[object Undefined]",
			Td = md ? md.toStringTag : void 0;
		function C0(e) {
			return e == null
				? e === void 0
					? R0
					: w0
				: Td && Td in Object(e)
				? S0(e)
				: A0(e);
		}
		Id.exports = C0;
	});
	var ut = u((Tj, Od) => {
		function N0(e) {
			var t = typeof e;
			return e != null && (t == "object" || t == "function");
		}
		Od.exports = N0;
	});
	var ta = u((Ij, bd) => {
		var q0 = Dt(),
			x0 = ut(),
			P0 = "[object AsyncFunction]",
			L0 = "[object Function]",
			D0 = "[object GeneratorFunction]",
			M0 = "[object Proxy]";
		function F0(e) {
			if (!x0(e)) return !1;
			var t = q0(e);
			return t == L0 || t == D0 || t == P0 || t == M0;
		}
		bd.exports = F0;
	});
	var Ad = u((Oj, Sd) => {
		var G0 = Ze(),
			X0 = G0["__core-js_shared__"];
		Sd.exports = X0;
	});
	var Cd = u((bj, Rd) => {
		var ra = Ad(),
			wd = (function () {
				var e = /[^.]+$/.exec((ra && ra.keys && ra.keys.IE_PROTO) || "");
				return e ? "Symbol(src)_1." + e : "";
			})();
		function U0(e) {
			return !!wd && wd in e;
		}
		Rd.exports = U0;
	});
	var na = u((Sj, Nd) => {
		var V0 = Function.prototype,
			W0 = V0.toString;
		function B0(e) {
			if (e != null) {
				try {
					return W0.call(e);
				} catch {}
				try {
					return e + "";
				} catch {}
			}
			return "";
		}
		Nd.exports = B0;
	});
	var xd = u((Aj, qd) => {
		var H0 = ta(),
			j0 = Cd(),
			k0 = ut(),
			K0 = na(),
			z0 = /[\\^$.*+?()[\]{}|]/g,
			Y0 = /^\[object .+?Constructor\]$/,
			$0 = Function.prototype,
			Q0 = Object.prototype,
			Z0 = $0.toString,
			J0 = Q0.hasOwnProperty,
			eR = RegExp(
				"^" +
					Z0.call(J0)
						.replace(z0, "\\$&")
						.replace(
							/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
							"$1.*?"
						) +
					"$"
			);
		function tR(e) {
			if (!k0(e) || j0(e)) return !1;
			var t = H0(e) ? eR : Y0;
			return t.test(K0(e));
		}
		qd.exports = tR;
	});
	var Ld = u((wj, Pd) => {
		function rR(e, t) {
			return e?.[t];
		}
		Pd.exports = rR;
	});
	var It = u((Rj, Dd) => {
		var nR = xd(),
			iR = Ld();
		function oR(e, t) {
			var r = iR(e, t);
			return nR(r) ? r : void 0;
		}
		Dd.exports = oR;
	});
	var Fn = u((Cj, Md) => {
		var aR = It(),
			sR = Ze(),
			uR = aR(sR, "Map");
		Md.exports = uR;
	});
	var Gr = u((Nj, Fd) => {
		var cR = It(),
			lR = cR(Object, "create");
		Fd.exports = lR;
	});
	var Ud = u((qj, Xd) => {
		var Gd = Gr();
		function fR() {
			(this.__data__ = Gd ? Gd(null) : {}), (this.size = 0);
		}
		Xd.exports = fR;
	});
	var Wd = u((xj, Vd) => {
		function dR(e) {
			var t = this.has(e) && delete this.__data__[e];
			return (this.size -= t ? 1 : 0), t;
		}
		Vd.exports = dR;
	});
	var Hd = u((Pj, Bd) => {
		var pR = Gr(),
			vR = "__lodash_hash_undefined__",
			ER = Object.prototype,
			hR = ER.hasOwnProperty;
		function gR(e) {
			var t = this.__data__;
			if (pR) {
				var r = t[e];
				return r === vR ? void 0 : r;
			}
			return hR.call(t, e) ? t[e] : void 0;
		}
		Bd.exports = gR;
	});
	var kd = u((Lj, jd) => {
		var _R = Gr(),
			yR = Object.prototype,
			mR = yR.hasOwnProperty;
		function TR(e) {
			var t = this.__data__;
			return _R ? t[e] !== void 0 : mR.call(t, e);
		}
		jd.exports = TR;
	});
	var zd = u((Dj, Kd) => {
		var IR = Gr(),
			OR = "__lodash_hash_undefined__";
		function bR(e, t) {
			var r = this.__data__;
			return (
				(this.size += this.has(e) ? 0 : 1),
				(r[e] = IR && t === void 0 ? OR : t),
				this
			);
		}
		Kd.exports = bR;
	});
	var $d = u((Mj, Yd) => {
		var SR = Ud(),
			AR = Wd(),
			wR = Hd(),
			RR = kd(),
			CR = zd();
		function nr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r; ) {
				var n = e[t];
				this.set(n[0], n[1]);
			}
		}
		nr.prototype.clear = SR;
		nr.prototype.delete = AR;
		nr.prototype.get = wR;
		nr.prototype.has = RR;
		nr.prototype.set = CR;
		Yd.exports = nr;
	});
	var Jd = u((Fj, Zd) => {
		var Qd = $d(),
			NR = Mr(),
			qR = Fn();
		function xR() {
			(this.size = 0),
				(this.__data__ = {
					hash: new Qd(),
					map: new (qR || NR)(),
					string: new Qd(),
				});
		}
		Zd.exports = xR;
	});
	var tp = u((Gj, ep) => {
		function PR(e) {
			var t = typeof e;
			return t == "string" || t == "number" || t == "symbol" || t == "boolean"
				? e !== "__proto__"
				: e === null;
		}
		ep.exports = PR;
	});
	var Xr = u((Xj, rp) => {
		var LR = tp();
		function DR(e, t) {
			var r = e.__data__;
			return LR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map;
		}
		rp.exports = DR;
	});
	var ip = u((Uj, np) => {
		var MR = Xr();
		function FR(e) {
			var t = MR(this, e).delete(e);
			return (this.size -= t ? 1 : 0), t;
		}
		np.exports = FR;
	});
	var ap = u((Vj, op) => {
		var GR = Xr();
		function XR(e) {
			return GR(this, e).get(e);
		}
		op.exports = XR;
	});
	var up = u((Wj, sp) => {
		var UR = Xr();
		function VR(e) {
			return UR(this, e).has(e);
		}
		sp.exports = VR;
	});
	var lp = u((Bj, cp) => {
		var WR = Xr();
		function BR(e, t) {
			var r = WR(this, e),
				n = r.size;
			return r.set(e, t), (this.size += r.size == n ? 0 : 1), this;
		}
		cp.exports = BR;
	});
	var Gn = u((Hj, fp) => {
		var HR = Jd(),
			jR = ip(),
			kR = ap(),
			KR = up(),
			zR = lp();
		function ir(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r; ) {
				var n = e[t];
				this.set(n[0], n[1]);
			}
		}
		ir.prototype.clear = HR;
		ir.prototype.delete = jR;
		ir.prototype.get = kR;
		ir.prototype.has = KR;
		ir.prototype.set = zR;
		fp.exports = ir;
	});
	var pp = u((jj, dp) => {
		var YR = Mr(),
			$R = Fn(),
			QR = Gn(),
			ZR = 200;
		function JR(e, t) {
			var r = this.__data__;
			if (r instanceof YR) {
				var n = r.__data__;
				if (!$R || n.length < ZR - 1)
					return n.push([e, t]), (this.size = ++r.size), this;
				r = this.__data__ = new QR(n);
			}
			return r.set(e, t), (this.size = r.size), this;
		}
		dp.exports = JR;
	});
	var ia = u((kj, vp) => {
		var eC = Mr(),
			tC = id(),
			rC = ad(),
			nC = ud(),
			iC = ld(),
			oC = pp();
		function or(e) {
			var t = (this.__data__ = new eC(e));
			this.size = t.size;
		}
		or.prototype.clear = tC;
		or.prototype.delete = rC;
		or.prototype.get = nC;
		or.prototype.has = iC;
		or.prototype.set = oC;
		vp.exports = or;
	});
	var hp = u((Kj, Ep) => {
		var aC = "__lodash_hash_undefined__";
		function sC(e) {
			return this.__data__.set(e, aC), this;
		}
		Ep.exports = sC;
	});
	var _p = u((zj, gp) => {
		function uC(e) {
			return this.__data__.has(e);
		}
		gp.exports = uC;
	});
	var mp = u((Yj, yp) => {
		var cC = Gn(),
			lC = hp(),
			fC = _p();
		function Xn(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.__data__ = new cC(); ++t < r; ) this.add(e[t]);
		}
		Xn.prototype.add = Xn.prototype.push = lC;
		Xn.prototype.has = fC;
		yp.exports = Xn;
	});
	var Ip = u(($j, Tp) => {
		function dC(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
				if (t(e[r], r, e)) return !0;
			return !1;
		}
		Tp.exports = dC;
	});
	var bp = u((Qj, Op) => {
		function pC(e, t) {
			return e.has(t);
		}
		Op.exports = pC;
	});
	var oa = u((Zj, Sp) => {
		var vC = mp(),
			EC = Ip(),
			hC = bp(),
			gC = 1,
			_C = 2;
		function yC(e, t, r, n, o, i) {
			var a = r & gC,
				s = e.length,
				c = t.length;
			if (s != c && !(a && c > s)) return !1;
			var f = i.get(e),
				E = i.get(t);
			if (f && E) return f == t && E == e;
			var p = -1,
				h = !0,
				g = r & _C ? new vC() : void 0;
			for (i.set(e, t), i.set(t, e); ++p < s; ) {
				var S = e[p],
					b = t[p];
				if (n) var x = a ? n(b, S, p, t, e, i) : n(S, b, p, e, t, i);
				if (x !== void 0) {
					if (x) continue;
					h = !1;
					break;
				}
				if (g) {
					if (
						!EC(t, function (A, w) {
							if (!hC(g, w) && (S === A || o(S, A, r, n, i))) return g.push(w);
						})
					) {
						h = !1;
						break;
					}
				} else if (!(S === b || o(S, b, r, n, i))) {
					h = !1;
					break;
				}
			}
			return i.delete(e), i.delete(t), h;
		}
		Sp.exports = yC;
	});
	var wp = u((Jj, Ap) => {
		var mC = Ze(),
			TC = mC.Uint8Array;
		Ap.exports = TC;
	});
	var Cp = u((e5, Rp) => {
		function IC(e) {
			var t = -1,
				r = Array(e.size);
			return (
				e.forEach(function (n, o) {
					r[++t] = [o, n];
				}),
				r
			);
		}
		Rp.exports = IC;
	});
	var qp = u((t5, Np) => {
		function OC(e) {
			var t = -1,
				r = Array(e.size);
			return (
				e.forEach(function (n) {
					r[++t] = n;
				}),
				r
			);
		}
		Np.exports = OC;
	});
	var Mp = u((r5, Dp) => {
		var xp = rr(),
			Pp = wp(),
			bC = Mn(),
			SC = oa(),
			AC = Cp(),
			wC = qp(),
			RC = 1,
			CC = 2,
			NC = "[object Boolean]",
			qC = "[object Date]",
			xC = "[object Error]",
			PC = "[object Map]",
			LC = "[object Number]",
			DC = "[object RegExp]",
			MC = "[object Set]",
			FC = "[object String]",
			GC = "[object Symbol]",
			XC = "[object ArrayBuffer]",
			UC = "[object DataView]",
			Lp = xp ? xp.prototype : void 0,
			aa = Lp ? Lp.valueOf : void 0;
		function VC(e, t, r, n, o, i, a) {
			switch (r) {
				case UC:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
						return !1;
					(e = e.buffer), (t = t.buffer);
				case XC:
					return !(e.byteLength != t.byteLength || !i(new Pp(e), new Pp(t)));
				case NC:
				case qC:
				case LC:
					return bC(+e, +t);
				case xC:
					return e.name == t.name && e.message == t.message;
				case DC:
				case FC:
					return e == t + "";
				case PC:
					var s = AC;
				case MC:
					var c = n & RC;
					if ((s || (s = wC), e.size != t.size && !c)) return !1;
					var f = a.get(e);
					if (f) return f == t;
					(n |= CC), a.set(e, t);
					var E = SC(s(e), s(t), n, o, i, a);
					return a.delete(e), E;
				case GC:
					if (aa) return aa.call(e) == aa.call(t);
			}
			return !1;
		}
		Dp.exports = VC;
	});
	var Un = u((n5, Fp) => {
		function WC(e, t) {
			for (var r = -1, n = t.length, o = e.length; ++r < n; ) e[o + r] = t[r];
			return e;
		}
		Fp.exports = WC;
	});
	var Ne = u((i5, Gp) => {
		var BC = Array.isArray;
		Gp.exports = BC;
	});
	var sa = u((o5, Xp) => {
		var HC = Un(),
			jC = Ne();
		function kC(e, t, r) {
			var n = t(e);
			return jC(e) ? n : HC(n, r(e));
		}
		Xp.exports = kC;
	});
	var Vp = u((a5, Up) => {
		function KC(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
				var a = e[r];
				t(a, r, e) && (i[o++] = a);
			}
			return i;
		}
		Up.exports = KC;
	});
	var ua = u((s5, Wp) => {
		function zC() {
			return [];
		}
		Wp.exports = zC;
	});
	var ca = u((u5, Hp) => {
		var YC = Vp(),
			$C = ua(),
			QC = Object.prototype,
			ZC = QC.propertyIsEnumerable,
			Bp = Object.getOwnPropertySymbols,
			JC = Bp
				? function (e) {
						return e == null
							? []
							: ((e = Object(e)),
							  YC(Bp(e), function (t) {
									return ZC.call(e, t);
							  }));
				  }
				: $C;
		Hp.exports = JC;
	});
	var kp = u((c5, jp) => {
		function eN(e, t) {
			for (var r = -1, n = Array(e); ++r < e; ) n[r] = t(r);
			return n;
		}
		jp.exports = eN;
	});
	var Ot = u((l5, Kp) => {
		function tN(e) {
			return e != null && typeof e == "object";
		}
		Kp.exports = tN;
	});
	var Yp = u((f5, zp) => {
		var rN = Dt(),
			nN = Ot(),
			iN = "[object Arguments]";
		function oN(e) {
			return nN(e) && rN(e) == iN;
		}
		zp.exports = oN;
	});
	var Ur = u((d5, Zp) => {
		var $p = Yp(),
			aN = Ot(),
			Qp = Object.prototype,
			sN = Qp.hasOwnProperty,
			uN = Qp.propertyIsEnumerable,
			cN = $p(
				(function () {
					return arguments;
				})()
			)
				? $p
				: function (e) {
						return aN(e) && sN.call(e, "callee") && !uN.call(e, "callee");
				  };
		Zp.exports = cN;
	});
	var ev = u((p5, Jp) => {
		function lN() {
			return !1;
		}
		Jp.exports = lN;
	});
	var Vn = u((Vr, ar) => {
		var fN = Ze(),
			dN = ev(),
			nv = typeof Vr == "object" && Vr && !Vr.nodeType && Vr,
			tv = nv && typeof ar == "object" && ar && !ar.nodeType && ar,
			pN = tv && tv.exports === nv,
			rv = pN ? fN.Buffer : void 0,
			vN = rv ? rv.isBuffer : void 0,
			EN = vN || dN;
		ar.exports = EN;
	});
	var Wn = u((v5, iv) => {
		var hN = 9007199254740991,
			gN = /^(?:0|[1-9]\d*)$/;
		function _N(e, t) {
			var r = typeof e;
			return (
				(t = t ?? hN),
				!!t &&
					(r == "number" || (r != "symbol" && gN.test(e))) &&
					e > -1 &&
					e % 1 == 0 &&
					e < t
			);
		}
		iv.exports = _N;
	});
	var Bn = u((E5, ov) => {
		var yN = 9007199254740991;
		function mN(e) {
			return typeof e == "number" && e > -1 && e % 1 == 0 && e <= yN;
		}
		ov.exports = mN;
	});
	var sv = u((h5, av) => {
		var TN = Dt(),
			IN = Bn(),
			ON = Ot(),
			bN = "[object Arguments]",
			SN = "[object Array]",
			AN = "[object Boolean]",
			wN = "[object Date]",
			RN = "[object Error]",
			CN = "[object Function]",
			NN = "[object Map]",
			qN = "[object Number]",
			xN = "[object Object]",
			PN = "[object RegExp]",
			LN = "[object Set]",
			DN = "[object String]",
			MN = "[object WeakMap]",
			FN = "[object ArrayBuffer]",
			GN = "[object DataView]",
			XN = "[object Float32Array]",
			UN = "[object Float64Array]",
			VN = "[object Int8Array]",
			WN = "[object Int16Array]",
			BN = "[object Int32Array]",
			HN = "[object Uint8Array]",
			jN = "[object Uint8ClampedArray]",
			kN = "[object Uint16Array]",
			KN = "[object Uint32Array]",
			ye = {};
		ye[XN] =
			ye[UN] =
			ye[VN] =
			ye[WN] =
			ye[BN] =
			ye[HN] =
			ye[jN] =
			ye[kN] =
			ye[KN] =
				!0;
		ye[bN] =
			ye[SN] =
			ye[FN] =
			ye[AN] =
			ye[GN] =
			ye[wN] =
			ye[RN] =
			ye[CN] =
			ye[NN] =
			ye[qN] =
			ye[xN] =
			ye[PN] =
			ye[LN] =
			ye[DN] =
			ye[MN] =
				!1;
		function zN(e) {
			return ON(e) && IN(e.length) && !!ye[TN(e)];
		}
		av.exports = zN;
	});
	var cv = u((g5, uv) => {
		function YN(e) {
			return function (t) {
				return e(t);
			};
		}
		uv.exports = YN;
	});
	var fv = u((Wr, sr) => {
		var $N = ea(),
			lv = typeof Wr == "object" && Wr && !Wr.nodeType && Wr,
			Br = lv && typeof sr == "object" && sr && !sr.nodeType && sr,
			QN = Br && Br.exports === lv,
			la = QN && $N.process,
			ZN = (function () {
				try {
					var e = Br && Br.require && Br.require("util").types;
					return e || (la && la.binding && la.binding("util"));
				} catch {}
			})();
		sr.exports = ZN;
	});
	var Hn = u((_5, vv) => {
		var JN = sv(),
			eq = cv(),
			dv = fv(),
			pv = dv && dv.isTypedArray,
			tq = pv ? eq(pv) : JN;
		vv.exports = tq;
	});
	var fa = u((y5, Ev) => {
		var rq = kp(),
			nq = Ur(),
			iq = Ne(),
			oq = Vn(),
			aq = Wn(),
			sq = Hn(),
			uq = Object.prototype,
			cq = uq.hasOwnProperty;
		function lq(e, t) {
			var r = iq(e),
				n = !r && nq(e),
				o = !r && !n && oq(e),
				i = !r && !n && !o && sq(e),
				a = r || n || o || i,
				s = a ? rq(e.length, String) : [],
				c = s.length;
			for (var f in e)
				(t || cq.call(e, f)) &&
					!(
						a &&
						(f == "length" ||
							(o && (f == "offset" || f == "parent")) ||
							(i &&
								(f == "buffer" || f == "byteLength" || f == "byteOffset")) ||
							aq(f, c))
					) &&
					s.push(f);
			return s;
		}
		Ev.exports = lq;
	});
	var jn = u((m5, hv) => {
		var fq = Object.prototype;
		function dq(e) {
			var t = e && e.constructor,
				r = (typeof t == "function" && t.prototype) || fq;
			return e === r;
		}
		hv.exports = dq;
	});
	var da = u((T5, gv) => {
		function pq(e, t) {
			return function (r) {
				return e(t(r));
			};
		}
		gv.exports = pq;
	});
	var yv = u((I5, _v) => {
		var vq = da(),
			Eq = vq(Object.keys, Object);
		_v.exports = Eq;
	});
	var kn = u((O5, mv) => {
		var hq = jn(),
			gq = yv(),
			_q = Object.prototype,
			yq = _q.hasOwnProperty;
		function mq(e) {
			if (!hq(e)) return gq(e);
			var t = [];
			for (var r in Object(e)) yq.call(e, r) && r != "constructor" && t.push(r);
			return t;
		}
		mv.exports = mq;
	});
	var Mt = u((b5, Tv) => {
		var Tq = ta(),
			Iq = Bn();
		function Oq(e) {
			return e != null && Iq(e.length) && !Tq(e);
		}
		Tv.exports = Oq;
	});
	var Hr = u((S5, Iv) => {
		var bq = fa(),
			Sq = kn(),
			Aq = Mt();
		function wq(e) {
			return Aq(e) ? bq(e) : Sq(e);
		}
		Iv.exports = wq;
	});
	var bv = u((A5, Ov) => {
		var Rq = sa(),
			Cq = ca(),
			Nq = Hr();
		function qq(e) {
			return Rq(e, Nq, Cq);
		}
		Ov.exports = qq;
	});
	var wv = u((w5, Av) => {
		var Sv = bv(),
			xq = 1,
			Pq = Object.prototype,
			Lq = Pq.hasOwnProperty;
		function Dq(e, t, r, n, o, i) {
			var a = r & xq,
				s = Sv(e),
				c = s.length,
				f = Sv(t),
				E = f.length;
			if (c != E && !a) return !1;
			for (var p = c; p--; ) {
				var h = s[p];
				if (!(a ? h in t : Lq.call(t, h))) return !1;
			}
			var g = i.get(e),
				S = i.get(t);
			if (g && S) return g == t && S == e;
			var b = !0;
			i.set(e, t), i.set(t, e);
			for (var x = a; ++p < c; ) {
				h = s[p];
				var A = e[h],
					w = t[h];
				if (n) var T = a ? n(w, A, h, t, e, i) : n(A, w, h, e, t, i);
				if (!(T === void 0 ? A === w || o(A, w, r, n, i) : T)) {
					b = !1;
					break;
				}
				x || (x = h == "constructor");
			}
			if (b && !x) {
				var N = e.constructor,
					C = t.constructor;
				N != C &&
					"constructor" in e &&
					"constructor" in t &&
					!(
						typeof N == "function" &&
						N instanceof N &&
						typeof C == "function" &&
						C instanceof C
					) &&
					(b = !1);
			}
			return i.delete(e), i.delete(t), b;
		}
		Av.exports = Dq;
	});
	var Cv = u((R5, Rv) => {
		var Mq = It(),
			Fq = Ze(),
			Gq = Mq(Fq, "DataView");
		Rv.exports = Gq;
	});
	var qv = u((C5, Nv) => {
		var Xq = It(),
			Uq = Ze(),
			Vq = Xq(Uq, "Promise");
		Nv.exports = Vq;
	});
	var Pv = u((N5, xv) => {
		var Wq = It(),
			Bq = Ze(),
			Hq = Wq(Bq, "Set");
		xv.exports = Hq;
	});
	var pa = u((q5, Lv) => {
		var jq = It(),
			kq = Ze(),
			Kq = jq(kq, "WeakMap");
		Lv.exports = Kq;
	});
	var Kn = u((x5, Vv) => {
		var va = Cv(),
			Ea = Fn(),
			ha = qv(),
			ga = Pv(),
			_a = pa(),
			Uv = Dt(),
			ur = na(),
			Dv = "[object Map]",
			zq = "[object Object]",
			Mv = "[object Promise]",
			Fv = "[object Set]",
			Gv = "[object WeakMap]",
			Xv = "[object DataView]",
			Yq = ur(va),
			$q = ur(Ea),
			Qq = ur(ha),
			Zq = ur(ga),
			Jq = ur(_a),
			Ft = Uv;
		((va && Ft(new va(new ArrayBuffer(1))) != Xv) ||
			(Ea && Ft(new Ea()) != Dv) ||
			(ha && Ft(ha.resolve()) != Mv) ||
			(ga && Ft(new ga()) != Fv) ||
			(_a && Ft(new _a()) != Gv)) &&
			(Ft = function (e) {
				var t = Uv(e),
					r = t == zq ? e.constructor : void 0,
					n = r ? ur(r) : "";
				if (n)
					switch (n) {
						case Yq:
							return Xv;
						case $q:
							return Dv;
						case Qq:
							return Mv;
						case Zq:
							return Fv;
						case Jq:
							return Gv;
					}
				return t;
			});
		Vv.exports = Ft;
	});
	var Yv = u((P5, zv) => {
		var ya = ia(),
			ex = oa(),
			tx = Mp(),
			rx = wv(),
			Wv = Kn(),
			Bv = Ne(),
			Hv = Vn(),
			nx = Hn(),
			ix = 1,
			jv = "[object Arguments]",
			kv = "[object Array]",
			zn = "[object Object]",
			ox = Object.prototype,
			Kv = ox.hasOwnProperty;
		function ax(e, t, r, n, o, i) {
			var a = Bv(e),
				s = Bv(t),
				c = a ? kv : Wv(e),
				f = s ? kv : Wv(t);
			(c = c == jv ? zn : c), (f = f == jv ? zn : f);
			var E = c == zn,
				p = f == zn,
				h = c == f;
			if (h && Hv(e)) {
				if (!Hv(t)) return !1;
				(a = !0), (E = !1);
			}
			if (h && !E)
				return (
					i || (i = new ya()),
					a || nx(e) ? ex(e, t, r, n, o, i) : tx(e, t, c, r, n, o, i)
				);
			if (!(r & ix)) {
				var g = E && Kv.call(e, "__wrapped__"),
					S = p && Kv.call(t, "__wrapped__");
				if (g || S) {
					var b = g ? e.value() : e,
						x = S ? t.value() : t;
					return i || (i = new ya()), o(b, x, r, n, i);
				}
			}
			return h ? (i || (i = new ya()), rx(e, t, r, n, o, i)) : !1;
		}
		zv.exports = ax;
	});
	var ma = u((L5, Zv) => {
		var sx = Yv(),
			$v = Ot();
		function Qv(e, t, r, n, o) {
			return e === t
				? !0
				: e == null || t == null || (!$v(e) && !$v(t))
				? e !== e && t !== t
				: sx(e, t, r, n, Qv, o);
		}
		Zv.exports = Qv;
	});
	var eE = u((D5, Jv) => {
		var ux = ia(),
			cx = ma(),
			lx = 1,
			fx = 2;
		function dx(e, t, r, n) {
			var o = r.length,
				i = o,
				a = !n;
			if (e == null) return !i;
			for (e = Object(e); o--; ) {
				var s = r[o];
				if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1;
			}
			for (; ++o < i; ) {
				s = r[o];
				var c = s[0],
					f = e[c],
					E = s[1];
				if (a && s[2]) {
					if (f === void 0 && !(c in e)) return !1;
				} else {
					var p = new ux();
					if (n) var h = n(f, E, c, e, t, p);
					if (!(h === void 0 ? cx(E, f, lx | fx, n, p) : h)) return !1;
				}
			}
			return !0;
		}
		Jv.exports = dx;
	});
	var Ta = u((M5, tE) => {
		var px = ut();
		function vx(e) {
			return e === e && !px(e);
		}
		tE.exports = vx;
	});
	var nE = u((F5, rE) => {
		var Ex = Ta(),
			hx = Hr();
		function gx(e) {
			for (var t = hx(e), r = t.length; r--; ) {
				var n = t[r],
					o = e[n];
				t[r] = [n, o, Ex(o)];
			}
			return t;
		}
		rE.exports = gx;
	});
	var Ia = u((G5, iE) => {
		function _x(e, t) {
			return function (r) {
				return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r));
			};
		}
		iE.exports = _x;
	});
	var aE = u((X5, oE) => {
		var yx = eE(),
			mx = nE(),
			Tx = Ia();
		function Ix(e) {
			var t = mx(e);
			return t.length == 1 && t[0][2]
				? Tx(t[0][0], t[0][1])
				: function (r) {
						return r === e || yx(r, e, t);
				  };
		}
		oE.exports = Ix;
	});
	var jr = u((U5, sE) => {
		var Ox = Dt(),
			bx = Ot(),
			Sx = "[object Symbol]";
		function Ax(e) {
			return typeof e == "symbol" || (bx(e) && Ox(e) == Sx);
		}
		sE.exports = Ax;
	});
	var Yn = u((V5, uE) => {
		var wx = Ne(),
			Rx = jr(),
			Cx = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			Nx = /^\w*$/;
		function qx(e, t) {
			if (wx(e)) return !1;
			var r = typeof e;
			return r == "number" ||
				r == "symbol" ||
				r == "boolean" ||
				e == null ||
				Rx(e)
				? !0
				: Nx.test(e) || !Cx.test(e) || (t != null && e in Object(t));
		}
		uE.exports = qx;
	});
	var fE = u((W5, lE) => {
		var cE = Gn(),
			xx = "Expected a function";
		function Oa(e, t) {
			if (typeof e != "function" || (t != null && typeof t != "function"))
				throw new TypeError(xx);
			var r = function () {
				var n = arguments,
					o = t ? t.apply(this, n) : n[0],
					i = r.cache;
				if (i.has(o)) return i.get(o);
				var a = e.apply(this, n);
				return (r.cache = i.set(o, a) || i), a;
			};
			return (r.cache = new (Oa.Cache || cE)()), r;
		}
		Oa.Cache = cE;
		lE.exports = Oa;
	});
	var pE = u((B5, dE) => {
		var Px = fE(),
			Lx = 500;
		function Dx(e) {
			var t = Px(e, function (n) {
					return r.size === Lx && r.clear(), n;
				}),
				r = t.cache;
			return t;
		}
		dE.exports = Dx;
	});
	var EE = u((H5, vE) => {
		var Mx = pE(),
			Fx =
				/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			Gx = /\\(\\)?/g,
			Xx = Mx(function (e) {
				var t = [];
				return (
					e.charCodeAt(0) === 46 && t.push(""),
					e.replace(Fx, function (r, n, o, i) {
						t.push(o ? i.replace(Gx, "$1") : n || r);
					}),
					t
				);
			});
		vE.exports = Xx;
	});
	var ba = u((j5, hE) => {
		function Ux(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
				o[r] = t(e[r], r, e);
			return o;
		}
		hE.exports = Ux;
	});
	var IE = u((k5, TE) => {
		var gE = rr(),
			Vx = ba(),
			Wx = Ne(),
			Bx = jr(),
			Hx = 1 / 0,
			_E = gE ? gE.prototype : void 0,
			yE = _E ? _E.toString : void 0;
		function mE(e) {
			if (typeof e == "string") return e;
			if (Wx(e)) return Vx(e, mE) + "";
			if (Bx(e)) return yE ? yE.call(e) : "";
			var t = e + "";
			return t == "0" && 1 / e == -Hx ? "-0" : t;
		}
		TE.exports = mE;
	});
	var bE = u((K5, OE) => {
		var jx = IE();
		function kx(e) {
			return e == null ? "" : jx(e);
		}
		OE.exports = kx;
	});
	var kr = u((z5, SE) => {
		var Kx = Ne(),
			zx = Yn(),
			Yx = EE(),
			$x = bE();
		function Qx(e, t) {
			return Kx(e) ? e : zx(e, t) ? [e] : Yx($x(e));
		}
		SE.exports = Qx;
	});
	var cr = u((Y5, AE) => {
		var Zx = jr(),
			Jx = 1 / 0;
		function eP(e) {
			if (typeof e == "string" || Zx(e)) return e;
			var t = e + "";
			return t == "0" && 1 / e == -Jx ? "-0" : t;
		}
		AE.exports = eP;
	});
	var $n = u(($5, wE) => {
		var tP = kr(),
			rP = cr();
		function nP(e, t) {
			t = tP(t, e);
			for (var r = 0, n = t.length; e != null && r < n; ) e = e[rP(t[r++])];
			return r && r == n ? e : void 0;
		}
		wE.exports = nP;
	});
	var Qn = u((Q5, RE) => {
		var iP = $n();
		function oP(e, t, r) {
			var n = e == null ? void 0 : iP(e, t);
			return n === void 0 ? r : n;
		}
		RE.exports = oP;
	});
	var NE = u((Z5, CE) => {
		function aP(e, t) {
			return e != null && t in Object(e);
		}
		CE.exports = aP;
	});
	var xE = u((J5, qE) => {
		var sP = kr(),
			uP = Ur(),
			cP = Ne(),
			lP = Wn(),
			fP = Bn(),
			dP = cr();
		function pP(e, t, r) {
			t = sP(t, e);
			for (var n = -1, o = t.length, i = !1; ++n < o; ) {
				var a = dP(t[n]);
				if (!(i = e != null && r(e, a))) break;
				e = e[a];
			}
			return i || ++n != o
				? i
				: ((o = e == null ? 0 : e.length),
				  !!o && fP(o) && lP(a, o) && (cP(e) || uP(e)));
		}
		qE.exports = pP;
	});
	var LE = u((ek, PE) => {
		var vP = NE(),
			EP = xE();
		function hP(e, t) {
			return e != null && EP(e, t, vP);
		}
		PE.exports = hP;
	});
	var ME = u((tk, DE) => {
		var gP = ma(),
			_P = Qn(),
			yP = LE(),
			mP = Yn(),
			TP = Ta(),
			IP = Ia(),
			OP = cr(),
			bP = 1,
			SP = 2;
		function AP(e, t) {
			return mP(e) && TP(t)
				? IP(OP(e), t)
				: function (r) {
						var n = _P(r, e);
						return n === void 0 && n === t ? yP(r, e) : gP(t, n, bP | SP);
				  };
		}
		DE.exports = AP;
	});
	var Zn = u((rk, FE) => {
		function wP(e) {
			return e;
		}
		FE.exports = wP;
	});
	var Sa = u((nk, GE) => {
		function RP(e) {
			return function (t) {
				return t?.[e];
			};
		}
		GE.exports = RP;
	});
	var UE = u((ik, XE) => {
		var CP = $n();
		function NP(e) {
			return function (t) {
				return CP(t, e);
			};
		}
		XE.exports = NP;
	});
	var WE = u((ok, VE) => {
		var qP = Sa(),
			xP = UE(),
			PP = Yn(),
			LP = cr();
		function DP(e) {
			return PP(e) ? qP(LP(e)) : xP(e);
		}
		VE.exports = DP;
	});
	var bt = u((ak, BE) => {
		var MP = aE(),
			FP = ME(),
			GP = Zn(),
			XP = Ne(),
			UP = WE();
		function VP(e) {
			return typeof e == "function"
				? e
				: e == null
				? GP
				: typeof e == "object"
				? XP(e)
					? FP(e[0], e[1])
					: MP(e)
				: UP(e);
		}
		BE.exports = VP;
	});
	var Aa = u((sk, HE) => {
		var WP = bt(),
			BP = Mt(),
			HP = Hr();
		function jP(e) {
			return function (t, r, n) {
				var o = Object(t);
				if (!BP(t)) {
					var i = WP(r, 3);
					(t = HP(t)),
						(r = function (s) {
							return i(o[s], s, o);
						});
				}
				var a = e(t, r, n);
				return a > -1 ? o[i ? t[a] : a] : void 0;
			};
		}
		HE.exports = jP;
	});
	var wa = u((uk, jE) => {
		function kP(e, t, r, n) {
			for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
				if (t(e[i], i, e)) return i;
			return -1;
		}
		jE.exports = kP;
	});
	var KE = u((ck, kE) => {
		var KP = /\s/;
		function zP(e) {
			for (var t = e.length; t-- && KP.test(e.charAt(t)); );
			return t;
		}
		kE.exports = zP;
	});
	var YE = u((lk, zE) => {
		var YP = KE(),
			$P = /^\s+/;
		function QP(e) {
			return e && e.slice(0, YP(e) + 1).replace($P, "");
		}
		zE.exports = QP;
	});
	var Jn = u((fk, ZE) => {
		var ZP = YE(),
			$E = ut(),
			JP = jr(),
			QE = 0 / 0,
			eL = /^[-+]0x[0-9a-f]+$/i,
			tL = /^0b[01]+$/i,
			rL = /^0o[0-7]+$/i,
			nL = parseInt;
		function iL(e) {
			if (typeof e == "number") return e;
			if (JP(e)) return QE;
			if ($E(e)) {
				var t = typeof e.valueOf == "function" ? e.valueOf() : e;
				e = $E(t) ? t + "" : t;
			}
			if (typeof e != "string") return e === 0 ? e : +e;
			e = ZP(e);
			var r = tL.test(e);
			return r || rL.test(e) ? nL(e.slice(2), r ? 2 : 8) : eL.test(e) ? QE : +e;
		}
		ZE.exports = iL;
	});
	var th = u((dk, eh) => {
		var oL = Jn(),
			JE = 1 / 0,
			aL = 17976931348623157e292;
		function sL(e) {
			if (!e) return e === 0 ? e : 0;
			if (((e = oL(e)), e === JE || e === -JE)) {
				var t = e < 0 ? -1 : 1;
				return t * aL;
			}
			return e === e ? e : 0;
		}
		eh.exports = sL;
	});
	var Ra = u((pk, rh) => {
		var uL = th();
		function cL(e) {
			var t = uL(e),
				r = t % 1;
			return t === t ? (r ? t - r : t) : 0;
		}
		rh.exports = cL;
	});
	var ih = u((vk, nh) => {
		var lL = wa(),
			fL = bt(),
			dL = Ra(),
			pL = Math.max;
		function vL(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var o = r == null ? 0 : dL(r);
			return o < 0 && (o = pL(n + o, 0)), lL(e, fL(t, 3), o);
		}
		nh.exports = vL;
	});
	var Ca = u((Ek, oh) => {
		var EL = Aa(),
			hL = ih(),
			gL = EL(hL);
		oh.exports = gL;
	});
	var ti = u((Me) => {
		"use strict";
		var _L = ot().default;
		Object.defineProperty(Me, "__esModule", { value: !0 });
		Me.withBrowser =
			Me.TRANSFORM_STYLE_PREFIXED =
			Me.TRANSFORM_PREFIXED =
			Me.IS_BROWSER_ENV =
			Me.FLEX_PREFIXED =
			Me.ELEMENT_MATCHES =
				void 0;
		var yL = _L(Ca()),
			sh = typeof window < "u";
		Me.IS_BROWSER_ENV = sh;
		var ei = (e, t) => (sh ? e() : t);
		Me.withBrowser = ei;
		var mL = ei(() =>
			(0, yL.default)(
				[
					"matches",
					"matchesSelector",
					"mozMatchesSelector",
					"msMatchesSelector",
					"oMatchesSelector",
					"webkitMatchesSelector",
				],
				(e) => e in Element.prototype
			)
		);
		Me.ELEMENT_MATCHES = mL;
		var TL = ei(() => {
			let e = document.createElement("i"),
				t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
				r = "";
			try {
				let { length: n } = t;
				for (let o = 0; o < n; o++) {
					let i = t[o];
					if (((e.style.display = i), e.style.display === i)) return i;
				}
				return r;
			} catch {
				return r;
			}
		}, "flex");
		Me.FLEX_PREFIXED = TL;
		var uh = ei(() => {
			let e = document.createElement("i");
			if (e.style.transform == null) {
				let t = ["Webkit", "Moz", "ms"],
					r = "Transform",
					{ length: n } = t;
				for (let o = 0; o < n; o++) {
					let i = t[o] + r;
					if (e.style[i] !== void 0) return i;
				}
			}
			return "transform";
		}, "transform");
		Me.TRANSFORM_PREFIXED = uh;
		var ah = uh.split("transform")[0],
			IL = ah ? ah + "TransformStyle" : "transformStyle";
		Me.TRANSFORM_STYLE_PREFIXED = IL;
	});
	var Na = u((gk, ph) => {
		var OL = 4,
			bL = 0.001,
			SL = 1e-7,
			AL = 10,
			Kr = 11,
			ri = 1 / (Kr - 1),
			wL = typeof Float32Array == "function";
		function ch(e, t) {
			return 1 - 3 * t + 3 * e;
		}
		function lh(e, t) {
			return 3 * t - 6 * e;
		}
		function fh(e) {
			return 3 * e;
		}
		function ni(e, t, r) {
			return ((ch(t, r) * e + lh(t, r)) * e + fh(t)) * e;
		}
		function dh(e, t, r) {
			return 3 * ch(t, r) * e * e + 2 * lh(t, r) * e + fh(t);
		}
		function RL(e, t, r, n, o) {
			var i,
				a,
				s = 0;
			do
				(a = t + (r - t) / 2), (i = ni(a, n, o) - e), i > 0 ? (r = a) : (t = a);
			while (Math.abs(i) > SL && ++s < AL);
			return a;
		}
		function CL(e, t, r, n) {
			for (var o = 0; o < OL; ++o) {
				var i = dh(t, r, n);
				if (i === 0) return t;
				var a = ni(t, r, n) - e;
				t -= a / i;
			}
			return t;
		}
		ph.exports = function (t, r, n, o) {
			if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
				throw new Error("bezier x values must be in [0, 1] range");
			var i = wL ? new Float32Array(Kr) : new Array(Kr);
			if (t !== r || n !== o)
				for (var a = 0; a < Kr; ++a) i[a] = ni(a * ri, t, n);
			function s(c) {
				for (var f = 0, E = 1, p = Kr - 1; E !== p && i[E] <= c; ++E) f += ri;
				--E;
				var h = (c - i[E]) / (i[E + 1] - i[E]),
					g = f + h * ri,
					S = dh(g, t, n);
				return S >= bL ? CL(c, g, t, n) : S === 0 ? g : RL(c, f, f + ri, t, n);
			}
			return function (f) {
				return t === r && n === o
					? f
					: f === 0
					? 0
					: f === 1
					? 1
					: ni(s(f), r, o);
			};
		};
	});
	var qa = u((ne) => {
		"use strict";
		var NL = ot().default;
		Object.defineProperty(ne, "__esModule", { value: !0 });
		ne.bounce = dD;
		ne.bouncePast = pD;
		ne.easeOut = ne.easeInOut = ne.easeIn = ne.ease = void 0;
		ne.inBack = nD;
		ne.inCirc = JL;
		ne.inCubic = GL;
		ne.inElastic = aD;
		ne.inExpo = $L;
		ne.inOutBack = oD;
		ne.inOutCirc = tD;
		ne.inOutCubic = UL;
		ne.inOutElastic = uD;
		ne.inOutExpo = ZL;
		ne.inOutQuad = FL;
		ne.inOutQuart = BL;
		ne.inOutQuint = kL;
		ne.inOutSine = YL;
		ne.inQuad = DL;
		ne.inQuart = VL;
		ne.inQuint = HL;
		ne.inSine = KL;
		ne.outBack = iD;
		ne.outBounce = rD;
		ne.outCirc = eD;
		ne.outCubic = XL;
		ne.outElastic = sD;
		ne.outExpo = QL;
		ne.outQuad = ML;
		ne.outQuart = WL;
		ne.outQuint = jL;
		ne.outSine = zL;
		ne.swingFrom = lD;
		ne.swingFromTo = cD;
		ne.swingTo = fD;
		var ii = NL(Na()),
			gt = 1.70158,
			qL = (0, ii.default)(0.25, 0.1, 0.25, 1);
		ne.ease = qL;
		var xL = (0, ii.default)(0.42, 0, 1, 1);
		ne.easeIn = xL;
		var PL = (0, ii.default)(0, 0, 0.58, 1);
		ne.easeOut = PL;
		var LL = (0, ii.default)(0.42, 0, 0.58, 1);
		ne.easeInOut = LL;
		function DL(e) {
			return Math.pow(e, 2);
		}
		function ML(e) {
			return -(Math.pow(e - 1, 2) - 1);
		}
		function FL(e) {
			return (e /= 0.5) < 1 ? 0.5 * Math.pow(e, 2) : -0.5 * ((e -= 2) * e - 2);
		}
		function GL(e) {
			return Math.pow(e, 3);
		}
		function XL(e) {
			return Math.pow(e - 1, 3) + 1;
		}
		function UL(e) {
			return (e /= 0.5) < 1
				? 0.5 * Math.pow(e, 3)
				: 0.5 * (Math.pow(e - 2, 3) + 2);
		}
		function VL(e) {
			return Math.pow(e, 4);
		}
		function WL(e) {
			return -(Math.pow(e - 1, 4) - 1);
		}
		function BL(e) {
			return (e /= 0.5) < 1
				? 0.5 * Math.pow(e, 4)
				: -0.5 * ((e -= 2) * Math.pow(e, 3) - 2);
		}
		function HL(e) {
			return Math.pow(e, 5);
		}
		function jL(e) {
			return Math.pow(e - 1, 5) + 1;
		}
		function kL(e) {
			return (e /= 0.5) < 1
				? 0.5 * Math.pow(e, 5)
				: 0.5 * (Math.pow(e - 2, 5) + 2);
		}
		function KL(e) {
			return -Math.cos(e * (Math.PI / 2)) + 1;
		}
		function zL(e) {
			return Math.sin(e * (Math.PI / 2));
		}
		function YL(e) {
			return -0.5 * (Math.cos(Math.PI * e) - 1);
		}
		function $L(e) {
			return e === 0 ? 0 : Math.pow(2, 10 * (e - 1));
		}
		function QL(e) {
			return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1;
		}
		function ZL(e) {
			return e === 0
				? 0
				: e === 1
				? 1
				: (e /= 0.5) < 1
				? 0.5 * Math.pow(2, 10 * (e - 1))
				: 0.5 * (-Math.pow(2, -10 * --e) + 2);
		}
		function JL(e) {
			return -(Math.sqrt(1 - e * e) - 1);
		}
		function eD(e) {
			return Math.sqrt(1 - Math.pow(e - 1, 2));
		}
		function tD(e) {
			return (e /= 0.5) < 1
				? -0.5 * (Math.sqrt(1 - e * e) - 1)
				: 0.5 * (Math.sqrt(1 - (e -= 2) * e) + 1);
		}
		function rD(e) {
			return e < 1 / 2.75
				? 7.5625 * e * e
				: e < 2 / 2.75
				? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
				: e < 2.5 / 2.75
				? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
				: 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
		}
		function nD(e) {
			let t = gt;
			return e * e * ((t + 1) * e - t);
		}
		function iD(e) {
			let t = gt;
			return (e -= 1) * e * ((t + 1) * e + t) + 1;
		}
		function oD(e) {
			let t = gt;
			return (e /= 0.5) < 1
				? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
				: 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
		}
		function aD(e) {
			let t = gt,
				r = 0,
				n = 1;
			return e === 0
				? 0
				: e === 1
				? 1
				: (r || (r = 0.3),
				  n < 1
						? ((n = 1), (t = r / 4))
						: (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
				  -(
						n *
						Math.pow(2, 10 * (e -= 1)) *
						Math.sin(((e - t) * (2 * Math.PI)) / r)
				  ));
		}
		function sD(e) {
			let t = gt,
				r = 0,
				n = 1;
			return e === 0
				? 0
				: e === 1
				? 1
				: (r || (r = 0.3),
				  n < 1
						? ((n = 1), (t = r / 4))
						: (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
				  n * Math.pow(2, -10 * e) * Math.sin(((e - t) * (2 * Math.PI)) / r) +
						1);
		}
		function uD(e) {
			let t = gt,
				r = 0,
				n = 1;
			return e === 0
				? 0
				: (e /= 1 / 2) === 2
				? 1
				: (r || (r = 0.3 * 1.5),
				  n < 1
						? ((n = 1), (t = r / 4))
						: (t = (r / (2 * Math.PI)) * Math.asin(1 / n)),
				  e < 1
						? -0.5 *
						  (n *
								Math.pow(2, 10 * (e -= 1)) *
								Math.sin(((e - t) * (2 * Math.PI)) / r))
						: n *
								Math.pow(2, -10 * (e -= 1)) *
								Math.sin(((e - t) * (2 * Math.PI)) / r) *
								0.5 +
						  1);
		}
		function cD(e) {
			let t = gt;
			return (e /= 0.5) < 1
				? 0.5 * (e * e * (((t *= 1.525) + 1) * e - t))
				: 0.5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2);
		}
		function lD(e) {
			let t = gt;
			return e * e * ((t + 1) * e - t);
		}
		function fD(e) {
			let t = gt;
			return (e -= 1) * e * ((t + 1) * e + t) + 1;
		}
		function dD(e) {
			return e < 1 / 2.75
				? 7.5625 * e * e
				: e < 2 / 2.75
				? 7.5625 * (e -= 1.5 / 2.75) * e + 0.75
				: e < 2.5 / 2.75
				? 7.5625 * (e -= 2.25 / 2.75) * e + 0.9375
				: 7.5625 * (e -= 2.625 / 2.75) * e + 0.984375;
		}
		function pD(e) {
			return e < 1 / 2.75
				? 7.5625 * e * e
				: e < 2 / 2.75
				? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + 0.75)
				: e < 2.5 / 2.75
				? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + 0.9375)
				: 2 - (7.5625 * (e -= 2.625 / 2.75) * e + 0.984375);
		}
	});
	var Pa = u((zr) => {
		"use strict";
		var vD = ot().default,
			ED = Kt().default;
		Object.defineProperty(zr, "__esModule", { value: !0 });
		zr.applyEasing = _D;
		zr.createBezierEasing = gD;
		zr.optimizeFloat = xa;
		var vh = ED(qa()),
			hD = vD(Na());
		function xa(e, t = 5, r = 10) {
			let n = Math.pow(r, t),
				o = Number(Math.round(e * n) / n);
			return Math.abs(o) > 1e-4 ? o : 0;
		}
		function gD(e) {
			return (0, hD.default)(...e);
		}
		function _D(e, t, r) {
			return t === 0
				? 0
				: t === 1
				? 1
				: xa(r ? (t > 0 ? r(t) : t) : t > 0 && e && vh[e] ? vh[e](t) : t);
		}
	});
	var _h = u((lr) => {
		"use strict";
		Object.defineProperty(lr, "__esModule", { value: !0 });
		lr.createElementState = gh;
		lr.ixElements = void 0;
		lr.mergeActionState = La;
		var oi = er(),
			hh = Ue(),
			{
				HTML_ELEMENT: mk,
				PLAIN_OBJECT: yD,
				ABSTRACT_NODE: Tk,
				CONFIG_X_VALUE: mD,
				CONFIG_Y_VALUE: TD,
				CONFIG_Z_VALUE: ID,
				CONFIG_VALUE: OD,
				CONFIG_X_UNIT: bD,
				CONFIG_Y_UNIT: SD,
				CONFIG_Z_UNIT: AD,
				CONFIG_UNIT: wD,
			} = hh.IX2EngineConstants,
			{
				IX2_SESSION_STOPPED: RD,
				IX2_INSTANCE_ADDED: CD,
				IX2_ELEMENT_STATE_CHANGED: ND,
			} = hh.IX2EngineActionTypes,
			Eh = {},
			qD = "refState",
			xD = (e = Eh, t = {}) => {
				switch (t.type) {
					case RD:
						return Eh;
					case CD: {
						let {
								elementId: r,
								element: n,
								origin: o,
								actionItem: i,
								refType: a,
							} = t.payload,
							{ actionTypeId: s } = i,
							c = e;
						return (
							(0, oi.getIn)(c, [r, n]) !== n && (c = gh(c, n, a, r, i)),
							La(c, r, s, o, i)
						);
					}
					case ND: {
						let {
							elementId: r,
							actionTypeId: n,
							current: o,
							actionItem: i,
						} = t.payload;
						return La(e, r, n, o, i);
					}
					default:
						return e;
				}
			};
		lr.ixElements = xD;
		function gh(e, t, r, n, o) {
			let i =
				r === yD ? (0, oi.getIn)(o, ["config", "target", "objectId"]) : null;
			return (0, oi.mergeIn)(e, [n], { id: n, ref: t, refId: i, refType: r });
		}
		function La(e, t, r, n, o) {
			let i = LD(o),
				a = [t, qD, r];
			return (0, oi.mergeIn)(e, a, n, i);
		}
		var PD = [
			[mD, bD],
			[TD, SD],
			[ID, AD],
			[OD, wD],
		];
		function LD(e) {
			let { config: t } = e;
			return PD.reduce((r, n) => {
				let o = n[0],
					i = n[1],
					a = t[o],
					s = t[i];
				return a != null && s != null && (r[i] = s), r;
			}, {});
		}
	});
	var yh = u((qe) => {
		"use strict";
		Object.defineProperty(qe, "__esModule", { value: !0 });
		qe.renderPlugin =
			qe.getPluginOrigin =
			qe.getPluginDuration =
			qe.getPluginDestination =
			qe.getPluginConfig =
			qe.createPluginInstance =
			qe.clearPlugin =
				void 0;
		var DD = (e) => e.value;
		qe.getPluginConfig = DD;
		var MD = (e, t) => {
			if (t.config.duration !== "auto") return null;
			let r = parseFloat(e.getAttribute("data-duration"));
			return r > 0
				? r * 1e3
				: parseFloat(e.getAttribute("data-default-duration")) * 1e3;
		};
		qe.getPluginDuration = MD;
		var FD = (e) => e || { value: 0 };
		qe.getPluginOrigin = FD;
		var GD = (e) => ({ value: e.value });
		qe.getPluginDestination = GD;
		var XD = (e) => {
			let t = window.Webflow.require("lottie").createInstance(e);
			return t.stop(), t.setSubframe(!0), t;
		};
		qe.createPluginInstance = XD;
		var UD = (e, t, r) => {
			if (!e) return;
			let n = t[r.actionTypeId].value / 100;
			e.goToFrame(e.frames * n);
		};
		qe.renderPlugin = UD;
		var VD = (e) => {
			window.Webflow.require("lottie").createInstance(e).stop();
		};
		qe.clearPlugin = VD;
	});
	var Da = u((Re) => {
		"use strict";
		Object.defineProperty(Re, "__esModule", { value: !0 });
		Re.getPluginOrigin =
			Re.getPluginDuration =
			Re.getPluginDestination =
			Re.getPluginConfig =
			Re.createPluginInstance =
			Re.clearPlugin =
				void 0;
		Re.isPluginType = HD;
		Re.renderPlugin = void 0;
		var Gt = yh(),
			mh = Ue(),
			WD = ti(),
			BD = {
				[mh.ActionTypeConsts.PLUGIN_LOTTIE]: {
					getConfig: Gt.getPluginConfig,
					getOrigin: Gt.getPluginOrigin,
					getDuration: Gt.getPluginDuration,
					getDestination: Gt.getPluginDestination,
					createInstance: Gt.createPluginInstance,
					render: Gt.renderPlugin,
					clear: Gt.clearPlugin,
				},
			};
		function HD(e) {
			return e === mh.ActionTypeConsts.PLUGIN_LOTTIE;
		}
		var Xt = (e) => (t) => {
				if (!WD.IS_BROWSER_ENV) return () => null;
				let r = BD[t];
				if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
				let n = r[e];
				if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
				return n;
			},
			jD = Xt("getConfig");
		Re.getPluginConfig = jD;
		var kD = Xt("getOrigin");
		Re.getPluginOrigin = kD;
		var KD = Xt("getDuration");
		Re.getPluginDuration = KD;
		var zD = Xt("getDestination");
		Re.getPluginDestination = zD;
		var YD = Xt("createInstance");
		Re.createPluginInstance = YD;
		var $D = Xt("render");
		Re.renderPlugin = $D;
		var QD = Xt("clear");
		Re.clearPlugin = QD;
	});
	var Ih = u((Sk, Th) => {
		function ZD(e, t) {
			return e == null || e !== e ? t : e;
		}
		Th.exports = ZD;
	});
	var bh = u((Ak, Oh) => {
		function JD(e, t, r, n) {
			var o = -1,
				i = e == null ? 0 : e.length;
			for (n && i && (r = e[++o]); ++o < i; ) r = t(r, e[o], o, e);
			return r;
		}
		Oh.exports = JD;
	});
	var Ah = u((wk, Sh) => {
		function eM(e) {
			return function (t, r, n) {
				for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
					var c = a[e ? s : ++o];
					if (r(i[c], c, i) === !1) break;
				}
				return t;
			};
		}
		Sh.exports = eM;
	});
	var Rh = u((Rk, wh) => {
		var tM = Ah(),
			rM = tM();
		wh.exports = rM;
	});
	var Ma = u((Ck, Ch) => {
		var nM = Rh(),
			iM = Hr();
		function oM(e, t) {
			return e && nM(e, t, iM);
		}
		Ch.exports = oM;
	});
	var qh = u((Nk, Nh) => {
		var aM = Mt();
		function sM(e, t) {
			return function (r, n) {
				if (r == null) return r;
				if (!aM(r)) return e(r, n);
				for (
					var o = r.length, i = t ? o : -1, a = Object(r);
					(t ? i-- : ++i < o) && n(a[i], i, a) !== !1;

				);
				return r;
			};
		}
		Nh.exports = sM;
	});
	var Fa = u((qk, xh) => {
		var uM = Ma(),
			cM = qh(),
			lM = cM(uM);
		xh.exports = lM;
	});
	var Lh = u((xk, Ph) => {
		function fM(e, t, r, n, o) {
			return (
				o(e, function (i, a, s) {
					r = n ? ((n = !1), i) : t(r, i, a, s);
				}),
				r
			);
		}
		Ph.exports = fM;
	});
	var Mh = u((Pk, Dh) => {
		var dM = bh(),
			pM = Fa(),
			vM = bt(),
			EM = Lh(),
			hM = Ne();
		function gM(e, t, r) {
			var n = hM(e) ? dM : EM,
				o = arguments.length < 3;
			return n(e, vM(t, 4), r, o, pM);
		}
		Dh.exports = gM;
	});
	var Gh = u((Lk, Fh) => {
		var _M = wa(),
			yM = bt(),
			mM = Ra(),
			TM = Math.max,
			IM = Math.min;
		function OM(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var o = n - 1;
			return (
				r !== void 0 &&
					((o = mM(r)), (o = r < 0 ? TM(n + o, 0) : IM(o, n - 1))),
				_M(e, yM(t, 3), o, !0)
			);
		}
		Fh.exports = OM;
	});
	var Uh = u((Dk, Xh) => {
		var bM = Aa(),
			SM = Gh(),
			AM = bM(SM);
		Xh.exports = AM;
	});
	var Wh = u((ai) => {
		"use strict";
		Object.defineProperty(ai, "__esModule", { value: !0 });
		ai.default = void 0;
		var wM = Object.prototype.hasOwnProperty;
		function Vh(e, t) {
			return e === t
				? e !== 0 || t !== 0 || 1 / e === 1 / t
				: e !== e && t !== t;
		}
		function RM(e, t) {
			if (Vh(e, t)) return !0;
			if (
				typeof e != "object" ||
				e === null ||
				typeof t != "object" ||
				t === null
			)
				return !1;
			let r = Object.keys(e),
				n = Object.keys(t);
			if (r.length !== n.length) return !1;
			for (let o = 0; o < r.length; o++)
				if (!wM.call(t, r[o]) || !Vh(e[r[o]], t[r[o]])) return !1;
			return !0;
		}
		var CM = RM;
		ai.default = CM;
	});
	var cg = u((ge) => {
		"use strict";
		var ci = ot().default;
		Object.defineProperty(ge, "__esModule", { value: !0 });
		ge.cleanupHTMLElement = AF;
		ge.clearAllStyles = SF;
		ge.getActionListProgress = RF;
		ge.getAffectedElements = Ba;
		ge.getComputedStyle = eF;
		ge.getDestinationValues = sF;
		ge.getElementId = $M;
		ge.getInstanceId = zM;
		ge.getInstanceOrigin = nF;
		ge.getItemConfigByKey = void 0;
		ge.getMaxDurationItemIndex = ug;
		ge.getNamespacedParameterId = qF;
		ge.getRenderType = og;
		ge.getStyleProp = uF;
		ge.mediaQueriesEqual = PF;
		ge.observeStore = JM;
		ge.reduceListToGroup = CF;
		ge.reifyState = QM;
		ge.renderHTMLElement = cF;
		Object.defineProperty(ge, "shallowEqual", {
			enumerable: !0,
			get: function () {
				return Zh.default;
			},
		});
		ge.shouldAllowMediaQuery = xF;
		ge.shouldNamespaceEventParameter = NF;
		ge.stringifyTarget = LF;
		var St = ci(Ih()),
			Xa = ci(Mh()),
			Ga = ci(Uh()),
			Bh = er(),
			Ut = Ue(),
			Zh = ci(Wh()),
			NM = Pa(),
			ft = Da(),
			Fe = ti(),
			{
				BACKGROUND: qM,
				TRANSFORM: xM,
				TRANSLATE_3D: PM,
				SCALE_3D: LM,
				ROTATE_X: DM,
				ROTATE_Y: MM,
				ROTATE_Z: FM,
				SKEW: GM,
				PRESERVE_3D: XM,
				FLEX: UM,
				OPACITY: si,
				FILTER: Yr,
				FONT_VARIATION_SETTINGS: $r,
				WIDTH: ct,
				HEIGHT: lt,
				BACKGROUND_COLOR: Jh,
				BORDER_COLOR: VM,
				COLOR: WM,
				CHILDREN: Hh,
				IMMEDIATE_CHILDREN: BM,
				SIBLINGS: jh,
				PARENT: HM,
				DISPLAY: ui,
				WILL_CHANGE: fr,
				AUTO: At,
				COMMA_DELIMITER: Qr,
				COLON_DELIMITER: jM,
				BAR_DELIMITER: kh,
				RENDER_TRANSFORM: eg,
				RENDER_GENERAL: Ua,
				RENDER_STYLE: Va,
				RENDER_PLUGIN: tg,
			} = Ut.IX2EngineConstants,
			{
				TRANSFORM_MOVE: dr,
				TRANSFORM_SCALE: pr,
				TRANSFORM_ROTATE: vr,
				TRANSFORM_SKEW: Zr,
				STYLE_OPACITY: rg,
				STYLE_FILTER: Jr,
				STYLE_FONT_VARIATION: en,
				STYLE_SIZE: Er,
				STYLE_BACKGROUND_COLOR: hr,
				STYLE_BORDER: gr,
				STYLE_TEXT_COLOR: _r,
				GENERAL_DISPLAY: li,
			} = Ut.ActionTypeConsts,
			kM = "OBJECT_VALUE",
			ng = (e) => e.trim(),
			Wa = Object.freeze({ [hr]: Jh, [gr]: VM, [_r]: WM }),
			ig = Object.freeze({
				[Fe.TRANSFORM_PREFIXED]: xM,
				[Jh]: qM,
				[si]: si,
				[Yr]: Yr,
				[ct]: ct,
				[lt]: lt,
				[$r]: $r,
			}),
			Kh = {},
			KM = 1;
		function zM() {
			return "i" + KM++;
		}
		var YM = 1;
		function $M(e, t) {
			for (let r in e) {
				let n = e[r];
				if (n && n.ref === t) return n.id;
			}
			return "e" + YM++;
		}
		function QM({ events: e, actionLists: t, site: r } = {}) {
			let n = (0, Xa.default)(
					e,
					(a, s) => {
						let { eventTypeId: c } = s;
						return a[c] || (a[c] = {}), (a[c][s.id] = s), a;
					},
					{}
				),
				o = r && r.mediaQueries,
				i = [];
			return (
				o
					? (i = o.map((a) => a.key))
					: ((o = []), console.warn("IX2 missing mediaQueries in site data")),
				{
					ixData: {
						events: e,
						actionLists: t,
						eventTypeMap: n,
						mediaQueries: o,
						mediaQueryKeys: i,
					},
				}
			);
		}
		var ZM = (e, t) => e === t;
		function JM({ store: e, select: t, onChange: r, comparator: n = ZM }) {
			let { getState: o, subscribe: i } = e,
				a = i(c),
				s = t(o());
			function c() {
				let f = t(o());
				if (f == null) {
					a();
					return;
				}
				n(f, s) || ((s = f), r(s, e));
			}
			return a;
		}
		function zh(e) {
			let t = typeof e;
			if (t === "string") return { id: e };
			if (e != null && t === "object") {
				let {
					id: r,
					objectId: n,
					selector: o,
					selectorGuids: i,
					appliesTo: a,
					useEventTarget: s,
				} = e;
				return {
					id: r,
					objectId: n,
					selector: o,
					selectorGuids: i,
					appliesTo: a,
					useEventTarget: s,
				};
			}
			return {};
		}
		function Ba({
			config: e,
			event: t,
			eventTarget: r,
			elementRoot: n,
			elementApi: o,
		}) {
			var i, a, s;
			if (!o) throw new Error("IX2 missing elementApi");
			let { targets: c } = e;
			if (Array.isArray(c) && c.length > 0)
				return c.reduce(
					(M, X) =>
						M.concat(
							Ba({
								config: { target: X },
								event: t,
								eventTarget: r,
								elementRoot: n,
								elementApi: o,
							})
						),
					[]
				);
			let {
					getValidDocument: f,
					getQuerySelector: E,
					queryDocument: p,
					getChildElements: h,
					getSiblingElements: g,
					matchSelector: S,
					elementContains: b,
					isSiblingNode: x,
				} = o,
				{ target: A } = e;
			if (!A) return [];
			let {
				id: w,
				objectId: T,
				selector: N,
				selectorGuids: C,
				appliesTo: q,
				useEventTarget: G,
			} = zh(A);
			if (T) return [Kh[T] || (Kh[T] = {})];
			if (q === Ut.EventAppliesTo.PAGE) {
				let M = f(w);
				return M ? [M] : [];
			}
			let Y =
					((i =
						t == null ||
						(a = t.action) === null ||
						a === void 0 ||
						(s = a.config) === null ||
						s === void 0
							? void 0
							: s.affectedElements) !== null && i !== void 0
						? i
						: {})[w || N] || {},
				ie = !!(Y.id || Y.selector),
				ee,
				D,
				m,
				L = t && E(zh(t.target));
			if (
				(ie
					? ((ee = Y.limitAffectedElements), (D = L), (m = E(Y)))
					: (D = m = E({ id: w, selector: N, selectorGuids: C })),
				t && G)
			) {
				let M = r && (m || G === !0) ? [r] : p(L);
				if (m) {
					if (G === HM) return p(m).filter((X) => M.some(($) => b(X, $)));
					if (G === Hh) return p(m).filter((X) => M.some(($) => b($, X)));
					if (G === jh) return p(m).filter((X) => M.some(($) => x($, X)));
				}
				return M;
			}
			return D == null || m == null
				? []
				: Fe.IS_BROWSER_ENV && n
				? p(m).filter((M) => n.contains(M))
				: ee === Hh
				? p(D, m)
				: ee === BM
				? h(p(D)).filter(S(m))
				: ee === jh
				? g(p(D)).filter(S(m))
				: p(m);
		}
		function eF({ element: e, actionItem: t }) {
			if (!Fe.IS_BROWSER_ENV) return {};
			let { actionTypeId: r } = t;
			switch (r) {
				case Er:
				case hr:
				case gr:
				case _r:
				case li:
					return window.getComputedStyle(e);
				default:
					return {};
			}
		}
		var Yh = /px/,
			tF = (e, t) =>
				t.reduce(
					(r, n) => (r[n.type] == null && (r[n.type] = lF[n.type]), r),
					e || {}
				),
			rF = (e, t) =>
				t.reduce(
					(r, n) => (
						r[n.type] == null &&
							(r[n.type] = fF[n.type] || n.defaultValue || 0),
						r
					),
					e || {}
				);
		function nF(e, t = {}, r = {}, n, o) {
			let { getStyle: i } = o,
				{ actionTypeId: a } = n;
			if ((0, ft.isPluginType)(a)) return (0, ft.getPluginOrigin)(a)(t[a]);
			switch (n.actionTypeId) {
				case dr:
				case pr:
				case vr:
				case Zr:
					return t[n.actionTypeId] || Ha[n.actionTypeId];
				case Jr:
					return tF(t[n.actionTypeId], n.config.filters);
				case en:
					return rF(t[n.actionTypeId], n.config.fontVariations);
				case rg:
					return { value: (0, St.default)(parseFloat(i(e, si)), 1) };
				case Er: {
					let s = i(e, ct),
						c = i(e, lt),
						f,
						E;
					return (
						n.config.widthUnit === At
							? (f = Yh.test(s) ? parseFloat(s) : parseFloat(r.width))
							: (f = (0, St.default)(parseFloat(s), parseFloat(r.width))),
						n.config.heightUnit === At
							? (E = Yh.test(c) ? parseFloat(c) : parseFloat(r.height))
							: (E = (0, St.default)(parseFloat(c), parseFloat(r.height))),
						{ widthValue: f, heightValue: E }
					);
				}
				case hr:
				case gr:
				case _r:
					return IF({
						element: e,
						actionTypeId: n.actionTypeId,
						computedStyle: r,
						getStyle: i,
					});
				case li:
					return { value: (0, St.default)(i(e, ui), r.display) };
				case kM:
					return t[n.actionTypeId] || { value: 0 };
				default:
					return;
			}
		}
		var iF = (e, t) => (t && (e[t.type] = t.value || 0), e),
			oF = (e, t) => (t && (e[t.type] = t.value || 0), e),
			aF = (e, t, r) => {
				if ((0, ft.isPluginType)(e)) return (0, ft.getPluginConfig)(e)(r, t);
				switch (e) {
					case Jr: {
						let n = (0, Ga.default)(r.filters, ({ type: o }) => o === t);
						return n ? n.value : 0;
					}
					case en: {
						let n = (0, Ga.default)(r.fontVariations, ({ type: o }) => o === t);
						return n ? n.value : 0;
					}
					default:
						return r[t];
				}
			};
		ge.getItemConfigByKey = aF;
		function sF({ element: e, actionItem: t, elementApi: r }) {
			if ((0, ft.isPluginType)(t.actionTypeId))
				return (0, ft.getPluginDestination)(t.actionTypeId)(t.config);
			switch (t.actionTypeId) {
				case dr:
				case pr:
				case vr:
				case Zr: {
					let { xValue: n, yValue: o, zValue: i } = t.config;
					return { xValue: n, yValue: o, zValue: i };
				}
				case Er: {
					let { getStyle: n, setStyle: o, getProperty: i } = r,
						{ widthUnit: a, heightUnit: s } = t.config,
						{ widthValue: c, heightValue: f } = t.config;
					if (!Fe.IS_BROWSER_ENV) return { widthValue: c, heightValue: f };
					if (a === At) {
						let E = n(e, ct);
						o(e, ct, ""), (c = i(e, "offsetWidth")), o(e, ct, E);
					}
					if (s === At) {
						let E = n(e, lt);
						o(e, lt, ""), (f = i(e, "offsetHeight")), o(e, lt, E);
					}
					return { widthValue: c, heightValue: f };
				}
				case hr:
				case gr:
				case _r: {
					let { rValue: n, gValue: o, bValue: i, aValue: a } = t.config;
					return { rValue: n, gValue: o, bValue: i, aValue: a };
				}
				case Jr:
					return t.config.filters.reduce(iF, {});
				case en:
					return t.config.fontVariations.reduce(oF, {});
				default: {
					let { value: n } = t.config;
					return { value: n };
				}
			}
		}
		function og(e) {
			if (/^TRANSFORM_/.test(e)) return eg;
			if (/^STYLE_/.test(e)) return Va;
			if (/^GENERAL_/.test(e)) return Ua;
			if (/^PLUGIN_/.test(e)) return tg;
		}
		function uF(e, t) {
			return e === Va ? t.replace("STYLE_", "").toLowerCase() : null;
		}
		function cF(e, t, r, n, o, i, a, s, c) {
			switch (s) {
				case eg:
					return vF(e, t, r, o, a);
				case Va:
					return OF(e, t, r, o, i, a);
				case Ua:
					return bF(e, o, a);
				case tg: {
					let { actionTypeId: f } = o;
					if ((0, ft.isPluginType)(f)) return (0, ft.renderPlugin)(f)(c, t, o);
				}
			}
		}
		var Ha = {
				[dr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
				[pr]: Object.freeze({ xValue: 1, yValue: 1, zValue: 1 }),
				[vr]: Object.freeze({ xValue: 0, yValue: 0, zValue: 0 }),
				[Zr]: Object.freeze({ xValue: 0, yValue: 0 }),
			},
			lF = Object.freeze({
				blur: 0,
				"hue-rotate": 0,
				invert: 0,
				grayscale: 0,
				saturate: 100,
				sepia: 0,
				contrast: 100,
				brightness: 100,
			}),
			fF = Object.freeze({ wght: 0, opsz: 0, wdth: 0, slnt: 0 }),
			dF = (e, t) => {
				let r = (0, Ga.default)(t.filters, ({ type: n }) => n === e);
				if (r && r.unit) return r.unit;
				switch (e) {
					case "blur":
						return "px";
					case "hue-rotate":
						return "deg";
					default:
						return "%";
				}
			},
			pF = Object.keys(Ha);
		function vF(e, t, r, n, o) {
			let i = pF
					.map((s) => {
						let c = Ha[s],
							{
								xValue: f = c.xValue,
								yValue: E = c.yValue,
								zValue: p = c.zValue,
								xUnit: h = "",
								yUnit: g = "",
								zUnit: S = "",
							} = t[s] || {};
						switch (s) {
							case dr:
								return `${PM}(${f}${h}, ${E}${g}, ${p}${S})`;
							case pr:
								return `${LM}(${f}${h}, ${E}${g}, ${p}${S})`;
							case vr:
								return `${DM}(${f}${h}) ${MM}(${E}${g}) ${FM}(${p}${S})`;
							case Zr:
								return `${GM}(${f}${h}, ${E}${g})`;
							default:
								return "";
						}
					})
					.join(" "),
				{ setStyle: a } = o;
			Vt(e, Fe.TRANSFORM_PREFIXED, o),
				a(e, Fe.TRANSFORM_PREFIXED, i),
				gF(n, r) && a(e, Fe.TRANSFORM_STYLE_PREFIXED, XM);
		}
		function EF(e, t, r, n) {
			let o = (0, Xa.default)(t, (a, s, c) => `${a} ${c}(${s}${dF(c, r)})`, ""),
				{ setStyle: i } = n;
			Vt(e, Yr, n), i(e, Yr, o);
		}
		function hF(e, t, r, n) {
			let o = (0, Xa.default)(
					t,
					(a, s, c) => (a.push(`"${c}" ${s}`), a),
					[]
				).join(", "),
				{ setStyle: i } = n;
			Vt(e, $r, n), i(e, $r, o);
		}
		function gF({ actionTypeId: e }, { xValue: t, yValue: r, zValue: n }) {
			return (
				(e === dr && n !== void 0) ||
				(e === pr && n !== void 0) ||
				(e === vr && (t !== void 0 || r !== void 0))
			);
		}
		var _F = "\\(([^)]+)\\)",
			yF = /^rgb/,
			mF = RegExp(`rgba?${_F}`);
		function TF(e, t) {
			let r = e.exec(t);
			return r ? r[1] : "";
		}
		function IF({
			element: e,
			actionTypeId: t,
			computedStyle: r,
			getStyle: n,
		}) {
			let o = Wa[t],
				i = n(e, o),
				a = yF.test(i) ? i : r[o],
				s = TF(mF, a).split(Qr);
			return {
				rValue: (0, St.default)(parseInt(s[0], 10), 255),
				gValue: (0, St.default)(parseInt(s[1], 10), 255),
				bValue: (0, St.default)(parseInt(s[2], 10), 255),
				aValue: (0, St.default)(parseFloat(s[3]), 1),
			};
		}
		function OF(e, t, r, n, o, i) {
			let { setStyle: a } = i;
			switch (n.actionTypeId) {
				case Er: {
					let { widthUnit: s = "", heightUnit: c = "" } = n.config,
						{ widthValue: f, heightValue: E } = r;
					f !== void 0 &&
						(s === At && (s = "px"), Vt(e, ct, i), a(e, ct, f + s)),
						E !== void 0 &&
							(c === At && (c = "px"), Vt(e, lt, i), a(e, lt, E + c));
					break;
				}
				case Jr: {
					EF(e, r, n.config, i);
					break;
				}
				case en: {
					hF(e, r, n.config, i);
					break;
				}
				case hr:
				case gr:
				case _r: {
					let s = Wa[n.actionTypeId],
						c = Math.round(r.rValue),
						f = Math.round(r.gValue),
						E = Math.round(r.bValue),
						p = r.aValue;
					Vt(e, s, i),
						a(
							e,
							s,
							p >= 1 ? `rgb(${c},${f},${E})` : `rgba(${c},${f},${E},${p})`
						);
					break;
				}
				default: {
					let { unit: s = "" } = n.config;
					Vt(e, o, i), a(e, o, r.value + s);
					break;
				}
			}
		}
		function bF(e, t, r) {
			let { setStyle: n } = r;
			switch (t.actionTypeId) {
				case li: {
					let { value: o } = t.config;
					o === UM && Fe.IS_BROWSER_ENV
						? n(e, ui, Fe.FLEX_PREFIXED)
						: n(e, ui, o);
					return;
				}
			}
		}
		function Vt(e, t, r) {
			if (!Fe.IS_BROWSER_ENV) return;
			let n = ig[t];
			if (!n) return;
			let { getStyle: o, setStyle: i } = r,
				a = o(e, fr);
			if (!a) {
				i(e, fr, n);
				return;
			}
			let s = a.split(Qr).map(ng);
			s.indexOf(n) === -1 && i(e, fr, s.concat(n).join(Qr));
		}
		function ag(e, t, r) {
			if (!Fe.IS_BROWSER_ENV) return;
			let n = ig[t];
			if (!n) return;
			let { getStyle: o, setStyle: i } = r,
				a = o(e, fr);
			!a ||
				a.indexOf(n) === -1 ||
				i(
					e,
					fr,
					a
						.split(Qr)
						.map(ng)
						.filter((s) => s !== n)
						.join(Qr)
				);
		}
		function SF({ store: e, elementApi: t }) {
			let { ixData: r } = e.getState(),
				{ events: n = {}, actionLists: o = {} } = r;
			Object.keys(n).forEach((i) => {
				let a = n[i],
					{ config: s } = a.action,
					{ actionListId: c } = s,
					f = o[c];
				f && $h({ actionList: f, event: a, elementApi: t });
			}),
				Object.keys(o).forEach((i) => {
					$h({ actionList: o[i], elementApi: t });
				});
		}
		function $h({ actionList: e = {}, event: t, elementApi: r }) {
			let { actionItemGroups: n, continuousParameterGroups: o } = e;
			n &&
				n.forEach((i) => {
					Qh({ actionGroup: i, event: t, elementApi: r });
				}),
				o &&
					o.forEach((i) => {
						let { continuousActionGroups: a } = i;
						a.forEach((s) => {
							Qh({ actionGroup: s, event: t, elementApi: r });
						});
					});
		}
		function Qh({ actionGroup: e, event: t, elementApi: r }) {
			let { actionItems: n } = e;
			n.forEach(({ actionTypeId: o, config: i }) => {
				let a;
				(0, ft.isPluginType)(o)
					? (a = (0, ft.clearPlugin)(o))
					: (a = sg({ effect: wF, actionTypeId: o, elementApi: r })),
					Ba({ config: i, event: t, elementApi: r }).forEach(a);
			});
		}
		function AF(e, t, r) {
			let { setStyle: n, getStyle: o } = r,
				{ actionTypeId: i } = t;
			if (i === Er) {
				let { config: a } = t;
				a.widthUnit === At && n(e, ct, ""), a.heightUnit === At && n(e, lt, "");
			}
			o(e, fr) && sg({ effect: ag, actionTypeId: i, elementApi: r })(e);
		}
		var sg =
			({ effect: e, actionTypeId: t, elementApi: r }) =>
			(n) => {
				switch (t) {
					case dr:
					case pr:
					case vr:
					case Zr:
						e(n, Fe.TRANSFORM_PREFIXED, r);
						break;
					case Jr:
						e(n, Yr, r);
						break;
					case en:
						e(n, $r, r);
						break;
					case rg:
						e(n, si, r);
						break;
					case Er:
						e(n, ct, r), e(n, lt, r);
						break;
					case hr:
					case gr:
					case _r:
						e(n, Wa[t], r);
						break;
					case li:
						e(n, ui, r);
						break;
				}
			};
		function wF(e, t, r) {
			let { setStyle: n } = r;
			ag(e, t, r),
				n(e, t, ""),
				t === Fe.TRANSFORM_PREFIXED && n(e, Fe.TRANSFORM_STYLE_PREFIXED, "");
		}
		function ug(e) {
			let t = 0,
				r = 0;
			return (
				e.forEach((n, o) => {
					let { config: i } = n,
						a = i.delay + i.duration;
					a >= t && ((t = a), (r = o));
				}),
				r
			);
		}
		function RF(e, t) {
			let { actionItemGroups: r, useFirstGroupAsInitialState: n } = e,
				{ actionItem: o, verboseTimeElapsed: i = 0 } = t,
				a = 0,
				s = 0;
			return (
				r.forEach((c, f) => {
					if (n && f === 0) return;
					let { actionItems: E } = c,
						p = E[ug(E)],
						{ config: h, actionTypeId: g } = p;
					o.id === p.id && (s = a + i);
					let S = og(g) === Ua ? 0 : h.duration;
					a += h.delay + S;
				}),
				a > 0 ? (0, NM.optimizeFloat)(s / a) : 0
			);
		}
		function CF({ actionList: e, actionItemId: t, rawData: r }) {
			let { actionItemGroups: n, continuousParameterGroups: o } = e,
				i = [],
				a = (s) => (
					i.push((0, Bh.mergeIn)(s, ["config"], { delay: 0, duration: 0 })),
					s.id === t
				);
			return (
				n && n.some(({ actionItems: s }) => s.some(a)),
				o &&
					o.some((s) => {
						let { continuousActionGroups: c } = s;
						return c.some(({ actionItems: f }) => f.some(a));
					}),
				(0, Bh.setIn)(r, ["actionLists"], {
					[e.id]: { id: e.id, actionItemGroups: [{ actionItems: i }] },
				})
			);
		}
		function NF(e, { basedOn: t }) {
			return (
				(e === Ut.EventTypeConsts.SCROLLING_IN_VIEW &&
					(t === Ut.EventBasedOn.ELEMENT || t == null)) ||
				(e === Ut.EventTypeConsts.MOUSE_MOVE && t === Ut.EventBasedOn.ELEMENT)
			);
		}
		function qF(e, t) {
			return e + jM + t;
		}
		function xF(e, t) {
			return t == null ? !0 : e.indexOf(t) !== -1;
		}
		function PF(e, t) {
			return (0, Zh.default)(e && e.sort(), t && t.sort());
		}
		function LF(e) {
			if (typeof e == "string") return e;
			let { id: t = "", selector: r = "", useEventTarget: n = "" } = e;
			return t + kh + r + kh + n;
		}
	});
	var Wt = u((Ge) => {
		"use strict";
		var yr = Kt().default;
		Object.defineProperty(Ge, "__esModule", { value: !0 });
		Ge.IX2VanillaUtils =
			Ge.IX2VanillaPlugins =
			Ge.IX2ElementsReducer =
			Ge.IX2Easings =
			Ge.IX2EasingUtils =
			Ge.IX2BrowserSupport =
				void 0;
		var DF = yr(ti());
		Ge.IX2BrowserSupport = DF;
		var MF = yr(qa());
		Ge.IX2Easings = MF;
		var FF = yr(Pa());
		Ge.IX2EasingUtils = FF;
		var GF = yr(_h());
		Ge.IX2ElementsReducer = GF;
		var XF = yr(Da());
		Ge.IX2VanillaPlugins = XF;
		var UF = yr(cg());
		Ge.IX2VanillaUtils = UF;
	});
	var pg = u((di) => {
		"use strict";
		Object.defineProperty(di, "__esModule", { value: !0 });
		di.ixInstances = void 0;
		var lg = Ue(),
			fg = Wt(),
			mr = er(),
			{
				IX2_RAW_DATA_IMPORTED: VF,
				IX2_SESSION_STOPPED: WF,
				IX2_INSTANCE_ADDED: BF,
				IX2_INSTANCE_STARTED: HF,
				IX2_INSTANCE_REMOVED: jF,
				IX2_ANIMATION_FRAME_CHANGED: kF,
			} = lg.IX2EngineActionTypes,
			{
				optimizeFloat: fi,
				applyEasing: dg,
				createBezierEasing: KF,
			} = fg.IX2EasingUtils,
			{ RENDER_GENERAL: zF } = lg.IX2EngineConstants,
			{
				getItemConfigByKey: ja,
				getRenderType: YF,
				getStyleProp: $F,
			} = fg.IX2VanillaUtils,
			QF = (e, t) => {
				let {
						position: r,
						parameterId: n,
						actionGroups: o,
						destinationKeys: i,
						smoothing: a,
						restingValue: s,
						actionTypeId: c,
						customEasingFn: f,
						skipMotion: E,
						skipToValue: p,
					} = e,
					{ parameters: h } = t.payload,
					g = Math.max(1 - a, 0.01),
					S = h[n];
				S == null && ((g = 1), (S = s));
				let b = Math.max(S, 0) || 0,
					x = fi(b - r),
					A = E ? p : fi(r + x * g),
					w = A * 100;
				if (A === r && e.current) return e;
				let T, N, C, q;
				for (let k = 0, { length: Y } = o; k < Y; k++) {
					let { keyframe: ie, actionItems: ee } = o[k];
					if ((k === 0 && (T = ee[0]), w >= ie)) {
						T = ee[0];
						let D = o[k + 1],
							m = D && w !== ie;
						(N = m ? D.actionItems[0] : null),
							m && ((C = ie / 100), (q = (D.keyframe - ie) / 100));
					}
				}
				let G = {};
				if (T && !N)
					for (let k = 0, { length: Y } = i; k < Y; k++) {
						let ie = i[k];
						G[ie] = ja(c, ie, T.config);
					}
				else if (T && N && C !== void 0 && q !== void 0) {
					let k = (A - C) / q,
						Y = T.config.easing,
						ie = dg(Y, k, f);
					for (let ee = 0, { length: D } = i; ee < D; ee++) {
						let m = i[ee],
							L = ja(c, m, T.config),
							$ = (ja(c, m, N.config) - L) * ie + L;
						G[m] = $;
					}
				}
				return (0, mr.merge)(e, { position: A, current: G });
			},
			ZF = (e, t) => {
				let {
						active: r,
						origin: n,
						start: o,
						immediate: i,
						renderType: a,
						verbose: s,
						actionItem: c,
						destination: f,
						destinationKeys: E,
						pluginDuration: p,
						instanceDelay: h,
						customEasingFn: g,
						skipMotion: S,
					} = e,
					b = c.config.easing,
					{ duration: x, delay: A } = c.config;
				p != null && (x = p),
					(A = h ?? A),
					a === zF ? (x = 0) : (i || S) && (x = A = 0);
				let { now: w } = t.payload;
				if (r && n) {
					let T = w - (o + A);
					if (s) {
						let k = w - o,
							Y = x + A,
							ie = fi(Math.min(Math.max(0, k / Y), 1));
						e = (0, mr.set)(e, "verboseTimeElapsed", Y * ie);
					}
					if (T < 0) return e;
					let N = fi(Math.min(Math.max(0, T / x), 1)),
						C = dg(b, N, g),
						q = {},
						G = null;
					return (
						E.length &&
							(G = E.reduce((k, Y) => {
								let ie = f[Y],
									ee = parseFloat(n[Y]) || 0,
									m = (parseFloat(ie) - ee) * C + ee;
								return (k[Y] = m), k;
							}, {})),
						(q.current = G),
						(q.position = N),
						N === 1 && ((q.active = !1), (q.complete = !0)),
						(0, mr.merge)(e, q)
					);
				}
				return e;
			},
			JF = (e = Object.freeze({}), t) => {
				switch (t.type) {
					case VF:
						return t.payload.ixInstances || Object.freeze({});
					case WF:
						return Object.freeze({});
					case BF: {
						let {
								instanceId: r,
								elementId: n,
								actionItem: o,
								eventId: i,
								eventTarget: a,
								eventStateKey: s,
								actionListId: c,
								groupIndex: f,
								isCarrier: E,
								origin: p,
								destination: h,
								immediate: g,
								verbose: S,
								continuous: b,
								parameterId: x,
								actionGroups: A,
								smoothing: w,
								restingValue: T,
								pluginInstance: N,
								pluginDuration: C,
								instanceDelay: q,
								skipMotion: G,
								skipToValue: k,
							} = t.payload,
							{ actionTypeId: Y } = o,
							ie = YF(Y),
							ee = $F(ie, Y),
							D = Object.keys(h).filter((L) => h[L] != null),
							{ easing: m } = o.config;
						return (0, mr.set)(e, r, {
							id: r,
							elementId: n,
							active: !1,
							position: 0,
							start: 0,
							origin: p,
							destination: h,
							destinationKeys: D,
							immediate: g,
							verbose: S,
							current: null,
							actionItem: o,
							actionTypeId: Y,
							eventId: i,
							eventTarget: a,
							eventStateKey: s,
							actionListId: c,
							groupIndex: f,
							renderType: ie,
							isCarrier: E,
							styleProp: ee,
							continuous: b,
							parameterId: x,
							actionGroups: A,
							smoothing: w,
							restingValue: T,
							pluginInstance: N,
							pluginDuration: C,
							instanceDelay: q,
							skipMotion: G,
							skipToValue: k,
							customEasingFn:
								Array.isArray(m) && m.length === 4 ? KF(m) : void 0,
						});
					}
					case HF: {
						let { instanceId: r, time: n } = t.payload;
						return (0, mr.mergeIn)(e, [r], {
							active: !0,
							complete: !1,
							start: n,
						});
					}
					case jF: {
						let { instanceId: r } = t.payload;
						if (!e[r]) return e;
						let n = {},
							o = Object.keys(e),
							{ length: i } = o;
						for (let a = 0; a < i; a++) {
							let s = o[a];
							s !== r && (n[s] = e[s]);
						}
						return n;
					}
					case kF: {
						let r = e,
							n = Object.keys(e),
							{ length: o } = n;
						for (let i = 0; i < o; i++) {
							let a = n[i],
								s = e[a],
								c = s.continuous ? QF : ZF;
							r = (0, mr.set)(r, a, c(s, t));
						}
						return r;
					}
					default:
						return e;
				}
			};
		di.ixInstances = JF;
	});
	var vg = u((pi) => {
		"use strict";
		Object.defineProperty(pi, "__esModule", { value: !0 });
		pi.ixParameters = void 0;
		var e1 = Ue(),
			{
				IX2_RAW_DATA_IMPORTED: t1,
				IX2_SESSION_STOPPED: r1,
				IX2_PARAMETER_CHANGED: n1,
			} = e1.IX2EngineActionTypes,
			i1 = (e = {}, t) => {
				switch (t.type) {
					case t1:
						return t.payload.ixParameters || {};
					case r1:
						return {};
					case n1: {
						let { key: r, value: n } = t.payload;
						return (e[r] = n), e;
					}
					default:
						return e;
				}
			};
		pi.ixParameters = i1;
	});
	var Eg = u((vi) => {
		"use strict";
		Object.defineProperty(vi, "__esModule", { value: !0 });
		vi.default = void 0;
		var o1 = ko(),
			a1 = If(),
			s1 = Vf(),
			u1 = Bf(),
			c1 = Wt(),
			l1 = pg(),
			f1 = vg(),
			{ ixElements: d1 } = c1.IX2ElementsReducer,
			p1 = (0, o1.combineReducers)({
				ixData: a1.ixData,
				ixRequest: s1.ixRequest,
				ixSession: u1.ixSession,
				ixElements: d1,
				ixInstances: l1.ixInstances,
				ixParameters: f1.ixParameters,
			});
		vi.default = p1;
	});
	var hg = u((Wk, tn) => {
		function v1(e, t) {
			if (e == null) return {};
			var r = {},
				n = Object.keys(e),
				o,
				i;
			for (i = 0; i < n.length; i++)
				(o = n[i]), !(t.indexOf(o) >= 0) && (r[o] = e[o]);
			return r;
		}
		(tn.exports = v1),
			(tn.exports.__esModule = !0),
			(tn.exports.default = tn.exports);
	});
	var _g = u((Bk, gg) => {
		var E1 = Dt(),
			h1 = Ne(),
			g1 = Ot(),
			_1 = "[object String]";
		function y1(e) {
			return typeof e == "string" || (!h1(e) && g1(e) && E1(e) == _1);
		}
		gg.exports = y1;
	});
	var mg = u((Hk, yg) => {
		var m1 = Sa(),
			T1 = m1("length");
		yg.exports = T1;
	});
	var Ig = u((jk, Tg) => {
		var I1 = "\\ud800-\\udfff",
			O1 = "\\u0300-\\u036f",
			b1 = "\\ufe20-\\ufe2f",
			S1 = "\\u20d0-\\u20ff",
			A1 = O1 + b1 + S1,
			w1 = "\\ufe0e\\ufe0f",
			R1 = "\\u200d",
			C1 = RegExp("[" + R1 + I1 + A1 + w1 + "]");
		function N1(e) {
			return C1.test(e);
		}
		Tg.exports = N1;
	});
	var qg = u((kk, Ng) => {
		var bg = "\\ud800-\\udfff",
			q1 = "\\u0300-\\u036f",
			x1 = "\\ufe20-\\ufe2f",
			P1 = "\\u20d0-\\u20ff",
			L1 = q1 + x1 + P1,
			D1 = "\\ufe0e\\ufe0f",
			M1 = "[" + bg + "]",
			ka = "[" + L1 + "]",
			Ka = "\\ud83c[\\udffb-\\udfff]",
			F1 = "(?:" + ka + "|" + Ka + ")",
			Sg = "[^" + bg + "]",
			Ag = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			wg = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			G1 = "\\u200d",
			Rg = F1 + "?",
			Cg = "[" + D1 + "]?",
			X1 = "(?:" + G1 + "(?:" + [Sg, Ag, wg].join("|") + ")" + Cg + Rg + ")*",
			U1 = Cg + Rg + X1,
			V1 = "(?:" + [Sg + ka + "?", ka, Ag, wg, M1].join("|") + ")",
			Og = RegExp(Ka + "(?=" + Ka + ")|" + V1 + U1, "g");
		function W1(e) {
			for (var t = (Og.lastIndex = 0); Og.test(e); ) ++t;
			return t;
		}
		Ng.exports = W1;
	});
	var Pg = u((Kk, xg) => {
		var B1 = mg(),
			H1 = Ig(),
			j1 = qg();
		function k1(e) {
			return H1(e) ? j1(e) : B1(e);
		}
		xg.exports = k1;
	});
	var Dg = u((zk, Lg) => {
		var K1 = kn(),
			z1 = Kn(),
			Y1 = Mt(),
			$1 = _g(),
			Q1 = Pg(),
			Z1 = "[object Map]",
			J1 = "[object Set]";
		function e2(e) {
			if (e == null) return 0;
			if (Y1(e)) return $1(e) ? Q1(e) : e.length;
			var t = z1(e);
			return t == Z1 || t == J1 ? e.size : K1(e).length;
		}
		Lg.exports = e2;
	});
	var Fg = u((Yk, Mg) => {
		var t2 = "Expected a function";
		function r2(e) {
			if (typeof e != "function") throw new TypeError(t2);
			return function () {
				var t = arguments;
				switch (t.length) {
					case 0:
						return !e.call(this);
					case 1:
						return !e.call(this, t[0]);
					case 2:
						return !e.call(this, t[0], t[1]);
					case 3:
						return !e.call(this, t[0], t[1], t[2]);
				}
				return !e.apply(this, t);
			};
		}
		Mg.exports = r2;
	});
	var za = u(($k, Gg) => {
		var n2 = It(),
			i2 = (function () {
				try {
					var e = n2(Object, "defineProperty");
					return e({}, "", {}), e;
				} catch {}
			})();
		Gg.exports = i2;
	});
	var Ya = u((Qk, Ug) => {
		var Xg = za();
		function o2(e, t, r) {
			t == "__proto__" && Xg
				? Xg(e, t, { configurable: !0, enumerable: !0, value: r, writable: !0 })
				: (e[t] = r);
		}
		Ug.exports = o2;
	});
	var Wg = u((Zk, Vg) => {
		var a2 = Ya(),
			s2 = Mn(),
			u2 = Object.prototype,
			c2 = u2.hasOwnProperty;
		function l2(e, t, r) {
			var n = e[t];
			(!(c2.call(e, t) && s2(n, r)) || (r === void 0 && !(t in e))) &&
				a2(e, t, r);
		}
		Vg.exports = l2;
	});
	var jg = u((Jk, Hg) => {
		var f2 = Wg(),
			d2 = kr(),
			p2 = Wn(),
			Bg = ut(),
			v2 = cr();
		function E2(e, t, r, n) {
			if (!Bg(e)) return e;
			t = d2(t, e);
			for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
				var c = v2(t[o]),
					f = r;
				if (c === "__proto__" || c === "constructor" || c === "prototype")
					return e;
				if (o != a) {
					var E = s[c];
					(f = n ? n(E, c, s) : void 0),
						f === void 0 && (f = Bg(E) ? E : p2(t[o + 1]) ? [] : {});
				}
				f2(s, c, f), (s = s[c]);
			}
			return e;
		}
		Hg.exports = E2;
	});
	var Kg = u((eK, kg) => {
		var h2 = $n(),
			g2 = jg(),
			_2 = kr();
		function y2(e, t, r) {
			for (var n = -1, o = t.length, i = {}; ++n < o; ) {
				var a = t[n],
					s = h2(e, a);
				r(s, a) && g2(i, _2(a, e), s);
			}
			return i;
		}
		kg.exports = y2;
	});
	var Yg = u((tK, zg) => {
		var m2 = da(),
			T2 = m2(Object.getPrototypeOf, Object);
		zg.exports = T2;
	});
	var Qg = u((rK, $g) => {
		var I2 = Un(),
			O2 = Yg(),
			b2 = ca(),
			S2 = ua(),
			A2 = Object.getOwnPropertySymbols,
			w2 = A2
				? function (e) {
						for (var t = []; e; ) I2(t, b2(e)), (e = O2(e));
						return t;
				  }
				: S2;
		$g.exports = w2;
	});
	var Jg = u((nK, Zg) => {
		function R2(e) {
			var t = [];
			if (e != null) for (var r in Object(e)) t.push(r);
			return t;
		}
		Zg.exports = R2;
	});
	var t_ = u((iK, e_) => {
		var C2 = ut(),
			N2 = jn(),
			q2 = Jg(),
			x2 = Object.prototype,
			P2 = x2.hasOwnProperty;
		function L2(e) {
			if (!C2(e)) return q2(e);
			var t = N2(e),
				r = [];
			for (var n in e)
				(n == "constructor" && (t || !P2.call(e, n))) || r.push(n);
			return r;
		}
		e_.exports = L2;
	});
	var n_ = u((oK, r_) => {
		var D2 = fa(),
			M2 = t_(),
			F2 = Mt();
		function G2(e) {
			return F2(e) ? D2(e, !0) : M2(e);
		}
		r_.exports = G2;
	});
	var o_ = u((aK, i_) => {
		var X2 = sa(),
			U2 = Qg(),
			V2 = n_();
		function W2(e) {
			return X2(e, V2, U2);
		}
		i_.exports = W2;
	});
	var s_ = u((sK, a_) => {
		var B2 = ba(),
			H2 = bt(),
			j2 = Kg(),
			k2 = o_();
		function K2(e, t) {
			if (e == null) return {};
			var r = B2(k2(e), function (n) {
				return [n];
			});
			return (
				(t = H2(t)),
				j2(e, r, function (n, o) {
					return t(n, o[0]);
				})
			);
		}
		a_.exports = K2;
	});
	var c_ = u((uK, u_) => {
		var z2 = bt(),
			Y2 = Fg(),
			$2 = s_();
		function Q2(e, t) {
			return $2(e, Y2(z2(t)));
		}
		u_.exports = Q2;
	});
	var f_ = u((cK, l_) => {
		var Z2 = kn(),
			J2 = Kn(),
			eG = Ur(),
			tG = Ne(),
			rG = Mt(),
			nG = Vn(),
			iG = jn(),
			oG = Hn(),
			aG = "[object Map]",
			sG = "[object Set]",
			uG = Object.prototype,
			cG = uG.hasOwnProperty;
		function lG(e) {
			if (e == null) return !0;
			if (
				rG(e) &&
				(tG(e) ||
					typeof e == "string" ||
					typeof e.splice == "function" ||
					nG(e) ||
					oG(e) ||
					eG(e))
			)
				return !e.length;
			var t = J2(e);
			if (t == aG || t == sG) return !e.size;
			if (iG(e)) return !Z2(e).length;
			for (var r in e) if (cG.call(e, r)) return !1;
			return !0;
		}
		l_.exports = lG;
	});
	var p_ = u((lK, d_) => {
		var fG = Ya(),
			dG = Ma(),
			pG = bt();
		function vG(e, t) {
			var r = {};
			return (
				(t = pG(t, 3)),
				dG(e, function (n, o, i) {
					fG(r, o, t(n, o, i));
				}),
				r
			);
		}
		d_.exports = vG;
	});
	var E_ = u((fK, v_) => {
		function EG(e, t) {
			for (
				var r = -1, n = e == null ? 0 : e.length;
				++r < n && t(e[r], r, e) !== !1;

			);
			return e;
		}
		v_.exports = EG;
	});
	var g_ = u((dK, h_) => {
		var hG = Zn();
		function gG(e) {
			return typeof e == "function" ? e : hG;
		}
		h_.exports = gG;
	});
	var y_ = u((pK, __) => {
		var _G = E_(),
			yG = Fa(),
			mG = g_(),
			TG = Ne();
		function IG(e, t) {
			var r = TG(e) ? _G : yG;
			return r(e, mG(t));
		}
		__.exports = IG;
	});
	var T_ = u((vK, m_) => {
		var OG = Ze(),
			bG = function () {
				return OG.Date.now();
			};
		m_.exports = bG;
	});
	var b_ = u((EK, O_) => {
		var SG = ut(),
			$a = T_(),
			I_ = Jn(),
			AG = "Expected a function",
			wG = Math.max,
			RG = Math.min;
		function CG(e, t, r) {
			var n,
				o,
				i,
				a,
				s,
				c,
				f = 0,
				E = !1,
				p = !1,
				h = !0;
			if (typeof e != "function") throw new TypeError(AG);
			(t = I_(t) || 0),
				SG(r) &&
					((E = !!r.leading),
					(p = "maxWait" in r),
					(i = p ? wG(I_(r.maxWait) || 0, t) : i),
					(h = "trailing" in r ? !!r.trailing : h));
			function g(q) {
				var G = n,
					k = o;
				return (n = o = void 0), (f = q), (a = e.apply(k, G)), a;
			}
			function S(q) {
				return (f = q), (s = setTimeout(A, t)), E ? g(q) : a;
			}
			function b(q) {
				var G = q - c,
					k = q - f,
					Y = t - G;
				return p ? RG(Y, i - k) : Y;
			}
			function x(q) {
				var G = q - c,
					k = q - f;
				return c === void 0 || G >= t || G < 0 || (p && k >= i);
			}
			function A() {
				var q = $a();
				if (x(q)) return w(q);
				s = setTimeout(A, b(q));
			}
			function w(q) {
				return (s = void 0), h && n ? g(q) : ((n = o = void 0), a);
			}
			function T() {
				s !== void 0 && clearTimeout(s), (f = 0), (n = c = o = s = void 0);
			}
			function N() {
				return s === void 0 ? a : w($a());
			}
			function C() {
				var q = $a(),
					G = x(q);
				if (((n = arguments), (o = this), (c = q), G)) {
					if (s === void 0) return S(c);
					if (p) return clearTimeout(s), (s = setTimeout(A, t)), g(c);
				}
				return s === void 0 && (s = setTimeout(A, t)), a;
			}
			return (C.cancel = T), (C.flush = N), C;
		}
		O_.exports = CG;
	});
	var A_ = u((hK, S_) => {
		var NG = b_(),
			qG = ut(),
			xG = "Expected a function";
		function PG(e, t, r) {
			var n = !0,
				o = !0;
			if (typeof e != "function") throw new TypeError(xG);
			return (
				qG(r) &&
					((n = "leading" in r ? !!r.leading : n),
					(o = "trailing" in r ? !!r.trailing : o)),
				NG(e, t, { leading: n, maxWait: t, trailing: o })
			);
		}
		S_.exports = PG;
	});
	var Ei = u((ae) => {
		"use strict";
		var LG = ot().default;
		Object.defineProperty(ae, "__esModule", { value: !0 });
		ae.viewportWidthChanged =
			ae.testFrameRendered =
			ae.stopRequested =
			ae.sessionStopped =
			ae.sessionStarted =
			ae.sessionInitialized =
			ae.rawDataImported =
			ae.previewRequested =
			ae.playbackRequested =
			ae.parameterChanged =
			ae.mediaQueriesDefined =
			ae.instanceStarted =
			ae.instanceRemoved =
			ae.instanceAdded =
			ae.eventStateChanged =
			ae.eventListenerAdded =
			ae.elementStateChanged =
			ae.clearRequested =
			ae.animationFrameChanged =
			ae.actionListPlaybackChanged =
				void 0;
		var w_ = LG(Lr()),
			R_ = Ue(),
			DG = Wt(),
			{
				IX2_RAW_DATA_IMPORTED: MG,
				IX2_SESSION_INITIALIZED: FG,
				IX2_SESSION_STARTED: GG,
				IX2_SESSION_STOPPED: XG,
				IX2_PREVIEW_REQUESTED: UG,
				IX2_PLAYBACK_REQUESTED: VG,
				IX2_STOP_REQUESTED: WG,
				IX2_CLEAR_REQUESTED: BG,
				IX2_EVENT_LISTENER_ADDED: HG,
				IX2_TEST_FRAME_RENDERED: jG,
				IX2_EVENT_STATE_CHANGED: kG,
				IX2_ANIMATION_FRAME_CHANGED: KG,
				IX2_PARAMETER_CHANGED: zG,
				IX2_INSTANCE_ADDED: YG,
				IX2_INSTANCE_STARTED: $G,
				IX2_INSTANCE_REMOVED: QG,
				IX2_ELEMENT_STATE_CHANGED: ZG,
				IX2_ACTION_LIST_PLAYBACK_CHANGED: JG,
				IX2_VIEWPORT_WIDTH_CHANGED: eX,
				IX2_MEDIA_QUERIES_DEFINED: tX,
			} = R_.IX2EngineActionTypes,
			{ reifyState: rX } = DG.IX2VanillaUtils,
			nX = (e) => ({ type: MG, payload: (0, w_.default)({}, rX(e)) });
		ae.rawDataImported = nX;
		var iX = ({ hasBoundaryNodes: e, reducedMotion: t }) => ({
			type: FG,
			payload: { hasBoundaryNodes: e, reducedMotion: t },
		});
		ae.sessionInitialized = iX;
		var oX = () => ({ type: GG });
		ae.sessionStarted = oX;
		var aX = () => ({ type: XG });
		ae.sessionStopped = aX;
		var sX = ({ rawData: e, defer: t }) => ({
			type: UG,
			payload: { defer: t, rawData: e },
		});
		ae.previewRequested = sX;
		var uX = ({
			actionTypeId: e = R_.ActionTypeConsts.GENERAL_START_ACTION,
			actionListId: t,
			actionItemId: r,
			eventId: n,
			allowEvents: o,
			immediate: i,
			testManual: a,
			verbose: s,
			rawData: c,
		}) => ({
			type: VG,
			payload: {
				actionTypeId: e,
				actionListId: t,
				actionItemId: r,
				testManual: a,
				eventId: n,
				allowEvents: o,
				immediate: i,
				verbose: s,
				rawData: c,
			},
		});
		ae.playbackRequested = uX;
		var cX = (e) => ({ type: WG, payload: { actionListId: e } });
		ae.stopRequested = cX;
		var lX = () => ({ type: BG });
		ae.clearRequested = lX;
		var fX = (e, t) => ({
			type: HG,
			payload: { target: e, listenerParams: t },
		});
		ae.eventListenerAdded = fX;
		var dX = (e = 1) => ({ type: jG, payload: { step: e } });
		ae.testFrameRendered = dX;
		var pX = (e, t) => ({ type: kG, payload: { stateKey: e, newState: t } });
		ae.eventStateChanged = pX;
		var vX = (e, t) => ({ type: KG, payload: { now: e, parameters: t } });
		ae.animationFrameChanged = vX;
		var EX = (e, t) => ({ type: zG, payload: { key: e, value: t } });
		ae.parameterChanged = EX;
		var hX = (e) => ({ type: YG, payload: (0, w_.default)({}, e) });
		ae.instanceAdded = hX;
		var gX = (e, t) => ({ type: $G, payload: { instanceId: e, time: t } });
		ae.instanceStarted = gX;
		var _X = (e) => ({ type: QG, payload: { instanceId: e } });
		ae.instanceRemoved = _X;
		var yX = (e, t, r, n) => ({
			type: ZG,
			payload: { elementId: e, actionTypeId: t, current: r, actionItem: n },
		});
		ae.elementStateChanged = yX;
		var mX = ({ actionListId: e, isPlaying: t }) => ({
			type: JG,
			payload: { actionListId: e, isPlaying: t },
		});
		ae.actionListPlaybackChanged = mX;
		var TX = ({ width: e, mediaQueries: t }) => ({
			type: eX,
			payload: { width: e, mediaQueries: t },
		});
		ae.viewportWidthChanged = TX;
		var IX = () => ({ type: tX });
		ae.mediaQueriesDefined = IX;
	});
	var q_ = u((xe) => {
		"use strict";
		Object.defineProperty(xe, "__esModule", { value: !0 });
		xe.elementContains = LX;
		xe.getChildElements = MX;
		xe.getClosestElement = void 0;
		xe.getProperty = CX;
		xe.getQuerySelector = qX;
		xe.getRefType = XX;
		xe.getSiblingElements = FX;
		xe.getStyle = RX;
		xe.getValidDocument = xX;
		xe.isSiblingNode = DX;
		xe.matchSelector = NX;
		xe.queryDocument = PX;
		xe.setStyle = wX;
		var OX = Wt(),
			bX = Ue(),
			{ ELEMENT_MATCHES: Qa } = OX.IX2BrowserSupport,
			{
				IX2_ID_DELIMITER: C_,
				HTML_ELEMENT: SX,
				PLAIN_OBJECT: AX,
				WF_PAGE: N_,
			} = bX.IX2EngineConstants;
		function wX(e, t, r) {
			e.style[t] = r;
		}
		function RX(e, t) {
			return e.style[t];
		}
		function CX(e, t) {
			return e[t];
		}
		function NX(e) {
			return (t) => t[Qa](e);
		}
		function qX({ id: e, selector: t }) {
			if (e) {
				let r = e;
				if (e.indexOf(C_) !== -1) {
					let n = e.split(C_),
						o = n[0];
					if (((r = n[1]), o !== document.documentElement.getAttribute(N_)))
						return null;
				}
				return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`;
			}
			return t;
		}
		function xX(e) {
			return e == null || e === document.documentElement.getAttribute(N_)
				? document
				: null;
		}
		function PX(e, t) {
			return Array.prototype.slice.call(
				document.querySelectorAll(t ? e + " " + t : e)
			);
		}
		function LX(e, t) {
			return e.contains(t);
		}
		function DX(e, t) {
			return e !== t && e.parentNode === t.parentNode;
		}
		function MX(e) {
			let t = [];
			for (let r = 0, { length: n } = e || []; r < n; r++) {
				let { children: o } = e[r],
					{ length: i } = o;
				if (i) for (let a = 0; a < i; a++) t.push(o[a]);
			}
			return t;
		}
		function FX(e = []) {
			let t = [],
				r = [];
			for (let n = 0, { length: o } = e; n < o; n++) {
				let { parentNode: i } = e[n];
				if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
					continue;
				r.push(i);
				let a = i.firstElementChild;
				for (; a != null; )
					e.indexOf(a) === -1 && t.push(a), (a = a.nextElementSibling);
			}
			return t;
		}
		var GX = Element.prototype.closest
			? (e, t) => (document.documentElement.contains(e) ? e.closest(t) : null)
			: (e, t) => {
					if (!document.documentElement.contains(e)) return null;
					let r = e;
					do {
						if (r[Qa] && r[Qa](t)) return r;
						r = r.parentNode;
					} while (r != null);
					return null;
			  };
		xe.getClosestElement = GX;
		function XX(e) {
			return e != null && typeof e == "object"
				? e instanceof Element
					? SX
					: AX
				: null;
		}
	});
	var Za = u((yK, P_) => {
		var UX = ut(),
			x_ = Object.create,
			VX = (function () {
				function e() {}
				return function (t) {
					if (!UX(t)) return {};
					if (x_) return x_(t);
					e.prototype = t;
					var r = new e();
					return (e.prototype = void 0), r;
				};
			})();
		P_.exports = VX;
	});
	var hi = u((mK, L_) => {
		function WX() {}
		L_.exports = WX;
	});
	var _i = u((TK, D_) => {
		var BX = Za(),
			HX = hi();
		function gi(e, t) {
			(this.__wrapped__ = e),
				(this.__actions__ = []),
				(this.__chain__ = !!t),
				(this.__index__ = 0),
				(this.__values__ = void 0);
		}
		gi.prototype = BX(HX.prototype);
		gi.prototype.constructor = gi;
		D_.exports = gi;
	});
	var X_ = u((IK, G_) => {
		var M_ = rr(),
			jX = Ur(),
			kX = Ne(),
			F_ = M_ ? M_.isConcatSpreadable : void 0;
		function KX(e) {
			return kX(e) || jX(e) || !!(F_ && e && e[F_]);
		}
		G_.exports = KX;
	});
	var W_ = u((OK, V_) => {
		var zX = Un(),
			YX = X_();
		function U_(e, t, r, n, o) {
			var i = -1,
				a = e.length;
			for (r || (r = YX), o || (o = []); ++i < a; ) {
				var s = e[i];
				t > 0 && r(s)
					? t > 1
						? U_(s, t - 1, r, n, o)
						: zX(o, s)
					: n || (o[o.length] = s);
			}
			return o;
		}
		V_.exports = U_;
	});
	var H_ = u((bK, B_) => {
		var $X = W_();
		function QX(e) {
			var t = e == null ? 0 : e.length;
			return t ? $X(e, 1) : [];
		}
		B_.exports = QX;
	});
	var k_ = u((SK, j_) => {
		function ZX(e, t, r) {
			switch (r.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, r[0]);
				case 2:
					return e.call(t, r[0], r[1]);
				case 3:
					return e.call(t, r[0], r[1], r[2]);
			}
			return e.apply(t, r);
		}
		j_.exports = ZX;
	});
	var Y_ = u((AK, z_) => {
		var JX = k_(),
			K_ = Math.max;
		function eU(e, t, r) {
			return (
				(t = K_(t === void 0 ? e.length - 1 : t, 0)),
				function () {
					for (
						var n = arguments, o = -1, i = K_(n.length - t, 0), a = Array(i);
						++o < i;

					)
						a[o] = n[t + o];
					o = -1;
					for (var s = Array(t + 1); ++o < t; ) s[o] = n[o];
					return (s[t] = r(a)), JX(e, this, s);
				}
			);
		}
		z_.exports = eU;
	});
	var Q_ = u((wK, $_) => {
		function tU(e) {
			return function () {
				return e;
			};
		}
		$_.exports = tU;
	});
	var ey = u((RK, J_) => {
		var rU = Q_(),
			Z_ = za(),
			nU = Zn(),
			iU = Z_
				? function (e, t) {
						return Z_(e, "toString", {
							configurable: !0,
							enumerable: !1,
							value: rU(t),
							writable: !0,
						});
				  }
				: nU;
		J_.exports = iU;
	});
	var ry = u((CK, ty) => {
		var oU = 800,
			aU = 16,
			sU = Date.now;
		function uU(e) {
			var t = 0,
				r = 0;
			return function () {
				var n = sU(),
					o = aU - (n - r);
				if (((r = n), o > 0)) {
					if (++t >= oU) return arguments[0];
				} else t = 0;
				return e.apply(void 0, arguments);
			};
		}
		ty.exports = uU;
	});
	var iy = u((NK, ny) => {
		var cU = ey(),
			lU = ry(),
			fU = lU(cU);
		ny.exports = fU;
	});
	var ay = u((qK, oy) => {
		var dU = H_(),
			pU = Y_(),
			vU = iy();
		function EU(e) {
			return vU(pU(e, void 0, dU), e + "");
		}
		oy.exports = EU;
	});
	var cy = u((xK, uy) => {
		var sy = pa(),
			hU = sy && new sy();
		uy.exports = hU;
	});
	var fy = u((PK, ly) => {
		function gU() {}
		ly.exports = gU;
	});
	var Ja = u((LK, py) => {
		var dy = cy(),
			_U = fy(),
			yU = dy
				? function (e) {
						return dy.get(e);
				  }
				: _U;
		py.exports = yU;
	});
	var Ey = u((DK, vy) => {
		var mU = {};
		vy.exports = mU;
	});
	var es = u((MK, gy) => {
		var hy = Ey(),
			TU = Object.prototype,
			IU = TU.hasOwnProperty;
		function OU(e) {
			for (
				var t = e.name + "", r = hy[t], n = IU.call(hy, t) ? r.length : 0;
				n--;

			) {
				var o = r[n],
					i = o.func;
				if (i == null || i == e) return o.name;
			}
			return t;
		}
		gy.exports = OU;
	});
	var mi = u((FK, _y) => {
		var bU = Za(),
			SU = hi(),
			AU = 4294967295;
		function yi(e) {
			(this.__wrapped__ = e),
				(this.__actions__ = []),
				(this.__dir__ = 1),
				(this.__filtered__ = !1),
				(this.__iteratees__ = []),
				(this.__takeCount__ = AU),
				(this.__views__ = []);
		}
		yi.prototype = bU(SU.prototype);
		yi.prototype.constructor = yi;
		_y.exports = yi;
	});
	var my = u((GK, yy) => {
		function wU(e, t) {
			var r = -1,
				n = e.length;
			for (t || (t = Array(n)); ++r < n; ) t[r] = e[r];
			return t;
		}
		yy.exports = wU;
	});
	var Iy = u((XK, Ty) => {
		var RU = mi(),
			CU = _i(),
			NU = my();
		function qU(e) {
			if (e instanceof RU) return e.clone();
			var t = new CU(e.__wrapped__, e.__chain__);
			return (
				(t.__actions__ = NU(e.__actions__)),
				(t.__index__ = e.__index__),
				(t.__values__ = e.__values__),
				t
			);
		}
		Ty.exports = qU;
	});
	var Sy = u((UK, by) => {
		var xU = mi(),
			Oy = _i(),
			PU = hi(),
			LU = Ne(),
			DU = Ot(),
			MU = Iy(),
			FU = Object.prototype,
			GU = FU.hasOwnProperty;
		function Ti(e) {
			if (DU(e) && !LU(e) && !(e instanceof xU)) {
				if (e instanceof Oy) return e;
				if (GU.call(e, "__wrapped__")) return MU(e);
			}
			return new Oy(e);
		}
		Ti.prototype = PU.prototype;
		Ti.prototype.constructor = Ti;
		by.exports = Ti;
	});
	var wy = u((VK, Ay) => {
		var XU = mi(),
			UU = Ja(),
			VU = es(),
			WU = Sy();
		function BU(e) {
			var t = VU(e),
				r = WU[t];
			if (typeof r != "function" || !(t in XU.prototype)) return !1;
			if (e === r) return !0;
			var n = UU(r);
			return !!n && e === n[0];
		}
		Ay.exports = BU;
	});
	var qy = u((WK, Ny) => {
		var Ry = _i(),
			HU = ay(),
			jU = Ja(),
			ts = es(),
			kU = Ne(),
			Cy = wy(),
			KU = "Expected a function",
			zU = 8,
			YU = 32,
			$U = 128,
			QU = 256;
		function ZU(e) {
			return HU(function (t) {
				var r = t.length,
					n = r,
					o = Ry.prototype.thru;
				for (e && t.reverse(); n--; ) {
					var i = t[n];
					if (typeof i != "function") throw new TypeError(KU);
					if (o && !a && ts(i) == "wrapper") var a = new Ry([], !0);
				}
				for (n = a ? n : r; ++n < r; ) {
					i = t[n];
					var s = ts(i),
						c = s == "wrapper" ? jU(i) : void 0;
					c &&
					Cy(c[0]) &&
					c[1] == ($U | zU | YU | QU) &&
					!c[4].length &&
					c[9] == 1
						? (a = a[ts(c[0])].apply(a, c[3]))
						: (a = i.length == 1 && Cy(i) ? a[s]() : a.thru(i));
				}
				return function () {
					var f = arguments,
						E = f[0];
					if (a && f.length == 1 && kU(E)) return a.plant(E).value();
					for (var p = 0, h = r ? t[p].apply(this, f) : E; ++p < r; )
						h = t[p].call(this, h);
					return h;
				};
			});
		}
		Ny.exports = ZU;
	});
	var Py = u((BK, xy) => {
		var JU = qy(),
			eV = JU();
		xy.exports = eV;
	});
	var Dy = u((HK, Ly) => {
		function tV(e, t, r) {
			return (
				e === e &&
					(r !== void 0 && (e = e <= r ? e : r),
					t !== void 0 && (e = e >= t ? e : t)),
				e
			);
		}
		Ly.exports = tV;
	});
	var Fy = u((jK, My) => {
		var rV = Dy(),
			rs = Jn();
		function nV(e, t, r) {
			return (
				r === void 0 && ((r = t), (t = void 0)),
				r !== void 0 && ((r = rs(r)), (r = r === r ? r : 0)),
				t !== void 0 && ((t = rs(t)), (t = t === t ? t : 0)),
				rV(rs(e), t, r)
			);
		}
		My.exports = nV;
	});
	var tm = u((Ai) => {
		"use strict";
		var Si = ot().default;
		Object.defineProperty(Ai, "__esModule", { value: !0 });
		Ai.default = void 0;
		var je = Si(Lr()),
			iV = Si(Py()),
			oV = Si(Qn()),
			aV = Si(Fy()),
			Bt = Ue(),
			ns = ss(),
			Ii = Ei(),
			sV = Wt(),
			{
				MOUSE_CLICK: uV,
				MOUSE_SECOND_CLICK: cV,
				MOUSE_DOWN: lV,
				MOUSE_UP: fV,
				MOUSE_OVER: dV,
				MOUSE_OUT: pV,
				DROPDOWN_CLOSE: vV,
				DROPDOWN_OPEN: EV,
				SLIDER_ACTIVE: hV,
				SLIDER_INACTIVE: gV,
				TAB_ACTIVE: _V,
				TAB_INACTIVE: yV,
				NAVBAR_CLOSE: mV,
				NAVBAR_OPEN: TV,
				MOUSE_MOVE: IV,
				PAGE_SCROLL_DOWN: ky,
				SCROLL_INTO_VIEW: Ky,
				SCROLL_OUT_OF_VIEW: OV,
				PAGE_SCROLL_UP: bV,
				SCROLLING_IN_VIEW: SV,
				PAGE_FINISH: zy,
				ECOMMERCE_CART_CLOSE: AV,
				ECOMMERCE_CART_OPEN: wV,
				PAGE_START: Yy,
				PAGE_SCROLL: RV,
			} = Bt.EventTypeConsts,
			is = "COMPONENT_ACTIVE",
			$y = "COMPONENT_INACTIVE",
			{ COLON_DELIMITER: Gy } = Bt.IX2EngineConstants,
			{ getNamespacedParameterId: Xy } = sV.IX2VanillaUtils,
			Qy = (e) => (t) => typeof t == "object" && e(t) ? !0 : t,
			nn = Qy(({ element: e, nativeEvent: t }) => e === t.target),
			CV = Qy(({ element: e, nativeEvent: t }) => e.contains(t.target)),
			dt = (0, iV.default)([nn, CV]),
			Zy = (e, t) => {
				if (t) {
					let { ixData: r } = e.getState(),
						{ events: n } = r,
						o = n[t];
					if (o && !qV[o.eventTypeId]) return o;
				}
				return null;
			},
			NV = ({ store: e, event: t }) => {
				let { action: r } = t,
					{ autoStopEventId: n } = r.config;
				return !!Zy(e, n);
			},
			We = ({ store: e, event: t, element: r, eventStateKey: n }, o) => {
				let { action: i, id: a } = t,
					{ actionListId: s, autoStopEventId: c } = i.config,
					f = Zy(e, c);
				return (
					f &&
						(0, ns.stopActionGroup)({
							store: e,
							eventId: c,
							eventTarget: r,
							eventStateKey: c + Gy + n.split(Gy)[1],
							actionListId: (0, oV.default)(f, "action.config.actionListId"),
						}),
					(0, ns.stopActionGroup)({
						store: e,
						eventId: a,
						eventTarget: r,
						eventStateKey: n,
						actionListId: s,
					}),
					(0, ns.startActionGroup)({
						store: e,
						eventId: a,
						eventTarget: r,
						eventStateKey: n,
						actionListId: s,
					}),
					o
				);
			},
			Je = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
			on = { handler: Je(dt, We) },
			Jy = (0, je.default)({}, on, { types: [is, $y].join(" ") }),
			os = [
				{ target: window, types: "resize orientationchange", throttle: !0 },
				{
					target: document,
					types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
					throttle: !0,
				},
			],
			Uy = "mouseover mouseout",
			as = { types: os },
			qV = { PAGE_START: Yy, PAGE_FINISH: zy },
			rn = (() => {
				let e = window.pageXOffset !== void 0,
					r =
						document.compatMode === "CSS1Compat"
							? document.documentElement
							: document.body;
				return () => ({
					scrollLeft: e ? window.pageXOffset : r.scrollLeft,
					scrollTop: e ? window.pageYOffset : r.scrollTop,
					stiffScrollTop: (0, aV.default)(
						e ? window.pageYOffset : r.scrollTop,
						0,
						r.scrollHeight - window.innerHeight
					),
					scrollWidth: r.scrollWidth,
					scrollHeight: r.scrollHeight,
					clientWidth: r.clientWidth,
					clientHeight: r.clientHeight,
					innerWidth: window.innerWidth,
					innerHeight: window.innerHeight,
				});
			})(),
			xV = (e, t) =>
				!(
					e.left > t.right ||
					e.right < t.left ||
					e.top > t.bottom ||
					e.bottom < t.top
				),
			PV = ({ element: e, nativeEvent: t }) => {
				let { type: r, target: n, relatedTarget: o } = t,
					i = e.contains(n);
				if (r === "mouseover" && i) return !0;
				let a = e.contains(o);
				return !!(r === "mouseout" && i && a);
			},
			LV = (e) => {
				let {
						element: t,
						event: { config: r },
					} = e,
					{ clientWidth: n, clientHeight: o } = rn(),
					i = r.scrollOffsetValue,
					c = r.scrollOffsetUnit === "PX" ? i : (o * (i || 0)) / 100;
				return xV(t.getBoundingClientRect(), {
					left: 0,
					top: c,
					right: n,
					bottom: o - c,
				});
			},
			em = (e) => (t, r) => {
				let { type: n } = t.nativeEvent,
					o = [is, $y].indexOf(n) !== -1 ? n === is : r.isActive,
					i = (0, je.default)({}, r, { isActive: o });
				return ((!r || i.isActive !== r.isActive) && e(t, i)) || i;
			},
			Vy = (e) => (t, r) => {
				let n = { elementHovered: PV(t) };
				return (
					((r ? n.elementHovered !== r.elementHovered : n.elementHovered) &&
						e(t, n)) ||
					n
				);
			},
			DV = (e) => (t, r) => {
				let n = (0, je.default)({}, r, { elementVisible: LV(t) });
				return (
					((r ? n.elementVisible !== r.elementVisible : n.elementVisible) &&
						e(t, n)) ||
					n
				);
			},
			Wy =
				(e) =>
				(t, r = {}) => {
					let { stiffScrollTop: n, scrollHeight: o, innerHeight: i } = rn(),
						{
							event: { config: a, eventTypeId: s },
						} = t,
						{ scrollOffsetValue: c, scrollOffsetUnit: f } = a,
						E = f === "PX",
						p = o - i,
						h = Number((n / p).toFixed(2));
					if (r && r.percentTop === h) return r;
					let g = (E ? c : (i * (c || 0)) / 100) / p,
						S,
						b,
						x = 0;
					r &&
						((S = h > r.percentTop),
						(b = r.scrollingDown !== S),
						(x = b ? h : r.anchorTop));
					let A = s === ky ? h >= x + g : h <= x - g,
						w = (0, je.default)({}, r, {
							percentTop: h,
							inBounds: A,
							anchorTop: x,
							scrollingDown: S,
						});
					return (r && A && (b || w.inBounds !== r.inBounds) && e(t, w)) || w;
				},
			MV = (e, t) =>
				e.left > t.left &&
				e.left < t.right &&
				e.top > t.top &&
				e.top < t.bottom,
			FV = (e) => (t, r) => {
				let n = { finished: document.readyState === "complete" };
				return n.finished && !(r && r.finshed) && e(t), n;
			},
			GV = (e) => (t, r) => {
				let n = { started: !0 };
				return r || e(t), n;
			},
			By =
				(e) =>
				(t, r = { clickCount: 0 }) => {
					let n = { clickCount: (r.clickCount % 2) + 1 };
					return (n.clickCount !== r.clickCount && e(t, n)) || n;
				},
			Oi = (e = !0) =>
				(0, je.default)({}, Jy, {
					handler: Je(
						e ? dt : nn,
						em((t, r) => (r.isActive ? on.handler(t, r) : r))
					),
				}),
			bi = (e = !0) =>
				(0, je.default)({}, Jy, {
					handler: Je(
						e ? dt : nn,
						em((t, r) => (r.isActive ? r : on.handler(t, r)))
					),
				}),
			Hy = (0, je.default)({}, as, {
				handler: DV((e, t) => {
					let { elementVisible: r } = t,
						{ event: n, store: o } = e,
						{ ixData: i } = o.getState(),
						{ events: a } = i;
					return !a[n.action.config.autoStopEventId] && t.triggered
						? t
						: (n.eventTypeId === Ky) === r
						? (We(e), (0, je.default)({}, t, { triggered: !0 }))
						: t;
				}),
			}),
			jy = 0.05,
			XV = {
				[hV]: Oi(),
				[gV]: bi(),
				[EV]: Oi(),
				[vV]: bi(),
				[TV]: Oi(!1),
				[mV]: bi(!1),
				[_V]: Oi(),
				[yV]: bi(),
				[wV]: { types: "ecommerce-cart-open", handler: Je(dt, We) },
				[AV]: { types: "ecommerce-cart-close", handler: Je(dt, We) },
				[uV]: {
					types: "click",
					handler: Je(
						dt,
						By((e, { clickCount: t }) => {
							NV(e) ? t === 1 && We(e) : We(e);
						})
					),
				},
				[cV]: {
					types: "click",
					handler: Je(
						dt,
						By((e, { clickCount: t }) => {
							t === 2 && We(e);
						})
					),
				},
				[lV]: (0, je.default)({}, on, { types: "mousedown" }),
				[fV]: (0, je.default)({}, on, { types: "mouseup" }),
				[dV]: {
					types: Uy,
					handler: Je(
						dt,
						Vy((e, t) => {
							t.elementHovered && We(e);
						})
					),
				},
				[pV]: {
					types: Uy,
					handler: Je(
						dt,
						Vy((e, t) => {
							t.elementHovered || We(e);
						})
					),
				},
				[IV]: {
					types: "mousemove mouseout scroll",
					handler: (
						{
							store: e,
							element: t,
							eventConfig: r,
							nativeEvent: n,
							eventStateKey: o,
						},
						i = { clientX: 0, clientY: 0, pageX: 0, pageY: 0 }
					) => {
						let {
								basedOn: a,
								selectedAxis: s,
								continuousParameterGroupId: c,
								reverse: f,
								restingState: E = 0,
							} = r,
							{
								clientX: p = i.clientX,
								clientY: h = i.clientY,
								pageX: g = i.pageX,
								pageY: S = i.pageY,
							} = n,
							b = s === "X_AXIS",
							x = n.type === "mouseout",
							A = E / 100,
							w = c,
							T = !1;
						switch (a) {
							case Bt.EventBasedOn.VIEWPORT: {
								A = b
									? Math.min(p, window.innerWidth) / window.innerWidth
									: Math.min(h, window.innerHeight) / window.innerHeight;
								break;
							}
							case Bt.EventBasedOn.PAGE: {
								let {
									scrollLeft: N,
									scrollTop: C,
									scrollWidth: q,
									scrollHeight: G,
								} = rn();
								A = b ? Math.min(N + g, q) / q : Math.min(C + S, G) / G;
								break;
							}
							case Bt.EventBasedOn.ELEMENT:
							default: {
								w = Xy(o, c);
								let N = n.type.indexOf("mouse") === 0;
								if (N && dt({ element: t, nativeEvent: n }) !== !0) break;
								let C = t.getBoundingClientRect(),
									{ left: q, top: G, width: k, height: Y } = C;
								if (!N && !MV({ left: p, top: h }, C)) break;
								(T = !0), (A = b ? (p - q) / k : (h - G) / Y);
								break;
							}
						}
						return (
							x && (A > 1 - jy || A < jy) && (A = Math.round(A)),
							(a !== Bt.EventBasedOn.ELEMENT || T || T !== i.elementHovered) &&
								((A = f ? 1 - A : A),
								e.dispatch((0, Ii.parameterChanged)(w, A))),
							{ elementHovered: T, clientX: p, clientY: h, pageX: g, pageY: S }
						);
					},
				},
				[RV]: {
					types: os,
					handler: ({ store: e, eventConfig: t }) => {
						let { continuousParameterGroupId: r, reverse: n } = t,
							{ scrollTop: o, scrollHeight: i, clientHeight: a } = rn(),
							s = o / (i - a);
						(s = n ? 1 - s : s), e.dispatch((0, Ii.parameterChanged)(r, s));
					},
				},
				[SV]: {
					types: os,
					handler: (
						{ element: e, store: t, eventConfig: r, eventStateKey: n },
						o = { scrollPercent: 0 }
					) => {
						let {
								scrollLeft: i,
								scrollTop: a,
								scrollWidth: s,
								scrollHeight: c,
								clientHeight: f,
							} = rn(),
							{
								basedOn: E,
								selectedAxis: p,
								continuousParameterGroupId: h,
								startsEntering: g,
								startsExiting: S,
								addEndOffset: b,
								addStartOffset: x,
								addOffsetValue: A = 0,
								endOffsetValue: w = 0,
							} = r,
							T = p === "X_AXIS";
						if (E === Bt.EventBasedOn.VIEWPORT) {
							let N = T ? i / s : a / c;
							return (
								N !== o.scrollPercent &&
									t.dispatch((0, Ii.parameterChanged)(h, N)),
								{ scrollPercent: N }
							);
						} else {
							let N = Xy(n, h),
								C = e.getBoundingClientRect(),
								q = (x ? A : 0) / 100,
								G = (b ? w : 0) / 100;
							(q = g ? q : 1 - q), (G = S ? G : 1 - G);
							let k = C.top + Math.min(C.height * q, f),
								ie = C.top + C.height * G - k,
								ee = Math.min(f + ie, c),
								m = Math.min(Math.max(0, f - k), ee) / ee;
							return (
								m !== o.scrollPercent &&
									t.dispatch((0, Ii.parameterChanged)(N, m)),
								{ scrollPercent: m }
							);
						}
					},
				},
				[Ky]: Hy,
				[OV]: Hy,
				[ky]: (0, je.default)({}, as, {
					handler: Wy((e, t) => {
						t.scrollingDown && We(e);
					}),
				}),
				[bV]: (0, je.default)({}, as, {
					handler: Wy((e, t) => {
						t.scrollingDown || We(e);
					}),
				}),
				[zy]: {
					types: "readystatechange IX2_PAGE_UPDATE",
					handler: Je(nn, FV(We)),
				},
				[Yy]: {
					types: "readystatechange IX2_PAGE_UPDATE",
					handler: Je(nn, GV(We)),
				},
			};
		Ai.default = XV;
	});
	var ss = u((Rt) => {
		"use strict";
		var tt = ot().default,
			UV = Kt().default;
		Object.defineProperty(Rt, "__esModule", { value: !0 });
		Rt.observeRequests = EW;
		Rt.startActionGroup = vs;
		Rt.startEngine = Ni;
		Rt.stopActionGroup = ps;
		Rt.stopAllActionGroups = lm;
		Rt.stopEngine = qi;
		var VV = tt(Lr()),
			WV = tt(hg()),
			BV = tt(Ca()),
			wt = tt(Qn()),
			HV = tt(Dg()),
			jV = tt(c_()),
			kV = tt(f_()),
			KV = tt(p_()),
			an = tt(y_()),
			zV = tt(A_()),
			et = Ue(),
			im = Wt(),
			Oe = Ei(),
			we = UV(q_()),
			YV = tt(tm()),
			$V = ["store", "computedStyle"],
			QV = Object.keys(et.QuickEffectIds),
			us = (e) => QV.includes(e),
			{
				COLON_DELIMITER: cs,
				BOUNDARY_SELECTOR: wi,
				HTML_ELEMENT: om,
				RENDER_GENERAL: ZV,
				W_MOD_IX: rm,
			} = et.IX2EngineConstants,
			{
				getAffectedElements: Ri,
				getElementId: JV,
				getDestinationValues: ls,
				observeStore: Ht,
				getInstanceId: eW,
				renderHTMLElement: tW,
				clearAllStyles: am,
				getMaxDurationItemIndex: rW,
				getComputedStyle: nW,
				getInstanceOrigin: iW,
				reduceListToGroup: oW,
				shouldNamespaceEventParameter: aW,
				getNamespacedParameterId: sW,
				shouldAllowMediaQuery: Ci,
				cleanupHTMLElement: uW,
				stringifyTarget: cW,
				mediaQueriesEqual: lW,
				shallowEqual: fW,
			} = im.IX2VanillaUtils,
			{
				isPluginType: fs,
				createPluginInstance: ds,
				getPluginDuration: dW,
			} = im.IX2VanillaPlugins,
			nm = navigator.userAgent,
			pW = nm.match(/iPad/i) || nm.match(/iPhone/),
			vW = 12;
		function EW(e) {
			Ht({ store: e, select: ({ ixRequest: t }) => t.preview, onChange: _W }),
				Ht({
					store: e,
					select: ({ ixRequest: t }) => t.playback,
					onChange: yW,
				}),
				Ht({ store: e, select: ({ ixRequest: t }) => t.stop, onChange: mW }),
				Ht({ store: e, select: ({ ixRequest: t }) => t.clear, onChange: TW });
		}
		function hW(e) {
			Ht({
				store: e,
				select: ({ ixSession: t }) => t.mediaQueryKey,
				onChange: () => {
					qi(e),
						am({ store: e, elementApi: we }),
						Ni({ store: e, allowEvents: !0 }),
						sm();
				},
			});
		}
		function gW(e, t) {
			let r = Ht({
				store: e,
				select: ({ ixSession: n }) => n.tick,
				onChange: (n) => {
					t(n), r();
				},
			});
		}
		function _W({ rawData: e, defer: t }, r) {
			let n = () => {
				Ni({ store: r, rawData: e, allowEvents: !0 }), sm();
			};
			t ? setTimeout(n, 0) : n();
		}
		function sm() {
			document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"));
		}
		function yW(e, t) {
			let {
					actionTypeId: r,
					actionListId: n,
					actionItemId: o,
					eventId: i,
					allowEvents: a,
					immediate: s,
					testManual: c,
					verbose: f = !0,
				} = e,
				{ rawData: E } = e;
			if (n && o && E && s) {
				let p = E.actionLists[n];
				p && (E = oW({ actionList: p, actionItemId: o, rawData: E }));
			}
			if (
				(Ni({ store: t, rawData: E, allowEvents: a, testManual: c }),
				(n && r === et.ActionTypeConsts.GENERAL_START_ACTION) || us(r))
			) {
				ps({ store: t, actionListId: n }),
					cm({ store: t, actionListId: n, eventId: i });
				let p = vs({
					store: t,
					eventId: i,
					actionListId: n,
					immediate: s,
					verbose: f,
				});
				f &&
					p &&
					t.dispatch(
						(0, Oe.actionListPlaybackChanged)({
							actionListId: n,
							isPlaying: !s,
						})
					);
			}
		}
		function mW({ actionListId: e }, t) {
			e ? ps({ store: t, actionListId: e }) : lm({ store: t }), qi(t);
		}
		function TW(e, t) {
			qi(t), am({ store: t, elementApi: we });
		}
		function Ni({ store: e, rawData: t, allowEvents: r, testManual: n }) {
			let { ixSession: o } = e.getState();
			t && e.dispatch((0, Oe.rawDataImported)(t)),
				o.active ||
					(e.dispatch(
						(0, Oe.sessionInitialized)({
							hasBoundaryNodes: !!document.querySelector(wi),
							reducedMotion:
								document.body.hasAttribute("data-wf-ix-vacation") &&
								window.matchMedia("(prefers-reduced-motion)").matches,
						})
					),
					r &&
						(wW(e),
						IW(),
						e.getState().ixSession.hasDefinedMediaQueries && hW(e)),
					e.dispatch((0, Oe.sessionStarted)()),
					OW(e, n));
		}
		function IW() {
			let { documentElement: e } = document;
			e.className.indexOf(rm) === -1 && (e.className += ` ${rm}`);
		}
		function OW(e, t) {
			let r = (n) => {
				let { ixSession: o, ixParameters: i } = e.getState();
				o.active &&
					(e.dispatch((0, Oe.animationFrameChanged)(n, i)),
					t ? gW(e, r) : requestAnimationFrame(r));
			};
			r(window.performance.now());
		}
		function qi(e) {
			let { ixSession: t } = e.getState();
			if (t.active) {
				let { eventListeners: r } = t;
				r.forEach(bW), e.dispatch((0, Oe.sessionStopped)());
			}
		}
		function bW({ target: e, listenerParams: t }) {
			e.removeEventListener.apply(e, t);
		}
		function SW({
			store: e,
			eventStateKey: t,
			eventTarget: r,
			eventId: n,
			eventConfig: o,
			actionListId: i,
			parameterGroup: a,
			smoothing: s,
			restingValue: c,
		}) {
			let { ixData: f, ixSession: E } = e.getState(),
				{ events: p } = f,
				h = p[n],
				{ eventTypeId: g } = h,
				S = {},
				b = {},
				x = [],
				{ continuousActionGroups: A } = a,
				{ id: w } = a;
			aW(g, o) && (w = sW(t, w));
			let T = E.hasBoundaryNodes && r ? we.getClosestElement(r, wi) : null;
			A.forEach((N) => {
				let { keyframe: C, actionItems: q } = N;
				q.forEach((G) => {
					let { actionTypeId: k } = G,
						{ target: Y } = G.config;
					if (!Y) return;
					let ie = Y.boundaryMode ? T : null,
						ee = cW(Y) + cs + k;
					if (((b[ee] = AW(b[ee], C, G)), !S[ee])) {
						S[ee] = !0;
						let { config: D } = G;
						Ri({
							config: D,
							event: h,
							eventTarget: r,
							elementRoot: ie,
							elementApi: we,
						}).forEach((m) => {
							x.push({ element: m, key: ee });
						});
					}
				});
			}),
				x.forEach(({ element: N, key: C }) => {
					let q = b[C],
						G = (0, wt.default)(q, "[0].actionItems[0]", {}),
						{ actionTypeId: k } = G,
						Y = fs(k) ? ds(k)(N, G) : null,
						ie = ls({ element: N, actionItem: G, elementApi: we }, Y);
					Es({
						store: e,
						element: N,
						eventId: n,
						actionListId: i,
						actionItem: G,
						destination: ie,
						continuous: !0,
						parameterId: w,
						actionGroups: q,
						smoothing: s,
						restingValue: c,
						pluginInstance: Y,
					});
				});
		}
		function AW(e = [], t, r) {
			let n = [...e],
				o;
			return (
				n.some((i, a) => (i.keyframe === t ? ((o = a), !0) : !1)),
				o == null && ((o = n.length), n.push({ keyframe: t, actionItems: [] })),
				n[o].actionItems.push(r),
				n
			);
		}
		function wW(e) {
			let { ixData: t } = e.getState(),
				{ eventTypeMap: r } = t;
			um(e),
				(0, an.default)(r, (o, i) => {
					let a = YV.default[i];
					if (!a) {
						console.warn(`IX2 event type not configured: ${i}`);
						return;
					}
					PW({ logic: a, store: e, events: o });
				});
			let { ixSession: n } = e.getState();
			n.eventListeners.length && CW(e);
		}
		var RW = ["resize", "orientationchange"];
		function CW(e) {
			let t = () => {
				um(e);
			};
			RW.forEach((r) => {
				window.addEventListener(r, t),
					e.dispatch((0, Oe.eventListenerAdded)(window, [r, t]));
			}),
				t();
		}
		function um(e) {
			let { ixSession: t, ixData: r } = e.getState(),
				n = window.innerWidth;
			if (n !== t.viewportWidth) {
				let { mediaQueries: o } = r;
				e.dispatch((0, Oe.viewportWidthChanged)({ width: n, mediaQueries: o }));
			}
		}
		var NW = (e, t) => (0, jV.default)((0, KV.default)(e, t), kV.default),
			qW = (e, t) => {
				(0, an.default)(e, (r, n) => {
					r.forEach((o, i) => {
						let a = n + cs + i;
						t(o, n, a);
					});
				});
			},
			xW = (e) => {
				let t = { target: e.target, targets: e.targets };
				return Ri({ config: t, elementApi: we });
			};
		function PW({ logic: e, store: t, events: r }) {
			LW(r);
			let { types: n, handler: o } = e,
				{ ixData: i } = t.getState(),
				{ actionLists: a } = i,
				s = NW(r, xW);
			if (!(0, HV.default)(s)) return;
			(0, an.default)(s, (p, h) => {
				let g = r[h],
					{ action: S, id: b, mediaQueries: x = i.mediaQueryKeys } = g,
					{ actionListId: A } = S.config;
				lW(x, i.mediaQueryKeys) || t.dispatch((0, Oe.mediaQueriesDefined)()),
					S.actionTypeId === et.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION &&
						(Array.isArray(g.config) ? g.config : [g.config]).forEach((T) => {
							let { continuousParameterGroupId: N } = T,
								C = (0, wt.default)(a, `${A}.continuousParameterGroups`, []),
								q = (0, BV.default)(C, ({ id: Y }) => Y === N),
								G = (T.smoothing || 0) / 100,
								k = (T.restingState || 0) / 100;
							q &&
								p.forEach((Y, ie) => {
									let ee = b + cs + ie;
									SW({
										store: t,
										eventStateKey: ee,
										eventTarget: Y,
										eventId: b,
										eventConfig: T,
										actionListId: A,
										parameterGroup: q,
										smoothing: G,
										restingValue: k,
									});
								});
						}),
					(S.actionTypeId === et.ActionTypeConsts.GENERAL_START_ACTION ||
						us(S.actionTypeId)) &&
						cm({ store: t, actionListId: A, eventId: b });
			});
			let c = (p) => {
					let { ixSession: h } = t.getState();
					qW(s, (g, S, b) => {
						let x = r[S],
							A = h.eventState[b],
							{ action: w, mediaQueries: T = i.mediaQueryKeys } = x;
						if (!Ci(T, h.mediaQueryKey)) return;
						let N = (C = {}) => {
							let q = o(
								{
									store: t,
									element: g,
									event: x,
									eventConfig: C,
									nativeEvent: p,
									eventStateKey: b,
								},
								A
							);
							fW(q, A) || t.dispatch((0, Oe.eventStateChanged)(b, q));
						};
						w.actionTypeId === et.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION
							? (Array.isArray(x.config) ? x.config : [x.config]).forEach(N)
							: N();
					});
				},
				f = (0, zV.default)(c, vW),
				E = ({ target: p = document, types: h, throttle: g }) => {
					h.split(" ")
						.filter(Boolean)
						.forEach((S) => {
							let b = g ? f : c;
							p.addEventListener(S, b),
								t.dispatch((0, Oe.eventListenerAdded)(p, [S, b]));
						});
				};
			Array.isArray(n) ? n.forEach(E) : typeof n == "string" && E(e);
		}
		function LW(e) {
			if (!pW) return;
			let t = {},
				r = "";
			for (let n in e) {
				let { eventTypeId: o, target: i } = e[n],
					a = we.getQuerySelector(i);
				t[a] ||
					((o === et.EventTypeConsts.MOUSE_CLICK ||
						o === et.EventTypeConsts.MOUSE_SECOND_CLICK) &&
						((t[a] = !0),
						(r += a + "{cursor: pointer;touch-action: manipulation;}")));
			}
			if (r) {
				let n = document.createElement("style");
				(n.textContent = r), document.body.appendChild(n);
			}
		}
		function cm({ store: e, actionListId: t, eventId: r }) {
			let { ixData: n, ixSession: o } = e.getState(),
				{ actionLists: i, events: a } = n,
				s = a[r],
				c = i[t];
			if (c && c.useFirstGroupAsInitialState) {
				let f = (0, wt.default)(c, "actionItemGroups[0].actionItems", []),
					E = (0, wt.default)(s, "mediaQueries", n.mediaQueryKeys);
				if (!Ci(E, o.mediaQueryKey)) return;
				f.forEach((p) => {
					var h;
					let { config: g, actionTypeId: S } = p,
						b =
							(g == null || (h = g.target) === null || h === void 0
								? void 0
								: h.useEventTarget) === !0
								? { target: s.target, targets: s.targets }
								: g,
						x = Ri({ config: b, event: s, elementApi: we }),
						A = fs(S);
					x.forEach((w) => {
						let T = A ? ds(S)(w, p) : null;
						Es({
							destination: ls({ element: w, actionItem: p, elementApi: we }, T),
							immediate: !0,
							store: e,
							element: w,
							eventId: r,
							actionItem: p,
							actionListId: t,
							pluginInstance: T,
						});
					});
				});
			}
		}
		function lm({ store: e }) {
			let { ixInstances: t } = e.getState();
			(0, an.default)(t, (r) => {
				if (!r.continuous) {
					let { actionListId: n, verbose: o } = r;
					hs(r, e),
						o &&
							e.dispatch(
								(0, Oe.actionListPlaybackChanged)({
									actionListId: n,
									isPlaying: !1,
								})
							);
				}
			});
		}
		function ps({
			store: e,
			eventId: t,
			eventTarget: r,
			eventStateKey: n,
			actionListId: o,
		}) {
			let { ixInstances: i, ixSession: a } = e.getState(),
				s = a.hasBoundaryNodes && r ? we.getClosestElement(r, wi) : null;
			(0, an.default)(i, (c) => {
				let f = (0, wt.default)(c, "actionItem.config.target.boundaryMode"),
					E = n ? c.eventStateKey === n : !0;
				if (c.actionListId === o && c.eventId === t && E) {
					if (s && f && !we.elementContains(s, c.element)) return;
					hs(c, e),
						c.verbose &&
							e.dispatch(
								(0, Oe.actionListPlaybackChanged)({
									actionListId: o,
									isPlaying: !1,
								})
							);
				}
			});
		}
		function vs({
			store: e,
			eventId: t,
			eventTarget: r,
			eventStateKey: n,
			actionListId: o,
			groupIndex: i = 0,
			immediate: a,
			verbose: s,
		}) {
			var c;
			let { ixData: f, ixSession: E } = e.getState(),
				{ events: p } = f,
				h = p[t] || {},
				{ mediaQueries: g = f.mediaQueryKeys } = h,
				S = (0, wt.default)(f, `actionLists.${o}`, {}),
				{ actionItemGroups: b, useFirstGroupAsInitialState: x } = S;
			if (!b || !b.length) return !1;
			i >= b.length && (0, wt.default)(h, "config.loop") && (i = 0),
				i === 0 && x && i++;
			let w =
					(i === 0 || (i === 1 && x)) &&
					us((c = h.action) === null || c === void 0 ? void 0 : c.actionTypeId)
						? h.config.delay
						: void 0,
				T = (0, wt.default)(b, [i, "actionItems"], []);
			if (!T.length || !Ci(g, E.mediaQueryKey)) return !1;
			let N = E.hasBoundaryNodes && r ? we.getClosestElement(r, wi) : null,
				C = rW(T),
				q = !1;
			return (
				T.forEach((G, k) => {
					let { config: Y, actionTypeId: ie } = G,
						ee = fs(ie),
						{ target: D } = Y;
					if (!D) return;
					let m = D.boundaryMode ? N : null;
					Ri({
						config: Y,
						event: h,
						eventTarget: r,
						elementRoot: m,
						elementApi: we,
					}).forEach((M, X) => {
						let $ = ee ? ds(ie)(M, G) : null,
							te = ee ? dW(ie)(M, G) : null;
						q = !0;
						let P = C === k && X === 0,
							H = nW({ element: M, actionItem: G }),
							j = ls({ element: M, actionItem: G, elementApi: we }, $);
						Es({
							store: e,
							element: M,
							actionItem: G,
							eventId: t,
							eventTarget: r,
							eventStateKey: n,
							actionListId: o,
							groupIndex: i,
							isCarrier: P,
							computedStyle: H,
							destination: j,
							immediate: a,
							verbose: s,
							pluginInstance: $,
							pluginDuration: te,
							instanceDelay: w,
						});
					});
				}),
				q
			);
		}
		function Es(e) {
			var t;
			let { store: r, computedStyle: n } = e,
				o = (0, WV.default)(e, $V),
				{
					element: i,
					actionItem: a,
					immediate: s,
					pluginInstance: c,
					continuous: f,
					restingValue: E,
					eventId: p,
				} = o,
				h = !f,
				g = eW(),
				{ ixElements: S, ixSession: b, ixData: x } = r.getState(),
				A = JV(S, i),
				{ refState: w } = S[A] || {},
				T = we.getRefType(i),
				N = b.reducedMotion && et.ReducedMotionTypes[a.actionTypeId],
				C;
			if (N && f)
				switch (
					(t = x.events[p]) === null || t === void 0 ? void 0 : t.eventTypeId
				) {
					case et.EventTypeConsts.MOUSE_MOVE:
					case et.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
						C = E;
						break;
					default:
						C = 0.5;
						break;
				}
			let q = iW(i, w, n, a, we, c);
			if (
				(r.dispatch(
					(0, Oe.instanceAdded)(
						(0, VV.default)(
							{
								instanceId: g,
								elementId: A,
								origin: q,
								refType: T,
								skipMotion: N,
								skipToValue: C,
							},
							o
						)
					)
				),
				fm(document.body, "ix2-animation-started", g),
				s)
			) {
				DW(r, g);
				return;
			}
			Ht({ store: r, select: ({ ixInstances: G }) => G[g], onChange: dm }),
				h && r.dispatch((0, Oe.instanceStarted)(g, b.tick));
		}
		function hs(e, t) {
			fm(document.body, "ix2-animation-stopping", {
				instanceId: e.id,
				state: t.getState(),
			});
			let { elementId: r, actionItem: n } = e,
				{ ixElements: o } = t.getState(),
				{ ref: i, refType: a } = o[r] || {};
			a === om && uW(i, n, we), t.dispatch((0, Oe.instanceRemoved)(e.id));
		}
		function fm(e, t, r) {
			let n = document.createEvent("CustomEvent");
			n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n);
		}
		function DW(e, t) {
			let { ixParameters: r } = e.getState();
			e.dispatch((0, Oe.instanceStarted)(t, 0)),
				e.dispatch((0, Oe.animationFrameChanged)(performance.now(), r));
			let { ixInstances: n } = e.getState();
			dm(n[t], e);
		}
		function dm(e, t) {
			let {
					active: r,
					continuous: n,
					complete: o,
					elementId: i,
					actionItem: a,
					actionTypeId: s,
					renderType: c,
					current: f,
					groupIndex: E,
					eventId: p,
					eventTarget: h,
					eventStateKey: g,
					actionListId: S,
					isCarrier: b,
					styleProp: x,
					verbose: A,
					pluginInstance: w,
				} = e,
				{ ixData: T, ixSession: N } = t.getState(),
				{ events: C } = T,
				q = C[p] || {},
				{ mediaQueries: G = T.mediaQueryKeys } = q;
			if (Ci(G, N.mediaQueryKey) && (n || r || o)) {
				if (f || (c === ZV && o)) {
					t.dispatch((0, Oe.elementStateChanged)(i, s, f, a));
					let { ixElements: k } = t.getState(),
						{ ref: Y, refType: ie, refState: ee } = k[i] || {},
						D = ee && ee[s];
					switch (ie) {
						case om: {
							tW(Y, ee, D, p, a, x, we, c, w);
							break;
						}
					}
				}
				if (o) {
					if (b) {
						let k = vs({
							store: t,
							eventId: p,
							eventTarget: h,
							eventStateKey: g,
							actionListId: S,
							groupIndex: E + 1,
							verbose: A,
						});
						A &&
							!k &&
							t.dispatch(
								(0, Oe.actionListPlaybackChanged)({
									actionListId: S,
									isPlaying: !1,
								})
							);
					}
					hs(e, t);
				}
			}
		}
	});
	var vm = u((_t) => {
		"use strict";
		var MW = Kt().default,
			FW = ot().default;
		Object.defineProperty(_t, "__esModule", { value: !0 });
		_t.actions = void 0;
		_t.destroy = pm;
		_t.init = WW;
		_t.setEnv = VW;
		_t.store = void 0;
		Pl();
		var GW = ko(),
			XW = FW(Eg()),
			gs = ss(),
			UW = MW(Ei());
		_t.actions = UW;
		var xi = (0, GW.createStore)(XW.default);
		_t.store = xi;
		function VW(e) {
			e() && (0, gs.observeRequests)(xi);
		}
		function WW(e) {
			pm(), (0, gs.startEngine)({ store: xi, rawData: e, allowEvents: !0 });
		}
		function pm() {
			(0, gs.stopEngine)(xi);
		}
	});
	var _m = u((YK, gm) => {
		var Em = Be(),
			hm = vm();
		hm.setEnv(Em.env);
		Em.define(
			"ix2",
			(gm.exports = function () {
				return hm;
			})
		);
	});
	var mm = u(($K, ym) => {
		var Tr = Be();
		Tr.define(
			"links",
			(ym.exports = function (e, t) {
				var r = {},
					n = e(window),
					o,
					i = Tr.env(),
					a = window.location,
					s = document.createElement("a"),
					c = "w--current",
					f = /index\.(html|php)$/,
					E = /\/$/,
					p,
					h;
				r.ready = r.design = r.preview = g;
				function g() {
					(o = i && Tr.env("design")),
						(h = Tr.env("slug") || a.pathname || ""),
						Tr.scroll.off(b),
						(p = []);
					for (var A = document.links, w = 0; w < A.length; ++w) S(A[w]);
					p.length && (Tr.scroll.on(b), b());
				}
				function S(A) {
					var w =
						(o && A.getAttribute("href-disabled")) || A.getAttribute("href");
					if (((s.href = w), !(w.indexOf(":") >= 0))) {
						var T = e(A);
						if (
							s.hash.length > 1 &&
							s.host + s.pathname === a.host + a.pathname
						) {
							if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash)) return;
							var N = e(s.hash);
							N.length && p.push({ link: T, sec: N, active: !1 });
							return;
						}
						if (!(w === "#" || w === "")) {
							var C = s.href === a.href || w === h || (f.test(w) && E.test(h));
							x(T, c, C);
						}
					}
				}
				function b() {
					var A = n.scrollTop(),
						w = n.height();
					t.each(p, function (T) {
						var N = T.link,
							C = T.sec,
							q = C.offset().top,
							G = C.outerHeight(),
							k = w * 0.5,
							Y = C.is(":visible") && q + G - k >= A && q + k <= A + w;
						T.active !== Y && ((T.active = Y), x(N, c, Y));
					});
				}
				function x(A, w, T) {
					var N = A.hasClass(w);
					(T && N) || (!T && !N) || (T ? A.addClass(w) : A.removeClass(w));
				}
				return r;
			})
		);
	});
	var Im = u((QK, Tm) => {
		var Pi = Be();
		Pi.define(
			"scroll",
			(Tm.exports = function (e) {
				var t = {
						WF_CLICK_EMPTY: "click.wf-empty-link",
						WF_CLICK_SCROLL: "click.wf-scroll",
					},
					r = window.location,
					n = S() ? null : window.history,
					o = e(window),
					i = e(document),
					a = e(document.body),
					s =
						window.requestAnimationFrame ||
						window.mozRequestAnimationFrame ||
						window.webkitRequestAnimationFrame ||
						function (D) {
							window.setTimeout(D, 15);
						},
					c = Pi.env("editor") ? ".w-editor-body" : "body",
					f =
						"header, " +
						c +
						" > .header, " +
						c +
						" > .w-nav:not([data-no-scroll])",
					E = 'a[href="#"]',
					p = 'a[href*="#"]:not(.w-tab-link):not(' + E + ")",
					h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
					g = document.createElement("style");
				g.appendChild(document.createTextNode(h));
				function S() {
					try {
						return !!window.frameElement;
					} catch {
						return !0;
					}
				}
				var b = /^#[a-zA-Z0-9][\w:.-]*$/;
				function x(D) {
					return b.test(D.hash) && D.host + D.pathname === r.host + r.pathname;
				}
				let A =
					typeof window.matchMedia == "function" &&
					window.matchMedia("(prefers-reduced-motion: reduce)");
				function w() {
					return (
						document.body.getAttribute("data-wf-scroll-motion") === "none" ||
						A.matches
					);
				}
				function T(D, m) {
					var L;
					switch (m) {
						case "add":
							(L = D.attr("tabindex")),
								L
									? D.attr("data-wf-tabindex-swap", L)
									: D.attr("tabindex", "-1");
							break;
						case "remove":
							(L = D.attr("data-wf-tabindex-swap")),
								L
									? (D.attr("tabindex", L),
									  D.removeAttr("data-wf-tabindex-swap"))
									: D.removeAttr("tabindex");
							break;
					}
					D.toggleClass("wf-force-outline-none", m === "add");
				}
				function N(D) {
					var m = D.currentTarget;
					if (
						!(
							Pi.env("design") ||
							(window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(m.className))
						)
					) {
						var L = x(m) ? m.hash : "";
						if (L !== "") {
							var M = e(L);
							M.length &&
								(D && (D.preventDefault(), D.stopPropagation()),
								C(L, D),
								window.setTimeout(
									function () {
										q(M, function () {
											T(M, "add"),
												M.get(0).focus({ preventScroll: !0 }),
												T(M, "remove");
										});
									},
									D ? 0 : 300
								));
						}
					}
				}
				function C(D) {
					if (
						r.hash !== D &&
						n &&
						n.pushState &&
						!(Pi.env.chrome && r.protocol === "file:")
					) {
						var m = n.state && n.state.hash;
						m !== D && n.pushState({ hash: D }, "", D);
					}
				}
				function q(D, m) {
					var L = o.scrollTop(),
						M = G(D);
					if (L !== M) {
						var X = k(D, L, M),
							$ = Date.now(),
							te = function () {
								var P = Date.now() - $;
								window.scroll(0, Y(L, M, P, X)),
									P <= X ? s(te) : typeof m == "function" && m();
							};
						s(te);
					}
				}
				function G(D) {
					var m = e(f),
						L = m.css("position") === "fixed" ? m.outerHeight() : 0,
						M = D.offset().top - L;
					if (D.data("scroll") === "mid") {
						var X = o.height() - L,
							$ = D.outerHeight();
						$ < X && (M -= Math.round((X - $) / 2));
					}
					return M;
				}
				function k(D, m, L) {
					if (w()) return 0;
					var M = 1;
					return (
						a.add(D).each(function (X, $) {
							var te = parseFloat($.getAttribute("data-scroll-time"));
							!isNaN(te) && te >= 0 && (M = te);
						}),
						(472.143 * Math.log(Math.abs(m - L) + 125) - 2e3) * M
					);
				}
				function Y(D, m, L, M) {
					return L > M ? m : D + (m - D) * ie(L / M);
				}
				function ie(D) {
					return D < 0.5
						? 4 * D * D * D
						: (D - 1) * (2 * D - 2) * (2 * D - 2) + 1;
				}
				function ee() {
					var { WF_CLICK_EMPTY: D, WF_CLICK_SCROLL: m } = t;
					i.on(m, p, N),
						i.on(D, E, function (L) {
							L.preventDefault();
						}),
						document.head.insertBefore(g, document.head.firstChild);
				}
				return { ready: ee };
			})
		);
	});
	var bm = u((ZK, Om) => {
		var BW = Be();
		BW.define(
			"touch",
			(Om.exports = function (e) {
				var t = {},
					r = window.getSelection;
				(e.event.special.tap = { bindType: "click", delegateType: "click" }),
					(t.init = function (i) {
						return (
							(i = typeof i == "string" ? e(i).get(0) : i), i ? new n(i) : null
						);
					});
				function n(i) {
					var a = !1,
						s = !1,
						c = Math.min(Math.round(window.innerWidth * 0.04), 40),
						f,
						E;
					i.addEventListener("touchstart", p, !1),
						i.addEventListener("touchmove", h, !1),
						i.addEventListener("touchend", g, !1),
						i.addEventListener("touchcancel", S, !1),
						i.addEventListener("mousedown", p, !1),
						i.addEventListener("mousemove", h, !1),
						i.addEventListener("mouseup", g, !1),
						i.addEventListener("mouseout", S, !1);
					function p(x) {
						var A = x.touches;
						(A && A.length > 1) ||
							((a = !0),
							A ? ((s = !0), (f = A[0].clientX)) : (f = x.clientX),
							(E = f));
					}
					function h(x) {
						if (a) {
							if (s && x.type === "mousemove") {
								x.preventDefault(), x.stopPropagation();
								return;
							}
							var A = x.touches,
								w = A ? A[0].clientX : x.clientX,
								T = w - E;
							(E = w),
								Math.abs(T) > c &&
									r &&
									String(r()) === "" &&
									(o("swipe", x, { direction: T > 0 ? "right" : "left" }), S());
						}
					}
					function g(x) {
						if (a && ((a = !1), s && x.type === "mouseup")) {
							x.preventDefault(), x.stopPropagation(), (s = !1);
							return;
						}
					}
					function S() {
						a = !1;
					}
					function b() {
						i.removeEventListener("touchstart", p, !1),
							i.removeEventListener("touchmove", h, !1),
							i.removeEventListener("touchend", g, !1),
							i.removeEventListener("touchcancel", S, !1),
							i.removeEventListener("mousedown", p, !1),
							i.removeEventListener("mousemove", h, !1),
							i.removeEventListener("mouseup", g, !1),
							i.removeEventListener("mouseout", S, !1),
							(i = null);
					}
					this.destroy = b;
				}
				function o(i, a, s) {
					var c = e.Event(i, { originalEvent: a });
					e(a.target).trigger(c, s);
				}
				return (t.instance = t.init(document)), t;
			})
		);
	});
	var Sm = u((_s) => {
		"use strict";
		Object.defineProperty(_s, "__esModule", { value: !0 });
		_s.default = HW;
		function HW(e, t, r, n, o, i, a, s, c, f, E, p, h) {
			return function (g) {
				e(g);
				var S = g.form,
					b = {
						name: S.attr("data-name") || S.attr("name") || "Untitled Form",
						source: t.href,
						test: r.env(),
						fields: {},
						fileUploads: {},
						dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(
							S.html()
						),
						trackingCookies: n(),
					};
				let x = S.attr("data-wf-flow");
				x && (b.wfFlow = x), o(g);
				var A = i(S, b.fields);
				if (A) return a(A);
				if (((b.fileUploads = s(S)), c(g), !f)) {
					E(g);
					return;
				}
				p.ajax({
					url: h,
					type: "POST",
					data: b,
					dataType: "json",
					crossDomain: !0,
				})
					.done(function (w) {
						w && w.code === 200 && (g.success = !0), E(g);
					})
					.fail(function () {
						E(g);
					});
			};
		}
	});
	var wm = u((ez, Am) => {
		var Li = Be();
		Li.define(
			"forms",
			(Am.exports = function (e, t) {
				var r = {},
					n = e(document),
					o,
					i = window.location,
					a = window.XDomainRequest && !window.atob,
					s = ".w-form",
					c,
					f = /e(-)?mail/i,
					E = /^\S+@\S+$/,
					p = window.alert,
					h = Li.env(),
					g,
					S,
					b,
					x = /list-manage[1-9]?.com/i,
					A = t.debounce(function () {
						p(
							"Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue."
						);
					}, 100);
				r.ready =
					r.design =
					r.preview =
						function () {
							w(), !h && !g && N();
						};
				function w() {
					(c = e("html").attr("data-wf-site")),
						(S = "https://webflow.com/api/v1/form/" + c),
						a &&
							S.indexOf("https://webflow.com") >= 0 &&
							(S = S.replace(
								"https://webflow.com",
								"https://formdata.webflow.com"
							)),
						(b = `${S}/signFile`),
						(o = e(s + " form")),
						o.length && o.each(T);
				}
				function T(P, H) {
					var j = e(H),
						U = e.data(H, s);
					U || (U = e.data(H, s, { form: j })), C(U);
					var F = j.closest("div.w-form");
					(U.done = F.find("> .w-form-done")),
						(U.fail = F.find("> .w-form-fail")),
						(U.fileUploads = F.find(".w-file-upload")),
						U.fileUploads.each(function (ce) {
							X(ce, U);
						});
					var Q =
						U.form.attr("aria-label") || U.form.attr("data-name") || "Form";
					U.done.attr("aria-label") || U.form.attr("aria-label", Q),
						U.done.attr("tabindex", "-1"),
						U.done.attr("role", "region"),
						U.done.attr("aria-label") ||
							U.done.attr("aria-label", Q + " success"),
						U.fail.attr("tabindex", "-1"),
						U.fail.attr("role", "region"),
						U.fail.attr("aria-label") ||
							U.fail.attr("aria-label", Q + " failure");
					var ue = (U.action = j.attr("action"));
					if (
						((U.handler = null),
						(U.redirect = j.attr("data-redirect")),
						x.test(ue))
					) {
						U.handler = m;
						return;
					}
					if (!ue) {
						if (c) {
							U.handler = (() => {
								let ce = Sm().default;
								return ce(C, i, Li, ie, M, G, p, k, q, c, L, e, S);
							})();
							return;
						}
						A();
					}
				}
				function N() {
					(g = !0),
						n.on("submit", s + " form", function (ce) {
							var J = e.data(this, s);
							J.handler && ((J.evt = ce), J.handler(J));
						});
					let P = ".w-checkbox-input",
						H = ".w-radio-input",
						j = "w--redirected-checked",
						U = "w--redirected-focus",
						F = "w--redirected-focus-visible",
						Q = ":focus-visible, [data-wf-focus-visible]",
						ue = [
							["checkbox", P],
							["radio", H],
						];
					n.on(
						"change",
						s + ' form input[type="checkbox"]:not(' + P + ")",
						(ce) => {
							e(ce.target).siblings(P).toggleClass(j);
						}
					),
						n.on("change", s + ' form input[type="radio"]', (ce) => {
							e(`input[name="${ce.target.name}"]:not(${P})`).map((Ee, pt) =>
								e(pt).siblings(H).removeClass(j)
							);
							let J = e(ce.target);
							J.hasClass("w-radio-input") || J.siblings(H).addClass(j);
						}),
						ue.forEach(([ce, J]) => {
							n.on(
								"focus",
								s + ` form input[type="${ce}"]:not(` + J + ")",
								(Ee) => {
									e(Ee.target).siblings(J).addClass(U),
										e(Ee.target).filter(Q).siblings(J).addClass(F);
								}
							),
								n.on(
									"blur",
									s + ` form input[type="${ce}"]:not(` + J + ")",
									(Ee) => {
										e(Ee.target).siblings(J).removeClass(`${U} ${F}`);
									}
								);
						});
				}
				function C(P) {
					var H = (P.btn = P.form.find(':input[type="submit"]'));
					(P.wait = P.btn.attr("data-wait") || null),
						(P.success = !1),
						H.prop("disabled", !1),
						P.label && H.val(P.label);
				}
				function q(P) {
					var H = P.btn,
						j = P.wait;
					H.prop("disabled", !0), j && ((P.label = H.val()), H.val(j));
				}
				function G(P, H) {
					var j = null;
					return (
						(H = H || {}),
						P.find(':input:not([type="submit"]):not([type="file"])').each(
							function (U, F) {
								var Q = e(F),
									ue = Q.attr("type"),
									ce =
										Q.attr("data-name") || Q.attr("name") || "Field " + (U + 1),
									J = Q.val();
								if (ue === "checkbox") J = Q.is(":checked");
								else if (ue === "radio") {
									if (H[ce] === null || typeof H[ce] == "string") return;
									J =
										P.find(
											'input[name="' + Q.attr("name") + '"]:checked'
										).val() || null;
								}
								typeof J == "string" && (J = e.trim(J)),
									(H[ce] = J),
									(j = j || ee(Q, ue, ce, J));
							}
						),
						j
					);
				}
				function k(P) {
					var H = {};
					return (
						P.find(':input[type="file"]').each(function (j, U) {
							var F = e(U),
								Q = F.attr("data-name") || F.attr("name") || "File " + (j + 1),
								ue = F.attr("data-value");
							typeof ue == "string" && (ue = e.trim(ue)), (H[Q] = ue);
						}),
						H
					);
				}
				let Y = { _mkto_trk: "marketo" };
				function ie() {
					return document.cookie.split("; ").reduce(function (H, j) {
						let U = j.split("="),
							F = U[0];
						if (F in Y) {
							let Q = Y[F],
								ue = U.slice(1).join("=");
							H[Q] = ue;
						}
						return H;
					}, {});
				}
				function ee(P, H, j, U) {
					var F = null;
					return (
						H === "password"
							? (F = "Passwords cannot be submitted.")
							: P.attr("required")
							? U
								? f.test(P.attr("type")) &&
								  (E.test(U) ||
										(F = "Please enter a valid email address for: " + j))
								: (F = "Please fill out the required field: " + j)
							: j === "g-recaptcha-response" &&
							  !U &&
							  (F = "Please confirm you\u2019re not a robot."),
						F
					);
				}
				function D(P) {
					M(P), L(P);
				}
				function m(P) {
					C(P);
					var H = P.form,
						j = {};
					if (/^https/.test(i.href) && !/^https/.test(P.action)) {
						H.attr("method", "post");
						return;
					}
					M(P);
					var U = G(H, j);
					if (U) return p(U);
					q(P);
					var F;
					t.each(j, function (J, Ee) {
						f.test(Ee) && (j.EMAIL = J),
							/^((full[ _-]?)?name)$/i.test(Ee) && (F = J),
							/^(first[ _-]?name)$/i.test(Ee) && (j.FNAME = J),
							/^(last[ _-]?name)$/i.test(Ee) && (j.LNAME = J);
					}),
						F &&
							!j.FNAME &&
							((F = F.split(" ")),
							(j.FNAME = F[0]),
							(j.LNAME = j.LNAME || F[1]));
					var Q = P.action.replace("/post?", "/post-json?") + "&c=?",
						ue = Q.indexOf("u=") + 2;
					ue = Q.substring(ue, Q.indexOf("&", ue));
					var ce = Q.indexOf("id=") + 3;
					(ce = Q.substring(ce, Q.indexOf("&", ce))),
						(j["b_" + ue + "_" + ce] = ""),
						e
							.ajax({ url: Q, data: j, dataType: "jsonp" })
							.done(function (J) {
								(P.success = J.result === "success" || /already/.test(J.msg)),
									P.success || console.info("MailChimp error: " + J.msg),
									L(P);
							})
							.fail(function () {
								L(P);
							});
				}
				function L(P) {
					var H = P.form,
						j = P.redirect,
						U = P.success;
					if (U && j) {
						Li.location(j);
						return;
					}
					P.done.toggle(U),
						P.fail.toggle(!U),
						U ? P.done.focus() : P.fail.focus(),
						H.toggle(!U),
						C(P);
				}
				function M(P) {
					P.evt && P.evt.preventDefault(), (P.evt = null);
				}
				function X(P, H) {
					if (!H.fileUploads || !H.fileUploads[P]) return;
					var j,
						U = e(H.fileUploads[P]),
						F = U.find("> .w-file-upload-default"),
						Q = U.find("> .w-file-upload-uploading"),
						ue = U.find("> .w-file-upload-success"),
						ce = U.find("> .w-file-upload-error"),
						J = F.find(".w-file-upload-input"),
						Ee = F.find(".w-file-upload-label"),
						pt = Ee.children(),
						de = ce.find(".w-file-upload-error-msg"),
						d = ue.find(".w-file-upload-file"),
						V = ue.find(".w-file-remove-link"),
						K = d.find(".w-file-upload-file-name"),
						B = de.attr("data-w-size-error"),
						_e = de.attr("data-w-type-error"),
						Nt = de.attr("data-w-generic-error");
					if (
						(h ||
							Ee.on("click keydown", function (_) {
								(_.type === "keydown" && _.which !== 13 && _.which !== 32) ||
									(_.preventDefault(), J.click());
							}),
						Ee.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
						V.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
						h)
					)
						J.on("click", function (_) {
							_.preventDefault();
						}),
							Ee.on("click", function (_) {
								_.preventDefault();
							}),
							pt.on("click", function (_) {
								_.preventDefault();
							});
					else {
						V.on("click keydown", function (_) {
							if (_.type === "keydown") {
								if (_.which !== 13 && _.which !== 32) return;
								_.preventDefault();
							}
							J.removeAttr("data-value"),
								J.val(""),
								K.html(""),
								F.toggle(!0),
								ue.toggle(!1),
								Ee.focus();
						}),
							J.on("change", function (_) {
								(j = _.target && _.target.files && _.target.files[0]),
									j &&
										(F.toggle(!1),
										ce.toggle(!1),
										Q.toggle(!0),
										Q.focus(),
										K.text(j.name),
										I() || q(H),
										(H.fileUploads[P].uploading = !0),
										$(j, v));
							});
						var vt = Ee.outerHeight();
						J.height(vt), J.width(1);
					}
					function l(_) {
						var O = _.responseJSON && _.responseJSON.msg,
							z = Nt;
						typeof O == "string" && O.indexOf("InvalidFileTypeError") === 0
							? (z = _e)
							: typeof O == "string" &&
							  O.indexOf("MaxFileSizeError") === 0 &&
							  (z = B),
							de.text(z),
							J.removeAttr("data-value"),
							J.val(""),
							Q.toggle(!1),
							F.toggle(!0),
							ce.toggle(!0),
							ce.focus(),
							(H.fileUploads[P].uploading = !1),
							I() || C(H);
					}
					function v(_, O) {
						if (_) return l(_);
						var z = O.fileName,
							re = O.postData,
							he = O.fileId,
							W = O.s3Url;
						J.attr("data-value", he), te(W, re, j, z, y);
					}
					function y(_) {
						if (_) return l(_);
						Q.toggle(!1),
							ue.css("display", "inline-block"),
							ue.focus(),
							(H.fileUploads[P].uploading = !1),
							I() || C(H);
					}
					function I() {
						var _ = (H.fileUploads && H.fileUploads.toArray()) || [];
						return _.some(function (O) {
							return O.uploading;
						});
					}
				}
				function $(P, H) {
					var j = new URLSearchParams({ name: P.name, size: P.size });
					e.ajax({ type: "GET", url: `${b}?${j}`, crossDomain: !0 })
						.done(function (U) {
							H(null, U);
						})
						.fail(function (U) {
							H(U);
						});
				}
				function te(P, H, j, U, F) {
					var Q = new FormData();
					for (var ue in H) Q.append(ue, H[ue]);
					Q.append("file", j, U),
						e
							.ajax({
								type: "POST",
								url: P,
								data: Q,
								processData: !1,
								contentType: !1,
							})
							.done(function () {
								F(null);
							})
							.fail(function (ce) {
								F(ce);
							});
				}
				return r;
			})
		);
	});
	var Cm = u((tz, Rm) => {
		var Ct = Be(),
			jW = Bi(),
			Pe = {
				ARROW_LEFT: 37,
				ARROW_UP: 38,
				ARROW_RIGHT: 39,
				ARROW_DOWN: 40,
				ESCAPE: 27,
				SPACE: 32,
				ENTER: 13,
				HOME: 36,
				END: 35,
			};
		Ct.define(
			"navbar",
			(Rm.exports = function (e, t) {
				var r = {},
					n = e.tram,
					o = e(window),
					i = e(document),
					a = t.debounce,
					s,
					c,
					f,
					E,
					p = Ct.env(),
					h = '<div class="w-nav-overlay" data-wf-ignore />',
					g = ".w-nav",
					S = "w--open",
					b = "w--nav-dropdown-open",
					x = "w--nav-dropdown-toggle-open",
					A = "w--nav-dropdown-list-open",
					w = "w--nav-link-open",
					T = jW.triggers,
					N = e();
				(r.ready = r.design = r.preview = C),
					(r.destroy = function () {
						(N = e()), q(), c && c.length && c.each(ie);
					});
				function C() {
					(f = p && Ct.env("design")),
						(E = Ct.env("editor")),
						(s = e(document.body)),
						(c = i.find(g)),
						c.length && (c.each(Y), q(), G());
				}
				function q() {
					Ct.resize.off(k);
				}
				function G() {
					Ct.resize.on(k);
				}
				function k() {
					c.each(F);
				}
				function Y(d, V) {
					var K = e(V),
						B = e.data(V, g);
					B ||
						(B = e.data(V, g, {
							open: !1,
							el: K,
							config: {},
							selectedIdx: -1,
						})),
						(B.menu = K.find(".w-nav-menu")),
						(B.links = B.menu.find(".w-nav-link")),
						(B.dropdowns = B.menu.find(".w-dropdown")),
						(B.dropdownToggle = B.menu.find(".w-dropdown-toggle")),
						(B.dropdownList = B.menu.find(".w-dropdown-list")),
						(B.button = K.find(".w-nav-button")),
						(B.container = K.find(".w-container")),
						(B.overlayContainerId = "w-nav-overlay-" + d),
						(B.outside = j(B));
					var _e = K.find(".w-nav-brand");
					_e &&
						_e.attr("href") === "/" &&
						_e.attr("aria-label") == null &&
						_e.attr("aria-label", "home"),
						B.button.attr("style", "-webkit-user-select: text;"),
						B.button.attr("aria-label") == null &&
							B.button.attr("aria-label", "menu"),
						B.button.attr("role", "button"),
						B.button.attr("tabindex", "0"),
						B.button.attr("aria-controls", B.overlayContainerId),
						B.button.attr("aria-haspopup", "menu"),
						B.button.attr("aria-expanded", "false"),
						B.el.off(g),
						B.button.off(g),
						B.menu.off(g),
						m(B),
						f
							? (ee(B), B.el.on("setting" + g, L(B)))
							: (D(B),
							  B.button.on("click" + g, P(B)),
							  B.menu.on("click" + g, "a", H(B)),
							  B.button.on("keydown" + g, M(B)),
							  B.el.on("keydown" + g, X(B))),
						F(d, V);
				}
				function ie(d, V) {
					var K = e.data(V, g);
					K && (ee(K), e.removeData(V, g));
				}
				function ee(d) {
					d.overlay && (de(d, !0), d.overlay.remove(), (d.overlay = null));
				}
				function D(d) {
					d.overlay ||
						((d.overlay = e(h).appendTo(d.el)),
						d.overlay.attr("id", d.overlayContainerId),
						(d.parent = d.menu.parent()),
						de(d, !0));
				}
				function m(d) {
					var V = {},
						K = d.config || {},
						B = (V.animation = d.el.attr("data-animation") || "default");
					(V.animOver = /^over/.test(B)),
						(V.animDirect = /left$/.test(B) ? -1 : 1),
						K.animation !== B && d.open && t.defer(te, d),
						(V.easing = d.el.attr("data-easing") || "ease"),
						(V.easing2 = d.el.attr("data-easing2") || "ease");
					var _e = d.el.attr("data-duration");
					(V.duration = _e != null ? Number(_e) : 400),
						(V.docHeight = d.el.attr("data-doc-height")),
						(d.config = V);
				}
				function L(d) {
					return function (V, K) {
						K = K || {};
						var B = o.width();
						m(d),
							K.open === !0 && Ee(d, !0),
							K.open === !1 && de(d, !0),
							d.open &&
								t.defer(function () {
									B !== o.width() && te(d);
								});
					};
				}
				function M(d) {
					return function (V) {
						switch (V.keyCode) {
							case Pe.SPACE:
							case Pe.ENTER:
								return P(d)(), V.preventDefault(), V.stopPropagation();
							case Pe.ESCAPE:
								return de(d), V.preventDefault(), V.stopPropagation();
							case Pe.ARROW_RIGHT:
							case Pe.ARROW_DOWN:
							case Pe.HOME:
							case Pe.END:
								return d.open
									? (V.keyCode === Pe.END
											? (d.selectedIdx = d.links.length - 1)
											: (d.selectedIdx = 0),
									  $(d),
									  V.preventDefault(),
									  V.stopPropagation())
									: (V.preventDefault(), V.stopPropagation());
						}
					};
				}
				function X(d) {
					return function (V) {
						if (d.open)
							switch (
								((d.selectedIdx = d.links.index(document.activeElement)),
								V.keyCode)
							) {
								case Pe.HOME:
								case Pe.END:
									return (
										V.keyCode === Pe.END
											? (d.selectedIdx = d.links.length - 1)
											: (d.selectedIdx = 0),
										$(d),
										V.preventDefault(),
										V.stopPropagation()
									);
								case Pe.ESCAPE:
									return (
										de(d),
										d.button.focus(),
										V.preventDefault(),
										V.stopPropagation()
									);
								case Pe.ARROW_LEFT:
								case Pe.ARROW_UP:
									return (
										(d.selectedIdx = Math.max(-1, d.selectedIdx - 1)),
										$(d),
										V.preventDefault(),
										V.stopPropagation()
									);
								case Pe.ARROW_RIGHT:
								case Pe.ARROW_DOWN:
									return (
										(d.selectedIdx = Math.min(
											d.links.length - 1,
											d.selectedIdx + 1
										)),
										$(d),
										V.preventDefault(),
										V.stopPropagation()
									);
							}
					};
				}
				function $(d) {
					if (d.links[d.selectedIdx]) {
						var V = d.links[d.selectedIdx];
						V.focus(), H(V);
					}
				}
				function te(d) {
					d.open && (de(d, !0), Ee(d, !0));
				}
				function P(d) {
					return a(function () {
						d.open ? de(d) : Ee(d);
					});
				}
				function H(d) {
					return function (V) {
						var K = e(this),
							B = K.attr("href");
						if (!Ct.validClick(V.currentTarget)) {
							V.preventDefault();
							return;
						}
						B && B.indexOf("#") === 0 && d.open && de(d);
					};
				}
				function j(d) {
					return (
						d.outside && i.off("click" + g, d.outside),
						function (V) {
							var K = e(V.target);
							(E && K.closest(".w-editor-bem-EditorOverlay").length) || U(d, K);
						}
					);
				}
				var U = a(function (d, V) {
					if (d.open) {
						var K = V.closest(".w-nav-menu");
						d.menu.is(K) || de(d);
					}
				});
				function F(d, V) {
					var K = e.data(V, g),
						B = (K.collapsed = K.button.css("display") !== "none");
					if ((K.open && !B && !f && de(K, !0), K.container.length)) {
						var _e = ue(K);
						K.links.each(_e), K.dropdowns.each(_e);
					}
					K.open && pt(K);
				}
				var Q = "max-width";
				function ue(d) {
					var V = d.container.css(Q);
					return (
						V === "none" && (V = ""),
						function (K, B) {
							(B = e(B)), B.css(Q, ""), B.css(Q) === "none" && B.css(Q, V);
						}
					);
				}
				function ce(d, V) {
					V.setAttribute("data-nav-menu-open", "");
				}
				function J(d, V) {
					V.removeAttribute("data-nav-menu-open");
				}
				function Ee(d, V) {
					if (d.open) return;
					(d.open = !0),
						d.menu.each(ce),
						d.links.addClass(w),
						d.dropdowns.addClass(b),
						d.dropdownToggle.addClass(x),
						d.dropdownList.addClass(A),
						d.button.addClass(S);
					var K = d.config,
						B = K.animation;
					(B === "none" || !n.support.transform || K.duration <= 0) && (V = !0);
					var _e = pt(d),
						Nt = d.menu.outerHeight(!0),
						vt = d.menu.outerWidth(!0),
						l = d.el.height(),
						v = d.el[0];
					if (
						(F(0, v),
						T.intro(0, v),
						Ct.redraw.up(),
						f || i.on("click" + g, d.outside),
						V)
					) {
						_();
						return;
					}
					var y = "transform " + K.duration + "ms " + K.easing;
					if (
						(d.overlay &&
							((N = d.menu.prev()), d.overlay.show().append(d.menu)),
						K.animOver)
					) {
						n(d.menu)
							.add(y)
							.set({ x: K.animDirect * vt, height: _e })
							.start({ x: 0 })
							.then(_),
							d.overlay && d.overlay.width(vt);
						return;
					}
					var I = l + Nt;
					n(d.menu).add(y).set({ y: -I }).start({ y: 0 }).then(_);
					function _() {
						d.button.attr("aria-expanded", "true");
					}
				}
				function pt(d) {
					var V = d.config,
						K = V.docHeight ? i.height() : s.height();
					return (
						V.animOver
							? d.menu.height(K)
							: d.el.css("position") !== "fixed" && (K -= d.el.outerHeight(!0)),
						d.overlay && d.overlay.height(K),
						K
					);
				}
				function de(d, V) {
					if (!d.open) return;
					(d.open = !1), d.button.removeClass(S);
					var K = d.config;
					if (
						((K.animation === "none" ||
							!n.support.transform ||
							K.duration <= 0) &&
							(V = !0),
						T.outro(0, d.el[0]),
						i.off("click" + g, d.outside),
						V)
					) {
						n(d.menu).stop(), v();
						return;
					}
					var B = "transform " + K.duration + "ms " + K.easing2,
						_e = d.menu.outerHeight(!0),
						Nt = d.menu.outerWidth(!0),
						vt = d.el.height();
					if (K.animOver) {
						n(d.menu)
							.add(B)
							.start({ x: Nt * K.animDirect })
							.then(v);
						return;
					}
					var l = vt + _e;
					n(d.menu).add(B).start({ y: -l }).then(v);
					function v() {
						d.menu.height(""),
							n(d.menu).set({ x: 0, y: 0 }),
							d.menu.each(J),
							d.links.removeClass(w),
							d.dropdowns.removeClass(b),
							d.dropdownToggle.removeClass(x),
							d.dropdownList.removeClass(A),
							d.overlay &&
								d.overlay.children().length &&
								(N.length ? d.menu.insertAfter(N) : d.menu.prependTo(d.parent),
								d.overlay.attr("style", "").hide()),
							d.el.triggerHandler("w-close"),
							d.button.attr("aria-expanded", "false");
					}
				}
				return r;
			})
		);
	});
	qs();
	Ps();
	Ds();
	Fs();
	Us();
	Bi();
	_m();
	mm();
	Im();
	bm();
	wm();
	Cm();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require("ix2").init({
	events: {
		e: {
			id: "e",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_OVER",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-2",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "63d7999e3e2c0669e7d88673|b1a18cd7-85ac-c941-3b05-a8b523cd50dc",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "63d7999e3e2c0669e7d88673|b1a18cd7-85ac-c941-3b05-a8b523cd50dc",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1675249306249,
		},
		"e-2": {
			id: "e-2",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_OUT",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-2",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "63d7999e3e2c0669e7d88673|b1a18cd7-85ac-c941-3b05-a8b523cd50dc",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "63d7999e3e2c0669e7d88673|b1a18cd7-85ac-c941-3b05-a8b523cd50dc",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1675249306249,
		},
		"e-3": {
			id: "e-3",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_OVER",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-4",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "63d7999e3e2c0669e7d88673|b1a18cd7-85ac-c941-3b05-a8b523cd50ea",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "63d7999e3e2c0669e7d88673|b1a18cd7-85ac-c941-3b05-a8b523cd50ea",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1675249504250,
		},
		"e-4": {
			id: "e-4",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_OUT",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-2",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-3",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "63d7999e3e2c0669e7d88673|b1a18cd7-85ac-c941-3b05-a8b523cd50ea",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "63d7999e3e2c0669e7d88673|b1a18cd7-85ac-c941-3b05-a8b523cd50ea",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1675249504250,
		},
		"e-5": {
			id: "e-5",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_OVER",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-6",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "63d7999e3e2c0669e7d88673|0684bb44-b0bf-6f32-4734-8afc1387bad7",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "63d7999e3e2c0669e7d88673|0684bb44-b0bf-6f32-4734-8afc1387bad7",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1675249517577,
		},
		"e-6": {
			id: "e-6",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_OUT",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-2",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-5",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "63d7999e3e2c0669e7d88673|0684bb44-b0bf-6f32-4734-8afc1387bad7",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "63d7999e3e2c0669e7d88673|0684bb44-b0bf-6f32-4734-8afc1387bad7",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1675249517577,
		},
		"e-7": {
			id: "e-7",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_OVER",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-8",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "63d7999e3e2c0669e7d88673|0684bb44-b0bf-6f32-4734-8afc1387bae5",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "63d7999e3e2c0669e7d88673|0684bb44-b0bf-6f32-4734-8afc1387bae5",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1675249527025,
		},
		"e-8": {
			id: "e-8",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_OUT",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-2",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-7",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "63d7999e3e2c0669e7d88673|0684bb44-b0bf-6f32-4734-8afc1387bae5",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "63d7999e3e2c0669e7d88673|0684bb44-b0bf-6f32-4734-8afc1387bae5",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1675249527025,
		},
		"e-9": {
			id: "e-9",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_OVER",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-10",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "63d7999e3e2c06a3e5d8867a|4ce384bb-f1ca-299d-8c10-5257e227943a",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "63d7999e3e2c06a3e5d8867a|4ce384bb-f1ca-299d-8c10-5257e227943a",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1675764007522,
		},
		"e-10": {
			id: "e-10",
			name: "",
			animationType: "preset",
			eventTypeId: "MOUSE_OUT",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-2",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-9",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "63d7999e3e2c06a3e5d8867a|4ce384bb-f1ca-299d-8c10-5257e227943a",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "63d7999e3e2c06a3e5d8867a|4ce384bb-f1ca-299d-8c10-5257e227943a",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1675764007522,
		},
		"e-11": {
			id: "e-11",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_OVER",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-3",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-12",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "63d7999e3e2c066c75d8867b|1e2ac7fa-c01e-9dc3-a60a-c0ce98957c8b",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "63d7999e3e2c066c75d8867b|1e2ac7fa-c01e-9dc3-a60a-c0ce98957c8b",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1675764267683,
		},
		"e-12": {
			id: "e-12",
			name: "",
			animationType: "custom",
			eventTypeId: "MOUSE_OUT",
			action: {
				id: "",
				actionTypeId: "GENERAL_START_ACTION",
				config: {
					delay: 0,
					easing: "",
					duration: 0,
					actionListId: "a-4",
					affectedElements: {},
					playInReverse: false,
					autoStopEventId: "e-11",
				},
			},
			mediaQueries: ["main", "medium", "small", "tiny"],
			target: {
				id: "63d7999e3e2c066c75d8867b|1e2ac7fa-c01e-9dc3-a60a-c0ce98957c8b",
				appliesTo: "ELEMENT",
				styleBlockIds: [],
			},
			targets: [
				{
					id: "63d7999e3e2c066c75d8867b|1e2ac7fa-c01e-9dc3-a60a-c0ce98957c8b",
					appliesTo: "ELEMENT",
					styleBlockIds: [],
				},
			],
			config: {
				loop: false,
				playInReverse: false,
				scrollOffsetValue: null,
				scrollOffsetUnit: null,
				delay: null,
				direction: null,
				effectIn: null,
			},
			createdOn: 1675764267683,
		},
	},
	actionLists: {
		a: {
			id: "a",
			title: "arrow move",
			actionItemGroups: [
				{
					actionItems: [
						{
							id: "a-n",
							actionTypeId: "TRANSFORM_MOVE",
							config: {
								delay: 0,
								easing: [0.25, 0.25, 0.75, 0.75],
								duration: 500,
								target: {
									useEventTarget: "CHILDREN",
									selector: ".image",
									selectorGuids: ["4b611faf-2064-72c5-9042-454bd7823dfa"],
								},
								xValue: 0,
								xUnit: "px",
								yUnit: "PX",
								zUnit: "PX",
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: "a-n-2",
							actionTypeId: "TRANSFORM_MOVE",
							config: {
								delay: 0,
								easing: "",
								duration: 500,
								target: {
									useEventTarget: "CHILDREN",
									selector: ".image",
									selectorGuids: ["4b611faf-2064-72c5-9042-454bd7823dfa"],
								},
								xValue: 8,
								xUnit: "px",
								yUnit: "PX",
								zUnit: "PX",
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: true,
			createdOn: 1675245680225,
		},
		"a-2": {
			id: "a-2",
			title: "arrow back",
			actionItemGroups: [
				{
					actionItems: [
						{
							id: "a-2-n",
							actionTypeId: "TRANSFORM_MOVE",
							config: {
								delay: 0,
								easing: "",
								duration: 500,
								target: {
									useEventTarget: "CHILDREN",
									selector: ".image",
									selectorGuids: ["4b611faf-2064-72c5-9042-454bd7823dfa"],
								},
								xValue: 8,
								xUnit: "px",
								yUnit: "PX",
								zUnit: "PX",
							},
						},
						{
							id: "a-2-n-2",
							actionTypeId: "TRANSFORM_MOVE",
							config: {
								delay: 0,
								easing: "",
								duration: 500,
								target: {
									useEventTarget: "CHILDREN",
									selector: ".image",
									selectorGuids: ["4b611faf-2064-72c5-9042-454bd7823dfa"],
								},
								xValue: 0,
								xUnit: "px",
								yUnit: "PX",
								zUnit: "PX",
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: false,
			createdOn: 1675245680225,
		},
		"a-3": {
			id: "a-3",
			title: "back arrow",
			actionItemGroups: [
				{
					actionItems: [
						{
							id: "a-3-n",
							actionTypeId: "TRANSFORM_MOVE",
							config: {
								delay: 0,
								easing: "",
								duration: 500,
								target: {
									id: "63d7999e3e2c066c75d8867b|1e2ac7fa-c01e-9dc3-a60a-c0ce98957c8c",
								},
								xUnit: "PX",
								yUnit: "PX",
								zUnit: "PX",
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: "a-3-n-2",
							actionTypeId: "TRANSFORM_MOVE",
							config: {
								delay: 0,
								easing: "",
								duration: 500,
								target: {
									id: "63d7999e3e2c066c75d8867b|1e2ac7fa-c01e-9dc3-a60a-c0ce98957c8c",
								},
								xValue: -8,
								xUnit: "px",
								yUnit: "PX",
								zUnit: "PX",
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: false,
			createdOn: 1675764279430,
		},
		"a-4": {
			id: "a-4",
			title: "back arrow back",
			actionItemGroups: [
				{
					actionItems: [
						{
							id: "a-4-n",
							actionTypeId: "TRANSFORM_MOVE",
							config: {
								delay: 0,
								easing: "",
								duration: 500,
								target: {
									id: "63d7999e3e2c066c75d8867b|1e2ac7fa-c01e-9dc3-a60a-c0ce98957c8c",
								},
								xValue: 0,
								xUnit: "px",
								yUnit: "PX",
								zUnit: "PX",
							},
						},
					],
				},
				{
					actionItems: [
						{
							id: "a-4-n-2",
							actionTypeId: "TRANSFORM_MOVE",
							config: {
								delay: 0,
								easing: "",
								duration: 500,
								target: {
									id: "63d7999e3e2c066c75d8867b|1e2ac7fa-c01e-9dc3-a60a-c0ce98957c8c",
								},
								xValue: 0,
								xUnit: "px",
								yUnit: "PX",
								zUnit: "PX",
							},
						},
					],
				},
			],
			useFirstGroupAsInitialState: false,
			createdOn: 1675764422232,
		},
	},
	site: {
		mediaQueries: [
			{ key: "main", min: 992, max: 10000 },
			{ key: "medium", min: 768, max: 991 },
			{ key: "small", min: 480, max: 767 },
			{ key: "tiny", min: 0, max: 479 },
		],
	},
});
