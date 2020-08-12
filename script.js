let db = firebase.firestore();
let stateRef = db.collection("states");

let app = new Vue({
  el: "#app",
  data: {
    state: {}
  },
  methods: {
    submitState() {
      stateRef.add({
        state: this.newState,
        username: this.name
      });
      this.reset();
      this.readRealState();
    },
    submitStateNew() {
      let id = stateRef.doc().id;
      stateRef.doc(id).set({
        id: id,
        state: this.newState,
        username: this.name
      });
      this.reset();
      this.readRealState();
    },
    reset() {
      this.newState = "";
      this.name = "";
    },
    readRealState() {
      stateRef
        .doc("nevada")
        .get()
        .then((doc) => {
          console.log(doc.data());
          console.log(doc);
          this.state = doc.data();
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },
  mounted() {
    this.readRealState();
  }
});