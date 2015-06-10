"use strict";

var condition = [{
    name: 'isResource',
    validate: '_.contains($data["@type"], "RDFS::Resource")'
}];

var selection = [
    {
        when: 'isResource',
        abstract: 'resource'
    }
];

var interface_abstracts = [
    {
        name:'landing',
        widgets : [
            {'container':[
                {'head': 'title'},
                {'content': {name: 'items', datasource:'url:/rest', parse:'$data["@nodes"]', children:[
                    {'item':
                    {'tipo': { 'link': [
                        {name: 'label', bind: '$data.label'},
                        {name: 'type', bind: '$data.type'},
                        {name: 'value', bind: '$data.value'}
                    ]}}
                    }
                ]}
                }
            ]}
        ]
    },{
        name:'resource',
        widgets : [
            {'container':[
                {'head': 'title'},
                {'content': {name: 'items', children:[
                    {'item':
                    {'tipo': { 'link': [
                        {name: 'label', bind: '$data["@label"].join(" ")'},
                        {name: 'type', bind: '$data["@type"]'},
                        {name: 'uri', bind: '$data["@uri"]'}
                    ]}}
                    }
                ]}
                }
            ]}
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
        head: GeralHead.concat([
            {name: 'title', widget:'Title', value: '"Workin with Synth"'}
        ]),
        maps: [

            { name: 'container', tag:'div', class:'container' },
            { name: 'head', tag:'div', class:'jumbotron' },
            { name: 'title', tag:'h1', text:'center', value:'"Working With Synth"' },

            { name: 'content', class:'row', md:'10,offset-1' },
            { name: 'items' },
            { name: 'item', md:'6'},
            { name: 'tipo', class:'panel-body' },
            { name: 'label', tag:'p', value:'$bind' },
            { name: 'type', tag:'p', value:'$bind' },
            { name: 'value', tag:'p', value:'$bind' },
            { name: 'link', tag:'a', href:'navigate("/rest/resource/?s=" + $data.value)' }
        ]
    },{
        name: 'resource',
        head: GeralHead.concat([
            {name: 'title', widget:'Title', value: '"Resource | Workin with Synth"'}
        ]),
        maps: [

            { name: 'container', tag:'div', class:'container' },
            { name: 'head', tag:'div', class:'jumbotron' },
            { name: 'title', tag:'h1', text:'center', value:'"Resource | Working With Synth"' },

            { name: 'content', class:'row', md:'10,offset-1' },
            { name: 'items' },
            { name: 'item', md:'6'},
            { name: 'tipo', class:'panel-body' },
            { name: 'link' },
            { name: 'label', tag:'p', value:'$bind' },
            { name: 'type', tag:'p', value:'$bind' },
            { name: 'uri', tag:'p', value:'$bind' }
        ]
    }
];

var ajaxSetup = {

};

if(typeof define === 'function') {
    define([
        "jquery",
        "bootstrap",
        'mira/init'
    ], function ($, $bootstrap, Mira) {

        return function Synth() {
            var app = new Mira.Application(interface_abstracts, concrete_interface, condition, selection);
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



