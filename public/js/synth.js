"use strict";

var rules = [{
    name: 'Venceu',
    validate: '$data.ponto == 3'
}];

var selection = [
    {
        when: 'isTime',
        abstract: 'time'
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
    }, {
        name: 'index',
        widgets: [
            { 'display': 'nome' },
            {
                'content': [
                    {'jogos_box' :
                        ['jogos_title',
                            {name:'jogos_lista', datasource:'$data.partidas', children:[
                                {'item_box':[
                                    {'placar':[,
                                        {name: 'adversario', when:'Visitante'},
                                        'placar_texto',
                                        {name: 'adversario', when:'Casa'}
                                    ]},
                                    'penaltis'
                                ]}
                            ]}
                        ]},
                    {'mapa_box': 'mapa'}
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
        head: GeralHead.concat([
            {name: 'title', widget:'Title', value: '"Imovel"'}
        ]),
        maps: [

            { name: 'container', tag:'div', class:'container' },
            { name: 'head', tag:'div', class:'jumbotron' },
            { name: 'title', tag:'h1', text:'center', value:'"Futebol"' },

            { name: 'content', class:'row', md:'10,offset-1' },
            { name: 'items' },
            { name: 'item', md:'6'},
            { name: 'tipo', class:'panel-body' },
            { name: 'label', tag:'p', value:'$bind' },
            { name: 'type', tag:'p', value:'$bind'  },
            { name: 'value', tag:'p', value:'$bind'  },
            { name: 'link', tag:'a', href:'navigate("/rest/resource/?s=" + $data.value)' }

        ]},{
        name: 'time',
        head:GeralHead.concat([
            {name: 'title', widget:'Title', value: '$data.nome'}
        ]),
        maps: [

            { name: 'display', widget: 'SimpleHtml', tag:'div', class:'container jumbotron' },
            { name: 'nome', tag:'h1', text:'center,info', value:'$data.nome' },

            { name: 'content', class:'container' },
            { name: 'jogos_box', md:'8' },
            { name: 'jogos_title', tag:'h3', text:'center', value:'Partidas do Brasileiros', when:"Brasileiro" },
            { name: 'jogos_title', tag:'h3', text:'center', value:'Partidas da Copa do Brasil', when:"CopaDoBrasil" },
            { name: 'jogos_title', tag:'h3', text:'center', value:'Partidas da Libertadores', when:"Libertadores" },
            { name: 'jogos_lista', class:'row' },

            { name: 'item_box', text:'center', alert:'warning', when:'Empatou' },
            { name: 'item_box', text:'center', alert:'success', when:'Venceu' },
            { name: 'item_box', text:'center', alert:'danger', when:'Perdeu' },

            { name: 'placar', tag:'h4'},
            { name: 'placar_texto', tag:'span', value:'" " + $data.gols_contra + " X " + $data.gols_favor + " " + $env.$data.nome', when:'Visitante'},
            { name: 'placar_texto', tag:'span', value:'$env.$data.nome + " " + $data.gols_favor + " X " + $data.gols_contra + " "', when:'Casa'},

            { name: 'penaltis', tag:'p', value:'$data.penaltis_contra + " X " + $data.penaltis_favor', when:'Penaltis,Visitante'},
            { name: 'penaltis', tag:'p', value:'$data.penaltis_favor + " X " + $data.penaltis_contra', when:'Penaltis,Casa'},

            { name: 'adversario', tag:'a', value:'$data.brasileiro', href:'navigate("/api/futebol/" + $data.contra_id)', when:'Brasileiro' },
            { name: 'adversario', tag:'a', value:'$data.copadobrasil', href:'navigate("/api/futebol/" + $data.contra_id)', when:'CopaDoBrasil' },
            { name: 'adversario', tag:'a', value:'$data.libertadores', href:'navigate("/api/futebol/" + $data.contra_id)', when:'Libertadores' },

            { name: 'mapa_box', md:"4"},
            { name: 'mapa', widget:'MapStatic', value:'$data.sede', class:'thumbnail' },
            { name: 'mapa', widget:"MapDynamic", address:'$data.sede', options:{ zoom:13 }, when:'$env.device.desktop == true'}


        ]}
];

var ajaxSetup = {

};

if(typeof define === 'function') {
    define([
        "jquery",
        "bootstrap",
        'mira/init'
    ], function ($, $bootstrap, Mira) {

        return function Futebol() {
            var app = new Mira.Application(interface_abstracts, concrete_interface, rules, selection);
            Mira.Widget.setDefault('BootstrapSimple')
        };

    });
} else {

    exports.ajaxSetup = ajaxSetup;
    exports.abstracts = interface_abstracts;
    exports.mapping = concrete_interface;
    exports.selection = selection;
    exports.rules = rules;
}



