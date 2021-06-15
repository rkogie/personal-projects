def longest_palindrome(s):
    """
    Function takes string, searches through each letter in main list, and checks against every other substring in main string if it
    can be read forward and backwards
    Brute force approach == n * n^2 gives a cubic runtime Big O(n^3)
    Optimal approach == for each letter in main string, declare as the center of the palindrome and breach outwards to find identical letters
    outside of center == gives a quadratic run time Big O(n^2)
    """

    res_l, res_r = 0, 0
    result_len = 0

    for i in range(len(s)):
        # odd length - edge cases
        left, right = i, i
        # while a palindrome
        while left >= 0 and right < len(s) and s[left] == s[right]:
            if (right - left + 1) > result_len:  # if palindrome is the biggest encountered
                res_l = left
                res_r = right+1
                result_len = right - left + 1
            left -= 1  # shift left by 1 position left
            right += 1  # shift right by 1 position right

        # even length
        left, right = i, i + 1
        # while a palindrome
        while left >= 0 and right < len(s) and s[left] == s[right]:
            if (right - left + 1) > result_len:  # if palindrome is the biggest encountered
                res_l = left
                res_r = right+1
                result_len = right - left + 1
            left -= 1  # shift left by 1 position left
            right += 1  # shift right by 1 position right

    return s[res_l:res_r]


test_case = "forgeeksskeegfor"
print(longest_palindrome(test_case))
