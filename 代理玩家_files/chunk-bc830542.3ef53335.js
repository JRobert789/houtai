(window.webpackJsonp = window.webpackJsonp || []).push([["chunk-bc830542"], {
    "0b92": function(e, a, n) {
        "use strict";
        a.a = {
            password: {
                reg: /^[A-Za-z0-9]{6,20}$/
            },
            username: {
                reg: /^(?!_)(?!.*?_$)(?!.*(_).*\1)[A-Za-z0-9_]{6,20}$/,
                isNumber: /^\d+$/g
            },
            No2: {
                pattern: /^(([1-9]{1}\d{0,9})|(0{1}))(\.\d{0,2})?$/,
                message: "请填写正确的金额"
            },
            email: {
                pattern: /^[A-Za-z0-9\u4e00-\u9fa5-_.]+@[a-zA-Z0-9_-]+(\.[a-zA-Z_-]+)+$/
            },
            hostName: {
                pattern: /^[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}$/
            }
        }
    },
    "6bba": function(e, a, n) {
        "use strict";
        var o = n("b6f9")
          , p = {
            name: "regionPhone",
            props: {
                value: String
            },
            data: function() {
                return {
                    region: o
                }
            },
            computed: {
                value2: {
                    get: function() {
                        return this.value
                    },
                    set: function(e) {
                        this.$emit("input", e)
                    }
                }
            },
            methods: {
                comBg: function(e) {
                    return {
                        backgroundPosition: e
                    }
                }
            }
        }
          , t = p
          , r = (n("bb5c"),
        n("2877"))
          , i = Object(r.a)(t, (function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                staticClass: "regionPhone"
            }, [n("Select", {
                staticStyle: {
                    width: "80px"
                },
                attrs: {
                    filterable: "",
                    clearable: "",
                    placeholder: e.$t("region")
                },
                model: {
                    value: e.value2,
                    callback: function(a) {
                        e.value2 = a
                    },
                    expression: "value2"
                }
            }, e._l(e.region, (function(a, o) {
                return n("Option", {
                    key: o,
                    attrs: {
                        value: a.code,
                        label: a.code
                    }
                }, [n("span", {
                    staticClass: "region_icon",
                    style: e.comBg(a && a.flag)
                }), n("span", [e._v(" " + e._s(a.code) + " " + e._s(a.name) + " ")])])
            }
            )), 1)], 1)
        }
        ), [], !1, null, null, null);
        a.a = i.exports
    },
    "725d": function(e, a, n) {
        "use strict";
        n("9789")
    },
    7399: function(e, a, n) {},
    9789: function(e, a, n) {},
    b6f9: function(e) {
        e.exports = JSON.parse('[{"name":"Afghanistan (‫افغانستان‬‎)","code":"+93","flag":"-32px 0px"},{"name":"Albania (Shqipëri)","code":"+355","flag":"-80px 0px"},{"name":"Algeria (‫الجزائر‬‎)","code":"+213","flag":"-112px -33px"},{"name":"American Samoa","code":"+1684","flag":"-160px 0px"},{"name":"Andorra","code":"+376","flag":"0px 0px"},{"name":"Angola","code":"+244","flag":"-128px 0px"},{"name":"Anguilla","code":"+1264","flag":"-64px 0px"},{"name":"Antigua and Barbuda","code":"+1268","flag":"-48px 0px"},{"name":"Argentina","code":"+54","flag":"-144px 0px"},{"name":"Armenia (Հայաստան)","code":"+374","flag":"-96px 0px"},{"name":"Aruba","code":"+297","flag":"-208px 0px"},{"name":"Ascension Island","code":"+290","flag":"-96px 0px"},{"name":"Australia","code":"+61","flag":"-192px 0px"},{"name":"Austria (Österreich)","code":"+43","flag":"-176px 0px"},{"name":"Azerbaijan (Azərbaycan)","code":"+994","flag":"-240px 0px"},{"name":"Bahrain (‫البحرين‬‎)","code":"+973","flag":"-80px -11px"},{"name":"Bangladesh (বাংলাদেশ)","code":"+880","flag":"-16px -11px"},{"name":"Barbados","code":"+1246","flag":"0px -11px"},{"name":"Belarus (Беларусь)","code":"+375","flag":"-256px -11px"},{"name":"Belgium (België)","code":"+32","flag":"-32px -11px"},{"name":"Belize","code":"+501","flag":"0px -22px"},{"name":"Benin (Bénin)","code":"+229","flag":"-112px -11px"},{"name":"Bermuda","code":"+1441","flag":"-128px -11px"},{"name":"Bhutan (འབྲུག)","code":"+975","flag":"-208px -11px"},{"name":"Bolivia","code":"+591","flag":"-160px -11px"},{"name":"Bosnia and Herzegovina (Босна и Херцеговина)","code":"+387","flag":"-256px 0px"},{"name":"Botswana","code":"+267","flag":"-240px -11px"},{"name":"Brazil (Brasil)","code":"+55","flag":"-176px -11px"},{"name":"British Indian Ocean Territory","code":"+246","flag":"-80px -66px"},{"name":"British Virgin Islands","code":"+1284","flag":"-96px -154px"},{"name":"Brunei Darussalam","code":"+673","flag":"-144px -11px"},{"name":"Bulgaria (България)","code":"+359","flag":"-64px -11px"},{"name":"Burkina Faso","code":"+226","flag":"-48px -11px"},{"name":"Burundi (Uburundi)","code":"+257","flag":"-96px -11px"},{"name":"Cambodia (កម្ពុជា)","code":"+855","flag":"0px -77px"},{"name":"Cameroon (Cameroun)","code":"+237","flag":"-160px -22px"},{"name":"Canada","code":"+1","flag":"-16px -22px"},{"name":"Cape Verde (Kabu Verdi)","code":"+238","flag":"-240px -22px"},{"name":"Caribbean Netherlands","code":"+599","flag":"0% 0%"},{"name":"Cayman Islands","code":"+1345","flag":"-128px -77px"},{"name":"Central African Republic (République centrafricaine)","code":"+236","flag":"-64px -22px"},{"name":"Chad (Tchad)","code":"+235","flag":"-240px -132px"},{"name":"Chile","code":"+56","flag":"-144px -22px"},{"name":"Colombia","code":"+57","flag":"-192px -22px"},{"name":"Comoros (‫جزر القمر‬‎)","code":"+269","flag":"-32px -77px"},{"name":"Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)","code":"+243","flag":"-48px -22px"},{"name":"Congo (Republic) (Congo-Brazzaville)","code":"+242","flag":"-80px -22px"},{"name":"Cook Islands","code":"+682","flag":"-128px -22px"},{"name":"Costa Rica","code":"+506","flag":"-208px -22px"},{"name":"Côte d’Ivoire","code":"+225","flag":"-112px -22px"},{"name":"Croatia (Hrvatska)","code":"+385","flag":"-192px -55px"},{"name":"Cuba","code":"+53","flag":"-224px -22px"},{"name":"Curaçao","code":"+599","flag":"-256px -22px"},{"name":"Cyprus (Κύπρος)","code":"+357","flag":"0px -33px"},{"name":"Czech Republic (Česká republika)","code":"+420","flag":"-16px -33px"},{"name":"Denmark (Danmark)","code":"+45","flag":"-64px -33px"},{"name":"Djibouti","code":"+253","flag":"-48px -33px"},{"name":"Dominica","code":"+1767","flag":"-80px -33px"},{"name":"Dominican Republic (República Dominicana)","code":"+1","flag":"-96px -33px"},{"name":"Ecuador","code":"+593","flag":"-128px -33px"},{"name":"Egypt (‫مصر‬‎)","code":"+20","flag":"-160px -33px"},{"name":"El Salvador","code":"+503","flag":"-160px -132px"},{"name":"Equatorial Guinea (Guinea Ecuatorial)","code":"+240","flag":"-32px -55px"},{"name":"Eritrea","code":"+291","flag":"-208px -33px"},{"name":"Estonia (Eesti)","code":"+372","flag":"-144px -33px"},{"name":"Ethiopia","code":"+251","flag":"-240px -33px"},{"name":"Falkland Islands (Islas Malvinas)","code":"+500","flag":"-32px -44px"},{"name":"Faroe Islands (Føroyar)","code":"+298","flag":"-64px -44px"},{"name":"Fiji","code":"+679","flag":"-16px -44px"},{"name":"Finland (Suomi)","code":"+358","flag":"0px -44px"},{"name":"France","code":"+33","flag":"-80px -44px"},{"name":"French Guiana (Guyane française)","code":"+594","flag":"-160px -44px"},{"name":"French Polynesia (Polynésie française)","code":"+689","flag":"-112px -110px"},{"name":"Gabon","code":"+241","flag":"-96px -44px"},{"name":"Georgia (საქართველო)","code":"+995","flag":"-144px -44px"},{"name":"Germany (Deutschland)","code":"+49","flag":"-32px -33px"},{"name":"Ghana (Gaana)","code":"+233","flag":"-208px -44px"},{"name":"Gibraltar","code":"+350","flag":"-224px -44px"},{"name":"Greece (Ελλάδα)","code":"+30","flag":"-48px -55px"},{"name":"Greenland (Kalaallit Nunaat)","code":"+299","flag":"-240px -44px"},{"name":"Grenada","code":"+1473","flag":"-128px -44px"},{"name":"Guadeloupe","code":"+590","flag":"-16px -55px"},{"name":"Guam","code":"+1671","flag":"-96px -55px"},{"name":"Guatemala","code":"+502","flag":"-80px -55px"},{"name":"Guernsey","code":"+1481","flag":"-192px -44px"},{"name":"Guinea (Guinée)","code":"+224","flag":"0px -55px"},{"name":"Guinea-Bissau (Guiné Bissau)","code":"+245","flag":"-112px -55px"},{"name":"Guyana","code":"+592","flag":"-128px -55px"},{"name":"Haiti","code":"+509","flag":"-208px -55px"},{"name":"Honduras","code":"+504","flag":"-176px -55px"},{"name":"Hungary (Magyarország)","code":"+36","flag":"-224px -55px"},{"name":"Iceland (Ísland)","code":"+354","flag":"-128px -66px"},{"name":"India (भारत)","code":"+91","flag":"-64px -66px"},{"name":"Indonesia","code":"+62","flag":"-256px -55px"},{"name":"Iran (‫ایران‬‎)","code":"+98","flag":"-112px -66px"},{"name":"Iraq (‫العراق‬‎)","code":"+964","flag":"-96px -66px"},{"name":"Ireland","code":"+353","flag":"0px -66px"},{"name":"Isle of Man","code":"+44","flag":"-48px -66px"},{"name":"Israel (‫ישראל‬‎)","code":"+972","flag":"-16px -66px"},{"name":"Italy (Italia)","code":"+39","flag":"-144px -66px"},{"name":"Jamaica","code":"+1876","flag":"-192px -66px"},{"name":"Japan (にほんこく)","code":"+81","flag":"-224px -66px"},{"name":"Jersey","code":"+44","flag":"-176px -66px"},{"name":"Jordan (‫الأردن‬‎)","code":"+962","flag":"-208px -66px"},{"name":"Kazakhstan (Казахстан)","code":"+7","flag":"-144px -77px"},{"name":"Kenya","code":"+254","flag":"-240px -66px"},{"name":"Kiribati","code":"+686","flag":"-16px -77px"},{"name":"Kosovo","code":"+383","flag":"-208px -154px"},{"name":"Kuwait (‫الكويت‬‎)","code":"+965","flag":"-112px -77px"},{"name":"Kyrgyzstan (Кыргызстан)","code":"+996","flag":"-256px -66px"},{"name":"Laos (ລາວ)","code":"+856","flag":"-160px -77px"},{"name":"Latvia (Latvija)","code":"+371","flag":"-32px -88px"},{"name":"Lebanon (‫لبنان‬‎)","code":"+961","flag":"-176px -77px"},{"name":"Lesotho","code":"+266","flag":"-256px -77px"},{"name":"Liberia","code":"+231","flag":"-240px -77px"},{"name":"Libya (‫ليبيا‬‎)","code":"+218","flag":"-48px -88px"},{"name":"Liechtenstein","code":"+423","flag":"-208px -77px"},{"name":"Lithuania (Lietuva)","code":"+370","flag":"0px -88px"},{"name":"Luxembourg","code":"+352","flag":"-16px -88px"},{"name":"Macedonia (FYROM) (Македонија)","code":"+389","flag":"-160px -88px"},{"name":"Madagascar (Madagasikara)","code":"+261","flag":"-128px -88px"},{"name":"Malawi","code":"+265","flag":"-80px -99px"},{"name":"Malaysia","code":"+60","flag":"-112px -99px"},{"name":"Maldives","code":"+960","flag":"-64px -99px"},{"name":"Mali","code":"+223","flag":"-176px -88px"},{"name":"Malta","code":"+356","flag":"-32px -99px"},{"name":"Marshall Islands","code":"+692","flag":"-144px -88px"},{"name":"Martinique","code":"+596","flag":"-256px -88px"},{"name":"Mauritania (‫موريتانيا‬‎)","code":"+222","flag":"0px -99px"},{"name":"Mauritius (Moris)","code":"+230","flag":"-48px -99px"},{"name":"Mayotte","code":"+262","flag":"-240px -154px"},{"name":"Mexico (México)","code":"+52","flag":"-96px -99px"},{"name":"Micronesia","code":"+691","flag":"-48px -44px"},{"name":"Moldova (Republica Moldova)","code":"+373","flag":"-96px -88px"},{"name":"Monaco","code":"+377","flag":"-80px -88px"},{"name":"Mongolia (Монгол)","code":"+976","flag":"-208px -88px"},{"name":"Montenegro (Crna Gora)","code":"+382","flag":"-112px -88px"},{"name":"Montserrat","code":"+1664","flag":"-16px -99px"},{"name":"Morocco (‫المغرب‬‎)","code":"+212","flag":"-64px -88px"},{"name":"Mozambique (Moçambique)","code":"+258","flag":"-128px -99px"},{"name":"Myanmar (Burma) (မြန်မာ)","code":"+95","flag":"-192px -88px"},{"name":"Namibia (Namibië)","code":"+264","flag":"-144px -99px"},{"name":"Nauru","code":"+674","flag":"-16px -110px"},{"name":"Nepal (नेपाल)","code":"+977","flag":"0px -110px"},{"name":"Netherlands (Nederland)","code":"+31","flag":"-240px -99px"},{"name":"New Caledonia (Nouvelle-Calédonie)","code":"+687","flag":"-160px -99px"},{"name":"New Zealand","code":"+64","flag":"-48px -110px"},{"name":"Nicaragua","code":"+505","flag":"-224px -99px"},{"name":"Niger (Nijar)","code":"+227","flag":"-176px -99px"},{"name":"Nigeria","code":"+234","flag":"-208px -99px"},{"name":"Niue","code":"+683","flag":"-32px -110px"},{"name":"Norfolk Island","code":"+672","flag":"-192px -99px"},{"name":"North Korea (조선민주주의인민공화국)","code":"+850","flag":"-64px -77px"},{"name":"Northern Mariana Islands","code":"+1670","flag":"-240px -88px"},{"name":"Norway (Norge)","code":"+47","flag":"-256px -99px"},{"name":"Oman (‫عُمان‬‎)","code":"+968","flag":"-64px -110px"},{"name":"Pakistan (‫پاکستان‬‎)","code":"+92","flag":"-160px -110px"},{"name":"Palau","code":"+680","flag":"0px -121px"},{"name":"Palestine (‫فلسطين‬‎)","code":"+970","flag":"-240px -110px"},{"name":"Panama (Panamá)","code":"+507","flag":"-80px -110px"},{"name":"Papua New Guinea","code":"+675","flag":"-128px -110px"},{"name":"Paraguay","code":"+595","flag":"-16px -121px"},{"name":"Peru (Perú)","code":"+51","flag":"-96px -110px"},{"name":"Philippines","code":"+63","flag":"-144px -110px"},{"name":"Poland (Polska)","code":"+48","flag":"-176px -110px"},{"name":"Portugal","code":"+351","flag":"-256px -110px"},{"name":"Puerto Rico","code":"+1","flag":"-224px -110px"},{"name":"Qatar (‫قطر‬‎)","code":"+974","flag":"-32px -121px"},{"name":"Réunion (La Réunion)","code":"+262","flag":"-48px -121px"},{"name":"Romania (România)","code":"+40","flag":"-64px -121px"},{"name":"Russia (Россия)","code":"+7","flag":"-96px -121px"},{"name":"Rwanda","code":"+250","flag":"-112px -121px"},{"name":"Saint Helena","code":"+290","flag":"-240px -121px"},{"name":"Saint Kitts and Nevis","code":"+1869","flag":"-48px -77px"},{"name":"Saint Lucia","code":"+1758","flag":"-192px -77px"},{"name":"Saint Martin (Saint-Martin)","code":"+590","flag":"0% 0%"},{"name":"Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)","code":"+508","flag":"-192px -110px"},{"name":"Saint Vincent and the Grenadines","code":"+1784","flag":"-64px -154px"},{"name":"Samoa","code":"+685","flag":"-192px -154px"},{"name":"San Marino","code":"+378","flag":"-48px -132px"},{"name":"São Tomé and Príncipe (São Tomé e Príncipe)","code":"+239","flag":"-144px -132px"},{"name":"Saudi Arabia (‫المملكة العربية السعودية‬‎)","code":"+966","flag":"-128px -121px"},{"name":"Senegal (Sénégal)","code":"+221","flag":"-64px -132px"},{"name":"Serbia (Србија)","code":"+381","flag":"-80px -121px"},{"name":"Seychelles","code":"+248","flag":"-160px -121px"},{"name":"Sierra Leone","code":"+232","flag":"-32px -132px"},{"name":"Singapore","code":"+65","flag":"-224px -121px"},{"name":"Sint Maarten","code":"+1721","flag":"-176px -132px"},{"name":"Slovakia (Slovensko)","code":"+421","flag":"-16px -132px"},{"name":"Slovenia (Slovenija)","code":"+386","flag":"-256px -121px"},{"name":"Solomon Islands","code":"+677","flag":"-144px -121px"},{"name":"Somalia (Soomaaliya)","code":"+252","flag":"-80px -132px"},{"name":"South Africa","code":"+27","flag":"-256px -154px"},{"name":"South Korea (대한민국)","code":"+82","flag":"-80px -77px"},{"name":"South Sudan (‫جنوب السودان‬‎)","code":"+211","flag":"-128px -132px"},{"name":"Spain (España)","code":"+34","flag":"-224px -33px"},{"name":"Sri Lanka (ශ්‍රී ලංකාව)","code":"+94","flag":"-224px -77px"},{"name":"Sudan (‫السودان‬‎)","code":"+249","flag":"-192px -121px"},{"name":"Suriname","code":"+597","flag":"-112px -132px"},{"name":"Svalbard and Jan Mayen","code":"+47","flag":"0px -132px"},{"name":"Swaziland","code":"+268","flag":"-208px -132px"},{"name":"Sweden (Sverige)","code":"+46","flag":"-208px -121px"},{"name":"Switzerland (Schweiz)","code":"+41","flag":"-96px -22px"},{"name":"Syria (‫سوريا‬‎)","code":"+963","flag":"-192px -132px"},{"name":"Tajikistan","code":"+992","flag":"-48px -143px"},{"name":"Tanzania","code":"+255","flag":"-208px -143px"},{"name":"Thailand (ไทย)","code":"+66","flag":"-16px -143px"},{"name":"The Bahamas","code":"+1242","flag":"-192px -11px"},{"name":"The Gambia","code":"+220","flag":"-256px -44px"},{"name":"Timor-Leste","code":"+670","flag":"-80px -143px"},{"name":"Togo","code":"+228","flag":"0px -143px"},{"name":"Tokelau","code":"+690","flag":"-64px -143px"},{"name":"Tonga","code":"+676","flag":"-128px -143px"},{"name":"Trinidad and Tobago","code":"+1868","flag":"-160px -143px"},{"name":"Tunisia (‫تونس‬‎)","code":"+216","flag":"-112px -143px"},{"name":"Turkey (Türkiye)","code":"+90","flag":"-144px -143px"},{"name":"Turkmenistan","code":"+993","flag":"-96px -143px"},{"name":"Turks and Caicos Islands","code":"+1649","flag":"-224px -132px"},{"name":"Tuvalu","code":"+688","flag":"-176px -143px"},{"name":"United States","code":"+1","flag":"0px -154px"},{"name":"United Kingdom","code":"+44","flag":"-112px -44px"},{"name":"U.S. Virgin Islands","code":"+1340","flag":"-112px -154px"},{"name":"Uganda","code":"+256","flag":"-240px -143px"},{"name":"Ukraine (Україна)","code":"+380","flag":"-224px -143px"},{"name":"United Arab Emirates (‫الإمارات العربية المتحدة‬‎)","code":"+971","flag":"-16px 0px"},{"name":"Uruguay","code":"+598","flag":"-16px -154px"},{"name":"Uzbekistan (Oʻzbekiston)","code":"+998","flag":"-32px -154px"},{"name":"Vanuatu","code":"+678","flag":"-144px -154px"},{"name":"Vatican City (Città del Vaticano)","code":"+379","flag":"-48px -154px"},{"name":"Venezuela","code":"+58","flag":"-80px -154px"},{"name":"Vietnam (Việt Nam)","code":"+84","flag":"-128px -154px"},{"name":"Wallis and Futuna","code":"+681","flag":"-176px -154px"},{"name":"Yemen (‫اليمن‬‎)","code":"+967","flag":"-224px -154px"},{"name":"Zambia","code":"+260","flag":"-16px -165px"},{"name":"Zimbabwe","code":"+263","flag":"-32px -165px"},{"name":"Åland Islands","code":"+358","flag":"-224px 0px"}]')
    },
    bb5c: function(e, a, n) {
        "use strict";
        n("7399")
    },
    d9f5: function(e, a, n) {
        "use strict";
        n.r(a);
        var o = n("2909")
          , p = n("5530")
          , t = (n("99af"),
        n("d3b7"),
        n("2ca0"),
        n("b680"),
        n("6bba"))
          , r = n("2f62")
          , i = n("0b92")
          , s = function(e, a, n) {
            var o = i.a.username
              , p = o.reg
              , t = o.isNumber;
            p.test(a) && !t.test(a) || n(""),
            n()
        }
          , l = {
            name: "userbaseinfo",
            props: {
                isadd: {
                    default: !1,
                    type: Boolean
                },
                isTest: {
                    default: !1,
                    type: Boolean
                }
            },
            data: function() {
                var e = this;
                return {
                    errmessage: "",
                    form: {
                        highUserName: "",
                        userName: "",
                        password: "",
                        checkLoginPwd: "",
                        payPwd: "",
                        rankLevel: this.isTest ? 8 : 1,
                        remark: "",
                        phone: "",
                        phonePrefix: "",
                        email: ""
                    },
                    rule: Object(p.a)(Object(p.a)({}, this.isadd ? {
                        userName: [{
                            required: !0,
                            message: this.$t("proxy.userNameIsRequired"),
                            trigger: "blur"
                        }, {
                            validator: s,
                            message: this.$t("proxy.userTips"),
                            trigger: "blur"
                        }]
                    } : {}), {}, {
                        password: [].concat(Object(o.a)(this.isadd ? [{
                            required: !0,
                            message: this.$t("proxy.passwordIsRequired"),
                            trigger: "blur"
                        }] : []), [{
                            pattern: i.a.password.reg,
                            message: this.$t("proxy.passwordTips"),
                            trigger: "blur"
                        }]),
                        checkLoginPwd: [{
                            validator: function() {
                                return e.form.password === e.form.checkLoginPwd
                            },
                            message: this.$t("proxy.confirmPasswordErrorTip"),
                            trigger: "blur"
                        }],
                        payPwd: [{
                            pattern: /^\d{4}$/,
                            message: this.$t("proxy.payPasErrorTip"),
                            trigger: "blur"
                        }],
                        phone: [{
                            pattern: /^\d{5,20}$/g,
                            message: this.$t("proxy.phoneErrorTip"),
                            trigger: "blur"
                        }],
                        email: [{
                            pattern: i.a.email.pattern,
                            message: this.$t("sysrelation.emailErrorTip"),
                            trigger: "blur"
                        }]
                    }),
                    initaddObj: {},
                    updateObj: {},
                    rebate: {},
                    questionList: [],
                    loading: !1,
                    isTest2: !1,
                    bindga: !1,
                    isBindGoogle: !1
                }
            },
            computed: {
                isDefault: function() {
                    return !(this.isTest2 || !this.updateObj.result || "default" !== this.updateObj.result.user.userName)
                },
                unchange: function() {
                    if (this.isTest2) {
                        if (this.updateObj.user)
                            return !this.isadd
                    } else if (this.updateObj.result)
                        return !this.isadd;
                    return !1
                },
                formDisabledByProxyUser: function() {
                    var e = this.buttonMap["/proxyuser"];
                    return !(this.isadd || !this.$route.query.userid || !e || e.update)
                }
            },
            methods: Object(p.a)(Object(p.a)({}, Object(r.b)("user", ["getPublicKey"])), {}, {
                unbindHandler: function() {
                    var e = this;
                    this.loading = !0,
                    this.$post("/user/tob/unBindGA", {
                        username: this.form.userName
                    }).then((function() {
                        e.isBindGoogle = !1,
                        e.$Message.success(e.$t("proxy.unbindSuccess"))
                    }
                    )).catch((function(a) {
                        e.$Message.error(a.message)
                    }
                    )).finally((function() {
                        e.loading = !1
                    }
                    ))
                },
                handleSubmit: function(e) {
                    var a = this;
                    this.$refs[e].validate((function(e) {
                        e && (a.isadd ? a.isTest2 ? a.addTest() : a.add() : a.isTest2 ? a.updateTest() : a.update())
                    }
                    ))
                },
                handleReset: function(e) {
                    if (this.$refs[e].resetFields(),
                    !this.isadd) {
                        var a = this.updateObj;
                        Object.assign(this.form, {
                            highUserName: a.highUserName,
                            userName: a.userName,
                            realName: a.realName,
                            email: a.email
                        })
                    }
                },
                initadd: function() {
                    var e = this
                      , a = this.isTest2 ? "/user/lotTestUser/initAddApi" : "user/lotUser/initAddApi";
                    this.$get(a, {
                        highUserName: ""
                    }).then((function(a) {
                        e.initaddObj = a
                    }
                    ))
                },
                initupdate: function() {
                    var e = this;
                    this.loading = !0;
                    var a = this.isTest2 ? "/user/lotTestUser/initUpdateApi" : "/user/tob/initUpdateApi";
                    this.$post(a, {
                        userId: this.$route.query.userid
                    }).then((function(a) {
                        e.updateObj = a,
                        e.isBindGoogle = !0 === a.isKey,
                        Object.assign(e.form, {
                            highUserName: a.highUserName,
                            userName: a.userName,
                            realName: a.realName,
                            rankLevel: +a.rankLevel,
                            remark: a.remark,
                            phone: a.phone,
                            phonePrefix: a.phonePrefix,
                            email: a.email
                        })
                    }
                    )).finally((function() {
                        e.loading = !1
                    }
                    ))
                },
                add: function() {
                    var e = this;
                    if (!this.errmessage) {
                        this.loading = !0;
                        var a = Object(p.a)({}, this.form);
                        delete a.encryptedList;
                        var n = this.isTest ? "/user/test/tob/saveTestUser" : "/user/tob/saveUser";
                        this.getPublicKey().then((function(o) {
                            return a.password = o(a.password),
                            a.checkLoginPwd = "",
                            a.phonePrefix = a.phonePrefix || "",
                            a.payPwd && (a.payPwd = o(a.payPwd)),
                            e.$post(n, a)
                        }
                        )).then((function() {
                            e.$Message.success("添加成功"),
                            e.$emit("upfresh"),
                            e.handleReset("form")
                        }
                        )).catch((function(a) {
                            e.$Message.error(a.message)
                        }
                        )).finally((function() {
                            e.loading = !1
                        }
                        ))
                    }
                },
                addTest: function() {
                    var e = this;
                    this.loading = !0;
                    var a = Object(p.a)({}, this.form);
                    for (var n in delete a.encryptedList,
                    a)
                        n.startsWith("rebate") && (a[n] = Math.round(100 * a[n]));
                    a.isDemo = 2,
                    a.oper = "add",
                    a.nickName = a.realName,
                    this.$post("/user/lotTestUser/saveUser", a).then((function() {
                        e.$Message.success("添加成功"),
                        e.handleReset("form"),
                        e.$emit("upfresh")
                    }
                    )).catch((function(a) {
                        e.$Message.error(a.message)
                    }
                    )).finally((function() {
                        e.loading = !1
                    }
                    ))
                },
                update: function() {
                    var e = this;
                    this.loading = !0;
                    var a = Object(p.a)({}, this.form);
                    delete a.encryptedList,
                    this.getPublicKey().then((function(n) {
                        return a.password && (a.password = n(a.password)),
                        a.checkLoginPwd = "",
                        a.payPwd && (a.payPwd = n(a.payPwd)),
                        a.oper = "update",
                        a.phonePrefix = a.phonePrefix || "",
                        a.id = e.updateObj.id,
                        e.$route.query.isTest ? a.isDemo = 2 : a.isDemo = 0,
                        e.$post("/user/tob/updateUserInfo", a)
                    }
                    )).then((function() {
                        e.$Message.success(e.$t("changeSuccess"))
                    }
                    )).catch((function(a) {
                        e.$Message.error(a.message)
                    }
                    )).finally((function() {
                        e.loading = !1
                    }
                    ))
                },
                updateTest: function() {
                    var e = this;
                    this.loading = !0;
                    var a = Object(p.a)({}, this.form);
                    delete a.encryptedList,
                    a.isDemo = 2,
                    a.oper = "update",
                    a.id = this.updateObj.id,
                    a.nickName = a.realName,
                    this.$post("/user/lotTestUser/updateUser", a).then((function() {
                        e.$Message.success(e.$t("changeSuccess"))
                    }
                    )).catch((function(a) {
                        e.$Message.error(a.message)
                    }
                    )).finally((function() {
                        e.loading = !1
                    }
                    ))
                },
                getUserRebate: function() {
                    var e = this;
                    if (this.form.highUserName.length) {
                        var a = this.isTest2 ? "/user/lotTestUser/getUserRebate" : "/user/tob/checkUserExist";
                        this.$get(a, {
                            userName: this.form.highUserName
                        }).then((function(a) {
                            a || (e.$Message.error("代理不存在"),
                            e.form.highUserName = ""),
                            e.isTest2 && (a.curRebate = a,
                            a.site = {}),
                            e.errmessage = ""
                        }
                        )).catch((function(a) {
                            e.errmessage = a.message,
                            e.$Message.error(a.message)
                        }
                        ))
                    } else
                        this.errmessage = ""
                },
                sortRebate: function(e) {
                    return +e.toFixed(1) || 0
                }
            }),
            components: {
                region: t.a
            },
            mounted: function() {
                this.isadd || this.initupdate()
            }
        }
          , d = l
          , x = (n("725d"),
        n("2877"))
          , c = Object(x.a)(d, (function() {
            var e = this
              , a = e.$createElement
              , n = e._self._c || a;
            return n("div", {
                staticClass: "userbaseinfo"
            }, [e.loading ? n("Spin", {
                attrs: {
                    fix: ""
                }
            }) : e._e(), n("Form", {
                ref: "form",
                attrs: {
                    model: e.form,
                    "label-position": "right",
                    rules: e.rule,
                    "label-width": 200,
                    disabled: e.formDisabledByProxyUser
                }
            }, [e.isTest ? e._e() : n("FormItem", {
                attrs: {
                    prop: "highUserName",
                    label: e.$t("proxy.addTips"),
                    error: e.errmessage
                }
            }, [n("Row", [n("i-col", {
                attrs: {
                    span: "6"
                }
            }, [n("Input", {
                attrs: {
                    disabled: !e.isadd
                },
                on: {
                    "on-blur": function(a) {
                        return e.getUserRebate()
                    }
                },
                model: {
                    value: e.form.highUserName,
                    callback: function(a) {
                        e.$set(e.form, "highUserName", a)
                    },
                    expression: "form.highUserName"
                }
            })], 1)], 1)], 1), n("FormItem", {
                attrs: {
                    prop: "userName",
                    label: e.$t("proxy.LoginUsername")
                }
            }, [n("Row", [n("i-col", {
                attrs: {
                    span: "6"
                }
            }, [n("Input", {
                attrs: {
                    disabled: !e.isadd
                },
                model: {
                    value: e.form.userName,
                    callback: function(a) {
                        e.$set(e.form, "userName", a)
                    },
                    expression: "form.userName"
                }
            })], 1), n("i-col", {
                attrs: {
                    span: "17",
                    push: "1"
                }
            }, [e._v(" " + e._s(e.$t("proxy.userTips")) + " ")])], 1)], 1), n("FormItem", {
                attrs: {
                    prop: "password",
                    label: e.$t("proxy.Loginpassword")
                }
            }, [n("Row", [n("i-col", {
                attrs: {
                    span: "6"
                }
            }, [n("Input", {
                attrs: {
                    type: "password",
                    autocomplete: "new-password"
                },
                model: {
                    value: e.form.password,
                    callback: function(a) {
                        e.$set(e.form, "password", a)
                    },
                    expression: "form.password"
                }
            })], 1), n("i-col", {
                attrs: {
                    span: "17",
                    push: "1"
                }
            }, [e.isadd ? e._e() : [e._v(" " + e._s(e.$t("proxy.nohaveTips")) + " ")], e._v(" " + e._s(e.$t("proxy.passwordTips")) + " ")], 2)], 1)], 1), n("FormItem", {
                attrs: {
                    prop: "checkLoginPwd",
                    label: e.$t("proxy.ConfirmPassword")
                }
            }, [n("Row", [n("i-col", {
                attrs: {
                    span: "6"
                }
            }, [n("Input", {
                attrs: {
                    type: "password"
                },
                model: {
                    value: e.form.checkLoginPwd,
                    callback: function(a) {
                        e.$set(e.form, "checkLoginPwd", a)
                    },
                    expression: "form.checkLoginPwd"
                }
            })], 1)], 1)], 1), n("FormItem", {
                attrs: {
                    prop: "payPwd",
                    label: e.$t("proxy.Withdrawalspassword")
                }
            }, [n("Row", [n("i-col", {
                attrs: {
                    span: "6"
                }
            }, [n("Input", {
                attrs: {
                    type: "password"
                },
                model: {
                    value: e.form.payPwd,
                    callback: function(a) {
                        e.$set(e.form, "payPwd", a)
                    },
                    expression: "form.payPwd"
                }
            })], 1), n("i-col", {
                attrs: {
                    span: "17",
                    push: "1"
                }
            }, [e._v(" " + e._s(e.$t("proxy.withdrawalsTips")) + " ")])], 1)], 1), n("FormItem", {
                attrs: {
                    label: e.$t("proxy.Levels")
                }
            }, [n("Row", [n("i-col", {
                attrs: {
                    span: "6"
                }
            }, [n("InputNumber", {
                staticStyle: {
                    width: "100%"
                },
                attrs: {
                    type: "text",
                    min: 1,
                    max: 99999
                },
                model: {
                    value: e.form.rankLevel,
                    callback: function(a) {
                        e.$set(e.form, "rankLevel", a)
                    },
                    expression: "form.rankLevel"
                }
            })], 1)], 1)], 1), n("FormItem", {
                attrs: {
                    label: e.$t("sysrelation.email"),
                    prop: "email"
                }
            }, [n("Row", [n("i-col", {
                attrs: {
                    span: "6"
                }
            }, [n("Input", {
                model: {
                    value: e.form.email,
                    callback: function(a) {
                        e.$set(e.form, "email", a)
                    },
                    expression: "form.email"
                }
            })], 1)], 1)], 1), n("FormItem", {
                attrs: {
                    label: e.$t("proxy.mobilephone"),
                    prop: "phone"
                }
            }, [n("Row", [n("region", {
                model: {
                    value: e.form.phonePrefix,
                    callback: function(a) {
                        e.$set(e.form, "phonePrefix", a)
                    },
                    expression: "form.phonePrefix"
                }
            }), n("i-col", {
                attrs: {
                    span: "6"
                }
            }, [n("Input", {
                attrs: {
                    type: "text"
                },
                model: {
                    value: e.form.phone,
                    callback: function(a) {
                        e.$set(e.form, "phone", a)
                    },
                    expression: "form.phone"
                }
            })], 1)], 1)], 1), n("FormItem", {
                attrs: {
                    label: e.$t("proxy.googleAuth")
                }
            }, [e._v(" " + e._s(e.$t(e.isBindGoogle ? "proxy.bound" : "proxy.unbound")) + " "), e.isBindGoogle ? n("Poptip", {
                attrs: {
                    confirm: "",
                    title: e.$t("proxy.checkUnbindTip")
                },
                on: {
                    "on-ok": e.unbindHandler
                }
            }, [n("Button", {
                attrs: {
                    size: "small",
                    type: "error"
                }
            }, [e._v(e._s(e.$t("proxy.unbind")))])], 1) : e._e()], 1), n("FormItem", {
                attrs: {
                    label: e.$t("proxy.Remark")
                }
            }, [n("Row", [n("i-col", {
                attrs: {
                    span: "6"
                }
            }, [n("Input", {
                attrs: {
                    type: "textarea"
                },
                model: {
                    value: e.form.remark,
                    callback: function(a) {
                        e.$set(e.form, "remark", a)
                    },
                    expression: "form.remark"
                }
            })], 1)], 1)], 1), n("FormItem", [n("Button", {
                attrs: {
                    type: "primary"
                },
                on: {
                    click: function(a) {
                        return e.handleSubmit("form")
                    }
                }
            }, [e._v(e._s(e.$t("proxy.Confirm")))]), n("Button", {
                staticStyle: {
                    "margin-left": "8px"
                },
                on: {
                    click: function(a) {
                        return e.handleReset("form")
                    }
                }
            }, [e._v(e._s(e.$t("proxy.Reset")))])], 1)], 1)], 1)
        }
        ), [], !1, null, null, null);
        a.default = c.exports
    }
}]);
