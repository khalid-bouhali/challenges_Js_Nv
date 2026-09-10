function bookInfos( title , wrighter , year ){
    return {
        title : "HarryPotter",
        wrighter : "GeorgeOrwell",
        year : 1949,
    };
}
let book = bookInfos("HarryPotter" , "GeorgeOrwell" , 1949 )
console.log(
    "-The title is :" , book.title,
    "-The Wrighter is :" , book.wrighter,
    "-Published the year :" , book.year,
);