
const trips = [
    {
        destination: "Parigi",
        startDate: "2025-02-01",
        endDate: "2025-02-10",
        imageUrl: "/parigi.jpg",
        participants: [
            {
                firstName: "Marco",
                lastName: "Rossi",
                email: "marco.rossi@email.com",
                phone: "+39 123 456 7890",
                fiscalCode: "RSSMRC85M01H501Z",
            },
            {
                firstName: "Anna",
                lastName: "Bianchi",
                email: "anna.bianchi@email.com",
                phone: "+39 098 765 4321",
                fiscalCode: "BNCHNA75P45D325V",
            },
        ],
        accompanier: {
            firstName: "Giovanni",
            lastName: "Gialli",
            email: "giovanni.gialli@email.com",
        },
    },
    {
        destination: "Roma",
        startDate: "2025-03-01",
        endDate: "2025-03-07",
        imageUrl: "/roma.jpg",
        participants: [
            {
                firstName: "Luca",
                lastName: "Verdi",
                email: "luca.verdi@email.com",
                phone: "+39 234 567 8901",
                fiscalCode: "VRDLCA90A01H123Z",
            },
        ],
        accompanier: {
            firstName: "Francesca",
            lastName: "Blu",
            email: "francesca.blu@email.com",
        },
    },
    {
        destination: "Londra",
        startDate: "2025-04-15",
        endDate: "2025-04-20",
        imageUrl: "/londra.jpg",
        participants: [
            {
                firstName: "Giulia",
                lastName: "Neri",
                email: "giulia.neri@email.com",
                phone: "+39 456 789 0123",
                fiscalCode: "NRIGLA75T47A112W",
            },
        ],
        accompanier: {
            firstName: "Alessandro",
            lastName: "Gialli",
            email: "alessandro.gialli@email.com",
        },
    },
];



export default trips;
