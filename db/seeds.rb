# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
# Country.create(name: 'Germany', population: 81831000)

user_list = [
  [ 'jeremy.flanagan@instacart.com', 'Jeremy Flanagan'],
  [ 'logan@instacart.com', 'Logan Murdock' ],
  [ 'muffy@instacart.com', 'Muffy Barkocy' ],
  [ 'joan@instacart.com', 'Joan Estep' ]
]

user_list.each do |email, name|
  User.create( email: email, name: name )
end

question_list = [
	['What is Instasmart?', 'I want a description of the basic functions of the application', User.first.id, 'db-seed, instasmart' ],
	['What is the most important company value?', 'I know this is subjective, but is there a consensus in the company?', User.last.id, 'db-seed, company-values' ],
	['What is :war-nails:?', 'You know, the new emoji of a hand with black nail polish? What\'s that about?', User.first.id, 'db-seed, war-nails' ]
]

question_list.each do |summary, body, user_id, tag_list|
	Question.create(summary: summary, body: body, user_id: user_id, tag_list: tag_list)
end

answer_list = [
	['Instasmart is a question and answer forum for Instacart employees. You can ask about anything Instacart from how to access a quip document to the history of our company values.', User.last.id, Question.first.id]
]

answer_list.each do |response, user_id, question_id|
	Answer.create(response: response, user_id: user_id, question_id: question_id)
end
