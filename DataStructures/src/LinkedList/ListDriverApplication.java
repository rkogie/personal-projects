package LinkedList;


import ArrayManager.OutOfBoundsException;
import java.util.Scanner;

public class ListDriverApplication {

    private Scanner input;
    private LinkedList list;

    public static void main(String[] args) {

        ListDriverApplication listApp = new ListDriverApplication();
        listApp.run();
    }

    public ListDriverApplication() {

        input = new Scanner(System.in);
        list = new LinkedList();
        list.add(1);
        list.add(3);
        list.add(4);
        list.add(5);
        list.add(3);
        list.add(4);
        list.add(3);
        list.add(4);
        list.add(1);
        list.add(2);
        list.add(5);
        list.add(6);
    }

    public void run() {
        int choice = -1;
        while (choice != 9) {
            choice = displayActions();
            executeAction(choice);
        }
        System.out.println("\n>> Application Stopped.");
    }

    public int displayActions() {
        System.out.println("");
        System.out.println("1. Add before");
        System.out.println("2. Add after");
        System.out.println("3. Print");
        System.out.println("4. Get current");
        System.out.println("5. Delete current");
        System.out.println("6. Advance");
        System.out.println("7. Move current to start");
        System.out.println("8. Remove all ocurrances of nodes");
        System.out.println("9. Exit");
        System.out.print("----------\tEnter Menu Option >> ");
        int choice = input.nextInt();
        return choice;
    }

    public void executeAction(int choice) {
        if (choice == 1) {
            addItemBefore();
        } else if (choice == 2) {
            addItemAfter();
        } else if (choice == 3) {
            list.printItems();
        } else if (choice == 4) {
            getCurrentItem();
        } else if (choice == 5) {
            deleteCurrentItem();
        } else if (choice == 6) {
            advanceToNextItem();
        } else if (choice == 7){   
            list.start();    
        }else if (choice == 8) {
            removeAllOccurances();
        }
    }
    
    public void removeAllOccurances(){
        try {
            System.out.print("Enter the node item >> ");
            int item = input.nextInt();
            list.removeAllOccurances(item);
            System.out.println("\nAll instances of item: "+item+ " have been removed\n");
            list.printItems();
        } catch (Exception e) {
            System.out.println("ERROR >> " + e.getMessage()+"\n");
        }
    }
   
    public void advanceToNextItem() {
        try {
            list.advance();
        } catch (NoItemsException nie) {
            System.out.println(nie);
        } catch (OutOfBoundsException oobe) {
            list.start();
        }
    }

    public void deleteCurrentItem() {
        try {
            int current = (int) list.getCurrentData();
            list.removeCurrent();
            System.out.println(current + " has been removed");
        } catch (Exception e) {
            System.out.println("ERROR >> " + e.getMessage()+"\n");
        }
    }

    public void getCurrentItem() {
        try{
            int current = (int) list.getCurrentData();
            System.out.println("\nCurrent Item in list >> " + current+"\n");
        }catch(Exception e){
            System.out.println("ERROR>> "+e.getMessage());
        }
    }

    public void addItemBefore() {
        System.out.print("Item to add >> ");
        int item = input.nextInt();
        list.addBefore(item);
    }

    public void addItemAfter() {
        System.out.print("Item to add >> ");
        int item = input.nextInt();
        list.addAfter(item);
    }

//        LinkedList list = new LinkedList();
//        list.add(1);
//        list.add(6);
//        list.add(8);
//        list.add(12);
//        
//        list.printItems();
//        list.start();
//        try{
//            list.advance();
//        }catch (OutOfBoundsException e){
//            System.out.println("ERROR");
//        }
//        
//        //cast required to convert Oject to int
//        int currentData = (int)list.getCurrentData(); 
//        
//        //Automatically boxes int into Integer and then invokes toString()
//        System.out.println("Current Item " +list.getCurrentData());
//        System.out.println("Current Item " +currentData);
//        System.out.println("\n\n");
//        
//        list.addAfter(15);
//        list.printItems();
//        System.out.println("Current item: "+list.getCurrentData());
//        //list.start();
//        try{
//            list.advance();
//        }catch (OutOfBoundsException e){
//            System.out.println("ERROR");
//        }
//        //list.removeCurrent();
//        list.addBefore(99);
//        list.printItems();
//        System.out.println("Current Item: "+list.getCurrentData());
//    
}
