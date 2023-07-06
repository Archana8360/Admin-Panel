// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"
import "controllers"



//= require jquery
//= require jquery_ujs
//= require pagy



//active inactive
$("#datarecords").on("click",".btn-click",function(){
    $.ajax({
        type: "patch",
        url: "clients/"+ this.id+"/update_status/",
        data: {id: this.id}, 
    });
});


//sorting
var sortDirection = 'asc';

$("#sortItems").click(function () { 
    $.ajax({
        type: "post",
        url: "/users/sort",   
        data: { sort_direction: sortDirection },
    });    

    // toggle sort direction
    sortDirection = (sortDirection === 'asc') ? 'desc' : 'asc';
});


$("#sortEmails").click(function () { 
    $.ajax({
        type: "post",
        url: "/emails/sort",   
        data: { sort_direction: sortDirection },
    });    

    // toggle sort direction
    sortDirection = (sortDirection === 'asc') ? 'desc' : 'asc';
});

$("#sortStatus").click(function () { 
    $.ajax({
        type: "post",
        url: "/status/sort",   
        data: { sort_direction: sortDirection },
    });    

    // toggle sort direction
    sortDirection = (sortDirection === 'asc') ? 'desc' : 'asc';
});

$("#search").on("input", function () {
    var val = $(this).val();
    
        $.ajax({
        type: "get",
        url: "/search",
        data: {first_name: val},
        cache: false
        
    });
    });
    // // Listen for clicks on pagination links
    // $(document).on('click', '.pagination a', function(e) {
    //   e.preventDefault();
    //   var url = $(this).attr('href');
    //   // Send AJAX request to get the new page content
    //   $.get(url, function(data) {
    //     $('#datarecords').html(data);
    //   });
    // });
  

    $("#container").on("click",".links",function(e){
      var val = $(e.target).attr("data-val");
      
      if (typeof val === 'undefined'){
          console.log("This is end");
      }
      else{
          $.ajax({
              type: "post",
              url: "clients/page",
              data: {page:val},
          });
      }
  });


