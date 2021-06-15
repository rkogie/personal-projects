# source URL : https://www.youtube.com/watch?v=C-gEQdGVXbk
"""
1. Shorthand if checks"""
def if_check_shorthand():
    condition = True
    x = 1 if condition else 0
    print(x)

    # instead of
    other_condition = True
    if condition:
        x = 1
    else:
        x = 0

"""
2. Readable Large Numbers"""
def read_large_numbs():
    num1 = 1000000000
    # Add underscores as separators to improve readability
    num_readable = 1_000_000_000
    total = num1 + num_readable
    print(f'Your total is: {total:,}')


"""
3. Using Context Managers to manage operations for you
    with the 'with' operator. Can be used for anything - 
    managing threads, database connections, acquiring/release locks
"""
def context_manager_example():
    try:
        with open('test.txt', 'r') as f:
            file_contents = f.read()
            words = file_contents.split(' ')
            word_count = len(words)
            print(word_count)
    except (FileNotFoundError, IOError):
        print("File Doesn't Exist")


"""
4. Use enumerate when using a counter function"""
def loop_with_enum_and_zip():
    names = ['Horatio', 'Datargnan', 'Boromir', 'Sauraman']
    for index, name in enumerate(names):
        print(index, name)

    """
    4.5. Use zip func to loop over two lists concurrently"""
    names = ['Horatio', 'Datargnan', 'Boromir', 'Sauraman']
    characters = ['Rasputin', 'Dimitri', 'Anastasia', 'Eowyn']
    worlds = ['Omicron Persei 8', 'Galgamesh', 'Newfoundland', 'Skrull Planet']
    for name, character, world in zip(names, characters, worlds):
        print(f'{name} is friends with {character} and live in {world}')


"""
5. Unpack Values"""
def unpack_values():
    a, b, *_ = (1, 2, 3, 4, 5) # special underscore chars omit values from tuple list
    print(a)
    print(b)

"""
5. Getting and set instances (objects) of class"""
def get_set_attributes():
    class Person:
        pass # keyword for placeholder for future code
    person = Person()
    person_info = {'first': 'Anna', 'last': 'Kogie'} # declare list
    for key, value in person_info.items():
        setattr(person, key, value) # loop through and assign keys to each val using setter
    print(f'Hello, my daughter {person.first} {person.last} will be born in July 2021')

    for key in person_info.keys():
        print(getattr(person, key))

"""
5. Storing variables """
from getpass import getpass

