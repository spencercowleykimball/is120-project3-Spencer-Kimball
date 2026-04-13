
// Create supabase database client
const db = supabase.createClient("https://rktcdytivjxzpcdzhnpj.supabase.co","sb_publishable_tgUJQa9vrpnykrXzwgix1w_cqH9aJp_")

// grab HTML elements
let container = document.querySelector(".container");
let book_to_read_input = document.querySelector("#book_to_read_input");
let author_name_input = document.querySelector("#author_name_input");
let goal_to_read_input = document.querySelector("#goal_to_read_input");
let saveButton = document.querySelector("button");

// initialize save button
saveButton.addEventListener("click", saveInput);
saveButton.textContent = "Create";

// store current ID if editing
let currentEditID = null;

loadRows(); // load rows on page load

/*──────────────────────────────────────────────────────────────────────────────────
  CREATE / EDIT INPUT SWITCHING FUNCTIONS
  Functions to switch between create and edit for HTML book_to_read_input
  ──────────────────────────────────────────────────────────────────────────────────*/

// switch between creating and editing row
function saveInput() {
  if (currentEditID === null) {
    createRow();
  } else {
    editRow(currentEditID);
    currentEditID = null;
    saveButton.textContent = "Create";
  }
  book_to_read_input.value = "";
  author_name_input.value = "";
  goal_to_read_input.value = "";
}

// fill book_to_read_input with current row value
function fillInputWithEdit(entry) {
    // Has the author's name at this point when first clicked to edit
//   console.log(entry.author_name);

  book_to_read_input.value = entry.book_to_read;
  author_name_input.value = entry.author_name;
//   console.log("Boo");
  goal_to_read_input.value = entry.goal_to_read;

//   

//   book_to_read_input.focus();

  currentEditID = entry.id;
  saveButton.textContent = "Save Edit";
}

/*──────────────────────────────────────────────────────────────────────────────────
  SUPABASE FUNCTIONS
  Functions for load, create, delete, and edit
  ──────────────────────────────────────────────────────────────────────────────────*/

// get all rows and create elements on the DOM for each entry
async function loadRows() {
  container.innerHTML = "";

  // supabase get all rows
  const { data, error } = await db.from("table_1").select("*");

//   console.log(data);

  if (error) {
    console.error(error);
    return;
  }

  for (const entry of data) {
    // console.log(entry);

    let entryDiv = document.createElement("div");

    let entryDesc = document.createElement("p");
    entryDesc.textContent = entry.book_to_read + " by " + entry.author_name + ", goal to finish by " + entry.goal_to_read;

    // let entryAuth = document.createElement("p");
    // entryAuth.textContent = entry.author_name;

    // let entryGoal = document.createElement("p");
    // entryGoal.textContent = entry.goal_to_read;

    let entryEdit = document.createElement("button");
    entryEdit.textContent = "Edit";

    // Passes entry with table row information to fill input with edit function
    entryEdit.addEventListener("click", () => fillInputWithEdit(entry)); // use arrow function to add event listener with argument of current row ID

    // Creates a delete button that deletes a row by the id that is attached to the current element
    let entryDelete = document.createElement("button");
    entryDelete.textContent = "Delete";
    entryDelete.addEventListener("click", () => deleteRow(entry.id)); // use arrow function to add event listener with argument of current row ID

    container.appendChild(entryDiv);
    entryDiv.appendChild(entryDesc);
    // entryDiv.appendChild(entryAuth);
    // entryDiv.appendChild(entryGoal);
    entryDiv.appendChild(entryEdit);
    entryDiv.appendChild(entryDelete);
  }
}

// create a new row based on the current book_to_read_input value
async function createRow() {
    // Does have the correct author name at this point
    // console.log(author_name_input.value);

    console.log(book_to_read_input.value);

  // supabase insert new row
  const { error } = await db
    .from("table_1")
    .insert([{ book_to_read: book_to_read_input.value, 
            author_name: author_name_input.value,
            goal_to_read: goal_to_read_input.value
     }])
    .select();

  if (error) {
    console.error(error);
    return;
  } 
  

  loadRows(); // load rows after each operation to ensure DOM is up to date
}

// delete a row based on passed ID to function
async function deleteRow(id) {
  // supabase delete row by id
  const { error } = await db.from("table_1").delete().eq("id", id);

  if (error) {
    console.error(error);
    return;
  } 

  loadRows(); // load rows after each operation to ensure DOM is up to date
}

// edit a row based on the current book_to_read_input value and ID passed to function
async function editRow(id) {
  // supabase update row by id
  const { error } = await db.from("table_1").update({ book_to_read: book_to_read_input.value, 
                                                      author_name: author_name_input.value,
                                                      goal_to_read: goal_to_read_input.value }).eq("id", id).select();

  if (error) {
    console.error(error);
    return;
  }

  loadRows(); // load rows after each operation to ensure DOM is up to date
}
