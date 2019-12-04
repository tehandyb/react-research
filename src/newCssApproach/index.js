import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ProductCard from './ProductCard';

const product = {
  productId: 1238,
  name: "IFS Manufacturing",
  logoUrl: "https://cdn0.capterra-static.com/logos/150/2099231.png",
  overallRating: 4.5,
  reviewCount: 3,
  longDescription: "IFS delivers software to make enterprises more agile by streamlining four core strategic processes: service & asset management, manufacturing, supply chain and projects. IFS develops, supplies, and implements IFS Applications, a component-based extended ERP suite built on SOA technology. IFS provides software solutions that serve manufacturing, project-based and asset-intensive industries and other complex environments.",
  slug: "IFS-Manufacturing",
};

class App extends Component {
  render() {
    return <ProductCard product={product}/>;
  }
}

ReactDOM.render(
  <App />, 
  document.getElementById('root')
);