//write a program whose major task is to calculate an individual’s Net Salary by getting the inputs of basic salary and benefits. 
//Calculate the payee (i.e. Tax), NHIFDeductions, NSSFDeductions, gross salary, and net salary.

//NB: On index2.html

const salary = prompt("Enter salary in ksh");
const benefits = prompt("Enter benefits in Ksh");

const grossSalary = parseInt(salary) + parseInt(benefits);

if(grossSalary >= 0){
    function taxCalc(Salary){
        if(Salary <= 24000){
            return Salary * 0.1;
        }else if(Salary > 24000 && Salary <= 32333){
            return Salary * 0.25;
        }else if(Salary > 32333){
            return Salary * 0.3;
        }
    }
    function nssfCalc(income){
        return income * 0.06;
    }
    function nhifCalc(net){
        if(net <= 5999){
            return 150;
        }else if(net >= 6000 && net <= 7999){
            return 300;
        }else if(net >= 8000 && net <= 11999){
            return 400;
        }else if(net >= 12000 && net <= 14999){
            return 500;
        }else if(net >= 15000 && net <= 19999){
            return 600;
        }else if(net >= 20000 && net <= 24999){
            return 750;
        }else if(net >= 25000 && net <= 29999){
            return 850;
        }else if(net >= 30000 && net <= 34999){
            return 900;
        }else if(net >= 35000 && net <= 39999){
            return 950;
        }else if(net >= 40000 && net <= 44999){
            return 1000;
        }else if(net >= 45000 && net <= 49999){
            return 1100;
        }else if(net >= 50000 && net <= 59999){
            return 1200;
        }else if(net >= 60000 && net <= 69999){
            return 1300;
        }else if(net >= 70000 && net <= 79999){
            return 1400;
        }else if(net >= 80000 && net <= 89999){
            return 1500;
        }else if(net >= 90000 && net <= 99999){
            return 1600;
        }else if(net >= 100000){
            return 1700;
        }
    }
}else{
    alert("Enter valid salary/benefits");
}

const payee = taxCalc(grossSalary) + nssfCalc(grossSalary) + nhifCalc(grossSalary);

const Net = grossSalary - payee;

alert(`Your PAYE is: ${payee}`);

alert(`Your Net Salary is: ${Net}`);