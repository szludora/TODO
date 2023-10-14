class MegjelenitSor {
    #adat = {};
 
    constructor(adat, szuloElem) {
        this.#adat = adat;
   
        this.tablaElem = szuloElem;

        this.#sor();
        /** eseménykezelők a kész és a törlés gombokhoz */
        this.sorElem = this.tablaElem.children("tr:last-child");
        this.keszElem = this.sorElem.children("td").children(".kesz");
        this.torolElem = this.sorElem.children("td").children(".torol");
     
      
        //console.log(this.keszElem);
        this.keszElem.on("click", () => {
            console.log(this)
        });
       
       
    }
    #sor() {
        let txt = "";

        txt += "<tr>";
        for (const key in this.#adat) {
            txt += `<td>${this.#adat[key]}</td>`;
          }
        
        txt += `<td><span class="kesz">✔️</span> <span class="torol">🗑</span></td>`;
        txt += "</tr>";

        this.tablaElem.append(txt);
    }
   
}
export default MegjelenitSor;
