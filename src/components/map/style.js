import _ from 'lodash';
import { invert } from '../../helpers';

const mapTemplateDark = {
    version: 8,
    name: 'Nexview',
    metadata: {
        'mapbox:autocomposite': true,
        'mapbox:type': 'template',
        'mapbox:trackposition': false
    },
    center: [
        -96.5634227,
        39.218219
    ],
    zoom: 4.5,
    bearing: 0,
    pitch: 0,
    sources: {
        usa_states: {
            tiles: [
                'http://localhost:3000/usa_states/{z}/{x}/{y}.pbf'
            ],
            type: 'vector'
        },
        canada_states: {
            tiles: [
                'http://localhost:3000/canada_states/{z}/{x}/{y}.pbf'
            ],
            type: 'vector'
        },
        mexico_states: {
            tiles: [
                'http://localhost:3000/mexico_states/{z}/{x}/{y}.pbf'
            ],
            type: 'vector'
        },
        usa_counties: {
            tiles: [
                'http://localhost:3000/usa_counties/{z}/{x}/{y}.pbf'
            ],
            type: 'vector'
        },
        cities: {
            tiles: [
                'http://localhost:3000/cities/{z}/{x}/{y}.pbf'
            ],
            type: 'vector'
        }
    },
    sprite: 'http://localhost:3000/sprites/sprites',
    glyphs: 'http://localhost:3000/fonts/{fontstack}/{range}.pbf',
    layers: [
        {
            id: 'background',
            type: 'background',
            paint: {
                'background-color': 'rgba(27, 27, 45, 1)'
            }
        },
        {
            id: 'usa_states',
            type: 'fill',
            metadata: {},
            source: 'usa_states',
            'source-layer': 'usa_states',
            layout: {
                visibility: 'visible'
            },
            paint: {
                'fill-color': 'rgba(12, 12, 12, 1)'
            }
        },
        {
            id: 'usa_states_border',
            type: 'line',
            metadata: {},
            source: 'usa_states',
            'source-layer': 'usa_states',
            layout: {
                visibility: 'visible'
            },
            paint: {
                'line-color': 'rgba(106, 106, 132, 0.5)'
            }
        },
        {
            id: 'canada_states',
            type: 'fill',
            metadata: {},
            source: 'canada_states',
            'source-layer': 'canada_states',
            layout: {
                visibility: 'visible'
            },
            paint: {
                'fill-color': 'rgba(12, 12, 12, 1)'
            }
        },
        {
            id: 'canada_states_border',
            type: 'line',
            metadata: {},
            source: 'canada_states',
            'source-layer': 'canada_states',
            layout: {
                visibility: 'visible'
            },
            paint: {
                'line-color': 'rgba(106, 106, 132, 0.5)'
            }
        },
        {
            id: 'mexico_states',
            type: 'fill',
            metadata: {},
            source: 'mexico_states',
            'source-layer': 'mexico_states',
            layout: {
                visibility: 'visible'
            },
            paint: {
                'fill-color': 'rgba(12, 12, 12, 1)'
            }
        },
        {
            id: 'mexico_states_border',
            type: 'line',
            metadata: {},
            source: 'mexico_states',
            'source-layer': 'mexico_states',
            layout: {
                visibility: 'visible'
            },
            paint: {
                'line-color': 'rgba(106, 106, 132, 0.5)'
            }
        },
        {
            id: 'county_borders',
            type: 'line',
            metadata: {},
            source: 'usa_counties',
            'source-layer': 'usa_counties',
            layout: {
                visibility: 'visible'
            },
            paint: {
                'line-color': 'rgba(106, 106, 132, 0.35)',
                'line-opacity': {
                    stops: [
                        [
                            5.5,
                            0
                        ],
                        [
                            6,
                            1
                        ]
                    ]
                }
            }
        },
        {
            id: 'cities_micro',
            type: 'symbol',
            source: 'cities',
            'source-layer': 'cities',
            filter: [
                'all',
                [
                    'in',
                    'feature',
                    'Populated Place'
                ]
            ],
            layout: {
                visibility: 'visible',
                'icon-image': 'circle-11-light',
                'text-size': 10,
                'text-offset': [
                    0,
                    -0.2
                ],
                'icon-size': 0.4,
                'text-font': [
                    'OpenSans-Regular'
                ],
                'text-anchor': 'bottom',
                'text-field': '{name}'
            },
            paint: {
                'text-color': 'rgba(255, 255, 255, 1.0)',
                'text-halo-color': 'rgba(0, 0, 0, 0.7)',
                'text-halo-blur': 1,
                'text-halo-width': 1,
                'text-opacity': {
                    stops: [
                        [
                            9,
                            0
                        ],
                        [
                            10.5,
                            1
                        ]
                    ]
                },
                'icon-opacity': {
                    stops: [
                        [
                            9,
                            0
                        ],
                        [
                            10.5,
                            1
                        ]
                    ]
                }
            }
        },
        {
            id: 'cities_tiny',
            type: 'symbol',
            source: 'cities',
            'source-layer': 'cities',
            filter: [
                'all',
                [
                    '<',
                    'pop_2010',
                    1000
                ],
                [
                    'in',
                    'feature',
                    'Civil'
                ]
            ],
            layout: {
                visibility: 'visible',
                'icon-image': 'circle-11-light',
                'text-size': 13,
                'text-offset': [
                    0,
                    -0.2
                ],
                'icon-size': 0.7,
                'text-font': [
                    'OpenSans-Regular'
                ],
                'text-anchor': 'bottom',
                'text-field': '{name}'
            },
            paint: {
                'text-color': 'rgba(255, 255, 255, 1.0)',
                'text-halo-color': 'rgba(0, 0, 0, 0.7)',
                'text-halo-blur': 1,
                'text-halo-width': 1,
                'text-opacity': {
                    stops: [
                        [
                            9,
                            0
                        ],
                        [
                            9.5,
                            1
                        ]
                    ]
                },
                'icon-opacity': {
                    stops: [
                        [
                            9,
                            0
                        ],
                        [
                            9.5,
                            1
                        ]
                    ]
                }
            }
        },
        {
            id: 'cities_small',
            type: 'symbol',
            source: 'cities',
            'source-layer': 'cities',
            filter: [
                'all',
                [
                    '>=',
                    'pop_2010',
                    1000
                ],
                [
                    '<',
                    'pop_2010',
                    10000
                ],
                [
                    'in',
                    'feature',
                    'Civil'
                ]
            ],
            layout: {
                visibility: 'visible',
                'icon-image': 'circle-11-light',
                'text-size': 14,
                'text-offset': [
                    0,
                    -0.2
                ],
                'icon-size': 0.7,
                'text-font': [
                    'OpenSans-Regular'
                ],
                'text-anchor': 'bottom',
                'text-field': '{name}'
            },
            paint: {
                'text-color': 'rgba(255, 255, 255, 1.0)',
                'text-halo-color': 'rgba(0, 0, 0, 0.7)',
                'text-halo-blur': 1,
                'text-halo-width': 1,
                'text-opacity': {
                    stops: [
                        [
                            8,
                            0
                        ],
                        [
                            8.5,
                            1
                        ]
                    ]
                },
                'icon-opacity': {
                    stops: [
                        [
                            8,
                            0
                        ],
                        [
                            8.5,
                            1
                        ]
                    ]
                }
            }
        },
        {
            id: 'cities_medium',
            type: 'symbol',
            source: 'cities',
            'source-layer': 'cities',
            filter: [
                'all',
                [
                    '>=',
                    'pop_2010',
                    10000
                ],
                [
                    '<',
                    'pop_2010',
                    100000
                ],
                [
                    'in',
                    'feature',
                    'Civil'
                ]
            ],
            layout: {
                visibility: 'visible',
                'icon-image': 'circle-11-light',
                'text-size': 15,
                'text-offset': [
                    0,
                    -0.2
                ],
                'icon-size': 0.7,
                'text-font': [
                    'OpenSans-Regular'
                ],
                'text-anchor': 'bottom',
                'text-field': '{name}'
            },
            paint: {
                'text-color': 'rgba(255, 255, 255, 1.0)',
                'text-halo-color': 'rgba(0, 0, 0, 0.7)',
                'text-halo-blur': 1,
                'text-halo-width': 1,
                'text-opacity': {
                    stops: [
                        [
                            6,
                            0
                        ],
                        [
                            6.5,
                            1
                        ]
                    ]
                },
                'icon-opacity': {
                    stops: [
                        [
                            6,
                            0
                        ],
                        [
                            6.5,
                            1
                        ]
                    ]
                }
            }
        },
        {
            id: 'cities_large',
            type: 'symbol',
            source: 'cities',
            'source-layer': 'cities',
            filter: [
                'all',
                [
                    '>=',
                    'pop_2010',
                    100000
                ],
                [
                    'in',
                    'feature',
                    'Civil'
                ]
            ],
            layout: {
                visibility: 'visible',
                'icon-image': 'circle-11-light',
                'text-size': 16,
                'text-offset': [
                    0,
                    -0.2
                ],
                'icon-size': 0.7,
                'text-font': [
                    'OpenSans-Regular'
                ],
                'text-anchor': 'bottom',
                'text-field': '{name}'
            },
            paint: {
                'text-color': 'rgba(255, 255, 255, 1.0)',
                'text-halo-color': 'rgba(0, 0, 0, 0.7)',
                'text-halo-blur': 1,
                'text-halo-width': 1,
                'text-opacity': 1,
                'icon-opacity': 1
            }
        }
    ],
    created: '2017-10-14T20:34:11.071Z',
    id: 'cj8rs5j7zbrrb2rpher0injqp',
    modified: '2017-10-14T21:41:27.642Z',
    owner: 'neises',
    visibility: 'private',
    draft: false
};

const mapTemplateLight = _.cloneDeep(mapTemplateDark);
mapTemplateLight.layers.forEach(layer => {
    if (_.get(layer, `paint['background-color']`)) {
        layer.paint['background-color'] = invert(layer.paint['background-color']);
    }
    if (_.get(layer, `paint['line-color']`)) {
        layer.paint['line-color'] = invert(layer.paint['line-color']);
    }
    if (_.get(layer, `paint['fill-color']`)) {
        layer.paint['fill-color'] = invert(layer.paint['fill-color']);
    }
    if (_.get(layer, `paint['text-color']`)) {
        layer.paint['text-color'] = invert(layer.paint['text-color']);
    }
    if (_.get(layer, `paint['text-halo-color']`)) {
        layer.paint['text-halo-color'] = invert(layer.paint['text-halo-color']);
    }
    if (_.get(layer, `layout['icon-image']`)) {
        if (layer.layout['icon-image'] === 'circle-11-light') {
            layer.layout['icon-image'] = 'circle-11-dark';
        } else if (layer.layout['icon-image'] === 'circle-11-dark') {
            layer.layout['icon-image'] = 'circle-11-light';
        }
        
    }
});

export const darkMap = mapTemplateDark;
export const lightMap = mapTemplateLight;