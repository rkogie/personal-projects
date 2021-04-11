def heapify(arr, n, i):
    """
    This function takes the built heap and checks the individual leaf nodes against the parent
    and assesses if they satisfy the condition that parent must be greater than or equal to each of
    its children. If true, traverse to the next level (subtree), however if false, swap the nodes
    Time complexity is O(log n) due to tree traversal reducing n to n/2 on each level
    """
    largest = i  # assign your index passed in as your root node (largest)
    left = 2 * i + 1  # left leaf
    right = 2 * i + 2  # right leaf

    # check if left child of root exist and if greater than root
    if (left < n and arr[largest] < arr[left]):
        largest = left
    # check if right child of root exist and if greater than root
    if (right < n and arr[largest] < arr[right]):
        largest = right

    # if either condition is false, code moves to this condition
    if (largest != i):
        arr[i], arr[largest] = arr[largest], arr[i]  # perform a swap

        # Recursively call heapify to drop down to the next level of tree
        heapify(arr, n, largest)


def heap_sort(arr):
    """
    Overall time complexity of heap sort is O(n log n)
    This is due to the O(n) time it takes to create the initial heap (using for loop to iterate over the size of the array)
    Then calling the heapify() on each iteration and performs O(log n) operations due to ascending up each layer of the tree in log time
    as the leafs reduce in n/2 on each layer until the root element = 1 item
    """
    size = len(arr)  # get size of array

    # Build a max-heap (largest number is the root)
    for i in range(size // 2 - 1, -1, -1):  # start, stop, step range() inputs
        heapify(arr, size, i)

    # One by one, extract elements
    for i in range(size - 1, 0, -1):  # start, stop, step range() inputs
        arr[i], arr[0] = arr[0], arr[i]  # perform a swap
        heapify(arr, i, 0)


# Driver code
arr = [12, 11, 13, 5, 6, 7]
heap_sort(arr)
n = len(arr)
print("Sorted array is: ")
for i in range(n):
    print("%d" % arr[i])
