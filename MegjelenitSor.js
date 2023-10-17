class MegjelenitSor {
  #adat = {};

  constructor(adat, szuloElem, index) {
    this.#adat = adat;
    this.index = index;
    this.tablaElem = szuloElem;

    this.#sor();
    /** eseménykezelők a kész és a törlés gombokhoz */
    this.sorElem = this.tablaElem.find("tr:last");
    this.keszElem = this.sorElem.find(".kesz");
    this.torolElem = this.sorElem.find(".torol");

    this.keszElem.on("click", () => {
      this.#esemenyTrigger("kesz");
      this.sorElem.find(".kesz").replaceWith('<span class="megse">❌</span>');
      this.setHatterszin();
      this.megseElem = this.sorElem.find(".megse");
      this.megseElem.on("click", () => {
        this.#esemenyTrigger("megse");
        this.sorElem.find(".megse").replaceWith('<span class="kesz">✔️</span>');
        this.setHatterszin();
      });
    });

    this.torolElem.on("click", () => {
      this.#esemenyTrigger("torles");
    });

    // this.megseElem.on("click", () => {
    //   this.#esemenyTrigger("megse");
    //   this.sorElem.find(".megse").replaceWith('<span class="kesz">✔️</span>');
    //   this.setHatterszin();
    // });
  }

  setHatterszin() {
    if (this.keszElem.hasClass("kesz")) {
      this.sorElem.css("background-color", "green");
    } else {
      this.sorElem.css("background-color", "37, 34, 30, 0.692");
    }
  }

  #sor() {
    let txt = "";
    txt += "<tr>";
    for (const key in this.#adat) {
      if (key != "kesz") {
        txt += `<td>${this.#adat[key]}</td>`;
      }
    }
    txt += `<td><span class="kesz">✔️</span> <span class="torol">🗑</span></td>`;
    txt += "</tr>";
    this.tablaElem.append(txt);
  }
  

  #esemenyTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: this });
    window.dispatchEvent(esemeny);
  }
}
export default MegjelenitSor;

