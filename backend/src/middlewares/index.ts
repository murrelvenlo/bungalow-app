import express, { NextFunction, Request, Response } from "express";
import { get, identity, merge } from "lodash";

import { getUserBySessionToken } from "../db/users";

export const isOwner = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req.params;
    const currenUserId = get(req, "identity._id") as string;

    if (!currenUserId) {
      return res.sendStatus(403);
    }

    if (currenUserId.toString() !== id) {
      return res.sendStatus(403);
    }

    next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const isAuthenticated = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const sessionToken = req.cookies["VENLOMJ-AUTH"];

    if (!sessionToken) {
      return res.sendStatus(403);
    }

    const existUser = await getUserBySessionToken(sessionToken);

    if (!existUser) {
      return res.sendStatus(403);
    }

    merge(req, { identity: existUser });

    return next();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
