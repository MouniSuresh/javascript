
class Book {
    constructor(title, author, publishedYear) {
        this.title = title;
        this.author = author;
        
        this.publishedYear = new Date(publishedYear, 0);
    }

    getSummary() {
        return `${this.title} by ${this.author}, Published in ${this.publishedYear.getFullYear()}`;
    
class EBook extends Book {
    constructor(title, author, publishedYear, fileSize) {
        super(title, author, publishedYear);
        this.fileSize = fileSize;
    }
}
    
    getSummary() {
        return `${this.title} by ${this.author}, Published in ${this.publishedYear.getFullYear()}, File Size: ${this.fileSize}MB`;
    }
}}

const book1 = new Book("Nothing will die", "william shakeshpear", 1925);
const book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);

const ebook1 = new EBook("Digital Fortress", "Dan Brown", 1998, 2.5);
const ebook2 = new EBook("The Martian", "Andy Weir", 2011, 1.8);

console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(ebook1.getSummary());
console.log(ebook2.getSummary());