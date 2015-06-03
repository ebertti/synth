"use strict";

var condition = [{
    name: 'Example',
    validate: '$data.property == 3'
}];

var selection = [
    {
        when: 'isInterface',
        abstract: 'my_interface',
        concrete: 'my_interface'
    }
];

var interface_abstracts = [
    {
        name:'landing',
        widgets : [
            {
                name: 'container',
                children: [
                    { name: 'child' },
                    { name: 'link' }
                ]
            }
        ]
    }, {
        name: 'my_interface',
        widgets: [
            {
                name: 'container',
                children: [
                    { name: 'child' }
                ]
            }
        ]
    }
];

var GeralHead = [
    {name: 'main_css', widget:'Head', href:'css/bootstrap.css', tag: 'style'},
    {name: 'viewport', widget:'Meta', content:'width=device-width, initial-scale=1'}
];

var concrete_interface = [
    {
        name: 'landing',
        head: [
            {name: 'main_css', widget:'Head', href:'css/bootstrap.css', tag: 'style'},
            {name: 'viewport', widget:'Meta', content:'width=device-width, initial-scale=1'},
            {name: 'title', widget:'Title', value: '"Example"'}
        ],
        maps: [
            { name: 'container', tag:'div', class:'container' },
            { name: 'child', value:'Hello!', btn:'info', events: {click: 'hello'} },
            { name: 'link', tag:'a', href:'navigate("rest")', value:'Link' }
        ]
    },{
        name: 'my_interface',
        head:[
            {name: 'main_css', widget:'Head', href:'css/bootstrap.css', tag: 'style'},
            {name: 'viewport', widget:'Meta', content:'width=device-width, initial-scale=1'},
            {name: 'title', widget:'Title', value: '"Example"'}
        ],
        maps: [
            { name: 'container', tag:'div', class:'container' },
            { name: 'child', value:'Hello!', events: {click: 'some'} }
        ]}
];

var conf = {

    events: {
        hello: function (options) {
            options.$event.preventDefault();
            alert('hello! event');
        }
    }
};

var ajaxSetup = {

};

if(typeof define === 'function') {
    define([
        "jquery",
        "bootstrap",
        'mira/init'
    ], function ($, $bootstrap, Mira) {

        return function App() {
            var app = new Mira.Application(interface_abstracts, concrete_interface, condition, selection, conf);
            Mira.Widget.setDefault('BootstrapSimple')
        };

    });
} else {

    exports.ajaxSetup = ajaxSetup;
    exports.abstracts = interface_abstracts;
    exports.mapping = concrete_interface;
    exports.selection = selection;
    exports.rules = condition;
}



