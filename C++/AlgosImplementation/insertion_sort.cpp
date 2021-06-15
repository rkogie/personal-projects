#include <stdlib.h>
#include <iostream>
#include <vector>

using namespace std;
/*
Insertion sort is a sorting algoritm that assigns a key to the array[1] and traverses through the array for n data sets
The algorithm performs a pair comparison at each increment, and while the previous element (array[i-1]) is greater than the current index,
swap the current value at index i with the value at index i -1

The overall (average) time complexity for worst case is quadratic time O(n^2) as if the last two elements of the array needed 
sorting and the comparision returns a movement, the preceeding elements need to be sorted for n times, causing O(n^2) runtime
*/


// function to print the given array
void printArray(int array[], int size)
{
    int j;
    for (j = 0; j < size; j++)
    {
        cout << " " << array[j];
    }
    cout << endl;
}

//member funtion declarations --
void insertion_sort(int arr[], int length)
{
    int i, j, key; //i is your iterator for the list, j is the assist for the key to perform swaps, and key is your pointer

    for (i = 1; i < length; i++) //run loop for iterator across
    {
        j = i;                               //set index pos to helper pointer
        while (j > 0 && arr[j - 1] > arr[j]) //while the index before current is greater than current
        {
            key = arr[j];        //assign key to the helper pointer
            arr[j] = arr[j - 1]; //swap positions
            arr[j - 1] = key;    //assign new key pos
            j--;                 //decrement j
        }
    }

    cout << "Sorted Array: ";
    // print the sorted array
    printArray(arr, length);
}



//Driver program
int main()
{
    int array[6] = {5, 1, 6, 2, 4, 3};
    int size = sizeof(array) / sizeof(array[0]); //get size by dividing total bytes by byte of int primitive

    // calling insertion sort function to sort the array
    insertion_sort(array, size);
    return 0;
}
