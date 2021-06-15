
package Fibonacci;

public class FibDriver {
    public static void main(String[] args) {
        
        System.out.printf("Output: %d",fibonacciSeq(12));
    }
    
     public static int fibonacciSeq(int num){
        switch (num) {
            case 0:
                return 0;
            case 1:
                return 1;
            default:
                return fibonacciSeq(num - 1) + fibonacciSeq(num - 2);
        }
     }
}
