#include <iostream>
#include <fstream>
#include <vector>
#include <string>
#include <ctime>
#include <limits>

using std::ofstream;
using std::ifstream;
using std::vector;
using std::cout;
using std::cin;
using std::string;
using std::endl;
using std::boolalpha;


bool is_unique(string s)
{
	if (s.length() > 128) //hardcoded value because the ascii library never exceeds 128 unique characters - so the sentence would have duplicates
	{
		return false;
	}

	bool ascii_check[128] = { false };
	for (int i = 0; i < s.length(); i++)
	{
		int ascii_num = s[i]; // identifies strings as arrays and can find position of letter
		if (ascii_check[ascii_num]) // if value is already within string through the loop
		{
			return false;
		}
		ascii_check[ascii_num] = true;
	}
	return true;
}

int main()
{
	cout << boolalpha << is_unique("abcdefgh") << endl;
	cout << boolalpha << is_unique("abcdefggh");
}
//void save_score(int guess_count)
//{
//	ifstream input("best_score.txt");
//
//	if (!input.is_open())
//	{
//		cout << "Unable to read file\n";
//		return;
//	}
//
//	int best_score;
//	input >> best_score;
//	ofstream output("best_score.txt");
//
//	if (!output.is_open())
//	{
//		cout << "Unable to read file\n";
//		return;
//	}
//	if (guess_count < best_score)
//	{
//		output << guess_count;
//	}
//	else
//	{
//		output << best_score;
//	}
//}
//
//void print_vector(vector<int>array)
//{
//	for (int number : array)
//	{
//		cout << number << "\t";
//	}
//	cout << "\n";
//}
//
//void play_game()
//{
//	vector<int>guesses;
//	int count = 0;
//
//	int random = rand() % 251;
//	cout << random << endl;
//	cout << "Guess a number: ";
//
//	while (true)
//	{
//		int guess;
//		cin >> guess;
//		count++;
//
//		guesses.push_back(guess);
//
//		if (guess == random) 
//		{
//			cout << "You Guessed Correct, well done!" << endl;
//			break;
//		} 
//		else if (guess < random)
//		{
//			cout << "Too Low" << endl;
//		}
//		else
//		{
//			cout << "Too High" << endl;
//		}
//	}
//
//	save_score(count);
//	print_vector(guesses);
//}
//
//
//int main()
//{
//	srand(time(NULL));
//	int selection;
//	do
//	{
//		cout << "0.Quit" << endl << "1.Play Game\n";
//		cin >> selection;
//
//		switch (selection)
//		{
//		case 0:
//			cout << "Game Ended!";
//			return 0;
//		case 1:
//			play_game();
//			break;
//		}
//	}
//	while(selection != 0);
//}
