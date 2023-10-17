import { TODOLIST2 } from "./adatok.js";
import Megjelenit from "./Megjelenit.js";

$(function () {
    const szuloELEM = $(".tarolo");
    new Megjelenit(TODOLIST2, szuloELEM);
    
    $(window).on("kesz",(event)=>{
        let objPeldany = event.detail
        // console.log(event.detail)
        // console.log("Kész esemény!")
        objPeldany.setHatterszin()
        TODOLIST2[objPeldany.index].kesz=true;
        console.log(TODOLIST2);
       
    });

    $(window).on("megse",(event)=>{
        let objPeldany = event.detail
        // console.log(event.detail)
        // console.log("Kész esemény!")
        TODOLIST2[objPeldany.index].kesz=false;
        console.log(TODOLIST2);
        szuloELEM.empty();
        new Megjelenit(TODOLIST2,szuloELEM)
    });
    

    $(window).on("torles",(event)=>{
        let objPeldany = event.detail
        // console.log(event.detail)
        // console.log("Törlés esemény!")
        TODOLIST2.splice(objPeldany.index,1) // törlés a listából
        console.log(TODOLIST2);
        szuloELEM.empty();
        new Megjelenit(TODOLIST2,szuloELEM)
    });

    $(window).on("torles", (event) => {
        console.log(event.detail);
    });

    $(window).on("megse", (event) => {
        console.log(event.detail);
    });

    $(window).on("kesz", (event) => {
        console.log(event.detail);
    });
});
