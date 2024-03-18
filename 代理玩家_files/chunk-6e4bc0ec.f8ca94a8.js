(window.webpackJsonp = window.webpackJsonp || []).push([["chunk-6e4bc0ec"], {
    "031c": function(t, e, s) {},
    "1cfd": function(t, e, s) {
        "use strict";
        s("5ec2")
    },
    "22b7": function(t, e, s) {
        "use strict";
        var a = (s("d3b7"),
        {
            name: "thirdAmount",
            props: {
                value: {
                    type: Object,
                    default: null
                }
            },
            data: function() {
                return {
                    show: !1,
                    data: {},
                    dataList: [],
                    loading: !1
                }
            },
            computed: {
                title: function() {
                    return this.value ? this.$t("proxy.thirdAmountTips", {
                        user: this.value.loginName || this.value.userName
                    }) : ""
                }
            },
            methods: {
                refresh: function() {
                    this.getData()
                },
                getData: function() {
                    var t = this;
                    this.loading || (this.loading = !0,
                    this.$get("/user/tob/getUserFund", {
                        userId: this.value.id
                    }).then((function(e) {
                        t.data = e
                    }
                    )).catch((function(e) {
                        t.$Message.error(e.message)
                    }
                    )).finally((function() {
                        t.loading = !1
                    }
                    )))
                }
            },
            watch: {
                value: function() {
                    this.value ? (this.data = {},
                    this.getData(),
                    this.show = !0) : this.show = !1
                },
                show: function() {
                    this.show || this.$emit("input", null)
                }
            }
        })
          , n = a
          , o = (s("1cfd"),
        s("2877"))
          , i = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("Modal", {
                attrs: {
                    title: t.title
                },
                model: {
                    value: t.show,
                    callback: function(e) {
                        t.show = e
                    },
                    expression: "show"
                }
            }, [s("table", {
                staticClass: "cmtable"
            }, [s("tr", [s("td", [t._v(t._s(t.$t("proxy.totalAmount")))]), s("td", [t._v(t._s(t._f("tofix")((t.data.totalAmount || 0) / 100, 2)))])]), s("tr", [s("td", [t._v(t._s(t.$t("proxy.incrAmount")))]), s("td", [t._v(t._s(t._f("tofix")((t.data.incrAmount || 0) / 100, 2)))])]), s("tr", [s("td", [t._v(t._s(t.$t("proxy.freezeAmount")))]), s("td", [t._v(t._s(t._f("tofix")((t.data.freezeAmount || 0) / 100, 2)))])]), t.data.thirdFund ? t._l(t.data.thirdFund, (function(e) {
                return s("tr", {
                    key: e.videoName
                }, [s("td", [t._v(t._s(e.platformName))]), s("td", [t._v(t._s(t._f("tofix")((e.balance || 0) / 100)))])])
            }
            )) : t._e()], 2), s("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("Button", {
                attrs: {
                    type: "primary",
                    loading: t.loading
                },
                on: {
                    click: t.refresh
                }
            }, [t._v(t._s(t.$t("proxy.Refresh")))]), s("Button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(e) {
                        t.show = !1
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Close")))])], 1)])
        }
        ), [], !1, null, null, null);
        e.a = i.exports
    },
    "2c2c": function(t, e, s) {},
    "3aac": function(t, e, s) {},
    "51b4": function(t, e, s) {
        "use strict";
        s("3aac")
    },
    5465: function(t, e, s) {
        "use strict";
        s("6f76")
    },
    "5ec2": function(t, e, s) {},
    "6f76": function(t, e, s) {},
    "76e1": function(t, e, s) {
        "use strict";
        s("2c2c")
    },
    "8d37": function(t, e, s) {
        "use strict";
        var a = s("5530")
          , n = (s("d3b7"),
        s("99af"),
        {
            name: "thirdAmount",
            props: {
                value: {
                    type: Object,
                    default: null
                },
                hidebottom: {
                    type: Boolean,
                    default: !0
                },
                isTest: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    show: !1,
                    dataList: [],
                    loading: !1,
                    isUse: !1,
                    waitTime: 0,
                    waitTimeSt: null,
                    clearing: !1,
                    receiveStatus: 0
                }
            },
            computed: {
                title: function() {
                    return this.value ? this.$t("proxy.operationsTips", {
                        user: this.value.loginName || this.value.userName
                    }) : ""
                }
            },
            methods: {
                clearUserLoginWaitTime: function(t) {
                    var e = this;
                    if (t) {
                        if (this.clearing)
                            return;
                        this.clearing = !0,
                        this.$post("user/frontSetting/clearUserLoginWaitTime", {
                            userName: t
                        }).then((function() {
                            e.waitTime = 0
                        }
                        )).catch((function(t) {
                            e.$Message.error(t.message)
                        }
                        )).finally((function() {
                            e.clearing = !1
                        }
                        ))
                    }
                },
                getUserLoginWaitTime: function(t) {
                    var e = this;
                    t && this.$get("/user/frontSetting/getUserLoginWaitTime", {
                        userName: t
                    }).then((function(t) {
                        e.value && t > 0 && (e.waitTime = t,
                        e.countDown())
                    }
                    ))
                },
                countDown: function() {
                    var t = this;
                    clearTimeout(this.waitTimeSt),
                    this.waitTimeSt = setTimeout((function() {
                        t.waitTime > 0 && (t.waitTime--,
                        t.countDown())
                    }
                    ), 1e3)
                },
                update: function(t, e, s) {
                    var n, o = this, i = this;
                    n = {
                        render: function(t) {
                            return [t("Checkbox", {
                                props: {
                                    value: o.isUse
                                },
                                on: {
                                    input: function(t) {
                                        o.isUse = t
                                    }
                                }
                            }), t("span", {}, i.$t("proxy.pleaseTips1", {
                                type: s,
                                user: o.value.loginName || o.value.userName
                            }))]
                        }
                    },
                    this.$Modal.confirm(Object(a.a)(Object(a.a)({
                        title: this.$t("Tips"),
                        content: "".concat(this.$t("proxy.Areyousure")).concat(s),
                        width: "500"
                    }, n), {}, {
                        onOk: function() {
                            var n = {};
                            o.isUse && (n.type = 1),
                            o.loading = !0,
                            o.$post("/user/tob/changeStatus", Object(a.a)({
                                id: o.value.id,
                                task: t,
                                status: e,
                                type: 0
                            }, n)).then((function() {
                                s && (o.value.status = s,
                                o.$Message.success(o.$t("changeSuccess")),
                                o.$emit("upfresh"))
                            }
                            )).catch((function(t) {
                                o.$Message.error(t.message)
                            }
                            )).finally((function() {
                                o.isUse = !1,
                                o.loading = !1
                            }
                            ))
                        }
                    }))
                },
                changeActive: function(t) {
                    var e = this;
                    this.$Modal.confirm({
                        title: this.$t("Tips"),
                        content: "".concat(this.$t("proxy.Areyousure")).concat(t ? this.$t("proxy.Enable") : this.$t("proxy.Disable1")),
                        onOk: function() {
                            e.loading = !0,
                            e.$post("/user/lotUser/changeActivityStatus", {
                                userId: e.value.id,
                                status: t,
                                userName: e.value.loginName || e.value.userName
                            }).then((function() {
                                e.$Message.success(e.$t("changeSuccess")),
                                e.value.activityStatus = t
                            }
                            )).catch((function(t) {
                                e.$Message.error(t.message)
                            }
                            )).finally((function() {
                                e.loading = !1
                            }
                            ))
                        }
                    })
                },
                changeInviteActive: function(t) {
                    var e = this;
                    this.$Modal.confirm({
                        title: this.$t("Tips"),
                        content: "".concat(this.$t("proxy.Areyousure")).concat(t ? this.$t("proxy.Enable") : this.$t("proxy.Disable1")),
                        onOk: function() {
                            e.loading = !0,
                            e.$post("/user/lotUser/changeInviteReceiveStatus", {
                                userId: e.value.id,
                                status: +t
                            }).then((function() {
                                e.$Message.success(e.$t("changeSuccess")),
                                e.receiveStatus = t
                            }
                            )).catch((function(t) {
                                e.$Message.error(t.message)
                            }
                            )).finally((function() {
                                e.loading = !1
                            }
                            ))
                        }
                    })
                },
                changeRebate: function(t, e, s) {
                    var n, o = this, i = this;
                    n = {
                        render: function(t) {
                            return [t("Checkbox", {
                                props: {
                                    value: o.isUse
                                },
                                on: {
                                    input: function(t) {
                                        o.isUse = t
                                    }
                                }
                            }), t("span", {}, i.$t("proxy.pleaseTips1", {
                                type: s,
                                user: o.value.loginName || o.value.userName
                            }))]
                        }
                    },
                    this.$Modal.confirm(Object(a.a)(Object(a.a)({
                        title: this.$t("Tips"),
                        content: "".concat(this.$t("proxy.Areyousure")).concat(t ? this.$t("proxy.Disable1") : this.$t("proxy.Enable"))
                    }, n), {}, {
                        onOk: function() {
                            o.loading = !0;
                            var e = {
                                userId: o.value.id,
                                status: t
                            };
                            o.isUse ? e.type = 1 : e.type = 0,
                            o.$post("/user/tob/updateUserCommissionStatus", e).then((function() {
                                o.$Message.success(o.$t("changeSuccess")),
                                o.value.commissionStatus = t,
                                o.$emit("upfresh")
                            }
                            )).catch((function(t) {
                                o.$Message.error(t.message)
                            }
                            )).finally((function() {
                                o.loading = !1
                            }
                            ))
                        }
                    }))
                },
                changeWithdrawStatus: function(t, e, s) {
                    var n, o = this, i = this;
                    n = {
                        render: function(t) {
                            return [t("Checkbox", {
                                props: {
                                    value: o.isUse
                                },
                                on: {
                                    input: function(t) {
                                        o.isUse = t
                                    }
                                }
                            }), t("span", {}, i.$t("proxy.pleaseTips1", {
                                type: s,
                                user: o.value.loginName || o.value.userName
                            }))]
                        }
                    },
                    this.$Modal.confirm(Object(a.a)(Object(a.a)({
                        title: this.$t("Tips"),
                        content: "".concat(this.$t("proxy.Areyousure")).concat(t ? this.$t("proxy.Disable2") : this.$t("proxy.Enable2"))
                    }, n), {}, {
                        onOk: function() {
                            o.loading = !0;
                            var e = {
                                userId: o.value.id,
                                status: t
                            };
                            o.isUse ? e.type = 1 : e.type = 0,
                            o.$post("/user/tob/updateUserWithdrawStatus", e).then((function() {
                                o.$Message.success(o.$t("changeSuccess")),
                                o.value.withdrawStatus = t,
                                o.$emit("upfresh")
                            }
                            )).catch((function(t) {
                                o.$Message.error(t.message)
                            }
                            )).finally((function() {
                                o.loading = !1
                            }
                            ))
                        }
                    }))
                },
                changeIsAgentReport: function(t) {
                    var e = this;
                    this.$Modal.confirm({
                        title: this.$t("Tips"),
                        content: "".concat(this.$t("proxy.Areyousure")).concat(t ? this.$t("proxy.Disable3") : this.$t("proxy.Enable3")),
                        onOk: function() {
                            e.loading = !0;
                            var s = {
                                userId: e.value.id,
                                status: t
                            };
                            e.$post("/user/tob/changeIsAgentReport", s).then((function() {
                                e.$Message.success(e.$t("changeSuccess")),
                                e.value.isAgentReport = t,
                                e.$emit("upfresh")
                            }
                            )).catch((function(t) {
                                e.$Message.error(t.message)
                            }
                            )).finally((function() {
                                e.loading = !1
                            }
                            ))
                        }
                    })
                }
            },
            beforeDestroy: function() {
                clearTimeout(this.waitTimeSt)
            },
            watch: {
                value: function() {
                    clearTimeout(this.waitTimeSt),
                    this.value ? (this.waitTime = 0,
                    this.show = !0,
                    this.getUserLoginWaitTime(this.value.loginName)) : this.show = !1
                },
                show: function() {
                    this.show || this.$emit("input", null)
                }
            }
        })
          , o = n
          , i = (s("76e1"),
        s("2877"))
          , r = Object(i.a)(o, (function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("Modal", {
                attrs: {
                    title: t.title,
                    width: "800"
                },
                model: {
                    value: t.show,
                    callback: function(e) {
                        t.show = e
                    },
                    expression: "show"
                }
            }, [s("div", {
                staticStyle: {
                    position: "relative"
                }
            }, [t.loading ? s("Spin", {
                attrs: {
                    fix: ""
                }
            }) : t._e(), s("table", {
                staticClass: "cmtable"
            }, [s("tr", [s("td", [s("ButtonGroup", [s("Button", {
                attrs: {
                    disabled: (t.value || {}).status != t.$t("proxy.Deactivate")
                },
                on: {
                    click: function(e) {
                        t.update(0, 0, t.$t("proxy.Using"))
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Using")))]), s("Button", {
                attrs: {
                    disabled: (t.value || {}).status == t.$t("proxy.Deactivate")
                },
                on: {
                    click: function(e) {
                        t.update(0, 1, t.$t("proxy.Deactivate"))
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Deactivate")))])], 1)], 1), s("td", [t._v(t._s(t.$t("proxy.loginEnableTips")))])]), s("tr", [s("td", [s("ButtonGroup", [s("Button", {
                attrs: {
                    disabled: (t.value || {}).status != t.$t("proxy.Deactivateorder") && (t.value || {}).status != t.$t("proxy.Suspendorder")
                },
                on: {
                    click: function(e) {
                        t.update(1, 0, t.$t("proxy.Using"))
                    }
                }
            }, [t._v(t._s(t.$t("proxy.allowOrder")))]), s("Button", {
                attrs: {
                    disabled: (t.value || {}).status == t.$t("proxy.Deactivateorder") || (t.value || {}).status == t.$t("proxy.Suspendorder")
                },
                on: {
                    click: function(e) {
                        t.update(1, 1, t.$t("proxy.Suspendorder"))
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Suspendorder")))])], 1)], 1), s("td", [t._v(t._s(t.$t("proxy.orderTips")))])]), s("tr", [s("td", [s("ButtonGroup", [s("Button", {
                attrs: {
                    disabled: (t.value || {}).status != t.$t("proxy.freeze")
                },
                on: {
                    click: function(e) {
                        t.update(2, 0, t.$t("proxy.Using"))
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Thaw")))]), s("Button", {
                attrs: {
                    disabled: (t.value || {}).status == t.$t("proxy.freeze")
                },
                on: {
                    click: function(e) {
                        t.update(2, 1, t.$t("proxy.freeze"))
                    }
                }
            }, [t._v(t._s(t.$t("proxy.freeze")))])], 1)], 1), s("td", [t._v(t._s(t.$t("proxy.ThawTips")))])]), s("tr", [s("td", [s("ButtonGroup", [s("Button", {
                attrs: {
                    disabled: (t.value || {}).status != t.$t("proxy.Blacklist")
                },
                on: {
                    click: function(e) {
                        t.update(3, 0, t.$t("proxy.Using"))
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Whitelist")))]), s("Button", {
                attrs: {
                    disabled: (t.value || {}).status == t.$t("proxy.Blacklist")
                },
                on: {
                    click: function(e) {
                        t.update(3, 1, t.$t("proxy.Blacklist"))
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Blacklist")))])], 1)], 1), s("td", [t._v(t._s(t.$t("proxy.BlacklistTips")))])]), t.isTest ? t._e() : s("tr", [s("td", [s("ButtonGroup", [s("Button", {
                attrs: {
                    disabled: 0 == +(t.value || {}).commissionStatus
                },
                on: {
                    click: function(e) {
                        t.changeRebate(0, 0, t.$t("proxy.Enable"))
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Enable")))]), s("Button", {
                attrs: {
                    disabled: 1 == +(t.value || {}).commissionStatus
                },
                on: {
                    click: function(e) {
                        t.changeRebate(1, 1, t.$t("proxy.Disable1"))
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Disable1")))])], 1)], 1), s("td", [t._v(t._s(t.$t("proxy.commissionTips")))])]), t.waitTime > 0 ? s("tr", [s("td", [s("Button", {
                attrs: {
                    loading: t.clearing
                },
                on: {
                    click: function(e) {
                        return t.clearUserLoginWaitTime(t.value.loginName)
                    }
                }
            }, [t._v(t._s(t.$t("proxy.timeCountTo")))])], 1), s("td", [t._v(" " + t._s(t.$t("proxy.timeCount")) + " "), s("span", [t._v(t._s(t.waitTime))])])]) : t._e(), s("tr", [s("td", [s("ButtonGroup", [s("Button", {
                attrs: {
                    disabled: 0 === (t.value || {}).withdrawStatus
                },
                on: {
                    click: function(e) {
                        t.changeWithdrawStatus(0, 0, t.$t("proxy.Enable"))
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Enable2")))]), s("Button", {
                attrs: {
                    disabled: 1 === (t.value || {}).withdrawStatus
                },
                on: {
                    click: function(e) {
                        t.changeWithdrawStatus(1, 1, t.$t("proxy.Disable1"))
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Disable2")))])], 1)], 1), s("td", [t._v(t._s(t.$t("proxy.commissionTips2")))])]), s("tr", [s("td", [s("ButtonGroup", [s("Button", {
                attrs: {
                    disabled: 0 === (t.value || {}).isAgentReport
                },
                on: {
                    click: function(e) {
                        t.changeIsAgentReport(0, 0, t.$t("proxy.Enable"))
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Enable")))]), s("Button", {
                attrs: {
                    disabled: 1 === (t.value || {}).isAgentReport
                },
                on: {
                    click: function(e) {
                        t.changeIsAgentReport(1, 1, t.$t("proxy.Disable1"))
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Disable1")))])], 1)], 1), s("td", [t._v(t._s(t.$t("proxy.commissionTips3")))])])])], 1), s("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("Button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(e) {
                        t.show = !1
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Close")))])], 1)])
        }
        ), [], !1, null, null, null);
        e.a = r.exports
    },
    aa08: function(t, e, s) {
        "use strict";
        var a = (s("d3b7"),
        {
            name: "proxytransfer",
            props: {
                value: {
                    type: Object,
                    default: null
                }
            },
            data: function() {
                return {
                    show: !1,
                    flag: "F",
                    username: "",
                    ausername: "",
                    proxyData: null,
                    loading: !1,
                    loading2: !1
                }
            },
            methods: {
                getData: function() {
                    var t = this;
                    this.loading2 = !0,
                    this.$post("/user/tob/queryProxyLevel", {
                        userName: this.username,
                        flag: this.flag,
                        sourceId: this.value.id
                    }).then((function(e) {
                        t.ausername = t.username,
                        t.proxyData = e
                    }
                    )).catch((function(e) {
                        t.$Message.error(e.message)
                    }
                    )).finally((function() {
                        t.loading2 = !1
                    }
                    ))
                },
                transferModal: function() {
                    var t = this;
                    this.$Modal.confirm({
                        title: this.$t("tips"),
                        content: this.$t("proxy.transferTip2"),
                        onOk: function() {
                            t.transfer()
                        }
                    })
                },
                transfer: function() {
                    var t = this;
                    this.proxyData ? (this.loading = !0,
                    this.$post("/user/tob/transferProxyApi", {
                        newAccount: this.proxyData.userId,
                        oldAccount: this.value.id,
                        newName: this.ausername,
                        oldName: this.value.userName,
                        flag: this.flag
                    }).then((function(e) {
                        e && t.$Message.success(e),
                        t.show = !1,
                        t.$emit("reload")
                    }
                    )).catch((function(e) {
                        t.$Message.error(e.message)
                    }
                    )).finally((function() {
                        t.loading = !1
                    }
                    ))) : this.$Message.info(this.$t("proxy.selectTheMigrationTargetTip"))
                }
            },
            computed: {
                showflagfalse: function() {
                    return !!this.value && this.value.subCount > 0
                }
            },
            watch: {
                value: function() {
                    this.value ? (this.show = !0,
                    0 == this.value.subCount ? this.flag = "T" : this.flag = "F") : this.show = !1
                },
                show: function() {
                    this.show || (this.$emit("input", null),
                    this.username = "",
                    this.ausername = "",
                    this.proxyData = null)
                }
            }
        })
          , n = a
          , o = (s("5465"),
        s("2877"))
          , i = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("Modal", {
                attrs: {
                    width: "700",
                    title: t.$t("proxy.agentMigration")
                },
                model: {
                    value: t.show,
                    callback: function(e) {
                        t.show = e
                    },
                    expression: "show"
                }
            }, [t.loading ? s("Spin", {
                attrs: {
                    fix: ""
                }
            }) : t._e(), s("table", {
                staticClass: "cmtable"
            }, [s("tr", [s("td", [t._v(t._s(t._f("lang")("proxy.sourceAgentAccount")))]), s("td", [s("Input", {
                staticStyle: {
                    width: "200px"
                },
                attrs: {
                    value: (t.value || {}).userName,
                    disabled: ""
                }
            })], 1)]), s("tr", [s("td", [t._v(t._s(t._f("lang")("proxy.doesTheMigrationIncludeASourceAgent")))]), s("td", [s("RadioGroup", {
                model: {
                    value: t.flag,
                    callback: function(e) {
                        t.flag = e
                    },
                    expression: "flag"
                }
            }, [s("Radio", {
                attrs: {
                    label: "T"
                }
            }, [t._v(t._s(t._f("lang")("proxy.yes")))]), t.showflagfalse ? s("Radio", {
                attrs: {
                    label: "F"
                }
            }, [t._v(t._s(t._f("lang")("proxy.no")))]) : t._e()], 1), s("p", {
                staticStyle: {
                    color: "red"
                }
            }, [t._v(t._s(t._f("lang")("proxy.transferTip")) + "；")])], 1)]), s("tr", [s("td", [t._v(t._s(t._f("lang")("proxy.migrationTargetAgentAccount")))]), s("td", [s("Input", {
                staticStyle: {
                    width: "200px",
                    "margin-right": "10px"
                },
                attrs: {
                    placeholder: t.$t("proxy.pleaseEnterTheTargetAccountAccurately")
                },
                model: {
                    value: t.username,
                    callback: function(e) {
                        t.username = e
                    },
                    expression: "username"
                }
            }), s("Button", {
                attrs: {
                    type: "primary",
                    icon: "ios-search",
                    loading: t.loading2
                },
                on: {
                    click: t.getData
                }
            }, [t._v(t._s(t._f("lang")("search")))])], 1)]), s("tr", [s("td", [t._v(t._s(t.$t("proxy.migrationTargetAgentLevel")))]), s("td", [s("span", [t._v(t._s((t.proxyData || {}).path))])])])]), s("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("Button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: t.transferModal
                }
            }, [t._v(t._s(t._f("lang")("proxy.transfer")))]), s("Button", {
                on: {
                    click: function(e) {
                        t.show = !1
                    }
                }
            }, [t._v(t._s(t._f("lang")("proxy.close")))])], 1)], 1)
        }
        ), [], !1, null, null, null);
        e.a = i.exports
    },
    ab70: function(t, e, s) {
        "use strict";
        s("031c")
    },
    ae5a: function(t, e, s) {},
    b3f5: function(t, e, s) {
        "use strict";
        var a = s("d9f5")
          , n = {
            name: "addnewUser",
            props: {
                value: {
                    type: Boolean,
                    default: !1
                },
                isTest: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    show: !1
                }
            },
            components: {
                baseinfo: a.default
            },
            methods: {
                upfresh: function() {
                    this.$emit("upfresh"),
                    this.show = !1
                }
            },
            watch: {
                value: function() {
                    this.value ? this.show = !0 : this.show = !1
                },
                show: function() {
                    this.show || this.$emit("input", !1)
                }
            }
        }
          , o = s("2877")
          , i = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "addnewuser"
            }, [s("Drawer", {
                staticClass: "noctxpad",
                attrs: {
                    width: "1000",
                    title: t.$t("proxy.adduser")
                },
                model: {
                    value: t.show,
                    callback: function(e) {
                        t.show = e
                    },
                    expression: "show"
                }
            }, [s("div", {
                staticStyle: {
                    padding: "20px 0"
                }
            }, [s("baseinfo", {
                attrs: {
                    isadd: !0,
                    isTest: t.isTest
                },
                on: {
                    upfresh: t.upfresh
                }
            })], 1)])], 1)
        }
        ), [], !1, null, null, null);
        e.a = i.exports
    },
    b885: function(t, e, s) {
        "use strict";
        var a = (s("a9e3"),
        s("ac1f"),
        s("5319"),
        s("d81d"),
        s("d3b7"),
        s("25f0"),
        s("99af"),
        {
            name: "thirdAmount",
            props: {
                value: {
                    type: [Object, Array],
                    default: null
                },
                maxLength: {
                    type: [String, Number],
                    default: 400
                }
            },
            data: function() {
                return {
                    show: !1,
                    remark: "",
                    loading: !1
                }
            },
            methods: {
                updateRemark: function() {
                    var t = this
                      , e = this.value;
                    if (this.loading = !0,
                    this.remark && (this.remark = this.remark.replace(/(^\s*)|(\s*$)/g, "")),
                    Array.isArray(this.value)) {
                        var s = this.value.map((function(t) {
                            return t.id
                        }
                        ));
                        this.$post("/user/tob/batchUpdateUserRemark", {
                            userIds: s.toString(),
                            remark: this.remark
                        }).then((function() {
                            t.$Message.success(t.$t("proxy.changeMarkTips")),
                            t.show = !1,
                            t.$emit("upfresh")
                        }
                        )).catch((function(e) {
                            t.$Message.error(e.message)
                        }
                        )).finally((function() {
                            t.loading = !1
                        }
                        ))
                    } else
                        this.$post("/user/tob/updateUserInfo", {
                            id: e.id,
                            dictCode: 1,
                            userName: e.loginName || e.userName,
                            remark: this.remark
                        }).then((function() {
                            e.remark = t.remark,
                            t.$Message.success(t.$t("proxy.changeMarkTips")),
                            t.show = !1
                        }
                        )).catch((function(e) {
                            t.$Message.error(e.message)
                        }
                        )).finally((function() {
                            t.loading = !1
                        }
                        ))
                }
            },
            computed: {
                title: function() {
                    if (!this.value)
                        return "";
                    if (Array.isArray(this.value)) {
                        var t = this.value.map((function(t) {
                            return t.userName
                        }
                        )).toString();
                        return "".concat(this.$t("proxy.account"), ": ").concat(t)
                    }
                    return "".concat(this.$t("proxy.account"), ": ").concat(this.value.loginName || this.value.userName)
                },
                countNum: function() {
                    return this.remark && "".concat(this.remark.length, "/").concat(this.maxLength)
                }
            },
            watch: {
                value: function() {
                    this.value ? (this.show = !0,
                    this.remark = this.value.remark) : this.show = !1
                },
                show: function() {
                    this.show || this.$emit("input", null)
                }
            }
        })
          , n = a
          , o = (s("ab70"),
        s("2877"))
          , i = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("Modal", {
                attrs: {
                    title: t.title
                },
                model: {
                    value: t.show,
                    callback: function(e) {
                        t.show = e
                    },
                    expression: "show"
                }
            }, [s("div", {
                staticStyle: {
                    position: "relative"
                }
            }, [t.loading ? s("Spin", {
                attrs: {
                    fix: ""
                }
            }) : t._e(), t._v(" " + t._s(t.$t("proxy.Remark")) + " "), s("Input", {
                staticStyle: {
                    width: "400px"
                },
                attrs: {
                    type: "textarea",
                    maxlength: t.maxLength,
                    autosize: {
                        minRows: 5,
                        maxRows: 10
                    },
                    "count-num": t.countNum
                },
                model: {
                    value: t.remark,
                    callback: function(e) {
                        t.remark = e
                    },
                    expression: "remark"
                }
            })], 1), s("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("Button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(e) {
                        return t.updateRemark()
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Change")))]), s("Button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(e) {
                        t.show = !1
                    }
                }
            }, [t._v(t._s(t._f("lang")("proxy.Close")))])], 1)])
        }
        ), [], !1, null, "85bdb4d8", null);
        e.a = i.exports
    },
    b8de: function(t, e, s) {},
    bc9e: function(t, e, s) {
        "use strict";
        s("b8de")
    },
    c21a: function(t, e, s) {
        "use strict";
        s("ae5a")
    },
    d3e5: function(t, e, s) {
        "use strict";
        s.d(e, "c", (function() {
            return p
        }
        )),
        s.d(e, "b", (function() {
            return d
        }
        )),
        s.d(e, "a", (function() {
            return h
        }
        ));
        var a = s("2909")
          , n = (s("99af"),
        s("a630"),
        s("3ca3"),
        s("d36b"))
          , o = [{
            key: "all",
            name: n.a.t("proxy.Allhierarchy")
        }].concat(Object(a.a)(Array.from({
            length: 17
        }, (function(t, e) {
            return {
                key: e + 1 + "",
                name: "第".concat(e + 1, "层")
            }
        }
        ))))
          , i = [{
            key: "all",
            name: n.a.t("proxy.Alllevels")
        }].concat(Object(a.a)(Array.from({
            length: 10
        }, (function(t, e) {
            return {
                key: e + "",
                name: "第".concat(e, "级")
            }
        }
        ))))
          , r = [{
            key: "all",
            name: n.a.t("proxy.Allstatus")
        }, {
            key: "11",
            name: n.a.t("proxy.Deactivate")
        }, {
            key: "41",
            name: n.a.t("proxy.blacklist")
        }, {
            key: "31",
            name: n.a.t("proxy.freeze")
        }, {
            key: "10",
            name: n.a.t("proxy.Using")
        }, {
            key: "21",
            name: n.a.t("proxy.Pausecrawl")
        }]
          , u = [{
            key: "id",
            name: n.a.t("proxy.Registrdate")
        }, {
            key: "user_name",
            name: n.a.t("proxy.LoginUsername")
        }, {
            key: "last_login_time",
            name: n.a.t("proxy.Logindate")
        }, {
            key: "rank_level",
            name: n.a.t("proxy.userlevel")
        }]
          , l = (n.a.t("proxy.Registrdate"),
        n.a.t("proxy.modifiedDate"),
        n.a.t("proxy.Logindate"),
        n.a.t("proxy.LoginUsername"),
        n.a.t("proxy.loginTime"),
        n.a.t("proxy.numberOfLowerLevels"),
        [{
            key: "desc",
            name: n.a.t("proxy.Descending")
        }, {
            key: "asc",
            name: n.a.t("proxy.Ascending")
        }])
          , c = [{
            key: "1",
            name: n.a.t("proxy.searchType1")
        }, {
            key: "2",
            name: n.a.t("proxy.searchType2")
        }, {
            key: "3",
            name: n.a.t("proxy.searchType3")
        }, {
            key: "4",
            name: n.a.t("proxy.searchType4")
        }, {
            key: "5",
            name: n.a.t("proxy.searchType5")
        }, {
            key: "6",
            name: n.a.t("proxy.searchType6")
        }, {
            key: "7",
            name: n.a.t("proxy.searchType7")
        }]
          , p = {
            level: o,
            rankLevel: i,
            status: r,
            orderField: u,
            orderDirection: l,
            isDeposit: [{
                key: "all",
                name: n.a.t("proxy.isDeposit0")
            }, {
                key: "0",
                name: n.a.t("proxy.isDeposit1")
            }, {
                key: "1",
                name: n.a.t("proxy.isDeposit2")
            }],
            searchType: c
        }
          , d = {
            dateType: [{
                key: "1",
                name: n.a.t("proxy.Registrdate")
            }, {
                key: "3",
                name: n.a.t("proxy.Logindate")
            }]
        }
          , h = {
            shortcuts: [{
                text: n.a.t("Today"),
                value: function() {
                    var t = new Date;
                    t.setHours(0),
                    t.setMinutes(0),
                    t.setSeconds(0);
                    var e = new Date;
                    return e.setHours(23),
                    e.setMinutes(59),
                    e.setSeconds(59),
                    [new Date(t), e]
                }
            }, {
                text: n.a.t("Yesterday"),
                value: function() {
                    var t = new Date;
                    t.setTime(t.getTime() - 864e5),
                    t.setHours(0),
                    t.setMinutes(0),
                    t.setSeconds(0);
                    var e = new Date(t);
                    return e.setHours(23),
                    e.setMinutes(59),
                    e.setSeconds(59),
                    [t, e]
                }
            }, {
                text: n.a.t("Thisweek"),
                value: function() {
                    var t = new Date
                      , e = t.getDay() || 7
                      , s = new Date(t - 864e5 * (e - 1));
                    s.setHours(0),
                    s.setMinutes(0),
                    s.setSeconds(0);
                    var a = new Date;
                    return a.setHours(23),
                    a.setMinutes(59),
                    a.setSeconds(59),
                    [s, a]
                }
            }, {
                text: n.a.t("Lastweek"),
                value: function() {
                    var t = new Date
                      , e = t.getDay() || 7
                      , s = 864e5
                      , a = new Date(t - e * s)
                      , n = new Date(t - (e + 6) * s);
                    return n.setHours(0),
                    n.setMinutes(0),
                    n.setSeconds(0),
                    a.setHours(23),
                    a.setMinutes(59),
                    a.setSeconds(59),
                    [n, a]
                }
            }, {
                text: n.a.t("Thismonth"),
                value: function() {
                    var t = new Date;
                    t.setDate(1);
                    var e = new Date(t);
                    e.setHours(0),
                    e.setMinutes(0),
                    e.setSeconds(0);
                    var s = new Date;
                    return s.setHours(23),
                    s.setMinutes(59),
                    s.setSeconds(59),
                    [e, s]
                }
            }, {
                text: n.a.t("Lastmonth"),
                value: function() {
                    var t, e, s = new Date;
                    return s.setDate(0),
                    (t = new Date(s)).setHours(23),
                    t.setMinutes(59),
                    t.setSeconds(59),
                    s.setDate(1),
                    (e = new Date(s)).setHours(0),
                    e.setMinutes(0),
                    e.setSeconds(0),
                    [e, t]
                }
            }, {
                text: n.a.t("Nearlysevendays"),
                value: function() {
                    var t = new Date
                      , e = new Date;
                    return e.setHours(0),
                    e.setMinutes(0),
                    e.setSeconds(0),
                    t.setHours(23),
                    t.setMinutes(59),
                    t.setSeconds(59),
                    e.setTime(e.getTime() - 5184e5),
                    [e, t]
                }
            }, {
                text: n.a.t("Nearlythrtydays"),
                value: function() {
                    var t = new Date
                      , e = new Date;
                    return e.setHours(0),
                    e.setMinutes(0),
                    e.setSeconds(0),
                    t.setHours(23),
                    t.setMinutes(59),
                    t.setSeconds(59),
                    e.setTime(e.getTime() - 25056e5),
                    [e, t]
                }
            }],
            disabledDate: function(t) {
                return t && t.valueOf() > Date.now()
            }
        }
    },
    f44b: function(t, e, s) {
        "use strict";
        var a = (s("4de4"),
        s("ac1f"),
        s("1276"),
        {
            name: "pathaaa",
            props: {
                value: {
                    type: Object,
                    default: null
                }
            },
            data: function() {
                return {
                    show: !1,
                    data: []
                }
            },
            methods: {
                getData: function() {
                    var t = this;
                    this.$get("/user/tob/getPath", {
                        userId: this.value.id
                    }).then((function(e) {
                        t.data = e.split("/").filter((function(t) {
                            return t
                        }
                        )),
                        t.data.shift()
                    }
                    )).catch((function(e) {
                        t.$Message.error(e.message)
                    }
                    ))
                }
            },
            watch: {
                value: function() {
                    this.value ? (this.getData(),
                    this.show = !0) : this.show = !1
                },
                show: function() {
                    this.show || this.$emit("input", null)
                }
            }
        })
          , n = a
          , o = (s("c21a"),
        s("2877"))
          , i = Object(o.a)(n, (function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("Modal", {
                attrs: {
                    width: "700",
                    title: t.$t("proxy.pathUrl")
                },
                model: {
                    value: t.show,
                    callback: function(e) {
                        t.show = e
                    },
                    expression: "show"
                }
            }, [s("div", {
                staticClass: "pathaaa"
            }, [t._l(t.data, (function(e, a) {
                return [s("span", {
                    key: a
                }, [t._v(t._s(t.$t("proxy.Hierarchical")) + t._s(a + 1))]), s("span", {
                    key: e
                }, [t._v(t._s(e))])]
            }
            ))], 2), s("div", {
                attrs: {
                    slot: "footer"
                },
                slot: "footer"
            }, [s("Button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(e) {
                        t.show = !1
                    }
                }
            }, [t._v(t._s(t.$t("proxy.close")))])], 1)])
        }
        ), [], !1, null, null, null);
        e.a = i.exports
    },
    feb9: function(t, e, s) {
        "use strict";
        var a = s("3835")
          , n = (s("d3b7"),
        s("ac1f"),
        s("1276"),
        function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("Modal", {
                staticClass: "samelp",
                attrs: {
                    title: "同IP用户列表",
                    "footer-hide": !0
                },
                model: {
                    value: t.show,
                    callback: function(e) {
                        t.show = e
                    },
                    expression: "show"
                }
            }, [t.loading ? s("Spin", {
                attrs: {
                    fix: ""
                }
            }) : t._e(), s("div", {
                staticStyle: {
                    "max-height": "500px",
                    overflow: "auto"
                }
            }, [s("table", {
                staticClass: "cmtable"
            }, [s("tr", [s("th", [t._v("序号")]), s("th", [t._v("用户名")]), s("th", [t._v("最后登录时间")]), s("th", [t._v("盈亏金额")])]), t._l(t.dataList, (function(e, a) {
                return s("tr", {
                    key: e.id
                }, [s("td", [t._v(t._s(a + 1))]), s("td", [s("span", {
                    staticClass: "select",
                    on: {
                        click: function(s) {
                            return t.setValue(e)
                        }
                    }
                }, [t._v(" " + t._s(e.userName))])]), s("td", [t._v(" " + t._s(e.lastLoginTime) + " ")]), s("td", [t._v(" " + t._s(t.profit[e.id] || 0) + " ")])])
            }
            ))], 2)])], 1)
        }
        )
          , o = s("5530")
          , i = s("2f62")
          , r = {
            name: "sameip",
            props: {
                value: {
                    default: ""
                }
            },
            data: function() {
                return {
                    show: !1,
                    dataList: [],
                    profit: {},
                    loading: !1
                }
            },
            computed: Object(o.a)({}, Object(i.c)("site", ["siteInfo"])),
            methods: {
                setValue: function(t) {
                    this.$emit("setValue", t),
                    this.show = !1
                },
                getData: function() {
                    var t = this;
                    this.loading = !0,
                    this.$get("/pay/lotPayWithdrawCheck/queryIdenticalIP", {
                        loginIp: this.value,
                        siteCode: this.siteInfo.siteCode
                    }).then((function(e) {
                        t.dataList = e.userList,
                        t.profit = e.userProfit
                    }
                    )).catch((function(e) {
                        t.$Message.error(e.message)
                    }
                    )).finally((function() {
                        t.loading = !1
                    }
                    ))
                }
            },
            watch: {
                value: function() {
                    this.value ? (this.show = !0,
                    this.getData()) : this.show = !1
                },
                show: function() {
                    this.show || this.$emit("input", "")
                }
            }
        }
          , u = r
          , l = (s("bc9e"),
        s("2877"))
          , c = Object(l.a)(u, n, [], !1, null, null, null).exports
          , p = {
            name: "userdetail",
            props: {
                value: {
                    type: Object,
                    default: null
                },
                isTest: {
                    type: Boolean,
                    default: !1
                }
            },
            data: function() {
                return {
                    recentDepositTypeList: ["", "", "", this.$t("proxy.userdetailTable14"), this.$t("proxy.userdetailTable15"), this.$t("proxy.Manualdeposit"), this.$t("proxy.onlinePayment"), this.$t("proxy.userdetailTable16")],
                    show: !1,
                    loading: !1,
                    balanceList: [],
                    userDeposit: {},
                    userInfoData: {},
                    member: {},
                    userIpcount: 0,
                    sameIPadd: "",
                    other: {},
                    userstatus: "",
                    thirdfundList: [],
                    moneyList: {},
                    orderList: {},
                    report: {}
                }
            },
            computed: {
                title: function() {
                    return this.value ? (this.value.loginName || this.value.userName) + this.$t("proxy.userdetails") : this.$t("proxy.userdetails")
                }
            },
            methods: {
                resetSore: function() {
                    var t = this;
                    this.loading = !0,
                    this.$post("/user/tob/updateUserInfo", {
                        id: this.userInfoData.id,
                        growthValue: 0
                    }).then((function() {
                        t.getData()
                    }
                    )).catch((function(e) {
                        t.$Message.error(e.message)
                    }
                    )).finally((function() {
                        t.loading = !1
                    }
                    ))
                },
                setValue: function(t) {
                    this.$emit("input", t)
                },
                getData: function() {
                    var t = this;
                    this.loading = !0,
                    this.$post("/user/tob/getUserDetailApi", {
                        id: this.value.id
                    }).then((function(e) {
                        t.getMoneyList(),
                        t.getorderList(),
                        t.data = e,
                        t.balanceList = e.balanceList,
                        t.userDeposit = e.userDeposit || {},
                        t.userInfoData = e,
                        t.userIpcount = e.userIpCount,
                        t.member = e.member || {},
                        t.other = e,
                        t.userstatus = e.status + ""
                    }
                    )).catch((function(e) {
                        t.$Message.error(e.message)
                    }
                    )).finally((function() {
                        t.loading = !1
                    }
                    ))
                },
                getMoneyList: function() {
                    var t = this;
                    return this.$get("/funds/aggregation/tob/userInfo", {
                        userId: this.value.id
                    }).then((function(e) {
                        t.moneyList = e || {}
                    }
                    )).catch((function(e) {
                        t.$Message.error(e.message)
                    }
                    ))
                },
                getorderList: function() {
                    var t = this;
                    return this.$post("/user/tob/getUserOrderApi", {
                        id: this.value.id
                    }).then((function(e) {
                        t.report = e.report || {},
                        t.orderList = e || {};
                        var s = t.orderList
                          , a = s.orderTime
                          , n = s.lastOrderTime;
                        a && (t.orderList.orderTime = t.$utils.formatDate(a, "YYYY-MM-DD")),
                        n && (t.orderList.lastOrderTime = t.$utils.formatDate(n, "YYYY-MM-DD"))
                    }
                    )).catch((function(e) {
                        t.$Message.error(e.message)
                    }
                    ))
                },
                updateStatus: function(t) {
                    var e = this
                      , s = t.split("")
                      , n = Object(a.a)(s, 2)
                      , o = n[0]
                      , i = n[1];
                    o -= 1,
                    this.loading = !0,
                    this.$post("/user/tob/changeStatus", {
                        id: this.userInfoData.id,
                        task: o,
                        status: i
                    }).then((function() {
                        e.$Message.success(e.$t("changeSuccess"));
                        var s = {
                            10: e.$t("proxy.Using"),
                            11: e.$t("proxy.Deactivate"),
                            21: e.$t("proxy.Pausecrawl"),
                            31: e.$t("proxy.freeze"),
                            41: e.$t("proxy.blacklist")
                        };
                        e.value.status = s[t]
                    }
                    )).catch((function(t) {
                        e.$Message.error(t.message)
                    }
                    )).finally((function() {
                        e.loading = !1
                    }
                    ))
                }
            },
            watch: {
                value: function() {
                    this.value ? (this.getData(),
                    this.show = !0) : this.show = !1
                },
                show: function() {
                    this.show || this.$emit("input", null)
                }
            },
            components: {
                sameIp: c
            },
            mounted: function() {}
        }
          , d = p
          , h = (s("51b4"),
        Object(l.a)(d, (function() {
            var t = this
              , e = t.$createElement
              , s = t._self._c || e;
            return s("div", {
                staticClass: "userdetail"
            }, [s("Drawer", {
                staticClass: "noctxpad",
                attrs: {
                    width: "1000",
                    title: t.title
                },
                model: {
                    value: t.show,
                    callback: function(e) {
                        t.show = e
                    },
                    expression: "show"
                }
            }, [t.loading ? s("Spin", {
                attrs: {
                    fix: ""
                }
            }) : t._e(), t.value ? s("div", {
                staticClass: "userdetailboxcontent"
            }, [s("div", {
                staticClass: "boxtop"
            }, [s("div", {
                staticClass: "title"
            }, [t._v(" " + t._s(t.$t("proxy.Information")) + " ")]), s("Row", [s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.proxyTable9")) + ": ")]), t._v(" " + t._s(t.userInfoData.level) + " ")])]), s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.Logindays")) + ": ")]), t._v(" " + t._s(t.userInfoData.loginCountByDay) + " ")])]), t.userInfoData.usedName ? s("i-col", {
                attrs: {
                    span: "6"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.Formername")) + ": ")]), t._v(" " + t._s(t.userInfoData.usedName) + " ")])]) : t._e(), s("i-col", {
                attrs: {
                    span: t.userInfoData.usedName ? 6 : 12
                }
            }, [s("div", [t._l((t.userInfoData.path || "").split("-"), (function(e) {
                return [s("span", {
                    key: e,
                    staticClass: "abutton"
                }, [t._v(t._s(e))]), t._v(" / ")]
            }
            ))], 2)]), s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [s("div", [!t.isTest && t.pageauthoritys.removeProxy ? s("span", {
                staticClass: "abutton",
                on: {
                    click: function(e) {
                        return t.$emit("showtransfer", t.value)
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Accountmigration")))]) : t._e()])])], 1), s("Row", [s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.addBankForm2")) + ": ")]), t._v(" " + t._s(t.userInfoData.realName) + " ")])]), s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.Gender")) + ": ")]), t._v(" " + t._s(t.userInfoData.sex ? t.$t("proxy.Male") : t.$t("proxy.Female")) + " ")])]), s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.Growthvalue")) + ": ")]), t._v(" " + t._s(t.userInfoData.growthValue) + " ")])]), s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.userlevel")) + ": ")]), t._v(" " + t._s(t.userInfoData.rankLevel) + " ")])]), s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [s("div", [s("Tooltip", {
                attrs: {
                    content: t.$t("proxy.teamSizeTips"),
                    "max-width": "300"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.teamSize")) + ": ")]), t._v(" " + t._s(t.userInfoData.teamSize) + " ")])], 1)]), s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [t.pageauthoritys.resetSore ? s("Poptip", {
                attrs: {
                    confirm: "",
                    title: t.$t("proxy.resetSoreTips")
                },
                on: {
                    "on-ok": function(e) {
                        return t.resetSore()
                    }
                }
            }, [s("span", {
                staticClass: "abutton"
            }, [t._v(" " + t._s(t.$t("proxy.resetSore")) + " ")])]) : t._e()], 1), s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [t.pageauthoritys.detail ? s("span", {
                staticClass: "abutton",
                on: {
                    click: function(e) {
                        return t.$router.push("/userdetail/baseinfo?userid=" + t.userInfoData.id)
                    }
                }
            }, [t._v(t._s(t.$t("proxy.ChangePassword")))]) : t._e()])], 1), s("Row", [s("i-col", {
                attrs: {
                    span: "6"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.proxyTable4")) + ": "), s("Select", {
                staticStyle: {
                    width: "50%"
                },
                attrs: {
                    disabled: !t.pageauthoritys.changeStatus
                },
                on: {
                    "on-change": t.updateStatus
                },
                model: {
                    value: t.userstatus,
                    callback: function(e) {
                        t.userstatus = e
                    },
                    expression: "userstatus"
                }
            }, [s("Option", {
                attrs: {
                    value: "10"
                }
            }, [t._v(t._s(t.$t("proxy.Using")))]), s("Option", {
                attrs: {
                    value: "11"
                }
            }, [t._v(t._s(t.$t("proxy.Deactivate")))]), s("Option", {
                attrs: {
                    value: "21"
                }
            }, [t._v(t._s(t.$t("proxy.Pausecrawl")))]), s("Option", {
                attrs: {
                    value: "31"
                }
            }, [t._v(t._s(t.$t("proxy.freeze")))]), s("Option", {
                attrs: {
                    value: "41"
                }
            }, [t._v(t._s(t.$t("proxy.blacklist")))])], 1)], 1)]), s("i-col", {
                attrs: {
                    span: "8"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(t._s(t.$t("proxy.proxyTable14")) + ": ")]), t._v(t._s(t.userInfoData.lastLoginTime))]), s("i-col", {
                attrs: {
                    span: "6"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(t._s(t.$t("proxy.proxyTable12")) + ": ")]), s("Tooltip", {
                attrs: {
                    content: t.userInfoData.loginIp,
                    placement: "top"
                }
            }, [s("span", [t._v(t._s(t.userInfoData.loginIp))])]), t.other.userIpCount ? [s("span", {
                staticClass: "abutton",
                on: {
                    click: function(e) {
                        t.sameIPadd = t.userInfoData.lastLoginIp
                    }
                }
            }, [t._v(" (" + t._s(t.other.userIpCount) + ") ")])] : t._e()], 2), s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [s("span", {
                staticClass: "abutton",
                on: {
                    click: function(e) {
                        return t.$router.push({
                            path: "/operationLog"
                        })
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Operationlog")))])])], 1)], 1), s("div", {
                staticClass: "boxbottom"
            }, [s("div", {
                staticClass: "title"
            }, [t._v(" " + t._s(t.$t("proxy.details")) + " ")]), s("Row", [s("i-col", {
                attrs: {
                    span: "16"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.totalAmount")) + ": ")]), t._v(" " + t._s(t._f("tofix")((+t.moneyList.canAmount + +t.moneyList.freezeAmount + +t.moneyList.financialAmount || 0) / 100, 2)) + " (" + t._s(t.$t("proxy.Platformbalance")) + ": " + t._s(t._f("tofix")((t.moneyList.canAmount || 0) / 100, 2)) + " + " + t._s(t.$t("proxy.Freezebalance")) + ": " + t._s(t._f("tofix")((t.moneyList.freezeAmount || 0) / 100, 2)) + " + " + t._s(t.$t("proxy.financialAmount")) + ": " + t._s(t._f("tofix")((t.moneyList.financialAmount || 0) / 100, 2)) + ") "), s("span", {
                staticClass: "abutton",
                on: {
                    click: t.getData
                }
            }, [t._v(t._s(t.$t("proxy.Refresh")))])])]), s("i-col", {
                attrs: {
                    span: "8"
                }
            }, [s("div", [s("Row", [s("i-col", {
                attrs: {
                    span: "6"
                }
            }, [s("span", {
                staticClass: "abutton",
                on: {
                    click: function(e) {
                        return t.$router.push({
                            path: "/onlineinout/in",
                            query: {
                                username: t.userInfoData.userName
                            }
                        })
                    }
                }
            }, [t._v(t._s(t.$t("proxy.manualdeposit")))])]), s("i-col", {
                attrs: {
                    span: "6"
                }
            }, [s("span", {
                staticClass: "abutton",
                on: {
                    click: function(e) {
                        return t.$router.push({
                            path: "/onlineinout/out",
                            query: {
                                username: t.userInfoData.userName
                            }
                        })
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Manualwithdrawal")))])]), s("i-col", {
                attrs: {
                    span: "6"
                }
            }, [s("span", {
                staticClass: "abutton",
                on: {
                    click: function(e) {
                        return t.$router.push({
                            path: "/logpayflow",
                            query: {
                                loginName: t.userInfoData.userName
                            }
                        })
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Fundrecord")))])])], 1)], 1)])], 1), s("Row", [s("i-col", {
                attrs: {
                    span: "8"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.userdetailTable1")) + ": ")]), t._v(" " + t._s(t.moneyList.totalDepositCount) + " "), s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.userdetailTable2")) + ": ")]), t._v(" " + t._s(t._f("tofix")((t.moneyList.totalDepositMoney || 0) / 100, 2)) + " ")])]), s("i-col", {
                attrs: {
                    span: "8"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.userdetailTable3")) + ": ")]), t._v(" " + t._s(t.moneyList.totalWithdrawCount) + " "), s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.userdetailTable4")) + ": ")]), t._v(" " + t._s(t._f("tofix")((t.moneyList.totalWithdrawMoney || 0) / 100, 2)) + " ")])]), s("i-col", {
                attrs: {
                    span: "8"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.userdetailTable5")) + ": ")]), t._v(" " + t._s(t._f("tofix")((t.moneyList.totalDepositMoney - t.moneyList.totalWithdrawMoney || 0) / 100, 2)) + " ")])])], 1), s("Row", [s("i-col", {
                attrs: {
                    span: "16"
                }
            }, [s("Row", [s("i-col", {
                attrs: {
                    span: "8"
                }
            }, [s("span", {
                staticClass: "abutton",
                on: {
                    click: function(e) {
                        return t.$router.push({
                            path: "/amountVaryRecords/offlineDepositRecords",
                            query: {
                                loginName: t.userInfoData.userName
                            }
                        })
                    }
                }
            }, [t._v(t._s(t.$t("proxy.depositrecord")))])]), s("i-col", {
                attrs: {
                    span: "8"
                }
            }, [s("span", {
                staticClass: "abutton",
                on: {
                    click: function(e) {
                        return t.$router.push({
                            path: "/lotPaySet/lotPay",
                            query: {
                                loginName: t.userInfoData.userName
                            }
                        })
                    }
                }
            }, [t._v(t._s(t.$t("proxy.Withdrawalrecords")))])])], 1)], 1)], 1), s("Row", [s("i-col", {
                attrs: {
                    span: "8"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.userdetailTable6")) + ": ")]), t._v(" " + t._s(t.moneyList.lastDepositTime) + " ")])]), s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.userdetailTable7")) + ": ")]), t._v(" " + t._s(t._f("tofix")((t.moneyList.lastDepositMoney || 0) / 100, 2)) + " ")]), s("i-col", {
                attrs: {
                    span: "8"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.userdetailTable8")) + ": ")]), t._v(" " + t._s(t.recentDepositTypeList[t.moneyList.lastDepositType]) + " ")])], 1), s("Row", [s("i-col", {
                attrs: {
                    span: "8"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.userdetailTable9")) + ": ")]), t._v(" " + t._s(t.moneyList.lastWithdrawTime) + " ")])]), s("i-col", {
                attrs: {
                    span: "8"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.userdetailTable10")) + ": ")]), t._v(" " + t._s(t._f("tofix")((t.moneyList.lastWithdrawMoney || 0) / 100, 2)) + " ")])]), s("i-col", {
                attrs: {
                    span: "8"
                }
            }, [s("div", [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.userdetailTable11")) + ": ")]), t._v(" " + t._s(t._f("tofix")((t.moneyList.totalOtherFee || 0) / 100, 2)) + " ")])])], 1), s("Divider"), s("Row", [s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.orderamount")) + ": ")]), t._v(" " + t._s(t._f("tofix")((t.report.completedOrderAmount || 0) / 100, 2)) + " ")]), s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.OrderQuantity")) + ": ")]), t._v(" " + t._s(t.report.completedOrderCount || 0) + " ")]), s("i-col", {
                attrs: {
                    span: "4"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.relativetable12")) + ": ")]), t._v(" " + t._s(t._f("tofix")((t.report.commissionAmount || 0) / 100, 2)) + " ")])], 1), s("Row", [s("i-col", {
                attrs: {
                    span: "6"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.relativetable13")) + ": ")]), t._v(" " + t._s(t._f("tofix")((t.report.teamCommissionAmount || 0) / 100, 2)) + " ")]), s("i-col", {
                attrs: {
                    span: "12"
                }
            }, [s("span", {
                staticClass: "abutton",
                on: {
                    click: function(e) {
                        return t.$router.push({
                            path: "/orderManage/index"
                        })
                    }
                }
            }, [t._v(t._s(t.$t("proxy.orderrecords")))])])], 1), s("Row", [s("i-col", {
                attrs: {
                    span: "6"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.userdetailTable12")) + ": ")]), t._v(" " + t._s(t.orderList.orderTime) + " ")]), s("i-col", {
                attrs: {
                    span: "6"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.userdetailTable13")) + ": ")]), t._v(" " + t._s(t.orderList.lastOrderTime) + " ")])], 1), s("Row", [s("i-col", {
                attrs: {
                    span: "12"
                }
            }, [t._v(" " + t._s(t.$t("proxy.dataRefreshTip")) + " ")])], 1), s("Divider"), s("Row", [s("i-col", {
                attrs: {
                    span: "6"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.proxyTable15")) + ": ")]), t._v(" " + t._s(t.userInfoData.createTime) + " ")]), s("i-col", {
                attrs: {
                    span: "6"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.proxyTable3")) + ": ")]), t._v(" " + t._s(t.userInfoData.registerIp) + " ")]), s("i-col", {
                attrs: {
                    span: "6"
                }
            }, [s("span", {
                staticClass: "label"
            }, [t._v(" " + t._s(t.$t("proxy.proxyTable18")) + ": ")]), t._v(" " + t._s(t.userInfoData.deviceCode) + " ")])], 1)], 1)]) : t._e()], 1), s("sameIp", {
                on: {
                    setValue: t.setValue
                },
                model: {
                    value: t.sameIPadd,
                    callback: function(e) {
                        t.sameIPadd = e
                    },
                    expression: "sameIPadd"
                }
            })], 1)
        }
        ), [], !1, null, null, null));
        e.a = h.exports
    }
}]);
