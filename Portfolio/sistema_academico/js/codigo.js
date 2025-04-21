function testa_form() {
  
  var aluno = document.forms["formalunos"]["aluno"].value;

  var cpf = document.forms["formalunos"]["cpf"].value;
  
   if (aluno == "") {
    alert("Nome do aluno precisa ser informado.");
      
    document.forms["formalunos"]["aluno"].focus();
      
    return false;        
   }
    
   if (cpf == "") {
    alert("CPF do aluno precisa ser informado");
      
    document.forms["formalunos"]["cpf"].focus();
      
    return false;        
   }
    
  return true;
}

function testa_form_prof() {

  var professor = document.forms["formprofessores"]["professor"].value;

  var cpf = document.forms["formprofessores"]["cpf"].value;

   if (professor == "") {
    alert("Nome do professor precisa ser informado.");

    document.forms["formprofessores"]["professor"].focus();

    return false;
   }

   if (cpf == "") {
    alert("CPF do professor precisa ser informado");

    document.forms["formprofessores"]["cpf"].focus();

    return false;
   }

  return true;
}

function mascara(input) {
  
  var v = input.value;
  
   if (isNaN(v[v.length - 1])) {
    
    input.value = v.substring(0, v.length - 1);
  
   return;
	}

  var tipo = input.getAttribute("data-mask");

   if (tipo === "cpf") {
    
    input.setAttribute("maxlength", "14");
   
   if (v.length === 3 || v.length === 7) input.value += ".";
   if (v.length === 11) input.value += "-";
  }
  
   if (tipo === "cep") {
    
    input.setAttribute("maxlength", "9");
    
   if (v.length === 5) input.value += "-";
  }
  
   if (tipo === "cel") {
    
    input.setAttribute("maxlength", "15");
	
   if (v.length === 1) input.value = "(" + v;
	
   if (v.length === 3) input.value += ") ";
	
   if (v.length === 10) input.value += "-";
  }
}