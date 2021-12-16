import { useEffect, useState } from "react"

function Message() {
  const [message, setMessage] = useState([])

  // async function getMessage() {
  //   const response = await fetch(`${process.env.REACT_APP_API_URL}/api/card/`)
  //   const cardPost = await response.json()
  //   console.log(cardPost);
  // //   setMessage(cardPost)
  // }
  // useEffect(() => {
    
    // }, [])
    //   getMessage()

  return (
    <div>
      {/* {cardPost.map((e) => {
        return <p key={e.id}>
          {e.id}
        </p>
      })} */}
      страница в разработкеqqqqq
    </div>
  )
}

export default Message
