# US Geography Facts
*by Steve Sholdra, ss5524@tc.columbia.edu*


---
**Demonstration page:** https://ss5524.github.io/US-Geography-Facts-MSTU5013/

**YouTube Reflection:** https://www.youtube.com/watch?v=VrSUXU3XTgM

**Firebase Database:** https://console.firebase.google.com/u/1/project/testtwo5013/overview

**Learning Experience Description:** 
The learning problem that I focused on for this final project was helping students learn US state geography, by identifying the state shape and facts about the state (capital, state bird, population, etc.). For my final project, I took the initial concept from my MSTU5003 class final project, US Geography, and interpolated it to incorporate a new learning experience. I’ve developed multiple iterations of the general idea throughout this summer session B, with namely three main versions:
1. My first page, using basic Vue, was a static page that used arrays to list facts about a state, and then used methods to pull the information to display the page information.
1. My next version used “Reveal Answer” buttons to show alerts, which pulled information from the arrays to display the answers as alert boxes. This was a self-learning page - I built it to have students use this page as a self-learning guide, where they controlled whether they got to see the answer themselves. I believe this page is important because it’s important to be able to self-quiz before being able to take a graded quiz.
1. For my final project, I’ve completely redesigned my learning experience webpage, and used Firebase database to host all the state information displayed on the page. I also used Firebase to host the student-submitted answers, that are written from text entry boxes on the page itself. 


The user experience is as follows:
* The user is asked what state is described on the page.
* The user examines the state shape, and then reads the facts listed on the page (pulled directly from the Firebase database): Capital, Nickname, Population, State Bird, and Fact. 
    * These features listed directly below the state shape will help the user mentally correlate the state shape with these facts, which will provide a learning connection between physical state outline and individual state facts.
* The user then enters the State Name in the text box field, and enters their Username as well. They will then select the “Submit Answer” button.
* The text fields will then both reset to blank, and a new document file will be created in the Firebase “States” database with the username and state name that was submitted. 
* This will create an external place for the teacher to view all answers submitted, outside of the view of the user. 
