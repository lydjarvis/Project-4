# Lydia Jarvis
# Project 4


## Wireframes:
<img src = "./src/images/Project4-login.png">
<img src = "./src/images/Project4-questions.png">

## Features:
On this project, a Login and Signup page will be the first thing the user sees 
<img src = "./src/images/loginpage.png">
<img src = "./src/images/signuppage.png">

After connecting to the MySQL server, users will be redirecting to the questions page if their credentials are valid. 
<img src = "./src/images/database.png">
<img src = "./src/images/questionspage.png">

Here, users can look through and submit answers to questions.

## Technologies used:
- Node.js
- Express.js
- React
- React Router
- MySql
- Axios
- Bootstrap


## Database Tables:
```
CREATE TABLE `Users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `user_name` varchar(45) DEFAULT NULL,
  `user_password` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Questions` (
  `question_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `title` varchar(200) NOT NULL,
  `body` text NOT NULL,
  PRIMARY KEY (`question_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `questions_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

CREATE TABLE `Answers` (
  `answer_id` int NOT NULL AUTO_INCREMENT,
  `question_id` int DEFAULT NULL,
  `user_id` int DEFAULT NULL,
  `body` text NOT NULL,
  PRIMARY KEY (`answer_id`),
  KEY `question_id` (`question_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `answers_ibfk_1` FOREIGN KEY (`question_id`) REFERENCES `Questions` (`question_id`) ON DELETE CASCADE,
  CONSTRAINT `answers_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


```
## Future improvemnts:
- will keep working on this project and give me information through my database 
- CSS and designing 
- Better understanding of errors and how to handle them
# project-4
# project-4
