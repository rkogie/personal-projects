package LinkedList;

public class NoItemsException extends Exception {
    
    public static int DEFAULT_MESSAGE = 1;
    
    
    public NoItemsException(int option){
        super("ERROR >> No elements in your list. List is empty");
    }

    public NoItemsException() {}

    public NoItemsException(String message) {
        super(message);
    }
}
