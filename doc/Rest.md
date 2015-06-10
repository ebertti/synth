REST
----

Endpoints

* [http://localhost:3000/rest](#index)
* [http://localhost:3000/rest/landmark](#landmark)
* [http://localhost:3000/rest/resource](#resource)
* [http://localhost:3000/rest/context](#context)
* [http://localhost:3000/rest/node](#node)

## Index ##

### params

`s`: uri of index - optional

### Example:

#### request:

http://localhost:3000/rest
http://localhost:3000/rest?s=http://base#9b6a77f0-59ba-11e0-b9e1-00264afffe1d


#### response:

    {
        "@uri": "http://base#9b6a77f0-59ba-11e0-b9e1-00264afffe1d",
        "@type": [
            "SHDM::ContextIndex::ContextIndexInstance"
        ],
        "@title": [
            "All Persons"
        ],
        "@name": [
            "AllPersonsIdx"
        ],
        "@nodes": [ /* all items of one index */ ]
        
    }

## Landmark ##

### params:

None

### Example:

#### request:

http://localhost:3000/rest/landmark

#### response:

    [
        {
            "@uri": "http://base#a6a9db10-59bf-11e0-b9e1-00264afffe1d",
            "@type": [
                "RDFS::Resource",
                "SHDM::Landmark"
            ],
            "@label": [
                "Events"
            ],
            "rdf:type": [
                {
                    "value": "rdfs:Resource",
                    "type": [
                        "RDFS::Resource",
                        "SHDM::Landmark"
                    ],
                    "uri": "rdfs:Resource"
                },
                {
                    "value": "shdm:Landmark",
                    "type": [
                        "RDFS::Resource",
                        "SHDM::Landmark"
                    ],
                    "uri": "shdm:Landmark"
                }
            ],
            "rdfs:label": [
                {
                    "value": "Events",
                    "type": [
                        "RDFS::Resource"
                    ],
                    "uri": null
                }
            ],
            "landmark_name": [
                {
                    "value": "Events",
                    "type": [
                        "RDFS::Resource"
                    ],
                    "uri": null
                }
            ],
            "landmark_position": [
                {
                    "value": "1",
                    "type": [
                        "RDFS::Resource"
                    ],
                    "uri": null
                }
            ],
            "landmark_navigation_attribute": [
                {
                    "value": "base:a6b80be0-59bf-11e0-b9e1-00264afffe1d",
                    "type": [
                        "RDFS::Resource",
                        "SHDM::Landmark"
                    ],
                    "uri": "base:a6b80be0-59bf-11e0-b9e1-00264afffe1d"
                }
            ]
        },
        /* another landmarks */
    ]

## Resource ##

### params:

`s`: Uri of resource

### Example:

#### request:

http://localhost:3000/rest/resource?s=http://data.semanticweb.org/person/ziv-bar-yossef

#### response:

    {
        "@uri": "http://data.semanticweb.org/person/ziv-bar-yossef",
        "@type": [
            "RDFS::Resource",
            "FOAF::Person",
            "SWRC::University",
            "SWRC::Organization",
            "SWRC::Product",
            "SWRC::Publication",
            "SWRC::Person",
            "SWRC::Report",
            "SWRC::Project",
            "SWRC::Employee",
            "SWRC::TechnicalReport"
        ],
        "@label": [
            "Ziv Bar-Yossef"
        ],
        /************** plus all properties of resource ******************/
         "rdf:type": [
                 {
                     "value": "foaf:Person",
                     "type": [
                         "RDFS::Resource",
                         "FOAF::Person",
                         "SWRC::University",
                         "SWRC::Organization",
                         "SWRC::Product",
                         "SWRC::Publication",
                         "SWRC::Person",
                         "SWRC::Report",
                         "SWRC::Project",
                         "SWRC::Employee",
                         "SWRC::TechnicalReport"
                     ],
                     "uri": "foaf:Person"
                 },
             ],
             "rdfs:label": [
                 {
                     "value": "Ziv Bar-Yossef",
                     "type": [
                         "SHDM::Resource"
                     ],
                     "uri": null
                 }
             ],
             "foaf:name": [
                 {
                     "value": "Ziv Bar-Yossef",
                     "type": [
                         "SHDM::Resource"
                     ],
                     "uri": null
                 }
             ],
             "swrc:affiliation": [
                 {
                     "value": "Google",
                     "type": [
                         "RDFS::Resource",
                         "FOAF::Person",
                         "SWRC::University",
                         "SWRC::Organization",
                         "SWRC::Product",
                         "SWRC::Publication",
                         "SWRC::Person",
                         "SWRC::Report",
                         "SWRC::Project",
                         "SWRC::Employee",
                         "SWRC::TechnicalReport"
                     ],
                     "uri": "http://data.semanticweb.org/organization/google-inc"
                 }
             ],
             "foaf:family_name": [
                 {
                     "value": "Bar-Yossef",
                     "type": [
                         "SHDM::Resource"
                     ],
                     "uri": null
                 }
             ],
             "foaf:firstName": [
                 {
                     "value": "Ziv",
                     "type": [
                         "SHDM::Resource"
                     ],
                     "uri": null
                 }
             ],
             "foaf:made": [
                 {
                     "value": "Context-Sensitive Query Auto-Completion",
                     "type": [
                         "RDFS::Resource",
                         "FOAF::Person",
                         "SWRC::University",
                         "SWRC::Organization",
                         "SWRC::Product",
                         "SWRC::Publication",
                         "SWRC::Person",
                         "SWRC::Report",
                         "SWRC::Project",
                         "SWRC::Employee",
                         "SWRC::TechnicalReport"
                     ],
                     "uri": "http://data.semanticweb.org/conference/www/2011/paper/context-sensitive-query-auto-completion"
                 }
             ],
             "foaf:mbox_sha1sum": [
                 {
                     "value": "d945365c5862b412e34c691995be12259511d5e8",
                     "type": [
                         "SHDM::Resource"
                     ],
                     "uri": null
                 }
             ],
             "member of": [
                 {
                     "value": "Google",
                     "type": [
                         "RDFS::Resource",
                         "FOAF::Person",
                         "SWRC::University",
                         "SWRC::Organization",
                         "SWRC::Product",
                         "SWRC::Publication",
                         "SWRC::Person",
                         "SWRC::Report",
                         "SWRC::Project",
                         "SWRC::Employee",
                         "SWRC::TechnicalReport"
                     ],
                     "uri": "http://data.semanticweb.org/organization/google-inc"
                 }
             ]
         }
    }

## Context ##

### params:

`s`: uri of context

### Example:

#### request:

http://localhost:3000/rest/context/?s=http://base%239b6a77f0-59ba-11e0-b9e1-00264afffe1d

#### response:

    {
        "@uri": "http://base#9b6a77f0-59ba-11e0-b9e1-00264afffe1d",
        "@type": [
            "SHDM::ContextIndex::ContextIndexInstance"
        ],
        "@title": [
            "All Persons"
        ],
        "@name": [
            "AllPersonsIdx"
        ],
        "@nodes": [
            {
                "value": "http://data.semanticweb.org/person/abhinav-mishra",
                "label": "Abhinav Mishra",
                "type": [
                    "RDFS::Resource",
                    "SHDM::Index",
                    "SHDM::ContextIndex"
                ]
            },
            /**** another items ****/
        ]
    }
    
## Node ##

