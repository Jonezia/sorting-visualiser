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

let array_length
let heapSortAnimations = []
let heapSortColor1 = []
let heapSortColor2 = []

export function heapSortAnims(arr) {
    heapSortAnimations = []
    heapSortColor1 = []
    heapSortColor2 = []
    heapSort(arr)
    return([heapSortAnimations, heapSortColor1, heapSortColor2])
}

function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;
    heapSortAnimations.push(input.slice())
    heapSortColor1.push([left,right,i])
    heapSortColor2.push([max])
    if (left < array_length && input[left] > input[max]) {
        max = left;
        heapSortAnimations.push(input.slice())
        heapSortColor1.push([left,right,i])
        heapSortColor2.push([max])
    }
    if (right < array_length && input[right] > input[max])     {
        max = right;
        heapSortAnimations.push(input.slice())
        heapSortColor1.push([left,right,i])
        heapSortColor2.push([max])
    }
    if (max != i) {
        [input[i],input[max]] = [input[max],input[i]]
        heapSortAnimations.push(input.slice())
        heapSortColor1.push([])
        heapSortColor2.push([max,i])
        heap_root(input, max);
    }
}

function heapSort(input) {
    array_length = input.length;
    for (var i = Math.floor(array_length / 2); i >= 0; i--) {
        heap_root(input, i);
      }
    for (i = input.length - 1; i > 0; i--) {
        heapSortAnimations.push(input.slice());
        heapSortColor1.push([i,0]);
        heapSortColor2.push([]);
        [input[0],input[i]] = [input[i],input[0]]
        heapSortAnimations.push(input.slice())
        heapSortColor1.push([])
        heapSortColor2.push([i,0])
        array_length--;
        heap_root(input, 0);
    }
}