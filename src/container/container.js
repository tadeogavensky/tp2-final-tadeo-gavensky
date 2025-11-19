import Service from "../services/Service.js";
import Controller from "../controllers/Controller.js";
import Dao from "../dao/Dao.js";

const dao = new Dao();
const service = new Service(dao);
const controller = new Controller(service);

export default controller;
