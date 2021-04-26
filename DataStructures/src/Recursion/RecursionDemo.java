package Recursion;

import LinkedList.*;

public class RecursionDemo {

    public static void main(String[] args) {
        //System.out.println("Sum of adder(5) = "+adder(5));
        //System.out.println("Factorial of factorial(5) = "+ factorial(5));
        //System.out.println("Power of 2(3) = " + myPow(2,0));
        //System.out.println(isPalindrome("racecar",0,6));

        LinkedList list = new LinkedList();
        list.add("a");
        list.add("e");
        list.add("i");
        list.add("o");
        list.add("u");
        list.add("y");
        list.recursivePrint();
        list.reversePrint();
        indentoTron(4);
    }

    //Recursion is a substitution for using loops/iterative cycles
    public static int adder(int n) {
        //This method will sum all the numbers from 1 to n
        if (n != 1) {
            return n + adder(n - 1);
        } else {
            return n;
        }
    }

    public static int factorial(int n) {
        if (n != 1) {
            return n * factorial(n - 1);
        } else {
            return n;
        }
    }

    public static int myPow(int a, int b) {
        if (b == 0) {
            return 1;
        }
        if (b == 1) {
            return a;
        }
        if (b < 0) {
            return 1 / myPow(a, -b);
        } else {
            int results = a * myPow(a, b - 1);
            return results;
        }
    }

    public static boolean isPalindrome(String s, int start, int end) {
        if (s.charAt(start) != s.charAt(end)) {
            return false;
        } else if (start > end) {
            return true;
        } else {
            return isPalindrome(s, start + 1, end - 1);
        }
    }

    //Iteration without loops
    //Using no looping constructs - pure recursion
    public static void indentoTron(int n) {
        indentoTron(n, 1);
    }

    public static void indentoTron(int n, int i) {
       if(i > n){
           return;
       }else{
           printSpaces(i);
           System.out.println("This was written by call number "+i);
           indentoTron(n,i+1);
           printSpaces(i);
           System.out.println("This was ALSO written by call number "+i);
       }
    }
    
    public static void printSpaces(int spaces){
        if(spaces == 0){
            return;
        }else{
            System.out.print(" ");
            printSpaces(spaces -1);
        }
    }
}
