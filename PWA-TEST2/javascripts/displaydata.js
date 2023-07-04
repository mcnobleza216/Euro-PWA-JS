function DisplayData()
{
    HideForm("Main")
   
    var form = document.getElementById("formfloat")   
 
    form.style.display = "flex";
    
        var finschemeID = document.getElementById("finschemeID");
        var finschemeDesc = document.getElementById("finschemeDesc");   

        finschemeID.value = $("#Finschemetype").val();
        finschemeDesc.value =$("#Finschemetype option:selected").text();
}

function HideForm(divName)
{
    var form = document.getElementById(divName)
   
    form.style.display = "none";
    
}


function ShowMain(Main,Form)
{
    var form = document.getElementById(Form)
    form.style.display = "none";

    var form2 = document.getElementById(Main)
    form2.style.display="block";
    
}


