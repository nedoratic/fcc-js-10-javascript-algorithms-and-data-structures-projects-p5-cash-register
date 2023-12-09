# fcc-js-10-javascript-algorithms-and-data-structures-projects-p5-cash-register

## JavaScript Algorithms and Data Structures Projects

This is it — time to put your new JavaScript skills to work. These projects are similar to the algorithm scripting challenges you've done before – just much more difficult.

Complete these 5 JavaScript projects to earn the JavaScript Algorithms and Data Structures certification.

[freeCodeCamp](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/)

## Project 2 - Cash Register

Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

<table>
    <tr>
        <td>Currency Unit</td>
        <td>Amount</td>
    </tr>
    <tr>
        <td>Penny</td>
        <td>$0.01 (PENNY)</td>
    </tr>
    <tr>
        <td>Nickel</td>
        <td>$0.05 (NICKEL)</td>
    </tr>
    <tr>
        <td>Dime</td>
        <td>$0.1 (DIME)</td>
    </tr>
    <tr>
        <td>Quarter</td>
        <td>$0.25 (QUARTER)</td>
    </tr>
    <tr>
        <td>Dollar</td>
        <td>$1 (ONE)</td>
    </tr>
    <tr>
        <td>Five Dollars</td>
        <td>$5 (FIVE)</td>
    </tr>
    <tr>
        <td>Ten Dollars</td>
        <td>$10 (TEN)</td>
    </tr>
    <tr>
        <td>Twenty Dollars</td>
        <td>$20 (TWENTY)</td>
    </tr>
    <tr>
        <td>One-hundred Dollars</td>
        <td>$100 (ONE HUNDRED)</td>
    </tr>
</table>

See below for an example of a cash-in-drawer array:

    [
        ["PENNY", 1.01],
        ["NICKEL", 2.05],
        ["DIME", 3.1],
        ["QUARTER", 4.25],
        ["ONE", 90],
        ["FIVE", 55],
        ["TEN", 20],
        ["TWENTY", 60],
        ["ONE HUNDRED", 100]
    ]

## Tools and Tech:

CLI, Terminal, Zsh, VS Code, Git, GitHub, HTML, CSS, JS

## Approach and Methodology

Responsive Web Design, BEM (Block Element Modifier)
