# Pathfinding Visualizer

## Overview
This program uses pathfinding algorithms/searches to find the end node from the starting node and visualizes the process it takes along with the result. The grid can be populated with a starting node, end node, wall node, or a weight node. The wall node prevents the algorithms from going through the cell in the grid. Meanwhile, the weight node only affects the weighted algorithms such as the Dijkstra algorithm. The weight will make the cell be considered heavier (or longer route) and will calculate the shortest path accordingly.  

<!-- PROJECT LOGO -->
<br />
<p align="center">
  <a href="https://alejandro-vega.github.io/Pathfinding-Visualizer/" target="_blank">
    <img src="/images/logo.png" alt="Logo" width="80" height="80">
  </a>

  <h3 align="center">Pathfinding Visualizer</h3>

  <p align="center">
    An awesome pathfinding visualizer!
    <br />
    <a href="https://alejandro-vega.github.io/Pathfinding-Visualizer/">View Demo</a>
    ·
    <a href="https://github.com/Alejandro-Vega/Pathfinding-Visualizer/issues">Report Bug</a>
    ·
    <a href="https://github.com/Alejandro-Vega/Pathfinding-Visualizer/issues">Request Feature</a>
  </p>
</p>



<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgements">Acknowledgements</a></li>
  </ol>
</details>

  
<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](/images/example-dijkstra-1.gif)

It can sometimes be difficult to tell the difference between the innumerable amount of 
pathfinding algorithms and searches that are available. It is much easier to grasp the 
differences by looking at the path the algorithm is taking and identify the patterns that 
way. 

Here's why I felt it needed to be created:
* I wanted to explore different pathfinding algorithms and how to implement them
* Show visually what I implemented and make it look pleasing to the eye  
* Helpful for students to see what the process and result for such a problem will look like
* Easy to use interface, and friendly towards users who know nothing about the subject

Although, there is more than one way to implement the various algorithms, I followed pseudo code from various sites that described how the algorithm should be implemented.

A list of commonly used resources that I find helpful are listed in the acknowledgements.

### Built With

I used pure JavaScript for the implementation of the algorithms.

* [HTML]
* [CSS]
* [JavaScript]


<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Clone the repo
   ```sh
   git clone gh repo clone Alejandro-Vega/Pathfinding-Visualizer
   ```
2. Install NPM packages
   ```sh
   npm install
   ```




<!-- USAGE EXAMPLES -->
## Usage

To place a node left click, and to delete a node right click. Click and hold only works with wall and weight nodes.

To use the program you have the following requirements:
* Add a start node somewhere in the grid
* Add an end node somewhere in the grid
* Make a possible path from the start node to the end node
* Select an algorithm to run

Optional features:
* Insert wall nodes to block the path of the algorithm
* Inset weight nodes to increase the weight value of the node


Once you click the "SEARCH" button it will begin the algorithm search. If the end node is found then it will create a yellow path from the start node to the end node. NOTE: Some search algorithms such as Depth-First Search do NOT show the shortest path.

[![Cubic Spline Interpolation Visualizer][input-example-screenshot]](/images/example-dijkstra-1.png)

The program uses CSS animation to visualize the algorithms. The animation may stutter or not function properly if the computer running the program is unable to smoothly handle it. Although, it is expected that the more cells that are considered into the algorithm the more computation power and time will be needed to calculate the results. Delay may vary depending on the computation.

<p>
  <img src="public/images/example-result1.png" width="60%" alt="Example result">
</p>
<p>
  <img src="public/images/example-step1.png" width="60%" alt="Example step 1">
</p>
<p>
  <img src="public/images/example-step3.png" width="60%" alt="Example step 3">
</p>
<p>
  <img src="public/images/example-step4.png" width="60%" alt="Example step 4">
</p>
<p>
  <img src="public/images/example-step5.png" width="60%" alt="Example step 5">
</p>
<p>
  <img src="public/images/example-step6.png" width="60%" alt="Example step 6">
</p>


<!-- CONTRIBUTING -->
## Contributing

Currently not allowing for contributions from other people. Although, if you find an issue with the program feel free to open an issue request.



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Alejandro Vega - [LinkedIn](https://www.linkedin.com/in/alejandro--vega/) - AlejandroVega@alejandrovega.dev

Project Link: [https://github.com/Alejandro-Vega/Cubic-Spline-Interpolation-Visualizer](https://github.com/Alejandro-Vega/Cubic-Spline-Interpolation-Visualizer)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Hover.css](https://github.com/IanLunn/Hover/blob/master/README.md#hovercss)






<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=for-the-badge
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=for-the-badge
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=for-the-badge
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=for-the-badge
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=for-the-badge
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: /images/example-dijkstra-1.gif
[input-example-screenshot]: /images/example-dijkstra-1.png
[result-example-screenshot]: /images/example-result1.png
[step1-example-screenshot]: /images/example-step1.png
[step2-example-screenshot]: /images/example-step2.png
[step3-example-screenshot]: /images/example-step3.png
[step4-example-screenshot]: /images/example-step4.png
[step5-example-screenshot]: /images/example-step5.png
[step6-example-screenshot]: /images/example-step6.png