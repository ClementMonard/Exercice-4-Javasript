//déclaration de la fonction
function identification() {
//Déclaration et récupération des variables
  var lastname = document.getElementById('lastname').value;
  var firstname = document.getElementById('firstname').value;
  var city = document.getElementById('city').value;
  var regex = /^[A-Za-z\-àèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœç]+$/;
//Regex
  if((regex.test(lastname) == true) && (regex.test(firstname) == true) && (regex.test(city) == true)) {
    alert('Nom : '+ lastname + '\nPrénom : ' + firstname + '\nCity : '+ city);
  }else{
    alert('Ceci n\'est pas une lettre.');
  }
}
