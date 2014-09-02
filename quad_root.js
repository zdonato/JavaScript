// Zachary Donato 
// Quadratic Root Finder (Quadratic Formula)

function quad_root() { 
    decision = confirm("Find root(s)?");
    while (decision){
        // Take inputs for A, B, C
        a = prompt("Enter A: ");
        b = prompt("Enter B: ");
        c = prompt("Enter C: "); 
        
        // Calculate Roots
        x1 = ( -b + ( Math.sqrt(Math.pow(b,2)-4*a*c) ) ) / (2*a); 
        x2 = ( -b - ( Math.sqrt(Math.pow(b,2)-4*a*c) ) ) / (2*a);
        
        // Check for a = 0, b = 0, and c = 0
        
        if ( a === 0 ){
            x1 = c/b; 
            if (x1 < 0){
                x1 = Math.abs(c/b); 
            }
            else if (x1 > 0) {
                x1 = -(c/b);
            }
        }
        else if ( b===0 ) { 
            if ( c > 0 ){
                document.getElementById("ans").innerHTML="No real roots.";
            }
            else if (c < 0){
            z = c/a; 
            y = Math.sqrt(z);
            r = y/(2*a);
            x1 = r;
            x2 = -r;
            }
        } 
        else if ( c === 0 ){
            if ( b > 0 ){
                x1 = -(c/a);
                x2 = 0; 
            }
            else if (b < 0){
                x1 = Math.abs(c/a);
                x2 = 0; 
            }
        }
       
        if ( x1 === x2 ){
            document.getElementById("ans").innerHTML="One root.";
            document.getElementById("ans").innerHTML="Root: " + x1;
        }
        else if ( isNaN(x1) || isNaN(x2) ){
            document.getElementById("ans").innerHTML="No real roots.";
        }
        else {
            document.getElementById("ans").innerHTML="Root 1: " + x1;
            document.getElementById("ans").innerHTML="Root 2: " + x2;
        }
    
     decision = false;
     decision = confirm("Find root(s)?");
    }
}

quad_root();
 