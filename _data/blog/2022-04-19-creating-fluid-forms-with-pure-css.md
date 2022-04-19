---
template: BlogPost
path: /fluid-forms-with-pure-css
type: blog
date: 2022-04-19T16:07:48.825Z
title: Creating Fluid Forms with Pure CSS
metaDescription: >-
  Creating attractive form controls can be a daunting task for new front-end
  developers. With an abundance of edge cases, CSS selectors and modifiers,
  elements and their form-specific attributes, it can be a lot to wrap your mind
  around. This blog post will cover creating engaging form elements with pure
  HTML and CSS.
thumbnail: /assets/fluid-css-forms.jpg
---


For this tutorial, we'll be creating re-usable form elements with clean, stateful CSS animations. All of the animations created in this tutorial will be done without the use of JavaScript or third-party libraries.

## The Setup

First things first, you'll need to set your content up for the form element we'll be creating. Our element will be a simple form control for a textbox, which contains a label and text input. To start, we'll create our form control. Within our form element:

```html
<div class="control">
  <input class="control_input" type="text" name="uname" id="name" autocomplete="off" placeholder=" " />
  <label class="control_label" for="name">Name</label>
</div>
```

This will be the structure of our control element. Without styling, you may notice that the browser renders the label after the input since we have them placed that way in the markup. This is intentional, we want our text to appear above the input, and having the control structured this way makes the styling portion easier.

> The main attributes we are worried about are `class`, `type`, `id`, `autocomplete`, and `placeholder`. The `name` attribute will have to be changed to fit your applications needs.

## The Styling

With the HTML structured correctly, it's time for us to move onto styling. In your stylesheet:

```css
.control {
  position: relative;
  width: 100%;
  margin: 10px auto;
}

.control_label {
  font-weight: 600;
  text-align: right;
  text-transform: uppercase;
  cursor: text;
  padding: 0 5px 0;
  position: absolute;
  left: 5px;
  top: 11px;
  transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;
  background-color: #fdd898;
}

.control_input {
  height: 35px;
  width: 100%;
  border: 3px solid black;
  border-radius: 5px;
  margin: 5px auto;
  padding: 0 5px;
  background-color: #fdd898;
}
```

> One important note before moving forward: the `background-color` for the `.control_label` and `.control_input` will change depending on your application's background. This is the one caveat of this approach: your controls background will have to match the background of the form element behind it in order for the effect to work.

Let's walk back through what we've done here:

1. Defined our parent `.control` element to have relative positioning and 100% width with auto side margins. The positioning allows the label to juxtapose over the field, while the margin centers the field in the container.
2. Applied `position: absolute;` and `left: 5px; top: 11px;` to the `.control_label`. This places the label on top of the input. Apply `transition: top 200ms ease-in, left 200ms ease-in, font-size 200ms ease-in;` to setup animations for the various rules. The rest of the rules here are just general styling for my use case.

We're off to a good start, but we need to add the CSS modifiers for the input state so that we can animate the labels in and out. After our `.control_input`, add:

```css
.control_input:focus ~ label,
.control_input:not(:placeholder-shown).control_input:not(:focus) ~ label {
  top: -0.2rem;
  left: 0.2rem;
  font-size: 0.85rem;
}
```

What this rule does is trigger the animation set on the label elements once the `.control_input` is in focus or there is text entered into the input. Thanks to the `placeholder=" "` on our `.control_input` from earlier, we can animate the label away from the input depending on if the user has entered text or not. All put together, our application should look similar to the one shown at [this portfolio of mine](https://wcet.waketech.edu/ccsweeney/WEB287/final/contact.html).
