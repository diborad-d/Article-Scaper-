// Get references to page elements
var $exampleText = $("#example-text");
var $exampleDescription = $("#example-description");
var $articleText = $("#article-text");
var $articleDescription = $("#article-description");
var $submitBtn = $("#submit");
var $articleList = $("#article-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveArticle: function(article) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/articles",
      data: JSON.stringify(article)
    });
  },
  getArticles: function() {
    return $.ajax({
      url: "api/articles",
      type: "GET"
    });
  },
  deleteArticle: function(id) {
    return $.ajax({
      url: "api/articles/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshArticles = function() {
  API.getArticles ().then(function(data) {
    var $articles  = data.map(function(article) {
      var $a = $("<a>")
        .text(articles .text)
        .attr("href", "/article/" + article.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": article.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $articleList.empty();
    $articleList.append($articles);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var article = {
    text: $articleText.val().trim(),
    description: $articleDescription.val().trim()
  };

  if (!(article.text && article.description)) {
    alert("You must enter an text and description!");
    return;
  }

  API.saveArticle(article)
  .then(function() {
  refreshArticles();
  });

  $articleText.val("");
  $articleDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteArticle(idToDelete).then(function() {
    refreshArticle();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$articleList.on("click", ".delete", handleDeleteBtnClick);
