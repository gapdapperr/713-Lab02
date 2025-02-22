import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function createParticipants() {
  const participants = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
    },
    { 
      name: "Alice Johnson",
      email: "alice.johnson@example.com" 
    },
    {
      name: "Bob Brown",
      email: "bob.brown@example.com",
    },
    {
      name: "Charlie Davis",
      email: "charlie.davis@example.com",
    },
  ];


for (const participant of participants) {
  await prisma.participant.create({
    data: participant,
  });
}

const responseParticipant = await prisma.participant.findMany();
const responseEvent = await prisma.event.findMany();

addEvent(responseParticipant[0].id, responseEvent[0].id);
addEvent(responseParticipant[0].id, responseEvent[1].id);
addEvent(responseParticipant[0].id, responseEvent[2].id);
addEvent(responseParticipant[1].id, responseEvent[3].id);
addEvent(responseParticipant[1].id, responseEvent[4].id);
addEvent(responseParticipant[1].id, responseEvent[5].id);
addEvent(responseParticipant[2].id, responseEvent[0].id);
addEvent(responseParticipant[2].id, responseEvent[1].id);
addEvent(responseParticipant[2].id, responseEvent[2].id);
addEvent(responseParticipant[3].id, responseEvent[3].id);
addEvent(responseParticipant[4].id, responseEvent[4].id);
addEvent(responseParticipant[1].id, responseEvent[5].id);
const responseParticipant2 = await prisma.participant.findMany({
  include: {
    events: true,
  },
})

const responseEvents = await prisma.event.findMany({
  include: {
    participants: true,
  }
})
console.log(responseParticipant2);
console.log(responseEvents);


}

async function addEvent(participantId: number, eventId: number) {
  await prisma.participant.update({
    where: { id: participantId },
    data: {
      events: {
        connect: {
          id: eventId,
        },
      },
    },
  });
}

