let terminal = {
  page: "about",
  filters: [],
  tourLocations: []
};

let appName = "test";

export const LS = {
  init() {
    this.name = appName;
    let data = JSON.parse(localStorage.getItem(this.name));
    if (data !== null) {
      this.data = data;
    } else {
      this.data = terminal;
      this.save(this.data);
    }
  },
  save(data) {
    this.data = data;
    localStorage.setItem(this.name, JSON.stringify(data));
  }
};
