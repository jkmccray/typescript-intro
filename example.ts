interface Person {
    name: string;
    birthday?: Date;
}

function human(name: string, birthday: Date = new Date()): Person {
    return {
        name,
        birthday
    }
}

// Write a JS function that accepts an integer and converts it into a string

function double(int: number): number[] {
    return [int];
}

const x: string = `${double(5)}`;

// LOOK UP GENERICS
