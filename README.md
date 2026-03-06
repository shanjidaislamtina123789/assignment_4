1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Ans:-> getElementById:Find one element with a specific id.

getElementsByClassName:Find all elements with class name.

querySelector:Find the first element that matches CSS selectors(like div,p,#id,.class)

querySelectorAll:Find all elements that match CSS selector

2. How do you create and insert a new element into the DOM?

Ans:->
let new_dom = document.createElement("section");

new_dom.textContent = "Hello World";

document.body.appendChild(new_dom);

3. What is Event Bubbling? And how does it work?

Ans:->Event bubbling means when you click on a child element, the event travels upward through its parent elements until it reaches the root.

Example from my javascript:

document.getElementById("jobs-container").addEventListener("click", function(event) {
  const clickedElement = event.target;
  
});
When you click on a child element (like the INTERVIEW button, REJECTED button, or the delete icon), the event first fires on that child.
Then, because of event bubbling, the event travels upward to the parent(#jobs-container).
Since the parent has a listener, it catches the event and checks which child triggered it using event.target.



4. What is Event Delegation in JavaScript? Why is it useful?

Ans:->Event delegation means putting separate event listeners on every child element and I put one listener on the parent.
It is useful because when an event happens on a child,it travels to the parent and the parent checks which child triggered it and responds accordingly.

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans:->
preventDefault(): Stop browser’s default action.

stopPropagation() → Stop the event from traveling up to parent elements.







