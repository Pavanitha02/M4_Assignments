const boxen=require("boxen");

const message="I am using my first external module!";
const title="Hurry!!!";
//Classic 
console.log(
    boxen(message,{
        title:title,
        titleAlignment:"center",
    })
);
////singleDouble
console.log(
    boxen(message,{
        title:title,
        borderStyle:"singleDouble",
        titleAlignment:"center",
    })
);

//////round
console.log(
    boxen(message,{
        title:title,
        titleAlignment:"center",
        borderStyle:"round",
    })
);

////extra colouring
console.log(
    boxen(message,{
        title:"color Mode",
        borderStyle:"round",
        backgroundColor:"green",
        padding:1,
    })
);