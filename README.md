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

#### Tutorial Based on [OmniAuth Google OAuth2 Strategy](https://github.com/zquestz/omniauth-google-oauth2)
+ On the landing page, if not signed in, Nav Search Bar is replaced with a "Sign In" button.
+ Will create a new user if one does not exist.
+ [Restricts to instacart.com](https://stackoverflow.com/questions/23294102/restrict-login-with-google-oauth2-0-to-specific-whitelisted-domain-name-on-ruby), but the sign in page forces you to type the name (as it provides the domain) and the error page is really ugly if you try to change the hd attribute in the url
+ Doesn't record the user's email or separate first and last name when new user is created. Do we need this?







