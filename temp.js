(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[2450], {
    760: e => {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "createOrder"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "productId"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "courseId"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "batchId"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "createOrder"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "orderInput"
                            },
                            value: {
                                kind: "ObjectValue",
                                fields: [{
                                    kind: "ObjectField",
                                    name: {
                                        kind: "Name",
                                        value: "orderItems"
                                    },
                                    value: {
                                        kind: "ListValue",
                                        values: [{
                                            kind: "ObjectValue",
                                            fields: [{
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "productId"
                                                },
                                                value: {
                                                    kind: "Variable",
                                                    name: {
                                                        kind: "Name",
                                                        value: "productId"
                                                    }
                                                }
                                            }, {
                                                kind: "ObjectField",
                                                name: {
                                                    kind: "Name",
                                                    value: "selectedBatches"
                                                },
                                                value: {
                                                    kind: "ListValue",
                                                    values: [{
                                                        kind: "ObjectValue",
                                                        fields: [{
                                                            kind: "ObjectField",
                                                            name: {
                                                                kind: "Name",
                                                                value: "courseId"
                                                            },
                                                            value: {
                                                                kind: "Variable",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "courseId"
                                                                }
                                                            }
                                                        }, {
                                                            kind: "ObjectField",
                                                            name: {
                                                                kind: "Name",
                                                                value: "batchId"
                                                            },
                                                            value: {
                                                                kind: "Variable",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "batchId"
                                                                }
                                                            }
                                                        }]
                                                    }]
                                                }
                                            }]
                                        }]
                                    }
                                }]
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "orderId"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "paymentLink"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 377
            }
        };
        n.loc.source = {
            body: "mutation createOrder(\n  $productId: ID!,\n  $courseId: ID!, \n  $batchId: ID!\n  ) {\n  createOrder(\n    orderInput: {\n      orderItems: [\n        {\n          productId: $productId\n          selectedBatches: [\n            { \n              courseId: $courseId,\n              batchId: $batchId\n            }\n          ]\n        }\n      ]\n    }\n  ) {\n    orderId\n    paymentLink\n  }\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var i = {};
        function t(e, n) {
            for (var i = 0; i < e.definitions.length; i++) {
                var t = e.definitions[i];
                if (t.name && t.name.value == n)
                    return t
            }
        }
        n.definitions.forEach(function (e) {
            if (e.name) {
                var n = new Set;
                (function e(n, i) {
                    if ("FragmentSpread" === n.kind)
                        i.add(n.name.value);
                    else if ("VariableDefinition" === n.kind) {
                        var t = n.type;
                        "NamedType" === t.kind && i.add(t.name.value)
                    }
                    n.selectionSet && n.selectionSet.selections.forEach(function (n) {
                        e(n, i)
                    }),
                        n.variableDefinitions && n.variableDefinitions.forEach(function (n) {
                            e(n, i)
                        }),
                        n.definitions && n.definitions.forEach(function (n) {
                            e(n, i)
                        })
                }
                )(e, n),
                    i[e.name.value] = n
            }
        }),
            e.exports = n,
            e.exports.createOrder = function (e, n) {
                var a = {
                    kind: e.kind,
                    definitions: [t(e, n)]
                };
                e.hasOwnProperty("loc") && (a.loc = e.loc);
                var l = i[n] || new Set
                    , s = new Set
                    , d = new Set;
                for (l.forEach(function (e) {
                    d.add(e)
                }); d.size > 0;) {
                    var r = d;
                    d = new Set,
                        r.forEach(function (e) {
                            s.has(e) || (s.add(e),
                                (i[e] || new Set).forEach(function (e) {
                                    d.add(e)
                                }))
                        })
                }
                return s.forEach(function (n) {
                    var i = t(e, n);
                    i && a.definitions.push(i)
                }),
                    a
            }(n, "createOrder")
    }
    ,
    29391: e => {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "mutation",
                name: {
                    kind: "Name",
                    value: "saveAccountOnboardingDone"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "onboardingType"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "String"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "saveAccountOnboardingDone"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "onboardingType"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "onboardingType"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "success"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "message"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 415
            }
        };
        n.loc.source = {
            body: "# mutation SaveAccountOnboardingDone($onboardingType: String!, $initiatorId: String, $initiatorType: String) {\n#   saveAccountOnboardingDone(onboardingType: $onboardingType, initiatorId: $initiatorId, initiatorType: $initiatorType) {\n#     message\n#     success\n#   }\n# }\nmutation saveAccountOnboardingDone($onboardingType: String!) {\nsaveAccountOnboardingDone(onboardingType: $onboardingType) {\nsuccess\nmessage\n}\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var i = {};
        function t(e, n) {
            for (var i = 0; i < e.definitions.length; i++) {
                var t = e.definitions[i];
                if (t.name && t.name.value == n)
                    return t
            }
        }
        n.definitions.forEach(function (e) {
            if (e.name) {
                var n = new Set;
                (function e(n, i) {
                    if ("FragmentSpread" === n.kind)
                        i.add(n.name.value);
                    else if ("VariableDefinition" === n.kind) {
                        var t = n.type;
                        "NamedType" === t.kind && i.add(t.name.value)
                    }
                    n.selectionSet && n.selectionSet.selections.forEach(function (n) {
                        e(n, i)
                    }),
                        n.variableDefinitions && n.variableDefinitions.forEach(function (n) {
                            e(n, i)
                        }),
                        n.definitions && n.definitions.forEach(function (n) {
                            e(n, i)
                        })
                }
                )(e, n),
                    i[e.name.value] = n
            }
        }),
            e.exports = n,
            e.exports.saveAccountOnboardingDone = function (e, n) {
                var a = {
                    kind: e.kind,
                    definitions: [t(e, n)]
                };
                e.hasOwnProperty("loc") && (a.loc = e.loc);
                var l = i[n] || new Set
                    , s = new Set
                    , d = new Set;
                for (l.forEach(function (e) {
                    d.add(e)
                }); d.size > 0;) {
                    var r = d;
                    d = new Set,
                        r.forEach(function (e) {
                            s.has(e) || (s.add(e),
                                (i[e] || new Set).forEach(function (e) {
                                    d.add(e)
                                }))
                        })
                }
                return s.forEach(function (n) {
                    var i = t(e, n);
                    i && a.definitions.push(i)
                }),
                    a
            }(n, "saveAccountOnboardingDone")
    }
    ,
    37748: e => {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "GetCourses"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "slug"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "getCourseBySlug"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "slug"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "slug"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "name"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "mode"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "courseMode"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "brochure"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "type"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "exam"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "features"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "cardImage"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "centre"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "description"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "duration"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "durationType"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "language"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "courseLanguage"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "stream"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "session"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "faqs"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "question"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "sortOrder"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "answer"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "batches"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "commencementDate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "terminationDate"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "studyMaterial"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "endTime"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "remainingSeats"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "venue"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "name"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "enrolmentInfo"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isEnrolmentAllowed"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "message"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "startTime"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "course"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "type"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "mode"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "mockTestEntityCount"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "mockTestEntities"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "MockTestEntity"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "type"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "subType"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "duration"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "questionCount"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "thumbnail"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "liveAt"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "contentType"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "contentId"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isContentAvailable"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isBookmark"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "showFeedback"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isFreeMockTest"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "subject"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "accessInfo"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isPlayable"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "message"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "bookmarkInfo"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isBookmarked"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isBookmarkAllowed"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mockTestLink"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isFinalSubmissionDatePassed"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "instructors"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "bannerImage"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "bio"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "experience"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "instructorId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "picture"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "qualification"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "courseVideos"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "duration"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "thumbnail"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "title"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "type"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "url"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "purchaseOptions"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "productType"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isPurchaseAllowed"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "instalmentPlans"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "id"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "priceDetails"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "listedPriceDetails"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "baseCost"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "listedCost"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "rankholders"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "id"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "image"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "rank"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "year"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "coursesPurchased"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "testimonials"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "designation"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "image"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "message"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "sortOrder"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "entityFeatures"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "description"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "image"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "name"
                                        },
                                        arguments: [],
                                        directives: []
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 2214
            }
        };
        n.loc.source = {
            body: "query GetCourses($slug: ID!) {\n  getCourseBySlug(slug: $slug) {\n    slug\n    id\n    name\n    mode\n    courseMode\n    brochure\n    type\n    exam {\n      name\n    }\n\n    features\n    cardImage\n    centre {\n      name\n      id\n    }\n    description\n    duration\n    durationType\n    language\n    courseLanguage\n    stream {\n      name\n    }\n    session {\n      id\n      name\n    }\n    faqs {\n      question\n      id\n      sortOrder\n      answer\n    }\n    batches {\n      commencementDate\n      terminationDate\n      studyMaterial\n      endTime\n      name\n      remainingSeats\n      venue {\n        name\n      }\n      enrolmentInfo {\n        isEnrolmentAllowed\n        message\n      }\n      startTime\n      id\n      course {\n        type\n        mode\n      }\n\n      mockTestEntityCount\n      mockTestEntities {\n        ... on MockTestEntity {\n          id\n          name\n          type\n          subType\n          duration\n          questionCount\n          thumbnail\n          liveAt\n          contentType\n          contentId\n          isContentAvailable\n          isBookmark\n          showFeedback\n          isFreeMockTest\n          subject {\n            id\n            name\n          }\n          accessInfo {\n            isPlayable\n            message\n          }\n          bookmarkInfo {\n            isBookmarked\n            isBookmarkAllowed\n          }\n          mockTestLink {\n            id\n            isFinalSubmissionDatePassed\n          }\n        }\n      }\n    }\n    instructors {\n      bannerImage\n      bio\n      experience\n      instructorId\n      name\n      picture\n      qualification\n    }\n\n    courseVideos {\n      duration\n      id\n      thumbnail\n      title\n      type\n      url\n    }\n    purchaseOptions {\n      id\n      productType\n      name\n      isPurchaseAllowed\n      instalmentPlans {\n        id\n      }\n      priceDetails {\n        listedPriceDetails {\n          baseCost\n          listedCost\n        }\n      }\n    }\n    rankholders {\n      id\n      image\n      name\n      rank\n      year\n      coursesPurchased\n    }\n    testimonials {\n      designation\n      image\n      message\n      name\n      sortOrder\n    }\n    entityFeatures {\n      description\n      image\n      name\n    }\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var i = {};
        function t(e, n) {
            for (var i = 0; i < e.definitions.length; i++) {
                var t = e.definitions[i];
                if (t.name && t.name.value == n)
                    return t
            }
        }
        n.definitions.forEach(function (e) {
            if (e.name) {
                var n = new Set;
                (function e(n, i) {
                    if ("FragmentSpread" === n.kind)
                        i.add(n.name.value);
                    else if ("VariableDefinition" === n.kind) {
                        var t = n.type;
                        "NamedType" === t.kind && i.add(t.name.value)
                    }
                    n.selectionSet && n.selectionSet.selections.forEach(function (n) {
                        e(n, i)
                    }),
                        n.variableDefinitions && n.variableDefinitions.forEach(function (n) {
                            e(n, i)
                        }),
                        n.definitions && n.definitions.forEach(function (n) {
                            e(n, i)
                        })
                }
                )(e, n),
                    i[e.name.value] = n
            }
        }),
            e.exports = n,
            e.exports.GetCourses = function (e, n) {
                var a = {
                    kind: e.kind,
                    definitions: [t(e, n)]
                };
                e.hasOwnProperty("loc") && (a.loc = e.loc);
                var l = i[n] || new Set
                    , s = new Set
                    , d = new Set;
                for (l.forEach(function (e) {
                    d.add(e)
                }); d.size > 0;) {
                    var r = d;
                    d = new Set,
                        r.forEach(function (e) {
                            s.has(e) || (s.add(e),
                                (i[e] || new Set).forEach(function (e) {
                                    d.add(e)
                                }))
                        })
                }
                return s.forEach(function (n) {
                    var i = t(e, n);
                    i && a.definitions.push(i)
                }),
                    a
            }(n, "GetCourses")
    }
    ,
    3861: e => {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "getMockTestInfo"
                },
                variableDefinitions: [{
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "linkId"
                        }
                    },
                    type: {
                        kind: "NonNullType",
                        type: {
                            kind: "NamedType",
                            name: {
                                kind: "Name",
                                value: "ID"
                            }
                        }
                    },
                    directives: []
                }, {
                    kind: "VariableDefinition",
                    variable: {
                        kind: "Variable",
                        name: {
                            kind: "Name",
                            value: "filters"
                        }
                    },
                    type: {
                        kind: "ListType",
                        type: {
                            kind: "NonNullType",
                            type: {
                                kind: "NamedType",
                                name: {
                                    kind: "Name",
                                    value: "MockTestAttemptFilter"
                                }
                            }
                        }
                    },
                    directives: []
                }],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "getMockTestInfo"
                        },
                        arguments: [{
                            kind: "Argument",
                            name: {
                                kind: "Name",
                                value: "id"
                            },
                            value: {
                                kind: "Variable",
                                name: {
                                    kind: "Name",
                                    value: "linkId"
                                }
                            }
                        }],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "id"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "mockTestId"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "liveAt"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "entityType"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isFinalSubmissionDatePassed"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isResultDeclared"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isScholarshipTest"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "finalSubmissionAt"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isScholarshipTest"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "resultAt"
                                },
                                arguments: [],
                                directives: []
                            }, {
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "attemptInfo"
                                },
                                arguments: [],
                                directives: [],
                                selectionSet: {
                                    kind: "SelectionSet",
                                    selections: [{
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isBookmarkedQuestion"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isLeaderboardAvailable"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isScoreAvailable"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isSolutionAvailable"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "linkId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "mockTestId"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "attemptStatus"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "mode"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "isTopperPdfsAvailable"
                                        },
                                        arguments: [],
                                        directives: []
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "content"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "totalAvailableTopperPdfs"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "maximumMarks"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isSolutionPdfAvailable"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "sections"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "sectionId"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "questions"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "bookmarkInfo"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "isBookmarkAllowed"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "isBookmarked"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "questionSetInfo"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "baseQuestionId"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "contentInLanguages"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "language"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "content"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "solution"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isBaseQuestion"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "InlineFragment",
                                                                typeCondition: {
                                                                    kind: "NamedType",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "SingleChoiceQuestion"
                                                                    }
                                                                },
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "index"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "correctChoice"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "contentInLanguages"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "content"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "__typename"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "difficultyLevel"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "InlineFragment",
                                                                typeCondition: {
                                                                    kind: "NamedType",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "MultipleChoiceQuestion"
                                                                    }
                                                                },
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "index"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "correctChoices"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "contentInLanguages"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "content"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "__typename"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "difficultyLevel"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }, {
                                                                kind: "InlineFragment",
                                                                typeCondition: {
                                                                    kind: "NamedType",
                                                                    name: {
                                                                        kind: "Name",
                                                                        value: "NumericalAnswerQuestion"
                                                                    }
                                                                },
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "index"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "numericAnswer"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "contentInLanguages"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "content"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "difficultyLevel"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "__typename"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "contentInLanguages"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "language"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "videos"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "entityType"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "entityId"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoId"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "videoType"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "thumbnail"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "solutionVideos"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "InlineFragment",
                                                        typeCondition: {
                                                            kind: "NamedType",
                                                            name: {
                                                                kind: "Name",
                                                                value: "YoutubeVideo"
                                                            }
                                                        },
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "title"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "thumbnailUrl"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "videoUrl"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "duration"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "mockTestType"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "contentInLanguages"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "attempt"
                                        },
                                        arguments: [{
                                            kind: "Argument",
                                            name: {
                                                kind: "Name",
                                                value: "filters"
                                            },
                                            value: {
                                                kind: "Variable",
                                                name: {
                                                    kind: "Name",
                                                    value: "filters"
                                                }
                                            }
                                        }],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "stats"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "average"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "maxScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "score"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "total"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "topper"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "accountId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "linkId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "scoreSummary"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "accuracy"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "score"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "total"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "maxScore"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "rankInfo"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "percentile"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "rank"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }, {
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "total"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "maxScore"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "scoreStats"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "median"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "perScoreStats"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "score"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "rank"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "totalStudents"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }]
                                                                }
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "difficulties"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "difficulty"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalQuestions"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "attemptRate"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageAccuracy"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageTimeTaken"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "highestScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "subjects"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalQuestions"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "attemptRate"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageAccuracy"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageTimeTaken"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "highestScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "topics"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalQuestions"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "attemptRate"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageAccuracy"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageTimeTaken"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "highestScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "questionAttempts"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "questionId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "questionIndex"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalQuestions"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "attemptRate"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageAccuracy"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageTimeTaken"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "highestScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "sectionId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "correct"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "wrong"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "skipped"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mostAttemptedQuestions"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "questionId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "questionIndex"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalQuestions"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "attemptRate"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageAccuracy"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageTimeTaken"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "highestScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "sectionId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "leastAttemptedQuestions"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "questionId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "questionIndex"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "totalQuestions"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "attemptRate"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageAccuracy"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "averageTimeTaken"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "highestScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "sectionId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "leaderboard"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "accountId"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "score"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "rank"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "profilePicture"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isCurrentAccount"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "linkId"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "mockTestId"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isCompleted"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "attemptLanguage"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "remainingTime"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "questions"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "state"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "evalStatus"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "timeTaken"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "scoreSummary"
                                                },
                                                arguments: [],
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "mockTestId"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "linkId"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "sectionIndex"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "partial"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "correct"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "wrong"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "skipped"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "total"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "accuracy"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "score"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "maxScore"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "maxTime"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "timeTaken"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "rankInfo"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "rank"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "total"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "percentile"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "sectionWiseScoreSummary"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "mockTestId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "linkId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "sectionIndex"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "partial"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "correct"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "wrong"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "skipped"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "total"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "accuracy"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "score"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "maxScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "timeTaken"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "subjectWiseScoreSummary"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "mockTestId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "linkId"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "partial"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "correct"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "wrong"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "skipped"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "total"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "accuracy"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "score"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "maxScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "timeTaken"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "topicWiseScoreSummary"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "accuracy"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "partial"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "skipped"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "wrong"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "maxTime"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "correct"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "score"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "maxScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "timeTaken"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "total"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "difficultyWiseScoreSummary"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "difficulty"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "accuracy"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "partial"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "skipped"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "wrong"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "maxTime"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "correct"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "score"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "maxScore"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "timeTaken"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "total"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "isLateSubmission"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "overallComment"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "subjectiveTestAttempt"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "submittedAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "evaluatedAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "startedAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "assignedAt"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "evaluationStatus"
                                                },
                                                arguments: [],
                                                directives: []
                                            }, {
                                                kind: "Field",
                                                name: {
                                                    kind: "Name",
                                                    value: "showViewSolutionButton"
                                                },
                                                arguments: [],
                                                directives: []
                                            }]
                                        }
                                    }, {
                                        kind: "Field",
                                        name: {
                                            kind: "Name",
                                            value: "initiator"
                                        },
                                        arguments: [],
                                        directives: [],
                                        selectionSet: {
                                            kind: "SelectionSet",
                                            selections: [{
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "TestPapers"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "testPaperId"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "examEndTime"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "registrationInfo"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "isResultDeclared"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "promotionalEvent"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "slug"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "MockTestEntity"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "id"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "isFreeMockTest"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }, {
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "batch"
                                                        },
                                                        arguments: [],
                                                        directives: [],
                                                        selectionSet: {
                                                            kind: "SelectionSet",
                                                            selections: [{
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "id"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "name"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "mockTestEntityCount"
                                                                },
                                                                arguments: [],
                                                                directives: []
                                                            }, {
                                                                kind: "Field",
                                                                name: {
                                                                    kind: "Name",
                                                                    value: "course"
                                                                },
                                                                arguments: [],
                                                                directives: [],
                                                                selectionSet: {
                                                                    kind: "SelectionSet",
                                                                    selections: [{
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "id"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "slug"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "name"
                                                                        },
                                                                        arguments: [],
                                                                        directives: []
                                                                    }, {
                                                                        kind: "Field",
                                                                        name: {
                                                                            kind: "Name",
                                                                            value: "accountPurchaseInfo"
                                                                        },
                                                                        arguments: [],
                                                                        directives: [],
                                                                        selectionSet: {
                                                                            kind: "SelectionSet",
                                                                            selections: [{
                                                                                kind: "Field",
                                                                                name: {
                                                                                    kind: "Name",
                                                                                    value: "status"
                                                                                },
                                                                                arguments: [],
                                                                                directives: []
                                                                            }]
                                                                        }
                                                                    }]
                                                                }
                                                            }]
                                                        }
                                                    }]
                                                }
                                            }, {
                                                kind: "InlineFragment",
                                                typeCondition: {
                                                    kind: "NamedType",
                                                    name: {
                                                        kind: "Name",
                                                        value: "DartTest"
                                                    }
                                                },
                                                directives: [],
                                                selectionSet: {
                                                    kind: "SelectionSet",
                                                    selections: [{
                                                        kind: "Field",
                                                        name: {
                                                            kind: "Name",
                                                            value: "name"
                                                        },
                                                        arguments: [],
                                                        directives: []
                                                    }]
                                                }
                                            }]
                                        }
                                    }]
                                }
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 6759
            }
        };
        n.loc.source = {
            body: "query getMockTestInfo($linkId: ID!, $filters: [MockTestAttemptFilter!]) {\n  getMockTestInfo(id: $linkId) {\n    id\n    mockTestId\n    liveAt\n    entityType\n    isFinalSubmissionDatePassed\n    isResultDeclared\n    isScholarshipTest\n    finalSubmissionAt\n     isScholarshipTest\n    resultAt\n    attemptInfo {\n      isBookmarkedQuestion\n      isLeaderboardAvailable\n      isScoreAvailable\n      isSolutionAvailable\n      linkId\n      mockTestId\n      attemptStatus\n      mode\n      isTopperPdfsAvailable\n      content {\n        totalAvailableTopperPdfs\n        maximumMarks\n        isSolutionPdfAvailable\n        sections {\n          sectionId\n          questions {\n             bookmarkInfo {\n              isBookmarkAllowed\n              isBookmarked\n            }\n            id\n            questionSetInfo {\n              baseQuestionId\n              contentInLanguages {\n                language\n                content\n                solution\n              }\n            }\n             isBaseQuestion\n            ... on SingleChoiceQuestion {\n              index\n              correctChoice\n               contentInLanguages {\n                content\n              }\n              __typename\n              difficultyLevel\n            }\n\n            ... on MultipleChoiceQuestion {\n              index\n              correctChoices\n              contentInLanguages {\n                content\n              }\n              __typename\n              difficultyLevel\n            }\n\n            ... on NumericalAnswerQuestion {\n              index\n              numericAnswer\n              contentInLanguages {\n                content\n              }\n              difficultyLevel\n              __typename\n            }\n          }\n          contentInLanguages {\n            name\n            language\n          }\n        }\n        videos {\n          entityType\n          entityId\n          videoId\n          videoType\n          name\n          thumbnail\n        }\n        solutionVideos {\n          ... on YoutubeVideo {\n            title\n            thumbnailUrl\n            videoUrl\n            duration\n          }\n        }\n        mockTestType\n          contentInLanguages {\n          name\n        }\n      }\n      attempt (filters: $filters) {\n       \n        stats {\n          average {\n            maxScore\n            score\n            total\n          }\n          topper {\n            accountId\n            linkId\n            scoreSummary {\n              accuracy\n              score\n              total\n              maxScore\n              rankInfo {\n                percentile\n                rank\n                total\n              }\n              maxScore\n          \n            }\n          }\n          scoreStats {\n      median\n      perScoreStats {\n        score\n        rank\n        totalStudents\n      }\n    }\n    difficulties {\n      difficulty\n      totalQuestions\n      attemptRate\n      averageAccuracy\n      averageScore\n      averageTimeTaken\n      highestScore\n    }\n    subjects {\n      id\n      name\n      totalQuestions\n      attemptRate\n      averageAccuracy\n      averageScore\n      averageTimeTaken\n      highestScore\n    }\n    topics {\n      id\n      name\n      totalQuestions\n      attemptRate\n      averageAccuracy\n      averageScore\n      averageTimeTaken\n      highestScore\n    }\n    questionAttempts {\n      questionId\n      questionIndex\n      totalQuestions\n      attemptRate\n      averageAccuracy\n      averageScore\n      averageTimeTaken\n      highestScore\n      sectionId\n      correct\n      wrong\n      skipped\n    }\n    mostAttemptedQuestions {\n      questionId\n      questionIndex\n      totalQuestions\n      attemptRate\n      averageAccuracy\n      averageScore\n      averageTimeTaken\n      highestScore\n      sectionId\n    }\n    leastAttemptedQuestions {\n      questionId\n      questionIndex\n      totalQuestions\n      attemptRate\n      averageAccuracy\n      averageScore\n      averageTimeTaken\n      highestScore\n      sectionId\n    }\n        }\n        leaderboard {\n          accountId\n          name\n          score\n          rank\n          profilePicture\n          isCurrentAccount\n        }\n        linkId\n        mockTestId\n        isCompleted\n        attemptLanguage\n        remainingTime\n        questions {\n          state\n          evalStatus\n          timeTaken\n        }\n        scoreSummary {\n          mockTestId\n          linkId\n          sectionIndex\n          partial\n          correct\n          wrong\n          skipped\n          total\n          accuracy\n          score\n          maxScore\n          maxTime\n          timeTaken\n          rankInfo {\n            rank\n            total\n            percentile\n          }\n          sectionWiseScoreSummary {\n            mockTestId\n            linkId\n            sectionIndex\n            partial\n            correct\n            wrong\n            skipped\n            total\n            accuracy\n            score\n            maxScore\n            timeTaken\n          }\n          subjectWiseScoreSummary {\n            id\n            name\n            mockTestId\n            linkId\n            partial\n            correct\n            wrong\n            skipped\n            total\n            accuracy\n            score\n            maxScore\n            timeTaken\n          }\n             topicWiseScoreSummary {\n              name\n              accuracy\n              partial\n              skipped\n              wrong\n              maxTime\n              correct\n              score\n              maxScore\n              timeTaken\n              total\n            }\n             difficultyWiseScoreSummary {\n            difficulty\n            accuracy\n            partial\n            skipped\n            wrong\n            maxTime\n            correct\n            score\n            maxScore\n            timeTaken\n            total\n          }\n        }\n        isLateSubmission\n        overallComment\n      }\n       subjectiveTestAttempt {\n        submittedAt\n        evaluatedAt\n        startedAt\n        assignedAt\n        evaluationStatus\n        showViewSolutionButton\n       }\n         initiator {\n           ... on TestPapers {\n          testPaperId\n          examEndTime\n          name\n          registrationInfo {\n            isResultDeclared\n          }\n          promotionalEvent {\n            name\n            slug\n          }\n        }\n        ... on MockTestEntity {\n          id\n          name\n          isFreeMockTest\n          batch {\n            id\n            name\n            mockTestEntityCount\n            course {\n              id\n              slug\n              name\n              accountPurchaseInfo {\n                status\n              }\n            }\n          }\n        }\n        ... on DartTest {\n          name\n        }\n      }\n    }\n  }\n}",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var i = {};
        function t(e, n) {
            for (var i = 0; i < e.definitions.length; i++) {
                var t = e.definitions[i];
                if (t.name && t.name.value == n)
                    return t
            }
        }
        n.definitions.forEach(function (e) {
            if (e.name) {
                var n = new Set;
                (function e(n, i) {
                    if ("FragmentSpread" === n.kind)
                        i.add(n.name.value);
                    else if ("VariableDefinition" === n.kind) {
                        var t = n.type;
                        "NamedType" === t.kind && i.add(t.name.value)
                    }
                    n.selectionSet && n.selectionSet.selections.forEach(function (n) {
                        e(n, i)
                    }),
                        n.variableDefinitions && n.variableDefinitions.forEach(function (n) {
                            e(n, i)
                        }),
                        n.definitions && n.definitions.forEach(function (n) {
                            e(n, i)
                        })
                }
                )(e, n),
                    i[e.name.value] = n
            }
        }),
            e.exports = n,
            e.exports.getMockTestInfo = function (e, n) {
                var a = {
                    kind: e.kind,
                    definitions: [t(e, n)]
                };
                e.hasOwnProperty("loc") && (a.loc = e.loc);
                var l = i[n] || new Set
                    , s = new Set
                    , d = new Set;
                for (l.forEach(function (e) {
                    d.add(e)
                }); d.size > 0;) {
                    var r = d;
                    d = new Set,
                        r.forEach(function (e) {
                            s.has(e) || (s.add(e),
                                (i[e] || new Set).forEach(function (e) {
                                    d.add(e)
                                }))
                        })
                }
                return s.forEach(function (n) {
                    var i = t(e, n);
                    i && a.definitions.push(i)
                }),
                    a
            }(n, "getMockTestInfo")
    }
    ,
    55238: e => {
        var n = {
            kind: "Document",
            definitions: [{
                kind: "OperationDefinition",
                operation: "query",
                name: {
                    kind: "Name",
                    value: "onBoarding"
                },
                variableDefinitions: [],
                directives: [],
                selectionSet: {
                    kind: "SelectionSet",
                    selections: [{
                        kind: "Field",
                        name: {
                            kind: "Name",
                            value: "getAccountOnboardingFlags"
                        },
                        arguments: [],
                        directives: [],
                        selectionSet: {
                            kind: "SelectionSet",
                            selections: [{
                                kind: "Field",
                                name: {
                                    kind: "Name",
                                    value: "isMockTestAnalysisFilterOnboardingDone"
                                },
                                arguments: [],
                                directives: []
                            }]
                        }
                    }]
                }
            }],
            loc: {
                start: 0,
                end: 98
            }
        };
        n.loc.source = {
            body: "query onBoarding {\n  getAccountOnboardingFlags {\n    isMockTestAnalysisFilterOnboardingDone\n  }\n}\n",
            name: "GraphQL request",
            locationOffset: {
                line: 1,
                column: 1
            }
        };
        var i = {};
        function t(e, n) {
            for (var i = 0; i < e.definitions.length; i++) {
                var t = e.definitions[i];
                if (t.name && t.name.value == n)
                    return t
            }
        }
        n.definitions.forEach(function (e) {
            if (e.name) {
                var n = new Set;
                (function e(n, i) {
                    if ("FragmentSpread" === n.kind)
                        i.add(n.name.value);
                    else if ("VariableDefinition" === n.kind) {
                        var t = n.type;
                        "NamedType" === t.kind && i.add(t.name.value)
                    }
                    n.selectionSet && n.selectionSet.selections.forEach(function (n) {
                        e(n, i)
                    }),
                        n.variableDefinitions && n.variableDefinitions.forEach(function (n) {
                            e(n, i)
                        }),
                        n.definitions && n.definitions.forEach(function (n) {
                            e(n, i)
                        })
                }
                )(e, n),
                    i[e.name.value] = n
            }
        }),
            e.exports = n,
            e.exports.onBoarding = function (e, n) {
                var a = {
                    kind: e.kind,
                    definitions: [t(e, n)]
                };
                e.hasOwnProperty("loc") && (a.loc = e.loc);
                var l = i[n] || new Set
                    , s = new Set
                    , d = new Set;
                for (l.forEach(function (e) {
                    d.add(e)
                }); d.size > 0;) {
                    var r = d;
                    d = new Set,
                        r.forEach(function (e) {
                            s.has(e) || (s.add(e),
                                (i[e] || new Set).forEach(function (e) {
                                    d.add(e)
                                }))
                        })
                }
                return s.forEach(function (n) {
                    var i = t(e, n);
                    i && a.definitions.push(i)
                }),
                    a
            }(n, "onBoarding")
    }
    ,
    30968: (e, n, i) => {
        "use strict";
        i.d(n, {
            A: () => t
        });
        let t = {
            src: "https://assets.madeeasy.in/prod/_next/static/media/info_icon.671eef87.png",
            height: 30,
            width: 8,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAAICAMAAADk895wAAAAHlBMVEUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAC3KG9qAAAACnRSTlOa7SSCR1rdxbGLqPXsgwAAAAlwSFlzAAAWJQAAFiUBSVIk8AAAAB5JREFUeJwFwYEBACAIAyCmlfX/w4EXmyoO17Qs6Q8CqAA1EdJzTQAAAABJRU5ErkJggg==",
            blurWidth: 2,
            blurHeight: 8
        }
    }
    ,
    91564: (e, n, i) => {
        "use strict";
        i.d(n, {
            A: () => t
        });
        let t = {
            src: "https://assets.madeeasy.in/prod/_next/static/media/playCircle.99ee96f6.png",
            height: 72,
            width: 72,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAG1BMVEX///////////////9MaXH////////////////T15xTAAAACXRSTlOACHSJACgh7Zs3SF0YAAAACXBIWXMAABYlAAAWJQFJUiTwAAAALUlEQVR4nEWLMRIAMAiDMEbt/1/cqXbjDsCOqrBxi1SbUB5QUORMUh9Wbfz2Cx0GAM2xs4xLAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 8
        }
    }
    ,
    19548: (e, n, i) => {
        "use strict";
        i.d(n, {
            A: () => r
        });
        var t = i(74848)
            , a = i(96540)
            , l = i(5556)
            , s = i.n(l);
        function d(e) {
            let { isOpen: n, onClose: i, title: l, children: s, clearFilter: d, applyFilters: r, pageName: o, initialHeight: c } = e
                , [m, u] = (0,
                    a.useState)(c)
                , v = (0,
                    a.useRef)();
            (0,
                a.useEffect)(() => { }
                    , [m]);
            let g = !1
                , k = e => {
                    if ("touchstart" === e.type && (g = !1),
                        "touchmove" === e.type) {
                        g = !0;
                        let n = window.innerHeight
                            , i = (n - e.touches[0].clientY) / n * 100;
                        console.log("touch event ", i, n),
                            i > 70 ? u("100%") : i >= 30 && i <= 70 && u("".concat(i, "%"))
                    } else if ("touchend" === e.type) {
                        if (!g)
                            return;
                        let e = parseFloat(m);
                        e > 70 ? u("100%") : e >= 35 && e <= 70 ? u(c) : (u("0%"),
                            i())
                    }
                }
                ;
            return (0,
                t.jsxs)("div", {
                    className: "fixed inset-0 z-50 transition-all ".concat(n ? "pointer-events-auto" : "pointer-events-none", " lg:hidden "),
                    children: [(0,
                        t.jsx)("div", {
                            className: "fixed inset-0 bg-black bg-opacity-50 transition-opacity ".concat(n ? "opacity-100" : "opacity-0"),
                            onClick: i,
                            "aria-hidden": "true"
                        }), (0,
                            t.jsxs)("div", {
                                ref: v,
                                className: "absolute bottom-0 left-0 right-0 bg-white rounded-t-lg shadow-lg overflow-hidden flex flex-col transform transition-transform",
                                style: {
                                    height: m
                                },
                                onTouchMove: k,
                                onTouchEnd: k,
                                children: [(0,
                                    t.jsx)("div", {
                                        className: "w-12 h-1.5 bg-gray-300 rounded-full mx-auto mt-2 cursor-pointer"
                                    }), (0,
                                        t.jsx)("div", {
                                            className: "".concat("study plan" === o ? "border-none" : "border-b", " p-4 flex justify-between items-center'"),
                                            style: {
                                                borderColor: "#939393"
                                            },
                                            children: (0,
                                                t.jsx)("h2", {
                                                    className: "2xl:text-lg xl:text-base md:text-base text-base font-semibold text-gray-800",
                                                    children: l
                                                })
                                        }), (0,
                                            t.jsx)("div", {
                                                className: "flex-1 overflow-y-auto",
                                                children: s
                                            }), (0,
                                                t.jsx)("div", {
                                                    className: "".concat("study plan" === o ? "border-none" : "border-t", " p-4 border-t border-gray-200 flex justify-between md:justify-center items-center'"),
                                                    style: {
                                                        borderColor: "#939393"
                                                    },
                                                    children: "study plan" !== o && (0,
                                                        t.jsxs)("div", {
                                                            className: "flex sm:justify-end md:justify-center space-x-4 w-full md:w-[70%]",
                                                            children: [(0,
                                                                t.jsx)("button", {
                                                                    type: "button",
                                                                    className: "bg-white-500 border border-gray-500 text-gray-500 font-medium px-4 py-2 rounded-md hover:bg-gray-100 hover:border-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-400 w-full",
                                                                    onClick: d,
                                                                    children: "Clear Filters"
                                                                }), (0,
                                                                    t.jsx)("button", {
                                                                        type: "button",
                                                                        className: "bg-tabBlue text-white px-4 py-4 rounded-md font-medium hover:bg-tabBlue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 w-full",
                                                                        onClick: r,
                                                                        children: "Apply"
                                                                    })]
                                                        })
                                                })]
                            })]
                })
        }
        d.propTypes = {
            isOpen: s().bool.isRequired,
            onClose: s().func.isRequired,
            title: s().string.isRequired,
            clearFilter: s().func.isRequired,
            applyFilters: s().func.isRequired
        };
        let r = d
    }
    ,
    34681: (e, n, i) => {
        "use strict";
        i.d(n, {
            A: () => a
        });
        var t = i(74848);
        function a() {
            return (0,
                t.jsxs)("span", {
                    className: "relative group inline-flex items-center ml-1.5 align-middle cursor-pointer",
                    children: [(0,
                        t.jsx)("span", {
                            className: "inline-flex items-center justify-center w-[15px] h-[15px] rounded-full bg-gray-400 text-white text-[9px] font-bold leading-none select-none",
                            children: "i"
                        }), (0,
                            t.jsxs)("span", {
                                className: "pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 rounded bg-gray-800 px-2.5 py-2 text-[11px] leading-snug text-white opacity-0 shadow-lg transition-opacity duration-150 group-hover:opacity-100 z-50",
                                children: ["Time-related metrics are sourced from online mode attempts only. Data from offline attempts is not included in these figures.", (0,
                                    t.jsx)("span", {
                                        className: "absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-800"
                                    })]
                            })]
                })
        }
        i(96540)
    }
    ,
    41547: (e, n, i) => {
        "use strict";
        function t() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
                , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return e.map(e => {
                var i, t, a;
                let l = n.find(n => n.id === e.questionId && n.sectionId === e.sectionId)
                    , s = null !== (a = null == l ? void 0 : null === (t = l.contentInLanguages) || void 0 === t ? void 0 : null === (i = t[0]) || void 0 === i ? void 0 : i.content) && void 0 !== a ? a : "";
                return s ? {
                    ...e,
                    questionIndex: l.index,
                    content: s,
                    difficultyLevel: l.difficultyLevel
                } : null
            }
            ).filter(Boolean)
        }
        i.d(n, {
            Ay: () => c,
            C_: () => a,
            My: () => s,
            Pc: () => d,
            _Z: () => r,
            nh: () => o,
            nm: () => l
        });
        let a = [{
            key: "myMarks",
            label: "My Marks",
            color: "#045692"
        }, {
            key: "avgMarks",
            label: "Avg Marks",
            color: "#FF8C00"
        }, {
            key: "highestMarks",
            label: "Highest Marks",
            color: "#558B71"
        }]
            , l = [{
                key: "myAccuracy",
                label: "My Accuracy",
                color: "#045692"
            }, {
                key: "avgAccuracy",
                label: "Avg Accuracy",
                color: "#FF8C00"
            }]
            , s = [{
                key: "count",
                label: "Questions",
                color: "#045692"
            }]
            , d = [{
                key: "count",
                label: "Questions",
                color: "#558B71"
            }]
            , r = [{
                key: "myTimeTaken",
                label: "My Time Taken",
                color: "#045692"
            }, {
                key: "averageTimeTaken",
                label: "Average time taken (other students)",
                color: "#FF8C00"
            }]
            , o = [{
                key: "incorrect",
                label: "Incorrect",
                color: "#FE4135"
            }, {
                key: "unattempted",
                label: "Unattempted",
                color: "#FF8C00"
            }, {
                key: "correct",
                label: "Correct",
                color: "#558B71"
            }]
            , c = function (e) {
                var n, i, a, l, s, d, r, o, c, m, u, v, g, k, x, p, f, h, b, N, y, F, S, j, w, A;
                let T = null == e ? void 0 : e.getMockTestInfo
                    , C = null == T ? void 0 : T.attemptInfo
                    , I = null == C ? void 0 : C.attempt
                    , D = null == C ? void 0 : C.content
                    , B = null == I ? void 0 : I.scoreSummary
                    , M = null == I ? void 0 : I.stats
                    , E = null !== (y = null == B ? void 0 : B.difficultyWiseScoreSummary) && void 0 !== y ? y : []
                    , R = (null == C ? void 0 : C.linkId) || ""
                    , L = null == C ? void 0 : null === (n = C.initiator) || void 0 === n ? void 0 : n.name
                    , q = (null == C ? void 0 : null === (i = C.initiator) || void 0 === i ? void 0 : i.isFreeMockTest) || !1
                    , P = null == C ? void 0 : null === (s = C.initiator) || void 0 === s ? void 0 : null === (l = s.batch) || void 0 === l ? void 0 : null === (a = l.course) || void 0 === a ? void 0 : a.name
                    , V = null == C ? void 0 : null === (o = C.initiator) || void 0 === o ? void 0 : null === (r = o.batch) || void 0 === r ? void 0 : null === (d = r.course) || void 0 === d ? void 0 : d.slug
                    , O = (null == C ? void 0 : null === (m = C.initiator) || void 0 === m ? void 0 : null === (c = m.batch) || void 0 === c ? void 0 : c.mockTestEntityCount) || 0
                    , _ = null == D ? void 0 : D.mockTestType
                    , Q = null == C ? void 0 : C.mode
                    , U = (null == T ? void 0 : T.isResultDeclared) || !1
                    , H = (null == T ? void 0 : T.isFinalSubmissionDatePassed) || !1
                    , W = (null == I ? void 0 : I.isLateSubmission) || !1
                    , z = (null == T ? void 0 : T.resultAt) || null
                    , Z = (null == T ? void 0 : T.finalSubmissionAt) || null
                    , K = (null == B ? void 0 : B.rankInfo) || {}
                    , G = {
                        score: (null == B ? void 0 : B.score) || 0,
                        maxScore: (null == B ? void 0 : B.maxScore) || 0,
                        correct: (null == B ? void 0 : B.correct) || 0,
                        incorrect: (null == B ? void 0 : B.wrong) || 0,
                        unattempted: (null == B ? void 0 : B.skipped) || 0,
                        rank: (null == B ? void 0 : null === (u = B.rankInfo) || void 0 === u ? void 0 : u.rank) || 0,
                        totalRank: (null == B ? void 0 : null === (v = B.rankInfo) || void 0 === v ? void 0 : v.total) || 0,
                        percentile: (null == B ? void 0 : null === (g = B.rankInfo) || void 0 === g ? void 0 : g.percentile) || 0,
                        accuracy: (null == B ? void 0 : B.accuracy) || 0,
                        partial: (null == B ? void 0 : B.partial) || 0,
                        timeTaken: (() => {
                            let e = (null == B ? void 0 : B.timeTaken) || 0;
                            return e < 60 ? "".concat(e, " sec") : "".concat(Math.floor(e / 60), " mins")
                        }
                        )(),
                        total: (null == B ? void 0 : B.total) || 0
                    }
                    , $ = null == M ? void 0 : M.average
                    , Y = {
                        maxScore: (null == $ ? void 0 : $.maxScore) || 0,
                        score: (null == $ ? void 0 : $.score) || 0,
                        total: (null == $ ? void 0 : $.total) || 0
                    }
                    , J = (null == B ? void 0 : B.subjectWiseScoreSummary) || []
                    , X = (null == B ? void 0 : B.topicWiseScoreSummary) || []
                    , ee = (null == I ? void 0 : I.leaderboard) || []
                    , en = (null == D ? void 0 : D.solutionVideos) || []
                    , ei = (null == D ? void 0 : D.videos) || []
                    , et = (null == D ? void 0 : D.isSolutionPdfAvailable) || null
                    , ea = (null == D ? void 0 : D.totalAvailableTopperPdfs) || 0
                    , el = e => E.find(n => {
                        var i;
                        return (null == n ? void 0 : null === (i = n.difficulty) || void 0 === i ? void 0 : i.toLowerCase()) === (null == e ? void 0 : e.toLowerCase())
                    }
                    )
                    , es = null == M ? void 0 : null === (k = M.difficulties) || void 0 === k ? void 0 : k.map(e => {
                        var n;
                        return {
                            difficulty: null == e ? void 0 : e.difficulty,
                            myMarks: null === (n = el(null == e ? void 0 : e.difficulty)) || void 0 === n ? void 0 : n.score,
                            avgMarks: null == e ? void 0 : e.averageScore,
                            highestMarks: null == e ? void 0 : e.highestScore
                        }
                    }
                    )
                    , ed = null == M ? void 0 : null === (x = M.difficulties) || void 0 === x ? void 0 : x.map(e => {
                        var n;
                        return {
                            difficulty: null == e ? void 0 : e.difficulty,
                            myAccuracy: null === (n = el(null == e ? void 0 : e.difficulty)) || void 0 === n ? void 0 : n.accuracy,
                            avgAccuracy: null == e ? void 0 : e.averageAccuracy
                        }
                    }
                    )
                    , er = null == M ? void 0 : null === (p = M.difficulties) || void 0 === p ? void 0 : p.map(e => {
                        var n;
                        return {
                            difficulty: null == e ? void 0 : e.difficulty,
                            myTimeTaken: null === (n = el(null == e ? void 0 : e.difficulty)) || void 0 === n ? void 0 : n.timeTaken,
                            averageTimeTaken: null == e ? void 0 : e.averageTimeTaken
                        }
                    }
                    )
                    , eo = null !== (F = null == M ? void 0 : null === (f = M.subjects) || void 0 === f ? void 0 : f.map(e => ({
                        subject: null == e ? void 0 : e.name,
                        count: null == e ? void 0 : e.totalQuestions
                    }))) && void 0 !== F ? F : []
                    , ec = null !== (S = null == M ? void 0 : null === (h = M.topics) || void 0 === h ? void 0 : h.map(e => ({
                        subject: null == e ? void 0 : e.name,
                        count: null == e ? void 0 : e.totalQuestions
                    }))) && void 0 !== S ? S : []
                    , em = null == M ? void 0 : null === (b = M.questionAttempts) || void 0 === b ? void 0 : b.map(e => {
                        var n, i, t, a;
                        return {
                            question: (null !== (n = null == e ? void 0 : e.questionIndex) && void 0 !== n ? n : 0) + 1,
                            correct: null !== (i = null == e ? void 0 : e.correct) && void 0 !== i ? i : 0,
                            incorrect: null !== (t = null == e ? void 0 : e.wrong) && void 0 !== t ? t : 0,
                            unattempted: null !== (a = null == e ? void 0 : e.skipped) && void 0 !== a ? a : 0
                        }
                    }
                    )
                    , eu = (null == M ? void 0 : M.scoreStats) || []
                    , ev = eo.length ? Math.max(...eo.map(e => Number((null == e ? void 0 : e.count) || 0))) : 0
                    , eg = ec.length ? Math.max(...ec.map(e => Number((null == e ? void 0 : e.count) || 0))) : 0
                    , ek = null !== (j = null == D ? void 0 : null === (N = D.sections) || void 0 === N ? void 0 : N.flatMap(e => e.questions.map(n => ({
                        ...n,
                        sectionId: e.sectionId
                    })))) && void 0 !== j ? j : [];
                return {
                    linkId: R,
                    testName: L,
                    isFreeMockTest: q,
                    courseName: P,
                    courseSlug: V,
                    totalMockTestCount: O,
                    mockTestType: _,
                    mode: Q,
                    isResultDeclared: U,
                    isFinalSubmissionDatePassed: H,
                    isLateSubmission: W,
                    resultAt: z,
                    finalSubmissionAt: Z,
                    overallStats: G,
                    currentUserRankInfo: K,
                    scoresAverage: Y,
                    subjects: J,
                    topicsWise: X,
                    leaderboardData: ee,
                    solutionVideos: en,
                    contentVideos: ei,
                    solutionPdf: et,
                    rankerPdfCount: ea,
                    getEvalStatus: e => {
                        var n, i;
                        return null == I ? void 0 : null === (i = I.questions) || void 0 === i ? void 0 : null === (n = i[e]) || void 0 === n ? void 0 : n.evalStatus
                    }
                    ,
                    getQuestionNavInfo: (e, n) => (function (e, n, i) {
                        let t = 0;
                        for (let a = 0; a < e.length; a += 1) {
                            let l = e[a];
                            if (l.sectionId === n) {
                                let e = l.questions.findIndex(e => e.index === i);
                                if (-1 !== e)
                                    return {
                                        sectionId: n,
                                        localIndex: e,
                                        sectionIndex: a,
                                        globalIndex: t + e
                                    }
                            }
                            t += l.questions.length
                        }
                        return null
                    }
                    )((null == D ? void 0 : D.sections) || [], Number(n), e),
                    marksData: es,
                    accuracyData: ed,
                    timeSpentData: er,
                    subjectData: eo,
                    topicData: ec,
                    dataAttempt: em,
                    lineChartData: eu,
                    maxSubjectValue: ev,
                    maxTopicValue: eg,
                    mostAttemptedQuestions: t(null !== (w = null == M ? void 0 : M.mostAttemptedQuestions) && void 0 !== w ? w : [], ek),
                    leastAttemptedQuestions: t(null !== (A = null == M ? void 0 : M.leastAttemptedQuestions) && void 0 !== A ? A : [], ek)
                }
            }
    }
    ,
    92450: (e, n, i) => {
        "use strict";
        i.r(n),
            i.d(n, {
                default: () => eU
            });
        var t = i(74848)
            , a = i(96540)
            , l = i(68195)
            , s = i(86715);
        i(24773);
        var d = i(5556)
            , r = i.n(d)
            , o = i(11394)
            , c = i(77969)
            , m = i(95420)
            , u = i(91106)
            , v = i.n(u)
            , g = i(44731);
        function k(e) {
            let { correct: n, incorrect: i, unattempted: a, partial: l } = e;
            return (0,
                t.jsx)(g.nu, {
                    redraw: !1,
                    options: {
                        cutout: "75%"
                    },
                    data: {
                        datasets: [{
                            data: [n, i, a, l],
                            backgroundColor: ["#558B71", "#FF3629", "#FF8C00", "#99BE81"]
                        }]
                    }
                })
        }
        k.propTypes = {
            correct: r().any,
            incorrect: r().any,
            unattempted: r().any,
            partial: r().any
        };
        var x = i(91130);
        function p(e) {
            let { tags: n, classes: i, activeTag: a, onTagClick: l } = e;
            return (0,
                t.jsx)(t.Fragment, {
                    children: n.map((e, n) => (0,
                        t.jsx)("span", {
                            className: "border-2 border-gray-200 text-[#334155] text-xs font-medium px-4 py-2 rounded-full cursor-pointer transition-colors ".concat(a === n ? "bg-[#045692] text-white border-[#045692]" : "hover:bg-gray-50", " ").concat(i),
                            onClick: () => l(n),
                            children: e
                        }, e))
                })
        }
        p.propTypes = {
            tags: r().arrayOf(r().string).isRequired,
            classes: r().string,
            activeTag: r().number,
            onTagClick: r().func
        },
            p.defaultProps = {
                classes: "",
                activeTag: 0,
                onTagClick: () => { }
            };
        var f = i(34681);
        function h(e) {
            var n, i;
            let { data: l, paddingClass: s, showFilterTxt: d } = e
                , r = function () {
                    var e, n;
                    let { sections: i } = (null == l ? void 0 : null === (e = l.getMockTestInfo) || void 0 === e ? void 0 : e.attemptInfo.content) || {}
                        , { sectionWiseScoreSummary: t } = (null == l ? void 0 : null === (n = l.getMockTestInfo) || void 0 === n ? void 0 : n.attemptInfo.attempt.scoreSummary) || {}
                        , a = {};
                    return i.forEach((e, n) => {
                        var i, t;
                        let l = (null === (i = e.contentInLanguages.find(e => "en" === e.language)) || void 0 === i ? void 0 : i.name) || (null === (t = e.contentInLanguages[0]) || void 0 === t ? void 0 : t.name);
                        a[n] = l
                    }
                    ),
                        t.map(e => {
                            let n = a[e.sectionIndex] || "Unknown Section";
                            return {
                                ...e,
                                sectionName: n
                            }
                        }
                        )
                }()
                , [o, c] = (0,
                    a.useState)(0)
                , m = r.map(e => e.sectionName) || []
                , u = r[o] || r[0]
                , v = {
                    score: (null == u ? void 0 : u.score) || 0,
                    maxScore: (null == u ? void 0 : u.maxScore) || 0,
                    correct: (null == u ? void 0 : u.correct) || 0,
                    incorrect: (null == u ? void 0 : u.wrong) || 0,
                    unattempted: (null == u ? void 0 : u.skipped) || 0,
                    partial: (null == u ? void 0 : u.partial) || 0,
                    accuracy: (null == u ? void 0 : u.accuracy) || 0,
                    timeTaken: function () {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        if (e < 60)
                            return "".concat(e, " sec");
                        let n = Math.floor(e / 60)
                            , i = e % 60;
                        return 0 === i ? "".concat(n, " Mins") : "".concat(n, " min ").concat(i, " sec")
                    }(null == u ? void 0 : u.timeTaken) || "--"
                };
            return (0,
                t.jsxs)("div", {
                    className: "".concat(s, " lg:mb-8"),
                    children: [(0,
                        t.jsx)("h2", {
                            className: "text-xl font-bold text-gray-900 mb-4 lg:mb-4 lg:text-2xl lg:font-medium",
                            children: "Section Wise Analysis"
                        }), (0,
                            t.jsx)(x.A, {
                                className: "flex",
                                children: (0,
                                    t.jsx)(p, {
                                        tags: m,
                                        classes: "mr-2 text-nowrap",
                                        activeTag: o,
                                        onTagClick: c
                                    })
                            }), (0,
                                t.jsx)("div", {
                                    className: "bg-white shadow-[0px_2px_15px_0px_#00000012] rounded-lg p-4 mt-5 lg:w-full",
                                    children: (0,
                                        t.jsxs)("div", {
                                            className: "flex flex-col justify-between items-center lg:flex-row lg:justify-start lg:w-full lg:gap-12",
                                            children: [(0,
                                                t.jsxs)("div", {
                                                    className: "flex gap-4 justify-center items-center lg:pb-0 pb-6",
                                                    children: [(0,
                                                        t.jsxs)("div", {
                                                            className: "relative max-w-[148px] max-h-[148px] lg:max-w-[272px] lg:max-h-[272px]",
                                                            children: [(0,
                                                                t.jsx)(k, {
                                                                    correct: v.correct,
                                                                    incorrect: v.incorrect,
                                                                    unattempted: v.unattempted,
                                                                    partial: v.partial
                                                                }), (0,
                                                                    t.jsxs)("div", {
                                                                        className: "absolute top-5 inset-0 flex flex-col items-center justify-center pointer-events-none",
                                                                        children: [(0,
                                                                            t.jsxs)("span", {
                                                                                className: "text-sm font-thin lg:text-base lg:font-normal lg:text-gray-400",
                                                                                children: ["Total", " ", "Score"]
                                                                            }), (0,
                                                                                t.jsxs)("span", {
                                                                                    className: "text-lg font-semibold lg:text-3xl lg:font-semibold",
                                                                                    children: [v.score, " ", "/", v.maxScore]
                                                                                })]
                                                                    })]
                                                        }), (0,
                                                            t.jsxs)("div", {
                                                                className: "flex items-start gap-4 flex-wrap lg:hidden",
                                                                children: [(0,
                                                                    t.jsxs)("div", {
                                                                        className: "flex items-center gap-2 text-xs",
                                                                        children: [(0,
                                                                            t.jsx)("div", {
                                                                                className: "w-3 h-3 bg-[#558B71] rounded-full"
                                                                            }), (0,
                                                                                t.jsx)("span", {
                                                                                    className: "text-[#0558B71]",
                                                                                    children: "Correct"
                                                                                }), (0,
                                                                                    t.jsx)("span", {
                                                                                        className: "font-semibold",
                                                                                        children: v.correct
                                                                                    })]
                                                                    }), (0,
                                                                        t.jsxs)("div", {
                                                                            className: "flex items-center gap-2 text-xs",
                                                                            children: [(0,
                                                                                t.jsx)("div", {
                                                                                    className: "w-3 h-3 bg-[#FF3629] rounded-full"
                                                                                }), (0,
                                                                                    t.jsx)("span", {
                                                                                        className: "text-[#FF3629]",
                                                                                        children: "Incorrect"
                                                                                    }), (0,
                                                                                        t.jsx)("span", {
                                                                                            className: "font-semibold",
                                                                                            children: v.incorrect
                                                                                        })]
                                                                        }), (0,
                                                                            t.jsxs)("div", {
                                                                                className: "flex items-center gap-2 text-xs",
                                                                                children: [(0,
                                                                                    t.jsx)("div", {
                                                                                        className: "w-3 h-3 bg-[#FF8C00] rounded-full"
                                                                                    }), (0,
                                                                                        t.jsx)("span", {
                                                                                            className: "text-[#FF8C00]",
                                                                                            children: "Unattempted"
                                                                                        }), (0,
                                                                                            t.jsx)("span", {
                                                                                                className: "font-semibold",
                                                                                                children: v.unattempted
                                                                                            })]
                                                                            }), (0,
                                                                                t.jsxs)("div", {
                                                                                    className: "".concat((null == v ? void 0 : v.partial) > 0 ? "flex" : "hidden", " items-center gap-2 text-xs"),
                                                                                    children: [(0,
                                                                                        t.jsx)("div", {
                                                                                            className: "w-3 h-3 bg-[#99BE81] rounded-full"
                                                                                        }), (0,
                                                                                            t.jsx)("span", {
                                                                                                className: "text-[#99BE81]",
                                                                                                children: "Partially Correct"
                                                                                            }), (0,
                                                                                                t.jsx)("span", {
                                                                                                    className: "font-semibold",
                                                                                                    children: v.partial
                                                                                                })]
                                                                                })]
                                                            })]
                                                }), (0,
                                                    t.jsxs)("section", {
                                                        className: "flex flex-col gap-20 lg:w-full",
                                                        children: [(0,
                                                            t.jsxs)("div", {
                                                                className: "items-start gap-6 flex-wrap hidden lg:flex",
                                                                children: [(0,
                                                                    t.jsxs)("div", {
                                                                        className: "flex items-center gap-2 text-sm lg:text-base lg:font-medium",
                                                                        children: [(0,
                                                                            t.jsx)("div", {
                                                                                className: "w-3 h-3 bg-[#558B71] rounded-full"
                                                                            }), (0,
                                                                                t.jsx)("span", {
                                                                                    className: "text-[#558B71]",
                                                                                    children: "Correct"
                                                                                }), (0,
                                                                                    t.jsx)("span", {
                                                                                        className: "text-xl lg:font-semibold",
                                                                                        children: v.correct
                                                                                    })]
                                                                    }), (0,
                                                                        t.jsxs)("div", {
                                                                            className: "flex items-center gap-2 text-sm lg:text-base lg:font-medium",
                                                                            children: [(0,
                                                                                t.jsx)("div", {
                                                                                    className: "w-3 h-3 bg-[#FF3629] rounded-full"
                                                                                }), (0,
                                                                                    t.jsx)("span", {
                                                                                        className: "text-[#FF3629]",
                                                                                        children: "Incorrect"
                                                                                    }), (0,
                                                                                        t.jsx)("span", {
                                                                                            className: "text-xl lg:font-semibold",
                                                                                            children: v.incorrect
                                                                                        })]
                                                                        }), (0,
                                                                            t.jsxs)("div", {
                                                                                className: "flex items-center gap-2 text-sm lg:text-base lg:font-medium",
                                                                                children: [(0,
                                                                                    t.jsx)("div", {
                                                                                        className: "w-3 h-3 bg-[#FF8C00] rounded-full"
                                                                                    }), (0,
                                                                                        t.jsx)("span", {
                                                                                            className: "text-[#FF8C00]",
                                                                                            children: "Unattempted"
                                                                                        }), (0,
                                                                                            t.jsx)("span", {
                                                                                                className: "text-xl lg:font-semibold",
                                                                                                children: v.unattempted
                                                                                            })]
                                                                            }), (0,
                                                                                t.jsxs)("div", {
                                                                                    className: "".concat((null == v ? void 0 : v.partial) > 0 ? "flex" : "hidden", " items-center gap-2 text-sm\n              lg:text-base lg:font-medium"),
                                                                                    children: [(0,
                                                                                        t.jsx)("div", {
                                                                                            className: "w-3 h-3 bg-[#99BE81] rounded-full"
                                                                                        }), (0,
                                                                                            t.jsx)("span", {
                                                                                                className: "text-[#99BE81]",
                                                                                                children: "Partially Correct"
                                                                                            }), (0,
                                                                                                t.jsx)("span", {
                                                                                                    className: "text-xl lg:font-semibold",
                                                                                                    children: v.partial
                                                                                                })]
                                                                                })]
                                                            }), (0,
                                                                t.jsxs)("div", {
                                                                    className: "flex gap-2  flex-wrap  w-full justify-center lg:gap-4 lg:flex-nowrap lg:justify-between",
                                                                    children: [(0,
                                                                        t.jsxs)("div", {
                                                                            className: "flex flex-col min-w-[146px] bg-[#0000000A] rounded-md p-3.5 pb-2.5 justify-around lg:w-full",
                                                                            children: [(0,
                                                                                t.jsx)("span", {
                                                                                    className: "text-sm text-[#334155] lg:text-base font-noraml",
                                                                                    children: "Accuracy"
                                                                                }), (0,
                                                                                    t.jsxs)("span", {
                                                                                        className: "text-sm font-semibold text-[#334155] lg:text-xl",
                                                                                        children: [(0,
                                                                                            t.jsx)("span", {
                                                                                                className: "text-xl text-[#334155]-600 ",
                                                                                                children: v.accuracy
                                                                                            }), " %"]
                                                                                    })]
                                                                        }), (0,
                                                                            t.jsxs)("div", {
                                                                                className: "flex flex-col min-w-[146px] bg-[#0000000A] rounded-md p-2.5 pb-1.5 justify-around lg:w-full",
                                                                                children: [(0,
                                                                                    t.jsxs)("span", {
                                                                                        className: "text-sm text-[#334155] lg:text-base font-noraml inline-flex items-center",
                                                                                        children: ["Time Taken", (0,
                                                                                            t.jsx)(f.A, {})]
                                                                                    }), (0,
                                                                                        t.jsx)("span", {
                                                                                            className: "text-sm text-[#334155] lg:text-xl font-semibold",
                                                                                            children: (null == l ? void 0 : null === (i = l.getMockTestInfo) || void 0 === i ? void 0 : null === (n = i.attemptInfo) || void 0 === n ? void 0 : n.mode) === "Online" ? (0,
                                                                                                t.jsx)("span", {
                                                                                                    children: (0,
                                                                                                        t.jsx)("span", {
                                                                                                            className: "text-xl text-[#334155]-600",
                                                                                                            children: v.timeTaken
                                                                                                        })
                                                                                                }) : (0,
                                                                                                    t.jsx)("span", {
                                                                                                        className: "pl-1",
                                                                                                        children: "--"
                                                                                                    })
                                                                                        })]
                                                                            })]
                                                                })]
                                                    })]
                                        })
                                }), (null == d ? void 0 : d.length) > 0 && (0,
                                    t.jsx)("p", {
                                        className: "text-sm font-light mt-4",
                                        children: "*Filters do not apply to this section"
                                    })]
                })
        }
        h.propTypes = {
            data: r().shape({
                getMockTestInfo: r().shape({
                    attemptInfo: r().shape({
                        content: r().shape({
                            sections: r().arrayOf(r().shape({
                                contentInLanguages: r().arrayOf(r().shape({
                                    language: r().string.isRequired,
                                    content: r().string.isRequired
                                })).isRequired
                            })).isRequired
                        }).isRequired,
                        mode: r().any,
                        attempt: r().shape({
                            scoreSummary: r().shape({
                                sectionWiseScoreSummary: r().arrayOf(r().shape({
                                    sectionIndex: r().number.isRequired,
                                    score: r().number.isRequired,
                                    maxScore: r().number.isRequired,
                                    correct: r().number.isRequired,
                                    wrong: r().number.isRequired,
                                    skipped: r().number.isRequired,
                                    accuracy: r().number.isRequired,
                                    timeTaken: r().number
                                })).isRequired
                            }).isRequired
                        }).isRequired
                    }).isRequired
                }).isRequired
            }).isRequired,
            paddingClass: r().any,
            showFilterTxt: r().any
        };
        var b = i(94145)
            , N = i(9812)
            , y = i(29965)
            , F = i.n(y);
        let S = {
            src: "https://assets.madeeasy.in/prod/_next/static/media/mock-sub-icon.d09aa326.png",
            height: 78,
            width: 85,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAMAAAACh/xsAAAAaVBMVEXL//8AAABJcYFRbYtaqOLH9/+o4vuS6/x+qtSHocbCwdOanre2wNjZ1d97uuZpt+tOwf82sPj////4/Pni8PfZ8/lTsu5Kse/B6P+I0v6S2f9QwPx7zv/48/Zt0/9Wy/////+dtdWx6v9bpreUAAAAHXRSTlMBP1Oa9R/1FmyX7NX++V3+iSozu5D5tftnv5vl8PZfjE4AAAAJcEhZcwAAFiUAABYlAUlSJPAAAABASURBVHicFcZXFkAwFEDBi1Qtes8L9r9Ix3wNaOddngFtFcvCgnXNHf2f5Ym16nrOtKogYjguSemdJ9DbbsaBD1SsA0VxurtkAAAAAElFTkSuQmCC",
            blurWidth: 8,
            blurHeight: 7
        };
        function j(e) {
            let { subjects: n, title: i, paddingClass: l, totalScoreAvg: s, entityType: d } = e;
            console.log("subjects", n);
            let [r, o] = (0,
                a.useState)(!1)
                , c = r ? n : n.slice(0, 6)
                , m = n.length > 6;
            return (0,
                t.jsxs)("div", {
                    className: "".concat(l),
                    children: [(0,
                        t.jsx)("h2", {
                            className: "lg:text-base text-base font-medium text-gray-900 lg:mb-4 mb-4",
                            children: i
                        }), n.length > 0 ? (0,
                            t.jsx)("div", {
                                className: "grid grid-cols-1 ".concat("dart-test" === d ? "lg:grid-cols-5" : "lg:grid-cols-6", " gap-3"),
                                children: c.map((e, n) => {
                                    var i, a, l;
                                    return (0,
                                        t.jsxs)("div", {
                                            className: "p-3 bg-white rounded-lg shadow-[0px_2px_15px_0px_#00000012]",
                                            children: [(0,
                                                t.jsxs)("div", {
                                                    className: "flex items-center gap-2 pb-2",
                                                    children: [(0,
                                                        t.jsx)("div", {
                                                            className: "bg-[#E9F7FF] rounded-md p-1.5 shrink-0",
                                                            children: (0,
                                                                t.jsx)(F(), {
                                                                    src: S,
                                                                    alt: "subject icon",
                                                                    className: "w-5 h-5 object-cover",
                                                                    width: 20,
                                                                    height: 20
                                                                })
                                                        }), (0,
                                                            t.jsx)("h3", {
                                                                className: "font-semibold text-black text-xs leading-tight line-clamp-2",
                                                                children: e.name
                                                            })]
                                                }), (0,
                                                    t.jsxs)("div", {
                                                        className: "flex flex-col items-center gap-2",
                                                        children: [(0,
                                                            t.jsx)("div", {
                                                                className: "".concat("dart-test" === d ? "lg:w-32 lg:h-32 w-20 h-20" : "w-20 h-20", " relative "),
                                                                children: (0,
                                                                    t.jsx)(k, {
                                                                        correct: null == e ? void 0 : e.correct,
                                                                        incorrect: null == e ? void 0 : e.wrong,
                                                                        unattempted: null == e ? void 0 : e.skipped,
                                                                        partial: null == e ? void 0 : e.partial
                                                                    })
                                                            }), (0,
                                                                t.jsxs)("div", {
                                                                    className: "grid grid-cols-2 gap-x-2 gap-y-1 w-full",
                                                                    children: [(0,
                                                                        t.jsxs)("div", {
                                                                            className: "flex items-center gap-1",
                                                                            children: [(0,
                                                                                t.jsx)("div", {
                                                                                    className: "w-2 h-2 bg-[#558B71] rounded-full shrink-0"
                                                                                }), (0,
                                                                                    t.jsx)("span", {
                                                                                        className: "text-[10px] text-[#558B71] truncate",
                                                                                        children: "Correct"
                                                                                    })]
                                                                        }), (0,
                                                                            t.jsxs)("div", {
                                                                                className: "flex items-center gap-1",
                                                                                children: [(0,
                                                                                    t.jsx)("div", {
                                                                                        className: "w-2 h-2 bg-[#FF3629] rounded-full shrink-0"
                                                                                    }), (0,
                                                                                        t.jsx)("span", {
                                                                                            className: "text-[10px] text-[#FF3629] truncate",
                                                                                            children: "Incorrect"
                                                                                        })]
                                                                            }), (0,
                                                                                t.jsxs)("div", {
                                                                                    className: "flex items-center gap-1",
                                                                                    children: [(0,
                                                                                        t.jsx)("div", {
                                                                                            className: "w-2 h-2 bg-[#FF8C00] rounded-full shrink-0"
                                                                                        }), (0,
                                                                                            t.jsx)("span", {
                                                                                                className: "text-[10px] text-[#FF8C00] truncate",
                                                                                                children: "Unattempted"
                                                                                            })]
                                                                                }), e.partial > 0 && (0,
                                                                                    t.jsxs)("div", {
                                                                                        className: "flex items-center gap-1",
                                                                                        children: [(0,
                                                                                            t.jsx)("div", {
                                                                                                className: "w-2 h-2 bg-[#99BE81] rounded-full shrink-0"
                                                                                            }), (0,
                                                                                                t.jsx)("span", {
                                                                                                    className: "text-[10px] text-[#99BE81] truncate",
                                                                                                    children: "Partial"
                                                                                                })]
                                                                                    })]
                                                                }), (0,
                                                                    t.jsxs)("div", {
                                                                        className: "".concat("dart-test" === d ? "text-xs" : "text-[11px]", " w-full space-y-1 pt-1 border-t border-gray-100 text-black"),
                                                                        children: [(0,
                                                                            t.jsxs)("div", {
                                                                                className: "flex justify-between",
                                                                                children: [(0,
                                                                                    t.jsx)("span", {
                                                                                        className: "font-medium text-gray-500",
                                                                                        children: "Score"
                                                                                    }), (0,
                                                                                        t.jsxs)("span", {
                                                                                            children: [e.score, "/", e.maxScore]
                                                                                        })]
                                                                            }), (0,
                                                                                t.jsxs)("div", {
                                                                                    className: "".concat("dart-test" === d ? "hidden" : "flex", "  justify-between"),
                                                                                    children: [(0,
                                                                                        t.jsx)("span", {
                                                                                            className: "font-medium text-gray-500",
                                                                                            children: "Avg Score"
                                                                                        }), (0,
                                                                                            t.jsx)("span", {
                                                                                                children: (null == s ? void 0 : null === (i = s[n]) || void 0 === i ? void 0 : i.averageScore) ? "".concat(s[n].averageScore, "/").concat(e.maxScore) : "-"
                                                                                            })]
                                                                                }), (0,
                                                                                    t.jsxs)("div", {
                                                                                        className: "flex justify-between",
                                                                                        children: [(0,
                                                                                            t.jsx)("span", {
                                                                                                className: "font-medium text-gray-500",
                                                                                                children: "Accuracy"
                                                                                            }), (0,
                                                                                                t.jsxs)("span", {
                                                                                                    children: [null == e ? void 0 : e.accuracy, "%"]
                                                                                                })]
                                                                                    }), (0,
                                                                                        t.jsxs)("div", {
                                                                                            className: "flex justify-between",
                                                                                            children: [(0,
                                                                                                t.jsx)("span", {
                                                                                                    className: "font-medium text-gray-500",
                                                                                                    children: "Questions"
                                                                                                }), (0,
                                                                                                    t.jsx)("span", {
                                                                                                        children: e.total
                                                                                                    })]
                                                                                        }), (0,
                                                                                            t.jsxs)("div", {
                                                                                                className: "".concat("dart-test" === d ? "hidden" : "flex", " justify-between"),
                                                                                                children: [(0,
                                                                                                    t.jsx)("span", {
                                                                                                        className: "font-medium text-gray-500",
                                                                                                        children: "Highest"
                                                                                                    }), (0,
                                                                                                        t.jsx)("span", {
                                                                                                            children: (null == s ? void 0 : null === (a = s[n]) || void 0 === a ? void 0 : a.highestScore) ? "".concat(s[n].highestScore, "/").concat(e.maxScore) : "-"
                                                                                                        })]
                                                                                            }), (0,
                                                                                                t.jsxs)("div", {
                                                                                                    className: "".concat("dart-test" === d ? "hidden" : "flex", "  flex justify-between"),
                                                                                                    children: [(0,
                                                                                                        t.jsx)("span", {
                                                                                                            className: "font-medium text-gray-500",
                                                                                                            children: "Avg Acc."
                                                                                                        }), (0,
                                                                                                            t.jsx)("span", {
                                                                                                                children: (null == s ? void 0 : null === (l = s[n]) || void 0 === l ? void 0 : l.averageAccuracy) ? "".concat(s[n].averageAccuracy, "%") : "-"
                                                                                                            })]
                                                                                                })]
                                                                    })]
                                                    })]
                                        }, e.name)
                                }
                                )
                            }) : (0,
                                t.jsx)("p", {
                                    className: "bg-white shadow-sm p-5",
                                    children: "No content available for this key."
                                }), m && (0,
                                    t.jsx)("div", {
                                        className: "my-4 text-center relative lg:before:absolute lg:before:left-0 lg:before:right-0 lg:before:top-1/2 lg:before:h-px lg:before:bg-[#33415566]",
                                        children: (0,
                                            t.jsxs)("button", {
                                                type: "button",
                                                className: "bg-[#f9fafb] lg:bg-[#f7f8fa] relative inline-flex justify-center items-center px-4 py-2 lg:text-[#33415566] text-black text-sm font-medium transition-colors",
                                                onClick: () => {
                                                    o(!r)
                                                }
                                                ,
                                                children: [(0,
                                                    t.jsx)("span", {
                                                        children: r ? "View less" : "View more"
                                                    }), r ? (0,
                                                        t.jsx)(b.A, {
                                                            className: "w-4 h-4 ml-2"
                                                        }) : (0,
                                                            t.jsx)(N.A, {
                                                                className: "w-4 h-4 ml-2"
                                                            })]
                                            })
                                    })]
                })
        }
        j.propTypes = {
            subjects: r().arrayOf(r().shape({
                name: r().string.isRequired,
                score: r().number,
                maxScore: r().number,
                accuracy: r().number,
                total: r().number,
                correct: r().number,
                wrong: r().number,
                skipped: r().number
            })),
            title: r().string,
            paddingClass: r().any,
            totalScoreAvg: r().any,
            entityType: r().string
        },
            j.defaultProps = {
                subjects: []
            };
        var w = i(26518)
            , A = i(75042)
            , T = i(91564)
            , C = i(98679);
        let I = function (e) {
            let { videos: n } = e
                , [i, l] = (0,
                    a.useState)(!1)
                , [s, d] = (0,
                    a.useState)(null)
                , r = e => {
                    d(e),
                        l(!0)
                }
                ;
            return (0,
                t.jsxs)("div", {
                    className: "bg-white rounded-lg shadow-sm p-5 lg:bg-transparent",
                    children: [(0,
                        t.jsx)("h2", {
                            className: "text-xl font-bold text-gray-900 mb-6 lg:text-2xl ",
                            children: "Explainer Videos"
                        }), (0,
                            t.jsxs)("div", {
                                className: "gap-4",
                                children: [i && s && (0,
                                    t.jsx)(C.A, {
                                        videoUrl: s,
                                        onClose: () => {
                                            d(null),
                                                l(!1)
                                        }
                                    }), (0,
                                        t.jsx)(x.A, {
                                            className: "gap-2",
                                            children: (0,
                                                t.jsx)("ul", {
                                                    className: "flex flex-shrink-0 gap-4 w-full text-xs font-medium lg:font-semibold \n        lg:text-base",
                                                    children: (0,
                                                        t.jsx)("div", {
                                                            className: "flex gap-4 w-full",
                                                            children: (null == n ? void 0 : n.length) > 0 ? n.map(e => (0,
                                                                t.jsxs)("div", {
                                                                    className: "border border-blue-200 bg-white rounded-lg lg:p-[6px] w-[160px] lg:w-[322px] flex-shrink-0",
                                                                    onClick: () => r(null == e ? void 0 : e.videoUrl),
                                                                    children: [(0,
                                                                        t.jsxs)("div", {
                                                                            className: "flex relative ",
                                                                            children: [(0,
                                                                                t.jsx)(F(), {
                                                                                    width: 500,
                                                                                    height: 500,
                                                                                    src: null == e ? void 0 : e.thumbnailUrl,
                                                                                    alt: "teacher-banner",
                                                                                    className: "self-start w-80 lg:h-36 rounded lg:rounded-tl-lg lg:rounded-tr-lg aspect-[31/18]"
                                                                                }), (0,
                                                                                    t.jsxs)("div", {
                                                                                        className: "flex absolute top-0 left-0 w-100 h-100 bg-slate-700/40 min-w-full min-h-full items-center  rounded-tl-lg rounded-tr-lg justify-center",
                                                                                        children: [(0,
                                                                                            t.jsx)(F(), {
                                                                                                width: 48,
                                                                                                height: 48,
                                                                                                src: T.A,
                                                                                                alt: "play-button",
                                                                                                className: "w-12 absolute cursor-pointer"
                                                                                            }), (0,
                                                                                                t.jsx)("span", {
                                                                                                    className: "bg-black/90 self-end absolute right-1 bottom-1 text-white px-1 text-sm font-medium",
                                                                                                    children: (0,
                                                                                                        w.GP)(null == e ? void 0 : e.duration, "mm:ss") || "00:00"
                                                                                                })]
                                                                                    })]
                                                                        }), (0,
                                                                            t.jsx)("div", {
                                                                                className: "py-3 px-2",
                                                                                children: (0,
                                                                                    t.jsxs)("span", {
                                                                                        className: "text-greyFont rounded-sm lg:text-base text-xs font-medium line-clamp-2",
                                                                                        children: [" ", (null == e ? void 0 : e.title) || "No Title Found"]
                                                                                    })
                                                                            })]
                                                                }, null == e ? void 0 : e.id)) : (0,
                                                                    t.jsx)("div", {
                                                                        className: "w-full",
                                                                        children: (0,
                                                                            t.jsx)("div", {
                                                                                className: "",
                                                                                children: (0,
                                                                                    t.jsx)(A.A, {
                                                                                        noMsg: "No Videos found"
                                                                                    })
                                                                            })
                                                                    })
                                                        })
                                                })
                                        })]
                            })]
                })
        };
        var D = i(27312)
            , B = i(67547)
            , M = i(30968);
        function E(e) {
            let { isResultDeclared: n, isFinalSubmissionDatePassed: i, resultAt: a, finalSubmissionAt: l } = e;
            return n ? i ? (0,
                t.jsx)("span", {
                    className: "text-sm",
                    children: "The displayed Rank and Percentile represent an estimate assuming your attempt took place within the active test window."
                }) : (0,
                    t.jsxs)("span", {
                        className: "text-sm",
                        children: ["Ranks are subject to change until", " ", l ? (0,
                            w.GP)(l, "PP") : "—", ". Please re-visit for your final rank."]
                    }) : (0,
                        t.jsxs)("span", {
                            className: "text-sm",
                            children: ["The rank and leaderboard will be displayed after", " ", (0,
                                w.GP)(a, "PP"), ". Please re-visit your rank and view the leaderboard."]
                        })
        }
        E.propTypes = {
            isResultDeclared: r().bool.isRequired,
            isFinalSubmissionDatePassed: r().bool.isRequired,
            resultAt: r().instanceOf(Date).isRequired,
            finalSubmissionAt: r().instanceOf(Date)
        };
        let R = function (e) {
            let { handleShowPopUp: n, isFinalSubmissionDatePassed: i, isResultDeclared: a, resultAt: l, finalSubmissionAt: s } = e;
            return (0,
                t.jsxs)("div", {
                    className: "modern-container",
                    children: [(0,
                        t.jsx)("button", {
                            type: "button",
                            className: "modern-trigger lg:hidden",
                            onClick: n,
                            children: (0,
                                t.jsx)(F(), {
                                    src: M.A,
                                    width: "4",
                                    height: "14",
                                    alt: "Information"
                                })
                        }), (0,
                            t.jsx)("button", {
                                type: "button",
                                className: "modern-trigger hidden lg:flex",
                                children: (0,
                                    t.jsx)(F(), {
                                        src: M.A,
                                        width: "4",
                                        height: "14",
                                        alt: "Information"
                                    })
                            }), (0,
                                t.jsx)("div", {
                                    className: "modern-popover",
                                    children: (0,
                                        t.jsx)("div", {
                                            className: "popover-content",
                                            children: (0,
                                                t.jsx)("p", {
                                                    className: "text-base",
                                                    children: (0,
                                                        t.jsx)(E, {
                                                            isResultDeclared: a,
                                                            isFinalSubmissionDatePassed: i,
                                                            resultAt: l,
                                                            finalSubmissionAt: s
                                                        })
                                                })
                                        })
                                })]
                })
        };
        function L(e) {
            let { overallStats: n, isResultDeclared: i, handleViewLeaderboard: l, leaderboardData: s, isFinalSubmissionDatePassed: d, resultAt: r, finalSubmissionAt: c, handleViewSolutions: m, mode: u, isLeaderBoardVisible: v, paddingClass: g, showFilterTxt: x, entityType: p } = e
                , [h, b] = (0,
                    a.useState)(!1)
                , N = () => {
                    b(!h)
                }
                ;
            return (0,
                t.jsxs)("div", {
                    className: "".concat(g, " lg:mb-5"),
                    children: [(0,
                        t.jsxs)("div", {
                            className: "bg-white rounded-lg p-4 relative lg:w-full shadow-[0px_2px_15px_0px_#00000012]",
                            children: ["dart-test" !== p && (0,
                                t.jsxs)(t.Fragment, {
                                    children: [(0,
                                        t.jsx)(R, {
                                            isResultDeclared: i,
                                            isFinalSubmissionDatePassed: d,
                                            handleShowPopUp: N,
                                            finalSubmissionAt: c,
                                            resultAt: r
                                        }), (0,
                                            t.jsx)(B.A, {
                                                showPopup: h,
                                                popupFor: "mock-result",
                                                onPopupClose: N,
                                                divwidth: "lg:max-w-[758px] p-2 w-full",
                                                messageData: (0,
                                                    t.jsxs)(t.Fragment, {
                                                        children: [(0,
                                                            t.jsx)("button", {
                                                                type: "button",
                                                                "aria-label": "close",
                                                                className: "absolute top-3 right-3 text-[#0F172A] text-sm",
                                                                onClick: N,
                                                                children: (0,
                                                                    t.jsx)("svg", {
                                                                        width: "14",
                                                                        height: "14",
                                                                        viewBox: "0 0 15 15",
                                                                        fill: "none",
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        children: (0,
                                                                            t.jsx)("path", {
                                                                                d: "M8.47635 7.24351L13.8632 1.85671C14.1756 1.54431 14.1756 1.03791 13.8632 0.725511C13.5512 0.413111 13.044 0.413111 12.732 0.725511L7.34515 6.11231L1.95915 0.725511C1.64715 0.413111 1.14035 0.413111 0.827951 0.725511C0.515551 1.03791 0.515551 1.54431 0.827951 1.85671L6.21395 7.24351L0.496751 12.9607C0.184351 13.2731 0.184351 13.7795 0.496751 14.0919C0.652751 14.2483 0.85755 14.3263 1.06235 14.3263C1.26715 14.3263 1.47195 14.2483 1.62795 14.0919L7.34515 8.37471L13.0624 14.0919C13.2188 14.2483 13.4232 14.3263 13.628 14.3263C13.8328 14.3263 14.0372 14.2483 14.1936 14.0919C14.506 13.7795 14.506 13.2731 14.1936 12.9607L8.47635 7.24351Z",
                                                                                fill: "#0F172A"
                                                                            })
                                                                    })
                                                            }), (0,
                                                                t.jsx)(E, {
                                                                    isResultDeclared: i,
                                                                    isFinalSubmissionDatePassed: d,
                                                                    finalSubmissionAt: c,
                                                                    resultAt: r
                                                                })]
                                                    })
                                            })]
                                }), (0,
                                    t.jsxs)("div", {
                                        className: "flex flex-col xl:flex-row justify-between items-center lg:flex-row lg:justify-start lg:w-full lg:gap-[40px]",
                                        children: [(0,
                                            t.jsxs)("div", {
                                                className: "flex gap-4 justify-center items-center lg:pb-0 pb-6",
                                                children: [(0,
                                                    t.jsxs)("div", {
                                                        className: "relative max-w-[148px] max-h-[148px] lg:max-w-[272px] lg:max-h-[272px]",
                                                        children: [(0,
                                                            t.jsx)(k, {
                                                                correct: n.correct,
                                                                incorrect: n.incorrect,
                                                                unattempted: n.unattempted,
                                                                partial: n.partial
                                                            }), (0,
                                                                t.jsxs)("div", {
                                                                    className: "absolute top-5 inset-0 flex flex-col items-center justify-center pointer-events-none",
                                                                    children: [(0,
                                                                        t.jsx)("span", {
                                                                            className: "text-sm font-thin lg:text-base lg:font-normal lg:text-gray-400",
                                                                            children: "Total Score"
                                                                        }), (0,
                                                                            t.jsxs)("span", {
                                                                                className: "text-lg font-semibold lg:text-3xl lg:font-semibold",
                                                                                children: [null == n ? void 0 : n.score, " ", "/", " ", null == n ? void 0 : n.maxScore]
                                                                            })]
                                                                })]
                                                    }), (0,
                                                        t.jsxs)("div", {
                                                            className: "flex items-start gap-4 flex-wrap lg:hidden",
                                                            children: [(0,
                                                                t.jsxs)("div", {
                                                                    className: "flex items-center gap-2 text-xs",
                                                                    children: [(0,
                                                                        t.jsx)("div", {
                                                                            className: "w-3 h-3 bg-[#558B71] rounded-full"
                                                                        }), (0,
                                                                            t.jsx)("span", {
                                                                                className: "text-[#558B71]",
                                                                                children: "Correct"
                                                                            }), (0,
                                                                                t.jsx)("span", {
                                                                                    className: "font-semibold",
                                                                                    children: n.correct
                                                                                })]
                                                                }), (0,
                                                                    t.jsxs)("div", {
                                                                        className: "flex items-center gap-2 text-xs",
                                                                        children: [(0,
                                                                            t.jsx)("div", {
                                                                                className: "w-3 h-3 bg-[#FF3629] rounded-full"
                                                                            }), (0,
                                                                                t.jsx)("span", {
                                                                                    className: "text-[#FF3629]",
                                                                                    children: "Incorrect"
                                                                                }), (0,
                                                                                    t.jsx)("span", {
                                                                                        className: "font-semibold",
                                                                                        children: n.incorrect
                                                                                    })]
                                                                    }), (0,
                                                                        t.jsxs)("div", {
                                                                            className: "flex items-center gap-2 text-xs",
                                                                            children: [(0,
                                                                                t.jsx)("div", {
                                                                                    className: "w-3 h-3 bg-[#FF8C00] rounded-full"
                                                                                }), (0,
                                                                                    t.jsx)("span", {
                                                                                        className: "text-[#FF8C00]",
                                                                                        children: "Unattempted"
                                                                                    }), (0,
                                                                                        t.jsx)("span", {
                                                                                            className: "font-semibold",
                                                                                            children: n.unattempted
                                                                                        })]
                                                                        }), (0,
                                                                            t.jsxs)("div", {
                                                                                className: "".concat(n.partial > 0 ? "flex" : "hidden", " items-center gap-2 text-xs"),
                                                                                children: [(0,
                                                                                    t.jsx)("div", {
                                                                                        className: "w-3 h-3 bg-[#99BE81] rounded-full"
                                                                                    }), (0,
                                                                                        t.jsx)("span", {
                                                                                            className: "text-[#99BE81]",
                                                                                            children: "Partially Correct"
                                                                                        }), (0,
                                                                                            t.jsx)("span", {
                                                                                                className: "font-semibold",
                                                                                                children: n.partial
                                                                                            })]
                                                                            })]
                                                        })]
                                            }), (0,
                                                t.jsxs)("section", {
                                                    className: "flex flex-col gap-20 lg:w-full",
                                                    children: [(0,
                                                        t.jsxs)("div", {
                                                            className: "items-start gap-6 flex-wrap hidden lg:flex",
                                                            children: [(0,
                                                                t.jsxs)("div", {
                                                                    className: "flex items-center gap-2 text-sm lg:text-base lg:font-medium",
                                                                    children: [(0,
                                                                        t.jsx)("div", {
                                                                            className: "w-3 h-3 bg-[#558B71] rounded-full"
                                                                        }), (0,
                                                                            t.jsx)("span", {
                                                                                className: "text-[#558B71]",
                                                                                children: "Correct"
                                                                            }), (0,
                                                                                t.jsx)("span", {
                                                                                    className: "text-xl lg:font-semibold",
                                                                                    children: n.correct
                                                                                })]
                                                                }), (0,
                                                                    t.jsxs)("div", {
                                                                        className: "flex items-center gap-2 text-sm lg:text-base lg:font-medium",
                                                                        children: [(0,
                                                                            t.jsx)("div", {
                                                                                className: "w-3 h-3 bg-[#FF3629] rounded-full"
                                                                            }), (0,
                                                                                t.jsx)("span", {
                                                                                    className: "text-[#FF3629]",
                                                                                    children: "Incorrect"
                                                                                }), (0,
                                                                                    t.jsx)("span", {
                                                                                        className: "text-xl lg:font-semibold",
                                                                                        children: n.incorrect
                                                                                    })]
                                                                    }), (0,
                                                                        t.jsxs)("div", {
                                                                            className: "flex items-center gap-2 text-sm lg:text-base lg:font-medium",
                                                                            children: [(0,
                                                                                t.jsx)("div", {
                                                                                    className: "w-3 h-3 bg-[#FF8C00] rounded-full"
                                                                                }), (0,
                                                                                    t.jsx)("span", {
                                                                                        className: "text-[#FF8C00]",
                                                                                        children: "Unattempted"
                                                                                    }), (0,
                                                                                        t.jsx)("span", {
                                                                                            className: "text-xl lg:font-semibold",
                                                                                            children: n.unattempted
                                                                                        })]
                                                                        }), (0,
                                                                            t.jsxs)("div", {
                                                                                className: "".concat(n.partial > 0 ? "flex" : "hidden", " items-center gap-2 text-sm lg:text-base lg:font-medium"),
                                                                                children: [(0,
                                                                                    t.jsx)("div", {
                                                                                        className: "w-3 h-3 bg-[#99BE81] rounded-full"
                                                                                    }), (0,
                                                                                        t.jsx)("span", {
                                                                                            className: "text-[#99BE81]",
                                                                                            children: "Partially Correct"
                                                                                        }), (0,
                                                                                            t.jsx)("span", {
                                                                                                className: "text-xl lg:font-semibold",
                                                                                                children: n.partial
                                                                                            })]
                                                                            })]
                                                        }), (0,
                                                            t.jsxs)("div", {
                                                                className: "flex gap-2 flex-wrap w-full justify-center lg:gap-4 lg:flex-nowrap lg:justify-between",
                                                                children: ["dart-test" !== p && (0,
                                                                    t.jsxs)(t.Fragment, {
                                                                        children: [(0,
                                                                            t.jsxs)("div", {
                                                                                className: "flex flex-col min-w-[146px] bg-[#0000000A] rounded-md p-3.5 pb-2.5 justify-around lg:w-full",
                                                                                children: [(0,
                                                                                    t.jsx)("span", {
                                                                                        className: "text-sm text-[#334155] lg:text-base font-normal",
                                                                                        children: "Rank"
                                                                                    }), (0,
                                                                                        t.jsx)("span", {
                                                                                            className: "text-sm text-[#334155] lg:text-xl font-[300]",
                                                                                            children: (null == n ? void 0 : n.totalRank) === 0 && (null == n ? void 0 : n.rank) === 0 ? (0,
                                                                                                t.jsx)("span", {
                                                                                                    className: "font-semibold",
                                                                                                    children: "--"
                                                                                                }) : (0,
                                                                                                    t.jsxs)(t.Fragment, {
                                                                                                        children: [(0,
                                                                                                            t.jsx)("span", {
                                                                                                                className: "text-2xl xl:text-3xl text-[#334155]-600 lg:text-4xl font-semibold",
                                                                                                                children: n.rank
                                                                                                            }), " ", " ", "out of", " ", null == n ? void 0 : n.totalRank]
                                                                                                    })
                                                                                        })]
                                                                            }), (0,
                                                                                t.jsxs)("div", {
                                                                                    className: "flex flex-col min-w-[146px] bg-[#0000000A]  rounded-md p-3.5 pb-2.5  justify-around lg:w-full",
                                                                                    children: [(0,
                                                                                        t.jsx)("span", {
                                                                                            className: "text-sm text-[#334155] lg:text-base font-normal",
                                                                                            children: "Percentile"
                                                                                        }), (0,
                                                                                            t.jsx)("span", {
                                                                                                className: "text-sm text-[#334155] lg:text-2xl",
                                                                                                children: (null == n ? void 0 : n.percentile) === 0 ? "--" : (0,
                                                                                                    t.jsxs)(t.Fragment, {
                                                                                                        children: [(0,
                                                                                                            t.jsx)("span", {
                                                                                                                className: "text-xl font-semibold text-[#334155]-600",
                                                                                                                children: null == n ? void 0 : n.percentile
                                                                                                            }), " ", " ", "%"]
                                                                                                    })
                                                                                            })]
                                                                                })]
                                                                    }), (0,
                                                                        t.jsxs)("div", {
                                                                            className: "flex flex-col min-w-[146px] bg-[#0000000A]  rounded-md p-3.5 pb-2.5 justify-around lg:w-full",
                                                                            children: [(0,
                                                                                t.jsx)("span", {
                                                                                    className: "text-sm text-[#334155] lg:text-base font-normal",
                                                                                    children: "Accuracy"
                                                                                }), (0,
                                                                                    t.jsxs)("span", {
                                                                                        className: "text-sm text-[#334155] lg:text-2xl",
                                                                                        children: [(0,
                                                                                            t.jsx)("span", {
                                                                                                className: "text-xl font-semibold text-[#334155]-600",
                                                                                                children: n.accuracy
                                                                                            }), " ", " ", "%"]
                                                                                    })]
                                                                        }), (0,
                                                                            t.jsxs)("div", {
                                                                                className: "flex flex-col min-w-[146px] bg-[#0000000A] rounded-md p-3.5 pb-2.5 justify-around lg:w-full",
                                                                                children: [(0,
                                                                                    t.jsxs)("span", {
                                                                                        className: "text-sm text-[#334155] lg:text-base font-normal inline-flex items-center",
                                                                                        children: ["Time Taken", "dart-test" !== p && (0,
                                                                                            t.jsx)(f.A, {})]
                                                                                    }), "Online" === u ? (0,
                                                                                        t.jsx)("span", {
                                                                                            className: "text-sm text-[#334155] lg:text-2xl",
                                                                                            children: (0,
                                                                                                t.jsx)("span", {
                                                                                                    className: "text-xl font-semibold text-[#334155]-600",
                                                                                                    children: n.timeTaken
                                                                                                })
                                                                                        }) : (0,
                                                                                            t.jsx)("span", {
                                                                                                className: "text-sm text-[#334155] lg:text-2xl",
                                                                                                children: "--"
                                                                                            })]
                                                                            })]
                                                            })]
                                                })]
                                    })]
                        }), (null == x ? void 0 : x.length) > 0 && (0,
                            t.jsx)("p", {
                                className: "text-sm font-light mt-4",
                                children: "*Filters do not apply to this section"
                            }), (0,
                                t.jsxs)("div", {
                                    className: "flex justify-around gap-4 lg:mb-8 mb-5 mt-5 lg:hidden",
                                    children: [(0,
                                        t.jsx)("button", {
                                            type: "button",
                                            onClick: m,
                                            className: "px-4 h-14 py-2 border-2 border-blue-100 text-[#217ABB] rounded-md text-sm font-medium w-full",
                                            children: "View Solutions >"
                                        }), v && (0,
                                            t.jsx)("button", {
                                                type: "button",
                                                className: "px-4 py-2 border-2 ".concat(i || !(0,
                                                    o.A)(s) ? "border-blue-100 text-[#217ABB]" : "border-gray-300 text-[#33415599]", " rounded-md text-sm font-medium w-full"),
                                                onClick: l,
                                                children: "Leaderboard"
                                            })]
                                })]
                })
        }
        L.propTypes = {
            overallStats: r().shape({
                correct: r().number.isRequired,
                incorrect: r().number.isRequired,
                unattempted: r().number.isRequired,
                score: r().number.isRequired,
                maxScore: r().number.isRequired,
                rank: r().number.isRequired,
                percentile: r().number.isRequired,
                totalRank: r().any,
                accuracy: r().number.isRequired,
                timeTaken: r().number.isRequired,
                partial: r().number
            }).isRequired,
            isResultDeclared: r().bool.isRequired,
            handleViewLeaderboard: r().func.isRequired,
            leaderboardData: r().array.isRequired,
            isFinalSubmissionDatePassed: r().bool.isRequired,
            resultAt: r().string.isRequired,
            finalSubmissionAt: r().string.isRequired,
            handleViewSolutions: r().any,
            mode: r().any,
            isLeaderBoardVisible: r().bool,
            paddingClass: r().any,
            showFilterTxt: r().any,
            entityType: r().string
        },
            R.propTypes = {
                isOpen: r().bool,
                onClose: r().func,
                children: r().node,
                triggerRef: r().object,
                isMobile: r().bool
            };
        var q = i(23218);
        function P(e) {
            let { item: n, maxScore: i } = e;
            return (0,
                t.jsxs)("div", {
                    className: "flex items-center justify-between mt-4 p-2\n             ".concat(n.isCurrentAccount ? "bg-[#dbf2ff82] rounded-md border-[#dbf2ff] border-2" : ""),
                    children: [(0,
                        t.jsxs)("div", {
                            className: "flex items-center gap-4",
                            children: [(null == n ? void 0 : n.profilePicture) ? (0,
                                t.jsx)(F(), {
                                    width: 40,
                                    height: 40,
                                    src: null == n ? void 0 : n.profilePicture,
                                    alt: n.name,
                                    className: "rounded-full w-10 h-10"
                                }) : (0,
                                    t.jsx)(q.A, {
                                        width: 40,
                                        height: 40,
                                        className: "w-10 h-10 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                                    }), (0,
                                        t.jsxs)("div", {
                                            className: "flex flex-col text-left",
                                            children: [(0,
                                                t.jsxs)("span", {
                                                    className: "font-semibold text-sm pb-1 text-greyFont",
                                                    children: ["AIR-", n.rank]
                                                }), (0,
                                                    t.jsx)("span", {
                                                        className: "font-normal text-sm text-greyFont",
                                                        children: n.name
                                                    })]
                                        })]
                        }), (0,
                            t.jsxs)("div", {
                                className: "flex flex-col items-end",
                                children: [(0,
                                    t.jsx)("span", {
                                        className: "text-sm pb-1",
                                        children: "Score"
                                    }), (0,
                                        t.jsxs)("span", {
                                            className: "font-medium text-sm",
                                            children: [n.score, " ", "/", " ", i]
                                        })]
                            })]
                }, n.accountId)
        }
        P.propTypes = {
            item: r().shape({
                accountId: r().string.isRequired,
                name: r().string.isRequired,
                profilePicture: r().string,
                score: r().number.isRequired,
                rank: r().number.isRequired,
                isCurrentAccount: r().bool.isRequired
            }).isRequired,
            maxScore: r().any
        };
        var V = i(26471)
            , O = i(19702)
            , _ = i(27736);
        function Q(e) {
            var n, i;
            let { currentUserOverallStats: l, currentUserRankInfo: s, leaderboardData: d, isLateSubmission: r, eventData: o, isFreeMockTest: c, linkId: m } = e
                , { user: u } = (0,
                    V.Jd)();
            return (0,
                a.useEffect)(() => {
                    var e, n, i, t, a, l;
                    (0,
                        O.sx)(_.A.MOCK_TEST_LEADERBOARD_VIEWED, {
                            timestamp: new Date().getTime(),
                            mockTestId: null == o ? void 0 : o.mockTestId,
                            mockTestTitle: null == o ? void 0 : null === (t = o.attemptInfo) || void 0 === t ? void 0 : null === (i = t.content) || void 0 === i ? void 0 : null === (n = i.contentInLanguages) || void 0 === n ? void 0 : null === (e = n[0]) || void 0 === e ? void 0 : e.name,
                            testType: c ? "Free" : null == o ? void 0 : null === (l = o.attemptInfo) || void 0 === l ? void 0 : null === (a = l.content) || void 0 === a ? void 0 : a.mockTestType,
                            screenName: "Leaderboard",
                            linkID: m
                        })
                }
                    , []),
                (0,
                    t.jsxs)(t.Fragment, {
                        children: [r ? (0,
                            t.jsx)("div", {
                                className: "flex items-center justify-between mt-4 p-2\n         bg-[#dbf2ff82] rounded-md border-[#dbf2ff] border-2 text-[#0267B1] text-xs font-medium",
                                children: "Since you attempted after the active period, your rank is not counted in the leaderboard."
                            }) : null, d.map(e => (0,
                                t.jsx)(P, {
                                    item: e,
                                    maxScore: null == l ? void 0 : l.maxScore
                                }, e.accountId)), !r && (null == s ? void 0 : s.rank) && (null == s ? void 0 : s.rank) >= 10 ? (0,
                                    t.jsxs)(t.Fragment, {
                                        children: [" ", (0,
                                            t.jsxs)("div", {
                                                className: "h-8 bg-[#33415508] flex items-center justify-center gap-2 mt-5",
                                                children: [(0,
                                                    t.jsx)("span", {
                                                        className: "h-[6px] w-[6px] inline-block bg-[#33415530] rounded-full"
                                                    }), (0,
                                                        t.jsx)("span", {
                                                            className: "h-[6px] w-[6px] inline-block bg-[#33415530] rounded-full"
                                                        }), (0,
                                                            t.jsx)("span", {
                                                                className: "h-[6px] w-[6px] inline-block bg-[#33415530] rounded-full"
                                                            })]
                                            }), (0,
                                                t.jsx)(P, {
                                                    item: {
                                                        accountId: (null == u ? void 0 : u.id) || "Logged-out-user",
                                                        name: (null == u ? void 0 : u.name) || "You",
                                                        profilePicture: (null == u ? void 0 : null === (i = u.profile) || void 0 === i ? void 0 : null === (n = i.accountDetails) || void 0 === n ? void 0 : n.profilePicture) || "",
                                                        score: l.score || 0,
                                                        rank: s.rank || 0,
                                                        isCurrentAccount: !0
                                                    },
                                                    maxScore: null == l ? void 0 : l.maxScore
                                                })]
                                    }) : null]
                    })
        }
        Q.propTypes = {
            leaderboardData: r().arrayOf(r().shape({
                accountId: r().string.isRequired,
                name: r().string.isRequired,
                profilePicture: r().string.isRequired,
                score: r().number.isRequired,
                rank: r().number.isRequired,
                isCurrentAccount: r().bool.isRequired
            })).isRequired,
            isLateSubmission: r().bool.isRequired,
            currentUserOverallStats: r().shape({
                score: r().number.isRequired,
                maxScore: r().number.isRequired,
                accuracy: r().number.isRequired,
                timeTaken: r().number.isRequired
            }).isRequired,
            currentUserRankInfo: r().shape({
                rank: r().number.isRequired,
                score: r().number.isRequired
            }).isRequired,
            eventData: r().any,
            isFreeMockTest: r().bool,
            linkId: r().string
        };
        var U = i(34247);
        function H(e) {
            var n, i;
            let { overallStats: a, overallComment: l, isResultDeclared: s, handleViewLeaderboard: d, leaderboardData: r, scoresAverage: c, handleViewSolutions: m, topperScore: u, handleAllTypeDownload: v, assignAt: g, submittedAt: k, evaluatedAt: x, startedAt: p, showViewSolutionButton: f } = e
                , h = {
                    after: "after:content-[''] after:absolute after:left-0 after:right-0 after:m-auto after:top-0 after:bottom-0 after:w-[1px] "
                };
            return (0,
                t.jsxs)("div", {
                    className: "lg:px-5 px-4 pb-3",
                    children: [(0,
                        t.jsxs)("div", {
                            className: "flex flex-col md:flex-row items-center ".concat(l ? "justify-between after:bg-[#B8E5FF] lg:after:h-[80%] after:h-0 ".concat(h.after) : "justify-center", "  bg-white rounded-lg lg:p-8 p-4 relative lg:w-full border border-[#b8e5ff] }"),
                            children: [(0,
                                t.jsxs)("div", {
                                    className: "flex flex-col items-center lg:w-1/2 w-full justify-center",
                                    children: [(0,
                                        t.jsxs)("h2", {
                                            className: "lg:text-2xl text-2xl font-bold text-greyFont",
                                            children: [null == a ? void 0 : a.score, " ", (0,
                                                t.jsxs)("span", {
                                                    className: "text-lg font-medium",
                                                    children: ["/", " ", null == a ? void 0 : a.maxScore]
                                                })]
                                        }), (0,
                                            t.jsx)("p", {
                                                className: "text-gray-600 text-sm mt-1",
                                                children: "Your Score"
                                            }), (0,
                                                t.jsxs)("div", {
                                                    className: "flex items-center justify-center relative gap-3 mt-3 py-2 lg:px-3 px-2 lg:text-base text-[11px] rounded-full font-light font-base text-greyFont border border-[#B8E5FF] border-dashed  after:bg-[#B8E5FF] after:h-[60%] ".concat(h.after),
                                                    children: [(0,
                                                        t.jsxs)("span", {
                                                            className: "lg:px-3 px-1 rounded-full",
                                                            children: ["Topper's Score", " ", (null == u ? void 0 : u.scoreSummary) ? (0,
                                                                t.jsxs)("span", {
                                                                    className: "font-medium",
                                                                    children: [null == u ? void 0 : null === (n = u.scoreSummary) || void 0 === n ? void 0 : n.score, " ", "/", " ", null == u ? void 0 : null === (i = u.scoreSummary) || void 0 === i ? void 0 : i.maxScore]
                                                                }) : "--"]
                                                        }), (0,
                                                            t.jsxs)("span", {
                                                                className: "lg:px-3 rounded-full",
                                                                children: ["Average Score", " ", (null == u ? void 0 : u.scoreSummary) ? (0,
                                                                    t.jsx)("span", {
                                                                        className: "font-medium",
                                                                        children: "".concat(null == c ? void 0 : c.score, " / ").concat(null == c ? void 0 : c.maxScore)
                                                                    }) : "--"]
                                                            })]
                                                }), (0,
                                                    t.jsxs)("div", {
                                                        className: "flex lg:gap-6 gap-2 mt-4 lg:px-9 w-full",
                                                        children: [(0,
                                                            t.jsx)("div", {
                                                                className: " bg-[#B8E5FF1C] border-[#B8E5FF] border rounded-lg py-2 px-2 lg:px-6 w-1/2",
                                                                children: (0,
                                                                    t.jsxs)("p", {
                                                                        className: "text-xs lg:text-base text-greyFont font-light",
                                                                        children: ["Rank", (0,
                                                                            t.jsx)("br", {}), (0,
                                                                                t.jsxs)("span", {
                                                                                    className: "text-2xl font-medium text-greyFont",
                                                                                    children: [null == a ? void 0 : a.rank, " "]
                                                                                }), "out of", " ", null == a ? void 0 : a.totalRank]
                                                                    })
                                                            }), (0,
                                                                t.jsxs)("div", {
                                                                    className: "bg-[#B8E5FF1C] border-[#B8E5FF] border rounded-lg py-2 px-2 lg:px-6 w-1/2",
                                                                    children: [(0,
                                                                        t.jsx)("p", {
                                                                            className: "lg:text-base text-xs text-greyFont font-light",
                                                                            children: "Percentile"
                                                                        }), (null == a ? void 0 : a.percentile) === 0 ? "--" : (0,
                                                                            t.jsxs)("p", {
                                                                                className: "text-xl font-medium text-greyFont",
                                                                                children: [" ", "".concat(null == a ? void 0 : a.percentile, "%")]
                                                                            })]
                                                                })]
                                                    }), !l && (0,
                                                        t.jsxs)("div", {
                                                            className: "w-full lg:flex gap-2 mt-4 lg:px-9",
                                                            children: [(0,
                                                                t.jsxs)("button", {
                                                                    type: "button",
                                                                    onClick: () => v("AccountEvaluatedAnswerSheet"),
                                                                    className: "group flex items-center gap-4 w-full bg-[#045692] hover:bg-[#17415e] text-white px-4 lg:py-3.5 py-2 rounded-xl transition-all duration-200 shadow-sm hover:shadow-lg lg:mb-0 mb-2",
                                                                    children: [(0,
                                                                        t.jsxs)("div", {
                                                                            className: "text-left flex-1",
                                                                            children: [(0,
                                                                                t.jsx)("p", {
                                                                                    className: "font-semibold text-sm leading-tight",
                                                                                    children: "View Evaluated QCAB"
                                                                                }), (0,
                                                                                    t.jsx)("p", {
                                                                                        className: "text-[11px] text-blue-200 font-light mt-0.5",
                                                                                        children: "Evaluator's marked answer sheet"
                                                                                    })]
                                                                        }), (0,
                                                                            t.jsx)("svg", {
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                className: "w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200",
                                                                                fill: "none",
                                                                                viewBox: "0 0 24 24",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: 2,
                                                                                children: (0,
                                                                                    t.jsx)("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        d: "M9 5l7 7-7 7"
                                                                                    })
                                                                            })]
                                                                }), (0,
                                                                    t.jsxs)("button", {
                                                                        type: "button",
                                                                        onClick: () => v("AccountOriginalAnswerSheet"),
                                                                        className: "group flex items-center gap-4 w-full bg-white hover:bg-blue-50 border border-[#045692]/30 hover:border-[#045692] text-[#045692] px-4 lg:py-3.5 py-2 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md",
                                                                        children: [(0,
                                                                            t.jsxs)("div", {
                                                                                className: "text-left flex-1",
                                                                                children: [(0,
                                                                                    t.jsx)("p", {
                                                                                        className: "font-semibold text-sm leading-tight",
                                                                                        children: "View Uploaded QCA Booklet"
                                                                                    }), (0,
                                                                                        t.jsx)("p", {
                                                                                            className: "text-[11px] text-gray-400 font-light mt-0.5",
                                                                                            children: "Your original submission"
                                                                                        })]
                                                                            }), (0,
                                                                                t.jsx)("svg", {
                                                                                    xmlns: "http://www.w3.org/2000/svg",
                                                                                    className: "w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200",
                                                                                    fill: "none",
                                                                                    viewBox: "0 0 24 24",
                                                                                    stroke: "currentColor",
                                                                                    strokeWidth: 2,
                                                                                    children: (0,
                                                                                        t.jsx)("path", {
                                                                                            strokeLinecap: "round",
                                                                                            strokeLinejoin: "round",
                                                                                            d: "M9 5l7 7-7 7"
                                                                                        })
                                                                                })]
                                                                    })]
                                                        })]
                                }), l && (0,
                                    t.jsxs)("div", {
                                        className: "flex flex-col items-start w-full lg:w-1/2 lg:px-[56px] mt-5 lg:mt-0",
                                        children: [l && (0,
                                            t.jsxs)("div", {
                                                className: "mb-4 w-full",
                                                children: [(0,
                                                    t.jsx)("h3", {
                                                        className: "font-semibold lg:text-[22px] text-base text-greyFont lg:mb-4 mb-2",
                                                        children: "Evaluator's Comment"
                                                    }), (0,
                                                        t.jsx)("p", {
                                                            className: "text-sm lg:text-base text-greyFont font-light lg:h-36 scrollbarshow lg:overflow-hidden lg:overflow-y-auto",
                                                            children: l
                                                        })]
                                            }), (0,
                                                t.jsxs)("div", {
                                                    className: "w-full lg:flex gap-2",
                                                    children: [(0,
                                                        t.jsxs)("button", {
                                                            type: "button",
                                                            onClick: () => v("AccountEvaluatedAnswerSheet"),
                                                            className: "group flex items-center gap-4 w-full bg-[#045692] hover:bg-[#17415e] text-white px-4 lg:py-3.5 py-2 rounded-xl transition-all duration-200 shadow-sm hover:shadow-lg lg:mb-0 mb-2",
                                                            children: [(0,
                                                                t.jsxs)("div", {
                                                                    className: "text-left flex-1",
                                                                    children: [(0,
                                                                        t.jsx)("p", {
                                                                            className: "font-semibold text-sm leading-tight",
                                                                            children: "View Evaluated QCAB"
                                                                        }), (0,
                                                                            t.jsx)("p", {
                                                                                className: "text-[11px] text-blue-200 font-light mt-0.5",
                                                                                children: "Evaluator's marked answer sheet"
                                                                            })]
                                                                }), (0,
                                                                    t.jsx)("svg", {
                                                                        xmlns: "http://www.w3.org/2000/svg",
                                                                        className: "w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200",
                                                                        fill: "none",
                                                                        viewBox: "0 0 24 24",
                                                                        stroke: "currentColor",
                                                                        strokeWidth: 2,
                                                                        children: (0,
                                                                            t.jsx)("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                d: "M9 5l7 7-7 7"
                                                                            })
                                                                    })]
                                                        }), (0,
                                                            t.jsxs)("button", {
                                                                type: "button",
                                                                onClick: () => v("AccountOriginalAnswerSheet"),
                                                                className: "group flex items-center gap-4 w-full bg-white hover:bg-blue-50 border border-[#045692]/30 hover:border-[#045692] text-[#045692] px-4 lg:py-3.5 py-2 rounded-xl transition-all duration-200 shadow-sm hover:shadow-md",
                                                                children: [(0,
                                                                    t.jsxs)("div", {
                                                                        className: "text-left flex-1",
                                                                        children: [(0,
                                                                            t.jsx)("p", {
                                                                                className: "font-semibold text-sm leading-tight",
                                                                                children: "View Uploaded QCA Booklet"
                                                                            }), (0,
                                                                                t.jsx)("p", {
                                                                                    className: "text-[11px] text-gray-400 font-light mt-0.5",
                                                                                    children: "Your original submission"
                                                                                })]
                                                                    }), (0,
                                                                        t.jsx)("svg", {
                                                                            xmlns: "http://www.w3.org/2000/svg",
                                                                            className: "w-4 h-4 opacity-40 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all duration-200",
                                                                            fill: "none",
                                                                            viewBox: "0 0 24 24",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: 2,
                                                                            children: (0,
                                                                                t.jsx)("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    d: "M9 5l7 7-7 7"
                                                                                })
                                                                        })]
                                                            })]
                                                })]
                                    })]
                        }), (0,
                            t.jsx)("div", {
                                className: "mt-4 flex flex-wrap md:flex-nowrap items-stretch bg-white border border-[#B8E5FF] rounded-lg overflow-hidden",
                                children: [{
                                    label: "Uploaded At",
                                    value: k
                                }, {
                                    label: "Assigned At",
                                    value: g
                                }, {
                                    label: "Started At",
                                    value: p
                                }, {
                                    label: "Completed At",
                                    value: x
                                }].map((e, n, i) => (0,
                                    t.jsxs)("div", {
                                        className: "relative flex-1 basis-1/2 md:basis-auto px-4 py-3 text-center ".concat(n < i.length - 1 ? "after:content-[''] after:absolute after:right-0 after:top-0 after:bottom-0 after:w-px after:h-8 after:my-auto after:bg-[#B8E5FF]" : ""),
                                        children: [(0,
                                            t.jsx)("p", {
                                                className: "text-xs text-[#6B7280] font-medium mb-1",
                                                children: null == e ? void 0 : e.label
                                            }), e.value ? (0,
                                                t.jsxs)("p", {
                                                    className: "text-xs font-semibold text-greyFont",
                                                    children: [(0,
                                                        U.r6)(e.value).date, ",", " ", (0,
                                                            t.jsx)("span", {
                                                                className: "text-[10px] text-gray-400",
                                                                children: (0,
                                                                    U.r6)(null == e ? void 0 : e.value).time
                                                            })]
                                                }) : (0,
                                                    t.jsx)("p", {
                                                        className: "text-xs text-gray-300",
                                                        children: "—"
                                                    })]
                                    }, e.label))
                            }), (0,
                                t.jsxs)("div", {
                                    className: "flex justify-around gap-4 lg:my-8 mt-4  lg:hidden",
                                    children: [f && (0,
                                        t.jsx)("button", {
                                            type: "button",
                                            onClick: m,
                                            className: "px-4 h-14 py-2 border-2 border-blue-100 text-[#217ABB] rounded-md text-sm font-medium w-full",
                                            children: "View Solutions >"
                                        }), (0,
                                            t.jsx)("button", {
                                                type: "button",
                                                className: "px-4 py-2 border-2 ".concat(s || !(0,
                                                    o.A)(r) ? "border-blue-100 text-[#217ABB]" : "border-gray-300 text-[#33415599]", " rounded-md text-sm font-medium w-full"),
                                                onClick: d,
                                                children: "Leaderboard"
                                            })]
                                })]
                })
        }
        H.propTypes = {
            overallStats: r().any,
            overallComment: r().any,
            isResultDeclared: r().any,
            handleViewLeaderboard: r().any,
            leaderboardData: r().any,
            scoresAverage: r().any,
            handleViewSolutions: r().any,
            topperScore: r().any,
            handleAllTypeDownload: r().any,
            assignAt: r().any,
            submittedAt: r().any,
            evaluatedAt: r().any,
            startedAt: r().any,
            showViewSolutionButton: r().bool
        };
        var W = i(7791)
            , z = i.n(W)
            , Z = i(86911)
            , K = i.n(Z)
            , G = i(98271)
            , $ = i(62707);
        function Y(e) {
            let { question: n, attemptRate: i, difficulty: a, handleViewSolutions: l, questionIndex: s, getEvalStatus: d, sectionId: r, avgAccuracy: o, entityType: c } = e;
            return (0,
                t.jsx)("div", {
                    className: "bg-white lg:shadow-[0px_2px_15px_0px_#00000012] rounded-lg lg:p-4 p-3 mb-5 cursor-pointer",
                    onClick: () => l(s, r),
                    children: (0,
                        t.jsx)("div", {
                            className: "flex items-start justify-between",
                            children: (0,
                                t.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0,
                                        t.jsxs)("div", {
                                            className: "flex justify-between items-center mb-4",
                                            children: [(0,
                                                t.jsx)("span", {
                                                    className: "text-xs px-2 py-1  capitalize rounded inline-block ".concat({
                                                        0: "bg-[#FEECCD] text-[#632814]",
                                                        1: "bg-[#D3F2D5] text-[#0E4F16]",
                                                        2: "bg-[#FFD9D7] text-[#FE4135]",
                                                        3: "bg-[#0456921A] text-[#045692]"
                                                    }[d(s)]),
                                                    children: {
                                                        0: "Unattempted",
                                                        1: "correct",
                                                        2: "incorrect",
                                                        3: "partial"
                                                    }[d(s)]
                                                }), "dart-test" !== c && a && (0,
                                                    t.jsx)("div", {
                                                        className: "text-right ml-4",
                                                        children: (0,
                                                            t.jsxs)("p", {
                                                                className: "lg:text-sm text-sm text-black font-medium flex items-center",
                                                                children: [(0,
                                                                    t.jsx)("span", {
                                                                        className: "".concat({
                                                                            hard: "bg-[#FF6200]",
                                                                            medium: "bg-[#FFB82B]",
                                                                            easy: "bg-[#1BBE1F]"
                                                                        }[a], " lg:w-[10px] lg:h-[10px] w-2 h-2 rounded-full block")
                                                                    }), (0,
                                                                        t.jsx)("span", {
                                                                            className: "font-light pl-1.5 capitalize",
                                                                            children: a
                                                                        })]
                                                            })
                                                    })]
                                        }), (0,
                                            t.jsxs)("div", {
                                                className: "flex items-center mb-4",
                                                children: [(0,
                                                    t.jsx)("span", {
                                                        className: "pr-2 lg:text-base text-sm font-semibold",
                                                        children: "Q.".concat(s + 1)
                                                    }), (0,
                                                        t.jsxs)("div", {
                                                            className: "flex items-center lg:text-base text-sm font-normal justify-between w-full",
                                                            children: [(0,
                                                                t.jsx)("p", {
                                                                    className: "prose prose-ul:pl-3 prose-ol:pl-3 prose-p:my-0 max-w-none lg:line-clamp-1 line-clamp-2",
                                                                    children: /<\/?[a-z][\s\S]*>/i.test(n) ? (0,
                                                                        t.jsx)("span", {
                                                                            dangerouslySetInnerHTML: {
                                                                                __html: (e => {
                                                                                    if (!e)
                                                                                        return "";
                                                                                    let n = document.createElement("div");
                                                                                    return (n.innerHTML = e,
                                                                                        n.textContent.trim().length > 0) ? (n.querySelectorAll("img").forEach(e => e.remove()),
                                                                                            n.innerHTML) : null !== n.querySelector("img") ? '<img src="assets/img-icon.png" alt="Image Icon" class="inline-block w-7 h-7" />' : ""
                                                                                }
                                                                                )((0,
                                                                                    U.bS)(n))
                                                                            }
                                                                        }) : n
                                                                }), (0,
                                                                    t.jsx)("button", {
                                                                        label: "button",
                                                                        type: "button",
                                                                        className: "pl-2 text-[#045692] lg:text-base text-xs",
                                                                        children: (0,
                                                                            t.jsxs)("svg", {
                                                                                className: "w-5 h-5 lg:w-8 lg:h-8",
                                                                                viewBox: "0 0 21 21",
                                                                                fill: "none",
                                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                                children: [(0,
                                                                                    t.jsx)("circle", {
                                                                                        cx: "10.5",
                                                                                        cy: "10.5",
                                                                                        r: "10.5",
                                                                                        fill: "#0267B1"
                                                                                    }), (0,
                                                                                        t.jsx)("path", {
                                                                                            d: "M14.2186 10.0869H5.95475C5.84517 10.0869 5.74007 10.1304 5.66258 10.2079C5.58509 10.2854 5.54156 10.3905 5.54156 10.5001C5.54156 10.6097 5.58509 10.7148 5.66258 10.7923C5.74007 10.8698 5.84517 10.9133 5.95475 10.9133H14.2186C14.3282 10.9133 14.4333 10.8698 14.5108 10.7923C14.5883 10.7148 14.6318 10.6097 14.6318 10.5001C14.6318 10.3905 14.5883 10.2854 14.5108 10.2079C14.4333 10.1304 14.3282 10.0869 14.2186 10.0869Z",
                                                                                            fill: "white"
                                                                                        }), (0,
                                                                                            t.jsx)("path", {
                                                                                                d: "M14.0477 10.5001L10.6207 13.9264C10.5431 14.0039 10.4995 14.1092 10.4995 14.2189C10.4995 14.3286 10.5431 14.4338 10.6207 14.5114C10.6983 14.589 10.8035 14.6326 10.9132 14.6326C11.0229 14.6326 11.1282 14.589 11.2058 14.5114L14.9245 10.7927C14.963 10.7543 14.9935 10.7087 15.0143 10.6585C15.0352 10.6083 15.0459 10.5545 15.0459 10.5001C15.0459 10.4458 15.0352 10.392 15.0143 10.3418C14.9935 10.2916 14.963 10.246 14.9245 10.2076L11.2058 6.48885C11.1282 6.41126 11.0229 6.36768 10.9132 6.36768C10.8035 6.36768 10.6983 6.41126 10.6207 6.48885C10.5431 6.56644 10.4995 6.67167 10.4995 6.78139C10.4995 6.89112 10.5431 6.99635 10.6207 7.07393L14.0477 10.5001Z",
                                                                                                fill: "white"
                                                                                            })]
                                                                            })
                                                                    })]
                                                        })]
                                            }), (0,
                                                t.jsxs)("div", {
                                                    className: "flex items-center justify-between gap-2",
                                                    children: [(0,
                                                        t.jsxs)("p", {
                                                            className: "lg:text-sm text-xs text-black font-medium",
                                                            children: ["Attempt Rate:", (0,
                                                                t.jsxs)("span", {
                                                                    className: "font-light pl-1",
                                                                    children: [Math.floor(i + .5), "%"]
                                                                })]
                                                        }), (0,
                                                            t.jsxs)("p", {
                                                                className: "lg:text-sm text-xs text-black font-medium",
                                                                children: ["Avg Accuracy:", (0,
                                                                    t.jsxs)("span", {
                                                                        className: "font-light pl-1",
                                                                        children: [o, "%"]
                                                                    })]
                                                            })]
                                                })]
                                })
                        })
                })
        }
        function J(e) {
            let { title: n, paddingClass: i, handleViewSolutions: a, mostAttemptedQuestions: l, getEvalStatus: s, entityType: d } = e;
            return (0,
                t.jsxs)("div", {
                    className: "mx-auto xl:pt-6",
                    children: [(0,
                        t.jsx)("h2", {
                            className: "px-5 xl:px-6 font-medium text-black lg:text-xl text-base mb-5 lg:mb-6",
                            children: n
                        }), (0,
                            t.jsx)("div", {
                                className: "".concat(i),
                                children: null == l ? void 0 : l.map((e, n) => (0,
                                    t.jsx)(Y, {
                                        question: "".concat(null == e ? void 0 : e.content),
                                        index: n,
                                        questionIndex: null == e ? void 0 : e.questionIndex,
                                        handleViewSolutions: a,
                                        attemptRate: null == e ? void 0 : e.attemptRate,
                                        sectionId: null == e ? void 0 : e.sectionId,
                                        questionId: null == e ? void 0 : e.id,
                                        avgAccuracy: null == e ? void 0 : e.averageAccuracy,
                                        difficulty: null == e ? void 0 : e.difficultyLevel,
                                        getEvalStatus: s,
                                        entityType: d
                                    }, null == e ? void 0 : e.id))
                            })]
                })
        }
        var X = i(15348)
            , ee = i(9784)
            , en = i(37323)
            , ei = i(91672)
            , et = i(33087)
            , ea = i(53550)
            , el = i(98032)
            , es = i(43686);
        function ed(e) {
            let { x: n, y: i, width: a, height: l, value: s } = e;
            return l <= 0 ? null : (0,
                t.jsx)("text", {
                    x: n + a / 2,
                    y: i + l / 2,
                    fill: "#fff",
                    fontSize: 12,
                    textAnchor: "middle",
                    dominantBaseline: "middle",
                    children: s
                })
        }
        function er(e) {
            let { x: n, y: i, payload: a } = e;
            return (0,
                t.jsx)("g", {
                    transform: "translate(".concat(n - 45, ", ").concat(i, ")"),
                    children: (0,
                        t.jsx)("foreignObject", {
                            width: 90,
                            height: 28,
                            children: (0,
                                t.jsx)("div", {
                                    style: {
                                        width: "".concat(90, "px"),
                                        height: "".concat(28, "px"),
                                        fontSize: "12px",
                                        lineHeight: "".concat(14, "px"),
                                        textAlign: "center",
                                        overflow: "hidden",
                                        display: "-webkit-box",
                                        WebkitLineClamp: 2,
                                        WebkitBoxOrient: "vertical",
                                        textOverflow: "ellipsis",
                                        wordBreak: "break-word",
                                        color: "#666",
                                        textTransform: "capitalize"
                                    },
                                    title: a.value,
                                    children: a.value
                                })
                        })
                })
        }
        function eo(e) {
            let { data: n, xKey: i, bars: a, yLabel: l, height: s = 300, showLegend: d = !0, yAxisDomain: r = [0, 100], minBarWidth: o = 80, customLegend: c, title: m, bottomTag: u, barWidth: v, yAxisFormatter: g, tickCount: k, stackId: x, showBarLabels: p } = e
                , f = a.length
                , h = n.length > 4
                , b = h ? Math.max(n.length * (o * f + (f - 1) * 8 + 40), 600) : "100%"
                , N = window.innerWidth < 768;
            return (0,
                t.jsxs)("div", {
                    className: "p-5 xl:p-6 pt-0",
                    children: [(0,
                        t.jsx)("h3", {
                            className: "lg:text-xl text-base lg:mb-6 mb-5 font-medium text-black",
                            children: m
                        }), (0,
                            t.jsxs)("div", {
                                className: "bg-white lg:shadow-[0px_2px_15px_0px_rgba(0,0,0,0.07)] lg:p-7 p-2 rounded-lg",
                                children: [(0,
                                    t.jsx)("div", {
                                        className: "overflow-x-auto overflow-hidden",
                                        style: {
                                            height: s
                                        },
                                        children: (0,
                                            t.jsx)("div", {
                                                style: {
                                                    minWidth: h ? b : "auto",
                                                    height: "100%"
                                                },
                                                children: (0,
                                                    t.jsx)(X.u, {
                                                        width: "100%",
                                                        height: "100%",
                                                        children: (0,
                                                            t.jsxs)(ee.E, {
                                                                data: n,
                                                                barGap: 0,
                                                                barCategoryGap: "20%",
                                                                margin: {
                                                                    top: 20,
                                                                    right: N ? 0 : 30,
                                                                    left: N ? 0 : 20,
                                                                    bottom: 20
                                                                },
                                                                children: [(0,
                                                                    t.jsx)(en.d, {
                                                                        strokeDasharray: "3 3",
                                                                        stroke: "#e0e0e0"
                                                                    }), (0,
                                                                        t.jsx)(ei.W, {
                                                                            dataKey: i,
                                                                            tick: (0,
                                                                                t.jsx)(er, {}),
                                                                            interval: 0,
                                                                            height: 30,
                                                                            style: {
                                                                                outline: "none"
                                                                            },
                                                                            tickFormatter: e => e.toString().replace(/\b\w/g, e => e.toUpperCase())
                                                                        }), (0,
                                                                            t.jsx)(et.h, {
                                                                                domain: r,
                                                                                tick: {
                                                                                    fontSize: 12
                                                                                },
                                                                                tickCount: k,
                                                                                tickFormatter: g,
                                                                                label: l ? {
                                                                                    value: l,
                                                                                    angle: -90,
                                                                                    position: "insideLeft",
                                                                                    style: {
                                                                                        fontSize: 14,
                                                                                        fontWeight: "500",
                                                                                        color: "#000000"
                                                                                    }
                                                                                } : void 0
                                                                            }), !p && (0,
                                                                                t.jsx)(ea.m, {
                                                                                    contentStyle: {
                                                                                        backgroundColor: "white",
                                                                                        border: "1px solid #ccc",
                                                                                        borderRadius: "4px",
                                                                                        textTransform: "capitalize"
                                                                                    },
                                                                                    cursor: !1
                                                                                }), a.map(e => (0,
                                                                                    t.jsx)(el.yP, {
                                                                                        dataKey: e.key,
                                                                                        name: e.label,
                                                                                        fill: e.color,
                                                                                        stackId: x,
                                                                                        barSize: v,
                                                                                        radius: [0, 0, 0, 0],
                                                                                        children: p && (0,
                                                                                            t.jsx)(es.Ze, {
                                                                                                dataKey: e.key,
                                                                                                position: "center",
                                                                                                content: ed
                                                                                            })
                                                                                    }, e.key))]
                                                            })
                                                    })
                                            })
                                    }), d && (0,
                                        t.jsx)("div", {
                                            className: "flex justify-center gap-6 mt-3 flex-wrap",
                                            children: a.map(e => (0,
                                                t.jsxs)("div", {
                                                    className: "flex items-center gap-2",
                                                    children: [(0,
                                                        t.jsx)("div", {
                                                            style: {
                                                                width: 12,
                                                                height: 12,
                                                                backgroundColor: e.color,
                                                                borderRadius: 2
                                                            }
                                                        }), (0,
                                                            t.jsx)("span", {
                                                                className: "text-sm",
                                                                children: e.label
                                                            })]
                                                }, e.key))
                                        }), c && (0,
                                            t.jsxs)(t.Fragment, {
                                                children: [(0,
                                                    t.jsx)("div", {
                                                        className: "mb-5",
                                                        children: c
                                                    }), u && (0,
                                                        t.jsx)("div", {
                                                            className: "w-full flex justify-center",
                                                            children: (0,
                                                                t.jsxs)("div", {
                                                                    className: "bg-[#04569212] font-light lg:text-sm text-xs py-[7px] lg:w-[60%] w-full text-center rounded-md",
                                                                    children: ["For better readability, negative marks are shown as", " ", (0,
                                                                        t.jsx)("strong", {
                                                                            children: "”0”"
                                                                        }), " ", "in the graphical presentation"]
                                                                })
                                                        })]
                                            })]
                            })]
                })
        }
        er.propTypes = {
            payload: r().any
        },
            ed.propTypes = {
                x: r().any,
                y: r().any,
                width: r().any,
                height: r().any,
                value: r().any
            },
            eo.propTypes = {
                data: r().any,
                xKey: r().any,
                bars: r().any,
                yLabel: r().any,
                height: r().any,
                showLegend: r().any,
                yAxisDomain: r().any,
                minBarWidth: r().any,
                customLegend: r().any,
                title: r().any,
                bottomTag: r().any,
                barWidth: r().any,
                yAxisFormatter: r().any,
                tickCount: r().any,
                showBarLabels: r().any,
                stackId: r().any
            };
        var ec = i(15255)
            , em = i(32462)
            , eu = i(18799);
        function ev(e) {
            let { chartData: n, title: i, userScore: a } = e
                , l = [...n.perScoreStats.map(e => ({
                    ...e,
                    score: e.score < 0 ? 0 : e.score
                }))].sort((e, n) => e.score - n.score).reduce((e, n) => {
                    let i = e.find(e => e.score === n.score);
                    return i ? i.totalStudents += n.totalStudents : e.push({
                        ...n
                    }),
                        e
                }
                    , [])
                , s = 0
                , d = l.map(e => ({
                    studentTotal: s += e.totalStudents,
                    score: e.score,
                    rank: e.rank
                }))
                , r = [{
                    studentTotal: 1,
                    score: d[0].score
                }, ...d]
                , o = l.map(e => e.score)
                , c = Math.max(o.length ? Math.max(...o) : 0, n.median < 0 ? 0 : n.median, void 0 !== a && a > 0 ? a : 0)
                , m = void 0 !== a;
            return (0,
                t.jsxs)("div", {
                    className: "px-5 xl:p-6 xl:mb-0 mb-5",
                    children: [(0,
                        t.jsx)("h2", {
                            className: "lg:text-xl text-base lg:mb-6 mb-5 font-medium text-black",
                            children: i
                        }), (0,
                            t.jsxs)("div", {
                                className: "bg-white lg:shadow-[0px_2px_15px_0px_rgba(0,0,0,0.07)] lg:p-7 rounded-lg",
                                children: [(0,
                                    t.jsxs)("p", {
                                        className: "text-sm md:text-base font-semibold text-center",
                                        children: ["Median Score:", " ", null == n ? void 0 : n.median]
                                    }), (0,
                                        t.jsx)("div", {
                                            style: {
                                                width: "100%",
                                                height: 400
                                            },
                                            children: (0,
                                                t.jsx)(X.u, {
                                                    children: (0,
                                                        t.jsxs)(ec.X, {
                                                            data: r,
                                                            margin: {
                                                                top: 20,
                                                                right: 30,
                                                                left: 0,
                                                                bottom: 20
                                                            },
                                                            children: [(0,
                                                                t.jsx)(en.d, {
                                                                    strokeDasharray: "3 3",
                                                                    vertical: !1,
                                                                    stroke: "#f0f0f0"
                                                                }), (0,
                                                                    t.jsx)(ei.W, {
                                                                        dataKey: "studentTotal",
                                                                        type: "number",
                                                                        domain: [1, "dataMax"],
                                                                        tickCount: s,
                                                                        axisLine: {
                                                                            stroke: "#ccc"
                                                                        },
                                                                        tick: {
                                                                            fill: "#666",
                                                                            fontSize: 12
                                                                        }
                                                                    }), (0,
                                                                        t.jsx)(et.h, {
                                                                            domain: [0, c],
                                                                            axisLine: {
                                                                                stroke: "#ccc"
                                                                            },
                                                                            tick: {
                                                                                fill: "#666",
                                                                                fontSize: 12
                                                                            }
                                                                        }), (0,
                                                                            t.jsx)(ea.m, {
                                                                                cursor: {
                                                                                    stroke: "#2b4a83",
                                                                                    strokeWidth: 1
                                                                                },
                                                                                contentStyle: {
                                                                                    borderRadius: "8px",
                                                                                    border: "none",
                                                                                    boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
                                                                                },
                                                                                labelStyle: {
                                                                                    color: "#FFC107"
                                                                                },
                                                                                labelFormatter: () => m ? "Your Score: ".concat(a) : "Median Score: ".concat(n.median),
                                                                                formatter: e => ["".concat(e), "Student Marks"]
                                                                            }), m ? (0,
                                                                                t.jsx)(em.e_, {
                                                                                    y: a < 0 ? 0 : a,
                                                                                    stroke: "#16a34a",
                                                                                    strokeWidth: 2
                                                                                }) : (0,
                                                                                    t.jsx)(em.e_, {
                                                                                        y: n.median < 0 ? 0 : n.median,
                                                                                        stroke: "#FF8C00",
                                                                                        strokeWidth: 2
                                                                                    }), (0,
                                                                                        t.jsx)(eu.N1, {
                                                                                            type: "linear",
                                                                                            dataKey: "score",
                                                                                            stroke: "#045692",
                                                                                            strokeWidth: 2.5,
                                                                                            dot: !1,
                                                                                            activeDot: {
                                                                                                r: 6
                                                                                            }
                                                                                        })]
                                                        })
                                                })
                                        }), (0,
                                            t.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    marginTop: "15px"
                                                },
                                                children: [(0,
                                                    t.jsxs)("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            gap: "8px"
                                                        },
                                                        children: [(0,
                                                            t.jsx)("div", {
                                                                className: "w-3.5 h-3.5 bg-[#045692]"
                                                            }), (0,
                                                                t.jsx)("span", {
                                                                    className: "text-sm text-black font-normal",
                                                                    children: "Student Marks"
                                                                })]
                                                    }), (0,
                                                        t.jsxs)("div", {
                                                            className: "pl-3 flex items-center gap-2",
                                                            children: [(0,
                                                                t.jsx)("div", {
                                                                    className: "w-3.5 h-3.5 ".concat(m ? "bg-[#16a34a]" : "bg-[#FF8C00]")
                                                                }), (0,
                                                                    t.jsx)("span", {
                                                                        className: "text-sm text-black font-normal",
                                                                        children: m ? "Your Score" : "Median Score"
                                                                    })]
                                                        })]
                                            })]
                            })]
                })
        }
        r().string.isRequired,
            r().any,
            ev.propTypes = {
                chartData: r().any,
                title: r().any,
                userScore: r().number
            };
        var eg = i(94350)
            , ek = i(55238)
            , ex = i.n(ek)
            , ep = i(29391)
            , ef = i.n(ep);
        let eh = function (e, n) {
            let i = (0,
                a.useRef)(n);
            i.current = n,
                (0,
                    a.useEffect)(() => {
                        let n = Array.isArray(e) ? e : [e]
                            , t = e => {
                                n.every(n => !(null == n ? void 0 : n.current) || !n.current.contains(e.target)) && i.current()
                            }
                            ;
                        return document.addEventListener("mousedown", t),
                            () => document.removeEventListener("mousedown", t)
                    }
                        , [])
        };
        function eb(e) {
            let { subMessage: n = "Quickly Refine Results Using Filters.", isShowHighlit: i, setIsVisible: l, handleApplyOnboarding: s } = e
                , d = (0,
                    a.useRef)(null);
            return eh(d, () => {
                l(!1),
                    s()
            }
            ),
                (0,
                    t.jsx)("div", {
                        children: i && (0,
                            t.jsx)("div", {
                                className: "fixed top-0 w-full h-full left-0 right-0 z-10 bg-[rgb(0_0_0/0.46)]",
                                children: (0,
                                    t.jsx)("div", {
                                        className: "container relative m-auto",
                                        children: (0,
                                            t.jsxs)("div", {
                                                className: "absolute top-[90px] right-2.5",
                                                children: [(0,
                                                    t.jsx)("button", {
                                                        type: "button",
                                                        onClick: () => s(),
                                                        className: "relative w-10 h-10 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm",
                                                        children: (0,
                                                            t.jsx)("svg", {
                                                                width: "18",
                                                                height: "18",
                                                                viewBox: "0 0 24 24",
                                                                fill: "none",
                                                                stroke: "#1a73e8",
                                                                strokeWidth: "2",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: (0,
                                                                    t.jsx)("polygon", {
                                                                        points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"
                                                                    })
                                                            })
                                                    }), (0,
                                                        t.jsxs)("div", {
                                                            ref: d,
                                                            className: "absolute right-0 top-12 z-20 w-56 bg-white border border-[#00A3FF] rounded-lg shadow-md p-3",
                                                            children: [(0,
                                                                t.jsx)("div", {
                                                                    className: "absolute -top-1.5 right-3 w-3 h-3 bg-white border-l border-t border-gray-200 rotate-45"
                                                                }), (0,
                                                                    t.jsxs)("p", {
                                                                        className: "text-sm text-gray-900",
                                                                        children: [(0,
                                                                            t.jsx)("span", {
                                                                                className: "font-semibold",
                                                                                children: "Introducing:"
                                                                            }), " ", "Filters"]
                                                                    }), (0,
                                                                        t.jsx)("p", {
                                                                            className: "text-sm text-gray-600 mt-0.5",
                                                                            children: n
                                                                        })]
                                                        })]
                                            })
                                    })
                            })
                    })
        }
        function eN(e) {
            let { items: n } = e;
            return (0,
                t.jsx)("div", {
                    className: "flex items-center justify-center lg:gap-6 gap-4 flex-wrap",
                    children: n.map((e, n) => (0,
                        t.jsxs)("div", {
                            className: "flex items-center gap-2",
                            children: [(0,
                                t.jsx)("div", {
                                    className: "w-4 h-4 rounded-sm",
                                    style: {
                                        backgroundColor: e.color
                                    }
                                }), (0,
                                    t.jsx)("span", {
                                        className: "lg:text-sm text-xs font-medium text-gray-700",
                                        children: e.label
                                    })]
                        }, n))
                })
        }
        eb.propTypes = {
            subMessage: r().string,
            isShowHighlit: r().bool,
            setIsVisible: r().func,
            handleApplyOnboarding: r().func
        },
            eN.propTypes = {
                items: r().arrayOf(r().shape({
                    label: r().string,
                    color: r().string
                }))
            };
        let ey = function () {
            return (0,
                t.jsxs)("svg", {
                    width: "26",
                    height: "26",
                    viewBox: "0 0 26 26",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg",
                    children: [(0,
                        t.jsx)("circle", {
                            cx: "14.3002",
                            cy: "13.4335",
                            r: "9.1",
                            fill: "#B8E5FF"
                        }), (0,
                            t.jsx)("path", {
                                d: "M21.1248 6.8248H16.2498C16.1636 6.8248 16.0809 6.79056 16.02 6.72961C15.959 6.66866 15.9248 6.586 15.9248 6.4998V1.6248C15.9248 1.53861 15.959 1.45594 16.02 1.39499C16.0809 1.33405 16.1636 1.2998 16.2498 1.2998C16.336 1.2998 16.4187 1.33405 16.4796 1.39499C16.5406 1.45594 16.5748 1.53861 16.5748 1.6248V6.1748H21.1248C21.211 6.1748 21.2937 6.20905 21.3546 6.26999C21.4156 6.33094 21.4498 6.41361 21.4498 6.4998C21.4498 6.586 21.4156 6.66866 21.3546 6.72961C21.2937 6.79056 21.211 6.8248 21.1248 6.8248Z",
                                fill: "#0267B1"
                            }), (0,
                                t.jsx)("path", {
                                    d: "M21.1248 10.0638C21.0386 10.0638 20.9559 10.0295 20.895 9.96856C20.834 9.90761 20.7998 9.82495 20.7998 9.73875V6.63435L16.1153 1.94981H6.49981C6.15502 1.94981 5.82436 2.08677 5.58057 2.33057C5.33677 2.57436 5.1998 2.90502 5.1998 3.2498V9.63085C5.1998 9.71705 5.16556 9.79972 5.10461 9.86066C5.04367 9.92161 4.961 9.95585 4.8748 9.95585C4.78861 9.95585 4.70594 9.92161 4.64499 9.86066C4.58405 9.79972 4.5498 9.71705 4.5498 9.63085V3.2498C4.5498 2.73263 4.75525 2.23664 5.12095 1.87095C5.48664 1.50525 5.98263 1.29981 6.49981 1.29981H16.2498C16.2925 1.29973 16.3348 1.30807 16.3743 1.32435C16.4138 1.34064 16.4497 1.36454 16.4799 1.39471L21.3549 6.2697C21.3851 6.29994 21.409 6.33583 21.4253 6.37531C21.4415 6.41479 21.4499 6.4571 21.4498 6.4998V9.73875C21.4498 9.78143 21.4414 9.8237 21.4251 9.86313C21.4087 9.90256 21.3848 9.93839 21.3546 9.96856C21.3244 9.99874 21.2886 10.0227 21.2492 10.039C21.2097 10.0553 21.1675 10.0638 21.1248 10.0638Z",
                                    fill: "#0267B1"
                                }), (0,
                                    t.jsx)("path", {
                                        d: "M19.4998 24.6998H6.49981C5.98263 24.6998 5.48664 24.4944 5.12095 24.1287C4.75525 23.763 4.5498 23.267 4.5498 22.7498V17.8748C4.5498 17.7886 4.58405 17.7059 4.64499 17.645C4.70594 17.584 4.78861 17.5498 4.8748 17.5498C4.961 17.5498 5.04367 17.584 5.10461 17.645C5.16556 17.7059 5.1998 17.7886 5.1998 17.8748V22.7498C5.1998 23.0946 5.33677 23.4252 5.58057 23.669C5.82436 23.9128 6.15502 24.0498 6.49981 24.0498H19.4998C19.8446 24.0498 20.1753 23.9128 20.419 23.669C20.6628 23.4252 20.7998 23.0946 20.7998 22.7498V17.8748C20.7998 17.7886 20.834 17.7059 20.895 17.645C20.9559 17.584 21.0386 17.5498 21.1248 17.5498C21.211 17.5498 21.2937 17.584 21.3546 17.645C21.4156 17.7059 21.4498 17.7886 21.4498 17.8748V22.7498C21.4498 23.267 21.2444 23.763 20.8787 24.1287C20.513 24.4944 20.017 24.6998 19.4998 24.6998Z",
                                        fill: "#0267B1"
                                    }), (0,
                                        t.jsx)("path", {
                                            d: "M17.8748 18.1998H8.1248C8.03861 18.1998 7.95594 18.1656 7.89499 18.1046C7.83405 18.0437 7.7998 17.961 7.7998 17.8748C7.7998 17.7886 7.83405 17.7059 7.89499 17.645C7.95594 17.584 8.03861 17.5498 8.1248 17.5498H17.8748C17.961 17.5498 18.0437 17.584 18.1046 17.645C18.1656 17.7059 18.1998 17.7886 18.1998 17.8748C18.1998 17.961 18.1656 18.0437 18.1046 18.1046C18.0437 18.1656 17.961 18.1998 17.8748 18.1998Z",
                                            fill: "#0267B1"
                                        }), (0,
                                            t.jsx)("path", {
                                                d: "M12.9998 21.4498H8.1248C8.03861 21.4498 7.95594 21.4156 7.89499 21.3546C7.83405 21.2937 7.7998 21.211 7.7998 21.1248C7.7998 21.0386 7.83405 20.9559 7.89499 20.895C7.95594 20.834 8.03861 20.7998 8.1248 20.7998H12.9998C13.086 20.7998 13.1687 20.834 13.2296 20.895C13.2906 20.9559 13.3248 21.0386 13.3248 21.1248C13.3248 21.211 13.2906 21.2937 13.2296 21.3546C13.1687 21.4156 13.086 21.4498 12.9998 21.4498Z",
                                                fill: "#0267B1"
                                            }), (0,
                                                t.jsx)("path", {
                                                    d: "M21.1248 18.1996H4.87481C4.35763 18.1996 3.86164 17.9942 3.49595 17.6285C3.13025 17.2628 2.9248 16.7668 2.9248 16.2496V11.2557C2.9248 10.7385 3.13025 10.2425 3.49595 9.87681C3.86164 9.51111 4.35763 9.30566 4.87481 9.30566H4.88781L21.1378 9.41356C21.6524 9.41835 22.1443 9.62572 22.507 9.99073C22.8697 10.3557 23.0739 10.849 23.0755 11.3636V16.2496C23.0755 16.5057 23.025 16.7594 22.927 16.996C22.8289 17.2326 22.6852 17.4476 22.5041 17.6287C22.3229 17.8098 22.1079 17.9534 21.8712 18.0514C21.6346 18.1493 21.3809 18.1997 21.1248 18.1996ZM4.87481 9.95566C4.53002 9.95566 4.19936 10.0926 3.95557 10.3364C3.71177 10.5802 3.5748 10.9109 3.5748 11.2557V16.2496C3.5748 16.5944 3.71177 16.9251 3.95557 17.1689C4.19936 17.4126 4.53002 17.5496 4.87481 17.5496H21.1248C21.4696 17.5496 21.8003 17.4126 22.0441 17.1689C22.2878 16.9251 22.4248 16.5944 22.4248 16.2496V11.3636C22.4238 11.0204 22.2876 10.6915 22.0457 10.4482C21.8038 10.2048 21.4757 10.0666 21.1326 10.0636L4.88261 9.95566H4.87481Z",
                                                    fill: "#0267B1"
                                                }), (0,
                                                    t.jsx)("path", {
                                                        d: "M9.42445 15.3398H8.7998V11.874H10.2194C10.6241 11.874 10.9242 11.9761 11.1197 12.1802C11.3121 12.3823 11.4174 12.6519 11.4129 12.931C11.4084 13.21 11.2944 13.4761 11.0956 13.6719C10.876 13.8713 10.5873 13.9769 10.2909 13.9664H9.42445V15.3398ZM9.42445 13.4308H10.1635C10.3563 13.4308 10.5037 13.3833 10.6055 13.2884C10.6564 13.2399 10.6963 13.181 10.7225 13.1157C10.7488 13.0505 10.7607 12.9804 10.7576 12.9101C10.76 12.7746 10.7094 12.6436 10.6166 12.5448C10.5225 12.4434 10.3529 12.3927 10.1076 12.3927H9.42445V13.4308Z",
                                                        fill: "#0267B1"
                                                    }), (0,
                                                        t.jsx)("path", {
                                                            d: "M11.8945 15.3398V11.874H13.175C13.6474 11.874 14.0265 12.0411 14.3125 12.3752C14.5985 12.7093 14.7415 13.1209 14.7415 13.6102C14.7415 14.1011 14.5942 14.5117 14.2995 14.8419C14.0049 15.1721 13.5834 15.3381 13.0353 15.3398H11.8945ZM12.5367 14.8296H13.0567C13.1909 14.8313 13.3239 14.8041 13.4466 14.7498C13.5693 14.6956 13.6789 14.6154 13.7678 14.515C13.9624 14.3052 14.0597 13.993 14.0597 13.5783C14.0693 13.2719 13.9797 12.9705 13.8042 12.719C13.7302 12.6087 13.6298 12.5187 13.512 12.4573C13.3943 12.3959 13.263 12.365 13.1302 12.3674H12.5361L12.5367 14.8296Z",
                                                            fill: "#0267B1"
                                                        }), (0,
                                                            t.jsx)("path", {
                                                                d: "M15.9632 15.3398H15.3203V11.874H17.5115V12.4096H15.9632V13.3567H17.1819V13.8767H15.9632V15.3398Z",
                                                                fill: "#0267B1"
                                                            })]
                })
        };
        var eF = i(86441);
        let eS = {
            src: "https://assets.madeeasy.in/prod/_next/static/media/filter-result.70123fe5.png",
            height: 84,
            width: 84,
            blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAD1BMVEVMaXEAAAAAAAAAAAAAAACF6eB8AAAABXRSTlMAQxdUCxumBU8AAAAJcEhZcwAAITgAACE4AUWWMWAAAAAsSURBVHicNcrBCQAxEMPAWcf913xswukhMDLaFuaCE3Kskh1k5n50Niwv/HwL+wBE1d9HJwAAAABJRU5ErkJggg==",
            blurWidth: 8,
            blurHeight: 8
        };
        var ej = i(62017)
            , ew = i(19548)
            , eA = i(63574)
            , eT = i(80584)
            , eC = i(13380);
        function eI(e) {
            var n;
            let { filterData: i = [], isLoad: l, onApplyFilters: d, wrapStyle: r, fromTestPage: o, title: c, radioStyle: m, optionTitleSty: u, radioTextStyle: v, isResultBottomSheetOpen: g } = e
                , k = (0,
                    s.useRouter)()
                , { showToast: x } = (0,
                    a.useContext)(G.$)
                , [p, f] = (0,
                    a.useState)(g || !1)
                , [h, b] = (0,
                    a.useState)("")
                , [N, y] = (0,
                    a.useState)({})
                , [F, S] = (0,
                    a.useState)({})
                , [j, w] = (0,
                    a.useState)(!1)
                , A = (0,
                    a.useRef)(!1)
                , T = e => Object.entries(e).filter(e => {
                    let [, n] = e;
                    return n
                }
                ).map(e => {
                    let [n, i] = e;
                    return {
                        key: n,
                        value: i
                    }
                }
                );
            (0,
                a.useEffect)(() => {
                    if (!k.isReady || !(null == i ? void 0 : i.length))
                        return;
                    let e = {}
                        , n = {};
                    i.forEach(i => {
                        let t = k.query[i.key];
                        t && (e[i.key] = t,
                            n[i.name] = !0)
                    }
                    ),
                        y(e),
                        S(e => ({
                            ...e,
                            ...n
                        }))
                }
                    , [k.isReady, k.query, i]),
                (0,
                    a.useEffect)(() => {
                        o && (null == i ? void 0 : i.length) && S(i.reduce((e, n) => (e[n.name] = !0,
                            e), {}))
                    }
                        , [o, i]),
                (0,
                    a.useEffect)(() => {
                        if (i && !A.current) {
                            A.current = !0;
                            let e = null == i ? void 0 : i[0];
                            e && b(e.key)
                        }
                    }
                        , [i]);
            let C = () => f(!1)
                , I = (e, n) => {
                    y(i => ({
                        ...i,
                        [e]: n
                    }))
                }
                , D = () => !Object.values(N).some(e => e)
                , B = () => {
                    if (D()) {
                        x("Please select filters.");
                        return
                    }
                    w(!0);
                    let e = {
                        ...k.query,
                        ...N
                    };
                    k.replace({
                        pathname: k.pathname,
                        query: e
                    }, void 0, {
                        shallow: !0
                    });
                    let n = T(N);
                    null == d || d(n),
                        C(),
                        setTimeout(() => w(!1), 500)
                }
                , M = () => {
                    if (D()) {
                        x("No Filters to clear.");
                        return
                    }
                    let { linkId: e } = k.query;
                    k.replace({
                        pathname: k.pathname,
                        query: {
                            linkId: e
                        }
                    }, void 0, {
                        shallow: !0
                    }),
                        y({}),
                        null == d || d([])
                }
                ;
            return l ? (0,
                t.jsx)("div", {
                    className: "p-4",
                    children: "Loading..."
                }) : (0,
                    t.jsx)("div", {
                        children: (0,
                            t.jsxs)("div", {
                                className: "flex flex-col items-center lg:sticky lg:top-16",
                                children: [(0,
                                    t.jsxs)("div", {
                                        className: "".concat(r || "border", " hidden lg:block bg-white rounded-lg w-full"),
                                        children: [(0,
                                            t.jsx)("div", {
                                                className: "flex justify-end px-4 pt-3",
                                                children: (0,
                                                    t.jsx)("span", {
                                                        onClick: M,
                                                        className: "cursor-pointer",
                                                        children: (0,
                                                            t.jsx)(eT.Hz, {})
                                                    })
                                            }), (0,
                                                t.jsx)("div", {
                                                    className: "px-4 max-h-[300px] overflow-hidden overflow-y-auto",
                                                    children: (0,
                                                        t.jsx)(eA.A, {
                                                            sections: i,
                                                            selectedOptions: N,
                                                            openAccordions: F,
                                                            onFilterChange: I,
                                                            onToggleAccordion: e => {
                                                                o || S(n => ({
                                                                    ...n,
                                                                    [e]: !n[e]
                                                                }))
                                                            }
                                                            ,
                                                            radioStyle: m,
                                                            radioTextStyle: v,
                                                            optionTitleStyle: u,
                                                            disableToggle: !!o
                                                        })
                                                }), (0,
                                                    t.jsx)("div", {
                                                        className: "p-4 text-center",
                                                        children: (0,
                                                            t.jsx)("button", {
                                                                type: "button",
                                                                onClick: B,
                                                                className: "bg-tabBlue text-white px-4 py-2 w-full rounded-md",
                                                                children: j ? (0,
                                                                    t.jsx)(eC.A, {}) : "Apply"
                                                            })
                                                    })]
                                    }), "ResultPage" !== o && (0,
                                        t.jsx)("div", {
                                            className: "fixed bottom-14 lg:hidden",
                                            children: (0,
                                                t.jsx)("button", {
                                                    type: "button",
                                                    onClick: () => f(!0),
                                                    className: "bg-tabBlue text-white px-6 py-3 rounded-full",
                                                    children: "Filters"
                                                })
                                        }), p && (0,
                                            t.jsx)(ew.A, {
                                                isOpen: p,
                                                onClose: C,
                                                clearFilter: M,
                                                applyFilters: B,
                                                title: "Filters",
                                                children: (0,
                                                    t.jsxs)("div", {
                                                        className: "flex h-full",
                                                        children: [(0,
                                                            t.jsx)("div", {
                                                                className: "w-1/3 border-r",
                                                                children: i.map(e => (0,
                                                                    t.jsx)("div", {
                                                                        className: "p-3 cursor-pointer ".concat(h === e.key ? "border-solid border-r-[6px] border-red-600 bg-blue-100 text-customBlue font-semibold" : "bg-white text-gray-400 font-light"),
                                                                        onClick: () => b(e.key),
                                                                        children: e.name
                                                                    }, e.key))
                                                            }), (0,
                                                                t.jsx)("div", {
                                                                    className: "w-2/3 p-4",
                                                                    children: null === (n = i.find(e => e.key === h)) || void 0 === n ? void 0 : n.options.map(e => (0,
                                                                        t.jsxs)("div", {
                                                                            className: "flex items-center py-2",
                                                                            children: [(0,
                                                                                t.jsx)("input", {
                                                                                    type: "radio",
                                                                                    checked: String(N[h]) === String(e.id),
                                                                                    onChange: () => I(h, e.id)
                                                                                }), (0,
                                                                                    t.jsx)("span", {
                                                                                        className: "".concat(String(N[h]) === String(e.id) ? "font-normal" : "font-light", " ml-2"),
                                                                                        children: e.name
                                                                                    })]
                                                                        }, e.id))
                                                                })]
                                                    })
                                            })]
                            })
                    })
        }
        function eD(e) {
            let { mockTestType: n, isResultDeclared: i, leaderboardData: l, isLeaderboardAvailable: s, solutionPdf: d, filterCount: r, isQcaUploaded: c, menuItems: m, filterData: u, loading: v, rankerPdfCount: g, isTopperPdfsAvailable: k, evaluationStatus: x, submittedAt: p, handleViewSolutions: f, handleViewLeaderboard: h, handleAllTypeDownload: b, setFilters: N, showToast: y, showViewSolutionButton: S, entityType: j, handleBookmarkRedirect: w, isBookmarkedQuestion: A, isFreeMockTest: T } = e
                , C = "subjective" === n
                , [I, D] = (0,
                    a.useState)(!1)
                , [B, M] = (0,
                    a.useState)(!1)
                , E = (0,
                    a.useRef)(null)
                , R = (0,
                    a.useRef)(null)
                , L = window.innerWidth < 768;
            return eh([E, R], (0,
                a.useCallback)(() => {
                    D(!1)
                }
                    , [])),
                (0,
                    t.jsxs)("div", {
                        className: "flex items-center justify-center gap-4 relative",
                        children: [(0,
                            t.jsxs)("div", {
                                className: "justify-around gap-4 hidden lg:flex",
                                children: [(!C || S) && (0,
                                    t.jsxs)("button", {
                                        onClick: f,
                                        type: "button",
                                        className: "px-[18px] h-10 py-2 border-2 bg-white border-blue-100 text-[#217ABB] rounded-md text-sm font-medium w-full text-nowrap flex justify-between items-center",
                                        children: ["View Solutions", (0,
                                            t.jsx)("svg", {
                                                width: "9",
                                                height: "18",
                                                className: "ml-2",
                                                viewBox: "0 0 9 18",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                children: (0,
                                                    t.jsx)("path", {
                                                        d: "M1.5 17L7.5 9L1.5 1",
                                                        stroke: "#217ABB",
                                                        strokeWidth: "1.5"
                                                    })
                                            })]
                                    }), s && (0,
                                        t.jsx)("button", {
                                            type: "button",
                                            className: "bg-white h-10 px-4 py-2 border-2 ".concat(i && !(0,
                                                o.A)(l) ? "border-blue-100 text-[#217ABB]" : "border-gray-300 text-[#33415599]", " rounded-md text-sm font-medium w-full"),
                                            onClick: h,
                                            children: "Leaderboard"
                                        })]
                            }), (0,
                                t.jsxs)("div", {
                                    className: "",
                                    children: [(0,
                                        t.jsxs)("button", {
                                            type: "button",
                                            className: "".concat(d ? "bg-white  border-blue-100 text-[#217ABB]" : "bg-[#f1f1f1] text-grayLight", " h-10  border-2 px-4 py-2  rounded-md text-sm font-medium w-full lg:flex hidden items-center gap-2"),
                                            onClick: () => d ? b("Solution") : y("No solutions available for download"),
                                            children: ["Download Solutions", (0,
                                                t.jsx)(F(), {
                                                    src: eF.A,
                                                    className: "cursor-pointer w-3 h-4"
                                                })]
                                        }), (0,
                                            t.jsx)(F(), {
                                                src: eF.A,
                                                className: "cursor-pointer w-[15px] h-5 lg:hidden",
                                                onClick: () => d ? b("Solution") : y("No solutions available for download")
                                            })]
                                }), !C && !T && (0,
                                    t.jsxs)("div", {
                                        className: "relative group",
                                        children: [(0,
                                            t.jsx)("div", {
                                                className: "bookmark cursor-pointer",
                                                onClick: () => A ? w() : y("You don't have any bookmarked questions for this test."),
                                                children: (0,
                                                    t.jsx)("svg", {
                                                        width: "14",
                                                        height: "19",
                                                        viewBox: "0 0 14 19",
                                                        fill: "none",
                                                        xmlns: "http://www.w3.org/2000/svg",
                                                        children: (0,
                                                            t.jsx)("path", {
                                                                d: "M12.8333 2.96707C12.8333 1.98387 12.0498 1.18683 11.0833 1.18683H2.91667C1.95017 1.18683 1.16667 1.98387 1.16667 2.96707V17.4048L6.72007 14.3147C6.8945 14.2177 7.1055 14.2177 7.27993 14.3147L12.8333 17.4048V2.96707ZM0.863261 18.9264C0.474526 19.1427 0 18.8565 0 18.4057V2.96707C0 1.3284 1.30584 0 2.91667 0H11.0833C12.6942 0 14 1.3284 14 2.96707V18.4057C14 18.8565 13.5255 19.1427 13.1367 18.9264L7 15.5118L0.863261 18.9264Z",
                                                                fill: "black"
                                                            })
                                                    })
                                            }), (0,
                                                t.jsx)("span", {
                                                    className: "pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity",
                                                    children: "Bookmarks"
                                                })]
                                    }), !C && "dart-test" !== j && (0,
                                        t.jsxs)("div", {
                                            className: "relative group",
                                            ref: R,
                                            onClick: () => {
                                                D(e => {
                                                    let n = !e;
                                                    return L && M(n),
                                                        n
                                                }
                                                )
                                            }
                                            ,
                                            children: [r > 0 && (0,
                                                t.jsx)("span", {
                                                    className: "absolute bg-[#FF0000] border-2 border-white flex cursor-pointer justify-center items-center rounded-full text-white text-xs -right-[7px] top-[7px] w-5 h-5 z-10",
                                                    children: r
                                                }), (0,
                                                    t.jsx)(F(), {
                                                        src: eS,
                                                        alt: "filterIcon",
                                                        className: "cursor-pointer w-7 h-7"
                                                    }), (0,
                                                        t.jsx)("span", {
                                                            className: "pointer-events-none absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity",
                                                            children: "Filter"
                                                        })]
                                        }), C && (0,
                                            t.jsx)(ej.A, {
                                                rankerPdfCount: g,
                                                isRankerPdf: k,
                                                isQcaUploaded: c,
                                                evalution: x,
                                                submitedDate: p,
                                                lists: m
                                            }), !C && (0,
                                                t.jsx)("div", {
                                                    ref: E,
                                                    className: "absolute right-0 top-10 w-[340px] z-10 shadow-[0px_2px_15px_0px_#00000012] rounded ".concat(I ? "" : " hidden"),
                                                    children: (0,
                                                        t.jsx)(eI, {
                                                            onApplyFilters: e => N(e),
                                                            isResultBottomSheetOpen: B,
                                                            radioTextStyle: "w-auto",
                                                            optionTitleSty: "px-0",
                                                            title: "",
                                                            radioStyle: "w-[18px]",
                                                            fromTestPage: "ResultPage",
                                                            isLoad: v,
                                                            wrapStyle: "border-0 shadow-[0px_2px_15px_0px_#00000012]",
                                                            filterData: null == u ? void 0 : u.pageFilters
                                                        })
                                                })]
                    })
        }
        eI.propTypes = {
            filterData: r().any,
            isLoad: r().any,
            onApplyFilters: r().any,
            wrapStyle: r().any,
            fromTestPage: r().any,
            title: r().any,
            radioStyle: r().any,
            optionTitleSty: r().any,
            radioTextStyle: r().any,
            isResultBottomSheetOpen: r().any
        },
            eD.propTypes = {
                mockTestType: r().string,
                isResultDeclared: r().bool,
                leaderboardData: r().array,
                isLeaderboardAvailable: r().bool,
                solutionPdf: r().any,
                filterCount: r().number,
                isQcaUploaded: r().bool,
                menuItems: r().array,
                filterData: r().object,
                loading: r().bool,
                rankerPdfCount: r().number,
                isTopperPdfsAvailable: r().bool,
                evaluationStatus: r().string,
                submittedAt: r().string,
                handleViewSolutions: r().func,
                handleViewLeaderboard: r().func,
                handleAllTypeDownload: r().func,
                setFilters: r().func,
                showToast: r().func,
                showViewSolutionButton: r().bool,
                entityType: r().string,
                handleBookmarkRedirect: r().func,
                isBookmarkedQuestion: r().bool,
                isFreeMockTest: r().bool
            };
        var eB = i(41547)
            , eM = i(455)
            , eE = i(37748)
            , eR = i.n(eE)
            , eL = i(760)
            , eq = i.n(eL);
        function eP(e) {
            var n, i, d, r, u, g, k, x, p, b, N, y, F, S, w, A, T, C, M, E, R, q, P, V, W, Z, Y, X, ee, en, ei, et, ea, el, es, ed, er, ec, em, eu, ek, ep, eh, eF, eS, ej, ew, eA, eT, eC, eI, eE, eL, eP, eV, eO, e_, eQ, eU, eH, eW, ez, eZ, eK, eG, e$, eY, eJ, eX, e0, e1, e2, e4;
            let { data: e5, setFilters: e3, filters: e9, filterCount: e8 } = e
                , e6 = (0,
                    s.useRouter)()
                , { miscellaneousData: e7 } = (0,
                    eg.aY)()
                , ne = (null === (n = (0,
                    U.cC)(null == e7 ? void 0 : e7.hostname)) || void 0 === n ? void 0 : n.organizationName) === "madeeasy"
                , { linkId: nn, testName: ni, isFreeMockTest: nt, courseName: na, courseSlug: nl, totalMockTestCount: ns, mockTestType: nd, mode: nr, isResultDeclared: no, isFinalSubmissionDatePassed: nc, isLateSubmission: nm, resultAt: nu, finalSubmissionAt: nv, overallStats: ng, currentUserRankInfo: nk, scoresAverage: nx, subjects: np, topicsWise: nf, leaderboardData: nh, solutionVideos: nb, contentVideos: nN, solutionPdf: ny, rankerPdfCount: nF, getEvalStatus: nS, getQuestionNavInfo: nj, marksData: nw, accuracyData: nA, timeSpentData: nT, subjectData: nC, topicData: nI, dataAttempt: nD, lineChartData: nB, maxSubjectValue: nM, maxTopicValue: nE, mostAttemptedQuestions: nR, leastAttemptedQuestions: nL } = (0,
                    eB.Ay)(e5)
                , [nq, nP] = (0,
                    a.useState)(!1);
            (0,
                a.useEffect)(() => {
                    var e, n, i, t, a, l, s, d, r;
                    (0,
                        O.sx)(_.A.MOCK_TEST_RESULT_VIEWED, {
                            timestamp: new Date().getTime(),
                            testID: null == e5 ? void 0 : null === (e = e5.getMockTestInfo) || void 0 === e ? void 0 : e.id,
                            testName: ni,
                            mockTestTitle: null == e5 ? void 0 : null === (l = e5.getMockTestInfo) || void 0 === l ? void 0 : null === (a = l.attemptInfo) || void 0 === a ? void 0 : null === (t = a.content) || void 0 === t ? void 0 : null === (i = t.contentInLanguages) || void 0 === i ? void 0 : null === (n = i[0]) || void 0 === n ? void 0 : n.name,
                            mockTestId: null == e5 ? void 0 : null === (s = e5.getMockTestInfo) || void 0 === s ? void 0 : s.mockTestId,
                            score: null == ng ? void 0 : ng.score,
                            testStatus: null == e5 ? void 0 : null === (r = e5.getMockTestInfo) || void 0 === r ? void 0 : null === (d = r.attemptInfo) || void 0 === d ? void 0 : d.attemptStatus,
                            screenName: "MockTest Result",
                            testType: nt ? "Free" : nd,
                            linkID: nn
                        })
                }
                    , []);
            let nV = () => {
                no && !(0,
                    o.A)(nh) && nP(!0)
            }
                , nO = () => {
                    "subjective" !== nd ? e6.push("/attempt-mocktest?linkId=".concat(nn, "&isSolution=true")) : e6.push("/subjective-mocktest?linkId=".concat(nn, "&isSolution=true"))
                }
                , n_ = (e, n) => {
                    if ("subjective" === nd)
                        return;
                    let i = nj(e, n);
                    i && e6.push("/attempt-mocktest?linkId=".concat(nn) + "&isSolution=true" + "&questionResult=".concat(i.localIndex) + "&sectionResult=".concat(i.sectionIndex))
                }
                , [nQ, { loading: nU, data: nH }] = (0,
                    c._)(z())
                , [nW] = (0,
                    c._)(K())
                , { showToast: nz } = (0,
                    a.useContext)(G.$)
                , [nZ, nK] = (0,
                    a.useState)()
                , nG = null == e5 ? void 0 : null === (d = e5.getMockTestInfo) || void 0 === d ? void 0 : null === (i = d.attemptInfo) || void 0 === i ? void 0 : i.isBookmarkedQuestion
                , [n$] = (0,
                    c._)(eR())
                , [nY] = (0,
                    m.n)(eq())
                , nJ = async () => {
                    try {
                        var e, n, i, t, a, l, s, d, r;
                        let { data: o } = await n$({
                            variables: {
                                slug: nl
                            }
                        })
                            , c = null == o ? void 0 : o.getCourseBySlug
                            , m = null == c ? void 0 : c.purchaseOptions
                            , u = null == c ? void 0 : null === (n = c.batches) || void 0 === n ? void 0 : null === (e = n[0]) || void 0 === e ? void 0 : e.id;
                        if ((null == m ? void 0 : m.length) === 1) {
                            if (null === (i = m[0]) || void 0 === i ? void 0 : i.isPurchaseAllowed) {
                                (0,
                                    O.sx)(_.A.ENROLL_NOW_CLICKED, {
                                        price: (null === (l = m[0]) || void 0 === l ? void 0 : null === (a = l.priceDetails) || void 0 === a ? void 0 : null === (t = a.listedPriceDetails) || void 0 === t ? void 0 : t.listedCost) || "",
                                        timestamp: new Date().getTime(),
                                        testType: null == c ? void 0 : c.type,
                                        testDuration: null == c ? void 0 : c.duration,
                                        testID: null == c ? void 0 : c.id,
                                        testName: null == c ? void 0 : c.name,
                                        screenName: "MockTest Result"
                                    });
                                let e = await nY({
                                    variables: {
                                        productId: null === (s = m[0]) || void 0 === s ? void 0 : s.id,
                                        courseId: null == c ? void 0 : c.id,
                                        batchId: u
                                    }
                                })
                                    , n = null == e ? void 0 : null === (r = e.data) || void 0 === r ? void 0 : null === (d = r.createOrder) || void 0 === d ? void 0 : d.paymentLink;
                                n && window.open(n, "_blank")
                            } else
                                nz("Enrolment is not allowed for this batch.")
                        } else {
                            let e = encodeURIComponent("".concat(window.location.origin, "/prep/courses-combo?courseId=").concat(null == c ? void 0 : c.id, "&batchId=").concat(u));
                            e6.push("/combo-testseries?courseId=".concat(null == c ? void 0 : c.id, "&batchId=").concat(u, "&redirectTo=").concat(e))
                        }
                    } catch (e) {
                        console.error("Error creating order:", e)
                    }
                }
                , nX = async e => {
                    try {
                        var n, i, t;
                        let { data: a } = await nW({
                            variables: {
                                linkId: nn,
                                type: e
                            }
                        });
                        (null == a ? void 0 : null === (n = a.getMockTestPDFDownloadSignedUrls) || void 0 === n ? void 0 : n.success) ? nK(null == a ? void 0 : null === (i = a.getMockTestPDFDownloadSignedUrls) || void 0 === i ? void 0 : i.downloadUrlInfoList) : nz(null == a ? void 0 : null === (t = a.getMockTestPDFDownloadSignedUrls) || void 0 === t ? void 0 : t.message)
                    } catch (e) {
                        console.error("Error fetching handout:", e)
                    }
                }
                , n0 = async e => {
                    try {
                        var n, i, t, a, l, s, d;
                        let { data: r } = await nQ({
                            variables: {
                                linkId: nn,
                                type: e
                            }
                        });
                        (null == r ? void 0 : null === (n = r.getMockTestPDFDownloadSignedUrl) || void 0 === n ? void 0 : n.signedUrl) ? ((0,
                            O.sx)(_.A.MOCK_TEST_SOLUTIONS_DOWNLOADED, {
                                timestamp: new Date().getTime(),
                                mockTestId: nn,
                                mockTestTitle: null == e5 ? void 0 : null === (s = e5.getMockTestInfo) || void 0 === s ? void 0 : null === (l = s.attemptInfo) || void 0 === l ? void 0 : null === (a = l.content) || void 0 === a ? void 0 : null === (t = a.contentInLanguages) || void 0 === t ? void 0 : null === (i = t[0]) || void 0 === i ? void 0 : i.name,
                                testType: nt ? "Free" : nd,
                                screenName: "MockTest Result",
                                linkID: nn
                            }),
                            window.open(null == r ? void 0 : null === (d = r.getMockTestPDFDownloadSignedUrl) || void 0 === d ? void 0 : d.signedUrl, "_blank")) : nz("PDF download link not available. Please try again later.")
                    } catch (e) {
                        console.error("Error fetching handout:", e)
                    }
                }
                , n1 = [{
                    label: "View Question Paper",
                    icon: (0,
                        t.jsx)("span", {
                            className: "",
                            children: ey
                        }),
                    onClick: () => n0("QuestionPaper")
                }, {
                    label: "View QCA Booklet",
                    icon: (0,
                        t.jsx)("span", {
                            className: "",
                            children: ey
                        }),
                    onClick: () => n0("AnswerSheet")
                }, {
                    label: "View Uploaded QCA Booklet",
                    icon: (0,
                        t.jsx)("span", {
                            children: ey
                        }),
                    onClick: () => n0("AccountOriginalAnswerSheet")
                }, {
                    label: "View rank-holders' QCAB",
                    icon: (0,
                        t.jsx)("span", {
                            children: ey
                        }),
                    onClick: () => nX("TopperPdf"),
                    children: Array.from({
                        length: nF || 0
                    }, (e, n) => ({
                        label: "Rank ".concat(n + 1, " - QCAB"),
                        pdfList: nZ
                    }))
                }]
                , n2 = window.innerWidth < 768
                , n4 = (0,
                    eM.ie)(ne)
                , [n5, n3] = (0,
                    a.useState)()
                , { data: n9 } = (0,
                    l.IT)(ex());
            (0,
                a.useEffect)(() => {
                    if (null == n9 ? void 0 : n9.getAccountOnboardingFlags) {
                        var e;
                        n3(!(null == n9 ? void 0 : null === (e = n9.getAccountOnboardingFlags) || void 0 === e ? void 0 : e.isMockTestAnalysisFilterOnboardingDone))
                    }
                }
                    , [n9]);
            let [n8] = (0,
                m.n)(ef(), {
                    variables: {
                        onboardingType: "MockTestAnalysisFilterOnboarding"
                    },
                    update(e) {
                        let n = e.readQuery({
                            query: ex()
                        });
                        n && e.writeQuery({
                            query: ex(),
                            data: {
                                getAccountOnboardingFlags: {
                                    ...n.getAccountOnboardingFlags,
                                    isMockTestAnalysisFilterOnboardingDone: !0
                                }
                            }
                        })
                    }
                })
                , n6 = null == e5 ? void 0 : null === (r = e5.getMockTestInfo) || void 0 === r ? void 0 : r.entityType;
            return (0,
                t.jsxs)(t.Fragment, {
                    children: [(0,
                        t.jsxs)("div", {
                            className: "bg-[#f7f8fa] ".concat(nt ? "pb-24 xl:pb-20" : ""),
                            children: [n5 && "dart-test" !== n6 && "subjective" !== nd && (0,
                                t.jsx)(eb, {
                                    isShowHighlit: n5,
                                    setIsVisible: n3,
                                    handleApplyOnboarding: () => {
                                        n8(),
                                            n3(!1)
                                    }
                                    ,
                                    message: "Introducing: Filters",
                                    subMessage: "Quickly Refine Results Using Filters."
                                }), (0,
                                    t.jsxs)("div", {
                                        className: "",
                                        children: [(0,
                                            t.jsxs)("div", {
                                                className: "flex justify-between items-center p-5 xl:p-6",
                                                children: [(0,
                                                    t.jsx)($.A, {
                                                        marginClass: "mb-0 !my-0",
                                                        pageHeading: "Analysis",
                                                        breadCrumb: (0,
                                                            t.jsxs)("span", {
                                                                children: [nt ? (0,
                                                                    t.jsxs)(t.Fragment, {
                                                                        children: [(0,
                                                                            t.jsxs)(v(), {
                                                                                href: "/all-courses?scope=testseries&tag=all",
                                                                                children: ["Test Series", " "]
                                                                            }), "/", " ", (0,
                                                                                t.jsxs)(v(), {
                                                                                    href: "/testseries/".concat(nl),
                                                                                    children: [na, " "]
                                                                                })]
                                                                    }) : (0,
                                                                        t.jsxs)(v(), {
                                                                            href: "".concat("dart-test" === n6 ? "/dart" : "/my-course?key=test"),
                                                                            children: ["".concat("dart-test" === n6 ? "Dart" : "Learn"), " "]
                                                                        }), "/", " ", (0,
                                                                            t.jsx)("span", {
                                                                                className: "text-gray-700",
                                                                                children: ni
                                                                            })]
                                                            })
                                                    }), (0,
                                                        t.jsx)(eD, {
                                                            mockTestType: null == e5 ? void 0 : null === (k = e5.getMockTestInfo) || void 0 === k ? void 0 : null === (g = k.attemptInfo) || void 0 === g ? void 0 : null === (u = g.content) || void 0 === u ? void 0 : u.mockTestType,
                                                            isResultDeclared: no,
                                                            leaderboardData: nh,
                                                            isLeaderboardAvailable: null == e5 ? void 0 : null === (p = e5.getMockTestInfo) || void 0 === p ? void 0 : null === (x = p.attemptInfo) || void 0 === x ? void 0 : x.isLeaderboardAvailable,
                                                            solutionPdf: ny,
                                                            showToast: nz,
                                                            filterCount: e8,
                                                            isQcaUploaded: !0,
                                                            menuItems: n1,
                                                            filterData: n4,
                                                            loading: !1,
                                                            rankerPdfCount: null == e5 ? void 0 : null === (y = e5.getMockTestInfo) || void 0 === y ? void 0 : null === (N = y.attemptInfo) || void 0 === N ? void 0 : null === (b = N.content) || void 0 === b ? void 0 : b.totalAvailableTopperPdfs,
                                                            isTopperPdfsAvailable: null == e5 ? void 0 : null === (S = e5.getMockTestInfo) || void 0 === S ? void 0 : null === (F = S.attemptInfo) || void 0 === F ? void 0 : F.isTopperPdfsAvailable,
                                                            evaluationStatus: null == e5 ? void 0 : null === (T = e5.getMockTestInfo) || void 0 === T ? void 0 : null === (A = T.attemptInfo) || void 0 === A ? void 0 : null === (w = A.subjectiveTestAttempt) || void 0 === w ? void 0 : w.evaluationStatus,
                                                            submittedAt: null == e5 ? void 0 : null === (E = e5.getMockTestInfo) || void 0 === E ? void 0 : null === (M = E.attemptInfo) || void 0 === M ? void 0 : null === (C = M.subjectiveTestAttempt) || void 0 === C ? void 0 : C.submittedAt,
                                                            handleViewSolutions: nO,
                                                            handleViewLeaderboard: nV,
                                                            handleAllTypeDownload: n0,
                                                            handleBookmarkRedirect: () => {
                                                                e6.push("/attempt-mocktest?linkId=".concat(nn) + "&isSolution=true" + "&isBookmark=".concat(nG))
                                                            }
                                                            ,
                                                            isBookmarkedQuestion: nG,
                                                            setFilters: e3,
                                                            entityType: n6,
                                                            showViewSolutionButton: null == e5 ? void 0 : null === (P = e5.getMockTestInfo) || void 0 === P ? void 0 : null === (q = P.attemptInfo) || void 0 === q ? void 0 : null === (R = q.subjectiveTestAttempt) || void 0 === R ? void 0 : R.showViewSolutionButton,
                                                            isFreeMockTest: nt
                                                        })]
                                            }), (0,
                                                t.jsx)(B.A, {
                                                    showPopup: nq,
                                                    popupFor: "MyCourse",
                                                    batchHeading: "Leaderboard",
                                                    onPopupClose: () => {
                                                        nP(!1)
                                                    }
                                                    ,
                                                    divwidth: "lg:max-w-[758px] p-2 w-full",
                                                    messageData: (0,
                                                        t.jsx)(Q, {
                                                            currentUserOverallStats: ng,
                                                            leaderboardData: nh,
                                                            eventData: null == e5 ? void 0 : e5.getMockTestInfo,
                                                            currentUserRankInfo: nk,
                                                            isLateSubmission: nm,
                                                            isFreeMockTest: nt,
                                                            linkId: nn
                                                        })
                                                }), (null == e5 ? void 0 : null === (Z = e5.getMockTestInfo) || void 0 === Z ? void 0 : null === (W = Z.attemptInfo) || void 0 === W ? void 0 : null === (V = W.content) || void 0 === V ? void 0 : V.mockTestType) === "subjective" ? (0,
                                                    t.jsxs)(t.Fragment, {
                                                        children: [(0,
                                                            t.jsx)(H, {
                                                                overallStats: ng,
                                                                linkId: nn,
                                                                overallComment: null == e5 ? void 0 : null === (ee = e5.getMockTestInfo) || void 0 === ee ? void 0 : null === (X = ee.attemptInfo) || void 0 === X ? void 0 : null === (Y = X.attempt) || void 0 === Y ? void 0 : Y.overallComment,
                                                                isFinalSubmissionDatePassed: nc,
                                                                isResultDeclared: no,
                                                                leaderBoardData: nh,
                                                                handleViewLeaderboard: nV,
                                                                finalSubmissionAt: nv,
                                                                resultAt: nu,
                                                                mode: nr,
                                                                handleViewSolutions: nO,
                                                                scoresAverage: nx,
                                                                handleAllTypeDownload: n0,
                                                                topperScore: null == e5 ? void 0 : null === (ea = e5.getMockTestInfo) || void 0 === ea ? void 0 : null === (et = ea.attemptInfo) || void 0 === et ? void 0 : null === (ei = et.attempt) || void 0 === ei ? void 0 : null === (en = ei.stats) || void 0 === en ? void 0 : en.topper,
                                                                assignAt: null == e5 ? void 0 : null === (ed = e5.getMockTestInfo) || void 0 === ed ? void 0 : null === (es = ed.attemptInfo) || void 0 === es ? void 0 : null === (el = es.subjectiveTestAttempt) || void 0 === el ? void 0 : el.assignedAt,
                                                                submittedAt: null == e5 ? void 0 : null === (em = e5.getMockTestInfo) || void 0 === em ? void 0 : null === (ec = em.attemptInfo) || void 0 === ec ? void 0 : null === (er = ec.subjectiveTestAttempt) || void 0 === er ? void 0 : er.submittedAt,
                                                                evaluatedAt: null == e5 ? void 0 : null === (ep = e5.getMockTestInfo) || void 0 === ep ? void 0 : null === (ek = ep.attemptInfo) || void 0 === ek ? void 0 : null === (eu = ek.subjectiveTestAttempt) || void 0 === eu ? void 0 : eu.evaluatedAt,
                                                                startedAt: null == e5 ? void 0 : null === (eS = e5.getMockTestInfo) || void 0 === eS ? void 0 : null === (eF = eS.attemptInfo) || void 0 === eF ? void 0 : null === (eh = eF.subjectiveTestAttempt) || void 0 === eh ? void 0 : eh.startedAt,
                                                                showViewSolutionButton: null == e5 ? void 0 : null === (eA = e5.getMockTestInfo) || void 0 === eA ? void 0 : null === (ew = eA.attemptInfo) || void 0 === ew ? void 0 : null === (ej = ew.subjectiveTestAttempt) || void 0 === ej ? void 0 : ej.showViewSolutionButton
                                                            }), (null == nB ? void 0 : null === (eT = nB.perScoreStats) || void 0 === eT ? void 0 : eT.length) > 0 && (0,
                                                                t.jsx)(ev, {
                                                                    chartData: nB,
                                                                    title: "Median Score",
                                                                    userScore: ng.score,
                                                                    rank: ng.rank,
                                                                    maxScore: ng.maxScore,
                                                                    totalStudents: ng.totalRank
                                                                })]
                                                    }) : (0,
                                                        t.jsxs)(t.Fragment, {
                                                            children: [(0,
                                                                t.jsx)(L, {
                                                                    overallStats: ng,
                                                                    isFinalSubmissionDatePassed: nc,
                                                                    isResultDeclared: no,
                                                                    leaderBoardData: nh,
                                                                    handleViewLeaderboard: nV,
                                                                    finalSubmissionAt: nv,
                                                                    resultAt: nu,
                                                                    mode: nr,
                                                                    paddingClass: "px-5 xl:px-6",
                                                                    handleViewSolutions: nO,
                                                                    isLeaderBoardVisible: null == e5 ? void 0 : null === (eI = e5.getMockTestInfo) || void 0 === eI ? void 0 : null === (eC = eI.attemptInfo) || void 0 === eC ? void 0 : eC.isLeaderboardAvailable,
                                                                    showFilterTxt: e9,
                                                                    entityType: n6
                                                                }), (null == e5 ? void 0 : null === (eP = e5.getMockTestInfo) || void 0 === eP ? void 0 : null === (eL = eP.attemptInfo.content) || void 0 === eL ? void 0 : null === (eE = eL.sections) || void 0 === eE ? void 0 : eE.length) > 1 && (0,
                                                                    t.jsx)(h, {
                                                                        paddingClass: "px-5 xl:px-6 mb-3 xl:mb-0",
                                                                        data: e5,
                                                                        showFilterTxt: e9
                                                                    }), (0,
                                                                        t.jsx)(j, {
                                                                            entityType: n6,
                                                                            paddingClass: "p-5 xl:p-6",
                                                                            title: "Subject Wise Analysis",
                                                                            subjects: np,
                                                                            totalScoreAvg: null == e5 ? void 0 : null === (eQ = e5.getMockTestInfo) || void 0 === eQ ? void 0 : null === (e_ = eQ.attemptInfo) || void 0 === e_ ? void 0 : null === (eO = e_.attempt) || void 0 === eO ? void 0 : null === (eV = eO.stats) || void 0 === eV ? void 0 : eV.subjects
                                                                        }), (0,
                                                                            t.jsx)(j, {
                                                                                entityType: n6,
                                                                                paddingClass: "px-5 xl:-6 mb-3 xl:mb-0",
                                                                                title: "Topic-wise Performance",
                                                                                totalScoreAvg: null == e5 ? void 0 : null === (ez = e5.getMockTestInfo) || void 0 === ez ? void 0 : null === (eW = ez.attemptInfo) || void 0 === eW ? void 0 : null === (eH = eW.attempt) || void 0 === eH ? void 0 : null === (eU = eH.stats) || void 0 === eU ? void 0 : eU.topics,
                                                                                subjects: nf
                                                                            }), (null == nC ? void 0 : nC.length) > 0 && (0,
                                                                                t.jsx)(eo, {
                                                                                    title: "Number of Questions By Subject",
                                                                                    data: (0,
                                                                                        U.E5)(nC, eB.My),
                                                                                    xKey: "subject",
                                                                                    bars: eB.My,
                                                                                    yLabel: "Count Of Questions",
                                                                                    height: 400,
                                                                                    yAxisDomain: [0, nM],
                                                                                    tickCount: nM / 5 + 1,
                                                                                    showLegend: !1,
                                                                                    barWidth: n2 ? 66 : 80
                                                                                }), (null == nI ? void 0 : nI.length) > 0 && (0,
                                                                                    t.jsx)(eo, {
                                                                                        title: "Number of Questions By Topics",
                                                                                        data: (0,
                                                                                            U.E5)(nI, eB.Pc),
                                                                                        xKey: "subject",
                                                                                        bars: eB.Pc,
                                                                                        yLabel: "Count Of Questions",
                                                                                        height: 400,
                                                                                        yAxisDomain: [0, nE],
                                                                                        tickCount: nE / 5 + 1,
                                                                                        showLegend: !1,
                                                                                        barWidth: n2 ? 60 : 80
                                                                                    }), (null == nB ? void 0 : null === (eZ = nB.perScoreStats) || void 0 === eZ ? void 0 : eZ.length) > 0 && "dart-test" !== n6 && (0,
                                                                                        t.jsx)(ev, {
                                                                                            chartData: nB,
                                                                                            title: "Median Score"
                                                                                        }), "dart-test" !== n6 && (0,
                                                                                            t.jsxs)(t.Fragment, {
                                                                                                children: [(null == nw ? void 0 : nw.length) > 0 && (0,
                                                                                                    t.jsx)(eo, {
                                                                                                        data: (0,
                                                                                                            U.E5)(nw, eB.C_),
                                                                                                        xKey: "difficulty",
                                                                                                        bars: eB.C_,
                                                                                                        yLabel: "Marks",
                                                                                                        height: 400,
                                                                                                        showLegend: !1,
                                                                                                        barWidth: n2 ? 30 : 40,
                                                                                                        title: "Difficulty- based Relative Performance",
                                                                                                        bottomTag: !0,
                                                                                                        customLegend: (0,
                                                                                                            t.jsx)(eN, {
                                                                                                                items: [{
                                                                                                                    label: "My Marks",
                                                                                                                    color: "#045692"
                                                                                                                }, {
                                                                                                                    label: "Avg Marks",
                                                                                                                    color: "#FF8C00"
                                                                                                                }, {
                                                                                                                    label: "Highest Marks",
                                                                                                                    color: "#558B71"
                                                                                                                }]
                                                                                                            })
                                                                                                    }), (null == nA ? void 0 : nA.length) > 0 && (0,
                                                                                                        t.jsx)(eo, {
                                                                                                            data: (0,
                                                                                                                U.E5)(nA, eB.nm),
                                                                                                            xKey: "difficulty",
                                                                                                            bars: eB.nm,
                                                                                                            yLabel: "Accuracy (%)",
                                                                                                            height: 400,
                                                                                                            showLegend: !1,
                                                                                                            title: "Accuracy Per Difficulty Level",
                                                                                                            yAxisDomain: [0, "auto"],
                                                                                                            yAxisFormatter: e => e.toFixed(1),
                                                                                                            barWidth: n2 ? 30 : 40,
                                                                                                            customLegend: (0,
                                                                                                                t.jsx)(eN, {
                                                                                                                    items: [{
                                                                                                                        label: "My Accuracy",
                                                                                                                        color: "#045692"
                                                                                                                    }, {
                                                                                                                        label: "Avg Accuracy",
                                                                                                                        color: "#FF8C00"
                                                                                                                    }]
                                                                                                                })
                                                                                                        }), (null == nT ? void 0 : nT.length) > 0 && (0,
                                                                                                            t.jsx)(eo, {
                                                                                                                data: (0,
                                                                                                                    U.E5)(nT, eB._Z),
                                                                                                                xKey: "difficulty",
                                                                                                                bars: eB._Z,
                                                                                                                yLabel: "Total time (minutes)",
                                                                                                                height: 400,
                                                                                                                showLegend: !1,
                                                                                                                yAxisDomain: [0, "auto"],
                                                                                                                yAxisFormatter: e => e.toFixed(1),
                                                                                                                title: (0,
                                                                                                                    t.jsxs)("span", {
                                                                                                                        className: "inline-flex items-center",
                                                                                                                        children: ["Time Spent vs Difficulty", (0,
                                                                                                                            t.jsx)(f.A, {})]
                                                                                                                    }),
                                                                                                                barWidth: n2 ? 30 : 40,
                                                                                                                customLegend: (0,
                                                                                                                    t.jsx)(eN, {
                                                                                                                        items: [{
                                                                                                                            label: "My Time taken",
                                                                                                                            color: "#045692"
                                                                                                                        }, {
                                                                                                                            label: "Average time taken (other students)",
                                                                                                                            color: "#FF8C00"
                                                                                                                        }]
                                                                                                                    })
                                                                                                            })]
                                                                                            }), (null == nD ? void 0 : nD.length) > 0 && (0,
                                                                                                t.jsx)(eo, {
                                                                                                    data: nD,
                                                                                                    xKey: "question",
                                                                                                    bars: eB.nh,
                                                                                                    yLabel: "Count of Students",
                                                                                                    height: 500,
                                                                                                    stackId: "total",
                                                                                                    barWidth: n2 ? 60 : 80,
                                                                                                    yAxisDomain: [0, "auto"],
                                                                                                    showBarLabels: "true",
                                                                                                    title: (0,
                                                                                                        t.jsxs)("span", {
                                                                                                            className: "inline-flex items-center",
                                                                                                            children: ["Student Attempt by Question", "dart-test" !== n6 && (0,
                                                                                                                t.jsx)(f.A, {})]
                                                                                                        }),
                                                                                                    tickCount: 6
                                                                                                }), (null == nR ? void 0 : nR.length) > 0 && (0,
                                                                                                    t.jsx)(J, {
                                                                                                        entityType: n6,
                                                                                                        paddingClass: "px-5 xl:px-6 mb-3 xl:mb-0",
                                                                                                        getEvalStatus: nS,
                                                                                                        handleViewSolutions: n_,
                                                                                                        mostAttemptedQuestions: nR,
                                                                                                        title: "Most Attempted Questions"
                                                                                                    }), (null == nL ? void 0 : nL.length) > 0 && (0,
                                                                                                        t.jsx)(J, {
                                                                                                            entityType: n6,
                                                                                                            paddingClass: "px-5 xl:px-6 mb-3 xl:mb-0",
                                                                                                            getEvalStatus: nS,
                                                                                                            handleViewSolutions: n_,
                                                                                                            mostAttemptedQuestions: nL,
                                                                                                            title: "Least Attempted Questions"
                                                                                                        })]
                                                        })]
                                    })]
                        }), (0,
                            t.jsx)("div", {
                                className: "py-1 bg-[#E2E8F0] w-full lg:hidden"
                            }), (null == nb ? void 0 : nb.length) > 0 && (0,
                                t.jsx)(I, {
                                    videos: nb
                                }), (null == nN ? void 0 : nN.length) > 0 && (0,
                                    t.jsx)("div", {
                                        className: "py-4 bg-white",
                                        children: (0,
                                            t.jsx)(D.A, {
                                                videos: nN,
                                                batchEntityInitiator: (null == e5 ? void 0 : null === (eY = e5.getMockTestInfo) || void 0 === eY ? void 0 : null === (e$ = eY.attemptInfo) || void 0 === e$ ? void 0 : null === (eG = e$.initiator) || void 0 === eG ? void 0 : null === (eK = eG.batch) || void 0 === eK ? void 0 : eK.id) ? {
                                                    batchId: e5.getMockTestInfo.attemptInfo.initiator.batch.id,
                                                    entityId: e5.getMockTestInfo.attemptInfo.initiator.id
                                                } : void 0,
                                                heading: "Explainer Videos"
                                            })
                                    }), nt && !["Active", "Revoked"].includes(null == e5 ? void 0 : null === (e4 = e5.getMockTestInfo) || void 0 === e4 ? void 0 : null === (e2 = e4.attemptInfo) || void 0 === e2 ? void 0 : null === (e1 = e2.initiator) || void 0 === e1 ? void 0 : null === (e0 = e1.batch) || void 0 === e0 ? void 0 : null === (eX = e0.course) || void 0 === eX ? void 0 : null === (eJ = eX.accountPurchaseInfo) || void 0 === eJ ? void 0 : eJ.status) && (0,
                                        t.jsx)("div", {
                                            className: "fixed bottom-0 left-0 right-0 z-40 bg-[linear-gradient(120deg,_#0A4A84_0%,_#0267B1_55%,_#00A3FF_100%)] p-5 xl:p-6 shadow-[0px_-2px_10px_0px_#00000022]",
                                            children: (0,
                                                t.jsxs)("div", {
                                                    className: "flex flex-col xl:flex-row xl:items-center xl:justify-between gap-3",
                                                    children: [(0,
                                                        t.jsxs)("div", {
                                                            children: [(0,
                                                                t.jsx)("h3", {
                                                                    className: "text-white text-base xl:text-lg font-semibold",
                                                                    children: "Liked The series?"
                                                                }), (0,
                                                                    t.jsx)("p", {
                                                                        className: "text-[#DCEFFF] text-xs xl:text-sm font-normal",
                                                                        children: "Purchase the entire test series to unlock all ".concat(ns, " tests and full analysis")
                                                                    })]
                                                        }), (0,
                                                            t.jsx)("button", {
                                                                type: "button",
                                                                onClick: nJ,
                                                                className: "whitespace-nowrap shrink-0 bg-white text-[#0267B1] font-semibold text-sm xl:text-base rounded-lg px-10 py-2.5 xl:py-3 text-center hover:bg-[#DCEFFF] transition-colors",
                                                                children: "Buy Now"
                                                            })]
                                                })
                                        })]
                })
        }
        eP.propTypes = {
            data: r().object.isRequired,
            setFilters: r().func,
            filters: r().any,
            filterCount: r().number
        };
        var eV = i(3861)
            , eO = i.n(eV)
            , e_ = i(16142);
        let eQ = ["type", "difficultyLevel", "evalStatus"]
            , eU = function () {
                var e, n, i, d, r;
                let { user: o } = (0,
                    V.Jd)();
                if (!(null == o ? void 0 : o.id))
                    return window.location.href = "/",
                        null;
                let c = (0,
                    s.useRouter)()
                    , { linkId: m } = c.query
                    , [u, v] = (0,
                        a.useState)([])
                    , [g, k] = (0,
                        a.useState)();
                if (!m)
                    return c.replace("/home"),
                        null;
                (0,
                    a.useEffect)(() => {
                        if (!c.isReady)
                            return;
                        let e = eQ.filter(e => c.query[e]).map(e => ({
                            key: e,
                            value: c.query[e]
                        }));
                        v(e),
                            k(null == e ? void 0 : e.length)
                    }
                        , [c.isReady, c.query]);
                let { data: x, loading: p, error: f } = (0,
                    l.IT)(eO(), {
                        variables: {
                            linkId: m,
                            filters: u
                        },
                        fetchPolicy: "network-only",
                        nextFetchPolicy: "cache-only"
                    });
                if ((0,
                    a.useEffect)(() => {
                        let e = () => {
                            var e, n, i, t, a, l, s, d, r, o, m;
                            if (!(null == x ? void 0 : null === (n = x.getMockTestInfo) || void 0 === n ? void 0 : null === (e = n.attemptInfo) || void 0 === e ? void 0 : e.initiator))
                                return;
                            let u = localStorage.getItem("currentPageName");
                            if ("mockTestAttempt" === u) {
                                let e = null == x ? void 0 : null === (s = x.getMockTestInfo) || void 0 === s ? void 0 : null === (l = s.attemptInfo) || void 0 === l ? void 0 : null === (a = l.initiator) || void 0 === a ? void 0 : null === (t = a.batch) || void 0 === t ? void 0 : null === (i = t.course) || void 0 === i ? void 0 : i.slug;
                                c.push("/mock-test-details/".concat(e)),
                                    localStorage.removeItem("currentPageName")
                            } else
                                "studyPlanMockTestAttempt" === u && (c.push("/study-plan/".concat(null == x ? void 0 : null === (m = x.getMockTestInfo) || void 0 === m ? void 0 : null === (o = m.attemptInfo) || void 0 === o ? void 0 : null === (r = o.initiator) || void 0 === r ? void 0 : null === (d = r.batch) || void 0 === d ? void 0 : d.id)),
                                    localStorage.removeItem("currentPageName"))
                        }
                            ;
                        return window.addEventListener("popstate", e),
                            () => {
                                window.removeEventListener("popstate", e)
                            }
                    }
                        , [null == x ? void 0 : null === (n = x.getMockTestInfo) || void 0 === n ? void 0 : null === (e = n.attemptInfo) || void 0 === e ? void 0 : e.initiator]),
                    p)
                    return (0,
                        t.jsx)(e_.A, {
                            fullPage: !0
                        });
                if (f)
                    throw Error("Error fetching mock test info: ".concat(f.message));
                return (null == x ? void 0 : null === (d = x.getMockTestInfo) || void 0 === d ? void 0 : null === (i = d.attemptInfo) || void 0 === i ? void 0 : i.isScoreAvailable) ? (0,
                    t.jsx)(eP, {
                        filterCount: g,
                        setFilters: v,
                        filters: u,
                        data: x
                    }) : (0,
                        t.jsxs)("div", {
                            className: "min-h-screen flex flex-col items-center justify-center bg-[#f7f8fa] px-4",
                            children: [(0,
                                t.jsx)("p", {
                                    className: "text-xl font-semibold text-gray-800 mb-6 text-center",
                                    children: "Result Not Declared Yet..."
                                }), (null == x ? void 0 : null === (r = x.getMockTestInfo) || void 0 === r ? void 0 : r.isScholarshipTest) ? (0,
                                    t.jsx)("button", {
                                        type: "button",
                                        onClick: () => {
                                            var e, n, i, t;
                                            window.location.href = "/open-mock-test/".concat(null == x ? void 0 : null === (t = x.getMockTestInfo) || void 0 === t ? void 0 : null === (i = t.attemptInfo) || void 0 === i ? void 0 : null === (n = i.initiator) || void 0 === n ? void 0 : null === (e = n.promotionalEvent) || void 0 === e ? void 0 : e.slug)
                                        }
                                        ,
                                        className: "rounded-md bg-[#0a4a84] px-6 py-2 text-sm font-semibold text-white hover:bg-[#083b6a]",
                                        children: "Back"
                                    }) : (0,
                                        t.jsx)("button", {
                                            type: "button",
                                            onClick: () => c.push("/my-course"),
                                            className: "bg-customBlue text-white mt-3 px-5 py-2 rounded-md",
                                            children: "Go Back"
                                        })]
                        })
            }
    }
}]);
