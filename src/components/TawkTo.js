import React, { useEffect } from 'react';

const TawkTo = () => {
    useEffect(() => {
        // Load Tawk.to script
        const s1 = document.createElement("script");
        const s0 = document.getElementsByTagName("script")[0];
        s1.async = true;
        // s1.src = 'https://embed.tawk.to/YOUR_WIDGET_ID/default';
        // s1.src='https://embed.tawk.to/67cdb7accd50b1190f4fdf4d/1iltpaurm';
        s1.src='https://embed.tawk.to/67d8086b275596190d464b07/1imhu1po4';
        s1.charset = 'UTF-8';
        s1.setAttribute('crossorigin', '*');
        s0.parentNode.insertBefore(s1, s0);

        // Cleanup function to remove the script when the component unmounts
        return () => {
            s1.remove();
        };
    }, []);

    return null; // This component doesn't render anything
};

export default TawkTo;