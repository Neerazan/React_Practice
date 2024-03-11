import React, { useState } from "react"
import { useEffect } from "react"
import { useLoaderData } from "react-router-dom"

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState(0)

    // useEffect(() => {
    //     fetch("https://api.github.com/users/neerazan")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setData(data)
    //         }, [])
    // })

    return (
        <div className="text-center m-4 bg-gray-600 text-xl text-white">
            Github followers:{data.followers}
            <img src={data.avatar_url} alt="Github profile image" width={300} />
        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    response = await fetch("https://api.github.com/users/neerazan")
    return response.json()
}
