function commandProcessor() {

    let str = '';

    return {

        append: (s) => str += s,
        removeStart: (n) => str = str.slice(n, str.length),
        removeEnd: (n) => str = str.slice(0, str.length - n),
        print: () => console.log(str)
    }

}

let firstZeroTest = commandProcessor();

firstZeroTest.append('hello');

firstZeroTest.append('again');

firstZeroTest.removeStart(3);

firstZeroTest.removeEnd(4);

firstZeroTest.print();