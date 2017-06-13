Carrot Q&A

DATA STRUCTURE

ENTITIES
	USERS
	ROLES
	#FORUMS replaced with tags in questions id
	POSTS-> QUESTIONS
	#EVENTS-> ANSWERS, COMMENTS, RATINGS

FUNCTIONALITY
•Do we want to allow restricted forums?
•Should we track views?
•Should we allow anonymous dislikes?

RELATIONSHIPS

USERS —|—————⥺ POSTS ON u.id = p.author_id
USERS —|—————⥺ EVENTS ON u.id = e.user_id

ROLES —|—————⥺ USERS ON r.id = u.roles_mask

FORUMS —|—————⥺ POSTS ON f.id = p.forum_id

POSTS —|—————⥺ EVENTS ON p.id = e.post_id

SCHEMA

USERS
id [INTEGER] auto_increment PK
username [TEXT] varchar(50)
email [TEXT] varchar(100)
password [TEXT] varchar(50) What is a hashed_password?
first_name [TEXT] varchar(50)
last_name [TEXT] varchar(50)
status [TEXT] varchar(50)
roles_mask [INTEGER] foreign key to ROLES
created_at [TIMESTAMP]
updated_at [TIMESTAMP]

ROLES
id [INTEGER] auto_increment PK
name [TEXT]
created_at [TIMESTAMP]
updated_at [TIMESTAMP]

FORUMS
id [INTEGER] auto_increment PK
name [TEXT] varchar(250)
description [TEXT] varchar(250)
status [TEXT] varchar(50)
	'open'
	'closed'
temporary [TEXT] (For event based forums)
	'true'
	'false'
expire_at [TIMESTAMP]
created_at [TIMESTAMP]
updated_at [TIMESTAMP]

POSTS
id [INTEGER] auto_increment PK
name [TEXT] varchar(50)
description [TEXT] varchar(250)
status [TEXT] varchar(50)
	'unanswered'
	'answered'
tags [TEXT]
forum_id [INTEGER] foreign key to FORUMS
author_id [INTEGER] foreign key to USERS
created_at [TIMESTAMP]
updated_at [TIMESTAMP]

COMMENTS
id
content
post_id
author_id
created_at
updated_at

RATINGS
id
rating
comment_id
user_id
created_at


•Polymorphism through rails to allow ratings to work for both posts/comments
•should posts be renamed "questions"? #yes
•should comments be renamed "answers?"? #yes
•should answers and comments be separate? #yes
•should status be changed to active true/false instead of having a temporary column
•should expire_at be used to determine whether or not people can write to the forum
•







