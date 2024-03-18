(window.webpackJsonp = window.webpackJsonp || []).push([["chunk-2fc97df2"], {
    "8ecc": function(e, t, a) {
        "use strict";
        a.r(t);
        var i = a("3835")
          , s = a("5530")
          , r = (a("4de4"),
        a("caad"),
        a("2532"),
        a("d3b7"),
        a("ddb0"),
        a("ac1f"),
        a("1276"),
        a("07ac"),
        a("d81d"),
        a("5319"),
        a("7db0"),
        a("3d01"))
          , n = a("d3e5")
          , o = a("22b7")
          , l = a("8d37")
          , c = a("f44b")
          , h = a("aa08")
          , u = a("feb9")
          , d = a("b3f5")
          , p = a("b885")
          , m = {
            name: "proxyuser",
            components: {
                Nav: r.a,
                thirdAmount: o.a,
                operation: l.a,
                level: c.a,
                proxytransfer: h.a,
                userDetail: u.a,
                addnewuser: d.a,
                remarkModel: p.a
            },
            data: function() {
                var e = {};
                for (var t in n.c)
                    e[t] = n.c[t][0].key;
                for (var a in n.b)
                    e[a] = n.b[a][0].key;
                return {
                    checkedNamesHeader: "",
                    checkedNames: [],
                    values: e,
                    config: n.c,
                    higher: n.b,
                    dateoptions: n.a,
                    loginName: "",
                    lastLoginIp: "",
                    date: [null, null],
                    showhightsearch: !1,
                    highAccount: "",
                    path: [],
                    page: 1,
                    limit: 10,
                    total: 0,
                    dataList: [],
                    modal1: !1,
                    thirdDetail: null,
                    operationDetail: null,
                    pathDetail: null,
                    proxytransferdetail: null,
                    userdrawerDetail: null,
                    showadduser: !1,
                    remarkUser: null,
                    remark: "",
                    loading: !1,
                    excelloading: !1,
                    lastDate: [null, null],
                    userStatusMap: {
                        10: this.$t("proxy.Using"),
                        11: this.$t("proxy.Deactivate"),
                        21: this.$t("proxy.Pausecrawl"),
                        31: this.$t("proxy.freeze"),
                        41: this.$t("proxy.blacklist")
                    }
                }
            },
            methods: {
                openRemark: function() {
                    var e = this;
                    if (0 == this.checkedNames.length)
                        return this.remarkUser = null;
                    var t = this.dataList.filter((function(t) {
                        return e.checkedNames.includes(t.id)
                    }
                    ));
                    this.remarkUser = t
                },
                remarkHandler: function(e) {
                    this.pageauthoritys.update && (this.remarkUser = e)
                },
                showThirdDetailHandler: function(e) {
                    this.pageauthoritys.detail && (this.thirdDetail = e)
                },
                showDetailHandler: function(e) {
                    this.pageauthoritys.detail && (this.userdrawerDetail = e)
                },
                formatRegisterInfo: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
                      , t = e.registerAddress
                      , a = e.registerIp;
                    return (a = a || this.$t("proxy.System")) + (t ? "(".concat(t, ")") : "")
                },
                handledoExcel: function() {
                    this.$router.push("/exportRecord")
                },
                toDetail: function(e) {
                    var t = Object(s.a)({
                        page: this.page,
                        limit: this.limit
                    }, this.values);
                    for (var a in t)
                        "all" === t[a] && (t[a] = "");
                    Object.assign(t, {
                        loginName: this.loginName,
                        lastLoginIp: this.lastLoginIp,
                        beginTime: this.date[0] ? this.$utils.formatDate(this.date[0], "YYYY-MM-DD hh:mm:ss") : "",
                        endTime: this.date[1] ? this.$utils.formatDate(this.date[1], "YYYY-MM-DD hh:mm:ss") : "",
                        highAccount: this.highAccount
                    }),
                    sessionStorage.proxycachequery = JSON.stringify(t),
                    this.$router.push({
                        path: "/userdetail/baseinfo",
                        query: {
                            userid: e.id
                        }
                    })
                },
                fna: function(e) {
                    this.userdrawerDetail = null,
                    this.proxytransferdetail = e
                },
                reset: function() {
                    for (var e in this.loginName = "",
                    this.lastLoginIp = "",
                    this.date = [null, null],
                    n.c)
                        this.values[e] = n.c[e][0].key;
                    for (var t in n.b)
                        this.values[t] = n.b[t][0].key
                },
                getData: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , a = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (this.checkedNames = [],
                    this.checkedNamesHeader = "",
                    t && (this.page = 1),
                    a && (this.highAccount = ""),
                    8 == +this.values.searchType) {
                        var i = this.loginName.split(/[, ]+/);
                        if (i.length > 100)
                            return void this.$Message.error(this.$t("proxy.limitTip"))
                    }
                    var r = Object(s.a)({
                        page: this.page,
                        limit: this.limit
                    }, this.values);
                    for (var n in r)
                        "all" === r[n] && (r[n] = "");
                    return Object.assign(r, {
                        lastLoginIp: this.lastLoginIp,
                        beginTime: this.date[0] ? this.$utils.formatDate(this.date[0], "YYYY-MM-DD hh:mm:ss") : "",
                        endTime: this.date[1] ? this.$utils.formatDate(this.date[1], "YYYY-MM-DD hh:mm:ss") : "",
                        highAccount: this.highAccount
                    }),
                    r.searchName = this.loginName,
                    this.loading = !0,
                    this.$post("/user/tob/getUserReportTable", r).then((function(t) {
                        var a = t || {}
                          , i = a.levelPathMap
                          , s = a.resultPage
                          , r = void 0 === s ? [] : s;
                        e.path = i ? (Object.values(t.levelPathMap).reverse() || []).filter((function(e) {
                            return "default" !== e
                        }
                        )) : [],
                        e.dataList = r.content.map((function(t) {
                            return t.status = e.userStatusMap[t.status],
                            t.remarkShow = !1,
                            t
                        }
                        )),
                        e.total = +r.totalElements
                    }
                    )).catch((function(t) {
                        e.$Message.error(t.message)
                    }
                    )).finally((function() {
                        e.loading = !1
                    }
                    ))
                },
                pageChange: function(e) {
                    this.page = e,
                    this.checkedNamesHeader = "",
                    this.checkedNames = [],
                    this.getData()
                },
                pageSizeChange: function(e) {
                    this.limit = e,
                    this.getData(!0)
                },
                updateRemark: function(e) {
                    var t = this;
                    this.$post("/user/tob/updateUserInfo", {
                        id: e.id,
                        dictCode: 1,
                        userName: e.loginName,
                        remark: this.remark
                    }).then((function() {
                        e.remark = t.remark,
                        t.$Message.success(t.$t("changeSuccess")),
                        e.remarkShow = !1
                    }
                    )).catch((function(e) {
                        t.$Message.error(e.message)
                    }
                    ))
                },
                downloadline: function(e) {
                    var t = this;
                    this.$download("/user/tob/exportUser", {
                        isExport: !0,
                        highAccount: e.userName
                    }).then((function() {
                        t.modal1 = !0
                    }
                    )).catch((function(e) {
                        t.$Message.error(e.message)
                    }
                    )).finally((function() {
                        t.loading = !1
                    }
                    ))
                },
                loadBehaviorExcel: function() {
                    var e = this;
                    if (!this.loading) {
                        if (8 == +this.values.searchType)
                            if (this.loginName.split(/[, ]+/).length > 100)
                                return void this.$Message.error(this.$t("proxy.limitTip"));
                        var t = Object(s.a)({}, this.values);
                        for (var a in t)
                            "all" === t[a] && (t[a] = "");
                        Object.assign(t, {
                            lastLoginIp: this.lastLoginIp,
                            beginTime: this.date[0] ? this.$utils.formatDate(this.date[0], "YYYY-MM-DD hh:mm:ss") : "",
                            endTime: this.date[1] ? this.$utils.formatDate(this.date[1], "YYYY-MM-DD hh:mm:ss") : "",
                            highAccount: this.highAccount
                        }),
                        t.searchName = this.loginName,
                        this.loading = !0,
                        this.$download("/user/tob/exportBehaviorUser", t).then((function() {
                            e.modal1 = !0
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
                loadexcel: function() {
                    var e = this;
                    if ((this.loading = !0,
                    8 == +this.values.searchType) && this.loginName.split(/[, ]+/).length > 100)
                        return void this.$Message.error(this.$t("proxy.limitTip"));
                    var t = Object(s.a)({}, this.values);
                    for (var a in t)
                        "all" === t[a] && (t[a] = "");
                    Object.assign(t, {
                        lastLoginIp: this.lastLoginIp,
                        beginTime: this.date[0] ? this.$utils.formatDate(this.date[0], "YYYY-MM-DD hh:mm:ss") : "",
                        endTime: this.date[1] ? this.$utils.formatDate(this.date[1], "YYYY-MM-DD hh:mm:ss") : "",
                        highAccount: this.highAccount
                    }),
                    t.searchName = this.loginName,
                    this.loading = !0,
                    this.$download("/user/tob/exportUser", t).then((function() {
                        e.modal1 = !0
                    }
                    )).catch((function(t) {
                        e.$Message.error(t.message)
                    }
                    )).finally((function() {
                        e.loading = !1,
                        e.excelloading = !1
                    }
                    ))
                },
                getPageconfig: function() {
                    var e = this;
                    return this.loading = !0,
                    this.$get("/user/tob/getSelectValue").then((function(t) {
                        e.pageConfig = t,
                        e.config.level.length = 1;
                        for (var a = 1; a <= t.levelMap; a++)
                            e.config.level.push({
                                key: a,
                                name: a
                            });
                        for (var i in e.config.rankLevel.length = 1,
                        t.userRankMap)
                            e.config.rankLevel.push({
                                key: i,
                                name: t.userRankMap[i]
                            })
                    }
                    ))
                },
                clearDate: function() {
                    this.date = this.$utils.getTodayArr()
                },
                change: function(e, t) {
                    var a = Object(i.a)(e, 2)
                      , s = a[0]
                      , r = a[1]
                      , n = this.$utils.formatDate(this.lastDate[0]) || "1990-01-01 00:00:00"
                      , o = this.$utils.formatDate(this.lastDate[1]) || "1990-01-01 23:59:59";
                    "date" === t && (this.date = [s.replace("00:00:00", n.split(" ")[1]), r.replace("00:00:00", o.split(" ")[1])]),
                    this.lastDate = this.date
                }
            },
            beforeRouteEnter: function(e, t, a) {
                t.path.includes("/userdetail") || sessionStorage.removeItem("proxycachequery"),
                a()
            },
            mounted: function() {
                var e = this;
                if (sessionStorage.proxycachequery) {
                    var t = JSON.parse(sessionStorage.proxycachequery);
                    for (var a in this.page = t.page,
                    this.limit = t.limit,
                    this.loginName = t.loginName,
                    this.lastLoginIp = t.lastLoginIp,
                    this.date = [t.beginTime, t.endTime],
                    this.highAccount = t.highAccount,
                    this.values)
                        this.values[a] = t[a] || "all";
                    sessionStorage.removeItem("proxycachequery")
                }
                this.$route.query.transfer && (this.loginName = this.$route.query.transfer),
                this.getPageconfig().then((function() {
                    e.getData().then((function() {
                        if (e.$route.query.transfer) {
                            var t = e.dataList.find((function(t) {
                                return t.loginName === e.$route.query.transfer
                            }
                            ));
                            t && (e.proxytransferdetail = t)
                        }
                    }
                    ))
                }
                )).finally((function() {
                    e.loading = !1
                }
                ))
            },
            watch: {
                checkedNamesHeader: function(e) {
                    this.checkedNames = e ? this.dataList.map((function(e) {
                        return e.id
                    }
                    )) : []
                }
            }
        }
          , g = m
          , f = (a("c8b0"),
        a("2877"))
          , v = Object(f.a)(g, (function() {
            var e = this
              , t = e.$createElement
              , a = e._self._c || t;
            return a("div", {
                staticClass: "outerbg"
            }, [e.loading ? a("Spin", {
                attrs: {
                    fix: ""
                }
            }) : e._e(), a("Nav", {
                attrs: {
                    nav: [{
                        path: "/proxyuser",
                        name: e.nowpagetitle
                    }]
                }
            }), a("div", {
                staticClass: "proxyuser"
            }, [a("nav", [a("div", {
                staticClass: "searchbar"
            }, [e._l(e.config, (function(t, i) {
                return a("Select", {
                    key: i,
                    style: {
                        width: "searchType" === i ? "200px" : "150px"
                    },
                    model: {
                        value: e.values[i],
                        callback: function(t) {
                            e.$set(e.values, i, t)
                        },
                        expression: "values[key]"
                    }
                }, e._l(t, (function(t) {
                    return a("Option", {
                        key: t.key,
                        attrs: {
                            value: t.key
                        }
                    }, [e._v(e._s(t.name))])
                }
                )), 1)
            }
            )), a("Input", {
                style: {
                    width: 8 == +e.values.searchType ? "330px" : "160px"
                },
                attrs: {
                    placeholder: 8 == +e.values.searchType ? e.$t("proxy.loginNameAllTips") : ""
                },
                model: {
                    value: e.loginName,
                    callback: function(t) {
                        e.loginName = t
                    },
                    expression: "loginName"
                }
            })], 2), e.showhightsearch ? a("div", {
                staticClass: "searchbar"
            }, [a("Select", {
                staticStyle: {
                    width: "150px"
                },
                model: {
                    value: e.values.dateType,
                    callback: function(t) {
                        e.$set(e.values, "dateType", t)
                    },
                    expression: "values.dateType"
                }
            }, e._l(e.higher.dateType, (function(t) {
                return a("Option", {
                    key: t.key,
                    attrs: {
                        value: t.key
                    }
                }, [e._v(e._s(t.name))])
            }
            )), 1), a("DatePicker", {
                staticStyle: {
                    width: "330px"
                },
                attrs: {
                    type: "datetimerange",
                    editable: !1,
                    options: e.dateoptions,
                    placeholder: e.$t("proxy.gameTimeTips")
                },
                on: {
                    "on-change": e.change
                },
                model: {
                    value: e.date,
                    callback: function(t) {
                        e.date = t
                    },
                    expression: "date"
                }
            }), a("Button", [e._v(e._s(e.$t("proxy.lastIp")))]), a("Input", {
                staticStyle: {
                    width: "160px"
                },
                model: {
                    value: e.lastLoginIp,
                    callback: function(t) {
                        e.lastLoginIp = t
                    },
                    expression: "lastLoginIp"
                }
            })], 1) : e._e(), a("div", {
                staticClass: "functionbar"
            }, [a("Button", {
                attrs: {
                    type: "primary",
                    icon: "ios-search"
                },
                on: {
                    click: function(t) {
                        return e.getData(!0, !0)
                    }
                }
            }, [e._v(e._s(e.$t("generalizeUrl.search")))]), a("Button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(t) {
                        e.showhightsearch = !e.showhightsearch
                    }
                }
            }, [e._v(e._s(e.$t("generalizeUrl.high")))]), a("Button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.reset
                }
            }, [e._v(e._s(e.$t("generalizeUrl.cleanSearch")))]), e.pageauthoritys.add ? a("Button", {
                attrs: {
                    type: "primary",
                    icon: "ios-add"
                },
                on: {
                    click: function(t) {
                        e.showadduser = !0
                    }
                }
            }, [e._v(e._s(e.$t("proxy.add")))]) : e._e(), a("Poptip", {
                attrs: {
                    confirm: "",
                    title: e.$t("exportActiveExcelTips")
                },
                on: {
                    "on-ok": e.loadBehaviorExcel
                }
            }, [a("Button", {
                attrs: {
                    type: "primary",
                    loading: e.excelloading
                }
            }, [e._v(e._s(e.$t("exportActiveExcel")))])], 1), a("Dropdown", {
                staticStyle: {
                    "margin-left": "-10px"
                }
            }, [a("Button", {
                attrs: {
                    type: "primary"
                }
            }, [a("Icon", {
                attrs: {
                    type: "md-arrow-dropdown"
                }
            })], 1), a("DropdownMenu", {
                attrs: {
                    slot: "list"
                },
                slot: "list"
            }, [a("DropdownItem", {
                nativeOn: {
                    click: function(t) {
                        return e.loadexcel()
                    }
                }
            })], 1)], 1), e.pageauthoritys.batchNotes ? a("Button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: e.openRemark
                }
            }, [e._v(e._s(e.$t("proxy.batchNotes")))]) : e._e()], 1)]), a("table", [a("caption", {
                staticClass: "path"
            }, [e._v(" " + e._s(e.$t("proxy.pathUrl")) + "： "), a("span", {
                on: {
                    click: function(t) {
                        e.loginName = "",
                        e.getData(!0, !0)
                    }
                }
            }, [e._v(e._s(e.$t("proxy.Tingzhu")))]), e._l(e.path, (function(t) {
                return [e._v(" / "), a("span", {
                    key: t,
                    on: {
                        click: function(a) {
                            e.highAccount = t,
                            e.loginName = "",
                            e.getData(!0)
                        }
                    }
                }, [e._v(e._s(t))])]
            }
            ))], 2), a("tr", [a("th", [a("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.checkedNamesHeader,
                    expression: "checkedNamesHeader"
                }],
                attrs: {
                    type: "checkbox",
                    value: "true"
                },
                domProps: {
                    checked: Array.isArray(e.checkedNamesHeader) ? e._i(e.checkedNamesHeader, "true") > -1 : e.checkedNamesHeader
                },
                on: {
                    change: function(t) {
                        var a = e.checkedNamesHeader
                          , i = t.target
                          , s = !!i.checked;
                        if (Array.isArray(a)) {
                            var r = "true"
                              , n = e._i(a, r);
                            i.checked ? n < 0 && (e.checkedNamesHeader = a.concat([r])) : n > -1 && (e.checkedNamesHeader = a.slice(0, n).concat(a.slice(n + 1)))
                        } else
                            e.checkedNamesHeader = s
                    }
                }
            })]), e._l(17, (function(t) {
                return a("th", {
                    key: t
                }, [e._v(e._s(e.$t("proxy.proxyTable" + t)))])
            }
            ))], 2), e._l(e.dataList, (function(t, i) {
                return a("tr", {
                    key: i
                }, [a("td", [a("input", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: e.checkedNames,
                        expression: "checkedNames"
                    }],
                    attrs: {
                        type: "checkbox"
                    },
                    domProps: {
                        value: t.id,
                        checked: Array.isArray(e.checkedNames) ? e._i(e.checkedNames, t.id) > -1 : e.checkedNames
                    },
                    on: {
                        change: function(a) {
                            var i = e.checkedNames
                              , s = a.target
                              , r = !!s.checked;
                            if (Array.isArray(i)) {
                                var n = t.id
                                  , o = e._i(i, n);
                                s.checked ? o < 0 && (e.checkedNames = i.concat([n])) : o > -1 && (e.checkedNames = i.slice(0, o).concat(i.slice(o + 1)))
                            } else
                                e.checkedNames = r
                        }
                    }
                })]), a("td", [e._v(e._s(i + 1))]), a("td", [a("span", {
                    staticClass: "proxyInfo",
                    attrs: {
                        type: "text",
                        size: "small"
                    },
                    on: {
                        click: function(a) {
                            return e.showDetailHandler(t)
                        }
                    }
                }, [e._v(e._s(t.userName))])]), a("td", [e._v(e._s(e.formatRegisterInfo(t)))]), a("td", {
                    style: {
                        color: t.status === e.$t("proxy.Using") ? "green" : "red"
                    }
                }, [e._v(e._s(t.status))]), a("td", [e._v(e._s(e.$t("proxy.Agent")))]), a("td", [a("Button", {
                    attrs: {
                        size: "small"
                    },
                    on: {
                        click: function(a) {
                            return e.showThirdDetailHandler(t)
                        }
                    }
                }, [e._v(e._s(e.$t("proxy.Check")))])], 1), a("td", [e._v(e._s(t.subCount))]), a("td", [e._v(e._s("default" === t.highAccount ? e.$t("proxy.Tingzhu") : t.highAccount))]), a("td", [a("Button", {
                    attrs: {
                        type: "text",
                        size: "small"
                    },
                    on: {
                        click: function(a) {
                            e.pathDetail = t
                        }
                    }
                }, [e._v(e._s(t.level))])], 1), a("td", [e._v(e._s(t.rankLevel))]), a("td", [e._v(" " + e._s(t.loginNum || 0) + " ")]), a("td", [e._v(e._s(t.loginIp))]), a("td", [e._v(e._s(t.loginArea))]), a("td", [e._v(e._s(t.lastLoginTime))]), a("td", [e._v(e._s(t.createTime))]), a("td", [e.pageauthoritys.remark ? a("Button", {
                    staticClass: "mintext",
                    staticStyle: {
                        width: "100px"
                    },
                    attrs: {
                        type: t.remark ? "text" : "default",
                        size: "small"
                    },
                    on: {
                        click: function(a) {
                            return e.remarkHandler(t)
                        }
                    }
                }, [e._v(e._s(t.remark || e.$t("proxy.AddRemark")))]) : a("div", [a("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.remark,
                        expression: "item.remark"
                    }]
                }, [a("Tooltip", {
                    attrs: {
                        "max-width": "400",
                        content: t.remark
                    }
                }, [a("Button", [e._v(" " + e._s(e.$t("proxy.userRemark")))])], 1)], 1)])], 1), a("td", [e.pageauthoritys.detail ? a("Button", {
                    attrs: {
                        title: e.$t("proxy.details"),
                        size: "small",
                        icon: "md-information-circle"
                    },
                    on: {
                        click: function(a) {
                            return e.toDetail(t)
                        }
                    }
                }) : e._e(), e.pageauthoritys.changeStatus ? a("Button", {
                    attrs: {
                        title: e.$t("proxy.usersettings"),
                        size: "small",
                        icon: "ios-cog"
                    },
                    on: {
                        click: function(a) {
                            e.operationDetail = t
                        }
                    }
                }) : e._e(), a("Button", {
                    attrs: {
                        title: e.$t("proxy.cashTransactionRecords"),
                        size: "small",
                        icon: "ios-list-box"
                    },
                    on: {
                        click: function(a) {
                            return e.$router.push({
                                path: "/logpayflow",
                                query: {
                                    loginName: t.userName
                                }
                            })
                        }
                    }
                }), e.pageauthoritys.detail ? a("Button", {
                    attrs: {
                        title: e.$t("proxy.viewSubordinates"),
                        size: "small",
                        icon: "ios-download"
                    },
                    on: {
                        click: function(a) {
                            e.highAccount = t.userName,
                            e.loginName = "",
                            e.getData(!0)
                        }
                    }
                }) : e._e(), e.pageauthoritys.removeProxy ? a("Button", {
                    attrs: {
                        title: e.$t("proxy.agentMigration"),
                        size: "small",
                        icon: "ios-share-alt"
                    },
                    on: {
                        click: function(a) {
                            e.proxytransferdetail = t
                        }
                    }
                }) : e._e(), e.pageauthoritys.proxyLines ? a("Button", {
                    attrs: {
                        title: e.$t("proxy.downLoadLine"),
                        size: "small",
                        icon: "md-download"
                    },
                    on: {
                        click: function(a) {
                            return e.downloadline(t)
                        }
                    }
                }) : e._e()], 1)])
            }
            ))], 2), a("div", {
                staticClass: "bottom"
            }, [a("div", {
                staticClass: "static"
            }, [e._v(e._s(e._f("lang")("pageDate", {
                total: e.total,
                page: e.page,
                allpage: Math.ceil(e.total / e.limit)
            })))]), a("Page", {
                staticStyle: {
                    float: "right"
                },
                attrs: {
                    current: e.page,
                    total: e.total,
                    "show-sizer": "",
                    "show-elevator": "",
                    "page-size-opts": [10, 20, 50, 100]
                },
                on: {
                    "on-change": e.pageChange,
                    "on-page-size-change": e.pageSizeChange
                }
            })], 1), a("Modal", {
                attrs: {
                    title: e.$t("proxy.warnTips"),
                    "ok-text": e.$t("proxy.goNow"),
                    "cancel-text": e.$t("proxy.stayPage")
                },
                on: {
                    "on-ok": e.handledoExcel
                },
                model: {
                    value: e.modal1,
                    callback: function(t) {
                        e.modal1 = t
                    },
                    expression: "modal1"
                }
            }, [a("p", [e._v(e._s(e._f("lang")("proxy.exportingTip")))])]), a("thirdAmount", {
                model: {
                    value: e.thirdDetail,
                    callback: function(t) {
                        e.thirdDetail = t
                    },
                    expression: "thirdDetail"
                }
            }), a("operation", {
                on: {
                    upfresh: function(t) {
                        return e.getData(!0)
                    }
                },
                model: {
                    value: e.operationDetail,
                    callback: function(t) {
                        e.operationDetail = t
                    },
                    expression: "operationDetail"
                }
            }), a("level", {
                model: {
                    value: e.pathDetail,
                    callback: function(t) {
                        e.pathDetail = t
                    },
                    expression: "pathDetail"
                }
            }), a("proxytransfer", {
                on: {
                    reload: function(t) {
                        return e.getData(!0, !0)
                    }
                },
                model: {
                    value: e.proxytransferdetail,
                    callback: function(t) {
                        e.proxytransferdetail = t
                    },
                    expression: "proxytransferdetail"
                }
            }), a("userDetail", {
                on: {
                    showtransfer: e.fna
                },
                model: {
                    value: e.userdrawerDetail,
                    callback: function(t) {
                        e.userdrawerDetail = t
                    },
                    expression: "userdrawerDetail"
                }
            }), a("addnewuser", {
                on: {
                    upfresh: function(t) {
                        return e.getData(!0)
                    }
                },
                model: {
                    value: e.showadduser,
                    callback: function(t) {
                        e.showadduser = t
                    },
                    expression: "showadduser"
                }
            }), a("remarkModel", {
                on: {
                    upfresh: function(t) {
                        return e.getData(!0)
                    }
                },
                model: {
                    value: e.remarkUser,
                    callback: function(t) {
                        e.remarkUser = t
                    },
                    expression: "remarkUser"
                }
            })], 1)], 1)
        }
        ), [], !1, null, null, null);
        t.default = v.exports
    },
    "9f23": function(e, t, a) {},
    c8b0: function(e, t, a) {
        "use strict";
        a("9f23")
    }
}]);
