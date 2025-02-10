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


app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.get("/test", (req: Request, res: Response) => {
  const id = req.query.id;   
    const output = `id: ${id}`;
    res.send(output);
});

app.get("/events", (req, res) => {
  if (req.query.category) {
    const category = req.query.category;
    const filteredEvents = events.filter((event) => event.category === category);
    res.json(filteredEvents);
    } else {
    res.json(events);
    }
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})
