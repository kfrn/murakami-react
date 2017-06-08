import React from 'react';
import { Link } from 'react-router-dom'

const SingleBook = () => {
  return (
    <div className="container">
      <h3>{sampleData.title}</h3>
      <div className="single-book">
        <div className="book-info">
          <Link to="#"><img src={sampleData.cover} alt={`Cover of ${sampleData.title}`} className="book-cover-image"></img></Link>
          <div className="book-properties">
            <p><span className="emphasis">Year</span> <br/>{sampleData.year}</p>
            <p><span className="emphasis">Original title (Japanese)</span> <br/>{sampleData.titleJP}</p>
            <p><span className="emphasis">Original title (Romaji)</span> <br/>{sampleData.titleRomaji}</p>
          </div>
        </div>
        <div className='book-synopsis'>
          <p className="synopsis">{sampleData.synopsis}</p>
          <p className="cart-link"><Link to="#" className="add-to-cart">Add to cart</Link></p>
        </div>
      </div>
    </div>
  );
}

const sampleData = {
  id: 3,
  title: "A Wild Sheep Chase",
  year: 1982,
  cover: "/images/Haruki_murakami_a_wild_sheep_chase.jpg", titleJP: "羊をめぐる冒険", titleRomaji: "Hitsuji o meguru bōken",
  synopsis: "A marvelous hybrid of mythology and mystery, <em>A Wild Sheep Chase</em> is the extraordinary literary thriller that launched Haruki Murakami’s international reputation. <br/>It begins simply enough: A twenty-something advertising executive receives a postcard from a friend, and casually appropriates the image for an insurance company’s advertisement. What he doesn’t realize is that included in the pastoral scene is a mutant sheep with a star on its back, and in using this photo he has unwittingly captured the attention of a man in black who offers a menacing ultimatum: find the sheep or face dire consequences. Thus begins a surreal and elaborate quest that takes our hero from the urban haunts of Tokyo to the remote and snowy mountains of northern Japan, where he confronts not only the mythological sheep, but the confines of tradition and the demons deep within himself. Quirky and utterly captivating, <em>A Wild Sheep Chase</em> is Murakami at his astounding best."
}

export default SingleBook;
