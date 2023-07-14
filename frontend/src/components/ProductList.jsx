import Product from './Product';
import '../css/Product.css';

export default function ProductList(props) {
  const {products} = props;
  const list = products.map((product) => {
    return (<div className='product-item' key={product.id}><Product product={product} /></div>)
  })

  return (
  //  <div className='product-list'>
  //   {list}
  //   </div>
  <div className='product-list' key="product-list">
    {list}
  </div>
  )
}

ProductList.defaultProps = {
  products: [{
    id: 1,
    name: "Roses",
    image: '',
    description: "A delightful bouquet of roses for a significant other on any special occasion",
    price: 70
  },
  {
    id: 2,
    name: "Heart pendant",
    image: '',
    description: "A gold necklace with a heart pendant",
    price: 150
  }
]
}