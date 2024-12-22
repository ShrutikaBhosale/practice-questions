const sumOf = function (numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0);
};
//------------------------------------------------------------------------------
const productOf = function (numbers) {
  return numbers.reduce(function (sum, number) {
    return sum * number;
  }, 1);
};
//------------------------------------------------------------------------------
const averageOf = function (numbers) {
  return numbers.reduce(function (sum, number) {
    return sum + number;
  }, 0) / numbers.length;
};
//------------------------------------------------------------------------------
const minOf = function (numbers) {
  return numbers.reduce(function (min, number) {
    return number < min ? number : min;
  }, Infinity);
};
//------------------------------------------------------------------------------
const maxOf = function (numbers) {
  return numbers.reduce(function (max, number) {
    return number > max ? number : max;
  }, -Infinity);
};
//------------------------------------------------------------------------------
const getAllPositives = function (numbers) {
  return numbers.filter(function (number) {
    return number > 0;
  });
};

const sumPositiveNumbers = function (numbers) {
  const allPositives = getAllPositives(numbers);
  return allPositives.reduce(function (sum, number) {
    return sum + number;
  }, 0);
};
//------------------------------------------------------------------------------
const getSquares = function (numbers) {
  return numbers.map(function (number) {
    return number * number;
  });
};

const sumOfSquares = function (numbers) {
  const squares = getSquares(numbers);
  return squares.reduce(function (sum, number) {
    return sum + number;
  }, 0);
};
//------------------------------------------------------------------------------
const getOdds = function (numbers) {
  return numbers.filter(function (number) {
    return (number & 1) === 1;
  });
};

const sumOfOddNumbers = function (numbers) {
  const odds = getOdds(numbers);

  return odds.reduce(function (sum, number) {
    return sum + number;
  }, 0);
};
//------------------------------------------------------------------------------
const countNegativeNumbers = function (numbers) {
  return numbers.reduce(function (count, number) {
    return number < 0 ? count += 1 : count;
  }, 0);
};
//------------------------------------------------------------------------------
const getEvens = function (numbers) {
  return numbers.filter(function (number) {
    return (number & 1) === 0;
  });
};

const findSumOfEvenSquares = function (numbers) {
  const evens = getEvens(numbers);
  const squares = getSquares(evens);

  return squares.reduce(function (sum, number) {
    return sum + number;
  }, 0);
};
//------------------------------------------------------------------------------
const concatenateWords = function (words) {
  return words.reduce(function (concatenatedStr, word) {
    return concatenatedStr.concat(word);
  }, '');
};
//------------------------------------------------------------------------------
const longestWord = function (words) {
  return words.reduce(function (accumulator, word) {
    return word.length > accumulator.length ? word : accumulator;
  }, '');
};
//------------------------------------------------------------------------------
const shortestWord = function (words) {
  return words.reduce(function (accumulator, word) {
    return word.length < accumulator.length ? word : accumulator;
  }, ' '.repeat(1000));
};
//------------------------------------------------------------------------------
const joinWithComma = function (words) {
  return words.join(',');
};
//------------------------------------------------------------------------------
const reverseWords = function (words) {
  return words.reduce(function (reversedWord, word) {
    return word + ' ' + reversedWord;
  }, '');
};
//------------------------------------------------------------------------------
const joinWordsWithSpace = function (words) {
  return words.join(' ');
};
//------------------------------------------------------------------------------
const concatenateNames = function (names) {
  return names.reduce(function (concatenatedStr, name) {
    return concatenatedStr + name;
  }, '');
};
//------------------------------------------------------------------------------
function concatenatedVowels(word) {
  return [...word].reduce(function (vowelInStr, char) {
    const vowels = 'aeiouAEIOU';
    return vowels.includes(char) ? vowelInStr + char : vowelInStr;
  }, '');
}

const countVowelsInWords = function (words) {
  return words.reduce(function (vowelStr, word) {
    return vowelStr + concatenatedVowels(word);
  }, '');
};
//------------------------------------------------------------------------------
const makeCamelCase = function (words) {
  return words.reduce(function (CamelCaseStr, word) {
    return CamelCaseStr + word[0].toUpperCase() + word.slice(1);
  }, '');
};
//------------------------------------------------------------------------------
const reverseString = function (words) {
  return words.reduce(function (reversedStr, word) {
    return reversedStr + [...word].reverse().join('');
  }, '');
};
//------------------------------------------------------------------------------
const duplicateNumbers = function (numbers) {
  return numbers.map(function (number) {
    return [number, number];
  }).flat();
};
//------------------------------------------------------------------------------
const concatenateArrays = function (arrays) {
  return arrays.flat();
};
//------------------------------------------------------------------------------
const flattenArray = function (arrays) {
  return arrays.flat();
};
//------------------------------------------------------------------------------
const uniqueElements = function (numbers) {
  return numbers.reduce(function (uniqueNums, number) {
    if (!uniqueNums.includes(number)) {
      uniqueNums.push(number);
    }
    return uniqueNums;
  }, []);
};
//------------------------------------------------------------------------------
// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) { };
//------------------------------------------------------------------------------
const countOccurencesOf = function (strings, target) {
  return strings.reduce(function (count, str) {
    return str === target ? count + 1 : count;
  }, 0);
};

const countOccurrences = function (strings) {
  const uniqueWords = uniqueElements(strings);

  return uniqueWords.map(function (word) {
    return { [word]: countOccurencesOf(strings, word) };
  });
};
//------------------------------------------------------------------------------
// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) { };
//------------------------------------------------------------------------------
const zip = function (keys, values) {
  return keys.reduce(function (object, key, index) {
    object[key] = values[index];
    return object;
  }, {});
};
//------------------------------------------------------------------------------
const makeObject = function (keys, values) {
  return zip(keys, values);
};
//------------------------------------------------------------------------------
const invertObject = function (obj) {
  const keys = Object.keys(obj);
  const values = Object.values(obj);
  return makeObject(values, keys);
};
//------------------------------------------------------------------------------
const merge = function (data, obj) {
  return data.reduce(function (object, array) {
    object[array[0]] = array[1];
    return object;
  }, obj);
};

const mergeArrays = function (arr1, arr2) {
  const firstArrayMerged = merge(arr1, {});
  const secondArrayMerged = merge(arr2, firstArrayMerged);
  return secondArrayMerged;
};
//------------------------------------------------------------------------------
// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) { };
//------------------------------------------------------------------------------
// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) { };
//------------------------------------------------------------------------------
const flattenToObject = function (pairs) {
  return merge(pairs, {});
};
//------------------------------------------------------------------------------
const longestString = function (strings) {
  return longestWord(strings);
};
//------------------------------------------------------------------------------
// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) { };
//------------------------------------------------------------------------------
const sumAndCount = function (numbers) {
  const sum = sumOf(numbers);
  return { sum: sum, count: numbers.length };
};
//------------------------------------------------------------------------------
const deepFlatten = function (arr) {
  return arr.flat(Infinity);
};
//------------------------------------------------------------------------------
const findMax = function (numbers) {
  return maxOf(numbers);
};
//------------------------------------------------------------------------------
const cumulativeSum = function (numbers) {
  const cumulativeSum = numbers.reduce(function (sum, number) {
    sum.push(sum.at(-1) + number);
    return sum;
  }, [0]);

  cumulativeSum.shift();
  return cumulativeSum;
};
//------------------------------------------------------------------------------
// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) { };

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) { };

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) { };

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) { };

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) { };

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) { };

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) { };

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) { };

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) { };

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) { };

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) { };

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) { };

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) { };

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) { };

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {
  const smallest = minOf(numbers);
  const largest = maxOf(numbers);
  return { min: smallest, max: largest };
};

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) { };
