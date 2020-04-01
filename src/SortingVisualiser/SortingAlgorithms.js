export function bubbleSortAnims(arr) {
    let len = arr.length;
    let animations = []
    let color1 = []
    let color2 = []
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            animations.push(arr.slice());
            color1.push([j,j+1]);
            color2.push([])
            if (arr[j] > arr[j + 1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                animations.push(arr.slice());
                color1.push([])
                color2.push([j,j+1]);
            }
        }
    }
    return [animations, color1, color2];
};

export function selectionSortAnims(arr) {
    let len = arr.length;
    let animations = [];
    let color1 = [];
    let color2 = [];
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            animations.push(arr.slice())
            color1.push([j,min])
            color2.push([])
            if (arr[min] > arr[j]) {
                min = j;
                animations.push(arr.slice())
                color1.push([j,min])
                color2.push([])
            }
        }
        if (min !== i) {
            [arr[i],arr[min]] = [arr[min],arr[i]]
            animations.push(arr.slice())
            color1.push([])
            color2.push([i,min])
        }
    }
    return [animations, color1, color2];
}

export function insertionSortAnims(arr) {
    let len = arr.length;
    let animations = [];
    let color1 = [];
    let color2 = [];
    for (let i = 1; i < len; i++) {
        let key = arr[i];
        let j = i - 1;
        animations.push(arr.slice())
        color1.push([i])
        color2.push([])
        while (j >= 0 && arr[j] > key) {
            animations.push(arr.slice())
            color1.push([])
            color2.push([j,j+1])
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
        animations.push(arr.slice())
        color1.push([j+1])
        color2.push([])
    }
    return [animations, color1, color2];
};

let quickSortAnimations = []
let quickSortColor1 = []
let quickSortColor2 = []

export function quickSortAnims(arr) {
    quickSortAnimations = []
    quickSortColor1 = []
    quickSortColor2 = []
    quickSort(arr, 0, arr.length - 1)
    return [quickSortAnimations, quickSortColor1, quickSortColor2]
}

function partition(items, left, right) {
    let mid = Math.floor((right + left) / 2)
    let pivot = items[mid]
    let i = left
    let j = right
    quickSortAnimations.push(items.slice())
    quickSortColor1.push([i,j])
    quickSortColor2.push([mid])
    while (i <= j) {
        while (items[i] < pivot) {
            i++;
            quickSortAnimations.push(items.slice())
            quickSortColor1.push([i,j])
            quickSortColor2.push([mid])
        }
        while (items[j] > pivot) {
            j--;
            quickSortAnimations.push(items.slice())
            quickSortColor1.push([i,j])
            quickSortColor2.push([mid])
        }
        if (i <= j) {
            [items[i],items[j]] = [items[j],items[i]];
            quickSortAnimations.push(items.slice())
            quickSortColor1.push([])
            quickSortColor2.push([i,j,mid])
            i++;
            j--;
            quickSortAnimations.push(items.slice())
            quickSortColor1.push([i,j])
            quickSortColor2.push([mid])

        }
    }
    return i;
}

function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
        index = partition(items, left, right);
        if (left < index - 1) {
            quickSort(items, left, index - 1);
        }
        if (index < right) {
            quickSort(items, index, right);
        }
    }
    return items;
}