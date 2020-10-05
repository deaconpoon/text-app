https://elastic-mahavira-834e4e.netlify.app

# 📝 Textify is a web-based, free-text note organizer

![Textify Demo](public/textify-demo.gif)

## ✅ Features

- Create, edit, and delete multiple multi-line, free text notes.
- Categorization with task priority
- Allow note priority and sort order to be changed by dragging them from group to group.
- Add the ability to do a “live” search through notes by their content.
- State persistence with cookies
- Simple and clean responsive layout

## 🤖 Under the hood

- Built with Typescript and Sass for styling
- Framer motion for dragging animation

## 😠 Challenges

- First time implementing Typescript. Steep learning curve at first but types checking with VS Code intellisense becomes useful to ensure the application is robust and stable
- TextNode local states change e.g. editing content causes the application to re-render which produces input focus lost when typing bug. I solved the problem by setting the input focus after every key strokes but it is not an ideal solution.

## 💪🏼 Improvement

- Implement global state management tools such as Context API or Redux to ensure state immutability
- Given no time constrain, I will implement categories sorting button and tags
- Utilize Typescript utility types to more flexibility
- Testing with jest

## 🚀 To start

`npm start`
