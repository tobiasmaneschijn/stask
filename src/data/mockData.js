
const getRandomDate = () => {

    const year = getRandomIntInclusive(2020, 2022)
    const month = getRandomIntInclusive(1, 12)
    const date = getRandomIntInclusive(1, 28)
    const hours = getRandomIntInclusive(1, 24)
    const minutes = getRandomIntInclusive(1, 60)

    return new Date(year, month, date, hours, minutes)
}
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

const mockData = [
    {
        id: 0,
        title: "Math 2",
        description: "This is a very hard math assignment",
        links: [
            "https://google.com",
            "https://facebook.com",
            "https://twitter.com",
        ],
        course: "Math 2",
        dueDate: getRandomDate().toISOString()
    }
,
    {
        id: 1,
        title: "Chemistry 1",
        description: "This is a very hard chen assignment",
        links: [
            "https://google.com",
            "https://facebook.com",
            "https://twitter.com",
        ],
        course: "Math 2",
        dueDate: getRandomDate().toISOString()
    }
,
    {
        id: 2,
        title: "Math 2",
        description: "This is a very hard math assignment",
        links: [
            "https://google.com",
            "https://facebook.com",
            "https://twitter.com",
        ],
        course: "Math 2",
        dueDate: getRandomDate().toISOString()
    }
    ,
    {
        id: 3,
        title: "Math 2",
        description: "This is a very hard math assignment",
        links: [
            "https://google.com",
            "https://facebook.com",
            "https://twitter.com",
        ],
        course: "Math 2",
        dueDate: getRandomDate().toISOString()
    }
    ,
    {
        id: 4,
        title: "Math 2",
        description: "This is a very hard math assignment",
        links: [
            "https://google.com",
            "https://facebook.com",
            "https://twitter.com",
        ],
        course: "Math 2",
        dueDate: getRandomDate().toISOString()
    }
    ,
    {
        id: 5,
        title: "Math 2",
        description: "This is a very hard math assignment",
        links: [
            "https://google.com",
            "https://facebook.com",
            "https://twitter.com",
        ],
        course: "Math 2",
        dueDate: getRandomDate().toISOString()
    }
    ,
    {
        id: 6,
        title: "Math 2",
        description: "This is a very hard math assignment",
        links: [
            "https://google.com",
            "https://facebook.com",
            "https://twitter.com",
        ],
        course: "Math 2",
        dueDate: getRandomDate().toISOString()
    }
    ,
    {
        id: 7,
        title: "Math 2",
        description: "This is a very hard math assignment",
        links: [
            "https://google.com",
            "https://facebook.com",
            "https://twitter.com",
        ],
        course: "Math 2",
        dueDate: getRandomDate().toISOString()
    }
]
export default mockData


