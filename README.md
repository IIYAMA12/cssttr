
# CSSTTR

## Intro
This website has been build for Marijn. A person which I have never met and the only thing I know about him, is that he seems to be very good programmer. And as he does his job, his motor disability doesn't make his work easier. I am really impressed how he is capable using the shitty websites of today.

When a person is not able to use the mouse, there is always the keyboard as backup. Almost every personal computer has one and even all tab devices do have a keyboard on the screen. If I am going to build something which has to be supported globally(person/device), then that would be the first thing to be fully supported.

After adding the basic support for tab navigation, I noticed that voice-over support can be seen as a required extension of it. Visual disability is a very good the reason to use tab navigation in combination with voice-over.

Build-in support:
* Keyboard navigation
* Voice-over (experimental on Safari)


## Setup
Before you open this website, please setup your machine for the best experience.

## Website
* Open in Safari for the best voice-over support on mac.
* Go to [setup](https://iiyama12.github.io/cssttr/setup) to make use of all features.


[Website](https://iiyama12.github.io/cssttr/styleguide.html)


## Tab navigation support
Each component on the page is reachable with the tab key. When and component has been selected, it will show an orange border around it. This border will also be shown (but dimmed) when a sub-component has been focused down.

#### No focus component
![No focus component](readme_content/noFocusComponent.png)

#### Focus component
![Focus component](readme_content/focusComponent.png)

#### Focus sub component
![Focus sub component](readme_content/focusSubComponent.png)

The `tabindex` attribute will give you the ability to tab through content of choice.

```HTML
    <article tabindex="0">
    </article>
```
[Tabindex](https://developer.mozilla.org/nl/docs/Web/HTML/Global_attributes/tabindex)

* `tab`: Go forwards.
* `tab` + `shift`: Go backwards.

## Responsive
As it is unclear which device the user is going to use, the webpage is responsive for mobile, tablet and mobile.



## Aria label support for voice-over
Using an `aria-label` to improve the default voice-over. This label will be used as a part of the audio output.
```HTML
    <article aria-label="This picture has a title">
    </article>
```
[Aria-label](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-label_attribute)



## Best practices

### Pseudo-class focus-within
The focus-within pseudo-class seems to be very powerful for apply styling to all elements within a specific parent. After using it I noticed that I do have to write 50% less micro-interactions with JavaScript.

```CSS
body:focus-within button {
    /*    ...    */
}
```

### Debug viewport
Debugging of the viewport using the `content` property made it a lot easier to build it with a responsive layout.

```CSS
#debug-viewport:after {
    content: "mobile";
    color: red;
    position: fixed;
    top: 0;
    z-index: 1000;
    font-size: 2rem;
}

@media (min-width: 40rem) and (max-width: 80rem) {
    #debug-viewport:after {
        content: "tablet";
    }
}

@media (min-width: 60em) {
    #debug-viewport:after {
        content: "desktop";
    }
}
```

```HTML
    <p id="debug-viewport"></p>
```

### Attribute selectors
We normally use a lot of classes to style things. But an already existing attribute selector will do the job also just fine. I am not sure what the performance is of an attribute selector. So I might just variate between an `attribute selector` and a `tagName with attribute selector attached to it`. To me a tagName with an attribute selector should be faster in my opinion, but I have yet to find out the truth.

Attribute selector
```CSS
[aria-label="loader"] {
    /*    ...    */
}
```


TagName + attribute selector
```CSS
div[aria-label="loader"] {
    /*    ...    */
}
```

### cubic-bezier / single-transition-timing-function
It really surprised me that css supported custom easing. The `cubic-bezier / single-transition-timing-function` css function can be used to change the two handles which are creating the curve in between an easing. Tools like this [cubic-bezier.com](http://cubic-bezier.com/) will help you customise them exactly how you want. Unfortunately there is no way in adding more points in the easing with this function. You will need to add multiple easing's into one transition, in order to achieve this.

[single-transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/single-transition-timing-function)

```CSS
    /* syntax */
    cubic-bezier(initial-handle-X, initial-handle-Y, final-handle-X, final-handle-Y)

    cubic-bezier(x1, y1, x2, y2)
```

```CSS
    /* Use in animation */
    animation: fly 1s cubic-bezier(0, 0.33, 0.78, 0.27) infinite;
    /*                                                          */
```


### The power of linear-gradient + background-size
Linear-gradient's with background-size can create a sort of patterns.
This example below will start with drawing 50px space on the left side. After that it will draw a 25px coloured line. This pattern will repeat itself, because the repeat css property is enabled by default.

```CSS
    linear-gradient(90deg, #d3d3d3 25px, transparent 0);
    background-size: 50px 100%;
    /*                                                          */
```

![Pattern](readme_content/pattern.png)


### Use of inherit
I didn't use the inherit property since the beginning of this course. It is didn't feel very powerful and handy. But after using it for a while, I noticed that it was useful is some ways I didn't think of.

The `inherit` property forces the element to inherit a property from it's parent. Some elements do this automatic, others do need a little push.

The first use of it, it was a similar piece of code like this:
```HTML
<ul>
    <li><a></a></li>
    <li><a></a></li>
    <li><a></a></li>
</ul>
```

After styling the height of the `li`'s, I also had to set the height of the `a`'s. Which looked like something like this:
```CSS
li, a {
    height: 3rem;
}
a {
    display: block; /* is inline element by default */
}
```

Now I can just inherit it, which is one selector less.

```CSS
li {
    height: 3rem;
}
a {
    display: block; /* is inline element by default */
    height: inherit;
}
```


For fonts it is also nice to use. The `a` tag seems not to inherit the font from a `h1`.
```CSS
h1 {
    font-family: header-font, sans-serif;
}
```

```HTML
<h1><a>This is a link</a></h1>
```

This will fix that:

```CSS
a {
    font-family: inherit;
}
```
