#include <iostream>

using namespace std;
using std::cout;
using std::cin;

int jumpSearch(int arr[], int target, int arrayLength)

{
    // Finding block size to be jumped
    int step = sqrt(arrayLength);

    // Finding the block where element is
    // present (if it is present)
    int prev = 0;
    while (arr[min(step, arrayLength) - 1] < target)
    {
        prev = step;
        step += sqrt(arrayLength);
        if (prev >= arrayLength)
            return -1;
    }

    // Doing a linear search for target in block
    // beginning with prev.
    while (arr[prev] < target)
    {
        prev++;

        // If we reached next block or end of
        // array, element is not present.
        if (prev == min(step, arrayLength))
            return -1;
    }
    // If element is found
    if (arr[prev] == target)
        return prev;

    return -1;
}

// Driver program to test function
int main()
{
    int arr[] = { 0, 1, 1, 2, 3, 5, 8, 13, 21,
                34, 55, 89, 144, 233, 377, 610 };
    int target = 55;
    int arrayLength = sizeof(arr) / sizeof(arr[0]); //get array size by dividing total bytes of array by single byte datatype (int) using sizeof()

    // Find the index of 'target' using Jump Search
    int index = jumpSearch(arr, target, arrayLength);

    // Print the index where 'target' is located
    cout << "\nNumber " << target << " is at index " << index;
    return 0;
}