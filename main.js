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
    });

    $(window).on("megse",(event)=>{
        let objPeldany = event.detail
        // console.log(event.detail)
        // console.log("Kész esemény!")
        TODOLIST2[objPeldany.index].kesz=false;
    });
    

    $(window).on("torles",(event)=>{
        let objPeldany = event.detail
        // console.log(event.detail)
        // console.log("Törlés esemény!")
        const confirmed = confirm("Biztosan törölni szeretnéd?");
        if (confirmed) {
            TODOLIST2.splice(objPeldany.index, 1); // törlés a listából
            szuloELEM.empty();
            new Megjelenit(TODOLIST2, szuloELEM);
        }
    });

    $(window).on("torles", (event) => {
    });

    $(window).on("megse", (event) => {
    });

    $(window).on("kesz", (event) => {
    });
});
