import React from 'react';
const a = []
for (let i = 0; i < 200; i++) {
    a.push({
        id: i + 1,
        x: Math.random() * 100,
        y: Math.random() * 300
    })
}
export default a