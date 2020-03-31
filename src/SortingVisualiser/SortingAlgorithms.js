export function bubbleSortAnims(arr) {
    let len = arr.length;
    let animations = []
    let color1 = []
    let color2 = []
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
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