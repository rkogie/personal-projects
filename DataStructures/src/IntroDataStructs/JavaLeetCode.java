package IntroDataStructs;

import java.util.*;

//Class containing basic Leetcode Easy Questions (common cases)
public class JavaLeetCode {

    //Global variable
    private static final Scanner input = new Scanner(System.in);

    public static void main(String[] args) {

        reverseWordsDriver();


    }

    //Function 1-  Returns reversed words from string input
    public static String reverseWordsMaintainOrder(String s) {
    	if (s == null) throw new IllegalArgumentException("Inputs cannot be null");

    	//Implementation 1 = reverses letters and words completely
    	//StringBuilder output = new StringBuilder(s).reverse();
    	//return output.toString();

    	//Implementation 2 = reverses words only in sentence, letters remain ordered
    	/*String words[] = s.split("\\s");
        String output = "";
        for (int i = words.length -1; i >=0; i--){
            output = output + words[i] + " ";
        }
        return output;*/

        //Implementation 3 = Using StringBuilder, reverses letters only - words remain in place
        String words[] = s.split("\\s");
        StringBuilder output = new StringBuilder();
        for(String word: words){
            output.append(new StringBuilder(word).reverse()+" ");
        }
        return output.toString();
    }

    //Function 1- Driver program
    public static void reverseWordsDriver(){
        //Test Case for Function 1
        System.out.print("Enter your string: ");
        String test = input.nextLine();
        System.out.printf("Output: %s",reverseWordsMaintainOrder(test));
    }


































}


