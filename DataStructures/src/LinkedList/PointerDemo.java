
package LinkedList;


public class PointerDemo {
        
    //Showing how to create nodes Shift + F6 to run this app
    public static void main(String[] args) {
    Node n1 = new Node(1);
    Node n2 = new Node(3);
    Node n3 = new Node(5);
    Node n4 = new Node(7);
    Node n5 = new Node(9);
    
    n1.next = n2;
    n2.next = n3;
    n3.next = n4;
    n4.next = n5;
    
    Node temp =n1;
    while(temp!=null){
        System.out.println(">>"+temp.getData());
        temp = temp.next;
    }
    
    }

}


    

