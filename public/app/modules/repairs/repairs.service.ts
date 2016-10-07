import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable }     from 'rxjs/Observable';
//services
import {AuthService} from '../../services/auth/auth.service';
import {UtilService} from '../../services/util/util.service';
//models
import {Index} from '../../models/field/index';
import {Form} from '../../models/field/form';
import {Collapse} from '../../models/field/collapse';
import {CollapseChild} from '../../models/field/collapse-child';
import {TextField} from '../../models/field/text-field';
import {HCheckField} from '../../models/field/hcheck-field';
import {ObjectField} from '../../models/field/object-field';
import {SelectField} from '../../models/field/select-field';
import {VCheckField} from '../../models/field/vcheck-field';
import {PairField} from '../../models/field/pair-field';
import {TextareaField} from '../../models/field/textarea-field';
import {StaticField} from '../../models/field/static-field';
import {RadioField} from '../../models/field/radio-field';
import {Rma} from '../../models/rma/rma';

@Injectable()
export class RepairsService {

    constructor (private http: Http,  private auth: AuthService, private util: UtilService) {
    }

    public getRMA(id: string): Observable<any> {
        let headers = new Headers({ 'Content-Type': 'application/json', 'token': this.auth.getToken() });
        let options = new RequestOptions({ headers: headers });
        return this.http.post('/rma', '{"id":"'+id+'"}', options)
            .map(function(res: Response){
                let body = res.json();
                return body;
            })
            .catch(this.util.handleError);
    };

     public getRMAs(): Observable<any>{
        let headers = new Headers({ 'token': this.auth.getToken() });
        let options = new RequestOptions({ headers: headers });
        return this.http.get('/rmaList', options)
            .map((res: Response) =>{
                var json = res.json();
                return json;
            })
            .catch(this.util.handleError);
    }

    public getIndex(): Index{
        let obj = {
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
        }
        return new Index(obj);
    }

    public getInfo(rma): Form{
        let obj = {
            label: 'General Info',
            fieldId: 'info',
            controlType: 'form',
            children: [
                {
                    "label": "Customer",
                    "controlType": "static",
                    "fieldId": "cust",
                    value: rma.name
                },
                {
                    "label": "SKU",
                    "controlType": "static",
                    "fieldId": "sku",
                    value: rma.sku
                },
                {
                    "label": "Item",
                    "controlType": "static",
                    "fieldId": "item"
                    value: rma.item
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
        let form = new Form(obj);
        return form;
    }

    public getReview(): Form{
        let obj = {
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
                        {"key":"New", "value": "2"},
                        {"key":"Refurbished", "value": "3"}
                    ],
                }
            ]
        };
        let form = new Form(obj);
        return form;
    }

    public getBlankNotes(): Form{
        let obj = {
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
        }

        let form = new Form(obj);
        return form;
    }

}