//a = b * 2 + foo(c * 3);

/**
 * Finding expressions
 */
a = b * 2 + foo(c * 3);

/**
 * Execute left to right
 * Mathematics operations like * and / runs first
 * All of this is called expression statement
 */
[([a] = [[[b] * [2]] + [[foo]([[c] * [3]])]])];

/**
 * If I want to run some expression before other
 * we need to set a parenthesis
 */
a = b * (2 + foo(c * 3));

/**
 * To make the code more readable and to intrinsicaly
 * show what he does, it's a good thing to be explicity
 *
 * We know that b * 2 run first, but we want to ensure
 * that who was reading think like us.
 */
a = b * 2 + foo(c * 3);
/**
 * So we put a parenthesis to show what we intent
 */
//a = (b * 2) + foo(c * 3);
