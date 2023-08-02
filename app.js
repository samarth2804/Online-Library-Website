console.log('Welcome to NITM-Central Library');

showBooks();
//creating a book class
class Book{
    constructor(name,author,publication,type){
          this.name=name;
          this.author=author;
          this.publication =publication;
          this.type=type;
    }
}

//creating a display class to add books
class Display{
    add(tempBook){
        let books =localStorage.getItem('books');
        let bookObj;
        if(books==null){
            bookObj=[];
        }
        else{
        bookObj=JSON.parse(books);
        }
        bookObj.push(tempBook);
        localStorage.setItem('books',JSON.stringify(bookObj));
        showBooks();
    }

    validateBook(book){
        if(book.name.length>2 && book.author.length>2 && book.publication.length>2){
            return true;
        }
        else{
            return false;
        }
    }

    clear(){
        let form=document.getElementById('libraryForm');
        form.reset();
    }
}

//Add event listner to add book
let form=document.getElementById('libraryForm');
form.addEventListener('submit',libraryFormSubmit);
function libraryFormSubmit(e){
   // e.preventDefault();
    let name=document.getElementById('bookName').value;
    let author=document.getElementById('author').value;
    let publication=document.getElementById('publication').value;
    
    let type;
    let maths=document.getElementById('maths');
    let physics=document.getElementById('physics');
    let chemistry=document.getElementById('chemistry');
    let aptitude=document.getElementById('aptitude');
    if(maths.checked){
        type="Mathematics";
    }
    else if(physics.checked){
        type="Physics";
    }
    else if(chemistry.checked){
        type="Chemistry";
    }
    else if(aptitude.checked){
        type="Aptitude";
    }
  
    let tempBook=new Book(name,author,publication,type);
    //console.log(tempBook);
    let display=new Display();
    if(display.validateBook(tempBook)){
        //console.log('hua validate');
       display.add(tempBook);
       display.clear();
    }
    
}

//fuction to show Books
function showBooks(){
   let books=localStorage.getItem('books');
   
   if(books==null){

    let noBook=document.getElementById('noBook');
    noBook.innerHTML=`<br> Please Add Books above at "Add a Book section"`;
    let table=document.getElementById('libTable');
    table.style.display="None";
   }
   else{
    let bookObj;
    bookObj=JSON.parse(books);
   
   let html="";
    bookObj.forEach(element => {
        html+=`<tr>
                    <td>${element.name}</td>
                    <td>${element.author}</td>
                    <td>${element.publication}</td>
                    <td>${element.type}</td>
                </tr>`;
    });
    let tableBody = document.getElementById('tableBody');
    tableBody.innerHTML+=html;  
 }   
}


/*  <div class="alert alert-primary" role="alert" id="alert" style="padding-top: 1rem; padding-bottom: 0; margin: 0;">
    <p style="text-align: center;">A simple primary alert—check it out!</p>
</div>  */ 