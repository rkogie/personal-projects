package LinkedList;


public class GenericList<T extends Comparable>{
    
    private GNode<T> item;
    private GNode<T> current;
    
   
    public void add(T o) {
        //wrap item in a node
        GNode<T> newItem = new GNode<T> (o);

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
    
    public void printItems() {
        GNode<T> temp = item;
        while (temp != null) {
            System.out.println(">> " + temp.getData());
            temp = temp.next;
        }
    }
    
    public T findMax(){
         T max = item.getData();
         GNode<T> temp = item;
         while(temp!= null){
             Comparable cTemp = (Comparable)temp.getData();
             if(cTemp.compareTo(max) >= 1){
                 max = temp.getData();
             }
             temp=temp.next;
         }
        return max;
    }
}

class GNode<T> {
    
    private T data;
    public GNode<T> next;

    public GNode(){}
    
    public GNode(T data) {
        this.data = data;
    }

    public T getData() {
        return data;
    }

    public void setData(T data) {
        this.data = data;
    } 
}
