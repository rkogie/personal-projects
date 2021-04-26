package LinkedList;

import ArrayManager.OutOfBoundsException;

public class LinkedList {

    private Node item;
    private Node current;

    public void addBefore(Object o) {
        Node newItem = new Node(o);
        //edge cases
        //if list is empty
        if (item == null) {
            item = newItem;
            current = item;
        } else if (current == item) {
            newItem.next = item;
            item = newItem;
            current = item;
        } else {
            Node temp = item;
            while (temp.next != current) {
                temp = temp.next;
            }
            newItem.next = current;
            temp.next = newItem;
            current = newItem;
        }
    }

    public void addAfter(Object o) {
        Node newItem = new Node(o);
        //if list is empty create a new node item and add it as the 
        //current item
        if (item == null) {
            item = newItem;
            current = item;
        } else {
            newItem.next = current.next;
            current.next = newItem;
            current = current.next;
        }
    }

    public void add(Object o) {
        //wrap item in a node
        Node newItem = new Node(o);

        //check to see if list is null - if true add to the front of list
        if (item == null) {
            item = newItem;
            current = item;
        } //else add it after current and set current the new item
        else {
            current.next = newItem;
            current = current.next;
        }
    }

    public void removeAllOccurances(Object o) throws NoItemsException {
        if (item == null) {
            throw new NoItemsException(NoItemsException.DEFAULT_MESSAGE);
        }
        Node temp = item;
        while(temp.next != null) {
            //Condition check for duplicate objects
            if(temp.next.getData().equals(o)) {
                if(item.getData().equals(o)) {
                    item = item.next;
                }
                //Use case if a current node is selected for deletion
                if(current.getData() == temp.next.getData()) {
                    //Checks for null items then starts back at the top of list
                    if(temp.next.next == null) {
                        start();
                    }
                    else {
                        //Moves node after pointer to current
                        current = temp.next.next;
                    }
                }
                //Deletion
                temp.next = temp.next.next;
            }
            else {
                temp = temp.next;
            }
        }
    }

    public void removeCurrent() throws NoItemsException {
        if (item == null) {
            throw new NoItemsException(NoItemsException.DEFAULT_MESSAGE);
        }
        if (current == item) {
            item = item.next;
            current = item;
        } else {
            Node temp = item;
            while (temp.next != current) {
                temp = temp.next;
            }
            temp.next = temp.next.next;
            current = temp;
        }
    }

    public void printItems() {
        Node temp = item;
        while (temp != null) {
            System.out.println(">> " + temp.getData());
            temp = temp.next;
        }
    }

    public void start() {
        current = item;
    }

    public void advance() throws NoItemsException, OutOfBoundsException {
        if (item == null) {
            throw new NoItemsException(NoItemsException.DEFAULT_MESSAGE);
        }
        if (current.next == null) {
            throw new OutOfBoundsException(OutOfBoundsException.DEFAULT_MESSAGE);
        }
        current = current.next;
    }

    public Object getCurrentData() throws NoItemsException {
        if (current == null) {
            throw new NoItemsException(NoItemsException.DEFAULT_MESSAGE);
        }
        return current.getData();
    }
    
    public Object findMax(){
        Object max = item.getData();
        Node temp = item;
        while(temp!= null){
            Comparable cTemp = (Comparable)temp.getData();
            if(cTemp.compareTo(max) >= 1){
                max = temp.getData();
            }
            temp=temp.next;
        }
       return max;
    }
     
    
    //Print List using recursion
    //Feeder program
    public void recursivePrint(){
        recursivePrint(item);
    }

    //Recursive method
    private void recursivePrint(Node temp){
        if(temp == null){
            return;
        }else{
            System.out.println(temp.getData());
            recursivePrint(temp.next);
        }
    }

    //Print in reverse order
    //Feeder method
    public void reversePrint(){
        reversePrint(item);
    }

    //Recursive method
    private void reversePrint(Node temp){
        if(temp == null){
            return;
        }else{
            reversePrint(temp.next);
            System.out.println(temp.getData());
        }
    }
     
}
