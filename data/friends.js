// ===============================================================================
// DATA
// Below data will hold all of the questions answers
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var surveyArray = [
    {
      userName: "Lucia",
      linkPhoto: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [
      '3',  '2', '5', '5', '4', '1', '4', '5', '3', '2']
    },
    {
      userName: "Memo",
      linkPhoto: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [
      '4',  '3', '5', '1', '1', '3', '5', '2', '4', '5']
    },
    {
      userName: "Paulina",
      linkPhoto: "https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
      scores: [
      '4',  '2', '3', '5', '5', '4', '3', '1', '2', '1']
    }


  ];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = surveyArray;
  