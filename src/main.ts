import './style.css';

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <h1>Learning TypeScript!</h1>
`;

/**
 * ? TypeScript variable declaration Syntax:
 * var -> identifier -> : -> typeAnnotation -> = value; (explicit declaration)
 * var -> identifier -> : -> typeAnnotation;
 * var -> identifier -> = value; === (implicit declaration)
 */

// ! Primitive Types [string, number, boolean]

let id: number = 5;
let company: string = 'Traversy Media';
let isPublished: boolean = true;

// * The <any> type whichs name refers can be any type
let x: any = 'Hello';
x = 23;

// Arrays
let ids: number[] = [1, 2, 3, 4, 5];

// Tuple
// ? A tupple defines the exact types inside an array

let person: [number, string, boolean] = [1, 'Brad', true];

// Tuple Array
let players: [number, string][];

players = [
  [23, 'Jordan'],
  [33, 'Pippen'],
  [91, 'Rodman'],
];

// Union
// ? Variable which can holds more than one type
let pid: string | number;
pid = 22;
pid = '22';

// Enums
// ? Allow us to define a set of name constants numeric or string

enum Direction1 {
  Up = 1,
  Down,
  Left,
  Right,
}

enum Direction2 {
  Up = 'Up',
  Down = 'Down',
  Left = 'Left',
  Right = 'Right',
}

// console.log(Direction2);

// Objects

type User = {
  id: number;
  name: string;
};

// const user: { id: number; name: string } = {
const user: User = {
  id: 1,
  name: 'John',
};

// Type Assertion
// ? explicitly telling the compiler that we're gonna treat an entity as a different type

let cid: any = 1;
// let customerId = <number>cid
let customerId = cid as number;

// * Functions
// * we can define the type of the return value

function addNum(x: number, y: number): number {
  return x + y;
}

function log(message: string | number): void {
  console.log(message);
}

// * Interfaces
// ? It's like a custom type, or a specific structure for an object or a function

interface UserInterface {
  readonly id: number; //cannot be modified
  name: string;
  age?: number; // optional
}

const user1: UserInterface = {
  id: 1,
  name: 'John',
};

// Interfaces with functions
interface MathFunc {
  (x: number, y: number): number;
}

const addInterface: MathFunc = (x: number, y: number): number => x + y;
const subInterface: MathFunc = (x: number, y: number): number => x - y;

// Classes

interface PersonInterface {
  id: number;
  name: string;
}

class Person {
  id: number;
  name: string;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }

  register() {
    return `${this.name} is now registered!`;
  }
}

const ronaldinho = new Person(1, 'Ronaldinho');
const ronaldo = new Person(2, 'Ronaldo');

console.log(ronaldinho, ronaldo);
console.log(ronaldinho.register());

// Subclasses
class Employee extends Person {
  position: string;

  constructor(id: number, name: string, position: string) {
    super(id, name);
    this.position = position;
  }
}

const emp = new Employee(3, 'Zidane', 'Manager');
console.log(emp.register());

// Generics

function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArr = getArray<number>([1, 2, 3, 4]);
let strArr = getArray<string>(['Brad, John, Will']);
