package FourteenDesignPatters;

import java.util.*;

public class TwoSum {

    public static void main(String[] args) {
        //Function that returns index positions of values that add up to a specified target
        try{
            twoSumDriver();
        }catch(Exception e){
            System.out.println(e.getLocalizedMessage());
        }
    }

    //Implementation algorithm for O(n) time and O(n) space - utilizing hashtable
    //Brute force approach using nested for loops (i, j) would result in O(n^2) which would not scale
    //Store values in a HashTable and just perform look up if the complement exists
    public static int[] twoSum(int[] numArray, int target) throws IllegalArgumentException{
        Map<Integer, Integer> numMap = new HashMap<>();

        //Validation for empty arrays
        if (numArray.length == 0) throw new IllegalArgumentException("Array cannot be empty");

        for(int i=0; i < numArray.length; i++){
            //Calculate the remaining value to be located that adds up to target
            int complement = target - numArray[i];

            if(numMap.containsKey(complement)){
                //Returns indices pair that == target
                return new int[] {numMap.get(complement), i};
            }
            numMap.put(numArray[i],i);
        }
        //Capture case for no found pairs that sum to target
        throw new IllegalArgumentException("No match found");
    }

    //Driver program for test cases
    public static void twoSumDriver(){
        //Test cases - limitations (doesn't catch certain cases - multiple pairs that add up to the same target.
        //Edge case example: target = 18  should return indices for these two value sums : 6+12 and 9+9
        int[] numArray = new int[]{3,6,7,12,7,25,8,9,11,3,9};
        int[] emptyArray = {};
        System.out.print(Arrays.toString(twoSum(numArray, 200)));
        System.out.print(Arrays.toString(twoSum(emptyArray, 30)));
    }

}
