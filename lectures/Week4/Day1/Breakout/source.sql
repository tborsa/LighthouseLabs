SELECT album_id, count(id) AS track_count 
FROM tracks 
GROUP BY album_id;

-- with having

SELECT album_id, count(id) AS track_count 
FROM tracks 
GROUP BY album_id
HAVING count(id) <15;


-- with in


SELECT name
FROM artists
WHERE name IN ('Outkast', 'Kendrick Lamar');


-- all tracks, with album name

SELECT
  tracks.title AS title,
  albums.title AS album
FROM tracks
JOIN albums ON tracks.album_id = albums.id;




-- all tracks, with artist name and album name

SELECT
  tracks.title AS title,
  albums.title AS album,
  artists.name AS artist
FROM tracks
JOIN albums ON tracks.album_id = albums.id
JOIN artists ON albums.artist_id = artists.id;


--same as above
--using WHERE to specify an IMPLICIT JOIN

SELECT
  tracks.title AS title,
  albums.title AS album,
  artists.name AS artist
FROM tracks, albums, artists
WHERE albums.artist_id = artists.id AND tracks.album_id = albums.id;


-- all artists with tags

SELECT
  artists.name AS artist, tags.name
FROM artists
JOIN artists_tags AS at ON at.artist_id = artists.id 
JOIN tags ON at.tag_id = tags.id;

-- all artists with tags hip-hop or rap


SELECT
  artists.name AS artist, tags.name
FROM artists
JOIN artists_tags AS at ON at.artist_id = artists.id 
JOIN tags ON at.tag_id = tags.id
WHERE tags.name IN ('Hip-Hop', 'Rap');


-- # of albums per artist

SELECT
  artists.name as artist,
  COUNT(albums.id) as album_count
FROM artists
JOIN albums ON albums.artist_id = artists.id
GROUP BY artists.id;


----BAD--EXAMPLE----


SELECT
  albums.title as album_title, albums.year as album_year,
  COUNT(albums.year) as albums_in_year
FROM albums
GROUP BY albums.year;

-- # of albums per artist
-- who have more than 2 albums, in descending order

SELECT
  artists.name as artist,
  COUNT(albums.id) as album_count
FROM artists
JOIN albums ON albums.artist_id = artists.id
GROUP BY artists.id
HAVING COUNT(albums.id) >= 2
ORDER BY album_count DESC;


















