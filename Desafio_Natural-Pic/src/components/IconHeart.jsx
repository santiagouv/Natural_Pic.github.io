const IconHeart = ( {relleno} ) => {
  return (
    <>
        <svg
            width="35px"
            viewBox="0 0 24 24"
        >
        <path
            fill={relleno ? "red" : "white"}
            d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        />
        </svg>
    </>
  )
}

export default IconHeart