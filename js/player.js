class Player {
  constructor(id, name, avatar, weapon) {
    this.id = id;
    this.name = name;
    this.avatar = avatar;
    this.weapon = weapon;
  }

  generate = () => {
    return {
      id: this.id,
      name: this.name,
      avatar: `<img src="${this.avatar}" />`,
      health: 100,
      location: { row: 0, column: 0 },
      weapon: {
        damage: 10,
        image: `<img src="${this.weapon}" data-damage="10" />`,
        old: null,
      },
    };
  };
}

export default Player;
