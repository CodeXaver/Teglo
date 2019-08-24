import Layout from '../components/MyLayout';
import Link from 'next/link';

const imageStyle = {
  width: '100%'
}
const cardstyle = {
  width: '18rem',
}
const cardImageStyle ={
  width: '333px',
  height: '444px',
  align: 'center'
}

const cardGroupImageStyle ={
  width: '200px',
  height: '200px',
  align: 'center'
}
const cardTitleStyle ={
  'text-center': 'center',
}

const PostLink = props => (
  <li>
    <Link href={`/post?title=${props.title}`}>
      <a>{props.title}</a>
    </Link>
  </li>
);
export default function Blog() {
  return (


    
    <Layout>
    <div className="relative">
 <img src="/static/Pharmacy.jpg" alt="Pharmacy shop" style={imageStyle} class="hoverable" />
  <p className="absolute-text"><bold> </bold> <br/>  </p>

  <style jsx>{`
  .relative{position:relative; }
.absolute-text{
  position:absolute;
 bottom:0; top: 350px;
font-size:24px;
font-family:"Arial Black";
background:none;
padding:10px 20px;
width:100%; text-align:center;
font-size:60px; color:#073998
;
}
.absolute-text a{ }
      `}</style>
</div>


 

  <br/>
  <br/>
  <br/>
  <br/>

  <div className="container " >
  <div className="row " >


   {/* left colum*/}
    <div className="col-9 ">
     <div>
     <div className="card d-inline border-bottom border-primary" style={cardstyle}>
  <img src="../static/Pharmacy2.png" className="card-img-top rounded-circle mx-auto d-block" alt="..." style={cardImageStyle}/>
  <div className="card-body">
    <h5 className="card-title  text-center">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<br/>

<div className="card d-inline border-bottom" style={cardstyle}>
  <img src="../static/Pharmacy2.png" className="card-img-top rounded-circle mx-auto d-block" alt="..." style={cardImageStyle}/>
  <div className="card-body">
    <h5 className="card-title  text-center">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<br/>

<div className="card d-inline" style={cardstyle}>
  <img src="../static/Pharmacy2.png" className="card-img-top rounded-circle mx-auto d-block" alt="..." style={cardImageStyle}/>
  <div className="card-body">
    <h5 className="card-title  text-center">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

<hr/>
       
     </div>

     <br/>
<br/>

{/**card group */}
     <div class="card-group">
     <div className="card" style={cardstyle}>
  <img src="../static/Pharmacy.jpg" className="card-img-top rounded-circle mx-auto d-block" alt="..." style={cardGroupImageStyle}/>
  <div className="card-body">
    <h5 className="card-title  text-center">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" style={cardstyle}>
  <img src="../static/Pharmacy.jpg" className="card-img-top rounded-circle mx-auto d-block" alt="..." style={cardGroupImageStyle}/>
  <div className="card-body">
    <h5 className="card-title  text-center">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
<div className="card" style={cardstyle}>
  <img src="../static/Pharmacy.jpg" className="card-img-top rounded-circle mx-auto d-block" alt="..." style={cardGroupImageStyle}/>
  <div className="card-body">
    <h5 className="card-title  text-center">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>


</div>


    </div>

    {/* right column*/}
    <div className="col-3 border">
      One of three columns
    </div>
  </div>
</div>
    

    
    </Layout>
  );
}