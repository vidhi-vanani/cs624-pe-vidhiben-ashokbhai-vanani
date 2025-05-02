## Todos App

## Input
The insert text field where the user types out a new to-do title serves as the input to this to-do app. This piece of text input is stored in the app's state and submitted with a corresponding "Submit" button. With an empty input field, no new to-do will be added.

## Process
To-do entries are added to the app's state and their completion state is added. The user may filter displayed to-dos by choosing one of the tabs: All, Completed or Incomplete. Each todo has two buttons done, toggling its completion status and delete, removing it. Clicking on any of these buttons causes the app to update the state and the UI.

## Output
The output would be a dynamic to-do list based on user-selected filters. It shows all the todos, completed todos only, or todos that need to be undertaken, depending on the filter selected. The user would manipulate the todos to change their different statuses or delete them.