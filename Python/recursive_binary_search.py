# function returns true/false instead of index if item exists in list
def recursive_binary_search(list, target):
    if (len(list) == 0):  # checks if list is empty - base case stopping condition
        return False
    else:
        midpoint = (len(list)) // 2  # sets midpoint
        if (list[midpoint] == target):  # best case - also a base case stopping condition
            return True
        else:
            if (list[midpoint] < target):
                return recursive_binary_search(list[midpoint + 1:], target)
                # slices old list into new list, starting at midpoint and calls the function recursively
            else:
                return recursive_binary_search(list[:midpoint], target)


def verify(result):
    try:
        print("Target found?: ", result)
    except Exception:
        print("Something went wrong, check your algorithm")


numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
result = recursive_binary_search(numbers, 12)
verify(result)
result = recursive_binary_search(numbers, 9)
verify(result)
