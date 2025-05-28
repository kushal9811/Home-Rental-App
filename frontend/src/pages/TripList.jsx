import React, { useEffect } from "react"
import Navbar from "../components/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { setTripList } from "../redux/slice/userSlice"
import ListingCard from "../components/ListingCard"

const API_BASE = import.meta.env.VITE_API_BASE_URL;

const TripList = () => {
  const userId = useSelector((state) => state?.user?.user?._id)
  //   console.log(userId)

  const tripList = useSelector((state) => state?.user?.user?.tripList)

  console.log(tripList)

  const dispatch = useDispatch()

  const getTripList = async () => {
    try {
      const response = await fetch(
        `${API_BASE}/user/${userId}/trips`,
        { method: "GET" }
      )

      const data = await response.json()

      dispatch(setTripList(data))
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getTripList()
  }, [])

  return (
    <>
      <Navbar />

      <h1 className="text-2xl font-bold text-slate-700 my-10 mx-[100px] sm:mx-12">
        Your Trip List
      </h1>

      <div className="px-24 pb-28 flex justify-center flex-wrap gap-6">
        {tripList?.map(
          ({
            listingId,
            hostId,
            startDate,
            endDate,
            totalPrice,
            booking = true,
          }) => (
            <ListingCard
              listingId={listingId?._id}
              creator={hostId?._id}
              listingPhotoPaths={listingId?.listingPhotoPaths}
              city={listingId?.city}
              state={listingId?.state}
              country={listingId?.country}
              category={listingId?.category}
              startDate={startDate}
              endDate={endDate}
              totalPrice={totalPrice}
              booking={booking}
            />
          )
        )}
      </div>
    </>
  )
}

export default TripList
