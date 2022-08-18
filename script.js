function button(num){
    
    document.getElementById('view').value += num
    
     }
 
     function reset(){
         document.getElementById('view').value = '';
     }
 
     function calcule(){
         var result = 0;
        result = document.getElementById('view').value;
        document.getElementById('view').value = eval(result)
 
         
        
     }