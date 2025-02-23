import type { Event } from "../models/event";

const events: Event[] = [
  {
    id: 1,
    category: "Music",
    title: "Concert",
    description: "A live concert",
    location: "London",
    date: "2021-07-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 2,
    category: "Music",
    title: "Festival",
    description: "A music festival",
    location: "Manchester",
    date: "2021-08-01",
    time: "12:00",
    petsAllowed: false,
    organizer: "Festival Republic",
  },
  {
    id: 3,
    category: "Theatre",
    title: "Play",
    description: "A live play",
    location: "Birmingham",
    date: "2021-09-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "National Theatre",
  },
  {
    id: 4,
    category: "Sports",
    title: "Musical",
    description: "A live musical",
    location: "Liverpool",
    date: "2021-10-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Cameron Mackintosh",
  },
  {
    id: 5,
    category: "Sports",
    title: "Stand-up",
    description: "A live stand-up comedy show",
    location: "Leeds",
    date: "2021-11-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
  {
    id: 6,
    category: "Comedy",
    title: "Improv",
    description: "A live improv comedy show",
    location: "Glasgow",
    date: "2021-12-01",
    time: "19:00",
    petsAllowed: false,
    organizer: "Live Nation",
  },
];

export function getEventByCategory(category: string): Promise<Event[]> {
  const filteredEvents = events.filter((event) => event.category === category);
  return Promise.resolve(filteredEvents);
}

export function getAllEvents(): Promise<Event[]> {
  return Promise.resolve(events);
}

export function getEventById(id: number): Promise<Event | undefined> {
  return Promise.resolve(events.find((event) => event.id === id));
}

export function addEvent(newEvent: Event): Promise<Event> {
  newEvent.id = events.length + 1;
  events.push(newEvent);
  return Promise.resolve(newEvent);
}


