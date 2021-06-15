package IntroDataStructs;

public class BasicSearchAlgorithms {

    public static void main(String[] args) {

        int numbers[] = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
        System.out.println(verify(linearSearch(numbers, 10)));
    }

    //Check if returned value is within bounds
    static String verify(int result) {
        if (result == 0 || result == -1) {
            return "Target not found in list";
        } else {
            return "Target found at index: " + result;
        }
    }
    
    
    //Basic linear search - linear Runtime complexity of O(n)
    static int linearSearch(int[] list, int target) {
        for (int i = 0; i < list.length; i++) {
            if (list[i] == target) {
                return i;
            }
        }
        return -1;
    }

    //Iterative Binary Search - logarithmic runtime complexity O(log n) time and 
    //constant space O(1) due to halving original list
    static int binarySearch(int[] list, int target) {
        //declare upper and lower bounds and not tamper with original list
        int first = 0;
        int last = list.length - 1;

        while (first <= last) {
            int mid = (first + last) / 2;
            if (list[mid] == target) {
                return mid;
            } else if (list[mid] < target) {
                first = mid + 1;
            } else {
                last = mid - 1;
            }
        }
        return 0;
    }

    //Recursive Binary search - logarithmic runtime O(log n) time
    //Also has a logarithmic O(log n) space time, since a new list is created and returned through the recursive function
    static int recursiveSearch(int[] list, int start, int end, int target) {
        if (end >= start && start < list.length - 1) {
            int mid = start + (end - start) / 2; //base case assignment of midpoint
            if (list[mid] == target) {
                return mid; //best case
            }
            //Set the end of list to a new midpoint
            if (list[mid] > target) {
                return recursiveSearch(list, start, mid - 1, target);
            }
            //Target is at the upper bound of list so set start to new midpoint
            return recursiveSearch(list, mid + 1, end, target);
        }
        return -1;
    }

}
