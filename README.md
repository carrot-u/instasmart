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
    - [x] Questions, Comments, Answers 
    - [x] Tags, Taggings
    - [x] _Temporarily_ rendering `questions#index` and `questions#show` as json to test seralizer success. For ease of use, we may be able to strip our views down to this as well.
    - [x] Users (for questions, answers, comments)
    - [ ] Votes (may not need these since `cached_votes_up` and `cached_votes_down` are columns on each of the relevant models)
    - [x] [Caching is Broken](https://github.com/rails-api/active_model_serializers/blob/v0.10.6/docs/general/caching.md) so we'll forego for now
    - [ ] Format timestamps in serializer
    - [x] Add auth tokens to users serializer
    - [ ] VIEW COUNTS!!!
- [ ] Optimize and Refactor Controllers and Models (8/7-8/13)
    - [x] allow both tag and tagless questions through controller
    - [ ] Streamilining comment controllers to support polymorphic associations
    - [ ] users controller 
        - [ ] show method for users
        - [ ] include :questions, :answers, :comments as activity
    - [ ] remove landing page stuffs?
    - [ ] lazy instantiation revist
    - [x] seed DB with test data
        - [ ] Add more with Faker if needed
    - [ ] Can I move all the like/dislike methods to the application controller and use `@self`?
    - [ ] Does the serializer trump the need for precompile/eager loading?
- [ ] Add validations for all user input (8/7 -8/13) (or is this client?)
    - [ ] only current_user can access edit on show page/ user profile page
- [ ] Test and Optimize for Performance (8/14-21)
- [ ] Find alternative solution for csrf or method for passing token 

### Smaller Tasks
- [x] Add package-lock.json to .gitignore
- [ ] Make sure spec files are working and passing (8/22)
- [ ] Generate substantial fake data for testing (8/14)
- [ ] Tag Cloud Functionality Testing (Does it not work because we don't have enough data?)(8/14)
- [ ] troubleshoot and implement lazy instantiation in controllers (8/7)
    - [ ] include find, new, not found, multiple
    - [ ] inlcude assigning `question.user`  
- [ ] `current_user` guided access
    - [ ] No content on landing page when signed out
    - [ ] Edit permissions on questions/answers/comments, user profile  


- [x] move `current_user` to application controller
- [x] Add Google Image to User Auth Flow
- [x] add view_count column to questions table
- [x] Move Google tokens to a something.yml file

## UI Tasks

- [x] Add Client in React and test with api call
- [x] Add Redux to client
- [ ] Add React routing
- [ ] Implement Landing page in react components
- [ ] Tag cloud component
- [ ] Make landing page banner component
- [ ] Make landing page navbar component
- [x] Implement Questions index in react components
- [x] Create Navbar and make sticky
- [x] Create Question row components
- [ ] Create Like / unlike button component
    - [ ] Plug in redux to update store and perform API call
- [ ] Create comment component button
    - [ ] Plug in redux to update store and perform API call
    - [ ] Create transitions to show field on click
- [x] Create Answer component button
    - [ ] Plug in redux to update store and perform API call
    - [x] Create transitions to show field on click
- [ ] Implement modal in react
- [ ] Implement ask question
- [ ] Implement tag dropdown
- [ ] Implement tag query database for selections
- [ ] 

## Notes and Ideas

### Front End
- [ ] To transition or not to transition
- [ ] Parting of the nav bar red sea
- [ ] Navbar at mobile width 
- [ ] Overall Font and Relative Sizing
- [ ] Instamart Logo?
- [ ] card styles
- [x] Search bar rounded corners should match Ask Question button
- [ ] Ask and Search should be separate buttons, no?
- [ ] body background color for contrast with nav
- [ ] Nav item font size should be bigger in sm/md width
- [ ] Remove text-decoration on hovered links (replace with darken of main instacart color?)
- [ ] change tagging delimiter from comma to space

### Back End
- [ ] Remove Landing Page Controllers and Views?
- [ ] Format date in serializer
- [ ] change tagging delimiter from comma to space
- [ ] should tagging convention be hyphens or underscore?
- [ ] cascade destroy of taggings with question (`dependent: :destroy`?)
- [ ] Do we need an "activity_count" or "up_votes_count" column on the user model, for user default scope stuffs?

### Which end is up?
- [ ] slugs in the show page urls?
