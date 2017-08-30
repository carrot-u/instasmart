# Instasmart

A Q&A Forum for Instacart Employees

### Overview

+ Users create questions that are answered by, commented on, and liked by other users. 
+ Users can also like answers and comments, and comment on answers.
+ Question authors can mark an answer as "accepted"
+ Authors can edit or delete their questions, answers, and comments, respectively.
+ Users can sort by most recent, most commented, most answered, or most popular (most likes).
+ Users can search the database for matches on `question.summary`, `question.body`, and `tag_list`.

## Features

### Polymorphic Comments 
+ Allow users to comment on questions OR answers via use of `@context`.

### Likes
+ We integrated [Acts As Votable](https://github.com/ryanto/acts_as_votable) to allow users to upvote questions and answers. 

### Tags
+ We used [Acts as Taggable On](https://github.com/mbleigh/acts-as-taggable-on) for tag functionality.

### User Authentication
+ User auth on server side via [OmniAuth Google OAuth2 Strategy](https://github.com/zquestz/omniauth-google-oauth2) and [this tutorial form Rich on Rails](https://richonrails.com/articles/google-authentication-in-ruby-on-rails/)
+ Will create a new user if one does not exist.
+ [Access Restricted to instacart.com](https://stackoverflow.com/questions/23294102/restrict-login-with-google-oauth2-0-to-specific-whitelisted-domain-name-on-ruby)




