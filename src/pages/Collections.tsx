// import React from 'react'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Filter from "../components/Filter"
import ProductCard from "../components/ProductCard"
import NoItem from "../components/ui/NoItem"
import ProductSkeleton from "../components/ui/ProductSkeleton"
import useFetch from "../hooks/useFetch"

const Collections = () => {
  const { category } = useParams()

  let heading = category
  let url = "/products/filterdProducts?subCategory=";

  switch (category) {
    case "mens":
      heading = "Monkey Man"
      url += "men";
      break
    case "womens":
      heading = "Monkey Women"
      url += "women";
      break
    case "rich-collection":
      heading = "Rich Collection"
      url += "customized";
      break
    default:
      heading = "All Products"
      url = "/products"
      break
  }




  const { data, error, loading }: { data: ProductType[], error: any, loading: boolean } = useFetch(url);
  const [filterCategory, setFilterCategory] = useState<string[] | null>(null)
  const [filterData, setFilterData] = useState<ProductType[] | null>(null)

  useEffect(() => {
    if (!error && !loading && !filterCategory || filterCategory?.length == 0) {
      setFilterData(data)
      return;
    }

    if (!error && filterCategory != null) {
      let finalData = data.filter((product) => (
        filterCategory.includes(product.category)
      ))
      setFilterData(finalData)

    }

  }, [loading, filterCategory, category, data])

  return (


      <div className="mb-28">
        <h1 className="text-4xl text-center my-10">
          {heading}
        </h1>
        <div className="p-0 lg:px-4">
          <div className="flex justify-center items-center">
            <Filter setFilterCategory={setFilterCategory} filterCategory={filterCategory} />
          </div>

        </div>

        <br></br>
        <section className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-5 my-2">
          {loading && Array.from({ length: 10 }).map((_, i) => (
            <ProductSkeleton key={i} />
          ))}
          {
            !loading && !error && filterData && filterData?.length > 0 && filterData?.map((item, i) => (
              <ProductCard key={i} imgUrl={item.image} data={item} />
            ))
          }
        </section>
        {
          !loading && error && <NoItem />
        }


    </div>
  )
}

export default Collections

