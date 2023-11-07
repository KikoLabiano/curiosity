import Experience from "../Experience";

export default class Description {
  constructor(vehicle) {
    this.experience = new Experience();
    this.resources = this.experience.resources;
    this.debug = this.experience.debug;
    this.descriptionTag = document.querySelector(".description");
    this.sizeTag = document.querySelector(".size");
    this.weightTag = document.querySelector(".weight");
    this.launchDate = document.querySelector(".launchDate");
    this.landingDate = document.querySelector(".landingDate");
    this.status = document.querySelector(".status");
    this.location = document.querySelector(".location");
    this.device = this.experience.device;

    this.setInstance();
    this.setDescription(vehicle);
  }

  randomTypeWriter(text, output) {
    // Dividimos el texto en caracteres.
    const characters = text.split("");
    // Creamos un arreglo para seguir el estado de cada carácter, si ha sido revelado o no.
    let revealed = new Array(characters.length).fill(false);

    // Calculamos cuántos caracteres hay que revelar (sin contar espacios).
    const toRevealCount = characters.filter((c) => c !== " ").length;
    let revealedCount = 0;

    const revealCharacter = () => {
      if (revealedCount < toRevealCount) {
        let randomIndex;

        // Encontrar un índice aleatorio que no haya sido revelado y que no sea un espacio.
        do {
          randomIndex = Math.floor(Math.random() * characters.length);
        } while (characters[randomIndex] === " " || revealed[randomIndex]);

        // Revelar el carácter en la posición aleatoria.
        output.textContent =
          output.textContent.substring(0, randomIndex) +
          characters[randomIndex] +
          output.textContent.substring(randomIndex + 1);

        // Marcar el carácter como revelado.
        revealed[randomIndex] = true;
        revealedCount++;

        // Establecer un tiempo aleatorio para la próxima revelación.
        let speed = Math.random() * (200 - 50);
        setTimeout(revealCharacter, speed);
      }
    };

    output.textContent = characters
      .map((c) => (c === " " ? " " : "_"))
      .join("");

    revealCharacter();
  }

  setInstance() {
    document.querySelector(".descriptionContainer").style.display = "flex";
  }

  startFlicker() {
    const flickerBox = document.querySelector(".flickeringContainer");
    flickerBox.style.animation = "flickerAnimation 0.1s infinite";
  }

  stopFlicker() {
    const flickerBox = document.querySelector(".flickeringContainer");
    flickerBox.style.animation = "none";
  }

  setDescription(vehicle) {
    const isMobile = this.device.isMobile();

    switch (vehicle) {
      case "curiosity":
        if (isMobile) {
          this.stopFlicker();
          this.descriptionTag.textContent = "Curiosity";
          this.sizeTag.textContent = "Size: 2.9 m × 2.7 m × 2.2 m ";
          this.weightTag.textContent = "Weight: 899 kg";
          this.launchDate.textContent =
            "Launch date: November 26, 2011 15:02:00 UTC";
          this.landingDate.textContent =
            "Landing date: August 6, 2012 05:17:57 UTC";
          this.status.textContent = "Status: Active";
          this.location.textContent = "Location: Gale Crater";
        } else {
          this.startFlicker();
          setTimeout(this.stopFlicker, 500);
          this.randomTypeWriter("Curiosity", this.descriptionTag);
          this.randomTypeWriter("Size: 2.9 m × 2.7 m × 2.2 m ", this.sizeTag);
          this.randomTypeWriter("Weight: 899 kg", this.weightTag);
          this.randomTypeWriter(
            "Launch date: November 26, 2011 15:02:00 UTC",
            this.launchDate
          );
          this.randomTypeWriter(
            "Landing date: August 6, 2012 05:17:57 UTC",
            this.landingDate
          );
          this.randomTypeWriter("Status: Active", this.status);
          this.randomTypeWriter("Location: Gale Crater", this.location);
        }
        break;
      case "perseverance":
        if (isMobile) {
          this.stopFlicker();
          this.descriptionTag.textContent = "Perseverance";
          this.sizeTag.textContent = "Size: 2.9 m × 2.7 m × 2.2 m ";
          this.weightTag.textContent = "Weight: 1025 kg";
          this.launchDate.textContent =
            "Launch date: July 30, 2020 11:50:00 UTC";
          this.landingDate.textContent =
            "Landing date: February 18, 2021 20:55:00 UTC";
          this.status.textContent = "Status: Active";
          this.location.textContent = "Location: Jezero Crater";
        } else {
          this.startFlicker();
          setTimeout(this.stopFlicker, 500);
          this.randomTypeWriter("Perseverance", this.descriptionTag);
          this.randomTypeWriter("Size: 2.9 m × 2.7 m × 2.2 m ", this.sizeTag);
          this.randomTypeWriter("Weight: 1025 kg", this.weightTag);
          this.randomTypeWriter(
            "Launch date: July 30, 2020 11:50:00 UTC",
            this.launchDate
          );
          this.randomTypeWriter(
            "Landing date: February 18, 2021 20:55:00 UTC",
            this.landingDate
          );
          this.randomTypeWriter("Status: Active", this.status);
          this.randomTypeWriter("Location: Jezero Crater", this.location);
        }
        break;
      case "ingenuity":
        if (isMobile) {
          this.stopFlicker();
          this.descriptionTag.textContent = "Ingenuity";
          this.sizeTag.textContent = "Size: 1.2 m × 0.49 m × 0.49 m ";
          this.weightTag.textContent = "Weight: 1.8 kg";
          this.launchDate.textContent =
            "Launch date: July 30, 2020 11:50:00 UTC";
          this.landingDate.textContent =
            "Landing date: February 18, 2021 20:55:00 UTC";
          this.status.textContent = "Status: Active";
          this.location.textContent = "Location: Jezero Crater";
        } else {
          this.startFlicker();
          setTimeout(this.stopFlicker, 500);
          this.randomTypeWriter("Ingenuity", this.descriptionTag);
          this.randomTypeWriter("Size: 1.2 m × 0.49 m × 0.49 m ", this.sizeTag);
          this.randomTypeWriter("Weight: 1.8 kg", this.weightTag);
          this.randomTypeWriter(
            "Launch date: July 30, 2020 11:50:00 UTC",
            this.launchDate
          );
          this.randomTypeWriter(
            "Landing date: February 18, 2021 20:55:00 UTC",
            this.landingDate
          );
          this.randomTypeWriter("Status: Active", this.status);
          this.randomTypeWriter("Location: Jezero Crater", this.location);
        }
        break;
      default:
        this.descriptionTag.innerHTML = "Select a vehicle";
        break;
    }
  }

  show() {
    document.querySelector(".descriptionContainer").style.display = "flex";
  }
}
