class OutroController {
  
  public el = "#OutroController";

  data() {
    return {
      message: "outro controller",
    };
  }

  methods = {
    clique: () => {
         alert('teste');
     }
  }
}
