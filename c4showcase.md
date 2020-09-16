My Connect 4 project for Ruby:

Repo: https://github.com/ChargrilledChook/connect4
Live: https://repl.it/@HappyFrog/connect4

Reasonably happy with this one, the design isn't perfect but I feel it's a pretty big improvement across the board compared to previous projects. Methods and classes are generally shorter, variables are more descriptively named and the overall structure is easier to follow. Things are generally more modular and changeable. The UI / UX is reasonably minimal but would be easy to update and improve.

The main design challenge was finding a way to test wins on diagonal lines, which was complicated by the uneven shape of the board. I ended up going with lines mapped to constants, with the positive that it was a reasonably easy implementation, and the downside that this particular iteration of the game is locked to this specific board size.

Writing tests was both really satisfying and quite frustrating. I was fairly disciplined with doing a TDD approach for the first half of the project, especially with unit tests for methods like testing wins etc but found myself fairly unsure how and what to test for more system level / integration style testing. The parts that I wrote tests for first ended up being much more stable and well designed than the parts I wrote tests for afterwards.

Despite TOP mostly pushing us towards RSpec so far, I decided to give minitest a try for this project. I found writing tests in pure ruby as opposed to a DSL helped me focus on the concepts of testing rather than wrestling with learning a new set of syntax as well. I particularly liked using minitest for unit tests. However, I found stubbing and mocking to be less than straightforward and general community support and documentation was at times a bit lacking compared to Rspec. Overall a good experiment and probably worthwhile as it's the number 2 testing framework.

Thanks to the help and input of all the peeps in the Ruby channels as always. Any and all feedback appreciated!
