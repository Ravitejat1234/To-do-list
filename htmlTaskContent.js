const htmlTaskContent = ({ id, title, description, url }) => <div class="col-md-6 col-log-4 mt-3 id=${id} key=${id}>
     <div>

    </div>







    
    // <div class=" col-md-6 col-log-4 mt-3 id $ {...id} key $ {...id}>
    //<div class="card shadow-sm task__card">
    // <div>
    // </div>
    //</div></>;
 








 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To Do Appln</title>

    <!--Custom CSS -->
    <link rel="stylesheet"  href="style.css " />

    <!--Boostrap CSS CDN-->
    <link 
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
    rel="stylesheet" 
    integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
    crossorigin="anonymous"
    />

    <!--CDN for Font Awesome-->
    <link 
    rel="stylesheet" 
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css" 
    integrity="sha512-Kc323vGBEqzTmouAECnVceyQqyqdsSiqLQISBL29aUW4U/M7pSPA/gEUZQqv1cwx4OnYxTxve5UMg5GT6L4JJg==" 
    crossorigin="anonymous" 
    referrerpolicy="no-referrer" 
    />
</head>
<body>

  <!--Mobile Button-->
  <div class="add__new__btn__mobile__only">
    <button 
            class="btn btn-primary d-flex align-items-center gap-2"
           type="submit" 
           data-bs-toggle="modal" 
           data-bs-target="#addNewModal"
           >
            <i class="fa-solid fa-plus" ></i>Add New Item
        </button>
  </div>
  

  <!-- Add New Item Modal -->
<div class="modal fade" 
id="addNewModal" 
tabindex="-1" 
aria-labelledby="addNewModalLabel" 
aria-hidden="true"
>
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="addNewModal">Add New Task</h1>
        <button 
        type="button" 
        class="btn-close" 
        data-bs-dismiss="modal" 
        aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="imageurl" class="form-label" >Image URL</label>
            <input 
            type="url" 
            class="form-control" 
            id="imageurl" 
            placeholder="https://raviteja/image.png"
            aria-describedby="imageHelp"
            />
            <div id="imageHelp" class="form-text">
              This is an optional field
            </div>
          </div>
          <div class="mb-3">
            <label for="Task Title" class="form-label" >Task Title</label>
            <input 
            type="text" 
            class="form-control" 
            id="Task Title" 
            placeholder="Task Title"
            />
          </div>
          <div class="mb-3">
            <label for="Tags" class="form-label" >Task Type</label>
            <input 
            type="text" 
            class="form-control" 
            id="Tags" 
            placeholder="Task Type"
            />
          </div>
          <div class="mb-3">
            <label for="Task Description" class="form-label" >Task Description</label>
            <textarea 
            type="text" 
            class="form-control" 
            id="Task Description" 
            placeholder="Task Description"
            ></textarea>
          </div>
         </form>
      </div>
      <div class="modal-footer">
        <button 
        type="button" 
        class="btn btn-secondary" 
        data-bs-dismiss="modal"
        >
        Close
      </button>
      <button
      type="button"
      class="btn btn-primary"
      onclick="handleSubmit()"
    >
      Save changes
    </button>
      </div>
    </div>
  </div>
</div>

<!--Open Task Modal -->
<div 
class="modal fade" 
id="ShowTask" 
tabindex="-1" 
aria-labelledby="ShowTaskLabel" 
aria-hidden="true"
>
  <div class="modal-dialog  modal-lg">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="ShowTaskLabel">
          Task Details
        </h1>
        <button 
        type="button" 
        class="btn-close" 
        data-bs-dismiss="modal" 
        aria-label="Close"
        ></button>
      </div>
      <div class="modal-body">...</div>
      <div class="modal-footer">
        <button 
        type="button" 
        class="btn btn-secondary" 
        data-bs-dismiss="modal"
        >
        Close
      </button>
        
      </div>
    </div>
  </div>
</div>

  <!--Navbar-->
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">To Do List</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
         </ul>


        <button class="btn btn-primary d-flex align-items-center gap-2"
           type="submit" 
           data-bs-toggle="modal" 
           data-bs-target="#addNewModal"
           >
            <i class="fa-solid fa-plus" ></i>Add New Item
        </button>
      </div>
    </div>
  </nav>

  <div class="container">
    <section class="mt-4">
        <div class="row justify-content-center">
          <div class="col-md-6">
            <div class="input-group flex-nowrap">
                
                <input 
                type="text" 
                class="form-control" 
                placeholder="Search your task here" 
                aria-label="Username" 
                aria-describedby="addon-wrapping"
                />
                <span class="input-group-text" id="addon-wrapping"
                ><i class="fa-solid fa-magnifying-glass"></i>
            </span>
           </div>
          </div>
        </div>
    </section>

    <section class="mt-4">
        <div class="row task__contents"></div>
    </section>
  </div>

  <!--demo-->
  <!--<div class="col-md-6 col-log-4 mt-3 id="${id}" key="${id}">
    <div class="card shadow-sm task__card">
       <div class="card-hader d-flex justify-content-end task__card__header gap-2"
        >
          <button type="button" class="btn btn-outline-info mr-2" name="${id}">
            <i class="fas fa-pencil-alt name="${id}"></i>
          </button>
          <button type="button" class="btn btn-outline-danger mr-2 name=${id}">
            <i class="fas fa-trash-alt name="${id}"></i>
          </button>
        </div>
        <div class="card-body">
            ${ url && <img 
              src="${url}" 
              alt="card image top" 
              class="card-image-top md-3 rounded-lg"
              /> }
            <h4 class="card-title">${title}</h4>
            <p class="description trim-3-lines text-muted card-text">
              ${description}
            </p>
            <div class="tags text-white d-flex flex-wrap">
              <span class="badge bg-primary m-1">${type}</span>
            </div>
        </div>
        <div class="card-footer">
        <button 
        type="button" 
        class="btn btn-outline-primary float-right" 
        data-bs-toggle="modal" 
        data-bs-target="#ShowTask"
        >
         Open Task
        </button>
       </div>
      </div>
    </div>

<!--Custom js-->
 <script src="index.js"></script>
 
 <!--Boostrap JS CDN-->
 <script 
 src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
 integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
 crossorigin="anonymous"
 ></script>
</body>
</html>