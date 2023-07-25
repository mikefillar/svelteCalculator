const exp = new RegExp ("([-+*/])");
export const actions = {
    // @ts-ignore
    default : async ({request})=>{
        const formData = await request.formData();
        let output = formData.get('disp');
        //split output into data
        // @ts-ignore
        let data = output.split(exp);
        console.log(data);

        let total = 0;
        /**
         * @type {string | any[]}
         */
        let numbers = [];
        /**
         * @type {any[]}
         */
        let operators = [];
        data.forEach((/** @type {string | number} */ val) => {
            // @ts-ignore
            if(!isNaN(val)){
                // @ts-ignore
                numbers = [...numbers, parseFloat(val)];
            }
            else{
                // @ts-ignore
                operators = [...operators, val];
            }
        });
        console.log(operators);
        console.log(numbers);
        //add the first value of array to total
        total += numbers[0];
        let j = 0;
        for (let i =1; i <numbers.length; i++){
            let oper = operators[j];
            switch (oper) {    
                case '+':
                    console.log(`${total}+${numbers[i]}`);
                    total += numbers[i];
                    console.log(total);
                    j++;
                    break;
                case '-':
                    console.log(`${total}-${numbers[i]}`);
                    total -= numbers[i];
                    console.log(total);
                    j++;
                    break;
                case '*':
                    console.log(`${total}*${numbers[i]}`);
                    total *= numbers[i];
                    console.log(total);
                    j++;
                    break;
                case '/':
                    console.log(`${total}/${numbers[i]}`);
                    total /= numbers[i];
                    console.log(total);
                    j++;
                    break;
            
                default:
                    j=0;
                    break;
                
            }
        }
        console.log('The total is : '+ total);
        return total;
    }
};