package ArrayManager;

import java.util.Arrays;

public class ArrayManager {
    
    private Object[] items;
    private int count;
    
    public ArrayManager(){
        items = new Object[10];
        count=0;
    }
         
    public ArrayManager(int size){
        items = new Object[size];
        count=0;
    }
    
    //Using this constructor as we're passing arrays as arguments in the driver program
    public ArrayManager(Object[] data){
        items = data;
        count=data.length;
    }
    
    public void printItems(){
        for(int i=0; i<count; i++){
            System.out.println(items[i]); 
        }
    }
    
    //for each loop acceptable because your looping through entire array
    public void printArray(){ 
        for(Object item : items){
            System.out.println(item);
        }
    }
    
    public void resize(){
        if (count >= items.length){
            Object[]temp = new Object[items.length +10];
            System.arraycopy(items,0 , temp,0 , items.length);
            items = temp;
        }
    }
    
    public void add(Object n){
        resize();
        items[count] = n;
        count++;
    }
    
    public Object getElementAt(int pos) throws OutOfBoundsException{
        if (pos >= count || pos < 0){
           throw new OutOfBoundsException("ERROR >> "
                   + "Cannot get elements outside of the bounds of the collection: "+ pos);
       }
        return items[pos];
    }
    
    public void addAt(Object n, int pos) throws OutOfBoundsException{
       //1. Resize array if necessary - this needs to be its own method 
       if (pos > count || pos < 0){
           throw new OutOfBoundsException("ERROR >> "
                   + "Cannot add element outside of the bounds of the collection: "+ pos);
       }
       
       resize();
       
       //2. shift
       for(int i= count; i>=pos; i-- ){
           items[i+1] = items[i];
       }
       //3. insert (at position)
      items[pos] = n;
       //4. add to count
       count++;
    }
    
    public void remove(int pos) throws OutOfBoundsException, NoItemsException{
        
        if(isEmpty()){
            throw new NoItemsException("ERROR >> Cannot remove from an empty collection");
        }
        if(pos < 0 || pos >= count){
            throw new OutOfBoundsException("ERROR >> "
                   + "Cannot remove element outside of the bounds of the collection: "+ pos);
        }
        
        for(int i= pos; i < count-1; i++){
            items[i] = items[i+1];
        }
        count--;
    }
    
    public void removeAllOccurances(Object o) throws OutOfBoundsException, NoItemsException{
      if(isEmpty()) {
         throw new NoItemsException("ERROR >> Cannot remove from an empty collection");
      } 
      for(int i = count-1 ;i >= 0; i--){
            if(o.equals(items[i])){
                remove(i);        
            }
      }
    }
    
    public int getSize(){
        return count;
    }
    
    public boolean isEmpty(){
        return count == 0;
    }
}
