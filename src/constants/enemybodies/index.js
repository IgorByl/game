import orcBody from "./../../images/models/orc/body.png";
import orcHead from "./../../images/models/orc/head.png";
import orcLefthand from "./../../images/models/orc/lefthand.png";
import orcRighthand from "./../../images/models/orc/righthand.png";

import undeadBody from "./../../images/models/undead/body.png";
import undeadHead from "./../../images/models/undead/head.png";
import undeadLefthand from "./../../images/models/undead/lefthand.png";
import undeadRighthand from "./../../images/models/undead/righthand.png";

import taurenBody from "./../../images/models/tauren/body.png";
import taurenHead from "./../../images/models/tauren/head.png";
import taurenLefthand from "./../../images/models/tauren/lefthand.png";
import taurenRighthand from "./../../images/models/tauren/righthand.png";

const arrayOfEnemyBodys = [
  {
    head: taurenHead,
    body: taurenBody,
    lefthand: taurenLefthand,
    righthand: taurenRighthand,
    level: "LEVEL  III"
  },
  {
    head: undeadHead,
    body: undeadBody,
    lefthand: undeadLefthand,
    righthand: undeadRighthand,
    level: "LEVEL  II"
  },
  {
    head: orcHead,
    body: orcBody,
    lefthand: orcLefthand,
    righthand: orcRighthand,
    level: "LEVEL  I"
  }
];

export default arrayOfEnemyBodys;
