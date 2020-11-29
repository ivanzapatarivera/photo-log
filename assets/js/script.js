import { nav } from "./navigation.js";
import { logger } from "./logger.js";
import { profile } from "./profilepicture.js";
import { status } from "./status.js";
import { pictures } from "./pictures.js";
import { places } from "./places.js";

window.onload = function () {
  nav();
  logger();
  profile();
  status();
  pictures();
  places();
};
