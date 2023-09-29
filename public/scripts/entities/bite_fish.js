class BiteFish extends Fish {

  constructor(options) {
    super(options);
    this.imageUri = "./images/biteFish.gif";
  }

  onClick(event) {
    this.height += 10;
    this.width += 10;
  }


  updateOneTick() {
    super.updateOneTick();

    //detection for EAT
    const entities = this.tank.denizens;
    for (const el in entities) {
      const d = this.position.distance(entities[el].position);
      if (d < 20 && entities[el].id != this.id) {
        entities[el].kill();

        //gets bigger
        this.height += 15;
        this.width += 15;
      }
    }

  }
}