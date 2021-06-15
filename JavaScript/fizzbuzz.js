function fizz_buzzing(start, end) {
    if (start == null || end == null || start <= 0 || end <= 0) return
    for (var i = start; i < end; i++) {
        //Implementation of guard clauses to clean up and increase user readability 
        //Implementation of fizz buzz 
        if (i % 3 == 0 && i % 5 == 0) console.log(`Fizz Buzz - ${i}`);
        else if (i % 3 == 0) console.log(`Fizz - ${i}`);
        else if (i % 5 == 0) console.log(`Buzz - ${i}`);
    }
}

fizz_buzzing(1, 100);
fizz_buzzing(-1, 50);
fizz_buzzing(-52, -100);
fizz_buzzing('string', 'another_string')