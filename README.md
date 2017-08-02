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


## Database Tasks

### Larger Tasks
- [ ] Add Serializers (8/1 - 8/6)
- [ ] Optimize and Refactor Controllers and Models (8/7-8/13)
- [ ] Test and Optimize for Performance (8/14-21)

### Smaller Tasks
- [ ] Make sure spec files are working and passing (8/22)
- [ ] Generate substantial fake data for testing (8/14)
- [ ] Tag Cloud Functionality Testing (Does it not work because we don't have enough data?)(8/14)
- [ ] troubleshoot and implement lazy instantiation in controllers (8/7)
    - [ ] include find, new, not found, multiple
    - [ ] inlcude assigning `question.user`  


### Completed Tasks
- [x] move `current_user` to application controller
- [x] Add Google Image to User Auth Flow
- [x] add view_count column to questions table
- [x] Move Google tokens to a something.yml file
