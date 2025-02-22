import type { Event } from "../models/event";

import * as repo from "../repository/eventRepositoryPrisma";

export function getEventByCategory(category: string): Promise<Event[]> {
  return repo.getEventByCategory(category);
}

export function getAllEvents(): Promise<Event[]> {
  return repo.getAllEvents();
}

export function getEventById(id: number) {
  return repo.getEventById(id);
}

export function addEvent(newEvent: Event): Promise<Event> {
  return repo.addEvent(newEvent);
}