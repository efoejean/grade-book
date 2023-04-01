import { Router } from "express";
import config from "../config.js";
import AppointmentController from "../controllers/appointment.js";
import Appointment from "../models/appointment.js";

const router = new Router();

router.get("/", async (req, res) => {
  res.send("appointment");
});

router.post("/", async (req, res) => {
  try {
    // use isAuth and role is Admin to check if user is admin to access this route

    if (
      req.isAuth?.role === config.role.ADMIN ||
      req.isAuth?.role === config.role.EMPLOYEE ||
      req.isAuth?.role === config.role.USER
    ) {
      const appointment = new Appointment(req.body); // use the constructor to create a new instance of the model

      const errors = await appointment.validate(); // validate the model use the model's validate method

      if (errors.length) {
        throw new Error(errors.join("\n"));
      }

      const createAppointment = await AppointmentController.create(req.body);

      res.status(201).json(createAppointment);
    } else {
      throw new Error("You are not authorized to perform this action");
    }
  } catch ({ message }) {
    res.status(500).send({ message });
  }
});

router.post("/appointments", async (req, res) => {
  try {
    // use isAuth and role is Admin to check if user is admin to access this route

    if (
      req.isAuth?.role === config.role.ADMIN ||
      req.isAuth?.role === config.role.EMPLOYEE
    ) {
      const allAppointments = await AppointmentController.index();
      res.json(allAppointments);
    } else {
      throw new Error("You are not authorized to perform this action");
    }
  } catch ({ message }) {
    res.status(500).send({ message });
  }
});

router.post("/id/:id", async (req, res) => {
  try {
    // use isAuth and role is Admin to check if user is admin to access this route

    if (
      req.isAuth?.role === config.role.ADMIN ||
      req.isAuth?.role === config.role.EMPLOYEE
    ) {
      const appointment = await AppointmentController.show(req.params.id);
      res.json(appointment);
    } else {
      throw new Error("You are not authorized to perform this action");
    }
  } catch ({ message }) {
    res.status(500).send({ message });
  }
});

export default router;
