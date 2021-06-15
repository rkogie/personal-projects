def quick_sort(list):
    """
    Function sorts an unsorted list in ascending order using Divide and conquer approach
    Steps
    -----------------------------------------------
    1. Recrusively divide the list into sublists until the sublists is comprised of a single element
    2. Compare values against a 'pivot' where calls break lists into sub pivots to evaluate greater/lesser than conditions against the new sublists
    3. Once sorted in ascending order, repeatedly merge the sublists to produce sorted sublists until one list remains - ie stop condition
    4. Return the sorted list 

    Runs in total logarithmic runtime of average case O(log n) if the pivot is chosen at random 
    and worst case quadtratic time if the same index position is selected as the pivot O(n^2) as in this example
    """
    if (len(list) <= 1):  # base case to break out of recursive function once sublists have 1 element or is empty list
        return list
    less_than_pivot = []
    greater_than_pivot = []
    # Select the first element of list to use as pivot to compare lesser/greater than sublists
    pivot = list[0]

    for i in list[1:]:
        if (i <= pivot):
            less_than_pivot.append(i)
        else:
            greater_than_pivot.append(i)

    # testing call stack
    print("%15s %1s %-15s" % (less_than_pivot, pivot, greater_than_pivot))
    # Recursively call quicksort() and pass in the new sublists lesser/greater than against the pivot
    return quick_sort(less_than_pivot) + [pivot] + quick_sort(greater_than_pivot)


# test case
numbers = [4, 6, 3, 2, 9, 7, 3, 5]
print("Unordered numbers: (%s)" % numbers)
print("Sorted numbers: (%s) " % quick_sort(numbers))
