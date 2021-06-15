package IntroDataStructs;

import java.util.*;

public class ArrayManipulation {

    public static void main(String[] args) {
        Scanner keyboard = new Scanner(System.in);
        //Test Case for Func 1
        /*int[] array = {1, 5, 8, 9, 11, 13, 15, 19, 21};
        int reversed[] = reverse(array);
        System.out.println(Arrays.toString(reversed));*/


        //Test Case for Func 2
        /*try{
            System.out.printf("Enter your case: ");
            int test = keyboard.nextInt();
            System.out.printf("Input: %d \n Output: %s",test,intToRoman(test));
        } catch(Exception e){
            System.out.println(e.getLocalizedMessage());
        }*/

        //Test Case for Func 3
        /*try{
            System.out.printf("Enter your case: ");
            String test = keyboard.next();
            System.out.printf("Input: %s \n Output: %d",test,romanToInt(test));
        } catch(Exception e){
            System.out.println(e.getLocalizedMessage());
        }*/
    }

    // Func 1 -- Algorithm to reverse array in place -- takes O(n) time and O(n) space
    //takes O(n) space because two temp variables are created to swap index pos
    private static int[] reverse(int[] arr){
        for(int i = 0; i < arr.length /2; i++){ //iterates until the half way point
            int other = arr.length - i - 1; //create var
            int temp = arr[i]; //create temp to swap in place
            arr[i] = arr[other]; //move other to the current index pos
            arr[other] = temp; //move temp into the other pos
        }
        return arr;
    }

    // Func 2 -- Given an integer, find it's Roman Numeral Representation
    // Linear runtime O(n) given the number size, however due to the range set, its capped at <4000
    public static String intToRoman(int number) throws IllegalArgumentException{
        //Map of Set Roman numbers within order 1000 down to 1 and corresponding value
        //for look-up functionality (key,val) - refactor using HashTable
        final String[] numeralsMap =
                new String[]{"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I",""};
        final int[] values =
                new int[]{1000,900,500,400,100,90,50,40,10,9,5,4,1,0};

        //declare a max value (for scalability)
        int maxValue = 3999;

        //Check range bounds
        if (number > maxValue || number < 1)
            throw new IllegalArgumentException("Error:Number Below or Beyond Max Range");

        //Use a string builder (production code using inbuilt function)
        StringBuilder numeral = new StringBuilder();

        int i = 0; // pointer to keep track of the index pos in both arrays

        //Logic - incorporates greedy algorithm logic passing values (>= 0) to carry down to
        //rest of the code logic if condition passes
        while(number > 0){
            //Condition to strip the greatest value from the number possible while number greater than 0
            if (number - values[i] >= 0) {
                //Append the corresponding key in the numerals array to the StringBuilder var
                numeral.append(numeralsMap[i]);
                number-= values[i]; //Subtract the value in index location to decrement the number then loop again
            } else{
                i++; //move to next position in both arrays
            }
            //break out of loop once the calculated value returns < 0
        }
        return numeral.toString();
    }

    // Func 3 -- Given a Roman numeral, find it's Numeral Representation
    // Linear runtime O(n) given the number size, however due to the range set
    public static int romanToInt(String numeral) throws IllegalArgumentException{
        HashMap<Character, Integer> romanDictionary = new HashMap<>();
        //Store values in a dictionary set as there is a defined list of numerals
        //to select from
        romanDictionary.put('I', 1);
        romanDictionary.put('V', 5);
        romanDictionary.put('X', 10);
        romanDictionary.put('L', 50);
        romanDictionary.put('C', 100);
        romanDictionary.put('D', 500);
        romanDictionary.put('M', 1000);

        int sum = 0; //value to return as values added through condition checks

        for (int i = 0; i < numeral.length(); i++){
            //Check conditions due to limitation with numeral position in sequence
            if(numeral.charAt(i) == 'V' || numeral.charAt(i) == 'X'){
                if(i > 0 && numeral.charAt(i-1) == 'I') sum -=2;
            }
            if(numeral.charAt(i) == 'L' || numeral.charAt(i) == 'C'){
                if(i > 0 && numeral.charAt(i-1) == 'X') sum -=20;
            }
            if(numeral.charAt(i) == 'D' || numeral.charAt(i) == 'M'){
                if(i > 0 && numeral.charAt(i-1) == 'C') sum -=200;
            }
            //Assign value at index pos into sum
            sum += romanDictionary.get(numeral.charAt(i));
        }
        return sum;
    }
}