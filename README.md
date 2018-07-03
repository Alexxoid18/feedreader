## Project Overview

This project is a web-based application that reads RSS feeds. It's includes [Jasmine](http://jasmine.github.io/), 4 test suits and 7 specs. 

## Why this Project?

Testing is an important part of the development process and many organizations practice a standard of development known as "test-driven development". This is when developers write tests first, before they ever start developing their application. 


## Detailed description of this project

1. The test that loops through each feed in the `allFeeds` object and ensures it has a URL defined and that the URL is not empty was written.
2. The test that loops through each feed in the `allFeeds` object and ensures it has a name defined and that the name is not empty was written.
3. The new test suite named `"The menu"` was written.
4. The test that ensures the menu element is hidden by default. You'll have to analyze the HTML and the CSS to determine how we're performing the hiding/showing of the menu element was written.
5. The test that ensures the menu changes visibility when the menu icon is clicked. This test should have two expectations: does the menu display when clicked and does it hide when clicked again was written.
6. The test suite named `"Initial Entries"` was written.
7. The test that ensures when the `loadFeed` function is called and completes its work, there is at least a single `.entry` element within the `.feed` container was written.
8. The test suite named `"New Feed Selection"` was written.
9. The test that ensures when a new feed is loaded by the `loadFeed` function that the content actually changes was written.
10. All of these tests are passing. 

## Contributing

You can contribute to the project by pulling request.
