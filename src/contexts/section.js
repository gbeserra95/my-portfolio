import { createContext } from "react"
import { useInView } from "react-intersection-observer"

export const SectionContext = createContext([])

export function SectionProvider({ children }) {
    const [homeRef, homeRefInView, homeEntry] = useInView({threshold: 0.5, trackVisibility: true, delay: 500})
    const [aboutRef, aboutRefInView, aboutEntry] = useInView({threshold: 0.5, trackVisibility: true, delay: 500})
    const [portfolioRef, portfolioRefInView, portfolioEntry] = useInView({threshold: 0.15, trackVisibility: true, delay: 500})
    const [contactRef, contactRefInView, contactEntry] = useInView({threshold: 0.45, trackVisibility: true, delay: 500})
    const [footerRef, footerRefInView, footerEntry] = useInView({threshold: 0, trackVisibility: true, delay: 500})

    return(
        <SectionContext.Provider
            value={{
                homeRef,
                homeRefInView,
                homeEntry,
                aboutRef,
                aboutRefInView,
                aboutEntry,
                portfolioRef,
                portfolioRefInView,
                portfolioEntry,
                contactRef,
                contactRefInView,
                contactEntry,
                footerRef,
                footerRefInView,
                footerEntry
            }}
        >
            {children}
        </SectionContext.Provider>
    )
}