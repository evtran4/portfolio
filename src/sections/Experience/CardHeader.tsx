import IconGroup from "../../components/IconGroup";
import CardImage from "./CardImage";
import docker from "../../../public/docker.webp"
import fastApiIcon from "../../../public/fastapi.png"
import git from "../../../public/git.png"
import html from "../../../public/html.png"
import js from "../../../public/js.png"
import ts from "../../../public/ts.png"
import react from "../../../public/react.png"
import python from "../../../public/python.png"
import sql from "../../../public/sql.png"
import svelte from "../../../public/svelte.png"
import vue from "../../../public/vue.png"
import node from "../../../public/nodejs.png"
import gcp from "../../../public/gcp.png"
import firebase from "../../../public/firebase.png"
import postgresql from "../../../public/postgresql.webp"
import tailwind from "../../../public/tailwind.svg"
import DownArrow from "@mui/icons-material/ExpandMoreRounded"
import UpArrow from "@mui/icons-material/ExpandLessRounded"
import type Icon from "../../types";
import { useState } from "react";



interface CardHeaderProps {
    tools: string[],
    title: string,
    image: string,
    date: string,
    opened: boolean,
}

export default function CardHeader({tools, title, image, opened, date}: CardHeaderProps) {
    let icons: Icon[] = []
    tools.forEach((tool) => {
        let imagePath;
        let link;

        switch (tool) {
            case "Docker":
                imagePath = docker;
                link = "https://www.docker.com/";
            break;
            case "FastAPI":
                imagePath = fastApiIcon;
                link = "https://fastapi.tiangolo.com/";
            break;
            case "Git":
                imagePath = git;
                link = "https://git-scm.com/";
            break;
            case "HTML":
                imagePath = html;
                link = "https://developer.mozilla.org/en-US/docs/Web/HTML";
            break;
            case "JavaScript":
                imagePath = js;
                link = "https://developer.mozilla.org/en-US/docs/Web/JavaScript";
            break;
            case "TypeScript":
                imagePath = ts;
                link = "https://www.typescriptlang.org/";
            break;
            case "React":
                imagePath = react;
                link = "https://react.dev/";
            break;
            case "Python":
                imagePath = python;
                link = "https://www.python.org/";
            break;
            case "SQL":
                imagePath = sql;
                link = "https://en.wikipedia.org/wiki/SQL";
            break;
            case "Svelte":
                imagePath = svelte;
                link = "https://svelte.dev/";
            break;
            case "Vue":
                imagePath = vue;
                link = "https://vuejs.org/";
            break;
            case "Node":
                imagePath = node;
                link = "https://nodejs.org/";
            break;
            case "GCP":
                imagePath = gcp;
                link = "https://cloud.google.com/";
            break;
            case "Firebase":
                imagePath = firebase;
                link = "https://firebase.google.com/";
            break;
            case "PostgreSQL":
                imagePath = postgresql
                link = "https://www.postgresql.org/"
            break;
            case "TailwindCSS":
                imagePath = tailwind
                link = "https://v3.tailwindcss.com/"
            break;
            default:
            imagePath = "";
            link = "#";
        }
        icons.push({
            link: link,
            imagePath: imagePath
        });
    });
    return(
        <div className = "header">
            <div className="left">
                <CardImage imagePath={image}></CardImage>
                <div className="descriptionContainer">
                    <h2 className="cardTitle">{title}</h2>
                    <p>{date}</p>
                    <IconGroup size={30} icons={icons}></IconGroup>
                </div>
            </div>
            <DownArrow 
                sx={{
                    fontSize: "60px", 
                    transition: "0.5s", 
                    transform: (opened ? "rotate(180deg)": "none"), 
                    '&:hover': {transform: opened ? "rotate(180deg) translateY(5px)": "rotate(0deg) translateY(5px)",},
                }}
            />      
        </div>
    )
}