import Header from './Header';
import Footer from './Footer';


const layoutStyle = {

 
};

const Layout = props => (
  <div style={layoutStyle}>

    <Header />
    <br/>
    <br/>
    <br/>
    {props.children}
    <Footer />
  </div>
);

export default Layout;