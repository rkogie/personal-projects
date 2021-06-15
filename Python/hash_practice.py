# hash function to convert string into index (using ASCII)
class HashTable:
    def __init__(self):
        self.SIZE = 100
        self.hash = [None for i in range(self.SIZE)]

    def get_hash(self, key):
        h = 0  # declared var to sum unicode characters
        for char in key:
            # return unicode int representation and assigns into h
            h += ord(char)
        return h % self.SIZE


# H = HashTable()
# print(H.get_hash('Cindy'))  # returns integer index


# Leetcode prep
# -------------------------
# reverse a string & reverses string with words in place
def reverse_string(s):
    try:
        # return s[::-1]  # slice starts at end of string, -1 steps backwards by 1
        # returns word order but reverses chars
        return ' '.join(i[::-1] for i in s.split())
    except TypeError:
        return "There was an error"


print(reverse_string("Hello my name is Reuben"))
