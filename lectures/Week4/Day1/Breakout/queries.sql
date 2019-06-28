-- GROUP BY
SELECT count(id) AS track_count, album_id
FROM tracks
WHERE count(id) >= 14;
GROUP BY album_id;


-- HAVING


-- BAD GROUP BY


-- IN EXAMPLE

SELECT * 
FROM (SELECT * FROM artists WHERE id >4) AS artist_query
WHERE artist_query.id >3 ;


-- all tracks, with album name

SELECT tracks.title AS track_title, albums.title
FROM tracks
JOIN albums ON album_id = albums.id;

-- all tracks, with artist name and album name

SELECT *
FROM (
    SELECT tracks.title AS track_title, albums.title, albums.artist_id
    FROM tracks
    JOIN albums ON album_id = albums.id
    ) AS album_tracks
JOIN artists ON album_tracks.artist_id = artists.id;




--same as above
--using WHERE to specify an IMPLICIT JOIN


SELECT *
FROM (
    SELECT tracks.title AS track_title, albums.title, albums.artist_id
    FROM tracks
    JOIN albums ON album_id = albums.id
    ) AS album_tracks , artists
Where artists.id = album_tracks.artist_id;




-- all artists with tags





-- all artists with tags hip-hop or rap
-- artists, tags, artists_tags
SELECT artists.name AS artist_name, tags.name AS genre
FROM artists, tags, artists_tags
WHERE artists.id = artists_tags.artist_id AND artists_tags.tag_id = tags.id;




-- # of albums per artist
-- albums  artist 
SELECT count(artists.id) AS total_albums, artists.name
FROM albums, artists
WHERE albums.artist_id = artists.id
GROUP BY artists.name;






-- # of albums per artist
-- who have more than 2 albums, in descending order



















