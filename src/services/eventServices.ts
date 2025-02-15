import exp from "constants";
import type { Event } from "../models/event";

import {getAllEvents as allEvents, getEventById as eventById, addEvent as addNewEvent} from "../repository/eventRepository"

export function getEventByCategory(category: string): Promise<Event[]> {
  return getEventByCategory(category);
}

export function getAllEvents(): Promise<Event[]> {
  return allEvents();
}

export function getEventById(id: number): Promise<Event | undefined> {
  return eventById(id);
}

export function addEvent(newEvent: Event): Promise<Event> {
  return addNewEvent(newEvent);
}