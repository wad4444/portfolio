import { SectionName, useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export function useSectionInView(section: SectionName, threshold = 0.75) {
    const { ref, inView } = useInView({
        threshold,
      });

    const { setSection, timeOfLastClick } = useActiveSectionContext();

    useEffect(() => {
        if (inView && Date.now() - timeOfLastClick > 0.5) {
            setSection(section);
        }
    }, [inView, section, setSection, timeOfLastClick])

    return {
        ref,
    }
}