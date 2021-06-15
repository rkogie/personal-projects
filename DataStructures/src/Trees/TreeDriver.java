package Trees;

public class TreeDriver {

    public static void main(String[] args) {
        //Declare new tree
        Tree t = new Tree();
        for (int i = 0; i < 10; i++) {
            int n = (int) (Math.random() * 100);    //Loop and add objects
            t.add(n);
        }
        System.out.println("--------");
        t.print();  //sorts in order, smallest to largest
        System.out.println("Largest: "+ t.findMax()); //Print largest
    }
}
