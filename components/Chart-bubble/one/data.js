import React from 'react';
const a = {
    "name": "nivo-test",
    "color": "hsl(353, 70%, 50%)",
    "children": []
}
for (let i = 0; i < 100; ++i) {
    a['children'].push({
        "name": `測試-${i}`,
        "color": "hsl(281, 70%, 50%)",
        "children": [
            {
                "name": "stack",
                "color": "hsl(293, 70%, 50%)",
                "children": [
                    {
                        "name": "chart",
                        "color": "hsl(26, 70%, 50%)",
                        "loc": Math.random() * 5000
                    },
                    {
                        "name": "xAxis",
                        "color": "hsl(216, 70%, 50%)",
                        "loc": Math.random() * 6000
                    },
                    {
                        "name": "yAxis",
                        "color": "hsl(165, 70%, 50%)",
                        "loc": Math.random() * 4000
                    },
                    {
                        "name": "layers",
                        "color": "hsl(135, 70%, 50%)",
                        "loc": Math.random() * 1000
                    }
                ]
            }
        ]
    })
}

export default a