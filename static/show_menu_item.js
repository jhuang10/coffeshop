var showMenuItem = function(value) {
  $.getJSON('http://127.0.0.1:5000/menu_item/' + value, function(data) {
            alert("price is :"+data.price+"\nimage link is :"+data.image);
        });
}