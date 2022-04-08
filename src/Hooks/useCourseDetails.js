import { useEffect, useState } from "react"

const useCourseDetails = () => {
    const [languages, setLanguages] = useState([]);
    useEffect(() => {
        fetch('../fakeData.json')
            .then(res => res.json())
            .then(data => setLanguages(data))
    }, []);
    return languages;
}

export default useCourseDetails;