import React from 'react';
export default {
    "nodes": [
        {
            "id": "洋蔥",
            "color": "hsl(280, 70%, 50%)"
        },
        {
            "id": "鹽焗雞",
            "color": "hsl(313, 70%, 50%)"
        },
        {
            "id": "北京烤鴨",
            "color": "hsl(151, 70%, 50%)"
        },
        {
            "id": "湖北辣條",
            "color": "hsl(303, 70%, 50%)"
        },
        {
            "id": "剁椒魚頭",
            "color": "hsl(321, 70%, 50%)"
        },
        {
            "id": "鐵板牛肉",
            "color": "hsl(193, 70%, 50%)"
        }
    ],
    "links": [
        {
            "source": "剁椒魚頭",
            "target": "鐵板牛肉",
            "value": 200
        },
        {
            "source": "剁椒魚頭",
            "target": "北京烤鴨",
            "value": 303
        },
        {
            "source": "鐵板牛肉",
            "target": "洋蔥",
            "value": 80
        },
        {
            "source": "鐵板牛肉",
            "target": "湖北辣條",
            "value": 50
        },
        {
            "source": "湖北辣條",
            "target": "鹽焗雞",
            "value": 540
        },
        {
            "source": "湖北辣條",
            "target": "北京烤鴨",
            "value": 101
        },
        {
            "source": "洋蔥",
            "target": "北京烤鴨",
            "value": 150
        },
        {
            "source": "洋蔥",
            "target": "湖北辣條",
            "value": 197
        }
    ]
}