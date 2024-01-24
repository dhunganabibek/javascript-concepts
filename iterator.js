// Iterator is Object having next method  when called gives {value: T, done: boolean}


function range(start = 0, end= Infinity, step = 1){
    let value = start;
    return {
        next() {
            if (value > end) return {value: undefined, done: true};
            const result = {value, done: false}
            value += step;
            return result;
        }
    }
}

const it = range(1, 10, 2);

console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());