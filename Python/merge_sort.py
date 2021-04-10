def merge_sort(list):
    """
    Sorts a list in ascending order
    Returns a new sorted list (differs from a sort in place algo with different runtime complexity)

    Done in 2 steps:
    ---------------
    1. Divides by finding the midpoint of the list and divide into sublists
    2. Recursively sort the sublists created in the prev step
    3. Merge the sorted sublists created in the prev step

    Takes O(n) * O(k) * O (log n) = O(kn log n) or quasi-linear runtime
    """
    if (len(list) <= 1):
        return list

    left_half, right_half = split(list)
    left = merge_sort(left_half)
    right = merge_sort(right_half)

    return merge(left, right)


def split(list):
    """
    Divide the unsorted list at midpoint into sublists using floor division
    Returns 2 sublists = left and right
    Takes logarithmic time O( k log n) because of the slice of left and right of the sublists
    """
    mid = len(list) // 2
    left = list[:mid]
    right = list[mid:]

    return left, right


def merge(left, right):
    """
    This function merges tow lists(arrays), sorting them in the process
    Returns a new merged list
    Takes linear runtime O(n)
    """
    l = []
    i = 0
    j = 0

    while (i < len(left) and j < len(right)):
        if (left[i] < right[j]):
            l.append(left[i])
            i += 1
        else:
            l.append(right[j])
            j += 1

    while (i < len(left)):
        l.append(left[i])
        i += 1

    while (j < len(right)):
        l.append(right[j])
        j += 1

    return l


def verify_list(list):
    n = len(list)
    if (n == 0 or n == 1):
        return True

    return list[0] < list[1] and verify_list(list[1:])


# test case
alist = [54, 12, 65, 3, 4, 465, 334, 67, 21, 76, 22]
l = merge_sort(alist)
print(l)
