package main

import (
    "fmt" // print formatting
    "os"
    "bufio" // reading input file
    "strings" // string formatting
    "strconv" // used for converting string to int
)

func part1(scanner *bufio.Scanner) {
    safeReports := 0
    for scanner.Scan() {
        line := scanner.Text()
        //Fields string function splits a string around whitespace
        numbers := strings.Fields(line)
        
        // edge case
        if len(numbers) < 2 {
            continue
        }

        safetyFlag := 1

        //binary trend var where increasing is 1 and decreasing is 0
        var trend int
        l, err := strconv.Atoi(numbers[0])
        if err != nil {
            fmt.Print("error converting string to int")
        }

        r, err := strconv.Atoi(numbers[1])
        if err != nil {
            fmt.Print("error converting string to int")
        }
        
        // first case
        // increasing
        if r > l {
            trend = 1
            // too wide
            if (r-l) < 0 || (r-l) > 3 {
                continue
            }
        // decreasing
        } else if r < l {
            trend = 0
            // too wide
            if (l-r) < 0 || (l-r) > 3 {
                continue
            }
        } else {
            continue
        }

        for i:= 1; i < len(numbers) - 1; i++ {
            l, err = strconv.Atoi(numbers[i])
            if err != nil {
                fmt.Print("error converting string to int")
            }
            r, err = strconv.Atoi(numbers[i+1])
            if err != nil {
                fmt.Print("error converting string to int")
            }
            // was increasing and now isn't
            if trend == 1 && (r <= l) {
                safetyFlag = 0
                break
            // was decreasing and now isn't
            } else if trend == 0 && (r >= l) {
                safetyFlag = 0
                break
            // was increasing and is increasing
            } else if trend == 1 && (r > l) {
                // too wide a diff
                if (r-l) < 0 || (r-l) > 3 {
                    safetyFlag = 0
                    break
                }
            // was decreasing and is decreasing
            } else if trend == 0 && (r < l) {
                // too wide a diff
                if (l-r) < 0 || (l-r) > 3 {
                    safetyFlag = 0
                    break
                }
            }
        }
        safeReports += safetyFlag
    }
    fmt.Println("Number of safe reports: ", safeReports)
}

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
    part1(scanner)
}
