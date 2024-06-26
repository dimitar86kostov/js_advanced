class Stringer {
    constructor(innerString, innerLength) {
        this.innerString = innerString;
        this.innerLength = innerLength;
    }

    increase(length) {
        this.innerLength += length;
    }

    decrease(length) {
        this.innerLength = Math.max(0, this.innerLength - length);
    }

    toString() {
        if (this.innerLength === 0) {
            return '...';
        } else if (this.innerString.length > this.innerLength) {
            return this.innerString.slice(0, this.innerLength) + '...';
        } else {
            return this.innerString;
        }
    }
}