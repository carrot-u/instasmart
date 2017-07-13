# How to Install Rspec and Guard in a Rails App

[Docs for 'rspec-rails' gem](https://github.com/rspec/rspec-rails)
[Docs for 'guard-rspec' gem](https://github.com/guard/guard-rspec)


## What is rspec?

Rspec is a popular testing framework. You create files that run tests of various part of your app and the rspec interface and inform you of errors.

### Types of Tests

#### Unit Tests
+ models, views, routes, etc.
+ each individual component is tested one item at a time in isolation
+ typically results in very good coverage

#### Functional Tests
+ controllers
+ testing multiple components and how they collaborate with each other
+ multiple models in a process

#### Integration Tests
+ used when a business process is followed to completion to meet a business objective
+ typically involves emulating a user, ex logging in and clicking a purchase button or links


##First Steps

In a new app:

```
$ rails new app_name -T 
# creates a new rails app without the default testing apparatus
```

In an existing app:

Delete the /test/ directory


## RSpec And Capybara Install

1. Add to gemfile

```
group :development, :test do
  gem 'rspec-rails', '~> 3.5'
  # Call 'byebug' anywhere in the code to stop execution and get a debugger console
  gem 'byebug', platforms: [:mri, :mingw, :x64_mingw]
end

group :test do
  gem 'capybara'
end
```

2. Run ```$ bundle install```
3. Run ```$ rails generate rspec:install```
4. Run ```$ bundle binstubs rspec-core```


## Usage

+ Create new files in the newly created /spec/ directory.

Run all tests:
```
$ rspec
```

Run tests on a single file:
```
$ rspec spec/features/filename_spec.rb
```

## Installing Guard

Guard::RSpec allows to automatically & intelligently launch specs when files are modified.

+ Does not require you to actively call tests
+ Runs all specs when any files in your application are modified

1. Add the following gems to the development group of the Gemfile:

```ruby
gem 'guard'
gem 'guard-rspec'
gem 'guard-cucumber'
```

2. Run ```$ bundle install```
3. Run ```$ guard init```
4. Run ```$ bundle binstubs guard```
5. run ```$ cucumber --init```


## Ensure that Guard runs on all parts of the app

_The following assumes you add a features folder the the specs directory._

In Guardfile (in the root directory):

1. Add to the top of the  ```# Rails files``` section:
```ruby
watch(%r{^app/controllers/(.+)_(controller)\.rb$})  { "spec/features" }
watch(%r{^app/models/(.+)\.rb$})  { "spec/features" }
```

2. Add to the top of the ```# Rails config changes``` section:
```ruby
watch(rails.routes)          { "spec" } # { "#{rspec.spec_dir}/routing" }
```

3. Add to the top of the  ```# Capybara features specs``` section:
```ruby
watch(rails.view_dirs)     { "spec/features" } # { |m| rspec.spec.call("features/#{m[1]}") }
```

The final Guardfile after the updates is below. [Taken from this repo](https://github.com/udemyrailscourse/bdd_course_rails5/blob/master/Guardfile)

```ruby
cucumber_options = {
  # Below are examples overriding defaults

  # cmd: 'bin/cucumber',
  # cmd_additional_args: '--profile guard',

  # all_after_pass: false,
  # all_on_start: false,
  # keep_failed: false,
  # feature_sets: ['features/frontend', 'features/experimental'],

  # run_all: { cmd_additional_args: '--profile guard_all' },
  # focus_on: { 'wip' }, # @wip
  # notification: false
}

guard "cucumber", cucumber_options do
  watch(%r{^features/.+\.feature$})
  watch(%r{^features/support/.+$}) { "features" }

  watch(%r{^features/step_definitions/(.+)_steps\.rb$}) do |m|
    Dir[File.join("**/#{m[1]}.feature")][0] || "features"
  end
end

# Note: The cmd option is now required due to the increasing number of ways
#       rspec may be run, below are examples of the most common uses.
#  * bundler: 'bundle exec rspec'
#  * bundler binstubs: 'bin/rspec'
#  * spring: 'bin/rspec' (This will use spring if running and you have
#                          installed the spring binstubs per the docs)
#  * zeus: 'zeus rspec' (requires the server to be started separately)
#  * 'just' rspec: 'rspec'

guard :rspec, cmd: "rspec" do
  require "guard/rspec/dsl"
  dsl = Guard::RSpec::Dsl.new(self)

  # Feel free to open issues for suggestions and improvements

  # RSpec files
  rspec = dsl.rspec
  watch(rspec.spec_helper) { rspec.spec_dir }
  watch(rspec.spec_support) { rspec.spec_dir }
  watch(rspec.spec_files)

  # Ruby files
  ruby = dsl.ruby
  dsl.watch_spec_files_for(ruby.lib_files)

  # Rails files
  rails = dsl.rails(view_extensions: %w(erb haml slim))
  dsl.watch_spec_files_for(rails.app_files)
  dsl.watch_spec_files_for(rails.views)

  watch(%r{^app/controllers/(.+)_(controller)\.rb$})  { "spec/features" }
  watch(%r{^app/models/(.+)\.rb$})  { "spec/features" }
  watch(rails.controllers) do |m|
    [
      rspec.spec.call("routing/#{m[1]}_routing"),
      rspec.spec.call("controllers/#{m[1]}_controller"),
      rspec.spec.call("acceptance/#{m[1]}")
    ]
  end

  # Rails config changes
  watch(rails.spec_helper)     { rspec.spec_dir }
  watch(rails.routes)          { "spec" } # { "#{rspec.spec_dir}/routing" }
  watch(rails.app_controller)  { "#{rspec.spec_dir}/controllers" }

  # Capybara features specs
  watch(rails.view_dirs)     { "spec/features" } # { |m| rspec.spec.call("features/#{m[1]}") }
  watch(rails.layouts)       { |m| rspec.spec.call("features/#{m[1]}") }

  # Turnip features and steps
  watch(%r{^spec/acceptance/(.+)\.feature$})
  watch(%r{^spec/acceptance/steps/(.+)_steps\.rb$}) do |m|
    Dir[File.join("**/#{m[1]}.feature")][0] || "spec/acceptance"
  end
end
```


## Sample File Construction

### Plan out your test process
1. Create a branch to do the dev work
    $ git checkout -b article-feature-success
2. Write feature test, which will fail because nothing has been built yet
3. Build features to make the test pass one by one
4. Once the feature test passes with no errors, merge branch with master branch

#### User steps

1. Visit root page
2. Click on "New Article" link
3. Fill in title
4. Fill in body
5. Create Article (submit button)

#### Expectations

1. Article has been created
2. articles path (redirect after creation)

### Test File

```ruby
# the first two lines must be at the top of EVERY spec file
require 'rails_helper'

RSpec.feature "Creating Articles" do

# What should happen BEFORE the test is run
  before do
    # create a user with required params and login as them
    @john = User.create!(email: "john@example.com", password: "password")
    login_as(@john)
  end

# The actual test sequence
  # use a descriptive name for each scenario
  scenario "A user creates a new article" do

    # go to root route (localhost:3000 in dev environment)
    visit "/"

    # user clicks the New Article link
    click_link "New Article"

    # user input
    fill_in "Title", with: "Creating a blog" 
    fill_in "Body", with: "Lorem Ipsum"

    click_button "Create Article"

# Expected results
    # article is assigned to the user who created it
    expect(Article.last.user).to eq(@john)
    # the page should show the success message
    expect(page).to have_content("Article has been created")
    # the action redirected the user to the articles index
    expect(page.current_path).to eq(articles_path)
    # the page should show text that the user is assigned to the article as the author
    expect(page).to have_content("Created by: #{@john.email}")
  end

  # test sequence for failed user input
  scenario "A user fails to create a new article" do
    visit "/" # go to root page

    click_link "New Article"

    fill_in "Title", with: ""
    fill_in "Body", with: ""

    click_button "Create Article"

    expect(page).to have_content("Article has not been created")
    expect(page).to have_content("Title can't be blank")
    expect(page).to have_content("Body can't be blank")
  end
end
```

## In Action

1. Start Guard
```
$ guard
```
2. Hit 'Enter' form the Guard command line. This will run all specs.
3.  You get a routing error that suggests to create a root path
  + Update the routes.rb file in the config folder like below:
        ```ruby
        root to: "articles#index"
        ```
4. Now save and run Guard again (Hit 'Enter' from the Guard command line).
5. You get an error that says: 'Uninitialized constant ArticlesController.'
  + This suggests to create the Articles Controller
  + Generate an articles controller with an index action by issuing the following command:
    ```
    $ rails g controller articles index
    ```
  + Remove the get 'articles/index' line from the routes.rb file
6. Save and run Guard again, for each error until the spec passes.
