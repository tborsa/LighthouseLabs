CREATE DATABASE database_name;

CREATE TABLE albums (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(50) NOT NULL,
  year INTEGER NOT NULL,
  artist_id INTEGER NOT NULL REFERENCES artists(id) ON DELETE CASCADE
);


INSERT INTO "artists" (id, name) VALUES(666, 'Neezy Boscareezy');
