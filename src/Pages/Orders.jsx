import Header from '../components/Header'
import Place from '../components/OrderPlace'
import Addto from '../components/AddTo'
import React from 'react'
import products from '../data/products'
function Orders() {
  const sets = [
    {
      id:products[0].id,
      date: "August 12",
      currency: "$"+products[0].priceCents*0.01,
      code: "27cba69d-4c3d-4098-b42d-ac7fa62b7664",
      collection:"August"
    },
    {
      id:products[1].id,
      date: "June 10",
      currency: "$"+products[1].priceCents*0.01,
      code: "b6b6c212-d30e-4d4a-805d-90b52ce6b37d",
      collection:"June"
    }
  ]

  const add = [
    {
      id:products[0].id,
      desc:products[0].name,
      date: "August 15",
      quan: 1,
      img:products[0].image,
      collection: "August"
    },
    {
      id:products[2],
      desc: products[2].name,
      date: "August 19",
      quan: 3,
      img:products[2].image,
      collection: "August"
    },
    {
       id:products[1],
      desc: products[1].name,
      date: "June 10",
      quan: 2,
      img:products[1].image,
      collection: "June"
    }
  ]

  return (
    <>
      <Header />
      <p className="text-5xl flex justify-center pt-[60px] font-bold w-[52vw]">
        Your Orders
      </p>

      <div className="flex flex-col w-[57vw] m-[40px] mx-auto mt-[40px] pr-[2px]">
        {sets.map((item) => (
          <React.Fragment key={item.id} className="border-b-[1px] border-b-[rgb(0,0,0)]">
            <Place
              currency={item.currency}
              code={item.code}
              date={item.date}
            />
            {add
              .filter(addItem => addItem.collection === item.collection)
              .map(addItem => (
                <Addto
                  key={addItem.id}
                  desc={addItem.desc}
                  img={addItem.img}
                  quan={addItem.quan}
                  date={addItem.date}
                />
              ))}
          </React.Fragment>
        ))}
      </div>
    </>
  )
}

export default Orders
