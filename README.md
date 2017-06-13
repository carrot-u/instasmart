# Instasmart

# User Interface Mock Up
#### [This doc in quip(Includes completed items)](https://instacart.quip.com/CrXhAz661PPe)
#### [The original Product Spec](https://instacart.quip.com/1R1vAN7wO6nw)


## Requirements

* A search box
* A list of popular tags (badges)
* Ability to see a list of new, popular, or unanswered questions, as well as questions by tag or category (if using)
* Layout for display of one/more questions and answers
* A form for entering a new question
* Ability to vote a question up or down

## Included in the Project File

* index.html (aka "Recent")
* popular.html
* tags.html
* question.html
* question_edit.html (for question authors)
* search_result.html
* user.html
* custom.css
* img folder

## To do

* Limit max answer characters shown?
* Upvotes/comments for answers
    * Checkmark or some other image and number of upvotes
    * Comments for Questions in collapse
* Auto-tag style functionality for search, create, edit question

## Questions

* How should comments work? New page? Modal? Accordion?
* What's the best and most intuitive way to order the Answer, timestamp, comments collapse, and button group?
* Do we need a “follow” action?
* Where is the best place to put the notifications box on the jumbotron pages?
* Is the background color on the bottom half of the jumbotron pages too bright?
* How can the tags page be better?!

## Extensions

* Include [Tooltips](https://v4-alpha.getbootstrap.com/components/tooltips/) and [Popovers](https://v4-alpha.getbootstrap.com/components/popovers/) for Related Questions and Stats
* [Put 3-4 items per display on the recent page carousel](https://codepen.io/mephysto/pen/ZYVKRY)
* x-marks on tags and auto-format when new tags are added
* Datepicker for Refine Search


# Basic Rails App


## V1 Notes

* Unstylized UI
* Basic Resources for Questions, Answers, Tags, Votes in UI
* Pages for Recent, Popular, All, Inactive, Tags
* Full Functionality for Questions, Answers, Comments, Tags, Votes in console
* Question/Answer Creation requires user selection as User Auth is not yet built
* Used [Votable Gem](https://github.com/ryanto/acts_as_votable) for Votes
* Built out [native tagging system](http://tutorials.jumpstartlab.com/projects/blogger.html#i3:-tagging)

## V1 To Do

* Add Embedded Comment Creation
* Add Additional Resources for Answers and Comments (Edit, Delete)
* Allow users to Mark an answer as primary
* Condense Add/Remove vote into one button
* List Tags by Count
* Fix and Enhance Flash Notices
* Clean Up/Lean Out Views, Controllers, Models ala "DRY coding"
* Explore partials for votes/tags
* User Auth and Permissions
* Refine Nomenclature
* How does rails handle a modal (for new questions)?
