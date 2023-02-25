import { Data, fromText } from "./deps.ts";

/*
type BasicInt = Int
*/

const BasicInt = Data.BigInt;
type BasicInt = Data.Static<typeof BasicInt>;
export const basicInt_: BasicInt = 0n;
export const basicInt = Data.to<BasicInt>(basicInt_, BasicInt);

/*
type BasicByteArray = ByteArray
*/

const BasicByteArray = Data.String;
type BasicByteArray = Data.Static<typeof BasicByteArray>;
export const basicByteArray_: BasicByteArray = fromText("hello");
export const basicByteArray = Data.to<BasicByteArray>(
  basicByteArray_,
  BasicByteArray,
);

/*
/// Must be good
type BasicEnum {
  Good
  Bad
}
*/

const BasicEnum = Data.Enum([
  Data.Literal("Good"),
  Data.Literal("Bad"),
]);
type BasicEnum = Data.Static<typeof BasicEnum>;
export const basicEnum_: BasicEnum = "Good";
export const basicEnum = Data.to<BasicEnum>(basicEnum_, BasicEnum);

/*
type BasicList = List<Int>
*/

const BasicList = Data.Array(Data.BigInt);
type BasicList = Data.Static<typeof BasicList>;
export const basicList_: BasicList = [0n, 1n, 2n, 3n];
export const basicList = Data.to<BasicList>(basicList_, BasicList);

/*
type BasicTuple = (Int, ByteArray)
*/

const BasicTuple = Data.Tuple([Data.BigInt, Data.String]);
type BasicTuple = Data.Static<typeof BasicTuple>;
export const basicTuple_: BasicTuple = [0n, fromText("hello")];
export const basicTuple = Data.to<BasicTuple>(basicTuple_, BasicTuple);

/*
type BasicOption = Option<Int>
*/

const BasicOption = Data.Nullable(Data.BigInt);
type BasicOption = Data.Static<typeof BasicOption>;
export const basicOption_: BasicOption = 0n;
export const basicOption = Data.to<BasicOption>(basicOption_, BasicOption);

/*
type BasicObject {
  /// Must be zero
  int : Int,
  /// Must be "hello"
  bytes : ByteArray
}
*/

const BasicObject = Data.Object({
  int: Data.BigInt,
  bytes: Data.String,
});
type BasicObject = Data.Static<typeof BasicObject>;
export const basicObject_: BasicObject = { int: 0n, bytes: fromText("hello") };
export const basicObject = Data.to<BasicObject>(basicObject_, BasicObject);

/*
type BasicSum {
  Sum0(BasicObject)
  Sum1(BasicList)
}
*/
const BasicSum = Data.Enum([
  Data.Object({ "Sum0": Data.Tuple([BasicObject]) }),
  Data.Object({ "Sum1": Data.Tuple([BasicList]) }),
]);
type BasicSum = Data.Static<typeof BasicSum>;
export const basicSum_: BasicSum = { "Sum0": [basicObject_] };
export const basicSum = Data.to<BasicSum>(basicSum_, BasicSum);

/*
type BasicDict = Dict<Key, Int>
*/

// FIXME :: This is failing
const BasicDict = Data.Map(Data.String, Data.BigInt);
type BasicDict = Data.Static<typeof BasicDict>;
export const basicDict_: BasicDict = new Map([
  [fromText("zero"), 0n],
  [fromText("one"), 1n],
])
export const basicDict = Data.to<BasicDict>(basicDict_, BasicDict);

