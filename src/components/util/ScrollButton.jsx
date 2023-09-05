import React, {useState} from 'react'
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

const ScrollButton = () => {
	const [visible, setVisible] = useState(false)

	const handleScrollBtn = () => {
		const scrolled = document.documentElement.scrollTop;
    	if (scrolled > 300){
      		setVisible(true)
    	} else if (scrolled <= 300){
      		setVisible(false)
    	}
	}

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		})
	}

	window.addEventListener('scroll', handleScrollBtn)

	return <button onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}} className='scroll_button'><KeyboardDoubleArrowUpIcon /> Top</button>;
};

export default ScrollButton;