Instasmart Model Notes

Tagging: 'https://www.sitepoint.com/tagging-scratch-rails/'

Users

Questions
  belongs_to :user
  has_many :answers, :comments, :upvotes, :tags

Answers
  belongs_to :question
  belongs_to :user
  has_many :comments, :upvotes

Comments
  belongs_to :question
  belongs_to :answer
  belongs_to :user
  has_many :upvotes

Upvotes
  belongs_to :question
  belongs_to :comment
  belongs_to :answer

Tags
  belongs_to :question



'Which resources/views are needed for each model?'

Users
  show
    recent acivity
      votes
  edit

Questions
  index
  new
    add tags
  create
  show (recent)
  popular
  edit
    add/remove tags
  update
  destroy

Answers

Comments

Upvotes

Tags
  show (tag cloud?)
  query by tag

Question/Todo/Bugs

current_user?
flash_notice issues on rescue
sort by popular on tags#index
why are params in controller and not helper?

add an answer/comment and mark as answered

partials for votes and tags?
partial for questions that includes tags and votes?



Fixed:
fix destroy tagging dependency
  added dependent: destroy in question.rb
Active as default
how to show popular questions
 .order('cached_vote_totals DESC')
 why doesnt @answer work in the answer form
  resouces :answers needs to be its own line in routes.rb; rails convention to not call methods on the object in html
add likes/unlikes to comments/answers that actually take the votes
