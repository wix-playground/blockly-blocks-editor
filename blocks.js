const blocklyXML = `<xml class="blockly-toolbox">
    <category name="Interaction">
        <block type="grab_element_by_id_with_event"></block>
        <block type="grab_element_by_id_show_hide"></block>
    </category>
    <category name="Elements">
        <block type="grab_element_by_id"></block>    
        <block type="grab_button_by_id"></block>    
        <block type="grab_image_by_id"></block>    
    </category>
    <category name="Functions">
        <block type="element_show"></block>
        <block type="element_hide"></block>
        <block type="element_expand"></block>
        <block type="element_collapse"></block>
        <block type="element_scrollto"></block>
    </category>
    <category name="Events">
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
    GRAB_ELEMENT_BY_ID_WITH_EVENT: {
        json: {
            "type": "grab_element_by_id_with_event",
            "message0": "Grab element with id: %1 %2 and on %3 %4 do: %5",
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
                    "type": "field_dropdown",
                    "name": "EVENT",
                    "options": [
                        [
                            "click",
                            "Click"
                        ],
                        [
                            "double-click",
                            "DblClick"
                        ],
                        [
                            "mouse in",
                            "MouseIn"
                        ],
                        [
                            "mouse out",
                            "MouseOut"
                        ],
                        [
                            "viewport enter",
                            "ViewportEnter"
                        ],
                        [
                            "viewport leave",
                            "ViewportLeave"
                        ]
                    ]
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "CALLBACK"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 300,
            "tooltip": "Grab an element and attach an event handler",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.Element.html"
        },
        js: function (block) {
            const id = block.getFieldValue('ID');
            const event = block.getFieldValue('EVENT');
            const callback = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
            return `$w('#${id}').on${event}(event => {${callback}});`;
        }
    },
    GRAB_ELEMENT_BY_ID_SHOW_HIDE: {
        json: {
            "type": "grab_element_by_id_show_hide",
            "message0": "Grab element with id: %1 %2 and %3 %4 with effect: %5 from: %6 %7 then do: %8",
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
                    "type": "field_dropdown",
                    "name": "ACTION",
                    "options": [
                        [
                            "show",
                            "show"
                        ],
                        [
                            "hide",
                            "hide"
                        ]
                    ]
                },
                {
                    "type": "input_dummy"
                },
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
                        ]
                    ]
                },
                {
                    "type": "field_dropdown",
                    "name": "DIRECTION",
                    "options": [
                        [
                            "right",
                            "right"
                        ],
                        [
                            "left",
                            "left"
                        ],
                        [
                            "top",
                            "top"
                        ],
                        [
                            "bottom",
                            "bottom"
                        ]
                    ]
                },
                {
                    "type": "input_dummy"
                },
                {
                    "type": "input_statement",
                    "name": "CALLBACK"
                }
            ],
            "previousStatement": null,
            "nextStatement": null,
            "colour": 300,
            "tooltip": "Grab element and show/hide it",
            "helpUrl": "https://www.wix.com/corvid/reference/$w.Element.html"
        },
        js: function (block) {
            const id = block.getFieldValue('ID');
            const action = block.getFieldValue('ACTION');
            const effect = block.getFieldValue('EFFECT');
            const direction = block.getFieldValue('DIRECTION');
            const content = Blockly.JavaScript.statementToCode(block, 'CALLBACK');
            return `$w('#${id}').${action}(${effect !== 'none' ? `"${effect}", {direction:'${direction}'}` : ''}).then(() => {${content}});`;
        }
    },
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
    GRAB_IMAGE_BY_ID: {
        init(editorAPI) {
            const input = this.appendDummyInput();
            function dynamicOptions() {
                const currentPage = editorAPI.pages.getFocusedPage();
                const allComps = editorAPI.components.get.byAncestor(currentPage);
                const options = [];

                if (allComps.length) {
                    allComps.forEach(compRef => {
                        const id = editorAPI.components.getNickname(compRef);

                        if (id.startsWith('image')) {
                            options.push([id, id]);
                        }
                    });
                }

                if (!options.length) {
                    options.push(['some id', '---']);
                }

                return options;
            }
            const dropdown = new Blockly.FieldDropdown(dynamicOptions);
            input.appendField('Grab an Image with id');
            input.appendField(dropdown, 'ID');
            this.appendDummyInput();
            this.appendValueInput('ACTION');

            this.setColour(290);
            this.setTooltip("Grab Image by id");
            this.setHelpUrl('https://www.wix.com/corvid/reference/$w.Image.html');
            this.setNextStatement(true);
            this.setPreviousStatement(true);
        },
        js: function (block) {
            const id = block.getFieldValue('ID');
            const action = Blockly.JavaScript.statementToCode(block, 'ACTION');
            return `$w('#${id}')${action}`;
        }
    },
    GRAB_BUTTON_BY_ID: {
        init(editorAPI) {
            const input = this.appendDummyInput();
            function dynamicOptions() {
                const currentPage = editorAPI.pages.getFocusedPage();
                const allComps = editorAPI.components.get.byAncestor(currentPage);
                const options = [];

                if (allComps.length) {
                    allComps.forEach(compRef => {
                        const id = editorAPI.components.getNickname(compRef);

                        if (id.startsWith('button')) {
                            options.push([id, id]);
                        }
                    });
                }

                if (!options.length) {
                    options.push(['some id', '---'])
                }

                return options;
            }
            const dropdown = new Blockly.FieldDropdown(dynamicOptions);
            input.appendField('Grab a Button with id');
            input.appendField(dropdown, 'ID');
            this.appendDummyInput();
            this.appendValueInput('ACTION');

            this.setColour(290);
            this.setTooltip("Grab Button by id");
            this.setHelpUrl('https://www.wix.com/corvid/reference/$w.Button.html');
            this.setNextStatement(true);
            this.setPreviousStatement(true);
        },
        js: function (block) {
            const id = block.getFieldValue('ID');
            const action = Blockly.JavaScript.statementToCode(block, 'ACTION');
            return `$w('#${id}')${action}`;
        }
    },
    GRAB_VECTORIMAGE_BY_ID: {
        init(editorAPI) {
            const input = this.appendDummyInput();
            function dynamicOptions() {
                const currentPage = editorAPI.pages.getFocusedPage();
                const allComps = editorAPI.components.get.byAncestor(currentPage);
                const options = [];

                if (allComps.length) {
                    allComps.forEach(compRef => {
                        const id = editorAPI.components.getNickname(compRef);

                        if (id.startsWith('button')) {
                            options.push([id, id]);
                        }
                    });
                } else {
                    options.push(['some id', '---'])
                }

                return options;
            }
            const dropdown = new Blockly.FieldDropdown(dynamicOptions);
            input.appendField('Grab a Button with id');
            input.appendField(dropdown, 'ID');
            this.appendDummyInput();
            this.appendValueInput('ACTION');

            this.setColour(290);
            this.setTooltip("Grab Button by id");
            this.setHelpUrl('https://www.wix.com/corvid/reference/$w.Button.html');
            this.setNextStatement(true);
            this.setPreviousStatement(true);
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
            return `.onClick(event => {${callback}});`;
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
            return `.onDblClick(event => {${callback}});`;
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
            return `.onMouseIn(event => {${callback}});`;
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
            return `.onMouseOut(event => {${callback}});`;
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
            return `.onViewportEnter(event => {${callback}});`;
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
            return `.onViewportLeave(event => {${callback}});`;
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
            return `.show(${effectName !== 'none' ? `"${effectName}"` : ''}).then(() => {${content}});`
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
