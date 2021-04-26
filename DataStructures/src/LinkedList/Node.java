
package LinkedList;

public class Node {
   
    private Object data;
    public Node next;
    
    public Node(){}
    public Node(Object o){
        data=o;
    }

    public Object getData() {
        return data;
    }

    public void setData(Object data) {
        this.data = data;
    }
    
}
