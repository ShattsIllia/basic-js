# JS


## General task description
Your task is to write several functions that are the solution to the subtasks. Subtasks descriptions, as well as instructions on how to run tests and submit solutions are below.

---

### **Count cats!**

Your task is to count the cats hidden in the backyard (presented by two-dimensional `Array`). Cats hide well, but their **ears** (`"^^"`) are clearly visible. Your task is to implement the `countCats(backyard)` function that will count cats. Good luck!

Number of cats found should be `number`. If no cats found, function should return `0`.

For example:

`countCats([
    [0, 1, '^^'],
    [0, '^^', 2],
    ['^^', 1, 2]
  ]) => 3`

Write your code in `src/count-cats.js`.

---

### **Carbon dating**

To determine the age of archaeological finds, **radioisotope dating** is widely used. One of its types is **radiocarbon dating**.

The approximate age of the sample is calculated by measuring the **ratio** of the **modern** activity of the C14 isotope to the activity of the same isotope in the **sample**.

[Read about method](https://chem.libretexts.org/Bookshelves/Physical_and_Theoretical_Chemistry_Textbook_Maps/Supplemental_Modules_(Physical_and_Theoretical_Chemistry)/Nuclear_Chemistry/Nuclear_Kinetics/Half-Lives_and_Radioactive_Decay_Kinetics#section_2)

---
<details>

  <summary>About calculations</summary>
  You can use the formula from the article at the link above. 0.693 is an approximation of the natural logarithm of two.

</details>

---

Your task is to implement the function `dateSample(sampleActivity)` that calculates sample approximate age (in years). Please use given `MODERN_ACTIVITY` and `HALF_LIFE_PERIOD`.

Function parameter `sampleActivity` is a `string`. Calculated sample age must be `number`.

Age must be **integer**. Age must be **rounded up** (ceiling). In case of wrong input parameter **type** or **inadequate** activity value or **absence** of argument function must return `false`.

For example:

`dateSample('1') => 22387` (or `22392` depending on formula used)

`dateSample('WOOT!') => false`

Write your code in `src/carbon-dating.js`.

---

### **Dream team**

Imagine you and your friends decide to create a **dream team**. This team should have a cool secret name that contains encrypted information about it. For example, these may be the **first letters** of the names of its members in **upper case** **sorted alphabetically**.
Your task is to implement the `createDreamTeam(members)` function that returns name of a newly made team (`string`) based on the names of its members (`Array`). Good luck!

Names of the members should be `strings`. Values with other **type** should be **ignored**. In case of wrong `members` **type** function must return `false`.

NB! Team member name may contain **whitespaces**.

For example:

`createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max'])` => `'ADMM'`

`createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null])` => `'LOO'`

Write your code in `src/dream-team.js`.

---

### **What season?**

Your task is to implement the function `getSeason(date)` that accepts `Date` object and returns the time of the year that matches it.
Time of the year must be `string`.

---
<details>

<summary>Seasons in English</summary>
The names of the seasons in English are: spring, summer, autumn (fall), winter.

</details>

---

If the `date` argument was not passed, the function must return the `string` `'Unable to determine the time of year!'`. If the `date` argument is **invalid**, the function must throw an `Error`.

Shh! An enemy scout has lurked among the arguments that come into this function.

![Disguised](https://www.famousbirthdays.com/faces/disguised-toast-image.jpg)

He is guided by the famous proverb: “If it looks like a **duck**, swims like a **duck** and quacks like a **duck**, then it probably is a **duck** (who cares what it **really** is)”. He is **expertly disguised** as a real date, but a clever javascript developer can catch him and `throw` an `Error` just in time!

For example:

`const springDate = new Date(2020, 02, 31)`

`getSeason(springDate) => 'spring'`

Write your code in `src/what-season.js`.

---

### **Tower of Hanoi**

![Tower of hanoi visualisation](https://ioecapsule.com/wp-content/uploads/2019/08/tower_of_hanoi_3_disks.gif)

[Tower of Hanoi](https://www.britannica.com/topic/Tower-of-Hanoi) is famous mathematical puzzle of the 18th century.
It consists of three rods and a number of disks of different sizes, which can slide onto any rod. The puzzle starts with the disks in a neat stack in ascending order of size on one rod, the smallest at the top, thus making a conical shape.

The objective of the puzzle is to move the entire stack to another rod, obeying the following simple **rules**:
* Only **one** disk can be moved at a time.
* Each move consists of taking the **upper** disk from one of the stacks and placing it on **top** of another stack or on an empty rod.
* No **larger** disk may be placed on top of a **smaller** disk.

Your task is much easier than coming up with an algorithm that solves this puzzle :)

Implement the function `calculateHanoi` that accepts `diskNumber` and `turnsSpeed` parameters. `diskNumber` is a number of **disks** and `turnsSpeed` is the speed of moving discs (in **turns** per **hour**).
Both parameters are `numbers`.

`calculateHanoi` function returns an object with 2 properties:
* `turns` (minimum `number` of turns to solve the puzzle)
* `seconds` (minimum `number` of **seconds** to solve the puzzle at a given `turnsSpeed`, seconds must be an integer, obtained  from **rounded down** (floor) calculation result)

You don't need to validate parameters.

For example:

`calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }`

Write your code in `src/hanoi-tower.js`.

---

### **Transform array**

Your task is to implement the function `transform(arr)` that takes an `array` and returns **transformed** array, based on the **control sequences** that `arr` contains.
**Control sequences** are defined `string` elements of the mentioned `array`:
* `--discard-next` excludes the next element of the array from the transformed array.
* `--discard-prev` excludes the previous element of the array from the transformed array.
* `--double-next` doubles the next element of the array in the transformed array.
* `--double-prev` doubles the previous element of the array in the transformed array.

For example:

`transform([1, 2, 3, '--double-next', 4, 5])` => `[1, 2, 3, 4, 4, 5]`

`transform([1, 2, 3, '--discard-prev', 4, 5])` => `[1, 2, 4, 5]`

The function must not affect inital array. Control sequences are applied **from left to right**. Control sequences **do not fall** into the transformed array. Control sequences in initial array don't occur in a row. If there is **no element** next to the control sequence **to which it can be applied**, **it does nothing**. The function should throw an `Error` if the `arr` is not an `Array`.

Write your code in `src/transform-array.js`.
