const data = {
    "name": 1,
    "items": [
        {
            "name": 2,
            "items": [
                { "name": 3 },
                {
                    "name": 4,
                    "items": [
                        {"name": 7,
                            "items": [
                                {
                                    "name": 8,
                                    "items": [{"name": 19,}]
                                },
                                {"name": 9}
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "name": 5,
            "items": [
                { "name": 6 }
            ]
        }
    ]
}
const depthIndexes = []

function setMarker(depth) {
    const treeMarkers = [
        '├--',
        '└--',
    ]

    if (depth === 2) {
        return treeMarkers[0]
    }

    if (depth > 2) {
        return '|' + ' '.repeat(depth-1) + treeMarkers[1]
    }

    return ''
}

function traverseTree(tree, index = 1) {
    let result = [tree.name]
    depthIndexes.push(index)

    if (Array.isArray(tree.items)) {
        tree.items.forEach((item, i) => {
            result = result.concat(traverseTree(item, index + 1))
        })
    }

    return result
}

function drawTree(treeData) {
    const tree = traverseTree(treeData)
    let result = ''

    tree.forEach((item, index) => {
        result += setMarker(depthIndexes[index]) + item + '\n'
    })

    return result
}

console.log(drawTree(data))
