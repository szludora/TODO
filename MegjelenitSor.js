class MegjelenitSor {
  #adat = {};

  constructor(adat, szuloElem, index) {
    this.#adat = adat;
    this.index = index;
    this.tablaElem = szuloElem;
    this.#sor();
    /** eseménykezelők a kész és a törlés gombokhoz */
    this.sorElem = this.tablaElem.children("tr:last-child");
    this.keszElem = this.sorElem.children("td").children(".kesz");
    this.megseElem = this.sorElem.children("td").children(".megse");
    this.torolElem = this.sorElem.children("td").children(".torol");
    if (this.#adat.kesz) {
      this.setHatterszin();
    } else {
    }
    //console.log(this.keszElem);
    //ha nyíl függvény: hatokör ami a nyilt megába foglalja
    // function függvény: html sor irja ki
    this.keszElem.on("click", () => {
      this.#esemenyTrigger("kesz");
    });

    this.torolElem.on("click", () => {
      this.#esemenyTrigger("torles");
    });

    this.megseElem.on("click", () => {
      this.#esemenyTrigger("megse");
    });
  }

  setHatterszin() {
    this.sorElem.css("background-color", "green");
    
  }
  #sor() {
    let txt = "";
    txt += "<tr>";
    for (const key in this.#adat) {
      if (key != "kesz") {
        txt += `<td>${this.#adat[key]}</td>`;
      } 
    }
    txt += `<td><span class="kesz">✔️</span> <span class="megse"> X </span> <span class="torol">🗑</span></td>`;
    txt += "</tr>";
    this.tablaElem.append(txt);
  }

  #esemenyTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: this });
    window.dispatchEvent(esemeny);
  }
}
export default MegjelenitSor;
