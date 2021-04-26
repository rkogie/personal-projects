
package ArrayManager;

public class NoItemsException extends Exception {
    
    public static int DEFAULT_MESSAGE = 1;
    
    public NoItemsException(int option){
            super("\"ERROR >>  Array is Empty"); 
    }
    public NoItemsException(){

    }
    public NoItemsException(String message){
    super(message);
    }
}
