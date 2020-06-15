import React from 'react';
export default {
    "nodes": [
        {
            "id": "John",
            "color": "hsl(280, 70%, 50%)"
        },
        {
            "id": "Raoul",
            "color": "hsl(313, 70%, 50%)"
        },
        {
            "id": "Jane",
            "color": "hsl(151, 70%, 50%)"
        },
        {
            "id": "Marcel",
            "color": "hsl(303, 70%, 50%)"
        },
        {
            "id": "Ibrahim",
            "color": "hsl(321, 70%, 50%)"
        },
        {
            "id": "Junko",
            "color": "hsl(193, 70%, 50%)"
        }
    ],
    "links": [
        {
            "source": "Ibrahim",
            "target": "Junko",
            "value": 120
        },
        {
            "source": "Ibrahim",
            "target": "Jane",
            "value": 33
        },
        {
            "source": "Junko",
            "target": "John",
            "value": 48
        },
        {
            "source": "Junko",
            "target": "Marcel",
            "value": 102
        },
        {
            "source": "Marcel",
            "target": "Raoul",
            "value": 198
        },
        {
            "source": "Marcel",
            "target": "Jane",
            "value": 101
        },
        {
            "source": "John",
            "target": "Jane",
            "value": 150
        },
        {
            "source": "John",
            "target": "Marcel",
            "value": 197
        }
    ]
}