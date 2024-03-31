/*
*
* (C) obook 2020-2024
*
*/

let Question = {
  number: 0, /* >= 1 */
  format: "", /* GIFT or XML */ 
  text: "",
  answer1: "",
  answer2: "",
  answer3: "",
  answer4: "",
  feedback: ""
};

export { StorageExists, StoreQuestion, RecallQuestion, StorageClear, Question};

function StorageClear() {
  localStorage.clear();
}

function StorageExists(number) {
  let key = "Q"+ number;

  try {
    if (localStorage.getItem(key))
      return(true);
  } catch (error) {
      console.log("StorageExists "+number+" :False");
  }

return(false);
}

/* Store as Qn key, where n is a number >= 1
*/
function StoreQuestion(number) {
  let key = "Q"+ number;
  let questionobj = Object.create(Question);
  
    questionobj.number = number;
    questionobj.format = $("#sliderOutput").val();
    questionobj.text = $("#id_question").val();
    questionobj.answer1 = $("#id_reponse1").val();
    questionobj.answer2 = $("#id_reponse2").val();
    questionobj.answer3 = $("#id_reponse3").val();
    questionobj.answer4 = $("#id_reponse4").val();
    questionobj.feedback = $("#id_feedback").val();

    if(questionobj.text)
      localStorage.setItem(key, JSON.stringify(questionobj));

    // Test StorageWalk();
}

function RecallQuestion(number) {
  
  if ( !StorageExists(number))
    return false;

  let key = "Q"+ number;
  let questionobj = Object.create(Question);
  questionobj = JSON.parse(localStorage.getItem(key));

  if(!questionobj.text)
    return(false);

  console.log("RecallQuestion "+number+" done");

  $("#id_question").val(questionobj.text);
  $("#id_reponse1").val(questionobj.answer1);
  $("#id_reponse2").val(questionobj.answer2);
  $("#id_reponse3").val(questionobj.answer3);
  $("#id_reponse4").val(questionobj.answer4);
  $("#id_feedback").val(questionobj.feedback);

return(true);
}

function StorageMax() {
let i = 1;
while (StorageExists(i)) {
  i++;
  }
return(i);
}

function StorageWalk() {
let max = StorageMax();
let questionobj = Object.create(Question);

  for (let index = 1; index < max; index++) {
    let questionobj = Object.create(Question);
    let key = "Q"+ index;
    questionobj = JSON.parse(localStorage.getItem(key));
    console.log("Walk-> Get "+index+"="+questionobj.text)
  }
 }