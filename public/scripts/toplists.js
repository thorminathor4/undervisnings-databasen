const users = [{name: "Thor Find Andersen", age: 23, status: "Studerende", institution: "Københavns Erhvervs Akademi"}];
const templateTags = ["test", "layouttest", "admin", "fake", "intetmateriale", "håberdetvirker"];
const templateDescription = `Dette er bare en test af hvordan et opslag ser ud.
Her skal der bare være noget fyldtekst,
så man kan se hvordan det ser ud når det bliver vist på siden.
Her er et eksempel på hvordan en liste i beskrivelsen vil se ud:\n
- Første ting\n
- Anden ting\n
- Tredje ting\n
Forhåbentligvis ser det ud som det skal.`
const posts = [
    {
        title: "Test Opslag 1", creator: users[0], tags: templateTags, description: templateDescription,
        ratingsCount: 0, rating: 0, created: "17-01-2022", commentsCount: 0
    },
    {
        title: "Test Opslag 2", creator: users[0], tags: templateTags, description: templateDescription,
        ratingsCount: 0, rating: 0, created: "17-01-2022", commentsCount: 0
    },
    {
        title: "Test Opslag 2", creator: users[0], tags: templateTags, description: templateDescription,
        ratingsCount: 0, rating: 0, created: "17-01-2022", commentsCount: 0
    }
];
