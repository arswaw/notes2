"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
//services
var auth_service_1 = require('../../services/auth/auth.service');
var util_service_1 = require('../../services/util/util.service');
//models
var index_1 = require('../../models/field/index');
var form_1 = require('../../models/field/form');
var RepairsService = (function () {
    function RepairsService(http, auth, util) {
        this.http = http;
        this.auth = auth;
        this.util = util;
    }
    RepairsService.prototype.getRMA = function (id) {
        var headers = new http_1.Headers({ 'Content-Type': 'application/json', 'token': this.auth.getToken() });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post('/rma', '{"id":"' + id + '"}', options)
            .map(function (res) {
            var body = res.json();
            return body;
        })
            .catch(this.util.handleError);
    };
    ;
    RepairsService.prototype.getRMAs = function () {
        var headers = new http_1.Headers({ 'token': this.auth.getToken() });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.get('/rmaList', options)
            .map(function (res) {
            var json = res.json();
            return json;
        })
            .catch(this.util.handleError);
    };
    RepairsService.prototype.getIndex = function () {
        var obj = {
            indexId: 'rmaToInfo',
            source: 'rma',
            dest: 'info',
            map: [
                {
                    key: 'actionName',
                    value: 'action'
                },
                {
                    key: 'sku',
                    value: 'sku'
                },
                {
                    key: 'item',
                    value: 'item'
                },
                {
                    key: 'name',
                    value: 'cust'
                },
                {
                    key: 'notes',
                    value: 'notes'
                }
            ]
        };
        return new index_1.Index(obj);
    };
    RepairsService.prototype.getInfo = function () {
        var obj = {
            label: 'General Info',
            fieldId: 'info',
            controlType: 'form',
            children: [
                {
                    "label": "Customer",
                    "controlType": "static",
                    "fieldId": "cust"
                },
                {
                    "label": "SKU",
                    "controlType": "static",
                    "fieldId": "sku"
                },
                {
                    "label": "Item",
                    "controlType": "static",
                    "fieldId": "item"
                },
                {
                    "label": "Action",
                    "controlType": "static",
                    "fieldId": "action"
                },
                {
                    "label": "Notes",
                    "controlType": "textarea",
                    "fieldId": "notes"
                }
            ]
        };
        var form = new form_1.Form(obj);
        return form;
    };
    RepairsService.prototype.getReview = function () {
        var obj = {
            label: 'Review',
            fieldId: 'review',
            controlType: 'form',
            children: [
                {
                    "controlType": "radio",
                    "label": "Charger",
                    "fieldId": 'charger',
                    "required": true,
                    "options": [
                        {
                            value: 'Replaced',
                            key: 'Replaced'
                        },
                        {
                            value: 'Included',
                            key: 'Included'
                        },
                        {
                            value: 'Missing',
                            key: 'Missing'
                        },
                        {
                            value: 'Added',
                            key: 'Added'
                        }
                    ]
                },
                {
                    "controlType": "radio",
                    "label": "Manual",
                    'fieldId': 'manual',
                    "required": true,
                    "options": [
                        {
                            value: 'Replaced',
                            key: 'Replaced'
                        },
                        {
                            value: 'Included',
                            key: 'Included'
                        },
                        {
                            value: 'Missing',
                            key: 'Missing'
                        },
                        {
                            value: 'Added',
                            key: 'Added'
                        }
                    ]
                },
                {
                    "controlType": "radio",
                    "label": "DVD",
                    "fieldId": "dvd",
                    "required": true,
                    "options": [
                        {
                            value: 'Replaced',
                            key: 'Replaced'
                        },
                        {
                            value: 'Included',
                            key: 'Included'
                        },
                        {
                            value: 'Missing',
                            key: 'Missing'
                        },
                        {
                            value: 'Added',
                            key: 'Added'
                        }
                    ]
                },
                {
                    "controlType": "object",
                    "label": "Inspections",
                    fieldId: 'inspect',
                    "required": true,
                    "children": [
                        {
                            "label": "Checked UL Label",
                            "controlType": "hcheck"
                        },
                        {
                            "label": "Checked Serial Number",
                            "controlType": "hcheck"
                        }
                    ]
                },
                {
                    "label": "Condition",
                    'fieldId': 'condition',
                    "controlType": "select",
                    "required": true,
                    "options": [
                        { "key": "New", "value": "2" },
                        { "key": "Refurbished", "value": "3" }
                    ],
                }
            ]
        };
        var form = new form_1.Form(obj);
        return form;
    };
    RepairsService.prototype.getBlankNotes = function () {
        var obj = {
            label: 'Repair Notes',
            fieldId: 'notes',
            controlType: 'form',
            children: [
                {
                    controlType: 'collapse',
                    fieldId: 'note-categories',
                    children: [
                        {
                            label: 'Boards',
                            controlType: 'collapse-child',
                            fieldId: 'boards',
                            children: [
                                {
                                    "controlType": "object",
                                    "label": "Mainboard",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck"
                                        },
                                        {
                                            "label": "Reprogrammed",
                                            "controlType": "hcheck"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Position Sensor Board",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck"
                                        },
                                        {
                                            "label": "Reprogrammed",
                                            "controlType": "hcheck"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Battery',
                            controlType: 'collapse-child',
                            fieldId: 'battery',
                            children: [
                                {
                                    "controlType": "object",
                                    "label": "Battery",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck"
                                        },
                                        {
                                            "label": "Upgraded",
                                            "controlType": "hcheck"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'LEDs',
                            controlType: 'collapse-child',
                            fieldId: 'leds',
                            children: [
                                {
                                    "controlType": "object",
                                    "label": "Front LED",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Front LED Cover",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Battery Indicator",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Status Indicator",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Indicator Covers",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Shells',
                            controlType: 'collapse-child',
                            fieldId: 'shells',
                            children: [
                                {
                                    "controlType": "object",
                                    "label": "Top Left Shell",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck",
                                            "parent": "Top Left Shell"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck",
                                            "parent": "Top Left Shell"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Top Right Shell",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck",
                                            "parent": "Top Right Shell"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck",
                                            "parent": "Top Right Shell"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Bottom Left Shell",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck",
                                            "parent": "Bottom Left Shell"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck",
                                            "parent": "Bottom Left Shell"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Bottom Right Shell",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck",
                                            "parent": "Bottom Right Shell"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck",
                                            "parent": "Bottom Right Shell"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Footpads',
                            fieldId: 'footpads',
                            controlType: 'collapse-child',
                            children: [
                                {
                                    "controlType": "object",
                                    "label": "Left Footpad",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck",
                                            "parent": "Left Footpad"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck",
                                            "parent": "Left Footpad"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Right Footpad",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck",
                                            "parent": "Right Footpad"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck",
                                            "parent": "Right Footpad"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Wheels',
                            fieldId: 'whells',
                            controlType: 'collapse-child',
                            children: [
                                {
                                    "controlType": "object",
                                    "label": "Left Wheel",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck",
                                            "parent": "Left Wheel"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck",
                                            "parent": "Left Wheel"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Right Wheel",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck",
                                            "parent": "Right Wheel"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck",
                                            "parent": "Right Wheel"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Wheel Mounts",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck",
                                            "parent": "Wheel Mounts"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck",
                                            "parent": "Wheel Mounts"
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            label: 'Misc',
                            fieldId: 'misc',
                            controlType: 'collapse-child',
                            children: [
                                {
                                    "controlType": "object",
                                    "label": "Power Button",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck",
                                            "parent": "Power Button"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck",
                                            "parent": "Power Button"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Charging Port",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck",
                                            "parent": "Charging Port"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck",
                                            "parent": "Charging Port"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Left Frame",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck",
                                            "parent": "Left Frame"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck",
                                            "parent": "Left Frame"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Right Frame",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck",
                                            "parent": "Right Frame"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck",
                                            "parent": "Right Frame"
                                        }
                                    ]
                                },
                                {
                                    "controlType": "object",
                                    "label": "Position Sensor Contacts",
                                    "children": [
                                        {
                                            "label": "Replaced",
                                            "controlType": "hcheck",
                                            "parent": "Position Sensor Contacts"
                                        },
                                        {
                                            "label": "Adjusted",
                                            "controlType": "hcheck",
                                            "parent": "Position Sensor Contacts"
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        };
        var form = new form_1.Form(obj);
        return form;
    };
    RepairsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http, auth_service_1.AuthService, util_service_1.UtilService])
    ], RepairsService);
    return RepairsService;
}());
exports.RepairsService = RepairsService;
//# sourceMappingURL=repairs.service.js.map