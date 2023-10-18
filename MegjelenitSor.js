class MegjelenitSor {
  #adat = {};

  constructor(adat, szuloElem, index) {
    this.#adat = adat;
    this.index = index;
    this.tablaElem = szuloElem;
    this.megse = false;

    /** eseménykezelők a kész és a törlés gombokhoz */
    this.#sor();
    this.sorElem = this.tablaElem.find("tr:last");
    this.keszElem = this.sorElem.find(".kesz");
    this.torolElem = this.sorElem.find(".torol");
    this.megseElem = this.sorElem.find(".megse");

    this.megseSorok();
    this.setHatterszin();

    if (this.megse == true) {
      this.keszElem.css("display", "none");
      this.megseElem.css("display", "inline");
    }

    this.keszElem.on("click", () => {
      this.#esemenyTrigger("kesz");
      this.megse = true;
      this.setHatterszin();
    });

    this.megseElem.on("click", () => {
      this.#esemenyTrigger("megse");
      this.megse = false;
      this.setHatterszin();
    });

    this.torolElem.on("click", () => {
      this.#esemenyTrigger("torles");
    });
  }

  setHatterszin() {
    if (this.megse == true) {
      this.keszElem.css("display", "none");
      this.megseElem.css("display", "inline");
      this.sorElem.addClass("zold");
      this.sorElem.removeClass("szintelen");
    } else {
      this.keszElem.css("display", "inline");
      this.megseElem.css("display", "none");
      this.sorElem.addClass("szintelen");
      this.sorElem.removeClass("zold");
    }
  }

  #sor() {
    let txt = "";
    txt += "<tr class='szintelen'>";
    for (const key in this.#adat) {
      if (key != "kesz" && key != "megse") {
        txt += `<td>${this.#adat[key]}</td>`;
      }
    }

    txt += `<td><span class="kesz">✔️</span><span class="megse">❌</span><span class="torol">🗑</span></td>`;
    txt += "</tr>";

    this.tablaElem.append(txt);

    if (this.megse == true) {
      this.keszElem.css("display", "none");
      this.megseElem.css("display", "inline");
      this.sorElem.removeClass("szintelen");
      this.sorElem.addClass("zold");
    }
  }

  

  #esemenyTrigger(esemenyNev) {
    const esemeny = new CustomEvent(esemenyNev, { detail: this });
    window.dispatchEvent(esemeny);
  }

  megseSorok() {
    for (const key in this.#adat) {
      if (key == "megse") {
        if (this.#adat["megse"] == true) {
          this.keszElem.css("display", "none");
          this.megseElem.css("display", "inline");
          this.megse = true;
        } else {
          this.megse = false;
        }
      }
    }
  }
}

export default MegjelenitSor;
