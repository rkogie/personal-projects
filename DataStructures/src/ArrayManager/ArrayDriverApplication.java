package ArrayManager;

import java.util.Scanner;

public class ArrayDriverApplication {
    
    Scanner input;
    ArrayManager data;
    
    public ArrayDriverApplication(){
        Object[] numbers = {1,3,4,5,3,4,3,4,1,2,5,6};
        data = new ArrayManager(numbers);
        input = new Scanner(System.in);
    }
    
    public void run(){
        int choice =-1;
        while(choice!=8){
            choice=displayActions();
            executeAction(choice);
        }
        System.out.println(">> Application Stopped.");
    }
    
    public static void main(String[] args) {
        ArrayDriverApplication a = new ArrayDriverApplication();
        a.run();
    }
    
    public int displayActions(){
        System.out.println("1. Display number of items");
        System.out.println("2. Display all items");
        System.out.println("3. Add Item");
        System.out.println("4. Add Item at Index Pos");
        System.out.println("5. Remove Item");
        System.out.println("6. Get Item at Position");
        System.out.println("7. Remove Occurances of item");
        System.out.println("8. Exit\n");
        System.out.print("--> ");
        int choice = input.nextInt();
        return choice;
    }
    
    public void executeAction(int choice){
        if(choice==1){
            System.out.println("Number of items >> " + data.getSize()+"\n");
        }else if (choice==2){
            System.out.println("Items >> ");
            data.printItems();
        }else if (choice==3){
            addItem();
        }else if(choice==4){
            addItemAtPosition();
        }else if(choice==5){
            removeItem();
        }else if(choice==6){
            getElement();
        }else if(choice==7){
            removeAllOccurances();
        }
    }
    
    //Functions to compartmentalize operations
    public void removeAllOccurances(){
        System.out.print("What item? >> ");
        int item = input.nextInt();
        try{
            data.removeAllOccurances(item);
            System.out.println("All occurances of item "+item+" have been removed.");
        }catch(Exception e) {
            System.out.println(e.getMessage());
        }
    }
    
    public void getElement(){
        System.out.print("Position >> ");
        int pos = input.nextInt();
        try{
            Object item = (int) data.getElementAt(pos);
            System.out.println("\nitem >> " +item);
        }catch(OutOfBoundsException oobe){
            System.out.println(oobe.getMessage());
        }
    }
    
    public void removeItem(){
        System.out.print("Item to remove at position >> ");
        int pos = input.nextInt();
        try{
            data.remove(pos);
        }catch (Exception e){
            System.out.println(e.getMessage());
        }
    }
    
    public void addItemAtPosition(){
        System.out.print("Item to add >> ");
        int item = input.nextInt();
        System.out.print("Position >> ");
        int pos = input.nextInt();
        
        try{
            data.addAt(item, pos);
        }catch(OutOfBoundsException oobe){
            System.out.println(oobe.getMessage());
        }
    }
    
    public void addItem(){
        System.out.print("Item to add >> ");
        int item = input.nextInt();
        data.add(item);
    }
     
}
