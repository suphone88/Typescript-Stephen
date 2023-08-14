const add = (a:number,b:number): number => {
return a + b;
}

const subtract = (a:number, b:number) =>{
    a-b;
}

function divide (a:number,b:number):number{
    return a/b;
}

const multiply = function(a:number,b:number):number{
    return a*b;
}

const logger = (message:string):void =>{
    console.log(message)
}

const throwError = (message:string):string =>{
    if(!message){
        throw new Error(message)
    }
    return message;
}

const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}

const logWeather = ({date, weather }:{date:Date, weather:string}): void => {
    console.log(date);
    console.log(weather);
}

logWeather(todaysWeather);