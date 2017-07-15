# Instasmart

A Q&A Forum for Instacart Employees

## Back End Design

### Tables
+ Users
    * Google Auth
    * No Anonymity
    * No restricted content
+ Questions
+ Answers
+ Comments
    * Polymorphic to Questions and Answers
+ [Votes (ala 'votable')](https://github.com/ryanto/acts_as_votable)
    * Likes/Dislikes for Questions, Answers, and Comments
+ Tags

### [Google Auth](https://richonrails.com/articles/google-authentication-in-ruby-on-rails/)

+ On the landing page, if not signed in, Nav Search Bar is replaced with a "Sign In" button.
+ Will create a new user if one does not exist.







