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
+ [Tags](https://github.com/mbleigh/acts-as-taggable-on)
    * Do we want to preserve the order of tags?
    * For the ask/edit question form, I suggest we use the ```parse: true``` option and a space delimited instead of a comma.
    * Added ```ActsAsTaggableOn::Tag.most_used``` to the Tag card on the landing page. Defaults to 20 tags shown.
    * Do we want to chcnage the default parser from "," to " "?
    * Since only the author can add/remove tags, do we need to add the owned tag functionality?

### [Google Auth](https://richonrails.com/articles/google-authentication-in-ruby-on-rails/)

#### Tutorial Based on [OmniAuth Google OAuth2 Strategy](https://github.com/zquestz/omniauth-google-oauth2)
+ On the landing page, if not signed in, Nav Search Bar is replaced with a "Sign In" button.
+ Will create a new user if one does not exist.
+ [Restricts to instacart.com](https://stackoverflow.com/questions/23294102/restrict-login-with-google-oauth2-0-to-specific-whitelisted-domain-name-on-ruby), but the sign in page forces you to type the name (as it provides the domain) and the error page is really ugly if you try to change the hd attribute in the url
+ Doesn't record the user's email or separate first and last name when new user is created. Do we need this?


## Tasks
- [x] Add Google Image to User Auth Flow
- [ ] Fix Auth-Model Specs
- [ ] Tag Cloud Functionality
- [ ] Refactor Questions Controller for #new and #create to use lazy execution
- [x] move `current_user` to application controller
- [ ] `set_question` changes:
    - [ ] include find, new, not found, multiple
    - [ ] inlcude assigning `question.user`  
- [ ] add view_count column to questions table
- [ ] adjust `set` methods in answers and comments   
- [ ] Move Google tokens to a something.yml file
- [ ] Fix user.picture issue in SessionsController
## UI TODOs
- [x] Add Client in React and test with api call
- [x] Add Redux to client
- [ ] Add React routing
- [ ] Implement Landing page in react components
    - [ ] Tag cloud component
    - [ ] Make landing page banner component
    - [ ] Make landing page navbar component
- [ ] Implement Questions index in react components
    - [ ] Create Navbar and make sticker
    - [ ] Create Question row components
- [ ] Create Like / unlike button component
    - [ ] Plug in redux to update store and perform API call
- [ ] Create comment component button
    - [ ] Plug in redux to update store and perform API call
    - [ ] Create transitions to show field on click 
- [ ] Create Answer component button
    - [ ] Plug in redux to update store and perform API call
    - [ ] Create transitions to show field on click
- [ ] Implement modal in react
- [ ] Implement ask question
    - [ ] Implement tag dropdown 
    - [ ] Implement tag query database for selections






