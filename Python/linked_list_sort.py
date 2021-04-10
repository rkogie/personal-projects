from linked_list import LinkedList


def merge_sort(llist):
    """
    Function sorts a linked list in ascending order
    Steps
    ------
    1. Recrusively divide the linked list into sublists until the sublists is comprised of a single node
    2. Repeatedly merge the sublists to produce sorted sublists until one list remains - ie stop condition
    3. Return the sorted linked list 

    Runs in total runtime of O(kn log n)
    Usual merge sort algorithms run in O(n log n) quasi-linear runtime
    """
    if (llist.size() == 1 or llist.head is None):
        return llist

    left_half, right_half = split(llist)
    left = merge_sort(left_half)
    right = merge_sort(right_half)

    return merge(left, right)


def split(llist):
    """
    Divide the unsorted list at midpoint into sublists
    Takes quasi-linear runtime O(k log n) due to calling node_at_index() which traverses list with O(n)
    """
    # if given a linked list with a single node. Create two lists but the right list is empty
    if (llist is None or llist.head is None):
        left_half = llist
        right_half = None
        return left_half, right_half
    else:
        size = llist.size()  # gets the size of the list
        midpoint = size // 2  # uses floor division to get the middle of list

        # assigns middle node to the midpoint of a given nodes index pos less by 1
        mid_node = llist.node_at_index(midpoint - 1)
        left_half = llist  # assigned list into the left side
        right_half = LinkedList()  # create new list instance for the right
        # assign the new lists head node to the mid nodes next pointer
        right_half.head = mid_node.next_node
        # assign empty to mid node, making it the tail of the left sub list
        mid_node.next_node = None

    return left_half, right_half


def merge(left, right):
    """
    Merges two sorted linked lists, sorted by data in nodes
    Returns a new, merged linked list
    Runs in linear time O(n)
    """
    # Create a new linked list that contains nodes from
    # merging left and right
    merge = LinkedList()

    # Add a fake head that is discarded later
    merge.add(0)
    # Set current to head of linked list
    current = merge.head

    # Obtain head nodes for left and right linked lists
    left_head = left.head
    right_head = right.head

    # Iterate over left and right until we reach the tail node of either
    # ie..if node.next val = None
    while (left_head or right_head):
        # If head node of left is None, we're past the tail of left
        # Add the tail node from right to merged linked list
        if (left_head is None):
            current.next_node = right_head
            # Call next on right to set loop condition to false, break out of loop
            right_head = right_head.next_node
        # If head node of right is None, we're past the tail of right
        # Add the tail node from left to merged linked list
        elif (right_head is None):
            current.next_node = left_head
            # Call next on left to set loop condition to false, break out of loop
            left_head = left_head.next_node
        else:
            # Not at either tail node, obtain data from nodes to compare
            left_data = left_head.data
            right_data = right_head.data
            # If data on left is less than right, set current to left node
            if (left_data < right_data):
                current.next_node = left_head
                # Move left head to traverse next node
                left_head = left_head.next_node
            # If data on left is greater than right, set current to right node
            else:
                current.next_node = right_head
                right_head = right_head.next_node
        # Move current to next node
        current = current.next_node
    # Discard fake head and set first merged node as head
    head = merge.head.next_node
    merge.head = head
    return merge


# test case
l = LinkedList()
l.add(66)
l.add(20)
l.add(87)
l.add(3)
l.add(48)

print(l)  # unsorted linked list
print(merge_sort(l))
