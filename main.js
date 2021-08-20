
const startArray = [...Array(10).keys()]
const currentArray = shuffle(startArray)
const currentArrayDiv = document.getElementById('currentArray')

function main() {
    render()
}

function shuffle(arr) {
    // Fisher Yates Shuffle
    let count = arr.length, idx, currentElem

    while(count) {
        idx = Math.floor(Math.random() * count--)
        currentElem = arr[count]
        arr[count] = arr[idx]
        arr[idx] = currentElem
    }

    return arr
}

function render() {
    let arrString
    currentArray.forEach((num, idx) => {
        if(!idx) {
            arrString = '[ ' + num + ', '
        } else if(idx === currentArray.length - 1) {
            arrString += num + ' ]'
        } else {
            arrString += num + ', '
        }
    })

    currentArrayDiv.innerText = "The current array is " + arrString
}


main()