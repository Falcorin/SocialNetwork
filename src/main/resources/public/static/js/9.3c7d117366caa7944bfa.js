webpackJsonp([9], {
    cxj3: function (e, t, s) {
        "use strict";
        Object.defineProperty(t, "__esModule", {value: !0});
        var i = s("Dd8w"), a = s.n(i), r = s("NYxO"), n = s("+cKO"), l = s("TYx6"), c = s("i53X"), o = s("/QaM"),
            m = s("znC5"), d = s("a2KH"), u = {
                name: "ConfirmField",
                props: {
                    value: {type: Boolean, default: ""},
                    v: {type: Object, required: !0},
                    id: {type: String, required: !0}
                },
                computed: {
                    confirm: {
                        get: function () {
                            return this.value
                        }, set: function (e) {
                            this.$emit("input", e)
                        }
                    }
                }
            }, f = {
                render: function () {
                    var e = this, t = e.$createElement, s = e._self._c || t;
                    return s("div", {staticClass: "form__group"}, [s("input", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.confirm,
                            expression: "confirm"
                        }],
                        staticClass: "form__checkbox",
                        class: {invalid: e.v.$dirty && !e.v.sameAs},
                        attrs: {type: "checkbox", name: "confirm", id: e.id},
                        domProps: {checked: Array.isArray(e.confirm) ? e._i(e.confirm, null) > -1 : e.confirm},
                        on: {
                            change: function (t) {
                                var s = e.confirm, i = t.target, a = !!i.checked;
                                if (Array.isArray(s)) {
                                    var r = e._i(s, null);
                                    i.checked ? r < 0 && (e.confirm = s.concat([null])) : r > -1 && (e.confirm = s.slice(0, r).concat(s.slice(r + 1)))
                                } else e.confirm = a
                            }
                        }
                    }), s("label", {
                        staticClass: "form__checkbox-label",
                        attrs: {for: e.id}
                    }, [e._v("Я согласен с "), s("a", {attrs: {href: "#"}}, [e._v("полит. конф-ти ")]), e._v("и передачей "), s("a", {attrs: {href: "#"}}, [e._v("перс. данных")])])])
                }, staticRenderFns: []
            }, v = s("VU/8")(u, f, !1, null, null, null).exports, p = s("IcnI"), _ = {
                name: "Registration",
                components: {
                    PasswordField: l.a,
                    EmailField: o.a,
                    NameField: m.a,
                    NumberField: d.a,
                    ConfirmField: v,
                    PasswordRepeatField: c.a
                },
                data: function () {
                    return {
                        email: "",
                        passwd1: "",
                        passwd2: "",
                        firstName: "",
                        lastName: "",
                        code: 0,
                        number: "",
                        confirm: !1
                    }
                },
                computed: a()({}, Object(r.c)(["getCode"])),
                methods: a()({}, Object(r.b)("auth/api", ["register"]), {
                    submitHandler: function () {
                        var e = this;
                        if (this.$v.$invalid) this.$v.$touch(); else {
                            var t = this.email, s = this.passwd1, i = this.passwd2, a = this.firstName, r = this.lastName;
                            this.register({
                                email: t,
                                passwd1: s,
                                passwd2: i,
                                firstName: a,
                                lastName: r,
                                code: this.number
                            }).then(function () {
                                e.$router.push({name: "RegisterSuccess"})
                            })
                        }
                    }
                }),
                mounted: function () {
                    this.code = this.getCode
                },
                validations: {
                    confirm: {
                        sameAs: Object(n.sameAs)(function () {
                            return !0
                        })
                    },
                    email: {required: n.required, email: n.email},
                    passwd1: {required: n.required, minLength: Object(n.minLength)(8)},
                    passwd2: {
                        required: n.required,
                        minLength: Object(n.minLength)(8),
                        sameAsPassword: Object(n.sameAs)("passwd1")
                    },
                    firstName: {required: n.required, minLength: Object(n.minLength)(2)},
                    lastName: {required: n.required, minLength: Object(n.minLength)(2)},
                    number: {
                        required: n.required, numeric: n.numeric, isCode: function (e) {
                            return +e === p.a.state.code
                        }
                    }
                }
            }, h = {
                render: function () {
                    var e = this, t = e.$createElement, s = e._self._c || t;
                    return s("div", {staticClass: "registration"}, [s("form", {
                        staticClass: "registration__form",
                        on: {
                            submit: function (t) {
                                return t.preventDefault(), e.submitHandler(t)
                            }
                        }
                    }, [s("div", {staticClass: "form__block"}, [s("h4", {staticClass: "form__subtitle"}, [e._v("Аккаунт")]), s("email-field", {
                        class: {checked: e.$v.email.required && e.$v.email.email},
                        attrs: {id: "register-email", v: e.$v.email},
                        model: {
                            value: e.email, callback: function (t) {
                                e.email = t
                            }, expression: "email"
                        }
                    }), s("password-field", {
                        class: {checked: e.$v.passwd1.required && e.$v.passwd2.sameAsPassword && e.$v.passwd1.minLength},
                        attrs: {id: "register-password", v: e.$v.passwd1, info: "info", registration: "registration"},
                        model: {
                            value: e.passwd1, callback: function (t) {
                                e.passwd1 = t
                            }, expression: "passwd1"
                        }
                    }), s("password-repeat-field", {
                        class: {checked: e.$v.passwd1.required && e.$v.passwd2.sameAsPassword && e.$v.passwd2.minLength},
                        attrs: {id: "register-repeat-password", v: e.$v.passwd2},
                        model: {
                            value: e.passwd2, callback: function (t) {
                                e.passwd2 = t
                            }, expression: "passwd2"
                        }
                    })], 1), s("div", {staticClass: "form__block"}, [s("h4", {staticClass: "form__subtitle"}, [e._v("Личные данные")]), s("name-field", {
                        attrs: {
                            id: "register-firstName",
                            v: e.$v.firstName
                        }, model: {
                            value: e.firstName, callback: function (t) {
                                e.firstName = t
                            }, expression: "firstName"
                        }
                    }), s("name-field", {
                        attrs: {id: "register-lastName", v: e.$v.lastName, label: "Фамилия"},
                        model: {
                            value: e.lastName, callback: function (t) {
                                e.lastName = t
                            }, expression: "lastName"
                        }
                    })], 1), s("div", {staticClass: "form__block"}, [s("h4", {staticClass: "form__subtitle"}, [e._v("Введите код")]), s("span", {staticClass: "form__code"}, [e._v(e._s(e.code))]), s("number-field", {
                        class: {checked: e.$v.number.required && e.$v.number.isCode},
                        attrs: {id: "register-number", v: e.$v.number},
                        model: {
                            value: e.number, callback: function (t) {
                                e.number = t
                            }, expression: "number"
                        }
                    }), s("confirm-field", {
                        attrs: {id: "register-confirm", v: e.$v.confirm},
                        model: {
                            value: e.confirm, callback: function (t) {
                                e.confirm = t
                            }, expression: "confirm"
                        }
                    })], 1), s("div", {staticClass: "registration__action"}, [s("button-hover", {
                        attrs: {
                            tag: "button",
                            type: "submit",
                            variant: "white"
                        }
                    }, [e._v("Зарегистрироваться")])], 1)])])
                }, staticRenderFns: []
            };
        var b = s("VU/8")(_, h, !1, function (e) {
            s("kGlI")
        }, null, null);
        t.default = b.exports
    }, kGlI: function (e, t) {
    }, znC5: function (e, t, s) {
        "use strict";
        var i = {
            name: "EmailField",
            props: {
                value: {type: String, default: ""},
                v: {type: Object, required: !0},
                label: {type: String, default: "Имя"},
                id: {type: String, required: !0}
            },
            computed: {
                name: {
                    get: function () {
                        return this.value
                    }, set: function (e) {
                        this.$emit("input", e)
                    }
                }
            }
        }, a = {
            render: function () {
                var e = this, t = e.$createElement, s = e._self._c || t;
                return s("div", {
                    staticClass: "form__group",
                    class: {fill: e.name.length > 0}
                }, [s("input", {
                    directives: [{name: "model", rawName: "v-model", value: e.name, expression: "name"}],
                    staticClass: "form__input",
                    class: {invalid: e.v.$dirty && !e.v.required || e.v.$dirty && !e.v.minLength},
                    attrs: {id: e.id, name: "name"},
                    domProps: {value: e.name},
                    on: {
                        change: function (t) {
                            return e.v.$touch()
                        }, input: function (t) {
                            t.target.composing || (e.name = t.target.value)
                        }
                    }
                }), s("label", {
                    staticClass: "form__label",
                    attrs: {for: e.id}
                }, [e._v(e._s(e.label))]), e.v.$dirty && !e.v.required ? s("span", {staticClass: "form__error"}, [e._v("Обязательно поле")]) : e.v.$dirty && !e.v.minLength ? s("span", {staticClass: "form__error"}, [e._v("Минимальное количество символов " + e._s(e.v.$params.minLength.min))]) : e._e()])
            }, staticRenderFns: []
        }, r = s("VU/8")(i, a, !1, null, null, null);
        t.a = r.exports
    }
});
//# sourceMappingURL=9.3c7d117366caa7944bfa.js.map