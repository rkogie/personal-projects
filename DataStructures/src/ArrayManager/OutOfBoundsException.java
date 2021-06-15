
package ArrayManager;

public class OutOfBoundsException extends Exception {
    
    public static int DEFAULT_MESSAGE = 1;
    
    public OutOfBoundsException(int option){
            super("\"ERROR >> Out of Bounds, Check your elements and indexes match in your data structure"); 
    }
    public OutOfBoundsException(){

    }
    public OutOfBoundsException(String message){
    super(message);
    }
}
