var $select = $('#Finschemetype');

fetch('datas/Finscheme.json')
 .then(function (response){
     return response.json();
 })
 .then(function (findata){
     for(var i = 0; i < findata.length;i++){               
         $select.append('<option value="' + findata[i].ch_finscheme_id + '" >' + findata[i].vc_finscheme_name + '</option>');
  }
 })
 .catch(function (err){
     console.log(err);
 })
