# _Mr. Roboger's Neighborhood_

#### _An application to count up to a user inputted number_

#### By _**Mikah Mathews - April 3, 2020**_

## Description

_An exercise using arrays and looping to take a user inputted number, then count up to that number while making exceptions for 1, 2, and 3._

## Setup/Installation Requirements

* Clone this repository.
* Navigate to index.html file through your file interface.
* Right click and open in the browser of your choice.

* Alternatively, open the webpage at https://mikah-mathews.github.io/mr-robogers-neighborhood/

## Known Bugs

No known bugs at this time.

## Support and contact details

If you have any suggestions or questions please email me at mikah@outofband.org

## Technologies Used

HTML
CSS
Git and GitHub
JavaScript
Bootstrap
jQuery

## Specs
Spec: returns range of numbers from 0 to the inputted number
* Input: 4
* Output: "0", "1", "2", "3", "4"

Spec: 1 will be replaced with "Beep"
* Input: 4
* Output: "0", "Beep", "2", "3", "4"

Spec: 2 will be replaced with "Boop"
* Input: 4
* Output: "0", "Beep", "Boop", "3", "4"

Spec: 3 will be replaced with "Won't you be my neighbor?"
* Input: 4
* Output: "0", "Beep", "Boop", "Won't you be my neighbor?", "4"

Spec: 3 protocol will override both 2 and 1, 2 protocol will override 1, 1 will not override anything
* Input: 19
  > Output: ... "Beep"
* Input: 20
  > Output: ... "Beep", "Boop"
* Input: 21
  > Output: ... "Beep", "Boop", "Boop"
* Input: 23
  > Output: ... "Beep", "Boop", "Boop", "Boop", "Won't you be my neighbor?"


### License

This software is licensed under the MIT license.

Copyright (c) 2020 **_Mikah Mathews_**
