use aiken/dict.{
  Dict,
  get
}
use aiken/transaction.{
  ScriptContext,
}

type BasicInt = Int

validator basic_int {
  fn (red: BasicInt, _ :ScriptContext ) {
    red == 0
  }
}

type BasicByteArray = ByteArray

validator basic_byte_array {
  fn (red: BasicByteArray, _ :ScriptContext ) {
    red == "hello"
  }
}

/// Must be good
type BasicEnum {
  Good 
  Bad
}

validator basic_enum {
  fn (red: BasicEnum, _ :ScriptContext ) {
    when red is {
      Good -> True
      Bad -> False
    }
  }
}

/// Compounds 

type BasicList = List<Int> 

validator basic_list {
  fn (red: BasicList, _ :ScriptContext ) {
    when red is {
      [x0, x1, ..] if x0 == 0 && x1 == 1 -> True
      _ -> False
    }
  }
}

type BasicTuple = (Int, ByteArray)

validator basic_tuple {
  fn (red: BasicTuple, _ :ScriptContext ) {
    let (num, ba) = red 
    num == 0 && ba == "hello"
  }
}

type BasicOption = Option<Int>

validator basic_option {
  fn (red: BasicOption , _ :ScriptContext ) {
    expect Some(val) = red
    val == 0
  }
}

type BasicObject { 
  /// Must be zero
  int : Int,
  /// Must be "hello"
  bytes : ByteArray
}

validator basic_object {
  fn (red: BasicObject, _ :ScriptContext ) {
    red.int == 0 && red.bytes == "hello"
  }
}

type BasicSum {
  Sum0(BasicObject)
  Sum1(BasicList)
}

validator basic_sum{
  fn (red: BasicSum, _ :ScriptContext ) {
    when red is {
      Sum0(val) -> val.int == 0 && val.bytes == "hello"
      Sum1(val) -> {
        when val is {
          [x0, x1, ..] if x0 == 0 && x1 == 1 -> True
          _ -> False
        }
      }
    }
  }
}

/// Standard lib

type Key = ByteArray

type BasicDict = Dict<Key, Int>

validator basic_dict {
  fn (red: BasicDict , _ :ScriptContext ) {
    expect Some(val) = red |> get(key : "zero")
    val == 0
  }
}

