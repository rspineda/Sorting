import { Sorter } from "./Sorter";
import { NumbersCollection } from './NumbersCollection';

//trying if it's working:
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbersCollection);
sorter.sort();
console.log(numbersCollection.data);