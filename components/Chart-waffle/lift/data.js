import React from 'react';
const a = []
const c = ["#468df3", "#ba72ff", "#a1cfff"]
const id = ["花甲", "鱸魚", "螃蟹"]

for (let i = 0; i < 3; ++i) {
    a.push(
        {
            "id": id[i],
            "label": id[i],
            "value": Math.random() * 50,
            "color": c[i]
        }
    )
}
export default a