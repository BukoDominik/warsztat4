document.addEventListener("DOMContentLoaded", function(){
var buttonAll = document.querySelector(".all");
var buttonOneBook = document.querySelector(".oneBook");
var buttonAdd = document.querySelector(".addBook");
var buttonDelete = document.querySelector(".deleteBook");



buttonAll.addEventListener("click", function(){
	$.ajax({
url: 'http://localhost:18080/mavenBackend/books'
,
type: 'GET'
,
success: function(result) { alert('GET completed');
console.log(result);
console.log(result.length);
console.log(result[0].author);
var table = document.querySelector(".books");

for(var i = 0; i<result.length; i++){
	console.log("KASZANKA");
		var row = document.createElement("tr");
		var column1 = document.createElement("td");
		var column2 = document.createElement("td");
		var column3 = document.createElement("td");
		column1.innerHTML = result[i].id;
		column2.innerHTML = result[i].author;
		column3.innerHTML = result[i].title;
		console.log(result[i].id);
		console.log(result[i].author);
		table.appendChild(row);
		row.appendChild(column1);
		row.appendChild(column2);
		row.appendChild(column3);
}

 }
});
})

buttonOneBook.addEventListener("click", function(){
	var id = $("#idVal").val();
	$.ajax({
url: 'http://localhost:18080/mavenBackend/books/' + id
,
type: 'GET'
,
success: function(result) { alert('GET completed');
console.log(result);

console.log(result.author);
var table = document.querySelector(".books");
		var row = document.createElement("tr");
		var column1 = document.createElement("td");
		var column2 = document.createElement("td");
		var column3 = document.createElement("td");
		column1.innerHTML = result.id;
		column2.innerHTML = result.author;
		column3.innerHTML = result.title;
		table.appendChild(row);
		row.appendChild(column1);
		row.appendChild(column2);
		row.appendChild(column3);

 }
});
})
buttonDelete.addEventListener("click", function(){
	var id = $("#idVal").val();
	$.ajax({
url: 'http://localhost:18080/mavenBackend/books/' + id
,
type: 'DELETE'
,
success: function(result) { alert('DELETE completed');
console.log(result);

 }
})

});
buttonAdd.addEventListener("click", function(){
	var id1 = $("#idVal").val();
	var title1 = $("#title").val();
	var publisher1 = $("#publisher").val();
	var author1 = $("#author").val();
	var isbn1 = $("#isbn").val();
	var type1 = $("#type").val();
	var obj = `{
           title : `+title1+`,
           author : `+author1+`,
           publisher : `+publisher1+`,
           isbn : `+isbn1+`,
           type : `+type1+`,
           }`;
	console.log(JSON.stringify({title:title1,author:author1,publisher : publisher1,isbn : isbn1, type:type1}));
		$.ajax({
headers: { 
'Accept': 'application/json',
'Content-Type': 'application/json' 
},
url: 'http://localhost:18080/mavenBackend/books'
,
data: JSON.stringify({title:title1,author:author1,publisher : publisher1,isbn : isbn1,type : type1})
// JSON.parse({title:title1,author:author1,publisher : publisher1,isbn : isbn1})
// JSON.stringify({title:title1,author:author1,publisher : publisher1,isbn : isbn1})
// JSON.stringify({"id":id,"title":title,"author":author,"publisher" : publisher,"isbn" : isbn})
// {
// 	"title" : title,
// 	"author" : author,
// 	"publisher" : publisher,
// 	"isbn" : isbn
// }
,

dataType : "json"
,
type: 'POST'
,
success: function(result) { alert('Post completed');
console.log(result);

 }
});
});


});



// curl -X POST -i -H "Content-Type: application/json" -d '{"isbn":"34321","title":"Thinking in Java","publisher":"Helion","type":"programming","author":"Bruce Eckel"}' http://localhost:8282/books