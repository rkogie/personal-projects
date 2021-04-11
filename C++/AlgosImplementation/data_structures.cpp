#include <iostream>

//Fizz Buzz Algorithm
void fizz_buzz(int first, int last) {
	for (int i = first; i < last; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			std::cout << "Fizz Buzz" << i;
		}
		else if (i % 3 == 0) {
			std::cout << "Fizz" << i;
		}
		else if (i % 5 == 0) {
			std::cout << "Buzz" << i;
		}
	}
}

/*int main() {
	try {
		fizz_buzz(20, 65);
	}
	catch (...) {
		std::cout << "An error occured";
	}
	return 0;
}*/