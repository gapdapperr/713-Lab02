import express, { Request, Response } from 'express'
const app = express()
const port = 3000

interface Event {
  id: number;
  category: string;
  title: string;
  description: string;
  location: string;
  date: string;
  time: string;
  petsAllowed: boolean;
  organizer: string;
}

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
    }];


app.use(express.json());


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get("/test", (req: Request, res: Response) => {
  const id = req.query.id;   
    const output = `id: ${id}`;
    res.send(output);
});


function getEventByCategory (category:string): Event[] {
  const filteredEvents = events.filter((event) => event.category === category);
  return filteredEvents;
}

function getAllEvents(): Event[] {
  return events;
}

function getEventById(id: number): Event | undefined {
  return events.find((event) => event.id === id);
}

function addEvent(newEvent: Event): Event {
  newEvent.id = events.length + 1;
  events.push(newEvent);
  return newEvent;
}



app.get("/events", (req, res) => {
  if (req.query.category) {
    const category = req.query.category;
    const filteredEvents = getEventByCategory(category as string);
    res.json(filteredEvents);
    } else {
    res.json(getAllEvents());
    }
});


app.get("/events/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const event = getEventById(id);
  if (event) {
  res.json(event);
  } else {
  res.status(404).send("Event not found");
  }
}); 


app.post("/events", (req, res) => {
  const newEvent: Event = req.body;
  addEvent(newEvent);
  res.json(newEvent);
});


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
