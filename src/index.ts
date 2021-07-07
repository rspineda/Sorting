import { Sorter } from "./Sorter";
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from "./LinkedList";

//testing how it works with number[]

const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(`#### Array of numbers: ${numbersCollection.data}`)

//testing how it works with strings

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(`#### Strings: ${charactersCollection.data}`)

//testing how it works with LinkedList:
console.log(`#### LinkedList:`)
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();