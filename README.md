# is120-project3-Spencer-Kimball

## Project 3

**A brief description of your project and what you learned while building it**

My project is a reading list that connects to my supabase table. The user can edit and delete the books already on the list as well as adding new books to the list. 

**What was difficult about this project and what did you learn about Supabase and creating a CRUD application?**
I was struggling with editing multiple columns at a time, but I had forgotten that you needed to pass in the information as a dictionary in order to make the change.
Instead I had been trying to do a full line to edit the table for each column instead of doing it all in one edit line. As I was coding it the incorrect way it did feel like I was forgetting something because it felt weird to then have an "error" variable for each column. It didn't seem very scalable. 
I kept losing information in the supabase table, but it kept updating and editing the first column's information just fine. That was when I realized I needed to pass everything into the first line of code.

**Is there anything you would like to add or change for your Project 3 in the future?**

I would like to add a way to order the cards based on when the goal to finish by is set for. I would also want to add an image of the cover of each of the books on the card somewhere. It would also be nice to add an option where I could text the information to one of those 5 digit numbers so it could be added to the list without me having to open the website, and I could refer to the website later. I find that I want to add books to a list when I am mid conversation with a friend, and I don't want to take a lot of time trying to find the list and update/edit it in an effort to be more present.

It would also be a cool addition to have a calendar that showed the different books' covers on the calendar on the day that I am hoping to finish that book.
The gospel library app also has a way to add a long list of check boxes to keep you on track to finish a book or study topic on time. It would be cool that once you upload the name of the book, it would then create one of these pacing checklists.