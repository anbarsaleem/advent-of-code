package main

import (
    "math"
    "sort" // sorting slice of ints
    "fmt" // print formatting
    "os"
    "bufio" // reading input file
    "strings" // string formatting
    "strconv" // used for converting string to int
)

var slice1 []int
var slice2 []int

func main() {
    // grab input
    file, ferr := os.Open("./input.txt")
    if ferr != nil {
        fmt.Println("Error fetching input file: ", ferr)
        return
    }
    defer file.Close()

    // Scan to read file like Java line by line
    scanner := bufio.NewScanner(file)
    for scanner.Scan() {
        line := scanner.Text()
        //Fields string function splits a string around whitespace
        numbers := strings.Fields(line)

        //Adds numbers from lines into two diff slices
        num1, err := strconv.Atoi(numbers[0])
        if err != nil {
            fmt.Println("Error converting:", err)
        } 
        slice1 = append(slice1, num1)

        num2, err := strconv.Atoi(numbers[1])
        if err != nil {
            fmt.Println("Error converting:", err)
        } 
        slice2 = append(slice2, num2)
        
        //fmt.Printf("num1: %d, num2: %d\n", num1, num2)
    }

   // for i := len(slice1) - 1; i >= 0; i-- {
   //     fmt.Printf("num1: %d, num2: %d\n", slice1[i], slice2[i])
   // }

    // Sort slices for iteration after
    sort.Ints(slice1)
    sort.Ints(slice2)

    var totLength int
    // Loop through length of slices and compare at each index
    for i := 0; i < len(slice1); i++ {
        // Compute dist (must cast to float for math.Abs() to work)
        distance := math.Abs(float64(slice1[i] - slice2[i]))
        // Adding distance to accumulate total length for distance between lists
        totLength += int(distance)
    }
    
    fmt.Println("Total distance between lists: ", totLength)
}
