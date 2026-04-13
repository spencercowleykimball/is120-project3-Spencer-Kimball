# is120-project3-Spencer-Kimball

## Project 3

Create a Supabase CRUD application related to a topic that you are interested in. This may be added as a new feature to Project 2, or can be created as a completely new project. Some ideas: movie watchlist, recent books, workout log, bucket list, expense tracker, etc.

- Your table should include 5 total columns (this may include `id` and `created_at`)
- You must include the following CRUD operations
  - Create a new row
  - Read all rows
  - Update row by ID
  - Delete row by ID
- To ensure data accuracy on load and after every operation, you should call your read all operation and refresh elements on the DOM
- You may display each row element however you would like (table, cards, etc.)
- Include styling to make this project look clean, professional, and user friendly

If you're struggling to find how to implement CRUD operations using HTML, here are some suggestions

- You shouldn't need any elements for a read operation. This will trigger automatically on load and after other CRUD operations
- To create elements, use a group input tags (one for each column) with a save button to trigger the create function
- For updating and deleting, include buttons on each element that edit or delete that specific row
- Updating is the most complex operation to implement. The edit buttons on each element should populate the existing input tags with that row's data. The save button should then trigger the update function when clicked. You can handle this change from save being create to update by storing the current row's ID in a variable when the edit button is clicked, and checking if that variable is set when clicking save.

In your `README.md`, include 

**A brief description of your project and what you learned while building it**


**What was difficult about this project and what did you learn about Supabase and creating a CRUD application?**
I was struggling with editing multiple columns at a time, but I had forgotten that you needed to pass in the information as a dictionary in order to make the change.
Instead I had been trying to do a full line to edit the table for each column instead of doing it all in one edit line. As I was coding it the incorrect way it did feel like I was forgetting something because it felt weird to then have an "error" variable for each column. It didn't seem very scalable. 
I kept losing information in the supabase table, but it kept updating and editing the first column's information just fine. That was when I realized I needed to pass everything into the first line of code.

**Is there anything you would like to add or change for your Project 3 in the future?**

Submit this project as a GitHub repo named `is120-project3-firstname-lastname`.

Publish using GitHub pages and include the live URL in your repo about section. Submit the GitHub repo URL in LearningSuite.
