import { PrismaClient } from "@prisma/client";
import add from "../function2";

const prisma = new PrismaClient();

export async function createEvents() {
  const events = [
    {
      category: "Music",
      title: "Music Festival",
      description: "A music festival",
      location: "San Francisco",
      date: "2022-01-01",
      time: "12:00",
      petsAllowed: true,
    },
    {
      category: "Theatre",
      title: "Broadway Show",
      description: "A Broadway musical",
      location: "New York",
      date: "2022-02-15",
      time: "19:00",
      petsAllowed: false,
    },
    {
      category: "Sports",
      title: "Basketball Game",
      description: "A professional basketball game",
      location: "Los Angeles",
      date: "2022-03-10",
      time: "18:00",
      petsAllowed: false,
    },
    {
      category: "Comedy",
      title: "Stand-up Comedy",
      description: "A stand-up comedy show",
      location: "Chicago",
      date: "2022-04-05",
      time: "20:00",
      petsAllowed: false,
    },
    {
      category: "Conference",
      title: "Tech Conference",
      description: "A technology conference",
      location: "San Jose",
      date: "2022-05-20",
      time: "09:00",
      petsAllowed: false,
    },
    {
      category: "Festival",
      title: "Food Festival",
      description: "A food festival with various cuisines",
      location: "Austin",
      date: "2022-06-25",
      time: "11:00",
      petsAllowed: true,
    },
  ];

  for (const event of events) {
    await prisma.event.create({
      data: {
        category: event.category,
        title: event.title,
        description: event.description,
        location: event.location,
        date: event.date,
        time: event.time,
        petsAllowed: event.petsAllowed,
      },
    });
  }
  const chiangMaiOrg = await prisma.organizer.create({
    data: {
      name: "Chiang Mai",
    },
  });

  const cmuOrg = await prisma.organizer.create({
    data: {
      name: "Chiang Mai University",
    },
  });

  const camtOrg = await prisma.organizer.create({
    data: {
      name: "CAMT",
    },
  })

  const responseEvent = await prisma.event.findMany();

  await prisma.event.update({
    where: { id: responseEvent[0].id },
    data: {
        organizer: {
            connect: {
                id: chiangMaiOrg.id,
            }}}})

            addOrganizerToEvent(responseEvent[1].id, chiangMaiOrg.id);
            addOrganizerToEvent(responseEvent[2].id, cmuOrg.id);
            addOrganizerToEvent(responseEvent[3].id, camtOrg.id);
            addOrganizerToEvent(responseEvent[4].id, chiangMaiOrg.id);
            addOrganizerToEvent(responseEvent[5].id, cmuOrg.id);
console.log("Database has been initialized with events.");

}

async function addOrganizerToEvent(eventId: number, organizerId: number) {
  await prisma.event.update({
    where: { id: eventId },
    data: {
      organizer: {
        connect: {
          id: organizerId,
        },
      },
    },
  });
}