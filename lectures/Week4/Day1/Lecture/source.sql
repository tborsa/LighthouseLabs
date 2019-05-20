
{
  books:[
    {name: "Name Of the Wind",
    author: "patrick Rothfuss",
    year: 2007
    },
    {name: "Dune",
    author: "Frank Herbert",
    year: 1965
    },
    {name: "Red Rising",
    author: "Pierce Brown",
    year: 2014
    },
    {name: "Red Rising",
    author: "Pierce Brown",
    Date: 12312312312312
    }
  ],

  people: [
    {name: travis,
    favoriteBooks: [
      "Name OF the Wind",
      "Dune",
      "The Hobbit"
    ]}
  ]
}



CREATE DATABASE database_name;

CREATE TABLE albums (
  id SERIAL PRIMARY KEY NOT NULL,
  title VARCHAR(50) NOT NULL,
  year INTEGER NOT NULL,
  artist_id INTEGER NOT NULL REFERENCES artists(id) ON DELETE CASCADE
);


INSERT INTO "artists" (id, name) VALUES(666, 'Neezy Boscareezy');


---

### 💽 I want the name and year each albumn was released.

*
```
//This will display the name and year rows from the 
//albumns table. 
```
```sql
SELECT name, year FROM albumns;
```
*

---

### 💽 I want to see how many tracks there are.
*
```
//This will display the number of rows, which represents 
//the number of tracks.
```
```sql
SELECT count(id) FROM tracks;
```
*

---

### 💽 I want to see how many tracks there are for a specific artist.
*
```
// This will display the count for all the rows matching 
// the condition of the artist being id 1. 
// With the AS clause we can alias the column name to 
// give us more descriptive results.
```
```sql
SELECT count(id) AS tracks_count 
FROM tracks 
WHERE albumn_id = 1;
```
*

---

### 💽 I want to see how many tracks there are for each artist.
*
```
// This will display a list of artist ids and the 
// number of tracks in each.
```

```sql
SELECT albumn_id, count(id) AS track_count 
FROM tracks 
GROUP BY albumn_id;
```
*

---

### 💽 I want to see which albumns have more than 10 tracks.
*
```
// This will display a filtered result set based 
// on the count value being higher than 20.
```
```sql
SELECT albumn_id, count(id) AS track_count 
FROM tracks 
GROUP BY albumn_id 
HAVING count(id) >= 10;
```
*

---

### 💽 I want to order my previous results with the highest counts at the top of the list.

*
```
//This will display the previous results sorted 
//high to low.
```
```sql
SELECT
  albumn_id,
  count(id) AS track_count
FROM tracks
GROUP BY albumn_id
HAVING count(id) >= 10
ORDER BY count(id) DESC;

```
*

---

### 💽 I want the previous result set, but only for albumns that were released in 2018.

Problem?

The release date information is stored in a seperate albumn table 

---

