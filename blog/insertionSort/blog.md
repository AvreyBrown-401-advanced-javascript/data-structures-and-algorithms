# Blog Post for Code Challenge 26

- the function insertionSort traverses a given array multiple times, the traversal sets a pointer variable named temp, 


        function insertionSort(arr) {
        // traversing the initial array
        for(let i = 0; i < arr.length; i++) {

            // j is equal to the value before i
            let j = i - 1;
            // set a variable temp equal to a point in the array, since its in a loop, itll point to whatever value I is at the current position in the array
            let temp = arr[i];

            // the loop will run only if the position of i is greater than or equal to 1, and if the value of temp is less than the index of j in the array, and j is equal to i - 1, so its really like while(j >=0 && temp < arr[i - 1])
            while(j >= 0 && temp < arr[j]) {

            // arr[j + 1] = arr[i], so it is really assigning arr[i] = arr[j]
            arr[j + 1] = arr[j];
            // reassigning j to be equal to j - 1, changeing the position of j to the index value before it
            j = j - 1;

            }

            // temp was previously just a pointer to whatever index position the loop was currently at, now we are assigning temp to be the value of arr[j + 1]
            arr[j + 1] = temp;
        }
        // return the newly sorted array
        return arr;
        }