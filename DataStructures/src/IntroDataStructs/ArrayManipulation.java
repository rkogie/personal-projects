package IntroDataStructs;

import java.util.Arrays;

public class ArrayManipulation {

    public static void main(String[] args) {
        int[] array = {1, 5, 8, 9, 11, 13, 15, 19, 21};
        int reversed[] = reverse(array);
        System.out.println(Arrays.toString(reversed));
    }

    // Algorithm to reverse array in place -- takes O(n) time and O(n) space
    //takes O(n) space because two temp variables are created to swap index pos
    static int[] reverse(int[] arr){
        for(int i = 0; i < arr.length /2; i++){ //iterates until the half way point
            int other = arr.length - i - 1; //create var
            int temp = arr[i]; //create temp to swap in place
            arr[i] = arr[other]; //move other to the current index pos
            arr[other] = temp; //move temp into the other pos
        }
        return arr;
    }

}