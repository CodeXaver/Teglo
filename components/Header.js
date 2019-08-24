import Head from 'next/head'
import Link from 'next/link';


const imageStyle = {
  width: '40px',
  height: '50px',
  
}

const Header = () => (
  

<div className="header">


      <Head>
        <title>Teglo Pharmacy</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" 
      type="image/png" 
      href="../static/Pharmacy2.PNG"></link>

        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>

      </Head>


    <nav className="navbar .text-white navbar-expand-lg navbar-dark bg-primary fixed-top">
  <a className="navbar-brand" href="/">    <img src="/static/Pharmacy2.PNG" alt="Teglo Logo" style={imageStyle} className="hoverable imageStyle" />
 </a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse " id="navbarNav">
    <ul className="navbar-nav ml-auto font-weight-bold	">
    <Link className="nav-item" href="/">
      <a className="nav-link  text-white" >Home</a>
    </Link>
    <Link className="nav-item" href="/products">
      <a className="nav-link text-white">Our Products</a>
    </Link>
    <Link className="nav-item" href="/services">
      <a className="nav-link text-white">Our Services</a>
    </Link>
    <Link className="nav-item" href="/branches">
      <a className="nav-link text-white">Branches</a>
    </Link>
    <Link className="nav-item about" href="/about" >
      <a className="nav-link last-link text-white">About Us</a>
    </Link>
    
   
<style jsx>
  {`
  *{
  font-size: 20px;  
  }
a{
  margin-left: 10px;
}

.last-link{
  margin-right:40px;
}
.imageStyle{
  padding-left:80px;
}

  `}
</style>

    </ul>
  </div>
</nav>
<br/>


  </div>
);

export default Header;