import { Sorter } from "./Sorter";
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';

//testing how it works with number[]
// const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(numbersCollection.data);

//testing how it works with strings
const charactersCollection = new CharactersCollection('Xaayb');
const sorter = new Sorter(charactersCollection);
sorter.sort();
console.log(charactersCollection.data);