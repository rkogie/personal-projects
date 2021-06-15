//
//package ArrayManager;
//
//public class DataStructuresDemo {
//
//    public static void main(String[] args) {
//        
//        ArrayManager am = new ArrayManager();
//        for(int i=0; i<10; i++){
//            am.add(i);
//        }
//        
//        try{
//            am.addAt(15, 30);
//        }catch(OutOfBoundsException oobe){
//            System.out.println(oobe.getMessage());
//        }catch(Exception e){
//            System.out.println(e); 
//        }
//        
//        //Create new Empty array to trigger empty array exception
//        am = new ArrayManager();
//        try{
//            am.remove(50);
//        }catch(Exception e){
//            System.out.println(e.getMessage()); 
//        }
//        
//        am.printItems();
//        System.out.println("============");
//    
//    }
//}
