const askQuestion = require('./async_func/askquestion')

async function main() {
    const name = await askQuestion('What is your name? ')
    const occupation = await askQuestion('What is your occupation? ')
    const age = await askQuestion('What is your age? ')

    console.log(`Hello ${name}. You are ${age} years old and 
    current work as a ${occupation}`)
}
main()