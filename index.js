//question database
const STORE = [
    {
        question: "Which President was the first African-American editor of the Harvard Law Review?",
        correctAnswer: "images/presidentObama.jpeg",
        presidentName:"Barack Obama"
    },
    {
        question: 'Which President has been married multiple times and has children from multiple women?',
        correctAnswer: 'images/presidentTrump.jpeg',
        presidentName:"Donald Trump"
    },
    {
        question: "Which President was the first governor in state history to be elected to consecutive four-year terms?",
        correctAnswer:"images/presidentBush.jpeg",
        presidentName:"George Bush"

    },

    {
        question:"Under which President did Black Unemployment in the U.S. fall from 16.5% to 7.9%?",
        correctAnswer:"images/presidentObama.jpeg",
        presidentName:"Barack Obama"
    },

    {
        question:"Under which President did Black Unemployment increase from 7.9% to 16.8%?",
        correctAnswer: "images/presidentTrump.jpeg",
        presidentName:"Donald Trump"
    },

    {
        question: "Which President lead the efforts to pass GATT, the largest international tax cut in history?",
        correctAnswer:"images/presidentClinton.jpeg",
        presidentName:"Bill Clinton"
    }

]



//hide images
function hideImage(){
    $('.presidents').hide()
    $('.question').hide()

}

//counter for the number question 
let counter = 0//Counter to show the question from the database
let maxCounter = 1//Counter to show the question number out of the total questions that the user is on 
let rightAnswer = 0//Counter to show the questions that the user has gotten right 
let generalCounter = 1//Counter to let us know when the user has finished the quiz 
let wrongAnswer = 0//Counter to show how many the user has gotten wrong
let answerCounter =  0
//Function to start the quiz
function render (){
    
    $('.start').click(function(){
        console.log(counter)
        $('.presidents').show()
        $('button').text('Next Question')
        $('h3').text(STORE[0].question)
        $('.start').hide()
        $('.question').show()
        $('h5').text('Question:' + maxCounter + '/6')
        })
    }

//function to display the next question after button has been clicked
function nextQuestion(){
    $('.question').click(function(){
        $('.presidents').show()
        $('p').hide()
        if (answerCounter <= counter){
            alert('Please Answer')
        } else{
            counter+=1
            generalCounter+=1
            if(maxCounter < 6){
                maxCounter+=1
                $('h3').text(STORE[counter].question)
        }
            if(maxCounter == 6){
                $('.question').text('Submit Quiz')
        }
        $('h5').text('Question:' + maxCounter + '/6')
        if(generalCounter > 6){
            alert('You Scored ' + rightAnswer + '/6')
            counter = 0//Counter to show the question from the database
            maxCounter = 1//Counter to show the question number out of the total questions that the user is on 
            rightAnswer = 0//Counter to show the questions that the user has gotten right 
            generalCounter = 1//Counter to let us know when the user has finished the quiz 
            wrongAnswer = 0//Counter to show how many the user has gotten wrong
            answerCounter =  0
            $('button').text('Next Question')
            $('h3').text(STORE[0].question)
            $('h5').text('Question:' + maxCounter + '/6')

        }

        }
       
    })
    
}

//function to check whether the submitted answer is correct 
function correctAnswer(){
    $('img').click(function(){
        event.stopPropagation();
        let x = $(this).attr('src')
        if(x == STORE[counter].correctAnswer){
            $('p').text('Correct, the answer is ' + STORE[counter].presidentName)
            $('p').show()
            rightAnswer +=1
            answerCounter+=1
            $('.presidents').hide()
        }else{
            wrongAnswer+=1
            answerCounter+=1
            $('p').text('No, thats not correct. The correct answer is ' + STORE[counter].presidentName)
            $('.presidents').hide()
            $('p').show()
        }
        
    })
    
}

 
//add styling to the images upon hovering over them
function addStyling(){
    $('.presidents img').hover(function(){
        $(this).css("box-shadow", "10px 10px 5px -4px rgba(0,0,0,0.75")
    }/*function ending*/,function(){
        $(this).removeAttr('style')
    })//hover ending
};//styling ending





$(addStyling);
$(hideImage);
$(render);
$(nextQuestion);
$(correctAnswer);


