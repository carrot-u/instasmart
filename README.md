# instasmart

1. Branch: Make comments polymorphic (leave user as is)
2. Branch: Add lazy execution to questions and comments
3. Branch: Add votable


## How I Broke and Fixed the DB

DELETE FROM schema_migrations WHERE version IN  ('20170714021925', '20170714021656', '20170713024933');
