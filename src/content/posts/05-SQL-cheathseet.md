---
title: Cheatsheet
publishedAt: 2023-11-12 
description: fmnoasö
slug: "untitled 2"
isPublish: true
---
# SQL Cheatsheet

## Table of Contents

- [SQL Cheatsheet](#sql-cheatsheet)
  - [Table of Contents](#table-of-contents)
  - [SELECT Statement](#select-statement)
  - [FROM Clause](#from-clause)
  - [WHERE Clause](#where-clause)
  - [ORDER BY Clause](#order-by-clause)
  - [GROUP BY Clause](#group-by-clause)
  - [JOIN Statements](#join-statements)
  - [INSERT Statement](#insert-statement)
  - [UPDATE Statement](#update-statement)
  - [DELETE Statement](#delete-statement)

## SELECT Statement

The `SELECT` statement is used to query the database and retrieve data.

```sql
SELECT column1, column2
FROM table_name;
```

## FROM Clause

The `FROM` clause specifies the table from which to retrieve data.

```sql
SELECT column1, column2
FROM table_name;
```

## WHERE Clause

The `WHERE` clause filters the result set based on a specified condition.

```sql
SELECT column1, column2
FROM table_name
WHERE condition;
```

## ORDER BY Clause

The `ORDER BY` clause sorts the result set based on one or more columns.

```sql
SELECT column1, column2
FROM table_name
ORDER BY column1 ASC, column2 DESC;
```

## GROUP BY Clause

The `GROUP BY` clause groups rows that have the same values into summary rows.

```sql
SELECT column1, COUNT(*)
FROM table_name
GROUP BY column1;
```

## JOIN Statements

`JOIN` statements are used to combine rows from two or more tables based on a related column.

```sql
SELECT column1, column2
FROM table1
INNER JOIN table2 ON table1.column = table2.column;
```

## INSERT Statement

The `INSERT` statement adds new records to a table.

```sql
INSERT INTO table_name (column1, column2)
VALUES (value1, value2);
```

## UPDATE Statement

The `UPDATE` statement modifies existing records in a table.

```sql
UPDATE table_name
SET column1 = value1, column2 = value2
WHERE condition;
```

## DELETE Statement

The `DELETE` statement deletes records from a table based on a condition.

```sql
DELETE FROM table_name
WHERE condition;
```

