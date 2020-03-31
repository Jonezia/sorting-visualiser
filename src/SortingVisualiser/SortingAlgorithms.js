export function bubbleSortAnims(arr) {
    let len = arr.length;
    let animations = []
    let colors = []
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            animations.push(arr.slice());
            colors.push([j,j+1]);
            if (arr[j] > arr[j + 1]) {
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
                animations.push(arr.slice());
                colors.push([j,j+1]);
            }
        }
    }
    return [animations, colors];
};