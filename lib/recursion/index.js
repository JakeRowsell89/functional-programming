const root = {
    val: 1,
    children: [
        {
            val: 2,
            children: [
                {
                    val: 3
                },
                {
                    val: 6
                }
            ]
        },
        {
            val: 3
        },
        {
            val: 4
        }
    ]
}

function treeContains(tree, x) {
    if (tree.val === x) {
        return true // base case 1
    }
    if (!tree.children) {
        return false // base case 2
    }

    return tree.children.map(child => treeContains(child, x)).includes(true)
}

treeContains(root, 6) // true
treeContains(root, 5) // false

const array = [1,2,3,3,4,4,6]

function findLargest(arr, largest = 0) {
    if (!arr.length) {
        return largest // base case
    }

    return findLargest(arr.slice(1), Math.max(largest, arr[0])) // recursive case, using tail recursion
}


findLargest(array) // 6


function sumNonTCO(arr) {
    if (arr.length < 2) {
        return arr[0] || 0
    }
    const [head, ...tail] = arr
    return head + sumNonTCO(tail) // last evaluation is `+` operator
}

function sumTCO(arr, total = 0) {
    if (arr.length < 2) {
        return total + (arr[0] || 0)
    }
    const [head, ...tail] = arr
    total += head
    return sumTCO(tail, total) // last evaluation is tail recursive
}