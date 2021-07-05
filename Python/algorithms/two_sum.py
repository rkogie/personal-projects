"""
@DOCSTRING
Two sum problem that finds returns two index pos that add up to target.
Implementation can use:

    1. Brute force approach via two for loops - returns O(n^2) time space as you'd
    have to run two nested loops for index pos i and j

    2. Loop through array once and store the complement of target in a dictionary
    (complement = target - value at index i)
    returns linear time O(n) as the loop will search through the entire array to find the complement if worst
    case is the complement is the last element of array

"""

def check_empty_array(general_list):
    """
              :type general_list: List[obj]
              :rtype: List[obj]
              """
    if len(general_list) == 0:
        raise ValueError("Empty array found")
    else:
        return general_list


class TwoSumProblem:
    def two_sum(self, nums_list, target):
        """
              :type nums_list: List[int]
              :type target: int
              :rtype: List[int]
              """
        number_storage = {}  # declare hash table
        check_empty_array(nums_list) # check if null in separate function


        for i in range(len(nums_list)):
            complement = target - nums_list[i]  # find the complement that adds to target for each value in list
            if complement in number_storage:
                return [number_storage[complement], i]  # if complement found, return the index positions as list
            else:
                number_storage[nums_list[i]] = i  # store key values in the dictionary
        raise Exception("No match found")


def run_two_sum():
    return TwoSumProblem()


def main():
    case = run_two_sum()
    input_list = [3, 6, 7, 12, 7, 25, 8, 9, 11, 3, 9]
    empty_list = []
    try:
        print(case.two_sum(input_list, 14))  # case test passed
        print(case.two_sum(empty_list, 23))  # case test passed
        print(case.two_sum(input_list, 450))  # case test passed
    except ValueError as ve:
        print(ve)
    except Exception as e:
        print(e)

main()  # run