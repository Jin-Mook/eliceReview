import { useState } from "react";


// 각 카테고리의 헤더를 보여준다.
function ProductCategoryRow({category}) {

  return (
    <tr>
      <th colSpan="2" >
        {category}
      </th>
    </tr>
  )
}

// 각각의 제품에 해당하는 행을 보여준다.
function ProductRow({name, price, stocked}) {
  
  const _name = stocked ? name : <span style={{color: 'red'}}>{name}</span>

  return (
    <tr>
      <td>{_name}</td>
      <td>{price}</td>
    </tr>
  )
}

// 유저의 입력을 기반으로 데이터 콜렉션을 필터링 해서 보여준다.
function ProductTable({products, filterText, isStockOnly}) {  // 상품들의 배열을 props로 가져온다.
  const rows = [];
  let lastCategory = null;
  products.forEach((el) => {
    if (el.name.indexOf(filterText) === -1) {  // 필터와 맞는 단어가 없으면 그냥 넘김
      return;
    }

    if (isStockOnly && !el.stocked) {   // checkbox에 체크가 되고 stocked 가 false라면 넘김
      return;
    }


    if (el.category != lastCategory) {
      rows.push(<ProductCategoryRow category={el.category} key={el.category}></ProductCategoryRow>)
      lastCategory = el.category
    }

    rows.push(<ProductRow name={el.name} price={el.price} key={el.name} stocked={el.stocked}></ProductRow>)   
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

// 모든 유저의 입력을 받는다.
function SearchBar({filterText, isStockOnly}) {

  return (
    <form>
      <input type="text" placeholder="Search..." value={filterText} />
      <p>
        <input type="checkbox" checked={isStockOnly}/>
        {' '}
        Only show products in stock
      </p>
    </form>
  )
}



// 전체 최상위 컴포넌트.
function FilterableProduectTable() {
  const PRODUCTS = [
    {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
    {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
    {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
    {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
    {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
    {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
  ]

  const [filterText, setFilterText] = useState('');
  const [isStockOnly, setIsStockOnly] = useState(false);

  return (
    <>
      <SearchBar filterText={filterText} isStockOnly={isStockOnly}/>
      <ProductTable products={PRODUCTS} filterText={filterText} isStockOnly={isStockOnly}></ProductTable>
    </>
  )
}

export default FilterableProduectTable;
