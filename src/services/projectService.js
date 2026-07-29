import { projects } from "../data/projects.js";

export function getAllProjects() {
    return projects;
};

export function getProjectById(id) {
    return projects.find(project => project.id === Number(id));
}