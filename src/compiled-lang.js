/**
 *
 * Javascript is more a compiled language
 * than interpreted language
 *
 * BUT
 *
 * But in a Nutshell it was an interpreted language
 * because he reads line by line and if he was in the line
 * 3 he doesn't know what is on line 4
 * In compiled languages the language understands all the 4 lines
 * first before runs the first line.
 *
 * An example about that is
 * if you ran
 * a = 2;
 * It will pass
 *
 * But when he runs the:
 * 2();
 * It will broke and says oh 2 is not a function
 *
 * So it's more than run the code in a sequence or
 * compile to zeros and one
 *
 * What really matters is that Javascript get compiled for error checking
 * So we need to think more about that Javascript is a compiled language
 *
 *
 * Javascript has both error checking in runtime and compiled time.
 * Compile:
 * When Javascript detects an invalid syntax, so he says you did something wrong
 *
 * Runtime:
 * Javascript throws error in a correct syntax but the
 * user tried to do something invalid like to assign a value to something that was read-only
 *
 * When we run
 * a = 2;
 * and after that we run
 * a();
 * So the Javascript will throw an error saying
 * that a is not a function, but only after he knows what is "a"
 * and passed from it.
 */
