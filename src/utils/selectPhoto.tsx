// import images
// switch statement for images

import angela from "../assets/images/avatar-angela-gray.png";
import mark from "../assets/images/avatar-mark-webber.webp";
import jacob from "../assets/images/avatar-jacob-thompson.webp";
import rizky from "../assets/images/avatar-rizky-hasanuddin.webp";
import kim from "../assets/images/avatar-kimberly-smith.webp";
import nathan from "../assets/images/avatar-nathan-peterson.webp";
import anna from "../assets/images/avatar-anna-kim.webp";

export const selectPhoto = (name: string) => {
  switch (name) {
    case "Mark Webber":
      return mark;
    case "Angela Gray":
      return angela;
    case "Jacob Thompson":
      return jacob;
    case "Rizky Hasanuddin":
      return rizky;
    case "Kimberly Smith":
      return kim;
    case "Nathan Peterson":
      return nathan;
    default:
      return angela;
    case "Anna Kim":
      return anna;
  }
};
