/* 
Task
You need to return a string that looks like a diamond shape when printed on the 
screen, using asterisk (*) characters. Trailing spaces should be removed, and 
every line must be terminated with a newline character (\n).

Return null/nil/None/... if the input is an even number or negative, as it is 
not possible to print a diamond of even or negative size.

Examples
A size 3 diamond:

 *
***
 *
...which would appear as a string of " *\n***\n *\n"

A size 5 diamond:

  *
 ***
*****
 ***
  *
...that is:

"  *\n ***\n*****\n ***\n  *\n"
*/

function diamond(n) {
  if (n < 0 || n % 2 == 0) return null;

  let half = [];

  for (let i = 0; i < (n - 1) / 2; i++) {
    half.push(" ".repeat((n - 1) / 2 - i) + "*".repeat(i * 2 + 1) + "\n");
  }

  return [...half, "*".repeat(n) + "\n", ...half.reverse()].join("");
}

function diamond(n) {
  if (n < 0 || n % 2 == 0) return null;

  let diamond = "";

  for (let i = 0; i < n; i++) {
    let spaces = Math.abs((n - 2 * i - 1) / 2);
    let stars = n - 2 * spaces;
    diamond += " ".repeat(spaces) + "*".repeat(stars) + "\n";
  }

  return diamond;
}
