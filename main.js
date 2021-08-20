
// State
const startArray = [...Array(15).keys()]
let currentArray = shuffle(startArray)
let bubbleSortArray, bubbleSortSwaps

// DOM Elements
const currentArrayEl = document.getElementById('currentArray')
const bubbleSortEl = document.getElementById('bubbleSort')
const bubbleSortBtn = document.getElementById('bubbleSortBtn')
const randomizeBtn = document.getElementById('randomizeArray')

function main() {
    render()

    bubbleSortBtn.addEventListener('click', () => {
        [ bubbleSortArray, bubbleSortSwaps ] = bubbleSort(currentArray)
        render()
    })

    randomizeBtn.addEventListener('click', () => {
        currentArray = shuffle(currentArray)
        bubbleSortArray = bubbleSortSwaps = null
        render()
    })
}

function render() {
    currentArrayEl.innerText = "The current array is " + arrToString(currentArray)

    bubbleSortEl.children[2].innerText = ''
    bubbleSortEl.children[3].innerText = ''
    if(bubbleSortArray) {
        bubbleSortEl.children[2].innerText = 'The sorted array is ' + arrToString(bubbleSortArray)
        bubbleSortEl.children[3].innerText = 'The number of times swapped was ' + bubbleSortSwaps        
    }
}

// Algos

function bubbleSort(array) {
    const arr = [...array]
    let numSwaps = 0
    const length = arr.length

    for(let i = 0; i < length - 1; i++) {
        for(let j = 0; j < length - 1 - i; j++) {
            if(arr[j] > arr[j + 1]) {
                numSwaps++
                swap(arr, j, j+1)
            }
        }
    }

    return [arr, numSwaps]
}

// Helper functions

function swap(arr, currIdx, swapIdx) {
    const temp = arr[currIdx]
    arr[currIdx] = arr[swapIdx]
    arr[swapIdx] = temp
}

function shuffle(arr) {
    // Fisher Yates
    let count = arr.length, idx, currentElem

    while(count) {
        idx = Math.floor(Math.random() * count--)
        currentElem = arr[count]
        arr[count] = arr[idx]
        arr[idx] = currentElem
    }

    return arr
}

function arrToString(arr) {
    let arrString
    
    arr.forEach((num, idx) => {
        if(!idx) {
            arrString = '[ ' + num + ', '
        } else if(idx === currentArray.length - 1) {
            arrString += num + ' ]'
        } else {
            arrString += num + ', '
        }
    })

    return arrString
}


main()