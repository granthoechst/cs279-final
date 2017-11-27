$(function(){ 
    var answers= gmat.answers, 
        userAnswers = [], 
        questionLength= answers.length, 
        questionsStatus = $("#questionNumber") 
        questionsList = $(".question");

    var gmat = { answers: [ 'b', 'd', 'a', 'c', 'a', 'd', 'b', 'a', 'd', 'a', 'd', 'c', 'a', 'b', 'd' ] }

function checkAnswers() { 
    var resultArr = [],  
                flag = false; 
    for (i=0; i<answers.length; i++) { 
        if (answers[i] == userAnswers[i]) { 
            flag = true; 
        } 
        else { 
            flag = false; 
        } 
        resultArr.push(flag); 
    } 
    return resultArr; 
}


$('.btnShowResult').click(function(){ 
    var tempCheck = $(this).parents('.container').find('input[type=radio]:checked'); 
    if (tempCheck.length == 0) { 
         return false; 
    } 
    var tempArr = $('input[type=radio]:checked'); 
    for (var i = 0, ii = tempArr.length; i < ii; i++) { 
        userAnswers.push(tempArr[i].getAttribute('data-key')); 
    }
});


})


