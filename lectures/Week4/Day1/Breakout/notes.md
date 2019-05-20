

# SQL CONTINUED: A Data Story

Notes and code [here](https://github.com/tborsa/LighthouseLabs/tree/master/lectures/Week4/Day1/Breakout)

## FOREIGN KEYS 🤖 🔑

- Foreign key columns. Add `_id` to the singular name of the column you are referencing. Students to cohorts would be `cohort_id`. The type would be `INTEGER` but you also should create the foreign key with `REFERENCES cohorts(id) ON DELETE CASCADE`.

Using `ON DELETE CASCADE` for foreign key references. If we delete an artist then we may want to delete all of the albums that point to the record. The cascading delete functionality is a [constraint](https://www.postgresql.org/docs/current/static/ddl-constraints.html). It is not necessary to use CASCADE. If you don't you may notice some issues when trying to delete something that has a foreign reference to it.

---

## Group By & Aggregates 📊

Aggregate functions allow you to perform calculations on groups of data in a query. 
An aggregate function returns a single scalar value.
Are often used with GROUP BY and HAVING clauses.

The following are the most commonly used SQL aggregate functions:

- AVG – calculates the average of a set of values.
- COUNT – counts rows in a specified table or view.
- MIN – gets the minimum value in a set of values.
- MAX – gets the maximum value in a set of values.
- SUM – calculates the sum of values.

```sql
SELECT album_id, count(id) AS track_count
FROM tracks
GROUP BY album_id;
```

### GROUP BY 🤹

Groups rows that have the same value into summary rows.
Squishes common rows into one.

Aggregate functions look at the individual rows before they are squished.


### HAVING 🤗

Functions the same as a WHERE clause, but is used after the rows are grouped.

WHERE filters the rows before they are grouped.

```sql
SELECT column_name(s)
FROM table_name
WHERE condition
GROUP BY column_name(s)
HAVING condition;
```

# GROUP BY and SELECT 🤹   

If we are using GROUP BY...
Anything we specify in a SELECT must appear in the the GROUP BY
or must be an aggregate function.

```
id  |                  title                  | number | album_id 
-----+-----------------------------------------+--------+---------- 
  1 | Dark Fantasy                            |      1 |        1 
  2 | Gorgeous                                |      2 |        1 
  3 | Power                                   |      3 |        1 
  4 | All of the Lights (Interlude)           |      5 |        1 
  5 | All of the Lights                       |      5 |        1 
  6 | Monster                                 |      6 |        1 
  7 | So Appalled                             |      7 |        1 
  8 | Devil in a New Dress                    |      8 |        1 
  9 | Runaway                                 |      8 |        1 
 10 | Hell of a Life                          |      9 |        1 
 11 | Lost in the World                       |     10 |        1 
 12 | Who Will Survive in America             |     11 |        1 
 13 | Intro (Skit)                            |      1 |        2 
 14 | We Don't Care                            |      2 |        2 
 15 | Graduation Day                          |      3 |        2 
 16 | All Falls Down                          |      5 |        2 
 17 | I'll Fly Away                            |      5 |        2 
 18 | Spaceship                               |      6 |        2 
 19 | Jesus Walks                             |      7 |        2 
 20 | Never Let Me Down                       |      8 |        2 
 21 | Get Em High                             |      9 |        2 
 22 | Workout Plan (Skit)                     |     10 |        2 
```




## IN operator 📥

Allows you to match values from an array or a group of values


```sql
SELECT column_name(s)
FROM table_name
WHERE column_name IN (value1, value2, ...);
```

