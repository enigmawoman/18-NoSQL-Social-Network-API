// helper fucntion for setting the date format in the models

 const format_date = (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  } 

module.exports = { format_date }