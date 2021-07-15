def binary_search(nums_array, target):
    """
    Function splits the list into sublists by halving original sublists and reduces the range relative to the target until the
    target is found 
    Total runtime of algorithm takes logarithmic time O(log n)
    """
    first = 0
    last = len(nums_array) - 1  # zero based index therefore last pos is pos - 1

    while first <= last:
        # halves the list rounded to nearest whole integer
        midpoint = (first + last) // 2
        if nums_array[midpoint] == target:  # best case scenario
            return midpoint
        elif nums_array[midpoint] < target:
            first = midpoint + 1  # assign first a new value of mid + 1
        else:
            last = midpoint - 1  # if mid greater than target, reassign new value to last at mid - 1
    return None  # if target was not found in list


def verify(index):
    if index is not None:
        print("Target found at index: ", index)
    else:
        print("Target not found in list")


# binary search relies on a sorted list ie. numbers - algo reads from left to right
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = binary_search(numbers, 2)
verify(result)
