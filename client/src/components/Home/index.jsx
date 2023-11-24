import Card from '../Cards'
export default function index({data}) {

  return (
    <div className="bookContainer">
          {data.map((book) => (
            <Card key={book.id} book={book}  />
          ))}
    </div>
  )
}
