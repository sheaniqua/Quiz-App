function handleCorrectClick() {
  console.log('hello')
  $('.js-correct-button').one('click', function() {
    console.log('click')
    var correctMessage = $('<p id="correct-message">Correct! The Jazz had to move out of New Orleans due to financial difficulties.</p>');
    $(this).closest('.question-block').find('.js-correct-info').append(correctMessage);
    // $(this).parent('.js-question-set').removeClass('js-wrong-button')
    $(this).addClass('active')
  })
}

function handleWrongClick() {

}









$(function() {
  handleCorrectClick();
  handleWrongClick();
})