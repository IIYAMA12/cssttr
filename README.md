
# Components

## setup
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

## Responsive
As it is unclear which device the user is going to use, the webpage is responsive for mobile, tablet and mobile.

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
