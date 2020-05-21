
import {Response} from "express";

// Package just to create friendly codes, ex: 'curly-falcon-40'
const hri = require("human-readable-ids").hri;

export function databaseErrorHandler(res: Response, err: any) {
    const id = hri.random();

    // Developer should find on console error provided by user
    console.log("Database error occurred", id, err);

    res.status(500).json({
        code: "ERR-002",
        message: `Creation of lesson failed: error code: ${id}`
    });
}