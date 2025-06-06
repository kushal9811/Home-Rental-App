import React, { useEffect } from "react"
import Navbar from "../components/Navbar"
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { setListings } from "../redux/slice/listingSlice"
import ListingCard from "../components/ListingCard"

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const SearchPage = () => {
  const { search } = useParams()

  const listings = useSelector((state) => state.listings.listings)

  //   console.log(listings)

  const dispatch = useDispatch()

  const getSearchListings = async () => {
    try {
      const response = await fetch(
        `${API_BASE}/listing/search/${search}`,
        { method: "GET" }
      )

      const data = await response.json()

      dispatch(setListings({ listings: data }))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getSearchListings()
  }, [search])

  return (
    <>
      <Navbar />

      <h1 className="text-2xl font-bold text-slate-700 my-10 mx-[100px] sm:mx-12">
        Search results for: {search}
      </h1>

      <div className="px-24 pb-28 flex justify-center flex-wrap gap-6">
        {listings?.map(
          ({
            _id,
            creator,
            listingPhotoPaths,
            city,
            state,
            country,
            category,
            type,
            price,
            booking = false,
          }) => (
            <ListingCard
              listingId={_id}
              creator={creator}
              listingPhotoPaths={listingPhotoPaths}
              city={city}
              state={state}
              country={country}
              category={category}
              type={type}
              price={price}
              booking={booking}
            />
          )
        )}
      </div>
    </>
  )
}

export default SearchPage
