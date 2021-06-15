package Widget;

import LinkedList.*;

public class WidgetDriver {

    public static void main(String[] args) {
        GenericList<Widget> list = new GenericList<Widget> ();
        
        list.add(new Widget(1, 24.5f, 111));
        list.add(new Widget(234, 26.5f, 222));
        //how to handle cases where objects are entered, but data mismatches constructor?
        //Use of TypeSafe data structures to validate arguments and give compiletime errors
        //rather than runtime errors or using try catch methods
        //list.add("cat"); 
        
        list.add(new Widget(33, 22.5f, 333));
        list.add(new Widget(4, 40.5f, 444));

        list.printItems();
        System.out.println("-----------");
        //System.out.println("Max: " + list.findMax());
        
        GenericList<Foo> listTwo = new GenericList<Foo>();
        listTwo.add(new Foo());
        listTwo.add(new Foo());
        listTwo.add(new Foo());
        listTwo.add(new Foo());
        
        System.out.println(listTwo.findMax());
    }

}
