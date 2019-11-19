# Kanban Board Code Challenge

This simple Kanban board was built in just under 25 minutes as part of a video screen coding challenge.  Unfortunately for ethical reasons I cannot share the name of the company or the exact specifications, but the functionality is exactly as described and the styling is a pixel perfect match of the provided wireframes.

For the exercise there are some hard coded values and some missing functionalities that could be added to make a more fully featured product.  I may return in the future to add things like creating / destroying / renaming columns, deleting cards, etc. 

Currently though the only modification I have made since finishing the interview was adding the gh-pages package to publish a live example.

## Functionality
There are four columns prepopulated with two cards each.  Columns each take 1/4 the full browser width minus consistent 25 pixel margins and gaps between columns.

The cards can be moved from column to column, and the edge column cards have only the relevant directional buttons and cannot be moved out of bounds.  Custom cards can be added to any column via browser window prompt. The app state is saved in local storage to persist in event of a page refresh.  