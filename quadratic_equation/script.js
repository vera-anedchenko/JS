
function square_equation() {
    var a = document.square.square_a.value;
    var b = document.square.square_b.value;
    var c = document.square.square_c.value;
    
    var sol = document.getElementById("square_sol");
    var d = b * b - 4 * a * c;
    
    if ((isNaN(a)) || (isNaN(b)) || (isNaN(c))) {
        string = "Введите числовые значения!"
        }
            else {
    
            if ((a==0) || (b==0) || (c==0)) {
                string = "Вы забыли ввести данные!"
            }        
                else {     
                    if ( d > 0 ) {
                        string = "Уравнение имеет 2 корня: <br> x<sub>1</sub> = ";
                        string += (-b - Math.sqrt (d)) / 2 * a;
                        string += " <br> x<sub>2</sub> = ";
                        string += (-b + Math.sqrt (d)) / 2 * a;        
                        }  
                    else { 
                        if (d == 0) {
                                string = "Уравнение имеет один корень: <br> x = ";
                                string += -b / (2 * a);            
                        } 
                        else { 
                            string = "Уравнение не имеет корней.";        
            }
            }  
            }
            }
    
    
    sol.innerHTML = string;
}