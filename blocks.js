const blocklyXML = `<xml class="blockly-toolbox">
    <category name="Elements">
        <block type="grab_element_by_id"></block>    
    </category>
    <category name="Actions">
        <block type="element_show"></block>
    </category>
    <category name="Interactions">
        <block type="onready"></block>
        <block type="element_onclick"></block>
        <block type="element_ondblclick"></block>
        <block type="element_onmousein"></block>
        <block type="element_onmouseout"></block>
        <block type="element_onviewportenter"></block>
        <block type="element_onviewportleave"></block>
    </category>
    <category name="Animations"></category>
    <category name="Data"></category>
</xml>`;

const blockDefinitions = {
    GRAB_ELEMENT_BY_ID: {
        json: {
            "type": "grab_element_by_id",
            "message0": "Grab element by id %1 %2 %3",
            "args0": [
                {
                    "type": "field_input",
                    "name": "ID",
                    "text": "..."
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_value",
                    "name": "ACTION",
                    "align": "RIGHT"
                }
            ],
            "inputsInline": false,
            "previousStatement": null,
            "nextStatement": null,
            "colour": 290,
            "tooltip": "Grab element by id",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.html#$w"
        },
        js: function (block) {
            const id = block.getFieldValue('ID');
            const action = Blockly.JavaScript.statementToCode(block, 'ACTION');
            return `$w('#${id}')${action}`;
        }
    },
    ELEMENT_ONCLICK: {
        json: {
            "type": "element_onclick",
            "message0": "onClick %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "CALLBACK"
                }
            ],
            "inputsInline": true,
            "output": null,
            "colour": 230,
            "tooltip": "Click handler for the element",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.Button.html#onClick"
        },
        js: function (block) {
            const callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
            return `.onClick(event => {${callback}})`;
        }
    },
    ELEMENT_ONDBLCLICK: {
        json: {
            "type": "element_ondblclick",
            "message0": "onDblClick %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "CALLBACK"
                }
            ],
            "inputsInline": true,
            "output": null,
            "colour": 230,
            "tooltip": "Double-click handler for the element",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.Button.html#onDblClick"
        },
        js: function (block) {
            const callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
            return `.onDblClick(event => {${callback}})`;
        }
    },
    ELEMENT_ONMOUSEIN: {
        json: {
            "type": "element_onmousein",
            "message0": "onMouseIn %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "CALLBACK"
                }
            ],
            "inputsInline": true,
            "output": null,
            "colour": 230,
            "tooltip": "MouseIn handler for the element",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.Element.html#onMouseIn"
        },
        js: function (block) {
            const callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
            return `.onMouseIn(event => {${callback}})`;
        }
    },
    ELEMENT_ONMOUSEOUT: {
        json: {
            "type": "element_onmouseout",
            "message0": "onMouseOut %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "CALLBACK"
                }
            ],
            "inputsInline": true,
            "output": null,
            "colour": 230,
            "tooltip": "MouseOut handler for the element",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.Element.html#onMouseOut"
        },
        js: function (block) {
            const callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
            return `.onMouseOut(event => {${callback}})`;
        }
    },
    ELEMENT_ONVIEWPORTENTER: {
        json: {
            "type": "element_onviewportenter",
            "message0": "onViewportEnter %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "CALLBACK"
                }
            ],
            "inputsInline": true,
            "output": null,
            "colour": 230,
            "tooltip": "Trigger action once element enters the viewport",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.Element.html#onViewportEnter"
        },
        js: function (block) {
            const callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
            return `.onViewportEnter(event => {${callback}})`;
        }
    },
    ELEMENT_ONVIEWPORTLEAVE: {
        json: {
            "type": "element_onviewportleave",
            "message0": "onViewportLeave %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "CALLBACK"
                }
            ],
            "inputsInline": true,
            "output": null,
            "colour": 230,
            "tooltip": "Trigger action once element leaves the viewport",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.Element.html#onViewportLeave"
        },
        js: function (block) {
            const callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
            return `.onViewportLeave(event => {${callback}})`;
        }
    },
    ONREADY: {
        json: {
            "type": "onready",
            "message0": "When page is ready: %1 %2",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "ACTION"
                }
            ],
            "colour": 230,
            "tooltip": "Wait until the page is ready",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.html#onReady"
        },
        js: function (block) {
            const content = Blockly.JavaScript.statementToCode(block, 'ACTION');
            return `$w.onReady(() => {${content}})`;
        }
    },
    ELEMENT_SHOW: {
        json: {
            "type": "element_show",
            "message0": "Show %1 %2 and then... %3 %4",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "EFFECT",
                    "options": [
                        [
                            "no effect",
                            "none"
                        ],
                        [
                            "arc",
                            "arc"
                        ],
                        [
                            "bounce",
                            "bounce"
                        ],
                        [
                            "fade",
                            "fade"
                        ],
                        [
                            "flip",
                            "flip"
                        ],
                        [
                            "float",
                            "float"
                        ],
                        [
                            "fly",
                            "fly"
                        ],
                        [
                            "fold",
                            "fold"
                        ],
                        [
                            "glide",
                            "glide"
                        ],
                        [
                            "puff",
                            "puff"
                        ],
                        [
                            "roll",
                            "roll"
                        ],
                        [
                            "slide",
                            "slide"
                        ],
                        [
                            "spin",
                            "spin"
                        ],
                        [
                            "turn",
                            "turn"
                        ],
                        [
                            "zoom",
                            "zoom"
                        ]
                    ]
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "THEN"
                }
            ],
            "output": null,
            "colour": 30,
            "tooltip": "Show the element",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.Box.html#show"
        },
        js: function (block) {
            const effectName = block.getFieldValue('EFFECT');
            const content = Blockly.JavaScript.statementToCode(block, 'THEN');
            return `.show(${effectName !== 'none' ? `"${effectName}"` : ''})${content ? `.then(() => {${content}});` : ';'}`;
        }
    },
    ELEMENT_HIDE: {
        json: {
            "type": "element_hide",
            "message0": "Hide %1 %2 and then... %3 %4",
            "args0": [
                {
                    "type": "field_dropdown",
                    "name": "EFFECT",
                    "options": [
                        [
                            "no effect",
                            "none"
                        ],
                        [
                            "arc",
                            "arc"
                        ],
                        [
                            "bounce",
                            "bounce"
                        ],
                        [
                            "fade",
                            "fade"
                        ],
                        [
                            "flip",
                            "flip"
                        ],
                        [
                            "float",
                            "float"
                        ],
                        [
                            "fly",
                            "fly"
                        ],
                        [
                            "fold",
                            "fold"
                        ],
                        [
                            "glide",
                            "glide"
                        ],
                        [
                            "puff",
                            "puff"
                        ],
                        [
                            "roll",
                            "roll"
                        ],
                        [
                            "slide",
                            "slide"
                        ],
                        [
                            "spin",
                            "spin"
                        ],
                        [
                            "turn",
                            "turn"
                        ],
                        [
                            "zoom",
                            "zoom"
                        ]
                    ]
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "THEN"
                }
            ],
            "output": null,
            "colour": 30,
            "tooltip": "Hide the element",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.Box.html#hide"
        },
        js: function (block) {
            const effectName = block.getFieldValue('EFFECT');
            const content = Blockly.JavaScript.statementToCode(block, 'THEN');
            return `.hide(${effectName !== 'none' ? `"${effectName}"` : ''})${content ? `.then(() => {${content}});` : ';'}`;
        }
    },
    ELEMENT_COLLAPSE: {
        json: {
            "type": "element_collapse",
            "message0": "Collapse %1 And then... %2 %3",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "THEN"
                }
            ],
            "output": null,
            "colour": 30,
            "tooltip": "Collapse an element",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.CollapsedMixin.html#collapse"
        },
        js: function (block) {
            const content = Blockly.JavaScript.statementToCode(block, 'THEN');
            return `.collapse()${content ? `.then(() => {${content}});` : ';'}`;
        }
    },
    ELEMENT_EXPAND: {
        json: {
            "type": "element_expand",
            "message0": "Expand %1 And then... %2 %3",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "THEN"
                }
            ],
            "output": null,
            "colour": 30,
            "tooltip": "Expand an element",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.CollapsedMixin.html#expand"
        },
        js: function (block) {
            const content = Blockly.JavaScript.statementToCode(block, 'THEN');
            return `.expand()${content ? `.then(() => {${content}});` : ';'}`;
        }
    },
    ELEMENT_SCROLLTO: {
        json: {
            "type": "element_scrollto",
            "message0": "Scroll to element %1 And then... %2 %3",
            "args0": [
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "THEN"
                }
            ],
            "output": null,
            "colour": 30,
            "tooltip": "Scroll to an element",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.Element.html#scrollTo"
        },
        js: function (block) {
            const content = Blockly.JavaScript.statementToCode(block, 'THEN');
            return `.scrollTo()${content ? `.then(() => {${content}});` : ';'}`;
        }
    }
};

Object.keys(blockDefinitions)
    .forEach(key => {
        Blockly.Blocks[key.toLowerCase()] = {
            init () {
                this.jsonInit(blockDefinitions[key].json);
            }
        };

        Blockly.JavaScript[key.toLowerCase()] = blockDefinitions[key].js;
    });

window.blocklyXML = blocklyXML;
