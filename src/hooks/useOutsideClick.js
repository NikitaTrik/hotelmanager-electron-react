import {useEffect, useRef} from "react";

export function useOutsideClick(elementRef, attached, handler){
	const isFirstRun = useRef(true);
	useEffect(() => {
			if (isFirstRun.current){
				console.log('First')
				isFirstRun.current = false;
				return;
			}
			if (!attached) return;
			const handleClick = (e) => {
				if (!elementRef.current) return;
				if (!elementRef.current.contains(e.target) && !(e.target.alt === "menu")){
					handler()
				}
			}
			
			document.addEventListener("click", handleClick);
			
			return () => {
				document.removeEventListener("click", handleClick);
			}
		
	}, [elementRef, attached, handler])
}