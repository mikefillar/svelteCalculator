<script>
// @ts-nocheck
    const exp = new RegExp ("([-+*/])");
    //data comes from server
    export let form;

    let output= '';


    const setValue = (value)=> {
        output = output + value;
    }
    const clearValue = ()=> {
        output = "";
    }
    if(form!=null){
        output = form;
    }
    if(isNaN(form)){
        output = 'SyntaxError';
    }
</script>
<form method="POST">
    <div class="calculator">
            <input type="text" name="disp" id="disp" value={output} readonly="true" />
        <div class="buttons">
            <div class="operations">
                <button on:click|preventDefault={()=>{setValue('+')}}>+</button>
                <button on:click|preventDefault={()=>{setValue('-')}}>-</button>
                <button on:click|preventDefault={()=>{setValue('*')}}>&times;</button>
                <button on:click|preventDefault={()=>{setValue('/')}}>&divide;</button>
            </div>
            <div class="numbers">
                <div>
                    <button on:click|preventDefault={()=>{setValue(7)}}>7</button>
                    <button on:click|preventDefault={()=>{setValue(8)}}>8</button>
                    <button on:click|preventDefault={()=>{setValue(9)}}>9</button>
                </div>
                <div>
                    <button on:click|preventDefault={()=>{setValue(4)}}>4</button>
                    <button on:click|preventDefault={()=>{setValue(5)}}>5</button>
                    <button on:click|preventDefault={()=>{setValue(6)}}>6</button>
                </div>
                <div>
                    <button on:click|preventDefault={()=>{setValue(1)}}>1</button>
                    <button on:click|preventDefault={()=>{setValue(2)}}>2</button>
                    <button on:click|preventDefault={()=>{setValue(3)}}>3</button>
                </div>
                <div>
                    <button on:click|preventDefault={()=>{setValue(0)}}>0</button>
                    <button on:click|preventDefault={()=>{setValue('.')}}>.</button>
                    <button on:click|preventDefault={()=>{clearValue()}}>C</button>
                </div>
            </div>
            <div class="equal">
                <button on:submit|preventDefault>=</button>
            </div>
        </div>
    </div>
</form>

<style>
    .calculator{
        width: 30%; 
        margin: 0 auto;
        border: 1px solid #aaa;
        padding: 20px;
    }
    input{
        width: 100%;
        padding:20px 0;
        font-size: 2rem;
        outline: none;
        border: 1px solid #bbb;
        text-align: right;
    }
    .calculator .buttons{
        display: flex;
        flex-wrap: wrap;
    }
    .calculator .operations{
        display: flex;
        justify-content: space-between;
        width: 100%;
        margin: 10px;
    }
    .calculator .buttons .operations button{
        width: 24%;
        padding: 15px;
    }
    .calculator .buttons .numbers{
        width: 75%;
    }
    .calculator .buttons .numbers > div{
        display: flex;
        justify-content: space-between;
        margin: 10px;
    }
    .calculator .buttons .numbers > div button{
        width: 32%;
        padding: 15px;
    }
    .calculator .equal{
        flex:1;
    }
    .calculator .equal button{
        width: 95%;
        height: 95%;
        background-color: #00acee;
    }
    .calculator button{
        cursor: pointer;
    }
</style>