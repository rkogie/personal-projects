class Node:
    """
    An object for storing a single node of a linked list.
    - Models two attributes. 
    - Data - stores information for the node.
    - Reference/pointer to the next node in the list
    """
    data = None
    next_node = None

    def __init__(self, data):
        self.data = data

    # outputting string representation of particular Node
    def __repr__(self):
        # syntax for parsing variables into strings using %
        return "<Node data: %s>" % self.data


class LinkedList:
    """
    Singly Linked List
    """

    def __init__(self):
        self.head = None
    # method to verify if head is null - evaluates to true which means empty list

    def __repr__(self):
        """
        Returns spring representation of all contents in linked list through traversal - takes linear time O(n)
        """
        nodes = []  # empty list to store values
        current = self.head  # pointed to head of list

        while (current):
            if (current is self.head):
                nodes.append("[Head: %s] " % current.data)
            elif (current.next_node is None):
                nodes.append("[Tail: %s]: " % current.data)
            else:
                nodes.append("[%s]" % current.data)

            # move current along and recall while loop to verify condition
            current = current.next_node

        return '-> '.join(nodes)  # concat nodes using join method

    def search(self, key):
        """
        Search for 'first' node containing data that matches the key. Does not return multiple nodes with the same value
        Returns the node or None, if not found - linear complexity as O(n)
        """
        current = self.head
        while (current):  # loops through nodes that exist in the list
            if current.data == key:  # if values match - return current with the matching key
                return current
            else:
                # move current along and recall while loop to verify condition
                current = current.next_node
        return None

    def is_empty(self):
        return self.head == None

    def size(self):
        """
        returns the number of nodes in list - takes linear time O(n)
        """
        current = self.head
        count = 0  # list size to return
        while (current):  # while current != None
            count += 1  # increments count while true
            # assigns current to the next node and cycles back to while loop
            current = current.next_node
        return count

    def add(self, data):
        """
        Prepends new node containing data at the head of list - takes constant time O(1)
        """
        new_node = Node(data)  # creates temp node to store ref to head
        new_node.next_node = self.head  # point new node next to head
        self.head = new_node  # reassign new node as the new head

    def insert(self, data, index):
        """
        Inserts a new node in a specified position
        Insertion takes constant time O(1) but searching through to 
        find the position/index takes linear time O(n)

        Overall operation takes linear time O(n) - worst case
        """
        current = self.head

        if (index == 0):
            # calls the add method since this method adds at the front of list
            self.add(data)

        if (index > 0):
            # creates a new node object, passes the data into it
            new = Node(data)
            position = index  # position is passed from index to decrement

            while (position > 1):
                current = current.next_node  # traverse through list to find the index
                position -= 1  # decrement the position
            # sets currents to a temp variable to indicate the previous position
            prev = current
            next_node = current.next_node  # attaches

            prev.next_node = new  # attach the nodes next value to new
            new.next_node = next_node  # attach news next pointer value to next node value

    def remove(self, key):
        """
        Removes node containing data that matches key
        Returns node, or none if key doesn't exist
        Worst case takes linear time O(n)
        """
        current = self.head
        previous = None
        found = False
        # loop iterates while current !=None and found is still false
        while (current and not found):
            # use case if the key and the head node contain the data to remove
            if (current.data == key and current is self.head):
                found = True  # change flag to terminate loop
                self.head = current.next_node  # set the new head node to currents next node
            elif (current.data == key):
                found = True
                previous.next_node = current.next_node
            else:
                previous = current
                current = current.next_node
        return current

    def node_at_index(self, index):
        """
        Traverses through linked list to search for node at a specified index
        Returns the node value for the given index/pos - Takes O(n) linear runtime
        """
        if (index == 0):
            return self.head
        else:
            current = self.head
            pos = 0

            while (pos < index):
                current = current.next_node
                pos = +1
            return current
