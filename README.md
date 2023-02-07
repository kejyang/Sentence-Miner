# Sentence-Miner

### How to Run
Got to the server directory and run npm init -y and then npm install mongodb express cors dotenv. Run npm start in the server directory. Then open another terminal
and go to the client directory and run npm start. The website should open up on localhost:3000 after a brief period of time.

### Introduction

Sentence mining is a language learning strategy. Instead of learning words individually, words are learned in context in sentences. This helps the learner 
to internalize meanings much faster and also in the process learn useful sentences to use. Generally, there should only be one unknown word to the learner,
as adding too many words will simply confuse the learner. This application helps the learner organize their sentences to mine.

### Features

### Navigation Bar

The navigation bar is always on the top the of the website. The home button will go to the home page, the create sentence button will go to the create sentence
page and the search function will search the list of sentences and return a list of sentences.

### Home Page
![image](https://user-images.githubusercontent.com/38774593/217149832-9e850a76-ce36-4b28-b486-329baa1117ba.png)


The home page has a list of all the sentences. The user can click on the sentences to go to that sentence's page. 


### Sentence Page
![image](https://user-images.githubusercontent.com/38774593/217149959-6d31cd85-25cd-45bd-94fc-c1494b08902c.png)
![image](https://user-images.githubusercontent.com/38774593/217149985-253248b1-0cd5-4af2-b835-9dd53834810c.png)


The sentence page is essentially a flashcard. The user will see the original sentence first. On clicking on the sentence, it will change so the user can see
the translated sentence and the specific word/s that the user inputted when creating the sentence.

### Create Sentence Page

![image](https://user-images.githubusercontent.com/38774593/217150014-35bef30f-fc17-4037-bf47-0cbe8c1739cc.png)


Here the user can create a sentence to be inputted into the list. The user fills out the original sentence, the translated sentence, and the word/s that the user
wants to learn.

### Search 
![image](https://user-images.githubusercontent.com/38774593/217150156-05f7bba9-a4a7-42f7-aeb6-e9145b14c468.png)
![image](https://user-images.githubusercontent.com/38774593/217150181-eaff9ca6-9377-4bf4-b2aa-6ba4e67799fa.png)

The user can search for specific sentences by using the search bar. The search parameters will return a list of all records that match the search parameters.
