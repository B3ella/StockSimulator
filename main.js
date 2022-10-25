import oparationsControler from "./oparations/controler.js";
import User from "./classes/user.js";
import visualControler from "./visual/visualControler.js"

let user = new User();
visualControler(user);
oparationsControler(user);
